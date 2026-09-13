You are responsible for implementing the complete **CSE-Pothik** website in this repository.

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

Keep English as default and Bangla as the sole additional language. Do not introduce third-language routes, translation fallbacks or fonts. Replace the unclear homepage “salary reel” wording with direct career-orientation language. Use the refined open compass-C vector identity consistently in the site and favicon; preserve an original, professional social-sharing image and document its provenance.

Maintain seventeen complete careers across eight families. Network Engineering, Hardware Engineering and Software QA & Testing require the same career, comparison, five-stage roadmap, experiment, AI exposure, localized content and curated-resource depth as the other paths. The same applies to Data Analytics & BI, AI Engineering and Application Security. Distinguish analytics from data-pipeline ownership, AI product/evaluation engineering from ML modelling/research, and application security from broad security operations. Use role-specific roadmap tasks/resources. Keep all security exercises explicitly authorized, hardware experiments simulator-first, and QA work scoped to owned apps. Do not require paid exams, equipment, model APIs or hosted services for starter experiments.

Publish a complete bilingual final-year project standards guide at `/guidance/final-year-project/`, with equivalent `/bn/` navigation. Cover problem definition, testable requirements, design trade-offs, reviewed version-controlled changes, CI, testing and relevant accessibility/security/privacy, reproducibility, recovery, reports, defense and handover. Provide a worked requirement-to-evidence example, project-type adaptations, a readiness audit and actual downloadable English/Bangla evidence templates. Department rubrics, supervisor decisions and ethics/safety rules take priority; the guide is not certification. Link it contextually from roadmaps, foundations, goals and footer without adding a large homepage section or progress tracking.

Publish a complete bilingual transition guide for final-semester students, recent graduates and other early-career entrants who already have a project or target and need a first internship, trainee or junior software role. Before the longer Target → Strengthen → Present → Practise → Apply → Improve loop, let students choose among three honest entry routes: strong competitive problem solving, some but inconsistent problem solving, or little competitive-programming experience. Explain that some local hiring pipelines may weigh problem solving and OOP heavily, while other suitable entry roles can value project delivery, testing, UI, implementation, support or domain evidence; these are different role fits, not guaranteed shortcuts. Every route must retain a minimum problem-solving floor, practical engineering evidence and an apply-when checkpoint. Support direct entry from project, CV/portfolio, interview, application and feedback bottlenecks. Make ACM/ICPC optional rather than a universal prerequisite, treat CGPA as one supporting signal, and teach honest project evidence without fabricated teamwork or rewritten history. Keep the guide generic across relevant software roles, name no local employer, and make the route chooser discoverable from navigation, homepage, both situation flows, recovery/final-year guidance, Competitive Programming, local-industry preparation, relevant careers/roadmaps, employment goals and search. Use scoped dated official references, static SEO metadata and no account, live vacancy feed, progress score or job guarantee.

Test all new routes and relationships, downloads, language equivalents, keyboard/no-JavaScript behavior, responsive layouts, themes, metadata, external sources and bounded analytics. Run the complete validation cycle against root and project-Pages production output; fix defects and keep documentation/validation records accurate.

Build the **complete, production-quality CSE-Pothik static website** described by `DESIGN.md` and `SKILL.md`.

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

**CSE-Pothik**

Primary tagline:

**Find your direction in CSE.**

Positioning:

**A practical career guide for CSE students in the AI era.**

Use the Pothik/path metaphor intelligently and sparingly. The student is the traveller; the product helps them read the landscape, compare routes and choose the next useful step.

Do not turn the interface into a literal travel-themed gimmick.

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

1. Responsive problem-oriented navigation: a persistent labeled sidebar on wide screens, a compact sticky brand/menu header with the same grouped native drawer on phones/tablets, and one shared sticky breadcrumb context bar containing inline Search, language and theme controls
2. Purpose-first illustrated hero: “Free career guidance for CSE students” followed by the student-problem-first punch line “You got into CSE. Now what?” Explain useful outcomes, include practical reassurance, a prominent “Help me find my next step” action, future-self encouragement and a four-stop orientation map
3. AI reality / AI-resilience section immediately after the hero, with the AI study-partner illustration, a visible Frame → Verify → Own decision tree and a native disclosure comparing thin-context, rich-context/weak-review and fundamentals-led fresher outcomes
4. Three visible starting intentions (new/unsure → fresher guide; explore careers → career index; prepare for a goal → goal hub), a compact visible first-role bridge, all seven detailed situations inside a native disclosure and practical reassurance for students restarting
5. Concise “Before you choose anything…” reality check and two real Bangladesh-technology video perspectives, linking to a complete ordered nine-item watchlist
6. Career landscape reveal: all eight families, without a duplicate featured-careers section
7. Practical motivation throughout, attached to achievable next actions rather than guarantees
8. “Try before you choose” experiments
9. Understand → Explore → Compare → Try → Prepare → Adapt journey
10. Closing orientation message
11. Meaningful footer

