import type { Locale } from "@/types/content";

export const siteConfig = {
  name: "CSE Compass",
  tagline: "Find your direction in CSE.",
  description: "A practical career compass for CSE students in the AI era.",
  author: "Amjad Hossain and contributors",
  creator: "Amjad Hossain",
  creatorUrl: "https://amjadhossainrahat.github.io/",
  repository: "https://github.com/AmjadHossainRahat/CSE-Compass",
  socialImage: "social/cse-compass-og.png",
} as const;

export const localeInfo = {
  en: { label: "EN", htmlLang: "en", direction: "ltr" },
  bn: { label: "বাংলা", htmlLang: "bn", direction: "ltr" },
} as const;

export const ui = {
  en: {
    nav: {
      careers: "Explore Careers",
      compare: "Compare",
      try: "Try a Career",
      roadmaps: "Roadmaps",
      ai: "AI & Your Career",
      lost: "I’m Lost",
    },
    skip: "Skip to main content",
    menu: "Menu",
    theme: "Switch theme",
    light: "Light",
    dark: "Dark",
    language: "Read in বাংলা",
    external: "External resource",
  },
  bn: {
    nav: {
      careers: "Career দেখো",
      compare: "Compare করো",
      try: "Career ট্রাই করো",
      roadmaps: "Roadmap",
      ai: "AI ও তোমার Career",
      lost: "আমি দিশেহারা",
    },
    skip: "মূল কনটেন্টে যাও",
    menu: "মেনু",
    theme: "থিম বদলাও",
    light: "Light",
    dark: "Dark",
    language: "Read in English",
    external: "বাইরের learning resource",
  },
} as const;

export function localePath(locale: Locale, path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") return normalized;
  return normalized === "/" ? "/bn/" : `/bn${normalized}`;
}

export function stripLocale(pathname: string): string {
  const withoutBase =
    pathname.replace(import.meta.env.BASE_URL.replace(/\/$/, ""), "") || "/";
  return withoutBase.replace(/^\/bn(?=\/|$)/, "") || "/";
}

export function equivalentPath(pathname: string, targetLocale: Locale): string {
  return localePath(targetLocale, stripLocale(pathname));
}

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
}

export function careerPath(locale: Locale, slug: string): string {
  return localePath(locale, `/careers/${slug}/`);
}

export function roadmapPath(locale: Locale, slug: string): string {
  return localePath(locale, `/roadmaps/${slug}/`);
}

export function experimentPath(locale: Locale, slug: string): string {
  return localePath(locale, `/try/${slug}/`);
}

export function aiCareerPath(locale: Locale, slug: string): string {
  return localePath(locale, `/ai/${slug}/`);
}
