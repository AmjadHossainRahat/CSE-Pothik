import { l } from "@/data/careers";
import type { StudentSituation } from "@/types/content";

export const studentSituations: StudentSituation[] = [
  {
    id: "new",
    label: l("I just started CSE.", "আমি CSE-তে নতুন।"),
    note: l(
      "Start with the landscape and a calm first-semester plan.",
      "Landscape আর calm first-semester plan দিয়ে শুরু করো।",
    ),
    destination: {
      en: "/guidance/new-cse-student/",
      bn: "/bn/guidance/new-cse-student/",
    },
  },
  {
    id: "unknown",
    label: l(
      "I have no idea which career suits me.",
      "কোন career আমার জন্য—কিছুই বুঝি না।",
    ),
    note: l(
      "Explore work families, not personality labels.",
      "Personality label নয়, work family explore করো।",
    ),
    destination: { en: "/careers/", bn: "/bn/careers/" },
  },
  {
    id: "directionless",
    label: l(
      "I know some programming but have no direction.",
      "Programming একটু জানি, direction নেই।",
    ),
    note: l(
      "Compare real work, then try a small experiment.",
      "Real work compare করে small experiment করো।",
    ),
    destination: { en: "/compare/", bn: "/bn/compare/" },
  },
  {
    id: "ai-worry",
    label: l(
      "I’m worried AI will replace my future job.",
      "AI আমার future job নিয়ে নেবে—এই চিন্তা হচ্ছে।",
    ),
    note: l(
      "Separate exposed tasks from durable capabilities.",
      "Exposed task আর durable capability আলাদা করে বোঝো।",
    ),
    destination: { en: "/ai/", bn: "/bn/ai/" },
  },
  {
    id: "target",
    label: l("I already have a target career.", "আমার target career জানা আছে।"),
    note: l(
      "Open a mentor-guided roadmap and verify it through practice.",
      "Mentor-guided roadmap খুলে practice দিয়ে verify করো।",
    ),
    destination: { en: "/roadmaps/", bn: "/bn/roadmaps/" },
  },
  {
    id: "behind",
    label: l(
      "I’m close to graduation and feel behind.",
      "Graduation কাছে, মনে হচ্ছে অনেক পিছিয়ে।",
    ),
    note: l(
      "Use a focused 12-week recovery route without shame.",
      "Shame ছাড়া focused 12-week recovery route নাও।",
    ),
    destination: {
      en: "/guidance/feel-behind/",
      bn: "/bn/guidance/feel-behind/",
    },
  },
];

export interface LostChoice {
  id: string;
  prompt: { en: string; bn: string };
  response: { en: string; bn: string };
  destination: { en: string; bn: string };
}

export const lostChoices: LostChoice[] = [
  {
    id: "goal",
    prompt: l(
      "I have a goal, but not a preparation plan.",
      "লক্ষ্য আছে, প্রস্তুতির plan নেই।",
    ),
    response: l(
      "Choose a goal guide for industry, remote work, study abroad, research, freelancing or a tech business. Then connect it to one career roadmap.",
      "Industry, remote কাজ, study abroad, research, freelancing বা tech business-এর goal guide নাও। তারপর একটি career roadmap যুক্ত করো।",
    ),
    destination: { en: "/goals/", bn: "/bn/goals/" },
  },
  {
    id: "careers",
    prompt: l("I don’t know what careers exist.", "কী কী career আছে জানি না।"),
    response: l(
      "Start with eight work families. Open two that sound unlike each other.",
      "আটটি work family দিয়ে শুরু করো। আলাদা মনে হয় এমন দুটি খোলো।",
    ),
    destination: { en: "/careers/", bn: "/bn/careers/" },
  },
  {
    id: "choose",
    prompt: l(
      "I can’t choose between careers.",
      "Career-এর মধ্যে choose করতে পারছি না।",
    ),
    response: l(
      "Compare the work, then run one experiment from each path.",
      "কাজ compare করে প্রতিটি path-এর একটি experiment করো।",
    ),
    destination: { en: "/compare/", bn: "/bn/compare/" },
  },
  {
    id: "next",
    prompt: l("I don’t know what to learn next.", "এরপর কী শিখব জানি না।"),
    response: l(
      "Choose the roadmap for your current target and stop at ‘enough for now’.",
      "Current target-এর roadmap নাও আর ‘এখন যথেষ্ট’ জায়গায় থামো।",
    ),
    destination: { en: "/roadmaps/", bn: "/bn/roadmaps/" },
  },
  {
    id: "ai",
    prompt: l("I’m worried about AI.", "AI নিয়ে ভয় লাগছে।"),
    response: l(
      "Study task exposure, then practice directing and verifying AI.",
      "Task exposure বুঝে AI-কে direct আর verify করা practice করো।",
    ),
    destination: { en: "/ai/", bn: "/bn/ai/" },
  },
  {
    id: "behind",
    prompt: l(
      "I’m in 3rd/4th year and feel behind.",
      "আমি 3rd/4th year-এ, পিছিয়ে গেছি মনে হয়।",
    ),
    response: l(
      "You cannot recover three years in three weeks. You can stop losing the next three months.",
      "তিন বছরের gap তিন সপ্তাহে যাবে না। কিন্তু পরের তিন মাস নষ্ট হওয়া আজই বন্ধ করতে পারো।",
    ),
    destination: {
      en: "/guidance/feel-behind/",
      bn: "/bn/guidance/feel-behind/",
    },
  },
  {
    id: "target",
    prompt: l("I already know my target career.", "Target career জানা আছে।"),
    response: l(
      "Check the roadmap, experiment and AI exposure before committing to a tool list.",
      "Tool list ধরার আগে roadmap, experiment আর AI exposure দেখো।",
    ),
    destination: { en: "/careers/", bn: "/bn/careers/" },
  },
];
