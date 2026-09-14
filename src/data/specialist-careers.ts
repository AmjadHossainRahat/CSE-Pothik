import type { CareerSeed } from "@/data/careers";
import { l } from "@/lib/localized";

export const specialistCareers: CareerSeed[] = [
  {
    id: "data-analytics-bi",
    familyId: "work-with-data",
    title: l("Data Analytics & BI", "Data Analytics & BI"),
    description: l(
      "Turn messy questions and trustworthy data into decisions, metrics and explanations—not merely attractive dashboards.",
      "এলোমেলো business question ও বিশ্বাসযোগ্য data থেকে সিদ্ধান্ত, metric ও পরিষ্কার ব্যাখ্যা তৈরি করুন—শুধু সুন্দর dashboard নয়।",
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
        "Uncertainty না লুকিয়ে number বোঝাতে পারেন।",
      ),
    ],
    dislike: [
      l(
        "Stakeholder questions feel like interruptions to the real work.",
        "Stakeholder-এর প্রশ্নকে real work-এর interruption মনে হয়।",
      ),
      l(
        "You want every dataset to arrive clean and documented.",
        "সব dataset clean আর documented হলেই শুধু কাজ করতে চান।",
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
        "ছোট documented dataset থেকে একটি decision question-এর answer দিন।",
      ),
      l(
        "Create checks for duplicates, missing values and impossible ranges.",
        "Duplicate, missing value আর impossible range-এর check বানান।",
      ),
      l(
        "Present the finding, caveat and next question in one page.",
        "এক page-এ finding, caveat আর next question দেখান।",
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
          "আগে metric define করে row inspect আর independent calculation দিয়ে total test করুন।",
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
          "Evidence log রাখুন; observation, hypothesis আর verified cause আলাদা করুন।",
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
          "কার ওপর প্রভাব, কী missing আর evidence কোন decision support করে—এসব জিজ্ঞেস করুন।",
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
      "প্রস্তুত AI model ব্যবহার করে নির্ভরযোগ্য product feature বানান; retrieval, evaluation, cost, latency ও safety-কে বাড়তি বিষয় নয়, মূল engineering constraint হিসেবে ধরুন।",
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
        "একটি prompt দিয়েই product discovery আর system design replace করতে চান।",
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
        "নিজের document নিয়ে bounded assistant বানান।",
      ),
      l(
        "Compare it with a simple keyword baseline on labelled questions.",
        "Labelled question-এ simple keyword baseline-এর সঙ্গে compare করুন।",
      ),
      l(
        "Add regression checks, source display and an honest refusal path.",
        "Regression check, source display আর honest refusal path দিন।",
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
          "প্রতিটি generated change-এর চারপাশে small baseline, typed contract আর regression test রাখুন।",
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
          "Human-labelled representative case, deterministic check আর explicit uncertainty ব্যবহার করুন।",
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
          "Threat model, privacy review, staged rollout আর rollback decision practice করুন।",
        ),
      },
    ],
  },
  {
    id: "security-operations",
    familyId: "protect-systems",
    title: l(
      "Security Operations (SOC & Incident Response)",
      "Security Operations (SOC ও Incident Response)",
    ),
    description: l(
      "Turn logs, alerts and reports into evidence-led detection and response—without declaring every anomaly an attack.",
      "প্রতিটি anomaly-কে attack ঘোষণা না করে log, alert আর report থেকে evidence-led detection ও response তৈরি করুন।",
    ),
    specializations: [
      {
        title: l("SOC analyst", "SOC analyst"),
        description: l(
          "Monitor and correlate alerts, separate benign activity from plausible threats, document evidence and escalate clearly.",
          "Alert monitor ও correlate করে benign activity থেকে plausible threat আলাদা, evidence document আর পরিষ্কারভাবে escalate করা।",
        ),
      },
      {
        title: l("Incident responder", "Incident responder"),
        description: l(
          "Investigate confirmed incidents, support containment and recovery, preserve evidence and coordinate under pressure.",
          "Confirmed incident investigate, containment ও recovery support, evidence preserve এবং চাপের মধ্যে coordinate করা।",
        ),
      },
      {
        title: l(
          "Detection engineer / threat hunter",
          "Detection engineer / threat hunter",
        ),
        description: l(
          "Turn threat hypotheses into testable telemetry and detections, then measure gaps and noisy assumptions.",
          "Threat hypothesis-কে testable telemetry ও detection-এ রূপ দিয়ে gap আর noisy assumption measure করা।",
        ),
      },
      {
        title: l("Digital forensics", "Digital forensics"),
        description: l(
          "Acquire and analyze evidence with strict integrity and legal process; deeper specialization needs supervised practice.",
          "Evidence integrity আর legal process মেনে evidence acquire ও analyze করা; গভীর specialization-এ supervised practice দরকার।",
        ),
      },
    ],
    work: [
      l(
        "Monitor security telemetry and triage alerts against normal behavior.",
        "Normal behavior-এর সঙ্গে মিলিয়ে security telemetry monitor আর alert triage করা।",
      ),
      l(
        "Correlate identity, endpoint, network and application evidence into a timeline.",
        "Identity, endpoint, network আর application evidence মিলিয়ে timeline বানানো।",
      ),
      l(
        "Document confidence, impact and unanswered questions before escalation.",
        "Escalation-এর আগে confidence, impact আর unanswered question document করা।",
      ),
      l(
        "Support containment, recovery and communication during confirmed incidents.",
        "Confirmed incident-এ containment, recovery আর communication support করা।",
      ),
      l(
        "Improve detections and playbooks after false positives and incidents.",
        "False positive আর incident থেকে শিখে detection ও playbook উন্নত করা।",
      ),
    ],
    enjoy: [
      l(
        "You enjoy reconstructing what happened from incomplete evidence.",
        "অসম্পূর্ণ evidence থেকে কী ঘটেছে reconstruct করতে ভালো লাগে।",
      ),
      l(
        "You can remain methodical when an alert looks urgent.",
        "Alert urgent মনে হলেও methodical থাকতে পারেন।",
      ),
      l(
        "Writing a precise timeline feels as important as finding the cause.",
        "Cause খোঁজার মতো precise timeline লেখাকেও গুরুত্বপূর্ণ মনে হয়।",
      ),
    ],
    dislike: [
      l(
        "Shift work, repeated false positives or interrupted focus would be unacceptable.",
        "Shift work, repeated false positive বা বারবার focus ভাঙা একেবারেই unacceptable লাগবে।",
      ),
      l(
        "You prefer dramatic conclusions to checking ordinary explanations first.",
        "আগে ordinary explanation যাচাই না করে dramatic conclusion পছন্দ করেন।",
      ),
      l(
        "Protecting sensitive logs and documenting escalation feels like bureaucracy.",
        "Sensitive log protect আর escalation document করাকে bureaucracy মনে হয়।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 1,
      systems: 3,
      investigation: 3,
      creativity: 2,
      communication: 3,
      production: 3,
    },
    foundation: [
      l(
        "Networking, DNS, HTTP, operating systems and identity basics.",
        "Networking, DNS, HTTP, operating system আর identity basics।",
      ),
      l(
        "Linux/Windows logs, timestamps, processes and a little scripting.",
        "Linux/Windows log, timestamp, process আর অল্প scripting।",
      ),
      l(
        "Authorization, privacy, evidence handling and incident terminology.",
        "Authorization, privacy, evidence handling আর incident terminology।",
      ),
    ],
    core: [
      l(
        "Telemetry sources, log queries, baselines and alert triage.",
        "Telemetry source, log query, baseline আর alert triage।",
      ),
      l(
        "Hypothesis testing, timelines, severity and escalation.",
        "Hypothesis testing, timeline, severity আর escalation।",
      ),
      l(
        "Incident response, detection logic and ATT&CK as a map—not a checklist.",
        "Incident response, detection logic আর checklist নয়—map হিসেবে ATT&CK।",
      ),
    ],
    practical: [
      l(
        "Triage a harmless fictional authentication-log alert.",
        "Harmless fictional authentication-log alert triage করুন।",
      ),
      l(
        "Build an evidence timeline and separate facts from hypotheses.",
        "Evidence timeline বানিয়ে fact আর hypothesis আলাদা করুন।",
      ),
      l(
        "Write one detection query, test benign cases and produce an escalation note.",
        "একটি detection query লিখে benign case test আর escalation note বানান।",
      ),
    ],
    later: [
      l(
        "Detection engineering, threat hunting and threat intelligence.",
        "Detection engineering, threat hunting আর threat intelligence।",
      ),
      l(
        "Cloud, identity, endpoint and network-specialized operations.",
        "Cloud, identity, endpoint আর network-specialized operations।",
      ),
      l(
        "Incident command, malware analysis and digital forensics with appropriate supervision.",
        "Appropriate supervision-সহ incident command, malware analysis আর digital forensics।",
      ),
    ],
    notYet: [
      l(
        "Buying a SIEM course before you can explain where logs come from.",
        "Log কোথা থেকে আসে explain করার আগেই SIEM course কেনা।",
      ),
      l(
        "Uploading real company logs, secrets or malware to public tools.",
        "Real company log, secret বা malware public tool-এ upload করা।",
      ),
      l(
        "Treating every alert as an incident or every ATT&CK box as required coverage.",
        "প্রতিটি alert-কে incident বা প্রতিটি ATT&CK box-কে required coverage ভাবা।",
      ),
    ],
    resources: [
      "cisa-cyber-defense-analyst",
      "nist-incident-response",
      "mitre-attack-start",
      "wireshark-guide",
    ],
    related: [
      "cybersecurity",
      "network-engineering",
      "devops-sre",
      "application-security",
    ],
    day: [
      [
        "08:30",
        l(
          "Review the handover queue and establish what normal looked like overnight.",
          "Handover queue review করে রাতে normal behavior কেমন ছিল establish করা।",
        ),
      ],
      [
        "11:45",
        l(
          "Correlate an identity alert with endpoint and network evidence before escalating.",
          "Escalate করার আগে identity alert-এর সঙ্গে endpoint ও network evidence correlate করা।",
        ),
      ],
      [
        "16:10",
        l(
          "Tune a noisy detection and document what evidence would still be missing.",
          "Noisy detection tune করে এখনও কোন evidence missing থাকবে document করা।",
        ),
      ],
    ],
    ai: [
      {
        task: l("Routine alert summaries", "Routine alert summary"),
        exposure: "higher",
        explanation: l(
          "AI can compress repetitive log context, but it may omit a timestamp, invent causality or expose sensitive data.",
          "AI repetitive log context ছোট করতে পারে; timestamp বাদ, causality invent বা sensitive data expose-ও করতে পারে।",
        ),
        studentResponse: l(
          "Use approved tools with minimized data and verify every event against the original evidence.",
          "Approved tool-এ minimized data ব্যবহার করে প্রতিটি event original evidence দিয়ে verify করুন।",
        ),
      },
      {
        task: l(
          "Correlation and incident hypotheses",
          "Correlation আর incident hypothesis",
        ),
        exposure: "medium",
        explanation: l(
          "AI can suggest connections, but normal business activity and attacker behavior often look similar without local context.",
          "AI connection suggest করতে পারে; local context ছাড়া normal business activity আর attacker behavior একই রকম লাগতে পারে।",
        ),
        studentResponse: l(
          "Record competing hypotheses, falsify them with telemetry and attach confidence to conclusions.",
          "Competing hypothesis লিখে telemetry দিয়ে falsify করুন আর conclusion-এর সঙ্গে confidence দিন।",
        ),
      },
      {
        task: l(
          "Containment, escalation and accountable communication",
          "Containment, escalation আর accountable communication",
        ),
        exposure: "lower",
        explanation: l(
          "Disrupting a service, preserving evidence and notifying affected people require authority and situational judgment.",
          "Service disrupt, evidence preserve আর affected মানুষকে notify করতে authority ও situational judgment লাগে।",
        ),
        studentResponse: l(
          "Practise playbooks, clear handovers and escalation boundaries; never let generated confidence substitute for approval.",
          "Playbook, clear handover আর escalation boundary practice করুন; generated confidence-কে approval-এর বিকল্প ভাববেন না।",
        ),
      },
    ],
  },
  {
    id: "offensive-security",
    familyId: "protect-systems",
    title: l(
      "Offensive Security & Penetration Testing",
      "Offensive Security ও Penetration Testing",
    ),
    description: l(
      "Test an explicitly authorized system like a careful engineer: define scope, validate weaknesses, limit impact and make the fix actionable.",
      "Careful engineer-এর মতো explicitly authorized system test করুন: scope ঠিক করুন, weakness validate করুন, impact সীমিত রাখুন আর fix-কে actionable করুন।",
    ),
    specializations: [
      {
        title: l("Penetration testing", "Penetration testing"),
        description: l(
          "Assess a defined application, API, network or cloud scope and deliver reproducible findings and retest evidence.",
          "Defined application, API, network বা cloud scope assess করে reproducible finding আর retest evidence দেওয়া।",
        ),
      },
      {
        title: l(
          "Red teaming / adversary emulation",
          "Red teaming / adversary emulation",
        ),
        description: l(
          "Evaluate detection and response against agreed objectives and rules of engagement; this is not an unsupervised beginner starting point.",
          "Agreed objective আর rules of engagement মেনে detection ও response evaluate করা; এটি unsupervised beginner starting point নয়।",
        ),
      },
      {
        title: l("Web & API security testing", "Web ও API security testing"),
        description: l(
          "Understand application behavior deeply enough to test authentication, authorization, input and business logic.",
          "Authentication, authorization, input আর business logic test করার মতো গভীরভাবে application behavior বোঝা।",
        ),
      },
      {
        title: l("Vulnerability research", "Vulnerability research"),
        description: l(
          "Study unfamiliar failure mechanisms and create defensible reproductions; advanced work requires deeper systems knowledge.",
          "অপরিচিত failure mechanism নিয়ে study আর defensible reproduction তৈরি করা; advanced কাজের জন্য গভীর systems knowledge দরকার।",
        ),
      },
    ],
    work: [
      l(
        "Agree scope, objectives, exclusions, data rules and stop conditions before testing.",
        "Testing-এর আগে scope, objective, exclusion, data rule আর stop condition agree করা।",
      ),
      l(
        "Understand the target and build risk-based test hypotheses.",
        "Target বুঝে risk-based test hypothesis বানানো।",
      ),
      l(
        "Validate weaknesses manually and minimize proof-of-impact.",
        "Weakness manually validate আর proof-of-impact যতটা সম্ভব সীমিত রাখা।",
      ),
      l(
        "Write reproducible findings with evidence, impact, uncertainty and remediation.",
        "Evidence, impact, uncertainty আর remediation-সহ reproducible finding লেখা।",
      ),
      l(
        "Retest fixes and explain residual risk to technical and business owners.",
        "Fix retest করে technical ও business owner-কে residual risk বোঝানো।",
      ),
    ],
    enjoy: [
      l(
        "You enjoy forming and disproving hypotheses about unfamiliar behavior.",
        "Unfamiliar behavior নিয়ে hypothesis বানিয়ে ভুল প্রমাণ করতেও ভালো লাগে।",
      ),
      l(
        "A precise report and useful fix feel as satisfying as finding the weakness.",
        "Weakness খোঁজার মতো precise report আর useful fix-ও satisfying লাগে।",
      ),
      l(
        "Strict scope and ethical constraints sharpen rather than spoil the challenge.",
        "Strict scope আর ethical constraint challenge নষ্ট নয়, বরং পরিষ্কার করে।",
      ),
    ],
    dislike: [
      l(
        "You mainly want permission to attack random public systems.",
        "মূল আগ্রহ random public system attack করার permission পাওয়া।",
      ),
      l(
        "Reading code, protocols and long documentation feels less interesting than running tools.",
        "Tool চালানোর তুলনায় code, protocol আর দীর্ঘ documentation পড়া boring লাগে।",
      ),
      l(
        "Writing evidence, remediation and limitations feels optional.",
        "Evidence, remediation আর limitation লেখাকে optional মনে হয়।",
      ),
    ],
    dimensions: {
      coding: 3,
      mathematics: 1,
      systems: 3,
      investigation: 3,
      creativity: 3,
      communication: 3,
      production: 2,
    },
    foundation: [
      l(
        "Networking, HTTP, Linux, scripting and how applications store identity and data.",
        "Networking, HTTP, Linux, scripting আর application কীভাবে identity ও data রাখে।",
      ),
      l(
        "Authentication, authorization, sessions, input handling and common architectures.",
        "Authentication, authorization, session, input handling আর common architecture।",
      ),
      l(
        "Written authorization, lab isolation, evidence handling and responsible disclosure.",
        "Written authorization, lab isolation, evidence handling আর responsible disclosure।",
      ),
    ],
    core: [
      l(
        "Rules of engagement, threat-informed scoping and test methodology.",
        "Rules of engagement, threat-informed scoping আর test methodology।",
      ),
      l(
        "Manual validation of web/API vulnerability classes and business logic.",
        "Web/API vulnerability class আর business logic-এর manual validation।",
      ),
      l(
        "Evidence, severity reasoning, remediation and retesting.",
        "Evidence, severity reasoning, remediation আর retesting।",
      ),
    ],
    practical: [
      l(
        "Complete deliberately vulnerable labs and explain the mechanism before the payload.",
        "Deliberately vulnerable lab complete করে payload-এর আগে mechanism explain করুন।",
      ),
      l(
        "Plan a tiny authorized assessment and record every tested hypothesis.",
        "Tiny authorized assessment plan করে প্রতিটি tested hypothesis লিখুন।",
      ),
      l(
        "Deliver one finding, fix recommendation and retest result without exposing secrets.",
        "Secret expose না করে একটি finding, fix recommendation আর retest result দিন।",
      ),
    ],
    later: [
      l(
        "Network, cloud, mobile or identity-focused penetration testing.",
        "Network, cloud, mobile বা identity-focused penetration testing।",
      ),
      l(
        "Red/purple teaming and adversary emulation under mature supervision.",
        "Mature supervision-এর মধ্যে red/purple teaming আর adversary emulation।",
      ),
      l(
        "Exploit development and vulnerability research after operating-system depth.",
        "Operating-system depth-এর পরে exploit development আর vulnerability research।",
      ),
    ],
    notYet: [
      l(
        "Installing Kali Linux, collecting tools and calling that a methodology.",
        "Kali Linux install, tool collect আর সেটিকেই methodology বলা।",
      ),
      l(
        "Testing public targets, classmates or campus systems without explicit written authorization.",
        "Explicit written authorization ছাড়া public target, classmate বা campus system test করা।",
      ),
      l(
        "Copying payloads you cannot explain or maximizing impact to make a report dramatic.",
        "Explain করতে পারেন না এমন payload copy বা report dramatic করতে impact বাড়ানো।",
      ),
    ],
    resources: [
      "owasp-wstg-v42",
      "portswigger",
      "owasp-top-ten",
      "mitre-attack-start",
    ],
    related: [
      "application-security",
      "cybersecurity",
      "security-operations",
      "backend-engineering",
    ],
    day: [
      [
        "09:00",
        l(
          "Confirm the rules of engagement and remove an ambiguous target from scope.",
          "Rules of engagement confirm করে ambiguous target scope থেকে বাদ দেওয়া।",
        ),
      ],
      [
        "12:20",
        l(
          "Manually validate an authorization weakness with harmless test accounts.",
          "Harmless test account দিয়ে authorization weakness manually validate করা।",
        ),
      ],
      [
        "16:15",
        l(
          "Review a finding with its owner, reduce exaggeration and agree how the fix will be retested.",
          "Owner-এর সঙ্গে finding review, exaggeration কমানো আর fix কীভাবে retest হবে agree করা।",
        ),
      ],
    ],
    ai: [
      {
        task: l("Payload and checklist drafts", "Payload আর checklist draft"),
        exposure: "higher",
        explanation: l(
          "AI can generate familiar test ideas quickly, including unsafe or irrelevant ones that exceed scope.",
          "AI familiar test idea দ্রুত বানাতে পারে—unsafe বা scope-এর বাইরে idea-ও দিতে পারে।",
        ),
        studentResponse: l(
          "Understand every request, constrain it to the written lab scope and predict side effects before execution.",
          "প্রতিটি request বুঝে written lab scope-এ সীমিত করুন আর execution-এর আগে side effect অনুমান করুন।",
        ),
      },
      {
        task: l(
          "Attack-path hypotheses and finding triage",
          "Attack-path hypothesis আর finding triage",
        ),
        exposure: "medium",
        explanation: l(
          "AI broadens hypotheses but can hallucinate exploitability, severity and system relationships.",
          "AI hypothesis বাড়ায়; exploitability, severity আর system relationship hallucinate-ও করতে পারে।",
        ),
        studentResponse: l(
          "Reproduce safely, preserve raw evidence and separate observed behavior from possible impact.",
          "Safely reproduce, raw evidence preserve আর observed behavior থেকে possible impact আলাদা করুন।",
        ),
      },
      {
        task: l(
          "Authorization, impact limits and responsible reporting",
          "Authorization, impact limit আর responsible reporting",
        ),
        exposure: "lower",
        explanation: l(
          "A model cannot grant permission, accept business risk or own harm caused by a test.",
          "Model permission দিতে, business risk accept করতে বা test-এর harm-এর দায় নিতে পারে না।",
        ),
        studentResponse: l(
          "Stop when scope is unclear, minimize proof, protect data and involve the accountable owner.",
          "Scope unclear হলে stop, proof minimize, data protect আর accountable owner-কে involve করুন।",
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
      "অনুমোদিত সীমার মধ্যে team-কে এমন software তৈরি ও যাচাই করতে সাহায্য করুন, যা অপব্যবহার ঠেকাতে পারে—release আটকে রাখা পুলিশ না হয়ে।",
    ),
    specializations: [
      {
        title: l(
          "Product / application security",
          "Product / application security",
        ),
        description: l(
          "Partner from design through release on threats, controls, code and evidence rather than arriving only with a scanner report.",
          "শুধু scanner report নিয়ে শেষে হাজির নয়—design থেকে release পর্যন্ত threat, control, code আর evidence নিয়ে partner হওয়া।",
        ),
      },
      {
        title: l("Security testing", "Security testing"),
        description: l(
          "Verify application controls through risk-based manual and automated tests within a written scope.",
          "Written scope-এর মধ্যে risk-based manual ও automated test দিয়ে application control verify করা।",
        ),
      },
      {
        title: l(
          "Security champion / enablement",
          "Security champion / enablement",
        ),
        description: l(
          "Help engineering teams use secure defaults, review patterns and practical guardrails without turning security into a gatekeeper.",
          "Security-কে gatekeeper না বানিয়ে engineering team-কে secure default, review pattern আর practical guardrail ব্যবহার করতে সাহায্য করা।",
        ),
      },
      {
        title: l(
          "DevSecOps & supply-chain security",
          "DevSecOps ও supply-chain security",
        ),
        description: l(
          "Connect application risk to reviewed pipeline checks, dependency provenance, secrets and deployment controls.",
          "Application risk-কে reviewed pipeline check, dependency provenance, secret আর deployment control-এর সঙ্গে যুক্ত করা।",
        ),
      },
    ],
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
        "Feature কীভাবে misuse হতে পারে স্বাভাবিকভাবে ভাবুন।",
      ),
      l(
        "You like tracing input, identity and privilege across code.",
        "Code জুড়ে input, identity আর privilege trace করতে ভালো লাগে।",
      ),
      l(
        "You can explain risk without drama or blame.",
        "Drama বা blame ছাড়া risk বোঝাতে পারেন।",
      ),
    ],
    dislike: [
      l(
        "You only want offensive testing and dislike prevention work.",
        "শুধু offensive testing চান; prevention work অপছন্দ।",
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
        "নিজের tiny app threat-model করে তিনটি abuse case rank করুন।",
      ),
      l(
        "Fix and regression-test one weakness in the local app.",
        "Local app-এর একটি weakness fix আর regression-test করুন।",
      ),
      l(
        "Write a calm report with scope, evidence, impact and limits.",
        "Scope, evidence, impact আর limit-সহ calm report লিখুন।",
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
          "প্রতিটি claim authorized reproduction-এ verify করে requirement বা threat-এর সঙ্গে trace করুন।",
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
          "Trust boundary map, owner-এর সঙ্গে assumption validate আর chosen fix test করুন।",
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
          "Evidence-based severity, respectful collaboration আর explicit escalation path practice করুন।",
        ),
      },
    ],
  },
];
