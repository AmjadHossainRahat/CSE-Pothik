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
    "CSE Compass helps you understand the options, try the real work, and choose one useful next step.",
    "CSE Compass তোমাকে পথগুলো বুঝতে, আসল কাজ করে দেখতে আর কাজে লাগে এমন একটি next step বেছে নিতে সাহায্য করে।",
  ),
  primaryAction: l("Help me find my next step", "আমার পরের পদক্ষেপ খুঁজি"),
  secondaryAction: l("Explore career paths", "Career-এর পথগুলো দেখো"),
} satisfies Record<string, LocalizedText>;

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
