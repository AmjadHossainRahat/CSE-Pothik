import { l } from "@/lib/localized";
import type { LocalizedText } from "@/types/content";

export const homepageIntro = {
  eyebrow: l(
    "Free career guidance for CSE students",
    "CSE শিক্ষার্থীদের জন্য বিনামূল্যে career guidance",
  ),
  title: l("You got into CSE.", "CSE-তে ঢুকেছ।"),
  emphasis: l("Now what?", "এখন কী?"),
  description: l(
    "Students can enter CSE for its popularity, earning potential, or promise of opportunities abroad—then discover a field far broader than the few roles they have heard about.",
    "কেউ CSE-তে আসতে পারে জনপ্রিয়তা, ভালো আয়ের সম্ভাবনা বা বিদেশে কাজের আশায়—তারপর বুঝতে পারে, পরিচিত কয়েকটি role-এর চেয়েও এই field অনেক বড়।",
  ),
  reassurance: l(
    "Without early orientation, semesters can disappear into trends and random tutorials. If that feels familiar, you have not missed your chance.",
    "শুরুতে ঠিক orientation না পেলে trend আর random tutorial-এর ভিড়ে semester কেটে যেতে পারে। এমন হয়ে থাকলেও সুযোগ শেষ হয়ে যায়নি।",
  ),
  outcome: l(
    "Understand the options, try real work and choose one useful next step—while building the fundamentals and judgment that make AI useful.",
    "পথগুলো বোঝো, আসল কাজ করে দেখো এবং একটি useful next step বেছে নাও—সঙ্গে এমন foundation ও judgment গড়ো, যা AI-কে সত্যিই কাজে লাগায়।",
  ),
  primaryAction: l("Help me find my next step", "আমার পরের পদক্ষেপ খুঁজি"),
  secondaryAction: l("Explore career paths", "Career-এর পথগুলো দেখো"),
} satisfies Record<string, LocalizedText>;

export const aiEraMessage = {
  eyebrow: l("Your advantage in the AI era", "AI যুগে তোমার শক্তি"),
  title: l(
    "AI can generate code. Can you lead the decision?",
    "AI code বানাতে পারে। Decision-টা কি তুমি lead করতে পারবে?",
  ),
  introduction: l(
    "Speed is useful only when somebody can frame the real problem, inspect the result and own the consequences. That is why core principles, analytical problem-solving, creativity and judgment matter more—not less.",
    "কেউ real problem ঠিকভাবে ধরতে, result যাচাই করতে আর consequence-এর দায়িত্ব নিতে পারলেই speed কাজে লাগে। তাই core principle, analytical problem-solving, creativity ও judgment-এর গুরুত্ব কমেনি—বরং বেড়েছে।",
  ),
  takeaway: l(
    "The goal is not to compete with AI at typing. Become the engineer who gives it useful context, challenges plausible mistakes, chooses trade-offs and can still proceed when the tool or tech lead is unavailable.",
    "AI-এর সঙ্গে typing-এর প্রতিযোগিতা লক্ষ্য নয়। এমন engineer হও, যে দরকারি context দেয়, বিশ্বাসযোগ্য-দেখানো ভুল challenge করে, trade-off বেছে নেয় এবং tool বা tech lead না থাকলেও এগোতে পারে।",
  ),
  scenarioSummary: l(
    "Follow one fresher, two kinds of AI context, and three very different outcomes",
    "একজন fresher, দুই ধরনের AI context এবং তিনটি ভিন্ন outcome দেখো",
  ),
  scenarioOpening: l(
    "A fresh graduate receives a feature and asks the company AI to design the system and generate the code. The output looks confident. What happens next depends less on prompt volume than on context and the engineer's ability to review it.",
    "একজন fresh graduate একটি feature পেয়ে company AI-কে system design ও code বানাতে বলল। Output দেখে বেশ confident মনে হচ্ছে। এরপর কী হবে, তা prompt-এর পরিমাণের চেয়ে context এবং engineer-এর review করার ক্ষমতার ওপর বেশি নির্ভর করে।",
  ),
  closing: l(
    "Code fluency, algorithms and data structures remain useful; speed alone is not enough. SOLID and design patterns can provide vocabulary, but they are not a checklist to force into every feature. Learn the principles, recognise when a simpler design is better, and escalate high-impact decisions with evidence.",
    "Code fluency, algorithm ও data structure এখনও দরকারি; শুধু speed যথেষ্ট নয়। SOLID ও design pattern দরকারি vocabulary দিতে পারে, কিন্তু প্রতিটি feature-এ জোর করে বসানোর checklist নয়। Principle বোঝো, কখন simpler design ভালো তা চিনো, আর high-impact decision evidence দিয়ে escalate করো।",
  ),
} satisfies Record<string, LocalizedText>;

