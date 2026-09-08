import type { CareerSeed } from "@/data/careers";
import { l } from "@/lib/localized";

export const specialistCareers: CareerSeed[] = [
  {
    id: "data-analytics-bi",
    familyId: "work-with-data",
    title: l("Data Analytics & BI", "Data Analytics & BI"),
    description: l(
      "Turn messy questions and trustworthy data into decisions, metrics and explanations—not merely attractive dashboards.",
      "এলোমেলো business question ও বিশ্বাসযোগ্য data থেকে সিদ্ধান্ত, metric ও পরিষ্কার ব্যাখ্যা তৈরি করো—শুধু সুন্দর dashboard নয়।",
    ),
    work: [
      l(
        "Clarify the decision behind a vague request.",
        "অস্পষ্ট request-এর পেছনের decision পরিষ্কার করা।",
      ),
      l(
        "Query, clean and validate data from several sources.",
        "কয়েকটি source-এর data query, clean আর validate করা।",
      ),
      l(
        "Define metrics with owners, grain and caveats.",
        "Owner, grain আর caveat-সহ metric define করা।",
      ),
      l(
        "Build accessible reports and investigate unexpected changes.",
        "Accessible report বানানো আর unexpected change investigate করা।",
      ),
      l(
        "Explain findings, uncertainty and limits to non-specialists.",
        "Non-specialist-কে finding, uncertainty আর limitation বোঝানো।",
      ),
    ],
    enjoy: [
      l(
        "You ask what decision a chart should change.",
        "Chart কোন decision বদলাবে—এই প্রশ্ন করতে ভালো লাগে।",
      ),
      l(
        "You enjoy finding why two reports disagree.",
        "দুটি report কেন মিলছে না খুঁজতে ভালো লাগে।",
      ),
      l(
        "You can explain numbers without hiding uncertainty.",
        "Uncertainty না লুকিয়ে number বোঝাতে পারো।",
      ),
    ],
    dislike: [
      l(
        "Stakeholder questions feel like interruptions to the real work.",
        "Stakeholder-এর প্রশ্নকে real work-এর interruption মনে হয়।",
      ),
      l(
        "You want every dataset to arrive clean and documented.",
        "সব dataset clean আর documented হলেই শুধু কাজ করতে চাও।",
      ),
      l(
        "You prefer visual polish to checking whether a metric is valid.",
        "Metric valid কি না দেখার চেয়ে visual polish বেশি পছন্দ।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 2,
      systems: 1,
      investigation: 3,
      creativity: 2,
      communication: 3,
      production: 2,
    },
    foundation: [
      l(
        "Spreadsheet reasoning, SQL, descriptive statistics and Git basics.",
        "Spreadsheet reasoning, SQL, descriptive statistics আর Git basics।",
      ),
      l(
        "Tables, joins, aggregation, missing data and data types.",
        "Table, join, aggregation, missing data আর data type।",
      ),
      l(
        "Questions, decisions, measures and ethical handling of data.",
        "Question, decision, measure আর data-এর ethical handling।",
      ),
    ],
    core: [
      l(
        "Metric definitions, grain, cohorts and comparison baselines.",
        "Metric definition, grain, cohort আর comparison baseline।",
      ),
      l(
        "Data cleaning, validation and reproducible analysis.",
        "Data cleaning, validation আর reproducible analysis।",
      ),
      l(
        "Visual encoding, accessibility and explanatory writing.",
        "Visual encoding, accessibility আর explanatory writing।",
      ),
    ],
    practical: [
      l(
        "Answer one decision question from a small documented dataset.",
        "ছোট documented dataset থেকে একটি decision question-এর answer দাও।",
      ),
      l(
        "Create checks for duplicates, missing values and impossible ranges.",
        "Duplicate, missing value আর impossible range-এর check বানাও।",
      ),
      l(
        "Present the finding, caveat and next question in one page.",
        "এক page-এ finding, caveat আর next question দেখাও।",
      ),
    ],
    later: [
      l(
        "Experiment design, causal inference and forecasting.",
        "Experiment design, causal inference আর forecasting।",
      ),
      l(
        "Semantic layers, governed metrics and analytics engineering.",
        "Semantic layer, governed metric আর analytics engineering।",
      ),
      l(
        "Domain depth in product, finance, operations or public policy.",
        "Product, finance, operations বা public policy-তে domain depth।",
      ),
    ],
    notYet: [
      l(
        "A dashboard before agreeing what the metric means.",
        "Metric-এর অর্থ ঠিক করার আগেই dashboard।",
      ),
      l(
        "Causal claims from a correlation or a tiny convenience sample.",
        "Correlation বা tiny convenience sample থেকে causal claim।",
      ),
      l(
        "Collecting certificates for five BI tools at once.",
        "একসঙ্গে পাঁচটি BI tool-এর certificate collect করা।",
      ),
    ],
    resources: [
      "sqlbolt",
      "kaggle-pandas",
      "openintro-statistics",
      "power-bi-learning",
    ],
    related: [
      "data-engineering",
      "machine-learning",
      "technical-product-leadership",
    ],
    day: [
      [
        "09:30",
        l(
          "Clarify why a retention metric changed.",
          "Retention metric কেন বদলেছে clarify করা।",
        ),
      ],
      [
        "12:00",
        l(
          "Trace a duplicate through a query and source definition.",
          "Query আর source definition ধরে duplicate trace করা।",
        ),
      ],
      [
        "15:30",
        l(
          "Review a report with operations and record its caveats.",
          "Operations-এর সঙ্গে report review আর caveat লেখা।",
        ),
      ],
    ],
    ai: [
      {
        task: l(
          "Drafting queries and chart variants",
          "Query আর chart variant draft",
        ),
        exposure: "higher",
        explanation: l(
          "AI can draft familiar SQL and chart code, but plausible syntax can encode the wrong grain or denominator.",
          "AI familiar SQL আর chart code draft করতে পারে; plausible syntax-এ ভুল grain বা denominator থাকতে পারে।",
        ),
        studentResponse: l(
          "Define the metric first, inspect rows and test totals against an independent calculation.",
          "আগে metric define করে row inspect আর independent calculation দিয়ে total test করো।",
        ),
      },
      {
        task: l(
          "Investigating changes and anomalies",
          "Change আর anomaly investigate",
        ),
        exposure: "medium",
        explanation: l(
          "AI can suggest hypotheses, but it cannot know which business event or data defect actually occurred.",
          "AI hypothesis দিতে পারে; কোন business event বা data defect সত্যি ঘটেছে তা নিজে জানে না।",
        ),
        studentResponse: l(
          "Keep an evidence log and separate observations, hypotheses and verified causes.",
          "Evidence log রাখো; observation, hypothesis আর verified cause আলাদা করো।",
        ),
      },
      {
        task: l(
          "Framing decisions and accountable communication",
          "Decision frame আর accountable communication",
        ),
        exposure: "lower",
        explanation: l(
          "Choosing what to measure and how to communicate consequences needs context and accountable judgment.",
          "কী measure করবে আর consequence কীভাবে বলবে—এতে context আর accountable judgment লাগে।",
        ),
        studentResponse: l(
          "Practice asking who is affected, what is missing and what decision the evidence supports.",
          "কার ওপর প্রভাব, কী missing আর evidence কোন decision support করে—এসব জিজ্ঞেস করো।",
        ),
      },
    ],
  },
  {
    id: "ai-engineering",
    familyId: "build-intelligence",
    title: l("AI Engineering", "AI Engineering"),
    description: l(
      "Build dependable product features around existing AI models, with retrieval, evaluation, cost, latency and safety treated as engineering constraints.",
      "প্রস্তুত AI model ব্যবহার করে নির্ভরযোগ্য product feature বানাও; retrieval, evaluation, cost, latency ও safety-কে বাড়তি বিষয় নয়, মূল engineering constraint হিসেবে ধরো।",
    ),
    work: [
      l(
        "Translate a user task into an evaluable AI feature.",
        "User task-কে evaluable AI feature-এ রূপ দেওয়া।",
      ),
      l(
        "Design prompts, retrieval, tools and structured outputs.",
        "Prompt, retrieval, tool আর structured output design করা।",
      ),
      l(
        "Build representative evaluation sets and regression checks.",
        "Representative evaluation set আর regression check বানানো।",
      ),
      l(
        "Measure quality, latency, cost, privacy and failure modes.",
        "Quality, latency, cost, privacy আর failure mode measure করা।",
      ),
      l(
        "Monitor production behavior and create safe fallback paths.",
        "Production behavior monitor আর safe fallback path বানানো।",
      ),
    ],
    enjoy: [
      l(
        "You like turning an impressive demo into a repeatable system.",
        "Impressive demo-কে repeatable system বানাতে ভালো লাগে।",
      ),
      l(
        "You enjoy evaluating ambiguous outputs with explicit evidence.",
        "Explicit evidence দিয়ে ambiguous output evaluate করতে ভালো লাগে।",
      ),
      l(
        "You care about backend reliability as much as model capability.",
        "Model capability-এর মতো backend reliability-ও গুরুত্বপূর্ণ মনে হয়।",
      ),
    ],
    dislike: [
      l(
        "You only enjoy trying new models, not testing or maintaining them.",
        "শুধু নতুন model try করতে ভালো লাগে; test বা maintain নয়।",
      ),
      l(
        "Probabilistic output and changing provider behavior feel intolerable.",
        "Probabilistic output আর provider behavior বদলানো অসহ্য লাগে।",
      ),
      l(
        "You want one prompt to replace product discovery and system design.",
        "একটি prompt দিয়েই product discovery আর system design replace করতে চাও।",
      ),
    ],
    dimensions: {
      coding: 3,
      mathematics: 2,
      systems: 3,
      investigation: 3,
      creativity: 2,
      communication: 2,
      production: 3,
    },
    foundation: [
      l(
        "Python or TypeScript, HTTP APIs, JSON, Git and testing.",
        "Python বা TypeScript, HTTP API, JSON, Git আর testing।",
      ),
      l(
        "Tokens, context, embeddings, sampling and model limitations.",
        "Token, context, embedding, sampling আর model limitation।",
      ),
      l(
        "Baseline task design and labelled examples before frameworks.",
        "Framework-এর আগে baseline task design আর labelled example।",
      ),
    ],
    core: [
      l(
        "Structured outputs, retrieval, tool boundaries and citations.",
        "Structured output, retrieval, tool boundary আর citation।",
      ),
      l(
        "Evaluation sets, quality metrics and failure taxonomies.",
        "Evaluation set, quality metric আর failure taxonomy।",
      ),
      l(
        "Cost, latency, privacy, prompt injection and fallback behavior.",
        "Cost, latency, privacy, prompt injection আর fallback behavior।",
      ),
    ],
    practical: [
      l(
        "Build a bounded assistant over documents you own.",
        "নিজের document নিয়ে bounded assistant বানাও।",
      ),
      l(
        "Compare it with a simple keyword baseline on labelled questions.",
        "Labelled question-এ simple keyword baseline-এর সঙ্গে compare করো।",
      ),
      l(
        "Add regression checks, source display and an honest refusal path.",
        "Regression check, source display আর honest refusal path দাও।",
      ),
    ],
    later: [
      l(
        "Hybrid retrieval, reranking and agent/tool evaluation.",
        "Hybrid retrieval, reranking আর agent/tool evaluation।",
      ),
      l(
        "Observability, caching, routing and controlled rollout.",
        "Observability, caching, routing আর controlled rollout।",
      ),
      l(
        "Fine-tuning or self-hosting only when evidence justifies it.",
        "Evidence justify করলে তবেই fine-tuning বা self-hosting।",
      ),
    ],
    notYet: [
      l(
        "Agents before a single-step baseline and evaluation set.",
        "Single-step baseline আর evaluation set-এর আগেই agent।",
      ),
      l(
        "Uploading private data to an unapproved provider.",
        "Unapproved provider-এ private data upload।",
      ),
      l(
        "Claiming production quality from a few hand-picked demos.",
        "কয়েকটি hand-picked demo থেকে production quality claim।",
      ),
    ],
    resources: [
      "hf-llm-course",
      "full-stack-deep-learning",
      "made-with-ml",
      "amirul-ai-roadmap",
    ],
    related: ["machine-learning", "backend-engineering", "data-engineering"],
    day: [
      [
        "09:30",
        l(
          "Review a failed answer against the evaluation set.",
          "Failed answer evaluation set-এর সঙ্গে review করা।",
        ),
      ],
      [
        "12:00",
        l(
          "Improve retrieval and compare quality, cost and latency.",
          "Retrieval improve করে quality, cost আর latency compare করা।",
        ),
      ],
      [
        "16:00",
        l(
          "Add a regression case and review a guarded rollout.",
          "Regression case যোগ আর guarded rollout review করা।",
        ),
      ],
    ],
    ai: [
      {
        task: l(
          "Prompt and integration scaffolding",
          "Prompt আর integration scaffolding",
        ),
        exposure: "higher",
        explanation: l(
          "Models can draft the very code and prompts used to call them, but generated patterns are often untested or provider-specific.",
          "Model নিজেকে call করার code আর prompt draft করতে পারে; generated pattern প্রায়ই untested বা provider-specific।",
        ),
        studentResponse: l(
          "Keep small baselines, typed contracts and regression tests around every generated change.",
          "প্রতিটি generated change-এর চারপাশে small baseline, typed contract আর regression test রাখো।",
        ),
      },
      {
        task: l(
          "Failure analysis and evaluation design",
          "Failure analysis আর evaluation design",
        ),
        exposure: "medium",
        explanation: l(
          "AI can propose cases and judges, but model-generated evaluation can share the same blind spots as the system.",
          "AI case আর judge propose করতে পারে; model-generated evaluation-এর blind spot system-এর মতোই হতে পারে।",
        ),
        studentResponse: l(
          "Use human-labelled representative cases, deterministic checks and explicit uncertainty.",
          "Human-labelled representative case, deterministic check আর explicit uncertainty ব্যবহার করো।",
        ),
      },
      {
        task: l(
          "Risk, product boundaries and release accountability",
          "Risk, product boundary আর release accountability",
        ),
        exposure: "lower",
        explanation: l(
          "Someone must decide when the feature should refuse, escalate or not be built.",
          "Feature কখন refuse, escalate বা build-ই হবে না—কাউকে accountable decision নিতে হয়।",
        ),
        studentResponse: l(
          "Practice threat modelling, privacy review, staged rollout and rollback decisions.",
          "Threat model, privacy review, staged rollout আর rollback decision practice করো।",
        ),
      },
    ],
  },
  {
    id: "application-security",
    familyId: "protect-systems",
    title: l("Application Security", "Application Security"),
    description: l(
      "Help teams design, build and verify software that resists abuse—inside an authorized scope and without becoming the release police.",
      "অনুমোদিত সীমার মধ্যে team-কে এমন software তৈরি ও যাচাই করতে সাহায্য করো, যা অপব্যবহার ঠেকাতে পারে—release আটকে রাখা পুলিশ না হয়ে।",
    ),
    work: [
      l(
        "Threat-model features, data flows and trust boundaries.",
        "Feature, data flow আর trust boundary threat-model করা।",
      ),
      l(
        "Review code and designs for exploitable weaknesses.",
        "Exploitable weakness-এর জন্য code আর design review করা।",
      ),
      l(
        "Build secure defaults, tests and developer guardrails.",
        "Secure default, test আর developer guardrail বানানো।",
      ),
      l(
        "Triage findings by likelihood, impact and evidence.",
        "Likelihood, impact আর evidence দিয়ে finding triage করা।",
      ),
      l(
        "Partner on fixes, verification and learning after incidents.",
        "Fix, verification আর incident-এর পর learning-এ partner হওয়া।",
      ),
    ],
    enjoy: [
      l(
        "You naturally ask how a feature could be misused.",
        "Feature কীভাবে misuse হতে পারে স্বাভাবিকভাবে ভাবো।",
      ),
      l(
        "You like tracing input, identity and privilege across code.",
        "Code জুড়ে input, identity আর privilege trace করতে ভালো লাগে।",
      ),
      l(
        "You can explain risk without drama or blame.",
        "Drama বা blame ছাড়া risk বোঝাতে পারো।",
      ),
    ],
    dislike: [
      l(
        "You only want offensive testing and dislike prevention work.",
        "শুধু offensive testing চাও; prevention work অপছন্দ।",
      ),
      l(
        "Reading application code and collaborating with developers feels tedious.",
        "Application code পড়া আর developer collaboration tedious লাগে।",
      ),
      l(
        "You prefer vulnerability counts to understanding actual impact.",
        "Actual impact বোঝার চেয়ে vulnerability count পছন্দ।",
      ),
    ],
    dimensions: {
      coding: 3,
      mathematics: 1,
      systems: 3,
      investigation: 3,
      creativity: 2,
      communication: 3,
      production: 3,
    },
    foundation: [
      l(
        "Web/API behavior, authentication, authorization, HTTP and Git.",
        "Web/API behavior, authentication, authorization, HTTP আর Git।",
      ),
      l(
        "Input validation, sessions, secrets, dependencies and logging.",
        "Input validation, session, secret, dependency আর logging।",
      ),
      l(
        "Legal authorization, lab isolation and responsible disclosure.",
        "Legal authorization, lab isolation আর responsible disclosure।",
      ),
    ],
    core: [
      l(
        "Threat modelling, trust boundaries and abuse cases.",
        "Threat modelling, trust boundary আর abuse case।",
      ),
      l(
        "OWASP risks, secure design and code review.",
        "OWASP risk, secure design আর code review।",
      ),
      l(
        "Risk-based testing, remediation and verification.",
        "Risk-based testing, remediation আর verification।",
      ),
    ],
    practical: [
      l(
        "Threat-model a tiny app you own and rank three abuse cases.",
        "নিজের tiny app threat-model করে তিনটি abuse case rank করো।",
      ),
      l(
        "Fix and regression-test one weakness in the local app.",
        "Local app-এর একটি weakness fix আর regression-test করো।",
      ),
      l(
        "Write a calm report with scope, evidence, impact and limits.",
        "Scope, evidence, impact আর limit-সহ calm report লেখো।",
      ),
    ],
    later: [
      l(
        "Secure architecture, identity and cloud-native controls.",
        "Secure architecture, identity আর cloud-native control।",
      ),
      l(
        "Supply-chain security and security automation with review.",
        "Supply-chain security আর review-সহ security automation।",
      ),
      l(
        "Security champion programs, metrics and incident learning.",
        "Security champion program, metric আর incident learning।",
      ),
    ],
    notYet: [
      l(
        "Testing public targets without explicit written authorization.",
        "Explicit written authorization ছাড়া public target test।",
      ),
      l(
        "Running scanners before understanding scope and expected behavior.",
        "Scope আর expected behavior না বুঝে scanner চালানো।",
      ),
      l(
        "Treating every finding as critical or every developer as an opponent.",
        "সব finding-কে critical বা developer-কে opponent ভাবা।",
      ),
    ],
    resources: [
      "owasp-top-ten",
      "owasp-cheat-sheets",
      "portswigger",
      "owasp-threat-modeling",
    ],
    related: [
      "cybersecurity",
      "backend-engineering",
      "software-quality-assurance",
    ],
    day: [
      [
        "09:30",
        l(
          "Threat-model a new file-upload flow with its team.",
          "Team-এর সঙ্গে নতুন file-upload flow threat-model করা।",
        ),
      ],
      [
        "12:00",
        l(
          "Reproduce and rank a finding in an isolated test app.",
          "Isolated test app-এ finding reproduce আর rank করা।",
        ),
      ],
      [
        "15:30",
        l(
          "Review the fix and add a regression guardrail.",
          "Fix review আর regression guardrail যোগ করা।",
        ),
      ],
    ],
    ai: [
      {
        task: l(
          "Security checklist and code-review suggestions",
          "Security checklist আর code-review suggestion",
        ),
        exposure: "higher",
        explanation: l(
          "AI can flag common patterns quickly, but it produces false positives and misses context-dependent authorization flaws.",
          "AI common pattern দ্রুত flag করতে পারে; false positive দেয় আর context-dependent authorization flaw miss করে।",
        ),
        studentResponse: l(
          "Verify every claim in an authorized reproduction and trace it to a requirement or threat.",
          "প্রতিটি claim authorized reproduction-এ verify করে requirement বা threat-এর সঙ্গে trace করো।",
        ),
      },
      {
        task: l(
          "Threat exploration and remediation options",
          "Threat exploration আর remediation option",
        ),
        exposure: "medium",
        explanation: l(
          "AI can broaden hypotheses, but it does not own the system context, exploitability or operational trade-off.",
          "AI hypothesis বাড়াতে পারে; system context, exploitability বা operational trade-off own করে না।",
        ),
        studentResponse: l(
          "Map trust boundaries, validate assumptions with owners and test the chosen fix.",
          "Trust boundary map, owner-এর সঙ্গে assumption validate আর chosen fix test করো।",
        ),
      },
      {
        task: l(
          "Risk acceptance and responsible response",
          "Risk acceptance আর responsible response",
        ),
        exposure: "lower",
        explanation: l(
          "Disclosure, user harm, release timing and residual risk require accountable human decisions.",
          "Disclosure, user harm, release timing আর residual risk-এ accountable human decision লাগে।",
        ),
        studentResponse: l(
          "Practice evidence-based severity, respectful collaboration and explicit escalation paths.",
          "Evidence-based severity, respectful collaboration আর explicit escalation path practice করো।",
        ),
      },
    ],
  },
];
