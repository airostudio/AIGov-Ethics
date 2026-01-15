/**
 * Stripe Checkout Session API
 * Vercel Serverless Function
 *
 * Environment Variables Required (set in Vercel):
 * - STRIPE_SECRET_KEY: Your Stripe secret key
 * - STRIPE_PRICE_FOUNDATION: Price ID for Foundation tier
 * - STRIPE_PRICE_INTERMEDIATE: Price ID for Intermediate tier
 * - STRIPE_PRICE_ADVANCED: Price ID for Advanced tier
 * - STRIPE_PRICE_PROFESSIONAL: Price ID for Professional tier
 * - STRIPE_PRICE_EXECUTIVE: Price ID for Executive tier
 */

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Tier to Stripe Price ID mapping
const TIER_PRICES = {
    'tier-foundation': process.env.STRIPE_PRICE_FOUNDATION,
    'tier-intermediate': process.env.STRIPE_PRICE_INTERMEDIATE,
    'tier-advanced': process.env.STRIPE_PRICE_ADVANCED,
    'tier-professional': process.env.STRIPE_PRICE_PROFESSIONAL,
    'tier-executive': process.env.STRIPE_PRICE_EXECUTIVE
};

// Tier metadata for storing with payment
const TIER_METADATA = {
    'tier-foundation': { level: 1, name: 'Foundation' },
    'tier-intermediate': { level: 2, name: 'Intermediate' },
    'tier-advanced': { level: 3, name: 'Advanced' },
    'tier-professional': { level: 4, name: 'Professional' },
    'tier-executive': { level: 5, name: 'Executive' }
};

module.exports = async (req, res) => {
    // CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { tierId, userEmail, successUrl, cancelUrl } = req.body;

        // Validate tier
        if (!tierId || !TIER_PRICES[tierId]) {
            return res.status(400).json({ error: 'Invalid tier selected' });
        }

        const priceId = TIER_PRICES[tierId];
        const metadata = TIER_METADATA[tierId];

        if (!priceId) {
            return res.status(500).json({ error: 'Price not configured for this tier' });
        }

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment', // One-time payment
            customer_email: userEmail,
            line_items: [
                {
                    price: priceId,
                    quantity: 1
                }
            ],
            metadata: {
                tierId: tierId,
                tierLevel: metadata.level.toString(),
                tierName: metadata.name,
                userEmail: userEmail
            },
            success_url: successUrl || `${process.env.VERCEL_URL || 'http://localhost:3000'}/?page=dashboard&payment=success&session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: cancelUrl || `${process.env.VERCEL_URL || 'http://localhost:3000'}/?page=pricing&payment=cancelled`
        });

        return res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error('Stripe checkout error:', error);
        return res.status(500).json({ error: error.message });
    }
};
