import { l } from "@/lib/localized";
import type { LocalizedText } from "@/types/content";

export const homepageIntro = {
  eyebrow: l(
    "Free career guidance for CSE students",
    "CSE শিক্ষার্থীদের জন্য বিনামূল্যে ক্যারিয়ার গাইড",
  ),
  title: l("You got into CSE.", "CSE-তে ঢুকেছ।"),
  emphasis: l("Now what?", "এখন কী?"),
  description: l(
    "Students can enter CSE for its popularity, earning potential, or promise of opportunities abroad—then discover a field far broader than the few roles they have heard about.",
    "জনপ্রিয়তা, ভালো আয়ের আশা কিংবা বিদেশে কাজের স্বপ্ন—যে কারণেই CSE-তে আসো, কিছুদিন পর টের পাবে পরিচিত দু-চারটি চাকরির বাইরেও এই জগৎটা অনেক বড়।",
  ),
  reassurance: l(
    "Without early orientation, semesters can disappear into trends and random tutorials. If that feels familiar, you have not missed your chance.",
    "শুরুতে ঠিকমতো দিকনির্দেশনা না পেলে ট্রেন্ড আর এলোপাতাড়ি tutorial-এর পেছনে কখন যে কয়েকটি সেমিস্টার চলে যায়, বোঝাই যায় না। আপনারও এমন হয়ে থাকলে ভয় নেই—ট্রেন এখনও ছেড়ে যায়নি।",
  ),
  outcome: l(
    "Understand the options, try real work and choose one useful next step—while building the fundamentals and judgment that make AI useful.",
    "কী কী পথ আছে বুঝুন, ছোট করে আসল কাজের স্বাদ নিন, তারপর পরের কাজটি ঠিক করুন। পাশাপাশি এমন ভিত আর বিচারবোধ গড়ুন, যাতে AI-কে চালান আপনি—AI যেন আপনাকে না চালায়।",
  ),
  primaryAction: l("Help me find my next step", "আমার পরের ধাপ খুঁজে দিন"),
  secondaryAction: l("Explore career paths", "ক্যারিয়ারের পথগুলো দেখি"),
} satisfies Record<string, LocalizedText>;

export const aiEraMessage = {
  eyebrow: l("Your advantage in the AI era", "AI যুগে আপনার শক্তি"),
  title: l(
    "AI can generate code. Can you lead the decision?",
    "AI কোড লিখতে পারে। কিন্তু সিদ্ধান্তের হাল ধরতে পারবে তো?",
  ),
  introduction: l(
    "Speed is useful only when somebody can frame the real problem, inspect the result and own the consequences. That is why core principles, analytical problem-solving, creativity and judgment matter more—not less.",
    "গতি তখনই কাজে লাগে, যখন কেউ আসল সমস্যাটা ধরতে পারে, ফল যাচাই করতে পারে এবং ভুল হলে দায়ও নিতে পারে। তাই মূলনীতি, বিশ্লেষণী সমস্যা সমাধান, সৃজনশীলতা আর বিচারবোধের দাম কমেনি—বরং বেড়েছে।",
  ),
  takeaway: l(
    "The goal is not to compete with AI at typing. Become the engineer who gives it useful context, challenges plausible mistakes, chooses trade-offs and can still proceed when the tool or tech lead is unavailable.",
    "AI-এর সঙ্গে কে দ্রুত টাইপ করতে পারে, সেই দৌড়ে নামার দরকার নেই। এমন engineer হোন, যে ঠিক context দেয়, দেখতে-ঠিক-লাগা ভুলও ধরে, trade-off বুঝে বেছে নেয় এবং tool বা tech lead পাশে না থাকলেও আটকে যায় না।",
  ),
  scenarioSummary: l(
    "Follow one fresher, two kinds of AI context, and three very different outcomes",
    "একজন fresher, AI-এর দুই রকম context—আর তিন রকম পরিণতি",
  ),
  scenarioOpening: l(
    "A fresh graduate receives a feature and asks the company AI to design the system and generate the code. The output looks confident. What happens next depends less on prompt volume than on context and the engineer's ability to review it.",
    "একজন fresh graduate-কে নতুন feature দেওয়া হলো। সে company AI-কে বলল system design আর code তৈরি করে দিতে। উত্তরটি দেখলে বেশ আত্মবিশ্বাসীই মনে হয়। কিন্তু এরপর কী হবে, তা prompt কত বড় ছিল তার চেয়ে AI কী context পেয়েছে এবং engineer সেটি কতটা বুঝে যাচাই করতে পারে—তার ওপর বেশি নির্ভর করে।",
  ),
  closing: l(
    "Code fluency, algorithms and data structures remain useful; speed alone is not enough. Clean code, code smells, SOLID, design patterns and defensive programming give you lenses for reviewing change—but not a checklist to force into every feature. Learn the principles, prefer the simplest adequate design and escalate high-impact decisions with evidence.",
    "Code fluency, algorithm আর data structure এখনও দরকারি; তবে শুধু দ্রুত code লিখতে পারাই যথেষ্ট নয়। Clean code, code smell, SOLID, design pattern আর defensive programming change review করার lens দেয়—প্রতিটি feature-এ গুঁজে দেওয়ার checklist নয়। নীতিটা বুঝুন, কাজ চালানোর সবচেয়ে সহজ design বেছে নিন, আর বড় প্রভাবের সিদ্ধান্তে evidence নিয়ে অভিজ্ঞ কারও মত নিন।",
  ),
} satisfies Record<string, LocalizedText>;

