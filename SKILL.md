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

1. Header/navigation with the `CSE Compass` wordmark/brand mark, language switch and theme switch.
2. Illustrated hero: “You got into CSE. Now what?”, future-self note and four-stop orientation map.
3. AI reality / resilience section immediately after the hero, with the original AI study-partner illustration.
4. “Where are you right now?” navigator and recovery encouragement.
5. Concise misconceptions paired with veteran orientation voices; two visible perspectives and three in an accessible native disclosure.
6. Career landscape reveal: all eight families, no duplicated featured-career grid.
7. Practical, non-shaming encouragement woven through these sections.
8. “Try before you choose”: three representative previews linking to the full published experiment index (currently fourteen); derive the displayed count from data.
9. Understand → Explore → Compare → Try → Prepare → Adapt journey.
10. Closing orientation message and next-step CTA.
11. Footer with product links, language/theme support, privacy and attribution/inspiration references as appropriate.

The homepage must not be reduced to a hero plus generic feature-card grid.

Use `themes-sample.png` for visual mood, while retaining the CSE Compass brand and original art. Source illustrations live in `src/assets/illustrations/`; import through `astro:assets` to generate responsive WebP and reserve intrinsic dimensions. Eager-load the hero with high fetch priority, lazy-load the supporting AI illustration, and avoid new client-side image libraries. Keep generation provenance in `docs/illustrations.md`.

The hero uses one inclusive three-person study-partners scene: a Chakma Bangladeshi woman with a QA checklist tablet and stylus between a woman and man at laptops. Preserve equal peer status and the entire composition with proportional sizing/containment, never a mobile crop that removes a teammate. Keep accurate bilingual alt text and verify eager loading, responsive sources, dimensions, both themes and no-JavaScript/reduced-motion use. Do not add carousel controls, autoplay, gender/ethnicity preference selection or extra hydration for this artwork. Retain only English and Bangla routes and controls.

Manually inspect each replacement for three equally prominent teammates, relaxed viewer-directed smiles, personal space, keyboard hands and a visible QA tablet/stylus. The seated woman's teal hoodie and neatly head-draped orna must remain recognizable, with all hair covered. Document references for the centre teammate's contemporary Chakma-textile-inspired clothing; do not claim exact cultural authenticity from a generated image or infer identity from facial features. Check that coffee, water bottle and small indoor plant rest on the desk beside the notebook, and that devices face physically consistent directions. Do not mistake image-load/alt-text tests for proof of visual representation or the absence of romantic posing. Keep actual content and localized descriptions consistent; role and ethnicity do not imply one another.

Orientation-map and useful-loop labels/captions must share an explicit content wrapper. Reset prose `li + li` margins in navigation, breadcrumbs and grid/timeline lists. Breadcrumbs share the page-heading container and align on a text baseline. Desktop navigation must be available even when its mobile disclosure was previously closed; test resizing in both directions. With JavaScript disabled, the native menu and all essential content links must still work.

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

---

## 19. “Where Are You Right Now?” Navigator

Implement the homepage starting-point selector as a prominent component.

Required initial choices:

- new to CSE;
- cannot choose a career;
- programming but no direction;
- worried about AI;
- already have a target;
- near graduation / feel behind.

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

If content volume justifies search, use a static search approach.

Possible approaches:

- build-time generated lightweight index;
- Pagefind or equivalent static-search tool;
- minimal client search over a generated index.

Do not require an external search backend.

Search must support English and Bangla content reasonably.

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

Homepage visual regression coverage must include AI section order, the four map links, all six useful-loop links, eight career families, three experiment previews, loaded illustrations, grouped caption geometry, breadcrumb alignment, keyboard menu/Escape behavior, breakpoint navigation continuity and no-JavaScript navigation. Test both English and Bangla.

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

Do not force all external links into new tabs unless there is a clear UX rule. If using new tabs consistently for learning resources, communicate it accessibly.

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

Maintain fourteen complete careers across eight families. Mobile App Development and UX/UI Engineering must participate in career comparison, families, five-stage roadmaps, experiments, AI pages and bilingual route generation. Use role-specific stage overrides where generic software tasks or JavaScript testing resources would be misleading. Preserve existing routes and comparison defaults when adding entries.

Use strict `GoalId`, `GoalGuide`, `GoalStage` and `GuidanceSource` contracts. Store seven complete localized guides in typed modules under `src/data/goals/`, indexed by `src/data/goals.ts`; source metadata belongs in `src/data/guidance-sources.ts`. A source is a scoped reference, not a `LearningResource.isFree` claim about applications, tests or publishing. Keep localization helpers free of circular runtime imports.

Generate `/goals/`, `/goals/[slug]/` and their `/bn/` equivalents through shared Astro templates. Essential content, starting-point anchors, sources and related routes must work without JavaScript. Use a desktop section index and mobile native disclosure; no React, external UI dependency or state storage is justified for these static guides. Preserve GitHub Pages base paths on every link, metadata URL and cross-route anchor.

Each guide requires branches; four stages (`foundation`, `evidence`, `application`, `adapt`) with why, tasks, readiness evidence, not-yet guidance and a valid source; pitfalls; AI practice; a concrete weekly action; and curated related careers/goals. Validate IDs, nonempty bilingual fields, Bangla prose, source metadata, and complete relationships. Include Article and BreadcrumbList JSON-LD for goal details.

Test all seven routes in both languages, the two new careers across career/roadmap/experiment/AI routes, homepage → goal → career-roadmap and lost-flow journeys, equivalent language switching, keyboard/no-JavaScript disclosure, 320/390/768/1280/1600px layouts, both themes, console errors and relevant axe checks. Cover goal/source analytics with the existing bounded `next_step_clicked` and `learning_resource_clicked` abstraction. Extend external-link checks to the guidance-source registry. Run both root and project-Pages production verification; inspect actual viewport screenshots and retain truthful validation records.

## 45. Definition of Done

### Final-year project and infrastructure-career requirements

Publish fourteen complete careers. `infrastructure-careers.ts`, `infrastructure-experiments.ts` and `infrastructure-roadmaps.ts` carry Network Engineering, Hardware Engineering and Software QA & Testing with role-specific evidence, safe experiments and professional practices. Keep stable IDs, exact family membership, all relationships and natural English/Bangla content. Do not inherit a generic browser-code task or JavaScript-only testing resource for physical/operational engineering.

Use the typed `FinalYearProjectGuide` contract in `src/types/content.ts` and bilingual source in `src/data/final-year-project.ts`. Render the complete seven-stage guide through `FinalYearProject.astro` and thin EN/BN routes. Provide Article/BreadcrumbList metadata, semantic section navigation, native disclosures, a worked traceability example, four project-type adaptations, readiness evidence and useful onward links. Do not add React or persistent checklist state for this static content.

Generate actual Markdown templates from `src/pages/downloads/[file].ts`; preserve the explicit Git ignore exception so source endpoints are committed. Templates are authoring prompts, never fabricated completed reports. Verify both download responses and browser download behavior. Scope source claims and review dates accurately; department requirements override the proposed quality bar.

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
