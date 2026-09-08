# CSE Compass — SKILL.md

> **Purpose:** Engineering and implementation instructions for building the complete static CSE Compass website defined in `DESIGN.md`.

---

## 1. Authority and Priority

Before implementation, read `DESIGN.md` completely.

Treat `DESIGN.md` as the authoritative product, UX, visual, content and interaction specification.

When there is tension between convenience and the documented product intent:

1. preserve the product intent;
2. preserve accessibility;
3. preserve static hosting compatibility;
4. preserve maintainability;
5. choose the simplest implementation that satisfies all requirements.

Do not silently remove or weaken a documented experience because it is harder to implement.

---

## 2. Product Constraints

The finished system must be:

- fully static;
- deployable to GitHub Pages;
- usable without authentication;
- usable without a backend;
- usable without a database;
- usable without server-side application APIs;
- bilingual: English default, Bangla optional;
- light-theme default with optional dark theme;
- responsive;
- accessible;
- SEO-friendly;
- content-driven;
- fast on mobile;
- straightforward to maintain.

Do not add:

- login/logout;
- accounts;
- profile storage;
- progress tracking;
- achievements;
- streaks;
- badges;
- user databases;
- server functions;
- server-only rendering requirements;
- unnecessary client-side state;
- a chatbot as a replacement for designed navigation.

---

## 2.1 Brand Constants

Treat **CSE Compass** as the official product name.

Centralize brand metadata instead of scattering literal strings across pages.

Recommended shape:

```ts
export const siteConfig = {
  name: "CSE Compass",
  tagline: "Find your direction in CSE.",
  description: "A practical career compass for CSE students in the AI era.",
} as const;
```

Use the central configuration for:

- document titles;
- default metadata;
- Open Graph data;
- header/footer wordmark text;
- structured data where applicable;
- social-card generation;
- accessibility labels where the product name is required.

Do not rename the product independently inside components or translations.

The public brand name stays `CSE Compass` in Bangla pages; only surrounding copy is localized.

---

## 3. Technology Baseline

Use:

- **Astro** as the primary framework;
- **TypeScript** with strict type checking;
- **React** only for interactive islands that justify hydration;
- **Yarn only** for package management and scripts;
- Markdown/MDX and/or typed TypeScript/JSON content;
- GitHub Actions;
- GitHub Pages;
- Google Analytics 4 through a small analytics abstraction.

Do not use npm commands or commit `package-lock.json`.

### 3.1 Dependency policy

At project initialization:

- use the latest stable production releases;
- do not use prerelease dependencies without a documented reason;
- pin exact dependency versions through the lockfile;
- pin the Yarn version using the `packageManager` field;
- commit `yarn.lock`;
- enable Corepack;
- use `yarn install --immutable` in CI.

Avoid dependencies when browser/platform capabilities or small internal utilities are sufficient.

---

## 4. Repository Shape

Recommended baseline:

```text
/
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy-pages.yml
├── public/
│   ├── favicon/
│   ├── images/
│   ├── illustrations/
│   └── social/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── common/
│   │   ├── navigation/
│   │   ├── mentor/
│   │   ├── careers/
│   │   ├── roadmap/
│   │   ├── experiments/
│   │   ├── comparison/
│   │   ├── ai/
│   │   └── analytics/
│   ├── content/
│   │   ├── en/
│   │   └── bn/
│   ├── data/
│   │   ├── career-families.ts
│   │   ├── comparison-dimensions.ts
│   │   ├── student-situations.ts
│   │   └── navigation-paths.ts
│   ├── layouts/
│   ├── pages/
│   │   ├── bn/
│   │   └── ...
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── global.css
│   │   └── utilities.css
│   ├── lib/
│   │   ├── analytics/
│   │   ├── i18n/
│   │   ├── theme/
│   │   ├── seo/
│   │   ├── search/
│   │   └── content/
│   └── types/
├── tests/
│   ├── unit/
│   ├── content/
│   ├── accessibility/
│   └── e2e/
├── astro.config.*
├── tsconfig.json
├── package.json
├── yarn.lock
├── DESIGN.md
├── SKILL.md
└── README.md
```

Adapt only where the framework or implementation clearly benefits. Keep boundaries understandable.

---

## 5. Rendering Strategy

Default to static Astro rendering.

Use React only when interaction cannot be achieved cleanly with Astro/HTML/CSS or minimal browser TypeScript.

Good candidates for React islands:

- career comparison selector;
- “Where are you right now?” decision navigator;
- “I’m Lost” guided chooser;
- interactive career-fit exploration;
- client-side search if a static solution requires it;
- dynamic filtering;
- scenario/answer reveal interactions.

Do **not** hydrate:

- static article content;
- normal navigation;
- roadmap prose;
- mentor notes;
- static cards;
- footer;
- headings;
- learning-resource lists.

The default question must be:

> Can this ship as HTML?

If yes, do not add client JavaScript.

---

## 6. Routing

Use clean, meaningful, static routes.

Indicative English routes:

```text
/
/careers/
/careers/backend-engineering/
/careers/cybersecurity/
/compare/
/try/
/try/backend/
/roadmaps/
/roadmaps/backend-engineering/
/ai/
/ai/backend-engineering/
/im-lost/
/guidance/new-cse-student/
/guidance/feel-behind/
/resources/
```

Bangla equivalents should live under:

```text
/bn/...
```

The route structure should remain semantically parallel across languages.

Do not put language selection into query strings.

---

## 7. Internationalization

Implement lightweight static i18n.

Requirements:

- English is the source/default route;
- Bangla equivalent routes exist under `/bn/`;
- language switch sends the user to the equivalent page;
- page metadata is localized;
- HTML `lang` is correct;
- hreflang links are generated where relevant;
- missing translation handling is explicit.

Do not rely on runtime machine translation.

### 7.1 Content IDs

Use stable language-neutral IDs:

```ts
type CareerId =
  | "backend-engineering"
  | "cybersecurity"
  | "data-engineering"
  | "machine-learning";
```

Localized content maps to the same ID.

This is essential for:

- equivalent-route switching;
- comparisons;
- analytics;
- cross-language navigation.

### 7.2 Bangla quality

Bangla must be reviewed as original human-facing copy.

Technical terms may remain in English where natural.

Do not mechanically translate every noun.

