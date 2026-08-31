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
    "Explore careers, try real work, and follow clear learning paths—for jobs, higher studies, research, freelancing, or a tech business.",
    "Career বোঝো, ছোট কাজ করে দেখো, শেখার পথ বেছে নাও—চাকরি, উচ্চশিক্ষা, গবেষণা, freelancing বা নিজের tech business-এর প্রস্তুতির জন্য।",
  ),
  reassurance: l(
    "You don’t need your whole future figured out. Start with one useful next step.",
    "পুরো ভবিষ্যৎ আজই ঠিক করতে হবে না। কাজে লাগে এমন ছোট একটা পদক্ষেপ দিয়ে শুরু করো।",
  ),
  outcome: l(
    "Find a path to explore, a learning order, and something practical to try.",
    "পাবে ঘুরে দেখার career path, শেখার ক্রম আর নিজে চেষ্টা করার মতো ছোট কাজ।",
  ),
  primaryAction: l("Help me find my next step", "আমার পরের পদক্ষেপ খুঁজি"),
  secondaryAction: l("Explore career paths", "Career-এর পথগুলো দেখো"),
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
