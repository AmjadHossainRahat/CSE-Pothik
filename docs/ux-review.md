# Fresher UX review and repository cleanup

Reviewed 1–8 September 2026. This is a source-informed heuristic review, with targeted browser validation of the changed navigation, directories, search and recovery experience. It is not a usability study, measured conversion result or “best UX” certification. Actual test results and browser limitations are recorded in [validation.md](validation.md).

## Unified context bar, purpose story and sharing preview — 9 September 2026

Search was useful but visually buried among destination links, while language and theme controls occupied scarce space at the bottom of the desktop navigation rail. An interim revision moved them into a separate utility strip; review showed that this duplicated the top-bar hierarchy and separated actions from location context. The final design uses one sticky context bar only: breadcrumbs on the left and Search, language and theme on the right. Search is an inline field with a submit button on desktop and an accessible same-bar disclosure on mobile/tablet. It filters a lazy-loaded bilingual static index without changing the route, recording the query or creating a Search page. The sidebar therefore answers “where can I go?” while the context bar answers both “where am I?” and “how can I use this page?” Home receives the single current-location marker at the root; search results are actions, not navigation state.

The About story now names the real gap more carefully. CSE can begin with a bright promise but does not automatically explain what work suits a student or what to practise. The late-graduation social-media question is included as a recognizable moment without treating help-seeking as failure; the cost is receiving a map when time and confidence already feel scarce. Conversational Bangla uses its own sentence rhythm and resolves the story into a small evidence-producing step rather than fear or a “missed train” verdict.

The root URL is the deliberate sharing entry. Its Open Graph/X title and description introduce free CSE career guidance, real career paths, experiments, foundations and AI-era preparation; deep links retain page-specific previews. The existing original social card remains the visual because it already carries the professional brand and directional metaphor. Metadata now states the PNG type, 1731 × 909 dimensions and localized image alternative text. The resource index also includes _The Accidental CTO_ as a scoped post-foundation systems/leadership case study, not a universal architecture recipe.

## Persistent breadcrumb correction — 9 September 2026

The earlier audit verified breadcrumb alignment but did not test whether a reader retained location context after scrolling a long guide. That was a real UX omission. Breadcrumbs now live in the shared sticky context bar at the viewport top beside the desktop sidebar or immediately below the compact mobile header. The bar stays one row on narrow screens; its breadcrumb region preserves Home and parent context while truncating only the current-page label, and the search disclosure is viewport-bounded. Complete names remain available to assistive technology and the full page title remains in the document. The implementation also corrected an existing semantics defect where an intermediate non-link breadcrumb could receive `aria-current`; there is now exactly one current item. Scroll-position tests cover English and Bangla, 320px through 1280px, horizontal containment and the no-JavaScript mobile fallback.

## Naïve-student walkthrough and industry-entry routes — 8 September 2026

A fresh-session browser walkthrough followed the most likely first-time path: homepage purpose → new-student plan → career/goal choices → first software role. The opening purpose, 12-week beginner plan and mobile navigation provided useful orientation. The important failure appeared later: a near-graduate could reach a substantial first-role guide before seeing whether its advice matched strong competitive-programming experience, inconsistent problem solving or little CP practice. Competitive Programming and local-industry preparation also described their own topics without an obvious bridge between those baselines and an entry strategy.

The first-role page now presents three early, non-ranked routes. A strong competitive programmer keeps that hiring advantage while closing project, Git, testing and debugging gaps. A student with inconsistent problem solving develops a modest DSA floor and role evidence in parallel. A student with little CP practice is not told to wait or self-reject: the route uses existing project, implementation, testing, UI, support or domain evidence to investigate suitable responsibilities while still building a minimum problem-solving baseline. Each route says what to do now, what to do next and when an application is reasonable. The wording acknowledges that some local pipelines weigh problem solving and OOP heavily, but names no employer, promises no result and does not present QA, support or UI work as automatic back doors.