Do not reduce the homepage to a generic marketing landing page.

Keep purpose and benefit ahead of navigation: a first-time visitor should understand who the site is for, what they can find and where to begin. Use shared typed English/Bangla introduction and entry data. On phones, keep the primary action before the artwork and fully within the tested initial viewport. Preserve all existing detailed guides, career families, motivation and inclusive artwork. Use student questions to introduce career exploration, experiments and learning/goal preparation. Test all three entry journeys, the seven-situation disclosure, keyboard/no-JavaScript use and bounded analytics in both base-path modes.

At the start of the homepage, make the AI-era value proposition explicit: AI can generate code, but useful engineering still requires a person to frame the real problem, supply relevant context, verify plausible output, understand business and human consequences, choose trade-offs and own the result. Teach this through a short bilingual **Frame → Verify → Own** decision tree immediately after the hero. Put the longer fresher/company-AI/tech-lead scenario in native progressive disclosure so it remains available without making the initial page scan longer. Contrast thin context, rich team context without sufficient reviewer understanding, and foundations-led AI assistance. Discuss review cost, defects, security, maintainability, token/tool dependence and escalation without claiming that AI is always slower, that one architecture is universally correct or that any role is safe from change.

Treat coding fluency, algorithms and data structures as useful but insufficient on their own. Emphasize core computing principles, analytical problem-solving, debugging, testing, creativity, product/business context, communication and accountable judgment. On the Software Engineering Foundations guide, explicitly teach Clean Code, Code Smells, Refactoring, SOLID Principles, Design Patterns and Defensive Programming as lenses for understanding, reviewing and safely changing AI-assisted code. For each topic state why it matters more when AI can produce plausible output quickly, when to learn it, enough-for-now depth, one small practice and one misuse to avoid. Present SOLID and design patterns as conditional vocabulary—not a checklist or a universal fresher hiring prerequisite. Teach defensive validation and explicit failure at user-input, API, file, database, dependency and AI-output boundaries without encouraging swallowed exceptions, secret logging or checks scattered without purpose. Encourage students to use AI, ask for alternatives, prefer the simplest adequate design, verify with evidence and seek human review for consequential or hard-to-reverse decisions. Use the supplied focused Refactoring.Guru URLs for Clean Code, Code Smells and Design Patterns with scoped bilingual guidance and safe outbound-link behavior.

Replace anonymous or invented “veteran voice” quotations with the supplied public videos and podcast episodes from Bangladesh technology practitioners, leaders and educators. Keep two contextual previews on the homepage and publish all nine in a deliberate **Ground yourself → Strengthen how you think → Read the working world** order at `/resources/#industry-voices`. Every item needs a verified public title/publisher, speaker where named, bilingual editorial “watch for” context, safe new-tab behavior and bounded resource-click analytics. Do not embed YouTube, autoplay media, download thumbnails or treat any speaker as an infallible authority. Teach four checks before following advice: context/experience, specifics/trade-offs, corroboration with reliable sources and role requirements, and whether the advice produces a small safe action rather than only hype or fear. The title claiming “95%” is third-party presentation, not a CSE-Pothik statistic.

Keep the homepage an orientation router rather than a complete textbook. Preserve all eight visible career-family summaries but progressively disclose their individual career links. Keep the six-step useful loop in static native disclosure. Use the two existing purposeful illustrations and restrained CSS micro-motion rather than decorative stock art, autoplay, carousels or hydration; all motion must stop under `prefers-reduced-motion`.

Use the site’s origin story wisely. The homepage carries only a short, nonjudgmental problem-and-recovery arc: attraction to CSE, a missing orientation layer, semesters of drift, and the fact that direction can still be rebuilt. The localized About page contains the fuller narrative, a four-stage visual sequence, and explicit Purpose and Goal statements. It may acknowledge that graduation pressure often sends a student to social-media groups asking where to begin; present asking for help as sensible, while naming the real cost as receiving a map only when time and confidence already feel scarce. Resolve into one evidence-producing next step, not fear. Preserve software engineering, QA, competitive programming and research as legitimate examples while making clear that they are not the whole computing landscape. Avoid invented prevalence, blame, fatalistic “missed the train” language or university endorsement. Source all repeated English/Bangla story copy from typed data and test both rendered versions.

