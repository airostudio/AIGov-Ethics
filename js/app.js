/**
 * AI Governance & Ethics Academy
 * Main Application JavaScript
 */

// Application State
const appState = {
    currentPage: 'home',
    currentCourse: null,
    currentSubcourse: null,
    currentLesson: null,
    user: null,
    userTier: null, // User's purchased tier level (1-5)
    progress: {},
    isSupabaseConnected: false
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Supabase
    appState.isSupabaseConnected = initSupabase();

    // Check for existing session and load user tier
    checkAuthState();
    loadUserTier();

    // Check for payment success/cancel from Stripe redirect
    checkPaymentSuccess();

    // Setup event listeners
    setupNavigation();
    setupMobileMenu();
    setupAuthForms();
    setupUserDropdown();

    // Load initial content (overview only on home page)
    loadCoursesPreview();

    // Handle browser back/forward
    window.addEventListener('popstate', handlePopState);

    // Check URL params for initial page
    const urlParams = new URLSearchParams(window.location.search);
    const initialPage = urlParams.get('page');
    if (initialPage) {
        const params = {};
        urlParams.forEach((value, key) => {
            if (key !== 'page') params[key] = value;
        });
        navigateTo(initialPage, params);
    }

    console.log('AI Governance & Ethics Academy initialized');
});

// ============================================
// NAVIGATION
// ============================================

function setupNavigation() {
    // Main navigation links
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            if (page) {
                navigateTo(page);
            }
        });
    });

    // Logo click - go home
    document.querySelector('.logo')?.addEventListener('click', () => {
        navigateTo('home');
    });
}

function navigateTo(page, params = {}) {
    // Check if page requires auth
    const authRequiredPages = ['dashboard', 'profile', 'certificates', 'progress', 'courses'];
    if (authRequiredPages.includes(page) && !appState.user) {
        showAuthModal();
        return;
    }

    // Check course access - requires auth and purchased tier
    if ((page === 'course-detail' || page === 'lesson') && !appState.user) {
        showAuthModal();
        return;
    }

    // Check tier access for course content
    if (page === 'course-detail' && params.courseId) {
        if (!hasAccessToCourse(params.courseId)) {
            showAccessRestricted(params.courseId);
            return;
        }
    }

    if (page === 'lesson' && params.subcourseId) {
        const courseId = getCourseIdFromSubcourse(params.subcourseId);
        if (!hasAccessToCourse(courseId)) {
            showAccessRestricted(courseId);
            return;
        }
    }

    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

    // Update navigation
    document.querySelectorAll('.main-nav a').forEach(a => {
        a.classList.remove('active');
        if (a.dataset.page === page) {
            a.classList.add('active');
        }
    });

    // Show target page
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.add('active');
        appState.currentPage = page;
    }

    // Handle special pages
    switch (page) {
        case 'pricing':
            loadPricingPage();
            break;
        case 'courses':
            loadCoursesPage();
            break;
        case 'course-detail':
            if (params.courseId) {
                loadCourseDetail(params.courseId);
            }
            break;
        case 'lesson':
            if (params.subcourseId) {
                loadLesson(params.subcourseId);
            }
            break;
        case 'dashboard':
            loadDashboard();
            break;
        case 'profile':
            loadProfile();
            break;
        case 'certificates':
            loadCertificates();
            break;
        case 'progress':
            loadProgressDashboard();
            break;
    }

    // Update URL
    const url = new URL(window.location);
    url.searchParams.set('page', page);
    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.set(key, value);
    });
    window.history.pushState({ page, params }, '', url);

    // Scroll to top
    window.scrollTo(0, 0);

    // Close mobile menu if open
    document.querySelector('.main-nav')?.classList.remove('active');
    document.querySelector('.mobile-menu-toggle')?.classList.remove('active');
}

function handlePopState(event) {
    if (event.state) {
        navigateTo(event.state.page, event.state.params || {});
    }
}

// ============================================
// MOBILE MENU
// ============================================

function setupMobileMenu() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');

    toggle?.addEventListener('click', () => {
        nav.classList.toggle('active');
        toggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav?.contains(e.target) && !toggle?.contains(e.target)) {
            nav?.classList.remove('active');
            toggle?.classList.remove('active');
        }
    });
}

// ============================================
// USER DROPDOWN
// ============================================

function setupUserDropdown() {
    const toggle = document.getElementById('userDropdownToggle');
    const dropdown = document.getElementById('userDropdown');

    toggle?.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown?.classList.toggle('active');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
        if (!dropdown?.contains(e.target)) {
            dropdown?.classList.remove('active');
        }
    });
}

// ============================================
// COURSE LOADING & RENDERING
// ============================================

function loadCoursesPreview() {
    const container = document.getElementById('homeCoursesPreview');
    if (!container || !COURSE_DATA?.courses) return;

    // Show overview-only cards (no click to access - purchase required)
    const html = COURSE_DATA.courses.map(course => `
        <div class="pathway-course overview-only">
            <div class="pathway-node" style="border-color: ${course.color}">${course.number}</div>
            <div class="pathway-title">${course.title}</div>
            <div class="pathway-level">${course.level}</div>
            <div class="pathway-duration">${course.duration}</div>
        </div>
    `).join('');

    container.innerHTML = html;
}

function loadCoursesPage() {
    const container = document.getElementById('coursesContainer');
    if (!container || !COURSE_DATA?.courses) return;

    // Only show courses the user has access to
    const accessibleCourses = COURSE_DATA.courses.filter(course =>
        hasAccessToCourse(course.id)
    );

    if (accessibleCourses.length === 0) {
        container.innerHTML = `
            <div class="access-restricted">
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="20" width="32" height="24" rx="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 20V14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14V20" stroke="currentColor" stroke-width="2"/>
                    <circle cx="24" cy="32" r="3" fill="currentColor"/>
                </svg>
                <h3>No Courses Available</h3>
                <p>You haven't purchased any courses yet. Explore our pricing tiers to unlock comprehensive AI governance training.</p>
                <button class="btn btn-primary" onclick="navigateTo('pricing')">View Pricing</button>
            </div>
        `;
        return;
    }

    const html = accessibleCourses.map(course => renderCourseCard(course)).join('');
    container.innerHTML = html;
}

