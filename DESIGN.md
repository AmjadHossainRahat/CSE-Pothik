# CSE Compass — DESIGN.md

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

**CSE Compass**

The product name must be written consistently as `CSE Compass`. Do not shorten the public brand to `Compass` where the CSE context would become unclear.

### 0.2 Primary tagline

> **Find your direction in CSE.**

### 0.3 Supporting positioning line

> **A practical career compass for CSE students in the AI era.**

The tagline is the short brand expression. The supporting positioning line may be used in metadata, about/introductory copy, social cards, or contexts where the product needs more explanation.

### 0.4 Brand metaphor

The compass metaphor is useful because the product helps students:

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

Do not force compass metaphors into every heading, button, paragraph, or feature name. The site should still sound like a human mentor rather than a themed navigation app.

### 0.5 Logo / mark direction

The identity may use a simple, original compass-inspired mark, but it should not resemble a travel app, map service, or nautical brand.

Preferred characteristics:

- simple geometric compass needle or directional mark;
- subtle connection to computing through grid, node, bracket, or path geometry if it remains clean;
- recognizable at favicon size;
- works in one color;
- works in both light and dark themes;
- avoids generic graduation caps, circuit-brain icons, robot heads, or over-detailed compass illustrations.

The wordmark should prioritize `CSE Compass` as the recognizable brand.

### 0.6 Brand localization

Keep the brand name **CSE Compass** in English on both English and Bangla pages.

Do not translate the product name into Bangla. Surrounding copy should be naturally localized.

Example Bangla positioning direction:

> **CSE-তে কোন দিকে এগোবে—সেটা বুঝতে সাহায্য করার practical mentor.**

This is tone guidance, not a mandatory fixed tagline.

---

## 1. Product Vision

CSE Compass is a practical mentor and navigation website for Computer Science and Engineering students—especially freshers who enter CSE without a clear understanding of possible careers, what those careers actually involve, what they should learn, or how AI is changing the path ahead.

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

> **A practical career compass for the AI era.**

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

Recommended global navigation:

- **Explore Careers**
- **Compare**
- **Try a Career**
- **Roadmaps**
- **AI & Your Career**
- **I’m Lost**
- Language switch: **EN | বাংলা**
- Theme switch: **Light | Dark**

On smaller screens, use an accessible menu, but keep **I’m Lost** easy to reach.

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

The required display order is: header → hero with orientation map → **AI Reality** → starting-point navigator → concise misconceptions and veteran voices → career landscape → experiment previews → useful loop → encouraging next step → footer. The topic numbers below identify requirements, not display order. AI Reality must be the first section after the hero; do not place the career grid ahead of it.

The homepage introduces the product; it is not the entire directory. Show three representative experiments and a clear link to all published experiments (currently eleven), keep every career family discoverable, and avoid repeating the same careers in a second featured-card section. Show two veteran perspectives initially and make three more available through a keyboard-accessible native disclosure. The complete career, roadmap and experiment pages remain unchanged in depth.

Motivation must accompany action: welcome students who are confused or restarting, use a short future-self note, explain that a direction is a draft rather than a verdict, and end with one achievable 20-minute next step. Do not substitute slogans or false guarantees for practical guidance.

### 10.1 Hero — “You got into CSE. Now what?”

The header/brand area should clearly identify **CSE Compass**, while the hero headline remains student-problem-first rather than repeating the product name as the main headline.

Core direction:

# You got into CSE. Now what?

You do not need a 10-year career plan today.  
But you should not spend the next three years without understanding where CSE can take you.

Primary CTA:

**Find My Starting Point**

Secondary CTA:

**Explore CSE Careers**

The hero should feel open, calm and editorial—not like a dashboard.

Use the original hoodie-and-laptop mentor/student illustration, not stock photography. It should retain a clear silhouette in both themes. The future-self caption is an editorial encouragement, not an endorsement by a real professional.

“Today’s orientation map” is four working links with a number, grouped title and caption, and directional arrow. The caption must sit beneath its own title, never in the narrow number column. Use one column on small phones, two on tablets, and four when space permits.

### 10.2 Before You Choose Anything

Correct common misconceptions:

- CSE is not one career.
- Programming is not a career.
- A framework is not a career plan.
- You do not need to choose your lifelong profession today.
- Learning randomly is not the same as exploring deliberately.

This section should be concise. Three carefully combined statements may cover these five ideas; pair them with the veteran voices rather than adding another long standalone section.

### 10.3 Veteran Orientation Voices

Use short, practical remarks from multiple professional perspectives.

Examples:

**Software Engineer**

> Do not spend four years collecting frameworks. Learn how software actually works.

**Cybersecurity Professional**

> Start with networking, Linux and systems before chasing security tools.

**ML/AI Engineer**

> Calling an AI API and understanding machine learning are different skills.

**DevOps/SRE Engineer**

> Some people love building features. Others enjoy understanding why the entire system failed.

**Research / Systems**

> If you enjoy asking why something works—not only how to use it—look deeper.

These are **orientation remarks, not testimonials**. Do not invent named professionals, employers, biographies, or endorsements.

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

CTA:

**Understand AI & My Career**

Never state fake “27% replacement risk” type numbers.

Place this section immediately after the hero. Balance the warning with agency: “AI is changing fast. You can grow with it.” Use the original small AI study-partner illustration checking a result. It supports the lesson about verification; it is not the CSE Compass brand mascot.

Use **Task Automation Exposure**, not **Replacement Probability**.

### 10.6 “Where Are You Right Now?”