Use `themes-sample.png` as the visual mood reference: cool off-white/navy light theme, midnight-navy dark theme, editorial hero typography, clear mentor and robot silhouettes. Keep the CSE-Pothik brand and original generated illustrations; do not copy the sample artwork. Use the checked-in assets and provenance in `docs/illustrations.md`.

The hero artwork must welcome students of different genders and ethnicities: show three young adult teammates in one static original study-partners illustration. A Chakma Bangladeshi woman stands in the centre with a QA checklist tablet and stylus, between a woman and man each working on a laptop. Keep all three equally prominent and fully visible on phones and in both themes. Do not reintroduce a lone-male default or hide representation in rotating slides. Preserve the future-self encouragement, use accurate English/Bangla alt text, and add no carousel dependency or autoplay motion. Chakma representation in the illustration does not add a third site language.

The teammates must look welcoming and engaged in technology, not romance: all look toward the viewer with relaxed casual smiles and clear personal space. The seated woman wears a teal hoodie and a stylishly draped ivory orna covering all her hair; the man retains his navy hoodie and glasses. The Chakma teammate wears contemporary professional clothing with a restrained Chakma-textile-inspired shoulder cloth; document the reference and do not claim exact traditional-dress authenticity or infer identity from facial features. Her visible checklist/stylus communicates active QA work, not a decorative observer or supervisory hierarchy. No career role is prescribed by gender or ethnicity. Keep the notebook's technical diagram, coffee, water bottle and small indoor plant on the desk. Preserve coherent devices and grounded props; avoid mutual gazing, inward leaning or romantic posing. Verify the actual artwork, not only its alt text. This three-person, viewer-facing direction supersedes earlier two-person/downward-gaze requirements.

Keep the homepage focused: show three representative experiments immediately, place the Data Analytics & BI, AI Engineering and Application Security previews in a native progressive disclosure, and link to the complete published experiment index (currently seventeen); derive counts from data and do not reduce the detail pages. In the orientation map and useful loop, group every caption with its title and make every step a working link. Reset inherited list margins for grid/flex components. Every page, including Home, must use one content-aligned sticky context bar combining breadcrumbs, local bilingual search, language and theme. It sits at the viewport top beside the desktop sidebar and below the sticky mobile header, with exactly one `aria-current` item, safe narrow-screen truncation, anchor clearance and a no-JavaScript mobile offset. Do not create a second utility bar or standalone search route. Desktop navigation must remain visible after mobile breakpoint changes.

## Goal-based guidance expansion

Implement and preserve the complete seven-goal preparation layer specified in DESIGN.md: global companies/advanced engineering, Bangladesh industry, remote employment, study abroad, thesis/research/publication, freelancing and tech business. Do not collapse distinct goals into one generic advice page. Every guide needs meaningful branches, staged tasks, evidence criteria, not-yet guidance, pitfalls, AI responsibility, a practical action this week, scoped dated official references and related career roadmaps.

Career roadmaps answer what to learn; goal guides answer how to apply it. Integrate a compact homepage starting-point entry, By career/By goal Roadmaps navigation, contextual career/roadmap links and the “I’m Lost” goal choice. Keep the homepage focused and AI Reality immediately after the hero. Use static Astro templates, native anchors/disclosure and complete English/Bangla parity, without accounts, scores or progress storage.

Publish full Mobile App Development and UX/UI Engineering careers, including roadmaps, experiments, comparison, AI guidance and free learning resources. Distinguish native/cross-platform mobile choices and UX/product design/UI engineering/frontend responsibilities. Do not require every mobile stack or paid design tooling. Maintain the original eight career families with seventeen complete careers.

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
- SOLID Principles / Design Patterns / Clean Code / Code Smells / Refactoring / Defensive Programming / Testing guidance at mentor level, including why each matters when reviewing AI-assisted code;
- “what not to learn yet” guidance;
- realistic career drawbacks;
- relevant next-step navigation;
- recovery guidance for students who feel behind.
- bilingual inline static search in the shared breadcrumb context bar across
  careers, roadmaps, experiments, goals, guidance and curated resources, with
  mentor-path fallbacks, no standalone search route and no query analytics;

Expose Competitive Programming (ACM / ICPC) as a distinct practice track under Understand Computing Deeply, not as a conventional career ID. Give it a bounded six-week learn → honest attempt → submit/debug/log → review/transfer loop, retain real-project practice and curate the user-supplied Shafaet's Planet and Amirul Islam Bangla programming references without copying their curriculum or implying endorsement.

