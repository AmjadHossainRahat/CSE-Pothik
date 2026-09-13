# CSE-Pothik

**Find your direction in CSE.**

CSE-Pothik is a free, production-ready, bilingual career-navigation and mentoring website for Computer Science and Engineering students. It helps students discover possible work, test an interest safely, strengthen fundamentals and choose a realistic next step in the AI era.

English is the default language. Independently edited Bangla pages live under `/bn/`.

## Contents

- [What the site includes](#what-the-site-includes)
- [Documentation map](#documentation-map)
- [Quick start](#quick-start)
- [Quality checks](#quality-checks)
- [GitHub Pages](#github-pages)
- [Inspiration and collaboration](#inspiration-and-collaboration)
- [License](#license)

## What the site includes

- 17 career guides across eight career families
- career comparison, short experiments and five-stage roadmaps
- goal plans for Bangladesh industry, global companies, remote work, study abroad, research, freelancing and technology businesses
- starting guidance for new, uncertain, final-semester and recent-graduate students
- Competitive Programming, software-engineering foundations and final-year project guidance
- a dated, sourced Future of CSE editorial narrated by GPT-6 Astra (High)
- curated learning resources and Bangladesh technology-leader perspectives
- English/Bangla routes, light/dark themes and responsive navigation
- static search, SEO metadata, structured data, sitemap, robots and optional GA4 analytics

The site has no account, database, progress tracker, certificate, fit score, job guarantee, paid-learning funnel or runtime chatbot.

## Documentation map

| Read this                                       | Purpose                                                                          |
| ----------------------------------------------- | -------------------------------------------------------------------------------- |
| [Product guide](docs/product/README.md)         | Audience, journeys, mentoring approach, AI-era guidance and product boundaries   |
| [Engineering guide](docs/engineering/README.md) | Architecture, local development, testing, production optimization and deployment |
| [Content guide](docs/content/README.md)         | Bilingual content model, authoring workflows, resources, SEO and analytics rules |
| [Community guide](docs/community/README.md)     | Contribution workflow, feedback, inspiration and collaboration credits           |
| [DESIGN.md](DESIGN.md)                          | Authoritative product, brand, UI/UX and content requirements                     |
| [SKILL.md](SKILL.md)                            | Authoritative architecture, quality gates and Definition of Done                 |
| [AI-Prompt.md](AI-Prompt.md)                    | Primary implementation and validation instructions                               |

Supporting records:

- [Validation history](docs/validation.md)
- [Engineering audit](docs/engineering-audit.md)
- [UX review](docs/ux-review.md)
- [Illustration provenance](docs/illustrations.md)

## Quick start

Requirements: Node.js 22.12 or newer, Corepack and Git. The workflow is Yarn-only.

```bash
corepack enable
yarn install --immutable
yarn dev
```

Useful commands:

```bash
yarn build
yarn preview
yarn check
```

See the [engineering guide](docs/engineering/README.md) for the complete command matrix and base-path testing.

## Quality checks

Before publishing a material change, run the relevant full cycle:

```bash
yarn format:check
yarn lint
yarn typecheck
yarn test:unit
yarn test:content
yarn build
yarn verify:build
yarn inspect:build
yarn test:e2e
yarn test:a11y
yarn check:external-links
```

`yarn check` runs formatting, linting, type checking and the Vitest suites. Browser, accessibility, build-artifact and external-link checks remain explicit release gates.

## GitHub Pages

Every push to `main` runs the production gates and deploys the tested `dist/` artifact through `.github/workflows/deploy-pages.yml`. Configure **Settings → Pages → Source: GitHub Actions** once.

The workflow derives the current repository name for the Pages base path. For a manual project-site build:

```bash
BASE_PATH=/CSE-Pothik SITE_URL=https://username.github.io yarn build
```

Canonical URLs, assets, language alternates, sitemap and robots output all honor the configured base. Deployment details and PowerShell examples are in the [engineering guide](docs/engineering/README.md#github-pages-and-ci).

## Inspiration and collaboration

CSE-Pothik was conceptually inspired by [roadmap.sh](https://roadmap.sh/), [Architect Prep](https://mayurjp.github.io/architect-prep/) and [Amirul Islam](https://amirulislamalmamun.com/). Its visual system, copy, mentoring model, roadmaps and implementation are original.

- **[Amjad Hossain](https://amjadhossainrahat.github.io/)** — Idea, Creator and AI Agent Orchestrator, Reviewer and Quality Control
- **ChatGPT** — Idea polishing, Requirement and Design analysis and finalizing
- **Codex** — Implementation & Iteration · GPT-5.6 Sol (High) and GPT-6 Astra (High)

These credits describe different contributions without implying affiliation or endorsement. See the [community guide](docs/community/README.md) and the site’s localized About page for full context.

## License

The repository is available under the [MIT License](LICENSE). Improvements are welcome when they preserve attribution, bilingual quality, accessibility and free student access.
