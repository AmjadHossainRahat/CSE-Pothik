import type { ExperimentSeed } from "@/data/experiments";
import { l } from "@/lib/localized";

export const specialistExperiments: ExperimentSeed[] = [
  {
    id: "data-analytics-bi",
    title: l(
      "Challenge one metric before drawing the dashboard",
      "Dashboard বানানোর আগে metric-টিকেই প্রশ্ন করুন",
    ),
    duration: "75–120 min",
    prerequisites: [
      l(
        "Basic spreadsheet or SQL skill and a local tool already set up. Create a fictional 20-row orders CSV with date, channel, amount and status; do not use personal or confidential data.",
        "Basic spreadsheet বা SQL skill আর local tool setup। Date, channel, amount আর status-সহ fictional ২০-row orders CSV বানান; personal বা confidential data নয়।",
      ),
    ],
    goals: [
      l(
        "Experience analysis as question, validation, metric definition and communication—not chart decoration.",
        "Chart decoration নয়—question, validation, metric definition আর communication হিসেবে analysis অনুভব করুন।",
      ),
    ],
    steps: [
      l(
        "Write one decision question: which channel deserves a closer look next week? Define order count, completed revenue and cancellation rate before calculating them.",
        "একটি decision question লিখুন: next week কোন channel closer look পাবে? Calculate করার আগে order count, completed revenue আর cancellation rate define করুন।",
      ),
      l(
        "Check row count, types, duplicate order IDs, missing values and impossible amounts. Record each check and repair only your fictional data.",
        "Row count, type, duplicate order ID, missing value আর impossible amount check করুন। প্রতিটি check লিখে শুধু fictional data repair করুন।",
      ),
      l(
        "Calculate the three metrics by channel. Independently recompute one total or inspect its contributing rows so the tool is not your only evidence.",
        "Channel অনুযায়ী তিন metric calculate করুন। একটি total independently recompute বা contributing row inspect করুন—tool যেন একমাত্র evidence না হয়।",
      ),
      l(
        "Create one accessible chart and a small table. Add a title that states the question, labels that do not rely only on color and a note defining the denominator.",
        "একটি accessible chart আর small table বানান। Question-ভিত্তিক title, color-only নয় এমন label আর denominator-এর note দিন।",
      ),
      l(
        "Write a three-sentence recommendation: finding, caveat and next evidence. Change one definition—for example include cancelled revenue—and explain why the conclusion changes.",
        "তিন sentence-এর recommendation লিখুন: finding, caveat আর next evidence। একটি definition বদলান—যেমন cancelled revenue include—আর conclusion কেন বদলায় বলুন।",
      ),
    ],
    attention: [
      l(
        "Was defining the metric harder than making the chart?",
        "Metric define করা কি chart বানানোর চেয়ে কঠিন ছিল?",
      ),
      l(
        "Could another person reproduce your number and understand its limitation?",
        "অন্য কেউ কি number reproduce আর limitation বুঝতে পারবে?",
      ),
    ],
    resources: [
      "sqlbolt",
      "kaggle-pandas",
      "openintro-statistics",
      "power-bi-learning",
    ],
  },
  {
    id: "ai-engineering",
    title: l(
      "Build an evaluated answer finder—not an AI demo",
      "শুধু AI demo নয়—যাচাই করা যায় এমন answer finder বানান",
    ),
    duration: "90–120 min",
    prerequisites: [
      l(
        "Basic Python or JavaScript with a local test runner already set up. Use five short documents you wrote or may legally use. A paid model or API key is not required.",
        "Basic Python বা JavaScript আর local test runner setup। নিজের লেখা বা legally usable পাঁচটি short document নিন। Paid model বা API key দরকার নেই।",
      ),
    ],
    goals: [
      l(
        "Experience retrieval, evaluation and refusal boundaries before adding a generative model.",
        "Generative model যোগ করার আগে retrieval, evaluation আর refusal boundary অনুভব করুন।",
      ),
    ],
    steps: [
      l(
        "Write eight questions: five answerable from the documents, two deliberately unanswerable and one ambiguous. Record the expected source for each answerable question.",
        "আটটি question লিখুন: পাঁচটি document থেকে answerable, দুটি ইচ্ছাকৃত unanswerable আর একটি ambiguous। Answerable question-এর expected source লিখে রাখুন।",
      ),
      l(
        "Build a deterministic baseline that ranks documents by normalized keyword overlap and returns the top source plus its score. Keep the code small and inspectable.",
        "Normalized keyword overlap দিয়ে document rank করে top source আর score দেয়—এমন deterministic baseline বানান। Code small আর inspectable রাখুন।",
      ),
      l(
        "Run all eight questions. Measure source recall and choose a score threshold below which the system says it lacks evidence instead of inventing an answer.",
        "আটটি question চালান। Source recall measure করে threshold বাছুন; এর নিচে system answer invent না করে evidence নেই বলবে।",
      ),
      l(
        "Improve tokenization or add a small synonym map using only the failures you observed. Rerun every case and keep before/after results.",
        "Observed failure দিয়ে tokenization improve বা small synonym map দিন। সব case rerun করে before/after result রাখুন।",
      ),
      l(
        "If you have approved model access, optionally generate an answer only from the retrieved text and require a source. Mark this extension separately; never upload private documents. Write cost, latency and hallucination risks.",
        "Approved model access থাকলে optionally শুধু retrieved text থেকে source-সহ answer generate করুন। Extension আলাদা mark করুন; private document upload নয়। Cost, latency আর hallucination risk লিখুন।",
      ),
    ],
    attention: [
      l(
        "Did measuring failures change what you wanted to build?",
        "Failure measure করার পর কী build করতে চেয়েছিলেন তা বদলেছে?",
      ),
      l(
        "Can your system refuse when evidence is missing, and can you prove that with a test?",
        "Evidence না থাকলে system refuse করতে পারে, আর test দিয়ে তা প্রমাণ করতে পারেন?",
      ),
    ],
    resources: [
      "hf-llm-course",
      "full-stack-deep-learning",
      "made-with-ml",
      "amirul-ai-roadmap",
    ],
  },
  {
    id: "security-operations",
    title: l(
      "Triage one fictional login alert without crying wolf",
      "অযথা alarm না তুলে একটি fictional login alert triage করুন",
    ),
    duration: "90–120 min",
    prerequisites: [
      l(
        "Basic networking, timestamps and spreadsheet or text-filtering skills. Use only fictional logs you create for this exercise—never copy real account, employer or campus data.",
        "Basic networking, timestamp আর spreadsheet বা text-filtering skill। Exercise-এর জন্য শুধু নিজের বানানো fictional log ব্যবহার করুন—real account, employer বা campus data copy করবেন না।",
      ),
    ],
    goals: [
      l(
        "Experience SOC work as evidence, competing explanations and careful escalation—not staring at a dramatic dashboard.",
        "Dramatic dashboard-এর দিকে তাকিয়ে থাকা নয়—evidence, competing explanation আর careful escalation হিসেবে SOC কাজ অনুভব করুন।",
      ),
    ],
    steps: [
      l(
        "Create a 12-row fictional CSV with timestamp, user, source IP, result and device fields. Include normal logins, three failures and a later success; use invented names and documentation-only IP ranges.",
        "Timestamp, user, source IP, result আর device field-সহ ১২-row fictional CSV বানান। Normal login, তিনটি failure আর পরের success রাখুন; invented name ও documentation-only IP range ব্যবহার করুন।",
      ),
      l(
        "Write two competing hypotheses: an attacker guessed a password, or the user mistyped it before succeeding. State what evidence would support or weaken each.",
        "দুটি competing hypothesis লিখুন: attacker password guess করেছে, অথবা user ভুল type করে পরে সফল হয়েছে। কোন evidence কোনটিকে support বা weaken করবে লিখুন।",
      ),
      l(
        "Sort and filter the events into a timeline. Mark facts, assumptions and missing context separately; do not invent geolocation or device intelligence.",
        "Event sort-filter করে timeline বানান। Fact, assumption আর missing context আলাদা mark করুন; geolocation বা device intelligence বানিয়ে লিখবেন না।",
      ),
      l(
        "Write a simple detection rule for repeated failures followed by success. Test it against two benign variations and record where it becomes noisy.",
        "Repeated failure-এর পরে success-এর simple detection rule লিখুন। দুটি benign variation দিয়ে test করে কোথায় noisy হয় লিখুন।",
      ),
      l(
        "Produce a six-line escalation note: alert, scope, timeline, evidence, confidence and next safe action. Then write what would make you close it as benign.",
        "ছয় লাইনের escalation note লিখুন: alert, scope, timeline, evidence, confidence আর next safe action। এরপর কোন evidence পেলে benign হিসেবে close করবেন লিখুন।",
      ),
    ],
    attention: [
      l(
        "Did incomplete evidence make you curious enough to investigate without rushing to certainty?",
        "অসম্পূর্ণ evidence কি certainty-তে না ছুটে investigate করার curiosity তৈরি করেছে?",
      ),
      l(
        "Could another analyst reconstruct your reasoning from the timeline?",
        "অন্য analyst কি timeline থেকে আপনার reasoning reconstruct করতে পারবে?",
      ),
      l(
        "Did reducing a noisy rule feel like useful engineering rather than hiding alerts?",
        "Noisy rule কমানো কি alert লুকানো নয়, useful engineering মনে হয়েছে?",
      ),
    ],
    resources: [
      "cisa-cyber-defense-analyst",
      "nist-incident-response",
      "mitre-attack-start",
    ],
  },
  {
    id: "offensive-security",
    title: l(
      "Run one tiny authorized web-security assessment",
      "ছোট একটি authorized web-security assessment করুন",
    ),
    duration: "90–150 min",
    prerequisites: [
      l(
        "Basic HTTP and one deliberately vulnerable beginner lab from PortSwigger Web Security Academy. The lab is the entire authorized scope; do not probe any public, campus or employer system.",
        "Basic HTTP আর PortSwigger Web Security Academy-র একটি deliberately vulnerable beginner lab। ওই lab-ই পুরো authorized scope; public, campus বা employer system probe করবেন না।",
      ),
    ],
    goals: [
      l(
        "Experience penetration testing as scope, hypotheses, minimal proof, reporting and remediation—not a race to run the most tools.",
        "সবচেয়ে বেশি tool চালানোর race নয়—scope, hypothesis, minimal proof, reporting আর remediation হিসেবে penetration testing অনুভব করুন।",
      ),
    ],
    steps: [
      l(
        "Write a one-page rules-of-engagement note: target lab, objective, allowed account/data, excluded actions, stop condition and evidence-storage rule.",
        "এক page-এর rules-of-engagement note লিখুন: target lab, objective, allowed account/data, excluded action, stop condition আর evidence-storage rule।",
      ),
      l(
        "Read the relevant versioned OWASP WSTG section and draw the lab's visible input, trust boundary and protected action before testing.",
        "Relevant versioned OWASP WSTG section পড়ে testing-এর আগে lab-এর visible input, trust boundary আর protected action আঁকুন।",
      ),
      l(
        "Write three test hypotheses. Execute only the smallest harmless request needed to validate one; stop when behavior leaves the lab scope.",
        "তিনটি test hypothesis লিখুন। একটি validate করতে প্রয়োজনীয় smallest harmless request-টিই execute করুন; behavior lab scope ছাড়ালে stop করুন।",
      ),
      l(
        "Capture the exact request and response, explain the underlying control failure and separate observed impact from possible impact.",
        "Exact request-response capture করে underlying control failure explain করুন; observed impact আর possible impact আলাদা রাখুন।",
      ),
      l(
        "Write one finding with scope, evidence, severity reasoning, remediation and a retest case. Compare it with the lab explanation only after finishing your own report.",
        "Scope, evidence, severity reasoning, remediation আর retest case-সহ একটি finding লিখুন। নিজের report শেষ করার পর lab explanation-এর সঙ্গে compare করুন।",
      ),
    ],
    attention: [
      l(
        "Was understanding the mechanism more satisfying than copying the payload?",
        "Payload copy করার চেয়ে mechanism বোঝা কি বেশি satisfying ছিল?",
      ),
      l(
        "Could a developer reproduce the finding and know what to fix without receiving unnecessary sensitive data?",
        "Unnecessary sensitive data না পেয়েও developer কি finding reproduce আর কী fix করবে বুঝতে পারবে?",
      ),
      l(
        "Did strict scope improve your reasoning, or did you mainly want freedom to attack something else?",
        "Strict scope কি reasoning improve করেছে, নাকি মূল ইচ্ছা ছিল অন্য কিছু attack করার freedom?",
      ),
    ],
    resources: ["owasp-wstg-v42", "portswigger", "owasp-top-ten"],
  },
  {
    id: "application-security",
    title: l(
      "Threat-model and protect one tiny feature",
      "ছোট একটি feature-এর threat model বানিয়ে সেটিকে সুরক্ষিত করুন",
    ),
    duration: "75–120 min",
    prerequisites: [
      l(
        "A tiny local app you own with one form or API and source access, already set up. Work only on that app or an explicitly authorized training lab; never test a public target.",
        "একটি form বা API-সহ নিজের tiny local app, source access আর setup। শুধু সেই app বা explicitly authorized training lab-এ কাজ; public target test নয়।",
      ),
    ],
    goals: [
      l(
        "Experience application security as design, evidence, a fix and regression protection—not scanner output.",
        "Scanner output নয়—design, evidence, fix আর regression protection হিসেবে application security অনুভব করুন।",
      ),
    ],
    steps: [
      l(
        "Draw the feature's browser/client, server and data store. Mark user-controlled input, identity, sensitive data and every trust-boundary crossing.",
        "Feature-এর browser/client, server আর data store আঁকুন। User-controlled input, identity, sensitive data আর trust-boundary crossing mark করুন।",
      ),
      l(
        "Write three abuse cases in the form ‘someone could… causing…’. Rank them by plausible impact and likelihood in this local system.",
        "‘কেউ … করতে পারে, ফলে …’ format-এ তিনটি abuse case লিখুন। Local system-এ plausible impact আর likelihood দিয়ে rank করুন।",
      ),
      l(
        "Choose one input-validation or authorization risk. Reproduce it only with harmless fictional data and record exact evidence; stop if the scope is unclear.",
        "একটি input-validation বা authorization risk নিন। শুধু harmless fictional data দিয়ে reproduce আর exact evidence রাখুন; scope unclear হলে stop।",
      ),
      l(
        "Implement the smallest server-side fix and one regression test that fails before the fix and passes after it. Do not rely only on client-side validation.",
        "Smallest server-side fix আর regression test দিন—fix-এর আগে fail, পরে pass। শুধু client-side validation-এর ওপর নির্ভর নয়।",
      ),
      l(
        "Write a short report: authorized scope, threat, evidence, impact, fix, verification and remaining risk. Ask a peer to review the reasoning without sharing secrets.",
        "Short report লিখুন: authorized scope, threat, evidence, impact, fix, verification আর remaining risk। Secret share না করে peer review নিন।",
      ),
    ],
    attention: [
      l(
        "Did preventing the weakness feel as interesting as finding it?",
        "Weakness খোঁজার মতো prevent করাও interesting লেগেছে?",
      ),
      l(
        "Can you explain the risk without exaggeration, blame or a vulnerability score alone?",
        "Exaggeration, blame বা শুধু vulnerability score ছাড়া risk বোঝাতে পারেন?",
      ),
    ],
    resources: [
      "owasp-top-ten",
      "owasp-cheat-sheets",
      "portswigger",
      "owasp-threat-modeling",
    ],
  },
];