Do not turn these into long tutorial courses.

CSE-Pothik guides students toward learning; it does not replace learning resources.

# Content quality

Maintain the dedicated future-of-CSE editorial in both languages. It is a dated,
evidence-based AI synthesis credited to GPT-6 Astra (High), not an official
OpenAI forecast or a guarantee of unbiased future truth. Show the working prompt
used, distinguish source findings from conditional predictions, include evidence
of entry-level risk as well as opportunity, and state geographical limits and
what would change the outlook. Keep it discoverable from Future navigation,
search and AI guidance without lengthening the homepage. Preserve the distinct
Codex implementation credit for GPT-5.6 Sol (High) and GPT-6 Astra (High).
Follow DESIGN and SKILL for content, static rendering, metadata, localization,
source maintenance and validation.

Maintain one public prompt specifically for generating and rechecking the
future-of-CSE page. Keep runtime selection separate from prompt instructions;
state role, exact task, evidence rules, required page structure, writing
contract and stopping condition without prompt-history clutter. Credit human
purpose/publication decisions and AI research narration accurately. Do not claim
a universal or empirically proven token optimum, exact output reproducibility or
that prompt text can switch the selected model and reasoning effort.

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

Treat *The Accidental CTO* as an optional narrative case study after basic backend and systems foundations. Use its scaling, reliability and leadership incidents to discuss trade-offs; never present its technology choices as a universal architecture recipe.

Prefer:

**Learn → Practice → Go Deeper (optional)**

# Bilingual implementation

English is the canonical/default language.

Bangla must be a first-class version of the product.

Do not generate literal machine-style Bangla translations.

Bangla should sound natural to Bangladeshi CSE students.

Use a consistent, respectful **আপনি** voice. Rewrite Bangla as conversational mentoring prose rather than preserving English sentence order. Translate ordinary interface and editorial labels; retain English only for technical terms that Bangladeshi students naturally use or where translation would reduce precision. Read long Bangla passages on their own and remove phrases that sound like machine-translated English with Bangla suffixes. Keep humor sparse, contextual and kind.

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

Use the shared bilingual intent groups for desktop and mobile navigation. The wide sidebar must show active location, preserve article width and scroll independently when needed. Keep Search, language and theme together in the breadcrumb context bar, never in another bar or in the drawer. Desktop exposes the text field and submit button; mobile/tablet reveals them from an accessible search icon in the same context bar. The mobile/tablet drawer must remain a native keyboard/no-JavaScript control with every destination reachable, while “I’m Lost” stays obvious. Keep the footer for compact project/policy/provenance links rather than duplicating the entire global navigation.

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

Treat the root homepage as the default shared-link introduction: its Open Graph/X title and description must state the free CSE career-guidance purpose, practical exploration and AI-era foundations. Deep links retain page-specific metadata. Declare the original PNG social card’s type, intrinsic dimensions and localized alternative text; do not route generic shares to About or Search.
- no unnecessary client-side rendering;
- no duplicate-content problems;
- correct GitHub Pages base-path behavior.

Keep task directories crawlable and scannable: group careers, experiments and
roadmaps by family, group the resource index by truthful resource type, provide
native jump links and use compact task-page heroes. Inline top-bar search is a
secondary browser-filtered utility with no generated route or sitemap entry.
Add accurate CollectionPage/ItemList and BreadcrumbList structured
data to editorial indexes where applicable; do not add schema merely for volume.

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

Configure the GitHub Pages production build with GA4 measurement ID `G-6GR5VBYXEQ`. Keep the existing privacy-conscious settings and bounded event abstraction. Expose `https://forms.gle/ZKyHbR9MHoebFbnWA` as a quiet bilingual footer invitation for voluntary feedback, opening in a safe new tab. Do not use a popup, embed, floating interruption or primary navigation item. The feedback-link click may use `next_step_clicked` with destination `feedback-form`; never send form responses, free text, email or contact preference to analytics. Explain the Google Forms provider boundary on the privacy page.

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

- what CSE-Pothik is;
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

Keep roadmap.sh, Architect Prep and Amirul Islam credits visible in the shared footer, with a localized link to About `#credits`. Credit Amjad Hossain for the idea and as Creator, AI Agent Orchestrator, reviewer and quality controller; link his name to his intended GitHub Pages portfolio at `https://amjadhossainrahat.github.io/` in a new tab, even while that portfolio is not yet published. Credit ChatGPT for idea polishing plus requirement/design analysis and finalization. Credit Codex using **GPT-5.6 Sol (High)** and **GPT-6 Astra (High)** for implementation and iteration. Preserve these distinct roles in English and Bangla; do not imply affiliation or endorsement. Keep the acknowledgment compact and secondary to student navigation. Update README and the shared typed credit content together when provenance changes.

