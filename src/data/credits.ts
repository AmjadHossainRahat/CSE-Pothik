import { siteConfig } from "@/config/site";
import type { LocalizedText } from "@/types/content";

interface Inspiration {
  name: string;
  url: string;
  contribution: LocalizedText;
}

interface Collaborator {
  name: string;
  url?: string;
  role: LocalizedText;
  contribution: LocalizedText;
}

export const inspirations: Inspiration[] = [
  {
    name: "roadmap.sh",
    url: "https://roadmap.sh/",
    contribution: {
      en: "Inspired the idea of structured career paths and role- and skill-based learning navigation.",
      bn: "ক্যারিয়ারের পথগুলো গুছিয়ে দেখানো এবং role ও skill অনুযায়ী শেখার দিকনির্দেশনা সাজানোর ধারণায় অনুপ্রেরণা দিয়েছে।",
    },
  },
  {
    name: "Architect Prep",
    url: "https://mayurjp.github.io/architect-prep/",
    contribution: {
      en: "Inspired focused, topic-oriented technical preparation and navigation.",
      bn: "বিষয়ভিত্তিক technical preparation আর focused navigation-এর ধারণায় অনুপ্রেরণা দিয়েছে।",
    },
  },
  {
    name: "Amirul Islam",
    url: "https://amirulislamalmamun.com/",
    contribution: {
      en: "Inspired staged, build-centred learning roadmaps that connect technical depth with practical engineering evidence.",
      bn: "ধাপে সাজানো ও কিছু বানিয়ে শেখার roadmap দিয়ে technical depth-কে বাস্তব engineering evidence-এর সঙ্গে যুক্ত করার অনুপ্রেরণা দিয়েছে।",
    },
  },
];

export const collaborators: Collaborator[] = [
  {
    name: siteConfig.creator,
    url: siteConfig.creatorUrl,
    role: {
      en: "Idea, Creator and AI Agent Orchestrator, Reviewer and Quality Control",
      bn: "আইডিয়া, নির্মাতা ও AI Agent Orchestrator · Reviewer ও Quality Control",
    },
    contribution: {
      en: "Originated the idea, orchestrated the AI agents, reviewed their output and retained responsibility for requirements, product decisions and final quality.",
      bn: "মূল ধারণাটি তৈরি করেছেন, AI agent-গুলোর কাজ পরিচালনা করেছেন, তাদের output review করেছেন এবং requirement, product decision ও চূড়ান্ত মানের দায়িত্ব রেখেছেন।",
    },
  },
  {
    name: "ChatGPT",
    role: {
      en: "Idea polishing, Requirement and Design analysis and finalizing",
      bn: "আইডিয়া পরিমার্জন · Requirement ও design বিশ্লেষণ এবং চূড়ান্তকরণ",
    },
    contribution: {
      en: "Helped polish the initial idea, analyze alternatives and turn extended discussion into finalized product requirements and design direction.",
      bn: "প্রাথমিক আইডিয়া পরিমার্জন, বিকল্প বিশ্লেষণ এবং দীর্ঘ আলোচনাকে চূড়ান্ত product requirement ও design direction-এ রূপ দিতে সহায়তা করেছে।",
    },
  },
  {
    name: "Codex",
    role: {
      en: "Implementation & Iteration · GPT-5.6 Sol (High) and GPT-6 Astra (High)",
      bn: "Implementation ও iteration · GPT-5.6 Sol (High) এবং GPT-6 Astra (High)",
    },
    contribution: {
      en: "Implemented and iterated on the approved requirements and design, including testing and bug fixing, using GPT-5.6 Sol and GPT-6 Astra with High reasoning.",
      bn: "অনুমোদিত requirement ও design অনুযায়ী implementation, iteration, testing ও bug fixing-এ GPT-5.6 Sol এবং GPT-6 Astra—দুটিই High reasoning-সহ ব্যবহৃত হয়েছে।",
    },
  },
];
