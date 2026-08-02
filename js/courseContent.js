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
    },
    'course-2-3': {
        title: 'Explainability & Interpretability',
        sections: [
            {
                title: 'Why Explainability Matters',
                content: `<p>Explainability is the ability to describe, in terms a human can understand, why an AI system produced a particular output. It sits alongside but is distinct from interpretability - the degree to which a model's internal mechanics can be understood directly, without a separate explanation layer.</p>

                <h3>The Legal and Ethical Drivers</h3>
                <ul>
                    <li><strong>GDPR Article 22:</strong> Individuals subject to solely automated decisions with legal or similarly significant effects have a right to "meaningful information about the logic involved."</li>
                    <li><strong>EU AI Act Article 13:</strong> High-risk AI systems must be designed to allow deployers to interpret system output and use it appropriately, with instructions for use covering the system's characteristics and limitations.</li>
                    <li><strong>Administrative law:</strong> Government decisions generally must be justified and open to challenge - a decision citizens cannot understand is one they cannot meaningfully appeal.</li>
                </ul>

                <h3>Interpretable vs. Explainable</h3>
                <table class="content-table">
                    <thead>
                        <tr><th>Approach</th><th>Description</th><th>Trade-off</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Intrinsically interpretable</strong></td><td>Simple models (linear/logistic regression, decision trees, rule lists) whose logic can be read directly</td><td>Easy to audit, often lower predictive accuracy on complex data</td></tr>
                        <tr><td><strong>Post-hoc explainable</strong></td><td>Complex "black box" models (deep neural networks, gradient-boosted ensembles) paired with a separate explanation technique</td><td>Higher accuracy, but explanations are approximations of the model's true reasoning, not the reasoning itself</td></tr>
                    </tbody>
                </table>

                <div class="info-box warning">
                    <div class="info-box-title">A Critical Caveat</div>
                    <p>Post-hoc explanation techniques describe correlations the explanation method found, not necessarily the actual causal logic the model used. Two different explanation methods can plausibly disagree about the same prediction. Treat post-hoc explanations as useful evidence, not ground truth.</p>
                </div>`
            },
            {
                title: 'Explainability Techniques in Practice',
                content: `<p>IT professionals overseeing AI systems should be familiar with the major families of explanation technique, even without implementing them personally.</p>

                <h3>Feature Importance Methods</h3>
                <ul>
                    <li><strong>SHAP (SHapley Additive exPlanations):</strong> Assigns each input feature a contribution value for a specific prediction, grounded in cooperative game theory. Widely used because it provides both local (single-prediction) and global (whole-model) explanations.</li>
                    <li><strong>LIME (Local Interpretable Model-agnostic Explanations):</strong> Approximates a complex model's behavior near a single prediction with a simple, interpretable local model.</li>
                    <li><strong>Permutation importance:</strong> Measures how much a model's performance degrades when a feature's values are randomly shuffled, indicating how much the model relies on that feature overall.</li>
                </ul>

                <h3>Counterfactual Explanations</h3>
                <p>Rather than describing why a decision was made, counterfactuals describe what would need to change for a different outcome: "Your application would have been approved if your reported income had been $4,000 higher." These are often the most useful explanation for an affected citizen, since they point directly to actionable next steps.</p>

                <h3>Example-Based Explanations</h3>
                <p>Showing similar past cases and their outcomes ("this application was treated similarly to these three prior cases") can build trust and aid review without requiring any technical explanation of the model itself.</p>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Open-source libraries such as SHAP, LIME, and Google's What-If Tool implement these techniques and integrate with common ML frameworks, making explanation generation accessible without building custom tooling.</p>
                </div>`
            },
            {
                title: 'Matching Explanations to the Audience',
                content: `<p>A single technical explanation rarely serves everyone who needs one. Effective explainability programs tailor the form of explanation to who is asking.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Audience</th><th>What They Need</th><th>Appropriate Format</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Affected citizen</td><td>Why did this happen to me, and what can I do about it?</td><td>Plain-language summary + counterfactual ("what would change the outcome")</td></tr>
                        <tr><td>Case worker / reviewer</td><td>Enough detail to judge whether to override the recommendation</td><td>Top contributing factors with confidence level</td></tr>
                        <tr><td>Auditor / regulator</td><td>Evidence the system behaves as documented and without prohibited bias</td><td>Full technical documentation, aggregate feature importance, subgroup performance</td></tr>
                        <tr><td>Developer / data scientist</td><td>Debugging information to diagnose and fix issues</td><td>Detailed model internals, training data lineage, error analysis</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">Governance Checkpoint</div>
                    <p>Before deployment, confirm that every audience who will legitimately ask "why did the system decide this?" has an explanation format designed for them - not just whatever technical output the development team happened to produce for their own debugging purposes.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A citizen denied a benefit wants to know what they could do differently to be approved. Which explanation type directly answers this?',
                    options: ['Global feature importance', 'Counterfactual explanation', 'Model architecture diagram', 'Permutation importance'],
                    correct: 1,
                    explanation: 'Counterfactual explanations describe what would need to change for a different outcome, directly answering "what could I do differently."'
                },
                {
                    type: 'multiple-choice',
                    question: 'Why should post-hoc explanations (like SHAP or LIME) be treated as evidence rather than ground truth?',
                    options: [
                        'They are always inaccurate',
                        'They describe correlations the explanation method found, which may approximate but not equal the model\'s actual internal reasoning',
                        'They only work for simple linear models',
                        'They cannot be used for regulatory compliance'
                    ],
                    correct: 1,
                    explanation: 'Post-hoc methods approximate a complex model\'s behavior; different methods can produce differing explanations for the same prediction, so they should be treated as useful evidence, not definitive proof of the model\'s reasoning.'
                }
            ]
        }
    },
    'course-2-4': {
        title: 'Privacy-Preserving AI',
        sections: [
            {
                title: 'Privacy Risks Unique to AI Systems',
                content: `<p>AI systems create privacy risks that go beyond traditional data storage and access concerns, because trained models can themselves leak information about the data used to train them.</p>

                <h3>AI-Specific Privacy Risks</h3>
                <ul>
                    <li><strong>Membership inference:</strong> An attacker determines whether a specific individual's data was used to train a model, which can itself be sensitive (e.g., confirming someone was a patient in a specific treatment program).</li>
                    <li><strong>Model inversion:</strong> An attacker reconstructs approximations of training data (such as a face associated with a name) by repeatedly querying a model.</li>
                    <li><strong>Training data memorization:</strong> Large models can memorize and later reproduce verbatim snippets of training data, including personal information that was never meant to be disclosed.</li>
                    <li><strong>Re-identification:</strong> Combining "anonymized" outputs with other available datasets can re-identify individuals thought to be protected by anonymization.</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Anonymization Is Not Foolproof</div>
                    <p>Removing direct identifiers (name, ID number) is often insufficient. Research has repeatedly shown that supposedly anonymized datasets can be re-identified by cross-referencing with other public data sources. Genuine privacy protection requires stronger techniques than simple field removal.</p>
                </div>`
            },
            {
                title: 'Privacy-Enhancing Technologies',
                content: `<p>A growing toolkit of techniques allows AI systems to learn from data while formally limiting what can be inferred about any individual in that data.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Technique</th><th>How It Works</th><th>Government Use Case</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Differential privacy</strong></td><td>Adds calibrated statistical noise to data or model outputs, providing a mathematical guarantee limiting what can be learned about any single individual</td><td>Publishing aggregate census or statistical data</td></tr>
                        <tr><td><strong>Federated learning</strong></td><td>Trains a shared model across decentralized devices or servers without the raw data ever leaving its source</td><td>Training models across hospitals or agencies without centralizing sensitive records</td></tr>
                        <tr><td><strong>Synthetic data</strong></td><td>Generates artificial data that preserves the statistical properties of real data without corresponding to real individuals</td><td>Sharing realistic datasets with researchers or vendors for testing</td></tr>
                        <tr><td><strong>Secure multi-party computation</strong></td><td>Multiple parties jointly compute a result over their combined data without any party seeing the others' raw inputs</td><td>Cross-agency fraud detection without full data sharing</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">No Silver Bullet</div>
                    <p>Each technique involves trade-offs between privacy protection, model accuracy, and computational cost. Differential privacy's noise can reduce accuracy for smaller subgroups; federated learning adds engineering complexity. Select techniques based on the specific risk profile of the data and use case.</p>
                </div>`
            },
            {
                title: 'Privacy by Design in Government AI',
                content: `<p>Beyond specific technologies, privacy-preserving AI requires embedding privacy considerations throughout the system lifecycle.</p>

                <h3>Core Principles</h3>
                <ul>
                    <li><strong>Data minimization:</strong> Collect and retain only the data genuinely necessary for the stated purpose - not everything that might one day be useful.</li>
                    <li><strong>Purpose limitation:</strong> Use data only for the purpose it was collected for; repurposing citizen data for a new AI application typically requires fresh legal basis and, often, a new Data Protection Impact Assessment (DPIA).</li>
                    <li><strong>Storage limitation:</strong> Define and enforce retention periods; don't keep training data indefinitely "just in case."</li>
                    <li><strong>Access control:</strong> Limit who can query models and access outputs, particularly for systems where model inversion or membership inference is a realistic risk.</li>
                </ul>

                <h3>Data Protection Impact Assessments (DPIAs)</h3>
                <p>Most data protection regimes (including GDPR) require a DPIA before deploying AI systems that involve high-risk processing of personal data. A thorough DPIA for an AI system should document: the data used and its source, the privacy risks specific to the AI technique employed, mitigations applied, and residual risk accepted by an accountable owner.</p>

                <div class="info-box example">
                    <div class="info-box-title">Case in Point</div>
                    <p>A revenue agency building a fraud-detection model should ask: does the training set include data from taxpayers who were never suspected of fraud, and if so, is that use within the original purpose for which their data was collected? Building the model may require a new legal basis and citizen notice, not just technical safeguards.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'What privacy risk allows an attacker to determine whether a specific person\'s data was used to train a model?',
                    options: ['Model inversion', 'Membership inference', 'Data minimization failure', 'Purpose limitation breach'],
                    correct: 1,
                    explanation: 'Membership inference attacks determine whether specific individuals\' data was part of a model\'s training set, which can itself reveal sensitive information.'
                },
                {
                    type: 'free-text',
                    question: 'Why is removing names and ID numbers from a dataset often insufficient to protect privacy?',
                    sampleAnswer: 'Simple field removal does not prevent re-identification through cross-referencing with other available datasets - research has repeatedly shown that combinations of seemingly innocuous fields (like birth date, zip code, and gender) can uniquely identify individuals. Genuine protection requires stronger techniques like differential privacy that provide formal mathematical guarantees rather than relying on the absence of obvious identifiers.'
                }
            ]
        }
    },
    'course-2-5': {
        title: 'Testing & Validation for AI',
        sections: [
            {
                title: 'Why Traditional Software Testing Falls Short',
                content: `<p>Conventional software testing verifies that code behaves according to a fixed specification: given input X, the program should produce output Y. AI systems break this model in several important ways.</p>

                <h3>What Makes AI Testing Different</h3>
                <ul>
                    <li><strong>No fixed specification:</strong> A model's behavior is learned from data, not written as explicit rules - there is no single "correct" line of code to inspect for a given decision.</li>
                    <li><strong>Statistical, not deterministic, correctness:</strong> A model that is 92% accurate is not "broken" for the 8% of cases it gets wrong - the question is whether errors are acceptable, evenly distributed, and safely handled.</li>
                    <li><strong>Distributional dependence:</strong> A model tested as accurate on historical data can degrade sharply when real-world conditions shift (model drift), even with no code changes at all.</li>
                    <li><strong>Emergent failure modes:</strong> Complex models can fail in ways developers never anticipated or explicitly tested for, especially on inputs unlike anything in the training data.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">Reframing the Question</div>
                    <p>Traditional testing asks "does the code do what we specified?" AI testing must ask a broader question: "does the system behave acceptably across the full range of situations it will actually encounter, including ones we didn't anticipate?"</p>
                </div>`
            },
            {
                title: 'A Multi-Layered Testing Framework',
                content: `<p>Comprehensive AI testing combines several complementary layers, each catching different classes of problems.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Testing Layer</th><th>Purpose</th><th>Example</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Functional testing</strong></td><td>Confirms overall accuracy/performance meets targets on held-out data</td><td>Overall accuracy, precision, recall on a test set</td></tr>
                        <tr><td><strong>Subgroup performance testing</strong></td><td>Confirms performance is consistent across demographic and use-case subgroups</td><td>Comparing false-negative rates across age groups</td></tr>
                        <tr><td><strong>Robustness / adversarial testing</strong></td><td>Confirms the system resists deliberate attempts to manipulate its output</td><td>Testing whether small, deliberate input changes flip a decision</td></tr>
                        <tr><td><strong>Edge-case / scenario testing</strong></td><td>Confirms sensible behavior on rare or unusual inputs</td><td>Testing behavior on incomplete applications or unusual family structures</td></tr>
                        <tr><td><strong>Red-teaming</strong></td><td>A dedicated team actively tries to find failure modes before deployment</td><td>Attempting to trick a chatbot into giving prohibited advice</td></tr>
                        <tr><td><strong>Integration testing</strong></td><td>Confirms the model behaves correctly within the full surrounding system</td><td>Testing that human review triggers correctly for flagged cases</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Budget testing effort proportionally to risk. A high-stakes system affecting benefits eligibility warrants all six layers; a low-stakes internal tool may only need functional and integration testing.</p>
                </div>`
            },
            {
                title: 'Validation Doesn\'t Stop at Deployment',
                content: `<p>Pre-deployment testing establishes a baseline, but AI systems require ongoing validation because their operating environment keeps changing after launch.</p>

                <h3>Post-Deployment Validation Practices</h3>
                <ul>
                    <li><strong>Drift monitoring:</strong> Continuously compare the statistical properties of live input data against training data to detect when the world has changed enough to affect model accuracy.</li>
                    <li><strong>Shadow testing:</strong> Run a new or updated model alongside the production model on live data without acting on its outputs, comparing results before fully switching over.</li>
                    <li><strong>Canary releases:</strong> Roll out model updates to a small percentage of cases first, monitoring closely before expanding to full production traffic.</li>
                    <li><strong>Periodic re-validation:</strong> Schedule regular reassessment of fairness and accuracy metrics, not just a one-time pre-launch check, since real-world populations and behaviors shift over time.</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Common Pitfall</div>
                    <p>Treating the pre-deployment test report as a permanent certificate of correctness is one of the most common AI governance failures. A model validated as fair and accurate at launch can become biased or inaccurate within months as populations, behaviors, or upstream data sources change - ongoing validation is not optional.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Why is traditional software testing insufficient on its own for AI systems?',
                    options: [
                        'AI systems never contain bugs',
                        'AI behavior is learned from data and can degrade due to real-world distributional shifts, not just code defects',
                        'AI systems cannot be tested at all',
                        'Traditional testing is too expensive for AI'
                    ],
                    correct: 1,
                    explanation: 'AI systems learn behavior from data rather than following a fixed specification, and can degrade due to model drift even without any code changes - something traditional testing approaches don\'t account for.'
                },
                {
                    type: 'multiple-choice',
                    question: 'What is "shadow testing" in the context of AI system validation?',
                    options: [
                        'Testing a model in a completely dark room',
                        'Running a new model alongside the production model on live data without acting on its outputs, to compare results before switching over',
                        'Testing only with synthetic data',
                        'A form of adversarial attack on the model'
                    ],
                    correct: 1,
                    explanation: 'Shadow testing runs a candidate model in parallel with the live production model, comparing outputs on real data without letting the candidate model\'s outputs affect any actual decisions, reducing deployment risk.'
                }
            ]
        }
    },
    'course-2-6': {
        title: 'Technical Assessment & Certification',
        sections: [
            {
                title: 'Course Summary',
                content: `<p>This technical module has equipped you with the practical knowledge IT professionals need to evaluate and oversee AI systems from an ethics and safety perspective:</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li><strong>Algorithmic Bias:</strong> Bias enters AI systems through historical, representation, measurement, aggregation, evaluation, and deployment pathways - and requires deliberate detection, not just good intentions.</li>
                    <li><strong>Fairness Metrics:</strong> Different mathematical fairness definitions (demographic parity, equal opportunity, equalized odds, predictive parity) can conflict, requiring deliberate, documented choices based on context.</li>
                    <li><strong>Explainability:</strong> Different audiences need different types of explanation - a technically accurate SHAP plot means little to an affected citizen who needs a plain-language counterfactual.</li>
                    <li><strong>Privacy-Preserving AI:</strong> AI introduces privacy risks beyond traditional data storage, including membership inference and model inversion, requiring purpose-built privacy-enhancing technologies.</li>
                    <li><strong>Testing & Validation:</strong> AI systems require multi-layered testing (functional, subgroup, robustness, edge-case, red-team) and continuous post-deployment validation, not a one-time pre-launch check.</li>
                </ul>

                <h3>Next Steps</h3>
                <p>With this technical foundation, you're ready to proceed to:</p>
                <ul>
                    <li><strong>Course 3:</strong> Regulatory Compliance & Risk Management - how these technical practices map to specific legal requirements</li>
                    <li><strong>Course 4:</strong> AI Implementation & Operations - operationalizing these practices throughout the system lifecycle</li>
                </ul>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'A model shows a 20% approval rate for both men and women, satisfying demographic parity. However, closer analysis shows the model approves genuinely qualified women at a much lower rate than genuinely qualified men. Which metric would have revealed this problem?',
                    options: ['Demographic parity', 'Equal opportunity (true positive rate parity)', 'Overall accuracy', 'Total approval count'],
                    correct: 1,
                    explanation: 'Equal opportunity specifically checks whether true positive rates (qualified individuals correctly approved) are equal across groups - a check demographic parity alone does not provide.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Which technique allows a model to be trained across multiple hospitals\' data without the raw patient records ever leaving each hospital?',
                    options: ['SHAP', 'Federated learning', 'LIME', 'Permutation importance'],
                    correct: 1,
                    explanation: 'Federated learning trains a shared model across decentralized data sources without centralizing the raw data, which is why it is well suited to sensitive, siloed government and healthcare data.'
                },
                {
                    type: 'free-text',
                    question: 'Your agency\'s fraud-detection model passed all pre-deployment fairness and accuracy tests six months ago. A colleague asks why you still recommend an ongoing monitoring budget. What would you tell them?',
                    sampleAnswer: 'Pre-deployment testing only certifies performance against conditions that existed at launch. Real-world populations, behaviors, and data sources shift over time (model drift), which can silently degrade accuracy or introduce new fairness problems even without any code changes. Ongoing monitoring - drift detection, periodic fairness re-testing, and tracking override patterns - is the only way to catch this degradation before it causes harm, rather than discovering it only after a complaint or audit.'
                }
            ]
        }
    }
};

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
                    <li><strong>August 2025:</strong> GPAI model obligations and governance rules apply</li>
                    <li><strong>December 2027:</strong> Full application for Annex III high-risk systems (postponed from the original August 2026 date - see update below)</li>
                    <li><strong>August 2028:</strong> Obligations apply to high-risk AI embedded in regulated products (Annex I)</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">2026 Update: The "Digital Omnibus" Delay</div>
                    <p>In November 2025 the European Commission proposed a simplification package (the "Digital Omnibus on AI") in response to industry concerns about implementation readiness. Parliament and Council reached agreement in mid-2026, formally postponing the high-risk system obligations that were originally due to apply in August 2026 to <strong>December 2, 2027</strong> (with embedded high-risk systems under Annex I pushed to August 2028). As of today, only the prohibited-practices ban, the GPAI rules, and Article 50 transparency duties (such as AI-generated content labeling) are actually in force - the detailed conformity assessment, technical documentation, and logging requirements for high-risk systems described below are not yet legally required, though agencies should still treat them as the target state to build toward.</p>
                </div>

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
    },
    'course-3-2': {
        title: 'NIST AI Risk Management Framework',
        sections: [
            {
                title: 'Overview of the NIST AI RMF',
                content: `<p>Published in January 2023 by the U.S. National Institute of Standards and Technology, the AI Risk Management Framework (AI RMF 1.0) is a voluntary framework for managing risks throughout the AI lifecycle. Unlike the EU AI Act, it carries no direct legal force - but it has become one of the most widely referenced AI governance frameworks globally, including by organizations outside the United States, because it is detailed, practical, and framework-agnostic.</p>

                <h3>Why It Matters Even Where It Isn't Mandatory</h3>
                <ul>
                    <li>Many procurement contracts and vendor questionnaires now reference NIST AI RMF alignment as an evidence baseline.</li>
                    <li>It maps cleanly onto other frameworks (ISO/IEC 42001, EU AI Act risk management requirements), making it a useful "Rosetta Stone" for organizations operating across jurisdictions.</li>
                    <li>Its outcome-focused structure works for organizations at any AI maturity level, from first pilot to enterprise-wide deployment.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">Trustworthy AI Characteristics</div>
                    <p>The NIST AI RMF defines trustworthy AI as: valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, and fair with harmful bias managed. These characteristics underpin every function of the framework.</p>
                </div>`
            },
            {
                title: 'The Four Core Functions',
                content: `<p>The framework organizes AI risk management activities into four functions, intended to be applied continuously rather than sequentially.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Function</th><th>Purpose</th><th>Example Activities</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Govern</strong></td><td>Cultivate a culture of risk management and establish accountability structures</td><td>Policies, roles, risk tolerance statements, oversight committees</td></tr>
                        <tr><td><strong>Map</strong></td><td>Establish context and identify risks specific to the AI system and its use case</td><td>Documenting intended purpose, stakeholders, and potential impacts before development</td></tr>
                        <tr><td><strong>Measure</strong></td><td>Analyze and assess identified risks using appropriate methods</td><td>Fairness testing, robustness testing, performance benchmarking</td></tr>
                        <tr><td><strong>Manage</strong></td><td>Prioritize and act on risks based on their measured impact</td><td>Mitigation planning, monitoring, incident response, resource allocation</td></tr>
                    </tbody>
                </table>

                <p><strong>Govern</strong> is deliberately positioned as cross-cutting - it underpins and connects the other three functions rather than being a one-time first step.</p>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Organizations often adopt Map-Measure-Manage as the technical risk assessment cycle for individual AI systems, while Govern operates at the organizational level, setting the policies and risk appetite that the other three functions operate within.</p>
                </div>`
            },
            {
                title: 'Beyond the Core: Profiles for Specific Contexts',
                content: `<p>NIST has extended the core AI RMF with "profiles" that apply the framework's functions to specific technologies and sectors, since generic guidance often needs translation for particular risk contexts.</p>

                <h3>The Generative AI Profile (NIST AI 600-1)</h3>
                <p>Published in mid-2024, this profile addresses risks specific to generative AI systems: confabulation ("hallucination"), data privacy in large training corpora, dangerous or violent content generation, intellectual property concerns, and the risk of over-reliance on generated content without verification.</p>

                <h3>Emerging Profiles</h3>
                <ul>
                    <li><strong>Cyber AI Profile (draft, NIST IR 8596):</strong> Addresses risks at the intersection of AI and cybersecurity, including AI-enabled attacks and securing AI systems themselves against compromise.</li>
                    <li><strong>Critical infrastructure profile work:</strong> Concept-stage guidance applying AI RMF functions to the heightened stakes of AI use in critical infrastructure sectors (energy, water, transportation).</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Stay Current</div>
                    <p>NIST guidance in this area continues to evolve rapidly. Treat this section as a snapshot rather than an exhaustive or permanent list, and check nist.gov/itl/ai-risk-management-framework directly before citing a specific document in a compliance filing.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Which NIST AI RMF function is described as cross-cutting, underpinning the other three rather than being a one-time first step?',
                    options: ['Map', 'Measure', 'Manage', 'Govern'],
                    correct: 3,
                    explanation: 'Govern establishes the culture, policies, and accountability structures that the Map, Measure, and Manage functions operate within on an ongoing basis.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Unlike the EU AI Act, the NIST AI RMF is:',
                    options: [
                        'Legally binding only in the United States',
                        'A voluntary framework with no direct legal force, though widely referenced in procurement and other frameworks',
                        'Mandatory for all AI systems sold internationally',
                        'Only applicable to generative AI systems'
                    ],
                    correct: 1,
                    explanation: 'The NIST AI RMF is voluntary and carries no direct legal force, but has become a widely referenced practical baseline, including in procurement requirements and cross-framework mapping.'
                }
            ]
        }
    },
    'course-3-3': {
        title: 'Data Protection & AI',
        sections: [
            {
                title: 'GDPR and AI: Key Intersections',
                content: `<p>The General Data Protection Regulation (GDPR) predates most AI-specific legislation but applies directly whenever an AI system processes personal data - which is true of the large majority of consequential government AI systems.</p>

                <h3>Key GDPR Requirements for AI Systems</h3>
                <ul>
                    <li><strong>Lawful basis:</strong> Every use of personal data in training or operating an AI system needs an identified legal basis (such as consent, legal obligation, or public task) - "we already had the data" is not sufficient justification for a new AI use.</li>
                    <li><strong>Article 22 - automated decision-making:</strong> Individuals have the right not to be subject to a decision based solely on automated processing that produces legal or similarly significant effects, subject to limited exceptions, and have a right to meaningful information about the logic involved plus the ability to contest the decision.</li>
                    <li><strong>Data Protection Impact Assessments (DPIAs):</strong> Required before processing likely to result in high risk to individuals' rights - most consequential public-sector AI systems meet this threshold.</li>
                    <li><strong>Data subject rights:</strong> Access, rectification, and erasure rights apply to data used in AI systems, which raises hard technical questions about how to honor an erasure request against an already-trained model.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">"Solely Automated" Is a Narrower Category Than It Sounds</div>
                    <p>Article 22's strongest protections apply to decisions made <em>without meaningful human involvement</em>. A human reviewer who merely rubber-stamps an AI recommendation without genuine engagement may not satisfy the "meaningful human involvement" test - see the Human Oversight Design module in Course 4 for what genuine human review requires.</p>
                </div>`
            },
            {
                title: 'Applying Core Data Protection Principles to AI',
                content: `<p>GDPR's foundational principles translate into specific engineering and governance obligations when applied to AI systems.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Principle</th><th>AI-Specific Application</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Purpose limitation</td><td>Data collected for one program (e.g., benefits administration) cannot be repurposed for a new AI use (e.g., fraud risk scoring) without a fresh legal basis</td></tr>
                        <tr><td>Data minimization</td><td>Training sets should exclude fields not genuinely needed for the model's purpose, even if convenient to include "in case they're useful"</td></tr>
                        <tr><td>Accuracy</td><td>Extends to the accuracy of the model's inferences about individuals, not just the underlying stored data</td></tr>
                        <tr><td>Storage limitation</td><td>Training data and model artifacts need defined retention schedules, not indefinite retention</td></tr>
                        <tr><td>Accountability</td><td>Organizations must be able to demonstrate compliance, not merely assert it - documentation is not optional</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Involve your data protection officer or privacy team at the design stage of an AI project, not just before launch. Retrofitting purpose limitation or data minimization into an already-trained model is far more costly than designing for it from the outset.</p>
                </div>`
            },
            {
                title: 'A Global Patchwork of Data Protection Regimes',
                content: `<p>GDPR is the most detailed and influential data protection regime, but it is far from the only one relevant to AI governance. Organizations operating across jurisdictions must navigate an increasingly complex patchwork.</p>

                <ul>
                    <li><strong>Sector-specific US privacy law:</strong> The United States has no single federal equivalent to GDPR; instead, sector-specific laws (health data, financial data) and a growing set of state privacy and AI-specific statutes apply, covered in depth in the Global Regulatory Landscape module.</li>
                    <li><strong>UK GDPR:</strong> A near-identical regime to EU GDPR following Brexit, with the UK Information Commissioner's Office issuing its own AI-specific guidance.</li>
                    <li><strong>Emerging AI-specific data provisions:</strong> Newer AI laws increasingly embed their own data-related obligations (such as training data transparency requirements) alongside, rather than replacing, general data protection law.</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Don't Assume One Regime Covers Everything</div>
                    <p>An AI system built for a single national deployment can still trigger foreign data protection obligations - for example, if it processes data belonging to residents of another jurisdiction, or if a cloud vendor stores or processes data across borders. Map data flows carefully rather than assuming your home jurisdiction's law is the only one that applies.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Under GDPR Article 22, individuals have the right not to be subject to a decision based solely on automated processing when the decision:',
                    options: [
                        'Involves any use of AI whatsoever',
                        'Produces legal or similarly significant effects on them, subject to limited exceptions',
                        'Is made by a private company rather than government',
                        'Costs the organization more than a specified threshold'
                    ],
                    correct: 1,
                    explanation: 'Article 22 protections apply specifically to solely automated decisions with legal or similarly significant effects, such as benefit denials or employment decisions.'
                },
                {
                    type: 'free-text',
                    question: 'Why might a human reviewer who "rubber-stamps" AI recommendations fail to satisfy GDPR\'s requirement for meaningful human involvement?',
                    sampleAnswer: 'Article 22\'s protections against solely automated decisions require genuine human engagement with the decision, not just nominal sign-off. A reviewer who habitually approves AI recommendations without independently evaluating the case - often due to automation bias or time pressure - is not exercising meaningful oversight, which means the decision remains effectively "solely automated" in substance even though a human technically clicked approve.'
                }
            ]
        }
    },
    'course-3-4': {
        title: 'Global Regulatory Landscape',
        sections: [
            {
                title: 'The United States: A Shifting Federal Approach',
                content: `<p>US federal AI policy has changed direction sharply and repeatedly since 2023, and government professionals working with US-based vendors, data, or operations need to track the current posture rather than relying on older reference material.</p>

                <h3>The 2025 Reversal</h3>
                <ul>
                    <li>President Biden's Executive Order 14110 ("Safe, Secure, and Trustworthy AI," October 2023) was <strong>rescinded on January 20, 2025</strong>, on the first day of the new administration.</li>
                    <li>It was replaced by "Removing Barriers to American Leadership in AI" (January 23, 2025), reorienting federal policy away from the earlier order's safety-testing and reporting requirements and toward reducing perceived regulatory barriers to AI development.</li>
                    <li>A subsequent federal "AI Action Plan" and a December 2025 executive order (EO 14365) established a Department of Justice AI Litigation Task Force, active since January 2026, aimed at challenging state AI laws viewed as conflicting with the federal deregulatory approach.</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">No Federal Preemption - Yet</div>
                    <p>Despite the administration's stated goal of a more unified national approach, no statutory federal preemption of state AI laws exists as of this writing. A 2025 legislative attempt to attach a ten-year moratorium on state AI regulation to a broader federal bill was stripped out by a 99-1 Senate vote. State law remains the primary source of binding AI-specific obligations in the US.</p>
                </div>`
            },
            {
                title: 'US State Laws: An Active, Fragmented Patchwork',
                content: `<p>With no comprehensive federal AI statute, US states have become the primary source of binding AI regulation - and the picture continues to shift.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>State</th><th>Law</th><th>Status</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Colorado</td><td>Original Colorado AI Act</td><td>Repealed and replaced by SB 26-189 (signed ~May 2026); the replacement is narrower, dropping the original's risk-management and impact-assessment mandates, with an effective date of January 1, 2027</td></tr>
                        <tr><td>Texas</td><td>Texas Responsible AI Governance Act (TRAIGA)</td><td>Took effect January 1, 2026; fully in force</td></tr>
                        <tr><td>California</td><td>AB 2013 (training data transparency), SB 53 (frontier model safety and whistleblower protections)</td><td>Both effective January 1, 2026</td></tr>
                        <tr><td>California</td><td>SB 942 (AI content transparency)</td><td>Effective date delayed to August 2, 2026 via AB 853</td></tr>
                    </tbody>
                </table>

                <div class="info-box important">
                    <div class="info-box-title">Practical Implication</div>
                    <p>Organizations operating nationally in the US cannot rely on a single compliance posture. A system that is compliant in one state may face different disclosure, risk-assessment, or documentation obligations in another. Track each state where the system is deployed or where affected individuals reside, and expect this list to keep changing - state AI legislation is one of the fastest-moving areas of the field.</p>
                </div>`
            },
            {
                title: 'International Developments and the Rise of Agentic AI Governance',
                content: `<p>Beyond the US and EU, the international AI governance landscape continues to evolve, and a genuinely new category of guidance has emerged: governance frameworks specifically for agentic AI.</p>

                <h3>International Bodies and Summits</h3>
                <ul>
                    <li>The UK's AI Safety Institute was renamed the <strong>AI Security Institute</strong> in February 2025, with its focus shifting toward cyber and criminal misuse risks.</li>
                    <li>The global AI summit series has progressed from Bletchley Park (2023) through Seoul (2024) to the Paris AI Action Summit (February 2025), which notably shifted tone from "safety" toward "action" and economic adoption, and most recently the India AI Impact Summit (2026), the first hosted in the Global South.</li>
                    <li>China has continued tightening its domestic framework, including amendments to its Cybersecurity Law (effective January 2026) adding AI-specific security review and data localization requirements.</li>
                </ul>

                <h3>The New Frontier: Agentic AI Governance</h3>
                <p>Autonomous AI "agents" that can plan multi-step tasks, use tools, and take actions with limited human intervention introduce risks that earlier frameworks - written when AI systems primarily produced a single output for a human to act on - do not fully address: unauthorized privilege escalation, unintended goal pursuit ("goal drift"), and resistance to shutdown or correction attempts.</p>
                <ul>
                    <li>Singapore's Infocomm Media Development Authority (IMDA) circulated a draft Model AI Governance Framework for Agentic AI in early 2026.</li>
                    <li>UC Berkeley published an Agentic AI Risk-Management Standards Profile in early 2026, extending NIST-style risk management thinking to autonomous agent behaviors.</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">A Genuine Content Gap</div>
                    <p>If your organization is piloting or deploying agentic AI systems (autonomous coding agents, automated procurement or workflow agents, AI systems that can take real-world actions), do not assume your existing AI governance policies - likely written with single-output, human-in-the-loop systems in mind - adequately cover the distinct risks of autonomous, multi-step, tool-using AI behavior. Governance frameworks for this category are still maturing; err toward more conservative human oversight until your organization's own policies catch up.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'What happened to Executive Order 14110 (the Biden administration\'s AI executive order)?',
                    options: [
                        'It remains in full force today',
                        'It was rescinded on January 20, 2025, and replaced with a deregulation-focused order',
                        'It was upheld by the Supreme Court',
                        'It became a binding international treaty'
                    ],
                    correct: 1,
                    explanation: 'EO 14110 was rescinded on the first day of the new administration (January 20, 2025) and replaced by "Removing Barriers to American Leadership in AI," reflecting a sharp policy reversal.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Why do agentic AI systems (autonomous, multi-step, tool-using AI agents) pose governance challenges that many older frameworks don\'t fully address?',
                    options: [
                        'They are always less accurate than traditional AI systems',
                        'They can take real-world actions with limited human intervention, raising risks like unauthorized privilege escalation and goal drift that single-output, human-reviewed systems don\'t present',
                        'They only exist in theoretical research and are not deployed in practice',
                        'They are fully covered by the original NIST AI RMF core functions with no modification needed'
                    ],
                    correct: 1,
                    explanation: 'Agentic AI\'s capacity for autonomous multi-step action introduces risks - like unintended goal pursuit and resistance to correction - that frameworks designed around a human reviewing a single AI output do not fully anticipate, driving the emergence of dedicated agentic AI governance frameworks in 2026.'
                }
            ]
        }
    },
    'course-3-5': {
        title: 'Compliance Documentation & Auditing',
        sections: [
            {
                title: 'Building a Compliance Documentation Trail',
                content: `<p>Across every framework covered in this course, one requirement is universal: organizations must be able to <em>demonstrate</em> compliance, not merely assert it. Documentation is the evidence base that makes this possible.</p>

                <h3>Core Documentation Artifacts</h3>
                <ul>
                    <li><strong>Technical documentation:</strong> System purpose, architecture, training data sources and characteristics, performance metrics, and known limitations.</li>
                    <li><strong>Impact assessments:</strong> Data Protection Impact Assessments (DPIAs) and, where applicable, Fundamental Rights Impact Assessments (FRIAs) required for high-risk systems under some frameworks.</li>
                    <li><strong>Model cards:</strong> Concise, standardized summaries of a model's intended use, performance across subgroups, and limitations - popularized by industry but increasingly expected as baseline practice.</li>
                    <li><strong>Decision logs:</strong> Records of individual automated decisions sufficient to support later audit, appeal, or investigation.</li>
                    <li><strong>Governance records:</strong> Risk assessments, review board approvals, and sign-offs demonstrating that governance processes described in policy were actually followed in practice.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">The Core Test</div>
                    <p>A useful test for any compliance document: if a regulator, journalist, or court asked to see evidence that your AI system was properly governed, would this document actually answer their question - or does it just describe what your policy says should happen, without evidence it happened?</p>
                </div>`
            },
            {
                title: 'Internal and External Auditing',
                content: `<p>Documentation is only valuable if it is periodically tested through structured auditing, not simply filed away.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Audit Type</th><th>Who Performs It</th><th>Value</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>First-party (internal)</td><td>Your own compliance/audit function</td><td>Frequent, low-cost, builds internal capability</td></tr>
                        <tr><td>Second-party</td><td>A customer, partner, or contracting authority auditing a vendor</td><td>Verifies vendor claims before or during a contract</td></tr>
                        <tr><td>Third-party (independent)</td><td>An accredited external auditor or certification body</td><td>Highest credibility; required for certain certifications and increasingly expected for high-risk systems</td></tr>
                    </tbody>
                </table>

                <h3>Certification Against ISO/IEC 42001</h3>
                <p>ISO/IEC 42001:2023, the AI Management System standard, can be certified by accredited bodies in the same manner as ISO 9001 (quality) or ISO 27001 (information security). Certification does not by itself guarantee legal compliance with any specific AI law, but provides externally verified evidence of a functioning AI management system - increasingly requested in procurement processes. Related standards worth tracking include ISO/IEC 42005 (AI system impact assessment guidance, published 2025) and ISO/IEC 42006 (requirements for bodies certifying AI management systems).</p>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Even organizations not pursuing formal ISO 42001 certification can use its control structure as an internal audit checklist - it provides a comprehensive, independently developed baseline of what a mature AI management system should include.</p>
                </div>`
            },
            {
                title: 'Preparing for Regulatory Examination',
                content: `<p>When a regulator, oversight body, or legislative committee requests information about an AI system, preparation determines whether the response is a routine formality or a crisis.</p>

                <h3>Readiness Checklist</h3>
                <ul>
                    <li>Can you produce, within days rather than weeks, the technical documentation and risk assessment for any specific deployed AI system?</li>
                    <li>Can you demonstrate - with dated records, not recollection - that required approvals were obtained before deployment?</li>
                    <li>Do you have a designated point of contact and escalation process for regulatory inquiries, so requests don't stall while staff figure out who should respond?</li>
                    <li>Have you conducted a mock audit or tabletop exercise recently, rather than only discovering documentation gaps during a real examination?</li>
                </ul>

                <div class="info-box example">
                    <div class="info-box-title">The Cost of Being Unprepared</div>
                    <p>Organizations that scramble to reconstruct documentation after a regulatory request often find gaps that look far worse under scrutiny than they would have if disclosed proactively during routine internal audit. Regulators generally respond more favorably to organizations that can show ongoing, systematic governance than to those producing polished documentation only after being asked.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'What is the key difference between second-party and third-party AI audits?',
                    options: [
                        'Second-party audits are always more thorough',
                        'Second-party audits are performed by a customer or partner, while third-party audits are performed by an independent accredited body',
                        'Third-party audits are always free of charge',
                        'There is no meaningful difference'
                    ],
                    correct: 1,
                    explanation: 'Second-party audits involve a direct business relationship (e.g., a contracting authority auditing its vendor), while third-party audits use an independent accredited body, generally carrying the highest credibility.'
                },
                {
                    type: 'free-text',
                    question: 'A colleague says "we don\'t need to worry about ISO 42001 certification since it isn\'t legally required in our jurisdiction." How would you respond?',
                    sampleAnswer: 'While ISO 42001 certification may not be a legal mandate, it provides an externally verified, independently developed structure for AI management that is increasingly requested in procurement and can serve as strong evidence of due diligence if the organization faces regulatory scrutiny or litigation. Even without pursuing formal certification, using its control framework as an internal benchmark helps identify governance gaps before they become compliance failures - the value isn\'t limited to the certificate itself.'
                }
            ]
        }
    },
    'course-3-6': {
        title: 'Regulatory Assessment & Certification',
        sections: [
            {
                title: 'Course Summary',
                content: `<p>This regulatory module has built your capability to navigate the complex, fast-moving global AI compliance landscape:</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li><strong>EU AI Act:</strong> A risk-tiered framework whose high-risk obligations, originally due August 2026, were postponed to December 2027 under the 2026 "Digital Omnibus" simplification - GPAI rules and the prohibited-practices ban are already in force today.</li>
                    <li><strong>NIST AI RMF:</strong> A voluntary but globally influential framework organized around Govern-Map-Measure-Manage, extended by profiles for generative AI and emerging areas like cybersecurity.</li>
                    <li><strong>Data Protection:</strong> GDPR's automated decision-making protections, DPIAs, and core principles (purpose limitation, minimization) apply directly to most consequential AI systems, alongside a growing patchwork of other regimes.</li>
                    <li><strong>Global Landscape:</strong> US federal AI policy reversed sharply in 2025; state law (Colorado, Texas, California) is now the primary source of binding US AI obligations; agentic AI governance is an entirely new, still-maturing frontier.</li>
                    <li><strong>Documentation & Auditing:</strong> Compliance must be demonstrable through technical documentation, impact assessments, and both internal and independent auditing - not merely asserted in policy.</li>
                </ul>

                <h3>Next Steps</h3>
                <p>With this regulatory foundation, you're ready to proceed to:</p>
                <ul>
                    <li><strong>Course 4:</strong> AI Implementation & Operations - translating these compliance requirements into day-to-day operational practice</li>
                    <li><strong>Course 5:</strong> Strategic Leadership & Governance - building organizational structures that sustain compliance over time</li>
                </ul>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'As of today, which EU AI Act obligations are actually in force, given the 2026 Digital Omnibus delay?',
                    options: [
                        'Full high-risk system conformity assessment requirements',
                        'The prohibited-practices ban, GPAI model rules, and Article 50 transparency duties - high-risk obligations are postponed to December 2027',
                        'Nothing - the entire Act has been repealed',
                        'Only requirements for systems developed after 2027'
                    ],
                    correct: 1,
                    explanation: 'The 2026 Digital Omnibus postponed Annex III high-risk system obligations to December 2027 (and Annex I embedded systems to August 2028), but the prohibited-practices ban, GPAI rules, and transparency duties took effect on schedule and are already law.'
                },
                {
                    type: 'multiple-choice',
                    question: 'In the absence of comprehensive US federal AI legislation, what has become the primary source of binding AI-specific obligations for organizations operating in the United States?',
                    options: [
                        'International treaties',
                        'State laws such as those in Colorado, Texas, and California',
                        'Federal executive orders alone',
                        'Industry self-regulation with no legal force'
                    ],
                    correct: 1,
                    explanation: 'With no statutory federal preemption in place, state-level laws (Colorado\'s replacement act, Texas TRAIGA, California\'s AB 2013/SB 53/SB 942) are the primary binding AI-specific obligations in the US today.'
                },
                {
                    type: 'free-text',
                    question: 'Your organization is piloting an autonomous AI agent that can independently query systems and take corrective actions without a human approving each step. Which governance gap from this course is most directly relevant, and what would you recommend?',
                    sampleAnswer: 'This is the agentic AI governance gap: most existing frameworks (NIST AI RMF, EU AI Act, older internal policies) were designed around systems that produce a single output for human review, not autonomous multi-step action. I would recommend treating this pilot with more conservative human oversight than the organization\'s standard policy requires - for example, requiring human approval before any action with real-world effect - until the organization has adapted its governance framework using emerging references like the UC Berkeley Agentic AI Risk-Management Standards Profile or Singapore IMDA\'s draft agentic AI framework, rather than assuming existing single-output governance policies are sufficient.'
                }
            ]
        }
    }
};

// Extended content for Course 4: Implementation
const COURSE_4_CONTENT = {
    'course-4-1': {
        title: 'AI Procurement & Vendor Management',
        sections: [
            {
                title: 'Why AI Procurement Needs Special Governance',
                content: `<p>Most government AI systems are not built in-house - they are purchased or licensed from vendors. This makes procurement one of the most consequential and most overlooked AI governance checkpoints: decisions made before a contract is signed determine how much visibility and control the organization will have for the entire life of the system.</p>

                <h3>How AI Procurement Differs from Traditional IT Procurement</h3>
                <ul>
                    <li><strong>Opaque internals:</strong> Vendors often treat model architecture and training data as proprietary, resisting the transparency needed for governance and audit.</li>
                    <li><strong>Shifting behavior:</strong> Unlike static software, a vendor's AI system can change behavior after contract signing through retraining or underlying model updates, without a traditional "new version" release.</li>
                    <li><strong>Liability ambiguity:</strong> When an AI system causes harm, responsibility can be genuinely unclear between vendor and deploying agency unless the contract explicitly allocates it.</li>
                    <li><strong>Data entanglement:</strong> Vendor AI systems often require access to sensitive government data, and some vendors use customer data to improve their broader product - a practice that may be unacceptable for public-sector data.</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">The Governance Gap Starts at Procurement</div>
                    <p>An agency cannot govern what it cannot see. If procurement doesn't secure the contractual right to documentation, audit, and incident notification up front, no amount of governance effort after signing can fully compensate.</p>
                </div>`
            },
            {
                title: 'Key Contractual Protections',
                content: `<p>Effective AI procurement builds specific protections into the contract itself, not just into internal policy.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Protection</th><th>What It Ensures</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Documentation rights</td><td>Access to technical documentation sufficient to support the agency's own risk assessments and regulatory obligations</td></tr>
                        <tr><td>Audit rights</td><td>The ability for the agency (or an independent third party) to audit the system's performance, fairness, and security - not just take the vendor's word for it</td></tr>
                        <tr><td>Performance and fairness SLAs</td><td>Contractually binding thresholds for accuracy and subgroup performance, with remedies if not met</td></tr>
                        <tr><td>Incident notification</td><td>A defined, prompt timeline for the vendor to notify the agency of security incidents, model changes, or discovered flaws</td></tr>
                        <tr><td>Data rights and exit provisions</td><td>Clear terms on data ownership, deletion on contract termination, and the ability to transition away from a vendor without losing historical data or continuity of service</td></tr>
                        <tr><td>Change notification</td><td>Advance notice before the vendor materially changes the underlying model or system, so the agency can re-validate before the change affects production</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Negotiate Before, Not After</div>
                    <p>These protections are far easier to negotiate before a contract is signed, when the vendor is competing for the business, than to add later once the agency is operationally dependent on the system.</p>
                </div>`
            },
            {
                title: 'Vendor Due Diligence Checklist',
                content: `<p>Before selecting a vendor, procurement and technical teams should jointly work through a structured due diligence process.</p>

                <h3>Questions to Ask Every AI Vendor</h3>
                <ul>
                    <li>What data was the system trained on, and can you provide evidence of its representativeness for our population?</li>
                    <li>What fairness and bias testing has been conducted, and can we review the results?</li>
                    <li>What explainability capabilities does the system offer, and at what level of detail?</li>
                    <li>What is your security posture, and has the system undergone independent security assessment?</li>
                    <li>Do you use subcontractors or "fourth-party" AI providers (e.g., building on another company's foundation model), and what does that mean for our data and liability exposure?</li>
                    <li>What happens to our data if we terminate the contract?</li>
                    <li>How and how often is the underlying model updated, and will we be notified before changes reach production?</li>
                </ul>

                <div class="info-box example">
                    <div class="info-box-title">Red Flag</div>
                    <p>A vendor who cannot answer basic questions about their training data or refuses any form of independent audit access is signaling a governance risk that should factor heavily into the procurement decision - regardless of how compelling the product demo looks.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Why is procurement considered one of the most consequential AI governance checkpoints?',
                    options: [
                        'Because it is the cheapest phase of an AI project',
                        'Because contractual terms negotiated before signing determine how much visibility and control the agency will have for the life of the system',
                        'Because procurement staff are AI experts',
                        'Because it happens after deployment'
                    ],
                    correct: 1,
                    explanation: 'Rights to documentation, audit, and incident notification are far easier to secure before a contract is signed than after the agency becomes operationally dependent on a vendor system.'
                },
                {
                    type: 'free-text',
                    question: 'A vendor\'s AI product looks excellent in the demo, but they decline to share any information about their training data or allow any independent audit. What would you recommend, and why?',
                    sampleAnswer: 'I would treat this as a significant red flag that should weigh heavily against selecting this vendor, regardless of demo performance. Without visibility into training data and independent audit rights, the agency cannot conduct its own risk or fairness assessments, cannot meet its own regulatory documentation obligations, and has no way to verify vendor claims about performance. I would push to make documentation and audit rights a contractual requirement before proceeding, and if the vendor still refuses, recommend evaluating alternative vendors willing to provide these protections.'
                }
            ]
        }
    },
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
    },
    'course-4-3': {
        title: 'Monitoring & Performance Management',
        sections: [
            {
                title: 'Why Deployed AI Needs Continuous Monitoring',
                content: `<p>An AI system that performed well at launch is not guaranteed to keep performing well. Monitoring is the practice of continuously watching a deployed system to catch degradation before it causes harm, rather than discovering it during an incident or complaint investigation.</p>

                <h3>Why Performance Changes After Deployment</h3>
                <ul>
                    <li><strong>Data drift:</strong> The statistical properties of real-world input data gradually diverge from the training data, degrading accuracy.</li>
                    <li><strong>Concept drift:</strong> The real-world relationship the model is trying to predict changes over time - for example, fraud patterns evolve as fraudsters adapt to detection methods.</li>
                    <li><strong>Population changes:</strong> The population a system serves shifts (demographically, behaviorally, economically), which can differentially affect subgroup performance even if overall accuracy looks stable.</li>
                    <li><strong>Upstream changes:</strong> Changes to data sources, feeder systems, or vendor-side models can silently alter a system's inputs or behavior.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">The Core Principle</div>
                    <p>Pre-deployment testing establishes a baseline. Monitoring is what confirms that baseline still holds a month, a quarter, and a year later - it is not optional follow-up, it is a core, ongoing governance obligation for any consequential AI system.</p>
                </div>`
            },
            {
                title: 'What to Monitor',
                content: `<p>A comprehensive monitoring program tracks several categories of signal, not just overall accuracy.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Category</th><th>What to Track</th><th>Why It Matters</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Technical performance</td><td>Accuracy, precision, recall against ground truth as it becomes available</td><td>Detects overall model degradation</td></tr>
                        <tr><td>Fairness metrics</td><td>Performance broken out by demographic and use-case subgroup</td><td>Catches disparate degradation that aggregate metrics hide</td></tr>
                        <tr><td>Input data characteristics</td><td>Statistical distribution of incoming data vs. training data</td><td>Early warning of drift before it shows up in outcome metrics</td></tr>
                        <tr><td>Usage patterns</td><td>Volume, unusual spikes, unexpected use cases</td><td>Flags misuse or use outside the system's intended and validated scope</td></tr>
                        <tr><td>Human override rates</td><td>How often and why human reviewers override AI recommendations</td><td>Rising override rates often signal declining model quality before formal metrics catch it</td></tr>
                        <tr><td>Complaints and appeals</td><td>Volume and nature of citizen complaints or appeals related to the system</td><td>A direct signal of real-world harm, not just statistical performance</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Override rate trends are one of the most underused monitoring signals. A steadily rising override rate for a specific case type often surfaces a genuine model problem well before it would appear in a quarterly accuracy report.</p>
                </div>`
            },
            {
                title: 'Building a Monitoring Program',
                content: `<p>Effective monitoring requires more than collecting metrics - it requires a structured program with clear ownership and response paths.</p>

                <h3>Program Components</h3>
                <ul>
                    <li><strong>Defined thresholds:</strong> Specific, pre-agreed thresholds that trigger review (e.g., a subgroup false-negative rate rising more than a defined percentage above baseline).</li>
                    <li><strong>Alerting:</strong> Automated alerts when thresholds are breached, rather than relying on someone remembering to check a dashboard.</li>
                    <li><strong>Regular review cadence:</strong> Scheduled reviews (monthly or quarterly, depending on risk level) even when no alert has fired, since some degradation is gradual rather than sudden.</li>
                    <li><strong>Clear escalation paths:</strong> A defined process for what happens when a threshold is breached - who is notified, who decides whether to pause the system, and how quickly a decision must be made.</li>
                    <li><strong>Accountable ownership:</strong> A named owner responsible for the monitoring program itself, not just for the underlying AI system.</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">Common Failure Mode</div>
                    <p>Many organizations build monitoring dashboards that nobody is accountable for actually watching. A dashboard without a named owner, a review cadence, and an escalation process is not a monitoring program - it's a screen that data flows past unnoticed.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'What is "concept drift" as distinct from "data drift"?',
                    options: [
                        'They are the same thing',
                        'Concept drift is a change in the real-world relationship being predicted (e.g., evolving fraud patterns), while data drift is a change in the statistical properties of input data',
                        'Concept drift only affects rule-based systems',
                        'Concept drift is a type of security vulnerability'
                    ],
                    correct: 1,
                    explanation: 'Data drift refers to input data distributions changing; concept drift refers to the underlying real-world relationship a model is trying to predict changing, such as fraudsters adapting their methods over time.'
                },
                {
                    type: 'multiple-choice',
                    question: 'Which underused monitoring signal often reveals model quality decline before formal accuracy metrics do?',
                    options: ['Server uptime', 'Human override rate trends', 'Number of code deployments', 'Marketing spend'],
                    correct: 1,
                    explanation: 'A rising rate of human reviewers overriding AI recommendations for a specific case type is often an early, practical signal of declining model quality, well before quarterly accuracy reports would reveal it.'
                }
            ]
        }
    },
    'course-4-4': {
        title: 'Incident Response & Remediation',
        sections: [
            {
                title: 'What Counts as an AI Incident',
                content: `<p>AI incident response extends beyond traditional IT security incidents to cover a broader range of AI-specific failure modes, many of which don't involve any malicious actor at all.</p>

                <h3>Categories of AI Incidents</h3>
                <ul>
                    <li><strong>Discriminatory or unfair outcomes:</strong> The system produces systematically worse outcomes for a protected group, discovered through monitoring, audit, or complaints.</li>
                    <li><strong>Security incidents:</strong> Unauthorized access to the model, training data, or a successful adversarial attack causing incorrect outputs.</li>
                    <li><strong>Harmful or inappropriate content:</strong> Particularly relevant for generative AI systems producing offensive, false, or dangerous content.</li>
                    <li><strong>Unexpected behavior:</strong> The system behaves in ways not anticipated during design or testing, even without a clear "bug" to point to.</li>
                    <li><strong>Cascading errors:</strong> A single model error propagates through downstream systems or decisions before being caught.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">A Broader Definition Than "Security Breach"</div>
                    <p>Many AI incidents involve no hacking or malicious actor at all - a model can cause serious harm simply by behaving exactly as it was trained to, on data or in a context nobody anticipated. AI incident response processes must be built to catch and respond to both.</p>
                </div>`
            },
            {
                title: 'An AI Incident Response Lifecycle',
                content: `<p>Traditional cybersecurity incident response provides a useful starting structure, adapted for AI-specific characteristics.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Phase</th><th>AI-Specific Considerations</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Detect</strong></td><td>Relies heavily on monitoring signals (Module 4.3) and complaint channels, since many AI incidents have no obvious external trigger like a system outage</td></tr>
                        <tr><td><strong>Contain</strong></td><td>May mean pausing the system, reverting to a previous model version, or routing decisions to human review rather than a traditional network isolation response</td></tr>
                        <tr><td><strong>Assess</strong></td><td>Requires determining scope (how many decisions were affected, over what time period) and severity (what harm resulted), often requiring re-analysis of historical decisions</td></tr>
                        <tr><td><strong>Remediate</strong></td><td>May require correcting past decisions retroactively (e.g., reprocessing wrongly denied applications), not just fixing the system going forward</td></tr>
                        <tr><td><strong>Report</strong></td><td>May trigger regulatory reporting obligations (see below) in addition to internal escalation</td></tr>
                        <tr><td><strong>Learn</strong></td><td>Feed findings back into risk assessment, testing, and monitoring practices to prevent recurrence</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Establish AI incident response procedures and clear ownership before an incident occurs. Deciding who has authority to pause a production AI system, in the middle of an active incident, is far riskier than agreeing that authority in advance.</p>
                </div>`
            },
            {
                title: 'Remediation and Disclosure',
                content: `<p>Responding to the technical failure is only part of incident response - remediation must also address the people affected and any regulatory reporting obligations.</p>

                <h3>Remediating Harm to Affected Individuals</h3>
                <ul>
                    <li>Identify everyone plausibly affected, not just those who complained - many people affected by an AI error never realize the cause or file a complaint.</li>
                    <li>Correct the underlying decision where possible (reprocessing a wrongly denied application), not just the system going forward.</li>
                    <li>Communicate clearly and proactively with affected individuals rather than waiting for them to discover the error themselves.</li>
                </ul>

                <h3>Regulatory Reporting Obligations</h3>
                <p>Increasingly, AI-specific law creates affirmative reporting duties. For example, the EU AI Act requires providers of high-risk AI systems to report serious incidents to market surveillance authorities. Government agencies should map which incident categories trigger which reporting obligations under the frameworks applicable to their jurisdiction, well before an incident occurs, so the reporting clock doesn't start with confusion about whether or how to report.</p>

                <div class="info-box example">
                    <div class="info-box-title">Case in Point</div>
                    <p>An agency discovers that a benefits eligibility model incorrectly denied a subset of applications for three months due to an unnoticed data pipeline error. Full remediation means: identifying every affected application (not just those appealed), reprocessing them, proactively notifying affected citizens, assessing whether this meets any regulatory incident-reporting threshold, and updating monitoring to catch this failure mode earlier next time.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Which of the following would qualify as an AI incident, even without any malicious actor involved?',
                    options: [
                        'None - incidents require a hacker or attacker',
                        'A model behaving exactly as trained but producing systematically unfair outcomes on real-world data nobody anticipated',
                        'Only server downtime counts as an incident',
                        'Only incidents reported by the media count'
                    ],
                    correct: 1,
                    explanation: 'Many serious AI incidents involve no malicious actor at all - a model can cause real harm simply by behaving as trained in a context or on data nobody anticipated during design.'
                },
                {
                    type: 'free-text',
                    question: 'Why is it important to identify all individuals plausibly affected by an AI incident, not just those who filed a complaint?',
                    sampleAnswer: 'Many people affected by an AI error never realize the AI system was the cause, or don\'t know how to file a complaint, or may face barriers (language, digital access, awareness of appeal rights) that prevent them from complaining even if they suspect something is wrong. Limiting remediation to complainants only would leave many affected individuals without redress and would understate the true scope and severity of the incident, undermining both fairness and any regulatory obligation to assess and report the incident\'s actual scope.'
                }
            ]
        }
    },
    'course-4-5': {
        title: 'Change Management & System Updates',
        sections: [
            {
                title: 'Why AI Changes Are Different',
                content: `<p>Traditional software change management assumes that a specific code change produces a predictable, testable effect. AI systems complicate this assumption in ways that require adapted change management practice.</p>

                <h3>What Makes AI Change Management Different</h3>
                <ul>
                    <li><strong>Retraining changes behavior unpredictably:</strong> Updating a model with new training data can shift behavior across the board in ways that are hard to fully predict or scope in advance, unlike a targeted code fix.</li>
                    <li><strong>"Silent" vendor-side updates:</strong> When using a vendor's hosted AI service or API, the underlying model can change without the deploying agency initiating or even being clearly notified of the change.</li>
                    <li><strong>Non-obvious change triggers:</strong> Changes to upstream data sources, feature definitions, or thresholds can meaningfully alter system behavior even when no one describes it as a "system change."</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">The Governance Risk</div>
                    <p>An organization can have rigorous initial validation and still suffer serious AI failures if it doesn't extend the same rigor to changes made after deployment - especially changes it didn't initiate itself, such as a vendor silently updating an underlying model.</p>
                </div>`
            },
            {
                title: 'A Change Management Framework for AI',
                content: `<p>Effective AI change management classifies changes by type and risk, applying proportional re-validation to each.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Change Type</th><th>Example</th><th>Re-validation Needed</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Data refresh / retrain on new data</td><td>Periodic retraining on the latest year of data</td><td>Full performance and fairness re-testing across subgroups</td></tr>
                        <tr><td>Threshold adjustment</td><td>Changing the score cutoff for flagging a case</td><td>Re-testing precision/recall trade-offs and downstream volume impact</td></tr>
                        <tr><td>Feature change</td><td>Adding or removing an input feature</td><td>Full re-validation, including bias/proxy analysis of the new feature</td></tr>
                        <tr><td>Full model replacement</td><td>Switching to a new model architecture or vendor</td><td>Treat as a new system: complete risk assessment and validation cycle</td></tr>
                        <tr><td>Underlying vendor model update</td><td>A SaaS AI vendor upgrades their model version</td><td>Regression testing against your specific use cases before and after, regardless of vendor assurances</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Maintain a fixed regression test set specific to your use case - real (or representative) cases with known correct outcomes - that you can re-run against any model version, old or new, to quickly detect behavioral changes regardless of what triggered them.</p>
                </div>`
            },
            {
                title: 'Managing Vendor-Side Model Changes',
                content: `<p>The hardest change management challenge is often the one least within an organization's direct control: changes a vendor makes to a hosted or API-based AI system.</p>

                <h3>Practical Safeguards</h3>
                <ul>
                    <li><strong>Contractual change notification:</strong> Negotiate advance notice of material model changes as a procurement requirement (see Module 4.1), even if the vendor cannot give the agency approval rights over the change itself.</li>
                    <li><strong>Independent regression testing:</strong> Run your own fixed test set against the vendor's system periodically, and specifically after any known update, rather than relying solely on vendor assurances that "nothing changed."</li>
                    <li><strong>Version pinning where offered:</strong> Some vendors allow pinning to a specific model version rather than auto-upgrading to the latest - use this where risk tolerance requires stability, understanding it may mean forgoing improvements too.</li>
                    <li><strong>Fallback plans:</strong> Maintain the ability to revert to human-only processing or a prior model version quickly if a vendor update degrades performance in production.</li>
                </ul>

                <div class="info-box example">
                    <div class="info-box-title">Case in Point</div>
                    <p>An agency using a vendor's document-classification API notices a shift in classification patterns following an unannounced vendor model update. Because the agency maintained its own regression test set, it detected the shift within days rather than months, and had contractual grounds (from Module 4.1's change-notification clause) to require the vendor to investigate and remediate.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Why is a vendor\'s "silent" model update a governance risk even if the agency made no changes of its own?',
                    options: [
                        'It isn\'t a risk - vendors always test changes thoroughly',
                        'The underlying system behavior can change without the deploying agency\'s knowledge or re-validation, potentially degrading performance or fairness undetected',
                        'Vendor updates only ever improve performance',
                        'This scenario cannot occur with cloud-based AI services'
                    ],
                    correct: 1,
                    explanation: 'When a vendor updates an underlying hosted model, the deploying agency\'s system behavior can shift without any change on the agency\'s side, making detection dependent on the agency\'s own monitoring and regression testing rather than an internal change log.'
                },
                {
                    type: 'free-text',
                    question: 'What is the value of maintaining a fixed, organization-specific regression test set for an AI system?',
                    sampleAnswer: 'A fixed regression test set - representative cases with known correct outcomes specific to your actual use case - lets you quickly detect behavioral changes in a model regardless of what triggered them, whether an internal retrain, a threshold change, or an unannounced vendor-side update. Without it, an organization has to rely on vendor assurances or wait for problems to surface through complaints or monitoring alerts, both of which are slower and less reliable than proactively re-running a known test set after any change.'
                }
            ]
        }
    },
    'course-4-6': {
        title: 'Operations Assessment & Certification',
        sections: [
            {
                title: 'Course Summary',
                content: `<p>This operations module has equipped you with practical guidance for governing AI systems throughout deployment, not just before launch:</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li><strong>Procurement:</strong> Contractual protections (documentation, audit, and change-notification rights) negotiated before signing determine how much governance visibility an agency retains for the life of a vendor AI system.</li>
                    <li><strong>Human Oversight:</strong> Effective oversight must be actively designed to counter automation bias, not simply inserted as a rubber-stamp approval step.</li>
                    <li><strong>Monitoring:</strong> Deployed AI requires continuous monitoring across technical performance, fairness, and override-rate signals - a one-time launch validation is not sufficient.</li>
                    <li><strong>Incident Response:</strong> AI incidents extend well beyond security breaches to include discriminatory outcomes and unexpected behavior, often with no malicious actor involved, and may trigger regulatory reporting duties.</li>
                    <li><strong>Change Management:</strong> AI changes - including vendor-initiated ones outside an agency's direct control - require proportional re-validation, not just traditional software release testing.</li>
                </ul>

                <h3>Next Steps</h3>
                <p>With this operational foundation, you're ready to proceed to:</p>
                <ul>
                    <li><strong>Course 5:</strong> Strategic Leadership & Governance - building the organizational structures that sustain these operational practices over time</li>
                </ul>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'An agency\'s AI vendor updates their underlying model without prior notice, and the agency only discovers the change through its own regression testing weeks later. What procurement-stage protection would have most directly prevented this gap?',
                    options: [
                        'A lower contract price',
                        'A contractual change-notification requirement giving advance notice of material model updates',
                        'A longer contract term',
                        'A requirement that the vendor use open-source software'
                    ],
                    correct: 1,
                    explanation: 'Change-notification clauses, negotiated during procurement, are specifically designed to close this gap by requiring vendors to notify the agency before material model changes reach production.'
                },
                {
                    type: 'multiple-choice',
                    question: 'A steadily increasing rate of human reviewers overriding an AI system\'s recommendations for a specific case type is best understood as:',
                    options: [
                        'Irrelevant operational noise',
                        'A useful early monitoring signal that often reveals declining model quality before formal accuracy metrics do',
                        'Proof that human reviewers are performing poorly',
                        'A sign that human oversight should be removed'
                    ],
                    correct: 1,
                    explanation: 'Rising override rates are a valuable, underused monitoring signal that frequently surfaces model degradation earlier than periodic formal accuracy reporting would.'
                },
                {
                    type: 'free-text',
                    question: 'Your agency discovers that a fraud-detection model has been producing biased outcomes against a specific demographic group for the past two months, caused by an undetected retraining issue. Walk through how the incident response, remediation, and change management practices from this course would apply.',
                    sampleAnswer: 'Incident response: treat this as an AI incident even though no malicious actor was involved - detect scope (how many decisions over the two months), contain (pause or revert the model to a prior validated version), and assess severity (what harm resulted for the affected group). Remediation: identify everyone plausibly affected, not just those who complained, correct wrongly-flagged cases retroactively, and proactively notify affected individuals; assess whether this meets any regulatory incident-reporting threshold. Change management: this traces back to an undetected retraining change - going forward, retraining should trigger mandatory full fairness re-validation before deployment (per the change management framework), and monitoring should include subgroup performance tracking so this kind of drift is caught within days rather than months next time.'
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
    },
    'course-5-2': {
        title: 'Leading Ethical AI Culture',
        sections: [
            {
                title: 'Culture: The Foundation Structures Alone Can\'t Provide',
                content: `<p>An organization can have a perfectly designed governance structure - clear roles, a well-staffed ethics board, comprehensive policies - and still produce harmful AI outcomes if the underlying culture doesn't genuinely value raising concerns. Structure defines what should happen; culture determines what actually does.</p>

                <h3>Signs Culture Is Working</h3>
                <ul>
                    <li>Staff raise concerns about a project's ethics or fairness without being explicitly asked to, and without fear of being seen as obstructive.</li>
                    <li>Delivery deadlines are adjusted, not just noted, when a legitimate governance concern is raised late in a project.</li>
                    <li>Leaders visibly credit and reward people who caught problems before launch, not just people who shipped features on time.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">The Leadership Test</div>
                    <p>Ask any team building or deploying AI: "Has anyone here ever delayed or stopped a project over an ethics concern, and what happened to them afterward?" The answer reveals more about your actual governance culture than any policy document.</p>
                </div>`
            },
            {
                title: 'Practices That Build Ethical AI Culture',
                content: `<p>Culture change is not achieved through a single training session or a values poster - it requires sustained, deliberate leadership practice.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Practice</th><th>What It Looks Like</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Psychological safety</td><td>Leaders explicitly and repeatedly invite dissent, and respond to raised concerns with genuine engagement rather than defensiveness</td></tr>
                        <tr><td>Incentive alignment</td><td>Performance reviews and promotion decisions credit people for catching problems, not solely for shipping fast</td></tr>
                        <tr><td>Storytelling</td><td>Sharing internal (and external) case studies of AI failures and near-misses, including the organization's own, as learning opportunities rather than embarrassments to bury</td></tr>
                        <tr><td>Leadership modeling</td><td>Senior leaders visibly ask hard ethical questions themselves in reviews, rather than delegating all ethical scrutiny downward</td></tr>
                        <tr><td>Accessible escalation</td><td>Multiple, genuinely safe channels to raise concerns, including ones that bypass a potentially resistant direct manager</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Culture is built more by what leaders do in the moment a real concern is raised than by any stated values. One visible instance of a leader delaying a launch to address a legitimate concern does more for culture than a year of training slides.</p>
                </div>`
            },
            {
                title: 'Diagnosing and Repairing a Weak Ethics Culture',
                content: `<p>Even well-intentioned organizations can develop weak AI ethics cultures over time, particularly under sustained delivery pressure. Leaders need to actively diagnose this rather than assume good policy guarantees good culture.</p>

                <h3>Warning Signs</h3>
                <ul>
                    <li>Ethics or governance review is treated as a final rubber-stamp step rather than genuine scrutiny.</li>
                    <li>Concerns are raised informally ("in the hallway") but never through formal channels, suggesting people don't trust the formal channels to respond well.</li>
                    <li>The same small group of people always raises concerns, while everyone else stays silent - suggesting broader silencing rather than genuine absence of concerns.</li>
                    <li>Post-incident reviews focus on "who missed this" rather than "what in our culture or process allowed this to be missed."</li>
                </ul>

                <h3>Repair Strategies</h3>
                <p>Repairing a weak culture starts with leadership visibly changing its own behavior first - responding constructively to the next concern raised, publicly, before asking staff to trust that things have changed. Policy changes alone, without a visible shift in how leadership actually responds to real concerns, will not rebuild trust.</p>

                <div class="info-box warning">
                    <div class="info-box-title">A Hard Truth</div>
                    <p>If your organization has previously punished, sidelined, or ignored someone for raising a legitimate AI ethics concern, no policy update will repair the culture until that pattern is visibly and credibly reversed.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Why can a well-designed governance structure still fail to prevent harmful AI outcomes?',
                    options: [
                        'Governance structures are always sufficient on their own',
                        'Culture determines whether people actually use the structure to raise and act on concerns, regardless of how well the structure is designed on paper',
                        'Structure and culture are the same thing',
                        'Only technical controls matter, not organizational factors'
                    ],
                    correct: 1,
                    explanation: 'Structure defines what should happen (roles, policies, review boards); culture determines whether people actually raise concerns and whether leadership responds constructively when they do.'
                },
                {
                    type: 'free-text',
                    question: 'What single leadership action does the most to build (or destroy) an organization\'s ethical AI culture, according to this module?',
                    sampleAnswer: 'How leadership visibly responds when someone raises a genuine ethics or governance concern - especially if it means delaying a launch or adding cost - does more to build or destroy the culture than any policy, training program, or values statement. A leader who visibly credits and acts on a raised concern builds trust that the process is real; a leader who dismisses or penalizes someone for raising a concern signals, regardless of stated policy, that raising concerns is unsafe.'
                }
            ]
        }
    },
    'course-5-3': {
        title: 'Stakeholder Communication',
        sections: [
            {
                title: 'Why AI Governance Communication Is a Leadership Skill',
                content: `<p>Technical AI governance work - risk assessments, fairness testing, documentation - only creates value if it is communicated effectively to the people who need to act on it or approve it. Senior leaders are frequently the translation layer between technical AI governance work and the non-technical decision-makers, boards, and public who must understand and trust it.</p>

                <h3>Common Communication Failures</h3>
                <ul>
                    <li>Presenting technical risk assessments to a board or minister in language only a data scientist would follow, leading to rubber-stamp approval without genuine understanding.</li>
                    <li>Over-simplifying to the point of hiding real, material risk, leaving decision-makers unable to make an informed choice.</li>
                    <li>Communicating only when something goes wrong, rather than building an ongoing relationship of trust and transparency with stakeholders.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">The Leadership Role</div>
                    <p>Effective AI governance leaders don't just approve technical reports - they actively translate them into language and framing appropriate for each audience, and know when a simplified summary is helping understanding versus when it is hiding a decision that deserves genuine scrutiny.</p>
                </div>`
            },
            {
                title: 'Tailoring the Message by Audience',
                content: `<p>The same underlying facts about an AI system's risk profile need to be communicated differently depending on who is receiving the message and what decision they need to make.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Audience</th><th>What They Need to Decide</th><th>Communication Approach</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>Board / ministers</td><td>Whether to approve, fund, or halt a program</td><td>Concise risk/benefit framing tied to strategic and political consequences, not technical detail</td></tr>
                        <tr><td>Frontline staff</td><td>How to use the system day-to-day, including when to override it</td><td>Practical, scenario-based guidance rather than abstract principles</td></tr>
                        <tr><td>Technical teams</td><td>What to build, test, and monitor</td><td>Detailed, precise technical requirements and acceptance criteria</td></tr>
                        <tr><td>Public / media</td><td>Whether to trust the organization's use of AI</td><td>Plain-language, honest framing - avoiding both alarmism and defensive minimization</td></tr>
                        <tr><td>Affected individuals</td><td>Whether and how to challenge a specific decision</td><td>Direct, individual-level explanation of the decision and available recourse</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Before any major AI governance communication, ask: what decision does this audience need to make, and what do they actually need to know to make it well? Tailor content to that decision, not to a generic "explain the AI system" template.</p>
                </div>`
            },
            {
                title: 'Communicating Through Difficult Moments',
                content: `<p>The hardest communication challenges arise during incidents, budget pressure, or when genuine uncertainty exists - and how leaders handle these moments defines their credibility for years afterward.</p>

                <h3>Incident Disclosure</h3>
                <p>When an AI system causes harm, timely, honest, proactive disclosure - even when uncomfortable - preserves more trust than a defensive or delayed response that is later perceived as concealment. Acknowledge what is known, what is still being investigated, and what concrete steps are being taken, rather than waiting for complete certainty before saying anything.</p>

                <h3>Defending Governance Investment Under Budget Pressure</h3>
                <p>When governance activities compete with delivery timelines for resources, leaders need to communicate the cost of governance against the (often larger, if less visible) cost of failure - using concrete prior examples rather than abstract risk language.</p>

                <h3>Admitting Genuine Uncertainty</h3>
                <p>Not every AI governance question has a confident answer. Leaders who acknowledge genuine uncertainty ("we don't yet have a complete answer, and here is what we're doing to get one") generally build more durable trust than those who project false confidence that is later proven wrong.</p>

                <div class="info-box example">
                    <div class="info-box-title">Case in Point</div>
                    <p>Contrast two agencies' responses to a discovered fairness issue: one issues a defensive, minimizing statement and is later found to have known about the issue for months, permanently damaging public trust. The other proactively discloses the issue as soon as confirmed, explains remediation steps clearly, and is subsequently seen as a credible, trustworthy actor - despite the underlying failure being similar in severity.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'What should determine how an AI governance communication is framed for a specific audience?',
                    options: [
                        'Always use the same technical detail regardless of audience',
                        'What decision that audience needs to make and what they need to know to make it well',
                        'Whichever framing makes the AI system look best',
                        'The personal preference of the presenter'
                    ],
                    correct: 1,
                    explanation: 'Effective communication starts from what decision the audience needs to make - a board approving funding needs different information, framed differently, than frontline staff needing to know when to override a system.'
                },
                {
                    type: 'free-text',
                    question: 'Why does proactive, honest incident disclosure often preserve more trust than a delayed or defensive response, even though it means admitting a failure sooner?',
                    sampleAnswer: 'Delayed or defensive disclosure, if later revealed to have concealed a known issue, is typically perceived as a deliberate cover-up, which damages trust far more severely and durably than the original failure itself. Proactive disclosure - even while some details are still being investigated - signals that the organization takes the issue seriously and is not trying to hide it, which tends to preserve stakeholder and public trust even through a genuine failure.'
                }
            ]
        }
    },
    'course-5-4': {
        title: 'Strategic AI Risk Management',
        sections: [
            {
                title: 'From Project-Level to Enterprise-Level Risk',
                content: `<p>Earlier courses covered risk assessment for individual AI projects. Strategic leaders must additionally manage AI risk at the enterprise level - understanding how risks aggregate, interact, and compare across an entire portfolio of AI systems.</p>

                <h3>Why Enterprise-Level View Matters</h3>
                <ul>
                    <li><strong>Aggregation:</strong> Ten "medium-risk" AI systems, each individually approved, can collectively represent an unacceptable concentration of organizational risk that no single project review would catch.</li>
                    <li><strong>Interaction effects:</strong> AI systems increasingly feed into or depend on one another; a failure in one upstream system can silently propagate into several downstream systems' decisions.</li>
                    <li><strong>Resource allocation:</strong> Enterprise risk visibility lets leaders direct limited governance resources (skilled reviewers, audit capacity) toward the highest-risk systems in the portfolio, rather than spreading effort evenly regardless of risk.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">A Portfolio, Not a List</div>
                    <p>Strategic AI risk management treats deployed AI systems as a portfolio to be actively managed - with visibility into aggregate exposure - rather than a simple list of individually-approved projects that nobody looks at collectively.</p>
                </div>`
            },
            {
                title: 'Building an AI Risk Register and Portfolio View',
                content: `<p>A practical tool for enterprise-level AI risk management is a maintained risk register covering every deployed and in-development AI system across the organization.</p>

                <table class="content-table">
                    <thead>
                        <tr><th>Register Field</th><th>Purpose</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>System description and owner</td><td>Establishes accountability and a single point of contact for each system</td></tr>
                        <tr><td>Risk classification</td><td>Enables sorting and prioritization across the portfolio (e.g., aligned to EU AI Act risk tiers or an internal equivalent)</td></tr>
                        <tr><td>Dependencies</td><td>Flags which systems feed into or rely on others, surfacing interaction risk</td></tr>
                        <tr><td>Last validation / audit date</td><td>Identifies systems overdue for re-validation</td></tr>
                        <tr><td>Open issues / mitigations in progress</td><td>Tracks known risks that haven't yet been fully addressed</td></tr>
                        <tr><td>Vendor / internal build</td><td>Flags systems with vendor dependency risk (see Module 4.1) for portfolio-level vendor concentration analysis</td></tr>
                    </tbody>
                </table>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Review the risk register at portfolio level on a regular cadence, asking not just "is each system individually acceptable" but "what does our aggregate AI risk exposure look like, and is it within our organization's risk tolerance?"</p>
                </div>`
            },
            {
                title: 'Board and Executive Risk Reporting',
                content: `<p>Strategic risk management requires translating the risk register into reporting that boards and executives can genuinely use to govern, not just review.</p>

                <h3>Effective Executive AI Risk Reporting</h3>
                <ul>
                    <li>Leads with a small number of the highest-priority risks and their status, rather than an exhaustive list nobody will read in detail.</li>
                    <li>Distinguishes clearly between risks that are actively being mitigated versus risks the organization has knowingly accepted, with named accountability for each.</li>
                    <li>Tracks trend over time (is aggregate risk exposure improving or worsening), not just a point-in-time snapshot.</li>
                    <li>Connects AI risk explicitly to the organization's broader enterprise risk management framework, rather than treating it as a separate, siloed concern.</li>
                </ul>

                <div class="info-box warning">
                    <div class="info-box-title">A Common Gap</div>
                    <p>Many boards receive detailed reports on financial and cybersecurity risk but little to no aggregate visibility into AI risk, even as AI systems increasingly influence consequential decisions. Closing this reporting gap is a core strategic leadership responsibility, not merely a technical governance function's job.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Why might ten individually-approved "medium-risk" AI systems still represent a serious governance problem at the enterprise level?',
                    options: [
                        'Individual approval always guarantees aggregate safety',
                        'Their combined risk can represent an unacceptable aggregate concentration, and interaction effects between them may not be visible from any single project review',
                        'Medium-risk systems cannot be aggregated in any way',
                        'This scenario is purely theoretical and never occurs in practice'
                    ],
                    correct: 1,
                    explanation: 'Enterprise-level risk management specifically addresses aggregation and interaction effects across a portfolio of systems - factors that individual project-level risk reviews are not designed to catch.'
                },
                {
                    type: 'free-text',
                    question: 'What should an effective executive AI risk report prioritize, and what is a common failure mode to avoid?',
                    sampleAnswer: 'An effective report should lead with a small number of the highest-priority risks and their current status, clearly distinguish between risks being actively mitigated versus risks knowingly accepted (with named ownership), and show trend over time rather than just a snapshot. A common failure mode is producing an exhaustive, undifferentiated list of every identified risk with no prioritization, which boards and executives will not meaningfully engage with, effectively defeating the purpose of the report.'
                }
            ]
        }
    },
    'course-5-5': {
        title: 'Future of AI Governance',
        sections: [
            {
                title: 'Emerging Trends Leaders Must Track',
                content: `<p>AI governance is one of the fastest-moving policy and technology areas any leader will manage. Strategic leaders need mechanisms to stay current, since the specific facts (which regulations are in force, which frameworks are current) will keep changing after this course is completed.</p>

                <h3>Trends Shaping the Next Phase of AI Governance</h3>
                <ul>
                    <li><strong>Agentic AI:</strong> The shift from AI systems that produce a single output for human review toward autonomous agents that plan and take multi-step actions is creating governance challenges (unauthorized privilege escalation, goal drift) that most current frameworks were not designed around - covered in depth in Course 3's Global Regulatory Landscape module.</li>
                    <li><strong>Regulatory fragmentation versus harmonization:</strong> Jurisdictions are moving in different directions simultaneously - the EU pursuing (and now partially delaying) comprehensive regulation, the US shifting toward a deregulatory federal posture while individual states legislate independently, and international bodies alternating between safety-focused and adoption-focused framing across successive summits.</li>
                    <li><strong>Frontier model governance:</strong> As the most capable AI models grow more powerful, dedicated governance approaches for "frontier" models (such as California's SB 53 safety and disclosure requirements) are emerging as a distinct regulatory category from general-purpose AI rules.</li>
                    <li><strong>Standards maturation:</strong> ISO/IEC 42001 and its companion standards (impact assessment, certification body requirements) are maturing from novel to expected baseline practice, similar to the trajectory ISO 27001 followed for information security.</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">The One Durable Certainty</div>
                    <p>The specific regulations, frameworks, and dates in this course will continue to change. What will not change is the underlying need for the governance capabilities this program builds: risk assessment, human oversight, monitoring, documentation, and an organizational culture that takes ethical AI seriously.</p>
                </div>`
            },
            {
                title: 'Preparing the Organization for Continued Change',
                content: `<p>Rather than trying to predict the future in detail, strategic leaders should build organizational capacity to adapt as the landscape keeps shifting.</p>

                <h3>Building an Adaptive Governance Capability</h3>
                <ul>
                    <li><strong>Horizon scanning:</strong> Assign explicit ownership for monitoring regulatory and technological developments relevant to your AI portfolio, rather than relying on ad hoc awareness.</li>
                    <li><strong>Modular governance design:</strong> Build internal policies and processes around durable principles (risk-based tiering, human oversight, documentation) that can absorb new specific regulatory requirements without a full redesign each time a law changes.</li>
                    <li><strong>Scenario planning:</strong> Periodically war-game plausible near-term developments (a new binding regulation, a major AI incident in your sector, a significant new capability) and how the organization would respond.</li>
                    <li><strong>External engagement:</strong> Participate in industry and cross-government forums tracking AI governance developments, both to stay informed and to help shape emerging norms before they harden into binding requirements.</li>
                </ul>

                <div class="info-box tip">
                    <div class="info-box-title">Practical Tip</div>
                    <p>Build your organization's AI governance policies around the durable "why" (protecting people from harm, maintaining accountability, sustaining public trust) rather than solely around the current specific "what" of any single regulation - durable principles absorb regulatory change far more gracefully than compliance checklists tied to one law's exact wording.</p>
                </div>`
            },
            {
                title: 'A Leader\'s Checklist for Staying Ahead',
                content: `<p>Concluding this course, use the following checklist periodically to assess whether your organization's AI governance capability is keeping pace with the field.</p>

                <ul>
                    <li>Do we have someone explicitly responsible for tracking regulatory and technological developments relevant to our AI systems?</li>
                    <li>Could our governance policies absorb a significant new regulatory requirement without a complete redesign?</li>
                    <li>Have we assessed whether any of our AI systems are moving toward more autonomous, agentic behavior that our current oversight model wasn't designed for?</li>
                    <li>Do we have genuine visibility into our aggregate AI risk exposure at the executive and board level (Module 5.4), not just individual project sign-offs?</li>
                    <li>Is our organizational culture one where people would actually raise a concern about a new AI capability before it becomes a public incident?</li>
                </ul>

                <div class="info-box important">
                    <div class="info-box-title">Closing Thought</div>
                    <p>The organizations that navigate AI governance most successfully over time are rarely the ones that predicted every regulatory change correctly - they are the ones that built adaptable governance capability and a genuinely engaged culture, so that whatever comes next, they are ready to respond rather than caught by surprise.</p>
                </div>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'Why does this course recommend building governance policy around durable principles rather than the exact wording of current regulations?',
                    options: [
                        'Because current regulations are unimportant',
                        'Because durable principles (risk-based tiering, human oversight, documentation) can absorb new specific regulatory requirements without requiring a complete policy redesign each time a law changes',
                        'Because regulations never change',
                        'Because principles are easier to write than detailed policies'
                    ],
                    correct: 1,
                    explanation: 'Regulatory specifics change frequently (as this course\'s own content has needed to reflect), while durable underlying principles remain stable and can flex to absorb new specific requirements more easily than a rigid, regulation-specific compliance checklist.'
                },
                {
                    type: 'free-text',
                    question: 'What is "horizon scanning" in the context of AI governance, and why does this course recommend assigning it explicit ownership rather than leaving it to ad hoc awareness?',
                    sampleAnswer: 'Horizon scanning is the practice of actively and systematically monitoring regulatory, technological, and industry developments relevant to an organization\'s AI systems, rather than only reacting after a change has already taken effect. Assigning explicit ownership matters because ad hoc awareness - relying on individuals to notice developments incidentally - reliably misses important changes, especially in a field moving as quickly as AI governance; without a named owner and a defined process, the organization is likely to discover major shifts (like a regulatory delay or a new governance framework) too late to prepare properly.'
                }
            ]
        }
    },
    'course-5-6': {
        title: 'Leadership Assessment & Certification',
        sections: [
            {
                title: 'Course Summary',
                content: `<p>This leadership module has built your capability to govern AI at the strategic and organizational level, completing the full arc of this program from foundational concepts through executive practice:</p>

                <h3>Key Takeaways</h3>
                <ul>
                    <li><strong>Governance Structures:</strong> Centralized, federated, and embedded models each suit different organizational contexts, but all require genuine executive sponsorship and authority to be effective rather than merely advisory.</li>
                    <li><strong>Ethical Culture:</strong> Structure alone cannot guarantee good outcomes - culture, and specifically how leaders respond when concerns are raised, determines whether governance structures are actually used.</li>
                    <li><strong>Stakeholder Communication:</strong> Effective AI governance communication is tailored to what decision each specific audience needs to make, and is tested most under pressure - incidents, budget constraints, and genuine uncertainty.</li>
                    <li><strong>Strategic Risk Management:</strong> Leaders need portfolio-level visibility into aggregate AI risk, not just individual project approvals, supported by a maintained risk register and meaningful board-level reporting.</li>
                    <li><strong>The Future:</strong> The specific regulatory landscape will keep changing - durable governance capability comes from adaptive processes and genuine organizational culture, not memorizing today's rules.</li>
                </ul>

                <h3>Program Completion</h3>
                <p>Having completed all five courses - AI Governance Foundations, Technical AI Ethics & Safety, Regulatory Compliance & Risk Management, AI Implementation & Operations, and Strategic Leadership & Governance - you have covered the full spectrum from foundational AI literacy through executive-level governance strategy. Consider the two book-based courses (Principles of AI Governance, and Model Risk Management) for additional depth grounded in a single authoritative text.</p>`
            }
        ],
        assessment: {
            questions: [
                {
                    type: 'multiple-choice',
                    question: 'According to this course, which factor most determines whether a well-designed AI governance structure actually functions as intended?',
                    options: [
                        'The number of policies documented',
                        'Organizational culture, particularly how leadership responds when someone raises a genuine concern',
                        'The size of the compliance budget alone',
                        'How advanced the AI technology is'
                    ],
                    correct: 1,
                    explanation: 'This course emphasizes throughout that structure defines what should happen, but culture - especially leadership\'s real response to raised concerns - determines whether it actually does.'
                },
                {
                    type: 'multiple-choice',
                    question: 'A board receives no aggregate reporting on AI risk across the organization\'s AI portfolio, only individual project sign-offs. What strategic risk management gap does this represent?',
                    options: [
                        'No gap - individual sign-offs are always sufficient',
                        'Missing enterprise-level / portfolio risk visibility, which can hide aggregate risk concentration and interaction effects across systems',
                        'A sign that the organization has too few AI systems',
                        'An issue only relevant to technical teams, not the board'
                    ],
                    correct: 1,
                    explanation: 'Enterprise-level risk visibility - via a maintained risk register and board-level reporting - is necessary to catch aggregate risk concentration and cross-system interaction effects that individual project reviews cannot surface.'
                },
                {
                    type: 'free-text',
                    question: 'As a capstone reflection: identify one specific AI governance capability from this entire program (any course) that you believe your own organization (or a hypothetical government agency) most needs to strengthen, and explain why, using concepts from at least two different courses in this program.',
                    sampleAnswer: 'Example answer: Our organization most needs to strengthen post-deployment monitoring (Course 4). We do thorough risk assessment and fairness testing before launch (Course 1\'s risk assessment framework, Course 2\'s fairness metrics), but have no structured process for ongoing drift detection or subgroup performance monitoring after go-live. This matters because, as covered in Course 4, pre-deployment validation only certifies a system against conditions at launch - without continuous monitoring, we could develop the exact kind of undetected fairness degradation described in the Course 3 regulatory modules, only discovering it after a complaint, audit, or media investigation rather than through our own governance processes.'
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
