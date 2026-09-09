# Repository structure and production assets

Reviewed 1 September 2026. This is an audit of CSE-Pothik, not a universal certification of “industry standard”. Validation results are recorded separately in [validation.md](validation.md).

## Structure verdict

The existing layout is appropriate for a static Astro application. [Astro’s project-structure documentation](https://docs.astro.build/en/basics/project-structure/) explicitly supports the pages/components/layouts/styles/public boundaries used here. The project adds reasonable domain boundaries rather than backend layers it does not need.

| Boundary                                        | Responsibility                                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `src/pages/` and `src/pages/bn/`                | Thin route entry points; equivalent localized HTML is generated from shared components/data |
| `src/components/`, `src/layouts/`               | Semantic UI, page composition and shared document/SEO behavior                              |
| `src/data/`, `src/types/`                       | Bilingual editorial data, stable IDs and strict contracts                                   |
| `src/lib/`, `src/config/`                       | Testable transformations/behavior and centralized configuration                             |
| `src/assets/`, `public/`                        | Build-processed imported assets versus deliberately unprocessed static files                |
| `tests/unit`, `content`, `e2e`, `accessibility` | Logic, data graph, browser journeys and automated accessibility coverage                    |
| `scripts/`, `.github/workflows/`                | Local verification/server lifecycle and CI/Pages deployment automation                      |
| `docs/`, root specification files               | Audit/provenance/validation and authoritative product/engineering requirements              |

The expanded guide is split by responsibility: `src/data/project/team-playbooks.ts`, `quality-playbooks.ts`, `templates.ts`, a small composition entry point, the static `TeamPlaybooks.astro` renderer and the pure `src/lib/project-template.ts` download generator. The existing seven-stage entry point and download URLs remain stable. This avoids growing one page or endpoint into a second copy of the entire content model.

`git ls-files dist .astro node_modules` returned no tracked generated output. Dependencies, build output, caches and test reports are ignored. The intentional Git ignore exception preserves the real source download endpoint. No backend `controllers/`, `services/` or database folders are needed, and introducing empty layers would not improve this site. Folder names alone do not prove quality: review, tests, ownership and reproducibility matter too.

Remote branch protection, repository permissions and deployed-host settings cannot be established from a folder audit. Existing CI and deployment workflows were inspected, not deployed or changed. Browser scripts in those workflows default to the development server; production-preview testing requires `PLAYWRIGHT_SERVER=preview` after a build. Do not confuse the two.

## What is optimized

- **HTML:** installed Astro 7 defaults to `compressHTML: "jsx"`, confirmed in `node_modules/astro/dist/core/config/schemas/defaults.js`. It compacts Astro template whitespace, with meaningful spacing/preformatted content preserved according to JSX rules. The [configuration reference](https://docs.astro.build/en/reference/configuration-reference/#compresshtml) explains the behavior. This is not “every HTML file must be one line”.
- **Bundled JavaScript:** the installed Vite client-build default resolves `minify` to `"oxc"` in `node_modules/vite/dist/node/chunks/node.js`; this project does not disable it. Actual emitted bundles must be inspected as well, because configuration alone is not output evidence.
- **CSS:** `astro.config.ts` explicitly sets `vite.build.cssMinify` to `"lightningcss"`. Output uses compact declarations/selectors, not source indentation.
- **Illustrations:** Astro creates responsive WebP assets from imported masters. This is image optimization, not source-code minification. The new text guidance introduces no image, client library or hydration requirement.

## Intentional exceptions

- Astro `is:inline` script bodies bypass bundling and minification. The early theme initializer in `BaseLayout.astro` is kept inline so the saved theme can be applied before painting; no blanket statement that every JavaScript byte is minified is correct. Existing JSON-LD is serialized compactly with `JSON.stringify`.
- [Astro copies `public/` files as-is](https://docs.astro.build/en/reference/configuration-reference/#publicdir), including the favicon and social image. A source SVG can remain formatted; a PNG is already binary-encoded. This audit does not silently rewrite branding assets.
- Downloaded Markdown is intentionally readable/editable. XML sitemaps and robots text are not passed through a generic minifier.
- HTTP gzip/Brotli and caching are hosting/CDN behavior. Local output sizes are uncompressed file sizes, not real-world transfer measurements. No live GitHub Pages compression/header claim is made.

## Reproduce the inspection

Use the same base path for build and verification. For example, in PowerShell:

```powershell
$env:BASE_PATH = "/CSE-Pothik"
yarn build
yarn verify:build
yarn inspect:build
```

`inspect:build` reads `dist/` only: it reports bundle sizes/line counts, localized guide HTML and inline script sizes, byte-for-byte public-file copies, WebP assets and source maps. It does not mutate or “fix” output. Long compact lines corroborate minification; they are not a correctness assertion. Rendering, text spacing, metadata, downloads and accessibility still need their own checks.

### Observed production assets

The root build emitted four external JavaScript bundles (606, 1,423, 832 and 825 bytes) and four CSS bundles (14,749, 5,920, 4,946 and 13,032 bytes). Each bundle was a single compact line. The project-guide stylesheet includes its static playbook styles; no new JavaScript bundle was introduced. The output also contains six responsive WebP assets and no source maps. Both public assets were verified byte-for-byte copies. The guide has the existing unminified early theme initializer plus a small already-minified inline module; the audit reports both without confusing “inline in output” with the explicit Astro `is:inline` directive.

These are raw local file sizes from this revision, not budgets or promised download speeds. Re-run the inspector after content, tooling or stylesheet changes.