export const aiEraDecisions = [
  {
    id: "frame",
    label: l("Frame", "Problem ধরুন"),
    question: l(
      "Can you explain the user need, constraints and what “done” means without asking AI first?",
      "AI-কে জিজ্ঞেস করার আগেই user-এর প্রয়োজন, সীমাবদ্ধতা আর কাজ শেষ হওয়ার শর্ত বোঝাতে পারবে?",
    ),
    no: l(
      "Pause. Clarify the problem, data, risks and acceptance criteria.",
      "একটু থামুন। সমস্যা, data, ঝুঁকি আর acceptance criteria আগে পরিষ্কার করুন।",
    ),
    yes: l(
      "Give AI bounded context; then compare options.",
      "AI-কে প্রয়োজনমতো context দিন; তারপর সম্ভাব্য পথগুলো মিলিয়ে দেখুন।",
    ),
  },
  {
    id: "verify",
    label: l("Verify", "যাচাই করুন"),
    question: l(
      "Can you challenge correctness, edge cases, security, tests and maintainability?",
      "কাজটি সঠিক কি না, edge case, security, test আর maintainability—এসব নিয়ে প্রশ্ন তুলতে পারবে?",
    ),
    no: l(
      "Shrink the task and build the missing foundation before you merge.",
      "কাজের পরিধি ছোট করুন। merge করার আগে যে ভিত্তিটুকু জানা নেই, সেটি শিখে নিন।",
    ),
    yes: l(
      "Use evidence—not confidence—to accept or reject it.",
      "উত্তরের আত্মবিশ্বাস দেখে নয়—evidence দেখে গ্রহণ বা বাতিল করুন।",
    ),
  },
  {
    id: "own",
    label: l("Own", "দায়িত্ব নিন"),
    question: l(
      "Can you justify this trade-off for the codebase, business and people affected?",
      "Codebase, business আর যাদের ওপর প্রভাব পড়বে—সবার কথা ভেবে এই trade-off ব্যাখ্যা করতে পারবে?",
    ),
    no: l(
      "Inspect team conventions and decision records; ask for review when impact is hard to reverse.",
      "Team-এর নিয়ম আর আগের decision record দেখুন। ভুল সিদ্ধান্ত ফেরানো কঠিন হলে review চান।",
    ),
    yes: l(
      "Proceed, test, document and monitor. You own the result.",
      "তাহলে এগিয়ে যান—test করুন, লিখে রাখুন, নজর রাখুন। ফলাফলের দায়িত্বও নিন।",
    ),
  },
] as const;

