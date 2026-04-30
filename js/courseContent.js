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

// ============================================
// COURSE 2-5: Testing & Validation for AI
// ============================================
Object.assign(COURSE_2_CONTENT, {
    'course-2-5': {
        title: 'Testing & Validation for AI',
        sections: [
            {
                title: 'Why AI Testing Differs from Traditional Software Testing',
                content: `<p>Traditional software testing verifies that code produces correct outputs for defined inputs — the logic is deterministic. AI systems are fundamentally different: their behaviour emerges from data, not explicit rules, making them probabilistic, context-sensitive, and capable of unexpected failures.</p>

                <h3>Key Differences</h3>
                <table class="content-table">
                    <thead><tr><th>Aspect</th><th>Traditional Software</th><th>AI Systems</th></tr></thead>
                    <tbody>
                        <tr><td>Correctness</td><td>Pass/fail against specification</td><td>Statistical accuracy across distributions</td></tr>
                        <tr><td>Test coverage</td><td>Code branches</td><td>Input space (effectively infinite)</td></tr>
                        <tr><td>Failure mode</td><td>Errors or exceptions</td><td>Silent degradation, edge-case failures, drift</td></tr>
                        <tr><td>Reproducibility</td><td>Deterministic</td><td>May vary with hardware, random seeds, data order</td></tr>
                        <tr><td>Regression</td><td>New code changes old behaviour</td><td>New data changes model behaviour</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">EU AI Act Requirement</div>
                    <p>High-risk AI systems must undergo testing "to identify the most appropriate risk management measures" and must be tested against "realistic conditions." Validation must be documented before deployment.</p>
                </div>`
            },
            {
                title: 'Core Validation Techniques',
                content: `<p>A robust validation regime combines multiple complementary techniques.</p>

                <h3>Hold-Out Testing & Cross-Validation</h3>
                <p>The model is evaluated on data it never saw during training. A hold-out test set should mirror the real deployment distribution. K-fold cross-validation reduces variance in the estimate by rotating which portion is withheld.</p>

                <h3>Subgroup Analysis</h3>
                <p>Aggregate accuracy metrics can mask poor performance on minority subgroups. Always disaggregate results by protected characteristics (age, gender, ethnicity, disability status) and decision-relevant variables. A model with 92% overall accuracy may have only 71% accuracy for a specific demographic group.</p>

                <h3>Adversarial Testing</h3>
                <p>Deliberately attempt to cause failures by crafting unusual inputs, edge cases, and worst-case scenarios. Red-teaming — having a separate team try to break the system — is increasingly required for high-risk AI in government.</p>

                <h3>Robustness Testing</h3>
                <p>Test performance under realistic distribution shifts: data collected at different times, from different regions, or under different conditions than the training data. Many deployed models fail silently when the world changes.</p>`
            },
            {
                title: 'Monitoring & Continuous Validation',
                content: `<p>Validation does not end at deployment. AI models can degrade without any code change, simply because the world changes.</p>

                <h3>Data Drift</h3>
                <p>The statistical distribution of inputs shifts over time. Example: an employment-risk model trained on pre-pandemic labour market data may perform poorly as job patterns change. Detect by monitoring input feature distributions against training baselines.</p>

                <h3>Concept Drift</h3>
                <p>The relationship between inputs and the correct output changes. Example: fraud patterns evolve as fraudsters adapt. Detect by monitoring prediction accuracy against ground truth labels as they become available.</p>

                <h3>Monitoring Dashboard Essentials</h3>
                <ul>
                    <li>Prediction distribution (are outputs shifting from historical norms?)</li>
                    <li>Feature distribution vs training baseline</li>
                    <li>Performance metrics disaggregated by demographic group</li>
                    <li>Alert thresholds with defined escalation paths</li>
                    <li>Retrain triggers — clear criteria for when retraining is required</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">Governance Rule</div>
                    <p>Define monitoring responsibilities, thresholds, and retraining criteria before deployment, not after. A model without a defined review schedule should not be approved for production.</p>
                </div>`
            },
            {
                title: 'Documentation & Audit Trails',
                content: `<p>Reproducibility and accountability require that the full lifecycle of a model is documented and traceable.</p>

                <h3>Minimum Required Documentation</h3>
                <ul>
                    <li><strong>Data provenance:</strong> Where did training data come from? How was it cleaned and labelled?</li>
                    <li><strong>Model card:</strong> Intended use, performance metrics by subgroup, known limitations</li>
                    <li><strong>Training run log:</strong> Algorithm, hyperparameters, random seed, infrastructure</li>
                    <li><strong>Validation report:</strong> Test methodology, metrics, subgroup results, sign-off</li>
                    <li><strong>Deployment record:</strong> Version, date, approver, integration points</li>
                    <li><strong>Change log:</strong> All updates, retrains, and configuration changes with rationale</li>
                </ul>

                <h3>Version Control for Models</h3>
                <p>Treat model artefacts like code: version-controlled, tagged, with roll-back capability. If a deployed model causes harm, you must be able to reproduce the exact version and understand exactly what data it was trained on.</p>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'An AI model for assessing benefit eligibility achieves 94% accuracy overall. Why is this metric alone insufficient for governance approval?',
                    options: [
                        'Government systems require 99% accuracy as a minimum',
                        'Aggregate accuracy may hide poor performance on specific demographic subgroups',
                        'The model should be tested on a different dataset before approval',
                        '94% is below the industry benchmark for classification models'
                    ],
                    correct: 1,
                    explanation: 'Aggregate accuracy conceals subgroup disparities. A model could perform well on the majority while failing significantly on minority groups — creating discriminatory outcomes. Subgroup analysis is essential.'
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "concept drift" in the context of deployed AI models?',
                    options: [
                        'The model\'s code degrades over time due to technical debt',
                        'The underlying relationship between inputs and correct outputs changes after deployment',
                        'The model becomes biased after processing too many requests',
                        'Input data formats change, causing parsing errors'
                    ],
                    correct: 1,
                    explanation: 'Concept drift occurs when the real-world relationship the model learned changes — for example, fraud patterns evolving or regulations changing what counts as a valid claim. The model\'s predictions become increasingly misaligned without any code change.'
                },
                {
                    type: 'free-text',
                    question: 'You are approving a facial recognition system for use at a government building entrance. Describe the testing regime you would require before granting sign-off.',
                    sampleAnswer: 'Requirements should include: accuracy testing across all demographic groups (age, gender, ethnicity) to identify disparate error rates; adversarial testing with variations in lighting, angle, glasses, masks, and similar faces; performance benchmarking at the target hardware specifications and throughput; false positive and false negative rate analysis with explicit thresholds (e.g., false acceptance rate ≤ 0.1%); red-team exercise attempting to defeat or spoof the system; a documented monitoring plan covering drift detection and regular revalidation; and a data protection impact assessment covering biometric data processing. Sign-off requires all results to be documented in a validation report approved by both technical and governance leads.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 2-6: Technical Assessment & Certification
// ============================================
Object.assign(COURSE_2_CONTENT, {
    'course-2-6': {
        title: 'Technical Assessment & Certification',
        sections: [
            {
                title: 'Course 2 Review: Technical AI Ethics & Safety',
                content: `<p>This final module consolidates the technical knowledge from Course 2. Before attempting the certification assessment, review these core concepts.</p>

                <h3>Module Summary</h3>
                <table class="content-table">
                    <thead><tr><th>Module</th><th>Core Concept</th><th>Key Requirement</th></tr></thead>
                    <tbody>
                        <tr><td>2.1 Algorithmic Bias</td><td>Bias emerges from data and design choices, not just intent</td><td>Subgroup testing across protected characteristics</td></tr>
                        <tr><td>2.2 Fairness Metrics</td><td>Multiple competing definitions of fairness exist</td><td>Choose metrics aligned with the use case and consult ethicists</td></tr>
                        <tr><td>2.3 Explainability</td><td>Post-hoc explanations approximate model behaviour</td><td>Audience-appropriate explanations at every decision level</td></tr>
                        <tr><td>2.4 Privacy-Preserving AI</td><td>Training data patterns can be extracted from models</td><td>DPIA before training; differential privacy or federated learning where appropriate</td></tr>
                        <tr><td>2.5 Testing & Validation</td><td>AI testing requires continuous monitoring, not just pre-deployment checks</td><td>Defined monitoring schedule, drift detection, retrain criteria</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">Certification Requirement</div>
                    <p>To earn the Course 2 certificate, you must score at least 80% on the assessment below. The assessment tests applied knowledge, not just recall — you will be presented with scenarios requiring technical judgement.</p>
                </div>`
            },
            {
                title: 'Applying Technical Ethics: Case Studies',
                content: `<p>The following scenarios integrate multiple concepts from Course 2. Consider how you would approach each before reading the analysis.</p>

                <h3>Case Study 1: Predictive Policing</h3>
                <p>A police force deploys an AI that predicts areas of likely criminal activity to allocate patrol resources. The system is trained on five years of arrest records.</p>

                <div class="info-box warning">
                    <div class="info-box-title">Key Issues</div>
                    <ul>
                        <li><strong>Bias:</strong> Arrest records reflect historical policing patterns, not actual crime distribution. Over-policed areas generate more arrests, creating a self-reinforcing feedback loop.</li>
                        <li><strong>Explainability:</strong> Officers and communities have a right to understand why an area is flagged. A black-box prediction of "high risk" without explanation is not auditable.</li>
                        <li><strong>Privacy:</strong> Training on location and demographic data creates significant re-identification risk and disproportionate surveillance of specific communities.</li>
                        <li><strong>Validation:</strong> Success metrics (reduced crime vs increased arrests) need careful definition to avoid measuring the wrong thing.</li>
                    </ul>
                </div>

                <h3>Case Study 2: Automated Medical Triage</h3>
                <p>An NHS trust uses an AI to prioritise GP appointment slots based on symptom descriptions and patient history. Patients assessed as low-urgency wait longer.</p>

                <p>Technical considerations: (1) Symptom descriptions vary by health literacy and first language — creating representation bias. (2) Urgency decisions have direct health consequences — explainability is both a legal right and clinical necessity. (3) Model drift is a real risk as disease patterns change seasonally or during outbreaks. (4) A DPIA is mandatory as this is large-scale processing of health data with automated effects on individuals.</p>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A model card for a government AI system must include:',
                    options: [
                        'The model\'s source code and training scripts',
                        'Performance metrics disaggregated by demographic group and known limitations',
                        'The names of all engineers who built the system',
                        'A comparison with all commercially available alternatives'
                    ],
                    correct: 1,
                    explanation: 'Model cards document intended use, performance metrics by subgroup, known limitations, and recommended deployment conditions. They enable informed governance decisions and are increasingly required by AI regulations.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Which combination of controls would best address both privacy and fairness concerns when training a government AI on demographic data?',
                    options: [
                        'Encrypt the data and run accuracy tests on the full population',
                        'Apply differential privacy during training AND conduct subgroup performance analysis after',
                        'Remove all demographic fields from the training data entirely',
                        'Limit access to the model to senior analysts only'
                    ],
                    correct: 1,
                    explanation: 'Differential privacy protects individual privacy during training, while subgroup analysis after training ensures the model is not producing disparate outcomes. Removing demographic fields (option C) prevents fairness testing and can make bias worse through proxy variables.'
                },
                {
                    type: 'free-text',
                    question: 'You are the technical AI ethics lead for a local council that wants to use an AI to prioritise housing repair requests. Describe how you would address bias, explainability, privacy, and validation for this system.',
                    sampleAnswer: 'Bias: Audit historical repair data for patterns that may reflect differential service levels by area or property type; ensure training data represents all housing stock; conduct subgroup analysis disaggregated by postcode (as a proxy for demographics) and property age. Explainability: Use an interpretable model (decision tree or logistic regression) if performance is adequate, or apply SHAP if a more complex model is required; ensure tenants can receive plain-language explanations of their priority score and what they could change. Privacy: Conduct a DPIA before training; apply data minimisation — use only repair history and property characteristics, not personal financial data; establish data retention limits. Validation: Define accuracy and fairness thresholds before training; conduct continuous monitoring for drift (e.g., seasonal variation in repair types); set clear retraining triggers and assign monitoring responsibility to a named team.'
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

// ============================================
// COURSE 3-2: NIST AI Risk Management Framework
// ============================================
Object.assign(COURSE_3_CONTENT, {
    'course-3-2': {
        title: 'NIST AI Risk Management Framework',
        sections: [
            {
                title: 'Overview of the NIST AI RMF',
                content: `<p>The NIST AI Risk Management Framework (AI RMF 1.0), published in January 2023, is a voluntary framework designed to help organisations manage AI risks throughout the AI lifecycle. Although voluntary in the US, it has become an internationally referenced standard and is increasingly cited by UK and EU guidance documents.</p>

                <div class="info-box important">
                    <div class="info-box-title">Why NIST RMF Matters for UK Government</div>
                    <p>The UK's AI regulatory approach and the ISO/IEC 42001 AI management system standard draw heavily on NIST concepts. Familiarity with the RMF equips you to work across international AI governance contexts and to engage with vendors who have implemented it.</p>
                </div>

                <h3>Four Core Functions</h3>
                <p>The AI RMF is organised around four functions that together describe a complete risk management cycle:</p>
                <table class="content-table">
                    <thead><tr><th>Function</th><th>Purpose</th><th>Key Activities</th></tr></thead>
                    <tbody>
                        <tr><td><strong>GOVERN</strong></td><td>Build organisational culture and accountability for risk</td><td>Policies, roles, incentives, risk tolerance statements</td></tr>
                        <tr><td><strong>MAP</strong></td><td>Identify and categorise AI risks in context</td><td>Use case definition, stakeholder identification, impact assessment</td></tr>
                        <tr><td><strong>MEASURE</strong></td><td>Analyse and quantify identified risks</td><td>Metrics, testing, benchmarking, documentation</td></tr>
                        <tr><td><strong>MANAGE</strong></td><td>Prioritise and treat risks</td><td>Controls, mitigation plans, monitoring, response procedures</td></tr>
                    </tbody>
                </table>`
            },
            {
                title: 'GOVERN — Building Organisational Foundations',
                content: `<p>GOVERN is the foundational function. Without it, MAP, MEASURE, and MANAGE are ad hoc activities rather than a systematic programme.</p>

                <h3>What GOVERN Requires</h3>
                <ul>
                    <li><strong>Risk tolerance statements:</strong> What levels of AI risk is the organisation willing to accept? This must be defined explicitly by leadership, not assumed.</li>
                    <li><strong>Clear accountability:</strong> Named individuals responsible for AI risk at portfolio, programme, and system levels</li>
                    <li><strong>AI policies:</strong> Documented requirements for AI development, procurement, deployment, and monitoring</li>
                    <li><strong>Workforce training:</strong> All staff involved with AI have adequate competencies for their role</li>
                    <li><strong>Engagement processes:</strong> Mechanisms to surface concerns from frontline staff and affected communities</li>
                </ul>

                <h3>Operationalising Risk Tolerance</h3>
                <p>A risk tolerance statement defines thresholds at which action is required. Example: "AI systems that make consequential decisions about individuals without human review are not acceptable. Systems with a false positive rate exceeding 5% on any demographic subgroup require additional mitigation before deployment."</p>`
            },
            {
                title: 'MAP — Contextualising Risk',
                content: `<p>The MAP function ensures risks are identified in relation to specific use cases, affected populations, and organisational context. The same AI technology may carry very different risks in different deployments.</p>

                <h3>MAP Activities</h3>
                <ol>
                    <li><strong>Define the AI system and use case:</strong> What exactly is the system doing? Who are the deployers, operators, and affected individuals?</li>
                    <li><strong>Categorise the system:</strong> Using a risk taxonomy (e.g., EU AI Act categories or internal classification), determine the system's risk tier</li>
                    <li><strong>Identify stakeholders and harms:</strong> Who could be harmed, how, and how severely? Include second-order effects.</li>
                    <li><strong>Assess context factors:</strong> Deployment environment, user characteristics, existing safeguards</li>
                    <li><strong>Document assumptions and limitations:</strong> What is the system designed for, and what is it not designed for?</li>
                </ol>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tool</div>
                    <p>NIST publishes the AI RMF Playbook, a companion document with specific suggested actions for each function. Government teams can use it as a checklist when assessing new AI projects. It is freely available at airc.nist.gov.</p>
                </div>`
            },
            {
                title: 'MEASURE & MANAGE — Quantify and Control',
                content: `<p>MEASURE turns identified risks into quantified assessments. MANAGE turns those assessments into controlled, monitored outcomes.</p>

                <h3>MEASURE: Key Activities</h3>
                <ul>
                    <li>Select metrics for trustworthiness properties: accuracy, fairness, robustness, explainability, privacy</li>
                    <li>Establish baselines and thresholds before testing</li>
                    <li>Test across realistic distributions and subgroups</li>
                    <li>Document all results and make them available to decision-makers</li>
                    <li>Use independent review for high-risk systems</li>
                </ul>

                <h3>MANAGE: Key Activities</h3>
                <ul>
                    <li>Prioritise risks by impact and likelihood</li>
                    <li>Select treatment options: accept, mitigate, transfer, avoid</li>
                    <li>Implement controls and verify their effectiveness</li>
                    <li>Establish incident response procedures</li>
                    <li>Monitor continuously and adjust as conditions change</li>
                    <li>Retire systems that can no longer be managed to acceptable risk levels</li>
                </ul>

                <h3>Integrating with Existing Government Frameworks</h3>
                <p>NIST AI RMF is designed to complement, not replace, existing risk frameworks. In UK government, it maps closely to the HMG Cyber Security Risk Assessment approach and to the principles of PRINCE2 project risk management. AI governance leads should integrate AI RMF activities into standard project governance gates.</p>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'In the NIST AI RMF, which function is responsible for establishing the organisation\'s policies, roles, and risk tolerance for AI?',
                    options: ['MAP', 'MEASURE', 'MANAGE', 'GOVERN'],
                    correct: 3,
                    explanation: 'GOVERN is the foundational function that builds organisational capacity to manage AI risks — including policies, accountability structures, workforce competencies, and risk tolerance statements. Without GOVERN, the other functions lack the authority and structure to be effective.'
                },
                {
                    type: 'multiple-choice',
                    question: 'A government department has identified that an AI procurement system might give lower scores to suppliers from certain regions. At which NIST RMF stage should this concern be formally documented?',
                    options: [
                        'GOVERN — as it requires a policy decision',
                        'MAP — as it is an identified contextual risk to specific stakeholders',
                        'MEASURE — as it needs to be quantified through testing',
                        'MANAGE — as a control needs to be applied immediately'
                    ],
                    correct: 1,
                    explanation: 'MAP is the function for identifying and documenting risks in context, including who may be harmed and how. Once documented in MAP, the risk would then be quantified in MEASURE and controlled in MANAGE.'
                },
                {
                    type: 'free-text',
                    question: 'Describe how you would use the GOVERN function to prepare your department to responsibly deploy AI for the first time.',
                    sampleAnswer: 'GOVERN activities to establish AI readiness include: (1) Draft an AI risk tolerance statement agreed by the Senior Responsible Owner, specifying what types of AI use are acceptable and what conditions require escalation; (2) Define accountability — assign an AI risk owner at leadership level and AI leads at project level; (3) Establish an AI review process as a mandatory gate in the project lifecycle for all AI initiatives; (4) Create or adapt existing policies to cover AI procurement, development, deployment, and decommissioning requirements; (5) Assess workforce competency and deliver training to fill gaps; (6) Create a reporting mechanism for staff to raise concerns about AI behaviour without fear of reprisal; (7) Engage affected communities to understand their priorities and concerns before deploying AI that affects them.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 3-3: Data Protection & AI
// ============================================
Object.assign(COURSE_3_CONTENT, {
    'course-3-3': {
        title: 'Data Protection & AI',
        sections: [
            {
                title: 'UK GDPR and the AI Data Lifecycle',
                content: `<p>UK GDPR applies to any processing of personal data, and AI systems process personal data at every stage: collection, storage, training, inference, and output. Each stage carries distinct compliance obligations.</p>

                <h3>AI Lifecycle Data Obligations</h3>
                <table class="content-table">
                    <thead><tr><th>Stage</th><th>Key Obligation</th><th>Common Failure</th></tr></thead>
                    <tbody>
                        <tr><td>Data collection</td><td>Lawful basis, transparency, purpose limitation</td><td>Scraping public data without considering privacy expectations</td></tr>
                        <tr><td>Training data storage</td><td>Data minimisation, security, retention limits</td><td>Retaining training data indefinitely "in case we need to retrain"</td></tr>
                        <tr><td>Model training</td><td>DPIA if high-risk; consider privacy-enhancing technologies</td><td>Training on data beyond its original purpose without reassessment</td></tr>
                        <tr><td>Inference / prediction</td><td>Lawful basis for processing input data</td><td>Processing data the user did not knowingly provide</td></tr>
                        <tr><td>Output / decisions</td><td>Article 22 rights for automated decisions; right to explanation</td><td>Consequential decisions without human review mechanism</td></tr>
                        <tr><td>Logging and audit</td><td>Security; purpose limitation for logs</td><td>Storing detailed inference logs longer than necessary</td></tr>
                    </tbody>
                </table>`
            },
            {
                title: 'Special Category Data in AI',
                content: `<p>Special category data under UK GDPR (Article 9) receives enhanced protection because of its sensitivity. In AI systems, this data presents particular challenges because it can appear explicitly or be inferred from seemingly innocuous inputs.</p>

                <h3>Special Categories</h3>
                <ul>
                    <li>Racial or ethnic origin</li>
                    <li>Political opinions</li>
                    <li>Religious or philosophical beliefs</li>
                    <li>Trade union membership</li>
                    <li>Genetic data</li>
                    <li>Biometric data (where used to uniquely identify a person)</li>
                    <li>Health data</li>
                    <li>Sex life or sexual orientation</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Inference Risk</div>
                    <p>AI models can infer special category data from non-special category inputs. A mobility app can infer disability. Purchasing patterns can infer religion (e.g., halal food, religious texts). Facial recognition can infer ethnicity. Processing that produces inferred special category data may itself require Article 9 compliance, even if you did not collect special category data directly.</p>
                </div>

                <h3>Conditions for Processing Special Category Data</h3>
                <p>Processing requires both a lawful basis under Article 6 AND a specific Article 9 condition. For government AI, the most relevant conditions are: explicit consent; vital interests; public task with substantial public interest; and archiving/research purposes. The substantial public interest condition requires a Data Protection Policy document.</p>`
            },
            {
                title: 'Individual Rights and AI Systems',
                content: `<p>UK GDPR grants individuals a set of rights that AI systems must be designed to support.</p>

                <h3>Rights Summary for AI Contexts</h3>
                <table class="content-table">
                    <thead><tr><th>Right</th><th>AI Implication</th><th>System Design Requirement</th></tr></thead>
                    <tbody>
                        <tr><td>Right to information</td><td>Individuals must know when AI processes their data and for what purpose</td><td>Privacy notices updated to describe AI use clearly</td></tr>
                        <tr><td>Right of access (SAR)</td><td>Individuals can request their data including data used by the AI</td><td>Ability to extract individual's data from training sets and inference logs</td></tr>
                        <tr><td>Right to rectification</td><td>Inaccurate data must be corrected — including training data if identified</td><td>Process to correct training data and assess impact on model</td></tr>
                        <tr><td>Right to erasure</td><td>Data must be deleted on valid request — complex for trained models</td><td>Retention controls; assess whether model needs retraining after erasure</td></tr>
                        <tr><td>Right to object</td><td>Individuals can object to processing based on public task/legitimate interests</td><td>Process to handle objections and pause processing</td></tr>
                        <tr><td>Article 22 rights</td><td>Right not to be subject to solely automated consequential decisions</td><td>Human review mechanism; right to request human reconsideration</td></tr>
                    </tbody>
                </table>`
            },
            {
                title: 'Data Sharing and Third-Party AI',
                content: `<p>Many government AI systems involve third-party vendors, cloud providers, or data sharing with other public bodies. Each relationship introduces additional compliance obligations.</p>

                <h3>Data Processing Agreements</h3>
                <p>When a vendor processes personal data on behalf of your organisation, a Data Processing Agreement (DPA) is mandatory under Article 28. For AI vendors, the DPA must address: what data is used for training and fine-tuning; whether the vendor retains data to improve their own models; where data is processed (international transfers); and what happens to data when the contract ends.</p>

                <h3>AI-Specific DPA Clauses to Require</h3>
                <ul>
                    <li>Prohibition on using your data to train vendor's general-purpose models without explicit consent</li>
                    <li>Guaranteed data deletion or return at contract termination</li>
                    <li>Notification requirements if a model update materially changes how your data is processed</li>
                    <li>Right to audit the vendor's compliance with the DPA</li>
                    <li>Transparency about subprocessors who may also access the data</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Guidance</div>
                    <p>The ICO has published specific guidance on AI and data protection. The ICO's "Explaining decisions made with AI" guidance and "AI and data protection risk toolkit" are essential references for teams implementing or procuring AI in UK public sector contexts.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A government health app uses AI to predict users\' stress levels based on their movement patterns and app usage. What data protection concern does this raise?',
                    options: [
                        'Movement data is not personal data and does not need protection',
                        'The app may be inferring health data (a special category) from non-special category inputs',
                        'The data is only special category if the user self-reports their stress level',
                        'Predictions do not constitute processing of personal data'
                    ],
                    correct: 1,
                    explanation: 'Health data is a special category under Article 9. An AI that infers health-related information (such as stress or mental health status) from behavioural data may be producing special category data even if the inputs were not themselves special category. This requires heightened protections.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Under UK GDPR Article 22, what must a government department provide when an AI system makes a consequential automated decision about an individual?',
                    options: [
                        'The full technical specification of the AI model',
                        'A mechanism for the individual to request human reconsideration',
                        'A guarantee that the AI decision will be overturned if challenged',
                        'Access to all data used to train the model'
                    ],
                    correct: 1,
                    explanation: 'Article 22 requires that individuals have the right to obtain human intervention, express their point of view, and contest automated decisions. Practically, this means a process for human review must exist and be accessible to affected individuals.'
                },
                {
                    type: 'free-text',
                    question: 'Your department is procuring a cloud-based AI service that will process caseworkers\' notes containing personal and potentially special category data. What data protection clauses must the contract include?',
                    sampleAnswer: 'The contract must include: a Data Processing Agreement compliant with Article 28 UK GDPR; clear specification that the vendor may not use the data to train their own general-purpose models; data residency requirements confirming processing within the UK or an adequate country, or Standard Contractual Clauses for international transfers; mandatory data deletion or return within a specified period after contract termination; notification requirements for data breaches within 72 hours; subprocessor disclosure and restrictions; audit rights enabling the department or ICO to verify compliance; provisions for supporting subject access requests and other individual rights; and specific controls for special category data, including encryption at rest and in transit, access controls, and a named Data Protection Officer contact. A DPIA should be completed before any data is shared.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 3-4: Global Regulatory Landscape
// ============================================
Object.assign(COURSE_3_CONTENT, {
    'course-3-4': {
        title: 'Global Regulatory Landscape',
        sections: [
            {
                title: 'The EU AI Act: International Benchmark',
                content: `<p>The EU AI Act, in force from August 2024, is the world's first comprehensive binding legal framework for AI. Its extraterritorial scope means it applies to any AI system whose outputs are used within the EU — including systems developed by UK organisations serving European users.</p>

                <h3>Risk Tiers at a Glance</h3>
                <table class="content-table">
                    <thead><tr><th>Tier</th><th>Examples</th><th>Requirements</th></tr></thead>
                    <tbody>
                        <tr><td>Unacceptable Risk (banned)</td><td>Social scoring by government; real-time remote biometric surveillance in public spaces (with narrow exceptions); subliminal manipulation</td><td>Prohibited outright</td></tr>
                        <tr><td>High Risk</td><td>Critical infrastructure; education and employment decisions; benefits and public services; law enforcement; border control; justice</td><td>Conformity assessment, registration, human oversight, robustness, transparency obligations</td></tr>
                        <tr><td>Limited Risk</td><td>Chatbots, emotion recognition, deep fakes</td><td>Transparency/disclosure requirements only</td></tr>
                        <tr><td>Minimal Risk</td><td>Spam filters, AI in video games</td><td>Voluntary codes of practice</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">UK Post-Brexit Position</div>
                    <p>The UK has chosen a pro-innovation, principles-based approach rather than adopting the EU AI Act. UK regulators apply existing sector-specific laws with AI guidance layered on top. However, UK organisations providing services to EU users must still comply with the EU AI Act — creating a dual-compliance burden for many government departments with European partnerships.</p>
                </div>`
            },
            {
                title: 'UK AI Regulatory Approach',
                content: `<p>The UK Government published its AI Regulation White Paper in 2023, confirmed in 2024, establishing a framework based on five cross-sector principles applied by existing regulators.</p>

                <h3>The Five Principles</h3>
                <ol>
                    <li><strong>Safety, security, and robustness:</strong> AI should function securely and not cause harm</li>
                    <li><strong>Transparency and explainability:</strong> Users should know when AI is being used and how</li>
                    <li><strong>Fairness:</strong> AI should not infringe on individuals' rights or discriminate unlawfully</li>
                    <li><strong>Accountability and governance:</strong> Appropriate oversight and responsibility structures</li>
                    <li><strong>Contestability and redress:</strong> Mechanisms to challenge AI decisions</li>
                </ol>

                <h3>Sector Regulators' Role</h3>
                <p>Each regulator applies these principles within their domain. The FCA governs AI in financial services, Ofcom in media and communications, the CQC in health and social care, and the ICO across data-processing AI. Government departments must understand which regulators oversee their AI deployments.</p>

                <h3>AI Safety Institute</h3>
                <p>The UK's AI Safety Institute (AISI) focuses on evaluating frontier AI models for safety risks at the national level. While primarily focused on general-purpose AI, its work is increasingly relevant to government procurement of large language models and foundation models.</p>`
            },
            {
                title: 'United States AI Policy',
                content: `<p>The US has taken a sector-by-sector, agency-led approach to AI governance, with no single comprehensive federal AI law equivalent to the EU AI Act.</p>

                <h3>Executive Order on AI (October 2023)</h3>
                <p>President Biden's Executive Order directed federal agencies to develop AI safety standards, conduct risk assessments, and promote trustworthy AI. It gave NIST responsibility for developing standards for AI safety. The new administration has taken a different approach, focusing on maintaining US AI leadership over precautionary regulation.</p>

                <h3>State-Level Regulation</h3>
                <p>In the absence of federal law, US states are active. Colorado, Illinois, and others have AI-specific laws, particularly around automated employment decisions and AI in healthcare. This creates a complex patchwork for organisations operating nationally.</p>

                <h3>NIST AI RMF</h3>
                <p>The NIST AI Risk Management Framework (covered in Course 3.2) has become a de facto US standard, widely adopted voluntarily and referenced in federal procurement requirements.</p>`
            },
            {
                title: 'International Frameworks and Standards',
                content: `<p>Beyond the EU and US, a growing body of international frameworks shapes global AI governance.</p>

                <h3>OECD AI Principles</h3>
                <p>Adopted by 46 countries, the OECD Principles provide a baseline for responsible AI: inclusive growth, human-centred values, transparency, robustness, and accountability. They inform many national regulatory approaches including the UK's five principles.</p>

                <h3>ISO/IEC 42001:2023</h3>
                <p>The first international standard for AI management systems. Modelled on ISO 27001 (information security), it specifies requirements for establishing, implementing, maintaining, and continually improving an AI management system. Certification provides independent assurance of AI governance maturity.</p>

                <h3>G7 Hiroshima AI Process</h3>
                <p>The G7 agreed a Code of Conduct for advanced AI developers in 2023, focusing on safety evaluations, transparency, and information sharing about serious incidents. This is relevant to government procurement of advanced AI systems.</p>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Implication</div>
                    <p>For UK government departments, the most operationally relevant frameworks are: UK GDPR and ICO guidance, the UK AI regulatory principles, and (for any EU-facing work) the EU AI Act. ISO/IEC 42001 certification is becoming a meaningful quality signal in AI procurement.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A UK government agency uses an AI system to assess asylum applications. Under the EU AI Act, this system would be classified as:',
                    options: [
                        'Minimal risk — government systems are exempt',
                        'Limited risk — because it involves text analysis',
                        'High risk — border control and migration management is explicitly listed',
                        'Unacceptable risk — automated immigration decisions are banned'
                    ],
                    correct: 2,
                    explanation: 'The EU AI Act explicitly classifies AI used in migration, asylum, and border control as high-risk, requiring conformity assessment, human oversight, and transparency obligations. Note: the EU AI Act would apply if the system\'s outputs affect EU residents, regardless of where it was built.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Which international standard provides a certifiable AI management system framework modelled on ISO 27001?',
                    options: [
                        'NIST AI RMF 1.0',
                        'ISO/IEC 42001:2023',
                        'OECD AI Principles',
                        'EU AI Act Annex IX'
                    ],
                    correct: 1,
                    explanation: 'ISO/IEC 42001:2023 is the first international standard for AI management systems, enabling organisations to seek third-party certification of their AI governance practices. NIST AI RMF is a framework, not a certifiable standard.'
                },
                {
                    type: 'free-text',
                    question: 'Your department is procuring an AI system from a US vendor. Describe the regulatory considerations you would need to assess before signing the contract.',
                    sampleAnswer: 'Considerations include: (1) EU AI Act applicability — if any outputs affect EU residents or the system processes EU personal data, EU Act obligations apply; (2) UK GDPR compliance — data processing agreement required, international transfer mechanism for US data transfers (adequacy decision or SCCs), and confirmation the vendor will not use data for general model training; (3) UK AI principles alignment — assess the vendor\'s documentation of safety, transparency, fairness, accountability, and contestability; (4) NIST AI RMF or ISO 42001 compliance — consider requiring vendor to demonstrate alignment with one of these frameworks as evidence of governance maturity; (5) Sector-specific regulation — identify which UK regulator oversees this type of AI and what their guidance requires; (6) Contract clauses — audit rights, incident notification, data deletion, and prohibition on use of your data for model training beyond the contracted purpose.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 3-5: Compliance Documentation & Auditing
// ============================================
Object.assign(COURSE_3_CONTENT, {
    'course-3-5': {
        title: 'Compliance Documentation & Auditing',
        sections: [
            {
                title: 'The Role of Documentation in AI Compliance',
                content: `<p>In AI governance, documentation is not bureaucratic overhead — it is the mechanism through which accountability is exercised. Without documentation, claims about an AI system's safety, fairness, or compliance are assertions that cannot be verified or challenged.</p>

                <h3>Why Documentation Matters</h3>
                <ul>
                    <li><strong>Legal defensibility:</strong> Demonstrates due diligence if a system causes harm and is challenged</li>
                    <li><strong>Auditability:</strong> Enables internal and external review of system behaviour and governance decisions</li>
                    <li><strong>Reproducibility:</strong> Allows a past system state to be reconstructed for investigation</li>
                    <li><strong>Knowledge transfer:</strong> Preserves institutional knowledge when staff change</li>
                    <li><strong>Regulatory compliance:</strong> Many frameworks (EU AI Act, UK GDPR) explicitly require certain documents</li>
                </ul>

                <h3>Documentation Hierarchy</h3>
                <table class="content-table">
                    <thead><tr><th>Level</th><th>Document Type</th><th>Audience</th></tr></thead>
                    <tbody>
                        <tr><td>Strategic</td><td>AI policy, risk tolerance statement</td><td>Leadership, board</td></tr>
                        <tr><td>Programme</td><td>AI register, portfolio risk assessment</td><td>Governance function, DPO</td></tr>
                        <tr><td>Project</td><td>DPIA, algorithmic impact assessment, system design document</td><td>Project team, legal, compliance</td></tr>
                        <tr><td>Technical</td><td>Model card, training data documentation, test results, monitoring reports</td><td>Technical team, auditors</td></tr>
                    </tbody>
                </table>`
            },
            {
                title: 'The AI Register',
                content: `<p>An AI register is a centralised inventory of all AI systems used by an organisation. It is the foundation of portfolio-level governance — you cannot manage what you have not identified.</p>

                <h3>What an AI Register Should Contain</h3>
                <ul>
                    <li>System name and unique identifier</li>
                    <li>Brief description of purpose and function</li>
                    <li>Risk classification (e.g., EU AI Act tier, internal risk rating)</li>
                    <li>Data processed (types, sources, special categories)</li>
                    <li>Decision type (advisory, automated, human-in-the-loop)</li>
                    <li>Affected populations</li>
                    <li>Named system owner and responsible team</li>
                    <li>Deployment date and version</li>
                    <li>Review schedule and last review date</li>
                    <li>Links to associated DPIAs, model cards, and test reports</li>
                    <li>Current status (active, under review, decommissioned)</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">Starting Small</div>
                    <p>Many organisations begin their AI register as a spreadsheet. The priority is completeness and currency — knowing what systems exist and who is responsible for them — rather than the sophistication of the tool. Automate and improve the register process once the discipline is established.</p>
                </div>`
            },
            {
                title: 'Algorithmic Impact Assessments',
                content: `<p>An Algorithmic Impact Assessment (AIA) is a structured evaluation of the risks and impacts of an AI system before deployment, equivalent to a DPIA but scoped to the full range of potential harms, not just privacy.</p>

                <h3>AIA vs DPIA</h3>
                <p>A DPIA focuses specifically on privacy risks and is required by UK GDPR. An AIA is broader, addressing fairness, rights, economic, and social impacts. For high-risk systems, both should be completed — the DPIA addresses data protection obligations, the AIA addresses the wider ethical and rights implications.</p>

                <h3>AIA Structure</h3>
                <ol>
                    <li><strong>System description:</strong> Scope, purpose, stakeholders, alternatives considered</li>
                    <li><strong>Impact identification:</strong> Systematic mapping of potential harms across affected groups</li>
                    <li><strong>Severity assessment:</strong> Likelihood and magnitude of each harm, with evidence</li>
                    <li><strong>Mitigation measures:</strong> Controls to address each identified harm</li>
                    <li><strong>Residual risk:</strong> Assessment of remaining risk after mitigations</li>
                    <li><strong>Consultation record:</strong> Who was consulted, what they said, how concerns were addressed</li>
                    <li><strong>Decision:</strong> Proceed / proceed with conditions / do not proceed, with named approver</li>
                    <li><strong>Review trigger:</strong> Conditions that would require the AIA to be updated</li>
                </ol>`
            },
            {
                title: 'Internal Auditing of AI Systems',
                content: `<p>Regular internal audits verify that AI systems continue to perform as intended, comply with governance requirements, and remain within approved risk parameters.</p>

                <h3>Audit Scope</h3>
                <ul>
                    <li><strong>Documentation review:</strong> Are all required documents current, complete, and accessible?</li>
                    <li><strong>Technical review:</strong> Do current performance metrics match the approved baseline? Has drift occurred?</li>
                    <li><strong>Governance review:</strong> Are review schedules being followed? Are escalations being made appropriately?</li>
                    <li><strong>Compliance review:</strong> Have regulatory requirements changed? Is the system still compliant?</li>
                    <li><strong>Incident review:</strong> Have any complaints, errors, or near-misses been logged and resolved?</li>
                </ul>

                <h3>Audit Frequency</h3>
                <p>Audit frequency should reflect system risk level. High-risk systems should be audited at least annually, with continuous automated monitoring between audits. Lower-risk systems may require less frequent review. Triggers for unscheduled audits include: significant incidents, regulatory changes, substantial changes to the system or its data, or changes in the deployment context.</p>

                <h3>Independence</h3>
                <p>Internal audit provides accountability, but it is not independent of the organisation. For high-risk or controversial systems, external audit or independent assurance provides stronger accountability and public credibility.</p>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'What is the primary difference between a DPIA and an Algorithmic Impact Assessment?',
                    options: [
                        'A DPIA is required by law; an AIA is never legally required',
                        'A DPIA focuses specifically on privacy risks; an AIA assesses the broader range of potential harms',
                        'A DPIA is for large AI systems; an AIA is for small or experimental ones',
                        'A DPIA is completed after deployment; an AIA is completed before'
                    ],
                    correct: 1,
                    explanation: 'A DPIA is mandated by UK GDPR and specifically addresses privacy risks. An AIA is broader, covering fairness, rights, economic, and social impacts. Both are typically required for high-risk government AI systems.'
                },
                {
                    type: 'multiple-choice',
                    question: 'An AI register entry for a benefits assessment system should include:',
                    options: [
                        'The model\'s source code and hyperparameters',
                        'The names of all citizens whose data was used in training',
                        'The system owner, risk classification, affected populations, and review schedule',
                        'A comparison of the AI system\'s cost against manual processing'
                    ],
                    correct: 2,
                    explanation: 'An AI register captures governance-relevant information: ownership, purpose, risk level, data processed, affected populations, and review schedule. It enables portfolio oversight without requiring technical detail at the register level.'
                },
                {
                    type: 'free-text',
                    question: 'Your internal audit of a two-year-old benefits fraud detection AI finds that: (1) the model card is outdated, (2) the system has not been reviewed since deployment, and (3) complaints have been received but not formally logged. What immediate actions would you take and what does this indicate about governance maturity?',
                    sampleAnswer: 'Immediate actions: (1) Escalate to the system owner and Senior Responsible Owner — unreviewed high-risk AI is a compliance risk; (2) Commission an immediate technical review to assess whether model performance has drifted since deployment; (3) Formally log and investigate all received complaints, including assessing whether any individuals were adversely affected and require redress; (4) Update the model card with current performance data and any changes since deployment; (5) Establish a review schedule with named owners and calendar commitments. Governance maturity assessment: these findings indicate immature governance — specifically, failure of the MANAGE function (no monitoring or review schedule), absence of incident management processes, and documentation that is treated as a one-time task rather than a living record. The organisation needs foundational governance controls: a live AI register, assigned system owners with review responsibilities, an incident reporting process, and regular audit cycles.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 3-6: Regulatory Assessment & Certification
// ============================================
Object.assign(COURSE_3_CONTENT, {
    'course-3-6': {
        title: 'Regulatory Assessment & Certification',
        sections: [
            {
                title: 'Course 3 Review: Regulatory Compliance & Risk Management',
                content: `<p>This capstone module consolidates the compliance and risk management knowledge from Course 3. Review the key frameworks and their relationships before attempting the certification assessment.</p>

                <h3>Framework Comparison</h3>
                <table class="content-table">
                    <thead><tr><th>Framework</th><th>Jurisdiction</th><th>Binding?</th><th>Key Mechanism</th></tr></thead>
                    <tbody>
                        <tr><td>EU AI Act</td><td>EU (+ extraterritorial)</td><td>Yes</td><td>Risk-tier classification; conformity assessment for high-risk</td></tr>
                        <tr><td>UK AI Principles</td><td>UK</td><td>No (sector regulators enforce)</td><td>Five principles applied through existing law by sector regulators</td></tr>
                        <tr><td>UK GDPR</td><td>UK</td><td>Yes</td><td>Lawful basis, DPIAs, individual rights, Article 22 for automated decisions</td></tr>
                        <tr><td>NIST AI RMF</td><td>US (international influence)</td><td>No (voluntary)</td><td>GOVERN-MAP-MEASURE-MANAGE cycle</td></tr>
                        <tr><td>ISO/IEC 42001</td><td>International</td><td>No (certifiable)</td><td>AI management system requirements; third-party certification available</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">Certification Standard</div>
                    <p>Score 80% or above on the assessment to earn the Course 3 certificate. Questions test applied regulatory knowledge across real-world government AI scenarios.</p>
                </div>`
            },
            {
                title: 'Integrated Compliance Scenario',
                content: `<p>Consider this integrated scenario, which draws on all five Course 3 modules.</p>

                <h3>Scenario: Cross-Border Benefits Verification AI</h3>
                <p>A UK government department develops an AI system to automatically verify whether Universal Credit claimants also receive benefits from EU member state systems. The system processes names, National Insurance numbers, dates of birth, and benefit data shared under bilateral agreements. Decisions to reduce or suspend payments are generated by the AI and reviewed by a case manager.</p>

                <h3>Regulatory Analysis</h3>
                <ul>
                    <li><strong>EU AI Act:</strong> The system affects EU residents' benefits — it falls under the Act's high-risk category (social benefits administration) regardless of where it is deployed. Conformity assessment, technical documentation, and human oversight requirements apply.</li>
                    <li><strong>UK GDPR:</strong> DPIA required (high risk, large-scale, special category financial data). Article 22 applies — claimants have the right not to be subject to solely automated decisions; the case manager review must be genuine, not rubber-stamping. International data transfer mechanisms required for data received from EU systems.</li>
                    <li><strong>NIST RMF GOVERN:</strong> A cross-departmental risk tolerance statement is needed given the transnational scope and financial impact on vulnerable individuals.</li>
                    <li><strong>Documentation:</strong> AIA required in addition to DPIA; model card and monitoring plan must be in place before deployment; AI register entry with regular review schedule.</li>
                </ul>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A UK department is developing an AI system that will affect EU citizens\' visa applications. Under the EU AI Act, this system is likely:',
                    options: [
                        'Exempt, as it is operated by a non-EU government',
                        'High-risk, as it relates to migration and border control management',
                        'Minimal risk, as it only processes documents',
                        'Subject only to transparency requirements as a limited-risk system'
                    ],
                    correct: 1,
                    explanation: 'Migration and border control is explicitly listed as a high-risk category in the EU AI Act Annex III. The Act has extraterritorial reach — it applies when outputs affect EU residents, regardless of where the system is operated.'
                },
                {
                    type: 'multiple-choice',
                    question: 'An AI register must be reviewed when:',
                    options: [
                        'Only at the scheduled annual review date',
                        'Whenever the IT team updates the system\'s infrastructure',
                        'Whenever there are significant changes to the system, its data, context, or relevant regulations',
                        'Only when required by an external auditor'
                    ],
                    correct: 2,
                    explanation: 'The AI register and associated governance documents (DPIAs, AIAs, model cards) should be living documents updated when the system or its context changes materially, not just at fixed intervals. Regulatory changes, incidents, and model updates are all triggers for review.'
                },
                {
                    type: 'free-text',
                    question: 'Describe the full governance documentation package you would require before approving the deployment of a high-risk government AI system.',
                    sampleAnswer: 'A complete governance package for a high-risk system should include: (1) AI register entry — system owner, risk classification, affected populations, data processed, review schedule; (2) Data Protection Impact Assessment — completed by DPO, addressing all processing risks, with sign-off; (3) Algorithmic Impact Assessment — broader harm analysis including fairness, rights, and socioeconomic impacts, with named approver; (4) Model card — performance metrics disaggregated by relevant subgroups, intended use, known limitations, recommended deployment conditions; (5) Training data documentation — provenance, cleaning and labelling methodology, coverage and representation analysis; (6) Validation report — test methodology, results, subgroup analysis, sign-off by technical and governance leads; (7) Human oversight procedure — documented process for human review, escalation paths, and appeal mechanism; (8) Monitoring plan — metrics, thresholds, responsible team, retrain criteria, review schedule; (9) Incident response procedure — how AI-related incidents will be detected, escalated, investigated, and remediated; (10) Legal basis documentation — evidence of lawful basis for processing, special category conditions if applicable. For EU-facing systems, EU AI Act conformity assessment documentation is also required.'
                }
            ]
        }
    }
});

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

// ============================================
// COURSE 4-1: AI Procurement & Vendor Management
// ============================================
Object.assign(COURSE_4_CONTENT, {
    'course-4-1': {
        title: 'AI Procurement & Vendor Management',
        sections: [
            {
                title: 'Why AI Procurement Needs Specialist Governance',
                content: `<p>Procuring an AI system is not the same as procuring traditional software. AI systems are probabilistic, data-dependent, and capable of perpetuating or amplifying bias. Standard IT procurement frameworks were not designed for these characteristics, and applying them without adaptation creates significant governance gaps.</p>

                <h3>Unique Challenges in AI Procurement</h3>
                <table class="content-table">
                    <thead><tr><th>Challenge</th><th>Traditional IT</th><th>AI Systems</th></tr></thead>
                    <tbody>
                        <tr><td>Performance specification</td><td>Functional requirements are deterministic</td><td>Performance is probabilistic and may degrade without code changes</td></tr>
                        <tr><td>Explainability</td><td>Outputs follow documented logic</td><td>Complex models may not be explainable to the required standard</td></tr>
                        <tr><td>Fairness</td><td>Not typically a procurement criterion</td><td>Must be tested across demographic groups before acceptance</td></tr>
                        <tr><td>Data dependency</td><td>System is independent of training data</td><td>Performance is inseparable from training data quality and coverage</td></tr>
                        <tr><td>Ongoing governance</td><td>Maintenance defined upfront</td><td>Monitoring, drift detection, and retraining are ongoing requirements</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">Cabinet Office Guidance</div>
                    <p>The UK Government's "Guidelines for AI procurement" (2020, updated guidance ongoing) sets out principles for responsible AI acquisition in the public sector. These principles should be embedded in all procurement documentation for AI systems.</p>
                </div>`
            },
            {
                title: 'Pre-Market Engagement and Requirements',
                content: `<p>Effective AI procurement starts well before issuing an Invitation to Tender. Pre-market engagement helps define realistic requirements and identifies what responsible AI looks like in this context.</p>

                <h3>Requirements Definition</h3>
                <ul>
                    <li><strong>Use case definition:</strong> What decision is the AI supporting? What is the consequence of errors?</li>
                    <li><strong>Performance thresholds:</strong> Define minimum acceptable accuracy and fairness metrics before engaging suppliers — not after seeing what they offer</li>
                    <li><strong>Explainability requirements:</strong> Specify the level of explanation required at citizen, caseworker, and auditor levels</li>
                    <li><strong>Data requirements:</strong> What training data provenance documentation is required? What ongoing data access is needed?</li>
                    <li><strong>Human oversight specification:</strong> Define the human-in-the-loop requirements upfront, not as an afterthought</li>
                </ul>

                <h3>Market Sounding Questions</h3>
                <p>When engaging with potential suppliers before formal procurement, ask: Can you provide a model card for a comparable deployment? How do you test for bias? Can you demonstrate explanation capability? What is your data retention policy? Have you been independently audited?</p>`
            },
            {
                title: 'Evaluation and Selection',
                content: `<p>Traditional supplier evaluation criteria — price, technical capability, track record — are necessary but insufficient for AI. Governance and ethics criteria must be weighted explicitly.</p>

                <h3>Recommended Evaluation Criteria</h3>
                <ul>
                    <li><strong>Technical performance:</strong> Does the system meet accuracy and performance thresholds on representative test data provided by the buyer?</li>
                    <li><strong>Fairness:</strong> Does the supplier provide disaggregated performance metrics? Are disparate impact rates within acceptable thresholds?</li>
                    <li><strong>Explainability:</strong> Can the system generate explanations at the required levels? Are these meaningful, not just outputs that label themselves as explanations?</li>
                    <li><strong>Transparency:</strong> Does the supplier provide training data documentation, a model card, and a technical architecture overview?</li>
                    <li><strong>Governance maturity:</strong> Does the supplier have an AI ethics policy? ISO 42001 certification? Named AI ethics responsibility?</li>
                    <li><strong>Post-deployment support:</strong> Are monitoring, drift detection, and retraining services included and costed?</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">Include Governance in Scoring</div>
                    <p>Allocate at least 20% of evaluation scoring to governance, ethics, and transparency criteria. If these are listed but not scored, suppliers will deprioritise them in their response.</p>
                </div>`
            },
            {
                title: 'Contract Terms and Ongoing Management',
                content: `<p>The contract is the mechanism through which governance obligations are enforced throughout the system's life. Generic IT contracts are inadequate for AI — bespoke clauses are required.</p>

                <h3>Essential AI Contract Clauses</h3>
                <ul>
                    <li><strong>Performance warranties:</strong> Minimum performance metrics that are warranted and trigger remediation if not met</li>
                    <li><strong>Fairness obligations:</strong> Defined thresholds for demographic parity or other fairness metrics, with testing requirements</li>
                    <li><strong>Data ownership and use:</strong> Explicit statement that all training data derived from your organisation remains yours; vendor cannot use it for general model training</li>
                    <li><strong>Audit rights:</strong> Right to audit model performance, data practices, and governance processes, including rights to appoint a third-party auditor</li>
                    <li><strong>Model change notification:</strong> Mandatory notification (with minimum notice period) before any material model update or retraining</li>
                    <li><strong>Incident reporting:</strong> Required notification timeframes and process for AI-related incidents</li>
                    <li><strong>Decommissioning:</strong> Data deletion requirements and transition support at contract end</li>
                </ul>

                <h3>Ongoing Vendor Management</h3>
                <p>AI vendor management requires regular performance reviews against agreed metrics, governance reviews when the system is updated, and escalation procedures when performance degrades or concerns arise. Assign a named AI contract manager responsible for these activities.</p>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'When should minimum performance and fairness thresholds be defined in an AI procurement?',
                    options: [
                        'After reviewing supplier proposals, to ensure realistic targets',
                        'By the technical team during implementation, once the model is trained',
                        'Before issuing the Invitation to Tender, as part of requirements definition',
                        'At the post-deployment review, once real-world performance data is available'
                    ],
                    correct: 2,
                    explanation: 'Defining thresholds after seeing supplier proposals creates a race to the bottom, as buyers will be tempted to accept what is offered rather than what is required. Pre-defined thresholds, established before procurement, are the standard for responsible AI acquisition.'
                },
                {
                    type: 'multiple-choice',
                    question: 'An AI vendor\'s contract does not contain a model change notification clause. What risk does this create?',
                    options: [
                        'The vendor could upgrade the system without charging for it',
                        'The model could be updated in ways that degrade fairness or performance without the buyer\'s knowledge or consent',
                        'The contract would become automatically void if the model is updated',
                        'The buyer would be unable to claim under warranty for performance failures'
                    ],
                    correct: 1,
                    explanation: 'Without a model change notification clause, a vendor can retrain or update the model — potentially changing its behaviour, bias profile, or performance characteristics — without informing the buyer. This undermines governance and could result in undetected harm.'
                },
                {
                    type: 'free-text',
                    question: 'You are drafting evaluation criteria for procuring an AI triage tool for a government complaints system. The tool will prioritise which complaints are escalated urgently. Describe the governance-related evaluation criteria you would include and how you would weight them.',
                    sampleAnswer: 'Governance criteria (suggested weight: 25-30% of total score): (1) Fairness testing — supplier must provide disaggregated performance data across protected characteristics (age, gender, disability, ethnicity) and commit to maximum acceptable disparate impact ratios (e.g., no demographic group may have escalation rates more than 15% below the average); (2) Explainability — demonstrate the system can generate plain-language explanations for triage decisions accessible to citizens and caseworkers; (3) Transparency documentation — require a model card, training data provenance documentation, and validation report as mandatory submission attachments; (4) Governance maturity — assess the supplier\'s AI ethics policy, ISO 42001 certification or equivalent, and named AI ethics accountability; (5) Post-deployment commitments — score the quality and scope of monitoring, drift detection, and retraining services included in the proposal. Also require mandatory contractual terms covering audit rights, model change notification (minimum 30 days), incident reporting within 24 hours, and data deletion on contract termination.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 4-3: Monitoring & Performance Management
// ============================================
Object.assign(COURSE_4_CONTENT, {
    'course-4-3': {
        title: 'Monitoring & Performance Management',
        sections: [
            {
                title: 'Designing a Monitoring Framework',
                content: `<p>Effective monitoring of deployed AI is not just about detecting when things go wrong — it is about maintaining ongoing visibility of system behaviour so that governance decisions are grounded in evidence, not assumption.</p>

                <h3>What to Monitor</h3>
                <table class="content-table">
                    <thead><tr><th>Dimension</th><th>Metrics</th><th>Alert Condition</th></tr></thead>
                    <tbody>
                        <tr><td>Performance</td><td>Accuracy, precision, recall, F1 against ground truth</td><td>Metric drops below approved threshold</td></tr>
                        <tr><td>Fairness</td><td>Demographic parity ratio, equal opportunity rate by subgroup</td><td>Subgroup disparity exceeds agreed tolerance</td></tr>
                        <tr><td>Input data quality</td><td>Missing value rate, out-of-range values, schema violations</td><td>Data quality score drops below baseline</td></tr>
                        <tr><td>Input distribution</td><td>Statistical distance (KL divergence, PSI) from training distribution</td><td>Significant distributional shift detected</td></tr>
                        <tr><td>Output distribution</td><td>Prediction distribution, confidence score distribution</td><td>Unusual shift in prediction patterns</td></tr>
                        <tr><td>System health</td><td>Latency, error rate, throughput</td><td>SLA breach or unusual error patterns</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Ground Truth Lag</div>
                    <p>Many AI systems make predictions where the correct answer only becomes known weeks or months later (e.g., whether a fraud flag was correct). Design monitoring to account for this lag — use proxy metrics and early indicators where ground truth is not yet available.</p>
                </div>`
            },
            {
                title: 'Alert Management and Escalation',
                content: `<p>Monitoring without defined responses is merely observation. Every alert condition must have a documented response procedure and a named escalation path.</p>

                <h3>Alert Severity Levels</h3>
                <ul>
                    <li><strong>Informational:</strong> Metric approaching threshold; no immediate action required but increased scrutiny warranted. Log and review at next scheduled review.</li>
                    <li><strong>Warning:</strong> Metric has crossed threshold; investigation required within defined SLA (e.g., 5 business days). May require temporary manual review increase.</li>
                    <li><strong>Critical:</strong> Significant performance degradation or fairness violation. Escalate to system owner immediately. Consider pausing automated decisions pending investigation.</li>
                    <li><strong>Incident:</strong> Known harm has occurred or is imminent. Invoke incident response procedure. Consider system suspension.</li>
                </ul>

                <h3>Escalation Paths</h3>
                <p>Define clearly: who receives each alert level, what action they are expected to take, what their decision authority is, and who they escalate to if the issue cannot be resolved at their level. Ambiguous escalation paths result in alerts being acknowledged but not acted upon.</p>`
            },
            {
                title: 'Performance Reviews and Governance Reporting',
                content: `<p>Monitoring generates data; governance reporting turns that data into accountable decisions.</p>

                <h3>Regular Review Cadence</h3>
                <ul>
                    <li><strong>Automated daily/weekly:</strong> Dashboards reviewed by operational team; anomalies flagged</li>
                    <li><strong>Monthly:</strong> System owner reviews performance trends, fairness metrics, and incident log</li>
                    <li><strong>Quarterly:</strong> Governance board receives summary report covering performance, fairness, incidents, and any material changes</li>
                    <li><strong>Annual:</strong> Comprehensive review including revalidation against current data, regulatory compliance check, and go/no-go decision for continued operation</li>
                </ul>

                <h3>What a Governance Report Should Contain</h3>
                <ul>
                    <li>Period performance metrics vs approved thresholds (pass/fail)</li>
                    <li>Fairness metrics by demographic subgroup</li>
                    <li>Data quality trends</li>
                    <li>Drift indicators and any distribution changes</li>
                    <li>Incidents and near-misses with outcomes</li>
                    <li>Changes made during the period (model updates, configuration changes)</li>
                    <li>Upcoming risks or events (e.g., seasonal data pattern changes)</li>
                    <li>Recommendation: continue / modify / suspend / decommission</li>
                </ul>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A government AI system\'s fairness dashboard shows that one demographic group is receiving negative outcomes at twice the rate of others. What severity level should this trigger?',
                    options: [
                        'Informational — demographic variation is normal and expected',
                        'Warning — requires investigation within the defined SLA',
                        'Critical — significant fairness violation requiring immediate escalation',
                        'No alert — fairness metrics are advisory only'
                    ],
                    correct: 2,
                    explanation: 'A twofold disparity in negative outcomes for a demographic group is a significant fairness violation that must be escalated immediately. Continuing to operate a system that demonstrably discriminates without investigation and remediation exposes the organisation to legal and reputational risk.'
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "population stability index" (PSI) used to detect in AI monitoring?',
                    options: [
                        'Whether the model\'s accuracy is stable across different user sessions',
                        'Whether the distribution of input data has shifted significantly from the training distribution',
                        'Whether the system can handle increased user load without performance degradation',
                        'Whether the model produces consistent predictions for the same input'
                    ],
                    correct: 1,
                    explanation: 'PSI (Population Stability Index) measures the statistical distance between the current input distribution and the training data distribution. A high PSI indicates that the data the model is seeing in production looks significantly different from what it was trained on — a leading indicator of performance degradation.'
                },
                {
                    type: 'free-text',
                    question: 'Design the monitoring framework for a government AI that processes planning permission applications, assigning preliminary risk scores reviewed by planning officers. What would you monitor, at what frequency, and what would trigger a formal governance review?',
                    sampleAnswer: 'Monitoring dimensions: (1) Performance — compare AI risk scores against final officer decisions as ground truth (with lag); track percentage of AI scores overridden by officers (high override rates suggest model-officer disagreement); (2) Fairness — disaggregate outcomes by applicant postcode (as proxy for demographics), application type, and project size; monitor for geographic bias in high-risk scores; (3) Input distribution — monitor feature distributions against training baseline using PSI for application type, location, and size characteristics; alert on significant drift; (4) Output distribution — monitor risk score distribution for unusual shifts; (5) Data quality — missing fields, invalid values, schema changes. Frequency: automated dashboards daily; operational team review weekly; system owner report monthly; governance board quarterly. Triggers for formal governance review: fairness disparity exceeding 15% between any postcode groups; PSI indicating significant input drift; officer override rate exceeding 30% (suggesting model is not aligned with planning policy); any complaint that the AI score influenced a decision in a way that disadvantages a protected characteristic; regulatory changes to planning policy that affect the model\'s training assumptions.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 4-4: Incident Response & Remediation
// ============================================
Object.assign(COURSE_4_CONTENT, {
    'course-4-4': {
        title: 'Incident Response & Remediation',
        sections: [
            {
                title: 'Defining AI Incidents',
                content: `<p>An AI incident is any event where an AI system behaves in an unintended way that causes or risks causing harm to individuals, organisations, or society. This definition is deliberately broad — not every incident causes harm, but near-misses are as important as actual harms for learning and prevention.</p>

                <h3>AI Incident Taxonomy</h3>
                <table class="content-table">
                    <thead><tr><th>Category</th><th>Examples</th><th>Typical Severity</th></tr></thead>
                    <tbody>
                        <tr><td>Performance failure</td><td>Accuracy degrades below threshold; model produces incorrect outputs at scale</td><td>High</td></tr>
                        <tr><td>Fairness violation</td><td>Discriminatory outcomes identified across protected groups</td><td>Critical</td></tr>
                        <tr><td>Privacy breach</td><td>Model outputs leak personal data; training data exposed</td><td>Critical</td></tr>
                        <tr><td>Security incident</td><td>Model manipulation, data poisoning, adversarial attack</td><td>Critical</td></tr>
                        <tr><td>Operational failure</td><td>System unavailability; integration errors</td><td>Variable</td></tr>
                        <tr><td>Governance failure</td><td>Decision made without required human review; documentation not followed</td><td>Medium-High</td></tr>
                        <tr><td>Near-miss</td><td>Potential harm identified and prevented before it occurred</td><td>Low (but high learning value)</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">Mandatory Reporting</div>
                    <p>Some AI incidents have mandatory reporting obligations. A privacy breach involving personal data must be reported to the ICO within 72 hours under UK GDPR Article 33. Some sector regulators have additional AI incident reporting requirements. Know your reporting obligations before an incident occurs.</p>
                </div>`
            },
            {
                title: 'Incident Response Phases',
                content: `<p>A structured incident response process reduces harm, enables faster recovery, and generates the evidence needed for accountability and learning.</p>

                <h3>Phase 1: Detection and Triage</h3>
                <p>Incidents can be detected through: automated monitoring alerts, user complaints, staff observations, external reports (media, researchers, regulators). All potential incidents should be logged immediately on detection. Triage determines severity and activates the appropriate response level.</p>

                <h3>Phase 2: Containment</h3>
                <p>The immediate priority is limiting ongoing harm. Depending on severity, containment actions may include: increasing human oversight for affected decisions; pausing automated outputs while investigation proceeds; suspending the system; issuing communications to affected parties.</p>

                <h3>Phase 3: Investigation</h3>
                <p>Determine root cause: Is this a data problem, a model problem, a deployment problem, or a governance failure? Preserve evidence — model version, input data at time of incident, outputs, logs. Assign a named incident lead with authority to direct the response.</p>

                <h3>Phase 4: Remediation</h3>
                <p>Implement the fix. For model issues: retrain, recalibrate, or replace. For data issues: correct the data and assess impact. For governance failures: update procedures and re-train staff. Verify the fix resolves the issue before returning to full operation.</p>

                <h3>Phase 5: Recovery and Review</h3>
                <p>Return the system to operation with increased monitoring. Conduct a post-incident review within 30 days. Publish a lessons-learned report internally. Update the AI register, model card, and risk documentation to reflect the incident and its resolution.</p>`
            },
            {
                title: 'Remediation of Affected Individuals',
                content: `<p>When an AI incident has adversely affected individuals, remediation is not optional — it is a legal and ethical obligation.</p>

                <h3>Identifying Affected Individuals</h3>
                <p>A forensic review of decisions made during the affected period is required. This involves: reconstructing the model's behaviour during the incident window; identifying all decisions that may have been affected; cross-referencing with individual records to locate affected parties.</p>

                <h3>Remediation Approaches</h3>
                <ul>
                    <li><strong>Review and overturn decisions:</strong> Manually re-assess all affected decisions using corrected processes</li>
                    <li><strong>Redress:</strong> Where harm has occurred (e.g., wrongly denied benefit), provide appropriate remedy (payment, reinstatement, written apology)</li>
                    <li><strong>Notification:</strong> Inform affected individuals of the incident, its impact, and the remediation steps taken</li>
                    <li><strong>Appeals support:</strong> Facilitate appeals for those who believe they were affected but are not in the identified population</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Legal Obligations</div>
                    <p>Failure to notify affected individuals of a material AI incident — particularly one involving personal data processing — may constitute a breach of UK GDPR obligations. Seek legal advice early in the incident response process to understand notification and remediation obligations.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'An AI benefits system is found to have incorrectly denied payments to approximately 200 individuals over a three-month period due to a model error. What must happen first?',
                    options: [
                        'Retrain the model before taking any other action',
                        'Report the incident to the ICO before investigating',
                        'Contain ongoing harm — suspend automated decisions for affected case types while investigating',
                        'Communicate to the media to manage reputational risk'
                    ],
                    correct: 2,
                    explanation: 'Containment is the immediate priority — stopping ongoing harm while investigation proceeds. Retraining comes in the remediation phase after root cause is established. ICO reporting obligations exist but are assessed during investigation. Media management follows, not precedes, harm containment.'
                },
                {
                    type: 'multiple-choice',
                    question: 'A privacy breach involving AI processing of personal data must be reported to the ICO within:',
                    options: ['24 hours', '48 hours', '72 hours', '7 days'],
                    correct: 2,
                    explanation: 'UK GDPR Article 33 requires reporting a personal data breach to the ICO without undue delay and, where feasible, within 72 hours of becoming aware. AI incidents involving personal data — including unauthorised exposure of training data or model outputs — are subject to this requirement.'
                },
                {
                    type: 'free-text',
                    question: 'Six months after deploying an AI triage system for social care referrals, an analysis reveals that referrals from one postcode area have been disproportionately flagged as low-priority, resulting in delayed interventions. Describe your full incident response.',
                    sampleAnswer: 'Detection and triage: Log the incident immediately; classify as critical (fairness violation with potential harm to vulnerable individuals); escalate to system owner and senior leadership; appoint an incident lead. Containment: Immediately increase human oversight for all cases from the affected postcode — suspend automated low-priority classifications for these referrals pending review; brief social care team leads on the issue without causing alarm. Investigation: Reconstruct model behaviour for the affected period; determine root cause (training data coverage of the postcode, proxy variable for socioeconomic characteristics, or other bias source); identify all cases that received low-priority classification from the affected area. Remediation: Re-review all identified cases manually; prioritise and escalate any that should have received urgent intervention; provide additional social care resource to address the backlog; notify affected individuals appropriately; report to the ICO if personal data processing obligations were breached. Recovery: Retrain or recalibrate the model with corrected or augmented training data; verify fairness metrics across all postcodes before redeployment; increase monitoring frequency for geographic fairness indicators. Post-incident: Publish internal lessons-learned report; update the model card, DPIA, and AIA to reflect the incident; review whether other AI systems in the portfolio have similar geographic data coverage gaps; consider whether affected individuals require formal redress.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 4-5: Change Management & System Updates
// ============================================
Object.assign(COURSE_4_CONTENT, {
    'course-4-5': {
        title: 'Change Management & System Updates',
        sections: [
            {
                title: 'Why AI Change Management is Different',
                content: `<p>In traditional software, a change is a modification to code or configuration. In AI, a change can also be a modification to training data, a retrain of an existing model on new data, or a shift in the deployment context — none of which involve touching the code at all. AI change management must cover all of these categories.</p>

                <h3>Types of AI System Changes</h3>
                <table class="content-table">
                    <thead><tr><th>Change Type</th><th>Example</th><th>Governance Risk</th></tr></thead>
                    <tbody>
                        <tr><td>Code change</td><td>New feature, bug fix, framework upgrade</td><td>May affect model behaviour indirectly</td></tr>
                        <tr><td>Model update</td><td>Retrain on more recent data; new algorithm</td><td>Can significantly change fairness and performance profile</td></tr>
                        <tr><td>Data change</td><td>New data sources added to training pipeline</td><td>May introduce new biases or shift distribution</td></tr>
                        <tr><td>Configuration change</td><td>Decision threshold adjusted</td><td>Direct impact on outcomes; may require new approval</td></tr>
                        <tr><td>Context change</td><td>System used for a new use case or population</td><td>Original validation may not apply; full re-assessment needed</td></tr>
                        <tr><td>Regulatory change</td><td>New law affects what the system can legally do</td><td>May require immediate system modification or suspension</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">Context Changes are High-Risk</div>
                    <p>Extending an AI system to a new population or use case without reassessment is one of the highest-risk governance failures. A model validated on one context may perform poorly or discriminate in another.</p>
                </div>`
            },
            {
                title: 'Change Control Process',
                content: `<p>Every material change to an AI system should pass through a defined change control process before being deployed to production.</p>

                <h3>Change Control Stages</h3>
                <ol>
                    <li><strong>Change request:</strong> Document what is changing, why, and what the expected impact is. Assign a change owner.</li>
                    <li><strong>Impact assessment:</strong> Evaluate technical, performance, fairness, privacy, and governance impacts. Determine whether existing approvals (DPIA, AIA) remain valid or need updating.</li>
                    <li><strong>Testing:</strong> Run the full validation suite against the changed system, including fairness and subgroup analysis. Compare results to the previous baseline.</li>
                    <li><strong>Approval:</strong> Obtain sign-off at the appropriate authority level. Minor changes may be approved by the system owner; major changes require governance board review.</li>
                    <li><strong>Deployment:</strong> Deploy with rollback capability. Increase monitoring intensity post-deployment.</li>
                    <li><strong>Review:</strong> Confirm post-deployment performance matches testing results. Update documentation.</li>
                </ol>

                <h3>What Constitutes a Major Change?</h3>
                <p>Define major change criteria upfront. Typical triggers: model algorithm changes; retraining on substantially different data; threshold adjustments affecting more than X% of decisions; extension to new populations or use cases; changes affecting compliance with legal obligations.</p>`
            },
            {
                title: 'Decommissioning AI Systems',
                content: `<p>AI systems have an end of life, and decommissioning must be as carefully governed as deployment. Poorly managed decommissioning can leave data exposed, create service gaps, or abandon affected individuals without recourse.</p>

                <h3>Decommissioning Triggers</h3>
                <ul>
                    <li>System no longer serves its intended purpose or is superseded by a better system</li>
                    <li>Performance has degraded below acceptable thresholds and cannot be restored</li>
                    <li>Legal or regulatory requirements have changed, making operation non-compliant</li>
                    <li>Data on which the model depends is no longer available or valid</li>
                    <li>Risk level has increased beyond organisational tolerance</li>
                </ul>

                <h3>Decommissioning Checklist</h3>
                <ul>
                    <li>Communicate decommissioning date to all stakeholders with adequate notice</li>
                    <li>Ensure a transition process exists for affected services and individuals</li>
                    <li>Archive model artefacts, documentation, and logs per retention policy</li>
                    <li>Delete personal data per GDPR obligations (or fulfil archiving obligations for specified datasets)</li>
                    <li>Update the AI register to reflect decommissioned status</li>
                    <li>Conduct a decommissioning review: what worked, what did not, what would you do differently?</li>
                    <li>Preserve lessons learned to inform future AI deployments</li>
                </ul>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A government AI system validated for assessing grant applications is proposed for use in assessing loan applications from the same population. What change category does this represent?',
                    options: [
                        'Minor configuration change — no reassessment needed',
                        'Code change — only technical review required',
                        'Context change — full re-assessment including fairness testing and DPIA update required',
                        'Data change — only training data review needed'
                    ],
                    correct: 2,
                    explanation: 'Extending an AI system to a new use case (grants to loans) is a context change — one of the highest-risk change types. The original validation was for grant assessment; loan assessment involves different risk profiles, legal obligations, and outcome impacts. A full re-assessment is required.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Before decommissioning an AI system that has made decisions affecting citizens, what must be ensured?',
                    options: [
                        'The model weights are published as open source',
                        'A transition process exists for affected services and individuals, and data is handled per GDPR obligations',
                        'The system is replaced by a newer AI model before being switched off',
                        'All accuracy metrics have been re-run and documented for the final version'
                    ],
                    correct: 1,
                    explanation: 'Decommissioning must protect affected individuals (transition process, ability to submit ongoing complaints or appeals), comply with GDPR obligations (data deletion or archiving), and update the AI register. Replacing with another AI model or publishing model weights are not required.'
                },
                {
                    type: 'free-text',
                    question: 'Your AI model for prioritising housing repairs is due to be retrained on two years of additional repair data. Describe the change control process you would follow.',
                    sampleAnswer: 'Change request: Document the proposed retrain — what data is being added, the date range, any preprocessing changes, and why the retrain is needed. Assign a change owner (AI system owner) and log in the change management system. Impact assessment: Assess whether the new data introduces new geographic coverage, changes the distribution of repair types, or includes any events (e.g., major weather events) that could create unusual patterns; evaluate whether existing DPIA and AIA remain valid; flag if any new data sources constitute a change in lawful basis for processing. Testing: Run full validation suite including: accuracy and subgroup performance analysis, fairness metrics disaggregated by postcode and property type, robustness testing, comparison of new model outputs vs current model on a shared test set; document all results and compare to approved baseline. Approval: Present test results to system owner and governance board; obtain formal sign-off with documented rationale; update model card with new version, training data period, and updated performance metrics. Deployment: Deploy with rollback to current model version available; increase monitoring frequency for the first month post-deployment to confirm production performance matches test results. Post-deployment review: After 30 days, confirm performance and fairness metrics are within approved thresholds; update the AI register with new version details and deployment date; archive previous model version per retention policy.'
                }
            ]
        }
    }
});

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

// ============================================
// COURSE 4-6: Operations Assessment & Certification
// ============================================
Object.assign(COURSE_4_CONTENT, {
    'course-4-6': {
        title: 'Operations Assessment & Certification',
        sections: [
            {
                title: 'Course 4 Review: AI Implementation & Operations',
                content: `<p>This capstone module consolidates operational governance knowledge from Course 4. Review the key concepts before attempting the certification assessment.</p>

                <h3>Module Summary</h3>
                <table class="content-table">
                    <thead><tr><th>Module</th><th>Core Concept</th><th>Key Requirement</th></tr></thead>
                    <tbody>
                        <tr><td>4.1 Procurement</td><td>AI procurement needs specialist governance criteria</td><td>Pre-defined performance and fairness thresholds; AI-specific contract clauses</td></tr>
                        <tr><td>4.2 Human Oversight</td><td>Human-in-the-loop must be genuine, not rubber-stamping</td><td>Meaningful review with authority to override; right to contest</td></tr>
                        <tr><td>4.3 Monitoring</td><td>Monitoring must cover performance, fairness, drift, and quality</td><td>Defined alert thresholds, escalation paths, and governance reporting cadence</td></tr>
                        <tr><td>4.4 Incident Response</td><td>AI incidents require structured response and remediation of affected individuals</td><td>72-hour ICO reporting for data breaches; five-phase response process</td></tr>
                        <tr><td>4.5 Change Management</td><td>Context changes are highest-risk AI change type</td><td>Change control process covering all change types; decommissioning governance</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">Certification Standard</div>
                    <p>Score 80% or above on the assessment to earn the Course 4 certificate. Questions test integrated operational governance judgement across the full AI lifecycle.</p>
                </div>`
            },
            {
                title: 'Integrated Operations Scenario',
                content: `<p>Review this scenario before the assessment. It draws on all five Course 4 modules.</p>

                <h3>Scenario: AI Fraud Detection in Procurement</h3>
                <p>A central government procurement team has deployed an AI system that flags potentially fraudulent supplier bids for human review. Eighteen months post-deployment, the monitoring dashboard shows: (1) overall accuracy is within thresholds; (2) supplier bids from SMEs are flagged at 2.3x the rate of large corporations; (3) one procurement officer is overriding 67% of AI flags without documentation; (4) the vendor has issued a model update notification for next month.</p>

                <h3>Analysis by Module</h3>
                <ul>
                    <li><strong>4.3 Monitoring:</strong> The SME disparity exceeds fair treatment thresholds — escalate as a warning/critical alert. The 67% override rate requires investigation — is the model misaligned with policy, or is the officer avoiding scrutiny?</li>
                    <li><strong>4.4 Incident Response:</strong> The SME disparity is a potential fairness incident. Log formally; investigate whether SMEs have been disadvantaged; assess whether affected bids need re-review.</li>
                    <li><strong>4.5 Change Management:</strong> The vendor's model update requires change control. Commission impact assessment before the update is applied; do not accept the update without fresh fairness testing.</li>
                    <li><strong>4.2 Oversight:</strong> The officer's undocumented overrides are a governance failure. Audit override records; require documentation for all overrides; brief the team on human oversight obligations.</li>
                </ul>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A monitoring dashboard shows an AI procurement system flags SME bids at 2.3x the rate of large corporations. The correct immediate response is:',
                    options: [
                        'Ignore the disparity as it may reflect genuine risk differences between SMEs and large firms',
                        'Escalate as a potential fairness incident; investigate whether the disparity reflects bias or legitimate risk signals',
                        'Retrain the model immediately to equalise flag rates',
                        'Disable the AI system until the disparity is resolved'
                    ],
                    correct: 1,
                    explanation: 'A 2.3x disparity warrants investigation, not immediate action either way. The disparity could reflect genuine risk differences OR bias in the training data. A formal investigation — examining the model\'s feature weights, training data coverage of SMEs, and impact on real decisions — is required before conclusions are drawn.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Before applying a vendor\'s model update notification, what governance step is mandatory?',
                    options: [
                        'Notify the ICO that a model update is occurring',
                        'Complete the change control process including impact assessment and fairness testing of the updated model',
                        'Obtain approval from the Cabinet Office digital team',
                        'Publish a public notice of the model update on the department\'s website'
                    ],
                    correct: 1,
                    explanation: 'Every model update must pass through the change control process: impact assessment, testing (including fairness and subgroup analysis), comparison against the previous baseline, and formal approval before deployment to production.'
                },
                {
                    type: 'free-text',
                    question: 'As AI Operations Lead, you have just been notified that an AI used to screen job applications for a government department has been running for six months without any monitoring in place. Describe your response and the governance gaps this reveals.',
                    sampleAnswer: 'Immediate response: (1) Pause further automated screening decisions immediately pending review; (2) Commission an emergency audit of all decisions made over the six months — run fairness analysis across protected characteristics on the full output dataset; (3) If any significant disparities are found, treat as a fairness incident: log formally, escalate to SRO, and commence incident response; (4) Assess whether any individuals may have been disadvantaged — if so, re-review affected applications manually and consider notification. Governance gaps revealed: Absence of a monitoring plan at deployment — a fundamental violation of governance standards; no defined system owner with operational responsibility; no escalation path, meaning problems could not have been reported; likely gaps in documentation (model card, DPIA) if monitoring was not established at deployment; possibly no change management or review schedule. Remediation: Establish monitoring immediately with all required metrics and alert thresholds; conduct a full governance retrospective to understand how this was allowed; update the AI register with correct status; complete or update all documentation; brief the team responsible on operational governance obligations; consider whether existing approvals (DPIA, AIA) need to be re-assessed given the undocumented operation period.'
                }
            ]
        }
    }
});

// ============================================
// COURSE 5-2: Leading Ethical AI Culture
// ============================================
Object.assign(COURSE_5_CONTENT, {
    'course-5-2': {
        title: 'Leading Ethical AI Culture',
        sections: [
            {
                title: 'Culture as the Foundation of AI Governance',
                content: `<p>Technical controls and documentation frameworks are necessary but insufficient for responsible AI. An organisation can have comprehensive policies and still deploy harmful AI systems if the culture does not support raising concerns, questioning assumptions, or prioritising ethics alongside efficiency.</p>

                <h3>What AI Culture Looks Like in Practice</h3>
                <table class="content-table">
                    <thead><tr><th>Dimension</th><th>Weak Culture</th><th>Strong Culture</th></tr></thead>
                    <tbody>
                        <tr><td>Psychological safety</td><td>Staff fear reprisal for raising concerns about AI systems</td><td>Staff at all levels feel safe flagging ethics concerns without fear</td></tr>
                        <tr><td>Leadership signals</td><td>Leaders prioritise delivery speed; governance seen as bureaucracy</td><td>Leaders publicly champion responsible AI; delay a project when ethics concerns arise</td></tr>
                        <tr><td>Incentive structures</td><td>Teams rewarded only for delivery pace and cost; ethics not measured</td><td>Ethics performance is part of team and individual objectives</td></tr>
                        <tr><td>Learning orientation</td><td>Incidents are suppressed or minimised</td><td>Near-misses are actively shared as learning opportunities</td></tr>
                        <tr><td>Diversity of perspective</td><td>AI teams are homogeneous; affected communities not consulted</td><td>Diverse teams; structured engagement with affected communities</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">The Leader's Role</div>
                    <p>Culture is set by what leaders do, not what they say. If senior leaders override governance processes for convenience, bypass reviews under time pressure, or minimise ethics incidents, the organisation will quickly learn that governance is optional.</p>
                </div>`
            },
            {
                title: 'Building Psychological Safety for AI Ethics',
                content: `<p>Psychological safety — the belief that you will not be punished for speaking up — is the single most important cultural enabler of AI governance. Without it, governance bodies receive filtered information and concerns are suppressed until they become incidents.</p>

                <h3>Practical Leadership Actions</h3>
                <ul>
                    <li><strong>Model vulnerability:</strong> Leaders who acknowledge uncertainty about AI and openly ask ethical questions create permission for others to do the same</li>
                    <li><strong>Celebrate raising concerns:</strong> Publicly acknowledge and thank staff who flag governance issues, even when it creates inconvenience</li>
                    <li><strong>Separate learning from blame:</strong> Post-incident reviews should focus on system and process improvement, not individual culpability (except in cases of deliberate misconduct)</li>
                    <li><strong>Create safe channels:</strong> Provide mechanisms (formal and informal) for staff to raise concerns without direct line manager involvement</li>
                    <li><strong>Follow through:</strong> Concerns that are raised but ignored corrode psychological safety faster than no mechanism at all</li>
                </ul>

                <h3>Ethics Champions</h3>
                <p>Designating AI ethics champions within teams — individuals with informal authority to raise ethics questions during project delivery — creates distributed ethical oversight that supplements formal governance processes.</p>`
            },
            {
                title: 'Embedding Ethics in Team Processes',
                content: `<p>Culture is built through habits and routines, not declarations. Embedding ethics into the way teams work daily is more effective than periodic ethics training alone.</p>

                <h3>Ethics Integration Points</h3>
                <ul>
                    <li><strong>Project inception:</strong> Ethics canvas exercise at kick-off — who could be harmed, what could go wrong, what assumptions are we making?</li>
                    <li><strong>Sprint reviews:</strong> Standing question: "What ethics risks have we observed this sprint?"</li>
                    <li><strong>Architecture decisions:</strong> Ethics review as part of design authority process</li>
                    <li><strong>Deployment gates:</strong> Ethics sign-off as a mandatory gate alongside technical and security sign-off</li>
                    <li><strong>Post-deployment reviews:</strong> Ethics review included in operational performance reviews</li>
                </ul>

                <h3>Avoiding Ethics Theatre</h3>
                <p>Ethics theatre is the performance of ethical process without substantive ethical reasoning. Signs include: ethics reviews that always conclude "no concerns"; governance bodies that approve all submissions; ethics documentation completed after the fact to justify already-made decisions. Counter-theatre by requiring substantive written analysis, tracking concerns raised, and measuring whether governance bodies ever stop or modify projects.</p>

                <div class="info-box tip">
                    <div class="info-box-title">Measurement</div>
                    <p>What you measure shapes culture. Track and report: number of ethics concerns raised per quarter; percentage of AI projects that were modified or delayed due to ethics review; percentage of ethics champion roles filled; training completion rates by team.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Which indicator most strongly suggests "ethics theatre" rather than genuine ethical governance?',
                    options: [
                        'Ethics reviews consistently take longer than technical reviews',
                        'A governance body has never modified or rejected a project proposal',
                        'The ethics team is smaller than the technical team',
                        'Ethics training completion rates are below 100%'
                    ],
                    correct: 1,
                    explanation: 'A governance body that approves every submission is likely conducting ethics theatre — the process creates an appearance of oversight without substantive challenge. Genuine governance bodies modify or reject some proposals; a 100% approval rate is evidence that the review is not functioning as intended.'
                },
                {
                    type: 'multiple-choice',
                    question: 'A team member raises an ethics concern about a high-priority AI project two weeks before its planned launch. The correct leadership response is:',
                    options: [
                        'Thank them privately but proceed with launch to avoid delay',
                        'Launch on schedule; review ethics concerns in the first post-deployment review',
                        'Investigate the concern seriously, and be prepared to delay or modify the launch if the concern is substantiated',
                        'Escalate the concern to the ethics committee for resolution at their next quarterly meeting'
                    ],
                    correct: 2,
                    explanation: 'A substantive ethics concern before deployment must be investigated before launch, not after. Proceeding with launch when a concern has been raised — and not yet addressed — is a governance failure that also destroys psychological safety for future concern-raising.'
                },
                {
                    type: 'free-text',
                    question: 'You are leading a government department\'s AI ethics culture programme. Describe three concrete actions you would take in the first 90 days to build genuine ethical culture rather than ethics theatre.',
                    sampleAnswer: 'Action 1 — Leadership behaviour: Work with the Director General to publicly delay or modify one visible AI project based on an ethics review finding. Nothing signals genuine commitment like a senior leader demonstrating that governance has real consequences. Avoid the temptation to pick a low-stakes example — use a real project where delivery pressure exists. Action 2 — Embed in process: Add a mandatory ethics checkpoint to the project gateway process with a requirement for substantive written analysis (not a checkbox). Track and report the number of projects modified at each gate. If every project passes unchanged, investigate whether the checkpoint is functioning. Action 3 — Safety infrastructure: Launch a named Ethics Concerns channel with a clear process and a commitment that all concerns will receive a written response within 10 working days. Designate ethics champions in each AI team. In the first quarterly report, publicly share (anonymised) examples of concerns raised and how they were addressed — demonstrating that raising concerns leads to action, not silence.'
                }
            ]
        }
    }
});

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