export const aiEraDecisions = [
  {
    id: "frame",
    label: l("Frame", "Problem ধরো"),
    question: l(
      "Can you explain the user need, constraints and what “done” means without asking AI first?",
      "AI-কে আগে না জিজ্ঞেস করে user need, constraint আর “done” বলতে কী বোঝায়—ব্যাখ্যা করতে পারো?",
    ),
    no: l(
      "Pause. Clarify the problem, data, risks and acceptance criteria.",
      "থামো। Problem, data, risk ও acceptance criteria পরিষ্কার করো।",
    ),
    yes: l(
      "Give AI bounded context; then compare options.",
      "AI-কে সীমিত context দাও; তারপর option তুলনা করো।",
    ),
  },
  {
    id: "verify",
    label: l("Verify", "যাচাই করো"),
    question: l(
      "Can you challenge correctness, edge cases, security, tests and maintainability?",
      "Correctness, edge case, security, test ও maintainability challenge করতে পারো?",
    ),
    no: l(
      "Shrink the task and build the missing foundation before you merge.",
      "Task ছোট করো; merge-এর আগে missing foundation শেখো।",
    ),
    yes: l(
      "Use evidence—not confidence—to accept or reject it.",
      "Confidence নয়—evidence দিয়ে accept বা reject করো।",
    ),
  },
  {
    id: "own",
    label: l("Own", "দায়িত্ব নাও"),
    question: l(
      "Can you justify this trade-off for the codebase, business and people affected?",
      "Codebase, business ও প্রভাবিত মানুষের জন্য এই trade-off justify করতে পারো?",
    ),
    no: l(
      "Inspect team conventions and decision records; ask for review when impact is hard to reverse.",
      "Team convention ও decision record দেখো; impact ফিরিয়ে নেওয়া কঠিন হলে review চাও।",
    ),
    yes: l(
      "Proceed, test, document and monitor. You own the result.",
      "এগিয়ে যাও, test, document ও monitor করো। Result-এর দায়িত্ব তোমার।",
    ),
  },
] as const;

export const aiEraScenarioPaths = [
  {
    id: "thin-context",
    title: l(
      "Thin context + inexperienced review",
      "কম context + অনভিজ্ঞ review",
    ),
    body: l(
      "AI reaches for a generic architecture or naive happy path. Repeated prompting can create more code and more review work without proving that the solution fits.",
      "AI generic architecture বা naive happy path বেছে নিতে পারে। বারবার prompt দিলে আরও code ও review-এর কাজ তৈরি হতে পারে, কিন্তু solution fit করে—তা প্রমাণ হয় না।",
    ),
    consequence: l(
      "Risk: hidden defects, security gaps, unnecessary complexity and an expensive review bottleneck.",
      "Risk: লুকানো defect, security gap, অপ্রয়োজনীয় complexity ও ব্যয়বহুল review bottleneck।",
    ),
  },
  {
    id: "rich-context",
    title: l(
      "Rich team context + weak understanding",
      "সমৃদ্ধ team context + দুর্বল understanding",
    ),
    body: l(
      "AI may reproduce the lead's advanced conventions and patterns. If the fresher cannot explain or safely change them when the lead is absent, familiar-looking code becomes fragile ownership.",
      "AI lead-এর advanced convention ও pattern অনুসরণ করতে পারে। Lead না থাকলে fresher যদি সেগুলো explain বা safely change করতে না পারে, পরিচিত-দেখানো code-এর ownership দুর্বল হয়ে যায়।",
    ),
    consequence: l(
      "Risk: slow debugging, cargo-cult patterns, delayed decisions and dependence on more tokens or another reviewer.",
      "Risk: ধীর debugging, না বুঝে pattern copy, decision delay এবং আরও token বা reviewer-এর ওপর dependency।",
    ),
  },
  {
    id: "strong-engineer",
    title: l(
      "Strong foundations + AI assistance",
      "শক্ত foundation + AI assistance",
    ),
    body: l(
      "The engineer frames constraints, asks for alternatives, chooses the simplest adequate design, tests risky assumptions and escalates decisions whose consequences exceed their experience.",
      "Engineer constraint ঠিক করে, alternative চায়, যথেষ্ট simple design বেছে নেয়, risky assumption test করে এবং নিজের experience-এর বাইরে consequence হলে decision escalate করে।",
    ),
    consequence: l(
      "Outcome: AI accelerates useful work while reasoning, review and accountability remain human capabilities.",
      "Outcome: AI useful কাজ দ্রুত করে; reasoning, review ও accountability মানুষের capability হিসেবেই থাকে।",
    ),
  },
] as const;

