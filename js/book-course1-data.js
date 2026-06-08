/**
 * Course 1: Principles of AI Governance
 * Based on "Principles of AI Governance and Model Risk Management" by James Sayles
 * Chapters 1-13
 */

const BOOK_COURSE1_DATA = {
    id: 'book-course-1',
    number: 6,
    title: 'Principles of AI Governance',
    subtitle: 'From the Book: Principles of AI Governance and Model Risk Management',
    level: 'Intermediate',
    description: 'A comprehensive course derived from the authoritative text on AI governance principles. Covers the current state of AI governance, strategy alignment, framework design, compliance management, privacy, human oversight, and stakeholder engagement across 13 in-depth chapters — each with its own mini test.',
    duration: '10-12 hours',
    lessons: 13,
    icon: 'governance',
    color: '#1d4ed8',
    source: 'Principles of AI Governance and Model Risk Management — James Sayles',
    objectives: [
        'Understand the current state and maturity gaps in AI governance and model risk management',
        'Align AI strategy with governance frameworks for responsible deployment',
        'Design well-governed AI lifecycle models with embedded controls',
        'Build an AI governance framework with policies, roles, and oversight structures',
        'Manage AI compliance, privacy, and human oversight requirements',
        'Engage stakeholders effectively for trustworthy AI systems'
    ],
    chapters: [

        // =====================================================================
        // CHAPTER 1
        // =====================================================================
        {
            id: 'book1-ch1',
            number: '1',
            title: 'The Current State of AI Governance and Model Risk Management',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'Introduction: A Rapidly Evolving Landscape',
                        content: `<p>In the fast-paced domain of artificial intelligence (AI), governance, oversight, and model risk management are center stage and at the top of minds for business executives. The present state of AI governance and risk management is undergoing significant development as organizations grapple with the complexities of establishing AI governance frameworks.</p>

                        <p>AI governance and model risk management challenges are not new, especially within the financial services industries (FSIs). Many FSIs began addressing these issues in the early 2010s, with substantial momentum within the last five years. In contrast, other industries have lagged behind.</p>

                        <div class="info-box important">
                            <div class="info-box-title">Core Reality</div>
                            <p>Despite growing recognition of the importance of AI governance, a consistent and universal framework is lacking. While a one-size-fits-all solution is impractical, a common set of control objectives and governance principles can guide organizations across industries.</p>
                        </div>

                        <h3>What Organizations Seek</h3>
                        <ul>
                            <li>Establishing metrics and key performance indicators for AI</li>
                            <li>Ethical guidelines for AI development</li>
                            <li>Conducting thorough risk assessments</li>
                            <li>Defining accountability structures</li>
                            <li>Ensuring AI systems are explainable and auditable</li>
                        </ul>`
                    },
                    {
                        title: 'Key Trends and Challenges',
                        content: `<h3>Current Trends</h3>
                        <ul>
                            <li><strong>Rising Awareness:</strong> The risks of AI applications and the importance of governance standards are receiving greater attention. High-profile AI incidents and proposed regulations are driving this awareness.</li>
                            <li><strong>Need for Oversight Structures:</strong> AI governance and risk management frameworks fuel sound AI strategies. The need for a global oversight body or consortium dedicated to AI governance is becoming evident.</li>
                            <li><strong>Maturity Gaps:</strong> A disconnected world of standards and regulations yields compliance battles. However, global trends are starting to emerge, though maturity levels remain low.</li>
                            <li><strong>Skills Shortage:</strong> A shortage of professionals with AI, governance, and risk management skills persists.</li>
                        </ul>

                        <h3>Major Challenges Organizations Face</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Challenge</th><th>Description</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Governance vs. Oversight Balance</strong></td><td>AI advances faster than regulatory agencies can govern</td></tr>
                                <tr><td><strong>Risk vs. Innovation</strong></td><td>Balancing innovation encouragement with safeguards</td></tr>
                                <tr><td><strong>Instituting AI Ethics</strong></td><td>Translating ethical principles into day-to-day realities</td></tr>
                                <tr><td><strong>International Coordination</strong></td><td>Alignment and collaboration across jurisdictions is inconsistent</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'Industry Maturity Levels',
                        content: `<p>The maturity of AI governance varies significantly across industries:</p>

                        <h3>Financial Services</h3>
                        <p>As early adopters of AI, financial institutions are more mature in model risk management due to regulatory frameworks like SR 11-7. Leading banks are establishing AI ethics boards and investing in explainable AI (XAI) and model inventory tools.</p>

                        <h3>Healthcare</h3>
                        <p>Catching up quickly due to clinical failure risks and data sensitivity. Model risk management is crucial due to AI's potential impact on patient outcomes.</p>

                        <h3>Technology Industry</h3>
                        <p>Despite being AI development leaders, many tech giants lag in their internal AI governance initiatives. External scrutiny from the US and EU calls for stronger regulation regarding bias, misinformation, and misuse potential.</p>

                        <h3>Other Industries</h3>
                        <p>Manufacturing, retail, and energy are gradually incorporating AI. Governance maturity varies widely — some leaders proactively establish frameworks; others are still recognizing the risks.</p>

                        <div class="info-box tip">
                            <div class="info-box-title">Governance Structure Options</div>
                            <p><strong>Option 1:</strong> AI Center of Excellence — a team with technical, legal, compliance, and business backgrounds.<br>
                            <strong>Option 2:</strong> AI Governance Committee — senior leaders across business units for strategic oversight.<br>
                            <strong>Hybrid:</strong> CoE + Committee collaboration for both operational execution and strategic direction.</p>
                        </div>`
                    },
                    {
                        title: 'The Four Goals of AI Governance',
                        content: `<p>The four major goals of AI governance and model risk management are:</p>

                        <div class="info-box important">
                            <div class="info-box-title">The Four Pillars</div>
                            <p><strong>1. Ethics</strong> — Ensure AI systems are developed and deployed responsibly, avoiding harm and promoting fairness.</p>
                            <p><strong>2. Transparency</strong> — AI systems must be explainable and their decision-making understandable to stakeholders.</p>
                            <p><strong>3. Risk Intelligence</strong> — Proactively identify, assess, and manage risks associated with AI models throughout their lifecycle.</p>
                            <p><strong>4. Explainability</strong> — AI model outputs and decisions must be justifiable and traceable to specific inputs and logic.</p>
                        </div>

                        <p>Organizations must also build <strong>trustworthiness</strong> as an overarching outcome — ensuring AI systems perform reliably, fairly, and transparently in all operational contexts.</p>

                        <h3>Who Is Responsible?</h3>
                        <p>AI governance and risk management is a shared responsibility:</p>
                        <ul>
                            <li>Data Scientists and ML Engineers</li>
                            <li>Business Unit Leaders and Process Owners</li>
                            <li>Legal Counsel and Data Privacy Officers</li>
                            <li>The Board of Directors and Chief Executive Officer</li>
                        </ul>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 1 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'Which industry sector is generally considered most mature in AI governance and model risk management?',
                            options: [
                                'Retail',
                                'Financial Services',
                                'Manufacturing',
                                'Energy'
                            ],
                            correct: 1,
                            explanation: 'Financial services adopted AI governance early due to existing regulatory frameworks like SR 11-7. They have established AI ethics boards and invest heavily in explainable AI tools.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What are the four major goals of AI governance and model risk management?',
                            options: [
                                'Speed, Automation, Scalability, and Profitability',
                                'Ethics, Transparency, Risk Intelligence, and Explainability',
                                'Compliance, Security, Privacy, and Access Control',
                                'Data Quality, Model Accuracy, Deployment Speed, and Cost Reduction'
                            ],
                            correct: 1,
                            explanation: 'The four major goals are Ethics, Transparency, Risk Intelligence, and Explainability — with Trustworthiness as the overarching outcome.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which statement about AI governance maturity is INCORRECT?',
                            options: [
                                'Financial Services are relatively more mature due to existing regulations',
                                'A disconnected world of standards yields compliance battles and chaos',
                                'Technology companies always lead in AI governance practices',
                                'Skills shortage is a significant challenge in AI governance'
                            ],
                            correct: 2,
                            explanation: 'Despite leading in AI development, many tech giants lag in their own internal AI governance. External scrutiny from the US and EU is calling for stronger regulation.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Who bears responsibility for AI governance and risk management?',
                            options: [
                                'Only data scientists and ML engineers',
                                'Primarily the IT department',
                                'Data scientists, business leaders, legal counsel, and the board of directors',
                                'External auditors exclusively'
                            ],
                            correct: 2,
                            explanation: 'AI governance is a shared responsibility across data scientists, business unit leaders, legal counsel, privacy officers, and executive leadership including the board.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the BEST go-to strategy to ensure AI systems are developed and deployed ethically and transparently?',
                            options: [
                                'Cybersecurity controls alone',
                                'Enterprise Risk Management plan only',
                                'AI governance and model risk management',
                                'A global regulation and compliance program'
                            ],
                            correct: 2,
                            explanation: 'AI governance and model risk management is the comprehensive strategy that ensures ethical, transparent, and risk-aware AI development and deployment.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 2
        // =====================================================================
        {
            id: 'book1-ch2',
            number: '2',
            title: 'Aligning AI Strategy and AI Governance',
            duration: '50 min',
            content: {
                sections: [
                    {
                        title: 'Why Strategy and Governance Must Be Aligned',
                        content: `<p>An AI strategy without AI governance is an AI failure. The relationship between AI strategy and AI governance is critical — they are complementary frameworks that shape each other's scope and focus.</p>

                        <p>AI governance ensures AI systems and models are fair, accurate, and free from discrimination. Your AI strategy defines what you build; your governance defines how responsibly you build it.</p>

                        <div class="info-box important">
                            <div class="info-box-title">Key Principle</div>
                            <p>Your AI strategy shapes the scope and focus of your governance framework, and any changes to strategy may necessitate changes to governance — and vice versa.</p>
                        </div>`
                    },
                    {
                        title: 'Cost Factors in Your AI Program Strategy',
                        content: `<p>A realistic AI program strategy must account for all cost dimensions:</p>
                        <table class="content-table">
                            <thead>
                                <tr><th>Cost Factor</th><th>Description</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Personnel and Labor</strong></td><td>Data scientists, ML engineers, governance specialists, legal experts</td></tr>
                                <tr><td><strong>Infrastructure and Development</strong></td><td>Compute, storage, platforms, development tools</td></tr>
                                <tr><td><strong>Governance and Compliance</strong></td><td>Audits, assessments, documentation, compliance reporting</td></tr>
                                <tr><td><strong>Potential Fines and Liabilities</strong></td><td>Regulatory penalties for non-compliant AI systems</td></tr>
                                <tr><td><strong>Process Development</strong></td><td>Creating and maintaining governance workflows and procedures</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'Key Risks in AI Strategy Implementation',
                        content: `<h3>Strategic Risks</h3>
                        <ul>
                            <li><strong>Misalignment Risk:</strong> AI initiatives that don't align with organizational strategy create wasted investment</li>
                            <li><strong>Bias and Fairness Risk:</strong> AI models may perpetuate or amplify existing biases</li>
                            <li><strong>Regulatory Compliance Risk:</strong> Evolving regulations create compliance uncertainty</li>
                            <li><strong>Reputational Risk:</strong> AI failures become public scandals quickly</li>
                            <li><strong>Operational Risk:</strong> AI systems that fail or degrade in production</li>
                        </ul>

                        <h3>Cultural and Social Impacts</h3>
                        <p>The cultural and social impacts of AI include:</p>
                        <ul>
                            <li>The changing employment landscape</li>
                            <li>Shifting privacy expectations</li>
                            <li>Changes in social trust and public perception of institutions</li>
                        </ul>

                        <div class="info-box warning">
                            <div class="info-box-title">Accountability Principle</div>
                            <p>Accountability in AI requires AI actors or business entities to be accountable and responsible for the AI system's results — including both intended outcomes and unintended consequences.</p>
                        </div>`
                    },
                    {
                        title: 'Choosing an AI Governance Framework',
                        content: `<p>When selecting an AI governance framework, consider these four key factors:</p>

                        <ol>
                            <li><strong>Regulatory Environment:</strong> Which regulations apply to your industry and geography (EU AI Act, NIST AI RMF, SR 11-7)?</li>
                            <li><strong>Organizational Maturity:</strong> Your current AI capabilities, existing governance structures, and team skills</li>
                            <li><strong>Risk Profile:</strong> The risk level of your AI use cases and the populations they affect</li>
                            <li><strong>Scalability:</strong> Ability to grow the framework as AI use expands across the organization</li>
                        </ol>

                        <div class="info-box tip">
                            <div class="info-box-title">Framework Integration</div>
                            <p>AI governance frameworks should not exist in isolation — they must integrate with your existing enterprise risk management, data governance, and compliance frameworks for maximum effectiveness.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 2 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'Which statement best describes the relationship between AI strategy and AI governance?',
                            options: [
                                'They are completely separate functions with no overlap',
                                'AI strategy shapes governance scope; changes to either may necessitate changes to the other',
                                'Governance always takes priority over strategy',
                                'Strategy is set once; governance changes frequently without affecting strategy'
                            ],
                            correct: 1,
                            explanation: 'AI strategy and governance are complementary — your strategy shapes your governance framework\'s scope and focus, and any changes may necessitate adjustments to both.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the primary factor AI governance must ensure about AI systems and models?',
                            options: [
                                'They are fast, cost-effective, and scalable',
                                'They are fair, accurate, and free from discrimination',
                                'They are built using open-source technologies',
                                'They reduce headcount and operational costs'
                            ],
                            correct: 1,
                            explanation: 'The principal factor of AI governance is to ensure that AI systems and models are fair, accurate, and indiscriminate (non-discriminatory) in their outcomes.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What are the cultural and social impacts of AI that organizations must address?',
                            options: [
                                'Improved profitability, faster delivery, and cost reduction',
                                'Changing employment landscape, shifting privacy expectations, and changing social trust',
                                'Better customer experience, faster processing, and improved accuracy',
                                'Reduced regulation, increased innovation, and market expansion'
                            ],
                            correct: 1,
                            explanation: 'The cultural and social impacts of AI include the changing employment landscape, shifting privacy expectations, and changes in public trust and social norms.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which statement about public empowerment in AI is CORRECT?',
                            options: [
                                'We must teach the public AI code writing and data science to harness AI\'s potential',
                                'We must empower the public to understand AI impacts, risks, and their rights — not necessarily to code',
                                'Public education about AI is not necessary for governance',
                                'Only technical professionals need to understand AI systems'
                            ],
                            correct: 1,
                            explanation: 'Empowering the public doesn\'t require teaching everyone to code — it means building AI literacy about impacts, risks, and rights, enabling informed participation in AI governance.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What must accountability in AI require?',
                            options: [
                                'AI systems to be 100% accurate at all times',
                                'AI actors and business entities to be accountable and responsible for AI system results',
                                'Complete automation without human involvement',
                                'Regulatory agencies to approve every AI decision'
                            ],
                            correct: 1,
                            explanation: 'Accountability in AI requires AI actors or business entities to be responsible for the AI system\'s results, including both intended and unintended outcomes.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 3
        // =====================================================================
        {
            id: 'book1-ch3',
            number: '3',
            title: 'How to Sound Like an AI Governance and Model Risk Management Guru',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'What Is AI Governance?',
                        content: `<p>AI Governance is the framework of principles, policies, processes, standards, and technologies that guide the responsible development and use of artificial intelligence (AI) systems.</p>

                        <p>Effective AI governance ensures that AI systems are:</p>
                        <ul>
                            <li>Fair and free from harmful bias</li>
                            <li>Transparent and explainable</li>
                            <li>Accountable with clear ownership</li>
                            <li>Safe and secure</li>
                            <li>Continuously monitored</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">The Catalyst for Responsible AI</div>
                            <p>The catalyst for responsible AI is <strong>data quality</strong>, <strong>data provenance</strong>, and <strong>model explainability</strong>. Without these three foundations, even the most sophisticated AI governance framework will fail.</p>
                        </div>`
                    },
                    {
                        title: 'AI Model Risk Factors',
                        content: `<p>Understanding the five key AI model risk factors is essential for any AI governance professional:</p>

                        <table class="content-table">
                            <thead>
                                <tr><th>#</th><th>Risk Factor</th><th>Description</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>1</td><td><strong>Model Error Risk</strong></td><td>Inaccurate or unreliable model outputs due to poor training, data quality, or algorithm selection</td></tr>
                                <tr><td>2</td><td><strong>Bias Risk</strong></td><td>Systematic discrimination in model outputs based on protected characteristics</td></tr>
                                <tr><td>3</td><td><strong>Implementation Risk</strong></td><td>Misuse, incorrect deployment, or use outside intended scope</td></tr>
                                <tr><td>4</td><td><strong>Data Risk</strong></td><td>Poor data quality, missing data, data drift, or compromised training data</td></tr>
                                <tr><td>5</td><td><strong>Governance Risk</strong></td><td>Lack of oversight, documentation, validation, or accountability structures</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'Data-Centric AI Governance',
                        content: `<p>A data-centric AI governance framework addresses data at every stage of the AI lifecycle. It involves:</p>

                        <ul>
                            <li><strong>Data Quality Assessment:</strong> Evaluating accuracy, completeness, consistency, timeliness, and reliability</li>
                            <li><strong>Dataset Profiling and Bias Detection:</strong> Identifying statistical anomalies and demographic imbalances</li>
                            <li><strong>Data Cleaning and Preprocessing:</strong> Standardizing and preparing data to reduce bias</li>
                            <li><strong>Data Versioning:</strong> Tracking which data was used to train which model version</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Data Science and Governance</div>
                            <p>A robust data science strategy for AI governance prioritizes data quality, proactive bias mitigation, and explainable models — with a focus on continuous improvement. Data science fuels model development and ongoing monitoring.</p>
                        </div>

                        <h3>Effective Feedback Loops</h3>
                        <p>For effective feedback loops, data scientists design mechanisms to:</p>
                        <ul>
                            <li>Collect real-world performance data</li>
                            <li>Detect concept drift (when model performance degrades over time)</li>
                            <li>Update models based on new information and changing conditions</li>
                        </ul>`
                    },
                    {
                        title: 'MRM vs. AI Model Risk Governance',
                        content: `<h3>Model Risk Management (MRM)</h3>
                        <p>MRM aims to ensure that AI models are trustworthy based on:</p>
                        <ul>
                            <li>Positive business outcomes</li>
                            <li>Regulatory compliance</li>
                            <li>Internal control standards</li>
                            <li>Brand protection</li>
                            <li>Social responsibility</li>
                        </ul>

                        <h3>AI Model Risk Governance</h3>
                        <p>AI Model Risk Governance is the broader framework of policies, processes, and accountability structures that ensure MRM activities are performed consistently and effectively across the organization.</p>

                        <div class="info-box example">
                            <div class="info-box-title">Key Distinction</div>
                            <p><strong>MRM</strong> = the technical practices of validating, testing, and monitoring models.<br>
                            <strong>Risk Governance</strong> = the organizational structure, policies, and accountability that ensure MRM is done properly and consistently.</p>
                        </div>

                        <p>Organizations should implement control objectives and activities that increase insight accuracy through improved model development, validation, and bias detection.</p>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 3 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What are the three catalysts for responsible AI?',
                            options: [
                                'Speed, accuracy, and scalability',
                                'Data quality, data provenance, and model explainability',
                                'Ethics, compliance, and security',
                                'Training data, algorithms, and compute power'
                            ],
                            correct: 1,
                            explanation: 'The three catalysts for responsible AI are data quality, data provenance (knowing where data came from and how it was used), and model explainability.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which option best describes a data-centric AI governance framework?',
                            options: [
                                'Focuses only on model accuracy and speed',
                                'Includes data quality assessment, bias detection, data cleaning, and data versioning',
                                'Prioritizes rapid deployment over data management',
                                'Relies solely on data scientists without governance oversight'
                            ],
                            correct: 1,
                            explanation: 'A data-centric AI governance framework involves Data Quality Assessment, Dataset Profiling and Bias Detection, Data Cleaning and Preprocessing, and Data Versioning — all four together.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the primary difference between AI Model Risk Management (MRM) and AI Model Risk Governance?',
                            options: [
                                'MRM is a regulatory requirement; Risk Governance is optional',
                                'MRM is the technical validation/monitoring practices; Risk Governance is the organizational structure ensuring MRM is done consistently',
                                'Risk Governance replaces MRM in modern organizations',
                                'They are the same concept with different names'
                            ],
                            correct: 1,
                            explanation: 'MRM covers the technical practices (validation, testing, monitoring), while Risk Governance is the framework of policies, processes, and accountability structures ensuring MRM is applied consistently.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'For effective feedback loops, data scientists must design mechanisms to collect performance data, detect concept drift, and:',
                            options: [
                                'Deploy new models immediately',
                                'Update models based on new information and changing conditions',
                                'Reduce model complexity',
                                'Eliminate human oversight'
                            ],
                            correct: 1,
                            explanation: 'Effective feedback loops collect real-world performance data, detect concept drift, and enable model updates based on new information and changing real-world conditions.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Model risk management ensures AI models are trustworthy based on all EXCEPT which of the following?',
                            options: [
                                'Positive business outcomes and regulatory compliance',
                                'Internal control standards and brand protection',
                                'Maximum automation and elimination of human review',
                                'Social responsibility'
                            ],
                            correct: 2,
                            explanation: 'MRM aims to ensure trustworthiness through positive outcomes, compliance, internal controls, brand protection, and social responsibility — NOT through eliminating human review, which is essential.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 4
        // =====================================================================
        {
            id: 'book1-ch4',
            number: '4',
            title: 'Designing a Well-Governed AI Lifecycle Model',
            duration: '55 min',
            content: {
                sections: [
                    {
                        title: 'Starting with Problem Identification',
                        content: `<p>The first step in designing a well-governed AI development lifecycle is <strong>careful problem identification</strong>. Before writing a single line of code or collecting data, organizations must clearly define:</p>

                        <ul>
                            <li>What problem are we solving with AI?</li>
                            <li>Is AI the most appropriate solution?</li>
                            <li>Who will be affected by this AI system?</li>
                            <li>What are the potential unintended consequences?</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Governance Starts at the Beginning</div>
                            <p>Governance must be embedded from the first stage — not added at deployment as an afterthought. Problems identified early are exponentially less costly to fix than those discovered post-deployment.</p>
                        </div>`
                    },
                    {
                        title: 'Data Collection and Model Development',
                        content: `<h3>Responsible Data Collection</h3>
                        <p>To ensure responsible data collection practices, organizations must prioritize:</p>
                        <ul>
                            <li><strong>Quality Standards:</strong> Data must be accurate, complete, consistent, and timely</li>
                            <li><strong>Bias Assessments:</strong> Evaluate data for representation gaps and historical biases</li>
                            <li><strong>Privacy Compliance:</strong> Ensure lawful basis for data collection and use</li>
                            <li><strong>Documentation:</strong> Maintain complete data lineage records</li>
                        </ul>

                        <h3>Model Development Focus Areas</h3>
                        <ul>
                            <li><strong>Explainability vs. Accuracy Balance:</strong> Choose models that provide appropriate explainability for the use case's risk level</li>
                            <li><strong>Bias Mitigation Techniques:</strong> Apply techniques to detect and reduce discriminatory patterns</li>
                            <li><strong>Thorough Documentation:</strong> Record all design decisions, trade-offs, and assumptions</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Development Governance</div>
                            <p>During model development, it is critical to balance explainability with accuracy. Higher-stakes decisions require more explainable models, even if this means some accuracy trade-off.</p>
                        </div>`
                    },
                    {
                        title: 'Deployment and Traceability',
                        content: `<h3>Model Deployment Best Practices</h3>
                        <p>During model deployment, the practice that ensures traceability is <strong>version control</strong>. Version control allows organizations to:</p>
                        <ul>
                            <li>Track exactly which model version is in production</li>
                            <li>Roll back to previous versions if issues arise</li>
                            <li>Maintain a clear audit trail of model changes</li>
                            <li>Document the training data used for each version</li>
                        </ul>

                        <h3>Human Oversight at Deployment</h3>
                        <p>AI systems deployed in consequential contexts require meaningful human oversight mechanisms:</p>
                        <ul>
                            <li>Human-in-the-Loop (HITL) for high-stakes decisions</li>
                            <li>Clear escalation paths for uncertain cases</li>
                            <li>Appeal and redress mechanisms for affected parties</li>
                        </ul>`
                    },
                    {
                        title: 'Continuous Monitoring and Governance',
                        content: `<p>A well-governed AI lifecycle includes regular audits and incident response plans throughout the model's operational life.</p>

                        <div class="info-box warning">
                            <div class="info-box-title">Common Misconception</div>
                            <p>Continuous monitoring and feedback loops are NOT only necessary before deploying the AI model. They are essential throughout the entire operational life of the system to detect drift, emerging biases, and performance degradation.</p>
                        </div>

                        <h3>Governance Checkpoints</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Lifecycle Stage</th><th>Key Governance Activity</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Problem Definition</td><td>Stakeholder impact assessment, ethical review</td></tr>
                                <tr><td>Data Collection</td><td>Bias assessment, privacy review, quality validation</td></tr>
                                <tr><td>Model Development</td><td>Explainability review, bias testing, documentation</td></tr>
                                <tr><td>Testing</td><td>Independent validation, subgroup fairness testing</td></tr>
                                <tr><td>Deployment</td><td>Version control, human oversight setup, appeal mechanisms</td></tr>
                                <tr><td>Monitoring</td><td>Performance tracking, bias monitoring, drift detection, audit</td></tr>
                            </tbody>
                        </table>

                        <p>Promote clear stakeholder communication and foster a cross-functional collaborative team throughout the iterative process.</p>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 4 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the FIRST step in designing a well-governed AI development lifecycle?',
                            options: [
                                'Implementing rigorous testing',
                                'Establishing clear stakeholder communication',
                                'Beginning with careful problem identification',
                                'Incorporating bias mitigation techniques'
                            ],
                            correct: 2,
                            explanation: 'The first step is careful problem identification — clearly defining what problem AI will solve, whether AI is appropriate, who will be affected, and what risks exist before any development begins.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which of the following is NOT a focus during the AI model development stage?',
                            options: [
                                'Balancing explainability with accuracy',
                                'Incorporating bias mitigation techniques',
                                'Maintaining thorough documentation',
                                'Implementing continuous monitoring'
                            ],
                            correct: 3,
                            explanation: 'Continuous monitoring is a post-deployment, operational activity — not a model development stage focus. Development focuses on explainability balance, bias mitigation, and documentation.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'During model deployment, which practice BEST ensures traceability?',
                            options: [
                                'Human oversight',
                                'Version control',
                                'Rigorous testing',
                                'Regular audits'
                            ],
                            correct: 1,
                            explanation: 'Version control ensures traceability by tracking exactly which model version is deployed, its training data, and changes over time — creating a complete audit trail.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What should be prioritized to ensure responsible data collection practices?',
                            options: [
                                'Explainability and accuracy',
                                'Quality standards and bias assessments',
                                'Testing and independent review',
                                'Stakeholder communication'
                            ],
                            correct: 1,
                            explanation: 'Responsible data collection requires prioritizing quality standards (accuracy, completeness, consistency) and bias assessments to identify representation gaps and historical biases.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'True or False: Continuous monitoring and feedback loops are only necessary BEFORE deploying the AI model.',
                            options: [
                                'True — pre-deployment testing catches all issues',
                                'False — monitoring is essential throughout the entire operational life of the system',
                                'True — once deployed, models are stable',
                                'False — but post-deployment monitoring is optional for low-risk models'
                            ],
                            correct: 1,
                            explanation: 'FALSE. Continuous monitoring is essential throughout the entire operational life — detecting concept drift, emerging biases, and performance degradation that can occur after deployment.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 5
        // =====================================================================
        {
            id: 'book1-ch5',
            number: '5',
            title: 'Aligning AI Governance with Other Internal Governance Models',
            duration: '60 min',
            content: {
                sections: [
                    {
                        title: 'The Convergence of Governance Frameworks',
                        content: `<p>Trustworthy AI cannot exist in isolation. It must be woven into organizational policies, processes, and procedures. The key characteristic of trustworthy AI integrated into organizational governance is its <strong>ethical design</strong> — not just high performance or rapid deployment.</p>

                        <p>AI governance intersects and aligns with multiple internal governance models:</p>
                        <ul>
                            <li>Enterprise Risk Management (ERM)</li>
                            <li>Data Governance</li>
                            <li>Cybersecurity Governance</li>
                            <li>Privacy and Compliance Frameworks</li>
                            <li>IT Governance (COBIT, ITIL)</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Integration Benefit</div>
                            <p>Organizations that integrate AI governance with existing governance structures gain efficiencies, reduce redundancy, and create a more comprehensive view of organizational risk.</p>
                        </div>`
                    },
                    {
                        title: 'AI Ethics as a Governance Model',
                        content: `<p>AI Ethics governance encompasses: <strong>fairness</strong>, <strong>non-discrimination</strong>, <strong>transparency</strong>, <strong>accountability</strong>, <strong>privacy</strong>, <strong>security</strong>, and <strong>social benefit</strong>.</p>

                        <p>This comprehensive ethics model is the foundation upon which all other AI governance components rest. Without ethical design, no amount of technical sophistication can make an AI system truly trustworthy.</p>

                        <h3>Essential Elements for Building Trust</h3>
                        <p>Building trust and mitigating risks in AI systems requires:</p>
                        <ul>
                            <li><strong>AI Security Governance:</strong> Protecting AI systems from adversarial attacks, data poisoning, and unauthorized access</li>
                            <li><strong>Comprehensive Documentation:</strong> Full audit trails, model cards, and data lineage records</li>
                            <li><strong>Active Stakeholder Engagement:</strong> Involving affected communities in governance design</li>
                            <li><strong>Independent Validation:</strong> Third-party review of high-risk AI systems</li>
                        </ul>`
                    },
                    {
                        title: 'Data Governance Integration',
                        content: `<h3>Data Governance Principles for AI</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Principle</th><th>AI Application</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Accuracy</strong></td><td>Training data must be accurate and up-to-date</td></tr>
                                <tr><td><strong>Completeness</strong></td><td>No missing data that creates representation gaps</td></tr>
                                <tr><td><strong>Consistency</strong></td><td>Uniform data definitions across sources</td></tr>
                                <tr><td><strong>Timeliness</strong></td><td>Data must be current and relevant</td></tr>
                                <tr><td><strong>Reliability</strong></td><td>Trustworthy sources with documented provenance</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box tip">
                            <div class="info-box-title">Data Lineage</div>
                            <p>Data lineage tracks the source of training data and its usage throughout the AI development lifecycle — essential for audits, incident investigations, and regulatory compliance.</p>
                        </div>`
                    },
                    {
                        title: 'Cybersecurity and AI Governance Alignment',
                        content: `<h3>AI-Specific Security Considerations</h3>
                        <p>AI systems face unique security threats that traditional IT security doesn't fully address:</p>
                        <ul>
                            <li><strong>Adversarial Attacks:</strong> Inputs crafted to fool AI models into making wrong decisions</li>
                            <li><strong>Data Poisoning:</strong> Corrupting training data to manipulate model behavior</li>
                            <li><strong>Model Extraction:</strong> Stealing model logic through query responses</li>
                            <li><strong>Model Inversion:</strong> Reconstructing training data from model outputs</li>
                        </ul>

                        <h3>Security Controls for AI</h3>
                        <ul>
                            <li>Encryption of training data and model artifacts</li>
                            <li>Prohibitive access controls on model development environments</li>
                            <li>Backup and recovery procedures for models and data</li>
                            <li>Regular adversarial robustness testing</li>
                        </ul>

                        <div class="info-box warning">
                            <div class="info-box-title">Privacy by Design</div>
                            <p>When collecting and using data for AI systems, privacy by design is essential to protecting personally identifiable information (PII). Privacy cannot be retrofitted — it must be built in from the start.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 5 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the key characteristic of trustworthy AI integrated into organizational policies, processes, and procedures?',
                            options: [
                                'High performance',
                                'Rapid deployment',
                                'Ethical design',
                                'Minimal oversight'
                            ],
                            correct: 2,
                            explanation: 'Ethical design is the key characteristic of trustworthy AI. Performance and speed matter, but they cannot substitute for ethical foundations in AI governance.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which governance model encompasses fairness, non-discrimination, transparency, accountability, privacy, security, and social benefit?',
                            options: [
                                'AI Security Governance',
                                'Data Governance',
                                'AI Ethics',
                                'Model Risk Management'
                            ],
                            correct: 2,
                            explanation: 'AI Ethics as a governance model encompasses all these principles: fairness, non-discrimination, transparency, accountability, privacy, security, and social benefit.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is essential for building trust and mitigating risks in AI systems?',
                            options: [
                                'Rapid development without extensive review',
                                'AI Security Governance combined with documentation and stakeholder engagement',
                                'Minimal documentation to speed deployment',
                                'Limited stakeholder engagement to reduce complexity'
                            ],
                            correct: 1,
                            explanation: 'Building trust requires AI Security Governance, comprehensive documentation, active stakeholder engagement, and independent validation working together.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which AI-specific security threat involves crafting inputs to fool AI models into wrong decisions?',
                            options: [
                                'Data poisoning',
                                'Model extraction',
                                'Adversarial attacks',
                                'Model inversion'
                            ],
                            correct: 2,
                            explanation: 'Adversarial attacks involve crafting inputs specifically designed to fool AI models — exploiting weaknesses in the model\'s learned patterns to cause misclassification or wrong decisions.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'When must privacy by design be applied in AI systems?',
                            options: [
                                'Only when handling highly sensitive data',
                                'After deployment when issues are identified',
                                'From the start of data collection and system design',
                                'Only for public-facing AI systems'
                            ],
                            correct: 2,
                            explanation: 'Privacy by design must be built in from the start — it cannot be retrofitted after the system is built. This is a fundamental principle of responsible AI governance.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 6
        // =====================================================================
        {
            id: 'book1-ch6',
            number: '6',
            title: 'Designing Your AI Governance Framework',
            duration: '50 min',
            content: {
                sections: [
                    {
                        title: 'Framework Goals: Starting with Assessment',
                        content: `<p>The first step in framing the goals of a successful AI governance framework is <strong>conducting a baseline assessment of current AI use and data practices</strong>.</p>

                        <p>Before you can design where you're going, you need to understand where you are. This baseline assessment should cover:</p>
                        <ul>
                            <li>An inventory of all current AI systems in use</li>
                            <li>Current data practices and their governance maturity</li>
                            <li>Existing risks, incidents, and near-misses</li>
                            <li>Regulatory obligations and compliance gaps</li>
                            <li>Organizational culture and readiness for change</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Don't Skip the Assessment</div>
                            <p>Organizations that jump directly to policy creation without a baseline assessment often create frameworks that don't fit their actual AI usage patterns or risk profile.</p>
                        </div>`
                    },
                    {
                        title: 'Crafting Core Policies',
                        content: `<p>Crafting core policies in an AI governance framework requires <strong>defining ethical principles such as fairness and transparency</strong> as the foundation.</p>

                        <h3>Essential Policy Areas</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Policy Area</th><th>Key Requirements</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Ethical Principles</strong></td><td>Fairness, transparency, accountability, privacy, safety</td></tr>
                                <tr><td><strong>Data Governance</strong></td><td>Data quality, provenance, retention, access controls</td></tr>
                                <tr><td><strong>Model Development</strong></td><td>Development standards, bias testing, documentation requirements</td></tr>
                                <tr><td><strong>Deployment Controls</strong></td><td>Approval gates, version control, human oversight requirements</td></tr>
                                <tr><td><strong>Monitoring</strong></td><td>Performance metrics, drift detection, incident reporting</td></tr>
                                <tr><td><strong>Stakeholder Rights</strong></td><td>Transparency notices, appeal mechanisms, redress processes</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box warning">
                            <div class="info-box-title">Common Framework Pitfalls</div>
                            <p>Do not focus solely on data governance while ignoring model risk, or ignore stakeholder feedback when crafting policies. Prioritizing rapid deployment over safety in policy design creates significant long-term risk.</p>
                        </div>`
                    },
                    {
                        title: 'Bringing the Framework to Life',
                        content: `<p>What is essential for bringing an AI governance framework to life? <strong>Ongoing communication, tools, and training</strong> — not a one-time training session or restricting access to technologies.</p>

                        <h3>Implementation Components</h3>
                        <ul>
                            <li><strong>Ongoing Training:</strong> Regular upskilling as AI technology and regulations evolve</li>
                            <li><strong>Governance Tools:</strong> Model registries, bias detection platforms, audit trail systems</li>
                            <li><strong>Communication:</strong> Regular updates on framework changes, incident reports, lessons learned</li>
                            <li><strong>Champions Network:</strong> Governance ambassadors embedded in development teams</li>
                            <li><strong>Incentive Alignment:</strong> Performance metrics that reward governance compliance</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Framework as Living Document</div>
                            <p>An AI governance framework is never "done." It must evolve with changes in AI technology, regulatory requirements, organizational risk appetite, and lessons learned from incidents.</p>
                        </div>`
                    },
                    {
                        title: 'Roles and Responsibilities',
                        content: `<h3>Key Governance Roles</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Role</th><th>Primary Responsibilities</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>AI Governance/Steering Committee</strong></td><td>Oversee AI strategy and risk management</td></tr>
                                <tr><td><strong>Data Scientists</strong></td><td>Model development, bias mitigation, explainability</td></tr>
                                <tr><td><strong>AI Ethicist</strong></td><td>Guide ethical considerations for development and use</td></tr>
                                <tr><td><strong>Risk and Compliance Officer</strong></td><td>Ensure adherence to regulations and ethical standards</td></tr>
                                <tr><td><strong>Business Stakeholders</strong></td><td>Define use cases and governance requirements</td></tr>
                            </tbody>
                        </table>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 6 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the FIRST step in framing the goals of a successful AI governance framework?',
                            options: [
                                'Implementing AI ethics guidelines immediately',
                                'Establishing a dedicated AI team',
                                'Conducting a baseline assessment of current AI use and data practices',
                                'Starting with pilot projects to test governance approaches'
                            ],
                            correct: 2,
                            explanation: 'A baseline assessment of current AI use and data practices must come first — you need to understand your current state before designing governance goals and policies.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which is crucial for crafting core policies in an AI governance framework?',
                            options: [
                                'Focusing solely on data governance',
                                'Ignoring stakeholder feedback to maintain objectivity',
                                'Defining ethical principles such as fairness and transparency',
                                'Prioritizing rapid deployment over safety'
                            ],
                            correct: 2,
                            explanation: 'Defining ethical principles (fairness, transparency, accountability, privacy, safety) is the foundation of core AI governance policies — all other policies build on these.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is ESSENTIAL for bringing an AI governance framework to life?',
                            options: [
                                'A one-time comprehensive training session at launch',
                                'Ongoing communication, tools, and training',
                                'Restricting access to AI technologies to reduce risk',
                                'Minimizing stakeholder involvement to reduce complexity'
                            ],
                            correct: 1,
                            explanation: 'Bringing a framework to life requires ongoing communication, tools (model registries, bias detection), and continuous training — not a one-time event.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which role in the AI governance structure is primarily responsible for ethical considerations in AI development?',
                            options: [
                                'Data Scientist',
                                'Risk and Compliance Officer',
                                'AI Ethicist',
                                'Business Stakeholder'
                            ],
                            correct: 2,
                            explanation: 'The AI Ethicist guides ethical considerations for AI development and use — ensuring ethical principles are applied throughout the system lifecycle.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What characterizes a mature AI governance framework?',
                            options: [
                                'It is static and comprehensive from the start',
                                'It evolves continuously with technology, regulations, and lessons learned',
                                'It focuses exclusively on regulatory compliance',
                                'It is managed entirely by the IT department'
                            ],
                            correct: 1,
                            explanation: 'A mature AI governance framework is a living document that continuously evolves with AI technology advances, regulatory changes, risk appetite shifts, and incident learnings.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 7
        // =====================================================================
        {
            id: 'book1-ch7',
            number: '7',
            title: 'AI Governance and Oversight Model',
            duration: '50 min',
            content: {
                sections: [
                    {
                        title: 'AI Governance Structure for Large Organizations',
                        content: `<p>For large AI-driven organizations, the recommended governance structure is <strong>a dedicated AI oversight committee reporting to the full board</strong>. This ensures AI governance has appropriate executive visibility and accountability.</p>

                        <h3>Structure Components</h3>
                        <ul>
                            <li><strong>Board-Level AI Committee:</strong> Strategic oversight, risk appetite setting, accountability</li>
                            <li><strong>AI Governance Committee:</strong> Operational policy and framework management</li>
                            <li><strong>AI Center of Excellence (CoE):</strong> Technical standards, tooling, and capability building</li>
                            <li><strong>Business Unit AI Leads:</strong> Day-to-day implementation and compliance</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Why Board-Level Matters</div>
                            <p>AI systems can have organization-wide consequences. Board-level oversight ensures that AI risks are treated with the same gravity as financial, legal, and operational risks.</p>
                        </div>`
                    },
                    {
                        title: 'AI Center of Excellence',
                        content: `<p>An AI Center of Excellence (CoE) plays a central role in establishing and maintaining AI governance across the organization. Key CoE responsibilities include:</p>

                        <table class="content-table">
                            <thead>
                                <tr><th>Function</th><th>Activities</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Standards Development</strong></td><td>Create AI development, testing, and deployment standards</td></tr>
                                <tr><td><strong>Tool Management</strong></td><td>Maintain model registries, bias detection tools, audit systems</td></tr>
                                <tr><td><strong>Training and Enablement</strong></td><td>Build AI governance capabilities across teams</td></tr>
                                <tr><td><strong>Review and Approval</strong></td><td>Governance gate reviews for high-risk AI projects</td></tr>
                                <tr><td><strong>Incident Management</strong></td><td>Coordinate response to AI-related incidents</td></tr>
                                <tr><td><strong>Regulatory Monitoring</strong></td><td>Track evolving AI regulations and standards</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'Traceability and Accountability',
                        content: `<p>What is essential for AI systems to ensure traceability and accountability throughout their lifecycle? <strong>Continuous monitoring and feedback loops</strong>.</p>

                        <p>Traceability requires maintaining:</p>
                        <ul>
                            <li><strong>Model Registry:</strong> Complete inventory of all AI models with version history</li>
                            <li><strong>AI Factsheets:</strong> Standardized documentation of model design, data, performance, and limitations</li>
                            <li><strong>Audit Trails:</strong> Logs of model decisions, human overrides, and system changes</li>
                            <li><strong>Data Lineage:</strong> Full chain of custody for training and inference data</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">AI Facts and Inventory</div>
                            <p>AI actors must maintain the ability to have AI facts — inclusive of versions and data lineage — as evident in the governance process. This supports audits, regulatory compliance, and incident investigations.</p>
                        </div>`
                    },
                    {
                        title: 'Human Oversight Mechanisms',
                        content: `<h3>Human-in-the-Loop (HITL) Design</h3>
                        <p>Effective human oversight requires thoughtful design, not just assigning a human to "review" AI decisions. Key elements include:</p>

                        <ul>
                            <li><strong>Clear Criteria:</strong> Define which decisions require human review vs. full automation</li>
                            <li><strong>Meaningful Review:</strong> Humans must have sufficient information, time, and authority to actually override AI</li>
                            <li><strong>Escalation Paths:</strong> Clear routes for uncertain or high-risk cases</li>
                            <li><strong>Override Documentation:</strong> Record when and why humans override AI recommendations</li>
                        </ul>

                        <div class="info-box warning">
                            <div class="info-box-title">Automation Bias</div>
                            <p>Integrating human judgment into AI decision-making is especially important in high-stakes areas where automation bias can lead humans to rubber-stamp AI decisions without genuine critical review. Design systems to prevent this.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 7 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the recommended governance structure for AI in large AI-driven organizations?',
                            options: [
                                'A single data scientist handling all AI governance tasks',
                                'A dedicated AI oversight committee reporting to the full board',
                                'Outsourcing AI governance entirely to an external agency',
                                'Ignoring formal governance and focusing on rapid development'
                            ],
                            correct: 1,
                            explanation: 'Large organizations need a dedicated AI oversight committee reporting to the full board — ensuring AI governance has executive visibility and accountability at the highest level.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which role in the AI governance structure is responsible for ethical considerations in AI development?',
                            options: [
                                'Data Scientist',
                                'Risk and Compliance Officer',
                                'AI Ethicist',
                                'Business Stakeholder'
                            ],
                            correct: 2,
                            explanation: 'The AI Ethicist is specifically responsible for guiding ethical considerations in AI development and use across the organization.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is ESSENTIAL for AI systems to ensure traceability and accountability throughout their lifecycle?',
                            options: [
                                'Rapid deployment cadence',
                                'Continuous monitoring and feedback loops',
                                'Minimal documentation to reduce overhead',
                                'Limited stakeholder engagement'
                            ],
                            correct: 1,
                            explanation: 'Continuous monitoring and feedback loops are essential for traceability — combined with model registries, AI factsheets, audit trails, and data lineage records.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What risk does "automation bias" create in human oversight of AI systems?',
                            options: [
                                'It makes AI systems too slow for practical use',
                                'It causes humans to rubber-stamp AI decisions without genuine critical review',
                                'It creates excessive documentation burden',
                                'It prevents AI systems from learning from feedback'
                            ],
                            correct: 1,
                            explanation: 'Automation bias leads humans to uncritically accept AI recommendations without genuine review — defeating the purpose of human oversight and creating accountability gaps.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What must an AI Factsheet contain to support governance and accountability?',
                            options: [
                                'Only the model accuracy metrics',
                                'Marketing materials about the AI system\'s benefits',
                                'Standardized documentation of model design, data, performance, and limitations',
                                'Only the regulatory compliance certificates'
                            ],
                            correct: 2,
                            explanation: 'AI Factsheets (also called Model Cards) must contain standardized documentation of model design, training data, performance metrics, limitations, and governance information — supporting audits and accountability.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 8
        // =====================================================================
        {
            id: 'book1-ch8',
            number: '8',
            title: 'Managing and Addressing AI Compliance',
            duration: '50 min',
            content: {
                sections: [
                    {
                        title: 'The Evolving Landscape of AI Compliance',
                        content: `<p>The primary reason for the rapidly evolving landscape of AI compliance is <strong>increasing regulatory scrutiny and proposed AI-specific regulations</strong>. Governments worldwide are responding to AI risks with new laws and frameworks.</p>

                        <h3>Key Regulatory Developments</h3>
                        <ul>
                            <li><strong>EU AI Act:</strong> Risk-based classification system with strict requirements for high-risk AI</li>
                            <li><strong>NIST AI RMF:</strong> US voluntary framework for managing AI risks</li>
                            <li><strong>GDPR Article 22:</strong> Rights related to automated decision-making</li>
                            <li><strong>Financial Regulations:</strong> SR 11-7 and emerging AI-specific banking guidance</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Proactive vs. Reactive</div>
                            <p>Organizations that wait for regulations before acting find themselves in reactive compliance mode — expensive, disruptive, and often insufficient. Proactive governance anticipates regulatory requirements and builds them in from the start.</p>
                        </div>`
                    },
                    {
                        title: 'Achieving AI Compliance',
                        content: `<p>The recommended approach for achieving AI compliance is <strong>integrating AI compliance with broader enterprise compliance frameworks</strong> — not treating it as an isolated activity.</p>

                        <h3>Integration Benefits</h3>
                        <ul>
                            <li>Leverages existing compliance processes and personnel</li>
                            <li>Reduces redundancy and reporting overhead</li>
                            <li>Creates a holistic view of organizational risk</li>
                            <li>Enables cross-framework control mapping</li>
                        </ul>

                        <h3>Compliance Framework Components</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Component</th><th>Description</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Risk Assessment</strong></td><td>Regular evaluation of AI system compliance risks</td></tr>
                                <tr><td><strong>Policy Alignment</strong></td><td>Map AI governance policies to regulatory requirements</td></tr>
                                <tr><td><strong>Evidence Collection</strong></td><td>Maintain documentation demonstrating compliance</td></tr>
                                <tr><td><strong>Monitoring</strong></td><td>Continuous compliance monitoring and gap identification</td></tr>
                                <tr><td><strong>Reporting</strong></td><td>Regular compliance status reporting to leadership</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'Preventing Compliance Surprises',
                        content: `<p>To prevent AI compliance surprises, organizations should <strong>conduct regular AI risk assessments and audits</strong>.</p>

                        <h3>Audit Program Elements</h3>
                        <ul>
                            <li><strong>Pre-deployment Review:</strong> Compliance check before any AI system goes live</li>
                            <li><strong>Periodic Audits:</strong> Scheduled reviews of deployed AI systems</li>
                            <li><strong>Trigger-Based Reviews:</strong> Audits triggered by significant changes, incidents, or regulatory updates</li>
                            <li><strong>Third-Party Assessment:</strong> Independent review for high-risk systems</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Audit Trail Requirements</div>
                            <p>AI models and development activities must always be tracked and auditable. The ability to have AI facts, inclusive of versions and data lineage, must be evident in the governance process.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 8 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the primary reason for the evolving landscape of AI compliance?',
                            options: [
                                'Decreasing interest in AI technologies',
                                'Increasing regulatory scrutiny and proposed AI-specific regulations',
                                'Reduced need for ethical considerations in AI',
                                'Lack of advancements in AI capabilities'
                            ],
                            correct: 1,
                            explanation: 'The rapid evolution of AI compliance is driven by increasing regulatory scrutiny — governments worldwide responding to AI risks with the EU AI Act, NIST AI RMF, and other frameworks.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which approach is recommended for achieving AI compliance?',
                            options: [
                                'Ignoring external regulations until they are finalized',
                                'Integrating AI compliance with broader enterprise compliance frameworks',
                                'Relying solely on internal guidelines without regulatory alignment',
                                'Avoiding stakeholder engagement in compliance processes'
                            ],
                            correct: 1,
                            explanation: 'Integrating AI compliance with broader enterprise frameworks leverages existing processes, reduces redundancy, and creates a holistic risk view.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What should organizations do to prevent AI compliance surprises?',
                            options: [
                                'Conduct regular AI risk assessments and audits',
                                'Avoid updating compliance frameworks once established',
                                'Disregard regulatory developments until mandatory',
                                'Minimize documentation to reduce compliance burden'
                            ],
                            correct: 0,
                            explanation: 'Regular AI risk assessments and audits — pre-deployment, periodic, and trigger-based — prevent compliance surprises by identifying gaps before they become problems.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which regulatory framework uses a risk-based classification system for AI?',
                            options: [
                                'GDPR',
                                'SR 11-7',
                                'EU AI Act',
                                'NIST CSF'
                            ],
                            correct: 2,
                            explanation: 'The EU AI Act uses a risk-based classification system — categorizing AI applications from minimal risk to unacceptable risk, with requirements scaling to risk level.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'For an AI compliance audit trail, what must organizations be able to demonstrate?',
                            options: [
                                'Only the final model accuracy metrics',
                                'AI facts including versions and data lineage throughout the governance process',
                                'Marketing materials describing system benefits',
                                'Only the regulatory approval documents'
                            ],
                            correct: 1,
                            explanation: 'Organizations must maintain AI facts including model versions and data lineage — the complete audit trail demonstrating how models were developed, validated, and deployed.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 9
        // =====================================================================
        {
            id: 'book1-ch9',
            number: '9',
            title: 'Integrating AI Governance with Enterprise GRC',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'The GRC Integration Advantage',
                        content: `<p>The primary benefit of integrating AI governance within the broader Enterprise Governance, Risk, and Compliance (GRC) framework is <strong>proactive governance and risk mitigation</strong>.</p>

                        <p>Enterprise GRC covers the full spectrum of organizational risk:</p>
                        <ul>
                            <li><strong>Operational Risks:</strong> Process failures, human errors, system outages</li>
                            <li><strong>Financial Risks:</strong> Credit, market, and liquidity risks</li>
                            <li><strong>Compliance Risks:</strong> Regulatory violations and legal exposure</li>
                            <li><strong>Reputational Risks:</strong> Brand damage from AI failures or ethical breaches</li>
                            <li><strong>Strategic Risks:</strong> AI decisions that conflict with organizational strategy</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Integration Value</div>
                            <p>AI risks don't exist in isolation — they interconnect with operational, financial, compliance, and reputational risks. GRC integration ensures AI-related risks are visible in the full organizational risk picture.</p>
                        </div>`
                    },
                    {
                        title: 'GRC Tools and Platforms for AI Governance',
                        content: `<p>Leveraging GRC tools and platforms for AI governance provides <strong>a holistic view of risks</strong> across the organization.</p>

                        <h3>GRC Platform Capabilities for AI</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Capability</th><th>AI Governance Application</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Risk Register</strong></td><td>Maintain centralized AI risk inventory with owners and mitigations</td></tr>
                                <tr><td><strong>Control Testing</strong></td><td>Automate testing of AI governance controls</td></tr>
                                <tr><td><strong>Compliance Mapping</strong></td><td>Map AI controls to regulatory requirements</td></tr>
                                <tr><td><strong>Incident Management</strong></td><td>Track and manage AI-related incidents and near-misses</td></tr>
                                <tr><td><strong>Reporting</strong></td><td>Executive dashboards for AI risk status</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box tip">
                            <div class="info-box-title">Avoid Data Silos</div>
                            <p>One of the biggest risks is AI governance creating its own data silos separate from enterprise risk management. GRC integration ensures AI risks are visible alongside all other organizational risks.</p>
                        </div>`
                    },
                    {
                        title: 'Enterprise AI Risk Categories',
                        content: `<h3>AI-Specific Risk Categories in Enterprise GRC</h3>
                        <p>When integrating AI governance into eGRC, organizations must recognize that AI introduces risk categories that traditional GRC may not fully address:</p>

                        <ul>
                            <li><strong>Model Risk:</strong> Risks from incorrect or misused model outputs</li>
                            <li><strong>Algorithmic Bias Risk:</strong> Discriminatory outcomes from biased training data or design</li>
                            <li><strong>Explainability Risk:</strong> Inability to explain or justify AI decisions</li>
                            <li><strong>Data Privacy Risk:</strong> AI processing of personal data in non-compliant ways</li>
                            <li><strong>Third-Party AI Risk:</strong> Risks from vendor-supplied AI systems</li>
                        </ul>

                        <div class="info-box warning">
                            <div class="info-box-title">What eGRC Does NOT Cover</div>
                            <p>Personal preferences risks are NOT a legitimate risk category in enterprise GRC. Risk categories must be based on objective, assessable impacts — not individual preferences.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 9 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the primary benefit of integrating AI governance within the broader GRC framework?',
                            options: [
                                'Increased operational costs from additional processes',
                                'Enhanced data inconsistency across systems',
                                'Proactive governance and risk mitigation',
                                'Reduced need for regulatory compliance'
                            ],
                            correct: 2,
                            explanation: 'Integrating AI governance with GRC enables proactive governance and risk mitigation — identifying and addressing risks before they materialize, rather than reacting to them.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which risk category does NOT typically fall under Enterprise Governance, Risk, and Compliance (eGRC)?',
                            options: [
                                'Operational risks',
                                'Financial risks',
                                'Compliance risks',
                                'Personal preferences risks'
                            ],
                            correct: 3,
                            explanation: 'Personal preferences are not a legitimate GRC risk category. GRC covers objective, assessable risks — operational, financial, compliance, reputational, and strategic.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'How does AI governance benefit from leveraging GRC tools and platforms?',
                            options: [
                                'By reducing transparency in risk reporting',
                                'By creating data silos separate from enterprise risk',
                                'By providing a holistic view of risks across the organization',
                                'By ignoring stakeholder input in risk processes'
                            ],
                            correct: 2,
                            explanation: 'GRC platforms provide a holistic view of organizational risks — enabling AI risks to be visible alongside operational, financial, and compliance risks in an integrated dashboard.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which AI-specific risk is UNIQUE to AI governance compared to traditional GRC?',
                            options: [
                                'Operational process failures',
                                'Financial credit risk',
                                'Algorithmic bias risk creating discriminatory outcomes',
                                'Physical asset damage'
                            ],
                            correct: 2,
                            explanation: 'Algorithmic bias risk — discriminatory outcomes from biased training data or model design — is an AI-specific risk that traditional GRC frameworks may not fully address.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the risk of AI governance creating its own separate data systems?',
                            options: [
                                'It improves AI model performance',
                                'It creates data silos that prevent AI risks from being visible in the full enterprise risk picture',
                                'It increases regulatory compliance efficiency',
                                'It simplifies governance reporting requirements'
                            ],
                            correct: 1,
                            explanation: 'Creating AI governance data silos prevents AI risks from being visible in enterprise risk management — defeating the purpose of integrated GRC and creating blind spots for leadership.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 10
        // =====================================================================
        {
            id: 'book1-ch10',
            number: '10',
            title: 'AI Policy Management and Enforcement',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'The Purpose of AI Policy Management',
                        content: `<p>The primary goal of AI policy management is <strong>to ensure responsible and consistent AI use</strong> across the organization — not to limit innovation or create bureaucracy.</p>

                        <p>Effective AI policies provide:</p>
                        <ul>
                            <li>Clear expectations for AI actors at all levels</li>
                            <li>Consistent standards across business units</li>
                            <li>Accountability structures for AI outcomes</li>
                            <li>Regulatory compliance demonstration</li>
                            <li>Protection for employees, customers, and the organization</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Policy vs. Procedure</div>
                            <p>Policies define WHAT must be done and WHY. Procedures define HOW to do it. Both are essential — a policy without procedures is aspirational; procedures without policy lack authority.</p>
                        </div>`
                    },
                    {
                        title: 'The AI Policy Lifecycle',
                        content: `<h3>Policy Lifecycle Stages</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Stage</th><th>Activities</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Policy Drafting</strong></td><td>Identify requirements, stakeholder input, initial drafting</td></tr>
                                <tr><td><strong>Policy Review</strong></td><td>Legal, compliance, technical, and business review</td></tr>
                                <tr><td><strong>Policy Approval</strong></td><td>Executive or board sign-off on policy</td></tr>
                                <tr><td><strong>Policy Implementation</strong></td><td>Communication, training, tool deployment</td></tr>
                                <tr><td><strong>Policy Enforcement</strong></td><td>Monitoring, auditing, and ensuring compliance</td></tr>
                                <tr><td><strong>Policy Review and Update</strong></td><td>Periodic review, triggered by incidents or regulatory changes</td></tr>
                            </tbody>
                        </table>

                        <p>The stage that involves monitoring and ensuring compliance is <strong>Policy Enforcement</strong> — the final operational stage where policies move from paper to practice.</p>`
                    },
                    {
                        title: 'Key AI Policy Focus Areas',
                        content: `<p>AI policy management must address these core areas:</p>

                        <ul>
                            <li><strong>Data Governance:</strong> How data is collected, stored, used, and disposed of for AI</li>
                            <li><strong>Model Development:</strong> Standards for building, testing, and validating AI models</li>
                            <li><strong>Regulatory Compliance:</strong> Alignment with applicable laws and frameworks</li>
                            <li><strong>Ethical Standards:</strong> Fairness, transparency, and accountability requirements</li>
                            <li><strong>Human Oversight:</strong> When and how human review is required</li>
                            <li><strong>Incident Response:</strong> How to handle AI failures and ethical breaches</li>
                        </ul>

                        <div class="info-box warning">
                            <div class="info-box-title">What Is NOT a Policy Focus Area</div>
                            <p>Personal preferences of individual team members are NOT a legitimate AI policy focus area. Policies must be based on objective organizational requirements, regulatory mandates, and stakeholder protection needs.</p>
                        </div>

                        <h3>Policy Dissemination and Monitoring</h3>
                        <p>Effective policy management goes from drafting to dissemination to implementation, monitoring, and continuous improvement. Additionally, it addresses:</p>
                        <ul>
                            <li>Training programs to ensure understanding and application</li>
                            <li>Clear channels for policy questions and violations</li>
                            <li>Regular audits to verify policy compliance</li>
                        </ul>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 10 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the PRIMARY goal of AI policy management?',
                            options: [
                                'To limit innovation and reduce AI development velocity',
                                'To create data silos for different business units',
                                'To ensure responsible and consistent AI use across the organization',
                                'To avoid regulatory compliance overhead'
                            ],
                            correct: 2,
                            explanation: 'The primary goal of AI policy management is ensuring responsible and consistent AI use — providing clear expectations, accountability, and protection across the organization.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which stage of the AI policy lifecycle involves monitoring and ensuring compliance?',
                            options: [
                                'Policy drafting',
                                'Policy approval',
                                'Policy implementation',
                                'Policy enforcement'
                            ],
                            correct: 3,
                            explanation: 'Policy enforcement is the stage that involves monitoring and ensuring compliance — where policies move from paper to practice through audits, monitoring, and accountability.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which of the following is NOT a focus area for AI policy management?',
                            options: [
                                'Data governance standards',
                                'Model development requirements',
                                'Regulatory compliance alignment',
                                'Personal preferences of individual team members'
                            ],
                            correct: 3,
                            explanation: 'Personal preferences are not a legitimate policy focus area. AI policies must address objective requirements — data governance, model development, compliance, ethics, and human oversight.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the key difference between a policy and a procedure in AI governance?',
                            options: [
                                'Policies are optional; procedures are mandatory',
                                'Policies define WHAT must be done; procedures define HOW to do it',
                                'Procedures are set by leadership; policies are created by technical teams',
                                'They are interchangeable terms with no meaningful distinction'
                            ],
                            correct: 1,
                            explanation: 'Policies define WHAT must be done and WHY (the organizational requirement). Procedures define HOW to do it (the operational steps). Both are needed for effective governance.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What triggers a policy review and update outside of the scheduled review cycle?',
                            options: [
                                'New employee onboarding',
                                'Significant incidents, regulatory changes, or major AI system changes',
                                'Annual budget planning cycles',
                                'Individual team member requests'
                            ],
                            correct: 1,
                            explanation: 'Beyond scheduled reviews, policies should be updated when triggered by significant incidents, regulatory changes, or major changes to AI systems or organizational context.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 11
        // =====================================================================
        {
            id: 'book1-ch11',
            number: '11',
            title: 'Maintaining Privacy Within Your AI Governance Model',
            duration: '40 min',
            content: {
                sections: [
                    {
                        title: 'Privacy as an AI Governance Priority',
                        content: `<p>The key consideration when maintaining privacy in AI governance is <strong>ensuring compliance with privacy regulations</strong> while minimizing data usage.</p>

                        <p>AI systems pose unique privacy challenges:</p>
                        <ul>
                            <li>AI can process vast quantities of personal data at scale</li>
                            <li>Machine learning can infer sensitive information not explicitly shared</li>
                            <li>AI models can "memorize" training data, creating re-identification risks</li>
                            <li>AI outputs may reveal personal information about individuals in training data</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Privacy by Design</div>
                            <p>Privacy must be built into AI systems from the beginning — not added as an afterthought. This means minimizing data collection, anonymizing where possible, and designing systems that respect privacy by default.</p>
                        </div>`
                    },
                    {
                        title: 'Privacy Risks in AI Governance',
                        content: `<h3>Key Privacy Risk Areas</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Risk</th><th>Description</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Data Breaches</strong></td><td>Unauthorized access to personal data used in AI training or inference</td></tr>
                                <tr><td><strong>Unauthorized Data Access</strong></td><td>Internal access to personal data beyond what's needed</td></tr>
                                <tr><td><strong>Re-identification</strong></td><td>Combining supposedly anonymous data to identify individuals</td></tr>
                                <tr><td><strong>Inference Attacks</strong></td><td>Extracting personal information from model outputs</td></tr>
                                <tr><td><strong>Secondary Use</strong></td><td>Using personal data for purposes beyond original consent</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box tip">
                            <div class="info-box-title">Not a Privacy Risk</div>
                            <p>Transparent data usage (where individuals are clearly informed about how their data is used) is NOT a privacy risk — it is a privacy protection. Transparency is essential for privacy compliance.</p>
                        </div>`
                    },
                    {
                        title: 'Collaboration for AI Privacy',
                        content: `<p>AI actors must collaborate with <strong>legal counsel</strong> to address privacy matters — not just technical teams working in isolation.</p>

                        <h3>Privacy Collaboration Requirements</h3>
                        <ul>
                            <li><strong>Legal Counsel:</strong> Interpret privacy regulations and ensure lawful data processing</li>
                            <li><strong>Data Protection Officers (DPOs):</strong> Oversee privacy compliance and GDPR obligations</li>
                            <li><strong>Technical Teams:</strong> Implement privacy-enhancing technologies</li>
                            <li><strong>Business Stakeholders:</strong> Define appropriate data use within business context</li>
                        </ul>

                        <h3>Privacy-Enhancing Technologies for AI</h3>
                        <ul>
                            <li><strong>Differential Privacy:</strong> Adding statistical noise to data to prevent individual identification</li>
                            <li><strong>Federated Learning:</strong> Training models on distributed data without centralizing it</li>
                            <li><strong>Homomorphic Encryption:</strong> Computing on encrypted data</li>
                            <li><strong>Data Anonymization:</strong> Removing or masking identifying information</li>
                        </ul>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 11 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is a key consideration when maintaining privacy in AI governance?',
                            options: [
                                'Ignoring data protection laws to accelerate AI development',
                                'Minimizing data usage and ensuring compliance with privacy regulations',
                                'Collecting as much data as possible to improve model accuracy',
                                'Avoiding data anonymization as it reduces model performance'
                            ],
                            correct: 1,
                            explanation: 'Privacy in AI governance requires minimizing data usage (collecting only what\'s necessary) and ensuring compliance with privacy regulations like GDPR.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Who should AI actors collaborate with to address privacy matters?',
                            options: [
                                'Marketing team',
                                'Legal counsel',
                                'Sales department',
                                'Finance team'
                            ],
                            correct: 1,
                            explanation: 'AI actors must collaborate with legal counsel to ensure privacy regulations are properly interpreted and applied. Legal counsel, DPOs, and technical teams must work together.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which of the following is NOT a privacy risk in AI governance?',
                            options: [
                                'Data breaches exposing training data',
                                'Unauthorized data access',
                                'Transparent data usage with individual consent',
                                'Re-identification through data combination'
                            ],
                            correct: 2,
                            explanation: 'Transparent data usage — clearly informing individuals about how their data is used — is a privacy PROTECTION, not a risk. Transparency is a core requirement of privacy compliance.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which privacy-enhancing technology adds statistical noise to data to prevent individual identification?',
                            options: [
                                'Federated learning',
                                'Homomorphic encryption',
                                'Differential privacy',
                                'Data tokenization'
                            ],
                            correct: 2,
                            explanation: 'Differential privacy adds carefully calibrated statistical noise to data or model outputs to prevent individual identification while preserving the statistical properties needed for analysis.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'When must privacy by design be applied in AI system development?',
                            options: [
                                'Only when handling medical data',
                                'After deployment when privacy issues are identified',
                                'From the beginning — built in, not added as an afterthought',
                                'Only when required by specific regulations'
                            ],
                            correct: 2,
                            explanation: 'Privacy by design must be built in from the very beginning of AI system development — designing for privacy from the first stage, not retrofitting it after the fact.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 12
        // =====================================================================
        {
            id: 'book1-ch12',
            number: '12',
            title: 'Human Oversight of AI Systems',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'The Case for Human Oversight',
                        content: `<p>The concept of human oversight in AI systems emphasizes the need for human judgment and intervention in AI decision-making. AI systems have inherent limitations that make human oversight not just beneficial but essential.</p>

                        <h3>Inherent Limitations of AI Systems</h3>
                        <p>The key inherent limitation of AI systems is their <strong>inability to understand context like humans</strong>. AI systems:</p>
                        <ul>
                            <li>Cannot truly understand nuance, emotion, and complex social context</li>
                            <li>May perform well on training data but fail on novel situations</li>
                            <li>Can be confidently wrong — high confidence doesn't mean correct</li>
                            <li>Cannot account for factors they weren't trained to consider</li>
                            <li>May exhibit unexpected behavior under distribution shift</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Human Oversight Purpose</div>
                            <p>Human oversight isn't about distrust of AI — it's about recognizing the complementary strengths of humans and machines. Humans provide context, judgment, empathy, and accountability that AI systems cannot replicate.</p>
                        </div>`
                    },
                    {
                        title: 'Challenges in Human Oversight',
                        content: `<p>A key challenge in human oversight of AI systems is <strong>ensuring human involvement at critical decision points</strong> — not just nominal review that adds no real scrutiny.</p>

                        <h3>Common Oversight Failure Modes</h3>
                        <ul>
                            <li><strong>Automation Bias:</strong> Humans defer to AI recommendations without genuine review</li>
                            <li><strong>Alert Fatigue:</strong> So many AI decisions require review that meaningful review becomes impossible</li>
                            <li><strong>Accountability Diffusion:</strong> No clear human takes responsibility when AI makes wrong decisions</li>
                            <li><strong>Skill Gap:</strong> Humans lack the expertise to meaningfully evaluate AI outputs</li>
                            <li><strong>Time Pressure:</strong> Insufficient time for genuine review of AI recommendations</li>
                        </ul>

                        <div class="info-box warning">
                            <div class="info-box-title">Meaningful vs. Nominal</div>
                            <p>Meaningful human oversight requires that reviewers have sufficient information, expertise, time, and authority to genuinely evaluate and override AI decisions. "Human-in-the-loop" that is rubber-stamping is not meaningful oversight.</p>
                        </div>`
                    },
                    {
                        title: 'Comprehensive Oversight Design',
                        content: `<p>To mitigate risks associated with AI systems, <strong>comprehensive human oversight</strong> must be systematically designed:</p>

                        <h3>Oversight Design Framework</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Element</th><th>Requirement</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Decision Classification</strong></td><td>Define which decisions require human review vs. full automation</td></tr>
                                <tr><td><strong>Information Provision</strong></td><td>Reviewers must have all relevant information to make informed decisions</td></tr>
                                <tr><td><strong>Authority</strong></td><td>Reviewers must have genuine authority to override AI decisions</td></tr>
                                <tr><td><strong>Time Allocation</strong></td><td>Sufficient time for meaningful review — not rushed approvals</td></tr>
                                <tr><td><strong>Training</strong></td><td>Reviewers must understand the AI system's capabilities and limitations</td></tr>
                                <tr><td><strong>Documentation</strong></td><td>Document overrides and reasons to improve the AI system</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box tip">
                            <div class="info-box-title">Risk-Based Oversight</div>
                            <p>Not all AI decisions require the same level of oversight. Use risk-based criteria: high-stakes, irreversible, or complex decisions require more rigorous human review than low-stakes, easily reversible decisions.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 12 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is a key challenge in human oversight of AI systems?',
                            options: [
                                'Lack of AI technology to support decisions',
                                'Ensuring human involvement at critical decision points with genuine authority',
                                'Ignoring ethical considerations in oversight design',
                                'Avoiding accountability structures for AI decisions'
                            ],
                            correct: 1,
                            explanation: 'The key challenge is ensuring meaningful human involvement at critical decision points — not just nominal review, but genuine evaluation with authority, information, expertise, and time.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which limitation is inherent to AI systems?',
                            options: [
                                'Perfect accuracy at all times',
                                'Lack of any bias in decision-making',
                                'Inability to understand context like humans',
                                'Complete transparency of all decision logic'
                            ],
                            correct: 2,
                            explanation: 'AI systems cannot truly understand nuance, context, emotion, and complex social situations the way humans can. This is an inherent limitation that human oversight must address.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is essential to mitigate risks associated with AI systems?',
                            options: [
                                'Ignoring potential biases in the model',
                                'Comprehensive human oversight systematically designed',
                                'Avoiding transparency in AI decision processes',
                                'Disregarding ethical concerns to improve speed'
                            ],
                            correct: 1,
                            explanation: 'Comprehensive human oversight — systematically designed with the right information, authority, time, and training — is essential to mitigate AI system risks.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is "automation bias" and why is it a governance concern?',
                            options: [
                                'AI systems that favor automated processes over manual ones',
                                'Humans deferring to AI recommendations without genuine critical review',
                                'Bias introduced during model automation and training',
                                'The tendency to automate low-risk decisions only'
                            ],
                            correct: 1,
                            explanation: 'Automation bias is the human tendency to uncritically accept AI recommendations — defeating the purpose of human oversight and creating accountability gaps when AI makes wrong decisions.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What must "meaningful" human oversight include, beyond simply having a human present?',
                            options: [
                                'Only the ability to view AI decisions',
                                'Sufficient information, expertise, time, and authority to genuinely evaluate and override AI',
                                'Agreement with AI recommendations in most cases',
                                'Technical expertise in AI model development'
                            ],
                            correct: 1,
                            explanation: 'Meaningful oversight requires sufficient information, expertise, time, and actual authority to override AI. A human who rubber-stamps AI decisions without genuine review is NOT providing meaningful oversight.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 13
        // =====================================================================
        {
            id: 'book1-ch13',
            number: '13',
            title: 'The Power of Stakeholder Engagement in AI Governance',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'Why Stakeholder Engagement Matters',
                        content: `<p>The primary benefit of engaging diverse stakeholders in AI governance is <strong>ensuring ethical AI development</strong>. Without diverse input, AI systems reflect the biases and blind spots of their creators.</p>

                        <p>Stakeholder engagement is not optional — it is a governance imperative:</p>
                        <ul>
                            <li>Affected communities have insights developers cannot anticipate</li>
                            <li>Diverse perspectives reveal potential harms that homogeneous teams miss</li>
                            <li>Engaged stakeholders become governance allies rather than critics</li>
                            <li>Public trust is built through visible, genuine participation</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">The Trust Imperative</div>
                            <p>Building public trust is important in AI governance to <strong>increase AI adoption</strong> and ensure lasting legitimacy. AI systems that lack public trust face resistance, political challenges, and potential regulatory backlash.</p>
                        </div>`
                    },
                    {
                        title: 'Recommended Engagement Methods',
                        content: `<h3>Effective Stakeholder Engagement Methods</h3>
                        <p>Recommended methods for engaging stakeholders in AI governance include:</p>

                        <table class="content-table">
                            <thead>
                                <tr><th>Method</th><th>When to Use</th><th>Best For</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Public Forums</strong></td><td>Policy development, major deployments</td><td>Broad community input, transparency demonstration</td></tr>
                                <tr><td><strong>Workshops and Focus Groups</strong></td><td>Design phase, testing</td><td>Deep engagement with specific stakeholder groups</td></tr>
                                <tr><td><strong>Online Surveys</strong></td><td>Feedback collection at scale</td><td>Broader input from diverse populations</td></tr>
                                <tr><td><strong>Advisory Panels</strong></td><td>Ongoing governance oversight</td><td>Continuous expert input and accountability</td></tr>
                                <tr><td><strong>User Testing</strong></td><td>Pre-deployment</td><td>Testing with diverse representative users</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box warning">
                            <div class="info-box-title">What NOT to Do</div>
                            <p>Ignoring stakeholder feedback is NOT a recommended engagement method — it is the single most common cause of AI governance failures. Stakeholders who feel ignored become vocal critics.</p>
                        </div>`
                    },
                    {
                        title: 'Building and Sustaining Public Trust',
                        content: `<h3>Trust-Building Practices</h3>
                        <ul>
                            <li><strong>Transparency:</strong> Disclose when AI is being used and how it affects decisions</li>
                            <li><strong>Accessibility:</strong> Make AI information available in plain language</li>
                            <li><strong>Responsiveness:</strong> Act visibly on stakeholder concerns</li>
                            <li><strong>Accountability:</strong> Demonstrate who is responsible for AI outcomes</li>
                            <li><strong>Participation:</strong> Give stakeholders genuine voice in governance processes</li>
                        </ul>

                        <h3>Stakeholder Categories in AI Governance</h3>
                        <ul>
                            <li><strong>Directly Affected:</strong> People whose lives are impacted by AI decisions</li>
                            <li><strong>Domain Experts:</strong> Subject matter experts who understand the application area</li>
                            <li><strong>Civil Society:</strong> Advocacy organizations representing affected communities</li>
                            <li><strong>Regulators:</strong> Government bodies with oversight authority</li>
                            <li><strong>Technical Experts:</strong> AI researchers and ethicists</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Feedback Loop</div>
                            <p>Stakeholder engagement must create genuine feedback loops — not just consultation exercises. Stakeholders should be able to see how their input influenced governance decisions.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 13 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the primary benefit of engaging diverse stakeholders in AI governance?',
                            options: [
                                'Reducing project costs through shared funding',
                                'Ensuring ethical AI development through diverse perspectives',
                                'Limiting public involvement in technical decisions',
                                'Speeding up AI deployment through parallel workstreams'
                            ],
                            correct: 1,
                            explanation: 'Diverse stakeholder engagement primarily ensures ethical AI development — diverse perspectives reveal potential harms and biases that homogeneous development teams miss.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which method is NOT recommended for engaging stakeholders in AI governance?',
                            options: [
                                'Public forums for broad community input',
                                'Ignoring stakeholder feedback to maintain objectivity',
                                'Workshops and focus groups for deep engagement',
                                'Online surveys for broad input'
                            ],
                            correct: 1,
                            explanation: 'Ignoring stakeholder feedback is the most common cause of AI governance failures. All other options are legitimate and recommended engagement methods.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Why is building public trust important in AI governance?',
                            options: [
                                'To increase AI adoption and ensure lasting legitimacy',
                                'To avoid regulatory compliance requirements',
                                'To reduce the need for transparency mechanisms',
                                'To simplify technical development processes'
                            ],
                            correct: 0,
                            explanation: 'Public trust is essential for AI adoption — systems without public trust face resistance, reduced effectiveness, and political challenges that can derail even technically excellent AI projects.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What makes stakeholder engagement GENUINELY effective rather than just performative?',
                            options: [
                                'Holding regular public forums regardless of outcome',
                                'Creating visible feedback loops showing how input influenced governance decisions',
                                'Maximizing the number of stakeholders consulted',
                                'Limiting engagement to technical experts only'
                            ],
                            correct: 1,
                            explanation: 'Genuine engagement requires feedback loops — stakeholders must be able to see how their input actually influenced governance decisions. Without this, engagement becomes a box-checking exercise.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which stakeholder group often has the most critical insights about AI system impacts but is least represented in design?',
                            options: [
                                'Technical AI researchers',
                                'Executive leadership',
                                'People directly affected by AI decisions',
                                'Regulatory agencies'
                            ],
                            correct: 2,
                            explanation: 'People directly affected by AI decisions have the most critical lived experience insights but are most commonly underrepresented or excluded from AI governance design processes.'
                        }
                    ]
                }
            }
        }
    ],

    // =========================================================================
    // COURSE 1 FINAL OVERALL TEST
    // =========================================================================
    finalTest: {
        title: 'Principles of AI Governance — Final Assessment',
        description: 'This comprehensive assessment covers all 13 chapters of the Principles of AI Governance course. A score of 70% or above is required to earn your course certificate.',
        passingScore: 70,
        questions: [
            {
                type: 'multiple-choice',
                question: 'What are the four major goals of AI governance and model risk management?',
                options: [
                    'Speed, Accuracy, Scalability, and Profitability',
                    'Ethics, Transparency, Risk Intelligence, and Explainability',
                    'Compliance, Security, Privacy, and Access Control',
                    'Data Quality, Model Performance, Deployment Speed, and Cost Reduction'
                ],
                correct: 1,
                chapter: 1,
                explanation: 'The four major goals are Ethics, Transparency, Risk Intelligence, and Explainability — with Trustworthiness as the overarching outcome.'
            },
            {
                type: 'multiple-choice',
                question: 'Which industry sector is generally considered most mature in AI governance?',
                options: ['Retail', 'Financial Services', 'Manufacturing', 'Technology startups'],
                correct: 1,
                chapter: 1,
                explanation: 'Financial services adopted AI governance early due to existing regulatory frameworks like SR 11-7, making them relatively more mature than other sectors.'
            },
            {
                type: 'multiple-choice',
                question: 'What happens when AI strategy changes but AI governance is not updated accordingly?',
                options: [
                    'The AI system becomes more compliant automatically',
                    'Governance becomes misaligned with actual AI use, creating control gaps',
                    'The strategy automatically updates to match governance',
                    'Nothing changes since they are independent frameworks'
                ],
                correct: 1,
                chapter: 2,
                explanation: 'AI strategy and governance are interdependent — when strategy changes, governance must be updated accordingly or significant misalignment and control gaps will emerge.'
            },
            {
                type: 'multiple-choice',
                question: 'What are the three catalysts for responsible AI?',
                options: [
                    'Speed, accuracy, and scalability',
                    'Ethics, compliance, and security',
                    'Data quality, data provenance, and model explainability',
                    'Training data, algorithms, and compute power'
                ],
                correct: 2,
                chapter: 3,
                explanation: 'The three catalysts for responsible AI are data quality, data provenance, and model explainability — forming the foundation of trustworthy AI systems.'
            },
            {
                type: 'multiple-choice',
                question: 'During model deployment, which practice ensures traceability?',
                options: ['Human oversight', 'Version control', 'Rigorous testing', 'Regular audits'],
                correct: 1,
                chapter: 4,
                explanation: 'Version control ensures traceability by tracking exactly which model is deployed, its training data, and all changes over time — creating a complete audit trail.'
            },
            {
                type: 'multiple-choice',
                question: 'Which AI-specific security threat involves crafting inputs designed to fool AI models?',
                options: ['Data poisoning', 'Model extraction', 'Adversarial attacks', 'Model inversion'],
                correct: 2,
                chapter: 5,
                explanation: 'Adversarial attacks craft inputs to exploit weaknesses in AI model patterns, causing misclassification or wrong decisions — a unique AI security threat.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the FIRST step in building a successful AI governance framework?',
                options: [
                    'Implementing AI ethics guidelines',
                    'Hiring an AI ethics team',
                    'Conducting a baseline assessment of current AI use and data practices',
                    'Starting with small pilot projects'
                ],
                correct: 2,
                chapter: 6,
                explanation: 'A baseline assessment of current AI use and data practices must come first — you must understand where you are before designing where you want to go.'
            },
            {
                type: 'multiple-choice',
                question: 'What governance structure is recommended for large AI-driven organizations?',
                options: [
                    'A single data scientist handling all governance tasks',
                    'A dedicated AI oversight committee reporting to the full board',
                    'Outsourcing governance entirely to an external agency',
                    'Informal governance with no formal structure'
                ],
                correct: 1,
                chapter: 7,
                explanation: 'Large organizations need board-level AI oversight to ensure AI risks receive the same governance gravity as financial, legal, and operational risks.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the recommended approach for achieving AI compliance?',
                options: [
                    'Ignoring external regulations until finalized',
                    'Creating standalone AI compliance processes',
                    'Integrating AI compliance with broader enterprise compliance frameworks',
                    'Relying solely on internal guidelines'
                ],
                correct: 2,
                chapter: 8,
                explanation: 'Integrating AI compliance with broader enterprise frameworks leverages existing processes, reduces redundancy, and creates a holistic view of organizational risk.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the primary benefit of integrating AI governance with enterprise GRC?',
                options: [
                    'Increased operational costs',
                    'Enhanced data inconsistency',
                    'Proactive governance and risk mitigation',
                    'Reduced regulatory requirements'
                ],
                correct: 2,
                chapter: 9,
                explanation: 'GRC integration enables proactive governance — identifying and addressing AI risks alongside other organizational risks before they materialize.'
            },
            {
                type: 'multiple-choice',
                question: 'Which stage of the AI policy lifecycle involves monitoring and ensuring compliance?',
                options: ['Policy drafting', 'Policy approval', 'Policy implementation', 'Policy enforcement'],
                correct: 3,
                chapter: 10,
                explanation: 'Policy enforcement is where policies move from paper to practice — monitoring, auditing, and ensuring compliance with established AI policies.'
            },
            {
                type: 'multiple-choice',
                question: 'Which of the following is NOT a privacy risk in AI governance?',
                options: [
                    'Data breaches',
                    'Unauthorized data access',
                    'Transparent data usage with consent',
                    'Re-identification through data combination'
                ],
                correct: 2,
                chapter: 11,
                explanation: 'Transparent data usage with individual consent is a privacy PROTECTION — it is what privacy regulations require. The other options are genuine privacy risks.'
            },
            {
                type: 'multiple-choice',
                question: 'What inherent limitation of AI systems makes human oversight essential?',
                options: [
                    'Perfect accuracy creates overconfidence',
                    'Inability to understand context like humans',
                    'Complete transparency of all decision logic',
                    'Lack of any bias in decision-making'
                ],
                correct: 1,
                chapter: 12,
                explanation: 'AI systems cannot truly understand nuance, context, and complex social situations like humans — making human oversight essential for high-stakes decisions.'
            },
            {
                type: 'multiple-choice',
                question: 'What makes stakeholder engagement genuinely effective?',
                options: [
                    'Maximum number of stakeholders consulted',
                    'Limiting engagement to technical experts',
                    'Creating feedback loops showing how input influenced decisions',
                    'Holding regular forums regardless of outcomes'
                ],
                correct: 2,
                chapter: 13,
                explanation: 'Genuine engagement requires visible feedback loops — stakeholders must see how their input actually influenced governance decisions, not just be consulted and ignored.'
            },
            {
                type: 'multiple-choice',
                question: 'What is "automation bias" and why is it a critical AI governance concern?',
                options: [
                    'AI systems favoring automated processes over manual ones',
                    'Humans deferring to AI recommendations without genuine critical review',
                    'Bias introduced during the automation of model training',
                    'The tendency to automate only low-risk decisions'
                ],
                correct: 1,
                chapter: 12,
                explanation: 'Automation bias leads humans to uncritically accept AI recommendations — defeating human oversight and creating accountability gaps when AI systems make wrong decisions.'
            },
            {
                type: 'multiple-choice',
                question: 'Why is a well-governed AI lifecycle model described as an "iterative process"?',
                options: [
                    'Because AI models need to be rebuilt from scratch regularly',
                    'Because governance, data, and AI must continuously evolve together as conditions change',
                    'Because stakeholders request iterations of AI models',
                    'Because regulatory requirements change every year'
                ],
                correct: 1,
                chapter: 4,
                explanation: 'The AI lifecycle is iterative because AI conditions, data distributions, and regulatory requirements continuously change — requiring governance to evolve alongside the AI system.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the difference between Model Risk Management (MRM) and AI Model Risk Governance?',
                options: [
                    'MRM is required; Risk Governance is optional',
                    'They are identical concepts',
                    'MRM covers technical validation practices; Risk Governance provides the organizational structure ensuring MRM is consistently applied',
                    'Risk Governance replaces MRM in modern AI organizations'
                ],
                correct: 2,
                chapter: 3,
                explanation: 'MRM = technical practices (validation, testing, monitoring). Risk Governance = the organizational structure, policies, and accountability ensuring MRM is done consistently across the organization.'
            },
            {
                type: 'multiple-choice',
                question: 'Which risk category does NOT fall under Enterprise GRC?',
                options: [
                    'Operational risks',
                    'Financial risks',
                    'Compliance risks',
                    'Personal preference risks'
                ],
                correct: 3,
                chapter: 9,
                explanation: 'Personal preferences are not a legitimate GRC risk category. GRC addresses objective, assessable business risks — operational, financial, compliance, reputational, and strategic.'
            },
            {
                type: 'multiple-choice',
                question: 'An organization is deploying an AI system for loan decisions. Which governance element is MOST critical for fairness?',
                options: [
                    'Maximizing model accuracy overall',
                    'Bias testing across demographic subgroups before deployment',
                    'Minimizing time to market',
                    'Reducing documentation requirements'
                ],
                correct: 1,
                chapter: 4,
                explanation: 'For high-stakes decisions like loan approvals, bias testing across demographic subgroups is most critical — overall accuracy may look good while specific groups are systematically disadvantaged.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the primary purpose of an AI Center of Excellence (CoE)?',
                options: [
                    'To develop AI products for sale to clients',
                    'To centralize AI development and establish governance standards, tools, and capabilities',
                    'To replace the legal and compliance department',
                    'To handle all AI-related public communications'
                ],
                correct: 1,
                chapter: 7,
                explanation: 'An AI CoE centralizes AI governance by developing and enforcing standards, managing tools, building capabilities, and coordinating governance activities across the organization.'
            }
        ]
    }
};

// Export for use in app
if (typeof window !== 'undefined') {
    window.BOOK_COURSE1_DATA = BOOK_COURSE1_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BOOK_COURSE1_DATA };
}
