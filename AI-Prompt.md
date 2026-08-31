You are responsible for implementing the complete **CSE Compass** website in this repository.

Before writing or modifying any code, read these files completely:

1. `DESIGN.md`
2. `SKILL.md`
3. `README.md` if it already exists
4. Existing repository configuration and source files

Treat `DESIGN.md` as the authoritative product, content, UI/UX, branding, accessibility, bilingual, responsive-design and experience specification.

Treat `SKILL.md` as the authoritative engineering, architecture, testing, quality, deployment, SEO and implementation specification.

Do not simplify, omit, reinterpret away, or replace requirements from these documents merely because a simpler implementation is easier.

# Primary objective

## Current content and identity requirements

Keep English as default and Bangla as the sole additional language. Do not introduce third-language routes, translation fallbacks or fonts. Replace the unclear homepage “salary reel” wording with direct career-orientation language. Use the refined C-shaped compass vector identity consistently in the site and favicon; preserve an original, professional social-sharing image and document its provenance.

Maintain fourteen complete careers across eight families. Network Engineering, Hardware Engineering and Software QA & Testing require the same career, comparison, five-stage roadmap, experiment, AI exposure, localized content and curated-resource depth as the other paths. Distinguish network operations from cybersecurity, electronic hardware design from embedded software/repair, and QA judgment from merely clicking screens or writing automated tests. Use role-specific roadmap tasks/resources. Keep networking exercises explicitly authorized, hardware experiments simulator-first, and QA work scoped to owned apps. Do not require paid exams, equipment or hosted services for starter experiments.

Publish a complete bilingual final-year project standards guide at `/guidance/final-year-project/`, with equivalent `/bn/` navigation. Cover problem definition, testable requirements, design trade-offs, reviewed version-controlled changes, CI, testing and relevant accessibility/security/privacy, reproducibility, recovery, reports, defense and handover. Provide a worked requirement-to-evidence example, project-type adaptations, a readiness audit and actual downloadable English/Bangla evidence templates. Department rubrics, supervisor decisions and ethics/safety rules take priority; the guide is not certification. Link it contextually from roadmaps, foundations, goals and footer without adding a large homepage section or progress tracking.

Test all new routes and relationships, downloads, language equivalents, keyboard/no-JavaScript behavior, responsive layouts, themes, metadata, external sources and bounded analytics. Run the complete validation cycle against root and project-Pages production output; fix defects and keep documentation/validation records accurate.

Build the **complete, production-quality CSE Compass static website** described by `DESIGN.md` and `SKILL.md`.

This is not a request for:

- a prototype;
- a wireframe;
- a partial scaffold;
- placeholder pages;
- a few sample components;
- TODO markers for later implementation.

Implement the complete usable website.

# Product constraints

Preserve all established product decisions, including:

- Astro as the primary framework;
- TypeScript with strict typing;
- React only for interactive islands where justified;
- Yarn strictly — never npm;
- static build only;
- GitHub Pages deployment;
- no backend;
- no database;
- no authentication;
- no login/logout;
- no accounts;
- no progress tracking;
- no LMS behavior;
- no server runtime;
- English as the default language;
- natural, humanized Bangla as the second language;
- light theme as default;
- optional fully designed dark theme;
- mobile-first and fully responsive UX;
- Google Analytics 4 integration through the documented abstraction;
- privacy-conscious analytics;
- SEO-first static rendering;
- accessibility targeting WCAG 2.2 AA.

# Product identity

The official product name is:

**CSE Compass**

Primary tagline:

**Find your direction in CSE.**

Positioning:

**A practical career compass for CSE students in the AI era.**

Use the compass/navigation metaphor intelligently and sparingly.

Do not turn the interface into a literal compass-themed gimmick.

# Design implementation

Implement the complete visual system described in `DESIGN.md`.

The default light theme should feel like:

- modern university orientation;
- editorial;
- warm and approachable;
- academically credible;
- appropriate for an 18–22-year-old audience.

Avoid generic AI-generated SaaS styling.

In particular avoid:

- excessive gradients;
- neon effects;
- repetitive rounded three-card grids;
- meaningless dashboard widgets;
- generic robot mascots;
- stock-photo education imagery;
- excessive visual clutter.

The dark theme must feel like a focused late-night engineering/study environment while remaining part of the same brand.

Pay particular attention to dark-mode contrast for:

- people/mentor illustrations;
- clothing;
- laptops;
- AI-related illustrations;
- card boundaries;
- icons;
- muted text;
- focus indicators.