export const homepageAiSourceIds = [
  "dora-ai-software-2025",
  "nist-ai-devsecops-oversight",
] as const;

export const sitePurpose = {
  premise: l(
    "A student may enter CSE because it is popular, offers strong earning potential, or looks like a route to opportunities abroad. When the excitement of admission fades, a harder question appears: what kinds of work exist across computing, and which ones are worth exploring?",
    "CSE জনপ্রিয়, ভালো আয়ের সম্ভাবনা আছে বা বিদেশে কাজের সুযোগ তৈরি করতে পারে—এসব আশা নিয়ে একজন শিক্ষার্থী ভর্তি হতে পারে। ভর্তি হওয়ার উত্তেজনা কমলে সামনে আসে কঠিন প্রশ্ন: computing-এ কী কী ধরনের কাজ আছে, আর কোনগুলো explore করা উচিত?",
  ),
  drift: l(
    "Without useful orientation, semesters can slip into trends, disconnected tutorials and rushed decisions. Software engineering, QA, competitive programming and research are meaningful options—but they are not the whole landscape, and their real work is often misunderstood.",
    "কাজে লাগে এমন orientation না পেলে trend, বিচ্ছিন্ন tutorial আর তাড়াহুড়োর সিদ্ধান্তে semester কেটে যেতে পারে। Software engineering, QA, competitive programming আর research গুরুত্বপূর্ণ পথ—কিন্তু এগুলোই পুরো landscape নয়, আর এসব কাজের বাস্তবতাও প্রায়ই পরিষ্কার থাকে না।",
  ),
  recovery: l(
    "Feeling late can turn confusion into frustration, and frustration can trigger another rushed choice. A clear map, a small experiment and an achievable learning sequence can interrupt that cycle. Direction can be built early—and rebuilt later.",
    "দেরি হয়ে গেছে মনে হলে confusion থেকে frustration আসে, আর frustration নতুন তাড়াহুড়োর সিদ্ধান্ত তৈরি করতে পারে। পরিষ্কার map, ছোট experiment আর achievable learning sequence এই cycle থামাতে পারে। শুরুতেই direction তৈরি করা যায়—পরে আবারও তৈরি করা যায়।",
  ),
  purpose: l(
    "Make career orientation available early—and make recovery possible later.",
    "Career orientation শুরুতেই সহজলভ্য করা—আর পরে ঘুরে দাঁড়ানোর পথ খোলা রাখা।",
  ),
  goal: l(
    "Help CSE students see the breadth of computing careers, understand the work behind the titles, test their interests through small experiments, and follow a practical learning or preparation path.",
    "CSE শিক্ষার্থীদের computing career-এর বিস্তৃতি দেখানো, title-এর পেছনের কাজ বোঝানো, ছোট experiment দিয়ে আগ্রহ যাচাই করতে দেওয়া এবং practical learning বা preparation path অনুসরণে সাহায্য করা।",
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
      "প্রথম semester-এর সহজ plan। এখনই career ঠিক করতে হবে না।",
    ),
    destination: "/guidance/new-cse-student/",
    analyticsDestination: "new-cse-student",
  },
  {
    id: "explore",
    label: l(
      "I want to understand different careers.",
      "আলাদা career-গুলোর কাজ বুঝতে চাই।",
    ),
    note: l(
      "See the real work, compare paths, and find a small experiment.",
      "আসল কাজ দেখো, পথগুলো তুলনা করো, ছোট একটা experiment বেছে নাও।",
    ),
    destination: "/careers/",
    analyticsDestination: "careers",
  },
  {
    id: "prepare",
    label: l(
      "I know my goal and need a plan.",
      "লক্ষ্য জানি, প্রস্তুতির plan চাই।",
    ),
    note: l(
      "Jobs at home or abroad, remote work, higher studies, research, freelancing or a tech business.",
      "দেশে-বিদেশে চাকরি, remote কাজ, উচ্চশিক্ষা, গবেষণা, freelancing বা নিজের tech business।",
    ),
    destination: "/goals/",
    analyticsDestination: "goals",
  },
];
