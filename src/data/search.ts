import { careerFamilies, careers } from "@/data/careers";
import { experiments } from "@/data/experiments";
import { goals } from "@/data/goals";
import { industryVoices } from "@/data/industry-voices";
import { resources } from "@/data/resources";
import { l } from "@/lib/localized";
import {
  futureDescription,
  futurePath,
  futureTitle,
} from "@/data/future-of-cse";
import type { LocalizedText } from "@/types/content";

export type SearchEntryType =
  | "career"
  | "roadmap"
  | "experiment"
  | "ai"
  | "goal"
  | "guidance"
  | "resource"
  | "directory";

export interface SearchEntry {
  id: string;
  type: SearchEntryType;
  path: string;
  title: LocalizedText;
  description: LocalizedText;
  keywords: LocalizedText;
}

const directoryEntries: SearchEntry[] = [
  {
    id: "future-of-cse",
    type: "guidance",
    path: futurePath,
    title: futureTitle,
    description: futureDescription,
    keywords: l(
      "future CSE AI disappear jobs replacement forecast prediction GPT-6 Astra fundamentals AGI",
      "ভবিষ্যৎ CSE AI চাকরি থাকবে শেষ বিলুপ্ত পূর্বাভাস GPT-6 Astra ভিত্তি AGI",
    ),
  },
  {
    id: "careers",
    type: "directory",
    path: "/careers/",
    title: l("Explore CSE careers", "CSE career explore করুন"),
    description: l(
      "Browse nineteen careers through eight broad families.",
      "আটটি broad family-তে উনিশটি career ঘুরে দেখুন।",
    ),
    keywords: l("jobs roles work family choose", "চাকরি role কাজ family বেছে"),
  },
  {
    id: "compare",
    type: "directory",
    path: "/compare/",
    title: l("Compare careers", "Career compare করুন"),
    description: l(
      "Compare two or three careers by work style and pressure.",
      "Work style আর pressure দিয়ে দুই বা তিনটি career compare করুন।",
    ),
    keywords: l("difference fit choose versus", "পার্থক্য fit বেছে versus"),
  },
  {
    id: "roadmaps",
    type: "directory",
    path: "/roadmaps/",
    title: l("Learning roadmaps", "Learning roadmap"),
    description: l(
      "Find a foundation-first learning order for a career.",
      "Career-এর জন্য foundation-first শেখার order খুঁজে নিন।",
    ),
    keywords: l("learn study skills sequence", "শেখা পড়া skill sequence"),
  },
  {
    id: "goals",
    type: "directory",
    path: "/goals/",
    title: l("Goal preparation plans", "Goal-এর preparation plan"),
    description: l(
      "Prepare for industry, remote work, study, research or independent work.",
      "Industry, remote কাজ, study, research বা independent কাজের প্রস্তুতি নিন।",
    ),
    keywords: l(
      "google local remote abroad thesis freelance business",
      "গুগল local remote বিদেশ thesis freelance business",
    ),
  },
  {
    id: "ai-overview",
    type: "guidance",
    path: "/ai/",
    title: l("AI and your career", "AI ও আপনার career"),
    description: l(
      "Understand task automation exposure and learn to direct and verify AI.",
      "Task automation exposure বুঝে AI-কে direct আর verify করতে শিখুন।",
    ),
    keywords: l(
      "automation future replace resilience",
      "automation ভবিষ্যৎ replace resilience",
    ),
  },
  {
    id: "ai-systems-path",
    type: "guidance",
    path: "/roadmaps/ai-engineering/#ai-systems-path",
    title: l(
      "Build AI systems in the right order",
      "সঠিক order-এ AI system build করুন",
    ),
    description: l(
      "Move from forward engineering and prompt contracts through RAG and workflows to a bounded agent loop and production trust.",
      "Forward engineering ও prompt contract থেকে RAG, workflow, bounded agent loop আর production trust-এর দিকে এগিয়ে যান।",
    ),
    keywords: l(
      "agentic AI AI workflow n8n OpenClaw RAG AGI prompt engineering forward engineering agent loop orchestration agents",
      "agentic AI AI workflow n8n OpenClaw RAG AGI prompt engineering forward engineering agent loop orchestration agent",
    ),
  },
  {
    id: "lost",
    type: "guidance",
    path: "/im-lost/",
    title: l("I’m Lost", "আমি দিশেহারা"),
    description: l(
      "Choose today’s problem and reveal one useful route.",
      "আজকের problem বেছে একটি useful route খুঁজে নিন।",
    ),
    keywords: l(
      "confused help direction behind",
      "confused সাহায্য দিশা পিছিয়ে",
    ),
  },
  {
    id: "new-student",
    type: "guidance",
    path: "/guidance/new-cse-student/",
    title: l("New to CSE", "CSE-তে নতুন"),
    description: l(
      "A practical orientation for your first semesters.",
      "প্রথম semester-গুলোর জন্য practical orientation।",
    ),
    keywords: l(
      "fresher first year beginner",
      "fresher first year beginner নতুন",
    ),
  },
  {
    id: "feel-behind",
    type: "guidance",
    path: "/guidance/feel-behind/",
    title: l("Feel behind in CSE", "CSE-তে পিছিয়ে মনে হচ্ছে"),
    description: l(
      "A focused recovery route for third year, final year or graduation.",
      "Third year, final year বা graduation-এর জন্য focused recovery route।",
    ),
    keywords: l(
      "late recovery graduation third fourth year",
      "দেরি recovery graduation তৃতীয় চতুর্থ বর্ষ",
    ),
  },
  {
    id: "first-software-role",
    type: "guidance",
    path: "/guidance/first-software-role/",
    title: l(
      "Choose your route into the software industry",
      "Software industry-তে ঢোকার route বেছে নিন",
    ),
    description: l(
      "Choose a strong-CP, balanced, role-evidence or recovery route to decide what to practise now and when to apply for an internship, trainee or junior role.",
      "Strong-CP, balanced, role-evidence বা recovery route ধরে এখন কী practice করবেন আর কখন internship, trainee বা junior role-এ apply করবেন—তা ঠিক করুন।",
    ),
    keywords: l(
      "intern internship trainee junior graduate first job software developer local industry competitive programming ACM CP weak problem solving no CP cv resume portfolio interview application",
      "intern internship trainee junior graduate first job software developer local industry competitive programming ACM CP problem solving কম no CP cv resume portfolio interview application চাকরি",
    ),
  },
  {
    id: "final-year-project",
    type: "guidance",
    path: "/guidance/final-year-project/",
    title: l("Final-year project standards", "Final-year project standard"),
    description: l(
      "Plan, collaborate, test, release and defend an evidence-backed project.",
      "Evidence-backed project plan, collaborate, test, release আর defend করুন।",
    ),
    keywords: l(
      "thesis capstone git task board testing team",
      "থিসিস প্রজেক্ট প্রকল্প শেষ বর্ষ thesis capstone git task board testing team",
    ),
  },
  {
    id: "competitive-programming",
    type: "guidance",
    path: "/guidance/competitive-programming/",
    title: l(
      "ACM / ICPC programming practice",
      "ACM / ICPC programming practice",
    ),
    description: l(
      "Build computational thinking without treating competition as every career.",
      "Competition-কে সব career না ধরে computational thinking তৈরি করুন।",
    ),
    keywords: l(
      "competitive programming algorithms dsa problem solving",
      "competitive programming algorithm dsa problem solving",
    ),
  },
  {
    id: "software-foundations",
    type: "guidance",
    path: "/guidance/software-engineering-foundations/",
    title: l(
      "Software engineering foundations",
      "Software engineering foundation",
    ),
    description: l(
      "Learn how clean code, code smells, SOLID, design patterns and defensive programming help you review and own AI-assisted work.",
      "Clean code, code smell, SOLID, design pattern আর defensive programming দিয়ে AI-assisted কাজ review আর own করতে শিখুন।",
    ),
    keywords: l(
      "clean code code smells refactoring SOLID principles design patterns defensive programming architecture testing AI review maintainability",
      "clean code code smell refactoring SOLID principle design pattern defensive programming architecture testing AI review maintainability",
    ),
  },
  {
    id: "resources",
    type: "directory",
    path: "/resources/",
    title: l("Curated learning resources", "Curated learning resource"),
    description: l(
      "Find a deliberate local-industry watchlist plus scoped documentation, courses, labs, books and practice.",
      "Local-industry watchlist-এর সঙ্গে scoped documentation, course, lab, book আর practice খুঁজে নিন।",
    ),
    keywords: l(
      "Bangladesh industry veterans motivation podcast video free course documentation book lab",
      "Bangladesh industry veteran motivation podcast video free course documentation book lab",
    ),
  },
];

