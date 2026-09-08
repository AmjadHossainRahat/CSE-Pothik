import { l } from "@/data/careers";
import type { StudentSituation } from "@/types/content";

export const studentSituations: StudentSituation[] = [
  {
    id: "new",
    label: l("I just started CSE.", "আমি CSE-তে নতুন।"),
    note: l(
      "Start with the landscape and a calm first-semester plan.",
      "আগে পুরো ক্ষেত্রটা একটু দেখে নাও, তারপর শান্তভাবে প্রথম সেমিস্টারের পরিকল্পনা করো।",
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
      "কোন ক্যারিয়ার আমার জন্য, কিছুই বুঝতে পারছি না।",
    ),
    note: l(
      "Explore work families, not personality labels.",
      "Personality label নয়—কাজের ধরনগুলো ঘুরে দেখো।",
    ),
    destination: { en: "/careers/", bn: "/bn/careers/" },
  },
  {
    id: "directionless",
    label: l(
      "I know some programming but have no direction.",
      "Programming একটু জানি, কিন্তু কোন দিকে যাব বুঝি না।",
    ),
    note: l(
      "Compare real work, then try a small experiment.",
      "আসল কাজগুলো মিলিয়ে দেখে ছোট একটি experiment করো।",
    ),
    destination: { en: "/compare/", bn: "/bn/compare/" },
  },
  {
    id: "ai-worry",
    label: l(
      "I’m worried AI will replace my future job.",
      "AI আমার ভবিষ্যতের চাকরি নিয়ে নেবে—এই ভয় হচ্ছে।",
    ),
    note: l(
      "Separate exposed tasks from durable capabilities.",
      "কোন কাজ সহজে automate হয় আর কোন দক্ষতা দীর্ঘদিন কাজে লাগে—দুটো আলাদা করে বোঝো।",
    ),
    destination: { en: "/ai/", bn: "/bn/ai/" },
  },
  {
    id: "target",
    label: l(
      "I already have a target career.",
      "কোন ক্যারিয়ারে যেতে চাই, তা জানি।",
    ),
    note: l(
      "Open a mentor-guided roadmap and verify it through practice.",
      "ধাপে ধাপে রোডম্যাপ ধরে এগোও, আর কাজ করে নিজের সিদ্ধান্ত যাচাই করো।",
    ),
    destination: { en: "/roadmaps/", bn: "/bn/roadmaps/" },
  },
  {
    id: "behind",
    label: l(
      "I’m close to graduation and feel behind.",
      "Graduation কাছে, মনে হচ্ছে অনেক পিছিয়ে গেছি।",
    ),
    note: l(
      "Use a focused 12-week recovery route without shame.",
      "নিজেকে দোষ না দিয়ে ১২ সপ্তাহের focused recovery plan ধরো।",
    ),
    destination: {
      en: "/guidance/feel-behind/",
      bn: "/bn/guidance/feel-behind/",
    },
  },
  {
    id: "first-role",
    label: l(
      "I want to enter the software industry.",
      "Software industry-তে ঢুকতে চাই।",
    ),
    note: l(
      "Choose a route for your current problem-solving level, then build evidence and apply with focus.",
      "Problem solving এখন যতটুকু পারো, সেই অনুযায়ী route বেছে evidence বানাও এবং বেছে বেছে আবেদন করো।",
    ),
    destination: {
      en: "/guidance/first-software-role/#entry-routes",
      bn: "/bn/guidance/first-software-role/#entry-routes",
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
      "লক্ষ্য আছে, কিন্তু প্রস্তুতির পরিকল্পনা নেই।",
    ),
    response: l(
      "Choose a goal guide for industry, remote work, study abroad, research, freelancing or a tech business. Then connect it to one career roadmap.",
      "দেশি-বিদেশি industry, remote work, উচ্চশিক্ষা, research, freelancing বা tech business—নিজের লক্ষ্যটি বেছে নাও। তারপর সেটির সঙ্গে একটি ক্যারিয়ার রোডম্যাপ মিলিয়ে নাও।",
    ),
    destination: { en: "/goals/", bn: "/bn/goals/" },
  },
  {
    id: "careers",
    prompt: l(
      "I don’t know what careers exist.",
      "CSE-তে কী কী ক্যারিয়ার আছে, জানি না।",
    ),
    response: l(
      "Start with eight work families. Open two that sound unlike each other.",
      "আট ধরনের কাজ দিয়ে শুরু করো। একে অন্যের চেয়ে আলাদা মনে হয়—এমন দুটি খুলে দেখো।",
    ),
    destination: { en: "/careers/", bn: "/bn/careers/" },
  },
  {
    id: "choose",
    prompt: l(
      "I can’t choose between careers.",
      "ক্যারিয়ারগুলোর মধ্যে কোনটি বাছব বুঝতে পারছি না।",
    ),
    response: l(
      "Compare the work, then run one experiment from each path.",
      "কাজগুলো মিলিয়ে দেখো, তারপর দুই পথেরই একটি করে ছোট experiment করো।",
    ),
    destination: { en: "/compare/", bn: "/bn/compare/" },
  },
  {
    id: "next",
    prompt: l("I don’t know what to learn next.", "এরপর কী শিখব জানি না।"),
    response: l(
      "Choose the roadmap for your current target and stop at ‘enough for now’.",
      "এখনকার লক্ষ্য অনুযায়ী রোডম্যাপ নাও, আর ‘আপাতত এতটুকুই যথেষ্ট’ জায়গায় থামো।",
    ),
    destination: { en: "/roadmaps/", bn: "/bn/roadmaps/" },
  },
  {
    id: "ai",
    prompt: l("I’m worried about AI.", "AI নিয়ে ভয় লাগছে।"),
    response: l(
      "Study task exposure, then practice directing and verifying AI.",
      "কোন কাজে AI-এর প্রভাব কতটা বোঝো, তারপর AI-কে নির্দেশ দেওয়া আর ফল যাচাই করার চর্চা করো।",
    ),
    destination: { en: "/ai/", bn: "/bn/ai/" },
  },
  {
    id: "voices",
    prompt: l(
      "I need grounded career direction, not another hype feed.",
      "আরেকটি hype feed নয়, বাস্তব ক্যারিয়ার দিকনির্দেশনা চাই।",
    ),
    response: l(
      "Follow the ordered Bangladesh technology watchlist: settle the anxiety, strengthen your thinking, then understand the working world. Compare every perspective with evidence.",
      "বাংলাদেশের tech professionals-দের সাজানো watchlist দেখো: আগে দুশ্চিন্তা সামলাও, ভাবনার ভিত শক্ত করো, তারপর কাজের জগৎ বোঝো। প্রতিটি মতামত evidence দিয়ে মিলিয়ে নাও।",
    ),
    destination: {
      en: "/resources/#industry-voices",
      bn: "/bn/resources/#industry-voices",
    },
  },
  {
    id: "behind",
    prompt: l(
      "I’m in 3rd/4th year and feel behind.",
      "আমি তৃতীয়/চতুর্থ বর্ষে, অনেক পিছিয়ে গেছি মনে হয়।",
    ),
    response: l(
      "You cannot recover three years in three weeks. You can stop losing the next three months.",
      "তিন বছরের ঘাটতি তিন সপ্তাহে মিটবে না। কিন্তু পরের তিন মাস নষ্ট হওয়া আজই থামাতে পারো।",
    ),
    destination: {
      en: "/guidance/feel-behind/",
      bn: "/bn/guidance/feel-behind/",
    },
  },
  {
    id: "target",
    prompt: l(
      "I already know my target career.",
      "কোন ক্যারিয়ারে যেতে চাই, তা জানি।",
    ),
    response: l(
      "Check the roadmap, experiment and AI exposure before committing to a tool list.",
      "Tool-এর তালিকা মুখস্থ করার আগে রোডম্যাপ, ছোট experiment আর AI-এর প্রভাব দেখে নাও।",
    ),
    destination: { en: "/careers/", bn: "/bn/careers/" },
  },
  {
    id: "first-role",
    prompt: l(
      "I want to enter software industry, but I am unsure which route fits.",
      "Software industry-তে ঢুকতে চাই, কিন্তু কোন route আমার জন্য বুঝছি না।",
    ),
    response: l(
      "Choose among a strong-CP route, a balanced foundation-and-project route, or a role-evidence route. Then prepare for the actual hiring format and run a focused application cycle.",
      "Strong-CP route, foundation আর project পাশাপাশি গড়ার route, অথবা role-evidence route—নিজের অবস্থার সঙ্গে মিলিয়ে একটি বেছে নাও। তারপর আসল hiring format-এর প্রস্তুতি নিয়ে focused application cycle চালাও।",
    ),
    destination: {
      en: "/guidance/first-software-role/#entry-routes",
      bn: "/bn/guidance/first-software-role/#entry-routes",
    },
  },
];