The full decision remains on one canonical guide. Compact exact-anchor entrances now appear in Start here navigation, the homepage first-role prompt, both situation flows, search, Competitive Programming and local-industry preparation. This reduces hunting and duplication: a student can enter by intent, see the matching route first, then continue into the existing Target → Strengthen → Present → Practise → Apply → Improve loop. Browser checks covered the complete English and Bangla route copy, anchored placement, the local-industry bridge, the CP bridge and the mobile drawer. This remains a heuristic walkthrough, not evidence that every student will select the best role or secure employment.

## Conversational Bangla editorial pass — 8 September 2026

The Bangla edition was reviewed as a mentoring experience rather than a literal mirror of English. Shared navigation, search, homepage orientation, AI guidance, career/roadmap/experiment templates, recovery routes, first-role guidance, goal introductions and the complete final-year-project standard now use a consistent respectful `তুমি` voice and more natural Bangla sentence order. Ordinary interface labels are localized; established technical vocabulary remains English where that is how Bangladeshi CSE students commonly use it. A small number of restrained, situational mentor asides replace mechanical copy without turning serious guidance into jokes. Content tests now protect representative surfaces from formal-pronoun drift and known English-only labels in Bangla branches.

## Compact AI action-panel hierarchy — 8 September 2026

The “A path for builders” and “First project” bridges combined hero-sized headings with body copy and a CTA in three narrow columns. The headings dominated supporting content, wrapped into tall blocks and made the sections feel disconnected from their actions. Both now use a compact two-column panel: the eyebrow/title establishes context on the left, while explanation and CTA form one action group on the right. Mobile retains the same semantic reading order in a single column.

A shared heading-size/measure guard now protects all callouts, not just these two instances. The every-public-route desktop browser audit detects any callout heading above the intended supporting scale, alongside its existing frame, overflow, breadcrumb and top-section checks. English desktop and Bangla mobile screenshots were inspected after the change. The media eyebrow now says “Bangladesh tech leaders & practitioners”; “pioneers” was rejected because it would make an unsupported historical claim about the entire list.

## Curated local voices instead of a motivation feed — 7 September 2026

Students surrounded by confident motivators and demotivators do not need another undifferentiated video wall. The supplied nine links are therefore placed as a deliberate listening path: first calm CSE-choice anxiety and audit student habits; then examine programming, problem solving and engineering judgment in the AI era; only then consider junior hiring, job loss, gaming-industry reality and business engineering. Two representative links replace the anonymous homepage “veteran” quotations, while the full sequence sits near the top of Resources in three native disclosures. This adds real voices without adding nine cards to the already long homepage.

Every item states who is speaking, who published it and what to listen for. The four-question advice filter asks about context, examples/trade-offs, corroboration and a useful next action. It also explicitly warns that the “95%” phrase is a third-party title, not this site's statistic. The site does not endorse every claim or infer unverified credentials. Search indexes each item but links to its always-visible stage heading so a result never lands inside a collapsed disclosure. Outbound links are privacy-conscious new-tab navigation rather than YouTube embeds, autoplay or remote thumbnails. This balances motivation, media literacy, performance and student agency; whether the sequence changes whom students trust still requires moderated research.

## AI-era motivation and homepage-length follow-up — 7 September 2026

The earlier AI block had the correct early placement and a useful “direct and verify” principle, but it was too abstract for a student worried that code generation had erased the value of learning. It did not show the failure modes created by missing problem context or by generated team patterns that a new engineer cannot explain, change or support. It also left core knowledge, analytical problem-solving, creativity, business context and accountable trade-offs implicit rather than making them the student's positive advantage.

The implemented response keeps the inclusive team hero and places a stronger AI message immediately after it. The visible **Frame → Verify → Own** decision tree asks whether the student can define the problem and “done,” challenge correctness/security/tests/maintainability, and justify a trade-off for the codebase, business and affected people. “Not yet” branches to clarification, a smaller task, missing foundations or human review; they are not shame states. A native disclosure then compares three hypothetical outcomes: generic output from thin context, sophisticated team-context output without enough reviewer understanding, and bounded AI use led by foundations, evidence and appropriate escalation. The scenario treats review load, defects, security, complexity and token/tool dependence as plausible risks, not universal predictions. It preserves coding, algorithms and data structures as useful skills while rejecting speed alone and pattern-checklist thinking.