Use a consistent, respectful `তুমি` voice throughout student-facing copy. Prefer conversational Bangla sentence structure, not English word order with Bangla suffixes. Translate ordinary interface scaffolding and mentoring labels; keep established technical terms in English only when students naturally use them or precision would otherwise suffer. Review long-form Bangla independently from its English pair and read representative passages aloud. Humor must be occasional, kind and attached to a useful point—never to a student's anxiety, identity, finances, language skill, CGPA or time already lost.

Content integrity must guard recurring shared labels against regression to English-only Bangla branches and must reject accidental formal-pronoun drift in representative mentoring surfaces.

---

## 8. Theme Architecture

Implement semantic design tokens with CSS custom properties.

Example:

```css
:root {
  --color-bg: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-primary: ...;
  --color-accent-warm: ...;
  --color-border: ...;
}

[data-theme="dark"] {
  --color-bg: ...;
  --color-surface: ...;
  --color-text: ...;
  --color-text-muted: ...;
  --color-primary: ...;
  --color-accent-warm: ...;
  --color-border: ...;
}
```

Components must consume semantic tokens rather than hard-coded light/dark values.

### 8.1 Theme behavior

Priority:

1. stored local choice;
2. otherwise light.

Store only the theme preference locally.

Do not use this as user “progress.”

Prevent flash of the incorrect theme before hydration.

### 8.2 Dark-theme quality gate

Manually verify:

- illustration silhouette;
- hoodie/clothing contrast;
- AI/robot visual contrast;
- card borders;
- input boundaries;
- focus rings;
- icons;
- muted text;
- disabled states;
- charts/diagrams if any.

Nothing important should merge into the background.

---

## 9. Design System

Create a reusable design system before multiplying pages.

Define:

- spacing scale;
- type scale;
- layout widths;
- breakpoints;
- radii;
- shadows;
- semantic colors;
- career category accents;
- focus state;
- transition timing;
- surface variants.

Avoid dozens of near-identical card components.

Recommended primitives:

- `Container`
- `Section`
- `SectionHeader`
- `Button`
- `TextLink`
- `Tag`
- `Callout`
- `MentorNote`
- `RealityCheck`
- `PlotTwist`
- `CareerCard`
- `CareerFamilyCard`
- `ExperimentCard`
- `RoadmapStage`
- `ResourceLink`
- `ComparisonMatrix`
- `NextSteps`
- `LanguageSwitch`
- `ThemeSwitch`

Prefer composition to giant configurable components.

---

## 9.1 Brand Asset Implementation

Create an original, minimal brand mark for **CSE Compass** or leave the architecture ready for the final approved mark.

Requirements:

- SVG-first;
- readable at small sizes;
- monochrome-capable;
- theme-aware through semantic colors;
- usable as favicon/app icon/social mark;
- no dependency on a raster-only logo;
- no copied icon or logo from inspiration sites;
- no generic AI robot/brain/circuit mark as the core logo.

If the final brand artwork is not yet approved, use a clean temporary typographic wordmark rather than inventing a complex logo that becomes coupled to the layout.

---

## 10. Homepage Implementation

Implement the homepage sections in the order and spirit defined in `DESIGN.md`.

Required sections:

1. Shared responsive navigation with the `CSE Compass` wordmark/brand mark, language switch and theme switch: a persistent labeled sidebar on wide screens and a compact header plus grouped native drawer on phones/tablets.
2. Purpose-first illustrated hero: free CSE career guidance, the “You got into CSE. Now what?” punch line, a concise attraction → orientation gap → hopeful recovery story, clear outcomes and a prominent next-step action; preserve the future-self note and four-stop orientation map.
3. AI reality / resilience section immediately after the hero, with the original AI study-partner illustration, a visible Frame → Verify → Own decision tree and a progressively disclosed three-outcome fresher scenario.
4. Three visible starting intentions, a compact final-semester/first-role bridge and seven detailed situations in a native disclosure, with recovery encouragement.
5. Concise misconceptions paired with two verified Bangladesh-technology video perspectives and a link to the complete ordered nine-item watchlist.
6. Career landscape reveal: all eight family summaries remain visible, while their individual paths use native per-family disclosure; no duplicated featured-career grid.
7. Practical, non-shaming encouragement woven through these sections.
8. “Try before you choose”: three immediately visible representative previews plus Data Analytics & BI, AI Engineering and Application Security in a native disclosure, linking to the full published experiment index (currently seventeen); derive the displayed count from data.
9. Understand → Explore → Compare → Try → Prepare → Adapt journey in native static disclosure.
10. Closing orientation message and next-step CTA.
11. Footer with product links, language/theme support, privacy and attribution/inspiration references as appropriate.

The homepage must not be reduced to a hero plus generic feature-card grid.

Keep the opening AI lesson concise but substantive. Source its English/Bangla message, three decision steps, three scenario outcomes and scoped evidence IDs from typed homepage data. Frame decisions around problem/constraints, verification and accountable trade-offs. Treat thin model context and rich team context without reviewer understanding as different risks; the constructive path combines strong foundations with bounded AI assistance, evidence and escalation. Never claim AI is always slower, imply unlimited tokens replace judgment, or present SOLID/design patterns as a universal checklist or hiring requirement. Link to the full AI and engineering-foundations guides.

Reduce initial scroll without deleting discovery: individual career links and the six-step loop remain in native HTML disclosures usable without JavaScript. Keep all eight family names/descriptions visible. Use the existing inclusive team and AI study-partner illustrations rather than decorative stock images. A restrained CSS-only AI signal may animate, but global reduced-motion handling must disable it.

Store the supplied local-industry video/podcast curation in typed `src/data/industry-voices.ts`, separate from roadmap learning-resource prerequisites. Render the same data through a shared static Astro component: two contextual homepage previews and the complete `/resources/#industry-voices` sequence grouped as Ground yourself → Strengthen how you think → Read the working world. Verify YouTube titles/publishers before authoring; do not infer unverified biographies. Give every item bilingual editorial context, a stable ID, sequence position and review date. Use native disclosure, searchable internal anchors, safe new-tab links and the existing bounded `learning_resource_clicked` event. Do not add embeds, autoplay, remote thumbnails, a client framework or hydration. Accessibility coverage must expand all stages in English/Bangla and both themes; E2E must protect exact URL/order, homepage-to-list discovery, no-JavaScript access, narrow-screen containment and GitHub Pages bases.

