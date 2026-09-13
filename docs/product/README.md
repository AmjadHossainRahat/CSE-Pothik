# CSE-Pothik product guide

This guide summarizes the product experience. [DESIGN.md](../../DESIGN.md) remains the authoritative source when requirements differ.

## Contents

- [Product promise](#product-promise)
- [Student journeys](#student-journeys)
- [AI-era guidance](#ai-era-guidance)
- [Focused guidance](#focused-guidance)
- [Language, theme and visual experience](#language-theme-and-visual-experience)
- [Product boundaries](#product-boundaries)

## Product promise

CSE-Pothik is a practical mentor for Bangladeshi CSE students who need direction before confusion becomes lost time. It helps a student understand the breadth of CSE, compare work rather than titles, try a small experiment and leave with one bounded next action. Motivation is attached to realistic work; the site does not sell certainty.

English is canonical. Bangla is independently edited in a respectful, conversational **আপনি** voice rather than translated word for word.

## Student journeys

The experience supports:

- a new student who does not yet know what CSE work looks like;
- an uncertain student who needs deterministic “I’m Lost” guidance;
- a student comparing career families, roadmaps and real-work experiments;
- a final-semester or recent graduate moving from an academic project toward an internship or junior role;
- a student preparing for Bangladesh industry, global companies, remote work, study abroad, research, freelancing or a technology business;
- a learner strengthening Competitive Programming or broader software-engineering practice.

The homepage stays a router rather than becoming a textbook. Career families, starting intentions and the AI decision tree lead to focused pages. Search, breadcrumbs, side navigation and onward actions remain consistent across routes.

## AI-era guidance

The homepage’s **Frame → Verify → Own** model explains why cheap code generation increases the importance of problem framing, fundamentals, analytical reasoning, verification, testing and accountable trade-offs. It does not claim these skills are automation-proof or guarantee employment.

The dated `/future-of-cse/` editorial:

- is visibly narrated by GPT-6 Astra (High), not presented as an official OpenAI forecast;
- separates observed evidence, external projections, conditional scenarios and advice;
- keeps source dates, geography and limitations visible;
- includes one public prompt designed specifically to generate and recheck that page;
- states what evidence could change the outlook.

The AI Engineering roadmap teaches capability order: specification and deterministic baseline → testable prompt contract → grounded retrieval/RAG → visible workflow → one bounded agent loop → evaluation, least privilege, observability and rollback. n8n and OpenClaw are examples after concepts; AGI is a research horizon, not a beginner build step.

## Focused guidance

### Final-year project

The final-year guide covers team agreements, milestones, task decomposition, a working board, day-one repository setup, lightweight Git collaboration, sync-ups, risk-based testing, CI, release and handover. Ten English/Bangla Markdown templates help students produce evidence without fabricating completed work. Department and supervisor requirements take priority.

### First software role

The first-role guide supports students with strong, developing or limited Competitive Programming experience. It combines a minimum problem-solving floor with role-specific project evidence, interview preparation, targeted applications and feedback-driven iteration. CGPA and ACM/ICPC are useful signals, not universal entry requirements.

### Bangladesh technology perspectives

Nine supplied videos and podcasts are ordered as perspectives from local leaders and practitioners, not authority or endorsement. Two appear on the homepage; small context-specific pairs also appear in the new-student, recovery, first-role, software-foundations and AI guides. Each contextual pair returns the visitor to a concrete action and links to the complete sequence under Learning Resources. Links open in a new tab without embeds, autoplay or remote thumbnails.

The homepage “Find my next step” block is an orientation router, not a content page. It is intentionally absent from the global sidebar. The sidebar links to durable destinations, while the router progressively reveals situation-specific paths. The first-role guide includes four honest entry strategies, including a recovery route for visitors whose programming foundation and project evidence both need rebuilding.

## Language, theme and visual experience

- English and Bangla have equivalent static routes and localized metadata.
- Dark is the first-visit default; an explicit Light choice is stored locally. Both themes use shared semantic tokens and preserve feature parity.
- Desktop uses a persistent intent-grouped sidebar; mobile/tablet uses an accessible native drawer.
- Breadcrumbs, search, language and theme share one sticky context bar.
- Layouts are supported and tested from 390px, with explicit coverage at 390, 768, 1280 and 1600 pixels.
- The homepage uses an inclusive three-person technology scene and an AI study-partner illustration; provenance is documented in [illustrations.md](../illustrations.md).

## Product boundaries

CSE-Pothik deliberately has no account, authentication, backend, database, stored profile, progress score, streak, badge, certificate, job promise, paid-learning funnel or runtime chatbot. Essential content and navigation work without JavaScript. Only explicit language/theme preferences may be stored locally.

Return to the [documentation map](../../README.md#documentation-map).
