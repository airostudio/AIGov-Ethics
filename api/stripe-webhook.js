/**
 * Stripe Webhook Handler
 * Vercel Serverless Function
 *
 * Handles successful payments and updates user tier in Supabase
 *
 * Environment Variables Required:
 * - STRIPE_SECRET_KEY: Your Stripe secret key
 * - STRIPE_WEBHOOK_SECRET: Webhook signing secret from Stripe
 * - SUPABASE_URL: Your Supabase project URL
 * - SUPABASE_SERVICE_KEY: Supabase service role key (for admin operations)
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

// Initialize Supabase with service role key for admin access
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
);

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const sig = req.headers['stripe-signature'];
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;

    try {
        // Verify webhook signature. This MUST read the raw, unparsed request body -
        // do not access req.body anywhere before this, as Vercel's Node runtime lazily
        // parses (and consumes) the stream the first time req.body is touched, which
        // would leave nothing here for getRawBody() to read and break signature verification.
        const rawBody = await getRawBody(req);
        event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
    } catch (err) {
        console.error('Webhook signature verification failed:', err.message);
        return res.status(400).json({ error: `Webhook Error: ${err.message}` });
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed': {
            const session = event.data.object;
            await handleSuccessfulPayment(session);
            break;
        }
        case 'payment_intent.succeeded': {
            const paymentIntent = event.data.object;
            console.log('Payment succeeded:', paymentIntent.id);
            break;
        }
        default:
            console.log(`Unhandled event type: ${event.type}`);
    }

    return res.status(200).json({ received: true });
};

async function handleSuccessfulPayment(session) {
    const { tierId, tierLevel, tierName, userEmail } = session.metadata;

    console.log(`Processing payment for ${userEmail}, tier: ${tierName}`);

    try {
        // Find or create user profile
        let { data: profile, error: fetchError } = await supabase
            .from('profiles')
            .select('*')
            .eq('email', userEmail)
            .single();

        if (fetchError && fetchError.code !== 'PGRST116') {
            console.error('Error fetching profile:', fetchError);
            throw fetchError;
        }

        const now = new Date().toISOString();
        const tierData = {
            tier_id: tierId,
            tier_level: parseInt(tierLevel),
            tier_name: tierName,
            payment_id: session.payment_intent,
            payment_amount: session.amount_total / 100,
            payment_date: now,
            updated_at: now
        };

        if (profile) {
            // Update existing profile
            const { error: updateError } = await supabase
                .from('profiles')
                .update(tierData)
                .eq('email', userEmail);

            if (updateError) {
                console.error('Error updating profile:', updateError);
                throw updateError;
            }
        } else {
            // No account exists yet for this email. profiles.id is the Supabase auth
            // user's UUID with no default, so we cannot create a row here - it can only
            // be created once the customer signs up. The purchases insert below is the
            // durable record of this entitlement; the handle_new_user() trigger in
            // schema.sql looks up purchases by email and applies the tier automatically
            // when the account is created.
            console.log(`No existing account for ${userEmail} - entitlement will be applied on signup via purchases record`);
        }

        // Log the purchase
        await supabase
            .from('purchases')
            .insert({
                email: userEmail,
                tier_id: tierId,
                tier_level: parseInt(tierLevel),
                amount: session.amount_total / 100,
                currency: session.currency.toUpperCase(),
                stripe_session_id: session.id,
                stripe_payment_intent: session.payment_intent,
                status: 'completed',
                created_at: now
            });

        console.log(`Successfully updated tier for ${userEmail} to ${tierName}`);
    } catch (error) {
        console.error('Error handling successful payment:', error);
        throw error;
    }
}

// Helper to get raw body for signature verification
async function getRawBody(req) {
    return new Promise((resolve, reject) => {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            resolve(data);
        });
        req.on('error', reject);
    });
}