export const aiEraScenarioPaths = [
  {
    id: "thin-context",
    title: l(
      "Thin context + inexperienced review",
      "কম context, অনভিজ্ঞ reviewer",
    ),
    body: l(
      "AI reaches for a generic architecture or naive happy path. Repeated prompting can create more code and more review work without proving that the solution fits.",
      "AI হয়তো পরিচিত কোনো generic architecture বা কেবল happy path ধরে সমাধান বানাবে। বারবার prompt করলে code বাড়বে, review-ও বাড়বে—কিন্তু সমাধানটি এই সমস্যার জন্য ঠিক কি না, তার প্রমাণ মিলবে না।",
    ),
    consequence: l(
      "Risk: hidden defects, security gaps, unnecessary complexity and an expensive review bottleneck.",
      "ঝুঁকি: চোখ এড়িয়ে যাওয়া bug, security gap, অকারণ জটিলতা আর review-এর লম্বা জট।",
    ),
  },
  {
    id: "rich-context",
    title: l(
      "Rich team context + weak understanding",
      "সমৃদ্ধ team context, কিন্তু বোঝাপড়া দুর্বল",
    ),
    body: l(
      "AI may reproduce the lead's advanced conventions and patterns. If the fresher cannot explain or safely change them when the lead is absent, familiar-looking code becomes fragile ownership.",
      "AI হয়তো tech lead-এর পছন্দের advanced convention আর pattern হুবহু অনুসরণ করবে। কিন্তু lead না থাকলে fresher যদি সেগুলো বুঝিয়ে বলতে বা নিরাপদে বদলাতে না পারে, সুন্দর-দেখানো code-টিই তখন বোঝা হয়ে দাঁড়ায়।",
    ),
    consequence: l(
      "Risk: slow debugging, cargo-cult patterns, delayed decisions and dependence on more tokens or another reviewer.",
      "ঝুঁকি: ধীর debugging, না বুঝে pattern নকল, সিদ্ধান্তে দেরি এবং আরও token বা আরেকজন reviewer-এর ওপর নির্ভরতা।",
    ),
  },
  {
    id: "strong-engineer",
    title: l("Strong foundations + AI assistance", "মজবুত ভিত্তি, সঙ্গে AI"),
    body: l(
      "The engineer frames constraints, asks for alternatives, chooses the simplest adequate design, tests risky assumptions and escalates decisions whose consequences exceed their experience.",
      "Engineer আগে সীমাবদ্ধতা ঠিক করে, বিকল্প চায়, কাজের জন্য যথেষ্ট সহজ design বেছে নেয়, ঝুঁকিপূর্ণ assumption পরীক্ষা করে এবং সিদ্ধান্তের প্রভাব নিজের অভিজ্ঞতার বাইরে গেলে অভিজ্ঞ কাউকে যুক্ত করে।",
    ),
    consequence: l(
      "Outcome: AI accelerates useful work while reasoning, review and accountability remain human capabilities.",
      "ফল: AI কাজের গতি বাড়ায়, আর চিন্তা, যাচাই ও দায় নেওয়ার ক্ষমতা থাকে মানুষের হাতেই।",
    ),
  },
] as const;

export const homepageAiSourceIds = [
  "dora-ai-software-2025",
  "nist-ai-devsecops-oversight",
] as const;