Use `themes-sample.png` for visual mood, while retaining the CSE Compass brand and original art. Source illustrations live in `src/assets/illustrations/`; import through `astro:assets` to generate responsive WebP and reserve intrinsic dimensions. Eager-load the hero with high fetch priority, lazy-load the supporting AI illustration, and avoid new client-side image libraries. Keep generation provenance in `docs/illustrations.md`.

The hero uses one inclusive three-person study-partners scene: a Chakma Bangladeshi woman with a QA checklist tablet and stylus between a woman and man at laptops. Preserve equal peer status and the entire composition with proportional sizing/containment, never a mobile crop that removes a teammate. Keep accurate bilingual alt text and verify eager loading, responsive sources, dimensions, both themes and no-JavaScript/reduced-motion use. Do not add carousel controls, autoplay, gender/ethnicity preference selection or extra hydration for this artwork. Retain only English and Bangla routes and controls.

Manually inspect each replacement for three equally prominent teammates, relaxed viewer-directed smiles, personal space, keyboard hands and a visible QA tablet/stylus. The seated woman's teal hoodie and neatly head-draped orna must remain recognizable, with all hair covered. Document references for the centre teammate's contemporary Chakma-textile-inspired clothing; do not claim exact cultural authenticity from a generated image or infer identity from facial features. Check that coffee, water bottle and small indoor plant rest on the desk beside the notebook, and that devices face physically consistent directions. Do not mistake image-load/alt-text tests for proof of visual representation or the absence of romantic posing. Keep actual content and localized descriptions consistent; role and ethnicity do not imply one another.

Orientation-map and useful-loop labels/captions must share an explicit content wrapper. Reset prose `li + li` margins in navigation, breadcrumbs and grid/timeline lists. Breadcrumbs share the page-heading container and align on a text baseline. `src/data/navigation.ts` is the typed bilingual source for five problem-oriented groups and active-route matching. Start here must include explicit bilingual Home, Search and First software role destinations; the homepage section jump remains a separate non-current destination so only Home receives `aria-current` at `/`. Learning resources belong under Prepare rather than About because they are a student task; About remains focused on purpose and provenance. `Header.astro` renders that model as a persistent wide-screen sidebar or a compact sticky header/native drawer; the mobile toggle is icon-only visually but retains a localized accessible name. Active links use `aria-current`, the page frame is offset by the shared sidebar-width token, and the drawer remains viewport-bounded and scrollable. The desktop sidebar must be available even when its mobile disclosure was previously closed; test resizing in both directions. With JavaScript disabled, the native menu and all essential content links must still work. The footer retains compact project/policy/provenance links rather than duplicating global navigation.

---

## 11. Career Data Model

Prefer a typed schema.

Illustrative shape:

```ts
interface Career {
  id: string;
  slug: string;
  familyId: string;
  title: string;
  shortDescription: string;
  actualWork: string[];
  enjoyIf: string[];
  dislikeIf: string[];
  realisticDay: DaySegment[];
  dimensions: CareerDimensions;
  roadmapId: string;
  experimentId: string;
  aiExposure: AITaskExposure[];
  relatedCareerIds: string[];
  nextSteps: NextStep[];
}
```

Do not store translated English/Bangla strings in a way that becomes impossible to validate.

Use Astro content collections/schema validation or a comparable typed validation approach.

Build must fail on invalid required content.

---

## 12. Roadmap Data Model

Suggested:

```ts
interface Roadmap {
  id: string;
  careerId: string;
  stages: RoadmapStage[];
}

interface RoadmapStage {
  id: string;
  title: string;
  intent: string;
  topics: RoadmapTopic[];
}

interface RoadmapTopic {
  id: string;
  title: string;
  whyItMatters: string;
  prerequisites: string[];
  enoughForNow: string;
  learnResource?: ResourceRef;
  practiceResource?: ResourceRef;
  deeperResource?: ResourceRef;
  notYet?: string[];
  practicalTask?: string;
}
```

A roadmap node must not become a full tutorial.

---

## 13. Learning Resource Model

Each resource should include enough metadata for curation and maintenance:

```ts
interface LearningResource {
  id: string;
  title: string;
  url: string;
  provider: string;
  type:
    | "official-docs"
    | "course"
    | "university"
    | "lab"
    | "book"
    | "practice"
    | "video"
    | "article";
  isFree: boolean;
  recommendedScope?: string;
  whyRecommended: string;
  lastReviewed: string;
  language?: "en" | "bn" | "both";
}
```

Do not scrape or copy the resource’s teaching content.

Link to it.

### 13.1 Resource quality

Before adding a resource, verify:

- it still exists;
- the relevant portion is free;
- it is technically credible;
- it is appropriate for the roadmap stage;
- it does not require unnecessary account/payment steps for the recommended content.

For unstable external content, store a `lastReviewed` date.

---

## 14. AI Exposure Data Model

Avoid numeric replacement probabilities.

Use qualitative task exposure.

Example:

```ts
type ExposureLevel = "higher" | "medium" | "lower";

interface AITaskExposure {
  task: string;
  exposure: ExposureLevel;
  explanation: string;
  studentResponse: string;
}
```

Do not suggest “lower” means permanently safe.

Include a content note that AI capabilities evolve.

---

## 15. Career Experiments

Every experiment must be:

- safe;
- beginner-appropriate for the stated prerequisites;
- legal;
- practical;
- time-bounded;
- capable of being done without this site storing results.

For cybersecurity experiments:

- use deliberately vulnerable training environments, sandbox labs, CTFs, or explicitly authorized targets;
- never instruct students to attack real systems;
- make authorization boundaries obvious.

Experiment data should include:

```ts
interface CareerExperiment {
  id: string;
  careerId: string;
  title: string;
  duration: string;
  prerequisites: string[];
  experienceGoals: string[];
  steps: string[];
  reflectionPrompts: string[];
  resources: ResourceRef[];
  nextSteps: NextStep[];
}
```

---

## 16. Competitive Programming Content

Implement a dedicated guidance page and contextual roadmap references.

Must communicate:

- competitive programming is valuable for algorithmic thinking;
- it is not required at advanced competitive depth for every career;
- it does not replace software engineering practice;
- students should combine it with real projects where appropriate;
- there are foundation, competence, and competitive-track levels;
- AI-free and AI-assisted-review practice both have value.

Avoid shaming students who do not compete.

