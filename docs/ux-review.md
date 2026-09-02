# Fresher UX review and repository cleanup

Reviewed 1–2 September 2026. This is a source-informed heuristic review, with targeted browser validation of the changed navigation, directories, search and recovery experience. It is not a usability study, measured conversion result or “best UX” certification. Actual test results and browser limitations are recorded in [validation.md](validation.md).

## Verdict

The site gives freshers a useful starting point, but students can still lose their bearings when entering a deep page or browsing long indexes. It needs clearer wayfinding more than additional homepage content or decoration. The primary hero action, situation-based choices, nonjudgmental encouragement and small experiments are strengths worth preserving.

At the initial review, the homepage connected “Find My Starting Point” to six situations and offered a fresher guide. That guide contains a finite 12-week plan and a next action into career families. Career roadmaps and goal-based preparation are distinguished on the Roadmaps index. These are good foundations, not evidence that every first-time visitor understands the distinctions.

## Completed: purpose-first homepage entry

The subsequent authorized homepage revision leads with “Free career guidance for CSE students” and restores the more memorable “You got into CSE. Now what?” punch line. It explains concrete uses and outcomes, and offers reassurance before asking the visitor to choose. The main action jumps to three readable intentions: new/unsure → fresher guide, explore careers → career index, prepare for a goal → goal hub. All six previous situations remain available through a native keyboard/no-JavaScript disclosure. Recovery encouragement stays visible.

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

For a future usability study, ask freshers to find their first-week starting point, compare two careers, find a beginner experiment, locate remote-work preparation and find a final-year test-plan template. Observe first clicks, backtracking, time to a useful destination and the participant's explanation of the next step. Do not use invented success percentages or collect unnecessary personal data.

## Completed: discoverable credits

The original two inspiration links and ChatGPT/Codex provenance already existed in the About page, but were buried below the product explanation. The creator's Orchestrator role was missing. The fix makes the acknowledgment visible in the shared footer and supplies a direct localized “Full credits” jump to About. The later career expansion added Amirul Islam as a third inspiration, using the same typed bilingual footer/About model. About also offers a jump from its introduction.

Shared typed bilingual data now distinguishes:

- [Amjad Hossain](https://github.com/AmjadHossainRahat): Creator & Orchestrator; vision, final requirements/design and direction of the build. The rendered credit opens his verified GitHub profile in a new tab.
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