const familyEntries: SearchEntry[] = careerFamilies.map((family) => ({
  id: `family-${family.id}`,
  type: "directory",
  path: `/careers/#${family.id}`,
  title: family.title,
  description: family.description,
  keywords: l(family.careerIds.join(" "), family.careerIds.join(" ")),
}));

const careerEntries: SearchEntry[] = careers.flatMap((career) => {
  const family = careerFamilies.find((item) => item.id === career.familyId)!;
  const specializationKeywords = career.specializations ?? [];
  const commonKeywords = {
    en: `${family.title.en} ${career.actualWork.map((item) => item.en).join(" ")} ${specializationKeywords.map((item) => `${item.title.en} ${item.description.en}`).join(" ")}`,
    bn: `${family.title.bn} ${career.actualWork.map((item) => item.bn).join(" ")} ${specializationKeywords.map((item) => `${item.title.bn} ${item.description.bn}`).join(" ")}`,
  };
  const experiment = experiments.find((item) => item.careerId === career.id)!;
  return [
    {
      id: `career-${career.id}`,
      type: "career" as const,
      path: `/careers/${career.slug}/`,
      title: career.title,
      description: career.shortDescription,
      keywords: commonKeywords,
    },
    {
      id: `roadmap-${career.id}`,
      type: "roadmap" as const,
      path: `/roadmaps/${career.slug}/`,
      title: l(`${career.title.en} roadmap`, `${career.title.bn} roadmap`),
      description: l(
        `A foundation-first learning sequence for ${career.title.en}.`,
        `${career.title.bn}-এর জন্য foundation-first learning sequence।`,
      ),
      keywords: commonKeywords,
    },
    {
      id: `experiment-${career.id}`,
      type: "experiment" as const,
      path: `/try/${career.slug}/`,
      title: experiment.title,
      description: experiment.experienceGoals[0]!,
      keywords: commonKeywords,
    },
    {
      id: `ai-${career.id}`,
      type: "ai" as const,
      path: `/ai/${career.slug}/`,
      title: l(`AI and ${career.title.en}`, `AI ও ${career.title.bn}`),
      description: l(
        `Task automation exposure and responsible AI practice for ${career.title.en}.`,
        `${career.title.bn}-এ task automation exposure আর responsible AI practice।`,
      ),
      keywords: commonKeywords,
    },
  ];
});

