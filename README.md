# CSE Compass

**Find your direction in CSE.**

CSE Compass is a fully static, bilingual career-navigation and mentoring website for Computer Science and Engineering students. It helps students understand the career landscape, compare real work, try small career experiments, follow foundation-first roadmaps, and prepare for changing AI task exposure.

English is the canonical/default language; natural Bangla routes live under `/bn/`.

## Product scope

CSE Compass includes:

- eight career families and seventeen detailed career guides, including Mobile App Development, UX/UI Engineering, Network Engineering, Hardware Engineering, Software QA & Testing, Data Analytics & BI, AI Engineering and Application Security;
- seven goal guides for global companies, Bangladesh industry, remote employment, study abroad, research/publication, freelancing and a tech business;
- career comparison for two or three paths;
- one safe, time-bounded experiment for every published career;
- a five-stage roadmap for every published career;
- curated free learning resources with scope and review metadata;
- task-based AI exposure and AI-resilience guidance;
- deterministic “I’m Lost” and starting-point navigation;
- bilingual static search across career, roadmap, experiment, goal, guidance
  and resource content, without transmitting query text to analytics;
- fresher and third/fourth-year recovery routes;
- competitive-programming / ACM / ICPC guidance;
- mentor-level software-engineering foundations;
- a complete final-year project standards guide with downloadable English/Bangla evidence templates;
- English/Bangla parity and light/dark theme parity.

It deliberately has no account, authentication, backend, database, profile, progress tracking, certificate, job promise, LMS behavior, fit score, streak, badge, or chatbot.

## Architecture

