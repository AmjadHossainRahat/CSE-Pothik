# CSE-Pothik — DESIGN.md

> **Status:** Product and UI/UX baseline  
> **Product type:** Fully static bilingual career-navigation and mentoring website for CSE students  
> **Default language:** English  
> **Optional language:** Bangla  
> **Default theme:** Light  
> **Optional theme:** Dark  
> **Hosting target:** GitHub Pages

---

## 0. Brand Identity

### 0.1 Official name

**CSE-Pothik**

The product name must be written consistently as `CSE-Pothik`, including the hyphen. Do not shorten the public brand to `Pothik` where the CSE context would become unclear.

### 0.2 Primary tagline

> **Find your direction in CSE.**

### 0.3 Supporting positioning line

> **A practical career guide for CSE students in the AI era.**

The tagline is the short brand expression. The supporting positioning line may be used in metadata, about/introductory copy, social cards, or contexts where the product needs more explanation.

### 0.4 Pothik / path metaphor

`Pothik` comes from the Bangla word **পথিক**: a person travelling a path. The student is the Pothik—not a passive follower—and the site helps that student:

- understand where they are;
- discover possible directions;
- compare paths;
- choose a provisional direction;
- recognize when a path does not suit them;
- find the next meaningful step;
- adapt when technology or AI changes the landscape.

Use direction/navigation language naturally and sparingly. Good examples include:

- **Find your direction**
- **Explore another direction**
- **Not sure where to go next?**
- **Find my starting point**
- **Your next meaningful step**
- **I’m Lost**

Do not force path or traveller metaphors into every heading, button, paragraph, or feature name. The site should still sound like a human mentor rather than a themed navigation app.

### 0.5 Logo / mark direction

The identity uses a simple, original compass-C mark: an open circular route forms a subtle C around a decisive directional needle. It should suggest orientation and forward movement without resembling a text-heavy badge, travel app, map pin or nautical brand.

Preferred characteristics:

- an open circular C with one clear directional needle;
- compact geometry with no enclosing badge text or decorative compass rose;
- recognizable at favicon size;
- works in one color;
- works in both light and dark themes;
- avoids generic graduation caps, circuit-brain icons, robot heads, boats, anchors or over-detailed compass/travel imagery.

The wordmark should prioritize `CSE-Pothik` as the recognizable brand.

### 0.6 Brand localization

Keep the brand name **CSE-Pothik** in English on both English and Bangla pages.

Do not translate the product name into Bangla. Surrounding copy should be naturally localized.

Example Bangla positioning direction:

> **CSE-তে কোন দিকে এগোবেন—সেটা বুঝতে সাহায্য করার practical mentor.**

This is tone guidance, not a mandatory fixed tagline.

---

## 1. Product Vision

CSE-Pothik is a practical mentor and navigation website for Computer Science and Engineering students—especially freshers who enter CSE without a clear understanding of possible careers, what those careers actually involve, what they should learn, or how AI is changing the path ahead.

The product must feel like:

> **A veteran mentor helping a CSE student understand the landscape, try real work, avoid common mistakes, and decide the next meaningful step.**

The product must **not** feel like:

- a career portal;
- a job board;
- an LMS;
- a course platform;
- a dashboard;
- a progress tracker;
- a personality-test funnel;
- a login-based application;
- a motivational quote site;
- a generic AI-generated SaaS landing page.

The mental model is:

> **A practical career guide for the AI era.**

The student is not expected to choose a lifelong career at age 18. The site should help them explore, experiment, compare, make provisional choices, and take useful next steps.

---

## 2. Core Product Promise

Every important screen should help answer at least one of these questions:

1. **What am I looking at?**
2. **Why does this matter to me?**
3. **What should I do next?**

If a section does not answer one of those questions, it should be challenged or removed.

The site should continually move the student through:

**Understand → Explore → Compare → Try → Prepare → Adapt**

---

## 3. Non-Goals

The site does not:

- create user accounts;
- provide login/logout;
- store personal profiles;
- track learning progress;
- award points, badges, streaks, XP, or certificates;
- teach full courses;
- replace university study;
- provide detailed tutorials for every topic;
- promise a job;
- predict exact career replacement probabilities;
- claim any career is “AI-proof”;
- prescribe one universal career path;
- require a backend or database.

The site **guides learning; it does not replace learning resources**.

Outbound learning resources, official guidance references, inspiration/creator destinations and the source repository open in a new tab and clearly indicate that they leave CSE-Pothik. Internal routes and same-page navigation stay in the current tab so the Back button, breadcrumbs and mobile browsing remain predictable. Local-industry guidance uses the broad BASIS industry catalog for company/category discovery rather than promoting one employer; students still verify actual vacancies on each employer's official page.

---

## 4. Target Users

### 4.1 Primary

CSE students who are:

- newly admitted and unfamiliar with career options;
- in Year 1 or Year 2 but learning randomly;
- capable of basic programming but unsure where it leads;
- worried that AI may replace their future career;
- unsure whether competitive programming is necessary;
- comparing multiple career paths;
- already targeting a career but unsure what to learn next.

### 4.2 Recovery audience

Students in Year 3, Year 4, or near graduation who feel they started too late.

The site must not shame them.

The tone should acknowledge reality while offering a credible recovery route:

> You cannot recover three years in three weeks. But you can stop losing the next three months.

---

## 5. Product Personality

The site should sound like:

> An experienced senior who understands industry reality, explains difficult things simply, points out mistakes before they become expensive, occasionally makes the student laugh, and always leaves them with a useful next action.

### 5.1 Tone principles

Use:

- practical honesty;
- calm confidence;
- concise explanations;
- mentor-like warnings;
- useful motivation;
- intelligent humor;
- curiosity;
- suspense through meaningful reveals;
- realistic examples;
- culturally natural Bangla.

Avoid:

- motivational fluff;
- corporate jargon;
- startup marketing language;
- fake urgency;
- exaggerated claims;
- forced Gen-Z slang;
- meme-heavy writing;
- condescension;
- fear-based AI messaging.

---

## 6. Motivation Philosophy

Motivation should come from:

- clarity;
- believable next steps;
- evidence that starting now still matters;
- showing compounding benefits of early learning;
- showing realistic recovery paths;
- reducing unnecessary overwhelm;
- helping students stop random learning.

Prefer:

> You do not need to master backend engineering this semester. You need to stop switching between React, AI, cybersecurity and blockchain every two weeks.

Avoid:

> Believe in yourself. Anything is possible.

---

## 7. Humor Philosophy

Humor should be intelligent, short, and contextual.

Examples of the intended style:

> You have not deployed your first API yet. Kubernetes can wait.

> Installing Kali Linux does not automatically turn you into a cybersecurity engineer.

> Do not memorize all 23 GoF patterns and start seeing Factory Pattern in your breakfast.

> If an AI wrote the whole assignment and you cannot explain line 12, the AI completed the course.

Humor must never make a struggling student feel stupid.

---

## 8. Suspense and Curiosity

Use progressive reveals instead of manipulative gamification.

Recommended patterns:

### 8.1 Plot Twist

Reveal a career reality beginners usually miss.

Example:

> Backend sounds interesting. But there is one part beginners rarely imagine.

Then reveal production debugging, legacy systems, ambiguity, or operational responsibility.

### 8.2 Reality Check

Contrast perception vs real work.

Example:

**What beginners think ML engineers do:** Train futuristic models all day.  
**Reality:** Data cleaning, pipelines, experiments, evaluation, debugging, and more data cleaning.

### 8.3 The Uncomfortable Part

Every career page should explain what may frustrate someone.

### 8.4 Scenario Choice / “2 AM Test”

Example:

> It is 2:13 AM. Production is suddenly 20× slower. Nothing was deployed. CPU looks normal. Customers are complaining. Does investigating this sound terrifying, annoying, or weirdly exciting?

Use the response to suggest possible paths without saving data.

### 8.5 Future You

Occasional short humor:

> Final-Year You has entered the chat: “Please learn Git now.”

Use sparingly.

---

## 9. Information Architecture

Primary navigation should be **problem-oriented**, not just conventional site taxonomy.

