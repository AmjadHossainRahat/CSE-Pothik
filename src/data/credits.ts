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
    role: { en: "Creator & Orchestrator", bn: "উদ্যোক্তা ও Orchestrator" },
    contribution: {
      en: "Shaped the vision, finalized the requirements and design through extended discussions with ChatGPT, and directed Codex through implementation and refinement.",
      bn: "সাইটের লক্ষ্য নির্ধারণ করেছেন, ChatGPT-এর সঙ্গে দীর্ঘ আলোচনায় requirement ও design চূড়ান্ত করেছেন এবং Codex দিয়ে implementation ও পরিমার্জনের কাজ পরিচালনা করেছেন।",
    },
  },
  {
    name: "ChatGPT",
    role: { en: "Requirements & design", bn: "Requirement ও design" },
    contribution: {
      en: "Helped explore ideas, clarify requirements and refine the product experience and design through conversation with the creator.",
      bn: "উদ্যোক্তার সঙ্গে আলোচনায় ধারণা যাচাই, requirement স্পষ্ট করা এবং product experience ও design পরিমার্জনে সহায়তা করেছে।",
    },
  },
  {
    name: "Codex",
    role: {
      en: "Implementation & iteration · GPT-5.6 Sol (High)",
      bn: "Implementation ও পরিমার্জন · GPT-5.6 Sol (High)",
    },
    contribution: {
      en: "The creator used Codex with GPT-5.6 Sol at High reasoning effort to build the site from the agreed requirements and design, and to assist with testing, bug fixes and subsequent improvements.",
      bn: "চূড়ান্ত requirement ও design থেকে সাইট তৈরি, test, bug fix এবং পরবর্তী উন্নয়নে উদ্যোক্তা GPT-5.6 Sol-এর High reasoning effort-সহ Codex ব্যবহার করেছেন।",
    },
  },
];
