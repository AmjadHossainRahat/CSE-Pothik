# CSE-Pothik engineering guide

This guide covers implementation and delivery. [SKILL.md](../../SKILL.md) remains the authoritative engineering and Definition of Done source.

## Contents

- [Architecture](#architecture)
- [Repository structure](#repository-structure)
- [Local development](#local-development)
- [Quality and testing](#quality-and-testing)
- [Production optimization](#production-optimization)
- [GitHub Pages and CI](#github-pages-and-ci)

## Architecture

- Astro generates static HTML for every essential English and Bangla route.
- Strict TypeScript models stable, language-neutral content IDs.
- Shared Astro templates render typed bilingual data; two hand-written HTML sites are not maintained.
- Small framework-free scripts handle theme, navigation, comparison and analytics.
- Static prose is not hydrated, and no client framework is needed.
- Vitest checks domain/content integrity; Playwright checks journeys and accessibility.
- `src/config/site.ts` centralizes brand, locale and route configuration.
- `src/lib/analytics.ts` provides the bounded analytics abstraction.

## Repository structure

```text
src/
├── assets/       illustration masters optimized by Astro
├── components/   shared UI and complete page experiences
├── config/       brand, locale and route configuration
├── data/         typed careers, goals, roadmaps and resources
├── layouts/      document shell, metadata and global behavior
├── lib/          pure content, navigation, SEO and analytics helpers
├── pages/        English routes and equivalent /bn routes
├── styles/       semantic tokens and responsive design system
└── types/        content-domain contracts
tests/
├── unit/
├── content/
├── e2e/
└── accessibility/
```

The structure follows Astro conventions without adding backend or monorepo layers a static site does not need. Generated `dist/`, `.astro/`, dependencies and test reports are ignored.

## Local development

Requirements: Node.js 22.12 or newer, Corepack and Git. Use Yarn only.

```bash
corepack enable
yarn install --immutable
yarn dev
```

```bash
yarn build
yarn preview
```

Astro telemetry is disabled by project scripts.

## Quality and testing

```bash
yarn format:check
yarn lint
yarn typecheck
yarn test:unit
yarn test:content
yarn build
yarn verify:build
yarn inspect:build
yarn playwright install chromium
yarn test:e2e
yarn test:a11y
yarn check:external-links
```

`yarn check` runs formatting, linting, type checking and all Vitest tests. `verify:build` checks generated routes, internal URLs, metadata and placeholder defects. External links are separate because remote availability is transient; restricted responses are reported for review rather than treated as verified.

See [validation.md](../validation.md) for executed checks and genuine limitations.

## Production optimization

- Astro compacts template whitespace while preserving meaningful and preformatted text.
- Vite minifies bundled browser JavaScript; Lightning CSS minifies compiled CSS.
- Astro emits responsive WebP variants for imported homepage illustrations.
- `public/` files are copied unchanged.
- The small early theme initializer remains inline to prevent theme flash.
- Downloadable Markdown remains readable.
- Gzip/Brotli are hosting transport compression, not build-time minification.

The repeatable artifact inspection is `yarn inspect:build`. See [engineering-audit.md](../engineering-audit.md) for the detailed evidence and limitations.

## GitHub Pages and CI

`.github/workflows/ci.yml` runs immutable installation, format, lint, type, unit/content, production build, artifact verification, inspection, E2E and accessibility gates. `.github/workflows/deploy-pages.yml` repeats release gates on pushes to `main`, uploads the tested `dist/` directory and deploys it through GitHub Pages.

Configure **Settings → Pages → Source: GitHub Actions** once.

Root-site build:

```bash
BASE_PATH=/ SITE_URL=https://username.github.io yarn build
```

Project-site PowerShell verification:

```powershell
$env:BASE_PATH = "/CSE-Pothik"
$env:SITE_URL = "https://username.github.io"
yarn build
yarn verify:build
$env:PLAYWRIGHT_SERVER = "preview"
yarn playwright test tests/e2e tests/accessibility
Remove-Item Env:PLAYWRIGHT_SERVER
Remove-Item Env:SITE_URL
Remove-Item Env:BASE_PATH
```

Use the same `BASE_PATH` and `SITE_URL` for building, verification and browser tests. Canonical URLs, assets, hreflang, sitemap and robots output honor the configured base.

Return to the [documentation map](../../README.md#documentation-map).
