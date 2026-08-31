# Validation records — 31 August 2026

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