const goalEntries: SearchEntry[] = goals.map((goal) => ({
  id: `goal-${goal.id}`,
  type: "goal",
  path: `/goals/${goal.id}/`,
  title: goal.title,
  description: goal.summary,
  keywords: l(
    goal.variants.map((variant) => variant.title.en).join(" "),
    goal.variants.map((variant) => variant.title.bn).join(" "),
  ),
}));

const resourceEntries: SearchEntry[] = resources.map((resource) => ({
  id: `resource-${resource.id}`,
  type: "resource",
  path: `/resources/#resource-${resource.id}`,
  title: l(resource.title, resource.title),
  description: resource.whyRecommended,
  keywords: l(
    `${resource.provider} ${resource.type} ${resource.recommendedScope.en}`,
    `${resource.provider} ${resource.type} ${resource.recommendedScope.bn}`,
  ),
}));

const industryVoiceEntries: SearchEntry[] = industryVoices.map((voice) => ({
  id: `industry-voice-${voice.id}`,
  type: "resource",
  // A stage heading remains visible while its disclosure is collapsed, so a
  // search result never lands on content hidden inside a closed <details>.
  path: `/resources/#industry-voice-stage-${voice.stageId}`,
  title: voice.title,
  description: voice.focus,
  keywords: l(
    `${voice.speaker} ${voice.publisher} ${voice.originalTitle} podcast video Bangladesh industry motivation`,
    `${voice.speaker} ${voice.publisher} ${voice.originalTitle} podcast video Bangladesh industry motivation`,
  ),
}));

export const searchEntries: SearchEntry[] = [
  ...directoryEntries,
  ...familyEntries,
  ...careerEntries,
  ...goalEntries,
  ...industryVoiceEntries,
  ...resourceEntries,
];
