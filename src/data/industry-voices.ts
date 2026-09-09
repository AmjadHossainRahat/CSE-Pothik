import { l } from "@/lib/localized";
import type { LocalizedText } from "@/types/content";

export type IndustryVoiceStageId = "orient" | "strengthen" | "navigate";

export interface IndustryVoice {
  id: string;
  stageId: IndustryVoiceStageId;
  title: LocalizedText;
  originalTitle: string;
  speaker: string;
  publisher: string;
  url: string;
  focus: LocalizedText;
  position: number;
  lastReviewed: string;
}

export const industryVoiceStages: Array<{
  id: IndustryVoiceStageId;
  title: LocalizedText;
  description: LocalizedText;
}> = [
  {
    id: "orient",
    title: l("1 · Ground yourself", "১ · আগে নিজেকে স্থির করো"),
    description: l(
      "Start with the decision you already made and the habits that can still change. Do not begin with salary or panic.",
      "যে সিদ্ধান্ত নিয়েই ফেলেছ আর যে অভ্যাসগুলো এখনও বদলাতে পারো—সেখান থেকেই শুরু করো। শুরুটা salary কিংবা ভয় দিয়ে না হলেই ভালো।",
    ),
  },
  {
    id: "strengthen",
    title: l("2 · Strengthen how you think", "২ · চিন্তার ক্ষমতা শক্ত করো"),
    description: l(
      "Then examine why programming, problem solving and engineering judgment still matter when AI can produce code.",
      "এরপর বোঝার চেষ্টা করো—AI code লিখতে পারলেও programming, problem solving আর engineering judgment কেন এখনও জরুরি।",
    ),
  },
  {
    id: "navigate",
    title: l("3 · Read the working world", "৩ · কাজের জগতটা বোঝো"),
    description: l(
      "Only then widen the lens to junior hiring, changing expectations, a specialist industry and technology business.",
      "তারপর junior hiring, বদলে যাওয়া প্রত্যাশা, specialist industry আর technology business—কাজের জগৎটাকে একটু বড় করে দেখো।",
    ),
  },
];

const reviewed = "2026-09-07";

