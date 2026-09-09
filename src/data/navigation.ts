import { l } from "@/lib/localized";
import type { LocalizedText } from "@/types/content";

export interface NavigationItem {
  id: string;
  label: LocalizedText;
  path: string;
  match: "exact" | "prefix" | "none";
  emphasis?: boolean;
}

export interface NavigationGroup {
  id: string;
  label: LocalizedText;
  items: NavigationItem[];
}

export const navigationGroups: NavigationGroup[] = [
  {
    id: "start",
    label: l("Start here", "এখান থেকে শুরু"),
    items: [
      {
        id: "home",
        label: l("Home", "হোম"),
        path: "/",
        match: "exact",
      },
      {
        id: "next-step",
        label: l("Find my next step", "এরপর কী করব?"),
        path: "/#starting-point",
        match: "none",
      },
      {
        id: "new-student",
        label: l("New to CSE", "CSE-তে নতুন"),
        path: "/guidance/new-cse-student/",
        match: "exact",
      },
      {
        id: "first-role",
        label: l("Enter software industry", "Software industry-তে ঢুকব"),
        path: "/guidance/first-software-role/#entry-routes",
        match: "exact",
      },
      {
        id: "lost",
        label: l("I’m Lost", "আমি দিশেহারা"),
        path: "/im-lost/",
        match: "exact",
        emphasis: true,
      },
    ],
  },
  {
    id: "discover",
    label: l("Discover", "খুঁজে দেখো"),
    items: [
      {
        id: "careers",
        label: l("Career paths", "ক্যারিয়ারের পথ"),
        path: "/careers/",
        match: "prefix",
      },
      {
        id: "compare",
        label: l("Compare careers", "ক্যারিয়ার মিলিয়ে দেখো"),
        path: "/compare/",
        match: "exact",
      },
      {
        id: "experiments",
        label: l("Try real work", "কাজটা করে দেখো"),
        path: "/try/",
        match: "prefix",
      },
    ],
  },
  {
    id: "prepare",
    label: l("Prepare", "প্রস্তুতি"),
    items: [
      {
        id: "roadmaps",
        label: l("Learning roadmaps", "শেখার রোডম্যাপ"),
        path: "/roadmaps/",
        match: "prefix",
      },
      {
        id: "goals",
        label: l("Goal plans", "লক্ষ্যভিত্তিক প্রস্তুতি"),
        path: "/goals/",
        match: "prefix",
      },
      {
        id: "final-year",
        label: l("Final-year project", "ফাইনাল ইয়ার প্রজেক্ট"),
        path: "/guidance/final-year-project/",
        match: "exact",
      },
      {
        id: "resources",
        label: l("Learning resources", "শেখার রিসোর্স"),
        path: "/resources/",
        match: "exact",
      },
    ],
  },
  {
    id: "future",
    label: l("Future", "আগামীর জন্য"),
    items: [
      {
        id: "ai",
        label: l("AI & your career", "AI ও তোমার ক্যারিয়ার"),
        path: "/ai/",
        match: "prefix",
      },
    ],
  },
  {
    id: "about",
    label: l("About", "সাইট সম্পর্কে"),
    items: [
      {
        id: "why",
        label: l("Why CSE-Pothik?", "CSE-Pothik কেন?"),
        path: "/about/#why-this-exists",
        match: "exact",
      },
    ],
  },
];

export function isNavigationItemActive(
  pathname: string,
  item: NavigationItem,
): boolean {
  const current = pathname.split("#")[0] || "/";
  const target = item.path.split("#")[0] || "/";

  if (item.match === "none") return false;
  if (target === "/") return current === "/";
  if (item.match === "prefix") {
    return current === target || current.startsWith(target);
  }

  return current === target;
}
