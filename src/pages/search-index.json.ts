import { localePath, withBase } from "@/config/site";
import { searchEntries } from "@/data/search";

export const prerender = true;

export function GET() {
  const index = searchEntries.map((entry) => ({
    type: entry.type,
    title: entry.title,
    description: entry.description,
    keywords: entry.keywords,
    url: {
      en: withBase(localePath("en", entry.path)),
      bn: withBase(localePath("bn", entry.path)),
    },
  }));

  return new Response(JSON.stringify(index), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