Render ACM Programming / ICPC as a distinct practice-track callout under Understand Computing Deeply, not as a career ID. The dedicated guide needs a bounded six-week learn → honest attempt → submit/debug/log → review/transfer loop and must retain real-project practice. Curate Shafaet's Planet and Amirul Islam's Bangla programming writing with scoped resource metadata and visible outbound links; paraphrase the learning approach and never copy a curriculum or imply endorsement.

---

## 17. Software Engineering Foundations Content

Create a mentor-level guidance path covering:

- Clean Code concepts;
- Code Smells;
- Refactoring;
- SOLID;
- Design Principles;
- Design Patterns;
- Testing/Testability;
- Architectural Boundaries.

Do not build a detailed tutorial library.

For each topic answer:

- Why does it matter?
- When should I learn it?
- How deeply do I need it now?
- What problem does it solve?
- What should I avoid doing?
- Where can I learn it well?
- What is a small practice task?

Use realistic warnings against overengineering.

---

## 18. “I’m Lost” Navigation Engine

Implement as a deterministic client-side decision tree.

No AI service is needed.

Model navigation as data where possible:

```ts
interface NavigationQuestion {
  id: string;
  prompt: string;
  choices: NavigationChoice[];
}
```

Each choice routes to:

- another question;
- a relevant guide;
- a career family;
- comparison;
- experiment;
- roadmap;
- AI guidance;
- recovery route.

Requirements:

- keyboard accessible;
- deep-linkable where practical;
- back navigation works;
- no required persistence;
- no fake “assessment accuracy” claims.

Render each initial choice as a real localized destination link. JavaScript may
progressively enhance those links into an in-page explanation, but it must not be
the only route to the result. The selected prompt becomes the result heading,
the hash identifies the selected state, and reset must hide the panel, restore
control state and clear that hash.

---

## 19. “Where Are You Right Now?” Navigator

Implement the homepage starting-point selector as a prominent component.

Keep bilingual hero and three-entry copy in `src/data/homepage.ts`. Render static linked rows for new/unsure students, career exploration and goal preparation, pointing respectively to the fresher guide, career index and goal hub. All links must use the locale/base-path helpers; analytics use existing bounded `next_step_clicked` destinations.

Keep repeated origin, Purpose and Goal copy in the typed bilingual `sitePurpose` object. Render only its concise resolution in the homepage hero; render the full narrative and four-stage sequence on localized About pages. Use static Astro markup and shared tokens, preserve mobile wrapping and theme contrast, and do not add client hydration. Test data completeness, both rendered languages, the native About anchors, no-JavaScript availability, axe results and the five-width visual matrix.

Keep these seven detailed choices in the static HTML inside an accessible native disclosure:

- new to CSE;
- cannot choose a career;
- programming but no direction;
- worried about AI;
- already have a target;
- near graduation / feel behind.
- existing project / needs first software role.

Add a compact visible first-role bridge beside this disclosure. Route it to a static bilingual guide sourced from `src/data/first-software-role.ts`. The guide uses six evidence-oriented stages, five direct bottleneck entry anchors, scoped official references, role-specific career/roadmap links and a feedback diagnosis that changes one variable at a time. Render Article and BreadcrumbList data, a desktop sticky index and readable native mobile index without client hydration or stored progress. Test homepage/sidebar/lost-flow discoverability, language equivalents, no-JavaScript content, bounded analytics, source relationships, five widths, both themes and both base paths.

Preserve recovery encouragement outside the disclosure. Do not add a framework, quiz, persistent profile or client-side routing. Test each primary entry end to end, disclosure keyboard/no-JavaScript use, translated equivalents and fully visible initial-viewport primary actions at the responsive matrix sizes. The purpose and action must precede artwork on phones. Run axe with the disclosure both closed and open; inspect actual viewport screenshots, not just overflow assertions.

Track only the selected category as an aggregate analytics event.

Do not associate it with an identity.

---

## 20. Comparison Engine

Comparison must work without a backend.

Requirements:

- select 2–3 careers;
- display shared comparison dimensions;
- provide text explanations where needed;
- display related experiments/roadmaps;
- mobile-friendly layout;
- copy/shareable URL if practical using route segments or query parameters;
- no stored profile.

Avoid pseudo-scientific “fit scores” unless the methodology is explicit and defensible.

---

## 21. Search

The current content volume justifies a secondary static search experience.

Possible approaches:

- build-time generated lightweight index;
- Pagefind or equivalent static-search tool;
- minimal client search over a generated index.

Do not require an external search backend.

Search must support English and Bangla content reasonably.

Use a typed build-time index covering careers, families, roadmaps, experiments,
AI guidance, goals, major guidance and curated resources. Filter locally in a
small framework-free script; do not transmit or track free-form query text. Keep
mentor-path quick links available without JavaScript. Search routes use
`noindex, follow` and are excluded from the sitemap; destination pages remain
normal crawlable static pages.

Search is not a substitute for scannable directories. Career, experiment and
roadmap indexes need native family jump links and grouped sections; the resource
index needs truthful type groups instead of treating an entire directory as one
Learn → Practice → Go Deeper sequence. Task indexes use a compact hero and end
with meaningful onward actions. Every jump link and target must work without
JavaScript and under a GitHub Pages project base.

---

## 22. Analytics Architecture

Create an analytics abstraction.

Suggested public API:

```ts
trackPageView(...)
trackLanguageSwitch(...)
trackThemeSwitch(...)
trackStartingPointSelected(...)
trackCareerFamilyOpened(...)
trackCareerViewed(...)
trackCareerCompared(...)
trackRoadmapViewed(...)
trackExperimentStarted(...)
trackAIGuidanceViewed(...)
trackImLostUsed(...)
trackLearningResourceClicked(...)
trackNextStepClicked(...)
```

Do not scatter raw GA calls through UI components.

### 22.1 GA4 configuration

Emit `career_viewed` and `roadmap_viewed` from their destination page layout so direct visits and homepage family links are counted. Do not also emit those view events on inbound links; use `next_step_clicked` there to prevent double counting. Verify the browser dispatch with a stub that blocks external Google requests, and distinguish that check from live GA4 delivery.

- read measurement ID from public build-time environment configuration;
- analytics can be disabled cleanly for local/test environments;
- no build should fail because analytics is absent locally;
- do not transmit PII;
- do not transmit free-text;
- do not create hidden user IDs.

### 22.2 Demographic analytics

If aggregate age/gender reporting or Google Signals is enabled:

- document the configuration;
- provide appropriate consent/privacy handling;
- comply with current GA requirements and applicable law;
- do not present demographic values inside the product UI;
- treat demographic reports as incomplete aggregate analytics.

### 22.3 Outbound resources

Track outbound resource clicks using resource IDs/providers rather than URL query contents that may accidentally contain user data.

---

## 23. Privacy

Provide a concise privacy page.

Explain:

- the site does not require accounts;
- the site does not intentionally collect names/emails through the mentoring experience;
- theme/language preferences may be stored locally;
- GA4 is used for aggregate usage analytics;
- external resources have their own privacy policies.

Do not claim “anonymous” if the configured analytics implementation does not justify that exact claim.

---

## 24. SEO

Implement:

- central `CSE Compass` site metadata;
- home title direction: `CSE Compass — Find Your Direction in CSE`;
- canonical URLs;
- sitemap;
- robots.txt;
- localized titles/descriptions;
- Open Graph;
- Twitter/social metadata where relevant;
- `hreflang`;
- structured internal links;
- descriptive slugs;
- static-rendered essential content.

Use accurate `CollectionPage`/`ItemList` and `BreadcrumbList` structured data on
the career, experiment, roadmap, goal and resource indexes. Include localized
Open Graph alternate-locale metadata and alt metadata for both Open Graph and X
social images. Do not put noindex search interfaces in the sitemap.

Create reusable SEO helpers/layout props.

No essential SEO content should depend on client-side rendering.

---

## 25. GitHub Pages

The build must support GitHub Pages project-site hosting, including a non-root base path if the repository is not `<username>.github.io`.

Do not hard-code root-relative assumptions that break under:

```text
https://username.github.io/repository-name/
```

Configure Astro `site` and `base` appropriately through environment/repository settings.

Internal links and assets must honor the base path.

---

## 26. GitHub Actions

Create:

### 26.1 CI workflow

Run on pull requests and pushes as appropriate.

Required gates:

```bash
corepack enable
yarn install --immutable
yarn format:check
yarn lint
yarn typecheck
yarn test
yarn build
```

Add accessibility/e2e checks where appropriate.

### 26.2 Pages deployment

Deploy only the static build artifact.

Use supported GitHub Pages Actions and permissions.

Do not deploy on failed CI.

---

## 27. Package Scripts

