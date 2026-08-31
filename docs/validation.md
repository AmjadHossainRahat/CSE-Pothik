# Validation records — 31 August 2026

## Three-person computing team with a Chakma QA teammate

Added an original fictional Chakma Bangladeshi woman between the two existing laptop users using one built-in ImageGen edit. Her checklist tablet and stylus show active QA participation. All three have visitor-facing smiles and equal prominence; the seated woman's teal hoodie and fully hair-covering ivory orna, both laptops, technical notebook and desk props remain. The contemporary shoulder cloth is textile-inspired, with consulted sources and authenticity limits recorded in `docs/illustrations.md`. English/Bangla alt text and its normal/no-JavaScript regression assertions now describe the three-person scene. README, DESIGN, AI-Prompt and SKILL were updated. No third language, new dependency, carousel or client script was added.

| Check                                      | Result                                                                                                                                                                                                                                                                       |
| ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Formatting, lint, type checking            | PASS; `yarn check`, 119 type-checked files, zero errors, warnings or hints.                                                                                                                                                                                                  |
| Unit/content integrity                     | PASS; 25 tests across 9 files (13 unit, 12 content).                                                                                                                                                                                                                         |
| Root production regression suite           | PASS; 105 tests and 21 intentional duplicate skips: homepage, responsive/console and all 70 accessibility checks.                                                                                                                                                            |
| Root and `/CSE-Compass/` production builds | PASS; 159 HTML pages and 179 files each; no build warnings.                                                                                                                                                                                                                  |
| Root/project output verification           | PASS; localized metadata, canonical URLs, English/Bangla/x-default hreflang, Open Graph, structured data, sitemap, robots, internal routes/assets/anchors and unfinished-copy checks.                                                                                        |
| Responsive/theme/language                  | PASS in the completed root suite; 320/390/768/1280/1600px × English/Bangla × light/dark, image loading, proportional containment, no-JavaScript and reduced-motion checks.                                                                                                   |
| Image delivery                             | PASS; 400/640/900px WebP variants are 17,058 / 36,666 / 65,504 bytes. The 2,637,070-byte PNG master is not emitted directly.                                                                                                                                                 |
| Visual review                              | PASS for the reviewed source and screenshots: desktop English light/dark and Bangla mobile light/dark in the browser; existing completed-test screenshots for 320px English, 768px Bangla and 1600px English. All three teammates and devices remain visible.                |
| Console                                    | PASS in the completed automated root matrix; the inspected preview error log was empty before the later navigation block.                                                                                                                                                    |
| Further browser verification               | BLOCKED by the in-app browser URL policy when attempting the next language-link navigation. No alternate browser or navigation workaround was attempted. The full project-base E2E/GA4 suite was not rerun for this revision; earlier 192-test results below are historical. |
| Final source/format review                 | PASS; `git diff --check` and formatting checks.                                                                                                                                                                                                                              |

The browser policy block occurred after the root suite and successful desktop/mobile inspection. Remaining visual review used only screenshots already produced by the completed tests; the project-base build and file-based output checks required no further browser navigation. The local project-base preview server was restored for the user, without claiming a new interactive verification. No automated claim establishes cultural authenticity: the cloth is a contemporary interpretation, not a certified traditional outfit. No community endorsement is implied.

The existing immutable Yarn installation was reused. Unchanged external learning links, live GA4 delivery, physical devices, Safari/Firefox and Lighthouse scores were not checked in this image-only revision. The new textile references were consulted through web retrieval. No deployment or Git push was performed. Earlier validation entries retain their original scope and counts.

## Welcoming workspace: hoodie, orna, viewer-facing smiles and desk props

Updated the original hero using built-in ImageGen. The woman wears a teal hoodie and an ivory orna with a matching inner layer covering all hair. Both students smile casually toward the visitor, keeping separate laptops, keyboard hands and personal space. Coffee, a water bottle and a small indoor plant accompany the technical-diagram notebook. The first output left a visible hair patch and props beyond the desk edge; a second targeted edit corrected both. Only the inspected final output is shipped. English/Bangla alt text, the matching regression assertion, README, DESIGN, AI-Prompt, SKILL and illustration provenance reflect this latest direction. Earlier artwork records below are historical.

