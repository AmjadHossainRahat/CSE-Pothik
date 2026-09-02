import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

const repositoryName =
  process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "CSE-Compass";
const isProjectPages =
  process.env.GITHUB_ACTIONS === "true" &&
  !repositoryName.endsWith(".github.io");
const base =
  process.env.BASE_PATH ?? (isProjectPages ? `/${repositoryName}` : "/");
const site = process.env.SITE_URL ?? "https://amjadhossainrahat.github.io";

export default defineConfig({
  site,
  base,
  output: "static",
  trailingSlash: "always",
  devToolbar: { enabled: false },
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname.replace(/\/+$/, "") || "/";
        const basePath = base.replace(/\/+$/, "");
        const route =
          basePath && pathname.startsWith(basePath)
            ? pathname.slice(basePath.length) || "/"
            : pathname;
        return route !== "/search" && route !== "/bn/search";
      },
    }),
  ],
  build: {
    format: "directory",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