Provide consistent scripts such as:

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "lint": "...",
    "format": "...",
    "format:check": "...",
    "typecheck": "astro check",
    "test": "...",
    "test:unit": "...",
    "test:e2e": "...",
    "test:a11y": "...",
    "check": "..."
  }
}
```

All documentation must use `yarn <script>` or `yarn run <script>` consistently.

Do not document npm equivalents.

---

## 28. Code Quality

Use:

- strict TypeScript;
- ESLint or current equivalent appropriate to the chosen stack;
- Prettier or a deliberate formatting solution;
- Astro check;
- schema validation for content;
- minimal public component APIs;
- no `any` unless explicitly justified;
- no magic route strings scattered across components;
- no duplicated analytics event names;
- no duplicated language/theme constants.

Prefer typed enums/unions/constants for closed sets.

---

## 29. Testing Strategy

The project is content-heavy, so tests should focus on meaningful failure modes.

### 29.1 Unit tests

Test:

- route generation;
- language equivalent mapping;
- theme helpers;
- comparison selection logic;
- decision-tree navigation;
- analytics payload shaping;
- content transformations.

### 29.2 Content integrity tests

Build should detect:

- duplicate IDs;
- invalid slugs;
- missing required career sections;
- broken internal references;
- missing related careers;
- missing roadmap/experiment references;
- invalid exposure levels;
- missing English required content;
- missing Bangla translations for published bilingual pages;
- empty “what not to learn yet” when the template requires it.

### 29.3 External link checks

Provide a scheduled/manual link-check mechanism for learning resources.

Do not make every normal build depend on hundreds of live external requests.

### 29.4 E2E tests

Homepage visual regression coverage must include AI section order, the four map links, all six useful-loop links, eight career families, three primary experiment previews, the three-item expanding-path disclosure, the ACM/ICPC practice-track link, loaded illustrations, grouped caption geometry, breadcrumb alignment, sidebar/frame separation, active-route indication, all five bilingual intent groups, keyboard drawer/Escape behavior, breakpoint navigation continuity and no-JavaScript navigation. Test both English and Bangla.

At minimum cover:

- homepage loads;
- English → Bangla equivalent route;
- theme switch and persistence;
- “Where are you right now?” navigation;
- “I’m Lost” flow;
- career → roadmap;
- career → experiment;
- comparison;
- outbound resource click behavior;
- GitHub Pages base path compatibility.

### 29.5 Accessibility tests

Use automated accessibility tests for critical routes, plus manual keyboard and screen-reader-oriented review.

Automated tests do not replace manual accessibility review.

---

## 30. Performance Quality Gates

Avoid a rigid number that encourages gaming, but enforce strong targets.

At minimum:

- no unnecessary global React hydration;
- no giant client bundle for static pages;
- optimize images;
- reserve image dimensions;
- avoid render-blocking third-party scripts where possible;
- defer analytics appropriately;
- prevent CLS from theme/illustration loading.

Use Lighthouse or equivalent in review.

Critical pages:

- homepage;
- career page;
- roadmap;
- comparison;
- Bangla homepage;
- dark-theme homepage.

---

## 31. Accessibility Engineering

Target WCAG 2.2 AA.

Implement and test:

- semantic landmarks;
- skip link;
- heading order;
- keyboard navigation;
- visible focus;
- contrast;
- non-color indicators;
- accessible dialogs/menus;
- reduced motion;
- proper `lang`;
- accessible SVG titles/labels where needed;
- descriptive link text;
- form labels;
- touch targets.

Theme and language controls must be operable without a pointer.

---

## 32. Content Rendering Safety

Treat authored Markdown/MDX as trusted repository content, but still avoid:

- arbitrary remote script embedding;
- unsafe HTML without need;
- copying third-party course content;
- embedding tracking-heavy external widgets where a normal link is enough.

Prefer normal external links that clearly identify they leave the site.

---

## 33. Security Baseline

Even though the site is static:

- keep dependencies minimal;
- use dependency scanning;
- do not expose secrets in client bundles;
- measurement IDs may be public; actual secrets must not exist in frontend code;
- add sensible security headers where hosting capability permits;
- use `rel="noopener noreferrer"` where appropriate;
- avoid unsafe inline script patterns except where strictly needed for no-flash theme initialization;
- review third-party embeds carefully.

There is no reason to introduce a secret-bearing backend.

---

## 34. Content Editorial Components

Implement reusable editorial patterns matching `DESIGN.md`:

- Mentor Note
- Reality Check
- Plot Twist
- The Uncomfortable Part
- Before You Continue
- Future You Says
- Try This Instead
- What Not to Learn Yet
- AI Reality
- Next Steps

These should have distinct but restrained styling.

Do not make every paragraph a callout.

---

## 35. Visual Implementation Rules

Compare the implemented themes with `themes-sample.png`: cool off-white and midnight navy, editorial serif hero, restrained blue/teal/amber accents, clear original character silhouettes. Use viewport-sized screenshots of the map, loop, breadcrumbs and imagery in addition to full-page captures; do not equate absence of horizontal overflow with correct alignment.

The implementation must avoid common generic AI-site signals:

- excessive gradients;
- neon glows;
- repeated rounded 3-card grids;
- huge empty hero text with meaningless blobs;
- generic robot mascot as the primary identity;
- dashboard metrics on a non-dashboard product.

Use:

- editorial spacing;
- typography;
- purposeful illustration;
- thin rules;
- asymmetrical composition;
- restrained category accents;
- strong content hierarchy.

At `56rem` and above, non-homepage heroes must use a shared two-column composition: title on the primary side and supporting explanation/actions on the secondary side. Do not treat a full-width container as successfully used when all meaningful content is stacked on the left. Career and experiment detail heroes may keep their purpose-built copy/context split. Below the breakpoint, restore ordinary single-column document flow. The generated-route layout test must verify both column origins on every English and Bangla page that has a `.page-hero`, in addition to bounds, alignment and overflow.

For the AI overview's task-model spectrum, use a dedicated desktop section-head treatment rather than forcing the normal two-column section heading to contain the sequence. At the sidebar breakpoint and above, the complete **Higher exposure → AI-assisted → responsibility-heavy** title must occupy one line at a responsive display size with no overflow. Restore normal wrapping below that breakpoint. Verify both locales at the minimum desktop breakpoint, standard desktop and wide desktop, plus a narrow mobile overflow check.

---

## 36. Dark Theme Rules

Dark mode must be designed, not inverted.

Required visual checks:

- mentor/student illustration retains silhouette;
- hoodie/clothes do not merge into background;
- AI-related illustration retains face/body separation;
- career category colors remain distinguishable;
- surfaces have enough depth without excessive glow;
- coral/amber/violet accents remain accessible;
- muted text remains readable;
- code/terminal-like decoration is occasional, not the whole aesthetic.

Do not imply “dark mode = cybersecurity.”

---

## 37. Responsive Breakpoints

Use content-driven breakpoints rather than device-brand breakpoints.

Test at least:

- narrow mobile;
- standard mobile;
- tablet;
- laptop;
- large desktop.

Career comparison and roadmap layouts require special mobile design rather than merely shrinking desktop.

---

## 38. Navigation Continuity

Every major page must provide useful next actions.

Examples:

Career page:

- try this career;
- compare;
- roadmap;
- AI impact;
- related careers.

Roadmap:

- career overview;
- first experiment;
- software-engineering foundation if relevant;
- curated learning resource;
- adjacent career.

AI page:

- career-specific exposure;
- AI-free practice;
- AI-assisted practice;
- foundations.

Avoid dead-end pages.

---

## 39. No-Progress-Tracking Rule

Do not accidentally recreate tracking through local storage.

Allowed local preferences:

- theme;
- language.

Not allowed:

- completed roadmap steps;
- experiment completion;
- skill progress;
- career score history;
- learning streak;
- personalized profile;
- saved quiz outcomes unless explicitly added by a future product decision.

---

## 40. Accessibility and UX of External Resources

Every learning-resource link should:

- identify the provider;
- indicate type where useful;
- indicate “free” accurately;
- explain recommended scope if only part is needed;
- open predictably;
- include accessible link text.

The product has an explicit outbound-link rule: learning resources, official guidance sources, inspiration/creator destinations and the repository open in a new tab with `target="_blank"` plus `rel="noopener noreferrer"`. Identify the external transition with meaningful link text and the existing visible/accessible outbound indicator. Internal routes, language/theme controls and same-page section anchors remain in the current tab so breadcrumbs, Back and mobile tab management stay predictable. Protect this distinction in generated-output tests.

---

## 41. Content Maintenance

Provide maintainers with a documented process for adding a career:

1. add stable career ID;
2. add English content;
3. add Bangla content;
4. assign career family;
5. add comparison dimensions;
6. add AI task exposure;
7. add roadmap;
8. add experiment;
9. add related careers;
10. add next-step links;
11. run content validation;
12. run tests;
13. verify both themes;
14. verify mobile;
15. verify analytics events.

Do the same for adding learning resources.

---

## 42. Analytics Event Naming

Use stable lowercase snake_case event names.

Recommended:

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

Do not rename events casually after launch.

Document parameters.

Example:

```ts
{
  event: "career_viewed",
  career_id: "backend-engineering",
  locale: "en"
}
```

Never include free-form student text.

---

## 43. README Requirements

Create a clear `README.md` containing:

- the official product name **CSE Compass** and tagline **Find your direction in CSE.**;
- what the site is;
- non-goals;
- technology stack;
- prerequisites;
- Corepack/Yarn setup;
- local development;
- build;
- test;
- content authoring;
- bilingual content rules;
- theme architecture;
- GA4 configuration;
- GitHub Pages deployment;
- repository structure;
- contribution workflow;
- attribution/inspiration link to the relevant section of `DESIGN.md`.

Visible attribution is implemented as static shared-footer content and localized About `#credits`, backed by typed bilingual `src/data/credits.ts` and the creator identity/portfolio URL in `src/config/site.ts`. Render Amjad Hossain's name as a new-tab link to the intended GitHub Pages portfolio at `https://amjadhossainrahat.github.io/` with safe `rel` attributes; retain this canonical destination even while the portfolio is not yet published. Keep all three inspiration URLs (roadmap.sh, Architect Prep and Amirul Islam), the distinct Orchestrator/ChatGPT/Codex roles, and the Codex model/effort credit **GPT-5.6 Sol (High)** in content-integrity coverage. Verify footer-to-About base-path links, creator-link semantics, keyboard/no-JavaScript use, English/Bangla, both themes and narrow-screen wrapping. Build verification must confirm footer credits on all generated HTML pages and the target anchors. Do not add client hydration or analytics just for credits.