This is the homepage’s primary navigation engine.

Cards/options:

- I just started CSE.
- I have no idea which career suits me.
- I know some programming but have no direction.
- I’m worried AI will replace my future job.
- I already have a target career.
- I’m close to graduation and feel behind.

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

The homepage previews Backend, Cybersecurity and ML; the dedicated experiment index exposes all eleven complete experiments, including Mobile App Development and UX/UI Engineering. Not enjoying an experiment is useful evidence, not failure.

CTA:

**Try a Career**

### 10.8 Journey Explanation

Show:

**Understand → Explore → Compare → Try → Prepare → Adapt**

Use a clean editorial timeline or branching path.

Each of the six steps is a real navigation link with a grouped label and explanation. Stack on phones, then use two, three or six columns according to available width. Explicitly reset list-item margins so global prose styles cannot stagger the steps. Do not add completion checkboxes or progress state.

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

- readable code;
- naming;
- cohesion and coupling;
- code smells;
- refactoring;
- SOLID;
- design principles;
- common design patterns;
- testing and testability;
- dependency direction;
- clean architecture / architectural boundaries at the appropriate stage.

Teach the **reason to learn**, **when to learn**, **how deep to go**, and **where to learn**.

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

---

## 18. AI Resilience Model

AI guidance is a first-class product pillar.

Do not tell students:

> AI will never replace programmers.

Instead:

> AI is changing what programmers are paid to do. Learn which tasks are becoming cheap and which abilities become more valuable.

### 18.1 Career pages should discuss tasks, not jobs as indivisible units

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

> এখনও প্রথম API-টাই deploy করোনি। Kubernetes একটু অপেক্ষা করতেই পারে।

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

The visual identity should reinforce **CSE Compass** through subtle directional/path motifs rather than literal compass imagery everywhere.

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

Use the dark half of `themes-sample.png` as the mood reference: midnight background `#061522`, blue-navy surface `#0b2030`, raised surface `#10293d`, off-white text `#f3f7fc`, and visible border `#30495e`. Preserve the actual CSE Compass name and original artwork; the sample is a visual reference, not an asset to reproduce verbatim.

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

Required homepage assets are the original young South Asian hoodie-and-laptop mentor and the original AI study partner checking a result. Keep transparent source PNGs under `src/assets/illustrations/`; generate responsive WebP through Astro's image pipeline. Reserve intrinsic image dimensions, load the hero eagerly, and lazy-load the supporting robot. Generation provenance and prompts are recorded in `docs/illustrations.md`.

Breadcrumbs must use the same content container as the page heading, aligned text baselines, and zero inherited prose-list margins. Long labels wrap within the available width. Primary navigation must remain visible on desktop, including after resizing from the mobile menu; never hide a closed disclosure's summary and its only route to navigation.

---

## 25. Mobile UX

Design mobile-first.

Requirements:

- no hover-only actions;
- minimum comfortable tap targets;
- no roadmap that requires pinch-zoom;
- no comparison table that becomes unusable;
- accessible menu;
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

A lightweight static search is acceptable and useful when the content grows.

Search may cover:

- careers;
- skills;
- roadmaps;
- experiments;
- guidance.

Search should not become the primary navigation. The mentor paths remain primary.

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

---

## 31. SEO and Shareability

The static site should be highly indexable.

Requirements:

- use `CSE Compass` consistently in site metadata and social identity;
- default home title direction: `CSE Compass — Find Your Direction in CSE`;
- career-page title direction: `<Career> Roadmap & Career Guide | CSE Compass`;
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

The site must remain visually and editorially original and must not reproduce their content.

**Project provenance:** Full-site requirement engineering and product/design planning were done with ChatGPT; development was done by Codex.

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

UX placement: one compact goal entry inside the homepage starting-point section; By career/By goal entries on Roadmaps; a grouped seven-choice goal hub; contextual links on career/roadmap pages; a goal option in “I’m Lost”; a footer link. Keep the global header uncluttered and AI Reality immediately after the hero. Desktop detail pages use a readable article with a sticky section index; mobile uses a native “On this page” disclosure. Do not hide essential guidance in accordions or require JavaScript to read it.

Career coverage is now eleven careers across the original eight families. Mobile App Development belongs to Build Software and covers Android, Apple and cross-platform choices, state, lifecycle, local persistence, offline behavior, accessibility and release responsibility. Students choose one stack based on tooling access and purpose, not four at once. Setup time is explicit in its experiment.

UX/UI Engineering belongs to Technology + People and bridges user research, interaction design and accessible implementation. Explain UX/product design versus UI engineering versus broader frontend engineering; a purely design-focused role is a valid alternative. Include consent-based observation, keyboard and responsive testing, design-system states and honest case studies. Never fabricate research participants or treat attractive screens as validated UX. Both new careers require full comparison, roadmap, experiment, AI and resource coverage.

Sources have provider, scope and review date. Publicly readable guidance does not imply applications, tests, publication or tools are free. Keep core learning material free, name optional costs honestly, and distinguish the site's editorial plan from an organization's official requirements.

## 37. Design Definition of Done

The design is considered correctly implemented when:

- the product is consistently branded as **CSE Compass**;
- the compass/direction metaphor supports the experience without becoming gimmicky;
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
- accessibility is WCAG 2.2 AA-oriented;
- humor, motivation and suspense feel intentional but never gimmicky;
- the site continually provides meaningful next navigation;
- no login, backend, database or progress tracking has been introduced;
- the visual result does not look like a generic AI SaaS template.