Use one problem-oriented navigation model at every viewport. On wide screens it is a persistent labeled left sidebar; on phones and tablets it becomes a compact sticky header and native full-width menu drawer. Group links by student intent rather than exposing an unexplained taxonomy:

- **Start here:** Home, New to CSE, First software role, I’m Lost;
- **Discover:** Career paths, Compare careers, Try real work;
- **Prepare:** Learning roadmaps, Goal plans, Final-year project, Learning resources;
- **Future:** AI & your career;
- **About:** Why CSE-Pothik?

Keep the current section visibly marked with `aria-current`, a non-color-only border/background treatment and the same grouping in English and Bangla. The wide sidebar contains the CSE-Pothik brand and problem-oriented navigation only. Search, language and theme live together inside the sticky breadcrumb context bar, keeping global controls beside the visitor's current location without creating another top bar. The sidebar may scroll independently on shorter laptop screens; it must never reduce the article below a usable reading width or overlap page content. Do not collapse it to unexplained icons.

On smaller screens, retain a compact brand/menu header. Immediately below it, the same sticky breadcrumb context bar keeps Search, language and theme reachable. Search is a labelled magnifier at these widths; activating it reveals the text field and submit button from that same bar. The native drawer must work with keyboard and JavaScript disabled, close with Escape when JavaScript is available, constrain its height to the viewport and permit scrolling to every group. Keep **I’m Lost** visually prominent.

Every page uses the persistent context bar as an orientation aid, including a current Home marker on the homepage. Keep it at the viewport top beside the desktop sidebar and immediately below the compact header on mobile/tablet. It must not overlap the header or anchored content. Preserve one readable breadcrumb row by truncating only the current-page label; keep the full text in the accessibility tree and show the complete page title below. Exactly one breadcrumb item receives `aria-current="page"`. With JavaScript disabled, the non-sticky mobile header may leave while the context bar moves to the viewport top.

The footer remains, but it is no longer a duplicate global navigator. Keep a compact product explanation, Why CSE-Pothik, final-year guide, privacy, repository, inspiration and collaboration credits there. Add one quiet bilingual invitation to the voluntary Google feedback form; it opens in a safe new tab and must not become a popup, embedded interruption, floating control or primary navigation item. The footer is required for provenance and policy even when desktop navigation is persistent.

### 9.1 Persistent “I’m Lost” path

The “I’m Lost” entry point should be available throughout the site.

Suggested choices:

- I don’t know what careers exist.
- I can’t choose between careers.
- I know some programming but have no direction.
- I don’t know what to learn next.
- I’m worried about AI.
- I’m in 3rd/4th year and feel behind.
- I already know my target career.

No login or stored state is required. The user tells the site where they are **right now**.

---

## 10. Homepage Experience

The homepage is a **modern CSE orientation program**, not a standard landing page.

It must combine two layers:

- **Emotional layer:** veteran mentor orientation.
- **Functional layer:** immediate guided navigation.

The required display order is: responsive global navigation → hero with orientation map → **AI Reality** → starting-point navigator → concise misconceptions and Bangladesh-technology voices → career landscape → experiment previews → useful loop → encouraging next step → footer. The navigation is a wide-screen sidebar or compact mobile/tablet header and drawer; it does not alter the content order. The topic numbers below identify requirements, not display order. AI Reality must be the first section after the hero; do not place the career grid ahead of it.

The homepage introduces the product; it is not the entire directory. Show Backend, Cybersecurity and ML as three immediately visible representative experiments; place Data Analytics & BI, AI Engineering and Application Security in a clearly labelled native disclosure; and link to all published experiments (currently seventeen). Keep every career family discoverable and avoid repeating the same careers in a second featured-card section. Show two real Bangladesh-technology perspectives on the homepage and link to the complete ordered nine-item Resources watchlist. The complete career, roadmap and experiment pages remain unchanged in depth.

Motivation must accompany action: welcome students who are confused or restarting, use a short future-self note, explain that a direction is a draft rather than a verdict, and end with one achievable 20-minute next step. Do not substitute slogans or false guarantees for practical guidance.

### 10.1 Hero — purpose before navigation

The header/brand area should clearly identify **CSE-Pothik**, while the hero headline remains student-problem-first rather than repeating the product name as the main headline.

Core direction:

# You got into CSE. Now what?

Begin with the explicit purpose: **Free career guidance for CSE students**. Follow it with the student-problem-first punch line **“You got into CSE. Now what?”** Distill the origin story into a short, nonjudgmental arc: students may arrive through popularity, earning potential or hopes of opportunities abroad, then discover a field much broader than the few familiar roles; without early orientation, trends and disconnected tutorials can consume semesters; even then, the opportunity to build direction is not gone. Resolve immediately into useful action: understand the options, try the real work and choose one next step. Do not use unsupported prevalence claims, blame students, demean any legitimate career, or suggest that someone has permanently “missed the train.”

Reassure without pressure: “You don’t need your whole future figured out. Start with one useful next step.” Explain the practical outcome: a path to explore, a learning order and something to try. Do not promise employment, admissions or a personalized assessment.

Primary CTA:

**Help me find my next step** — jump to the three starting intentions.

Secondary CTA:

**Explore career paths** — open the career index directly.

The hero should feel open, calm and editorial—not like a dashboard.

On phones, place the purpose, headline, explanation and primary action before the artwork. Keep the primary action fully visible in the tested 320×720 and 390×844 initial viewports, in English and Bangla; do not shrink text below readable sizes or hide the artwork to achieve this. Use shared typed bilingual copy from `src/data/homepage.ts`.

The localized About page carries the complete origin story, not the homepage. Present promise → orientation gap → urgent search → practical recovery as a compact four-stage visual sequence, then state Purpose and Goal explicitly. Acknowledge the familiar late-stage question in social-media groups without shaming students for seeking help: the painful part is needing the map only after time and confidence feel scarce. Purpose: offer the early orientation many students wish they had and a calm route back later. Goal: reveal work behind career titles, test fit through small experiments, build durable foundations and connect the student to one practical next step. Mention independent and orientation-class use without implying university endorsement. Keep the story, homepage summary and tests grounded in shared bilingual `sitePurpose` data, with natural conversational Bangla rather than English sentence order.

Use the original three-person study-partners illustration, not stock photography: a Chakma Bangladeshi woman standing in the centre with a QA checklist tablet and stylus, between a woman and man each using a laptop. They are equal computing teammates, each contributing to building and checking a product. Give all three equal visual prominence and retain their complete visible composition on every screen size and in both themes. Show them together in one static scene, not alternating gender- or ethnicity-specific carousel slides. The future-self caption is an editorial encouragement, not an endorsement by a real professional.

Make the scene welcoming and unambiguously about technology: all three glance toward the viewer with relaxed, casual smiles and clear personal space. The seated woman keeps her hands at her laptop and wears a teal hoodie and neatly draped ivory orna covering all her hair; the man retains his navy hoodie, glasses and keyboard posture. The centre teammate holds a visible test checklist tablet and stylus, wearing a cream blouse with a restrained Chakma-textile-inspired shoulder cloth. Use documented weaving references and contemporary styling, without inventing ceremonial costume, exaggerating facial features or claiming that one outfit defines a community. QA is her illustrative activity, not a role assigned to any ethnicity or gender. Preserve the notebook's technical flow diagram, coffee, water bottle and small indoor plant, visibly resting on the desk. Keep devices physically consistent. Avoid mutual gazing, inward leaning or romantic posing; friendliness is directed toward the visitor. Ethnic representation does not change the English/Bangla-only language scope.

“Today’s orientation map” is four working links with a number, grouped title and caption, and directional arrow. The caption must sit beneath its own title, never in the narrow number column. Use one column on small phones, two on tablets, and four when space permits.

Its four destinations explain the journey: explore careers (career landscape), try real work (experiment previews), find a learning path (career roadmaps), and prepare for a goal (goal guides). Introduce later sections with the questions students are trying to answer: what the work involves, whether they would enjoy it, and what to learn next. Distinguish a career roadmap's learning order from a goal guide's preparation strategy.

### 10.2 Before You Choose Anything

Correct common misconceptions:

