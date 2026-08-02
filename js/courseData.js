/**
 * AI Governance & Ethics Academy
 * Comprehensive Course Data
 *
 * 5 Main Courses with 6 Sub-Courses Each (30 total)
 * Designed for Government IT Professionals and Line Managers
 */

const COURSE_DATA = {
    courses: [
        // ============================================
        // COURSE 1: AI GOVERNANCE FOUNDATIONS
        // ============================================
        {
            id: 'course-1',
            number: 1,
            title: 'AI Governance Foundations',
            subtitle: 'Introduction to AI Governance & Ethics',
            level: 'Introductory',
            description: 'A comprehensive introduction to AI governance and ethics, providing the foundational knowledge needed to understand responsible AI deployment in government contexts.',
            duration: '8-10 hours',
            lessons: 28,
            icon: 'foundation',
            color: '#3b82f6',
            objectives: [
                'Understand the fundamental concepts of artificial intelligence and machine learning',
                'Recognize the ethical implications of AI systems in public services',
                'Identify key stakeholders in AI governance frameworks',
                'Apply basic risk identification techniques to AI projects',
                'Explain the business case for responsible AI governance'
            ],
            subcourses: [
                {
                    id: 'course-1-1',
                    number: '1.1',
                    title: 'Understanding Artificial Intelligence',
                    description: 'Core concepts of AI, machine learning, and their applications in government',
                    duration: '90 min',
                    lessons: 5,
                    content: {
                        sections: [
                            {
                                title: 'What is Artificial Intelligence?',
                                content: `<p>Artificial Intelligence (AI) refers to computer systems designed to perform tasks that typically require human intelligence. These include learning from experience, understanding natural language, recognizing patterns, making decisions, and solving complex problems.</p>

                                <p>For government professionals, understanding AI is not about becoming technical experts, but about developing sufficient literacy to make informed decisions about AI adoption, oversight, and governance.</p>

                                <div class="info-box important">
                                    <div class="info-box-title">Key Distinction</div>
                                    <p><strong>Narrow AI</strong> (what we have today): Systems designed for specific tasks like image recognition or language translation.</p>
                                    <p><strong>General AI</strong> (theoretical): Systems with human-like reasoning across all domains - this does not yet exist.</p>
                                </div>

                                <h3>Types of AI Systems in Government</h3>
                                <ul>
                                    <li><strong>Rule-Based Systems:</strong> Follow explicit programmed rules (e.g., eligibility checkers)</li>
                                    <li><strong>Machine Learning Systems:</strong> Learn patterns from data (e.g., fraud detection)</li>
                                    <li><strong>Natural Language Processing:</strong> Process human language (e.g., chatbots, document analysis)</li>
                                    <li><strong>Computer Vision:</strong> Analyze images and video (e.g., document scanning, surveillance)</li>
                                    <li><strong>Predictive Analytics:</strong> Forecast outcomes (e.g., resource allocation, risk assessment)</li>
                                </ul>`
                            },
                            {
                                title: 'Machine Learning Fundamentals',
                                content: `<p>Machine Learning (ML) is a subset of AI where systems learn from data rather than being explicitly programmed. Understanding ML basics helps managers ask the right questions about AI systems.</p>

                                <h3>The Three Types of Machine Learning</h3>

                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Type</th>
                                            <th>How It Works</th>
                                            <th>Government Example</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Supervised Learning</strong></td>
                                            <td>Learns from labeled examples</td>
                                            <td>Predicting benefit eligibility based on historical decisions</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Unsupervised Learning</strong></td>
                                            <td>Finds patterns without labels</td>
                                            <td>Identifying clusters of similar tax return patterns</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Reinforcement Learning</strong></td>
                                            <td>Learns through trial and error</td>
                                            <td>Optimizing traffic light timing sequences</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="info-box tip">
                                    <div class="info-box-title">Manager's Insight</div>
                                    <p>The type of ML used affects the transparency of decisions. Supervised learning models trained on historical data may perpetuate past biases. Always ask: "What data was this model trained on, and what decisions might it be replicating?"</p>
                                </div>`
                            },
                            {
                                title: 'AI in the Public Sector',
                                content: `<p>Governments worldwide are adopting AI to improve service delivery, reduce costs, and enhance decision-making. However, public sector AI deployment comes with unique responsibilities and constraints.</p>

                                <h3>Current Applications</h3>
                                <ul>
                                    <li><strong>Benefits Administration:</strong> Eligibility determination, fraud detection, case prioritization</li>
                                    <li><strong>Healthcare:</strong> Diagnostic support, resource allocation, drug discovery</li>
                                    <li><strong>Law Enforcement:</strong> Predictive policing, facial recognition, case analysis</li>
                                    <li><strong>Revenue Services:</strong> Tax compliance, audit selection, customer service</li>
                                    <li><strong>Transport:</strong> Traffic management, infrastructure maintenance, route optimization</li>
                                    <li><strong>Environment:</strong> Climate modeling, pollution monitoring, resource management</li>
                                </ul>

                                <h3>Why Government AI is Different</h3>
                                <p>Unlike private sector applications, government AI systems:</p>
                                <ul>
                                    <li>Affect citizens who cannot choose alternative providers</li>
                                    <li>Must serve all populations, including vulnerable groups</li>
                                    <li>Are subject to public accountability and transparency requirements</li>
                                    <li>Must comply with administrative law and due process</li>
                                    <li>Handle sensitive personal data with strict protections</li>
                                </ul>

                                <div class="info-box warning">
                                    <div class="info-box-title">Critical Consideration</div>
                                    <p>Government AI decisions can significantly impact citizens' lives - affecting their benefits, freedom, or access to services. This places a higher burden of care on public sector AI governance than commercial applications.</p>
                                </div>`
                            },
                            {
                                title: 'The AI Lifecycle',
                                content: `<p>Understanding the AI lifecycle helps managers identify appropriate governance checkpoints throughout a project.</p>

                                <h3>Phase 1: Problem Definition</h3>
                                <p>Clearly articulating what problem AI will solve and whether AI is the appropriate solution. This phase determines the entire project's direction and ethical implications.</p>

                                <h3>Phase 2: Data Collection & Preparation</h3>
                                <p>Gathering, cleaning, and organizing data for training. This is where many biases enter systems - through data selection, labeling decisions, or missing populations.</p>

                                <h3>Phase 3: Model Development</h3>
                                <p>Building and training the AI model. Technical choices here affect transparency, accuracy, and fairness.</p>

                                <h3>Phase 4: Testing & Validation</h3>
                                <p>Evaluating model performance, including accuracy, fairness across groups, and edge case handling.</p>

                                <h3>Phase 5: Deployment</h3>
                                <p>Releasing the system into production with appropriate safeguards, human oversight, and appeal mechanisms.</p>

                                <h3>Phase 6: Monitoring & Maintenance</h3>
                                <p>Ongoing performance tracking, bias monitoring, and model updates as conditions change.</p>

                                <div class="info-box important">
                                    <div class="info-box-title">Governance Integration</div>
                                    <p>Effective AI governance requires checkpoints at each phase - not just a final review before deployment. The earlier issues are identified, the easier and cheaper they are to address.</p>
                                </div>`
                            },
                            {
                                title: 'Key Terminology for Managers',
                                content: `<p>A working vocabulary of AI terms enables effective communication with technical teams and vendors.</p>

                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Term</th>
                                            <th>Definition</th>
                                            <th>Why It Matters</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Algorithm</strong></td>
                                            <td>A set of rules or procedures for solving a problem</td>
                                            <td>The "recipe" that determines how decisions are made</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Training Data</strong></td>
                                            <td>Historical data used to teach an ML model</td>
                                            <td>Quality and representativeness directly impact fairness</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Model</strong></td>
                                            <td>The mathematical representation learned from data</td>
                                            <td>The "brain" that makes predictions or decisions</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Inference</strong></td>
                                            <td>Using a trained model to make predictions on new data</td>
                                            <td>When the AI is actively making decisions</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Black Box</strong></td>
                                            <td>A system whose internal workings are not visible/understandable</td>
                                            <td>Creates accountability and explanation challenges</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Explainability</strong></td>
                                            <td>Ability to understand why a model made a specific decision</td>
                                            <td>Essential for appeals, audits, and public trust</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Bias</strong></td>
                                            <td>Systematic errors that create unfair outcomes</td>
                                            <td>Can perpetuate or amplify discrimination</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Drift</strong></td>
                                            <td>Gradual degradation of model performance over time</td>
                                            <td>Models need ongoing monitoring and updates</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="info-box tip">
                                    <div class="info-box-title">Communication Tip</div>
                                    <p>When speaking with technical teams, don't hesitate to ask for explanations in plain language. Good technologists can explain complex concepts simply - if they can't, that itself is a warning sign about the project's governance.</p>
                                </div>`
                            }
                        ],
                        assessment: {
                            questions: [
                                {
                                    type: 'multiple-choice',
                                    question: 'Which type of machine learning would be most appropriate for identifying unusual patterns in procurement data without pre-labeled examples of fraud?',
                                    options: [
                                        'Supervised learning',
                                        'Unsupervised learning',
                                        'Reinforcement learning',
                                        'Rule-based systems'
                                    ],
                                    correct: 1,
                                    explanation: 'Unsupervised learning finds patterns without labeled examples, making it suitable for anomaly detection when you don\'t have pre-identified cases.'
                                },
                                {
                                    type: 'multiple-choice',
                                    question: 'At which phase of the AI lifecycle are biases most commonly introduced into systems?',
                                    options: [
                                        'Model deployment',
                                        'Data collection and preparation',
                                        'Monitoring and maintenance',
                                        'Problem definition'
                                    ],
                                    correct: 1,
                                    explanation: 'While bias can enter at any phase, data collection and preparation is where most biases enter - through selection bias, labeling decisions, or missing populations.'
                                },
                                {
                                    type: 'free-text',
                                    question: 'Why does government AI deployment carry different responsibilities compared to private sector AI? Provide two specific reasons.',
                                    sampleAnswer: 'Government AI affects citizens who cannot choose alternative providers and must serve all populations including vulnerable groups. Additionally, government AI is subject to public accountability, administrative law, and due process requirements that don\'t apply to private businesses.'
                                }
                            ]
                        }
                    }
                },
                {
                    id: 'course-1-2',
                    number: '1.2',
                    title: 'Ethics in AI: Core Principles',
                    description: 'Foundational ethical principles guiding responsible AI development and deployment',
                    duration: '120 min',
                    lessons: 6,
                    content: {
                        sections: [
                            {
                                title: 'Why AI Ethics Matters',
                                content: `<p>AI systems make or influence decisions that affect people's lives - from loan approvals to criminal justice to healthcare. Unlike traditional software, AI can perpetuate and amplify human biases, make opaque decisions, and operate at scales that affect millions.</p>

                                <p>Ethics in AI is not about philosophical abstraction - it's about practical decisions that determine whether AI systems help or harm the people they're meant to serve.</p>

                                <h3>Real-World Consequences</h3>
                                <ul>
                                    <li><strong>Healthcare algorithms</strong> that underestimated illness severity for Black patients, leading to denied care</li>
                                    <li><strong>Hiring systems</strong> that learned to penalize resumes mentioning "women's" activities</li>
                                    <li><strong>Facial recognition</strong> with significantly higher error rates for darker-skinned individuals</li>
                                    <li><strong>Predictive policing</strong> systems that concentrated enforcement in already over-policed communities</li>
                                    <li><strong>Benefits systems</strong> that incorrectly flagged fraud, causing financial hardship for vulnerable citizens</li>
                                </ul>

                                <div class="info-box warning">
                                    <div class="info-box-title">The Stakes</div>
                                    <p>Each of these cases caused real harm to real people. AI ethics isn't theoretical - it's about preventing concrete damage while enabling AI's benefits.</p>
                                </div>`
                            },
                            {
                                title: 'Core Ethical Principles',
                                content: `<p>While different frameworks use varying terminology, core AI ethics principles have emerged from global consensus:</p>

                                <h3>1. Fairness & Non-Discrimination</h3>
                                <p>AI systems should not create or reinforce unfair bias against individuals or groups. This includes:</p>
                                <ul>
                                    <li>Equal treatment across protected characteristics (race, gender, age, disability)</li>
                                    <li>Equitable outcomes, not just equal inputs</li>
                                    <li>Special attention to historically disadvantaged groups</li>
                                </ul>

                                <h3>2. Transparency & Explainability</h3>
                                <p>People affected by AI decisions should be able to understand how those decisions were made:</p>
                                <ul>
                                    <li>Clear communication that AI is being used</li>
                                    <li>Explanations appropriate to the audience (technical vs. general)</li>
                                    <li>Documentation of system logic and limitations</li>
                                </ul>

                                <h3>3. Accountability</h3>
                                <p>Clear responsibility for AI outcomes must exist:</p>
                                <ul>
                                    <li>Identifiable humans responsible for system decisions</li>
                                    <li>Mechanisms for redress when things go wrong</li>
                                    <li>Audit trails and oversight structures</li>
                                </ul>

                                <h3>4. Privacy & Data Protection</h3>
                                <p>AI must respect individuals' privacy rights:</p>
                                <ul>
                                    <li>Lawful basis for data collection and use</li>
                                    <li>Data minimization - collect only what's needed</li>
                                    <li>Security measures to protect personal information</li>
                                </ul>

                                <h3>5. Safety & Security</h3>
                                <p>AI systems must be robust and secure:</p>
                                <ul>
                                    <li>Reliable performance across expected conditions</li>
                                    <li>Graceful handling of edge cases and errors</li>
                                    <li>Protection against adversarial attacks</li>
                                </ul>

                                <h3>6. Human Oversight</h3>
                                <p>Humans must remain in control of consequential decisions:</p>
                                <ul>
                                    <li>Meaningful human review for high-stakes decisions</li>
                                    <li>Ability to override or shut down AI systems</li>
                                    <li>Clear escalation paths for uncertain cases</li>
                                </ul>`
                            },
                            {
                                title: 'Principle Tensions & Trade-offs',
                                content: `<p>Ethical principles sometimes conflict. Responsible AI governance requires navigating these tensions thoughtfully.</p>

                                <h3>Accuracy vs. Fairness</h3>
                                <p>A model optimized purely for accuracy might perform better for majority groups (more training data) while performing worse for minorities. Equalizing performance across groups may reduce overall accuracy.</p>

                                <div class="info-box example">
                                    <div class="info-box-title">Example</div>
                                    <p>A facial recognition system might achieve 99% accuracy overall, but closer examination reveals 99.5% for lighter skin tones and only 95% for darker skin tones. Adjusting for fairness might reduce overall accuracy to 98%, but equalize error rates.</p>
                                </div>

                                <h3>Transparency vs. Security</h3>
                                <p>Full transparency about how a fraud detection system works might help fraudsters evade it. Some opacity may be necessary for security.</p>

                                <h3>Privacy vs. Performance</h3>
                                <p>More data generally improves AI performance, but collecting more data raises privacy concerns. Finding the right balance requires careful consideration.</p>

                                <h3>Individual vs. Collective Benefit</h3>
                                <p>An AI system might benefit society overall while disadvantaging specific individuals. For example, optimizing traffic flow citywide might increase wait times in certain neighborhoods.</p>

                                <div class="info-box important">
                                    <div class="info-box-title">Resolution Approach</div>
                                    <p>These tensions don't have universal solutions. Resolution requires: (1) Identifying stakeholders affected, (2) Understanding magnitude of impacts, (3) Considering alternatives, (4) Documenting and justifying decisions, (5) Building in review and appeal mechanisms.</p>
                                </div>`
                            },
                            {
                                title: 'Ethical Frameworks Comparison',
                                content: `<p>Various organizations have developed AI ethics frameworks. Understanding their similarities and differences helps navigate the landscape.</p>

                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Framework</th>
                                            <th>Key Principles</th>
                                            <th>Distinctive Focus</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>OECD AI Principles</strong></td>
                                            <td>Inclusive growth, human-centered values, transparency, robustness, accountability</td>
                                            <td>International consensus, broad applicability</td>
                                        </tr>
                                        <tr>
                                            <td><strong>EU Ethics Guidelines (HLEG)</strong></td>
                                            <td>Human agency, technical robustness, privacy, transparency, diversity, wellbeing, accountability</td>
                                            <td>Comprehensive, tied to EU AI Act</td>
                                        </tr>
                                        <tr>
                                            <td><strong>IEEE Ethically Aligned Design</strong></td>
                                            <td>Human rights, wellbeing, data agency, effectiveness, transparency, accountability, awareness of misuse</td>
                                            <td>Technical implementation guidance</td>
                                        </tr>
                                        <tr>
                                            <td><strong>US AI Bill of Rights</strong></td>
                                            <td>Safe systems, non-discrimination, data privacy, notice & explanation, human alternatives</td>
                                            <td>Civil rights focus</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="info-box tip">
                                    <div class="info-box-title">Practical Application</div>
                                    <p>Rather than choosing one framework, many organizations create their own principles drawing from multiple sources, tailored to their specific context and stakeholders.</p>
                                </div>`
                            },
                            {
                                title: 'Ethics in Practice: A Manager\'s Role',
                                content: `<p>Managers play a crucial role in embedding ethics throughout AI projects. Here's how to operationalize ethical principles:</p>

                                <h3>Before Project Start</h3>
                                <ul>
                                    <li>Question whether AI is the right solution for the problem</li>
                                    <li>Identify potential ethical risks early</li>
                                    <li>Ensure diverse perspectives are included in project teams</li>
                                    <li>Establish clear governance and accountability structures</li>
                                </ul>

                                <h3>During Development</h3>
                                <ul>
                                    <li>Review data sources for potential biases</li>
                                    <li>Require fairness testing across demographic groups</li>
                                    <li>Document key decisions and their rationale</li>
                                    <li>Create channels for raising ethical concerns</li>
                                </ul>

                                <h3>At Deployment</h3>
                                <ul>
                                    <li>Ensure affected parties know AI is being used</li>
                                    <li>Establish human oversight for high-stakes decisions</li>
                                    <li>Create clear appeal and redress mechanisms</li>
                                    <li>Plan for monitoring and incident response</li>
                                </ul>

                                <h3>Ongoing Operations</h3>
                                <ul>
                                    <li>Monitor for performance degradation and emerging biases</li>
                                    <li>Track and respond to complaints and appeals</li>
                                    <li>Conduct periodic ethics reviews</li>
                                    <li>Update systems as understanding evolves</li>
                                </ul>

                                <div class="info-box important">
                                    <div class="info-box-title">Leadership Responsibility</div>
                                    <p>Ethics cannot be delegated entirely to technical teams or compliance functions. Managers must actively champion ethical considerations and create space for ethical concerns to be raised without fear of reprisal.</p>
                                </div>`
                            },
                            {
                                title: 'Building an Ethical Culture',
                                content: `<p>Sustainable AI ethics requires more than policies - it requires culture change that values responsible innovation.</p>

                                <h3>Elements of Ethical AI Culture</h3>

                                <p><strong>Psychological Safety:</strong> Team members must feel safe raising ethical concerns without career consequences. This requires explicit encouragement and visible examples of concerns being taken seriously.</p>

                                <p><strong>Ethics as Enabler:</strong> Frame ethics as enabling sustainable innovation, not blocking progress. Ethical AI builds trust, reduces regulatory risk, and prevents costly failures.</p>

                                <p><strong>Diverse Teams:</strong> Include people with different backgrounds, perspectives, and experiences. Homogeneous teams are more likely to have blind spots.</p>

                                <p><strong>Continuous Learning:</strong> AI ethics is an evolving field. Create opportunities for ongoing education and reflection.</p>

                                <p><strong>External Engagement:</strong> Engage with civil society, affected communities, and external experts. Internal perspectives alone are insufficient.</p>

                                <h3>Warning Signs of Ethical Problems</h3>
                                <ul>
                                    <li>Ethics discussions are discouraged or seen as obstacles</li>
                                    <li>Pressure to deploy quickly without adequate review</li>
                                    <li>No clear ownership for ethical outcomes</li>
                                    <li>Lack of diversity in decision-making</li>
                                    <li>Dismissal of concerns from marginalized communities</li>
                                    <li>"Move fast and break things" mentality</li>
                                </ul>

                                <div class="info-box tip">
                                    <div class="info-box-title">Starting Point</div>
                                    <p>If you're not sure where to start, begin by asking: "Who could be harmed by this system, and how would we know?" This simple question opens space for ethical reflection.</p>
                                </div>`
                            }
                        ],
                        assessment: {
                            questions: [
                                {
                                    type: 'multiple-choice',
                                    question: 'A facial recognition system achieves 99% accuracy overall, but has a 95% accuracy rate for darker-skinned individuals and 99.5% for lighter-skinned individuals. This is primarily a violation of which ethical principle?',
                                    options: [
                                        'Transparency',
                                        'Fairness & Non-discrimination',
                                        'Privacy',
                                        'Human Oversight'
                                    ],
                                    correct: 1,
                                    explanation: 'This is a fairness issue - the system performs significantly worse for certain demographic groups, potentially leading to discriminatory outcomes.'
                                },
                                {
                                    type: 'multiple-choice',
                                    question: 'When ethical principles conflict (such as accuracy vs. fairness), what is the recommended approach?',
                                    options: [
                                        'Always prioritize accuracy as it benefits the most people',
                                        'Always prioritize fairness as it protects minorities',
                                        'Identify stakeholders, assess impacts, document decisions, and build in review mechanisms',
                                        'Defer to technical teams to make the decision'
                                    ],
                                    correct: 2,
                                    explanation: 'There are no universal solutions to ethical tensions. The recommended approach involves stakeholder analysis, impact assessment, documentation, and review mechanisms.'
                                }
                            ]
                        }
                    }
                },
                {
                    id: 'course-1-3',
                    number: '1.3',
                    title: 'The Business Case for AI Governance',
                    description: 'Understanding why AI governance is a strategic advantage, not just a compliance requirement',
                    duration: '90 min',
                    lessons: 5,
                    content: {
                        sections: [
                            {
                                title: 'Beyond Compliance: Strategic Value',
                                content: `<p>Many organizations view AI governance as a compliance burden - another set of rules to follow. This perspective misses the strategic value of responsible AI practices.</p>

                                <p>Effective AI governance is a <strong>competitive advantage</strong> that:</p>
                                <ul>
                                    <li>Builds public trust and social license to operate</li>
                                    <li>Reduces legal and regulatory risks</li>
                                    <li>Improves system quality and reliability</li>
                                    <li>Attracts and retains talent</li>
                                    <li>Enables sustainable innovation</li>
                                </ul>

                                <div class="info-box important">
                                    <div class="info-box-title">Reframe the Conversation</div>
                                    <p>Instead of asking "How do we comply with AI governance requirements?" ask "How does AI governance help us deliver better outcomes for citizens and build lasting public trust?"</p>
                                </div>`
                            },
                            {
                                title: 'Trust as a Strategic Asset',
                                content: `<p>Public trust is essential for government AI adoption. Citizens who don't trust AI systems will resist their use, reducing effectiveness and creating political challenges.</p>

                                <h3>Trust Drivers in Government AI</h3>
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Trust Factor</th>
                                            <th>What Citizens Want</th>
                                            <th>Governance Response</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Transparency</strong></td>
                                            <td>Know when AI is being used</td>
                                            <td>Clear disclosure policies</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Fairness</strong></td>
                                            <td>Equal treatment regardless of background</td>
                                            <td>Bias testing and monitoring</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Control</strong></td>
                                            <td>Ability to challenge decisions</td>
                                            <td>Human review and appeals processes</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Security</strong></td>
                                            <td>Protection of personal data</td>
                                            <td>Privacy-by-design practices</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Competence</strong></td>
                                            <td>Systems that work correctly</td>
                                            <td>Rigorous testing and validation</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div class="info-box example">
                                    <div class="info-box-title">Case Study: Trust Erosion</div>
                                    <p>The Dutch childcare benefits scandal ("toeslagenaffaire") destroyed public trust when AI-driven fraud detection wrongly accused thousands of parents, causing financial ruin. The resulting political crisis brought down the government. Rebuilding trust will take years.</p>
                                </div>`
                            },
                            {
                                title: 'Risk Management Benefits',
                                content: `<p>Proactive AI governance significantly reduces multiple categories of risk:</p>

                                <h3>Legal & Regulatory Risk</h3>
                                <p>Non-compliant AI systems face growing legal exposure:</p>
                                <ul>
                                    <li>EU AI Act penalties up to 7% of global turnover</li>
                                    <li>GDPR fines for automated decision-making violations</li>
                                    <li>Discrimination lawsuits under existing civil rights laws</li>
                                    <li>Judicial review of administrative decisions</li>
                                </ul>

                                <h3>Operational Risk</h3>
                                <p>Poorly governed AI creates operational problems:</p>
                                <ul>
                                    <li>System failures requiring emergency shutdowns</li>
                                    <li>Incorrect decisions requiring manual remediation</li>
                                    <li>Security vulnerabilities enabling attacks</li>
                                    <li>Model drift degrading performance over time</li>
                                </ul>

                                <h3>Reputational Risk</h3>
                                <p>AI failures become public scandals:</p>
                                <ul>
                                    <li>Media coverage of biased or harmful systems</li>
                                    <li>Political pressure and ministerial accountability</li>
                                    <li>Loss of public confidence in digital services</li>
                                    <li>Difficulty recruiting and retaining talent</li>
                                </ul>

                                <div class="info-box tip">
                                    <div class="info-box-title">Cost-Benefit Analysis</div>
                                    <p>The cost of proactive governance is typically a fraction of the cost of remediation after failure. A single high-profile AI scandal can cost more than years of governance investment.</p>
                                </div>`
                            },
                            {
                                title: 'Quality Improvement Effects',
                                content: `<p>Governance disciplines often improve AI system quality, not just compliance:</p>

                                <h3>Data Quality</h3>
                                <p>Governance requirements for data documentation and bias checking often uncover data quality issues that would otherwise degrade model performance.</p>

                                <h3>Testing Rigor</h3>
                                <p>Fairness testing across subgroups frequently reveals edge cases and failure modes that general testing misses.</p>

                                <h3>Documentation</h3>
                                <p>Requirements to document model decisions and limitations create knowledge that helps with maintenance, debugging, and improvements.</p>

                                <h3>Monitoring</h3>
                                <p>Ongoing monitoring for fairness and performance catches degradation earlier than pure accuracy monitoring.</p>

                                <div class="info-box example">
                                    <div class="info-box-title">Example: Google's Cards</div>
                                    <p>Google's Model Cards initiative, designed for transparency, also improved internal understanding of models. Teams reported that creating documentation helped them identify and fix problems they hadn't previously recognized.</p>
                                </div>`
                            },
                            {
                                title: 'Making the Business Case',
                                content: `<p>To secure support and resources for AI governance, you need to make a compelling case to leadership:</p>

                                <h3>Frame Around Outcomes</h3>
                                <p>Connect governance to outcomes leadership cares about:</p>
                                <ul>
                                    <li><strong>For Ministers:</strong> Reduced scandal risk, public trust, delivery success</li>
                                    <li><strong>For Finance:</strong> Lower remediation costs, regulatory penalty avoidance</li>
                                    <li><strong>For Operations:</strong> Better system reliability, fewer manual interventions</li>
                                    <li><strong>For Legal:</strong> Compliance evidence, defensible decision-making</li>
                                </ul>

                                <h3>Use Concrete Examples</h3>
                                <p>Reference specific failures and their costs:</p>
                                <ul>
                                    <li>Dutch benefits scandal: €30,000+ compensation per affected family, government resignation</li>
                                    <li>Michigan unemployment fraud detection: $20 million+ in wrongful penalties, class action lawsuit</li>
                                    <li>UK exam grading algorithm: Immediate reversal, political crisis, minister resignation</li>
                                </ul>

                                <h3>Start Small, Demonstrate Value</h3>
                                <p>If resources are limited, start with pilot governance activities that demonstrate value:</p>
                                <ul>
                                    <li>Risk assessment of one high-profile AI system</li>
                                    <li>Bias audit of a deployed model</li>
                                    <li>Documentation of a decision-making system</li>
                                </ul>

                                <div class="info-box important">
                                    <div class="info-box-title">Key Message</div>
                                    <p>AI governance isn't about slowing down innovation - it's about sustainable innovation that delivers lasting value without creating liability landmines.</p>
                                </div>`
                            }
                        ],
                        assessment: {
                            questions: [
                                {
                                    type: 'multiple-choice',
                                    question: 'What is the primary strategic value of AI governance beyond compliance?',
                                    options: [
                                        'It creates more paperwork to justify staff positions',
                                        'It builds public trust and enables sustainable innovation',
                                        'It slows down projects to reduce workload',
                                        'It transfers responsibility to external auditors'
                                    ],
                                    correct: 1,
                                    explanation: 'AI governance builds the trust necessary for public acceptance and creates conditions for sustainable, long-term AI success.'
                                },
                                {
                                    type: 'free-text',
                                    question: 'Describe two ways that governance disciplines can actually improve AI system quality (not just compliance).',
                                    sampleAnswer: 'First, data governance requirements for documentation and bias checking often uncover data quality issues that would degrade model performance. Second, fairness testing across subgroups frequently reveals edge cases and failure modes that general accuracy testing misses, leading to more robust systems.'
                                }
                            ]
                        }
                    }
                },
                {
                    id: 'course-1-4',
                    number: '1.4',
                    title: 'Stakeholder Mapping for AI Projects',
                    description: 'Identifying and engaging all parties affected by AI systems',
                    duration: '75 min',
                    lessons: 4,
                    content: {
                        sections: [
                            {
                                title: 'Why Stakeholder Mapping Matters',
                                content: `<p>AI systems affect more people than just their direct users. Comprehensive stakeholder mapping ensures you consider all parties who might be impacted by or have influence over your AI project.</p>

                                <h3>Common Stakeholder Blind Spots</h3>
                                <ul>
                                    <li><strong>Affected but not consulted:</strong> Citizens whose benefits, services, or rights are determined by AI</li>
                                    <li><strong>Indirect impacts:</strong> Communities affected by aggregate AI decisions (e.g., policing patterns)</li>
                                    <li><strong>Future stakeholders:</strong> Those affected by precedents set today</li>
                                    <li><strong>Non-users:</strong> People who can't or won't use AI systems but are still affected</li>
                                </ul>

                                <div class="info-box warning">
                                    <div class="info-box-title">Critical Insight</div>
                                    <p>The people most affected by AI systems are often the least represented in their design. Low-income citizens, people with disabilities, non-native speakers, and elderly populations frequently bear the greatest risks from AI errors while having the least input.</p>
                                </div>`
                            },
                            {
                                title: 'Stakeholder Categories',
                                content: `<p>A comprehensive stakeholder map includes:</p>

                                <h3>Internal Stakeholders</h3>
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Stakeholder</th>
                                            <th>Interest</th>
                                            <th>Influence</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Executive leadership</td>
                                            <td>Strategic outcomes, risk management</td>
                                            <td>High - approve projects and budgets</td>
                                        </tr>
                                        <tr>
                                            <td>IT/Technical teams</td>
                                            <td>Feasibility, maintenance</td>
                                            <td>High - implement systems</td>
                                        </tr>
                                        <tr>
                                            <td>Operations staff</td>
                                            <td>Workability, job impact</td>
                                            <td>Medium - can enable or resist adoption</td>
                                        </tr>
                                        <tr>
                                            <td>Legal/Compliance</td>
                                            <td>Regulatory compliance</td>
                                            <td>High - can block non-compliant systems</td>
                                        </tr>
                                        <tr>
                                            <td>Communications</td>
                                            <td>Public perception</td>
                                            <td>Medium - manage messaging</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h3>External Stakeholders</h3>
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Stakeholder</th>
                                            <th>Interest</th>
                                            <th>Influence</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Citizens/Service users</td>
                                            <td>Fair treatment, service quality</td>
                                            <td>Low individually, high collectively</td>
                                        </tr>
                                        <tr>
                                            <td>Advocacy groups</td>
                                            <td>Rights protection</td>
                                            <td>Medium - can mobilize public opinion</td>
                                        </tr>
                                        <tr>
                                            <td>Regulators</td>
                                            <td>Compliance, public protection</td>
                                            <td>High - enforcement powers</td>
                                        </tr>
                                        <tr>
                                            <td>Media</td>
                                            <td>Public interest stories</td>
                                            <td>High - can create public pressure</td>
                                        </tr>
                                        <tr>
                                            <td>Vendors/Partners</td>
                                            <td>Commercial relationship</td>
                                            <td>Medium - technical dependencies</td>
                                        </tr>
                                    </tbody>
                                </table>`
                            },
                            {
                                title: 'Engagement Strategies',
                                content: `<p>Different stakeholders require different engagement approaches:</p>

                                <h3>High Power, High Interest</h3>
                                <p><strong>Strategy: Manage Closely</strong></p>
                                <p>Regular engagement, involve in key decisions, address concerns promptly. These stakeholders can make or break your project.</p>

                                <h3>High Power, Low Interest</h3>
                                <p><strong>Strategy: Keep Satisfied</strong></p>
                                <p>Keep informed without overwhelming detail. Ensure no surprises that might trigger intervention.</p>

                                <h3>Low Power, High Interest</h3>
                                <p><strong>Strategy: Keep Informed</strong></p>
                                <p>Regular communications, opportunities to provide input. These stakeholders can become allies or critics.</p>

                                <h3>Low Power, Low Interest</h3>
                                <p><strong>Strategy: Monitor</strong></p>
                                <p>Basic awareness. Circumstances may change their interest or power.</p>

                                <div class="info-box tip">
                                    <div class="info-box-title">Special Consideration</div>
                                    <p>Citizens affected by AI decisions are often categorized as "low power, high interest" - but this underestimates their collective influence through advocacy, media, and political channels. Treat citizen engagement as a priority, not an afterthought.</p>
                                </div>`
                            },
                            {
                                title: 'Practical Stakeholder Engagement',
                                content: `<p>Effective engagement requires appropriate methods for each stakeholder group:</p>

                                <h3>For Affected Citizens</h3>
                                <ul>
                                    <li>Public consultations on AI use policies</li>
                                    <li>User research and testing with diverse groups</li>
                                    <li>Citizen panels and advisory groups</li>
                                    <li>Clear channels for complaints and feedback</li>
                                </ul>

                                <h3>For Advocacy Groups</h3>
                                <ul>
                                    <li>Proactive outreach before public announcements</li>
                                    <li>Transparent sharing of impact assessments</li>
                                    <li>Invitation to participate in governance processes</li>
                                    <li>Formal response mechanisms for concerns raised</li>
                                </ul>

                                <h3>For Operations Staff</h3>
                                <ul>
                                    <li>Early involvement in design to ensure workability</li>
                                    <li>Training on new systems and responsibilities</li>
                                    <li>Clear guidance on human oversight requirements</li>
                                    <li>Channels to escalate concerns</li>
                                </ul>

                                <div class="info-box important">
                                    <div class="info-box-title">Documentation Requirement</div>
                                    <p>Document your stakeholder mapping and engagement activities. This demonstrates due diligence and helps with regulatory compliance, particularly under frameworks like the EU AI Act that require stakeholder consideration.</p>
                                </div>`
                            }
                        ],
                        assessment: {
                            questions: [
                                {
                                    type: 'multiple-choice',
                                    question: 'Which stakeholder group is most commonly overlooked in AI governance?',
                                    options: [
                                        'Executive leadership',
                                        'Technical teams',
                                        'Citizens affected by AI decisions',
                                        'Legal/Compliance teams'
                                    ],
                                    correct: 2,
                                    explanation: 'Citizens affected by AI decisions are often the most impacted but least consulted stakeholders, particularly vulnerable populations.'
                                },
                                {
                                    type: 'free-text',
                                    question: 'Your agency is deploying an AI system to prioritize social services cases. Identify three external stakeholder groups and describe their likely interests.',
                                    sampleAnswer: 'Service users (fair prioritization of their cases, understanding of decisions), advocacy groups (protection of vulnerable populations, non-discrimination), regulators (compliance with data protection and administrative law). Each has different interests in how the system operates and different engagement needs.'
                                }
                            ]
                        }
                    }
                },
                {
                    id: 'course-1-5',
                    number: '1.5',
                    title: 'Introduction to AI Risk Assessment',
                    description: 'Basic framework for identifying and categorizing AI-related risks',
                    duration: '90 min',
                    lessons: 5,
                    content: {
                        sections: [
                            {
                                title: 'Why Risk Assessment First?',
                                content: `<p>Risk assessment should be the starting point for AI governance - not an afterthought before deployment. Early risk identification shapes appropriate governance measures throughout the project.</p>

                                <h3>The Cost of Late Discovery</h3>
                                <p>Risks discovered late in development are exponentially more expensive to address:</p>
                                <ul>
                                    <li><strong>Design phase:</strong> Addressing risks might require adjusting problem framing</li>
                                    <li><strong>Development phase:</strong> May require changes to data sources or model architecture</li>
                                    <li><strong>Testing phase:</strong> Might require redesign and redevelopment</li>
                                    <li><strong>Deployment:</strong> Could require pulling the system entirely</li>
                                    <li><strong>Post-deployment:</strong> Remediation plus reputation damage plus potential legal liability</li>
                                </ul>

                                <div class="info-box important">
                                    <div class="info-box-title">Key Principle</div>
                                    <p>The purpose of risk assessment is not to prevent all AI use, but to ensure risks are understood and appropriately managed. Many AI projects with significant risks can proceed with proper safeguards.</p>
                                </div>`
                            },
                            {
                                title: 'Categories of AI Risk',
                                content: `<p>AI risks can be categorized in multiple ways. Understanding categories helps ensure comprehensive assessment:</p>

                                <h3>By Impact Type</h3>
                                <table class="content-table">
                                    <thead>
                                        <tr>
                                            <th>Category</th>
                                            <th>Examples</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><strong>Individual Rights</strong></td>
                                            <td>Discrimination, privacy violations, unfair treatment, denial of due process</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Safety</strong></td>
                                            <td>Physical harm, health impacts, psychological harm</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Economic</strong></td>
                                            <td>Financial loss, denial of benefits, employment impacts</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Social</strong></td>
                                            <td>Community impacts, social division, democratic processes</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Organizational</strong></td>
                                            <td>Legal liability, reputation damage, operational disruption</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <h3>By Source</h3>
                                <ul>
                                    <li><strong>Data risks:</strong> Bias in training data, privacy concerns, data quality issues</li>
                                    <li><strong>Model risks:</strong> Accuracy limitations, lack of explainability, adversarial vulnerability</li>
                                    <li><strong>Deployment risks:</strong> Inappropriate use, lack of human oversight, inadequate monitoring</li>
                                    <li><strong>Context risks:</strong> Changing conditions, misalignment with intended purpose</li>
                                </ul>`
                            },
                            {
                                title: 'Risk Factors in Government AI',
                                content: `<p>Certain factors increase risk levels for government AI systems:</p>

                                <h3>High-Risk Indicators</h3>

                                <p><strong>Decision Consequence:</strong> Does the AI affect significant life decisions?</p>
                                <ul>
                                    <li>Access to benefits or services</li>
                                    <li>Criminal justice outcomes</li>
                                    <li>Employment or education opportunities</li>
                                    <li>Health or safety determinations</li>
                                </ul>

                                <p><strong>Affected Population:</strong> Who bears the impact?</p>
                                <ul>
                                    <li>Vulnerable groups (children, elderly, disabled, low-income)</li>
                                    <li>Those with limited alternatives to government services</li>
                                    <li>Groups historically subject to discrimination</li>
                                </ul>

                                <p><strong>Reversibility:</strong> Can errors be corrected?</p>
                                <ul>
                                    <li>Permanent records or histories</li>
                                    <li>Time-sensitive decisions</li>
                                    <li>Cascading effects (one decision affecting others)</li>
                                </ul>

                                <p><strong>Transparency:</strong> Can affected parties understand and challenge decisions?</p>
                                <ul>
                                    <li>Explainability of the AI system</li>
                                    <li>Availability of human review</li>
                                    <li>Existence of appeal mechanisms</li>
                                </ul>

                                <div class="info-box warning">
                                    <div class="info-box-title">High-Risk Combinations</div>
                                    <p>The highest risks occur when multiple factors combine: consequential decisions affecting vulnerable populations with limited reversibility and low transparency. These situations require the most rigorous governance.</p>
                                </div>`
                            },
                            {
                                title: 'Basic Risk Assessment Process',
                                content: `<p>A structured approach to risk assessment ensures consistency and completeness:</p>

                                <h3>Step 1: Define the AI System</h3>
                                <ul>
                                    <li>What problem does it solve?</li>
                                    <li>What decisions does it make or influence?</li>
                                    <li>What data does it use?</li>
                                    <li>Who are the users and affected parties?</li>
                                </ul>

                                <h3>Step 2: Identify Potential Harms</h3>
                                <ul>
                                    <li>What could go wrong?</li>
                                    <li>Who could be harmed and how?</li>
                                    <li>What are the worst-case scenarios?</li>
                                    <li>What are similar systems' failure modes?</li>
                                </ul>

                                <h3>Step 3: Assess Likelihood and Severity</h3>
                                <ul>
                                    <li>How likely is each harm to occur?</li>
                                    <li>How severe would the impact be?</li>
                                    <li>How many people could be affected?</li>
                                    <li>Are some groups disproportionately at risk?</li>
                                </ul>

                                <h3>Step 4: Determine Risk Level</h3>
                                <ul>
                                    <li>Combine likelihood and severity assessments</li>
                                    <li>Consider risk tolerance for the context</li>
                                    <li>Classify risk level (minimal, limited, high, unacceptable)</li>
                                </ul>

                                <h3>Step 5: Identify Mitigations</h3>
                                <ul>
                                    <li>What measures could reduce risks?</li>
                                    <li>Are mitigations feasible and effective?</li>
                                    <li>What residual risk remains after mitigation?</li>
                                </ul>`
                            },
                            {
                                title: 'Documenting Risk Assessments',
                                content: `<p>Proper documentation is essential for accountability and continuous improvement:</p>

                                <h3>What to Document</h3>
                                <ul>
                                    <li>System description and purpose</li>
                                    <li>Identified risks and their analysis</li>
                                    <li>Risk classification rationale</li>
                                    <li>Planned mitigations</li>
                                    <li>Residual risks accepted</li>
                                    <li>Review and approval decisions</li>
                                    <li>Planned review schedule</li>
                                </ul>

                                <h3>Who Should Be Involved</h3>
                                <ul>
                                    <li>Technical team members who understand the system</li>
                                    <li>Domain experts who understand the context</li>
                                    <li>Legal/compliance for regulatory perspective</li>
                                    <li>Stakeholder representatives where possible</li>
                                    <li>Senior decision-maker for final approval</li>
                                </ul>

                                <div class="info-box tip">
                                    <div class="info-box-title">Living Document</div>
                                    <p>Risk assessments should be living documents, updated as the system evolves, new risks emerge, or circumstances change. Schedule regular reviews and update triggers.</p>
                                </div>

                                <h3>Common Pitfalls to Avoid</h3>
                                <ul>
                                    <li>Treating risk assessment as a one-time checkbox</li>
                                    <li>Underestimating risks due to optimism bias</li>
                                    <li>Ignoring risks because they're hard to quantify</li>
                                    <li>Failing to consider cumulative or systemic effects</li>
                                    <li>Assessing in isolation without stakeholder input</li>
                                </ul>`
                            }
                        ],
                        assessment: {
                            questions: [
                                {
                                    type: 'multiple-choice',
                                    question: 'When in the AI project lifecycle should risk assessment begin?',
                                    options: [
                                        'After model development is complete',
                                        'During the testing phase',
                                        'At the earliest stages, before development begins',
                                        'Just before deployment'
                                    ],
                                    correct: 2,
                                    explanation: 'Risk assessment should begin at the earliest stages to inform design decisions. Late discovery of risks is exponentially more expensive to address.'
                                },
                                {
                                    type: 'multiple-choice',
                                    question: 'Which combination represents the highest risk scenario?',
                                    options: [
                                        'Low-consequence decisions affecting general population with easy reversibility',
                                        'Medium-consequence decisions with good explainability',
                                        'High-consequence decisions affecting vulnerable populations with limited reversibility and low transparency',
                                        'Automated decisions with human oversight'
                                    ],
                                    correct: 2,
                                    explanation: 'The highest risks occur when multiple factors combine: consequential decisions, vulnerable populations, irreversibility, and low transparency.'
                                }
                            ]
                        }
                    }
                },
                {
                    id: 'course-1-6',
                    number: '1.6',
                    title: 'Module Assessment & Certification',
                    description: 'Comprehensive assessment and practical application exercises',
                    duration: '60 min',
                    lessons: 3,
                    content: {
                        sections: [
                            {
                                title: 'Course Summary',
                                content: `<p>This foundational module has equipped you with essential knowledge for AI governance:</p>

                                <h3>Key Takeaways</h3>
                                <ul>
                                    <li><strong>AI Fundamentals:</strong> Understanding different AI types and the AI lifecycle enables informed governance decisions</li>
                                    <li><strong>Ethical Principles:</strong> Core principles of fairness, transparency, accountability, privacy, safety, and human oversight guide responsible AI</li>
                                    <li><strong>Business Case:</strong> AI governance is a strategic asset, not just a compliance burden</li>
                                    <li><strong>Stakeholder Focus:</strong> Comprehensive stakeholder mapping ensures all affected parties are considered</li>
                                    <li><strong>Risk Assessment:</strong> Early, structured risk assessment is essential for appropriate governance</li>
                                </ul>

                                <h3>Next Steps</h3>
                                <p>With this foundation, you're ready to proceed to:</p>
                                <ul>
                                    <li><strong>Course 2:</strong> Technical AI Ethics & Safety - deeper dive into technical aspects of responsible AI</li>
                                    <li><strong>Course 3:</strong> Regulatory Compliance & Risk Management - detailed regulatory requirements</li>
                                </ul>`
                            }
                        ],
                        assessment: {
                            questions: [
                                {
                                    type: 'multiple-choice',
                                    question: 'A government agency is deploying an AI system to prioritize housing benefit applications. Which type of machine learning is most likely being used?',
                                    options: [
                                        'Unsupervised learning',
                                        'Supervised learning',
                                        'Reinforcement learning',
                                        'Rule-based systems only'
                                    ],
                                    correct: 1,
                                    explanation: 'Supervised learning, which learns from labeled historical decisions, is most commonly used for prioritization based on past patterns.'
                                },
                                {
                                    type: 'multiple-choice',
                                    question: 'Under the principle of accountability, which of the following is required?',
                                    options: [
                                        'AI systems must be 100% accurate',
                                        'Identifiable humans must be responsible for system decisions',
                                        'All AI systems must be fully explainable',
                                        'Citizens must approve all AI deployments'
                                    ],
                                    correct: 1,
                                    explanation: 'Accountability requires clear human responsibility for AI outcomes, with mechanisms for redress when things go wrong.'
                                },
                                {
                                    type: 'multiple-choice',
                                    question: 'What is the primary strategic value of AI governance?',
                                    options: [
                                        'Creating employment for compliance officers',
                                        'Slowing down dangerous innovation',
                                        'Building public trust and enabling sustainable innovation',
                                        'Meeting minimum legal requirements'
                                    ],
                                    correct: 2,
                                    explanation: 'AI governance builds the trust necessary for public acceptance and creates conditions for sustainable, long-term AI success.'
                                },
                                {
                                    type: 'free-text',
                                    question: 'Your agency wants to deploy an AI system to detect potential fraud in social benefits applications. Identify three key risks that should be assessed and one mitigation for each.',
                                    sampleAnswer: '1) Bias risk - the system might disproportionately flag applications from certain demographic groups based on biased historical data. Mitigation: Conduct fairness testing across demographic groups before deployment. 2) False positive risk - legitimate applications flagged as fraudulent could cause hardship for vulnerable citizens. Mitigation: Require human review before any negative action is taken. 3) Transparency risk - affected citizens may not understand why their application was flagged. Mitigation: Provide clear explanations of factors contributing to fraud flags and establish an appeals process.'
                                }
                            ]
                        }
                    }
                }
            ]
        },

        // ============================================
        // COURSE 2: TECHNICAL AI ETHICS & SAFETY
        // ============================================
        {
            id: 'course-2',
            number: 2,
            title: 'Technical AI Ethics & Safety',
            subtitle: 'Deep Dive into Responsible AI Implementation',
            level: 'Intermediate',
            description: 'Technical foundations of AI ethics including bias detection, fairness metrics, explainability, and safety measures. Essential for IT professionals overseeing AI systems.',
            duration: '12-15 hours',
            lessons: 35,
            icon: 'technical',
            color: '#0d9488',
            objectives: [
                'Apply multiple fairness metrics and understand their trade-offs',
                'Implement bias detection and mitigation techniques',
                'Evaluate and deploy explainability methods appropriate to context',
                'Design robust testing protocols for AI systems',
                'Implement privacy-preserving techniques in AI development'
            ],
            subcourses: [
                {
                    id: 'course-2-1',
                    number: '2.1',
                    title: 'Understanding Algorithmic Bias',
                    description: 'Sources, types, and detection of bias in AI systems',
                    duration: '150 min',
                    lessons: 7
                },
                {
                    id: 'course-2-2',
                    number: '2.2',
                    title: 'Fairness Metrics & Measurement',
                    description: 'Mathematical definitions of fairness and their practical application',
                    duration: '180 min',
                    lessons: 8
                },
                {
                    id: 'course-2-3',
                    number: '2.3',
                    title: 'Explainability & Interpretability',
                    description: 'Techniques for understanding and explaining AI decisions',
                    duration: '150 min',
                    lessons: 7
                },
                {
                    id: 'course-2-4',
                    number: '2.4',
                    title: 'Privacy-Preserving AI',
                    description: 'Protecting personal data while enabling AI capabilities',
                    duration: '120 min',
                    lessons: 5
                },
                {
                    id: 'course-2-5',
                    number: '2.5',
                    title: 'Testing & Validation for AI',
                    description: 'Comprehensive testing approaches for AI system quality',
                    duration: '120 min',
                    lessons: 5
                },
                {
                    id: 'course-2-6',
                    number: '2.6',
                    title: 'Technical Assessment & Certification',
                    description: 'Comprehensive technical assessment and hands-on exercises',
                    duration: '90 min',
                    lessons: 3
                }
            ]
        },

        // ============================================
        // COURSE 3: REGULATORY COMPLIANCE & RISK
        // ============================================
        {
            id: 'course-3',
            number: 3,
            title: 'Regulatory Compliance & Risk Management',
            subtitle: 'Navigating the Global AI Regulatory Landscape',
            level: 'Intermediate-Advanced',
            description: 'Comprehensive coverage of AI regulations worldwide, compliance frameworks, and risk management strategies for government AI deployments.',
            duration: '15-18 hours',
            lessons: 38,
            icon: 'regulatory',
            color: '#7c3aed',
            objectives: [
                'Navigate EU AI Act requirements and risk classification',
                'Apply NIST AI Risk Management Framework principles',
                'Implement data protection requirements for AI systems',
                'Design compliance documentation and audit trails',
                'Develop organizational risk management strategies'
            ],
            subcourses: [
                {
                    id: 'course-3-1',
                    number: '3.1',
                    title: 'EU AI Act Deep Dive',
                    description: 'Comprehensive guide to EU AI Act requirements and implementation',
                    duration: '180 min',
                    lessons: 8
                },
                {
                    id: 'course-3-2',
                    number: '3.2',
                    title: 'NIST AI Risk Management Framework',
                    description: 'Implementing the NIST AI RMF in government contexts',
                    duration: '150 min',
                    lessons: 7
                },
                {
                    id: 'course-3-3',
                    number: '3.3',
                    title: 'Data Protection & AI',
                    description: 'GDPR, privacy laws, and AI-specific data requirements',
                    duration: '150 min',
                    lessons: 7
                },
                {
                    id: 'course-3-4',
                    number: '3.4',
                    title: 'Global Regulatory Landscape',
                    description: 'AI regulations across jurisdictions and their implications',
                    duration: '120 min',
                    lessons: 6
                },
                {
                    id: 'course-3-5',
                    number: '3.5',
                    title: 'Compliance Documentation & Auditing',
                    description: 'Creating and maintaining compliance evidence',
                    duration: '150 min',
                    lessons: 7
                },
                {
                    id: 'course-3-6',
                    number: '3.6',
                    title: 'Regulatory Assessment & Certification',
                    description: 'Comprehensive regulatory compliance assessment',
                    duration: '90 min',
                    lessons: 3
                }
            ]
        },

        // ============================================
        // COURSE 4: AI IMPLEMENTATION & OPERATIONS
        // ============================================
        {
            id: 'course-4',
            number: 4,
            title: 'AI Implementation & Operations',
            subtitle: 'Practical Governance in AI Deployment',
            level: 'Advanced',
            description: 'Hands-on guidance for implementing AI governance throughout the system lifecycle, from procurement to retirement.',
            duration: '12-15 hours',
            lessons: 35,
            icon: 'implementation',
            color: '#ea580c',
            objectives: [
                'Design governance checkpoints throughout the AI lifecycle',
                'Implement effective human oversight mechanisms',
                'Establish monitoring and incident response processes',
                'Manage AI vendor relationships with appropriate governance',
                'Handle AI system updates, changes, and retirement'
            ],
            subcourses: [
                {
                    id: 'course-4-1',
                    number: '4.1',
                    title: 'AI Procurement & Vendor Management',
                    description: 'Governance requirements for acquiring AI systems',
                    duration: '120 min',
                    lessons: 6
                },
                {
                    id: 'course-4-2',
                    number: '4.2',
                    title: 'Human Oversight Design',
                    description: 'Creating effective human-in-the-loop systems',
                    duration: '150 min',
                    lessons: 7
                },
                {
                    id: 'course-4-3',
                    number: '4.3',
                    title: 'Monitoring & Performance Management',
                    description: 'Ongoing oversight of deployed AI systems',
                    duration: '150 min',
                    lessons: 7
                },
                {
                    id: 'course-4-4',
                    number: '4.4',
                    title: 'Incident Response & Remediation',
                    description: 'Handling AI failures and adverse events',
                    duration: '120 min',
                    lessons: 6
                },
                {
                    id: 'course-4-5',
                    number: '4.5',
                    title: 'Change Management & System Updates',
                    description: 'Governance for AI system evolution',
                    duration: '120 min',
                    lessons: 6
                },
                {
                    id: 'course-4-6',
                    number: '4.6',
                    title: 'Operations Assessment & Certification',
                    description: 'Practical implementation assessment',
                    duration: '90 min',
                    lessons: 3
                }
            ]
        },

        // ============================================
        // COURSE 5: STRATEGIC LEADERSHIP & GOVERNANCE
        // ============================================
        {
            id: 'course-5',
            number: 5,
            title: 'Strategic Leadership & Governance',
            subtitle: 'Executive Perspectives on AI Governance',
            level: 'Professional',
            description: 'Strategic and leadership aspects of AI governance for senior managers and executives responsible for organizational AI strategy.',
            duration: '10-12 hours',
            lessons: 32,
            icon: 'leadership',
            color: '#dc2626',
            objectives: [
                'Develop organizational AI governance strategies',
                'Build AI governance structures and accountability',
                'Lead cultural change for responsible AI',
                'Communicate AI governance to diverse stakeholders',
                'Anticipate and prepare for emerging AI governance challenges'
            ],
            subcourses: [
                {
                    id: 'course-5-1',
                    number: '5.1',
                    title: 'Building AI Governance Structures',
                    description: 'Organizational frameworks for AI oversight',
                    duration: '120 min',
                    lessons: 6
                },
                {
                    id: 'course-5-2',
                    number: '5.2',
                    title: 'Leading Ethical AI Culture',
                    description: 'Cultural transformation for responsible AI',
                    duration: '120 min',
                    lessons: 6
                },
                {
                    id: 'course-5-3',
                    number: '5.3',
                    title: 'Stakeholder Communication',
                    description: 'Communicating AI governance to diverse audiences',
                    duration: '120 min',
                    lessons: 6
                },
                {
                    id: 'course-5-4',
                    number: '5.4',
                    title: 'Strategic AI Risk Management',
                    description: 'Enterprise-level AI risk governance',
                    duration: '120 min',
                    lessons: 6
                },
                {
                    id: 'course-5-5',
                    number: '5.5',
                    title: 'Future of AI Governance',
                    description: 'Emerging challenges and preparation strategies',
                    duration: '90 min',
                    lessons: 5
                },
                {
                    id: 'course-5-6',
                    number: '5.6',
                    title: 'Leadership Assessment & Certification',
                    description: 'Strategic governance assessment and capstone',
                    duration: '90 min',
                    lessons: 3
                }
            ]
        }
    ]
};

// Make available globally
if (typeof window !== 'undefined') {
    window.COURSE_DATA = COURSE_DATA;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
    module.exports = COURSE_DATA;
}
