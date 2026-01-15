-- ============================================
-- AI Governance & Ethics Academy
-- Supabase Database Schema
-- ============================================
--
-- Instructions:
-- 1. Create a new Supabase project at https://supabase.com
-- 2. Go to the SQL Editor in your Supabase dashboard
-- 3. Run this entire script to create all tables and policies
-- 4. Copy your project URL and anon key to js/config.js
--

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- USER PROFILES
-- ============================================
-- Extended user profile data (Supabase Auth handles basic auth)

CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT,
    role TEXT CHECK (role IN ('it_professional', 'line_manager', 'policy_advisor', 'other')),
    organization TEXT,
    department TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Policies for profiles
CREATE POLICY "Users can view own profile" ON public.profiles
    FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

-- Trigger to create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, role)
    VALUES (
        NEW.id,
        NEW.raw_user_meta_data->>'name',
        NEW.raw_user_meta_data->>'role'
    );
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- USER PROGRESS
-- ============================================
-- Tracks user progress through courses

CREATE TABLE IF NOT EXISTS public.user_progress (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    progress_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    UNIQUE(user_id)
);

-- Enable Row Level Security
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Policies for user_progress
CREATE POLICY "Users can view own progress" ON public.user_progress
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update own progress" ON public.user_progress
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own progress" ON public.user_progress
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================
-- ASSESSMENT RESULTS
-- ============================================
-- Stores assessment/quiz results

CREATE TABLE IF NOT EXISTS public.assessment_results (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subcourse_id TEXT NOT NULL,
    score INTEGER NOT NULL,
    max_score INTEGER NOT NULL,
    passed BOOLEAN NOT NULL,
    answers JSONB DEFAULT '{}'::jsonb,
    attempt_number INTEGER DEFAULT 1,
    completed_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_assessment_results_user ON public.assessment_results(user_id);
CREATE INDEX idx_assessment_results_subcourse ON public.assessment_results(subcourse_id);

-- Enable Row Level Security
ALTER TABLE public.assessment_results ENABLE ROW LEVEL SECURITY;

-- Policies for assessment_results
CREATE POLICY "Users can view own results" ON public.assessment_results
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own results" ON public.assessment_results
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============================================
-- CERTIFICATES
-- ============================================
-- Stores earned certificates

CREATE TABLE IF NOT EXISTS public.certificates (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    course_id TEXT NOT NULL,
    certificate_number TEXT UNIQUE NOT NULL,
    issued_at TIMESTAMPTZ DEFAULT NOW(),
    pdf_url TEXT
);

-- Index for faster queries
CREATE INDEX idx_certificates_user ON public.certificates(user_id);
CREATE INDEX idx_certificates_number ON public.certificates(certificate_number);

-- Enable Row Level Security
ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

-- Policies for certificates
CREATE POLICY "Users can view own certificates" ON public.certificates
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Public can verify certificates" ON public.certificates
    FOR SELECT USING (true);

-- ============================================
-- BOOKMARKS / NOTES
-- ============================================
-- User bookmarks and notes on content

CREATE TABLE IF NOT EXISTS public.user_notes (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    subcourse_id TEXT NOT NULL,
    section_title TEXT,
    note_text TEXT,
    is_bookmark BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_user_notes_user ON public.user_notes(user_id);
CREATE INDEX idx_user_notes_subcourse ON public.user_notes(subcourse_id);

-- Enable Row Level Security
ALTER TABLE public.user_notes ENABLE ROW LEVEL SECURITY;

-- Policies for user_notes
CREATE POLICY "Users can manage own notes" ON public.user_notes
    FOR ALL USING (auth.uid() = user_id);

-- ============================================
-- FEEDBACK
-- ============================================
-- User feedback on courses

CREATE TABLE IF NOT EXISTS public.feedback (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    subcourse_id TEXT,
    feedback_type TEXT CHECK (feedback_type IN ('content', 'bug', 'suggestion', 'other')),
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    comment TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;

-- Policies for feedback
CREATE POLICY "Users can submit feedback" ON public.feedback
    FOR INSERT WITH CHECK (auth.uid() = user_id OR user_id IS NULL);

CREATE POLICY "Users can view own feedback" ON public.feedback
    FOR SELECT USING (auth.uid() = user_id);

-- ============================================
-- ANALYTICS (Optional - for admin use)
-- ============================================
-- Track page views and engagement

CREATE TABLE IF NOT EXISTS public.analytics_events (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    event_type TEXT NOT NULL,
    event_data JSONB DEFAULT '{}'::jsonb,
    page_path TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_analytics_events_type ON public.analytics_events(event_type);
CREATE INDEX idx_analytics_events_date ON public.analytics_events(created_at);

-- Enable Row Level Security
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Policy - only allow inserts, admin-only reads
CREATE POLICY "Anyone can log events" ON public.analytics_events
    FOR INSERT WITH CHECK (true);

-- ============================================
-- HELPER FUNCTIONS
-- ============================================

-- Function to generate certificate number
CREATE OR REPLACE FUNCTION generate_certificate_number()
RETURNS TEXT AS $$
DECLARE
    prefix TEXT := 'AIGOV';
    year_part TEXT := TO_CHAR(NOW(), 'YY');
    random_part TEXT := LPAD(FLOOR(RANDOM() * 100000)::TEXT, 5, '0');
BEGIN
    RETURN prefix || '-' || year_part || '-' || random_part;
END;
$$ LANGUAGE plpgsql;

-- Function to update timestamps
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply updated_at trigger to relevant tables
CREATE TRIGGER update_profiles_updated_at
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_user_progress_updated_at
    BEFORE UPDATE ON public.user_progress
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER update_user_notes_updated_at
    BEFORE UPDATE ON public.user_notes
    FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================
-- SAMPLE DATA (Optional - for testing)
-- ============================================
-- Uncomment to add sample data for testing

/*
-- Note: This requires a user to be signed up first
-- Replace 'your-user-id-here' with an actual user ID

INSERT INTO public.user_progress (user_id, progress_data) VALUES
(
    'your-user-id-here',
    '{
        "course-1-1": {"completed": true, "completedAt": "2025-01-01T10:00:00Z"},
        "course-1-2": {"completed": true, "completedAt": "2025-01-02T14:30:00Z"},
        "course-1-3": {"viewed": true, "viewedAt": "2025-01-03T09:15:00Z"}
    }'::jsonb
);
*/

-- ============================================
-- VIEWS (Optional - for reporting)
-- ============================================

-- View for course completion stats
CREATE OR REPLACE VIEW public.course_completion_stats AS
SELECT
    DATE_TRUNC('month', created_at) AS month,
    COUNT(DISTINCT user_id) AS unique_users,
    COUNT(*) AS total_progress_updates
FROM public.user_progress
GROUP BY DATE_TRUNC('month', created_at)
ORDER BY month DESC;

-- Grant access to authenticated users
GRANT SELECT ON public.course_completion_stats TO authenticated;

-- ============================================
-- SETUP COMPLETE
-- ============================================
--
-- After running this script:
-- 1. Go to Authentication > Settings in Supabase dashboard
-- 2. Configure your email settings for auth emails
-- 3. Copy your project URL and anon key
-- 4. Update js/config.js with your credentials
-- 5. Test by creating a new user account
--