- CSE is not one career.
- Programming is not a career.
- A framework is not a career plan.
- You do not need to choose your lifelong profession today.
- Learning randomly is not the same as exploring deliberately.

This section should be concise. Three carefully combined statements may cover these five ideas; pair them with two real local-technology video previews rather than adding another long standalone section.

### 10.3 Bangladesh Technology Voices

Use the supplied public videos and podcast episodes from practitioners, leaders and educators as a curated perspective set—not anonymous quotations, a social feed or a popularity ranking.

Reuse small, relevant two-item subsets in the new-student, feel-behind, first-software-role, software-foundations and AI guides. Place each subset beside the decision or action it explains, link onward to the complete ordered watchlist, and explicitly return the learner to the page's practical next step. These perspectives can motivate and add local context; they must not replace the guide, hiring evidence or primary technical sources.

The homepage shows only two starting perspectives: whether choosing CSE was a mistake, and why programming still matters when AI can produce code. A complete watchlist belongs at `/resources/#industry-voices` in this pedagogical order:

1. **Ground yourself** — CSE-choice anxiety, then student-life red flags.
2. **Strengthen how you think** — why learn programming with AI, problem-solving practice mistakes, then why coding alone is insufficient.
3. **Read the working world** — junior roles with AI, job-loss/hiring expectations, Bangladesh gaming, then business engineering.

Each card includes a localized editorial title, the published title where useful, named speaker, publisher, one bounded “watch for” note and review date. Video links open YouTube in a new tab and use the existing bounded learning-resource analytics event. Do not embed or autoplay YouTube; this avoids third-party requests before the student chooses to leave the site and keeps the static page fast.

Before the list, teach students to ask:

1. Is the speaker's context and experience clear?
2. Are there specific examples and trade-offs, or only fear/hype?
3. Does the claim agree with other reliable sources and real role requirements?
4. Does it lead to one small, safe action rather than only stronger emotion?

These are **perspectives, not testimonials, endorsements, job guarantees or universal verdicts**. Preserve third-party titles accurately but label sensational or unsupported numbers as the publisher's presentation rather than a CSE-Pothik statistic. Do not infer biographies, credentials or employers beyond verified source metadata.

### 10.4 Career Landscape Reveal

Reveal broad career families before individual job titles.

Recommended families:

1. **Build Software**
   - Software Engineering
   - Backend
   - Frontend
   - Full-stack
   - Mobile
   - Game Development

2. **Work With Data**
   - Data Engineering
   - Data Analytics
   - Data Science
   - BI

3. **Build Intelligence**
   - Machine Learning
   - AI Engineering
   - Applied AI
   - MLOps

4. **Protect Systems**
   - Cybersecurity
   - Application Security
   - SOC / Security Analysis
   - Cloud Security

5. **Run Systems**
   - DevOps
   - SRE
   - Cloud Engineering
   - Platform Engineering
   - Networking

6. **Work Close to Hardware**
   - Embedded Systems
   - IoT
   - Robotics
   - Computer Architecture-oriented paths

7. **Understand Computing Deeply**
   - Algorithms
   - Systems
   - Research
   - Academia
   - Theory-oriented paths

8. **Technology + People**
   - Product-oriented technical roles
   - Technical leadership
   - Developer relations / technical communication where appropriate

Career families may evolve. Keep them data-driven.

Render all eight families once, with text labels and restrained category symbols/colors. On desktop, a compact four-column landscape is preferable to repeated full-size career cards.

### 10.5 AI Reality Section

Prominent homepage message:

> **AI is changing CSE careers. Ignoring that is not a strategy. Panicking is not a strategy either.**

Explain:

- some tasks are becoming dramatically easier to automate;
- careers are bundles of tasks;
- students should learn which tasks are exposed;
- foundations, judgment, verification, architecture, domain understanding, debugging and responsibility matter;
- AI should become a tool students learn to direct and verify.

Make the motivation concrete with a compact **Frame → Verify → Own** decision tree:

1. Can the student state the user need, constraints and “done” without asking AI first?
2. Can the student challenge correctness, edge cases, security, tests and maintainability?
3. Can the student justify the trade-off for this codebase, business and people affected?

“Not yet” is a learning branch, not a failure state: clarify or shrink the problem, strengthen the missing foundation, inspect team conventions and request review for consequential or hard-to-reverse decisions. “Yes” advances toward bounded AI use, evidence-based verification, documentation and accountable ownership.

Under a native disclosure, follow a hypothetical fresher using a company AI. Compare thin context and generic/naive output; rich team context that produces patterns the fresher cannot safely explain or change; and a foundations-led engineer who frames constraints, asks for alternatives, chooses a simple adequate design, tests assumptions and escalates beyond their experience. Name plausible consequences—review load, defects, security gaps, complexity and tool/token dependence—without presenting the scenario as a universal prediction. Coding fluency, algorithms and data structures remain useful, while problem framing, analytical reasoning, debugging, testing, creativity, product/business understanding, communication and judgment determine whether generated output becomes reliable engineering. SOLID and design patterns are conditional vocabulary, not a mandatory checklist or universal fresher prerequisite.

CTA:

**Understand AI & My Career**

Never state fake “27% replacement risk” type numbers.

Place this section immediately after the hero. Balance the warning with agency: “AI is changing fast. You can grow with it.” Use the original small AI study-partner illustration checking a result. It supports the lesson about verification; it is not the CSE-Pothik brand mascot.

Use **Task Automation Exposure**, not **Replacement Probability**.

### 10.6 “What would help you today?”

This is the homepage’s primary navigation engine. Show three plain-language intentions as readable linked rows, with the benefit explained beside each:

- I’m new or unsure where to begin → the new-CSE-student guide.
- I want to understand different careers → the career index.
- I know my goal and need a plan → the seven-goal preparation hub.

Preserve the following seven detailed situations inside a native “Already studying? Find a more specific starting point” disclosure. Its contents must remain in static HTML and be keyboard-accessible without JavaScript. Do not require a quiz, account, score or stored profile. Keep recovery encouragement visible outside the disclosure. A compact visible first-role prompt must also serve final-semester/recent-graduate visitors without turning the homepage into a job board.

- I just started CSE.
- I have no idea which career suits me.
- I know some programming but have no direction.
- I’m worried AI will replace my future job.
- I already have a target career.
- I’m close to graduation and feel behind.
- I have a project and need my first software role.

Each option routes to a focused mentoring path.

### 10.7 Try Before You Choose

Core philosophy:

> Do not choose a career because a YouTube video says it pays well. Try a small version of the work first.

Example experiment cards:

**Backend** — Build a tiny API.  
**Cybersecurity** — Complete a safe beginner security investigation/lab.  
**AI/ML** — Train and evaluate a tiny classifier.  
**DevOps/SRE** — Deploy and diagnose a small application.  
**Frontend** — Recreate a small accessible interface and improve it after usability feedback.  
**Data** — Clean and analyze a small real dataset.

Experiments should usually take around 60–120 minutes or a short multi-day period.

The homepage previews Backend, Cybersecurity and ML immediately, then offers Data Analytics & BI, AI Engineering and Application Security through a native disclosure. The dedicated experiment index exposes all seventeen complete experiments, including Mobile App Development and UX/UI Engineering. Not enjoying an experiment is useful evidence, not failure.

CTA:

**Try a Career**

### 10.8 Journey Explanation

Show:

**Understand → Explore → Compare → Try → Prepare → Adapt**

Use a clean editorial timeline or branching path.

Each of the six steps is a real navigation link with a grouped label and explanation inside a native static disclosure. Stack on phones, then use two, three or six columns according to available width after expansion. Explicitly reset list-item margins so global prose styles cannot stagger the steps. Do not add completion checkboxes or progress state.

Keep homepage scroll proportional to its routing purpose: show every career-family title and concise description, but progressively disclose each family's individual career links and optional practice track. The two original illustrations remain purposeful anchors. Use restrained CSS-only interaction and a small AI signal animation to add life; never autoplay a carousel or decorative motion, and fully respect reduced-motion preferences.

### 10.9 Closing Orientation Message

Recommended direction:

> You do not need to know where you will be in ten years.  
> But you should not spend another semester without knowing what your next meaningful step could be.

CTA:

**Help Me Find My Next Step**

Offer a concrete first action: spend 20 minutes opening one career, noticing what interests you, and choosing one thing to try. Keep the closing reassuring rather than guilt-driven.

---

## 11. Career Page Template

Every career page should use a consistent structure.

### 11.1 Career Snapshot

- one-sentence definition;
- broad career family;
- coding intensity;
- math intensity;
- systems depth;
- investigation intensity;
- creativity/design intensity;
- communication level;
- typical AI task exposure.

Do not imply these are scientific personality scores.

### 11.2 What Would I Actually Do?

Describe real tasks in plain language.

Example for backend:

- design APIs;
- model data;
- implement business rules;
- integrate services;
- debug production issues;
- improve performance;
- handle security and reliability.

### 11.3 You Might Enjoy This If…

Use realistic preferences.

### 11.4 You Might Dislike This If…

Required section.

Career guidance gains trust when it explains drawbacks.

### 11.5 A Realistic Day

A short scenario or timeline.

Avoid pretending every day is identical.

### 11.6 What Should I Learn?

Group into:

- **Foundation**
- **Core**
- **Practical**
- **Later**

### 11.7 What Not to Learn Yet

Required section.

This is a signature mentor feature.

Example for beginner backend:

Not yet:

- Kubernetes;
- Kafka;
- event sourcing;
- advanced distributed systems;
- premature microservices.

Explain why.

### 11.8 AI & This Career

Explain:

- tasks with higher automation exposure;
- tasks where AI is mainly an accelerator;
- skills whose value may increase;
- how students should use AI while learning;
- what they should still be able to do independently.

### 11.9 Try It

Provide a safe, practical mini-experiment.

### 11.10 Next Choices

Every career page ends with meaningful navigation:

- Try this career.
- Compare it with another path.
- See the roadmap.
- Understand AI exposure.
- Explore a nearby career.
- This does not sound like me.

---

## 12. Career Comparison

Comparison should be highly scannable.

Possible dimensions:

- coding;
- mathematics;
- systems knowledge;
- investigation;
- visual creativity;
- data orientation;
- communication;
- ambiguity;
- production responsibility;
- AI task exposure;
- entry-level portfolio expectations.

Never imply that “High” means “better.”

Comparison is about **fit and work style**, not ranking careers.

Mobile comparisons must remain usable without horizontal zoom.

---

## 13. Career Experiments

Experiments are not courses. Their purpose is to let students **feel a small version of the work**.

Each experiment contains:

1. **What you are about to experience**
2. **Time expectation**
3. **Prerequisites**
4. **Setup**
5. **Task**
6. **What to pay attention to**
7. **Reflection prompts**
8. **Where to go next**

Reflection examples:

- Did you enjoy investigating why something failed?
- Did you enjoy building or analyzing more?
- Did the math feel interesting or draining?
- Would you voluntarily spend another five hours on this kind of problem?

No responses need to be stored.

---

## 14. Roadmap Design

Roadmaps should be mentor-guided learning sequences, not giant technology posters.

Each roadmap stage should tell the student:

- what to learn;
- why it matters;
- prerequisites;
- what “enough for now” looks like;
- one primary free learning resource;
- one practical resource/task;
- optional deeper material;
- what not to learn yet;
- the next step.

### 14.1 Recommended visual stages

- **Foundation**
- **Core**
- **Practical**
- **Professional Engineering**
- **Later / Specialization**

Avoid dumping dozens of technologies onto beginners.

### 14.2 Resource curation pattern

Use:

**Learn** — one excellent primary resource.  
**Practice** — one practical resource/lab/problem set.  
**Go Deeper (optional)** — at most one strong additional resource.

Avoid lists of 20 tutorials.

The resource index may include *The Accidental CTO* as a free, story-driven bridge from isolated backend/system concepts to operational and leadership consequences. Scope it for students who already have basic foundations and explicitly frame it as trade-off material, not an architecture template.

### 14.3 “Why this resource?”

Where useful, include one mentor sentence explaining the selection.

Example:

> Complete Chapters 1–4 for your current stage. You do not need the advanced sections yet.

---

## 15. Learning Resources Philosophy

All learning materials should be:

- genuinely useful;
- free to access for the recommended portion;
- technically credible;
- appropriate to the learner’s current stage;
- preferably official documentation, respected university material, reputable labs, open textbooks, or well-maintained courses;
- checked periodically for broken links or major obsolescence.

The site should not mirror or reproduce external course content.

It should navigate students to it.

---

## 16. Software Engineering Foundations

Professional engineering knowledge should exist in the roadmaps, but the site must not become a detailed tutorial.

Important topics include:

- Clean Code and intention-revealing naming;
- naming;
- cohesion and coupling;
- code smells;
- refactoring;
- SOLID Principles;
- design principles;
- common design patterns;
- defensive programming at input, dependency and AI-output boundaries;
- testing and testability;
- dependency direction;
- clean architecture / architectural boundaries at the appropriate stage.

Teach the **reason to learn**, **why the topic matters more when AI can generate plausible code quickly**, **when to learn**, **how deep to go**, and **where to learn**. The central AI-era message is that code production became cheaper while understanding, review, safe change and failure ownership did not. Give every topic one concrete AI-review pressure and one small project practice.

Make five review lenses especially easy to scan: Clean Code helps a reviewer understand intent; Code Smells reveal change pressure; SOLID helps discuss responsibilities and dependencies; Design Patterns provide conditional team vocabulary; Defensive Programming makes boundaries and failure explicit. Keep Refactoring, testing and architectural boundaries in the sequence that turns those lenses into evidence. Link Clean Code, Code Smells and Design Patterns to their focused Refactoring.Guru guides with scoped bilingual advice; links are learning references, not endorsements or curricula to copy.

Do not encourage pattern memorization.

Mentor principle:

> Experience the design problem before worshipping the pattern.

For common software-engineering paths, introduce design literacy after students can already build small applications.

---

## 17. Competitive Programming / ACM / ICPC Guidance

Competitive programming should be positioned as:

> **A gym for computational thinking—not the whole sport.**

### 17.1 What it develops

- decomposition;
- algorithms;
- data structures;
- complexity reasoning;
- mathematical thinking;
- edge-case analysis;
- debugging;
- precision.

### 17.2 Three recommended levels

**Level 1 — Computational Foundation**  
Useful for nearly every CSE student.

**Level 2 — Algorithmic Competence**  
For stronger DSA/problem-solving depth and relevant careers/interviews.

**Level 3 — Competitive Track**  
For students who genuinely enjoy competition or want ICPC-level practice.

### 17.3 AI-era practice modes

**AI-Free Problem Solving**  
Develop independent reasoning.

**AI-Assisted Review**  
Use AI but require explanation of correctness, complexity, alternatives, edge cases and failure modes.

Recommended exercise pattern:

> Here is an AI-generated solution. Find the bug, identify the complexity problem, or construct a counterexample.

Treat **ACM Programming / ICPC practice** as a separate practice track within Understand Computing Deeply—not a conventional career card. Provide a six-week learn → honest attempt → submit/debug/log → review/transfer loop, preserve a real-project balance, and make beginner volume deliberately modest. Curate Shafaet's Planet's Bangla algorithm notes and Amirul Islam's Bangla programming writing as complementary starting references. Link and scope them; do not copy their wording, curriculum or visual presentation.

### 17.4 Final semester to first software role

Treat first-role transition as a distinct student problem, not as career discovery or a generic “feel behind” state. Publish equivalent English/Bangla guidance that helps final-semester students, recent graduates and other early-career entrants turn existing academic/personal work into honest reviewable evidence and run a focused internship, trainee or junior-role cycle.

Use **Target → Strengthen → Present → Practise → Apply → Improve**. Let visitors jump directly from project hygiene, CV/portfolio, interview preparation, applications or stalled feedback. Teach one genuine post-project improvement through an issue, short branch, test, pull request/review and small release; never suggest rewriting history or fabricating teamwork. Include 90-second, five-minute and fifteen-minute project walkthroughs, evidence-based CV language, safe public-repository checks, a private application log and opportunity-quality questions.

