import type { ExperimentSeed } from "@/data/experiments";
import { l } from "@/lib/localized";

export const specialistExperiments: ExperimentSeed[] = [
  {
    id: "data-analytics-bi",
    title: l(
      "Challenge one metric before drawing the dashboard",
      "Dashboard আঁকার আগে একটি metric challenge করো",
    ),
    duration: "75–120 min",
    prerequisites: [
      l(
        "Basic spreadsheet or SQL skill and a local tool already set up. Create a fictional 20-row orders CSV with date, channel, amount and status; do not use personal or confidential data.",
        "Basic spreadsheet বা SQL skill আর local tool setup। Date, channel, amount আর status-সহ fictional ২০-row orders CSV বানাও; personal বা confidential data নয়।",
      ),
    ],
    goals: [
      l(
        "Experience analysis as question, validation, metric definition and communication—not chart decoration.",
        "Chart decoration নয়—question, validation, metric definition আর communication হিসেবে analysis অনুভব করো।",
      ),
    ],
    steps: [
      l(
        "Write one decision question: which channel deserves a closer look next week? Define order count, completed revenue and cancellation rate before calculating them.",
        "একটি decision question লেখো: next week কোন channel closer look পাবে? Calculate করার আগে order count, completed revenue আর cancellation rate define করো।",
      ),
      l(
        "Check row count, types, duplicate order IDs, missing values and impossible amounts. Record each check and repair only your fictional data.",
        "Row count, type, duplicate order ID, missing value আর impossible amount check করো। প্রতিটি check লিখে শুধু fictional data repair করো।",
      ),
      l(
        "Calculate the three metrics by channel. Independently recompute one total or inspect its contributing rows so the tool is not your only evidence.",
        "Channel অনুযায়ী তিন metric calculate করো। একটি total independently recompute বা contributing row inspect করো—tool যেন একমাত্র evidence না হয়।",
      ),
      l(
        "Create one accessible chart and a small table. Add a title that states the question, labels that do not rely only on color and a note defining the denominator.",
        "একটি accessible chart আর small table বানাও। Question-ভিত্তিক title, color-only নয় এমন label আর denominator-এর note দাও।",
      ),
      l(
        "Write a three-sentence recommendation: finding, caveat and next evidence. Change one definition—for example include cancelled revenue—and explain why the conclusion changes.",
        "তিন sentence-এর recommendation লেখো: finding, caveat আর next evidence। একটি definition বদলাও—যেমন cancelled revenue include—আর conclusion কেন বদলায় বলো।",
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
      "AI demo নয়—evaluated answer finder বানাও",
    ),
    duration: "90–120 min",
    prerequisites: [
      l(
        "Basic Python or JavaScript with a local test runner already set up. Use five short documents you wrote or may legally use. A paid model or API key is not required.",
        "Basic Python বা JavaScript আর local test runner setup। নিজের লেখা বা legally usable পাঁচটি short document নাও। Paid model বা API key দরকার নেই।",
      ),
    ],
    goals: [
      l(
        "Experience retrieval, evaluation and refusal boundaries before adding a generative model.",
        "Generative model যোগ করার আগে retrieval, evaluation আর refusal boundary অনুভব করো।",
      ),
    ],
    steps: [
      l(
        "Write eight questions: five answerable from the documents, two deliberately unanswerable and one ambiguous. Record the expected source for each answerable question.",
        "আটটি question লেখো: পাঁচটি document থেকে answerable, দুটি ইচ্ছাকৃত unanswerable আর একটি ambiguous। Answerable question-এর expected source লিখে রাখো।",
      ),
      l(
        "Build a deterministic baseline that ranks documents by normalized keyword overlap and returns the top source plus its score. Keep the code small and inspectable.",
        "Normalized keyword overlap দিয়ে document rank করে top source আর score দেয়—এমন deterministic baseline বানাও। Code small আর inspectable রাখো।",
      ),
      l(
        "Run all eight questions. Measure source recall and choose a score threshold below which the system says it lacks evidence instead of inventing an answer.",
        "আটটি question চালাও। Source recall measure করে threshold বাছো; এর নিচে system answer invent না করে evidence নেই বলবে।",
      ),
      l(
        "Improve tokenization or add a small synonym map using only the failures you observed. Rerun every case and keep before/after results.",
        "Observed failure দিয়ে tokenization improve বা small synonym map দাও। সব case rerun করে before/after result রাখো।",
      ),
      l(
        "If you have approved model access, optionally generate an answer only from the retrieved text and require a source. Mark this extension separately; never upload private documents. Write cost, latency and hallucination risks.",
        "Approved model access থাকলে optionally শুধু retrieved text থেকে source-সহ answer generate করো। Extension আলাদা mark করো; private document upload নয়। Cost, latency আর hallucination risk লেখো।",
      ),
    ],
    attention: [
      l(
        "Did measuring failures change what you wanted to build?",
        "Failure measure করার পর কী build করতে চেয়েছিলে তা বদলেছে?",
      ),
      l(
        "Can your system refuse when evidence is missing, and can you prove that with a test?",
        "Evidence না থাকলে system refuse করতে পারে, আর test দিয়ে তা প্রমাণ করতে পারো?",
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
    id: "application-security",
    title: l(
      "Threat-model and protect one tiny feature",
      "একটি tiny feature threat-model আর protect করো",
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
        "Scanner output নয়—design, evidence, fix আর regression protection হিসেবে application security অনুভব করো।",
      ),
    ],
    steps: [
      l(
        "Draw the feature's browser/client, server and data store. Mark user-controlled input, identity, sensitive data and every trust-boundary crossing.",
        "Feature-এর browser/client, server আর data store আঁকো। User-controlled input, identity, sensitive data আর trust-boundary crossing mark করো।",
      ),
      l(
        "Write three abuse cases in the form ‘someone could… causing…’. Rank them by plausible impact and likelihood in this local system.",
        "‘কেউ … করতে পারে, ফলে …’ format-এ তিনটি abuse case লেখো। Local system-এ plausible impact আর likelihood দিয়ে rank করো।",
      ),
      l(
        "Choose one input-validation or authorization risk. Reproduce it only with harmless fictional data and record exact evidence; stop if the scope is unclear.",
        "একটি input-validation বা authorization risk নাও। শুধু harmless fictional data দিয়ে reproduce আর exact evidence রাখো; scope unclear হলে stop।",
      ),
      l(
        "Implement the smallest server-side fix and one regression test that fails before the fix and passes after it. Do not rely only on client-side validation.",
        "Smallest server-side fix আর regression test দাও—fix-এর আগে fail, পরে pass। শুধু client-side validation-এর ওপর নির্ভর নয়।",
      ),
      l(
        "Write a short report: authorized scope, threat, evidence, impact, fix, verification and remaining risk. Ask a peer to review the reasoning without sharing secrets.",
        "Short report লেখো: authorized scope, threat, evidence, impact, fix, verification আর remaining risk। Secret share না করে peer review নাও।",
      ),
    ],
    attention: [
      l(
        "Did preventing the weakness feel as interesting as finding it?",
        "Weakness খোঁজার মতো prevent করাও interesting লেগেছে?",
      ),
      l(
        "Can you explain the risk without exaggeration, blame or a vulnerability score alone?",
        "Exaggeration, blame বা শুধু vulnerability score ছাড়া risk বোঝাতে পারো?",
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
