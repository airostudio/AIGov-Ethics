/**
 * AI Governance & Ethics Academy
 * Configuration File
 *
 * Replace with your actual Supabase credentials
 *
 * Note: the Supabase URL and anon/publishable key below are meant to be public -
 * they are the intended client access path and are safe to commit as long as every
 * table's Row Level Security policies (see database/schema.sql) are deployed to this
 * exact project. Never put the Supabase service role key or Stripe secret key here;
 * those belong only in server-side environment variables (see api/*.js).
 */

const CONFIG = {
    // Supabase Configuration
    // Replace these with your actual Supabase project credentials
    supabase: {
        url: 'https://towjjlbwnamvmexeyvtp.supabase.co',  // e.g., 'https://xxxxx.supabase.co'
        anonKey: 'sb_publishable_OHXiIG8jMb3SBnLtZsX3XA_tU9HqnZQ'  // Your project's anon/public key
    },

    // Application Settings
    app: {
        name: 'AI Governance & Ethics Academy',
        version: '1.0.0',
        environment: 'production'  // 'development' | 'production'
    },

    // Feature Flags
    features: {
        enableAuth: true,
        enableProgress: true,
        enableCertificates: true,
        enableAssessments: true,
        debugMode: false
    },

    // Assessment Settings
    assessment: {
        passingScore: 70,
        maxAttempts: 3,
        showCorrectAnswers: true
    },

    // Progress Tracking
    progress: {
        autoSave: true,
        saveInterval: 30000  // milliseconds
    }
};

// Initialize Supabase client (if credentials are configured)
let supabase = null;

function initSupabase() {
    if (CONFIG.supabase.url !== 'YOUR_SUPABASE_URL' &&
        CONFIG.supabase.anonKey !== 'YOUR_SUPABASE_ANON_KEY') {
        try {
            supabase = window.supabase.createClient(
                CONFIG.supabase.url,
                CONFIG.supabase.anonKey
            );
            console.log('Supabase initialized successfully');
            return true;
        } catch (error) {
            console.error('Failed to initialize Supabase:', error);
            return false;
        }
    } else {
        console.warn('Supabase credentials not configured. Running in demo mode.');
        return false;
    }
}

// Demo mode storage (used when Supabase is not configured)
const demoStorage = {
    user: null,
    progress: {},
    assessments: {}
};

// Make available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
    window.initSupabase = initSupabase;
    window.demoStorage = demoStorage;
}