State clearly that ACM/ICPC is a valuable optional practice track rather than a universal junior-job prerequisite. Place an early four-route decision before the longer guide:

1. **Strong competitive problem solving:** verify the actual assessment format, keep the algorithmic advantage and close practical gaps in projects, Git, testing and debugging.
2. **Some but inconsistent problem solving:** maintain a bounded weekly DSA baseline while building role evidence in parallel.
3. **Little CP or low algorithm confidence:** do not self-reject; investigate suitable frontend/UI, mobile, QA/testing, implementation/support and junior-development responsibilities while building a minimum problem-solving floor and one reviewable artifact.
4. **Programming and project evidence both need rebuilding:** present this as a bounded recovery route, not a shortcut or verdict. Build a minimum language/debugging baseline and one small, honest, reviewable vertical slice before expanding applications.

These are evidence-based entry strategies, not ranked identities or easy back doors. Each route needs a clear signal, what to do now, what to do next and an apply-when checkpoint. Some local hiring pipelines may give problem solving and OOP substantial weight, including for well-paid entry roles; other roles may evaluate different evidence. Keep employer guidance generic and name no local company. Give a bounded role/employer-specific DSA and engineering baseline, and connect to the deeper competitive-programming guide when relevant. Treat CGPA as one useful signal beside verifiable work. Diagnose patterns across suitable applications without presenting rejection as a score or verdict. No interview/offer promise, live vacancy aggregation, account or progress tracking.

Make the route chooser discoverable from Start here navigation, a compact homepage prompt, both deterministic situation flows, the Competitive Programming guide, local-industry goal preparation, the recovery guide, final-year guide, relevant software career/roadmap pages, employment goal guides and static search. Keep its full explanation on the first-role page so the homepage and goal pages remain routers rather than duplicate syllabi. Use official openings for changing requirements and scoped dated sources for editorial claims.

---

## 18. AI Resilience Model

### Dated future-of-CSE editorial

Publish a distinct `/future-of-cse/` outlook and equivalent Bangla route under
the Future sidebar group, linked from AI guidance and inline search. Keep the
homepage concise. Lead with a short answer and visible **GPT-6 Astra (High)**
AI-narrator attribution, review date, possible bias/error and a clear disclaimer:
this is not an official OpenAI forecast. Never promise “only truth” about an
unknown future. Preserve the existing site-implementation provenance separately.

Separate observations, external projections, the narrator's conditional
scenarios and recommendations. Explain discipline versus task versus headcount,
junior-entry pressure, senior exposure, fundamentals as useful capability rather
than employment insurance, and human accountability without assumed staffing
guarantees. Show source scope/date/limits next to the finding; do not extrapolate
US percentages to Bangladesh. Include what would change the outlook, a clearly
fictional engineering failure case, kind humor and stage-specific next steps.

Use a scannable section index and native optional story/prompt disclosures.
Publish one complete prompt designed specifically to generate and recheck this
page, not the user's conversational request or a history of draft prompts.
Separate runtime selection from prompt instructions, then state role, exact task,
evidence rules, required structure, writing contract and stopping condition.
Credit Amjad's purpose/publication decision and GPT-6 Astra (High)'s research
narration honestly. Do not claim the prompt is a universal or empirically proven
optimum, that fewer input words guarantee lower total token usage, or that a new
run reproduces exact wording. Bangla is independently conversational. Recheck
evolving evidence before changing the dated narrative.

AI guidance is a first-class product pillar.

Do not tell students:

> AI will never replace programmers.

Instead:

> AI is changing what programmers are paid to do. Learn which tasks are becoming cheap and which abilities become more valuable.

### 18.1 Career pages should discuss tasks, not jobs as indivisible units

On the AI overview, present the progression **Higher exposure → AI-assisted → responsibility-heavy** as one continuous line at desktop widths so it reads as a spectrum rather than three disconnected headings. Use a smaller responsive display size for this sequence; allow natural wrapping on tablet and mobile without horizontal scrolling.

Example categories:

**Higher exposure**

- boilerplate;
- straightforward CRUD;
- syntax conversion;
- basic documentation;
- simple tests.

**AI-assisted / judgment-heavy**

- architecture;
- database modeling;
- debugging;
- test strategy;
- integration;
- security.

**More responsibility / context dependent**

- understanding the actual business problem;
- stakeholder decisions;
- trade-offs;
- production ownership;
- domain expertise;
- risk;
- verification.

### 18.2 AI-native student mindset

Help students grow from:

> I can write code.

toward:

- I understand the problem.
- I understand computer science fundamentals.
- I can design a solution.
- I can direct AI.
- I can verify AI.
- I can debug failures.
- I can integrate systems.
- I can make trade-offs.
- I can take responsibility for the result.

### 18.3 Independent capability

Encourage selected AI-free exercises where foundational reasoning matters.

The site should not track AI dependency, but it can mentor students about it.

---

## 19. Bilingual Experience

### 19.1 Languages

- English is default.
- Bangla is optional.

Recommended routing:

- `/...` — English
- `/bn/...` — Bangla

### 19.2 Bangla must be humanized

Bangla content must **not** be literal word-for-word translation.

It should sound like natural communication among Bangladeshi CSE students and experienced mentors.

Use one consistent conversational relationship: address the student as **আপনি**, with warmth and respect. Prefer the sentence rhythm a thoughtful Bangladeshi senior or mentor would actually use. Translate ordinary navigation and editorial scaffolding—such as guidance, next step, reality check and selected resources—while retaining established technical vocabulary when English is genuinely clearer. A sentence should not preserve English word order merely because its nouns are technical.

Use code-switching deliberately, not automatically. `API`, `Git`, `pull request`, `debugging`, `RAG` and established role names may remain English; everyday ideas such as লক্ষ্য, পরের ধাপ, কাজের প্রমাণ, তথ্যের উৎস and যাচাই should normally be Bangla. Read each Bangla paragraph independently from the English source: it must make sense, sound natural aloud and leave the student with a clear action.

Humor should feel like a mentor's light aside after a useful point. Never joke about a student's CGPA, English ability, financial position, gender, ethnicity, anxiety or time already lost. Do not force a joke into every section.

Technical terms may remain in English where that is how students naturally use them:

- API
- Backend
- Git
- Docker
- Design Pattern
- SOLID
- Machine Learning
- DevOps
- Cybersecurity

Example:

English:

> You have not deployed your first API yet. Kubernetes can wait.

Natural Bangla:

> এখনও প্রথম API-টাই deploy করেননি। Kubernetes একটু অপেক্ষা করতেই পারে।

### 19.3 Localize humor and examples

Humor, suspense, analogies and mentor remarks may need adaptation rather than direct translation.

Both languages must preserve:

- meaning;
- product structure;
- practical tone;
- humor;
- motivation;
- curiosity;
- next-step clarity.

### 19.4 Language-switch UX

Provide an obvious:

**EN | বাংলা**

Switch to the equivalent translated route, not the homepage.

Optionally remember the choice locally, but English remains the default when no preference exists.

---

## 20. Visual Design Direction

### 20.1 Overall feeling

> **Modern university orientation publication + practical career mentor + interactive editorial website**

The visual identity should reinforce **CSE-Pothik** through subtle directional/path motifs rather than literal travel imagery everywhere.

Not:

- admin dashboard;
- gaming UI;
- generic AI SaaS;
- cyberpunk interface;
- stock-photo education site.

### 20.2 Light theme — default

Recommended palette direction:

- **Background:** cool off-white, as in the light half of `themes-sample.png`
- **Surface:** soft white
- **Primary text:** deep ink / navy
- **Primary action:** academic blue
- **Warm accent:** coral
- **Secondary accent:** amber
- **Muted text:** blue-gray / neutral gray

Indicative tokens:

```css
--bg: #f8f9fc;
--surface: #f0f4fa;
--text: #10213b;
--text-muted: #5d6677;
--primary: #1c50e8;
--warm: #b83c30;
--amber: #8c5905;
--border: #d8e0eb;
```

These values are starting points, not excuses to skip contrast testing.

### 20.3 Dark theme — optional

Dark mode should feel like:

> **late-night engineering lab / focused study environment**

—not a hacker-movie parody.

Use:

- deep charcoal or midnight navy backgrounds;
- soft off-white text;
- blue primary action;
- restrained coral/amber/violet accents;
- minimal glow;
- excellent contrast.

Illustrations must be adapted for dark mode. Do not let:

- dark hoodies;
- hair;
- laptops;
- AI/robot illustrations;
- icons;
- card borders

merge into the background.

Every important visual element must retain a clear silhouette and contrast boundary.

Use the dark half of `themes-sample.png` as the mood reference: midnight background `#061522`, blue-navy surface `#0b2030`, raised surface `#10293d`, off-white text `#f3f7fc`, and visible border `#30495e`. Preserve the actual CSE-Pothik name and original artwork; the sample is a visual reference, not an asset to reproduce verbatim.

### 20.4 Theme parity

Both themes must preserve:

- layout;
- hierarchy;
- typography;
- illustration identity;
- navigation;
- component geometry;
- accessibility.

Dark mode is a visual mood, not a separate product.

### 20.5 Theme switch

Provide a visible light/dark toggle.

Remember the user’s choice in local storage.

Use the system color preference only as an optional first-load signal if it does not conflict with the requirement that light is the product default. The safest behavior is:

1. previously stored user choice;
2. otherwise light.

Prevent theme flash during initial page render.

---

## 21. Career Category Colors

Use category colors sparingly.

Suggested direction:

- Software — blue
- Data — teal
- AI/ML — violet
- Cybersecurity — coral/red
- Cloud/SRE — sky
- Hardware — amber
- Research — indigo

Do not turn the site into a rainbow interface.

Category color is a wayfinding aid, not decoration.

---

## 22. Typography

Use a clean, highly readable modern sans-serif.

Preferred starting point:

- **Inter/system sans-serif** for navigation, body and section headings.
- An editorial **Georgia / Noto Serif Bengali / serif** display stack for the homepage hero only, reflecting `themes-sample.png` without adding a remote font dependency.

Use native/system fallbacks.

Bangla must use a Unicode font stack that renders Bangla clearly across target devices. Do not ship font files casually; prefer reliable web/system delivery strategies and test Bangla glyph quality.

Typography should carry hierarchy more than borders or effects.

---

## 23. Layout Principles

Use:

- generous whitespace;
- strong section rhythm;
- editorial asymmetry where useful;
- thin dividers;
- selective cards;
- readable line lengths;
- large but not oversized headings;
- diagrams;
- timelines;
- branching career maps;
- comparison visuals.

Avoid:

- every section inside a rounded card;
- excessive gradients;
- glowing borders everywhere;
- repeated 3-column SaaS grids;
- stock photography;
- generic robot imagery as product identity (a purposeful original AI-verification scene is allowed);
- meaningless decorative dashboards.

---

## 24. Illustration Direction

Use original illustration or simple editorial visual language.

Good candidates:

- mentor/student scenes;
- branching career map;
- “train missed / next train” metaphor used carefully;
- roadmap/path illustrations;
- desk / late-night study scenes;
- systems diagrams;
- “future you” visual notes.

Avoid associating dark mode exclusively with cybersecurity.

Dark-theme illustrations must use lighter clothing/accent separation where needed so silhouettes remain visible.

Required homepage assets are the original three-person Bangladeshi computing team (a Chakma woman using a QA checklist tablet between two teammates at laptops) and the original AI study partner checking a result. All three people are peers with visible technical participation; avoid stereotyped roles and keep everyone visible without interaction. The study-partners scene uses an intentional soft blue-gray editorial backdrop with a theme-aware border, while the robot retains its transparent background. Do not ship a simulated transparency checkerboard. Keep source PNGs under `src/assets/illustrations/`; generate responsive WebP through Astro's image pipeline. Reserve intrinsic image dimensions, load the hero eagerly, and lazy-load the supporting robot. Generation provenance, cultural-reference limitations and prompts are recorded in `docs/illustrations.md`.

Breadcrumbs must use the same content container as the page heading, aligned text baselines, and zero inherited prose-list margins. Long labels wrap within the available width. The persistent sidebar must remain visible on wide screens, including after resizing from the mobile drawer; page content begins after the sidebar and never sits beneath it. Never hide a closed disclosure's summary and its only route to navigation.

---

## 25. Mobile UX

Design mobile-first.

Requirements:

- no hover-only actions;
- minimum comfortable tap targets;
- no roadmap that requires pinch-zoom;
- no comparison table that becomes unusable;
- accessible menu;
- persistent labeled sidebar only where content width remains comfortable;
- grouped mobile/tablet drawer with every destination reachable by scrolling;
- language and theme controls reachable;
- “I’m Lost” easy to find;
- headings should not consume the whole viewport;
- card content must remain concise;
- external resource links clearly identified.

Progressive disclosure can be used, but do not hide all important content behind accordions.

---

## 26. Accessibility

Target WCAG 2.2 AA.

Must include:

- semantic HTML;
- keyboard navigation;
- visible focus;
- adequate contrast in both themes;
- accessible labels;
- reduced-motion respect;
- meaningful alt text;
- skip navigation;
- logical heading hierarchy;
- no color-only meaning;
- accessible language switching;
- `lang="en"` / `lang="bn"` as appropriate;
- correct link purpose;
- readable Bangla typography.

No important interaction may require hover.

---

## 27. Motion

Motion should be restrained and purposeful.

Good:

- small reveal transitions;
- career-path connections;
- subtle progression on timeline;
- gentle theme transition;
- focus/hover feedback.

Avoid:

- autoplay hero animation;
- continuous floating cards;
- excessive parallax;
- animations that delay reading;
- motion used only to look “modern.”

Honor `prefers-reduced-motion`.

---

## 28. Content Model

Content should be data-driven wherever practical.

Suggested entities:

- CareerFamily
- Career
- Skill
- Roadmap
- RoadmapStage
- LearningResource
- CareerExperiment
- MentorNote
- RealityCheck
- Scenario
- ComparisonDimension
- AITaskExposure
- StudentSituation
- NavigationPath

Every item should have a stable ID/slug and bilingual content.

---

## 29. Search and Discovery

A lightweight bilingual static search is available as a secondary quick-find
tool inside the shared breadcrumb context bar. It uses a typed build-time index
and filters inside the browser without a backend, account, saved history or
analytics event containing the query. Desktop shows the field and submit button
directly; mobile/tablet opens the same controls from the bar's search icon. The
result panel keeps the visitor on the current page and links to normal internal
destinations. No standalone search route is generated.

Search may cover:

- careers;
- skills;
- roadmaps;
- experiments;
- guidance.

Search should not become the primary navigation. The mentor paths remain primary.

Search-result UI is transient and therefore has no canonical URL or sitemap
entry. Its linked destination pages remain crawlable and indexable. When
JavaScript is unavailable, omit the inactive search control while preserving
all essential mentor paths and navigation links.

---

## 30. Analytics Experience

Use Google Analytics 4 for privacy-conscious aggregate product analytics.

Track product behavior such as:

- page view;
- language switch;
- theme switch;
- starting-point selection;
- career-family exploration;
- career view;
- career comparison;
- roadmap view;
- experiment start;
- AI-guidance view;
- “I’m Lost” usage;
- outbound learning-resource click;
- next-step click.

Do **not** send:

- names;
- emails;
- free-text student input;
- unique student IDs;
- sensitive personal information.

GA4 demographic reporting such as approximate geography and eligible aggregate age/gender data may be used only according to Google’s current requirements, consent/privacy configuration, and applicable law. Treat age/gender as incomplete aggregate signals, not ground truth.

Provide a clear privacy/analytics notice.

Production GitHub Pages builds use GA4 measurement ID `G-6GR5VBYXEQ`; local and test builds keep analytics disabled unless explicitly configured. A feedback-form click may use the existing bounded `next_step_clicked` event with destination `feedback-form`. Never send the form response, free text, email or contact preference to GA4. The external Google Form is voluntary, opens in a new tab and is governed by the provider's privacy handling only after the visitor chooses to use it.

---

## 31. SEO and Shareability