Nothing important may visually merge into the background.

# Homepage

Implement the complete homepage experience from `DESIGN.md`, including:

1. Header/navigation
2. Purpose-first illustrated hero: “Free career guidance for CSE students” followed by the student-problem-first punch line “You got into CSE. Now what?” Explain useful outcomes, include practical reassurance, a prominent “Help me find my next step” action, future-self encouragement and a four-stop orientation map
3. AI reality / AI-resilience section immediately after the hero, with the AI study-partner illustration
4. Three visible starting intentions (new/unsure → fresher guide; explore careers → career index; prepare for a goal → goal hub), with all six detailed situations inside a native disclosure and visible practical reassurance for students restarting
5. Concise “Before you choose anything…” reality check and veteran orientation voices (two visible, three in a native disclosure)
6. Career landscape reveal: all eight families, without a duplicate featured-careers section
7. Practical motivation throughout, attached to achievable next actions rather than guarantees
8. “Try before you choose” experiments
9. Understand → Explore → Compare → Try → Prepare → Adapt journey
10. Closing orientation message
11. Meaningful footer

Do not reduce the homepage to a generic marketing landing page.

Keep purpose and benefit ahead of navigation: a first-time visitor should understand who the site is for, what they can find and where to begin. Use shared typed English/Bangla introduction and entry data. On phones, keep the primary action before the artwork and fully within the tested initial viewport. Preserve all existing detailed guides, career families, motivation and inclusive artwork. Use student questions to introduce career exploration, experiments and learning/goal preparation. Test all three entry journeys, the six-situation disclosure, keyboard/no-JavaScript use and bounded analytics in both base-path modes.

Use `themes-sample.png` as the visual mood reference: cool off-white/navy light theme, midnight-navy dark theme, editorial hero typography, clear mentor and robot silhouettes. Keep the CSE Compass brand and original generated illustrations; do not copy the sample artwork. Use the checked-in assets and provenance in `docs/illustrations.md`.

The hero artwork must welcome students of different genders and ethnicities: show three young adult teammates in one static original study-partners illustration. A Chakma Bangladeshi woman stands in the centre with a QA checklist tablet and stylus, between a woman and man each working on a laptop. Keep all three equally prominent and fully visible on phones and in both themes. Do not reintroduce a lone-male default or hide representation in rotating slides. Preserve the future-self encouragement, use accurate English/Bangla alt text, and add no carousel dependency or autoplay motion. Chakma representation in the illustration does not add a third site language.

The teammates must look welcoming and engaged in technology, not romance: all look toward the viewer with relaxed casual smiles and clear personal space. The seated woman wears a teal hoodie and a stylishly draped ivory orna covering all her hair; the man retains his navy hoodie and glasses. The Chakma teammate wears contemporary professional clothing with a restrained Chakma-textile-inspired shoulder cloth; document the reference and do not claim exact traditional-dress authenticity or infer identity from facial features. Her visible checklist/stylus communicates active QA work, not a decorative observer or supervisory hierarchy. No career role is prescribed by gender or ethnicity. Keep the notebook's technical diagram, coffee, water bottle and small indoor plant on the desk. Preserve coherent devices and grounded props; avoid mutual gazing, inward leaning or romantic posing. Verify the actual artwork, not only its alt text. This three-person, viewer-facing direction supersedes earlier two-person/downward-gaze requirements.

Keep the homepage focused: preview three experiments and link to the complete published experiment index (currently fourteen); derive counts from data and do not reduce the detail pages. In the orientation map and useful loop, group every caption with its title and make every step a working link. Reset inherited list margins for grid/flex components. Breadcrumbs must align with the page content, and desktop navigation must remain visible after mobile breakpoint changes.

## Goal-based guidance expansion

Implement and preserve the complete seven-goal preparation layer specified in DESIGN.md: global companies/advanced engineering, Bangladesh industry, remote employment, study abroad, thesis/research/publication, freelancing and tech business. Do not collapse distinct goals into one generic advice page. Every guide needs meaningful branches, staged tasks, evidence criteria, not-yet guidance, pitfalls, AI responsibility, a practical action this week, scoped dated official references and related career roadmaps.

Career roadmaps answer what to learn; goal guides answer how to apply it. Integrate a compact homepage starting-point entry, By career/By goal Roadmaps navigation, contextual career/roadmap links and the “I’m Lost” goal choice. Keep the homepage focused and AI Reality immediately after the hero. Use static Astro templates, native anchors/disclosure and complete English/Bangla parity, without accounts, scores or progress storage.

