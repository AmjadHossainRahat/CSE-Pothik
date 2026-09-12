import { l } from "@/data/careers";
import { infrastructureExperiments } from "@/data/infrastructure-experiments";
import { specialistExperiments } from "@/data/specialist-experiments";
import type {
  CareerExperiment,
  CareerId,
  LocalizedText,
} from "@/types/content";

export interface ExperimentSeed {
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
    id: "mobile-app-development",
    title: l(
      "Make a reading list survive a restart",
      "App বন্ধ করে খুললেও reading list যেন হারিয়ে না যায়",
    ),
    duration: "90–120 min",
    prerequisites: [
      l(
        "Basic programming and one mobile starter app already running on your chosen emulator/device. Setup time is separate; use the linked platform guide first.",
        "Basic programming আর পছন্দের emulator/device-এ একটি starter app আগে থেকেই চালু। Setup-এর সময় আলাদা; আগে linked platform guide দেখুন।",
      ),
    ],
    goals: [
      l(
        "Feel state, persistence and interruptions—not just drawing a screen.",
        "শুধু screen আঁকা নয়—state, persistence আর interruption-এর কাজ অনুভব করুন।",
      ),
    ],
    steps: [
      l(
        "Create a list with a title field, Add action and a clear empty state. Keep it local; no login or backend.",
        "Title field, Add action আর পরিষ্কার empty state-সহ list বানান। Local রাখুন; login বা backend নয়।",
      ),
      l(
        "Save entries in local storage supported by your stack, then close and reopen the app.",
        "নিজের stack-এর local storage-এ entry রেখে app বন্ধ করে আবার খুলুন।",
      ),
      l(
        "Test duplicate taps, empty titles, larger text and switching to another app. Record one failure.",
        "Duplicate tap, খালি title, বড় text আর অন্য app-এ যাওয়া test করুন। একটি failure লিখে রাখুন।",
      ),
      l(
        "Fix the failure, add a small test for the state logic and explain where data lives. If time runs out, document the reproduction and continue later.",
        "Failure fix করে state logic-এর ছোট test দিন; data কোথায় থাকে বোঝান। সময় শেষ হলে reproduction লিখে পরে চালান।",
      ),
    ],
    attention: [
      l(
        "Was preserving a user's work more interesting than adding a second screen?",
        "দ্বিতীয় screen বানানোর চেয়ে user-এর কাজ বাঁচিয়ে রাখা বেশি interesting লেগেছে?",
      ),
      l(
        "Can you explain the difference between temporary UI state and persisted data?",
        "Temporary UI state আর persisted data-এর পার্থক্য বোঝাতে পারেন?",
      ),
    ],
    resources: ["android-compose", "react-native", "flutter", "apple-swift"],
  },
  {
    id: "ux-ui-engineering",
    title: l(
      "Turn a confusing form into a usable flow",
      "বিভ্রান্তিকর form-টিকে সহজ ও ব্যবহারযোগ্য করুন",
    ),
    duration: "90–120 min",
    prerequisites: [
      l(
        "Basic HTML/CSS and a little JavaScript. Paper and a browser are enough; no paid design tool. If no participant is available, label your self-review honestly.",
        "Basic HTML/CSS আর একটু JavaScript। কাগজ আর browser যথেষ্ট; paid design tool নয়। Participant না পেলে নিজের review-কে সেভাবেই উল্লেখ করুন।",
      ),
    ],
    goals: [
      l(
        "Experience the bridge between observing a problem, testing an idea and implementing an accessible interaction.",
        "সমস্যা দেখা, idea যাচাই আর accessible interaction implement করার যোগসূত্র অনুভব করুন।",
      ),
    ],
    steps: [
      l(
        "Choose a three-field event-registration form. Write the user task, a confusing moment and a sketch of a simpler flow.",
        "তিন field-এর event registration form নিন। User task, বিভ্রান্তির জায়গা আর সহজ flow-এর sketch লিখুন।",
      ),
      l(
        "Ask a consenting peer to try the sketch with fictional data; do not coach. Note observed behavior separately from your interpretation.",
        "সম্মতি দেওয়া peer-কে কাল্পনিক data দিয়ে sketch try করতে বলুন; সাহায্য করবেন না। দেখা behavior আর নিজের ব্যাখ্যা আলাদা রাখুন।",
      ),
      l(
        "Implement labels, instructions, validation errors and a success state. Preserve entered data after an error.",
        "Label, instruction, validation error আর success state বানান। Error হলে দেওয়া data ধরে রাখুন।",
      ),
      l(
        "Use only the keyboard, zoom the page and check a narrow screen. Revise one issue and write a before/after decision note without claiming statistical proof.",
        "শুধু keyboard ব্যবহার, page zoom আর narrow screen test করুন। একটি issue ঠিক করে before/after decision note লিখুন; statistical proof দাবি করবেন না।",
      ),
    ],
    attention: [
      l(
        "Did feedback change your design, or did you defend the first sketch?",
        "Feedback-এ design বদলেছে, নাকি প্রথম sketch-ই defend করেছেন?",
      ),
      l(
        "Did you enjoy both understanding the task and implementing the details?",
        "Task বোঝা আর খুঁটিনাটি implement—দুটিই ভালো লেগেছে?",
      ),
    ],
    resources: ["gov-user-research", "web-a11y", "gov-design-system"],
  },
  {
    id: "backend-engineering",
    title: l(
      "Build, break and explain a tiny API",
      "ছোট একটি API বানান, ভেঙে দেখুন, তারপর কারণ বোঝান",
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
        "শুধু happy path নয়—data modeling, validation, failure আর debugging feel করুন।",
      ),
    ],
    steps: [
      l(
        "Create three endpoints for a tiny book-lending service.",
        "Tiny book-lending service-এর তিনটি endpoint বানান।",
      ),
      l(
        "Store books and loans in memory or SQLite; define invalid states.",
        "Memory বা SQLite-এ book/loan রাখুন; invalid state define করুন।",
      ),
      l(
        "Add validation and one automated test for a rejected loan.",
        "Validation আর rejected loan-এর একটি automated test দিন।",
      ),
      l(
        "Introduce a duplicate-loan bug, use logs to find it, then fix it.",
        "Duplicate-loan bug introduce করে log দিয়ে খুঁজে fix করুন।",
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
      "সবার ব্যবহারযোগ্য একটি orientation card বানান",
    ),
    duration: "75–100 min",
    prerequisites: [
      l("Basic HTML, CSS and JavaScript.", "Basic HTML, CSS আর JavaScript।"),
    ],
    goals: [
      l(
        "Experience the gap between a screen that looks right and one that works well.",
        "দেখতে ঠিক screen আর সত্যি ভালো কাজ করা screen-এর gap feel করুন।",
      ),
    ],
    steps: [
      l(
        "Build a responsive career card from a simple sketch.",
        "Simple sketch থেকে responsive career card বানান।",
      ),
      l(
        "Add a details reveal that works with keyboard and touch.",
        "Keyboard আর touch-এ কাজ করা details reveal যোগ করুন।",
      ),
      l(
        "Test at 320 px and 1024 px; fix wrapping and focus order.",
        "320 px আর 1024 px-এ test করে wrapping আর focus order fix করুন।",
      ),
      l(
        "Ask one person to use it without coaching; improve one point of confusion.",
        "কাউকে coaching ছাড়া ব্যবহার করতে দিন; একটি confusion improve করুন।",
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
    title: l(
      "Repair a messy data pipeline",
      "এলোমেলো data pipeline গুছিয়ে ঠিক করুন",
    ),
    duration: "90–120 min",
    prerequisites: [l("Basic Python or SQL.", "Basic Python বা SQL।")],
    goals: [
      l(
        "Experience cleaning, contracts, repeatability and data-quality investigation.",
        "Cleaning, contract, repeatability আর data-quality investigation feel করুন।",
      ),
    ],
    steps: [
      l(
        "Download a small public CSV and profile missing or inconsistent values.",
        "Small public CSV নিয়ে missing/inconsistent value profile করুন।",
      ),
      l(
        "Create a cleaned table with an explicit schema.",
        "Explicit schema-সহ cleaned table বানান।",
      ),
      l(
        "Make the load idempotent: running twice must not duplicate rows.",
        "Load idempotent করুন: দুইবার run-এ row duplicate হবে না।",
      ),
      l(
        "Add three quality checks and a short data dictionary.",
        "তিনটি quality check আর short data dictionary দিন।",
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
      "ছোট একটি classifier train করুন, তারপর তার ভুল ধরুন",
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
        "Model theatre নয়—baseline, evaluation আর error analysis feel করুন।",
      ),
    ],
    steps: [
      l(
        "Choose a small labelled dataset and split train/test before exploring outcomes.",
        "Small labelled dataset নিয়ে outcome দেখার আগে train/test split করুন।",
      ),
      l(
        "Train a simple baseline classifier.",
        "Simple baseline classifier train করুন।",
      ),
      l(
        "Inspect a confusion matrix and five wrong predictions.",
        "Confusion matrix আর পাঁচটি wrong prediction দেখুন।",
      ),
      l(
        "Change one feature or threshold; explain who benefits and who is harmed.",
        "একটি feature বা threshold বদলে কে benefit/harm হয় explain করুন।",
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
      "অনুমোদিত একটি web-security flaw অনুসন্ধান করুন",
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
        "Random attack নয়—careful evidence, authorization আর remediation feel করুন।",
      ),
    ],
    steps: [
      l(
        "Read the lab’s authorization and scope before touching anything.",
        "কিছু করার আগে lab-এর authorization আর scope পড়ুন।",
      ),
      l(
        "Complete one beginner SQL injection or XSS lab.",
        "একটি beginner SQL injection বা XSS lab complete করুন।",
      ),
      l(
        "Write the request, response, impact and safe reproduction steps.",
        "Request, response, impact আর safe reproduction step লিখুন।",
      ),
      l(
        "Explain one server-side fix and one test that prevents regression.",
        "একটি server-side fix আর regression আটকানোর test explain করুন।",
      ),
    ],
    attention: [
      l(
        "Did evidence gathering feel better than tool collecting?",
        "Tool collect করার চেয়ে evidence gather ভালো লেগেছে?",
      ),
      l(
        "Could another person reproduce your report safely?",
        "অন্য কেউ আপনার report safely reproduce করতে পারবে?",
      ),
    ],
    resources: ["portswigger"],
  },
  {
    id: "devops-sre",
    title: l(
      "Deploy, break and diagnose a small service",
      "ছোট একটি service deploy করুন, ভাঙুন, তারপর সমস্যার কারণ খুঁজুন",
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
        "Deployment, observability আর calm diagnosis feel করুন।",
      ),
    ],
    steps: [
      l(
        "Containerize a tiny app and run it locally.",
        "Tiny app containerize করে locally run করুন।",
      ),
      l(
        "Add a health endpoint and structured request log.",
        "Health endpoint আর structured request log দিন।",
      ),
      l(
        "Break one environment variable or port; diagnose without deleting everything.",
        "একটি env variable বা port break করে সব delete না দিয়ে diagnose করুন।",
      ),
      l(
        "Write a three-step rollback and one useful alert.",
        "Three-step rollback আর একটি useful alert লিখুন।",
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
      "অন্য কাজ না থামিয়ে sensor থেকে data পড়ুন",
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
        "Physical feedback, timing constraint আর datasheet-driven debugging feel করুন।",
      ),
    ],
    steps: [
      l(
        "Read one sensor or simulated input and print values.",
        "একটি sensor বা simulated input read করে value print করুন।",
      ),
      l(
        "Blink a status LED without a long blocking delay.",
        "Long blocking delay ছাড়া status LED blink করুন।",
      ),
      l(
        "Introduce an unrealistic sampling rate and observe failure.",
        "Unrealistic sampling rate দিয়ে failure observe করুন।",
      ),
      l(
        "Use the datasheet to choose a safe rate and document the constraint.",
        "Datasheet দিয়ে safe rate বেছে constraint document করুন।",
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
      "ছোট একটি গবেষণার ফল আবার তৈরি করে প্রশ্ন করুন",
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
        "Disciplined curiosity, baseline আর honest reporting feel করুন।",
      ),
    ],
    steps: [
      l(
        "Choose one claim from a course note or simple paper.",
        "Course note বা simple paper-এর একটি claim বেছে নিন।",
      ),
      l(
        "Implement the smallest experiment that reproduces it.",
        "Claim reproduce করার smallest experiment implement করুন।",
      ),
      l(
        "Change one assumption and measure what happens.",
        "একটি assumption বদলে কী হয় measure করুন।",
      ),
      l(
        "Write one page: method, result, limitation and next question.",
        "এক page-এ method, result, limitation আর next question লিখুন।",
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
      "অস্পষ্ট অনুরোধকে পরিষ্কার সিদ্ধান্তে বদলান",
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
        "Listening, problem framing আর transparent trade-off feel করুন।",
      ),
    ],
    steps: [
      l(
        "Start with a vague request such as ‘make search better’.",
        "‘Search better করুন’-র মতো vague request দিয়ে শুরু।",
      ),
      l(
        "Ask five questions about user, pain, evidence and constraint.",
        "User, pain, evidence আর constraint নিয়ে পাঁচটি question করুন।",
      ),
      l(
        "Write three options with cost, risk and what each does not solve.",
        "Cost, risk আর কী solve করে না-সহ তিনটি option লিখুন।",
      ),
      l(
        "Recommend one reversible next step and record the decision.",
        "একটি reversible next step recommend করে decision record করুন।",
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

export const experiments: CareerExperiment[] = [
  ...seeds,
  ...infrastructureExperiments,
  ...specialistExperiments,
].map((seed) => ({
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
