# CSE-Pothik

**Find your direction in CSE.**

CSE-Pothik is a fully static, bilingual career-navigation and mentoring website for Computer Science and Engineering students. It helps students understand the career landscape, compare real work, try small career experiments, follow foundation-first roadmaps, and prepare for changing AI task exposure.

English is the canonical/default language; natural Bangla routes live under `/bn/`.

## Product scope

### The future of CSE

`/future-of-cse/` and `/bn/future-of-cse/` publish a dated, AI-authored outlook
credited to **GPT-6 Astra (High)**. This is an evidence-based synthesis and
conditional forecast, not an official OpenAI position or a claim of certainty or
freedom from bias. The Future sidebar group, inline search and AI overview link
to it; the homepage is not lengthened. The original implementation credit to
GPT-5.6 Sol (High) remains separate.

Typed bilingual content in `src/data/future-of-cse.ts` supplies dated primary
sources, explicit study limits, three conditional scenarios and the actual
expanded editorial working prompt. `FutureOfCSE.astro` renders static essential
content, a section index, optional scenario/prompt detail, practical onward
routes, Article/Breadcrumb metadata and equivalent-language links through the
shared layout. No model API, hydration, account or additional dependency is used.
When revising the outlook, recheck source versions, geography and limits; update
both locales, the evidence-review date and the public working brief honestly.

The prompt section credits Amjad's direction and AI-assisted expansion/refinement.
It preserves the original drafting brief (v1) and offers a shorter, structured
reusable v2 with responsibility boundaries and research stopping criteria. v2 was
refined after drafting; it is not presented as the original prompt or a measured
token optimum. Model/effort selection happens in application settings. Reuse v2
alone rather than sending both historical versions.

CSE-Pothik includes:

- eight career families and seventeen detailed career guides, including Mobile App Development, UX/UI Engineering, Network Engineering, Hardware Engineering, Software QA & Testing, Data Analytics & BI, AI Engineering and Application Security;
- seven goal guides for global companies, Bangladesh industry, remote employment, study abroad, research/publication, freelancing and a tech business;
- career comparison for two or three paths;
- one safe, time-bounded experiment for every published career;
- a five-stage roadmap for every published career;
- curated free learning resources with scope and review metadata;
- task-based AI exposure and AI-resilience guidance;
- deterministic “I’m Lost” and starting-point navigation;
- bilingual inline top-bar search across career, roadmap, experiment, goal,
  guidance and resource content, without a separate route or query analytics;
- fresher and third/fourth-year recovery routes;
- competitive-programming / ACM / ICPC guidance;
- mentor-level software-engineering foundations;
- a complete final-year project standards guide with downloadable English/Bangla evidence templates;
- a first-software-role transition for final-semester students, recent graduates and other early-career entrants who already have a project or target;
- English/Bangla parity and light/dark theme parity.

It deliberately has no account, authentication, backend, database, profile, progress tracking, certificate, job promise, LMS behavior, fit score, streak, badge, or chatbot.

## Architecture