export const industryVoices: IndustryVoice[] = [
  {
    id: "jhankar-cse-decision-2026",
    stageId: "orient",
    title: l(
      "Was choosing CSE in 2026 a mistake?",
      "২০২৬ এ এসে CSE তে ভর্তি হওয়া কি ভুল সিদ্ধান্ত?",
    ),
    originalTitle:
      "২০২৬ এ এসে CSE তে ভর্তি হওয়া কি ভুল সিদ্ধান্ত।Computer Science। Jhankar Mahbub",
    speaker: "Jhankar Mahbub",
    publisher: "Jhankar Mahbub",
    url: "https://www.youtube.com/watch?v=R0ePgGNvHG0",
    focus: l(
      "Use this first to separate AI anxiety from the longer decision to learn computing well.",
      "AI নিয়ে দুশ্চিন্তা আর computing ভালোভাবে শেখার দীর্ঘ সিদ্ধান্ত—দুটোকে আলাদা করে ভাবতে এটি আগে দেখো।",
    ),
    position: 1,
    lastReviewed: reviewed,
  },
  {
    id: "jhankar-student-life-red-flags",
    stageId: "orient",
    title: l(
      "Student-life red flags that quietly cost semesters",
      "যে ভুলগুলো করলে ইউনিভার্সিটি জীবন ধ্বংস হবেই!",
    ),
    originalTitle:
      "যে ভুলগুলো করলে ইউনিভার্সিটি জীবন ধ্বংস হবেই !। Red Flags in Student Life । Jhankar Mahbub",
    speaker: "Jhankar Mahbub",
    publisher: "Jhankar Mahbub",
    url: "https://www.youtube.com/watch?v=ckeyZUyRF3s",
    focus: l(
      "Turn motivation into an audit of time, habits and avoidable drift—not guilt or comparison.",
      "Motivation-কে অপরাধবোধ বা অন্যের সঙ্গে তুলনায় না নিয়ে গিয়ে নিজের সময়, অভ্যাস আর এড়ানো যেত এমন ভুলের হিসাব হিসেবে ব্যবহার করো।",
    ),
    position: 2,
    lastReviewed: reviewed,
  },
  {
    id: "jhankar-why-learn-programming-with-ai",
    stageId: "strengthen",
    title: l(
      "Why learn programming when AI can code?",
      "AI আসছে তবুও কেন প্রোগ্রামিং শিখবে?",
    ),
    originalTitle: "AI আসছে তবুও কেন প্রোগ্রামিং শিখবে?",
    speaker: "Jhankar Mahbub",
    publisher: "Jhankar Mahbub",
    url: "https://www.youtube.com/watch?v=Cf3W5xAFtfU",
    focus: l(
      "Connect programming practice to understanding, verification and the ability to direct tools responsibly.",
      "Programming-এর চর্চাকে বোঝাপড়া, যাচাই আর tool-কে দায়িত্ব নিয়ে চালানোর ক্ষমতার সঙ্গে মিলিয়ে দেখো।",
    ),
    position: 3,
    lastReviewed: reviewed,
  },
  {
    id: "nafis-problem-solving-mistakes",
    stageId: "strengthen",
    title: l(
      "Why many learners get stuck in problem solving",
      "যে ভুলের কারণে ৯৫% মানুষ প্রবলেম সলভিং এ ব্যর্থ হয়",
    ),
    originalTitle:
      "যে ভুলের কারণে ৯৫% মানুষ প্রবলেম সলভিং এ ব্যর্থ হয় | Nafis Shahriar | SWE Edition - Phicast",
    speaker: "Nafis Shahriar",
    publisher: "Phitron",
    url: "https://www.youtube.com/watch?v=OTQqi17j5Qg",
    focus: l(
      "Look for a better practice loop; treat the percentage in the title as presentation, not a statistic supplied by CSE-Pothik.",
      "কাজের একটি ভালো practice loop খুঁজে নাও। title-এর percentage-টি উপস্থাপনার অংশ—CSE-Pothik-এর পরিসংখ্যান নয়।",
    ),
    position: 4,
    lastReviewed: reviewed,
  },
  {
    id: "hasan-coding-is-not-enough",
    stageId: "strengthen",
    title: l(
      "Is knowing how to code enough to get hired?",
      "কোডিং জানলেও চাকরি জুটবে না?",
    ),
    originalTitle: "কোডিং জানলেও চাকরি জুটবে না? | Hasan Shahriar Masud",
    speaker: "Hasan Shahriar Masud",
    publisher: "Career Crackerz Podcast",
    url: "https://www.youtube.com/watch?v=oo6aI0HC0OQ",
    focus: l(
      "Compare coding output with problem framing, communication and the judgment expected in engineering work.",
      "শুধু coding output নয়—problem framing, communication আর engineering কাজে দরকারি বিচারবোধের সঙ্গে মিলিয়ে দেখো।",
    ),
    position: 5,
    lastReviewed: reviewed,
  },
  {
    id: "jhankar-ai-and-junior-jobs",
    stageId: "navigate",
    title: l(
      "Will junior developer jobs remain as AI advances?",
      "AI আসার কারণে কি জুনিয়র ডেভেলপারদের চাকরি থাকবে না?",
    ),
    originalTitle: "AI আসার কারনে কি জুনিয়র ডেভেলপার দের চাকরি থাকবে না?",
    speaker: "Jhankar Mahbub",
    publisher: "Jhankar Mahbub",
    url: "https://www.youtube.com/watch?v=70g-CwcXsbE",
    focus: l(
      "Use the discussion to identify changing expectations and concrete preparation—not to obtain a job-market guarantee.",
      "চাকরির বাজারের নিশ্চয়তা খুঁজতে নয়; কী প্রত্যাশা বদলাচ্ছে আর কীভাবে প্রস্তুতি নেওয়া যায়, তা ধরতে আলোচনাটি শোনো।",
    ),
    position: 6,
    lastReviewed: reviewed,
  },
  {
    id: "topu-software-job-losses",
    stageId: "navigate",
    title: l(
      "Why software engineers lose jobs",
      "যে কারণে চাকরি হারাচ্ছেন সফটওয়্যার ইঞ্জিনিয়াররা",
    ),
    originalTitle:
      "যে কারণে চাকরি হারাচ্ছেন সফটওয়্যার ইঞ্জিনিয়াররা | Shah Ali Newaj Topu",
    speaker: "Shah Ali Newaj Topu",
    publisher: "Career Crackerz Podcast",
    url: "https://www.youtube.com/watch?v=PCqCy94S5nI",
    focus: l(
      "Listen for hiring and performance expectations, then compare them with actual role descriptions and your own evidence gaps.",
      "Hiring আর performance নিয়ে যা বলা হচ্ছে, তা আসল job description এবং নিজের evidence-এর ঘাটতির সঙ্গে মিলিয়ে দেখো।",
    ),
    position: 7,
    lastReviewed: reviewed,
  },
  {
    id: "ershad-bangladesh-gaming-industry",
    stageId: "navigate",
    title: l(
      "The reality of Bangladesh’s gaming industry",
      "বাংলাদেশের Gaming ইন্ডাস্ট্রির বাস্তবতা",
    ),
    originalTitle: "বাংলাদেশের Gaming ইন্ডাস্ট্রির বাস্তবতা | Ershadul Hoque",
    speaker: "Ershadul Hoque",
    publisher: "Career Crackerz Podcast",
    url: "https://www.youtube.com/watch?v=cGeqbDG1ulg",
    focus: l(
      "Use one specialist industry to notice how product quality, constraints and practical skills differ from a generic software-career story.",
      "Generic software-career গল্পের বাইরে product quality, সীমাবদ্ধতা আর practical skill কীভাবে বদলায়—একটি specialist industry দিয়ে তা দেখো।",
    ),
    position: 8,
    lastReviewed: reviewed,
  },
  {
    id: "julian-business-engineering",
    stageId: "navigate",
    title: l(
      "From coding to business engineering",
      "Coding থেকে business engineering",
    ),
    originalTitle:
      "Stop Coding Start Business Engineering | Julian from SELISE Group",
    speaker: "Julian",
    publisher: "Career Crackerz Podcast",
    url: "https://www.youtube.com/watch?v=GuDBrngBCdY",
    focus: l(
      "Finish by widening engineering from implementation to customer problems, systems, trade-offs and business outcomes.",
      "শেষে implementation-এর গণ্ডি পেরিয়ে customer-এর সমস্যা, system, trade-off আর business outcome দিয়ে engineering-কে আরও বড় করে দেখো।",
    ),
    position: 9,
    lastReviewed: reviewed,
  },
];

export const featuredIndustryVoiceIds = [
  "jhankar-cse-decision-2026",
  "jhankar-why-learn-programming-with-ai",
] as const;

export const industryVoiceById = new Map(
  industryVoices.map((voice) => [voice.id, voice]),
);
