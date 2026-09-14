import type { APIRoute } from "astro";
import { withBase } from "@/config/site";

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL("https://cse-pothik.com");
  const sitemap = new URL(withBase("/sitemap-index.xml"), origin);
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap.href}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