- [Astro](https://astro.build/) produces static HTML for every essential page.
- Strict TypeScript models stable, language-neutral content IDs.
- Small framework-free browser scripts handle theme, navigation, comparison, and analytics. Static prose is never hydrated.
- Typed content lives under `src/data/`; reusable editorial and page components live under `src/components/`.
- `src/data/navigation.ts` defines one bilingual problem-oriented navigation model and active-route matching for both desktop and mobile. Learning Resources sits under Prepare.
- The sticky breadcrumb context bar also owns inline search, language and theme controls on every page; search results never replace the current page.
- `src/data/search.ts` builds the bilingual search index from the same typed career, goal, experiment and resource sources used by the rendered pages.
- `src/config/site.ts` centralizes brand, locale, and routes.
- `src/lib/analytics.ts` is the analytics abstraction.
- Semantic CSS tokens provide designed light and dark themes.
- Vitest covers domain/content integrity; Playwright covers journeys and accessibility.
- Astro sitemap generation, a robots endpoint, canonical URLs, hreflang, Open Graph, social metadata, and JSON-LD provide the SEO layer. Editorial indexes expose CollectionPage/ItemList and breadcrumb schema; the inline search creates no indexable result routes.

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

### From an existing project to a first software role

`/guidance/first-software-role/` and its `/bn/` equivalent provide a generic bridge from an existing academic or personal project to internship, trainee and junior software applications. An early route chooser meets students at one of three current baselines: strong competitive problem solving, some but inconsistent problem solving, or little CP/low algorithm confidence. Strong competitors are shown how to preserve that advantage while adding practical engineering evidence; developing problem solvers build a bounded DSA baseline and project evidence in parallel; students with little CP practice receive credible paths through suitable frontend/UI, mobile, QA/testing, implementation/support and junior-development responsibilities without those roles being framed as easy back doors. Every route includes a minimum problem-solving floor and an explicit apply-when checkpoint.

Students can then enter at one of five current bottlenecks—project, presentation, interview, applications or feedback—and use the six-stage Target → Strengthen → Present → Practise → Apply → Improve loop. The guide treats CGPA as one supporting signal and ACM/ICPC as useful but optional evidence, not universal entry requirements. It explains that some local pipelines may weigh problem solving and OOP heavily, including for well-paid entry roles, without naming any employer or promising a result.

The shared typed content lives in `src/data/first-software-role.ts` and is rendered by `FirstSoftwareRole.astro` as static HTML with Article and BreadcrumbList structured data. It teaches one honest project improvement through issue, branch, test, review and release; three project walkthrough lengths; role-relevant interview practice; a private application log; and feedback diagnosis that changes one variable at a time. It does not fabricate teamwork, scrape vacancies, score users, store progress or promise employment. Exact-anchor links connect the route chooser to the homepage, navigation, search, situation/recovery paths, Competitive Programming, local-industry preparation, final-year guidance, employment goals and relevant software careers and roadmaps.

Content-integrity tests protect the guide’s bilingual structure, source and role relationships, and honesty/ACM/CGPA boundaries. Browser coverage checks discoverability, language switching, no-JavaScript access, responsive widths, both themes, both deployment base paths and accessibility-critical routes.

### AI-era homepage guidance

The first section after the homepage hero now answers the student's immediate AI anxiety with a static bilingual **Frame → Verify → Own** decision tree. It explains why core principles, analytical problem-solving, creativity, product context and accountable judgment become more valuable when code generation becomes cheap. A native disclosure compares a fresher working with thin AI context, rich team context they cannot yet review, and strong foundations plus bounded AI assistance. The examples discuss plausible review, defect, security, complexity and dependency costs without making universal productivity or job-safety claims.

To keep the homepage useful as a router, not a textbook, all eight career-family summaries remain visible while their individual paths are progressively disclosed; the six-step useful loop is also a native disclosure. Both work without JavaScript. The two original illustrations remain the visual anchors, with only restrained CSS micro-motion that is disabled by reduced-motion preferences.

### Bangladesh tech leaders and practitioners

The former anonymous “veteran voice” examples have been replaced by nine supplied public videos and podcast episodes from Bangladesh technology practitioners, leaders and educators. Two perspectives appear on the homepage; the complete sequence lives at `/resources/#industry-voices` and moves through **Ground yourself → Strengthen how you think → Read the working world**. Each item has typed English/Bangla editorial context, verified YouTube title/publisher metadata, a stable search anchor and bounded resource-click analytics.

The page explicitly treats speakers as perspectives rather than authorities or endorsements. A four-question advice filter asks students to inspect context, concrete trade-offs, corroboration and the next safe action. YouTube links open in a new tab; there are no embeds, autoplay requests, remote thumbnails or new client-side dependencies. `src/data/industry-voices.ts` is rendered by the shared `IndustryVoices.astro` component and covered by content-integrity, search, E2E, no-JavaScript and accessibility tests. The live `yarn check:external-links` audit includes this catalog alongside roadmap and guidance sources.

The visible eyebrow says **Bangladesh tech leaders & practitioners**, not “pioneers.” The broader wording recognizes experienced local voices without making a historical-pioneer claim about every speaker.

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

Local browser tests use the development server unless configured otherwise. CI and Pages deployment build first and set `PLAYWRIGHT_SERVER=preview`, so their browser and accessibility gates exercise the exact static artifact that can be deployed. Keep the same `BASE_PATH` and `SITE_URL` for build, verification and browser tests. Hostnames are compared using normal URL semantics, so GitHub's mixed-case account name and the lowercase canonical hostname are equivalent. For a project-Pages production check in PowerShell:

```powershell
$env:BASE_PATH = "/CSE-Pothik"
yarn build
yarn verify:build
$env:PLAYWRIGHT_SERVER = "preview"
yarn playwright test tests/e2e tests/accessibility
Remove-Item Env:PLAYWRIGHT_SERVER
Remove-Item Env:BASE_PATH
```

Content tests reject duplicate IDs, invalid slugs, missing bilingual copy, missing roadmap/experiment relationships, broken references, invalid exposure values, incomplete required sections, and malformed resource metadata. `verify:build` inspects the generated site for broken local URLs, duplicate titles/canonicals, missing SEO metadata, missing artifacts, and unfinished placeholder copy. External URLs are checked separately because remote availability can be transient. Restricted responses (401/403/405/429) are reported as `REVIEW`, not verified successes; they do not fail CI as confirmed broken links would.

## Content architecture

Published entities use stable language-neutral IDs. Localized copy uses `{ en, bn }` fields so route parity and required translations can be validated. Core types in `src/types/content.ts` include `CareerFamily`, `Career`, `Roadmap`, `RoadmapStage`, `CareerExperiment`, `LearningResource`, `AITaskExposure`, `StudentSituation`, `GoalGuide`, `GoalStage`, `FirstRoleGuide`, and `GuidanceSource`.

Language implementation combines shared resources and separate generated HTML: typed bilingual data/UI copy and shared Astro templates are the source; thin English and `/bn/` route wrappers select the locale at build time. We do not maintain two hand-written HTML copies of each page or translate essential content in the browser. Some page-specific editorial copy is colocated as English/Bangla pairs inside the shared template.

English is the canonical editorial source. Bangla is edited as original conversational mentoring copy for Bangladeshi CSE students, not translated word-for-word. It consistently addresses the student as `আপনি`, favors familiar spoken sentence order and translates ordinary interface scaffolding instead of leaving labels such as “Guidance” or “Next step” in English. Technical terms such as API, Git, Backend, Docker, SOLID, Design Pattern, Machine Learning, DevOps, and Cybersecurity remain in English when that is clearer and more natural than an invented synonym. Humor is occasional and situational; it never mocks a student's anxiety, background or pace.

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

### Software engineering foundations in the AI era

`SoftwareFoundations.astro` presents Clean Code, Code Smells, Refactoring, Defensive Programming, SOLID Principles, Design Principles, Design Patterns, testing and architectural boundaries as a practical review sequence. Every topic explains its ordinary purpose, its distinct AI-era pressure, when to learn it, enough-for-now depth, one exercise and one misuse to avoid. A compact five-lens navigator keeps Clean Code, Code Smells, SOLID, Design Patterns and Defensive Programming easy to find without adding another global route or homepage section.

The focused Clean Code, Code Smells and Design Patterns references are separate typed entries in `src/data/resources.ts`; `refactoring-guru` remains the stable ID used by existing roadmap relationships. All three render with scoped English/Bangla advice, safe new-tab behavior and bounded resource-click analytics. Career roadmaps include clean code and defensive boundaries in their shared professional-engineering stage, and the bilingual static search indexes all five concepts.

### Add or change a roadmap

Roadmaps are generated from career learning layers in `src/data/roadmaps.ts`. Every stage must explain intent, topics, “enough for now,” one practical task, what not to learn yet, and a small Learn → Practice → Go Deeper resource set. Do not turn a roadmap into a technology checklist.

Mobile and UX/UI have contextual stage overrides: mobile addresses platform choice, state, persistence and release safety; UX/UI addresses research, accessible interactions and reusable components. `ResourceList` has an alternatives mode so mobile platforms are labelled as choices, not sequential Learn/Practice/Go Deeper levels or a requirement to learn four stacks. UX/product design, UI engineering and broader frontend development are distinguished in the career copy.

Data Analytics & BI, AI Engineering and Application Security use `specialist-roadmaps.ts` so their professional evidence is metric lineage and decision communication, evaluated/releasable AI behavior, or authorized risk remediation—not generic browser-code refactoring. Their complete career and experiment seeds live in `specialist-careers.ts` and `specialist-experiments.ts`.

### Goal guides: where skills lead

`/roadmaps/` offers **By career** (what to learn) and **By goal** (how to apply it). `/goals/` groups seven complete guides into industry, academic and independent paths. Every route has a `/bn/` equivalent. Goal preparation is one of the homepage's three starting intentions and appears under the global **Prepare** navigation group beside roadmaps and the final-year project. Career/roadmap pages and “I’m Lost” provide contextual entry points.

`src/data/goals.ts` combines typed modules under `src/data/goals/`. Add a goal ID, complete localized content, branches, four stages (`foundation`, `evidence`, `application`, `adapt`), pitfalls, responsible AI use, a concrete action this week, related goals and curated career IDs. Each stage needs why, practical tasks, enough-for-now evidence, what not to do yet and a source reference. `GoalDetail.astro` renders the shared static template; desktop has a sticky section index and mobile has a native disclosure. Essential guidance is always rendered, including with JavaScript disabled. No state, assessment, deadline promise or completion tracking is added.

`src/data/guidance-sources.ts` holds dated, scoped references to official hiring, admission, research and business guidance. These are **not** `LearningResource.isFree` entries: reading a reference may be free while applications, tests, tools, publishing or participation have costs. The guide is our editorial synthesis, not an employer/university endorsement. Recheck changing requirements before revising claims, especially NASA eligibility, work authorization, admission/funding and venue AI policies. `yarn check:external-links` covers learning resources, guidance sources and the industry-voices catalog.

`tests/content/goals.test.ts` validates all seven guides, language completeness and relationships. `tests/e2e/goal-guidance.spec.ts` checks routes, new careers, journey links, no-JavaScript keyboard navigation, language equivalents and the five-width/two-language/two-theme layout matrix.

### Network, hardware and QA authoring

Network Engineering belongs to Run Systems; Hardware Engineering belongs to Work Close to Hardware; Software QA & Testing belongs to Build Software. These are complete career graphs, not aliases for security, embedded programming or frontend work. `infrastructure-roadmaps.ts` supplies role-specific tasks/evidence and professional practices; `infrastructure-experiments.ts` supplies authorized loopback, simulated logic and owned-app testing exercises. Curated goal connections preserve role relevance. Paid certificates, physical hardware and hosted services are not prerequisites for the starter experiments.

### Data, AI and application-security expansion

The seventeen-career landscape now includes Data Analytics & BI under Work With Data, AI Engineering under Build Intelligence, and Application Security under Protect Systems. Analytics is distinguished from pipeline ownership, AI engineering from ML modelling/research, and application security from broad security operations. All three participate in comparison, five-stage roadmaps, experiments, AI task exposure, goals and English/Bangla routes. The homepage retains three fast representative experiments and offers the three expanding paths in a native disclosure; the complete index remains the source of truth.

Competitive Programming (ACM / ICPC) is a separate practice track under Understand Computing Deeply, not a job title. The guide combines a six-week learn → attempt → submit/debug → review/transfer loop with real-project practice. Shafaet's Planet and Amirul Islam's Bangla writing are curated starting references; their curricula and wording are not copied.

### Final-year project standards

`/guidance/final-year-project/` and its `/bn/` equivalent connect requirements, design decisions, small reviewed changes, CI, tests, security/privacy/accessibility, reproducibility and handover. Seven stages each include why, actions, readiness evidence, not-yet guidance and a scoped source. A worked requirement-to-release example and four project-type disclosures make the standard usable for software/mobile, research/ML, hardware/embedded and network/security projects. Department rubrics, supervisor decisions and ethics/safety requirements take priority; this is not accreditation or certification.

`src/data/final-year-project.ts` is the typed bilingual source, rendered by `FinalYearProject.astro`. Explicit `.md.ts` endpoints under `src/pages/downloads/` produce real Markdown evidence templates in both languages at stable extension-bearing URLs; unlike a generic dynamic route, they behave identically under Astro dev, production preview and GitHub Pages. The endpoints are explicitly exempted from the temporary-download Git ignore rule. Templates contain authoring prompts, not fabricated results or completed reports. Links live in roadmaps, engineering foundations, goal guides and the footer; the homepage gains no extra section. No checklist state, progress score or client framework is added.

`tests/content/project-and-infrastructure.test.ts` checks full bilingual content, family membership, tailored roadmaps and project-stage references. `tests/e2e/project-and-infrastructure.spec.ts` covers the three careers across four route types, comparison, downloads, equivalent language switching, no-JavaScript keyboard use and the five-width/two-theme/two-language matrix.

### Experiment authoring

Add a complete seed in `src/data/experiments.ts` or one of its focused imported experiment modules with timebox, prerequisites, experience goal, at least four steps, attention prompts, reflection prompts, and resource IDs. Security work must remain inside owned systems or deliberately vulnerable, explicitly authorized labs. No experiment stores responses or completion state.

### Add a learning resource

Add metadata in `src/data/resources.ts`: stable ID, provider, HTTPS URL, type, free-access status, bilingual recommended scope/reason, language availability, and review date. Prefer official documentation, respected university material, open courses, trusted labs, open books, and established practice platforms. Link to teaching; do not copy it. Shared renderers open outbound resources and guidance sources in a new tab with `noopener noreferrer` and an external-link indicator; internal CSE-Pothik navigation remains in the current tab. Generated-output verification rejects an unsafe or same-tab outbound anchor.

The books/articles group includes _The Accidental CTO_ as optional, story-driven reading after basic backend and systems foundations. Its scope asks students to compare scaling, reliability and leadership trade-offs rather than copy a universal architecture recipe.

## Themes and responsive design

`src/styles/tokens.css` contains semantic tokens for both themes. Components must not embed light/dark assumptions.

The visual mood follows `themes-sample.png`: cool off-white/navy in light mode, midnight navy in dark mode, and an editorial serif hero with system sans-serif body text. The CSE-Pothik name and compass-C mark form the brand; the sample's artwork is not reused.

The refined vector identity uses an open circular C and directional needle beside the CSE-Pothik wordmark. `Logo.astro` and `public/favicon.svg` share the geometry; the mark remains legible in monochrome and both themes. The social card uses matching navy typography and restrained branching paths. The homepage begins “Free career guidance for CSE students” followed by the stronger student-problem-first punch line “You got into CSE. Now what?” The unclear “salary reel” expression remains retired. English remains default and Bangla is the only additional language; no third-language routes, fonts or fallbacks ship.

The homepage follows a focused orientation sequence: purpose-first illustrated hero/map → AI Reality → three starting intentions → concise misconceptions/mentor voices → eight career families → three primary experiment previews plus three expanding-path previews in a native disclosure → six-step useful loop → a practical, encouraging next step. `src/data/homepage.ts` supplies typed bilingual introduction, origin/purpose and entry copy. The hero distills the story into attraction to CSE, the cost of missing early orientation and a hopeful recovery: the visitor has not missed the chance to build direction. The localized About page carries the full, nonjudgmental story as promise → orientation gap → urgent search → practical recovery. It recognizes the late-graduation question often asked in social-media groups without criticizing help-seeking, then turns panic into one evidence-producing next step. Explicit Purpose and Goal panels and a note for independent or orientation-class use follow. The primary action jumps to choices for new/unsure students, career exploration and goal preparation; each goes directly to useful guidance. The six more-specific situations remain inside a native disclosure, with recovery encouragement always visible. The hero explains practical outcomes before navigation and puts the main action before artwork on phones. Section introductions answer student questions; career learning paths and goal preparation are explicitly distinguished. Additional mentor voices use a native disclosure; all seventeen complete experiments remain on the dedicated index. The experiment count is derived from data. Motivation is attached to realistic action, not promises or pressure. No new client JavaScript, dependency, route or personalization is needed.

Two original illustrations—a three-person computing team and an AI study partner—are imported from `src/assets/illustrations/` through Astro's responsive image pipeline. In the hero, a Chakma Bangladeshi woman with a QA checklist tablet stands between two teammates using laptops. One static scene keeps all three equally visible, without carousel motion, controls or JavaScript. Its intentional blue-gray editorial backdrop and theme-aware border preserve contrast in both themes; the supporting robot retains transparency. Preserve the full composition on phones without cropping any teammate. WebP variants, intrinsic dimensions, an eager hero and lazy supporting image keep them static and lightweight. See [illustration provenance, textile references and generation prompt](docs/illustrations.md).

All three teammates offer relaxed smiles toward the visitor, with personal space and visible technical activity. The seated woman wears a teal hoodie and an ivory orna covering her hair; the central QA teammate wears a cream blouse with a contemporary Chakma-textile-inspired shoulder cloth. This fictional character and activity do not prescribe careers by ethnicity or gender, and the illustration is not an authenticated traditional-costume reference. A technical-diagram notebook, coffee, water bottle and small indoor plant complete the desk. Review clothing, expressions, grounded props and coherent devices when replacing the artwork; automated loading and alt-text checks cannot judge these visual details. Ethnic representation does not add Chakma-language support: English and Bangla remain the only site languages.

Light is the default. Only an explicit theme and language choice may be stored in `localStorage`. The no-flash script applies theme before rendering. No roadmap, experiment, score, or profile state is stored.

Layouts are mobile-first. Comparison becomes labelled stacked records on narrow screens; roadmaps remain readable without pinch zoom. No essential interaction depends on hover.

The orientation map and useful loop explicitly group titles with captions. Breadcrumbs use the same container as the page heading and reset inherited list margins.

Global navigation is responsive but structurally consistent. At `68rem` and above, `Header.astro` renders a fixed 16.75rem labeled sidebar containing five intent groups: Start here, Discover, Prepare, Future and About. Start here begins with explicit bilingual Home; its separate “Find my next step” link jumps to the homepage orientation choices without competing for the current-page marker. Learning Resources belongs to Prepare, not About. The page frame is offset by the sidebar token, the rail can scroll on short screens, and current routes receive `aria-current="page"` plus border/background emphasis. Below that breakpoint, the same links appear in a viewport-bounded native drawer beneath a compact sticky brand/menu header. The drawer works without JavaScript and supports Escape-to-close when enhanced. The footer is intentionally smaller: project purpose, final-year guidance, privacy, repository, provenance and a voluntary feedback invitation remain, while career navigation is not duplicated.

Every page uses one shared sticky context bar. Breadcrumbs occupy its left side; the same bar contains site search, language and theme controls on the right. Desktop search exposes its text field and submit button. On mobile/tablet, its labelled magnifier opens the field and results within the same bar so the locator row stays compact. Search filters the typed bilingual index locally, never persists or tracks the query, and shows up to ten internal results without changing route. There are no standalone search pages. The bar sits at the viewport top on desktop and below the compact mobile header; the no-JavaScript fallback moves it to the viewport top when that header becomes non-sticky. It retains Home and parent context while truncating only an oversized current-page label, gives exactly one item `aria-current="page"`, and preserves hash-target clearance.

The shared desktop canvas grows to 100rem after the 16.75rem sidebar, keeping ordinary 32px gutters through common 1280–1920px displays instead of centering the site in an unnecessarily narrow column. Top-level sections and responsive grids use that canvas; prose retains a separate readable line measure. Search, language and theme are explicitly end-aligned as one control group.

Career, experiment and roadmap indexes are grouped by the same eight families
and expose native jump links. The resource index uses four truthful resource-type
groups rather than labelling one global list as a single learning sequence.
Task-oriented indexes use a compact hero and finish with onward actions. The
typed bilingual search index covers careers, roadmaps, experiments, goals,
guidance and resources. Filtering happens in the browser; query text is neither
persisted nor included in analytics. With JavaScript disabled, essential routes
remain available through the bilingual navigation while the nonfunctional search
control is omitted.

`tests/e2e/homepage-layout.spec.ts` protects section order, content density, illustrations, caption/breadcrumb geometry, progressive disclosure, breakpoint navigation continuity and no-JavaScript navigation. `tests/e2e/homepage-entry.spec.ts` follows all three intentions to useful guidance, checks bounded analytics and repeats keyboard navigation without JavaScript. Content-integrity tests protect bilingual introduction/entry data and the seven preserved situations; accessibility tests cover the expanded disclosure. The responsive suite covers 320, 390, 768, 1280 and 1600px, verifies initial-viewport action visibility and waits for anchor scrolling to settle before capturing the entry section. Accessibility tests include English/Bangla and light/dark. A release also requires actual viewport-sized visual review, not only automated overflow checks.

`tests/e2e/spacing-and-layout.spec.ts` visits every English and Bangla public UI route at the desktop breakpoint to catch overflow, out-of-frame top-level containers, breadcrumb/hero misalignment and top sections that fail to use both desktop columns. Shared heroes pair the title with supporting copy, actions or context; already-composed career/experiment heroes retain their contextual panels. The test also protects the “I’m Lost” state transition: before a choice, the chooser uses the full container in two columns; after a choice, the explanation panel receives a real second column. Mobile stays single-column.

The same layout suite protects the AI task-model spectrum at the 1088, 1280 and 1600px desktop widths: **Higher exposure → AI-assisted → responsibility-heavy** must remain one line without overflow in English and Bangla. At 390px it may wrap naturally, but it must stay inside the viewport.

## Analytics and privacy

Analytics is disabled unless `PUBLIC_GA_MEASUREMENT_ID` exists at build time. The GitHub Pages production workflow defaults to `G-6GR5VBYXEQ` and permits a repository variable with the same name to override it; local and test builds remain analytics-free unless the variable is deliberately provided:

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

Parameters are bounded scalar IDs. Do not add names, emails, free text, sensitive data, profiles, or hidden user IDs. Google Signals is disabled. The public privacy page explains local preferences, aggregate analytics, external-resource policies and the separately operated feedback form.

`career_viewed` and `roadmap_viewed` fire once on the destination page, including direct and homepage-family visits. Links use `next_step_clicked` instead of duplicating view events. The analytics integration test captures calls with a local stub and blocks Google requests; it does not claim delivery to a live GA4 property.

## Feedback

Every page ends with a quiet, bilingual invitation to use the voluntary [CSE-Pothik feedback form](https://forms.gle/ZKyHbR9MHoebFbnWA). It opens Google Forms in a new tab rather than interrupting reading with a popup, embed or floating control. The site may count the link click as `next_step_clicked` with the bounded destination `feedback-form`; it never sends the response or free text to GA4. The privacy page makes the provider boundary explicit.

## SEO

`BaseLayout.astro` creates unique localized titles/descriptions, canonical URLs, equivalent `hreflang`, `x-default`, Open Graph (including alternate locale, image type, dimensions and localized alt text), X card metadata, and WebSite JSON-LD. The root URL deliberately previews the purpose-first homepage with “CSE-Pothik — Find Your Direction in CSE” and its free-guidance outcome; localized deep links keep their own page metadata. Career and goal detail pages add Article and breadcrumb structured data; career, experiment, roadmap, goal and resource indexes add accurate CollectionPage/ItemList and breadcrumb data. Inline search does not create query URLs or separate pages, so only its crawlable editorial destinations enter the sitemap.

The build produces static essential content, `sitemap-index.xml`, base-aware `robots.txt`, the project social card at `public/social/cse-pothik-og.png`, an SVG favicon, and directory-format trailing-slash URLs. Every new primary route needs an equivalent under `src/pages/bn/` and localized metadata.

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

`.github/workflows/ci.yml` runs immutable installation, formatting, lint, type checking, tests, the production build, generated-output verification, bundle inspection, and browser/accessibility tests against that built artifact. Every push to `main` triggers `.github/workflows/deploy-pages.yml`; it repeats the same release gates with the repository's current name as the GitHub Pages base path and the configured production GA4 measurement ID, uploads only the tested `dist/`, and deploys it to GitHub Pages. A failed check prevents deployment. In the repository's **Settings → Pages**, select **GitHub Actions** as the publishing source once.

## Contribution workflow

1. Read `DESIGN.md` and `SKILL.md`.
2. Make content and code changes together when relationships change.
3. Preserve English/Bangla and light/dark parity.
4. Run the complete relevant quality suite.
5. Inspect the result on mobile and desktop before publishing.

## Attribution and community use

CSE-Pothik was conceptually inspired by [roadmap.sh](https://roadmap.sh/) for structured role/skill navigation, [Architect Prep](https://mayurjp.github.io/architect-prep/) for focused technical navigation, and [Amirul Islam](https://amirulislamalmamun.com/) for staged, build-centred engineering roadmaps. Its visual system, content, mentoring model, roadmaps, and implementation are original.

**[Amjad Hossain](https://amjadhossainrahat.github.io/) — Creator & Orchestrator:** shaped the vision, finalized the requirements and design through extended discussions with ChatGPT, and directed implementation and refinement using Codex. His linked name opens his intended GitHub Pages portfolio in a new tab; the canonical link is retained even while that separate portfolio site is not yet published. **ChatGPT** assisted with requirement engineering and product/design planning. **Codex using GPT-5.6 Sol (High)** was used to build the site and assist with tests, bug fixes and iteration. These acknowledgments do not imply affiliation or endorsement.

All three inspiration links and the three distinct contributions are visible in every page's footer. “Full credits” opens the localized `/about/#credits` or `/bn/about/#credits` section; About also has a direct jump link. Shared bilingual copy lives in `src/data/credits.ts`, with the creator's name in `src/config/site.ts`. Credits are static HTML, accessible without JavaScript, and add no dependency or tracking event.

See [the fresher UX review and safe repository cleanup](docs/ux-review.md) for evidence, prioritized recommendations and the distinction between this review and real-user testing. The obsolete lone-boy `mentor-guide.png` was removed; the active three-person and robot PNG masters and `themes-sample.png` are intentionally retained. Git history preserves the retired asset.

The repository is MIT licensed. Its community philosophy encourages improvements that preserve attribution and keep student-facing resources free. See [DESIGN.md](./DESIGN.md#36-conceptual-inspiration-and-provenance) and [LICENSE](./LICENSE).

## AI systems learning path

The AI Engineering roadmap contains a concept-first bridge from a clearly specified problem to a dependable system: forward engineering and a deterministic baseline → testable prompt contract → grounded retrieval/RAG → visible workflow orchestration → one bounded agent loop → production evaluation, guardrails and rollback. The AI overview links directly to this section, and static English/Bangla search indexes it by Agentic AI, AI workflow, n8n, OpenClaw, RAG, AGI, Prompt Engineering, Forward Engineering and agent loop.

Product names are deliberately secondary to capabilities. n8n is introduced as one way to implement a known workflow; OpenClaw is introduced after bounded agency and production controls, with its host/tool/credential trust boundary made explicit. Multi-agent systems wait for a measured coordination problem, and AGI is identified as a changing research horizon rather than a framework or beginner prerequisite. The starting exercise uses harmless owned documents, sourced answers, refusal and a read-only tool so students can produce evidence without paid infrastructure or unsafe permissions.

The AI hub’s “A path for builders” bridge and the roadmap’s “First project” bridge use a compact action-panel pattern: restrained heading scale, a clear explanation/CTA group and two balanced desktop columns that collapse to one natural mobile column. Shared callout headings have a global measure and responsive-size guard so short supporting panels do not inherit page-hero typography.

The “I’m Lost” flow also offers a direct, progressively enhanced route to the ordered nine-item Bangladesh technology watchlist. The watchlist title uses the full desktop heading measure while continuing to wrap naturally on mobile.
