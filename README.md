# AI Governance & Ethics Academy

A comprehensive, professional learning management platform for AI governance and ethics training, designed specifically for government IT professionals and line managers.

## Overview

This platform provides **5 main courses** with **30 sub-courses** covering everything from foundational AI concepts to strategic leadership in AI governance, plus two additional standalone courses derived directly from a published AI governance and model risk management text. The courseware is designed to be:

- **Comprehensive** - Covering the full spectrum from introduction to professional level
- **Factual** - Based on authoritative sources (EU AI Act, NIST AI RMF, OECD guidelines)
- **Practical** - Real-world case studies and actionable frameworks
- **Professional** - Suitable for government and enterprise environments

## Courses

### Course 1: AI Governance Foundations (Introductory)
- Understanding Artificial Intelligence
- Ethics in AI: Core Principles
- The Business Case for AI Governance
- Stakeholder Mapping for AI Projects
- Introduction to AI Risk Assessment
- Module Assessment & Certification

### Course 2: Technical AI Ethics & Safety (Intermediate)
- Understanding Algorithmic Bias
- Fairness Metrics & Measurement
- Explainability & Interpretability
- Privacy-Preserving AI
- Testing & Validation for AI
- Technical Assessment & Certification

### Course 3: Regulatory Compliance & Risk Management (Intermediate-Advanced)
- EU AI Act Deep Dive
- NIST AI Risk Management Framework
- Data Protection & AI
- Global Regulatory Landscape
- Compliance Documentation & Auditing
- Regulatory Assessment & Certification

### Course 4: AI Implementation & Operations (Advanced)
- AI Procurement & Vendor Management
- Human Oversight Design
- Monitoring & Performance Management
- Incident Response & Remediation
- Change Management & System Updates
- Operations Assessment & Certification

### Course 5: Strategic Leadership & Governance (Professional)
- Building AI Governance Structures
- Leading Ethical AI Culture
- Stakeholder Communication
- Strategic AI Risk Management
- Future of AI Governance
- Leadership Assessment & Certification

## Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Supabase (PostgreSQL + Auth + Storage)
- **Styling**: Custom CSS with CSS Variables for theming
- **Fonts**: Inter, Source Sans Pro (Google Fonts)

## Features

- Responsive design for desktop, tablet, and mobile
- User authentication and progress tracking
- Comprehensive assessment system with multiple question types
- Course navigation with progress indicators
- Demo mode for running without Supabase configuration
- Professional, accessible color scheme

## Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd AIGov-Ethics
```

### 2. Supabase Setup (Optional but Recommended)

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to SQL Editor and run the schema from `database/schema.sql`
4. Get your project URL and anon key from Project Settings > API

### 3. Configure the Application

Edit `js/config.js` and replace the placeholder values:

```javascript
const CONFIG = {
    supabase: {
        url: 'https://your-project.supabase.co',
        anonKey: 'your-anon-key-here'
    },
    // ... rest of config
};
```

### 4. Run the Application

You can serve the files using any static file server:

```bash
# Using Python
python -m http.server 8080

# Using Node.js (with http-server installed globally)
npx http-server

# Using PHP
php -S localhost:8080
```

Open `http://localhost:8080` in your browser.

### 5. Demo Mode

If you don't configure Supabase, the application runs in demo mode:
- All features work locally
- Progress is saved in localStorage
- User data is stored in memory (lost on refresh)

## File Structure

```
AIGov-Ethics/
├── index.html              # Main application HTML
├── css/
│   ├── main.css           # Core styles and layout
│   └── components.css     # Component-specific styles
├── js/
│   ├── config.js          # Configuration and Supabase setup
│   ├── courseData.js      # Course structure and content
│   ├── courseContent.js   # Extended course content
│   └── app.js             # Main application logic
├── database/
│   └── schema.sql         # Supabase database schema
├── assets/
│   ├── illustrations/     # SVG illustrations
│   └── images/hero/       # Hero slideshow photography
├── book-courses.html      # Standalone viewer for the book-based courses
├── js/
│   ├── book-course1-data.js  # Principles of AI Governance (13 chapters)
│   └── book-course2-data.js  # Model Risk Management (10 chapters)
├── api/                   # Vercel serverless functions (Stripe checkout/webhook, runtime config)
├── package.json           # Node dependencies for the api/ functions
└── README.md              # This file
```

## Database Schema

The application uses the following main tables:

- `profiles` - Extended user profile information
- `user_progress` - Course progress tracking (JSON)
- `assessment_results` - Quiz/assessment scores
- `certificates` - Earned certificates
- `user_notes` - User bookmarks and notes
- `feedback` - User feedback on content
- `analytics_events` - Usage analytics

All tables have Row Level Security (RLS) enabled for data protection.

## Customization

### Adding New Content

1. Edit `js/courseData.js` to add/modify course structure
2. Edit `js/courseContent.js` for detailed lesson content
3. Add assessments with the `assessment` property in course content

### Styling

- Edit CSS variables in `css/main.css` to change colors
- Modify component styles in `css/components.css`
- The color scheme uses trustworthy blues, professional teals, and accessible contrasts

### Assessment Configuration

In `js/config.js`:
```javascript
assessment: {
    passingScore: 70,        // Minimum % to pass
    maxAttempts: 3,          // Max quiz attempts
    showCorrectAnswers: true // Show answers after submission
}
```

## Authoritative Sources

Course content is based on:

- [EU AI Act](https://artificialintelligenceact.eu/) - European AI regulation
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework)
- [OECD AI Principles](https://oecd.ai/en/ai-principles)
- [US Blueprint for an AI Bill of Rights](https://www.whitehouse.gov/ostp/ai-bill-of-rights/)
- [ISO/IEC 42001](https://www.iso.org/standard/81230.html) - AI Management System Standard
- [AI Incident Database](https://incidentdatabase.ai/) - Documented AI failures

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

- WCAG 2.1 AA compliant color contrasts
- Semantic HTML structure
- Keyboard navigation support
- Screen reader friendly

## License

Educational content for government professionals. Contact for commercial licensing.

## Support

For issues and feature requests, please open an issue in the repository.

---

Built for responsible AI governance in the public sector.
