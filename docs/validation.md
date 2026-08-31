# Visual revision validation — 31 August 2026

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