- [Astro](https://astro.build/) produces static HTML for every essential page.
- Strict TypeScript models stable, language-neutral content IDs.
- Small framework-free browser scripts handle theme, navigation, comparison, and analytics. Static prose is never hydrated.
- Typed content lives under `src/data/`; reusable editorial and page components live under `src/components/`.
- `src/data/navigation.ts` defines one bilingual problem-oriented navigation model and active-route matching for both desktop and mobile. Search is a secondary Start-here tool; Learning Resources sits under Prepare.
- `src/data/search.ts` builds the bilingual search index from the same typed career, goal, experiment and resource sources used by the rendered pages.
- `src/config/site.ts` centralizes brand, locale, and routes.
- `src/lib/analytics.ts` is the analytics abstraction.
- Semantic CSS tokens provide designed light and dark themes.
- Vitest covers domain/content integrity; Playwright covers journeys and accessibility.
- Astro sitemap generation, a robots endpoint, canonical URLs, hreflang, Open Graph, social metadata, and JSON-LD provide the SEO layer. Editorial indexes expose CollectionPage/ItemList and breadcrumb schema; noindex search routes are omitted from the sitemap.

```text
src/
├── assets/           original illustration masters optimized by Astro
├── components/       shared UI and complete page experiences
├── config/           brand, locale and route configuration
├── data/             careers, goals, roadmaps, experiments, resources, sources
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

### Folder structure and production optimization

The structure follows [Astro’s project conventions](https://docs.astro.build/en/basics/project-structure/), with explicit content, pure-logic, configuration and test boundaries. There is no universal “industry-standard” directory tree: this static site does not need backend controllers, database layers or a monorepo. Generated `dist/`, `.astro/`, dependencies and test reports are ignored, not source-controlled.

The expanded final-year guide keeps stage data in `src/data/final-year-project.ts`, team/quality playbooks and shared template fields in `src/data/project/`, and disclosure UI in `src/components/project/`. The pure Markdown renderer in `src/lib/project-template.ts` serves a thin static download endpoint. English and Bangla share typed resources and components; Astro generates separate localized HTML routes, not separately maintained HTML copies.

Production builds optimize applicable compiled assets:

- Astro 7’s default `compressHTML: "jsx"` compacts template whitespace while preserving meaningful text/preformatted content. It is not a blanket post-processing minifier for everything inside HTML.
- Vite minifies bundled browser JavaScript (the installed Vite uses Oxc); `astro.config.ts` explicitly selects Lightning CSS for CSS minification.
- Astro generates responsive WebP variants for imported homepage illustrations. Image encoding/resizing is different from text minification.
- `public/` files are copied unchanged. `is:inline` scripts bypass bundling/minification; the small early theme initializer is intentionally inline to set the theme before paint. Downloadable Markdown stays readable, and generated XML/robots files are not run through a universal minifier.
- Gzip/Brotli are HTTP delivery compression, not minification. No hosting compression ratio or live response header is claimed by a local build.

See [the engineering audit](docs/engineering-audit.md) for the source/defaults inspected, output inspection and limitations. Do not add a generic HTML postprocessor that can damage Bangla spacing, inline code or accessible names merely to chase a smaller line count.

### Practical final-year team toolkit

The final-year project page adds seven progressively disclosed working playbooks: team agreements and milestone planning, task decomposition and board management, day-one repository setup, lightweight Git flow, sync-ups, risk-based testing, and CI/release handover. A shared equipment-booking example follows REQ-01 through issue #42, review, TEST-01 and release evidence. Department/supervisor requirements still take priority.

Ten bilingual templates can be previewed on the page and downloaded from the existing `downloads/final-year-project.en.md` / `.bn.md` endpoints: brief/risk register, team agreement, issue, PR, meeting note, decision/traceability, test plan/report, bug report, release/handover and attribution. These are authoring prompts—not fabricated results or a website task tracker. No new client JavaScript, dependency, account or homepage section is added.

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
yarn inspect:build
yarn playwright install chromium
yarn test:e2e
yarn test:a11y
yarn check:external-links
```

Run the non-browser suite with `yarn check`.

See [the validation report](docs/validation.md) for completed checks, fixes and genuine verification limitations.

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

Published entities use stable language-neutral IDs. Localized copy uses `{ en, bn }` fields so route parity and required translations can be validated. Core types in `src/types/content.ts` include `CareerFamily`, `Career`, `Roadmap`, `RoadmapStage`, `CareerExperiment`, `LearningResource`, `AITaskExposure`, `StudentSituation`, `GoalGuide`, `GoalStage`, and `GuidanceSource`.

Language implementation combines shared resources and separate generated HTML: typed bilingual data/UI copy and shared Astro templates are the source; thin English and `/bn/` route wrappers select the locale at build time. We do not maintain two hand-written HTML copies of each page or translate essential content in the browser. Some page-specific editorial copy is colocated as English/Bangla pairs inside the shared template.

English is the canonical editorial source. Bangla should be rewritten as natural mentoring copy for Bangladeshi CSE students, not translated word-for-word. Technical terms such as API, Git, Backend, Docker, SOLID, Design Pattern, Machine Learning, DevOps, and Cybersecurity may remain in English when natural.

### Add a career

1. Add the stable ID to `careerIds` in `src/types/content.ts`.
2. Add complete English/Bangla content in `src/data/careers.ts` or its focused imported modules: `additional-careers.ts`, `infrastructure-careers.ts`, or `specialist-careers.ts`. Shared localization helpers live in `src/lib/localized.ts` to avoid circular runtime imports.
3. Assign a family and comparison dimensions.
4. Add three qualitative AI task-exposure entries.
5. Add a roadmap relationship and an experiment in `src/data/experiments.ts`.
6. Add related careers, “what not to learn yet,” resource references, and relevant goal connections in `src/data/goals/`.
7. Run `yarn test:content`, `yarn typecheck`, and `yarn build`.
8. Verify both languages, both themes, and mobile/desktop.

Dynamic routes generate the English and Bangla career, roadmap, experiment, and AI pages automatically.

### Add or change a roadmap

Roadmaps are generated from career learning layers in `src/data/roadmaps.ts`. Every stage must explain intent, topics, “enough for now,” one practical task, what not to learn yet, and a small Learn → Practice → Go Deeper resource set. Do not turn a roadmap into a technology checklist.

Mobile and UX/UI have contextual stage overrides: mobile addresses platform choice, state, persistence and release safety; UX/UI addresses research, accessible interactions and reusable components. `ResourceList` has an alternatives mode so mobile platforms are labelled as choices, not sequential Learn/Practice/Go Deeper levels or a requirement to learn four stacks. UX/product design, UI engineering and broader frontend development are distinguished in the career copy.

Data Analytics & BI, AI Engineering and Application Security use `specialist-roadmaps.ts` so their professional evidence is metric lineage and decision communication, evaluated/releasable AI behavior, or authorized risk remediation—not generic browser-code refactoring. Their complete career and experiment seeds live in `specialist-careers.ts` and `specialist-experiments.ts`.

### Goal guides: where skills lead

`/roadmaps/` offers **By career** (what to learn) and **By goal** (how to apply it). `/goals/` groups seven complete guides into industry, academic and independent paths. Every route has a `/bn/` equivalent. Goal preparation is one of the homepage's three starting intentions and appears under the global **Prepare** navigation group beside roadmaps and the final-year project. Career/roadmap pages and “I’m Lost” provide contextual entry points.

`src/data/goals.ts` combines typed modules under `src/data/goals/`. Add a goal ID, complete localized content, branches, four stages (`foundation`, `evidence`, `application`, `adapt`), pitfalls, responsible AI use, a concrete action this week, related goals and curated career IDs. Each stage needs why, practical tasks, enough-for-now evidence, what not to do yet and a source reference. `GoalDetail.astro` renders the shared static template; desktop has a sticky section index and mobile has a native disclosure. Essential guidance is always rendered, including with JavaScript disabled. No state, assessment, deadline promise or completion tracking is added.

`src/data/guidance-sources.ts` holds dated, scoped references to official hiring, admission, research and business guidance. These are **not** `LearningResource.isFree` entries: reading a reference may be free while applications, tests, tools, publishing or participation have costs. The guide is our editorial synthesis, not an employer/university endorsement. Recheck changing requirements before revising claims, especially NASA eligibility, work authorization, admission/funding and venue AI policies. `yarn check:external-links` covers both source registries.

`tests/content/goals.test.ts` validates all seven guides, language completeness and relationships. `tests/e2e/goal-guidance.spec.ts` checks routes, new careers, journey links, no-JavaScript keyboard navigation, language equivalents and the five-width/two-language/two-theme layout matrix.

### Network, hardware and QA authoring

Network Engineering belongs to Run Systems; Hardware Engineering belongs to Work Close to Hardware; Software QA & Testing belongs to Build Software. These are complete career graphs, not aliases for security, embedded programming or frontend work. `infrastructure-roadmaps.ts` supplies role-specific tasks/evidence and professional practices; `infrastructure-experiments.ts` supplies authorized loopback, simulated logic and owned-app testing exercises. Curated goal connections preserve role relevance. Paid certificates, physical hardware and hosted services are not prerequisites for the starter experiments.

### Data, AI and application-security expansion

The seventeen-career landscape now includes Data Analytics & BI under Work With Data, AI Engineering under Build Intelligence, and Application Security under Protect Systems. Analytics is distinguished from pipeline ownership, AI engineering from ML modelling/research, and application security from broad security operations. All three participate in comparison, five-stage roadmaps, experiments, AI task exposure, goals and English/Bangla routes. The homepage retains three fast representative experiments and offers the three expanding paths in a native disclosure; the complete index remains the source of truth.

Competitive Programming (ACM / ICPC) is a separate practice track under Understand Computing Deeply, not a job title. The guide combines a six-week learn → attempt → submit/debug → review/transfer loop with real-project practice. Shafaet's Planet and Amirul Islam's Bangla writing are curated starting references; their curricula and wording are not copied.

### Final-year project standards

`/guidance/final-year-project/` and its `/bn/` equivalent connect requirements, design decisions, small reviewed changes, CI, tests, security/privacy/accessibility, reproducibility and handover. Seven stages each include why, actions, readiness evidence, not-yet guidance and a scoped source. A worked requirement-to-release example and four project-type disclosures make the standard usable for software/mobile, research/ML, hardware/embedded and network/security projects. Department rubrics, supervisor decisions and ethics/safety requirements take priority; this is not accreditation or certification.

`src/data/final-year-project.ts` is the typed bilingual source, rendered by `FinalYearProject.astro`. The download endpoint `src/pages/downloads/[file].ts` produces real Markdown evidence templates in both languages; the route is explicitly exempted from the temporary-download Git ignore rule. Templates contain authoring prompts, not fabricated results or completed reports. Links live in roadmaps, engineering foundations, goal guides and the footer; the homepage gains no extra section. No checklist state, progress score or client framework is added.

`tests/content/project-and-infrastructure.test.ts` checks full bilingual content, family membership, tailored roadmaps and project-stage references. `tests/e2e/project-and-infrastructure.spec.ts` covers the three careers across four route types, comparison, downloads, equivalent language switching, no-JavaScript keyboard use and the five-width/two-theme/two-language matrix.

### Experiment authoring

Add a complete seed in `src/data/experiments.ts` or one of its focused imported experiment modules with timebox, prerequisites, experience goal, at least four steps, attention prompts, reflection prompts, and resource IDs. Security work must remain inside owned systems or deliberately vulnerable, explicitly authorized labs. No experiment stores responses or completion state.

### Add a learning resource

Add metadata in `src/data/resources.ts`: stable ID, provider, HTTPS URL, type, free-access status, bilingual recommended scope/reason, language availability, and review date. Prefer official documentation, respected university material, open courses, trusted labs, open books, and established practice platforms. Link to teaching; do not copy it.

## Themes and responsive design

`src/styles/tokens.css` contains semantic tokens for both themes. Components must not embed light/dark assumptions.

The visual mood follows `themes-sample.png`: cool off-white/navy in light mode, midnight navy in dark mode, and an editorial serif hero with system sans-serif body text. The CSE Compass name and compass mark remain the brand; the sample's artwork is not reused.

The refined vector identity uses an open circular C and directional needle with a restrained wordmark. `Logo.astro` and `public/favicon.svg` share the geometry; the mark remains legible in monochrome and both themes. The social card uses matching navy typography and restrained branching paths. The homepage begins “Free career guidance for CSE students” followed by the stronger student-problem-first punch line “You got into CSE. Now what?” The unclear “salary reel” expression remains retired. English remains default and Bangla is the only additional language; no third-language routes, fonts or fallbacks ship.

The homepage follows a focused orientation sequence: purpose-first illustrated hero/map → AI Reality → three starting intentions → concise misconceptions/mentor voices → eight career families → three primary experiment previews plus three expanding-path previews in a native disclosure → six-step useful loop → a practical, encouraging next step. `src/data/homepage.ts` supplies typed bilingual introduction, origin/purpose and entry copy. The hero distills the story into attraction to CSE, the cost of missing early orientation and a hopeful recovery: the visitor has not missed the chance to build direction. The localized About page carries the full, nonjudgmental story as attraction → orientation gap → drift/frustration → direction, followed by explicit Purpose and Goal panels and a note for independent or orientation-class use. The primary action jumps to choices for new/unsure students, career exploration and goal preparation; each goes directly to useful guidance. The six more-specific situations remain inside a native disclosure, with recovery encouragement always visible. The hero explains practical outcomes before navigation and puts the main action before artwork on phones. Section introductions answer student questions; career learning paths and goal preparation are explicitly distinguished. Additional mentor voices use a native disclosure; all seventeen complete experiments remain on the dedicated index. The experiment count is derived from data. Motivation is attached to realistic action, not promises or pressure. No new client JavaScript, dependency, route or personalization is needed.

Two original illustrations—a three-person computing team and an AI study partner—are imported from `src/assets/illustrations/` through Astro's responsive image pipeline. In the hero, a Chakma Bangladeshi woman with a QA checklist tablet stands between two teammates using laptops. One static scene keeps all three equally visible, without carousel motion, controls or JavaScript. Its intentional blue-gray editorial backdrop and theme-aware border preserve contrast in both themes; the supporting robot retains transparency. Preserve the full composition on phones without cropping any teammate. WebP variants, intrinsic dimensions, an eager hero and lazy supporting image keep them static and lightweight. See [illustration provenance, textile references and generation prompt](docs/illustrations.md).

All three teammates offer relaxed smiles toward the visitor, with personal space and visible technical activity. The seated woman wears a teal hoodie and an ivory orna covering her hair; the central QA teammate wears a cream blouse with a contemporary Chakma-textile-inspired shoulder cloth. This fictional character and activity do not prescribe careers by ethnicity or gender, and the illustration is not an authenticated traditional-costume reference. A technical-diagram notebook, coffee, water bottle and small indoor plant complete the desk. Review clothing, expressions, grounded props and coherent devices when replacing the artwork; automated loading and alt-text checks cannot judge these visual details. Ethnic representation does not add Chakma-language support: English and Bangla remain the only site languages.

Light is the default. Only an explicit theme and language choice may be stored in `localStorage`. The no-flash script applies theme before rendering. No roadmap, experiment, score, or profile state is stored.

Layouts are mobile-first. Comparison becomes labelled stacked records on narrow screens; roadmaps remain readable without pinch zoom. No essential interaction depends on hover.

The orientation map and useful loop explicitly group titles with captions. Breadcrumbs use the same container as the page heading and reset inherited list margins.

Global navigation is responsive but structurally consistent. At `68rem` and above, `Header.astro` becomes a fixed 16.75rem labeled sidebar containing five intent groups: Start here, Discover, Prepare, Future and About. Start here begins with explicit bilingual Home and Search destinations; its separate “Find my next step” link jumps to the homepage orientation choices without competing for the current-page marker. Learning Resources belongs to Prepare, not About. The shared `--sidebar-width` token offsets the page frame, so content never sits beneath the sidebar; the rail can scroll on short screens. Current routes receive `aria-current="page"` plus border/background emphasis. Below that breakpoint, the same links appear in a viewport-bounded native drawer beneath a compact sticky top bar. Its menu control is icon-only visually and retains a localized accessible name. It works without JavaScript, supports Escape-to-close when enhanced, and keeps language/theme controls outside the drawer. The footer is intentionally smaller: project purpose, final-year guidance, privacy, repository and provenance remain, while career navigation is not duplicated.

Career, experiment and roadmap indexes are grouped by the same eight families
and expose native jump links. The resource index uses four truthful resource-type
groups rather than labelling one global list as a single learning sequence.
Task-oriented indexes use a compact hero and finish with onward actions. The
English and Bangla `/search/` routes filter a typed static index in the browser;
query text is neither persisted nor included in analytics. Without JavaScript,
the search page still provides direct mentor-path links.

`tests/e2e/homepage-layout.spec.ts` protects section order, content density, illustrations, caption/breadcrumb geometry, progressive disclosure, breakpoint navigation continuity and no-JavaScript navigation. `tests/e2e/homepage-entry.spec.ts` follows all three intentions to useful guidance, checks bounded analytics and repeats keyboard navigation without JavaScript. Content-integrity tests protect bilingual introduction/entry data and the six preserved situations; accessibility tests cover the expanded disclosure. The responsive suite covers 320, 390, 768, 1280 and 1600px, verifies initial-viewport action visibility and waits for anchor scrolling to settle before capturing the entry section. Accessibility tests include English/Bangla and light/dark. A release also requires actual viewport-sized visual review, not only automated overflow checks.

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

`BaseLayout.astro` creates unique localized titles/descriptions, canonical URLs, equivalent `hreflang`, `x-default`, Open Graph (including alternate locale), X card metadata with image alt text, and WebSite JSON-LD. Career and goal detail pages add Article and breadcrumb structured data; career, experiment, roadmap, goal and resource indexes add accurate CollectionPage/ItemList and breadcrumb data. Search routes use `noindex, follow` and are excluded from the sitemap while their destination links remain crawlable.

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

CSE Compass was conceptually inspired by [roadmap.sh](https://roadmap.sh/) for structured role/skill navigation, [Architect Prep](https://mayurjp.github.io/architect-prep/) for focused technical navigation, and [Amirul Islam](https://amirulislamalmamun.com/) for staged, build-centred engineering roadmaps. Its visual system, content, mentoring model, roadmaps, and implementation are original.

**[Amjad Hossain](https://github.com/AmjadHossainRahat) — Creator & Orchestrator:** shaped the vision, finalized the requirements and design through extended discussions with ChatGPT, and directed implementation and refinement using Codex. His linked name opens the verified GitHub profile in a new tab on the site. **ChatGPT** assisted with requirement engineering and product/design planning. **Codex** was used to build the site and assist with tests, bug fixes and iteration. These acknowledgments do not imply affiliation or endorsement.

All three inspiration links and the three distinct contributions are visible in every page's footer. “Full credits” opens the localized `/about/#credits` or `/bn/about/#credits` section; About also has a direct jump link. Shared bilingual copy lives in `src/data/credits.ts`, with the creator's name in `src/config/site.ts`. Credits are static HTML, accessible without JavaScript, and add no dependency or tracking event.

See [the fresher UX review and safe repository cleanup](docs/ux-review.md) for evidence, prioritized recommendations and the distinction between this review and real-user testing. The obsolete lone-boy `mentor-guide.png` was removed; the active three-person and robot PNG masters and `themes-sample.png` are intentionally retained. Git history preserves the retired asset.

The repository is MIT licensed. Its community philosophy encourages improvements that preserve attribution and keep student-facing resources free. See [DESIGN.md](./DESIGN.md#36-conceptual-inspiration-and-provenance) and [LICENSE](./LICENSE).