For repository cleanup, remove only verified obsolete files. Preserve active illustration masters, the authoritative theme reference, source routes, tests, build configuration and documentation. Retired imagery can remain recoverable through Git history rather than as unused working-tree binaries. Report exactly what was removed and do not claim deployed-byte savings for assets that were never emitted.

Preserve the first-software-role guide as a practical bridge, not another large syllabus. Lead with a problem-solving-baseline route choice so a strong competitive programmer, a student building consistency and a student with little CP practice each receive a credible next action without shame. A student may then start from the bottleneck they have today, improve an existing project with one honest evidence-bearing iteration, prepare role-relevant interview fundamentals, apply in a controlled batch and diagnose where the process stops before changing one variable. Do not imply that a high CGPA, competitive-programming record, new project, role category or particular technology guarantees entry.

Use the broad BASIS industry catalog—not a single employer's career page—to help students discover categories of local technology employers, then tell them to verify vacancies on each employer's official page. Every outbound learning, guidance, inspiration, creator and repository link opens in a new tab with safe `noopener noreferrer` behavior and an accessible external-link indication. Keep internal navigation and same-page anchors in the current tab.

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

Audit spacing across every public UI route, not only the homepage. At desktop widths, top-level containers and breadcrumbs must align with the shared content frame, intentional readable line lengths must remain balanced, and a hidden conditional panel must not reserve an empty grid column. Every non-homepage top section must use both sides of the available desktop frame: pair the title with its explanation, actions or contextual panel instead of stacking all copy in one wide-but-visually-empty column. Preserve the compact single-column mobile flow. Protect these rules with an exhaustive generated-route desktop bounds/overflow/two-column-utilization check and a focused before/after interaction check for conditional layouts such as “I’m Lost.”

Keep the shared desktop canvas broad enough to leave compact gutters beside the fixed sidebar at common desktop widths. Let section grids use that canvas, but retain a separate readable measure for continuous prose. In the shared context bar, keep Search, language and theme together and align that control group to the inline end.

Treat the AI task-model title as a desktop spectrum: **Higher exposure → AI-assisted → responsibility-heavy** must remain one continuous line at and above the sidebar breakpoint, using a restrained responsive heading size rather than overflowing. Allow it to wrap naturally below that breakpoint. Test the minimum desktop, standard desktop, wide desktop and mobile containment in both languages.

### AI systems learning directive

Extend the existing AI Engineering roadmap rather than adding a competing top-level buzzword route. Teach this dependency order with concrete evidence at every step: explicit problem/specification and deterministic baseline → prompt contract and evaluation cases → retrieval/RAG with sources and refusal → visible deterministic workflow → one bounded agent loop → production evaluation, least privilege, guardrails, observability, rollout and rollback. Link the anchored section from the AI overview, bilingual static search and the detailed roadmap hero.

Place n8n as an optional implementation of a known workflow and OpenClaw as an optional agent runtime after students understand loop bounds and production trust. Explain OpenClaw's tool, credential, channel and host-access boundary. Delay multi-agent orchestration until one agent has been measured and a specific coordination problem remains. Treat AGI as a research horizon rather than an implementation layer or beginner prerequisite. Define Forward Engineering plainly as moving from explicit need and constraints through design, implementation, tests and evidence; do not imply a single proprietary definition.

Add a grounded-perspective choice to “I’m Lost” that links directly to `/resources/#industry-voices` and its Bangla equivalent while preserving progressive enhancement and no-JavaScript navigation. Let the complete English watchlist heading use the available desktop measure so it remains on one line where space permits; retain natural mobile wrapping. Protect terminology, source IDs, bilingual copy, anchor/base-path behavior, search discovery, no-JavaScript use, responsive containment, accessibility and external-link policy with content and browser tests.

Render the AI hub's “A path for builders” and the roadmap's “First project” as compact action panels rather than miniature page heroes. Use restrained heading scale and measure, group explanation with its CTA, lay the content out as two balanced desktop columns and stack it in reading order on mobile. Apply a shared callout-heading guard and include every public English/Bangla UI route in the desktop audit so equivalent oversized or cramped supporting headings cannot recur.

Use **Bangladesh tech leaders & practitioners** as the honest English section label. Do not use the blanket term “pioneers” without person-by-person historical evidence; continue to frame the videos as contextual perspectives rather than endorsements.