function renderCourseCard(course) {
    const objectives = course.objectives.slice(0, 4).map(obj =>
        `<li>${obj}</li>`
    ).join('');

    const subcourses = course.subcourses.map(sub => `
        <div class="subcourse-card" onclick="navigateTo('lesson', {subcourseId: '${sub.id}'})">
            <div class="subcourse-number">${sub.number}</div>
            <div class="subcourse-content">
                <h4>${sub.title}</h4>
                <p>${sub.description}</p>
                <div class="subcourse-meta">
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6V12L16 14"/>
                        </svg>
                        ${sub.duration}
                    </span>
                    <span>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                        </svg>
                        ${sub.lessons} lessons
                    </span>
                </div>
            </div>
        </div>
    `).join('');

    return `
        <div class="course-card" id="${course.id}">
            <div class="course-card-header">
                <div class="course-number" style="background: ${course.color}">${course.number}</div>
                <div class="course-card-header-content">
                    <div class="course-level-badge">${course.level}</div>
                    <h2>${course.title}</h2>
                    <p>${course.description}</p>
                </div>
            </div>
            <div class="course-card-body">
                <div class="course-objectives">
                    <h4>Learning Objectives</h4>
                    <ul>${objectives}</ul>
                </div>
                <div class="subcourses-section">
                    <h3>Sub-Courses (${course.subcourses.length} modules)</h3>
                    <div class="subcourses-grid">
                        ${subcourses}
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadCourseDetail(courseId) {
    const course = COURSE_DATA.courses.find(c => c.id === courseId);
    if (!course) {
        showToast('Course not found', 'error');
        return;
    }

    appState.currentCourse = course;

    const container = document.getElementById('courseDetailContent');
    if (!container) return;

    const subcoursesList = course.subcourses.map((sub, index) => {
        const isCompleted = appState.progress[sub.id]?.completed;
        return `
            <li class="module-nav-item">
                <div class="module-nav-link ${isCompleted ? 'completed' : ''}" onclick="navigateTo('lesson', {subcourseId: '${sub.id}'})">
                    <span class="nav-icon">${isCompleted ? '✓' : (index + 1)}</span>
                    <span>${sub.title}</span>
                </div>
            </li>
        `;
    }).join('');

    container.innerHTML = `
        <div class="course-detail-header">
            <div class="course-detail-icon" style="background: ${course.color}">
                ${getCourseIcon(course.icon)}
            </div>
            <div class="course-detail-info">
                <div class="course-level-badge">${course.level}</div>
                <h1>${course.title}</h1>
                <p>${course.description}</p>
                <div class="course-detail-meta">
                    <div class="meta-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6V12L16 14"/>
                        </svg>
                        <span>${course.duration}</span>
                    </div>
                    <div class="meta-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                        </svg>
                        <span>${course.lessons} lessons</span>
                    </div>
                    <div class="meta-item">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                        </svg>
                        <span>${course.subcourses.length} modules</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="course-detail-content">
            <div class="course-detail-main">
                <div class="lesson-content">
                    <h2>Course Overview</h2>
                    <p>${course.description}</p>

                    <h3>What You'll Learn</h3>
                    <ul>
                        ${course.objectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>

                    <h3>Who This Course Is For</h3>
                    <p>This course is designed for government IT professionals and line managers who need to understand and implement AI governance practices. Prior technical knowledge of AI is helpful but not required for introductory modules.</p>

                    <div class="info-box tip">
                        <div class="info-box-title">Getting Started</div>
                        <p>We recommend completing the modules in order, as each builds on concepts from previous sections. However, if you're already familiar with certain topics, feel free to skip ahead to more advanced modules.</p>
                    </div>
                </div>
            </div>

            <div class="course-detail-sidebar">
                <div class="module-navigation">
                    <div class="module-nav-header">
                        <h3>Course Modules</h3>
                        <p>${course.subcourses.length} sub-courses</p>
                    </div>
                    <ul class="module-nav-list">
                        ${subcoursesList}
                    </ul>
                </div>

                <div class="sidebar-card">
                    <h3>Course Details</h3>
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--text-muted);">Level</span>
                            <span>${course.level}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--text-muted);">Duration</span>
                            <span>${course.duration}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--text-muted);">Modules</span>
                            <span>${course.subcourses.length}</span>
                        </div>
                        <div style="display: flex; justify-content: space-between;">
                            <span style="color: var(--text-muted);">Lessons</span>
                            <span>${course.lessons}</span>
                        </div>
                    </div>
                </div>

                <button class="btn btn-primary btn-full" onclick="startCourse('${course.id}')">
                    Start Learning
                </button>
            </div>
        </div>
    `;
}

function startCourse(courseId) {
    const course = COURSE_DATA.courses.find(c => c.id === courseId);
    if (course && course.subcourses.length > 0) {
        navigateTo('lesson', { subcourseId: course.subcourses[0].id });
    }
}

// ============================================
// LESSON RENDERING
// ============================================

function loadLesson(subcourseId) {
    // Find the subcourse
    let subcourse = null;
    let parentCourse = null;

    for (const course of COURSE_DATA.courses) {
        const found = course.subcourses.find(s => s.id === subcourseId);
        if (found) {
            subcourse = found;
            parentCourse = course;
            break;
        }
    }

    if (!subcourse || !parentCourse) {
        showToast('Lesson not found', 'error');
        return;
    }

    appState.currentCourse = parentCourse;
    appState.currentSubcourse = subcourse;

    const container = document.getElementById('lessonContent');
    if (!container) return;

    // Build sidebar navigation
    const sidebarNav = parentCourse.subcourses.map((sub, index) => {
        const isActive = sub.id === subcourseId;
        const isCompleted = appState.progress[sub.id]?.completed;
        return `
            <li class="module-nav-item">
                <div class="module-nav-link ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}"
                     onclick="navigateTo('lesson', {subcourseId: '${sub.id}'})">
                    <span class="nav-icon">${isCompleted ? '✓' : (index + 1)}</span>
                    <span>${sub.title}</span>
                </div>
            </li>
        `;
    }).join('');

    // Build content
    let contentHtml = '';
    if (subcourse.content?.sections) {
        contentHtml = subcourse.content.sections.map(section => `
            <h2>${section.title}</h2>
            ${section.content}
        `).join('');
    } else {
        // Placeholder content for courses without detailed content yet
        contentHtml = `
            <h2>${subcourse.title}</h2>
            <p>${subcourse.description}</p>

            <div class="info-box important">
                <div class="info-box-title">Course Content</div>
                <p>This module contains ${subcourse.lessons} comprehensive lessons covering essential topics for government professionals.</p>
            </div>

            <h3>What You'll Learn</h3>
            <p>This sub-course provides in-depth coverage of ${subcourse.title.toLowerCase()}, with practical examples and real-world applications for government contexts.</p>

            <h3>Key Topics</h3>
            <ul>
                <li>Foundational concepts and definitions</li>
                <li>Best practices and implementation guidance</li>
                <li>Case studies from government AI deployments</li>
                <li>Practical exercises and assessments</li>
            </ul>

            <div class="info-box tip">
                <div class="info-box-title">Estimated Duration</div>
                <p>This module takes approximately ${subcourse.duration} to complete, including all readings and exercises.</p>
            </div>
        `;
    }

    // Build assessment section if available
    let assessmentHtml = '';
    if (subcourse.content?.assessment) {
        assessmentHtml = `
            <div class="assessment-section" style="margin-top: var(--space-2xl);">
                <h2>Knowledge Check</h2>
                <p>Test your understanding of the concepts covered in this module.</p>
                <div id="assessmentContainer">
                    ${renderAssessment(subcourse.content.assessment)}
                </div>
            </div>
        `;
    }

    // Find previous and next subcourses
    const currentIndex = parentCourse.subcourses.findIndex(s => s.id === subcourseId);
    const prevSubcourse = currentIndex > 0 ? parentCourse.subcourses[currentIndex - 1] : null;
    const nextSubcourse = currentIndex < parentCourse.subcourses.length - 1 ? parentCourse.subcourses[currentIndex + 1] : null;

    // Build navigation buttons
    const navHtml = `
        <div class="lesson-nav">
            ${prevSubcourse ? `
                <button class="lesson-nav-btn prev" onclick="navigateTo('lesson', {subcourseId: '${prevSubcourse.id}'})">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 12H5M12 19L5 12L12 5"/>
                    </svg>
                    <span>${prevSubcourse.title}</span>
                </button>
            ` : '<div></div>'}
            ${nextSubcourse ? `
                <button class="lesson-nav-btn next" onclick="navigateTo('lesson', {subcourseId: '${nextSubcourse.id}'})">
                    <span>${nextSubcourse.title}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M5 12H19M12 5L19 12L12 19"/>
                    </svg>
                </button>
            ` : `
                <button class="lesson-nav-btn next" onclick="markLessonComplete('${subcourseId}')">
                    <span>Complete Module</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M20 6L9 17L4 12"/>
                    </svg>
                </button>
            `}
        </div>
    `;

    container.innerHTML = `
        <div class="lesson-container">
            <aside class="lesson-sidebar">
                <div class="module-navigation">
                    <div class="module-nav-header">
                        <h3>${parentCourse.title}</h3>
                        <p>Course ${parentCourse.number}</p>
                    </div>
                    <ul class="module-nav-list">
                        ${sidebarNav}
                    </ul>
                </div>
            </aside>

            <div class="lesson-main">
                <div class="lesson-header">
                    <div class="lesson-breadcrumb">
                        <a href="#" onclick="navigateTo('courses'); return false;">Courses</a>
                        <span>/</span>
                        <a href="#" onclick="navigateTo('course-detail', {courseId: '${parentCourse.id}'}); return false;">${parentCourse.title}</a>
                        <span>/</span>
                        <span>${subcourse.title}</span>
                    </div>
                    <h1>${subcourse.title}</h1>
                    <div class="course-detail-meta" style="margin-top: var(--space-md);">
                        <div class="meta-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6V12L16 14"/>
                            </svg>
                            <span>${subcourse.duration}</span>
                        </div>
                        <div class="meta-item">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
                            </svg>
                            <span>${subcourse.lessons} lessons</span>
                        </div>
                    </div>
                </div>

                <div class="lesson-content">
                    ${contentHtml}
                    ${assessmentHtml}
                </div>

                ${navHtml}
            </div>
        </div>
    `;

    // Track progress
    trackLessonView(subcourseId);
}

function markLessonComplete(subcourseId) {
    appState.progress[subcourseId] = {
        completed: true,
        completedAt: new Date().toISOString()
    };

    // Save to storage
    saveProgress();

    showToast('Module completed!', 'success');

    // Refresh the lesson to show completion
    loadLesson(subcourseId);
}

// ============================================
// DASHBOARD
// ============================================

function loadDashboard() {
    const container = document.getElementById('dashboardContainer');
    if (!container) return;

    if (!appState.user) {
        container.innerHTML = `
            <div class="auth-required-message">
                <svg viewBox="0 0 48 48" fill="none" class="auth-icon">
                    <circle cx="24" cy="20" r="8" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 42C8 34 15 28 24 28C33 28 40 34 40 42" stroke="currentColor" stroke-width="2"/>
                </svg>
                <h3>Sign in to access your dashboard</h3>
                <p>Create an account or sign in to track your progress, earn certificates, and more.</p>
                <button class="btn btn-primary" onclick="showAuthModal()">Sign In</button>
            </div>
        `;
        return;
    }

    const displayName = getUserDisplayName();
    const initials = getInitials(displayName);

    // Calculate stats
    const totalModules = COURSE_DATA.courses.reduce((sum, c) => sum + c.subcourses.length, 0);
    const completedModules = Object.values(appState.progress).filter(p => p.completed).length;
    const inProgressCourses = getInProgressCourses();
    const completedCourses = getCompletedCourses();

    // Build continue learning cards
    const continueLearning = inProgressCourses.slice(0, 3).map(course => {
        const completed = course.subcourses.filter(s => appState.progress[s.id]?.completed).length;
        const percentage = Math.round((completed / course.subcourses.length) * 100);
        const nextSubcourse = course.subcourses.find(s => !appState.progress[s.id]?.completed) || course.subcourses[0];

        return `
            <div class="continue-card" onclick="navigateTo('lesson', {subcourseId: '${nextSubcourse.id}'})">
                <div class="continue-card-icon" style="background: ${course.color}">${course.number}</div>
                <div class="continue-card-content">
                    <h4>${course.title}</h4>
                    <p>Next: ${nextSubcourse.title}</p>
                    <div class="continue-card-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${percentage}%"></div>
                        </div>
                        <span>${percentage}%</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Build recent activity
    const recentActivity = getRecentActivity();

    container.innerHTML = `
        <div class="dashboard-header">
            <div class="dashboard-welcome">
                <div class="dashboard-avatar">${initials}</div>
                <div class="dashboard-welcome-text">
                    <h1>Welcome back, ${displayName}!</h1>
                    <p>Continue your AI governance learning journey</p>
                </div>
            </div>
            <div class="dashboard-quick-stats">
                <div class="quick-stat">
                    <span class="quick-stat-value">${completedModules}</span>
                    <span class="quick-stat-label">Completed</span>
                </div>
                <div class="quick-stat">
                    <span class="quick-stat-value">${inProgressCourses.length}</span>
                    <span class="quick-stat-label">In Progress</span>
                </div>
                <div class="quick-stat">
                    <span class="quick-stat-value">${completedCourses.length}</span>
                    <span class="quick-stat-label">Certificates</span>
                </div>
            </div>
        </div>

        <div class="dashboard-grid">
            <div class="dashboard-section">
                <div class="dashboard-section-header">
                    <h2>Continue Learning</h2>
                    <a href="#" onclick="navigateTo('courses'); return false;">View All Courses</a>
                </div>
                <div class="continue-learning-list">
                    ${continueLearning || `
                        <div style="text-align: center; padding: var(--space-xl); color: var(--text-muted);">
                            <p>Start a course to see your progress here!</p>
                            <button class="btn btn-primary" onclick="navigateTo('courses')" style="margin-top: var(--space-md);">Browse Courses</button>
                        </div>
                    `}
                </div>
            </div>

            <div class="dashboard-section">
                <div class="dashboard-section-header">
                    <h2>Recent Activity</h2>
                </div>
                <div class="activity-list">
                    ${recentActivity || `
                        <div style="text-align: center; padding: var(--space-lg); color: var(--text-muted);">
                            <p>No recent activity yet</p>
                        </div>
                    `}
                </div>
            </div>
        </div>

        <div class="dashboard-section" style="margin-top: var(--space-xl);">
            <div class="dashboard-section-header">
                <h2>Course Progress Overview</h2>
            </div>
            <div class="courses-container" style="gap: var(--space-lg);">
                ${COURSE_DATA.courses.map(course => {
                    const completed = course.subcourses.filter(s => appState.progress[s.id]?.completed).length;
                    const percentage = Math.round((completed / course.subcourses.length) * 100);
                    return `
                        <div class="continue-card" onclick="navigateTo('course-detail', {courseId: '${course.id}'})">
                            <div class="continue-card-icon" style="background: ${course.color}">${course.number}</div>
                            <div class="continue-card-content">
                                <h4>${course.title}</h4>
                                <p>${course.level}</p>
                                <div class="continue-card-progress">
                                    <div class="progress-bar">
                                        <div class="progress-fill" style="width: ${percentage}%"></div>
                                    </div>
                                    <span>${completed}/${course.subcourses.length} modules</span>
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function getInProgressCourses() {
    return COURSE_DATA.courses.filter(course => {
        const completed = course.subcourses.filter(s => appState.progress[s.id]?.completed).length;
        return completed > 0 && completed < course.subcourses.length;
    });
}

