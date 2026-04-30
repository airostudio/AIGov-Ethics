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