Cleanup must follow reference and entry-point checks, not simply remove files lacking imports: Astro routes, public assets, scripts, tests and configuration are legitimate entry points. Preserve current PNG masters and design references; retire only confirmed obsolete assets with recoverable history and synchronized provenance documentation.

Do not include npm commands.

---

## 44. Suggested Implementation Order

### Phase 1 — Foundation

- initialize Astro + TypeScript;
- configure Yarn/Corepack;
- add lint/format/typecheck/test;
- add static GitHub Pages configuration;
- create design tokens;
- implement light/dark theme;
- create base layout;
- establish i18n routing.

### Phase 2 — Content Platform

- define content schemas;
- define career-family data;
- define career data;
- define roadmap/resource/experiment data;
- implement validation;
- add initial English + Bangla sample content.

### Phase 3 — Core UX

- header/navigation;
- homepage orientation flow;
- career explorer;
- career page template;
- roadmap template;
- experiment template;
- AI guidance template.

### Phase 4 — Navigation Intelligence

- “Where are you right now?”;
- “I’m Lost” decision tree;
- career comparison;
- related career navigation;
- next-step components.

### Phase 5 — Editorial Engagement

- Mentor Notes;
- Reality Checks;
- Plot Twists;
- scenario choices;
- Future You;
- motivation/recovery routes;
- humor review.

### Phase 6 — Analytics / SEO / Privacy

- analytics abstraction;
- GA4;
- event tracking;
- privacy page;
- metadata;
- sitemap;
- hreflang;
- social cards.

### Phase 7 — Hardening

- accessibility;
- mobile;
- dark-theme contrast;
- Bangla layout;
- performance;
- link validation;
- test coverage;
- GitHub Pages path testing.

### Phase 8 — Complete Content

Expand careers, roadmaps, experiments and curated resources without weakening the content quality bar.

---

## 44A. Goal guides and mobile / UX/UI implementation

Maintain seventeen complete careers across eight families. Mobile App Development and UX/UI Engineering must participate in career comparison, families, five-stage roadmaps, experiments, AI pages and bilingual route generation. Data Analytics & BI, AI Engineering and Application Security require the same complete graph and role-specific professional stages. Use role-specific stage overrides where generic software tasks or JavaScript testing resources would be misleading. Preserve existing routes and comparison defaults when adding entries.

Use strict `GoalId`, `GoalGuide`, `GoalStage` and `GuidanceSource` contracts. Store seven complete localized guides in typed modules under `src/data/goals/`, indexed by `src/data/goals.ts`; source metadata belongs in `src/data/guidance-sources.ts`. A source is a scoped reference, not a `LearningResource.isFree` claim about applications, tests or publishing. Keep localization helpers free of circular runtime imports.

Generate `/goals/`, `/goals/[slug]/` and their `/bn/` equivalents through shared Astro templates. Essential content, starting-point anchors, sources and related routes must work without JavaScript. Use a desktop section index and mobile native disclosure; no React, external UI dependency or state storage is justified for these static guides. Preserve GitHub Pages base paths on every link, metadata URL and cross-route anchor.

Each guide requires branches; four stages (`foundation`, `evidence`, `application`, `adapt`) with why, tasks, readiness evidence, not-yet guidance and a valid source; pitfalls; AI practice; a concrete weekly action; and curated related careers/goals. Validate IDs, nonempty bilingual fields, Bangla prose, source metadata, and complete relationships. Include Article and BreadcrumbList JSON-LD for goal details.

Test all seven routes in both languages, the two new careers across career/roadmap/experiment/AI routes, homepage → goal → career-roadmap and lost-flow journeys, equivalent language switching, keyboard/no-JavaScript disclosure, 320/390/768/1280/1600px layouts, both themes, console errors and relevant axe checks. Cover goal/source analytics with the existing bounded `next_step_clicked` and `learning_resource_clicked` abstraction. Extend external-link checks to the guidance-source registry. Run both root and project-Pages production verification; inspect actual viewport screenshots and retain truthful validation records.

## 45. Definition of Done

### Final-year project and infrastructure-career requirements

Publish seventeen complete careers. `infrastructure-careers.ts`, `infrastructure-experiments.ts` and `infrastructure-roadmaps.ts` carry Network Engineering, Hardware Engineering and Software QA & Testing with role-specific evidence, safe experiments and professional practices. `specialist-careers.ts`, `specialist-experiments.ts` and `specialist-roadmaps.ts` carry Data Analytics & BI, AI Engineering and Application Security with reproducible metrics, evaluation/release evidence and authorized remediation. Keep stable IDs, exact family membership, all relationships and natural English/Bangla content. Do not inherit a generic browser-code task or JavaScript-only testing resource where it would misrepresent physical, operational, analytical, AI or security engineering.

Use the typed `FinalYearProjectGuide` contract in `src/types/content.ts` and bilingual source in `src/data/final-year-project.ts`. Render the complete seven-stage guide through `FinalYearProject.astro` and thin EN/BN routes. Provide Article/BreadcrumbList metadata, semantic section navigation, native disclosures, a worked traceability example, four project-type adaptations, readiness evidence and useful onward links. Do not add React or persistent checklist state for this static content.

Generate actual Markdown templates from `src/pages/downloads/[file].ts`; preserve the explicit Git ignore exception so source endpoints are committed. Templates are authoring prompts, never fabricated completed reports. Verify both download responses and browser download behavior. Scope source claims and review dates accurately; department requirements override the proposed quality bar.

The team-workflow expansion uses typed `ProjectPlaybook` and `ProjectTemplate` contracts. Keep focused content modules in `src/data/project/`, static disclosure rendering in `src/components/project/TeamPlaybooks.astro`, and a pure `src/lib/project-template.ts` Markdown renderer shared by the thin download endpoint. Preserve existing URLs, the seven stages and four project variants. Ten template definitions must drive both page previews and downloads, with bilingual completeness and renderer tests. Seven playbooks need purpose/timing, actionable steps, worked examples and valid scoped sources. Native controls must work by keyboard without JavaScript; test both closed and expanded content at five widths, both themes and both locales, including actual screenshots and bounded analytics.

