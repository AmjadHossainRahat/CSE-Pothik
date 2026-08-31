import type {
  AITaskExposure,
  Career,
  CareerDimensions,
  CareerFamily,
  CareerId,
  FamilyId,
  LocalizedText,
} from "@/types/content";

import { l } from "@/lib/localized";
import { additionalCareers } from "@/data/additional-careers";
import { infrastructureCareers } from "@/data/infrastructure-careers";
export { l };

export interface CareerSeed {
  id: CareerId;
  familyId: FamilyId;
  title: LocalizedText;
  description: LocalizedText;
  work: LocalizedText[];
  enjoy: LocalizedText[];
  dislike: LocalizedText[];
  dimensions: CareerDimensions;
  notYet: LocalizedText[];
  foundation: LocalizedText[];
  core: LocalizedText[];
  practical: LocalizedText[];
  later: LocalizedText[];
  resources: string[];
  related: CareerId[];
  ai: AITaskExposure[];
  day: [string, LocalizedText][];
}

const exposure = (
  task: LocalizedText,
  level: "higher" | "medium" | "lower",
  explanation: LocalizedText,
  response: LocalizedText,
): AITaskExposure => ({
  task,
  exposure: level,
  explanation,
  studentResponse: response,
});

const seeds: CareerSeed[] = [
  {
    id: "backend-engineering",
    familyId: "build-software",
    title: l("Backend Engineering", "Backend Engineering"),
    description: l(
      "Design the services, data and business rules that make software dependable behind the interface.",
      "Interface-এর পেছনে যে service, data আর business rule software-কে dependable রাখে—সেগুলো design করা।",
    ),
    work: [
      l(
        "Design APIs and service boundaries.",
        "API আর service boundary design করা।",
      ),
      l(
        "Model data and protect consistency.",
        "Data model করে consistency রক্ষা করা।",
      ),
      l(
        "Implement business rules and integrations.",
        "Business rule আর integration implement করা।",
      ),
      l(
        "Debug slow, incorrect or unreliable production behavior.",
        "Production-এর slow, ভুল বা unreliable behavior debug করা।",
      ),
      l(
        "Review code, tests, security and operational trade-offs.",
        "Code, test, security আর operational trade-off review করা।",
      ),
    ],
    enjoy: [
      l(
        "You like logic that users may never see but always rely on.",
        "User না দেখলেও যে logic-এর ওপর ভরসা করে—সেটা বানাতে ভালো লাগে।",
      ),
      l(
        "A mysterious production failure feels like a puzzle.",
        "রহস্যময় production failure-কে puzzle মনে হয়।",
      ),
      l(
        "You care about correctness, boundaries and data.",
        "Correctness, boundary আর data নিয়ে ভাবতে ভালো লাগে।",
      ),
    ],
    dislike: [
      l(
        "You need immediate visual feedback to stay interested.",
        "Interest ধরে রাখতে সবসময় visual feedback দরকার হয়।",
      ),
      l(
        "Operational responsibility feels only stressful, never interesting.",
        "Operational responsibility কেবল stress লাগে, একটুও interesting নয়।",
      ),
      l(
        "You strongly dislike tracing behavior across several systems.",
        "কয়েকটি system জুড়ে behavior trace করা একদম অপছন্দ।",
      ),
    ],
    dimensions: {
      coding: 3,
      mathematics: 1,
      systems: 3,
      investigation: 3,
      creativity: 2,
      communication: 2,
      production: 3,
    },
    notYet: [
      l(
        "Kubernetes before deploying one simple service.",
        "একটা simple service deploy করার আগেই Kubernetes।",
      ),
      l(
        "Microservices before understanding a well-structured monolith.",
        "ভালো monolith বোঝার আগেই microservices।",
      ),
      l(
        "Kafka and event sourcing without a real coordination problem.",
        "Real coordination problem ছাড়াই Kafka আর event sourcing।",
      ),
    ],
    foundation: [
      l("One language deeply", "একটি language ভালোভাবে"),
      l("HTTP and the web", "HTTP আর web"),
      l("Git, shell and debugging", "Git, shell আর debugging"),
    ],
    core: [
      l("Relational data and SQL", "Relational data আর SQL"),
      l("API design and validation", "API design আর validation"),
      l(
        "Testing, auth and security basics",
        "Testing, auth আর security basics",
      ),
    ],
    practical: [
      l("Build and deploy one API", "একটি API build আর deploy"),
      l("Add logging and diagnose a failure", "Logging দিয়ে failure diagnose"),
      l("Review someone else’s code", "অন্যের code review"),
    ],
    later: [
      l("Distributed systems", "Distributed systems"),
      l("Performance and reliability", "Performance আর reliability"),
      l("Architecture and domain modeling", "Architecture আর domain modeling"),
    ],
    resources: [
      "node-learn",
      "postgres-tutorial",
      "sqlbolt",
      "docker-start",
      "testing-js",
    ],
    related: ["data-engineering", "devops-sre", "frontend-engineering"],
    ai: [
      exposure(
        l("Routine CRUD and boilerplate", "Routine CRUD আর boilerplate"),
        "higher",
        l(
          "Models can generate common handlers quickly.",
          "Common handler AI দ্রুত generate করতে পারে।",
        ),
        l(
          "Define contracts, review security and explain every generated branch.",
          "Contract define করো, security review করো, generated branch explain করতে পারো কি না দেখো।",
        ),
      ),
      exposure(
        l("Debugging integrated systems", "Integrated system debugging"),
        "medium",
        l(
          "AI helps form hypotheses but lacks your production context.",
          "AI hypothesis দিতে পারে, কিন্তু তোমার production context জানে না।",
        ),
        l(
          "Practice logs, traces, isolation and verification without handing over judgment.",
          "Judgment ছেড়ে না দিয়ে log, trace, isolation আর verification practice করো।",
        ),
      ),
      exposure(
        l(
          "Owning architecture and consequences",
          "Architecture আর consequence-এর ownership",
        ),
        "lower",
        l(
          "Trade-offs depend on domain, risk and responsibility.",
          "Trade-off নির্ভর করে domain, risk আর responsibility-র ওপর।",
        ),
        l(
          "Learn to justify decisions and monitor the result.",
          "Decision justify আর result monitor করতে শেখো।",
        ),
      ),
    ],
    day: [
      [
        "09:30",
        l(
          "Review a failing checkout trace with the team.",
          "Team-এর সঙ্গে failing checkout trace review।",
        ),
      ],
      [
        "12:00",
        l(
          "Design a safe data migration and API change.",
          "Safe data migration আর API change design।",
        ),
      ],
      [
        "15:30",
        l(
          "Implement, test and observe the change in staging.",
          "Change implement, test আর staging-এ observe।",
        ),
      ],
    ],
  },
  {
    id: "frontend-engineering",
    familyId: "build-software",
    title: l("Frontend Engineering", "Frontend Engineering"),
    description: l(
      "Turn product intent into fast, accessible and resilient interfaces people can actually use.",
      "Product intent-কে fast, accessible আর resilient interface-এ বদলানো—যেটা মানুষ সত্যিই ব্যবহার করতে পারে।",
    ),
    work: [
      l(
        "Build semantic, responsive interfaces.",
        "Semantic, responsive interface build করা।",
      ),
      l(
        "Manage client state and data boundaries.",
        "Client state আর data boundary সামলানো।",
      ),
      l(
        "Test keyboard, screen sizes and browser behavior.",
        "Keyboard, screen size আর browser behavior test করা।",
      ),
      l(
        "Diagnose performance and usability problems.",
        "Performance আর usability problem diagnose করা।",
      ),
      l(
        "Collaborate with design, backend and users.",
        "Design, backend আর user-এর সঙ্গে collaborate করা।",
      ),
    ],
    enjoy: [
      l(
        "You notice awkward interactions quickly.",
        "Awkward interaction চোখে পড়ে দ্রুত।",
      ),
      l(
        "You enjoy both visual detail and code structure.",
        "Visual detail আর code structure—দুটোই ভালো লাগে।",
      ),
      l(
        "User feedback improves your curiosity instead of hurting your ego.",
        "User feedback ego-তে না লেগে curiosity বাড়ায়।",
      ),
    ],
    dislike: [
      l(
        "Browser inconsistencies make you permanently furious.",
        "Browser inconsistency দেখলেই স্থায়ী রাগ হয়।",
      ),
      l(
        "You want requirements to stay fixed and unambiguous.",
        "Requirement সবসময় fixed আর unambiguous চাই।",
      ),
      l(
        "Accessibility feels like someone else’s job.",
        "Accessibility-কে অন্য কারও কাজ মনে হয়।",
      ),
    ],
    dimensions: {
      coding: 3,
      mathematics: 1,
      systems: 2,
      investigation: 2,
      creativity: 3,
      communication: 3,
      production: 2,
    },
    notYet: [
      l(
        "Five frameworks before solid HTML, CSS and JavaScript.",
        "HTML, CSS, JavaScript শক্ত হওয়ার আগে পাঁচটা framework।",
      ),
      l(
        "A design system before building several real screens.",
        "কয়েকটি real screen বানানোর আগেই design system।",
      ),
      l(
        "Complex global state for a page with two toggles.",
        "দুটি toggle-এর page-এ complex global state।",
      ),
    ],
    foundation: [
      l("Semantic HTML", "Semantic HTML"),
      l("CSS layout and responsive design", "CSS layout আর responsive design"),
      l("JavaScript and the DOM", "JavaScript আর DOM"),
    ],
    core: [
      l("Accessibility", "Accessibility"),
      l("State and data fetching", "State আর data fetching"),
      l("Browser performance", "Browser performance"),
    ],
    practical: [
      l("Build from a design", "Design থেকে build"),
      l("Test keyboard and mobile flows", "Keyboard আর mobile flow test"),
      l("Measure and fix performance", "Performance measure আর fix"),
    ],
    later: [
      l("Design systems", "Design system"),
      l("Advanced rendering", "Advanced rendering"),
      l("Frontend architecture", "Frontend architecture"),
    ],
    resources: ["mdn", "web-a11y", "git-book", "testing-js"],
    related: [
      "backend-engineering",
      "technical-product-leadership",
      "machine-learning",
    ],
    ai: [
      exposure(
        l("Scaffolding common components", "Common component scaffolding"),
        "higher",
        l(
          "AI can produce plausible markup and styles rapidly.",
          "AI দ্রুত plausible markup আর style লিখতে পারে।",
        ),
        l(
          "Inspect semantics, responsiveness and duplication before accepting it.",
          "Accept করার আগে semantic, responsiveness আর duplication দেখো।",
        ),
      ),
      exposure(
        l(
          "Accessibility and interaction debugging",
          "Accessibility আর interaction debugging",
        ),
        "medium",
        l(
          "Tools flag issues; context and assistive-tech behavior still need judgment.",
          "Tool issue ধরতে পারে; context আর assistive-tech behavior বুঝতে judgment লাগে।",
        ),
        l(
          "Use keyboard and screen-reader checks yourself.",
          "নিজে keyboard আর screen-reader check করো।",
        ),
      ),
      exposure(
        l(
          "Turning messy user needs into a coherent experience",
          "Messy user need-কে coherent experience বানানো",
        ),
        "lower",
        l(
          "The real problem is often deciding what the interface should do.",
          "আসল problem অনেক সময় interface কী করবে সেটা ঠিক করা।",
        ),
        l(
          "Practice interviewing, prototyping and validating trade-offs.",
          "Interview, prototype আর trade-off validate করা practice করো।",
        ),
      ),
    ],
    day: [
      [
        "10:00",
        l(
          "Reproduce a checkout issue on a narrow phone.",
          "Narrow phone-এ checkout issue reproduce।",
        ),
      ],
      [
        "12:30",
        l(
          "Pair with design on an accessible error state.",
          "Accessible error state নিয়ে designer-এর সঙ্গে pair।",
        ),
      ],
      [
        "16:00",
        l(
          "Ship the fix and compare performance traces.",
          "Fix ship করে performance trace compare।",
        ),
      ],
    ],
  },
  {
    id: "data-engineering",
    familyId: "work-with-data",
    title: l("Data Engineering", "Data Engineering"),
    description: l(
      "Build reliable pipelines and data models so analysts, products and ML systems can trust their inputs.",
      "Reliable pipeline আর data model বানানো, যাতে analyst, product আর ML system input-কে বিশ্বাস করতে পারে।",
    ),
    work: [
      l(
        "Ingest data from imperfect sources.",
        "অসম্পূর্ণ source থেকে data ingest করা।",
      ),
      l(
        "Model warehouse tables and contracts.",
        "Warehouse table আর contract model করা।",
      ),
      l("Schedule and monitor pipelines.", "Pipeline schedule আর monitor করা।"),
      l(
        "Investigate missing, late or duplicated data.",
        "Missing, late বা duplicate data investigate করা।",
      ),
      l(
        "Balance cost, freshness and correctness.",
        "Cost, freshness আর correctness-এর balance করা।",
      ),
    ],
    enjoy: [
      l(
        "You like making messy systems predictable.",
        "Messy system predictable করতে ভালো লাগে।",
      ),
      l(
        "SQL feels expressive rather than boring.",
        "SQL boring না, expressive লাগে।",
      ),
      l(
        "You care where data came from and whether it can be trusted.",
        "Data কোথা থেকে এলো আর বিশ্বাসযোগ্য কি না—সেটা গুরুত্বপূর্ণ লাগে।",
      ),
    ],
    dislike: [
      l(
        "Invisible infrastructure gives you little satisfaction.",
        "Invisible infrastructure-এ satisfaction কম।",
      ),
      l(
        "You dislike investigating upstream failures you did not cause.",
        "নিজের না করা upstream failure investigate অপছন্দ।",
      ),
      l(
        "Schema details and operational repetition drain you.",
        "Schema detail আর operational repetition ক্লান্ত করে।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 2,
      systems: 3,
      investigation: 3,
      creativity: 1,
      communication: 2,
      production: 3,
    },
    notYet: [
      l(
        "Streaming before a reliable batch pipeline.",
        "Reliable batch pipeline-এর আগে streaming।",
      ),
      l(
        "A cloud certification without building a pipeline.",
        "Pipeline না বানিয়ে cloud certification।",
      ),
      l(
        "Every warehouse tool shown in one architecture diagram.",
        "একটা architecture diagram-এ দেখা সব warehouse tool।",
      ),
    ],
    foundation: [
      l("Python and SQL", "Python আর SQL"),
      l("Relational modeling", "Relational modeling"),
      l("Linux and Git", "Linux আর Git"),
    ],
    core: [
      l("Batch pipelines", "Batch pipeline"),
      l("Data quality and contracts", "Data quality আর contract"),
      l("Warehouses and file formats", "Warehouse আর file format"),
    ],
    practical: [
      l("Build an idempotent pipeline", "Idempotent pipeline build"),
      l("Add quality checks", "Quality check যোগ"),
      l("Document lineage", "Lineage document"),
    ],
    later: [
      l("Orchestration", "Orchestration"),
      l("Streaming", "Streaming"),
      l("Distributed processing", "Distributed processing"),
    ],
    resources: [
      "postgres-tutorial",
      "sqlbolt",
      "data-engineering-zoomcamp",
      "linux-journey",
    ],
    related: ["backend-engineering", "machine-learning", "devops-sre"],
    ai: [
      exposure(
        l("Writing routine transformations", "Routine transformation লেখা"),
        "higher",
        l(
          "AI is strong at familiar SQL and mapping patterns.",
          "Familiar SQL আর mapping pattern-এ AI শক্তিশালী।",
        ),
        l(
          "Validate grain, null behavior and edge cases with tests.",
          "Grain, null behavior আর edge case test দিয়ে validate করো।",
        ),
      ),
      exposure(
        l("Diagnosing data-quality failures", "Data-quality failure diagnose"),
        "medium",
        l(
          "AI can query clues but lineage and business semantics are local.",
          "AI clue খুঁজতে পারে, কিন্তু lineage আর business meaning local।",
        ),
        l(
          "Learn profiling, reconciliation and contract design.",
          "Profiling, reconciliation আর contract design শেখো।",
        ),
      ),
      exposure(
        l(
          "Owning trustworthy data definitions",
          "Trustworthy data definition-এর ownership",
        ),
        "lower",
        l(
          "Teams must agree what metrics mean and who is accountable.",
          "Metric-এর মানে আর accountability team-কে ঠিক করতে হয়।",
        ),
        l(
          "Practice communicating definitions and trade-offs.",
          "Definition আর trade-off communicate করা practice করো।",
        ),
      ),
    ],
    day: [
      [
        "09:00",
        l(
          "Investigate why yesterday’s orders arrived twice.",
          "গতকালের order দুইবার কেন এসেছে investigate।",
        ),
      ],
      [
        "13:00",
        l(
          "Review a new event contract with backend engineers.",
          "Backend engineer-এর সঙ্গে নতুন event contract review।",
        ),
      ],
      [
        "16:30",
        l(
          "Backfill safely and add a regression check.",
          "Safe backfill আর regression check যোগ।",
        ),
      ],
    ],
  },
  {
    id: "machine-learning",
    familyId: "build-intelligence",
    title: l("Machine Learning Engineering", "Machine Learning Engineering"),
    description: l(
      "Turn data and models into evaluated, monitored systems that improve a real decision or product.",
      "Data আর model-কে evaluated, monitored system-এ বদলানো—যেটা real decision বা product উন্নত করে।",
    ),
    work: [
      l(
        "Frame a measurable prediction problem.",
        "Measurable prediction problem frame করা।",
      ),
      l("Prepare and inspect data.", "Data prepare আর inspect করা।"),
      l(
        "Train, compare and evaluate models.",
        "Model train, compare আর evaluate করা।",
      ),
      l(
        "Deploy inference and monitor drift.",
        "Inference deploy আর drift monitor করা।",
      ),
      l(
        "Explain limitations to product and domain experts.",
        "Product আর domain expert-কে limitation explain করা।",
      ),
    ],
    enjoy: [
      l(
        "You enjoy experiments where the answer is uncertain.",
        "যে experiment-এর answer অনিশ্চিত—সেটা ভালো লাগে।",
      ),
      l(
        "Math becomes interesting when it explains behavior.",
        "Behavior explain করলে math interesting লাগে।",
      ),
      l(
        "You are patient with data cleaning and evaluation.",
        "Data cleaning আর evaluation-এ ধৈর্য আছে।",
      ),
    ],
    dislike: [
      l(
        "You mainly want to call an AI API and move on.",
        "মূলত AI API call করেই এগোতে চাও।",
      ),
      l(
        "Ambiguous results and failed experiments feel intolerable.",
        "Ambiguous result আর failed experiment সহ্য হয় না।",
      ),
      l(
        "You want every week to involve training a futuristic model.",
        "প্রতি সপ্তাহে futuristic model train করতে চাও।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 3,
      systems: 2,
      investigation: 3,
      creativity: 2,
      communication: 3,
      production: 2,
    },
    notYet: [
      l(
        "Training large language models from scratch.",
        "Scratch থেকে large language model train।",
      ),
      l(
        "Advanced MLOps before evaluating one small model well.",
        "একটা ছোট model ভালোভাবে evaluate করার আগে advanced MLOps।",
      ),
      l(
        "Collecting model names instead of learning statistics.",
        "Statistics না শিখে model-এর নাম collect করা।",
      ),
    ],
    foundation: [
      l("Python and data handling", "Python আর data handling"),
      l(
        "Probability, statistics and linear algebra",
        "Probability, statistics আর linear algebra",
      ),
      l("Problem framing", "Problem framing"),
    ],
    core: [
      l("Supervised learning", "Supervised learning"),
      l("Evaluation and leakage", "Evaluation আর leakage"),
      l("Feature and error analysis", "Feature আর error analysis"),
    ],
    practical: [
      l("Train a baseline", "Baseline train"),
      l("Explain errors", "Error explain"),
      l("Serve and monitor a model", "Model serve আর monitor"),
    ],
    later: [
      l("Deep learning", "Deep learning"),
      l("MLOps", "MLOps"),
      l("Specialized domains", "Specialized domain"),
    ],
    resources: ["ml-course", "kaggle-intro", "data-engineering-zoomcamp"],
    related: ["data-engineering", "backend-engineering", "systems-research"],
    ai: [
      exposure(
        l(
          "Generating baseline training code",
          "Baseline training code generate",
        ),
        "higher",
        l(
          "Standard notebook patterns are easy to produce.",
          "Standard notebook pattern সহজেই produce হয়।",
        ),
        l(
          "Rebuild a small baseline yourself and explain each metric.",
          "নিজে ছোট baseline বানিয়ে প্রতিটি metric explain করো।",
        ),
      ),
      exposure(
        l("Experiment and error analysis", "Experiment আর error analysis"),
        "medium",
        l(
          "AI suggests ideas; it cannot guarantee your data or metric represents reality.",
          "AI idea দিতে পারে; data বা metric reality represent করে কি না guarantee করতে পারে না।",
        ),
        l(
          "Learn leakage checks, slices and falsifiable hypotheses.",
          "Leakage check, slice আর falsifiable hypothesis শেখো।",
        ),
      ),
      exposure(
        l("Responsible problem framing", "Responsible problem framing"),
        "lower",
        l(
          "Choosing what to predict creates domain and ethical consequences.",
          "কী predict করবে—সেটা domain আর ethical consequence তৈরি করে।",
        ),
        l(
          "Work with domain experts and document failure costs.",
          "Domain expert-এর সঙ্গে কাজ করে failure cost document করো।",
        ),
      ),
    ],
    day: [
      [
        "09:30",
        l(
          "Inspect a sudden drop in recall for one user group.",
          "একটি user group-এর recall drop inspect।",
        ),
      ],
      [
        "12:00",
        l(
          "Discuss whether the target label is still meaningful.",
          "Target label এখনও meaningful কি না আলোচনা।",
        ),
      ],
      [
        "15:00",
        l(
          "Run a smaller baseline and review errors, not just accuracy.",
          "Small baseline run করে accuracy নয়, error review।",
        ),
      ],
    ],
  },
  {
    id: "cybersecurity",
    familyId: "protect-systems",
    title: l("Cybersecurity", "Cybersecurity"),
    description: l(
      "Reduce risk by understanding systems, finding weaknesses and helping people respond responsibly.",
      "System বুঝে weakness খোঁজা আর responsible response দিয়ে risk কমানো।",
    ),
    work: [
      l(
        "Review systems for realistic threats.",
        "Realistic threat-এর জন্য system review।",
      ),
      l(
        "Investigate alerts and suspicious behavior.",
        "Alert আর suspicious behavior investigate।",
      ),
      l(
        "Test only authorized targets and document evidence.",
        "শুধু authorized target test আর evidence document।",
      ),
      l(
        "Help engineers fix root causes.",
        "Engineer-দের root cause fix করতে সাহায্য।",
      ),
      l("Communicate risk without drama.", "Drama ছাড়াই risk communicate।"),
    ],
    enjoy: [
      l(
        "You ask how systems fail, not only how they work.",
        "System কীভাবে কাজ করে শুধু নয়, কীভাবে fail করে তাও জানতে চাও।",
      ),
      l(
        "Careful investigation feels satisfying.",
        "Careful investigation satisfying লাগে।",
      ),
      l(
        "Rules, ethics and evidence matter to you.",
        "Rule, ethics আর evidence গুরুত্বপূর্ণ।",
      ),
    ],
    dislike: [
      l(
        "You want instant hacker-movie excitement.",
        "Instant hacker-movie excitement চাই।",
      ),
      l(
        "Writing clear reports sounds like wasted time.",
        "Clear report লেখাকে সময় নষ্ট মনে হয়।",
      ),
      l(
        "You dislike learning networking, Linux and web fundamentals.",
        "Networking, Linux আর web foundation শেখা অপছন্দ।",
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
    notYet: [
      l(
        "Installing Kali Linux as a career plan.",
        "Kali Linux install-কে career plan ভাবা।",
      ),
      l(
        "Testing systems without explicit authorization.",
        "Explicit authorization ছাড়া system test।",
      ),
      l(
        "Collecting exploit tools before networking and Linux.",
        "Networking আর Linux-এর আগে exploit tool collect।",
      ),
    ],
    foundation: [
      l("Networking and HTTP", "Networking আর HTTP"),
      l("Linux and operating systems", "Linux আর operating system"),
      l("Programming and scripting", "Programming আর scripting"),
    ],
    core: [
      l("Threats and common vulnerabilities", "Threat আর common vulnerability"),
      l(
        "Authentication and access control",
        "Authentication আর access control",
      ),
      l("Evidence and reporting", "Evidence আর reporting"),
    ],
    practical: [
      l("Complete authorized labs", "Authorized lab complete"),
      l("Write a reproducible report", "Reproducible report লেখা"),
      l("Fix a vulnerable demo app", "Vulnerable demo app fix"),
    ],
    later: [
      l("Cloud security", "Cloud security"),
      l("Reverse engineering", "Reverse engineering"),
      l(
        "Specialized offensive/defensive work",
        "Specialized offensive/defensive কাজ",
      ),
    ],
    resources: ["linux-journey", "portswigger", "missing-semester"],
    related: ["backend-engineering", "devops-sre", "embedded-systems"],
    ai: [
      exposure(
        l("Summarizing common alerts", "Common alert summarize"),
        "higher",
        l(
          "AI can group and explain known patterns quickly.",
          "AI known pattern দ্রুত group আর explain করতে পারে।",
        ),
        l(
          "Verify evidence and never paste secrets or sensitive logs into public tools.",
          "Evidence verify করো; secret বা sensitive log public tool-এ দিও না।",
        ),
      ),
      exposure(
        l("Investigating novel incidents", "Novel incident investigate"),
        "medium",
        l(
          "AI accelerates queries but may invent causes or unsafe actions.",
          "AI query accelerate করে, আবার কারণ বানিয়েও ফেলতে পারে।",
        ),
        l(
          "Preserve evidence, test hypotheses and maintain authorization boundaries.",
          "Evidence preserve, hypothesis test আর authorization boundary মানো।",
        ),
      ),
      exposure(
        l("Accepting and communicating risk", "Risk accept আর communicate"),
        "lower",
        l(
          "Accountability and business consequences remain human decisions.",
          "Accountability আর business consequence human decision।",
        ),
        l(
          "Practice concise risk reports and remediation trade-offs.",
          "Concise risk report আর remediation trade-off practice করো।",
        ),
      ),
    ],
    day: [
      [
        "08:45",
        l(
          "Triage an unusual login alert without assuming compromise.",
          "Compromise ধরে না নিয়ে unusual login alert triage।",
        ),
      ],
      [
        "12:30",
        l(
          "Reproduce a web flaw in an authorized staging environment.",
          "Authorized staging environment-এ web flaw reproduce।",
        ),
      ],
      [
        "16:00",
        l(
          "Write evidence, impact and a practical fix.",
          "Evidence, impact আর practical fix লেখা।",
        ),
      ],
    ],
  },
  {
    id: "devops-sre",
    familyId: "run-systems",
    title: l("DevOps / SRE", "DevOps / SRE"),
    description: l(
      "Help teams ship safely and keep services observable, reliable and recoverable.",
      "Team-কে safeভাবে ship করতে আর service-কে observable, reliable, recoverable রাখতে সাহায্য করা।",
    ),
    work: [
      l(
        "Automate build and deployment paths.",
        "Build আর deployment path automate।",
      ),
      l(
        "Define reliability signals and alerts.",
        "Reliability signal আর alert define।",
      ),
      l(
        "Investigate incidents across systems.",
        "System জুড়ে incident investigate।",
      ),
      l(
        "Improve infrastructure and developer workflows.",
        "Infrastructure আর developer workflow improve।",
      ),
      l(
        "Learn from failures without blame.",
        "Blame না করে failure থেকে শেখা।",
      ),
    ],
    enjoy: [
      l(
        "You are curious when the whole system behaves strangely.",
        "পুরো system অদ্ভুত behavior করলে curiosity বাড়ে।",
      ),
      l(
        "Automation feels better than repeating a checklist.",
        "Checklist repeat করার চেয়ে automation ভালো লাগে।",
      ),
      l(
        "You stay structured during incidents.",
        "Incident-এর সময় structured থাকতে পারো।",
      ),
    ],
    dislike: [
      l(
        "Operational interruptions feel completely unacceptable.",
        "Operational interruption একেবারেই unacceptable লাগে।",
      ),
      l(
        "You want to work only on visible features.",
        "শুধু visible feature-এ কাজ করতে চাও।",
      ),
      l(
        "You dislike reading logs, metrics and infrastructure code.",
        "Log, metric আর infrastructure code পড়া অপছন্দ।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 1,
      systems: 3,
      investigation: 3,
      creativity: 1,
      communication: 3,
      production: 3,
    },
    notYet: [
      l(
        "Kubernetes before containers and networking.",
        "Container আর networking-এর আগে Kubernetes।",
      ),
      l(
        "Five cloud certifications without one deployment.",
        "একটা deployment ছাড়াই পাঁচটি cloud certification।",
      ),
      l(
        "Alerts for every metric without an action.",
        "Action ছাড়াই প্রতিটি metric-এর alert।",
      ),
    ],
    foundation: [
      l("Linux, shell and networking", "Linux, shell আর networking"),
      l("Git and scripting", "Git আর scripting"),
      l("How web apps run", "Web app কীভাবে run করে"),
    ],
    core: [
      l("Containers and CI/CD", "Container আর CI/CD"),
      l("Observability", "Observability"),
      l("Reliability and incidents", "Reliability আর incident"),
    ],
    practical: [
      l("Deploy a small app", "Small app deploy"),
      l("Break and diagnose it", "Break করে diagnose"),
      l("Automate recovery", "Recovery automate"),
    ],
    later: [
      l("Orchestration", "Orchestration"),
      l("Infrastructure as code", "Infrastructure as code"),
      l(
        "Capacity and platform engineering",
        "Capacity আর platform engineering",
      ),
    ],
    resources: ["linux-journey", "missing-semester", "docker-start"],
    related: ["backend-engineering", "data-engineering", "cybersecurity"],
    ai: [
      exposure(
        l(
          "Generating pipeline configuration",
          "Pipeline configuration generate",
        ),
        "higher",
        l(
          "AI can draft familiar YAML and scripts.",
          "AI familiar YAML আর script draft করতে পারে।",
        ),
        l(
          "Read every permission, secret boundary and failure behavior before running it.",
          "Run করার আগে permission, secret boundary আর failure behavior পড়ো।",
        ),
      ),
      exposure(
        l("Incident diagnosis", "Incident diagnosis"),
        "medium",
        l(
          "AI correlates signals but rarely owns the full context.",
          "AI signal correlate করতে পারে, full context সাধারণত জানে না।",
        ),
        l(
          "Build causal reasoning with logs, metrics, traces and timelines.",
          "Log, metric, trace আর timeline দিয়ে causal reasoning build করো।",
        ),
      ),
      exposure(
        l(
          "Reliability trade-offs and incident command",
          "Reliability trade-off আর incident command",
        ),
        "lower",
        l(
          "Cost, risk and coordination require accountable judgment.",
          "Cost, risk আর coordination-এ accountable judgment লাগে।",
        ),
        l(
          "Practice clear communication and blameless review.",
          "Clear communication আর blameless review practice করো।",
        ),
      ),
    ],
    day: [
      [
        "09:15",
        l(
          "Review a noisy alert and remove what has no action.",
          "Noisy alert review করে actionহীনটা remove।",
        ),
      ],
      [
        "13:00",
        l(
          "Improve a deployment rollback with a product team.",
          "Product team-এর সঙ্গে deployment rollback improve।",
        ),
      ],
      [
        "17:10",
        l(
          "Coordinate an incident, then capture what the system taught you.",
          "Incident coordinate, তারপর system কী শেখাল capture।",
        ),
      ],
    ],
  },
  {
    id: "embedded-systems",
    familyId: "close-to-hardware",
    title: l("Embedded Systems", "Embedded Systems"),
    description: l(
      "Write software that interacts with sensors, devices and strict timing or resource constraints.",
      "Sensor, device আর strict timing/resource constraint-এর সঙ্গে কাজ করা software লেখা।",
    ),
    work: [
      l(
        "Read hardware specifications and interfaces.",
        "Hardware specification আর interface পড়া।",
      ),
      l("Write and debug firmware.", "Firmware লেখা আর debug।"),
      l(
        "Measure timing, memory and power.",
        "Timing, memory আর power measure।",
      ),
      l(
        "Integrate sensors and communication protocols.",
        "Sensor আর communication protocol integrate।",
      ),
      l(
        "Test behavior in the physical world.",
        "Physical world-এ behavior test।",
      ),
    ],
    enjoy: [
      l(
        "A blinking LED you truly understand feels rewarding.",
        "যে blinking LED সত্যিই বুঝে বানিয়েছ—সেটা rewarding লাগে।",
      ),
      l(
        "You like constraints and concrete cause-and-effect.",
        "Constraint আর concrete cause-effect ভালো লাগে।",
      ),
      l(
        "You are patient with slow hardware debugging.",
        "Slow hardware debugging-এ ধৈর্য আছে।",
      ),
    ],
    dislike: [
      l(
        "You want every bug fixed with a browser refresh.",
        "প্রতিটি bug browser refresh-এ fix চাই।",
      ),
      l(
        "Datasheets and low-level details feel unbearable.",
        "Datasheet আর low-level detail অসহ্য।",
      ),
      l(
        "You dislike working where hardware availability matters.",
        "Hardware availability-নির্ভর কাজ অপছন্দ।",
      ),
    ],
    dimensions: {
      coding: 3,
      mathematics: 2,
      systems: 3,
      investigation: 3,
      creativity: 2,
      communication: 2,
      production: 2,
    },
    notYet: [
      l(
        "A complex RTOS before bare-metal timing basics.",
        "Bare-metal timing basics-এর আগে complex RTOS।",
      ),
      l(
        "Building a custom PCB for your first sensor test.",
        "প্রথম sensor test-এই custom PCB।",
      ),
      l(
        "Copying driver code you cannot trace.",
        "Trace করতে পারো না এমন driver code copy।",
      ),
    ],
    foundation: [
      l("C and memory", "C আর memory"),
      l(
        "Digital logic and computer architecture",
        "Digital logic আর computer architecture",
      ),
      l("Basic electronics", "Basic electronics"),
    ],
    core: [
      l("Microcontrollers and I/O", "Microcontroller আর I/O"),
      l("Protocols and interrupts", "Protocol আর interrupt"),
      l("Timing and debugging", "Timing আর debugging"),
    ],
    practical: [
      l("Read a sensor", "Sensor read"),
      l("Handle timing without blocking", "Block না করে timing handle"),
      l("Measure a real constraint", "Real constraint measure"),
    ],
    later: [
      l("RTOS", "RTOS"),
      l("Embedded Linux", "Embedded Linux"),
      l("Safety and specialized hardware", "Safety আর specialized hardware"),
    ],
    resources: ["nand2tetris", "arduino-docs", "cs50x"],
    related: ["systems-research", "cybersecurity", "devops-sre"],
    ai: [
      exposure(
        l("Drafting simple driver scaffolds", "Simple driver scaffold draft"),
        "higher",
        l(
          "AI knows common register and protocol patterns.",
          "AI common register আর protocol pattern জানে।",
        ),
        l(
          "Cross-check every address and electrical constraint against the datasheet.",
          "প্রতিটি address আর electrical constraint datasheet-এ মিলাও।",
        ),
      ),
      exposure(
        l("Hardware-software debugging", "Hardware-software debugging"),
        "medium",
        l(
          "Physical measurements and board-specific facts limit remote guesses.",
          "Physical measurement আর board-specific fact remote guess-কে limit করে।",
        ),
        l(
          "Learn instrumentation, timing diagrams and systematic isolation.",
          "Instrumentation, timing diagram আর systematic isolation শেখো।",
        ),
      ),
      exposure(
        l(
          "Safety and real-world responsibility",
          "Safety আর real-world responsibility",
        ),
        "lower",
        l(
          "Device failures can affect people and physical systems.",
          "Device failure মানুষ আর physical system-কে প্রভাবিত করতে পারে।",
        ),
        l(
          "Treat verification, constraints and documentation as core engineering.",
          "Verification, constraint আর documentation-কে core engineering ভাবো।",
        ),
      ),
    ],
    day: [
      [
        "09:00",
        l(
          "Reproduce an intermittent sensor timeout on the bench.",
          "Bench-এ intermittent sensor timeout reproduce।",
        ),
      ],
      [
        "12:00",
        l(
          "Compare the trace with the datasheet timing diagram.",
          "Trace-কে datasheet timing diagram-এর সঙ্গে compare।",
        ),
      ],
      [
        "15:30",
        l(
          "Fix the interrupt path and test heat, noise and low power.",
          "Interrupt path fix করে heat, noise আর low power test।",
        ),
      ],
    ],
  },
  {
    id: "systems-research",
    familyId: "computing-deeply",
    title: l(
      "Systems, Algorithms & Research",
      "Systems, Algorithms & Research",
    ),
    description: l(
      "Investigate how computing works, prove or measure ideas, and improve the foundations others build on.",
      "Computing কীভাবে কাজ করে সেটা investigate, idea prove/measure, আর অন্যরা যে foundation-এ build করে সেটা improve করা।",
    ),
    work: [
      l(
        "Read papers and identify unanswered questions.",
        "Paper পড়ে unanswered question খোঁজা।",
      ),
      l(
        "Design algorithms, systems or experiments.",
        "Algorithm, system বা experiment design।",
      ),
      l(
        "Prove properties or measure behavior carefully.",
        "Property prove বা behavior carefully measure।",
      ),
      l(
        "Build prototypes and challenge assumptions.",
        "Prototype build আর assumption challenge।",
      ),
      l(
        "Write clearly enough for others to verify the work.",
        "অন্যরা verify করতে পারে—এমন পরিষ্কারভাবে লেখা।",
      ),
    ],
    enjoy: [
      l(
        "You keep asking why, not only which tool.",
        "কোন tool শুধু নয়—কেন, সেটা জিজ্ঞেস করতে থাকো।",
      ),
      l(
        "Deep focus and ambiguous questions energize you.",
        "Deep focus আর ambiguous question energize করে।",
      ),
      l(
        "You enjoy precision, evidence and explaining ideas.",
        "Precision, evidence আর idea explain করা ভালো লাগে।",
      ),
    ],
    dislike: [
      l(
        "You want immediate product feedback every day.",
        "প্রতিদিন immediate product feedback চাই।",
      ),
      l(
        "Reading dense material feels pointless.",
        "Dense material পড়া pointless লাগে।",
      ),
      l(
        "Repeated failed experiments quickly end your curiosity.",
        "কয়েকটি failed experiment-এই curiosity শেষ।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 3,
      systems: 3,
      investigation: 3,
      creativity: 3,
      communication: 3,
      production: 1,
    },
    notYet: [
      l(
        "Reading advanced papers without foundation or a question.",
        "Foundation বা question ছাড়াই advanced paper পড়া।",
      ),
      l(
        "Chasing novelty before reproducing known results.",
        "Known result reproduce করার আগে novelty chase।",
      ),
      l(
        "Assuming research means avoiding implementation.",
        "Research মানে implementation এড়িয়ে যাওয়া ভাবা।",
      ),
    ],
    foundation: [
      l("Discrete math and proofs", "Discrete math আর proof"),
      l("Algorithms and data structures", "Algorithm আর data structure"),
      l("Computer systems", "Computer system"),
    ],
    core: [
      l("Experimental method", "Experimental method"),
      l("Reading and writing technical work", "Technical work পড়া আর লেখা"),
      l("One depth area", "একটি depth area"),
    ],
    practical: [
      l("Reproduce a result", "Result reproduce"),
      l("Measure honestly", "Honestly measure"),
      l("Write a short report", "Short report লেখা"),
    ],
    later: [
      l("Graduate-level topics", "Graduate-level topic"),
      l("Original research", "Original research"),
      l("Publication and peer review", "Publication আর peer review"),
    ],
    resources: [
      "algorithms-princeton",
      "nand2tetris",
      "teach-yourself-cs",
      "cs50x",
    ],
    related: ["embedded-systems", "machine-learning", "backend-engineering"],
    ai: [
      exposure(
        l("Summarizing familiar literature", "Familiar literature summarize"),
        "higher",
        l(
          "AI can compress text but may invent citations or erase nuance.",
          "AI text compress করতে পারে, citation বানাতে বা nuance মুছতে পারে।",
        ),
        l(
          "Read primary sources and verify every citation.",
          "Primary source পড়ো আর citation verify করো।",
        ),
      ),
      exposure(
        l("Prototype generation", "Prototype generation"),
        "medium",
        l(
          "AI accelerates code but experimental validity still needs design.",
          "AI code accelerate করে, experimental validity-র জন্য design লাগে।",
        ),
        l(
          "Pre-register expectations and test baselines independently.",
          "Expectation আগে লিখে baseline independently test করো।",
        ),
      ),
      exposure(
        l(
          "Forming meaningful questions and defensible evidence",
          "Meaningful question আর defensible evidence তৈরি",
        ),
        "lower",
        l(
          "Novelty and scientific responsibility require informed judgment.",
          "Novelty আর scientific responsibility-তে informed judgment লাগে।",
        ),
        l(
          "Learn methods, critique and transparent reporting.",
          "Method, critique আর transparent reporting শেখো।",
        ),
      ),
    ],
    day: [
      [
        "09:30",
        l(
          "Read a paper and mark the assumption that worries you.",
          "Paper পড়ে যে assumption চিন্তায় ফেলে সেটা mark।",
        ),
      ],
      [
        "13:30",
        l(
          "Design a baseline that could disprove your idea.",
          "নিজের idea disprove করতে পারে এমন baseline design।",
        ),
      ],
      [
        "17:00",
        l(
          "Write what failed before deciding what to try next.",
          "Next try-এর আগে কী fail করেছে লিখে রাখা।",
        ),
      ],
    ],
  },
  {
    id: "technical-product-leadership",
    familyId: "technology-people",
    title: l(
      "Technical Product & Leadership",
      "Technical Product & Leadership",
    ),
    description: l(
      "Connect technical reality, user problems and team decisions without pretending one person knows everything.",
      "Technical reality, user problem আর team decision-কে যুক্ত করা—একজন সব জানে এমন ভান না করে।",
    ),
    work: [
      l(
        "Clarify the problem before solution debates.",
        "Solution debate-এর আগে problem clarify।",
      ),
      l(
        "Translate between users, engineers and constraints.",
        "User, engineer আর constraint-এর মধ্যে translate।",
      ),
      l(
        "Prioritize evidence and trade-offs.",
        "Evidence আর trade-off prioritize।",
      ),
      l(
        "Facilitate decisions and document why.",
        "Decision facilitate আর কেন—সেটা document।",
      ),
      l(
        "Improve team systems and technical direction.",
        "Team system আর technical direction improve।",
      ),
    ],
    enjoy: [
      l(
        "You like asking the question everyone skipped.",
        "সবাই যে question skip করেছে সেটা করতে ভালো লাগে।",
      ),
      l(
        "You can care about people and technical detail together.",
        "মানুষ আর technical detail—দুটো একসঙ্গে care করতে পারো।",
      ),
      l(
        "Ambiguity makes you organize, not freeze.",
        "Ambiguity-তে freeze না হয়ে organize করো।",
      ),
    ],
    dislike: [
      l(
        "You want authority without technical or interpersonal practice.",
        "Technical বা interpersonal practice ছাড়াই authority চাই।",
      ),
      l(
        "Frequent communication drains you completely.",
        "Frequent communication পুরোপুরি drain করে।",
      ),
      l(
        "You dislike decisions where every option has a cost.",
        "সব option-এর cost আছে—এমন decision অপছন্দ।",
      ),
    ],
    dimensions: {
      coding: 1,
      mathematics: 1,
      systems: 2,
      investigation: 2,
      creativity: 3,
      communication: 3,
      production: 2,
    },
    notYet: [
      l(
        "Calling yourself an architect before building and operating software.",
        "Software build আর operate করার আগে নিজেকে architect বলা।",
      ),
      l(
        "Collecting management frameworks without team experience.",
        "Team experience ছাড়া management framework collect।",
      ),
      l(
        "Replacing evidence with confident meetings.",
        "Evidence-এর জায়গায় confident meeting।",
      ),
    ],
    foundation: [
      l("Build real software first", "আগে real software build"),
      l("Clear writing and listening", "Clear writing আর listening"),
      l(
        "Basic product and business reasoning",
        "Basic product আর business reasoning",
      ),
    ],
    core: [
      l("Problem framing", "Problem framing"),
      l("Technical trade-offs", "Technical trade-off"),
      l("Facilitation and feedback", "Facilitation আর feedback"),
    ],
    practical: [
      l("Write a decision record", "Decision record লেখা"),
      l("Run a small discovery", "Small discovery run"),
      l("Lead a retrospective", "Retrospective lead"),
    ],
    later: [
      l("Architecture leadership", "Architecture leadership"),
      l("Product strategy", "Product strategy"),
      l("Organization design", "Organization design"),
    ],
    resources: ["missing-semester", "refactoring-guru", "testing-js"],
    related: [
      "backend-engineering",
      "frontend-engineering",
      "systems-research",
    ],
    ai: [
      exposure(
        l(
          "Summaries and routine documentation",
          "Summary আর routine documentation",
        ),
        "higher",
        l(
          "AI can turn structured inputs into a fast draft.",
          "AI structured input থেকে দ্রুত draft করতে পারে।",
        ),
        l(
          "Verify decisions, owners and omitted disagreement before sharing.",
          "Share করার আগে decision, owner আর বাদ যাওয়া disagreement verify করো।",
        ),
      ),
      exposure(
        l("Option and risk analysis", "Option আর risk analysis"),
        "medium",
        l(
          "AI broadens options but may not know political, human or domain context.",
          "AI option বাড়ায়, human বা domain context নাও জানতে পারে।",
        ),
        l(
          "Expose assumptions and seek evidence from the people affected.",
          "Assumption expose করে affected মানুষের evidence নাও।",
        ),
      ),
      exposure(
        l(
          "Accountable leadership and trust",
          "Accountable leadership আর trust",
        ),
        "lower",
        l(
          "Teams need a responsible person who can listen, decide and own outcomes.",
          "Team-এর এমন responsible মানুষ লাগে যে শুনবে, decide করবে আর outcome own করবে।",
        ),
        l(
          "Build credibility through delivery, feedback and transparent decisions.",
          "Delivery, feedback আর transparent decision দিয়ে credibility build করো।",
        ),
      ),
    ],
    day: [
      [
        "09:00",
        l(
          "Ask whether the requested feature solves the reported problem.",
          "Requested feature reported problem solve করে কি না জিজ্ঞেস।",
        ),
      ],
      [
        "12:00",
        l(
          "Map a technical trade-off with engineers and support.",
          "Engineer আর support-এর সঙ্গে technical trade-off map।",
        ),
      ],
      [
        "16:00",
        l(
          "Write the decision, uncertainty and next evidence needed.",
          "Decision, uncertainty আর next evidence লিখে রাখা।",
        ),
      ],
    ],
  },
];

export const careers: Career[] = [
  ...seeds,
  ...additionalCareers,
  ...infrastructureCareers,
].map((seed) => ({
  id: seed.id,
  slug: seed.id,
  familyId: seed.familyId,
  title: seed.title,
  shortDescription: seed.description,
  actualWork: seed.work,
  enjoyIf: seed.enjoy,
  dislikeIf: seed.dislike,
  realisticDay: seed.day.map(([time, activity]) => ({ time, activity })),
  dimensions: seed.dimensions,
  roadmapId: seed.id,
  experimentId: seed.id,
  aiExposure: seed.ai,
  relatedCareerIds: seed.related,
  notYet: seed.notYet,
  foundation: seed.foundation,
  core: seed.core,
  practical: seed.practical,
  later: seed.later,
  resourceIds: seed.resources,
}));

export const careerById = new Map(careers.map((career) => [career.id, career]));

export const careerFamilies: CareerFamily[] = [
  {
    id: "build-software",
    title: l("Build Software", "Software বানাও"),
    description: l(
      "Build, test and improve products and the systems behind them.",
      "Product আর তার পেছনের system বানাও, test করো আর উন্নত করো।",
    ),
    careerIds: [
      "backend-engineering",
      "frontend-engineering",
      "mobile-app-development",
      "software-quality-assurance",
    ],
    accent: "blue",
  },
  {
    id: "work-with-data",
    title: l("Work With Data", "Data নিয়ে কাজ"),
    description: l(
      "Make data reliable, useful and available.",
      "Data-কে reliable, useful আর available করো।",
    ),
    careerIds: ["data-engineering"],
    accent: "teal",
  },
  {
    id: "build-intelligence",
    title: l("Build Intelligence", "Intelligence বানাও"),
    description: l(
      "Design and evaluate learning systems.",
      "Learning system design আর evaluate করো।",
    ),
    careerIds: ["machine-learning"],
    accent: "violet",
  },
  {
    id: "protect-systems",
    title: l("Protect Systems", "System সুরক্ষিত রাখো"),
    description: l(
      "Understand threats and reduce real risk.",
      "Threat বুঝে real risk কমাও।",
    ),
    careerIds: ["cybersecurity"],
    accent: "coral",
  },
  {
    id: "run-systems",
    title: l("Run Systems", "System সচল রাখো"),
    description: l(
      "Make delivery and operations dependable.",
      "Delivery আর operation dependable করো।",
    ),
    careerIds: ["devops-sre", "network-engineering"],
    accent: "sky",
  },
  {
    id: "close-to-hardware",
    title: l("Work Close to Hardware", "Hardware-এর কাছাকাছি"),
    description: l(
      "Design electronic systems and connect software to the physical world.",
      "Electronic system design করো; software-কে বাস্তব জগতের সঙ্গে যুক্ত করো।",
    ),
    careerIds: ["embedded-systems", "hardware-engineering"],
    accent: "amber",
  },
  {
    id: "computing-deeply",
    title: l("Understand Computing Deeply", "Computing গভীরে বোঝো"),
    description: l(
      "Study the ideas and systems beneath tools.",
      "Tool-এর নিচের idea আর system বুঝো।",
    ),
    careerIds: ["systems-research"],
    accent: "indigo",
  },
  {
    id: "technology-people",
    title: l("Technology + People", "Technology + মানুষ"),
    description: l(
      "Connect technical work, decisions and teams.",
      "Technical কাজ, decision আর team-কে যুক্ত করো।",
    ),
    careerIds: ["ux-ui-engineering", "technical-product-leadership"],
    accent: "warm",
  },
];
