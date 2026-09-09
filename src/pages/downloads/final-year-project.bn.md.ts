import type { APIRoute } from "astro";
import { renderProjectTemplate } from "@/lib/project-template";

export const GET: APIRoute = () =>
  new Response(renderProjectTemplate("bn"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
