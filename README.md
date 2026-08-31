# CSE Compass

**Find your direction in CSE.**

CSE Compass is a fully static, bilingual career-navigation and mentoring website for Computer Science and Engineering students. It helps students understand the career landscape, compare real work, try small career experiments, follow foundation-first roadmaps, and prepare for changing AI task exposure.

English is the canonical/default language; natural Bangla routes live under `/bn/`.

## Product scope

CSE Compass includes:

- eight career families and nine detailed career guides;
- career comparison for two or three paths;
- one safe, time-bounded experiment for every published career;
- a five-stage roadmap for every published career;
- curated free learning resources with scope and review metadata;
- task-based AI exposure and AI-resilience guidance;
- deterministic “I’m Lost” and starting-point navigation;
- fresher and third/fourth-year recovery routes;
- competitive-programming / ACM / ICPC guidance;
- mentor-level software-engineering foundations;
- English/Bangla parity and light/dark theme parity.

It deliberately has no account, authentication, backend, database, profile, progress tracking, certificate, job promise, LMS behavior, fit score, streak, badge, or chatbot.

## Architecture

- [Astro](https://astro.build/) produces static HTML for every essential page.
- Strict TypeScript models stable, language-neutral content IDs.
- Small framework-free browser scripts handle theme, navigation, comparison, and analytics. Static prose is never hydrated.
- Typed content lives under `src/data/`; reusable editorial and page components live under `src/components/`.
- `src/config/site.ts` centralizes brand, locale, and routes.
- `src/lib/analytics.ts` is the analytics abstraction.
- Semantic CSS tokens provide designed light and dark themes.
- Vitest covers domain/content integrity; Playwright covers journeys and accessibility.
- Astro sitemap generation, a robots endpoint, canonical URLs, hreflang, Open Graph, social metadata, and JSON-LD provide the SEO layer.

```text
src/
├── assets/           original illustration masters optimized by Astro
├── components/       shared UI and complete page experiences
├── config/           brand, locale and route configuration
├── data/             careers, families, roadmaps, experiments, resources
├── layouts/          document layout, metadata, global behavior
├── lib/              analytics, comparison, content, i18n, navigation, theme
├── pages/            English routes and equivalent /bn routes
├── styles/           semantic tokens and responsive design system
└── types/            strict content-domain contracts
tests/
├── unit/             pure domain behavior
├── content/          content and relationship integrity
├── e2e/              critical product journeys
└── accessibility/    automated WCAG A/AA checks
```

`DESIGN.md` is the product/experience authority. `SKILL.md` is the engineering authority. `AI-Prompt.md` defines the full execution and Definition of Done.

## Prerequisites and Yarn

- Node.js 22.12 or newer (Node 24 in CI)
- Corepack
- Git

This is Yarn-only. The Yarn release is pinned in `packageManager`; `yarn.lock` is committed. Do not create npm or pnpm lockfiles.

```bash
corepack enable
yarn install --immutable
```

## Development and quality

```bash
yarn dev
yarn build
yarn preview
```

Astro telemetry is disabled by the scripts. Quality commands:

```bash
yarn format:check
yarn lint
yarn typecheck
yarn test:unit
yarn test:content
yarn build
yarn verify:build
yarn playwright install chromium
yarn test:e2e
yarn test:a11y
yarn check:external-links
```

Run the non-browser suite with `yarn check`.

See [the visual revision validation report](docs/validation.md) for the completed checks, fixes and genuine verification limitations.

Browser tests normally use the development server. To exercise the actual production HTML and optimized assets, build first and set `PLAYWRIGHT_SERVER=preview`. Keep the same `BASE_PATH` for build, verification and browser tests. For a project-Pages production check in PowerShell:

```powershell
$env:BASE_PATH = "/CSE-Compass"
yarn build
yarn verify:build
$env:PLAYWRIGHT_SERVER = "preview"
yarn playwright test tests/e2e tests/accessibility
Remove-Item Env:PLAYWRIGHT_SERVER
Remove-Item Env:BASE_PATH
```

Content tests reject duplicate IDs, invalid slugs, missing bilingual copy, missing roadmap/experiment relationships, broken references, invalid exposure values, incomplete required sections, and malformed resource metadata. `verify:build` inspects the generated site for broken local URLs, duplicate titles/canonicals, missing SEO metadata, missing artifacts, and unfinished placeholder copy. External URLs are checked separately because remote availability can be transient. Restricted responses (401/403/405/429) are reported as `REVIEW`, not verified successes; they do not fail CI as confirmed broken links would.

## Content architecture

Published entities use stable language-neutral IDs. Localized copy uses `{ en, bn }` fields so route parity and required translations can be validated. Core types in `src/types/content.ts` include `CareerFamily`, `Career`, `Roadmap`, `RoadmapStage`, `CareerExperiment`, `LearningResource`, `AITaskExposure`, and `StudentSituation`.

Language implementation combines shared resources and separate generated HTML: typed bilingual data/UI copy and shared Astro templates are the source; thin English and `/bn/` route wrappers select the locale at build time. We do not maintain two hand-written HTML copies of each page or translate essential content in the browser. Some page-specific editorial copy is colocated as English/Bangla pairs inside the shared template.

English is the canonical editorial source. Bangla should be rewritten as natural mentoring copy for Bangladeshi CSE students, not translated word-for-word. Technical terms such as API, Git, Backend, Docker, SOLID, Design Pattern, Machine Learning, DevOps, and Cybersecurity may remain in English when natural.

### Add a career

1. Add the stable ID to `careerIds` in `src/types/content.ts`.
2. Add complete English/Bangla content in `src/data/careers.ts`.
3. Assign a family and comparison dimensions.
4. Add three qualitative AI task-exposure entries.
5. Add a roadmap relationship and an experiment in `src/data/experiments.ts`.
6. Add related careers, “what not to learn yet,” and resource references.
7. Run `yarn test:content`, `yarn typecheck`, and `yarn build`.
8. Verify both languages, both themes, and mobile/desktop.

Dynamic routes generate the English and Bangla career, roadmap, experiment, and AI pages automatically.

### Add or change a roadmap

Roadmaps are generated from career learning layers in `src/data/roadmaps.ts`. Every stage must explain intent, topics, “enough for now,” one practical task, what not to learn yet, and a small Learn → Practice → Go Deeper resource set. Do not turn a roadmap into a technology checklist.

### Add or change an experiment

Add a complete seed in `src/data/experiments.ts` with timebox, prerequisites, experience goal, at least four steps, attention prompts, reflection prompts, and resource IDs. Cybersecurity work must remain inside deliberately vulnerable, explicitly authorized labs. No experiment stores responses or completion state.

### Add a learning resource

Add metadata in `src/data/resources.ts`: stable ID, provider, HTTPS URL, type, free-access status, bilingual recommended scope/reason, language availability, and review date. Prefer official documentation, respected university material, open courses, trusted labs, open books, and established practice platforms. Link to teaching; do not copy it.

## Themes and responsive design

`src/styles/tokens.css` contains semantic tokens for both themes. Components must not embed light/dark assumptions.

The visual mood follows `themes-sample.png`: cool off-white/navy in light mode, midnight navy in dark mode, and an editorial serif hero with system sans-serif body text. The CSE Compass name and compass mark remain the brand; the sample's artwork is not reused.

The homepage now follows a focused orientation sequence: illustrated hero/map → AI Reality → starting point → concise misconceptions/mentor voices → eight career families → three experiment previews → six-step useful loop → a practical, encouraging next step. Additional mentor voices use a native disclosure; all nine complete experiments remain on the dedicated index. Motivation is attached to realistic action, not promises or pressure.

Two original transparent illustrations—a hoodie-and-laptop mentor and an AI study partner—are imported from `src/assets/illustrations/` through Astro's responsive image pipeline. WebP variants, intrinsic dimensions, an eager hero and lazy supporting image keep them static and lightweight. See [illustration provenance and generation prompts](docs/illustrations.md).

Light is the default. Only an explicit theme and language choice may be stored in `localStorage`. The no-flash script applies theme before rendering. No roadmap, experiment, score, or profile state is stored.

Layouts are mobile-first. Comparison becomes labelled stacked records on narrow screens; roadmaps remain readable without pinch zoom. No essential interaction depends on hover.

The orientation map and useful loop explicitly group titles with captions. Breadcrumbs use the same container as the page heading and reset inherited list margins. The desktop navigation is always visible at its breakpoint; the mobile menu supports keyboard opening and Escape-to-close, and remains a native disclosure without JavaScript.

`tests/e2e/homepage-layout.spec.ts` protects section order, content density, illustrations, caption/breadcrumb geometry, progressive disclosure, breakpoint navigation continuity and no-JavaScript navigation. The responsive suite covers 320, 390, 768, 1280 and 1600px; accessibility tests include English/Bangla and light/dark. A release also requires actual viewport-sized visual review, not only automated overflow checks.

## Analytics and privacy

Analytics is disabled unless `PUBLIC_GA_MEASUREMENT_ID` exists at build time:

```bash
PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX yarn build
```

Supported events are:

```text
language_switch
theme_switch
starting_point_selected
career_family_opened
career_viewed
career_compared
roadmap_viewed
career_experiment_started
ai_guidance_viewed
im_lost_used
learning_resource_clicked
next_step_clicked
```

Parameters are bounded scalar IDs. Do not add names, emails, free text, sensitive data, profiles, or hidden user IDs. Google Signals is disabled. The public privacy page explains local preferences, optional aggregate analytics, and external-resource policies.

`career_viewed` and `roadmap_viewed` fire once on the destination page, including direct and homepage-family visits. Links use `next_step_clicked` instead of duplicating view events. The analytics integration test captures calls with a local stub and blocks Google requests; it does not claim delivery to a live GA4 property.

## SEO

`BaseLayout.astro` creates unique localized titles/descriptions, canonical URLs, equivalent `hreflang`, `x-default`, Open Graph, X card metadata, and WebSite JSON-LD. Career pages add Article and breadcrumb structured data.

The build produces static essential content, `sitemap-index.xml`, base-aware `robots.txt`, the project social card at `public/social/cse-compass-og.png`, an SVG favicon, and directory-format trailing-slash URLs. Every new primary route needs an equivalent under `src/pages/bn/` and localized metadata.

## GitHub Pages

Astro reads `SITE_URL` for the trusted origin and `BASE_PATH` for an explicit root/project base. GitHub Actions repository context infers the project base during deployment.

Root-site build:

```bash
BASE_PATH=/ SITE_URL=https://username.github.io yarn build
```

Project-site build:

```bash
BASE_PATH=/repository-name SITE_URL=https://username.github.io yarn build
```

Internal links, assets, canonical URLs, hreflang, sitemap, and robots output honor the base.

`.github/workflows/ci.yml` runs immutable installation, formatting, lint, type checking, tests, build, end-to-end tests, and accessibility tests. `.github/workflows/deploy-pages.yml` runs quality gates and deploys only `dist/`. Set the optional repository variable `PUBLIC_GA_MEASUREMENT_ID` for production analytics.

## Contribution workflow

1. Read `DESIGN.md` and `SKILL.md`.
2. Make content and code changes together when relationships change.
3. Preserve English/Bangla and light/dark parity.
4. Run the complete relevant quality suite.
5. Inspect the result on mobile and desktop before publishing.

## Attribution and community use

CSE Compass was conceptually inspired by [roadmap.sh](https://roadmap.sh/) for structured role/skill navigation and [Architect Prep](https://mayurjp.github.io/architect-prep/) for focused technical navigation. Its visual system, content, mentoring model, roadmaps, and implementation are original.

Full-site requirement engineering and product/design planning were done with ChatGPT; development was done by Codex.

The repository is MIT licensed. Its community philosophy encourages improvements that preserve attribution and keep student-facing resources free. See [DESIGN.md](./DESIGN.md#36-conceptual-inspiration-and-provenance) and [LICENSE](./LICENSE).
