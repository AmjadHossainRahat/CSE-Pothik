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
  integrations: [sitemap()],
  build: {
    format: "directory",
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
    },
  },
});
