/**
 * AI Governance & Ethics Academy
 * Pricing Tiers Configuration
 *
 * Stripe integration for one-time payments
 */

const PRICING_TIERS = {
    tiers: [
        {
            id: 'tier-foundation',
            name: 'Foundation',
            level: 1,
            price: 599,
            currency: 'USD',
            description: 'Essential AI governance fundamentals for beginners',
            courses: ['course-1'],
            features: [
                'AI Governance Foundations course',
                'Certificate of completion',
                'Downloadable resources',
                'Self-paced learning',
                '12-month access'
            ],
            stripePriceId: 'price_foundation', // Set via Stripe Dashboard
            popular: false
        },
        {
            id: 'tier-intermediate',
            name: 'Intermediate',
            level: 2,
            price: 1999,
            currency: 'USD',
            description: 'Technical ethics and safety for IT professionals',
            courses: ['course-1', 'course-2'],
            features: [
                'All Foundation content',
                'Technical AI Ethics & Safety course',
                'Hands-on case studies',
                'Progress tracking',
                '18-month access'
            ],
            stripePriceId: 'price_intermediate',
            popular: false
        },
        {
            id: 'tier-advanced',
            name: 'Advanced',
            level: 3,
            price: 4999,
            currency: 'USD',
            description: 'Regulatory compliance and risk management expertise',
            courses: ['course-1', 'course-2', 'course-3'],
            features: [
                'All Intermediate content',
                'Regulatory Compliance & Risk Management course',
                'EU AI Act deep dive',
                'NIST AI RMF frameworks',
                '24-month access'
            ],
            stripePriceId: 'price_advanced',
            popular: true
        },
        {
            id: 'tier-professional',
            name: 'Professional',
            level: 4,
            price: 9999,
            currency: 'USD',
            description: 'Complete implementation and operations training',
            courses: ['course-1', 'course-2', 'course-3', 'course-4'],
            features: [
                'All Advanced content',
                'AI Implementation & Operations course',
                'MLOps governance frameworks',
                'Incident response planning',
                'Lifetime access'
            ],
            stripePriceId: 'price_professional',
            popular: false
        },
        {
            id: 'tier-executive',
            name: 'Executive',
            level: 5,
            price: 16500,
            currency: 'USD',
            description: 'Strategic leadership for senior government officials',
            courses: ['course-1', 'course-2', 'course-3', 'course-4', 'course-5'],
            features: [
                'All Professional content',
                'Strategic Leadership & Governance course',
                'Board-level AI governance',
                'National AI strategy frameworks',
                'Priority support',
                'Lifetime access'
            ],
            stripePriceId: 'price_executive',
            popular: false
        }
    ],

    // Get tier by ID
    getTier(tierId) {
        return this.tiers.find(t => t.id === tierId);
    },

    // Get tier by level
    getTierByLevel(level) {
        return this.tiers.find(t => t.level === level);
    },

    // Check if user has access to a course
    hasAccess(userTierLevel, courseId) {
        if (!userTierLevel) return false;
        const userTier = this.getTierByLevel(userTierLevel);
        if (!userTier) return false;
        return userTier.courses.includes(courseId);
    },

    // Get accessible courses for a tier level
    getAccessibleCourses(tierLevel) {
        const tier = this.getTierByLevel(tierLevel);
        return tier ? tier.courses : [];
    },

    // Format price for display
    formatPrice(price) {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    }
};

// Stripe checkout configuration
const STRIPE_CONFIG = {
    // These will be populated from environment variables via Vercel
    publishableKey: null, // Set from STRIPE_PUBLISHABLE_KEY env var

    // Initialize Stripe
    async init() {
        // In production, this would be injected by the server
        // For now, we check if it's available globally
        if (typeof Stripe !== 'undefined' && this.publishableKey) {
            this.stripe = Stripe(this.publishableKey);
            return true;
        }
        return false;
    },

    // Create checkout session (calls backend API)
    async createCheckoutSession(tierId, userEmail) {
        try {
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tierId,
                    userEmail,
                    successUrl: `${window.location.origin}/?page=dashboard&payment=success`,
                    cancelUrl: `${window.location.origin}/?page=pricing&payment=cancelled`
                })
            });

            if (!response.ok) {
                throw new Error('Failed to create checkout session');
            }

            const { sessionId } = await response.json();
            return sessionId;
        } catch (error) {
            console.error('Checkout session error:', error);
            throw error;
        }
    },

    // Redirect to Stripe Checkout
    async redirectToCheckout(tierId, userEmail) {
        try {
            const sessionId = await this.createCheckoutSession(tierId, userEmail);

            if (this.stripe) {
                const { error } = await this.stripe.redirectToCheckout({ sessionId });
                if (error) {
                    throw error;
                }
            } else {
                throw new Error('Stripe not initialized');
            }
        } catch (error) {
            console.error('Redirect to checkout failed:', error);
            throw error;
        }
    }
};

// Make available globally
if (typeof window !== 'undefined') {
    window.PRICING_TIERS = PRICING_TIERS;
    window.STRIPE_CONFIG = STRIPE_CONFIG;
}