Retain Astro-conventional folder boundaries; do not invent backend layers for a static site. Audit installed build defaults and emitted artifacts before claiming minification. Astro 7 JSX whitespace compaction, bundled JavaScript minification, explicit Lightning CSS minification and responsive WebP generation are separate mechanisms. `public/` assets and `is:inline` scripts bypass normal bundling; readable downloadable Markdown is intentional. HTTP gzip/Brotli requires deployment verification and is not proven by a build. Document these exceptions and avoid unsafe blanket HTML rewriting.

Retain only English and Bangla routing, resource copy, language controls, metadata and analytics. Refine the shared native SVG logo and matching favicon; keep the professional original social card with provenance. No unused third-language files or fonts should ship.

Extend tests for all new career/roadmap/experiment/AI routes, comparison, project navigation/downloads, content completeness, source IDs, keyboard/no-JavaScript behavior and the five-width/two-theme/two-language matrix. Check actual screenshots, not only overflow. Include new critical routes in axe, verify bounded project-template/navigation events, check root and project-base production output, and update the validation record only after checks actually pass.

The implementation is complete only when all of the following are true.

### Product

- The public product name is consistently **CSE Compass**.
- The tagline/positioning and navigation metaphor match `DESIGN.md` without being overused.
- The site clearly behaves like a mentor/navigation experience.
- No login, backend, database or progress tracker exists.
- Homepage implements the complete orientation flow.
- Career discovery is organized by broad families.
- Career pages expose real work and drawbacks.
- Every career has next navigation.
- Career comparisons are usable.
- Practical experiments exist.
- Roadmaps explain what to learn and what not to learn yet.
- AI resilience is integrated across the experience.
- Competitive-programming guidance exists.
- Software-engineering-foundations guidance exists.
- Learning resources are contextual rather than dumped into directories.
- “I’m Lost” is available and functional.

### Language

- English is complete and default.
- Bangla is complete for published primary routes.
- Bangla is natural, not literal machine translation.
- Technical terminology is handled naturally.
- Equivalent-language switching works.

### Themes

- Light theme is default.
- Dark theme is complete.
- Theme preference persists locally.
- No important dark-theme visual merges into the background.
- Both themes pass contrast review.

### Engineering

- Astro static build succeeds.
- GitHub Pages base path works.
- Yarn is the only package-manager workflow.
- `yarn install --immutable` succeeds.
- lint passes.
- formatting check passes.
- typecheck passes.
- tests pass.
- content integrity checks pass.
- accessibility checks pass for critical paths.
- critical e2e journeys pass.
- build output contains no server runtime requirement.

### Performance / SEO

- essential content is statically rendered.
- metadata is present.
- sitemap exists.
- hreflang is correct.
- images are optimized.
- JS hydration is limited to justified islands.
- no major layout shift exists.

### Analytics / Privacy

- GA4 can be configured without code changes.
- analytics events use the documented abstraction.
- no PII/free-text is sent.
- theme/language events work.
- career/roadmap/experiment/resource events work.
- privacy notice exists.

### UX

- mobile-first layouts are usable.
- desktop containers, breadcrumbs and section boundaries align across every generated UI route.
- conditional two-column layouts collapse while a panel is hidden, then use both columns once revealed.
- keyboard navigation works.
- focus states are visible.
- reduced motion is respected.
- career comparison is usable on mobile.
- “I’m Lost” is reachable.
- no dead-end major page exists.
- humor and suspense do not block the student from getting information.
- visual design does not resemble a generic SaaS dashboard.

---

## 46. Final Verification Checklist

Before considering the site finished, manually verify:

- English homepage — light;
- English homepage — dark;
- Bangla homepage — light;
- Bangla homepage — dark;
- one software career;
- one cybersecurity career;
- one AI/data career;
- one infrastructure career;
- one career comparison on mobile;
- one experiment end-to-end;
- one roadmap end-to-end;
- one “I’m Lost” route;
- one Year 3/4 recovery route;
- AI guidance;
- competitive-programming guidance;
- software-engineering-foundations guidance;
- outbound learning-resource analytics;
- GitHub Pages deployed URL;
- browser back/forward navigation;
- keyboard-only navigation;
- small-screen Bangla rendering.

If any major experience is only a placeholder, the site is not complete.

## AI systems path implementation contract

Keep the build-oriented Agentic AI material as static Astro within the existing `RoadmapDetail.astro` template. Store ordered bilingual step and term-note data in `src/data/ai-systems-path.ts`; render it through a focused `src/components/ai/AISystemsPath.astro` component only for the `ai-engineering` roadmap. Use shared `LearningResource` IDs for official references and shared path helpers for every internal anchor. Do not add React, hydration, persistence, a workflow runtime or an AI SDK merely to explain these systems.

The required sequence is: frame/specify and build a deterministic baseline; make a prompt contract testable; add RAG only for owned/current/domain evidence; orchestrate known steps as a deterministic code or n8n workflow; add one bounded observe/decide/tool/inspect/stop-or-escalate loop only for real ambiguity; then add evaluation, least privilege, guardrails, observability, staged rollout and rollback. OpenClaw belongs after those concepts as an optional persistent runtime with an explicit security boundary. Multi-agent coordination requires evidence that a single bounded agent is insufficient. AGI is not a build step.

Index the anchored path in bilingual static search and link it from the AI hub without duplicating page metadata or creating thin routes. Add the local-industry watchlist as a real “I’m Lost” destination link with progressive enhancement. Extend content integrity, E2E and critical-route axe coverage for both locales, no-JavaScript access, base-path anchors, secure outbound links, overflow and the desktop watchlist-heading measure. Run root and GitHub Pages builds, generated SEO/link verification, browser and accessibility suites, and the live external-link audit before recording completion.

Treat short supporting CTA regions as compact action panels, not hero sections. For the AI hub bridge and first-project bridge, keep the eyebrow/title together, group body copy with its CTA, use balanced two-column desktop geometry and one-column mobile reading order, and cap shared callout `h2` size/measure. Browser tests must assert both desktop column separation and mobile stacking. The exhaustive public-route layout test must also reject page-scale headings inside shared callouts.

The local-video eyebrow uses the sourced-safe category **Bangladesh tech leaders & practitioners**. “Pioneers” is not an interchangeable styling word: use it only when that historical status is evidenced for each person being grouped.