The static site should be highly indexable.

Requirements:

- use `CSE-Pothik` consistently in site metadata and social identity;
- default home title direction: `CSE-Pothik — Find Your Direction in CSE`;
- career-page title direction: `<Career> Roadmap & Career Guide | CSE-Pothik`;
- unique page titles;
- meta descriptions;
- canonical URLs;
- Open Graph metadata;
- sitemap;
- robots.txt;
- structured internal linking;
- localized metadata;
- hreflang where appropriate;
- meaningful route slugs;
- no client-only rendering for essential content.

Career, experiment, roadmap, goal and resource indexes use `CollectionPage`
with a nested `ItemList`, plus `BreadcrumbList`, where those entities accurately
describe the visible page. Internal search is `noindex, follow` and omitted from
the sitemap. Open Graph includes localized alternate locale metadata; the social
image has accessible alt metadata for both Open Graph and X cards. A shared root
URL previews the purpose-first homepage—not About or Search—with the free-guidance
promise, career exploration, small experiments, durable foundations and AI-era
preparation. Declare the original PNG card’s type and 1730 × 909 dimensions.

Career and roadmap pages should be shareable directly.

---

## 32. Performance

Performance is part of the UX.

Targets:

- mostly static HTML;
- hydrate React only for truly interactive islands;
- responsive optimized images;
- avoid large JS bundles;
- lazy-load non-critical media;
- no unnecessary analytics/tag-manager weight;
- avoid layout shift;
- fast first render on ordinary mobile networks.

Aim for excellent Lighthouse scores while prioritizing real usability.

---

## 33. Error / Empty / Broken-Link States

Even static sites need graceful states.

Examples:

- search with no results;
- missing translation fallback;
- missing resource link;
- unknown career slug;
- unsupported comparison pair.

Use mentor-like language without jokes when the user is blocked.

---

## 34. Content Quality Rules

Every content contribution must pass these questions:

- Is it accurate?
- Is it stage-appropriate?
- Is it concise?
- Does it explain why it matters?
- Does it tell the student what to do next?
- Does it avoid overpromising?
- Does it avoid unnecessary teaching detail?
- Is the Bangla natural?
- Is humor helpful rather than distracting?
- Are external learning resources still valid?
- Is AI guidance framed around tasks and capabilities rather than fear?

---

## 35. Originality

The product may borrow **interaction principles and inspiration**, but must not copy layouts, copywriting, visual systems, illustrations, roadmaps, or proprietary content from other sites.

The original identity should come from:

- orientation-program storytelling;
- veteran mentor voice;
- practical career experiments;
- “what not to learn yet” guidance;
- AI-resilience framing;
- “I’m Lost” navigation;
- bilingual humanized Bangla;
- intelligent humor and suspense;
- light/dark academic engineering themes.

---

## 36. Conceptual Inspiration and Provenance

This site is inspired in part by:

1. **roadmap.sh** — https://roadmap.sh/  
   Inspiration: clear role/skill roadmaps, structured learning navigation, and helping developers choose what to learn.

2. **Architect Prep** — https://mayurjp.github.io/architect-prep/  
   Inspiration: compact topic-oriented navigation and focused technical preparation/review.

3. **Amirul Islam** — https://amirulislamalmamun.com/
   Inspiration: staged, build-centred engineering roadmaps that connect technical depth with practical evidence.

The site must remain visually and editorially original and must not reproduce their content.