The homepage remains long in total because it is a complete static orientation surface, but initial scanning is shorter. Every career-family title and description stays visible while individual career links are collapsed per family; the repeated six-step useful loop is also collapsed. At phone widths including 320px and 390px, the orientation map and family summaries stay single-column; the two-column layout begins at 480px when captions have useful room. Essential routes and all expanded content still work without JavaScript. This is preferable to removing paths, hiding the three main starting choices or replacing useful content with a carousel.

The site intentionally uses two original illustrations rather than decorative images on every section: the inclusive team establishes belonging, and the AI study partner supports the verification lesson. Additional visual interest comes from colored decision states, numbered flow connectors, native disclosure transitions and a restrained CSS signal pulse. The pulse is disabled by the global reduced-motion rule. This avoids stock-art repetition, autoplay and animation that competes with reading. Whether students find the result engaging still requires moderated observation; screenshot review and automated checks cannot measure boredom.

## First-role transition finding — 2 September 2026

A moderated walkthrough with one final-semester student exposed a distinct gap: she had a good CGPA, an independently completed final-year project and a software-development goal, but the site did not turn those assets into a clear internship or junior-role process. Career discovery, final-year quality and goal guidance existed, yet the next actions were scattered and still felt aimed at students choosing a direction.

The implemented response is a generic first-software-role bridge rather than a profile-specific prescription. It supports students entering from five common bottlenecks—project, presentation, interview, applications or feedback—and moves through Target → Strengthen → Present → Practise → Apply → Improve. Existing work is upgraded honestly instead of discarded; solo work stays labelled solo; CGPA is one signal; and ACM/ICPC is optional rather than presented as a universal prerequisite. The guide is visible in global navigation, homepage, situation/recovery paths, search, final-year guidance and relevant careers, roadmaps and employment goals without becoming another dominant homepage section.

This was one moderated observation, not a representative usability study or proof of employment outcomes. A useful follow-up is to ask several students with different backgrounds to find a relevant next action within 30 seconds, then observe first clicks, backtracking and whether they can explain what evidence they will produce next.

## Verdict

The site gives freshers a useful starting point, but students can still lose their bearings when entering a deep page or browsing long indexes. It needs clearer wayfinding more than additional homepage content or decoration. The primary hero action, situation-based choices, nonjudgmental encouragement and small experiments are strengths worth preserving.

At the initial review, the homepage connected “Find My Starting Point” to six situations and offered a fresher guide. That guide contains a finite 12-week plan and a next action into career families. Career roadmaps and goal-based preparation are distinguished on the Roadmaps index. These are good foundations, not evidence that every first-time visitor understands the distinctions.

## Completed: purpose-first homepage entry

The subsequent authorized homepage revision leads with “Free career guidance for CSE students” and restores the more memorable “You got into CSE. Now what?” punch line. It explains concrete uses and outcomes, and offers reassurance before asking the visitor to choose. The main action jumps to three readable intentions: new/unsure → fresher guide, explore careers → career index, prepare for a goal → goal hub. A compact first-role prompt now supports students with existing evidence, and all seven situations remain available through a native keyboard/no-JavaScript disclosure. Recovery encouragement stays visible.

Question-led section introductions explain what work involves, whether the visitor might enjoy it and what to learn next. The orientation map links exploration, experiments, roadmaps and goals. A short distinction between learning paths and goal preparation supports onward navigation. Existing AI placement, complete content, inclusive artwork and practical motivation are preserved. Shared bilingual data prevents entry labels and destination meanings from drifting. The mobile hero prioritizes purpose and the main action before artwork; tests protect initial-viewport action visibility, entry journeys and expanded disclosure accessibility.

This addresses homepage first impressions. The subsequent responsive-navigation and findability revisions below address global discovery, deep-link wayfinding, search and no-JavaScript recovery. Validation results belong in `validation.md`; no improved conversion or measured student comprehension is claimed.

## Completed: intent-based sidebar and mobile drawer

