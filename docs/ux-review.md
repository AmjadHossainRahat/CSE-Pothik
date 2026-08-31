# Fresher UX review and repository cleanup

Reviewed 1 September 2026. This is a source-informed heuristic review, with targeted browser validation of the changed credits experience. It is not a usability study, measured conversion result or “best UX” certification. Actual test results and browser limitations are recorded in [validation.md](validation.md).

## Verdict

The site gives freshers a useful starting point, but students can still lose their bearings when entering a deep page or browsing long indexes. It needs clearer wayfinding more than additional homepage content or decoration. The primary hero action, situation-based choices, nonjudgmental encouragement and small experiments are strengths worth preserving.

At the initial review, the homepage connected “Find My Starting Point” to six situations and offered a fresher guide. That guide contains a finite 12-week plan and a next action into career families. Career roadmaps and goal-based preparation are distinguished on the Roadmaps index. These are good foundations, not evidence that every first-time visitor understands the distinctions.

## Completed: purpose-first homepage entry

The subsequent authorized homepage revision leads with “Free career guidance for CSE students” and restores the more memorable “You got into CSE. Now what?” punch line. It explains concrete uses and outcomes, and offers reassurance before asking the visitor to choose. The main action jumps to three readable intentions: new/unsure → fresher guide, explore careers → career index, prepare for a goal → goal hub. All six previous situations remain available through a native keyboard/no-JavaScript disclosure. Recovery encouragement stays visible.

Question-led section introductions explain what work involves, whether the visitor might enjoy it and what to learn next. The orientation map links exploration, experiments, roadmaps and goals. A short distinction between learning paths and goal preparation supports onward navigation. Existing AI placement, complete content, inclusive artwork and practical motivation are preserved. Shared bilingual data prevents entry labels and destination meanings from drifting. The mobile hero prioritizes purpose and the main action before artwork; tests protect initial-viewport action visibility, entry journeys and expanded disclosure accessibility.

This addresses homepage first impressions, not the separate global-navigation, deep-link wayfinding, search or “I'm Lost” issues below. Validation results belong in `validation.md`; no improved conversion or measured student comprehension is claimed.

## Remaining priority recommendations — outside the homepage revision

| Priority        | Evidence in the current source                                                                                                                                                                               | Likely fresher friction                                                                                            | Recommended next change                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| High            | `Header.astro` exposes five subject links plus “I'm Lost”; the new-student route lives in homepage situations rather than global navigation.                                                                 | A student arriving from a shared deep link may not discover the fresher route.                                     | Provide a clear “Start here” entry, retaining the “I'm Lost” recovery route and testing its visibility on mobile. Prefer replacing/reorganizing an entry over endlessly adding links. |
| High            | Header “Compare” has no object; Careers, Try a Career and Roadmaps are separate destinations.                                                                                                                | A newcomer must infer the difference between choosing a role, sampling its work and learning its skills.           | Use “Compare careers” and a concise orientation explanation: explore roles → try work → follow a learning sequence. Check Bangla labels and desktop fit together.                     |
| High            | `CareersIndex.astro` renders eight consecutive families; `ExperimentsIndex.astro` renders fourteen experiments without a jump index.                                                                         | Finding a named path requires scanning a long page.                                                                | Add native family/topic jump links first. Consider a lightweight bilingual static search only after checking whether these links solve the problem.                                   |
| Medium          | Goal guides now have a primary homepage intention, plus Roadmaps, “I'm Lost” and footer links, but not a direct header entry.                                                                                | From a deep page, “prepare for remote work” does not obviously mean “Roadmaps” to a new visitor.                   | Organize one preparation entry with explicit “By career / By goal / Final-year project” choices. Avoid a large career-by-goal mega-menu.                                              |
| Medium          | Header links do not mark the current section with `aria-current`; breadcrumbs exist on inner pages.                                                                                                          | Breadcrumbs help, but global location still takes effort to infer.                                                 | Add a base- and locale-aware current-section indicator without relying on color alone.                                                                                                |
| High resilience | `ImLostPage.astro` uses JavaScript buttons to reveal routes and has no equivalent no-JavaScript choice list. The revealed heading still says “Choose one situation”, and reset leaves the previous URL hash. | With scripts unavailable, most choices are inert; after choosing, the unchanged prompt/reset URL can be confusing. | Use progressively enhanced links or a native fallback; update the result heading and clear stale hash on reset. Keep its privacy and deterministic behavior.                          |

These broader proposals need implementation and validation in a subsequent authorized UX change. Goal preparation now has a primary homepage intention rather than supporting copy, but its global-header placement is unchanged. No menu redesign, new search dependency or “I'm Lost” behavior fix is claimed here. Preserve the required homepage order, existing motivation and inclusive static artwork.

For a future usability study, ask freshers to find their first-week starting point, compare two careers, find a beginner experiment, locate remote-work preparation and find a final-year test-plan template. Observe first clicks, backtracking, time to a useful destination and the participant's explanation of the next step. Do not use invented success percentages or collect unnecessary personal data.

## Completed: discoverable credits

The two inspiration links and ChatGPT/Codex provenance already existed in the About page, but were buried below the product explanation. The creator's Orchestrator role was missing. The fix makes the acknowledgment visible in the shared footer and supplies a direct localized “Full credits” jump to About. About also offers a jump from its introduction.

Shared typed bilingual data now distinguishes:

- MD. Amjad Hossain: Creator & Orchestrator; vision, final requirements/design and direction of the build.
- ChatGPT: conversation-assisted requirements and design.
- Codex: implementation, testing assistance, fixes and iteration under the creator's direction.

The sources remain [roadmap.sh](https://roadmap.sh/) and [Architect Prep](https://mayurjp.github.io/architect-prep/). Their concepts are acknowledged without copying their content or implying endorsement. The roadmap.sh page was accessible during this review; the research browser declined the Architect Prep URL, so its live contents were not independently reviewed. Its original user-supplied credit is preserved. No workaround was used for that restriction.

## Completed: safe repository cleanup

Removed `src/assets/illustrations/mentor-guide.png` (2,058,944 bytes), the superseded lone-boy hero. Git tracking and reference searches confirmed it was only a historical style reference, not imported by source or a public asset. Updated `docs/illustrations.md`; its historical prompt remains, and the binary can be recovered from Git history. This reduces the checked-out source footprint, not deployed bytes or existing Git history size: the file was already absent from production output.

Retained intentionally:

- The current `study-partners.png` and `ai-study-partner.png` source masters, favicon and social card.
- `themes-sample.png`, the authoritative visual reference, and root specification documents.
- Astro route entry points, download endpoint, shared content modules, tests, scripts and workflows. Files without imports are not automatically unused.
- Ignored dependencies, Astro/build caches and test reports. They support local development/validation, are regenerable and are not committed source. Broad deletion would add churn without improving the product.

No other tracked file was demonstrated to be unnecessary by this review. This is not a proof that future consolidation could never be useful.
