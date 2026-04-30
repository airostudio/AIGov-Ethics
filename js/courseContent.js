/**
 * AI Governance & Ethics Academy
 * Detailed Course Content for Courses 2-5
 */

// Extended content for Course 2: Technical AI Ethics & Safety
const COURSE_2_CONTENT = {
    'course-2-1': {
        title: 'Understanding Algorithmic Bias',
        sections: [
            {
                title: 'What is Algorithmic Bias?',
                content: `<p>Algorithmic bias refers to systematic and repeatable errors in computer systems that create unfair outcomes, such as privileging one group over another. In AI systems, bias can emerge from multiple sources and manifest in various harmful ways.</p>

                <h3>Types of Algorithmic Bias</h3>
                <ul>
                    <li><strong>Historical Bias:</strong> When training data reflects past discrimination or societal inequities</li>
                    <li><strong>Representation Bias:</strong> When certain groups are underrepresented in training data</li>
                    <li><strong>Measurement Bias:</strong> When the features or labels used don't accurately capture the concepts they're meant to represent</li>
                    <li><strong>Aggregation Bias:</strong> When a single model is used for groups with different characteristics</li>
                    <li><strong>Evaluation Bias:</strong> When the benchmark data used to evaluate models doesn't represent all populations</li>
                    <li><strong>Deployment Bias:</strong> When a system is used in ways different from how it was designed</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Critical Understanding</div>
                    <p>Bias is not always intentional - it can emerge from seemingly neutral technical choices. This makes proactive detection essential.</p>
                </div>`
            },
            {
                title: 'Sources of Bias in AI Systems',
                content: `<p>Understanding where bias originates helps in preventing and mitigating it:</p>

                <h3>Data Collection Stage</h3>
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Source</th>
                            <th>Example</th>
                            <th>Government Context</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Selection bias</td>
                            <td>Training only on easily available data</td>
                            <td>Using only digitized historical records, missing older cases</td>
                        </tr>
                        <tr>
                            <td>Sampling bias</td>
                            <td>Non-representative sample of population</td>
                            <td>Survey data from regions with better internet access</td>
                        </tr>
                        <tr>
                            <td>Labeling bias</td>
                            <td>Subjective or inconsistent labels</td>
                            <td>Different officers labeling similar incidents differently</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Model Development Stage</h3>
                <ul>
                    <li><strong>Feature selection:</strong> Choosing proxies that correlate with protected characteristics</li>
                    <li><strong>Algorithm choice:</strong> Some algorithms amplify certain patterns more than others</li>
                    <li><strong>Optimization targets:</strong> Optimizing for accuracy alone may sacrifice fairness</li>
                </ul>

                <h3>Deployment Stage</h3>
                <ul>
                    <li><strong>Context mismatch:</strong> Model deployed in different context than training</li>
                    <li><strong>Feedback loops:</strong> Predictions influence future data, reinforcing patterns</li>
                    <li><strong>User interpretation:</strong> How outputs are interpreted and acted upon</li>
                </ul>`
            },
            {
                title: 'Detecting Bias: Practical Methods',
                content: `<p>IT professionals need practical tools to detect bias in AI systems:</p>

                <h3>Statistical Disparity Analysis</h3>
                <p>Compare outcomes across demographic groups:</p>
                <ul>
                    <li><strong>Positive rate comparison:</strong> Are approval rates similar across groups?</li>
                    <li><strong>Error rate comparison:</strong> Are false positive/negative rates similar?</li>
                    <li><strong>Score distribution:</strong> Are confidence scores distributed similarly?</li>
                </ul>

                <h3>Subgroup Analysis</h3>
                <p>Evaluate model performance for different segments:</p>
                <ul>
                    <li>Performance metrics by demographic group</li>
                    <li>Performance at intersections (e.g., age AND gender)</li>
                    <li>Performance for edge cases and minority groups</li>
                </ul>

                <h3>Feature Analysis</h3>
                <ul>
                    <li>Examine feature importance for different groups</li>
                    <li>Identify proxy variables that correlate with protected characteristics</li>
                    <li>Test model behavior when proxy variables are changed</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Use established fairness toolkits like IBM's AI Fairness 360, Google's What-If Tool, or Microsoft's Fairlearn to automate bias detection.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A benefits eligibility model is trained on historical decisions. The historical data shows that certain neighborhoods had lower approval rates. This is an example of:',
                    options: ['Measurement bias', 'Historical bias', 'Aggregation bias', 'Deployment bias'],
                    correct: 1,
                    explanation: 'Historical bias occurs when training data reflects past discrimination or societal inequities.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Using zip code as a feature in a lending model might be problematic because:',
                    options: [
                        'Zip codes are not numeric data',
                        'Zip code can serve as a proxy for race due to residential segregation',
                        'Zip codes change too frequently',
                        'Zip codes are not available for all applicants'
                    ],
                    correct: 1,
                    explanation: 'Zip code can correlate strongly with race due to historical residential segregation, making it a proxy variable that could enable discrimination.'
                }
            ]
        }
    },
    'course-2-2': {
        title: 'Fairness Metrics & Measurement',
        sections: [
            {
                title: 'The Challenge of Defining Fairness',
                content: `<p>Fairness seems like a simple concept, but mathematically defining it reveals significant complexity. Different definitions of fairness can be mutually exclusive.</p>

                <h3>Key Insight: Impossibility Results</h3>
                <p>Research has shown that certain fairness criteria cannot be satisfied simultaneously (except in trivial cases). This means trade-offs are inevitable.</p>

                <div class="info-box important">
                    <div class="info-box-title">The Fundamental Trade-off</div>
                    <p>If different groups have different base rates (e.g., different rates of loan default), you generally cannot achieve equal false positive rates, equal false negative rates, AND equal positive predictive values simultaneously.</p>
                </div>

                <p>This doesn't mean fairness is impossible - it means you must make deliberate choices about which type of fairness matters most for your specific context.</p>`
            },
            {
                title: 'Group Fairness Metrics',
                content: `<p>Group fairness focuses on equal treatment or outcomes across defined groups:</p>

                <h3>Demographic Parity (Statistical Parity)</h3>
                <p><strong>Definition:</strong> The probability of a positive prediction should be the same across groups.</p>
                <p><strong>Formula:</strong> P(Y&#770;=1|A=0) = P(Y&#770;=1|A=1)</p>
                <p><strong>Use when:</strong> You want equal selection rates regardless of underlying differences.</p>
                <p><strong>Limitation:</strong> Ignores whether predictions are actually correct.</p>

                <h3>Equal Opportunity</h3>
                <p><strong>Definition:</strong> True positive rates should be equal across groups.</p>
                <p><strong>Formula:</strong> P(Y&#770;=1|Y=1,A=0) = P(Y&#770;=1|Y=1,A=1)</p>
                <p><strong>Use when:</strong> False negatives are the primary concern (e.g., denying benefits to eligible people).</p>

                <h3>Equalized Odds</h3>
                <p><strong>Definition:</strong> Both true positive AND false positive rates should be equal across groups.</p>
                <p><strong>Use when:</strong> Both types of errors are equally concerning.</p>

                <h3>Predictive Parity</h3>
                <p><strong>Definition:</strong> Positive predictive value should be equal across groups.</p>
                <p><strong>Use when:</strong> You want positive predictions to be equally reliable across groups.</p>

                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Metric</th>
                            <th>What it Equalizes</th>
                            <th>Government Example</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Demographic Parity</td>
                            <td>Selection rates</td>
                            <td>Equal hiring rates across demographics</td>
                        </tr>
                        <tr>
                            <td>Equal Opportunity</td>
                            <td>True positive rates</td>
                            <td>Equal approval rates for qualified applicants</td>
                        </tr>
                        <tr>
                            <td>Equalized Odds</td>
                            <td>Both TPR and FPR</td>
                            <td>Balanced error rates in fraud detection</td>
                        </tr>
                        <tr>
                            <td>Predictive Parity</td>
                            <td>Precision</td>
                            <td>Equal reliability of risk scores</td>
                        </tr>
                    </tbody>
                </table>`
            },
            {
                title: 'Choosing the Right Metric',
                content: `<p>The choice of fairness metric should be driven by the specific context and harms you're trying to prevent:</p>

                <h3>Decision Framework</h3>
                <ol>
                    <li><strong>Identify the primary harm:</strong> What is the worst outcome of unfairness?</li>
                    <li><strong>Consider stakeholder perspectives:</strong> What would affected communities prioritize?</li>
                    <li><strong>Assess base rate differences:</strong> Do groups have legitimately different rates?</li>
                    <li><strong>Evaluate legal requirements:</strong> Are there mandated fairness standards?</li>
                </ol>

                <div class="case-study">
                    <div class="case-study-header">
                        <div class="case-study-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        </div>
                        <h4>Scenario: Child Welfare Risk Scoring</h4>
                    </div>
                    <div class="case-study-content">
                        <h5>Context</h5>
                        <p>A system scores families for child welfare risk to prioritize investigations.</p>

                        <h5>Analysis</h5>
                        <p><strong>Primary harm of false positives:</strong> Unnecessary investigation of innocent families - traumatic and invasive.</p>
                        <p><strong>Primary harm of false negatives:</strong> Failing to investigate actual abuse - potentially life-threatening.</p>

                        <h5>Recommendation</h5>
                        <p>Equal Opportunity may be most appropriate - ensuring children at genuine risk are equally likely to be identified regardless of demographic group. However, false positive rates should also be monitored to prevent over-investigation of certain communities.</p>
                    </div>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A hiring algorithm has a 20% selection rate for men and 20% selection rate for women. This satisfies:',
                    options: [
                        'Equal Opportunity',
                        'Equalized Odds',
                        'Demographic Parity',
                        'Predictive Parity'
                    ],
                    correct: 2,
                    explanation: 'Demographic Parity requires equal selection rates across groups, regardless of whether the selections are accurate.'
                },
                {
                    type: 'free-text',
                    question: 'Why might demographic parity be inappropriate for a medical screening AI, even if it seems intuitively fair?',
                    sampleAnswer: 'Demographic parity requires equal positive prediction rates regardless of actual disease prevalence. If one group has genuinely higher disease rates, enforcing equal positive rates would mean under-detecting disease in the high-prevalence group (causing missed diagnoses) or over-detecting in the low-prevalence group (causing unnecessary treatment). A better metric might be Equal Opportunity, ensuring those with the condition are equally likely to be detected regardless of group.'
                }
            ]
        }
    }
};

// ============================================
// COURSE 2-3: Explainability & Interpretability
// ============================================
Object.assign(COURSE_2_CONTENT, {
    'course-2-3': {
        title: 'Explainability & Interpretability',
        sections: [
            {
                title: 'Why Explainability Matters in Government AI',
                content: `<p>Explainability is the ability to describe how and why an AI system produced a particular output in terms that humans can understand. In government contexts, it is not merely a technical preference — it is frequently a legal and ethical obligation.</p>

                <div class="info-box important">
                    <div class="info-box-title">Legal Duty to Explain</div>
                    <p>The EU AI Act requires high-risk AI systems to be sufficiently transparent to allow users to interpret the system's output. Similarly, GDPR Article 22 grants individuals the right not to be subject to solely automated decisions with significant effects, and the right to an explanation.</p>
                </div>

                <h3>Key Terms</h3>
                <table class="content-table">
                    <thead><tr><th>Term</th><th>Meaning</th><th>Example</th></tr></thead>
                    <tbody>
                        <tr><td>Interpretability</td><td>How easily a human can understand the internal mechanics of a model</td><td>A decision tree is interpretable; a deep neural network is not</td></tr>
                        <tr><td>Explainability</td><td>The degree to which a model's outputs can be explained post-hoc</td><td>SHAP values explaining why a loan was denied</td></tr>
                        <tr><td>Transparency</td><td>Openness about how a system was built and trained</td><td>Publishing training data sources and model architecture</td></tr>
                        <tr><td>Auditability</td><td>Ability of third parties to verify model behaviour</td><td>Access logs, version control, reproducible results</td></tr>
                    </tbody>
                </table>`
            },
            {
                title: 'Intrinsically Interpretable Models',
                content: `<p>Some model types are inherently understandable because their decision logic can be read directly.</p>

                <h3>Decision Trees</h3>
                <p>Each decision is a branch: "If income &gt; £30,000 AND no missed payments → approve". The entire logic can be printed and reviewed by a non-technical manager. Suitable for eligibility decisions where the rules must be auditable.</p>

                <h3>Linear & Logistic Regression</h3>
                <p>Each feature is assigned a coefficient (weight). A positive coefficient means the feature increases the predicted value; negative means it decreases it. The contribution of each variable is directly readable.</p>

                <h3>Rule-Based Systems</h3>
                <p>Explicit IF-THEN rules written by experts. Fully transparent by design, though they can become brittle as rules multiply.</p>

                <div class="info-box tip">
                    <div class="info-box-title">Governance Principle</div>
                    <p>For high-stakes government decisions (benefits, enforcement, public safety), prefer intrinsically interpretable models unless a demonstrable performance gap justifies greater complexity — and even then, layer on post-hoc explanations.</p>
                </div>`
            },
            {
                title: 'Post-Hoc Explanation Techniques',
                content: `<p>When a complex model is already deployed or delivers significantly better performance, post-hoc techniques generate explanations without changing the model.</p>

                <h3>LIME (Local Interpretable Model-Agnostic Explanations)</h3>
                <p>LIME perturbs the input slightly and observes how the prediction changes, then fits a simple interpretable model locally around that prediction. It answers: "For this specific case, which features mattered most?"</p>

                <h3>SHAP (SHapley Additive exPlanations)</h3>
                <p>Based on game theory, SHAP assigns each feature a contribution score (Shapley value) that fairly distributes credit for the prediction. SHAP is considered the gold standard because it satisfies mathematical fairness properties.</p>

                <h3>Counterfactual Explanations</h3>
                <p>Rather than explaining what did happen, counterfactuals explain what would need to change: "Your application was denied. If your declared income were £5,000 higher, it would have been approved." This is the most actionable format for individuals subject to decisions.</p>

                <div class="info-box warning">
                    <div class="info-box-title">Limitations of Post-Hoc Methods</div>
                    <p>Post-hoc explanations approximate what the model does — they are not the model itself. They can be unfaithful, unstable between similar inputs, or manipulated. Never treat an explanation as proof that the model is behaving ethically.</p>
                </div>`
            },
            {
                title: 'Implementing Explainability in Practice',
                content: `<p>Explainability needs to be designed in from the start, not retrofitted at deployment.</p>

                <h3>Audience-Appropriate Explanations</h3>
                <ul>
                    <li><strong>Citizens:</strong> Plain language — "Your application was scored lower because the system detected three missed payment records."</li>
                    <li><strong>Case workers:</strong> Feature-level summaries — "Top factors: payment history (−32%), income stability (+18%)"</li>
                    <li><strong>Technical reviewers:</strong> Full SHAP plots, model cards, data provenance documentation</li>
                    <li><strong>Auditors:</strong> Reproducible logs, version-controlled models, full training pipeline documentation</li>
                </ul>

                <h3>Model Cards</h3>
                <p>A model card is a short document describing a model's intended use, performance across demographic groups, known limitations, and recommended deployment conditions. Publishing model cards is now considered a baseline requirement for responsible government AI.</p>

                <h3>Procurement Checklist</h3>
                <ul>
                    <li>Can the vendor provide explanations at the individual decision level?</li>
                    <li>Is the explanation method audited and documented?</li>
                    <li>Can explanations be generated in real time or on demand?</li>
                    <li>Does the contract grant you access to retrain or audit the model?</li>
                </ul>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A citizen appeals a benefits decision made partly by an AI. Under GDPR Article 22, what must the government department provide?',
                    options: [
                        'The full training dataset used to build the model',
                        'A meaningful explanation of the logic involved in the decision',
                        'Access to the model\'s source code',
                        'A guarantee that a human made the final decision'
                    ],
                    correct: 1,
                    explanation: 'GDPR Article 22 gives individuals the right to receive meaningful information about the logic involved in automated decisions, enabling them to challenge the outcome.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Which explanation technique produces a counterfactual — telling a user what they could change to get a different outcome?',
                    options: [
                        'LIME',
                        'SHAP values',
                        'Counterfactual explanations',
                        'Decision tree visualisation'
                    ],
                    correct: 2,
                    explanation: 'Counterfactual explanations explicitly describe the minimum change to an input that would flip the model\'s decision, making them the most actionable for individuals.'
                },
                {
                    type: 'free-text',
                    question: 'A procurement team wants to replace a transparent decision-tree model with a neural network that is 4% more accurate. What arguments should the governance board consider before approving?',
                    sampleAnswer: 'The board should weigh the performance gain against the loss of intrinsic interpretability. Key considerations: Is 4% accuracy worth the inability to audit individual decisions? Can SHAP or LIME produce adequate post-hoc explanations? Does the use case require legal explainability (e.g., high-risk decisions under EU AI Act)? What is the cost of unexplainable errors? They should require the vendor to demonstrate explanation quality before approving the switch.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 2-4: Privacy-Preserving AI
// ============================================
Object.assign(COURSE_2_CONTENT, {
    'course-2-4': {
        title: 'Privacy-Preserving AI',
        sections: [
            {
                title: 'Privacy Risks Unique to AI Systems',
                content: `<p>AI systems introduce privacy risks beyond traditional data processing. Training a model on personal data embeds patterns from that data into the model's weights — and those patterns can sometimes be extracted by an adversary, even when the original data is never directly shared.</p>

                <h3>Specific AI Privacy Threats</h3>
                <table class="content-table">
                    <thead><tr><th>Attack Type</th><th>Description</th><th>Government Example</th></tr></thead>
                    <tbody>
                        <tr><td>Membership inference</td><td>Determining whether a specific individual's data was in the training set</td><td>Confirming whether someone's health record was used to train a disease-risk model</td></tr>
                        <tr><td>Model inversion</td><td>Reconstructing training data from model outputs</td><td>Recovering medical images from a diagnostic AI</td></tr>
                        <tr><td>Data poisoning</td><td>Injecting malicious records to manipulate model behaviour</td><td>Skewing a fraud-detection model to miss certain patterns</td></tr>
                        <tr><td>Linkage attack</td><td>Combining model outputs with external data to re-identify individuals</td><td>Cross-referencing predictions with public social media</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">Anonymisation Is Not Sufficient</div>
                    <p>Removing names and obvious identifiers does not make data safe for AI training. Research has shown that supposedly anonymised datasets can be re-identified using combinations of features. Purpose limitation and data minimisation are the stronger controls.</p>
                </div>`
            },
            {
                title: 'Privacy by Design for AI',
                content: `<p>Privacy by design means building privacy protections into the system architecture from the beginning, not patching them in later.</p>

                <h3>The Seven Foundational Principles</h3>
                <ol>
                    <li><strong>Proactive not reactive:</strong> Anticipate privacy risks before they occur</li>
                    <li><strong>Privacy as the default:</strong> No action required by the individual to protect their privacy</li>
                    <li><strong>Privacy embedded into design:</strong> Not a bolt-on feature</li>
                    <li><strong>Full functionality:</strong> Avoid false trade-offs between privacy and functionality</li>
                    <li><strong>End-to-end security:</strong> Secure lifecycle for all personal data</li>
                    <li><strong>Visibility and transparency:</strong> Verifiable by any stakeholder</li>
                    <li><strong>Respect for user privacy:</strong> User-centric architecture</li>
                </ol>

                <h3>Applied to AI Pipelines</h3>
                <ul>
                    <li>Minimise the data collected and retained for training</li>
                    <li>Separate training from inference environments</li>
                    <li>Use synthetic data where real personal data is not strictly necessary</li>
                    <li>Implement access controls and logging on all model endpoints</li>
                </ul>`
            },
            {
                title: 'Differential Privacy & Federated Learning',
                content: `<p>Two technical approaches allow models to learn from sensitive data while providing mathematical guarantees against leaking individual records.</p>

                <h3>Differential Privacy (DP)</h3>
                <p>DP adds carefully calibrated random noise to data or to model updates during training. The result: an adversary who sees the model's outputs cannot determine with confidence whether any specific individual's record was in the training set.</p>

                <p>The privacy guarantee is expressed as epsilon (ε): lower ε means stronger privacy but typically lower model accuracy. Setting ε requires a governance decision balancing utility against risk.</p>

                <div class="info-box important">
                    <div class="info-box-title">Real-World Use</div>
                    <p>Apple uses differential privacy to collect usage statistics from iPhones without linking data to individuals. The US Census Bureau used DP in the 2020 Census release. Several NHS data initiatives are exploring DP for research sharing.</p>
                </div>

                <h3>Federated Learning</h3>
                <p>Instead of centralising data, federated learning trains a model by sending it to where the data lives. Each local node (e.g., a hospital, a local authority) computes model updates on its own data. Only those updates — not the raw data — are sent to a central server to improve the shared model.</p>

                <p>Benefits for government: agencies can collaborate on a shared model without pooling sensitive records across departmental or jurisdictional boundaries.</p>`
            },
            {
                title: 'GDPR Compliance for AI Systems',
                content: `<p>GDPR applies to any AI system that processes personal data of EU residents. Key obligations are more demanding for AI than for traditional databases.</p>

                <h3>Lawful Basis for AI Training</h3>
                <p>Training on personal data requires a lawful basis. Consent is usually impractical for large training datasets. Government bodies most commonly rely on <em>public task</em> (Article 6(1)(e)) or <em>legitimate interests</em>, though the latter carries more risk and requires a balancing test.</p>

                <h3>Data Protection Impact Assessments (DPIAs)</h3>
                <p>A DPIA is mandatory before deploying AI that is likely to result in high risk to individuals (Article 35). This includes systematic profiling, large-scale processing of sensitive data, and automated decision-making with legal or significant effects.</p>

                <h3>DPIA Checklist for AI Projects</h3>
                <ul>
                    <li>Describe the nature, scope, context, and purposes of processing</li>
                    <li>Assess necessity and proportionality</li>
                    <li>Identify risks to individuals' rights and freedoms</li>
                    <li>Define measures to address the risks (technical and organisational)</li>
                    <li>Consult the Data Protection Officer (DPO)</li>
                    <li>Review and update the DPIA as the system evolves</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">DPO Involvement</div>
                    <p>Engage your DPO at the outset of any AI project, not after a system is already built. Retrofitting privacy controls is significantly more expensive and less effective.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Federated learning primarily protects privacy by:',
                    options: [
                        'Encrypting all data before it is sent to the cloud',
                        'Keeping raw data on local devices and sharing only model updates',
                        'Adding random noise to training data to prevent re-identification',
                        'Limiting access to the model to authorised users only'
                    ],
                    correct: 1,
                    explanation: 'In federated learning, raw data never leaves the local environment. Only model parameter updates are shared, which significantly reduces privacy exposure compared to centralising training data.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Under GDPR, when is a Data Protection Impact Assessment (DPIA) mandatory?',
                    options: [
                        'Whenever any personal data is used',
                        'Only when processing children\'s data',
                        'Before processing that is likely to result in high risk to individuals',
                        'Only when the data controller is a public authority'
                    ],
                    correct: 2,
                    explanation: 'Article 35 of GDPR requires a DPIA prior to processing that is likely to result in high risk to individuals\' rights and freedoms. This includes systematic profiling and large-scale automated decision-making.'
                },
                {
                    type: 'free-text',
                    question: 'Your department wants to train a fraud-detection AI on five years of benefits transaction data. Describe three specific privacy controls you would require before approving training.',
                    sampleAnswer: 'Acceptable controls include: (1) Conduct a DPIA identifying risks and mitigations before any processing begins; (2) Apply data minimisation — use only fields strictly necessary for the fraud signal, removing unnecessary personal identifiers; (3) Use differential privacy during training to prevent membership inference attacks; (4) Implement federated learning if data sits across multiple systems to avoid centralising records; (5) Establish strict access controls and audit logging on the trained model and any outputs containing personal data; (6) Define a data retention schedule for both training data and model artefacts.'
                }
            ]
        }
    }
});

// Extended content for Course 3: Regulatory Compliance
const COURSE_3_CONTENT = {
    'course-3-1': {
        title: 'EU AI Act Deep Dive',
        sections: [
            {
                title: 'EU AI Act Overview',
                content: `<p>The EU AI Act is the world's first comprehensive legal framework for artificial intelligence. It takes a risk-based approach, with different requirements based on the potential harm an AI system could cause.</p>

                <h3>Key Dates</h3>
                <ul>
                    <li><strong>August 2024:</strong> Entry into force</li>
                    <li><strong>February 2025:</strong> Banned AI practices prohibited</li>
                    <li><strong>August 2025:</strong> GPAI rules and governance apply</li>
                    <li><strong>August 2026:</strong> Full application for high-risk systems</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">Scope</div>
                    <p>The EU AI Act applies to providers and deployers of AI systems in the EU market, regardless of where they're established. Government agencies deploying AI are "deployers" with specific obligations.</p>
                </div>`
            },
            {
                title: 'Risk Classification System',
                content: `<p>The EU AI Act categorizes AI systems into four risk levels:</p>

                <h3>Unacceptable Risk (Prohibited)</h3>
                <p>These AI practices are banned entirely:</p>
                <ul>
                    <li>Social scoring by public authorities</li>
                    <li>Real-time remote biometric identification in public spaces (with exceptions)</li>
                    <li>Subliminal manipulation causing harm</li>
                    <li>Exploitation of vulnerabilities (age, disability)</li>
                    <li>Emotion recognition in workplaces and education (with exceptions)</li>
                </ul>

                <h3>High-Risk</h3>
                <p>Systems subject to strict requirements before market placement:</p>
                <ul>
                    <li>Biometric identification and categorization</li>
                    <li>Safety components of critical infrastructure</li>
                    <li>Education access and assessment</li>
                    <li>Employment, worker management, recruitment</li>
                    <li>Access to essential services (credit, benefits)</li>
                    <li>Law enforcement applications</li>
                    <li>Migration, asylum, border control</li>
                    <li>Administration of justice</li>
                </ul>

                <h3>Limited Risk</h3>
                <p>Systems with transparency obligations:</p>
                <ul>
                    <li>Chatbots and conversational AI</li>
                    <li>Emotion recognition systems</li>
                    <li>Deepfakes and synthetic media</li>
                </ul>

                <h3>Minimal Risk</h3>
                <p>No specific requirements (AI-enabled games, spam filters, etc.)</p>

                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Government Function</th>
                            <th>Likely Classification</th>
                            <th>Key Obligations</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Benefits eligibility</td>
                            <td>High-Risk</td>
                            <td>Full conformity assessment, documentation, human oversight</td>
                        </tr>
                        <tr>
                            <td>Public chatbot</td>
                            <td>Limited Risk</td>
                            <td>Disclosure that user is interacting with AI</td>
                        </tr>
                        <tr>
                            <td>Spam filtering</td>
                            <td>Minimal Risk</td>
                            <td>None specific</td>
                        </tr>
                        <tr>
                            <td>Social scoring</td>
                            <td>Unacceptable</td>
                            <td>Prohibited</td>
                        </tr>
                    </tbody>
                </table>`
            },
            {
                title: 'High-Risk AI Requirements',
                content: `<p>High-risk AI systems must meet extensive requirements:</p>

                <h3>Risk Management System</h3>
                <ul>
                    <li>Continuous risk identification and analysis throughout lifecycle</li>
                    <li>Estimation and evaluation of risks</li>
                    <li>Adoption of risk management measures</li>
                    <li>Testing to ensure appropriate risk levels</li>
                </ul>

                <h3>Data Governance</h3>
                <ul>
                    <li>Training, validation, and testing data must be relevant, representative, and free of errors</li>
                    <li>Appropriate data governance practices</li>
                    <li>Examination for possible biases</li>
                </ul>

                <h3>Technical Documentation</h3>
                <ul>
                    <li>Detailed technical documentation enabling conformity assessment</li>
                    <li>Description of system, development process, and monitoring</li>
                    <li>Must be kept up-to-date</li>
                </ul>

                <h3>Record-Keeping</h3>
                <ul>
                    <li>Automatic logging of events</li>
                    <li>Traceability throughout lifecycle</li>
                    <li>Logs must enable monitoring</li>
                </ul>

                <h3>Transparency</h3>
                <ul>
                    <li>Clear information for deployers</li>
                    <li>Instructions for use</li>
                    <li>Human oversight capabilities</li>
                </ul>

                <h3>Human Oversight</h3>
                <ul>
                    <li>Systems must enable human oversight</li>
                    <li>Humans must be able to understand capabilities and limitations</li>
                    <li>Ability to intervene, override, or stop the system</li>
                </ul>

                <h3>Accuracy, Robustness, Cybersecurity</h3>
                <ul>
                    <li>Appropriate levels of accuracy</li>
                    <li>Resilience against errors and inconsistencies</li>
                    <li>Protection against unauthorized access</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">Deployer Obligations</div>
                    <p>Government agencies deploying high-risk AI must: use systems according to instructions, ensure human oversight, monitor performance, report incidents, and conduct fundamental rights impact assessments.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Under the EU AI Act, an AI system used to determine eligibility for social benefits would be classified as:',
                    options: ['Minimal Risk', 'Limited Risk', 'High-Risk', 'Unacceptable Risk'],
                    correct: 2,
                    explanation: 'Systems that determine access to essential public services like benefits are classified as high-risk under the EU AI Act.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Which of the following is a prohibited AI practice under the EU AI Act?',
                    options: [
                        'Using AI for weather prediction',
                        'Using AI for social scoring by public authorities',
                        'Using AI for spam filtering',
                        'Using AI for document translation'
                    ],
                    correct: 1,
                    explanation: 'Social scoring by public authorities is classified as unacceptable risk and is prohibited under the EU AI Act.'
                }
            ]
        }
    }
};

// Extended content for Course 4: Implementation
const COURSE_4_CONTENT = {
    'course-4-2': {
        title: 'Human Oversight Design',
        sections: [
            {
                title: 'Why Human Oversight Matters',
                content: `<p>Human oversight is a cornerstone of responsible AI deployment. It ensures that humans remain in control of consequential decisions and can intervene when AI systems fail or produce harmful outcomes.</p>

                <h3>Legal Requirements</h3>
                <p>Multiple frameworks require human oversight:</p>
                <ul>
                    <li><strong>EU AI Act:</strong> High-risk systems must enable human oversight</li>
                    <li><strong>GDPR Article 22:</strong> Right not to be subject to solely automated decisions</li>
                    <li><strong>Administrative law:</strong> Decisions must be made by accountable humans</li>
                </ul>

                <h3>Practical Benefits</h3>
                <ul>
                    <li>Catches AI errors before they cause harm</li>
                    <li>Provides accountability for decisions</li>
                    <li>Enables appeal and redress mechanisms</li>
                    <li>Builds public trust in AI systems</li>
                    <li>Allows contextual judgment AI cannot provide</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Automation Bias Warning</div>
                    <p>Research shows humans tend to over-rely on automated recommendations. Effective oversight design must actively counter this bias.</p>
                </div>`
            },
            {
                title: 'Levels of Human Oversight',
                content: `<p>Human oversight exists on a spectrum from minimal to maximal human involvement:</p>

                <h3>Human-in-the-Loop (HITL)</h3>
                <p>Human must approve or modify every AI decision before action.</p>
                <ul>
                    <li><strong>When to use:</strong> High-stakes, irreversible decisions</li>
                    <li><strong>Example:</strong> Human reviews every benefits denial before sending</li>
                    <li><strong>Trade-off:</strong> Maximum safety, lowest efficiency</li>
                </ul>

                <h3>Human-on-the-Loop (HOTL)</h3>
                <p>AI acts autonomously but human monitors and can intervene.</p>
                <ul>
                    <li><strong>When to use:</strong> Medium-stakes, volume too high for review</li>
                    <li><strong>Example:</strong> Fraud detection flags cases, human reviews alerts</li>
                    <li><strong>Trade-off:</strong> Balanced safety and efficiency</li>
                </ul>

                <h3>Human-out-of-the-Loop</h3>
                <p>AI acts fully autonomously with periodic human auditing.</p>
                <ul>
                    <li><strong>When to use:</strong> Low-stakes, easily reversible decisions</li>
                    <li><strong>Example:</strong> Spam filtering with periodic review</li>
                    <li><strong>Trade-off:</strong> Maximum efficiency, requires robust monitoring</li>
                </ul>

                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Decision Type</th>
                            <th>Recommended Level</th>
                            <th>Rationale</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Benefits denial</td>
                            <td>Human-in-the-loop</td>
                            <td>Significant impact, due process required</td>
                        </tr>
                        <tr>
                            <td>Case prioritization</td>
                            <td>Human-on-the-loop</td>
                            <td>Influences but doesn't determine outcomes</td>
                        </tr>
                        <tr>
                            <td>Document routing</td>
                            <td>Human-out-of-loop</td>
                            <td>Low stakes, easy correction</td>
                        </tr>
                    </tbody>
                </table>`
            },
            {
                title: 'Designing Effective Oversight',
                content: `<p>Human oversight only works if it's designed to be genuinely effective:</p>

                <h3>Counter Automation Bias</h3>
                <ul>
                    <li><strong>Don't show AI recommendation first:</strong> Have humans form initial judgment before seeing AI output</li>
                    <li><strong>Require justification:</strong> Make humans explain why they agree or disagree with AI</li>
                    <li><strong>Show confidence levels:</strong> Display uncertainty, not just predictions</li>
                    <li><strong>Include counter-evidence:</strong> Show factors that argue against the AI's recommendation</li>
                </ul>

                <h3>Enable Meaningful Review</h3>
                <ul>
                    <li>Provide sufficient information to understand the case</li>
                    <li>Explain what factors drove the AI recommendation</li>
                    <li>Allow adequate time for review</li>
                    <li>Provide tools to dig deeper when needed</li>
                </ul>

                <h3>Support Override Decisions</h3>
                <ul>
                    <li>Make it easy to override AI recommendations</li>
                    <li>Document override reasons for learning</li>
                    <li>Don't penalize staff for appropriate overrides</li>
                    <li>Track override patterns to identify AI issues</li>
                </ul>

                <div class="info-box example">
                    <div class="info-box-title">Good Design Example</div>
                    <p><strong>Benefits Review Interface:</strong> Shows applicant's full case file first. Human makes preliminary decision. Then shows AI recommendation with explanation. Human confirms or overrides, documenting reasoning. Override patterns are analyzed monthly.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'What is automation bias?',
                    options: [
                        'When AI systems favor certain groups',
                        'When humans over-rely on automated recommendations',
                        'When automated systems run faster than expected',
                        'When bias is introduced during automation of processes'
                    ],
                    correct: 1,
                    explanation: 'Automation bias is the human tendency to over-rely on automated recommendations, potentially accepting AI outputs without adequate critical evaluation.'
                },
                {
                    type: 'free-text',
                    question: 'Describe two interface design choices that could help counter automation bias in a benefits eligibility system.',
                    sampleAnswer: '1) Have the reviewer make a preliminary eligibility determination based on the application before showing the AI recommendation - this forces independent judgment rather than just confirming AI output. 2) Display not just the AI recommendation but also the top factors arguing against that recommendation, forcing reviewers to consider counter-evidence rather than just confirming the suggested decision.'
                }
            ]
        }
    }
};

// Extended content for Course 5: Leadership
const COURSE_5_CONTENT = {
    'course-5-1': {
        title: 'Building AI Governance Structures',
        sections: [
            {
                title: 'Organizational Models for AI Governance',
                content: `<p>Effective AI governance requires appropriate organizational structures. There's no one-size-fits-all model - the right approach depends on organizational size, AI maturity, and risk profile.</p>

                <h3>Common Models</h3>

                <h4>Centralized Model</h4>
                <p>A single AI governance body oversees all AI activities.</p>
                <ul>
                    <li><strong>Pros:</strong> Consistent standards, clear accountability, efficient expertise use</li>
                    <li><strong>Cons:</strong> Can become bottleneck, may lack domain expertise</li>
                    <li><strong>Best for:</strong> Smaller organizations, early AI adoption</li>
                </ul>

                <h4>Federated Model</h4>
                <p>Central body sets standards; business units implement with oversight.</p>
                <ul>
                    <li><strong>Pros:</strong> Combines consistency with domain expertise, scales better</li>
                    <li><strong>Cons:</strong> Requires coordination, potential for inconsistency</li>
                    <li><strong>Best for:</strong> Larger organizations, mature AI programs</li>
                </ul>

                <h4>Embedded Model</h4>
                <p>Governance responsibilities distributed across existing structures.</p>
                <ul>
                    <li><strong>Pros:</strong> Integrates with existing processes, empowers teams</li>
                    <li><strong>Cons:</strong> Risk of inconsistency, harder to oversee</li>
                    <li><strong>Best for:</strong> Organizations with strong existing governance</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">Key Success Factor</div>
                    <p>Regardless of model, AI governance needs executive sponsorship, clear authority, and adequate resourcing. Without these, governance becomes advisory rather than effective.</p>
                </div>`
            },
            {
                title: 'Key Governance Roles',
                content: `<p>Effective AI governance requires clear roles and responsibilities:</p>

                <h3>Executive Sponsor</h3>
                <ul>
                    <li>Sets strategic direction for responsible AI</li>
                    <li>Ensures adequate resources and authority</li>
                    <li>Champions governance at leadership level</li>
                    <li>Accountable for overall AI governance</li>
                </ul>

                <h3>AI Governance Lead / AI Ethics Officer</h3>
                <ul>
                    <li>Day-to-day leadership of governance function</li>
                    <li>Develops and maintains policies and standards</li>
                    <li>Coordinates governance activities</li>
                    <li>Reports to executive sponsor</li>
                </ul>

                <h3>AI Ethics Board / Review Committee</h3>
                <ul>
                    <li>Reviews high-risk AI projects</li>
                    <li>Provides ethical guidance on edge cases</li>
                    <li>Includes diverse perspectives (technical, legal, ethical, domain)</li>
                    <li>May include external members</li>
                </ul>

                <h3>Project-Level Roles</h3>
                <ul>
                    <li><strong>AI Project Lead:</strong> Responsible for governance compliance in their project</li>
                    <li><strong>Data Steward:</strong> Ensures data governance requirements are met</li>
                    <li><strong>Technical Reviewer:</strong> Assesses technical aspects (bias, security)</li>
                </ul>

                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Role</th>
                            <th>Authority</th>
                            <th>Accountability</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Executive Sponsor</td>
                            <td>Approve/halt major AI initiatives</td>
                            <td>Overall AI governance outcomes</td>
                        </tr>
                        <tr>
                            <td>Governance Lead</td>
                            <td>Require compliance activities</td>
                            <td>Governance processes functioning</td>
                        </tr>
                        <tr>
                            <td>Ethics Board</td>
                            <td>Approve/reject high-risk projects</td>
                            <td>Review quality and consistency</td>
                        </tr>
                        <tr>
                            <td>Project Lead</td>
                            <td>Project-level decisions</td>
                            <td>Project compliance</td>
                        </tr>
                    </tbody>
                </table>`
            },
            {
                title: 'Governance Processes',
                content: `<p>Structures need processes to be effective. Key governance processes include:</p>

                <h3>AI Project Intake</h3>
                <ul>
                    <li>Initial assessment of proposed AI projects</li>
                    <li>Risk classification</li>
                    <li>Determination of governance requirements</li>
                    <li>Resource allocation</li>
                </ul>

                <h3>Risk Assessment</h3>
                <ul>
                    <li>Systematic evaluation of AI risks</li>
                    <li>Documented analysis and mitigation plans</li>
                    <li>Appropriate approval based on risk level</li>
                    <li>Periodic reassessment</li>
                </ul>

                <h3>Ethics Review</h3>
                <ul>
                    <li>Evaluation of ethical implications</li>
                    <li>Stakeholder impact assessment</li>
                    <li>Guidance on ethical gray areas</li>
                    <li>Documentation of decisions</li>
                </ul>

                <h3>Deployment Approval</h3>
                <ul>
                    <li>Pre-deployment checklist completion</li>
                    <li>Sign-off from required parties</li>
                    <li>Documentation for audit trail</li>
                    <li>Monitoring plan activation</li>
                </ul>

                <h3>Ongoing Monitoring</h3>
                <ul>
                    <li>Performance and fairness monitoring</li>
                    <li>Incident tracking and response</li>
                    <li>Periodic governance reviews</li>
                    <li>Continuous improvement</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">Integration Tip</div>
                    <p>Don't create parallel processes - integrate AI governance into existing project management, procurement, and IT governance frameworks wherever possible.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'In a federated AI governance model:',
                    options: [
                        'A single body makes all AI decisions',
                        'Central body sets standards while business units implement with oversight',
                        'Each business unit creates its own governance independently',
                        'External auditors provide all governance'
                    ],
                    correct: 1,
                    explanation: 'A federated model combines centralized standard-setting with distributed implementation, balancing consistency with domain expertise.'
                },
                {
                    type: 'free-text',
                    question: 'Why is executive sponsorship considered essential for AI governance success?',
                    sampleAnswer: 'Executive sponsorship provides the authority and resources that governance functions need to be effective rather than merely advisory. Without executive backing, governance bodies lack the power to require compliance, resolve disputes, or stop problematic projects. Executives also signal organizational priority and help embed governance into culture.'
                }
            ]
        }
    }
};

// Merge additional content into course data
if (typeof window !== 'undefined' && window.COURSE_DATA) {
    // Add content to Course 2 subcourses
    Object.entries(COURSE_2_CONTENT).forEach(([id, content]) => {
        const course = COURSE_DATA.courses.find(c => c.id === 'course-2');
        if (course) {
            const subcourse = course.subcourses.find(s => s.id === id);
            if (subcourse) {
                subcourse.content = content;
            }
        }
    });

    // Add content to Course 3 subcourses
    Object.entries(COURSE_3_CONTENT).forEach(([id, content]) => {
        const course = COURSE_DATA.courses.find(c => c.id === 'course-3');
        if (course) {
            const subcourse = course.subcourses.find(s => s.id === id);
            if (subcourse) {
                subcourse.content = content;
            }
        }
    });

    // Add content to Course 4 subcourses
    Object.entries(COURSE_4_CONTENT).forEach(([id, content]) => {
        const course = COURSE_DATA.courses.find(c => c.id === 'course-4');
        if (course) {
            const subcourse = course.subcourses.find(s => s.id === id);
            if (subcourse) {
                subcourse.content = content;
            }
        }
    });

    // Add content to Course 5 subcourses
    Object.entries(COURSE_5_CONTENT).forEach(([id, content]) => {
        const course = COURSE_DATA.courses.find(c => c.id === 'course-5');
        if (course) {
            const subcourse = course.subcourses.find(s => s.id === id);
            if (subcourse) {
                subcourse.content = content;
            }
        }
    });
}