The global navigation now uses one typed bilingual source rather than separate desktop/mobile lists. Wide screens receive a persistent labeled sidebar grouped as Start here, Discover, Prepare, Future and About. Start here exposes an explicit Home link, the homepage next-step anchor, the fresher route and “I’m Lost”; the remaining groups expose careers, explicit comparison and experiment labels, roadmaps, goal plans, final-year guidance, AI, the site purpose and resources. The current route is marked with `aria-current` and a non-color-only treatment. On phones and tablets the toggle is visually icon-only while retaining its localized accessible name. This makes the origin/purpose available from any deep link instead of relying on the footer.

Phones and tablets keep their content width through a compact sticky bar and viewport-bounded native drawer using the same groups. The drawer works with keyboard and without JavaScript, supports Escape when enhanced, and preserves language/theme controls outside the disclosure. Responsive tests cover moving both directions across the breakpoint. The footer was reduced to project/policy/provenance links while retaining the required final-year, privacy, inspiration and collaborator information.

This implements the earlier Start here, explicit-label, preparation-group and current-location recommendations. It is a source-, automated-test- and visual-review-backed redesign, not evidence from a real-fresher usability study.

## Completed: focused career breadth without homepage overload

Work With Data now exposes Data Engineering and Data Analytics & BI; Build Intelligence exposes Machine Learning Engineering and AI Engineering; Protect Systems exposes Cybersecurity and Application Security. Each addition is a complete route graph rather than a label-only card. The homepage keeps its original three immediate experiments and places the three expanding paths in one native disclosure, while the dedicated index exposes all seventeen. This preserves fast scanning for a fresher and still makes the new choices discoverable without search or JavaScript.

Understand Computing Deeply now distinguishes its career guide from an ACM Programming / ICPC **practice track**. The separate callout explicitly says it is not a job title or substitute for projects. Its guide adds a finite six-week loop and Bangla starting shelf instead of turning the family card into a dense syllabus. Automated and manual mobile checks confirm that the callout, disclosure and mixed English/Bangla technical terms wrap without horizontal overflow. This is a heuristic UX improvement, not evidence that students now choose careers more accurately.

## Completed: directory findability, search and resilient recovery

The career, experiment and roadmap indexes now expose native family jump links
and group their entries under the same eight-family mental model. The resource
index is divided into official documentation, course/university material,
lab/practice and book/article groups. Its metadata labels describe actual
resource types instead of incorrectly treating one global 44-item list as a
single Learn → Practice → Go Deeper sequence. Task-oriented index heroes are
more compact, and their closing guidance now provides actionable onward links.

Learning Resources moved from About to Prepare. Search appears under Start here
as a secondary quick-find path, backed by typed bilingual data for careers,
families, roadmaps, experiments, AI guidance, goals, major guides and curated
resources. Filtering happens in the browser; query text is not persisted or sent
through analytics. Search retains a small set of direct mentor-path links without
JavaScript, uses `noindex, follow` and is omitted from the sitemap.

“I’m Lost” choices are now real destination links that JavaScript progressively
enhances into the existing explanation panel. The selected prompt becomes the
result heading, the hash deep-links the choice, and reset clears both state and
hash. Bangla comparison feedback is localized, and its seventeen choices are
grouped by family. These changes address the two high-priority findings from the
first review; they do not claim measured comprehension gains.

No critical heuristic issue remains from that review. The next appropriate step
is real-student usability research rather than another speculative navigation
layer.

## Completed: balanced spacing across the site

A generated-route desktop audit now visits every English and Bangla UI page and checks horizontal overflow, top-level container bounds, breadcrumb-to-hero alignment and whether each non-homepage hero actually uses both desktop columns. Shared readable text measures remain intentionally narrower than the page frame; they improve scanning and are paired with meaningful content rather than being stretched merely to occupy space.

The first audit confirmed one real conditional-layout imbalance on “I’m Lost”: while the result panel was hidden, its grid column still reserved roughly forty percent of the desktop section. A follow-up review then identified a broader top-section issue that the original bounds-only assertion could not detect: most page heroes were technically full-width containers while their heading and explanation remained stacked on the left. All non-homepage hero templates now use a shared title/support split at desktop widths; career and experiment details retain their existing copy/context split. The “I’m Lost” initial state still uses the complete section width with a two-column choice grid, changing to a balanced chooser/result split after selection. Mobile remains ordinary single-column flow. Automated geometry checks now require both hero column origins on every applicable English and Bangla route.

