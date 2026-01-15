/**
 * AI Governance & Ethics Academy
 * Configuration File
 *
 * Replace with your actual Supabase credentials
 */

const CONFIG = {
    // Supabase Configuration
    // Replace these with your actual Supabase project credentials
    supabase: {
        url: 'YOUR_SUPABASE_URL',  // e.g., 'https://xxxxx.supabase.co'
        anonKey: 'YOUR_SUPABASE_ANON_KEY'  // Your project's anon/public key
    },

    // Application Settings
    app: {
        name: 'AI Governance & Ethics Academy',
        version: '1.0.0',
        environment: 'development'  // 'development' | 'production'
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
