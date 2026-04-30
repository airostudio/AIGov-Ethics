/**
 * AI Governance & Ethics Academy
 * Configuration File
 *
 * SECURITY: Do NOT commit real credentials here.
 * Supabase credentials should be injected at build/deploy time, e.g. via
 * Vercel environment variables and a build step that replaces these
 * placeholders, OR by serving config values from a lightweight API endpoint
 * that reads from server-side env vars.
 *
 * The anon key is a publishable key (safe for client-side use) but the
 * specific project URL + key pair should not be committed to source control
 * as it permanently couples this repo to a specific Supabase project and
 * makes credential rotation harder.
 */

const CONFIG = {
    // Supabase Configuration — replace placeholders before deployment.
    // In Vercel: set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY env vars
    // and inject them during the build step.
    supabase: {
        url: 'YOUR_SUPABASE_URL',       // e.g., 'https://xxxxx.supabase.co'
        anonKey: 'YOUR_SUPABASE_ANON_KEY'  // Your project's anon/public key
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