Publish full Mobile App Development and UX/UI Engineering careers, including roadmaps, experiments, comparison, AI guidance and free learning resources. Distinguish native/cross-platform mobile choices and UX/product design/UI engineering/frontend responsibilities. Do not require every mobile stack or paid design tooling. Maintain the original eight career families with fourteen complete careers.

Verify all new journeys, sources, bilingual metadata, structured data, keyboard/no-JavaScript use, mobile/tablet/desktop, both themes and root/project-Pages builds. Extend content-integrity, E2E, accessibility and bounded analytics tests. Update README.md, DESIGN.md, SKILL.md and validation records truthfully; do not substitute documentation updates for completed functionality or real test execution.

# Core experiences

Implement the complete site experiences described in the specifications:

- career-family exploration;
- individual career pages;
- career comparison;
- practical career experiments;
- career roadmaps;
- curated free learning resources;
- AI-resilience guidance;
- Task Automation Exposure;
- “I’m Lost” navigation;
- “Where are you right now?” navigation;
- competitive-programming / ACM / ICPC guidance;
- software-engineering-foundations guidance;
- SOLID / Design Patterns / Clean Code / Code Smells / Refactoring / Testing guidance at mentor level;
- “what not to learn yet” guidance;
- realistic career drawbacks;
- relevant next-step navigation;
- recovery guidance for students who feel behind.

Do not turn these into long tutorial courses.

CSE Compass guides students toward learning; it does not replace learning resources.

# Content quality

Do not fill the site with generic placeholder text.

Create meaningful, credible, concise content that follows the mentoring model in `DESIGN.md`.

Content should answer:

- What is this?
- Why does it matter?
- When should I learn it?
- How deeply should I learn it now?
- What should I avoid learning too early?
- Where can I learn it well?
- What should I try?
- What should I do next?

Use motivation, intelligent humor, curiosity, reality checks, occasional suspense, and scenario-driven exploration as specified.

Do not overuse jokes.

Do not use fake testimonials.

Do not invent named professionals or employers for veteran voices.

# Learning resources

Add carefully curated high-quality free learning resources contextually beside the appropriate roadmap steps.

Prefer:

- official documentation;
- respected university material;
- reputable open courses;
- established labs;
- open textbooks;
- trusted practice platforms.

For each resource, include where appropriate:

- provider;
- type;
- why it is recommended;
- what portion the student should complete;
- whether deeper material can wait;
- last-reviewed metadata.

Do not create huge resource directories.

Prefer:

**Learn → Practice → Go Deeper (optional)**

# Bilingual implementation

English is the canonical/default language.

Bangla must be a first-class version of the product.

Do not generate literal machine-style Bangla translations.

Bangla should sound natural to Bangladeshi CSE students.

Keep technical terminology in English where that is natural.

Ensure:

- equivalent English/Bangla routes;
- equivalent-page language switching;
- correct `lang`;
- localized metadata;
- `hreflang`;
- natural Bangla humor;
- natural Bangla mentoring language;
- responsive Bangla typography.

# Responsive implementation

Treat responsiveness as a primary requirement.

Test and intentionally design for:

- narrow mobile;
- normal mobile;
- tablet;
- laptop;
- large desktop.

Do not merely shrink desktop layouts.

Pay special attention to:

- career comparison;
- roadmaps;
- career-family navigation;
- “I’m Lost”;
- theme/language controls;
- diagrams;
- timelines;
- Bangla text;
- external learning-resource cards.

No important interaction may depend on hover.

# Accessibility

Implement and verify WCAG 2.2 AA-oriented accessibility.

Include:

- semantic landmarks;
- correct heading hierarchy;
- skip navigation;
- keyboard navigation;
- visible focus;
- accessible menus;
- accessible theme/language controls;
- appropriate ARIA only where needed;
- adequate contrast in both themes;
- reduced-motion support;
- meaningful alt text;
- non-color-only meaning;
- appropriate touch targets.

Automated accessibility testing alone is not sufficient. Perform manual keyboard-oriented review of critical flows.

# SEO

Treat SEO as a first-class engineering requirement.

Implement and verify:

- static-rendered essential content;
- unique title per page;
- useful meta descriptions;
- canonical URLs;
- Open Graph metadata;
- social sharing metadata;
- sitemap;
- robots.txt;
- semantic HTML;
- descriptive URLs;
- meaningful internal linking;
- breadcrumb/schema markup where appropriate;
- localized metadata;
- `hreflang` for English/Bangla equivalents;
- correct language attributes;
- structured data where genuinely useful;
- image alt text;
- optimized images;
- strong Core Web Vitals;
- no unnecessary client-side rendering;
- no duplicate-content problems;
- correct GitHub Pages base-path behavior.

