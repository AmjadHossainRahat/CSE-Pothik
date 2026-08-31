import { l } from "@/data/careers";
import type {
  CareerExperiment,
  CareerId,
  LocalizedText,
} from "@/types/content";

interface ExperimentSeed {
  id: CareerId;
  title: LocalizedText;
  duration: string;
  prerequisites: LocalizedText[];
  goals: LocalizedText[];
  steps: LocalizedText[];
  attention: LocalizedText[];
  resources: string[];
}

const seeds: ExperimentSeed[] = [
  {
    id: "backend-engineering",
    title: l(
      "Build, break and explain a tiny API",
      "Tiny API build, break আর explain করো",
    ),
    duration: "90–120 min",
    prerequisites: [
      l(
        "Basic programming and a local runtime.",
        "Basic programming আর local runtime।",
      ),
    ],
    goals: [
      l(
        "Feel data modeling, validation, failure and debugging—not only the happy path.",
        "শুধু happy path নয়—data modeling, validation, failure আর debugging feel করো।",
      ),
    ],
    steps: [
      l(
        "Create three endpoints for a tiny book-lending service.",
        "Tiny book-lending service-এর তিনটি endpoint বানাও।",
      ),
      l(
        "Store books and loans in memory or SQLite; define invalid states.",
        "Memory বা SQLite-এ book/loan রাখো; invalid state define করো।",
      ),
      l(
        "Add validation and one automated test for a rejected loan.",
        "Validation আর rejected loan-এর একটি automated test দাও।",
      ),
      l(
        "Introduce a duplicate-loan bug, use logs to find it, then fix it.",
        "Duplicate-loan bug introduce করে log দিয়ে খুঁজে fix করো।",
      ),
    ],
    attention: [
      l(
        "Did modeling the rules feel satisfying?",
        "Rule model করা satisfying লেগেছে?",
      ),
      l(
        "Did debugging become more interesting after evidence appeared?",
        "Evidence পাওয়ার পরে debugging interesting লেগেছে?",
      ),
    ],
    resources: ["node-learn", "postgres-tutorial"],
  },
  {
    id: "frontend-engineering",
    title: l(
      "Build an accessible orientation card",
      "Accessible orientation card বানাও",
    ),
    duration: "75–100 min",
    prerequisites: [
      l("Basic HTML, CSS and JavaScript.", "Basic HTML, CSS আর JavaScript।"),
    ],
    goals: [
      l(
        "Experience the gap between a screen that looks right and one that works well.",
        "দেখতে ঠিক screen আর সত্যি ভালো কাজ করা screen-এর gap feel করো।",
      ),
    ],
    steps: [
      l(
        "Build a responsive career card from a simple sketch.",
        "Simple sketch থেকে responsive career card বানাও।",
      ),
      l(
        "Add a details reveal that works with keyboard and touch.",
        "Keyboard আর touch-এ কাজ করা details reveal যোগ করো।",
      ),
      l(
        "Test at 320 px and 1024 px; fix wrapping and focus order.",
        "320 px আর 1024 px-এ test করে wrapping আর focus order fix করো।",
      ),
      l(
        "Ask one person to use it without coaching; improve one point of confusion.",
        "কাউকে coaching ছাড়া ব্যবহার করতে দাও; একটি confusion improve করো।",
      ),
    ],
    attention: [
      l(
        "Did visual polish or interaction debugging energize you more?",
        "Visual polish নাকি interaction debugging—কোনটা বেশি energize করেছে?",
      ),
      l("Did feedback feel useful?", "Feedback useful লেগেছে?"),
    ],
    resources: ["mdn", "web-a11y"],
  },
  {
    id: "data-engineering",
    title: l("Repair a messy data pipeline", "Messy data pipeline repair করো"),
    duration: "90–120 min",
    prerequisites: [l("Basic Python or SQL.", "Basic Python বা SQL।")],
    goals: [
      l(
        "Experience cleaning, contracts, repeatability and data-quality investigation.",
        "Cleaning, contract, repeatability আর data-quality investigation feel করো।",
      ),
    ],
    steps: [
      l(
        "Download a small public CSV and profile missing or inconsistent values.",
        "Small public CSV নিয়ে missing/inconsistent value profile করো।",
      ),
      l(
        "Create a cleaned table with an explicit schema.",
        "Explicit schema-সহ cleaned table বানাও।",
      ),
      l(
        "Make the load idempotent: running twice must not duplicate rows.",
        "Load idempotent করো: দুইবার run-এ row duplicate হবে না।",
      ),
      l(
        "Add three quality checks and a short data dictionary.",
        "তিনটি quality check আর short data dictionary দাও।",
      ),
    ],
    attention: [
      l(
        "Did chasing a wrong row feel tedious or detective-like?",
        "Wrong row chase করা tedious নাকি detective-like লেগেছে?",
      ),
      l(
        "Did you enjoy defining what clean means?",
        "Clean মানে কী define করতে ভালো লেগেছে?",
      ),
    ],
    resources: ["sqlbolt", "data-engineering-zoomcamp"],
  },
  {
    id: "machine-learning",
    title: l(
      "Train a tiny classifier—and challenge it",
      "Tiny classifier train করে challenge করো",
    ),
    duration: "90–120 min",
    prerequisites: [
      l(
        "Basic Python; no advanced math required.",
        "Basic Python; advanced math দরকার নেই।",
      ),
    ],
    goals: [
      l(
        "Experience baselines, evaluation and error analysis instead of model theatre.",
        "Model theatre নয়—baseline, evaluation আর error analysis feel করো।",
      ),
    ],
    steps: [
      l(
        "Choose a small labelled dataset and split train/test before exploring outcomes.",
        "Small labelled dataset নিয়ে outcome দেখার আগে train/test split করো।",
      ),
      l(
        "Train a simple baseline classifier.",
        "Simple baseline classifier train করো।",
      ),
      l(
        "Inspect a confusion matrix and five wrong predictions.",
        "Confusion matrix আর পাঁচটি wrong prediction দেখো।",
      ),
      l(
        "Change one feature or threshold; explain who benefits and who is harmed.",
        "একটি feature বা threshold বদলে কে benefit/harm হয় explain করো।",
      ),
    ],
    attention: [
      l(
        "Were you more curious about the model or the mistakes?",
        "Model নাকি mistake—কোনটা নিয়ে বেশি curiosity ছিল?",
      ),
      l(
        "Did uncertainty feel exciting or frustrating?",
        "Uncertainty exciting নাকি frustrating লেগেছে?",
      ),
    ],
    resources: ["kaggle-intro", "ml-course"],
  },
  {
    id: "cybersecurity",
    title: l(
      "Investigate one authorized web-security flaw",
      "একটি authorized web-security flaw investigate করো",
    ),
    duration: "60–90 min",
    prerequisites: [
      l(
        "Basic HTTP; use only the linked deliberately vulnerable lab.",
        "Basic HTTP; শুধু linked deliberately vulnerable lab ব্যবহার করবে।",
      ),
    ],
    goals: [
      l(
        "Experience careful evidence, authorization and remediation—not random attacking.",
        "Random attack নয়—careful evidence, authorization আর remediation feel করো।",
      ),
    ],
    steps: [
      l(
        "Read the lab’s authorization and scope before touching anything.",
        "কিছু করার আগে lab-এর authorization আর scope পড়ো।",
      ),
      l(
        "Complete one beginner SQL injection or XSS lab.",
        "একটি beginner SQL injection বা XSS lab complete করো।",
      ),
      l(
        "Write the request, response, impact and safe reproduction steps.",
        "Request, response, impact আর safe reproduction step লেখো।",
      ),
      l(
        "Explain one server-side fix and one test that prevents regression.",
        "একটি server-side fix আর regression আটকানোর test explain করো।",
      ),
    ],
    attention: [
      l(
        "Did evidence gathering feel better than tool collecting?",
        "Tool collect করার চেয়ে evidence gather ভালো লেগেছে?",
      ),
      l(
        "Could another person reproduce your report safely?",
        "অন্য কেউ তোমার report safely reproduce করতে পারবে?",
      ),
    ],
    resources: ["portswigger"],
  },
  {
    id: "devops-sre",
    title: l(
      "Deploy, break and diagnose a small service",
      "Small service deploy, break আর diagnose করো",
    ),
    duration: "90–120 min",
    prerequisites: [
      l(
        "A small web app and basic shell use.",
        "Small web app আর basic shell use।",
      ),
    ],
    goals: [
      l(
        "Experience deployment, observability and calm diagnosis.",
        "Deployment, observability আর calm diagnosis feel করো।",
      ),
    ],
    steps: [
      l(
        "Containerize a tiny app and run it locally.",
        "Tiny app containerize করে locally run করো।",
      ),
      l(
        "Add a health endpoint and structured request log.",
        "Health endpoint আর structured request log দাও।",
      ),
      l(
        "Break one environment variable or port; diagnose without deleting everything.",
        "একটি env variable বা port break করে সব delete না দিয়ে diagnose করো।",
      ),
      l(
        "Write a three-step rollback and one useful alert.",
        "Three-step rollback আর একটি useful alert লেখো।",
      ),
    ],
    attention: [
      l(
        "Did the failure make you curious or only anxious?",
        "Failure curiosity দিয়েছে নাকি শুধু anxiety?",
      ),
      l(
        "Was automation satisfying after doing the task manually?",
        "Task manually করার পরে automation satisfying লেগেছে?",
      ),
    ],
    resources: ["docker-start", "missing-semester"],
  },
  {
    id: "embedded-systems",
    title: l(
      "Read a sensor without blocking time",
      "Time block না করে sensor read করো",
    ),
    duration: "90–150 min",
    prerequisites: [
      l(
        "An Arduino-compatible board or simulator and basic C.",
        "Arduino-compatible board বা simulator আর basic C।",
      ),
    ],
    goals: [
      l(
        "Experience physical feedback, timing constraints and datasheet-driven debugging.",
        "Physical feedback, timing constraint আর datasheet-driven debugging feel করো।",
      ),
    ],
    steps: [
      l(
        "Read one sensor or simulated input and print values.",
        "একটি sensor বা simulated input read করে value print করো।",
      ),
      l(
        "Blink a status LED without a long blocking delay.",
        "Long blocking delay ছাড়া status LED blink করো।",
      ),
      l(
        "Introduce an unrealistic sampling rate and observe failure.",
        "Unrealistic sampling rate দিয়ে failure observe করো।",
      ),
      l(
        "Use the datasheet to choose a safe rate and document the constraint.",
        "Datasheet দিয়ে safe rate বেছে constraint document করো।",
      ),
    ],
    attention: [
      l(
        "Did physical cause-and-effect feel rewarding?",
        "Physical cause-effect rewarding লেগেছে?",
      ),
      l(
        "Were timing details interesting enough to investigate?",
        "Timing detail investigate করার মতো interesting ছিল?",
      ),
    ],
    resources: ["arduino-docs", "nand2tetris"],
  },
  {
    id: "systems-research",
    title: l(
      "Reproduce and question a small result",
      "Small result reproduce আর question করো",
    ),
    duration: "2–3 days",
    prerequisites: [
      l(
        "Basic algorithms and comfort reading technical material.",
        "Basic algorithm আর technical material পড়ার comfort।",
      ),
    ],
    goals: [
      l(
        "Experience disciplined curiosity, baselines and honest reporting.",
        "Disciplined curiosity, baseline আর honest reporting feel করো।",
      ),
    ],
    steps: [
      l(
        "Choose one claim from a course note or simple paper.",
        "Course note বা simple paper-এর একটি claim বেছে নাও।",
      ),
      l(
        "Implement the smallest experiment that reproduces it.",
        "Claim reproduce করার smallest experiment implement করো।",
      ),
      l(
        "Change one assumption and measure what happens.",
        "একটি assumption বদলে কী হয় measure করো।",
      ),
      l(
        "Write one page: method, result, limitation and next question.",
        "এক page-এ method, result, limitation আর next question লেখো।",
      ),
    ],
    attention: [
      l(
        "Did failed reproduction deepen your curiosity?",
        "Failed reproduction curiosity deepen করেছে?",
      ),
      l(
        "Could someone verify your method from the report?",
        "Report থেকে কেউ method verify করতে পারবে?",
      ),
    ],
    resources: ["algorithms-princeton", "teach-yourself-cs"],
  },
  {
    id: "technical-product-leadership",
    title: l(
      "Turn a vague request into a decision",
      "Vague request-কে decision-এ বদলাও",
    ),
    duration: "75–100 min",
    prerequisites: [
      l(
        "A small project and one person willing to discuss it.",
        "Small project আর আলোচনা করতে রাজি একজন মানুষ।",
      ),
    ],
    goals: [
      l(
        "Experience listening, problem framing and transparent trade-offs.",
        "Listening, problem framing আর transparent trade-off feel করো।",
      ),
    ],
    steps: [
      l(
        "Start with a vague request such as ‘make search better’.",
        "‘Search better করো’-র মতো vague request দিয়ে শুরু।",
      ),
      l(
        "Ask five questions about user, pain, evidence and constraint.",
        "User, pain, evidence আর constraint নিয়ে পাঁচটি question করো।",
      ),
      l(
        "Write three options with cost, risk and what each does not solve.",
        "Cost, risk আর কী solve করে না-সহ তিনটি option লেখো।",
      ),
      l(
        "Recommend one reversible next step and record the decision.",
        "একটি reversible next step recommend করে decision record করো।",
      ),
    ],
    attention: [
      l(
        "Did clarifying the problem feel more useful than proposing features?",
        "Feature propose করার চেয়ে problem clarify useful লেগেছে?",
      ),
      l(
        "Could you disagree without making the conversation personal?",
        "Conversation personal না করে disagree করতে পেরেছ?",
      ),
    ],
    resources: ["refactoring-guru", "missing-semester"],
  },
];

const commonReflection = [
  l(
    "Would you voluntarily spend another five hours on this kind of problem? Why?",
    "এই ধরনের problem-এ নিজের ইচ্ছায় আরও পাঁচ ঘণ্টা দিতে চাইবে? কেন?",
  ),
  l(
    "Which part gave you energy, and which part drained it?",
    "কোন অংশ energy দিয়েছে, আর কোনটা drain করেছে?",
  ),
  l(
    "What evidence—not a salary video—would you gather before choosing this path?",
    "Salary video নয়—এই path বাছার আগে কী evidence জোগাড় করবে?",
  ),
];

export const experiments: CareerExperiment[] = seeds.map((seed) => ({
  id: seed.id,
  careerId: seed.id,
  title: seed.title,
  duration: seed.duration,
  prerequisites: seed.prerequisites,
  experienceGoals: seed.goals,
  steps: seed.steps,
  attention: seed.attention,
  reflectionPrompts: commonReflection,
  resourceIds: seed.resources,
}));

export const experimentById = new Map(
  experiments.map((experiment) => [experiment.id, experiment]),
);