**Project provenance:** [Amjad Hossain](https://amjadhossainrahat.github.io/) contributed the idea and is the creator, AI Agent Orchestrator, reviewer and quality controller. His name links in a new tab to his intended GitHub Pages portfolio; keep that canonical portfolio URL even while the separate portfolio site is not yet published. ChatGPT assisted with idea polishing plus requirement/design analysis and finalization. Codex using **GPT-5.6 Sol (High)** and **GPT-6 Astra (High)** handled implementation and iteration, including testing and bug fixing, under Amjad's review. Preserve human agency and distinguish these roles; do not imply affiliation or endorsement by the inspiration projects or AI providers.

Make this acknowledgment discoverable, not hidden behind an ambiguous label: every localized page has a compact footer section with direct roadmap.sh, Architect Prep and Amirul Islam links, the three contribution roles, and a “Full credits” link to localized About `#credits`. About includes a direct jump link, contextual inspiration explanations and fuller collaboration history. Keep student navigation ahead of credits in the footer and do not add another homepage content section or a primary-navigation item solely for attribution. All credit copy must have English/Bangla parity and remain readable in both themes without JavaScript.

The 1–2 September 2026 fresher UX assessment and implemented follow-up are
recorded in `docs/ux-review.md`. The repository review and automated/visual checks
are not a substitute for moderated research with real students.

---

## 36A. Goal-based preparation and expanded career coverage

Career roadmaps explain **what to learn**; goal guides explain **where and how to apply those skills**. Keep the layers connected without generating repetitive career × goal pages or duplicating the role syllabus.

Publish seven complete English/Bangla guides at `/goals/` and `/bn/goals/`:

1. Global companies and advanced engineering: distinguish software/product, embedded/robotics/physical systems, and research. Include scoped official references for Google, Meta, Microsoft, Amazon, Tesla, NASA and SpaceX. NASA is a government agency, not a company. Check role-specific eligibility and work authorization; never imply a universal hiring formula.
2. Bangladesh industry: product/startups, services/export, banks/fintech, telecom/enterprise IT, government and public-interest/NGO technology. Categories are not prestige rankings. Explain relevant project evidence and questions about mentorship and working conditions.
3. Remote employment: role competence, async writing, reviews, handoffs, location/time-zone eligibility and sustainable delivery. Distinguish employment/long-term contracting from finding freelance clients.
4. Study abroad: taught master's, research master's and PhD branches; prerequisites, fit, references, statements, program-specific tests, funding/costs and official deadlines. Admission, funding and visa decisions are separate and never guaranteed.
5. Thesis, research and publication: literature, a bounded question, ethics, baseline, fair evaluation, reproducibility, writing, defense, venue selection and review. Respect computing conferences as well as journals. No guaranteed “world-class journal,” invented results, purchased authorship or paper-count obsession.
6. Freelancing: narrow service, honest portfolio, discovery, proposals, scope, milestones, safeguards, delivery, support and repeat trust. No income promises or platform dependency.
7. Tech business: service/agency versus product, customer discovery, a small pilot, distribution, cost assumptions, support, security and evidence-led continuation or stopping. No investment advice or revenue guarantees.

Each guide has a visible reality/eligibility note, meaningful branches, starting-point anchors, four preparation stages, enough-for-now evidence, what not to do yet, specific source references, pitfalls, responsible AI use, one feasible action this week, and related career/goal links. Timelines are not guarantees. The “this week” action is encouragement, not a tracked assignment. General process guidance must not masquerade as jurisdiction-specific legal advice.

UX placement: goal preparation is one of the three primary homepage starting intentions; By career/By goal entries on Roadmaps; a grouped seven-choice goal hub; contextual links on career/roadmap pages; a goal option in “I’m Lost”; a footer link. Keep the global header uncluttered and AI Reality immediately after the hero. Desktop detail pages use a readable article with a sticky section index; mobile uses a native “On this page” disclosure. Do not hide essential guidance in accordions or require JavaScript to read it.

Career coverage is now seventeen careers across the original eight families. Mobile App Development belongs to Build Software and covers Android, Apple and cross-platform choices, state, lifecycle, local persistence, offline behavior, accessibility and release responsibility. Students choose one stack based on tooling access and purpose, not four at once. Setup time is explicit in its experiment.

UX/UI Engineering belongs to Technology + People and bridges user research, interaction design and accessible implementation. Explain UX/product design versus UI engineering versus broader frontend engineering; a purely design-focused role is a valid alternative. Include consent-based observation, keyboard and responsive testing, design-system states and honest case studies. Never fabricate research participants or treat attractive screens as validated UX. Both new careers require full comparison, roadmap, experiment, AI and resource coverage.

Sources have provider, scope and review date. Publicly readable guidance does not imply applications, tests, publication or tools are free. Keep core learning material free, name optional costs honestly, and distinguish the site's editorial plan from an organization's official requirements.

## 37. Design Definition of Done

The design is considered correctly implemented when:

- the product is consistently branded as **CSE-Pothik**;
- the Pothik/path metaphor supports the experience without becoming gimmicky;
- the homepage feels like a CSE orientation experience;
- the user can understand the site without signing in;
- a confused student can reach useful guidance within a few interactions;
- career pages explain real work, pros/cons, learning direction, AI impact and a practical experiment;
- roadmaps include “what not to learn yet”;
- learning resources are curated, minimal and contextual;
- competitive programming is framed as a reasoning tool, not the whole career;
- software-engineering foundations are represented without turning into tutorials;
- English and natural Bangla are both first-class;
- light mode is the default;
- dark mode has clear contrast and no illustration/background merging;
- mobile UX is fully usable;
- desktop content uses the available frame purposefully: readable text measures are intentional, top-level sections align, every non-homepage hero pairs its title with supporting copy/actions/context across two columns, and hidden panels do not leave empty columns;
- the shared canvas keeps compact gutters beside the sidebar at common desktop widths and expands grids/section compositions without stretching prose into unreadably long lines; Search, language and theme form one right-aligned top-bar group;
- accessibility is WCAG 2.2 AA-oriented;
- humor, motivation and suspense feel intentional but never gimmicky;
- the site continually provides meaningful next navigation;
- no login, backend, database or progress tracking has been introduced;
- the visual result does not look like a generic AI SaaS template.

## Identity and project-readiness revision

Use the purpose-first orientation copy in §10.1, beginning “Free career guidance for CSE students.” The previous “salary reel” expression is retired. The identity is an open circular C with a directional needle and a matching CSE-Pothik wordmark—not a text-heavy badge or mascot. Header/footer SVG and favicon share the geometry; the social preview uses the matching navy/off-white editorial palette. Preserve theme contrast, small-size legibility and the original study-partners/AI illustration style.

English is default and Bangla is the only additional language. No third-language edition, font or translation-fallback experience is included.

The seventeen-career landscape includes Network Engineering in Run Systems, Hardware Engineering in Work Close to Hardware, and Software QA & Testing in Build Software. Explain actual work, role variants, drawbacks and safety boundaries. Networking covers packet paths, routing/switching, troubleshooting and controlled changes; hardware covers electronics, logic, schematics and verification, distinct from embedded firmware or repair; QA covers requirements, risk, exploratory/manual work, reproducible defects and useful automation. Keep all three in discovery, comparison, roadmaps, experiments, AI guidance and relevant goal links. Starter experiments require no paid certificates or physical hardware.

Data Analytics & BI belongs to Work With Data and centres metric definitions, validation, reproducible analysis and decision communication rather than pipeline ownership. AI Engineering belongs to Build Intelligence and centres retrieval/generation boundaries, evaluation, privacy, cost, monitoring and rollback rather than treating an API demo as a product. Application Security belongs to Protect Systems and centres threat modelling, secure design, authorized evidence, remediation and regression checks rather than broad SOC or infrastructure operations. Give all three complete bilingual career, comparison, roadmap, experiment, AI and goal coverage with role-specific professional evidence. Paid model access and public-target testing are never prerequisites.

Final-year project preparation is a cross-career guide, not an eighth career goal or a new large homepage section. Link it from Roadmaps, individual roadmap next steps, engineering foundations, goal guides and footer. Use seven stages: define → specify → design → build → verify → release → defend. Each stage explains why, practical actions, enough-for-now evidence, what not to do yet and a scoped reference. Start-at-your-stage links, a desktop section index, mobile native disclosure and project-type disclosures reduce reading effort while keeping content available without JavaScript.

Include a worked requirement-to-acceptance-to-design-to-test-to-release example; adapt evidence for software/mobile, research/ML, hardware/embedded and network/security projects. Supply downloadable English/Bangla Markdown evidence templates for the brief, traceability, decisions, actual test results, reproducibility, contribution/attribution and handover. This is guidance, not a score or completion tracker. Department rubrics, supervisor decisions and ethics/safety requirements take priority. No fake evidence, certification, guaranteed publication or claim that every student prototype is production-ready. Encourage small explainable work and honest limitations.

### Practical team-workflow refinement — September 2026

The final-year guide must teach how to work, not merely list quality attributes. Preserve all seven delivery stages and add seven focused playbooks: team agreement/milestones, task breakdown/board, repository setup, Git collaboration, sync-ups, testing and CI/release. Start with task-oriented entry links; show each playbook's purpose and timing before a native disclosure reveals steps and a worked example. Keep a compact section index, usable mobile anchors and readable wrapped code. All essential content and templates must work without JavaScript. Do not add this long content to the homepage.

Use one connected equipment-booking example: outcome → milestone → vertical slice → issue #42 → AC-01 → ADR-01 → reviewed PR → TEST-01 → release evidence. Explain Ready versus Done, realistic estimates, bounded research spikes, dependencies, WIP, blockers and verified acceptance. Recommend one shared board without requiring a specific commercial subscription. Git guidance starts before feature work, distinguishes Git from repository hosting and lightweight GitHub flow from heavier Gitflow, and covers reviews, conflicts, safe recovery, secret/data protection and tagged releases.

Give practical async updates, a 15-minute blocker/decision agenda, weekly demos and short retrospectives; require written actions with owners/dates and inclusion of absent teammates. Treat schedules as adjustable student-sized examples, not institutional rules. Testing covers risk, unit/integration/E2E/manual layers, fixtures/isolation, accessibility, authorized security checks, measured performance, reproducible defects, regression and honest run records. Adapt to research, hardware and network projects; coverage and a green CI run do not certify quality.

Preview and download ten useful authoring templates: brief/risk register, team agreement, issue, PR, sync note, decision/traceability, test plan/run report, bug report, release/reproduction/handover and contribution/AI disclosure. Page and download fields must agree in English and Bangla. The toolkit stores nothing on the site and is not a completion tracker.

## AI systems path and terminology placement

Do not create a second top-level AI buzzword directory. Place the build-oriented guidance inside the existing AI Engineering roadmap and expose it from `/ai/`, static search and equivalent Bangla routes. The visual sequence is six evidence-producing steps: frame the work and a deterministic baseline; make one prompt/model call testable; ground answers with retrieval and citations; orchestrate known steps as a visible workflow; add one bounded agent loop only when ambiguity requires model-selected action; then earn production trust through evaluation, permissions, guardrails, observability, staged release and rollback.

Treat the requested terms at their real abstraction levels. Prompt Engineering is an interface discipline, RAG is a retrieval-plus-generation system, AI Workflow is orchestration, and an agent loop is a bounded control loop with stop/retry/escalation conditions. n8n is an optional workflow implementation; OpenClaw is an optional persistent agent runtime whose tools, credentials, channels, workspace and host access form a security boundary. Multi-agent coordination is later complexity. AGI is a capability/research horizon, not an implementation layer or required milestone. “Forward Engineering” is used in its plain, explicit sense—need and constraints toward design, implementation, tests and evidence—without presenting it as a standardized AI product category.

The path must remain static, bilingual, keyboard/no-JavaScript accessible and responsive as three, two and one columns. Official source cards open in a securely announced new tab; internal hub, roadmap and same-page links stay in the current tab. Search must reach the anchored section directly. “I’m Lost” must offer the ordered local-industry watchlist as grounded perspective, not as an endorsement or guaranteed prescription. On the complete Resources view, the English watchlist heading should use one line when the desktop content frame has room and wrap naturally below that breakpoint.

Supporting AI action panels are not page heroes. “A path for builders” and “First project” must use restrained responsive `h2` typography, short readable measures and two balanced desktop columns: label/title on the left, explanation plus CTA on the right. They collapse to a single ordered column on smaller screens. Shared callout headings must never grow to page-title scale or force a short phrase into an awkward tall column.

Label the curated media section **Bangladesh tech leaders & practitioners** in English and an equivalent localized phrase in Bangla. Do not label the complete group “pioneers” unless every included person's historical pioneer status is separately sourced; the section remains a set of useful perspectives, not an authority ranking or endorsement.
