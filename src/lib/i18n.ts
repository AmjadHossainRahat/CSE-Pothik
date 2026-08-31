import type { LocalizedText, Locale } from "@/types/content";

export function t(value: LocalizedText, locale: Locale): string {
  return value[locale];
}

export function localeFromPath(pathname: string): Locale {
  const path =
    pathname.replace(import.meta.env.BASE_URL.replace(/\/$/, ""), "") || "/";
  return /^\/bn(?:\/|$)/.test(path) ? "bn" : "en";
}