Review SEO for:

- homepage;
- career pages;
- roadmaps;
- experiment pages;
- AI guidance;
- English pages;
- Bangla pages.

# Performance

Keep the site highly static.

Do not hydrate React unnecessarily.

Optimize:

- JS bundle size;
- images;
- fonts;
- layout stability;
- first render;
- third-party scripts;
- analytics loading.

Use Astro islands only when an interaction genuinely requires client-side behavior.

# Analytics

Implement GA4 using the abstraction required by `SKILL.md`.

Support the documented events, including:

- `language_switch`
- `theme_switch`
- `starting_point_selected`
- `career_family_opened`
- `career_viewed`
- `career_compared`
- `roadmap_viewed`
- `career_experiment_started`
- `ai_guidance_viewed`
- `im_lost_used`
- `learning_resource_clicked`
- `next_step_clicked`

Do not send:

- names;
- emails;
- free-form student text;
- personal profiles;
- sensitive information;
- hidden user IDs.

Make analytics optional/configurable for local and test environments.

# GitHub Pages

Ensure the site works both as:

- a root GitHub Pages site; and
- a project site under `/repository-name/`.

Do not hard-code `/` assumptions.

Validate asset paths, navigation, sitemap/canonical configuration and localized routes under the configured `base`.

Create a reliable GitHub Actions deployment workflow.

# Yarn

Use Yarn exclusively.

Requirements:

- enable Corepack;
- pin Yarn through `packageManager`;
- commit `yarn.lock`;
- use `yarn install --immutable`;
- never generate or commit `package-lock.json`;
- never document npm commands.

# Engineering quality

Use:

- strict TypeScript;
- clear domain/content types;
- Astro content schemas or equivalent validation;
- reusable design primitives;
- centralized site configuration;
- centralized brand metadata;
- centralized route definitions where useful;
- centralized analytics event definitions;
- semantic design tokens;
- minimal duplication;
- no unexplained magic strings;
- no unnecessary abstractions.

Do not overengineer the static site.

# Testing

Implement meaningful automated tests.

At minimum cover:

## Unit tests

- route utilities;
- locale/equivalent-page mapping;
- theme behavior;
- decision-tree logic;
- comparison logic;
- analytics payload shaping;
- data transformations.

## Content-integrity tests

Detect:

- duplicate IDs;
- invalid slugs;
- missing references;
- missing roadmaps;
- missing experiments;
- invalid career relationships;
- broken internal navigation;
- required missing sections;
- invalid AI exposure values;
- missing required translations;
- malformed resource metadata.

## End-to-end tests

Verify:

- homepage;
- English/Bangla switching;
- light/dark switching and persistence;
- mobile navigation;
- “Where are you right now?”;
- “I’m Lost”;
- career exploration;
- career comparison;
- career → roadmap;
- career → experiment;
- AI guidance;
- learning-resource links;
- GitHub Pages base-path behavior.

## Accessibility tests

Run automated checks on critical routes and manually verify keyboard navigation.

# Verification loop

Do not stop after implementation.

After implementing the complete site:

1. install dependencies with Yarn;
2. run formatting checks;
3. run lint;
4. run TypeScript/Astro type checking;
5. run unit tests;
6. run content-integrity tests;
7. run accessibility tests;
8. run end-to-end tests;
9. run the production build;
10. inspect build warnings;
11. test GitHub Pages base-path behavior;
12. inspect responsive layouts;
13. inspect both themes;
14. inspect English and Bangla;
15. inspect critical SEO metadata;
16. inspect accessibility;
17. inspect browser console errors;
18. inspect broken internal links;
19. inspect external resource links where practical;
20. fix every defect found;
21. repeat the verification cycle until clean.

Do not report a failed test and stop if the failure can be fixed.

Fix it.

Run the relevant tests again.

Continue until the repository is in a genuinely stable state.

# Quality review

Before declaring completion, critically review the product as if you were:

1. a CSE fresher using it from a phone;
2. a third-year student who feels behind;
3. a student worried about AI;
4. a Bangla-speaking student;
5. a university faculty member evaluating credibility;
6. an accessibility reviewer;
7. an SEO reviewer;
8. a maintainer adding a new career next year.

Fix issues discovered during that review.

# Visual review

