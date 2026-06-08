/**
 * Course 2: Model Risk Management
 * Based on "Principles of AI Governance and Model Risk Management" by James Sayles
 * Chapters 14-23
 */

const BOOK_COURSE2_DATA = {
    id: 'book-course-2',
    number: 7,
    title: 'Model Risk Management',
    subtitle: 'From the Book: Principles of AI Governance and Model Risk Management',
    level: 'Advanced',
    description: 'An advanced course covering the operational and strategic dimensions of Model Risk Management. Includes environmental impacts of AI, crisis response protocols, capacity building, intellectual property, AI auditing, model inventory, enterprise architecture integration, lifecycle alignment, and executive perspectives — each chapter with its own mini test.',
    duration: '10-12 hours',
    lessons: 10,
    icon: 'risk',
    color: '#7c3aed',
    source: 'Principles of AI Governance and Model Risk Management — James Sayles',
    objectives: [
        'Assess and mitigate the environmental impacts of AI systems',
        'Design rapid response protocols for AI-related crises',
        'Build AI governance capacity among all AI actors',
        'Navigate intellectual property rights in AI-generated content',
        'Conduct comprehensive AI system audits',
        'Maintain AI model inventories and factsheets',
        'Align AI governance with enterprise architecture and development lifecycles',
        'Lead AI governance initiatives as non-technical business leaders'
    ],
    chapters: [

        // =====================================================================
        // CHAPTER 14
        // =====================================================================
        {
            id: 'book2-ch14',
            number: '14',
            title: 'Considering the Environmental Impacts of AI Systems',
            duration: '40 min',
            content: {
                sections: [
                    {
                        title: 'The Environmental Footprint of AI',
                        content: `<p>A major environmental concern associated with AI systems is <strong>energy consumption</strong>. Training large AI models requires massive computational resources — consuming electricity equivalent to entire cities for weeks or months.</p>

                        <h3>Key Environmental Impact Areas</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Impact Category</th><th>Description</th><th>Scale</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Energy Consumption</strong></td><td>Electricity for training and inference</td><td>Training GPT-3 estimated ~1,287 MWh</td></tr>
                                <tr><td><strong>Hardware Manufacturing</strong></td><td>Carbon footprint of GPU/TPU production</td><td>Significant embodied carbon</td></tr>
                                <tr><td><strong>Water Usage</strong></td><td>Data center cooling systems</td><td>Millions of liters per data center</td></tr>
                                <tr><td><strong>Electronic Waste</strong></td><td>Rapid hardware obsolescence cycles</td><td>Growing e-waste stream</td></tr>
                                <tr><td><strong>Carbon Emissions</strong></td><td>Indirect emissions from energy mix</td><td>Varies by energy source location</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box important">
                            <div class="info-box-title">Governance Responsibility</div>
                            <p>Environmental sustainability is increasingly a governance and regulatory requirement, not just a values choice. AI governance frameworks must account for environmental impact assessment as part of responsible AI deployment.</p>
                        </div>`
                    },
                    {
                        title: 'Reducing Environmental Impact',
                        content: `<p>The most impactful practice for reducing the environmental impact of AI systems is <strong>using renewable energy sources</strong> for AI infrastructure.</p>

                        <h3>Environmental Reduction Strategies</h3>
                        <ul>
                            <li><strong>Renewable Energy:</strong> Powering data centers with wind, solar, or hydroelectric energy</li>
                            <li><strong>Algorithmic Efficiency:</strong> Optimizing models to achieve results with less computation</li>
                            <li><strong>Model Compression:</strong> Techniques like pruning and quantization to reduce model size</li>
                            <li><strong>Efficient Hardware:</strong> Using purpose-built AI chips (TPUs, NPUs) more efficiently</li>
                            <li><strong>Transfer Learning:</strong> Building on pre-trained models rather than training from scratch</li>
                            <li><strong>Location Choice:</strong> Placing data centers near renewable energy sources</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Algorithmic Efficiency</div>
                            <p>The significance of algorithmic efficiency in AI is that it <strong>reduces energy consumption</strong> while maintaining or improving performance — a win for both environmental sustainability and operational cost.</p>
                        </div>`
                    },
                    {
                        title: 'Environmental AI Governance',
                        content: `<h3>Embedding Environmental Considerations in AI Governance</h3>
                        <p>Environmental impact assessment should be part of every AI project lifecycle:</p>

                        <ul>
                            <li><strong>Design Phase:</strong> Evaluate energy and resource requirements before committing to architectures</li>
                            <li><strong>Vendor Selection:</strong> Include environmental criteria in AI infrastructure procurement</li>
                            <li><strong>Deployment:</strong> Optimize inference efficiency to reduce ongoing energy use</li>
                            <li><strong>Monitoring:</strong> Track actual energy consumption vs. estimates</li>
                            <li><strong>Reporting:</strong> Include AI environmental impact in ESG reporting</li>
                        </ul>

                        <div class="info-box example">
                            <div class="info-box-title">Industry Practice</div>
                            <p>Leading AI organizations now publish annual AI environmental impact reports and set carbon neutrality targets for AI operations. This transparency is becoming a regulatory expectation in many jurisdictions.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 14 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is a major environmental concern associated with AI systems?',
                            options: [
                                'High software licensing costs',
                                'Energy consumption from training and inference',
                                'Data redundancy in storage systems',
                                'Limited computational power'
                            ],
                            correct: 1,
                            explanation: 'Energy consumption is the primary environmental concern — training large AI models requires enormous computational resources, consuming electricity equivalent to entire cities.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which practice MOST helps reduce the environmental impact of AI systems?',
                            options: [
                                'Ignoring hardware updates to reduce manufacturing waste',
                                'Using renewable energy sources for AI infrastructure',
                                'Reducing transparency requirements',
                                'Increasing electronic waste through faster upgrade cycles'
                            ],
                            correct: 1,
                            explanation: 'Using renewable energy sources is the most impactful way to reduce AI\'s environmental footprint — addressing both the energy consumption issue and the carbon emissions it generates.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the significance of algorithmic efficiency in AI systems?',
                            options: [
                                'It increases energy consumption proportionally',
                                'It reduces model accuracy',
                                'It reduces energy consumption while maintaining or improving performance',
                                'It makes AI models less explainable'
                            ],
                            correct: 2,
                            explanation: 'Algorithmic efficiency reduces energy consumption — achieving the same or better results with less computation, benefiting both environmental sustainability and operational costs.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which technique reduces model size and energy requirements for deployment?',
                            options: [
                                'Model expansion and ensembling',
                                'Training from scratch each time',
                                'Model compression through pruning and quantization',
                                'Using the largest possible models for all tasks'
                            ],
                            correct: 2,
                            explanation: 'Model compression techniques like pruning (removing unnecessary parameters) and quantization (reducing numerical precision) reduce model size and inference energy requirements.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'When in the AI project lifecycle should environmental impact be assessed?',
                            options: [
                                'Only during the monitoring phase after deployment',
                                'From the design phase through deployment and ongoing monitoring',
                                'Only when required by specific regulations',
                                'Only during vendor selection'
                            ],
                            correct: 1,
                            explanation: 'Environmental impact assessment should be integrated throughout the entire lifecycle — from design through vendor selection, deployment optimization, and ongoing consumption monitoring.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 15
        // =====================================================================
        {
            id: 'book2-ch15',
            number: '15',
            title: 'Developing Protocols for Rapid Response in AI-Related Crises',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'AI Crisis Management Framework',
                        content: `<p>AI-related crises can emerge suddenly and escalate rapidly. A key component of rapid response protocols is <strong>anticipatory risk assessment</strong> — identifying potential crisis scenarios before they occur.</p>

                        <p>Types of AI crises that require rapid response protocols:</p>
                        <ul>
                            <li><strong>Model Failure:</strong> AI system producing systematically wrong or harmful outputs</li>
                            <li><strong>Bias Discovery:</strong> Evidence of discriminatory outcomes at scale</li>
                            <li><strong>Security Breach:</strong> Unauthorized access to AI models or training data</li>
                            <li><strong>Adversarial Attack:</strong> Active exploitation of AI system vulnerabilities</li>
                            <li><strong>Regulatory Violation:</strong> Discovery of non-compliant AI practices</li>
                            <li><strong>Public Trust Crisis:</strong> Media-driven controversy about AI system behavior</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Anticipation is Key</div>
                            <p>Effective crisis management begins before the crisis — through anticipatory risk assessment that identifies likely crisis scenarios and pre-defines response playbooks. Organizations that only react to crises are always behind.</p>
                        </div>`
                    },
                    {
                        title: 'Rapid Response Protocol Components',
                        content: `<h3>What Is NOT Part of AI Crisis Management</h3>
                        <p>Ignoring post-crisis reviews is NOT part of AI crisis management — reviews are essential for organizational learning and preventing recurrence.</p>

                        <h3>Core Protocol Elements</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Element</th><th>Purpose</th><th>Who Is Responsible</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Emergency Shutdown Procedures</strong></td><td>Safely halt AI systems causing harm</td><td>Technical operations team</td></tr>
                                <tr><td><strong>Incident Assessment Team</strong></td><td>Rapid evaluation of scope and severity</td><td>Cross-functional crisis team</td></tr>
                                <tr><td><strong>Stakeholder Communication</strong></td><td>Transparent, timely notifications</td><td>Communications and legal</td></tr>
                                <tr><td><strong>Forensic Analysis</strong></td><td>Root cause investigation</td><td>Technical and audit teams</td></tr>
                                <tr><td><strong>Collaborative Incident Response</strong></td><td>Coordinated action across functions</td><td>All relevant functions</td></tr>
                                <tr><td><strong>Post-Crisis Review</strong></td><td>Lessons learned and prevention</td><td>Governance leadership</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'Crisis Communication Requirements',
                        content: `<p>Effective communication during an AI crisis is crucial — it must be <strong>timely, transparent, and proportionate</strong>.</p>

                        <h3>Communication Principles</h3>
                        <ul>
                            <li><strong>Speed:</strong> First communication should acknowledge the issue quickly, even before all facts are known</li>
                            <li><strong>Accuracy:</strong> Don't speculate — communicate what is known, not what is assumed</li>
                            <li><strong>Audience Targeting:</strong> Different messages for regulators, media, affected parties, and internal staff</li>
                            <li><strong>Accountability:</strong> Identify who is responsible and what is being done</li>
                            <li><strong>Updates:</strong> Commit to regular updates as more information becomes available</li>
                        </ul>

                        <div class="info-box warning">
                            <div class="info-box-title">Communication Failures</div>
                            <p>Delayed communication and avoiding forensic analysis are the two most common crisis management failures — they compound the damage and undermine trust with regulators, affected parties, and the public.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 15 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is a key component of rapid response protocols for AI-related crises?',
                            options: [
                                'Ignoring potential risks until they materialize',
                                'Anticipatory risk assessment',
                                'Delaying communication to gather all facts first',
                                'Avoiding forensic analysis to protect the organization'
                            ],
                            correct: 1,
                            explanation: 'Anticipatory risk assessment — identifying likely crisis scenarios before they occur and pre-defining response playbooks — is the foundation of effective AI crisis management.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which aspect is NOT part of AI crisis management?',
                            options: [
                                'Emergency shutdown procedures',
                                'Collaborative incident response',
                                'Ignoring post-crisis reviews',
                                'Ethical considerations in response'
                            ],
                            correct: 2,
                            explanation: 'Post-crisis reviews are essential for organizational learning and prevention of recurrence. Ignoring them is a failure, not a crisis management practice.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is crucial for effective communication during an AI crisis?',
                            options: [
                                'Waiting until all facts are known before any communication',
                                'Timely, transparent, and proportionate communication to appropriate audiences',
                                'Communicating only to regulators and no other stakeholders',
                                'Minimizing all public communication to avoid attention'
                            ],
                            correct: 1,
                            explanation: 'Effective crisis communication must be timely (quick first acknowledgment), transparent (accurate about what is known), and proportionate (right message to right audience).'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Why is forensic analysis a required component of AI crisis response?',
                            options: [
                                'It is required only by regulatory frameworks, not good governance practice',
                                'It identifies root causes to prevent recurrence and support accountability',
                                'It is used only for security breaches, not other AI crises',
                                'It is optional for low-impact crises'
                            ],
                            correct: 1,
                            explanation: 'Forensic analysis identifies the root cause of AI crises — essential for preventing recurrence, demonstrating accountability, and providing accurate information to regulators and affected parties.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Emergency shutdown procedures for AI systems must be:',
                            options: [
                                'Executed slowly to avoid disruption to ongoing operations',
                                'Pre-designed and tested before deployment so they work under pressure',
                                'Performed only by external consultants',
                                'Applied only to high-risk AI systems'
                            ],
                            correct: 1,
                            explanation: 'Emergency shutdown procedures must be pre-designed, documented, and regularly tested — not improvised under crisis pressure when clear thinking is most difficult.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 16
        // =====================================================================
        {
            id: 'book2-ch16',
            number: '16',
            title: 'Capacity Building for AI Actors',
            duration: '40 min',
            content: {
                sections: [
                    {
                        title: 'Why Capacity Building Matters',
                        content: `<p>The essential element for capacity building among AI actors is <strong>continuous training and education</strong>. AI governance capability cannot be built once — it must continuously evolve as technology, regulations, and organizational AI use change.</p>

                        <p>AI governance skills gaps create serious organizational risks:</p>
                        <ul>
                            <li>AI systems deployed without adequate risk assessment</li>
                            <li>Compliance failures from misunderstood regulatory requirements</li>
                            <li>Ethical violations from inadequate governance knowledge</li>
                            <li>Poor vendor oversight from lack of technical literacy</li>
                            <li>Ineffective human oversight from insufficient training</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">The Skills Shortage Reality</div>
                            <p>A notable shortage of skilled AI governance professionals persists globally. Organizations cannot solely rely on external hiring — they must invest in developing internal capabilities.</p>
                        </div>`
                    },
                    {
                        title: 'Training Programs by Role',
                        content: `<h3>Specialized Training for Data Scientists</h3>
                        <p>Data scientists require specialized training in <strong>ethical AI development</strong> — understanding not just the technical aspects but the governance and ethical implications of their choices.</p>

                        <h3>Role-Based Training Requirements</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Role</th><th>Key Training Topics</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Data Scientists</strong></td><td>Bias detection, fairness metrics, explainability techniques, ethical AI development</td></tr>
                                <tr><td><strong>ML Engineers / MLOps</strong></td><td>Model versioning, deployment governance, monitoring, security controls</td></tr>
                                <tr><td><strong>Business Executives</strong></td><td>AI literacy, risk framing, governance oversight, strategic decision-making</td></tr>
                                <tr><td><strong>Legal/Compliance</strong></td><td>AI regulations, automated decision rights, liability, audit requirements</td></tr>
                                <tr><td><strong>Operations Staff</strong></td><td>Human oversight responsibilities, escalation procedures, incident reporting</td></tr>
                                <tr><td><strong>Procurement</strong></td><td>AI vendor assessment, contractual governance requirements, supply chain AI risk</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'AI Literacy for Business Executives',
                        content: `<p>AI literacy is important for business executives because it enables them to <strong>make informed strategic decisions</strong> — not because they need to understand technical details, but because AI decisions have strategic consequences.</p>

                        <h3>What Executive AI Literacy Covers</h3>
                        <ul>
                            <li><strong>AI Capabilities and Limitations:</strong> Realistic understanding of what AI can and cannot do</li>
                            <li><strong>Governance Requirements:</strong> Key regulatory and ethical obligations</li>
                            <li><strong>Risk Framing:</strong> How to identify and evaluate AI-related risks at the strategic level</li>
                            <li><strong>Stakeholder Questions:</strong> The right questions to ask technical teams</li>
                            <li><strong>Accountability Understanding:</strong> Their role and responsibility in AI governance</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Building AI Literacy Among Executives</div>
                            <p>The essential strategy for building AI literacy among executives is regular, targeted education — not deep technical training but governance-focused briefings, case studies, and scenario exercises that build relevant judgment.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 16 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is essential for capacity building among AI actors?',
                            options: [
                                'Ignoring skill development to focus on deployment',
                                'Continuous training and education as technology and regulations evolve',
                                'Reducing stakeholder involvement in training programs',
                                'Avoiding new AI technologies until fully understood'
                            ],
                            correct: 1,
                            explanation: 'Continuous training and education — evolving with AI technology, regulations, and organizational use — is essential for building and maintaining AI governance capacity.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which group should receive specialized training in ethical AI development?',
                            options: [
                                'Sales teams focused on AI products',
                                'Data scientists building AI models',
                                'Marketing teams promoting AI solutions',
                                'Financial analysts evaluating AI investments'
                            ],
                            correct: 1,
                            explanation: 'Data scientists need specialized training in ethical AI development — they make the technical choices that determine whether AI systems are fair, explainable, and safe.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Why is AI literacy important for business executives?',
                            options: [
                                'To enable them to build AI models themselves',
                                'To reduce AI adoption and associated risks',
                                'To make informed strategic decisions about AI investment and governance',
                                'To minimize stakeholder involvement in AI decisions'
                            ],
                            correct: 2,
                            explanation: 'Executive AI literacy enables informed strategic decisions — understanding AI capabilities, limitations, risks, and governance obligations that have strategic and legal consequences.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the most effective approach for building AI governance capacity within an organization?',
                            options: [
                                'Hiring only external experts for all governance activities',
                                'One-time comprehensive training at program launch',
                                'Investing in continuous internal capability development combined with external expertise',
                                'Delegating all governance to the legal department'
                            ],
                            correct: 2,
                            explanation: 'Effective capacity building combines continuous internal capability development with selective use of external expertise — creating sustainable governance knowledge within the organization.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What skill gap most commonly causes AI compliance failures in organizations?',
                            options: [
                                'Insufficient technical AI skills',
                                'Misunderstood or unknown regulatory requirements due to inadequate governance training',
                                'Too much governance training creating process bottlenecks',
                                'Overqualified AI teams that are hard to manage'
                            ],
                            correct: 1,
                            explanation: 'Compliance failures most commonly result from governance knowledge gaps — teams building AI without understanding the regulatory requirements, ethical obligations, and governance standards that apply.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 17
        // =====================================================================
        {
            id: 'book2-ch17',
            number: '17',
            title: 'Intellectual Property Rights with AI Technologies',
            duration: '40 min',
            content: {
                sections: [
                    {
                        title: 'The IP Challenge in AI',
                        content: `<p>A core issue related to AI-generated content in terms of intellectual property is <strong>determining ownership</strong>. Traditional IP law assumes human authorship — a fundamental assumption that AI challenges.</p>

                        <p>Key IP questions raised by AI:</p>
                        <ul>
                            <li>Who owns content generated by AI? The developer? The user? The AI?</li>
                            <li>Does AI-generated content qualify for copyright protection?</li>
                            <li>Who is liable for IP infringement by AI systems?</li>
                            <li>How do fair use doctrines apply to AI training on copyrighted content?</li>
                            <li>Who owns AI models themselves — the organization or the vendor?</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Legal Uncertainty</div>
                            <p>IP law for AI is actively evolving across jurisdictions. Organizations must stay current with developments and seek legal counsel when deploying AI systems that generate content or innovations.</p>
                        </div>`
                    },
                    {
                        title: 'Addressing Authorship and Ownership',
                        content: `<p>The approach that can help address authorship and ownership issues surrounding AI-generated content is <strong>revising existing intellectual property laws</strong> to reflect AI's role as a tool rather than an author.</p>

                        <h3>Emerging IP Frameworks for AI</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Approach</th><th>Description</th><th>Status</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Human Authorship Required</strong></td><td>Only human-authored content gets copyright protection</td><td>Current US position</td></tr>
                                <tr><td><strong>Neighboring Rights</strong></td><td>Special protections for AI outputs, separate from copyright</td><td>Proposed in some jurisdictions</td></tr>
                                <tr><td><strong>Computer-Generated Works</strong></td><td>UK approach — copyright to person who arranges the work</td><td>UK law</td></tr>
                                <tr><td><strong>AI as Tool</strong></td><td>Attribution to human who directed AI creation</td><td>Emerging consensus</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'Governance Implications of AI IP',
                        content: `<p>What complicates the delineation of ownership in AI innovation is the <strong>rapid development</strong> of AI technology — laws cannot keep pace with AI capabilities, creating governance uncertainty.</p>

                        <h3>Organizational IP Risk Management</h3>
                        <ul>
                            <li><strong>Contract Clarity:</strong> Define IP ownership in all AI vendor and developer contracts</li>
                            <li><strong>Training Data Rights:</strong> Ensure lawful rights to use all training data</li>
                            <li><strong>Output Usage:</strong> Understand restrictions on using AI-generated outputs</li>
                            <li><strong>Indemnification:</strong> Seek IP indemnification from AI vendors</li>
                            <li><strong>Documentation:</strong> Maintain records of human involvement in AI-assisted creation</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Governance Action</div>
                            <p>Until IP law for AI stabilizes, organizations should maintain clear human involvement in AI-assisted creative and innovative processes, document that involvement carefully, and ensure contracts clearly assign IP rights.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 17 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the core IP issue related to AI-generated content?',
                            options: [
                                'Identifying which AI developers created the content',
                                'Determining ownership of AI-generated content',
                                'Enhancing algorithm efficiency for content generation',
                                'Reducing computational costs of AI content creation'
                            ],
                            correct: 1,
                            explanation: 'Determining ownership is the core IP challenge — traditional IP law assumes human authorship, and AI-generated content doesn\'t fit neatly into existing legal categories.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which approach can best address authorship and ownership issues surrounding AI-generated content?',
                            options: [
                                'Ignoring existing copyright laws entirely',
                                'Recognizing AI systems as legal authors',
                                'Revising existing intellectual property laws to reflect AI\'s role',
                                'Minimizing human involvement in AI-generated work'
                            ],
                            correct: 2,
                            explanation: 'Revising IP laws to address AI-generated content — treating AI as a tool rather than an author, and attributing rights to human directors — is the emerging consensus approach.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What complicates ownership delineation in AI innovation?',
                            options: [
                                'Slow development pace of AI technology',
                                'Rapid development of AI outpacing legal and governance frameworks',
                                'Lack of human involvement in AI-assisted creation',
                                'Excessive regulatory clarity on AI IP'
                            ],
                            correct: 1,
                            explanation: 'Rapid AI development outpaces legal frameworks — laws cannot evolve as fast as AI capabilities, creating persistent uncertainty about ownership of AI-generated innovations.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What should organizations include in AI vendor contracts to manage IP risk?',
                            options: [
                                'Requirements for vendors to publish their training data',
                                'Clear IP ownership assignment and indemnification for IP infringement',
                                'Permission to use vendor models without restriction',
                                'Requirements to eliminate all human involvement in AI outputs'
                            ],
                            correct: 1,
                            explanation: 'AI vendor contracts must clearly assign IP ownership of model outputs and include IP indemnification provisions — protecting organizations from infringement claims related to AI-generated content.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the current US position on copyright for AI-generated content?',
                            options: [
                                'AI systems can be recognized as authors',
                                'AI-generated content automatically belongs to the AI developer',
                                'Only human-authored content receives copyright protection',
                                'AI-generated content receives special neighboring rights'
                            ],
                            correct: 2,
                            explanation: 'The current US position requires human authorship for copyright protection — purely AI-generated content without sufficient human creative input does not qualify for copyright.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 18
        // =====================================================================
        {
            id: 'book2-ch18',
            number: '18',
            title: 'Auditing AI Systems',
            duration: '55 min',
            content: {
                sections: [
                    {
                        title: 'The Purpose of AI Audits',
                        content: `<p>The primary focus of auditing AI systems is <strong>ensuring ethical and reliable operation</strong> — not just technical compliance or performance metrics.</p>

                        <p>AI audits serve multiple governance purposes:</p>
                        <ul>
                            <li>Verify compliance with regulatory requirements and internal policies</li>
                            <li>Assess fairness and non-discrimination in AI outputs</li>
                            <li>Evaluate accuracy and reliability of AI systems</li>
                            <li>Review cybersecurity controls protecting AI systems</li>
                            <li>Examine data quality and lineage for training and inference</li>
                            <li>Assess human oversight effectiveness</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Audit Independence</div>
                            <p>AI audits provide the most value when conducted independently — either by internal audit teams separate from AI development, or by third-party auditors. Development teams auditing their own work creates conflicts of interest.</p>
                        </div>`
                    },
                    {
                        title: 'AI Audits vs. Traditional IT Audits',
                        content: `<p>A key difference between traditional IT audit programs and AI audit programs is that <strong>AI audit programs focus on algorithm transparency</strong> — examining not just whether systems work, but whether they can be understood, explained, and justified.</p>

                        <h3>Comparison: Traditional IT vs. AI Audit Focus</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Dimension</th><th>Traditional IT Audit</th><th>AI Audit</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Primary Focus</strong></td><td>System availability, access controls, data integrity</td><td>Fairness, explainability, accuracy, bias</td></tr>
                                <tr><td><strong>Data Examination</strong></td><td>Data accuracy and storage</td><td>Training data quality, representativeness, lineage</td></tr>
                                <tr><td><strong>Performance</strong></td><td>Uptime, response time</td><td>Accuracy across subgroups, robustness, drift</td></tr>
                                <tr><td><strong>Transparency</strong></td><td>Documentation of processes</td><td>Explainability of model decisions</td></tr>
                                <tr><td><strong>Ethical Review</strong></td><td>Typically not included</td><td>Core component</td></tr>
                            </tbody>
                        </table>

                        <h3>What AI Audits Examine</h3>
                        <p>AI audits do NOT typically examine marketing strategies — they focus on technical and governance aspects:</p>
                        <ul>
                            <li>Data quality and representativeness</li>
                            <li>Model performance across demographic subgroups</li>
                            <li>Cybersecurity controls</li>
                            <li>Human oversight mechanisms</li>
                            <li>Documentation and version control</li>
                            <li>Regulatory compliance</li>
                        </ul>`
                    },
                    {
                        title: 'AI Audit Program Design',
                        content: `<h3>AI Audit Frameworks</h3>
                        <p>A structured AI auditing framework encompasses structured processes for assessing AI processes, risks, and controls with governance principles.</p>

                        <h3>Audit Program Components</h3>
                        <ul>
                            <li><strong>Scope Definition:</strong> Which AI systems, time periods, and risk areas</li>
                            <li><strong>Risk-Based Selection:</strong> Prioritize audits based on risk level and impact</li>
                            <li><strong>Data Collection:</strong> Model documentation, performance data, governance records</li>
                            <li><strong>Testing:</strong> Technical testing of model performance, bias, and controls</li>
                            <li><strong>Stakeholder Interviews:</strong> Input from developers, users, and affected parties</li>
                            <li><strong>Findings and Recommendations:</strong> Clear, actionable audit results</li>
                            <li><strong>Follow-up:</strong> Tracking remediation of identified issues</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Continuous vs. Point-in-Time</div>
                            <p>Modern AI audit programs combine point-in-time deep audits with continuous automated monitoring — providing ongoing assurance rather than annual snapshots that may miss between-audit issues.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 18 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the primary focus of auditing AI systems?',
                            options: [
                                'Reducing AI development time and costs',
                                'Ensuring ethical and reliable operation',
                                'Minimizing computational resources used',
                                'Enhancing user interface experience'
                            ],
                            correct: 1,
                            explanation: 'AI audits primarily focus on ensuring ethical and reliable operation — examining fairness, explainability, accuracy, bias, and governance compliance.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which element is NOT typically examined in AI audits?',
                            options: [
                                'Training data quality and representativeness',
                                'Model performance across demographic groups',
                                'Marketing strategies for the AI product',
                                'Cybersecurity controls protecting the AI system'
                            ],
                            correct: 2,
                            explanation: 'Marketing strategies are outside the scope of AI audits. Audits focus on technical, governance, fairness, and compliance dimensions — not commercial activities.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is a key difference between traditional IT audit programs and AI audit programs?',
                            options: [
                                'AI audit programs are less rigorous than traditional IT audits',
                                'Traditional IT audits cover more scope than AI audits',
                                'AI audit programs focus on algorithm transparency and fairness as core components',
                                'AI audit programs are optional while IT audits are mandatory'
                            ],
                            correct: 2,
                            explanation: 'AI audit programs focus on algorithm transparency and fairness as core components — examining not just whether systems work, but whether they can be explained, justified, and are non-discriminatory.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Why is audit independence important for AI audits?',
                            options: [
                                'External auditors are less expensive than internal ones',
                                'Independent auditors prevent development teams from auditing their own work — eliminating conflicts of interest',
                                'Independence is required only for financial audits, not AI audits',
                                'Internal audit teams lack the technical expertise for AI audits'
                            ],
                            correct: 1,
                            explanation: 'Audit independence prevents development teams from auditing their own work — a fundamental conflict of interest that would compromise audit objectivity and value.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the advantage of continuous automated monitoring over point-in-time AI audits?',
                            options: [
                                'It eliminates the need for periodic deep audits entirely',
                                'It provides ongoing assurance rather than annual snapshots that miss between-audit issues',
                                'It is less expensive than traditional audit approaches',
                                'It requires no human involvement in the audit process'
                            ],
                            correct: 1,
                            explanation: 'Continuous monitoring catches issues as they emerge — not just during annual audit windows. Combined with periodic deep audits, it provides comprehensive assurance.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 19
        // =====================================================================
        {
            id: 'book2-ch19',
            number: '19',
            title: 'AI Model Inventory and Facts',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'The AI Model Inventory',
                        content: `<p>The primary purpose of maintaining an AI Model Inventory is <strong>enhancing transparency and management</strong> of AI systems across the organization.</p>

                        <p>An AI Model Inventory is a centralized registry of all AI models in use, containing:</p>
                        <ul>
                            <li>Model identification and version information</li>
                            <li>Business purpose and use case</li>
                            <li>Risk classification level</li>
                            <li>Development team and owner</li>
                            <li>Training data sources and dates</li>
                            <li>Performance metrics and validation results</li>
                            <li>Deployment status and environment</li>
                            <li>Monitoring and review schedule</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Why It Matters</div>
                            <p>Without an AI model inventory, organizations often don't know what AI systems they actually have in production — creating governance blind spots, compliance gaps, and risk management failures.</p>
                        </div>`
                    },
                    {
                        title: 'AI Factsheets',
                        content: `<p>The crucial aspect when creating an AI factsheet is <strong>providing detailed model documentation</strong> — not minimizing information or ignoring data sources.</p>

                        <h3>AI Factsheet Contents</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Section</th><th>Contents</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Model Overview</strong></td><td>Purpose, intended use, out-of-scope uses</td></tr>
                                <tr><td><strong>Training Data</strong></td><td>Sources, collection methods, preprocessing, limitations</td></tr>
                                <tr><td><strong>Model Architecture</strong></td><td>Algorithm type, key design decisions, trade-offs made</td></tr>
                                <tr><td><strong>Performance</strong></td><td>Overall metrics and subgroup performance, known limitations</td></tr>
                                <tr><td><strong>Fairness Analysis</strong></td><td>Bias testing results across demographic groups</td></tr>
                                <tr><td><strong>Risks and Mitigations</strong></td><td>Identified risks and how they are addressed</td></tr>
                                <tr><td><strong>Governance</strong></td><td>Review and approval records, monitoring schedule</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box tip">
                            <div class="info-box-title">Model Cards Standard</div>
                            <p>AI Factsheets are similar to Google's "Model Cards" concept — standardized documentation enabling consistent transparency and governance review across all AI systems.</p>
                        </div>`
                    },
                    {
                        title: 'Maintaining the Inventory',
                        content: `<p>Maintaining an AI Model Inventory addresses the challenge of <strong>managing AI models at scale</strong> — ensuring no AI system operates without visibility, governance, and accountability.</p>

                        <h3>Inventory Maintenance Requirements</h3>
                        <ul>
                            <li><strong>Mandatory Registration:</strong> No AI system may be deployed without inventory registration</li>
                            <li><strong>Version Control:</strong> All model updates trigger inventory updates</li>
                            <li><strong>Regular Review:</strong> Scheduled reviews of all active models</li>
                            <li><strong>Decommissioning:</strong> Clear process for retiring models from the inventory</li>
                            <li><strong>Access Control:</strong> Appropriate access to inventory for governance and audit teams</li>
                        </ul>

                        <div class="info-box warning">
                            <div class="info-box-title">Shadow AI Risk</div>
                            <p>"Shadow AI" — models developed and deployed without organizational knowledge or approval — is a major governance risk. A comprehensive model inventory helps detect and control shadow AI before it creates compliance or ethical issues.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 19 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the primary purpose of maintaining an AI Model Inventory?',
                            options: [
                                'Reducing operational costs of AI development',
                                'Enhancing transparency and management of AI systems',
                                'Limiting the number of AI models in production',
                                'Increasing data redundancy across AI systems'
                            ],
                            correct: 1,
                            explanation: 'An AI Model Inventory primarily enhances transparency and management — ensuring organizations know what AI systems they have, who owns them, and how they perform.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is crucial when creating an AI factsheet?',
                            options: [
                                'Ignoring data sources to protect proprietary information',
                                'Providing detailed model documentation',
                                'Minimizing stakeholder access to model information',
                                'Reducing transparency to protect competitive advantage'
                            ],
                            correct: 1,
                            explanation: 'AI factsheets require detailed model documentation — covering training data, architecture, performance across subgroups, fairness analysis, risks, and governance records.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is "shadow AI" and why is it a governance risk?',
                            options: [
                                'AI systems that operate in backup mode',
                                'Models developed and deployed without organizational knowledge or approval, creating compliance and ethical gaps',
                                'AI systems with low visibility due to poor documentation',
                                'Models trained on synthetic rather than real data'
                            ],
                            correct: 1,
                            explanation: 'Shadow AI refers to AI models deployed without organizational knowledge or governance approval — creating serious compliance, ethical, and liability risks that the organization cannot manage.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What challenge does maintaining an AI Model Inventory specifically address?',
                            options: [
                                'Increasing AI development speed',
                                'Reducing model training costs',
                                'Managing AI models at scale — ensuring all systems have visibility and governance',
                                'Eliminating the need for human oversight'
                            ],
                            correct: 2,
                            explanation: 'An AI Model Inventory manages AI models at scale — ensuring no AI system operates without visibility, governance accountability, or compliance oversight.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What should happen when an AI model version is updated?',
                            options: [
                                'A completely new inventory entry is created for the update',
                                'The inventory update is deferred until the next scheduled review',
                                'The model inventory entry must be updated to reflect the new version',
                                'The update is recorded only if it changes model performance significantly'
                            ],
                            correct: 2,
                            explanation: 'All model updates must trigger inventory updates — maintaining accurate version information is essential for traceability, audit, and incident response.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 20
        // =====================================================================
        {
            id: 'book2-ch20',
            number: '20',
            title: 'AI and Enterprise Architecture',
            duration: '45 min',
            content: {
                sections: [
                    {
                        title: 'Enterprise Architecture as an AI Enabler',
                        content: `<p>The strategic role of enterprise architecture (EA) in AI initiatives is <strong>providing a holistic view of the organization's technological landscape</strong> — enabling AI to be integrated strategically rather than deployed in isolated pockets.</p>

                        <p>Enterprise architecture brings to AI governance:</p>
                        <ul>
                            <li>Visibility into how AI connects with existing systems and data</li>
                            <li>Standardization opportunities to reduce redundancy</li>
                            <li>Technology roadmap alignment for AI investments</li>
                            <li>Integration patterns for AI with enterprise platforms</li>
                            <li>Security and compliance architecture for AI</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Strategic Alignment</div>
                            <p>Without enterprise architecture involvement, AI initiatives often create technical debt, integration challenges, and governance gaps — particularly when AI systems need to exchange data with core enterprise systems.</p>
                        </div>`
                    },
                    {
                        title: 'Benefits of AI-EA Integration',
                        content: `<p>The integration of AI and enterprise architecture does NOT reduce operational efficiency — it enhances it. The actual benefits include:</p>

                        <table class="content-table">
                            <thead>
                                <tr><th>Benefit</th><th>Description</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Scalability</strong></td><td>EA ensures AI systems can scale as demand grows</td></tr>
                                <tr><td><strong>Governance Integration</strong></td><td>EA connects AI systems to existing governance and risk management structures</td></tr>
                                <tr><td><strong>Technological Integration</strong></td><td>EA provides patterns for connecting AI with ERP, CRM, and other enterprise systems</td></tr>
                                <tr><td><strong>Risk Visibility</strong></td><td>EA maps AI dependencies, creating visibility into cascading risk impacts</td></tr>
                                <tr><td><strong>Compliance</strong></td><td>EA ensures AI systems comply with enterprise security and data standards</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'How EA Supports AI Implementation',
                        content: `<p>Enterprise architecture supports AI implementation in several key ways — NOT by ignoring stakeholder input, but by:</p>

                        <ul>
                            <li><strong>Technology Standards:</strong> Defining approved AI platforms, frameworks, and tools</li>
                            <li><strong>Data Architecture:</strong> Ensuring AI has access to quality, governed data</li>
                            <li><strong>Integration Patterns:</strong> Standard approaches for connecting AI to existing systems</li>
                            <li><strong>Security Architecture:</strong> AI-specific security requirements and controls</li>
                            <li><strong>Governance Blueprints:</strong> Architectural templates for AI governance implementations</li>
                        </ul>

                        <h3>AI in the Enterprise Architecture Lifecycle</h3>
                        <p>AI must be embedded in EA planning from the start:</p>
                        <ul>
                            <li>Business Architecture: How AI changes business processes and capabilities</li>
                            <li>Data Architecture: Data flows, quality requirements, and privacy by design</li>
                            <li>Application Architecture: AI components and their integration</li>
                            <li>Technology Architecture: Infrastructure, security, and monitoring platforms</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">EA as Governance Enabler</div>
                            <p>Enterprise architecture provides the technical infrastructure for AI governance — model registries, monitoring platforms, audit log systems, and integration with GRC tools.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 20 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the strategic role of enterprise architecture in AI initiatives?',
                            options: [
                                'Reducing AI deployment time through automation',
                                'Providing a holistic view of the organization\'s technological landscape',
                                'Limiting AI innovation to pre-approved use cases',
                                'Increasing data redundancy across AI systems'
                            ],
                            correct: 1,
                            explanation: 'Enterprise architecture provides a holistic view of the organizational technology landscape — enabling AI to be integrated strategically and connected to existing governance structures.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which benefit does the integration of AI and enterprise architecture NOT offer?',
                            options: [
                                'Ensuring scalability of AI systems',
                                'Addressing governance and risk management concerns',
                                'Reducing operational efficiency',
                                'Facilitating technological integration with enterprise systems'
                            ],
                            correct: 2,
                            explanation: 'AI-EA integration does NOT reduce operational efficiency — it enhances it by reducing redundancy, providing integration patterns, and connecting AI to existing governance structures.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'How does enterprise architecture support AI implementation?',
                            options: [
                                'By ignoring stakeholder input to maintain architectural purity',
                                'By providing technology standards, data architecture, and integration patterns',
                                'By reducing documentation requirements',
                                'By eliminating the need for governance reviews'
                            ],
                            correct: 1,
                            explanation: 'EA supports AI implementation by providing technology standards, data architecture design, integration patterns, security requirements, and governance blueprints.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is a key risk of deploying AI without enterprise architecture involvement?',
                            options: [
                                'AI models will be over-engineered',
                                'Development will be too slow',
                                'Technical debt, integration challenges, and governance gaps',
                                'Models will be too transparent'
                            ],
                            correct: 2,
                            explanation: 'Without EA, AI creates technical debt and integration challenges — particularly when AI systems need to exchange data with core enterprise systems, creating security and governance gaps.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which EA domain addresses how AI changes business processes and capabilities?',
                            options: [
                                'Technology Architecture',
                                'Data Architecture',
                                'Business Architecture',
                                'Application Architecture'
                            ],
                            correct: 2,
                            explanation: 'Business Architecture addresses how AI changes business processes, capabilities, and operating models — the highest-level view of AI\'s impact on how the organization operates.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 21
        // =====================================================================
        {
            id: 'book2-ch21',
            number: '21',
            title: 'Aligning AI Governance with AI Development Lifecycle and SDLC',
            duration: '50 min',
            content: {
                sections: [
                    {
                        title: 'The Goal of Lifecycle Alignment',
                        content: `<p>The primary goal of aligning AI governance with AI and systems development lifecycles is <strong>enhancing consistency and compliance</strong> across all AI development activities.</p>

                        <p>When AI governance is misaligned with development lifecycles:</p>
                        <ul>
                            <li>Governance becomes a bolt-on process rather than embedded practice</li>
                            <li>Developers see governance as an obstacle, not an enabler</li>
                            <li>Compliance gaps emerge at lifecycle transition points</li>
                            <li>Documentation and evidence collection become reactive</li>
                            <li>Risk identification occurs too late to be cost-effective</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Shift-Left Governance</div>
                            <p>Just as security professionals advocate "shift-left security" (embedding security early in development), AI governance must shift left — embedded at every stage rather than reviewed at the end.</p>
                        </div>`
                    },
                    {
                        title: 'Defense-in-Depth Strategies',
                        content: `<p>Defense-in-depth strategies within AI and systems development ensure multiple layers of governance protection. What is NOT included in defense-in-depth is <strong>single-point failure reliance</strong> — the opposite of what defense-in-depth is designed to prevent.</p>

                        <h3>Defense-in-Depth Elements</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Layer</th><th>Governance Control</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Development</strong></td><td>Code reviews, bias testing, documentation standards</td></tr>
                                <tr><td><strong>Validation</strong></td><td>Independent testing, subgroup fairness analysis</td></tr>
                                <tr><td><strong>Approval</strong></td><td>Governance gate reviews before deployment</td></tr>
                                <tr><td><strong>Deployment</strong></td><td>Version control, access controls, change management</td></tr>
                                <tr><td><strong>Operations</strong></td><td>Continuous monitoring, drift detection, alert systems</td></tr>
                                <tr><td><strong>Audit</strong></td><td>Regular independent audits across all layers</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'SDLC Integration Challenges',
                        content: `<p>A key challenge when integrating AI development with traditional SDLC is managing the <strong>iterative and experimental nature of AI</strong> — traditional SDLC assumes deterministic development; AI development is inherently probabilistic and exploratory.</p>

                        <h3>AI vs. Traditional SDLC Differences</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Aspect</th><th>Traditional SDLC</th><th>AI Development</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Development Path</strong></td><td>Linear or planned iteration</td><td>Experimental, iterative, emergent</td></tr>
                                <tr><td><strong>Outputs</strong></td><td>Deterministic — same input → same output</td><td>Probabilistic — outputs may vary</td></tr>
                                <tr><td><strong>Quality Assurance</strong></td><td>Test against specifications</td><td>Evaluate statistical properties and fairness</td></tr>
                                <tr><td><strong>Version Management</strong></td><td>Code versioning</td><td>Code + data + model versioning</td></tr>
                                <tr><td><strong>Change Control</strong></td><td>Code change management</td><td>Also data updates and model retraining</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box tip">
                            <div class="info-box-title">Governance Adaptation</div>
                            <p>AI governance frameworks must adapt traditional SDLC controls to accommodate AI's iterative, experimental nature — not simply force AI development into rigid SDLC waterfall processes that conflict with AI development realities.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 21 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the primary goal of aligning AI governance with AI and systems development lifecycles?',
                            options: [
                                'Reducing the number of AI models in development',
                                'Enhancing consistency and compliance across AI development activities',
                                'Limiting stakeholder involvement in development processes',
                                'Minimizing documentation efforts for development teams'
                            ],
                            correct: 1,
                            explanation: 'Lifecycle alignment enhances consistency and compliance — making governance an embedded practice rather than a bolt-on process that developers view as an obstacle.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which strategy is NOT typically included in defense-in-depth for AI and systems development?',
                            options: [
                                'Multiple layers of security and governance controls',
                                'Single-point failure reliance on one control layer',
                                'Continuous monitoring across the lifecycle',
                                'Regular audits of governance controls'
                            ],
                            correct: 1,
                            explanation: 'Single-point failure reliance is the OPPOSITE of defense-in-depth. Defense-in-depth deliberately creates multiple independent layers so that no single control failure compromises the whole system.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is a key challenge integrating AI development with traditional SDLC?',
                            options: [
                                'AI development is too fast for SDLC governance processes',
                                'Traditional SDLC teams refuse to work with AI teams',
                                'AI\'s experimental, probabilistic nature conflicts with SDLC\'s deterministic assumptions',
                                'SDLC documentation is too expensive for AI projects'
                            ],
                            correct: 2,
                            explanation: 'Traditional SDLC assumes deterministic development — AI is inherently probabilistic and experimental, requiring SDLC processes to be adapted rather than rigidly applied.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Why is "shift-left governance" important in AI development?',
                            options: [
                                'It moves governance reviews to the end of the project',
                                'It embeds governance early — when risks are cheapest and easiest to address',
                                'It shifts governance responsibility from technical to business teams',
                                'It reduces the number of governance checkpoints required'
                            ],
                            correct: 1,
                            explanation: 'Shift-left governance embeds governance early in the AI lifecycle — catching risks at the design and data stage where they are cheapest to address, rather than at deployment.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What additional versioning does AI development require beyond traditional code versioning?',
                            options: [
                                'UI/UX design versions only',
                                'Data versioning and model artifact versioning in addition to code',
                                'User documentation versioning',
                                'Project management plan versioning'
                            ],
                            correct: 1,
                            explanation: 'AI development requires versioning of code, training data, and model artifacts — all three must be versioned together to enable full traceability and reproducibility.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 22
        // =====================================================================
        {
            id: 'book2-ch22',
            number: '22',
            title: 'AI Through the Lens of Non-Technical Business Leaders',
            duration: '40 min',
            content: {
                sections: [
                    {
                        title: 'The Non-Technical Leader\'s AI Challenge',
                        content: `<p>A primary concern for non-technical business leaders regarding AI adoption is <strong>ethical implications</strong> — not just performance or efficiency metrics. Leaders are increasingly aware that AI decisions affect people and carry significant accountability.</p>

                        <p>Non-technical leaders face unique AI governance challenges:</p>
                        <ul>
                            <li>Making strategic AI investment decisions without technical expertise</li>
                            <li>Overseeing AI governance without understanding model mechanics</li>
                            <li>Holding technical teams accountable for AI outcomes</li>
                            <li>Communicating AI strategy and governance to boards and stakeholders</li>
                            <li>Understanding AI risks in business terms, not technical ones</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Embracing AI with Caution</div>
                            <p>Non-technical business leaders must embrace AI with informed caution — not blind enthusiasm or uninformed resistance. Both extremes create governance risk.</p>
                        </div>`
                    },
                    {
                        title: 'Why AI Literacy Matters for Executives',
                        content: `<p>AI literacy is important for non-technical business leaders specifically to <strong>make informed strategic decisions</strong> — enabling them to ask the right questions, understand AI risks in business terms, and provide meaningful governance oversight.</p>

                        <h3>What Executive AI Literacy Enables</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Capability</th><th>Why It Matters</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Risk Framing</strong></td><td>Understand AI risks in business and ethical terms</td></tr>
                                <tr><td><strong>Right Questions</strong></td><td>Hold technical teams accountable without technical expertise</td></tr>
                                <tr><td><strong>Investment Decisions</strong></td><td>Evaluate AI opportunities and governance investments rationally</td></tr>
                                <tr><td><strong>Accountability</strong></td><td>Understand their legal and ethical responsibilities as AI overseers</td></tr>
                                <tr><td><strong>Communication</strong></td><td>Explain AI strategy and governance to boards, regulators, and public</td></tr>
                            </tbody>
                        </table>

                        <div class="info-box tip">
                            <div class="info-box-title">The Right Questions</div>
                            <p>Non-technical leaders don't need to understand how AI works — they need to know what questions to ask: "What happens when this AI is wrong? Who is accountable? How will we know? Can affected people challenge the decision?"</p>
                        </div>`
                    },
                    {
                        title: 'Building AI Literacy Among Executives',
                        content: `<p>The essential strategy for building AI literacy among executives is <strong>governance-focused education</strong> that builds judgment — not deep technical training.</p>

                        <h3>Effective Executive AI Education</h3>
                        <ul>
                            <li><strong>Case Studies:</strong> Real AI governance failures and their consequences</li>
                            <li><strong>Scenario Exercises:</strong> Board-level AI decision simulations</li>
                            <li><strong>Expert Briefings:</strong> Regular updates on regulatory and technology developments</li>
                            <li><strong>Cross-Industry Learning:</strong> How peer organizations govern AI</li>
                            <li><strong>Governance Frameworks:</strong> Understanding key frameworks (EU AI Act, NIST AI RMF)</li>
                        </ul>

                        <h3>The Governance Mindset</h3>
                        <p>Non-technical business leaders need a governance mindset about AI — asking:</p>
                        <ul>
                            <li>What are we trying to achieve, and does AI help?</li>
                            <li>Who could be harmed, and how would we know?</li>
                            <li>Are we prepared to be accountable for AI outcomes?</li>
                            <li>Do our governance structures match the risks we're taking?</li>
                        </ul>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 22 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is a primary concern for non-technical business leaders regarding AI adoption?',
                            options: [
                                'Enhanced user experience from AI systems',
                                'Ethical implications of AI decisions',
                                'Increased transparency in all processes',
                                'Reducing operational efficiency through AI overhead'
                            ],
                            correct: 1,
                            explanation: 'Non-technical business leaders are primarily concerned about ethical implications — the accountability, fairness, and societal impact of AI decisions made under their leadership.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Why is AI literacy important for non-technical business leaders?',
                            options: [
                                'To enable them to build AI models independently',
                                'To make informed strategic decisions about AI investment and governance',
                                'To reduce AI adoption and associated risks',
                                'To minimize stakeholder involvement in AI decisions'
                            ],
                            correct: 1,
                            explanation: 'AI literacy enables non-technical leaders to make informed strategic decisions — understanding AI risks in business terms, holding technical teams accountable, and providing meaningful governance oversight.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which strategy is essential for building AI literacy among executives?',
                            options: [
                                'Providing deep technical training in AI algorithms',
                                'Ignoring ethical considerations to focus on business value',
                                'Governance-focused education with case studies and scenario exercises',
                                'Outsourcing all AI knowledge to external consultants'
                            ],
                            correct: 2,
                            explanation: 'Governance-focused education — case studies, scenario exercises, and expert briefings — builds the judgment executives need without requiring deep technical expertise.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What key questions should non-technical leaders ask about AI systems?',
                            options: [
                                'Which AI vendor is cheapest and fastest to deploy?',
                                'What happens when AI is wrong, and who is accountable?',
                                'How can we eliminate human review to speed AI decisions?',
                                'How can we avoid regulatory scrutiny of AI systems?'
                            ],
                            correct: 1,
                            explanation: 'Non-technical leaders must ask governance questions: What happens when AI is wrong? Who is accountable? How will we know? Can affected parties challenge decisions?'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is the "governance mindset" that non-technical business leaders need regarding AI?',
                            options: [
                                'Deploy AI as quickly as possible to gain competitive advantage',
                                'Ask who could be harmed, how we would know, and whether our governance matches the risk',
                                'Delegate all AI governance to the IT department',
                                'Accept AI outputs without questioning their accuracy or fairness'
                            ],
                            correct: 1,
                            explanation: 'The governance mindset asks: What are we trying to achieve? Who could be harmed? Are we prepared to be accountable? Do our governance structures match the risks? This is the foundation of responsible AI leadership.'
                        }
                    ]
                }
            }
        },

        // =====================================================================
        // CHAPTER 23
        // =====================================================================
        {
            id: 'book2-ch23',
            number: '23',
            title: 'Sales and Marketing Strategies for AI Governance Solutions',
            duration: '35 min',
            content: {
                sections: [
                    {
                        title: 'The AI Governance Market',
                        content: `<p>The key focus of sales and marketing strategies for AI governance and risk management solutions is <strong>building trust and demonstrating ROI</strong>. Organizations won't invest in governance solutions without confidence that they deliver real value.</p>

                        <p>The AI governance market is driven by:</p>
                        <ul>
                            <li>Increasing regulatory requirements (EU AI Act, NIST AI RMF)</li>
                            <li>High-profile AI failures raising awareness of governance needs</li>
                            <li>Board and executive accountability for AI risks</li>
                            <li>Reputational risks from AI-related scandals</li>
                            <li>Competitive pressure to demonstrate responsible AI practices</li>
                        </ul>

                        <div class="info-box important">
                            <div class="info-box-title">Value Proposition</div>
                            <p>Effective AI governance solutions deliver value through risk reduction (avoiding costly failures), compliance efficiency (reducing regulatory overhead), and trust building (enabling AI adoption at scale).</p>
                        </div>`
                    },
                    {
                        title: 'Understanding the Market Landscape',
                        content: `<p>Understanding the market for AI governance solutions requires thorough research — the strategy that is NOT recommended is <strong>ignoring competitor analysis</strong>.</p>

                        <h3>Market Analysis Requirements</h3>
                        <table class="content-table">
                            <thead>
                                <tr><th>Analysis Area</th><th>Purpose</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Market Research</strong></td><td>Understand the size, growth, and key dynamics of the AI governance market</td></tr>
                                <tr><td><strong>Competitor Analysis</strong></td><td>Identify competitive positioning and differentiation opportunities</td></tr>
                                <tr><td><strong>Customer Pain Points</strong></td><td>Identify specific governance challenges that drive purchase decisions</td></tr>
                                <tr><td><strong>Regulatory Trends</strong></td><td>Anticipate regulatory requirements that drive demand for governance solutions</td></tr>
                                <tr><td><strong>Technology Trends</strong></td><td>Understand how AI technology evolution changes governance requirements</td></tr>
                            </tbody>
                        </table>`
                    },
                    {
                        title: 'Crafting Compelling Value Propositions',
                        content: `<p>Crafting a compelling value proposition for AI governance solutions requires <strong>demonstrating measurable ROI and risk reduction</strong> — not reducing customer education, which is essential for informed purchasing decisions.</p>

                        <h3>Value Proposition Framework</h3>
                        <ul>
                            <li><strong>Risk Reduction:</strong> Quantify the cost of AI governance failures (regulatory penalties, reputation damage, remediation costs)</li>
                            <li><strong>Compliance Efficiency:</strong> Demonstrate how solutions reduce compliance overhead vs. manual approaches</li>
                            <li><strong>Trust Building:</strong> Show how governance solutions enable broader AI adoption with stakeholder confidence</li>
                            <li><strong>Regulatory Readiness:</strong> Position solutions as preparation for inevitable regulatory requirements</li>
                        </ul>

                        <h3>Key Sales Messages</h3>
                        <ul>
                            <li>The cost of governance is a fraction of the cost of AI failures</li>
                            <li>Proactive governance enables faster, more confident AI deployment</li>
                            <li>Governance is a competitive differentiator, not just a compliance cost</li>
                            <li>Regulatory requirements are increasing — early adoption reduces future costs</li>
                        </ul>

                        <div class="info-box tip">
                            <div class="info-box-title">Customer Education</div>
                            <p>Customer education is a critical component of the AI governance market — many organizations underestimate their governance needs. Educating customers builds trust, creates better-informed buyers, and supports long-term relationships.</p>
                        </div>`
                    }
                ],
                chapterTest: {
                    title: 'Chapter 23 Mini Test',
                    questions: [
                        {
                            type: 'multiple-choice',
                            question: 'What is the key focus of sales and marketing strategies for AI governance solutions?',
                            options: [
                                'Minimizing customer education to speed the sales cycle',
                                'Building trust and demonstrating ROI',
                                'Reducing pricing transparency',
                                'Limiting stakeholder engagement in the purchase process'
                            ],
                            correct: 1,
                            explanation: 'Building trust and demonstrating ROI are the core focuses — organizations need confidence that governance solutions deliver real, measurable value before investing.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Which strategy is NOT recommended for understanding the AI governance market landscape?',
                            options: [
                                'Conducting thorough market research',
                                'Ignoring competitor analysis',
                                'Identifying customer pain points',
                                'Understanding regulatory trends driving demand'
                            ],
                            correct: 1,
                            explanation: 'Ignoring competitor analysis is NOT recommended — understanding the competitive landscape is essential for effective positioning and differentiation in the AI governance market.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What is essential for crafting a compelling value proposition for AI governance solutions?',
                            options: [
                                'Reducing customer education to simplify the message',
                                'Demonstrating measurable ROI and risk reduction',
                                'Focusing only on regulatory compliance aspects',
                                'Avoiding ROI discussions that might raise expectations'
                            ],
                            correct: 1,
                            explanation: 'Compelling value propositions must demonstrate measurable ROI and risk reduction — quantifying the value of avoiding AI failures compared to the cost of governance investment.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'What drives demand for AI governance solutions in the market?',
                            options: [
                                'Decreasing regulatory interest in AI',
                                'Organizations wanting to reduce AI development investment',
                                'Increasing regulatory requirements, AI failures, and board accountability for AI risks',
                                'Declining AI adoption rates'
                            ],
                            correct: 2,
                            explanation: 'AI governance demand is driven by increasing regulations (EU AI Act), high-profile failures raising awareness, and board-level accountability for AI risks becoming a mainstream expectation.'
                        },
                        {
                            type: 'multiple-choice',
                            question: 'Why is customer education a critical component of the AI governance market?',
                            options: [
                                'To extend sales cycles and increase contract value',
                                'Because many organizations underestimate governance needs, and education builds informed buyers and trust',
                                'To comply with regulatory requirements for vendor education',
                                'To replace the need for technical demonstrations'
                            ],
                            correct: 1,
                            explanation: 'Customer education builds trust, creates better-informed buyers, and supports long-term relationships — many organizations underestimate their governance needs and benefit from education about what proper governance requires.'
                        }
                    ]
                }
            }
        }
    ],

    // =========================================================================
    // COURSE 2 FINAL OVERALL TEST
    // =========================================================================
    finalTest: {
        title: 'Model Risk Management — Final Assessment',
        description: 'This comprehensive assessment covers all 10 chapters of the Model Risk Management course. A score of 70% or above is required to earn your course certificate.',
        passingScore: 70,
        questions: [
            {
                type: 'multiple-choice',
                question: 'What is the primary environmental concern associated with AI systems?',
                options: ['Software licensing costs', 'Energy consumption', 'Data redundancy', 'Computational limits'],
                correct: 1,
                chapter: 14,
                explanation: 'Energy consumption from training and running AI models is the primary environmental concern — equivalent to entire cities\' electricity needs for large model training runs.'
            },
            {
                type: 'multiple-choice',
                question: 'Which technique reduces AI model size and energy requirements for deployment?',
                options: ['Model expansion', 'Training from scratch each time', 'Model compression (pruning and quantization)', 'Using the largest possible models'],
                correct: 2,
                chapter: 14,
                explanation: 'Model compression through pruning (removing unnecessary parameters) and quantization (reducing precision) reduces model size and energy needs while maintaining performance.'
            },
            {
                type: 'multiple-choice',
                question: 'What is a key component of rapid response protocols for AI-related crises?',
                options: ['Ignoring risks until they materialize', 'Anticipatory risk assessment', 'Delaying all communication', 'Avoiding forensic analysis'],
                correct: 1,
                chapter: 15,
                explanation: 'Anticipatory risk assessment identifies likely crisis scenarios before they occur and pre-defines response playbooks — the foundation of effective AI crisis management.'
            },
            {
                type: 'multiple-choice',
                question: 'Which aspect is NOT part of AI crisis management?',
                options: ['Emergency shutdown procedures', 'Collaborative incident response', 'Ignoring post-crisis reviews', 'Ethical considerations'],
                correct: 2,
                chapter: 15,
                explanation: 'Post-crisis reviews are ESSENTIAL for organizational learning. Ignoring them is a failure, not a crisis management practice.'
            },
            {
                type: 'multiple-choice',
                question: 'What is essential for capacity building among AI actors?',
                options: ['One-time training at program launch', 'Continuous training and education', 'Reducing stakeholder involvement', 'Avoiding new technologies'],
                correct: 1,
                chapter: 16,
                explanation: 'Continuous training and education is essential — AI governance capability must evolve as technology, regulations, and organizational AI use continuously change.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the core IP challenge related to AI-generated content?',
                options: ['Identifying AI developers', 'Determining ownership of AI-generated content', 'Enhancing algorithm efficiency', 'Reducing computational costs'],
                correct: 1,
                chapter: 17,
                explanation: 'Determining ownership is the core IP challenge — traditional IP law assumes human authorship, which AI fundamentally challenges.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the primary focus of auditing AI systems?',
                options: ['Reducing development time', 'Ensuring ethical and reliable operation', 'Minimizing computational resources', 'Enhancing user experience'],
                correct: 1,
                chapter: 18,
                explanation: 'AI audits primarily focus on ensuring ethical and reliable operation — examining fairness, explainability, accuracy, bias, and governance compliance.'
            },
            {
                type: 'multiple-choice',
                question: 'Which element is NOT typically examined in AI audits?',
                options: ['Training data quality', 'Model performance across demographic groups', 'Marketing strategies', 'Cybersecurity controls'],
                correct: 2,
                chapter: 18,
                explanation: 'Marketing strategies are outside the scope of AI audits, which focus on technical, governance, fairness, and compliance dimensions.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the primary purpose of maintaining an AI Model Inventory?',
                options: ['Reducing operational costs', 'Enhancing transparency and management', 'Limiting model usage', 'Increasing data redundancy'],
                correct: 1,
                chapter: 19,
                explanation: 'An AI Model Inventory enhances transparency and management — ensuring organizations know what AI systems they have and how they perform.'
            },
            {
                type: 'multiple-choice',
                question: 'What is "shadow AI" and why is it a governance risk?',
                options: [
                    'AI systems that operate as backups',
                    'Models deployed without organizational knowledge or approval, creating compliance and ethical gaps',
                    'AI with low documentation visibility',
                    'Models trained on synthetic data'
                ],
                correct: 1,
                chapter: 19,
                explanation: 'Shadow AI — models deployed without governance approval — creates serious compliance, ethical, and liability risks that the organization cannot manage.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the strategic role of enterprise architecture in AI?',
                options: [
                    'Reducing deployment time',
                    'Providing a holistic view of the organization\'s technological landscape',
                    'Limiting AI innovation',
                    'Increasing data redundancy'
                ],
                correct: 1,
                chapter: 20,
                explanation: 'EA provides a holistic view of the technology landscape — enabling AI to be strategically integrated rather than deployed in governance-gap-creating isolated pockets.'
            },
            {
                type: 'multiple-choice',
                question: 'What is the primary goal of aligning AI governance with AI and SDLC?',
                options: [
                    'Reducing AI model usage',
                    'Enhancing consistency and compliance across AI development',
                    'Limiting stakeholder involvement',
                    'Minimizing documentation efforts'
                ],
                correct: 1,
                chapter: 21,
                explanation: 'Lifecycle alignment enhances consistency and compliance — making governance an embedded practice rather than a bolt-on process.'
            },
            {
                type: 'multiple-choice',
                question: 'Which is NOT part of defense-in-depth for AI development?',
                options: [
                    'Multiple security and governance layers',
                    'Single-point failure reliance on one control',
                    'Continuous monitoring',
                    'Regular independent audits'
                ],
                correct: 1,
                chapter: 21,
                explanation: 'Single-point failure reliance is the OPPOSITE of defense-in-depth, which creates multiple independent layers so no single control failure compromises the whole system.'
            },
            {
                type: 'multiple-choice',
                question: 'What is a primary concern for non-technical business leaders about AI?',
                options: [
                    'Enhanced user experience',
                    'Ethical implications of AI decisions',
                    'Increased transparency',
                    'Reduced operational efficiency'
                ],
                correct: 1,
                chapter: 22,
                explanation: 'Non-technical leaders are primarily concerned about ethical implications — the accountability, fairness, and societal impact of AI decisions made under their leadership.'
            },
            {
                type: 'multiple-choice',
                question: 'What key questions should non-technical leaders ask about AI systems?',
                options: [
                    'Which AI vendor is cheapest?',
                    'What happens when AI is wrong, and who is accountable?',
                    'How can we eliminate human review?',
                    'How can we avoid regulatory scrutiny?'
                ],
                correct: 1,
                chapter: 22,
                explanation: 'Non-technical leaders must ask governance questions: What happens when AI is wrong? Who is accountable? How will we know? Can affected parties challenge decisions?'
            },
            {
                type: 'multiple-choice',
                question: 'What is the key focus of sales and marketing strategies for AI governance solutions?',
                options: [
                    'Minimizing customer education',
                    'Building trust and demonstrating ROI',
                    'Reducing pricing transparency',
                    'Limiting stakeholder engagement'
                ],
                correct: 1,
                chapter: 23,
                explanation: 'Building trust and demonstrating ROI are the core focuses — organizations need confidence that governance solutions deliver real, measurable value.'
            },
            {
                type: 'multiple-choice',
                question: 'An organization discovers an AI model deployed 6 months ago is not in the model inventory. What governance risk does this represent?',
                options: [
                    'Technical debt from outdated code',
                    'Shadow AI — governance and compliance blind spot with unknown risk exposure',
                    'Data quality degradation from model drift',
                    'Vendor contract violation'
                ],
                correct: 1,
                chapter: 19,
                explanation: 'An unregistered AI model represents shadow AI — the organization has unknown risk exposure, no governance oversight, and potentially undisclosed compliance violations.'
            },
            {
                type: 'multiple-choice',
                question: 'During an AI crisis, what is the FIRST communication action required?',
                options: [
                    'Wait until all facts are known before communicating',
                    'A quick acknowledgment that an issue exists, even before all facts are confirmed',
                    'Communicate only to regulators, not to affected parties',
                    'Issue a complete root cause analysis immediately'
                ],
                correct: 1,
                chapter: 15,
                explanation: 'The first communication action is a quick acknowledgment that an issue exists — speed demonstrates accountability and prevents speculation while the full investigation proceeds.'
            },
            {
                type: 'multiple-choice',
                question: 'What additional versioning does AI development require compared to traditional software development?',
                options: [
                    'UI/UX design versions',
                    'Data versioning and model artifact versioning in addition to code versioning',
                    'User documentation versioning',
                    'Project plan versioning'
                ],
                correct: 1,
                chapter: 21,
                explanation: 'AI development requires versioning of code, training data, AND model artifacts — all three together enable full traceability and reproducibility.'
            },
            {
                type: 'multiple-choice',
                question: 'What complicates IP ownership for AI-generated innovations?',
                options: [
                    'Slow AI development pace',
                    'Rapid AI development outpacing legal and governance frameworks',
                    'Lack of human involvement in AI processes',
                    'Excessive regulatory clarity on AI IP'
                ],
                correct: 1,
                chapter: 17,
                explanation: 'Rapid AI development outpaces legal frameworks — IP law cannot evolve as fast as AI capabilities, creating persistent uncertainty about ownership rights.'
            }
        ]
    }
};

// Export for use in app
if (typeof window !== 'undefined') {
    window.BOOK_COURSE2_DATA = BOOK_COURSE2_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BOOK_COURSE2_DATA };
}