function getCompletedCourses() {
    return COURSE_DATA.courses.filter(course => {
        const completed = course.subcourses.filter(s => appState.progress[s.id]?.completed).length;
        return completed === course.subcourses.length;
    });
}

function getRecentActivity() {
    const activities = [];

    Object.entries(appState.progress).forEach(([subcourseId, data]) => {
        if (data.completed && data.completedAt) {
            // Find subcourse name
            for (const course of COURSE_DATA.courses) {
                const sub = course.subcourses.find(s => s.id === subcourseId);
                if (sub) {
                    activities.push({
                        type: 'completed',
                        title: sub.title,
                        time: new Date(data.completedAt),
                        icon: 'completed'
                    });
                    break;
                }
            }
        } else if (data.viewedAt) {
            for (const course of COURSE_DATA.courses) {
                const sub = course.subcourses.find(s => s.id === subcourseId);
                if (sub) {
                    activities.push({
                        type: 'started',
                        title: sub.title,
                        time: new Date(data.viewedAt),
                        icon: 'started'
                    });
                    break;
                }
            }
        }
    });

    // Sort by time, most recent first
    activities.sort((a, b) => b.time - a.time);

    return activities.slice(0, 5).map(activity => `
        <div class="activity-item">
            <div class="activity-icon ${activity.icon}">
                ${activity.type === 'completed' ?
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17L4 12"/></svg>' :
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12H19M12 5L19 12L12 19"/></svg>'
                }
            </div>
            <div class="activity-content">
                <p>${activity.type === 'completed' ? 'Completed' : 'Started'} <strong>${activity.title}</strong></p>
            </div>
            <div class="activity-time">${formatTimeAgo(activity.time)}</div>
        </div>
    `).join('');
}

function formatTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
}

// ============================================
// PROFILE PAGE
// ============================================

function loadProfile() {
    const container = document.getElementById('profileContainer');
    if (!container || !appState.user) return;

    const displayName = getUserDisplayName();
    const initials = getInitials(displayName);
    const email = appState.user.email || 'user@example.com';
    const role = appState.user.user_metadata?.role || appState.user.role || 'Not specified';

    const roleLabels = {
        'it_professional': 'IT Professional',
        'line_manager': 'Line Manager',
        'policy_advisor': 'Policy Advisor',
        'other': 'Other'
    };

    container.innerHTML = `
        <div class="profile-card">
            <div class="profile-header">
                <div class="profile-avatar-large">${initials}</div>
                <div class="profile-info">
                    <h2>${displayName}</h2>
                    <p>${email}</p>
                    <span class="profile-role-badge">${roleLabels[role] || role}</span>
                </div>
            </div>
            <form class="profile-form" id="profileForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="profileName">Full Name</label>
                        <input type="text" id="profileName" value="${displayName}" required>
                    </div>
                    <div class="form-group">
                        <label for="profileEmail">Email</label>
                        <input type="email" id="profileEmail" value="${email}" disabled>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group">
                        <label for="profileRole">Role</label>
                        <select id="profileRole">
                            <option value="it_professional" ${role === 'it_professional' ? 'selected' : ''}>IT Professional</option>
                            <option value="line_manager" ${role === 'line_manager' ? 'selected' : ''}>Line Manager</option>
                            <option value="policy_advisor" ${role === 'policy_advisor' ? 'selected' : ''}>Policy Advisor</option>
                            <option value="other" ${role === 'other' ? 'selected' : ''}>Other</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="profileOrg">Organization</label>
                        <input type="text" id="profileOrg" value="${appState.user.user_metadata?.organization || ''}" placeholder="Your organization">
                    </div>
                </div>
                <div class="form-actions">
                    <button type="button" class="btn btn-secondary" onclick="navigateTo('dashboard')">Cancel</button>
                    <button type="submit" class="btn btn-primary">Save Changes</button>
                </div>
            </form>
        </div>

        <div class="profile-card">
            <div style="padding: var(--space-xl);">
                <h3 style="margin-bottom: var(--space-lg);">Learning Statistics</h3>
                <div class="dashboard-quick-stats" style="justify-content: flex-start; flex-wrap: wrap;">
                    <div class="quick-stat">
                        <span class="quick-stat-value">${Object.values(appState.progress).filter(p => p.completed).length}</span>
                        <span class="quick-stat-label">Modules Completed</span>
                    </div>
                    <div class="quick-stat">
                        <span class="quick-stat-value">${getCompletedCourses().length}</span>
                        <span class="quick-stat-label">Courses Completed</span>
                    </div>
                    <div class="quick-stat">
                        <span class="quick-stat-value">${getCompletedCourses().length}</span>
                        <span class="quick-stat-label">Certificates Earned</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Setup form submission
    document.getElementById('profileForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        await updateProfile();
    });
}

async function updateProfile() {
    const name = document.getElementById('profileName')?.value;
    const role = document.getElementById('profileRole')?.value;
    const organization = document.getElementById('profileOrg')?.value;

    if (appState.isSupabaseConnected && supabase && appState.user) {
        try {
            const { error } = await supabase.auth.updateUser({
                data: { name, role, organization }
            });
            if (error) throw error;

            // Also update profiles table
            await supabase.from('profiles').upsert({
                id: appState.user.id,
                full_name: name,
                role: role,
                organization: organization,
                updated_at: new Date().toISOString()
            });

            appState.user.user_metadata = { ...appState.user.user_metadata, name, role, organization };
            updateAuthUI();
            showToast('Profile updated successfully!', 'success');
        } catch (error) {
            showToast('Failed to update profile', 'error');
        }
    } else {
        // Demo mode
        appState.user = { ...appState.user, name, role, organization };
        demoStorage.user = appState.user;
        updateAuthUI();
        showToast('Profile updated (demo mode)', 'success');
    }
}

// ============================================
// CERTIFICATES PAGE
// ============================================

function loadCertificates() {
    const container = document.getElementById('certificatesContainer');
    if (!container) return;

    if (!appState.user) {
        container.innerHTML = `
            <div class="auth-required-message">
                <svg viewBox="0 0 48 48" fill="none" class="auth-icon">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 24L22 30L34 18" stroke="currentColor" stroke-width="2"/>
                </svg>
                <h3>Sign in to view your certificates</h3>
                <p>Complete courses to earn certificates that demonstrate your AI governance expertise.</p>
                <button class="btn btn-primary" onclick="showAuthModal()">Sign In</button>
            </div>
        `;
        return;
    }

    const completedCourses = getCompletedCourses();

    if (completedCourses.length === 0) {
        container.innerHTML = `
            <div class="no-certificates">
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="8" width="32" height="32" rx="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 24L22 30L34 18" stroke="currentColor" stroke-width="2" stroke-dasharray="4 4"/>
                </svg>
                <h3>No certificates yet</h3>
                <p>Complete all modules in a course to earn your certificate. Keep learning!</p>
                <button class="btn btn-primary" onclick="navigateTo('courses')">Browse Courses</button>
            </div>
        `;
        return;
    }

    const certificatesHtml = completedCourses.map(course => `
        <div class="certificate-card">
            <div class="certificate-preview">
                <div class="certificate-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M8 10L11 13L16 8"/>
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                    </svg>
                </div>
            </div>
            <div class="certificate-info">
                <h3>${course.title}</h3>
                <p>Successfully completed all ${course.subcourses.length} modules of the ${course.level} level course.</p>
                <div class="certificate-meta">
                    <span class="certificate-date">Completed: ${new Date().toLocaleDateString()}</span>
                    <div class="certificate-actions">
                        <button class="btn btn-secondary btn-icon" title="Download" onclick="downloadCertificate('${course.id}')">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15"/>
                                <path d="M7 10L12 15L17 10"/>
                                <path d="M12 15V3"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="certificates-grid">
            ${certificatesHtml}
        </div>
    `;
}

function downloadCertificate(courseId) {
    showToast('Certificate download coming soon!', 'info');
}

// ============================================
// PROGRESS DASHBOARD
// ============================================

function loadProgressDashboard() {
    const dashboard = document.getElementById('progressDashboard');
    if (!dashboard) return;

    if (!appState.user) {
        dashboard.innerHTML = `
            <div class="auth-required-message">
                <svg viewBox="0 0 48 48" fill="none" class="auth-icon">
                    <circle cx="24" cy="20" r="8" stroke="currentColor" stroke-width="2"/>
                    <path d="M8 42C8 34 15 28 24 28C33 28 40 34 40 42" stroke="currentColor" stroke-width="2"/>
                </svg>
                <h3>Sign in to track your progress</h3>
                <p>Create an account or sign in to save your progress across all courses and earn certificates.</p>
                <button class="btn btn-primary" onclick="showAuthModal()">Sign In</button>
            </div>
        `;
        return;
    }

    // Calculate progress for each course
    const courseProgress = COURSE_DATA.courses.map(course => {
        const completed = course.subcourses.filter(sub =>
            appState.progress[sub.id]?.completed
        ).length;
        const total = course.subcourses.length;
        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

        return {
            ...course,
            completed,
            total,
            percentage
        };
    });

    const progressCards = courseProgress.map(course => `
        <div class="course-card" style="cursor: pointer;" onclick="navigateTo('course-detail', {courseId: '${course.id}'})">
            <div class="course-card-header">
                <div class="course-number" style="background: ${course.color}">${course.number}</div>
                <div class="course-card-header-content">
                    <h2>${course.title}</h2>
                    <p>${course.subtitle}</p>
                </div>
            </div>
            <div class="course-card-body">
                <div class="progress-bar" style="height: 12px;">
                    <div class="progress-fill" style="width: ${course.percentage}%"></div>
                </div>
                <div class="progress-stats" style="margin-top: var(--space-md);">
                    <span>${course.completed} of ${course.total} modules completed</span>
                    <span>${course.percentage}%</span>
                </div>
            </div>
        </div>
    `).join('');

    // Calculate overall stats
    const totalModules = COURSE_DATA.courses.reduce((sum, c) => sum + c.subcourses.length, 0);
    const completedModules = Object.values(appState.progress).filter(p => p.completed).length;
    const overallPercentage = totalModules > 0 ? Math.round((completedModules / totalModules) * 100) : 0;

    dashboard.innerHTML = `
        <div class="progress-overview" style="margin-bottom: var(--space-2xl);">
            <div class="assessment-intro">
                <h2>Your Learning Journey</h2>
                <p>Track your progress through the AI Governance & Ethics curriculum</p>
                <div class="hero-stats" style="margin-top: var(--space-xl);">
                    <div class="stat">
                        <span class="stat-number">${completedModules}</span>
                        <span class="stat-label">Modules Completed</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${totalModules - completedModules}</span>
                        <span class="stat-label">Remaining</span>
                    </div>
                    <div class="stat">
                        <span class="stat-number">${overallPercentage}%</span>
                        <span class="stat-label">Overall Progress</span>
                    </div>
                </div>
            </div>
        </div>

        <h2 style="margin-bottom: var(--space-lg);">Course Progress</h2>
        <div class="courses-container">
            ${progressCards}
        </div>
    `;
}

// ============================================
// ASSESSMENT SYSTEM
// ============================================

function renderAssessment(assessment) {
    if (!assessment?.questions) return '';

    const questionsHtml = assessment.questions.map((q, index) => {
        if (q.type === 'multiple-choice') {
            const optionsHtml = q.options.map((opt, optIndex) => `
                <div class="question-option" data-question="${index}" data-option="${optIndex}">
                    <div class="option-radio"></div>
                    <span class="option-text">${opt}</span>
                </div>
            `).join('');

            return `
                <div class="question-card" data-question-index="${index}" data-correct="${q.correct}">
                    <div class="question-header">
                        <span class="question-number">${index + 1}</span>
                        <span class="question-text">${q.question}</span>
                    </div>
                    <div class="question-options">
                        ${optionsHtml}
                    </div>
                    <div class="question-feedback" style="display: none; margin-top: var(--space-md);">
                        <div class="info-box tip">
                            <div class="info-box-title">Explanation</div>
                            <p>${q.explanation || 'See course content for more details.'}</p>
                        </div>
                    </div>
                </div>
            `;
        } else if (q.type === 'free-text') {
            return `
                <div class="question-card" data-question-index="${index}">
                    <div class="question-header">
                        <span class="question-number">${index + 1}</span>
                        <span class="question-text">${q.question}</span>
                    </div>
                    <textarea class="question-textarea" placeholder="Type your answer here..."></textarea>
                    <div class="question-feedback" style="display: none; margin-top: var(--space-md);">
                        <div class="info-box example">
                            <div class="info-box-title">Sample Answer</div>
                            <p>${q.sampleAnswer || 'Review your answer against the course content.'}</p>
                        </div>
                    </div>
                </div>
            `;
        }
        return '';
    }).join('');

    return `
        ${questionsHtml}
        <div style="margin-top: var(--space-xl); text-align: center;">
            <button class="btn btn-primary" onclick="checkAssessment()">Check Answers</button>
        </div>
        <div id="assessmentResults" style="display: none;"></div>
    `;
}

function checkAssessment() {
    const questions = document.querySelectorAll('.question-card');
    let correct = 0;
    let total = 0;

    questions.forEach((card, index) => {
        const correctAnswer = parseInt(card.dataset.correct);
        const selected = card.querySelector('.question-option.selected');
        const feedback = card.querySelector('.question-feedback');

        if (!isNaN(correctAnswer)) {
            total++;
            if (selected) {
                const selectedOption = parseInt(selected.dataset.option);
                if (selectedOption === correctAnswer) {
                    correct++;
                    selected.classList.add('correct');
                } else {
                    selected.classList.add('incorrect');
                    // Highlight correct answer
                    const correctOption = card.querySelector(`[data-option="${correctAnswer}"]`);
                    if (correctOption) correctOption.classList.add('correct');
                }
            }
        }

        if (feedback) {
            feedback.style.display = 'block';
        }
    });

    // Show results
    const resultsDiv = document.getElementById('assessmentResults');
    if (resultsDiv && total > 0) {
        const percentage = Math.round((correct / total) * 100);
        const passed = percentage >= CONFIG.assessment.passingScore;

        resultsDiv.innerHTML = `
            <div class="assessment-results" style="margin-top: var(--space-xl);">
                <div class="results-score">
                    <span class="score-value">${percentage}%</span>
                    <span class="score-label">${correct}/${total}</span>
                </div>
                <div class="results-message">
                    <h3>${passed ? 'Well Done!' : 'Keep Learning'}</h3>
                    <p>${passed ?
                        'You\'ve demonstrated a solid understanding of this module\'s content.' :
                        `You need ${CONFIG.assessment.passingScore}% to pass. Review the content and try again.`
                    }</p>
                </div>
            </div>
        `;
        resultsDiv.style.display = 'block';
    }
}

// Event delegation for assessment options
document.addEventListener('click', (e) => {
    const option = e.target.closest('.question-option');
    if (option && !option.classList.contains('correct') && !option.classList.contains('incorrect')) {
        const card = option.closest('.question-card');

        // Deselect other options in this question
        card.querySelectorAll('.question-option').forEach(opt => {
            opt.classList.remove('selected');
        });

        // Select this option
        option.classList.add('selected');
    }
});

// ============================================
// AUTHENTICATION
// ============================================

function setupAuthForms() {
    // Auth tabs
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            const targetTab = e.target.dataset.tab;

            document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));

            e.target.classList.add('active');
            document.getElementById(`${targetTab}Form`)?.classList.add('active');
        });
    });

    // Sign in form
    document.getElementById('signinForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('signinEmail').value;
        const password = document.getElementById('signinPassword').value;

        await signIn(email, password);
    });

    // Sign up form
    document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const signupData = {
            name: document.getElementById('signupName').value,
            email: document.getElementById('signupEmail').value,
            password: document.getElementById('signupPassword').value,
            role: document.getElementById('signupRole').value,
            jobTitle: document.getElementById('signupJobTitle')?.value || '',
            organization: document.getElementById('signupOrganization')?.value || '',
            phone: document.getElementById('signupPhone')?.value || '',
            newsletter: document.getElementById('signupNewsletter')?.checked || false
        };

        await signUp(signupData);
    });
}

function showAuthModal() {
    document.getElementById('authModal')?.classList.add('active');
}

function hideAuthModal() {
    document.getElementById('authModal')?.classList.remove('active');
}

async function signIn(email, password) {
    if (appState.isSupabaseConnected && supabase) {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) throw error;

            appState.user = data.user;
            hideAuthModal();
            updateAuthUI();
            loadUserProgress();
            showToast('Welcome back!', 'success');

            // Redirect to dashboard
            navigateTo('dashboard');
        } catch (error) {
            showToast(error.message || 'Sign in failed', 'error');
        }
    } else {
        // Demo mode
        demoStorage.user = { email, name: email.split('@')[0], role: 'it_professional' };
        appState.user = demoStorage.user;
        hideAuthModal();
        updateAuthUI();
        showToast('Signed in (demo mode)', 'success');
        navigateTo('dashboard');
    }
}

async function signUp(signupData) {
    const { name, email, password, role, jobTitle, organization, phone, newsletter } = signupData;

    if (appState.isSupabaseConnected && supabase) {
        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        name,
                        role,
                        job_title: jobTitle,
                        organization,
                        phone,
                        newsletter_opt_in: newsletter,
                        signup_date: new Date().toISOString()
                    }
                }
            });

            if (error) throw error;

            // Check if email confirmation is required
            if (data.user && !data.session) {
                showToast('Account created! Please check your email to verify.', 'success');
                hideAuthModal();
            } else if (data.session) {
                appState.user = data.user;
                hideAuthModal();
                updateAuthUI();
                showToast('Account created successfully!', 'success');
                navigateTo('dashboard');
            }
        } catch (error) {
            showToast(error.message || 'Sign up failed', 'error');
        }
    } else {
        // Demo mode
        demoStorage.user = {
            email,
            name,
            role,
            job_title: jobTitle,
            organization,
            phone,
            newsletter_opt_in: newsletter
        };
        appState.user = demoStorage.user;
        hideAuthModal();
        updateAuthUI();
        showToast('Account created (demo mode)', 'success');
        navigateTo('dashboard');
    }
}

async function signOut() {
    if (appState.isSupabaseConnected && supabase) {
        await supabase.auth.signOut();
    }

    appState.user = null;
    appState.progress = {};
    demoStorage.user = null;
    updateAuthUI();
    showToast('Signed out successfully', 'success');
    navigateTo('home');
}

async function checkAuthState() {
    if (appState.isSupabaseConnected && supabase) {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            appState.user = session.user;
            updateAuthUI();
            loadUserProgress();
        }
    } else if (demoStorage.user) {
        appState.user = demoStorage.user;
        updateAuthUI();
        // Load from localStorage in demo mode
        const saved = localStorage.getItem('aiGovProgress');
        if (saved) {
            appState.progress = JSON.parse(saved);
        }
    }
}

function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const userDropdown = document.getElementById('userDropdown');
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const navAuthLinks = document.querySelectorAll('.nav-auth-only');

    if (appState.user) {
        const displayName = getUserDisplayName();
        const initials = getInitials(displayName);

        // Hide login button, show dropdown
        if (loginBtn) loginBtn.style.display = 'none';
        if (userDropdown) userDropdown.style.display = 'block';
        if (userAvatar) userAvatar.textContent = initials;
        if (userName) userName.textContent = displayName;

        // Show auth-only nav links
        navAuthLinks.forEach(link => link.style.display = 'block');
    } else {
        // Show login button, hide dropdown
        if (loginBtn) loginBtn.style.display = 'block';
        if (userDropdown) userDropdown.style.display = 'none';

        // Hide auth-only nav links
        navAuthLinks.forEach(link => link.style.display = 'none');
    }
}

function getUserDisplayName() {
    if (!appState.user) return 'User';
    return appState.user.user_metadata?.name ||
           appState.user.name ||
           appState.user.email?.split('@')[0] ||
           'User';
}

function getInitials(name) {
    if (!name) return 'U';
    const parts = name.split(' ');
    if (parts.length >= 2) {
        return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
}

// ============================================
// PROGRESS TRACKING
// ============================================

function trackLessonView(subcourseId) {
    if (!appState.progress[subcourseId]) {
        appState.progress[subcourseId] = {
            viewed: true,
            viewedAt: new Date().toISOString()
        };
        saveProgress();
    }
}

async function saveProgress() {
    if (appState.isSupabaseConnected && supabase && appState.user) {
        try {
            await supabase.from('user_progress').upsert({
                user_id: appState.user.id,
                progress_data: appState.progress,
                updated_at: new Date().toISOString()
            });
        } catch (error) {
            console.error('Failed to save progress:', error);
        }
    } else {
        // Save to localStorage in demo mode
        localStorage.setItem('aiGovProgress', JSON.stringify(appState.progress));
    }
}

async function loadUserProgress() {
    if (appState.isSupabaseConnected && supabase && appState.user) {
        try {
            const { data, error } = await supabase
                .from('user_progress')
                .select('progress_data')
                .eq('user_id', appState.user.id)
                .single();

            if (data?.progress_data) {
                appState.progress = data.progress_data;
            }
        } catch (error) {
            console.error('Failed to load progress:', error);
        }
    } else {
        // Load from localStorage in demo mode
        const saved = localStorage.getItem('aiGovProgress');
        if (saved) {
            appState.progress = JSON.parse(saved);
        }
    }
}

// ============================================
// UTILITIES
// ============================================

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function getCourseIcon(iconType) {
    const icons = {
        foundation: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 40V20L24 8L44 20V40"/>
            <path d="M12 36V24L24 16L36 24V36"/>
            <circle cx="24" cy="28" r="4" fill="currentColor"/>
        </svg>`,
        technical: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="8" y="8" width="32" height="32" rx="4"/>
            <path d="M16 20L22 26L16 32"/>
            <path d="M26 32H34"/>
        </svg>`,
        regulatory: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M24 4L42 12V24C42 34 34 42 24 44C14 42 6 34 6 24V12L24 4Z"/>
            <path d="M16 24L22 30L34 18"/>
        </svg>`,
        implementation: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="24" cy="24" r="8"/>
            <circle cx="24" cy="24" r="16"/>
            <path d="M24 4V12"/>
            <path d="M24 36V44"/>
            <path d="M4 24H12"/>
            <path d="M36 24H44"/>
        </svg>`,
        leadership: `<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="24" cy="14" r="6"/>
            <path d="M12 40V34C12 30 17 26 24 26C31 26 36 30 36 34V40"/>
            <circle cx="10" cy="20" r="4"/>
            <circle cx="38" cy="20" r="4"/>
        </svg>`
    };

    return icons[iconType] || icons.foundation;
}

// ============================================
// TIER ACCESS CONTROL
// ============================================

function hasAccessToCourse(courseId) {
    // If no user, no access
    if (!appState.user) return false;

    // If no tier, no access
    if (!appState.userTier) return false;

    // Use PRICING_TIERS to check access
    if (typeof PRICING_TIERS !== 'undefined') {
        return PRICING_TIERS.hasAccess(appState.userTier, courseId);
    }

    // Fallback: check tier level manually
    const courseNumber = parseInt(courseId.replace('course-', ''));
    return appState.userTier >= courseNumber;
}

function getCourseIdFromSubcourse(subcourseId) {
    // Extract course ID from subcourse ID (e.g., 'course-1-1' -> 'course-1')
    const parts = subcourseId.split('-');
    if (parts.length >= 2) {
        return `${parts[0]}-${parts[1]}`;
    }
    return null;
}

function showAccessRestricted(courseId) {
    const course = COURSE_DATA.courses.find(c => c.id === courseId);
    const courseName = course ? course.title : 'this course';

    // Find which tier is needed
    let requiredTier = null;
    if (typeof PRICING_TIERS !== 'undefined') {
        requiredTier = PRICING_TIERS.tiers.find(t => t.courses.includes(courseId));
    }

    const container = document.getElementById('main-content');
    const modal = document.createElement('div');
    modal.className = 'modal active';
    modal.id = 'accessRestrictedModal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="closeAccessRestrictedModal()">&times;</button>
            <div class="access-restricted">
                <svg viewBox="0 0 48 48" fill="none">
                    <rect x="8" y="20" width="32" height="24" rx="4" stroke="currentColor" stroke-width="2"/>
                    <path d="M16 20V14C16 9.58172 19.5817 6 24 6C28.4183 6 32 9.58172 32 14V20" stroke="currentColor" stroke-width="2"/>
                    <circle cx="24" cy="32" r="3" fill="currentColor"/>
                </svg>
                <h3>Course Access Required</h3>
                <p>You need to purchase ${requiredTier ? `the <strong>${requiredTier.name}</strong> tier or higher` : 'a higher tier'} to access <strong>${courseName}</strong>.</p>
                <button class="btn btn-primary" onclick="closeAccessRestrictedModal(); navigateTo('pricing');">View Pricing</button>
                <button class="btn btn-secondary" onclick="closeAccessRestrictedModal();">Go Back</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function closeAccessRestrictedModal() {
    const modal = document.getElementById('accessRestrictedModal');
    if (modal) {
        modal.remove();
    }
}

// ============================================
// PRICING PAGE
// ============================================

function loadPricingPage() {
    const container = document.getElementById('pricingContainer');
    if (!container) return;

    if (typeof PRICING_TIERS === 'undefined') {
        container.innerHTML = '<p>Pricing information unavailable.</p>';
        return;
    }

    const html = PRICING_TIERS.tiers.map(tier => {
        const isOwned = appState.userTier && appState.userTier >= tier.level;
        const isPopular = tier.popular;

        // Generate course list
        const allCourses = COURSE_DATA.courses.map(course => {
            const included = tier.courses.includes(course.id);
            return `
                <li class="${included ? '' : 'locked'}">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        ${included
                            ? '<path d="M5 13l4 4L19 7"/>'
                            : '<path d="M18 6L6 18M6 6l12 12"/>'
                        }
                    </svg>
                    ${course.title}
                </li>
            `;
        }).join('');

        // Generate features list
        const featuresList = tier.features.map(feature => `
            <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M5 13l4 4L19 7"/>
                </svg>
                ${feature}
            </li>
        `).join('');

        return `
            <div class="pricing-card ${isPopular ? 'popular' : ''} ${isOwned ? 'owned' : ''}">
                <div class="pricing-tier-name">${tier.name}</div>
                <div class="pricing-tier-level">Level ${tier.level}</div>
                <div class="pricing-price">
                    <span class="pricing-amount">
                        <span class="pricing-currency">$</span>${tier.price.toLocaleString()}
                    </span>
                    <div class="pricing-period">One-time payment</div>
                </div>
                <div class="pricing-description">${tier.description}</div>
                <div class="pricing-courses">
                    <div class="pricing-courses-title">Courses Included</div>
                    <ul class="pricing-courses-list">
                        ${allCourses}
                    </ul>
                </div>
                <div class="pricing-features">
                    <div class="pricing-features-title">Features</div>
                    <ul class="pricing-features-list">
                        ${featuresList}
                    </ul>
                </div>
                <div class="pricing-cta">
                    ${isOwned
                        ? '<button class="btn btn-owned" disabled>Purchased</button>'
                        : `<button class="btn btn-primary" onclick="purchaseTier('${tier.id}')">Get Started</button>`
                    }
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

async function purchaseTier(tierId) {
    // Require login first
    if (!appState.user) {
        showAuthModal();
        showToast('Please sign in to purchase a course tier', 'info');
        return;
    }

    const tier = PRICING_TIERS.getTier(tierId);
    if (!tier) {
        showToast('Invalid tier selected', 'error');
        return;
    }

    // Check if already owned
    if (appState.userTier && appState.userTier >= tier.level) {
        showToast('You already have access to this tier', 'info');
        return;
    }

    try {
        showToast('Redirecting to checkout...', 'info');

        // Get user email
        const userEmail = appState.user.email ||
                         appState.user.user_metadata?.email ||
                         '';

        // Try Stripe checkout
        if (typeof STRIPE_CONFIG !== 'undefined' && STRIPE_CONFIG.stripe) {
            await STRIPE_CONFIG.redirectToCheckout(tierId, userEmail);
        } else {
            // Demo mode - simulate purchase
            console.log('Demo mode: Simulating purchase for', tierId);
            await simulatePurchase(tierId);
        }
    } catch (error) {
        console.error('Purchase error:', error);
        showToast('Failed to initiate checkout. Please try again.', 'error');
    }
}

async function simulatePurchase(tierId) {
    // Demo mode purchase simulation
    const tier = PRICING_TIERS.getTier(tierId);
    if (!tier) return;

    // Update user tier in demo mode
    appState.userTier = tier.level;
    demoStorage.userTier = tier.level;

    // Store in localStorage for persistence
    localStorage.setItem('aiGovUserTier', tier.level.toString());

    showToast(`Successfully purchased ${tier.name} tier! (Demo Mode)`, 'success');

    // Reload the pricing page to show updated state
    loadPricingPage();

    // Navigate to courses
    setTimeout(() => {
        navigateTo('courses');
    }, 1500);
}

function loadUserTier() {
    // Load tier from Supabase or demo storage
    if (appState.isSupabaseConnected && supabase && appState.user) {
        loadTierFromSupabase();
    } else {
        // Demo mode - load from localStorage
        const savedTier = localStorage.getItem('aiGovUserTier');
        if (savedTier) {
            appState.userTier = parseInt(savedTier);
            demoStorage.userTier = appState.userTier;
        }
    }
}

async function loadTierFromSupabase() {
    if (!supabase || !appState.user) return;

    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('tier_level')
            .eq('id', appState.user.id)
            .single();

        if (error) throw error;

        if (data && data.tier_level) {
            appState.userTier = data.tier_level;
        }
    } catch (error) {
        console.error('Error loading user tier:', error);
    }
}

// ============================================
// PAYMENT SUCCESS HANDLING
// ============================================

function checkPaymentSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const paymentStatus = urlParams.get('payment');

    if (paymentStatus === 'success') {
        showToast('Payment successful! Welcome to the Academy.', 'success');
        // Reload user tier
        loadUserTier();
        // Clean URL
        const url = new URL(window.location);
        url.searchParams.delete('payment');
        url.searchParams.delete('session_id');
        window.history.replaceState({}, '', url);
    } else if (paymentStatus === 'cancelled') {
        showToast('Payment was cancelled.', 'info');
        // Clean URL
        const url = new URL(window.location);
        url.searchParams.delete('payment');
        window.history.replaceState({}, '', url);
    }
}

// Make functions globally available
window.navigateTo = navigateTo;
window.showAuthModal = showAuthModal;
window.hideAuthModal = hideAuthModal;
window.signOut = signOut;
window.startCourse = startCourse;
window.checkAssessment = checkAssessment;
window.markLessonComplete = markLessonComplete;
window.downloadCertificate = downloadCertificate;
window.purchaseTier = purchaseTier;
window.closeAccessRestrictedModal = closeAccessRestrictedModal;