| Check                                 | Result                                                                                                                                                                                            |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Formatting, lint, type checking       | PASS; `yarn check`, 119 type-checked files, zero errors, warnings or hints.                                                                                                                       |
| Unit/content integrity                | PASS; 25 tests across 9 files (13 unit, 12 content).                                                                                                                                              |
| Root production regression suite      | PASS; 105 tests, 21 intentional duplicate skips: homepage, responsive/console and all 70 accessibility checks.                                                                                    |
| Full `/CSE-Compass/` production suite | PASS; 192 tests, 62 intentional skips; 122 E2E and 70 accessibility checks.                                                                                                                       |
| Root and project production builds    | PASS; 159 HTML pages, 179 files each; no build warnings.                                                                                                                                          |
| Build-output/SEO verification         | PASS at both bases; localized metadata, canonical URLs, English/Bangla/x-default hreflang, Open Graph, structured data, sitemap, robots, internal URLs/assets/anchors and unfinished-copy checks. |
| Responsive/theme/language             | PASS; 320, 390, 768, 1280 and 1600px × English/Bangla × light/dark; image loading, proportional containment, bilingual alt, no-JavaScript and reduced-motion coverage.                            |
| Image delivery                        | PASS; 400/640/900px WebP variants are 15,922 / 33,176 / 59,286 bytes. The 2,475,523-byte source PNG is not served directly; content-hashed image URLs changed.                                    |
| GA4 regression                        | PASS with the existing local stub; no requests to Google or live-property delivery claim.                                                                                                         |
| Browser/source review                 | PASS; source artwork and actual page screenshots inspected; preview error log empty; `git diff --check` passed.                                                                                   |

Manual screenshot review covered English desktop light/dark, Bangla mobile light/dark, Bangla tablet, narrow 320px and wide 1600px. Both students, the head covering, the complete laptops, notebook and new props stay visible without cropping. These visual judgments are manual, not inferred from passing alt-text assertions. The 62 full-suite skips avoid duplicate viewport matrices and a desktop run of a mobile-only navigation test; required widths were exercised.

This asset-only revision reuses the existing immutable Yarn installation and adds no dependencies, carousel, browser JavaScript or external image host. Unchanged external learning-resource links were not rechecked. Prior install/link results remain historical. No deployment, live GA4 receipt, physical-device/Safari/Firefox certification or Lighthouse score is claimed. The project-base production preview is restored after testing. Exact built-in edit prompts and the selected source are recorded in `docs/illustrations.md`.

## Focused technical-work artwork correction

Revised the mixed-gender hero after the user identified romantic cues. Both students now look down at their own laptops with neutral concentrated expressions, active keyboard hands and personal space; the notebook contains a small system flow diagram. A first edit incorrectly placed screen graphics on exterior lids; a second edit corrected these to silver backs facing the camera. The final artwork was manually inspected for gaze, expressions, device orientation, hand placement and equal participation before replacing the existing source PNG. The incorrect intermediate is not shipped. Bilingual alt text, its regression assertion and the product/engineering documentation now reflect the focused-work direction. Layout, loading strategy, routes and dependencies are unchanged.

| Check                                       | Result                                                                                                                                                                                  |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Formatting, lint, type checking             | PASS; 119 files, zero errors, warnings or hints.                                                                                                                                        |
| Unit and content integrity                  | PASS; 25 tests in 9 files (13 unit, 12 content).                                                                                                                                        |
| Root production regression suite            | PASS; 105 tests, 21 intentional duplicate skips: homepage, responsive/console and all 70 accessibility checks.                                                                          |
| Full `/CSE-Compass/` production suite       | PASS; 192 tests, 62 intentional skips, including 70 accessibility and 122 E2E checks.                                                                                                   |
| Root/project builds and output verification | PASS; 159 HTML pages and 179 files each, no warnings, broken local URLs/assets, missing metadata or placeholder defects.                                                                |
| Image delivery                              | PASS; three 400/640/900px WebP variants: 14,992 / 31,916 / 56,472 bytes. The 2,477,826-byte PNG master is not emitted directly. Content-hashed URLs changed with the artwork.           |
| Responsive/language/theme                   | PASS; five-width English/Bangla/light/dark matrix, proportional containment, image loading, alt text and no-JavaScript/reduced-motion checks.                                           |
| SEO and analytics regression                | PASS; build verification covers localized metadata, canonical, hreflang, Open Graph, structured data, sitemap and robots. Existing bounded GA4 stub tests pass; no live delivery claim. |
| Final formatting and diff checks            | PASS.                                                                                                                                                                                   |