The AI overview's task-model sequence is a deliberate exception to the usual split section heading. On desktop it spans the available content width at a controlled size so “Higher exposure → AI-assisted → responsibility-heavy” reads on one line as a progression. It returns to normal wrapping on smaller screens. Geometry coverage verifies one-line rendering at 1088, 1280 and 1600px in both locales and checks mobile containment at 390px.

For a future usability study, ask freshers to find their first-week starting point, compare two careers, find a beginner experiment, locate remote-work preparation and find a final-year test-plan template. Observe first clicks, backtracking, time to a useful destination and the participant's explanation of the next step. Do not use invented success percentages or collect unnecessary personal data.

## Completed: discoverable credits

The original two inspiration links and ChatGPT/Codex provenance already existed in the About page, but were buried below the product explanation. The creator's Orchestrator role was missing. The fix makes the acknowledgment visible in the shared footer and supplies a direct localized “Full credits” jump to About. The later career expansion added Amirul Islam as a third inspiration, using the same typed bilingual footer/About model. About also offers a jump from its introduction.

Shared typed bilingual data now distinguishes:

- [Amjad Hossain](https://amjadhossainrahat.github.io/): Creator & Orchestrator; vision, final requirements/design and direction of the build. The rendered credit opens his intended GitHub Pages portfolio in a new tab, using the canonical URL even before that separate site is published.
- ChatGPT: conversation-assisted requirements and design.
- Codex: implementation, testing assistance, fixes and iteration under the creator's direction.

The sources are [roadmap.sh](https://roadmap.sh/), [Architect Prep](https://mayurjp.github.io/architect-prep/) and [Amirul Islam](https://amirulislamalmamun.com/). Their concepts are acknowledged without copying their content or implying endorsement. The latest repository link check verified all three URLs with HTTP 200.

## Completed: safe repository cleanup

Removed `src/assets/illustrations/mentor-guide.png` (2,058,944 bytes), the superseded lone-boy hero. Git tracking and reference searches confirmed it was only a historical style reference, not imported by source or a public asset. Updated `docs/illustrations.md`; its historical prompt remains, and the binary can be recovered from Git history. This reduces the checked-out source footprint, not deployed bytes or existing Git history size: the file was already absent from production output.

Retained intentionally:

- The current `study-partners.png` and `ai-study-partner.png` source masters, favicon and social card.
- `themes-sample.png`, the authoritative visual reference, and root specification documents.
- Astro route entry points, download endpoint, shared content modules, tests, scripts and workflows. Files without imports are not automatically unused.
- Ignored dependencies, Astro/build caches and test reports. They support local development/validation, are regenerable and are not committed source. Broad deletion would add churn without improving the product.

No other tracked file was demonstrated to be unnecessary by this review. This is not a proof that future consolidation could never be useful.

## Completed: concept-first AI systems discovery

The requested AI vocabulary originally had no coherent place because it mixes practices, architecture, products and speculative capability. Adding every term to global navigation would increase choice overload and make volatile tools look like permanent foundations. The implemented route therefore lives inside AI Engineering and starts with an evidence-producing dependency chain: specify and baseline, prompt contract, grounded retrieval, deterministic workflow, bounded agency, then production trust. A short AI-hub callout and static search make it discoverable without adding another primary navigation item.

n8n and OpenClaw appear at the steps where their capabilities become useful, with limitations and security boundaries; AGI is explicitly outside the implementation checklist. The first project is deliberately read-only and evidence-based. “I’m Lost” now includes the ordered local-industry watchlist for a student seeking grounded perspective, while its existing AI-anxiety choice continues to route to task exposure and durable capabilities. This keeps two distinct needs distinct.

The complete watchlist heading previously wrapped because a general `28ch` editorial measure also applied on wide screens. Only the complete variant now releases that cap from the desktop breakpoint; no `nowrap` is used, so Bangla and smaller viewports retain safe natural wrapping. Automated geometry verifies the English desktop heading as one rendered line and all changed paths for overflow. These are reasoned information-architecture and presentation improvements, not measured proof of comprehension or career outcomes.
