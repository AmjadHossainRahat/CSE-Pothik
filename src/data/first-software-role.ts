import { l } from "@/lib/localized";
import type { FirstRoleGuide } from "@/types/content";

export const firstSoftwareRoleGuide: FirstRoleGuide = {
  title: l(
    "From final semester to your first software role",
    "Final semester থেকে প্রথম software role",
  ),
  summary: l(
    "Turn an existing project and academic foundation into credible evidence, focused interview practice and a repeatable internship or junior-job search.",
    "Existing project আর academic foundation-কে credible evidence, focused interview practice এবং repeatable internship বা junior-job search-এ বদলাও।",
  ),
  reality: l(
    "You may already have more material than you think: a degree in progress, a project you understand and evidence that you can learn. The missing layer is often translation—choosing a role, strengthening one real piece of work, explaining it clearly and learning from the hiring response. This guide is a practical bridge, not a promise of an interview or offer.",
    "তোমার কাছে হয়তো ভাবনার চেয়েও বেশি material আছে: চলমান degree, নিজের বোঝা একটি project এবং শেখার evidence। Gap-টি অনেক সময় translation-এর—একটি role বাছা, সত্যিকারের একটি কাজ শক্ত করা, পরিষ্কারভাবে explain করা এবং hiring response থেকে শেখা। এই guide practical bridge; interview বা offer-এর promise নয়।",
  ),
  starts: [
    {
      id: "project",
      title: l(
        "My project works, but the repository is messy.",
        "Project কাজ করে, কিন্তু repository গোছানো নয়।",
      ),
      note: l(
        "Strengthen the work you already understand before starting another large project.",
        "আরেকটি বড় project শুরুর আগে যে কাজ বোঝো, সেটিই শক্ত করো।",
      ),
      destination: "stage-strengthen",
    },
    {
      id: "presentation",
      title: l(
        "My project is ready, but my CV or portfolio is weak.",
        "Project ready, কিন্তু CV বা portfolio দুর্বল।",
      ),
      note: l(
        "Make the evidence understandable in two minutes without exaggerating it.",
        "বাড়িয়ে না বলে evidence-টি দুই মিনিটে বোঝার মতো করো।",
      ),
      destination: "stage-present",
    },
    {
      id: "interview",
      title: l(
        "I need junior interview preparation.",
        "Junior interview-এর preparation দরকার।",
      ),
      note: l(
        "Build a bounded role-specific baseline; advanced contest programming is not the universal entry ticket.",
        "Role-specific bounded baseline বানাও; advanced contest programming সবার entry ticket নয়।",
      ),
      destination: "stage-practice",
    },
    {
      id: "applications",
      title: l(
        "I am ready to apply, but the process feels random.",
        "Apply করতে ready, কিন্তু process random লাগছে।",
      ),
      note: l(
        "Use a small targeted batch, an honest application log and written opportunity checks.",
        "ছোট targeted batch, honest application log আর written opportunity check ব্যবহার করো।",
      ),
      destination: "stage-apply",
    },
    {
      id: "feedback",
      title: l(
        "I apply or interview, but I am not progressing.",
        "Apply বা interview করছি, কিন্তু এগোচ্ছি না।",
      ),
      note: l(
        "Use the stage where the process stops as a signal—not a verdict on your future.",
        "Process যেখানে থামে সেটিকে signal ধরো—future-এর verdict নয়।",
      ),
      destination: "feedback-loop",
    },
  ],
  stages: [
    {
      id: "target",
      title: l(
        "Target one role for this cycle",
        "এই cycle-এর জন্য একটি role target করো",
      ),
      why: l(
        "“Software developer” is too broad to decide what evidence or interview practice matters next. A provisional target reduces noise without locking your career forever.",
        "‘Software developer’ এত broad যে পরের evidence বা interview practice ঠিক করা কঠিন। Provisional target noise কমায়; career চিরদিনের জন্য lock করে না।",
      ),
      tasks: [
        l(
          "Read five to ten current internship, trainee or junior postings from official employer pages. Record repeated tasks, foundations, stack, degree/experience conditions and application channel; check the closing date.",
          "Official employer page থেকে পাঁচ থেকে দশটি current internship, trainee বা junior posting পড়ো। Repeated task, foundation, stack, degree/experience condition, application channel আর closing date লেখো।",
        ),
        l(
          "Choose one primary role—such as frontend, backend, mobile or software QA—and one adjacent backup. Use the career pages to compare actual work, not prestige or salary rumors.",
          "Frontend, backend, mobile বা software QA-এর মতো একটি primary role এবং একটি adjacent backup বাছো। Prestige বা salary rumor নয়, career page দিয়ে actual কাজ compare করো।",
        ),
        l(
          "Write a one-sentence target: role, employer category, evidence you already have and the two most repeated gaps you will address.",
          "এক বাক্যে target লেখো: role, employer category, এখনকার evidence এবং সবচেয়ে repeated দুটি gap যেগুলো ঠিক করবে।",
        ),
      ],
      evidence: l(
        "You can name the work you are targeting, show the postings behind the decision and explain which two gaps matter first.",
        "Target কাজটির নাম, decision-এর পেছনের posting এবং প্রথমে কোন দুটি gap গুরুত্বপূর্ণ—সব পরিষ্কারভাবে বলতে পারো।",
      ),
      notYet: l(
        "Do not learn every technology mentioned across every posting or choose a role only because its title sounds impressive.",
        "সব posting-এ লেখা প্রতিটি technology শেখা বা শুধু impressive title দেখে role বাছা এখনই নয়।",
      ),
      sourceId: "basis-industry-catalog",
    },
    {
      id: "strengthen",
      title: l(
        "Strengthen one project you already understand",
        "নিজের বোঝা একটি project শক্ত করো",
      ),
      why: l(
        "A completed academic project can become hiring evidence when another person can understand, run and question it. You do not need to pretend it was built with practices you did not use.",
        "অন্য কেউ project বুঝতে, run করতে আর প্রশ্ন করতে পারলে completed academic project hiring evidence হতে পারে। আগে ব্যবহার করোনি এমন practice ছিল—এমন ভান দরকার নেই।",
      ),
      tasks: [
        l(
          "Audit one core user journey: setup, validation, failure handling, tests, security/privacy/accessibility where relevant, deployment or a reproducible demo, and known limitations.",
          "একটি core user journey audit করো: setup, validation, failure handling, test, relevant security/privacy/accessibility, deployment বা reproducible demo এবং known limitation।",
        ),
        l(
          "Make one genuine version 1.1 improvement now: open an issue, use a short branch, add or update a test, open a pull request, request feedback, address it, merge and tag a small release. If solo, ask a peer to review; do not fabricate historical teamwork.",
          "এখন সত্যিকারের একটি version 1.1 improvement করো: issue খোলো, ছোট branch নাও, test add/update করো, pull request খোলো, feedback নাও, ঠিক করে merge আর ছোট release tag দাও। একা করলে peer review চাও; পুরোনো teamwork বানিয়ে দেখিও না।",
        ),
        l(
          "Give the README to someone unfamiliar with the project. Observe where setup or purpose becomes unclear, then fix the document or automation.",
          "Project চেনে না এমন কাউকে README দিয়ে run করতে দাও। Setup বা purpose কোথায় অস্পষ্ট হয় দেখে document বা automation ঠিক করো।",
        ),
      ],
      evidence: l(
        "A reviewer can understand the problem, run or view the project, inspect one tested change and see honest limitations and contribution history.",
        "Reviewer problem বুঝতে, project run বা দেখতে, একটি tested change inspect করতে এবং honest limitation ও contribution history দেখতে পারেন।",
      ),
      notYet: l(
        "Do not rewrite the whole project, erase honest history or start a second giant project merely to add another framework name.",
        "পুরো project rewrite, honest history মুছে ফেলা বা আরেকটি framework-এর নাম যোগ করতে দ্বিতীয় giant project এখনই নয়।",
      ),
      sourceId: "github-readmes",
    },
    {
      id: "present",
      title: l(
        "Make the evidence easy to review",
        "Evidence review করা সহজ করো",
      ),
      why: l(
        "Good work can be missed when a reviewer cannot quickly find the problem, your contribution, a working result and the engineering decisions behind it.",
        "Reviewer যদি problem, তোমার contribution, working result আর engineering decision দ্রুত খুঁজে না পান, ভালো কাজও চোখ এড়িয়ে যেতে পারে।",
      ),
      tasks: [
        l(
          "Give the repository a concise overview, feature list, stack, setup, demo/screenshots, test command, architecture note, limitations and contribution/attribution. Remove secrets and private or licensed data before making anything public.",
          "Repository-তে concise overview, feature list, stack, setup, demo/screenshot, test command, architecture note, limitation আর contribution/attribution দাও। Public করার আগে secret এবং private বা licensed data সরাও।",
        ),
        l(
          "Prepare three honest walkthroughs: 90 seconds for problem–solution–contribution–result; five minutes for architecture, one hard decision, testing and a limitation; fifteen minutes for code, debugging and trade-offs.",
          "তিনটি honest walkthrough বানাও: ৯০ সেকেন্ডে problem–solution–contribution–result; পাঁচ মিনিটে architecture, একটি কঠিন decision, testing ও limitation; ১৫ মিনিটে code, debugging আর trade-off।",
        ),
        l(
          "Write CV bullets as problem + your action + relevant technology + verifiable evidence. Include CGPA when it strengthens the application, but let project and skill evidence explain what you can do.",
          "CV bullet লেখো problem + তোমার action + relevant technology + verifiable evidence দিয়ে। CGPA application শক্ত করলে রাখো, কিন্তু কী করতে পারো সেটা project আর skill evidence দিয়ে বোঝাও।",
        ),
        l(
          "Pin only a small set of relevant public work and test every link from a private/incognito browser. A recording is acceptable when deployment is unsafe or impractical; explain how to reproduce the result.",
          "ছোট একটি relevant public work set pin করো এবং private/incognito browser থেকে সব link test করো। Deployment unsafe বা impractical হলে recording ঠিক আছে; result কীভাবে reproduce করবে বোঝাও।",
        ),
      ],
      evidence: l(
        "A stranger can understand the project in two minutes, reach a working result and distinguish your contribution from team, library and AI assistance.",
        "অপরিচিত কেউ দুই মিনিটে project বুঝতে, working result-এ যেতে এবং তোমার contribution-কে team, library ও AI assistance থেকে আলাদা করতে পারেন।",
      ),
      notYet: l(
        "Do not invent impact numbers, client logos, teamwork, production scale or skill percentages. Do not publish confidential code to create a portfolio.",
        "Impact number, client logo, teamwork, production scale বা skill percentage বানিও না। Portfolio বানাতে confidential code public কোরো না।",
      ),
      sourceId: "github-career-profile",
    },
    {
      id: "practice",
      title: l(
        "Practise the hiring work—not every possible exam",
        "Hiring-এর কাজ practice করো—সব exam নয়",
      ),
      why: l(
        "Interview formats vary. The useful baseline is independent reasoning, role fundamentals, debugging, testing and clear communication—not automatically an advanced competitive-programming record.",
        "Interview format বদলায়। Useful baseline হলো independent reasoning, role foundation, debugging, testing আর clear communication—advanced competitive-programming record সবার জন্য automatic requirement নয়।",
      ),
      tasks: [
        l(
          "Confirm the likely format from the vacancy or recruiter. Practise the role's language/framework, Git, debugging, tests and the systems behind your project—such as HTTP/API, browser behavior, databases/SQL, mobile lifecycle or QA risk.",
          "Vacancy বা recruiter থেকে likely format নিশ্চিত করো। Role-এর language/framework, Git, debugging, test এবং project-এর পেছনের system—যেমন HTTP/API, browser behavior, database/SQL, mobile lifecycle বা QA risk—practice করো।",
        ),
        l(
          "For general coding rounds, build a bounded DSA baseline: arrays, strings, maps/sets, sorting/searching, stack/queue, basic recursion/tree when relevant, complexity and edge cases. Solve unfamiliar problems aloud and test the result.",
          "General coding round-এর জন্য bounded DSA baseline বানাও: array, string, map/set, sorting/searching, stack/queue, relevant হলে basic recursion/tree, complexity আর edge case। নতুন problem aloud solve করে result test করো।",
        ),
        l(
          "Rehearse the project walkthrough with someone who interrupts: why this design, what failed, how you tested it, what you would change and which part was truly yours.",
          "Interrupt করে প্রশ্ন করে এমন কারও সঙ্গে project walkthrough practice করো: এই design কেন, কী fail করেছিল, কীভাবে test করেছ, কী বদলাতে এবং কোন অংশ সত্যি তোমার।",
        ),
        l(
          "Use AI for critique or mock questions, then answer and debug independently. Never upload private employer material, take-home tasks or interview content without permission.",
          "Critique বা mock question-এর জন্য AI নাও, তারপর independently answer আর debug করো। Permission ছাড়া private employer material, take-home task বা interview content upload কোরো না।",
        ),
      ],
      evidence: l(
        "You can clarify an unfamiliar problem, propose and test a solution, explain complexity, debug a small failure and defend your own project decisions.",
        "নতুন problem clarify, solution propose ও test, complexity explain, ছোট failure debug এবং নিজের project decision defend করতে পারো।",
      ),
      notYet: l(
        "Do not postpone every application until you reach ICPC-level problem solving or memorize hundreds of answers. Increase depth only when target interviews demand it.",
        "ICPC-level problem solving বা শত শত answer মুখস্থ না হওয়া পর্যন্ত সব application থামিয়ে রেখো না। Target interview চাইলে তবেই depth বাড়াও।",
      ),
      sourceId: "microsoft-interviews",
    },
    {
      id: "apply",
      title: l(
        "Run a focused application cycle",
        "Focused application cycle চালাও",
      ),
      why: l(
        "A small, reviewable process produces better learning than random mass applications or waiting to feel completely ready.",
        "Random mass application বা পুরো ready লাগার অপেক্ষার চেয়ে ছোট, review করা যায় এমন process বেশি শেখায়।",
      ),
      tasks: [
        l(
          "Apply to suitable internships, graduate/trainee programmes and junior roles when you meet the essential conditions. Read the official listing and do not self-reject because every preferred item is not present.",
          "Essential condition মিললে suitable internship, graduate/trainee programme আর junior role-এ apply করো। Official listing পড়ো; preferred সব item নেই বলে নিজেকে reject কোরো না।",
        ),
        l(
          "Tailor the summary, evidence order and project bullets to the role without changing facts. Send a concise message; request a referral only with a specific vacancy and reviewable evidence.",
          "Fact না বদলে summary, evidence order আর project bullet role অনুযায়ী সাজাও। Concise message পাঠাও; specific vacancy আর reviewable evidence থাকলে referral চাও।",
        ),
        l(
          "Keep a private application log: role URL, source, date, closing date, CV version, stage, next follow-up and feedback. Store no employer secrets and respect requests not to contact again.",
          "Private application log রাখো: role URL, source, date, closing date, CV version, stage, next follow-up আর feedback। Employer secret রেখো না এবং আর যোগাযোগ না করতে বললে মানো।",
        ),
        l(
          "Evaluate the opportunity too: written responsibilities, supervision and review, probation, hours, support duties, compensation terms, take-home scope and any eligibility or location constraint.",
          "Opportunity-ও যাচাই করো: written responsibility, supervision ও review, probation, hours, support duty, compensation term, take-home scope এবং eligibility বা location constraint।",
        ),
      ],
      evidence: l(
        "You have completed a small batch of accurate, role-matched applications and can state what changed between versions and why.",
        "ছোট একটি accurate, role-matched application batch শেষ করেছ এবং version-এর মধ্যে কী ও কেন বদলেছে বলতে পারো।",
      ),
      notYet: l(
        "Do not pay someone to secure an interview, spam employees, complete vague unpaid production work or accept unclear terms because the title sounds impressive.",
        "Interview নিশ্চিত করতে টাকা, employee-কে spam, vague unpaid production work বা impressive title দেখে unclear term গ্রহণ নয়।",
      ),
      sourceId: "basis-industry-catalog",
    },
    {
      id: "improve",
      title: l(
        "Use the response to improve one bottleneck",
        "Response দিয়ে একটি bottleneck ঠিক করো",
      ),
      why: l(
        "A rejection is incomplete data, not a diagnosis. Patterns across several suitable attempts can still show where the process needs attention.",
        "Rejection incomplete data, diagnosis নয়। কয়েকটি suitable attempt-এর pattern process-এর কোন জায়গায় attention দরকার দেখাতে পারে।",
      ),
      tasks: [
        l(
          "Review the stage where progress usually stops: discovery, CV screen, assessment, technical interview or final conversation. Separate facts from guesses and ask for feedback politely when appropriate.",
          "Progress সাধারণত যেখানে থামে সেটি review করো: discovery, CV screen, assessment, technical interview বা final conversation। Fact আর guess আলাদা করো; appropriate হলে politely feedback চাও।",
        ),
        l(
          "Change one variable for the next small batch: role targeting, first-page CV evidence, one repeated technical gap, project walkthrough or communication—not everything at once.",
          "পরের ছোট batch-এ একটি variable বদলাও: role targeting, CV-এর first-page evidence, repeated technical gap, project walkthrough বা communication—সব একসঙ্গে নয়।",
        ),
        l(
          "Keep shipping small relevant improvements while applying. If openings are scarce, broaden employer category, internship/trainee/junior title or one adjacent role before abandoning the whole direction.",
          "Apply করার পাশাপাশি ছোট relevant improvement release করতে থাকো। Opening কম হলে পুরো direction ছাড়ার আগে employer category, internship/trainee/junior title বা একটি adjacent role বাড়াও।",
        ),
      ],
      evidence: l(
        "Your next cycle has one evidence-based change, a way to observe its effect and a fallback route that still uses your existing skills.",
        "পরের cycle-এ একটি evidence-based change, তার effect দেখার উপায় এবং existing skill ব্যবহার করে এমন fallback route আছে।",
      ),
      notYet: l(
        "Do not treat silence or one rejection as proof that you chose the wrong field, and do not respond by collecting random certificates.",
        "Silence বা একটি rejection-কে wrong field বাছার proof ধরে random certificate সংগ্রহ শুরু কোরো না।",
      ),
      sourceId: "microsoft-interviews",
    },
  ],
  interviewBaseline: [
    {
      title: l("Problem solving", "Problem solving"),
      description: l(
        "Clarify, choose a simple approach, discuss complexity and test edge cases. Contest depth depends on the employer; honest reasoning is always useful.",
        "Clarify করো, simple approach বাছো, complexity বলো আর edge case test করো। Contest depth employer অনুযায়ী বদলায়; honest reasoning সবখানেই useful।",
      ),
    },
    {
      title: l("Build and debug", "Build আর debug"),
      description: l(
        "Read unfamiliar code, reproduce a failure, inspect evidence, make a bounded change and verify that it did not break the core path.",
        "Unfamiliar code পড়ো, failure reproduce, evidence inspect, bounded change এবং core path ভাঙেনি verify করো।",
      ),
    },
    {
      title: l("Engineering foundations", "Engineering foundation"),
      description: l(
        "Know the language, Git, tests and the web/mobile/data concepts directly underneath the role and your project.",
        "Role আর project-এর সরাসরি নিচের language, Git, test এবং web/mobile/data concept জানো।",
      ),
    },
    {
      title: l("Explain your evidence", "নিজের evidence explain করো"),
      description: l(
        "Describe decisions, failure, trade-offs, contribution and limitations without hiding behind framework vocabulary or AI output.",
        "Framework vocabulary বা AI output-এর আড়ালে না থেকে decision, failure, trade-off, contribution আর limitation বলো।",
      ),
    },
  ],
  feedbackSignals: [
    {
      signal: l(
        "Few relevant applications found",
        "Relevant application কম পাওয়া যাচ্ছে",
      ),
      likelyGap: l(
        "Target may be too narrow, titles may differ or the search sources may be weak.",
        "Target খুব narrow, title আলাদা বা search source দুর্বল হতে পারে।",
      ),
      nextAction: l(
        "Add one adjacent title and employer category; keep the underlying role evidence consistent.",
        "একটি adjacent title আর employer category যোগ করো; underlying role evidence consistent রাখো।",
      ),
    },
    {
      signal: l(
        "Applications receive no screening response",
        "Application থেকে screening response আসছে না",
      ),
      likelyGap: l(
        "Eligibility, targeting, first-page clarity or visible evidence may not match the role.",
        "Eligibility, targeting, first-page clarity বা visible evidence role-এর সঙ্গে না-ও মিলতে পারে।",
      ),
      nextAction: l(
        "Recheck essential conditions and let a reviewer compare the CV and project links with the vacancy.",
        "Essential condition আবার দেখো এবং reviewer দিয়ে vacancy-এর সঙ্গে CV ও project link compare করাও।",
      ),
    },
    {
      signal: l(
        "Assessments repeatedly stop progress",
        "Assessment-এ বারবার progress থামে",
      ),
      likelyGap: l(
        "A repeated coding, debugging, language, database or role-specific skill may need deliberate practice.",
        "Repeated coding, debugging, language, database বা role-specific skill-এ deliberate practice লাগতে পারে।",
      ),
      nextAction: l(
        "Recreate the skill category with fresh practice—not confidential questions—and verify it under realistic time/tool conditions.",
        "Confidential question নয়, fresh practice দিয়ে skill category recreate করো এবং realistic time/tool condition-এ verify করো।",
      ),
    },
    {
      signal: l(
        "Technical conversations go poorly",
        "Technical conversation ভালো হচ্ছে না",
      ),
      likelyGap: l(
        "Reasoning, project ownership or explanation may be weaker than memorized answers suggest.",
        "Memorized answer-এর তুলনায় reasoning, project ownership বা explanation দুর্বল হতে পারে।",
      ),
      nextAction: l(
        "Record one mock walkthrough, identify where the explanation loses evidence and practise that exact transition.",
        "একটি mock walkthrough record করে explanation কোথায় evidence হারায় দেখো এবং সেই transition-টাই practice করো।",
      ),
    },
  ],
  pitfalls: [
    l(
      "Do not hide that a project was solo. Explain how you sought review and what collaboration skill you are building now.",
      "Project solo ছিল—লুকিও না। কীভাবে review নিয়েছ আর এখন কোন collaboration skill বানাচ্ছ বলো।",
    ),
    l(
      "Do not let a good CGPA become either your entire identity or something you dismiss. Use it as one signal beside verifiable work.",
      "ভালো CGPA-কে পুরো identity বা একেবারে অপ্রয়োজনীয়—কোনোটিই ধরো না। Verifiable কাজের পাশে একটি signal হিসেবে রাখো।",
    ),
    l(
      "Do not confuse collecting courses with closing a hiring gap. Every study block should connect to a target task, project change or interview observation.",
      "Course সংগ্রহকে hiring gap close করা ভাবো না। প্রতিটি study block target task, project change বা interview observation-এর সঙ্গে যুক্ত করো।",
    ),
    l(
      "Do not compare your first application cycle with someone else's established career. Compare this week's evidence with last week's.",
      "নিজের প্রথম application cycle-কে অন্যের established career-এর সঙ্গে compare কোরো না। এই সপ্তাহের evidence গত সপ্তাহের সঙ্গে compare করো।",
    ),
  ],
  thisWeek: l(
    "Choose one target role, inspect five suitable current postings and make one reviewed, tested improvement to the project you already understand. Then write the 90-second walkthrough. That is a complete first cycle—not a small achievement.",
    "একটি target role বাছো, পাঁচটি suitable current posting দেখো এবং নিজের বোঝা project-এ একটি reviewed, tested improvement করো। তারপর ৯০-second walkthrough লেখো। এটিই complete first cycle—ছোট achievement নয়।",
  ),
  careerIds: [
    "frontend-engineering",
    "backend-engineering",
    "mobile-app-development",
    "software-quality-assurance",
  ],
  sourceIds: [
    "basis-industry-catalog",
    "github-readmes",
    "github-career-profile",
    "github-flow",
    "github-actions",
    "microsoft-interviews",
  ],
};
