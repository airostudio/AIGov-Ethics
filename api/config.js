/**
 * Public Runtime Config API
 * Vercel Serverless Function
 *
 * Exposes non-secret, publishable configuration values to the static frontend
 * at runtime, since this is a plain static site with no build-time templating.
 *
 * Environment Variables Required (set in Vercel):
 * - STRIPE_PUBLISHABLE_KEY: Your Stripe publishable key (safe to expose to clients)
 */

module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Cache at the edge/browser for a short period - this rarely changes
    res.setHeader('Cache-Control', 'public, max-age=300');

    return res.status(200).json({
        stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || null
    });
};