export const sitePurpose = {
  premise: l(
    "CSE often begins with a bright promise: a respected career, strong earning potential and work that can cross borders. Admission answers “What will I study?” It does not automatically answer “What kind of work could suit me, and what should I practise now?”",
    "CSE-তে আসার সময় স্বপ্নটা সাধারণত উজ্জ্বলই থাকে—ভালো ক্যারিয়ার, ভালো আয়, দেশের বাইরে কাজের সুযোগ। ভর্তি হওয়া ‘কী পড়ব’ প্রশ্নের উত্তর দেয়; কিন্তু ‘কোন কাজটা আমার সঙ্গে যায়, আর এখন থেকেই কী অনুশীলন করব’—এই উত্তরটা নিজে থেকে মেলে না।",
  ),
  drift: l(
    "Without useful orientation, semesters can dissolve into trendy stacks, disconnected tutorials and borrowed plans. Near graduation the question becomes urgent: “Where do I start?” Students understandably turn to social-media groups for help. Software engineering, QA, competitive programming and research are meaningful options—but they are not the whole landscape, and a job title rarely explains the real work.",
    "তাই কখনো trend-এর পেছনে, কখনো বিচ্ছিন্ন tutorial-এ, কখনো অন্য কারও plan নকল করতে করতে semester চলে যায়। Graduation সামনে এলে প্রশ্নটা হঠাৎ জরুরি হয়ে ওঠে—‘এখন কোথা থেকে শুরু করব?’ তখন social-media group-এ সাহায্য চাওয়া একদম স্বাভাবিক। কষ্টের জায়গা হলো, মানচিত্রটা যখন সবচেয়ে দরকার, তখনই মনে হয় হাতে সময় আর আত্মবিশ্বাস—দুটোই কম। Software engineering, QA, competitive programming আর research গুরুত্বপূর্ণ পথ; কিন্তু CSE-র দুনিয়া শুধু এটুকু নয়, আর নাম শুনে কোনো কাজের আসল চেহারাও বোঝা যায় না।",
  ),
  recovery: l(
    "That moment is not proof that the career is over. It is a signal to stop collecting noise and choose one next step that produces evidence. A clear map early can prevent drift; the same map later can turn panic into a practical recovery.",
    "এটা ক্যারিয়ার শেষ হওয়ার প্রমাণ নয়। বরং চারপাশের noise একটু থামিয়ে, ফল দেখানো যায়—এমন একটি পরের ধাপ বেছে নেওয়ার সংকেত। শুরুতে মানচিত্র পেলে অকারণ ঘোরাঘুরি কমে; পরে পেলেও আতঙ্ককে কাজের পরিকল্পনায় বদলে দেওয়া যায়।",
  ),
  purpose: l(
    "Give students the career orientation many wish they had in their first CSE semester—and a calm route back when they discover it later.",
    "প্রথম semester-এই যে দিকনির্দেশনাটা পেলে ভালো হতো, সেটি হাতে তুলে দেওয়া—আর পরে এসে দিশা হারালেও শান্তভাবে ফিরে দাঁড়ানোর রাস্তা দেখানো।",
  ),
  goal: l(
    "Do more than list careers: reveal the work behind the titles, help students test a possible fit through small experiments, build durable foundations and choose a practical next step for their goal.",
    "ক্যারিয়ারের নামের তালিকা ধরিয়ে দেওয়া নয়। কাজটা আসলে কেমন, নিজের ভালো লাগা ছোট experiment-এ কীভাবে যাচাই করবে, কোন foundation গড়বে আর লক্ষ্য অনুযায়ী পরের বাস্তব পদক্ষেপ কী—সেটা বুঝতে সাহায্য করা।",
  ),
} satisfies Record<string, LocalizedText>;

interface HomepageEntry {
  id: "start" | "explore" | "prepare";
  label: LocalizedText;
  note: LocalizedText;
  destination: string;
  analyticsDestination: string;
}

export const homepageEntries: HomepageEntry[] = [
  {
    id: "start",
    label: l(
      "I’m new or unsure where to begin.",
      "আমি নতুন, কোথা থেকে শুরু করব বুঝছি না।",
    ),
    note: l(
      "A calm first-semester plan. No career decision required.",
      "প্রথম সেমিস্টারের শান্ত, সহজ পরিকল্পনা। এখনই ক্যারিয়ার ঠিক করতে হবে না।",
    ),
    destination: "/guidance/new-cse-student/",
    analyticsDestination: "new-cse-student",
  },
  {
    id: "explore",
    label: l(
      "I want to understand different careers.",
      "ক্যারিয়ারের পথগুলো বুঝতে চাই।",
    ),
    note: l(
      "See the real work, compare paths, and find a small experiment.",
      "আসল কাজ কেমন দেখুন, পথগুলো মিলিয়ে নিন, তারপর ছোট একটি experiment করুন।",
    ),
    destination: "/careers/",
    analyticsDestination: "careers",
  },
  {
    id: "prepare",
    label: l(
      "I know my goal and need a plan.",
      "লক্ষ্য জানি, এবার প্রস্তুতির পরিকল্পনা চাই।",
    ),
    note: l(
      "Jobs at home or abroad, remote work, higher studies, research, freelancing or a tech business.",
      "দেশে বা বিদেশে চাকরি, remote work, উচ্চশিক্ষা, গবেষণা, freelancing কিংবা নিজের tech business—যে লক্ষ্যই হোক।",
    ),
    destination: "/goals/",
    analyticsDestination: "goals",
  },
];
