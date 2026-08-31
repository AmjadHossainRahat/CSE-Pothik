import type { APIRoute } from "astro";
import { renderProjectTemplate } from "@/lib/project-template";
import { locales, type Locale } from "@/types/content";

export function getStaticPaths() {
  return locales.map((locale) => ({
    params: { file: `final-year-project.${locale}.md` },
    props: { locale },
  }));
}

export const GET: APIRoute = ({ props }) =>
  new Response(renderProjectTemplate(props.locale as Locale), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
