# CSE-Pothik content guide

This guide explains the shared content system. [DESIGN.md](../../DESIGN.md), [AI-Prompt.md](../../AI-Prompt.md) and [SKILL.md](../../SKILL.md) remain authoritative.

## Contents

- [Content model](#content-model)
- [English and Bangla](#english-and-bangla)
- [Add or change a career](#add-or-change-a-career)
- [Roadmaps, experiments and goals](#roadmaps-experiments-and-goals)
- [Learning resources](#learning-resources)
- [SEO and analytics](#seo-and-analytics)

## Content model

Published entities use stable language-neutral IDs. Localized fields use `{ en, bn }`, allowing tests to verify language parity and relationships. Core types in `src/types/content.ts` cover careers, families, roadmaps, stages, experiments, resources, AI task exposure, student situations, goals and guidance sources.

Typed sources live under `src/data/`; shared renderers live under `src/components/`. Thin English and `/bn/` route wrappers select a locale at build time. Dynamic routes generate career, roadmap, experiment and AI detail pages automatically.

## English and Bangla

English is the canonical editorial source, but Bangla is rewritten as natural mentoring prose for Bangladeshi CSE students. It must:

- use the respectful **আপনি** relationship consistently;
- avoid English sentence order with Bangla word substitution;
- translate ordinary interface/editorial labels;
- retain familiar technical terms such as API, Git, Backend, Docker, SOLID and Machine Learning where clearer;
- keep humor occasional, contextual and kind.

Content tests reject known familiar-address forms, missing bilingual fields and malformed relationships.

## Add or change a career

1. Add the stable ID to `careerIds` in `src/types/content.ts`.
2. Add complete bilingual content in the appropriate focused module under `src/data/`.
3. Assign its career family and comparison dimensions.
4. Add three qualitative AI task-exposure entries.
5. Add a five-stage roadmap and a safe, time-bounded experiment.
6. Add related careers, deferrals, resources and relevant goal connections.
7. Run `yarn test:content`, `yarn typecheck` and `yarn build`.
8. Verify both languages, both themes and mobile/desktop layouts.

Do not use numeric AI replacement probabilities or promise fit, income or employment.

## Roadmaps, experiments and goals

A roadmap stage states the purpose, topics, evidence, a checkpoint and what not to learn yet. Experiments include a timebox, prerequisites, experience goal, at least four steps, attention prompts, reflection and curated resource IDs. Security experiments must remain in owned systems or explicitly authorized labs.

Goal guides connect skills to seven outcomes: global companies, Bangladesh industry, remote work, study abroad, research/publication, freelancing and a technology business. They provide preparation evidence without naming local employers, predicting admissions or promising results.

The final-year project content and reusable fields live in `src/data/final-year-project.ts` and `src/data/project/`. English/Bangla Markdown downloads are generated from the same typed source and contain authoring prompts, never fabricated evidence.

## Learning resources

Each resource needs a stable ID, provider, HTTPS URL, type, free-access status, bilingual scope/reason, language availability and review date. Prefer official documentation, universities, open courses, trusted labs, open books and established practice platforms.

External learning links open in a new tab with `noopener noreferrer` and an accessible indicator. Internal navigation stays in the current tab. Link to teaching; do not copy it.

## SEO and analytics

Every primary route needs localized title/description, canonical URL, `hreflang`, `x-default`, Open Graph metadata and appropriate JSON-LD. Index pages use CollectionPage/ItemList where accurate; detail pages use Article and breadcrumbs. Static search creates no indexable result route.

Analytics remains disabled unless `PUBLIC_GA_MEASUREMENT_ID` exists at build time. Events accept only bounded scalar identifiers—never names, emails, free text, profiles or hidden user IDs. Google Signals is disabled. The feedback form is operated separately and its response is never sent to GA4.

Run `yarn verify:build` after content changes and `yarn check:external-links` when resource URLs change.

Return to the [documentation map](../../README.md#documentation-map).