Review viewport-sized crops as well as full-page screenshots. Explicitly inspect the orientation map, useful loop, breadcrumb alignment, desktop navigation, mobile menu keyboard behavior, mentor disclosure, both illustrations, and Bangla line wrapping. Test 320px, 390px, 768px, 1280px and 1600px widths, both languages and both themes. A successful build or an overflow check alone is not a visual review.

Specifically inspect:

- homepage visual hierarchy;
- excessive card usage;
- generic AI-SaaS appearance;
- mobile layout;
- dark-theme contrast;
- Bangla wrapping;
- mentor notes;
- career comparison;
- roadmap readability;
- experiment pages;
- CTA hierarchy;
- footer;
- empty states.

Do not accept technically correct but visually poor output.

# Documentation

Create or update `README.md` so that a new maintainer can understand:

- what CSE Compass is;
- product non-goals;
- architecture;
- stack;
- prerequisites;
- Yarn/Corepack;
- local development;
- testing;
- build;
- content architecture;
- adding a career;
- adding a roadmap;
- adding an experiment;
- adding learning resources;
- English/Bangla content rules;
- themes;
- analytics;
- SEO;
- GitHub Pages deployment.

Use Yarn commands only.

# Attribution and inspiration

Preserve the attribution/provenance and inspiration requirements already defined in `DESIGN.md`.

Keep roadmap.sh and Architect Prep credits visible in the shared footer, with a localized link to About `#credits`. Credit MD. Amjad Hossain as Creator & Orchestrator, ChatGPT for requirement/design discussions, and Codex for implementation and iteration. Preserve these distinct roles in English and Bangla; do not imply affiliation or endorsement. Keep the acknowledgment compact and secondary to student navigation. Update README and the shared typed credit content together when provenance changes.

For repository cleanup, remove only verified obsolete files. Preserve active illustration masters, the authoritative theme reference, source routes, tests, build configuration and documentation. Retired imagery can remain recoverable through Git history rather than as unused working-tree binaries. Report exactly what was removed and do not claim deployed-byte savings for assets that were never emitted.

Do not copy design, content, or copyrighted material from inspiration websites.

# Completion requirements

Do not declare the project complete merely because `yarn build` succeeds.

Completion requires:

- all major requirements from `DESIGN.md` implemented;
- all engineering requirements from `SKILL.md` implemented;
- no placeholder core experiences;
- no unresolved TODOs for required functionality;
- tests passing;
- lint passing;
- type checking passing;
- build passing;
- accessibility reviewed;
- responsive behavior reviewed;
- dark/light themes reviewed;
- English/Bangla reviewed;
- SEO reviewed;
- GitHub Pages deployment configuration complete.

When finished, provide a concise final implementation report containing:

1. what was implemented;
2. important architecture decisions;
3. tests/checks executed;
4. final results of each check;
5. SEO work completed;
6. accessibility work completed;
7. responsive/theme/language verification performed;
8. any remaining limitations that genuinely cannot be resolved within this repository.

Do not claim something was tested unless you actually tested it.

Do not ask me to manually complete work that can reasonably be completed within the repository.

Proceed through implementation, verification, bug fixing, and final quality review until the complete site is ready for me to inspect.

### Final-year team-workflow extension

Preserve the seven-stage final-year project guide and add actionable, bilingual team operations: a realistic milestone plan; one shared task board; outcome-to-task decomposition; Ready/Done criteria; owners, reviewers, dependencies and blockers; day-one Git/repository setup; a lightweight branch/PR/review/merge workflow; safe conflict/recovery practices; async updates, useful sync-up agendas and written decisions; risk-based testing, reproducible defects, regression, CI, release and handover. Distinguish editorial student-sized suggestions from official source requirements. Do not mandate heavyweight Gitflow or paid tools.

Use progressive disclosure and task-oriented anchors so students can find one useful next action without reading everything. Provide ten reusable templates whose on-page fields and English/Bangla Markdown downloads share typed source data. Test expanded content, keyboard/no-JavaScript navigation, downloads, scoped references and bounded analytics. Preserve all previous stages, project-type adaptations, source caveats, route/base behavior and privacy constraints. Do not add a task tracker or large homepage section.

For architecture and optimization questions, inspect the actual repository, installed framework defaults and production output. Explain where the Astro structure follows conventions and where generated assets are optimized; explicitly distinguish bundled JS/CSS and compact HTML from unprocessed public/inline content and HTTP compression. Update README, DESIGN, SKILL and the validation/audit records to match verified behavior; never report a check that was not performed.