Actual screenshots were inspected at 320, 390, 768, 1280 and 1600px widths, including English desktop light/dark and Bangla mobile/tablet. Both students remain engaged with their own devices, and the entire composition stays visible. A tablet capture coincided with the root-to-project preview switch and missed its newly requested responsive image; the page was reloaded at the correct project URL and the complete tablet review passed. The refreshed preview console was empty. This was a local test-server transition, not an unresolved asset defect.

This small revision reused the existing immutable Yarn installation; no dependencies or external links changed. Earlier install/external-link results remain historical, not newly claimed checks. No deployment, live GA4 receipt, physical-device/cross-browser certification or Lighthouse score is claimed. The final project-base preview was restored after testing; image provenance and prompts are in `docs/illustrations.md`.

## Inclusive homepage study-partners illustration

Replaced the lone-male hero with an original scene of a woman and man learning computing together, each actively using their own laptop. The static shared scene gives both equal visibility without carousel slides, autoplay, controls or additional JavaScript. English/Bangla alt text describes the scene; proportional sizing and containment preserve both students on small screens. The future-self encouragement, homepage order, AI illustration and existing brand remain unchanged. README, DESIGN, AI-Prompt, SKILL and illustration provenance were updated.

| Check                                | Result                                                                                                                                                                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn install --immutable`           | PASS; Yarn 4.17.1, no dependency changes. Approved retry allowed access to the existing user cache.                                                                                                                    |
| Formatting, lint and type checking   | PASS; 119 files, zero errors, warnings or hints.                                                                                                                                                                       |
| Unit/content tests                   | PASS; all 25 tests across 9 files (13 unit, 12 content).                                                                                                                                                               |
| Full production browser suites       | PASS at both `/` and `/CSE-Compass/`: 192 passed and 62 intentional skips each; 70 axe accessibility checks and 122 E2E checks per suite.                                                                              |
| New illustration regression coverage | PASS; accurate bilingual alt text, eager/high-priority hero, responsive source widths, lazy supporting image, reserved dimensions, complete loading, proportional containment and no-JavaScript/reduced-motion access. |
| Responsive/theme/language matrix     | PASS; 320, 390, 768, 1280 and 1600px × English/Bangla × light/dark; no horizontal overflow, distorted image or out-of-container artwork.                                                                               |
| Root/project production builds       | PASS; 159 HTML pages, 179 files, no build warnings. Project-base output rebuilt and verified after the root suite.                                                                                                     |
| SEO/internal output verification     | PASS; localized metadata, canonicals, hreflang, Open Graph, JSON-LD, sitemap, robots, local URLs/assets and anchors.                                                                                                   |
| GA4 regression / console             | PASS with the existing local analytics stub; no live Google delivery claim. Automated console checks passed; inspected preview error log was empty.                                                                    |
| Asset delivery                       | PASS; 400/640/900px WebP files are 14,260 / 29,726 / 52,480 bytes. The 2,103,100-byte PNG master and retired mentor asset are not emitted into the production asset folder. No new dependency or client bundle.        |
| Source review                        | `git diff --check` passed; no unfinished copy in the changed homepage/provenance. The new PNG is visible to Git, not ignored.                                                                                          |

Actual viewport screenshots were reviewed for English desktop light/dark, Bangla mobile light/dark, English tablet, narrow 320px and wide 1600px layouts. The full students/laptops composition, caption, theme separation and wrapping were inspected; mobile review included taller viewport captures to see the artwork and caption together. Theme/language controls were exercised in the browser. Keyboard navigation and no-JavaScript/reduced-motion behavior were covered by the automated suite, not claimed as a separate assistive-technology certification.

The initial artwork and one transparency retry had a baked-in checkerboard. Neither is shipped. A final targeted ImageGen edit supplied an intentional blue-gray matte backdrop, presented with a theme-aware border. Source artwork, generation mode and prompts are recorded in `docs/illustrations.md`; no transparency is falsely claimed for this asset. The earlier mentor remains only as a historical source/style reference.

The 62 skips are the existing duplicate viewport matrices, tablet duplicate and desktop skip of the mobile-only navigation test; all required widths were actually exercised. External learning links were unchanged and were not rechecked for this illustration-only revision; the earlier link-review limitations below still apply. No deployment, physical-device/Safari/Firefox test, live GA4 verification or Lighthouse score is claimed. GitHub Pages remains the hosting target.

## Refined identity, final-year project standards and three career paths

This revision replaces the unclear homepage introduction, refines the native SVG mark/favicon and original social card, and adds Network Engineering, Hardware Engineering and Software QA & Testing. Fourteen careers now have complete career, comparison, roadmap, experiment, resource and AI guidance. The new seven-stage final-year project guide includes four project-type adaptations, a worked traceability example, readiness evidence and real English/Bangla Markdown downloads. It is linked from roadmaps, foundations, goal guides and the footer without adding another homepage section. At the user's request, the temporary third-language work was removed: only English (default) and Bangla ship.

| Check                                                  | Result                                                                                                                                                                                                                                                             |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Immutable Yarn installation                            | PASS; Yarn 4.17.1. The user-cache sandbox restriction required an approved retry; no dependency changes or install warnings.                                                                                                                                       |
| Formatting, lint, type checking                        | PASS; 119 checked files, zero type errors, warnings or hints.                                                                                                                                                                                                      |
| Unit tests                                             | PASS; 13 tests.                                                                                                                                                                                                                                                    |
| Content-integrity tests                                | PASS; 12 tests, including bilingual new-career/project content, exact family membership, tailored roadmaps, references and two-language scope.                                                                                                                     |
| Full project-Pages production browser suite            | PASS; 188 tests, 62 intentional skips.                                                                                                                                                                                                                             |
| Full root production browser suite                     | PASS; 188 tests, 62 intentional skips.                                                                                                                                                                                                                             |
| Accessibility subset of each full suite                | PASS; 70 axe WCAG A/AA checks, including new EN/BN guidance/career routes and light/dark themes under desktop/mobile projects.                                                                                                                                     |
| E2E subset of each full suite                          | PASS; 118 tests covering navigation, comparison, goals, new career route graphs, project templates/downloads, language switching, keyboard/no-JavaScript behavior and layout matrices.                                                                             |
| Root/project production builds and output verification | PASS; 159 HTML pages and 179 files; no build warnings, broken local routes/assets, missing metadata or unfinished HTML copy found.                                                                                                                                 |
| GA4 integration                                        | PASS using a local stub with Google requests blocked. Existing view/navigation/source events plus language switching, project-guide entry and evidence-template events are verified. No live delivery claim.                                                       |
| Responsive/theme/language matrix                       | PASS; 320, 390, 768, 1280 and 1600px, English/Bangla, light/dark. Homepage, goals and new project/career views are covered, including overflow and breadcrumb alignment.                                                                                           |
| External URLs                                          | 47 HTTP 200 responses; 3 automated HTTP 403 restrictions; no confirmed broken links. Linux Journey was additionally inspected through web retrieval and resolves to its official LabEx successor. Both ACM policy URLs remained access-restricted on that recheck. |
| Browser console                                        | No errors in the inspected successful local preview; automated console/page-error checks also passed.                                                                                                                                                              |
| Git/source review                                      | `git diff --check` passed. All new source files, including the download endpoint, appear in the untracked-file list and are not ignored. No third-language source/assets or TODO/FIXME/placeholder copy remain in source/public files.                             |

The 62 skips avoid repeating three explicit 20-case viewport matrices under the mobile project, plus one tablet duplicate and one desktop skip of a mobile-only navigation test. They do not omit the required mobile widths. Tests were run against actual production previews, not just the development server.

### Review and fixes

The source-integrity test originally assumed every guidance reference belonged to a goal. It was extended to include final-year project ownership while still rejecting unused sources. A Git ignore exception now protects the authored download endpoint. The language expansion was fully removed following the user's updated scope. A Bangla spelling error in the hardware guide was corrected during final editorial review.

After the spelling correction, formatting/lint/type checking and all 25 unit/content tests passed again. Both root and `/CSE-Compass/` sites were rebuilt and output-verified; all eight hardware-career E2E/accessibility regression checks passed on each updated production output. The project-base production preview was restored after testing.

Actual viewport screenshots were inspected for the refined logo/homepage; desktop project heading and aligned breadcrumbs; dark project stage with section navigation and evidence panel; Bangla mobile heading, controls and project-type disclosure with visible focus; and Bangla tablet hardware-career introduction. The social card was inspected for exact brand/tagline text. The test teardown briefly stopped the local server during manual review; the preview was restarted and the affected visual review was completed successfully. This was a local test-lifecycle interruption, not a production route defect.

### SEO, architecture and deployment

Generated-output verification checks unique localized titles, descriptions and canonicals; English/Bangla/x-default hreflang; Open Graph assets; WebSite/Article/BreadcrumbList JSON-LD validity; sitemap inclusion; base-aware robots sitemap URLs; internal URLs, images/srcset and same-page anchors. Both root and project-base output passed. New guides and downloadable templates are statically generated from typed bilingual data; no backend, React hydration, progress storage or new package dependency was introduced. The SVG identity is resolution independent; original responsive homepage WebP assets remain unchanged. The new social card is about 938 KiB and is metadata-only, not a homepage-body download.

GitHub Pages workflows and Yarn-only quality gates were inspected and retained. No push, deployment, DNS change or hosting migration was performed. Browser coverage is Chromium desktop/mobile emulation plus actual in-app-browser inspection, not physical-device, Safari/Firefox or screen-reader certification. No Lighthouse score, live GA4-property receipt or automated accessibility-conformance guarantee is claimed. The genuine remaining verification limitation is the two access-restricted ACM reference pages; their links were not silently counted as verified successes.

Earlier revision records below remain historical and retain their original counts/results.

## Goal guidance, Mobile App Development and UX/UI Engineering

This revision adds seven complete bilingual goal guides and two complete career paths. The site now generates 133 HTML pages: eleven careers across eight families, with matching career/roadmap/experiment/AI pages, plus the goal hub and seven goal-detail pages in English and Bangla. README.md, DESIGN.md, SKILL.md and AI-Prompt.md describe the implemented architecture and content rules.

| Check                                            | Result                                                                                                                                                                                                         |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `yarn install --immutable`                       | PASS; Yarn 4.17.1, no dependency changes or warnings. The first sandboxed attempt could not access the existing user cache; the approved cache-access retry succeeded.                                         |
| `yarn format`, `yarn format:check`, `yarn lint`  | PASS                                                                                                                                                                                                           |
| `yarn typecheck`                                 | PASS; 109 checked files, zero errors, warnings or hints                                                                                                                                                        |
| Unit tests                                       | PASS; 13 tests                                                                                                                                                                                                 |
| Content-integrity tests                          | PASS; 9 tests, including complete bilingual goal fields, source relationships and the two new career graphs                                                                                                    |
| Root production-preview browser suite            | PASS; 124 tests, 42 intentional skips                                                                                                                                                                          |
| `/CSE-Compass/` production-preview browser suite | PASS; 124 tests, 42 intentional skips                                                                                                                                                                          |
| Accessibility subset                             | PASS; 46 axe WCAG A/AA checks across desktop/mobile, critical EN/BN routes and both themes                                                                                                                     |
| Responsive matrices                              | PASS; 320, 390, 768, 1280 and 1600px × English/Bangla × light/dark for homepage and representative goal/new-career pages; no horizontal overflow                                                               |
| Root and project-Pages builds                    | PASS; 133 pages, build output inspected for warnings, none found                                                                                                                                               |
| Root and project-Pages `yarn verify:build`       | PASS; 151 files, valid local routes/assets/anchors and metadata checks                                                                                                                                         |
| Browser journeys                                 | PASS; all seven guides in both languages, both new careers across four route types, homepage/roadmap/lost → goal → career roadmap, equivalent-language switching and no-JavaScript keyboard section navigation |
| GA4 abstraction                                  | PASS with a local stub; bounded goal navigation and official-source clicks, plus existing destination view and homepage events; Google requests blocked                                                        |
| External learning and guidance links             | 38 HTTP 200 responses; 4 HTTP 403 restrictions explicitly reported as REVIEW, with no confirmed broken URLs                                                                                                    |
| `git diff --check` and unfinished-copy scan      | PASS; no source/public TODO, FIXME, Lorem ipsum or coming-soon copy                                                                                                                                            |

The 42 skips are not defects: two explicit 20-case viewport matrices and one tablet test run once under Chromium rather than duplicating under the mobile project; the mobile-only navigation test skips desktop. Full suites were rerun after fixes rather than treating a successful build as completion.

### Visual, language and UX review

Actual in-app-browser captures were inspected for the desktop goal hub and grouped choices; a full guide stage with its sticky index in light/dark; the mobile starting-point chooser; Bangla tablet heading, breadcrumbs and reality note; Bangla mobile weekly action; the new UX/UI mobile career introduction; and the homepage's compact goal entry. Browser console inspection returned no errors. Automated tests additionally cover every goal's route and essential sections and exercise the existing illustrations, orientation map and useful loop.

The new pages reuse semantic theme tokens and do not add client framework hydration. Essential guide content and native section navigation work with JavaScript disabled. Mobile platform references explicitly say they are alternatives, not sequential learning levels. Goal sources have scope and review dates; their reference status does not promise free application, testing or publication costs. Bangla prose was reviewed alongside the English source; technical terms remain in English where natural. No external linguistic certification is claimed.

### SEO, performance and GitHub Pages

Generated-output checks covered unique localized titles, descriptions and canonicals; EN/BN/x-default alternates; Open Graph images; parseable WebSite/Article/BreadcrumbList data; sitemap membership; robots sitemap URL; local assets, `srcset` and same-page anchors. The goal tests verify equivalent-language URLs and Article markup. Both root and `/CSE-Compass/` builds and actual production previews were tested.

The added goal-detail stylesheet is approximately 4.9 KB uncompressed. Static guide data is rendered at build time; no new JavaScript bundle or third-party UI package is introduced. Existing responsive WebP assets remain approximately 11–78 KB. This is an asset inspection, not a claimed Lighthouse or real-user performance score.

GitHub Pages remains the deployment target; its workflows were inspected and retained. No push, production deployment, DNS change or live GA4-property verification was performed. No hosting service migration was made.

### Defects caught and fixed

- The initial localized-field test incorrectly rejected the valid short branch label “PhD”; it now checks nonempty labels while retaining stronger prose and stage-content checks.
- New career entries were placed after existing entries to preserve existing comparison defaults.
- Mobile platform resources initially inherited misleading Learn/Practice/Go Deeper labels and a three-resource slice. The shared component now supports explicit platform alternatives, exposes all four choices, and provides them across the mobile roadmap. Browser assertions protect the labels.
- Visual review caught adjacent homepage label/sentence/link text without whitespace. Explicit spaces and English/Bangla regression assertions now protect both the goal entry and restart encouragement.

### Genuine limitations

Linux Journey, Upwork Help and two ACM policy URLs restrict automated HTTP checks with 403. The source checker does not call these verified successes. Official search-index results were used to cross-check the Upwork/ACM references, but uninterrupted live access cannot be guaranteed. Remote pages and requirements may change after review.

Tests use Chromium desktop/mobile emulation, not physical Android/iOS devices or Safari/Firefox. Axe and keyboard/visual checks are not full assistive-technology certification. Live analytics delivery requires the owner's production GA4 configuration and was not claimed.

## Earlier visual revision

This records the checks actually completed for the theme, homepage and shared-layout revision. It is a point-in-time report, not a claim that future changes or every browser are covered.

| Check                                                      | Result                                                                                                            |
| ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `yarn install --immutable`                                 | PASS; Yarn 4.17.1, no dependency warnings                                                                         |
| `yarn format` / `yarn format:check`                        | PASS                                                                                                              |
| `yarn lint`                                                | PASS                                                                                                              |
| `yarn typecheck`                                           | PASS; 0 errors, warnings or hints                                                                                 |
| Unit and content tests (`yarn check` includes `yarn test`) | PASS; 19 tests: 13 unit and 6 content-integrity                                                                   |
| Root development-site E2E and accessibility                | PASS; 64 tests, 22 intentional skips                                                                              |
| `/CSE-Compass/` production-preview E2E and accessibility   | PASS; 64 tests, 22 intentional skips                                                                              |
| Accessibility subset                                       | PASS; all 18 axe WCAG A/AA checks on desktop/mobile, light/dark and critical EN/BN routes                         |
| Responsive matrix                                          | PASS; 320, 390, 768, 1280 and 1600px × English/Bangla × light/dark; no horizontal overflow or console/page errors |
| Root and project-Pages production builds                   | PASS; 101 HTML pages, no build warnings                                                                           |
| Root and project-Pages `yarn verify:build`                 | PASS; 118 files; local URLs, image `srcset`, same-page anchors, SEO and placeholder checks                        |
| Analytics dispatch                                         | PASS with a local GA4 stub; no Google requests; career/roadmap views emitted once at destination                  |
| External learning resources                                | 20 verified HTTP 200; Linux Journey returns HTTP 403 and remains a manual-review limitation                       |
| `git diff --check` and unfinished-content scan             | PASS; no source/public TODOs or placeholder copy                                                                  |

The 22 browser skips are deliberate: the explicit 20-case viewport matrix and one tablet case run once under Chromium rather than repeating under the mobile project, and the mobile-only menu test is excluded from desktop. None are skipped defects.

## Visual and interaction review

The supplied `themes-sample.png` was inspected against the running site. Viewport-sized browser captures were reviewed for the desktop hero in both themes, English small-mobile hero, Bangla mobile/tablet layouts, orientation map, AI illustration, useful loop and production career breadcrumb alignment. The generated characters remain legible in both themes. The page now uses eight focused content sections and retains the complete career, roadmap and experiment directories.

Automated interaction checks additionally exercise menu keyboard Enter/Tab/Escape, mobile-to-desktop resizing, no-JavaScript navigation, mentor disclosure, equivalent-language routes, stored theme selection, starting-point/recovery guidance, the lost flow, comparisons, career → roadmap → experiment and image loading. The browser console was also inspected directly on production output without errors.

## SEO and delivery

The generated-site verifier checks unique titles/canonicals, descriptions, English/Bangla/x-default hreflang, Open Graph images, parseable structured-data JSON, sitemap membership, robots sitemap URL, local route/asset existence and unfinished copy. Both `/` and `/CSE-Compass/` builds passed. Images are generated as six responsive WebP variants, approximately 11–78 KB each; the site adds no image-library hydration or remote font dependency.

The existing GitHub Pages workflows remain the deployment target. No live deployment, DNS change or push was performed. Live GA4 reporting was not tested because a real measurement ID is not configured. Automated accessibility checks plus visual/keyboard review are not a screen-reader certification or a claim of testing Safari/Firefox or physical devices.

## Defects found and resolved during the loop

- Orientation captions fell into a narrow grid-number column; titles/captions now share a wrapper.
- Inherited prose-list margins staggered breadcrumbs and grid items; these components explicitly reset margins.
- A closed mobile disclosure also hid desktop navigation; breakpoint-aware state and no-JavaScript fallback restore it.
- One small amber label had 4.42:1 contrast on the new surface; its color was darkened and all accessibility checks rerun successfully.
- View events relied on particular inbound links; destination-based career/roadmap events now cover direct navigation without duplicate view events.
- External-link restrictions were previously labeled as passes; they are now explicitly reported as `REVIEW`.

Two new test-selector mistakes and one verifier invocation before a build finished were corrected by fixing the selectors/sequencing and rerunning the affected checks. The passing results above are the final reruns, not the initial attempts.
