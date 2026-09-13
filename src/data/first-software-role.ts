import { l } from "@/lib/localized";
import type { FirstRoleGuide } from "@/types/content";

export const firstSoftwareRoleGuide: FirstRoleGuide = {
  title: l(
    "From final semester to your first software role",
    "ফাইনাল সেমিস্টার থেকে প্রথম সফটওয়্যার চাকরি",
  ),
  summary: l(
    "Turn an existing project and academic foundation into credible evidence, focused interview practice and a repeatable internship or junior-job search.",
    "যে প্রজেক্টটি করেছেন আর বিশ্ববিদ্যালয়ে যা শিখেছেন—সেগুলোকে কাজের প্রমাণে বদলান, ইন্টারভিউয়ের প্রস্তুতি গুছিয়ে নিন, তারপর পরিকল্পনা করে internship বা junior role খুঁজুন।",
  ),
  reality: l(
    "You may already have more material than you think: a degree in progress, a project you understand and evidence that you can learn. The missing layer is often translation—choosing a role, strengthening one real piece of work, explaining it clearly and learning from the hiring response. This guide is a practical bridge, not a promise of an interview or offer.",
    "আপনার হাতে হয়তো ভাবনার চেয়েও বেশি কিছু আছে: প্রায় শেষ হওয়া ডিগ্রি, নিজের বোঝা একটি প্রজেক্ট, আর নতুন কিছু শেখার প্রমাণ। সমস্যা অনেক সময় যোগ্যতার চেয়ে উপস্থাপনায় বেশি—কোন role-এ যেতে চান তা ঠিক করা, একটি সত্যিকারের কাজকে শক্ত করা, সেটি পরিষ্কারভাবে বোঝানো এবং নিয়োগপ্রক্রিয়ার প্রতিক্রিয়া থেকে শেখা। এই গাইড সেই সেতুটি তৈরি করবে; interview বা offer-এর মিথ্যা নিশ্চয়তা দেবে না।",
  ),
  entryRoutes: [
    {
      id: "algorithmic",
      title: l(
        "Strong competitive problem solving",
        "Competitive problem solving-এ ভালো",
      ),
      signal: l(
        "You regularly solve unfamiliar timed problems, explain complexity and edge cases, and can write solid OOP code without copying a template.",
        "নতুন problem সময়ের মধ্যে solve করতে পারেন, complexity ও edge case বুঝিয়ে বলতে পারেন, আর template না দেখে ভালো OOP code লিখতে পারেন।",
      ),
      strategy: l(
        "Some local hiring pipelines give this combination substantial weight, including for well-paid entry roles. Use that real advantage where the advertised assessment rewards it—but do not mistake one hiring signal for complete engineering readiness.",
        "দেশের কিছু hiring process-এ এই combination-কে বেশ গুরুত্ব দেওয়া হয়; ভালো entry-level সুযোগও আসতে পারে। Job posting বা assessment-এ এই দক্ষতা চাওয়া হলে সুবিধাটি কাজে লাগান। তবে একটি hiring signal-কে পুরো engineering readiness ভেবে বসবেন না।",
      ),
      now: l(
        "Check the actual assessment format and choose one target role. Prepare the likely coding round instead of practising contests without an application target.",
        "আসল assessment format দেখে একটি target role ঠিক করুন। কোথায় আবেদন করবেন তা না জেনে শুধু contest problem বাড়িয়ে যাবেন না; সম্ভাব্য coding round-এর প্রস্তুতি নিন।",
      ),
      next: l(
        "Close the practical gap with one project walkthrough, Git, testing, debugging, databases or HTTP as relevant, and clear communication about your decisions.",
        "একটি project walkthrough, Git, testing, debugging, আর role অনুযায়ী database বা HTTP—এসব দিয়ে practical gap পূরণ করুন। নিজের decision-ও পরিষ্কারভাবে বোঝাতে শিখুন।",
      ),
      applyWhen: l(
        "Apply once you meet the essential conditions, can perform in the expected format and can defend one piece of work you own. Keep building production habits after applying.",
        "মূল শর্তগুলো মিলে গেলে, expected format-এ problem solve করতে পারলে এবং নিজের একটি কাজের পক্ষে যুক্তি দিতে পারলে আবেদন শুরু করুন। আবেদনের পরও production practice গড়তে থাকুন।",
      ),
      destination: "stage-apply",
    },
    {
      id: "balanced",
      title: l(
        "Some problem solving, but not consistent yet",
        "Problem solving কিছুটা পারি, কিন্তু ধারাবাহিক নই",
      ),
      signal: l(
        "You understand basic data structures and OOP, but unfamiliar problems, time pressure or explanation still expose gaps.",
        "Basic data structure আর OOP বুঝুন, কিন্তু নতুন problem, সময়ের চাপ বা solution বোঝানোর জায়গায় এখনও আটকে যান।",
      ),
      strategy: l(
        "Build a bounded interview baseline and role evidence in parallel. You do not need to become an ICPC-level contestant before becoming employable, and abandoning problem solving completely creates a different gap.",
        "Interview-এর জন্য যতটুকু দরকার ততটুকু problem-solving ভিত্তি আর role-specific evidence—দুটো পাশাপাশি বানান। চাকরির আগে ICPC-level contestant হওয়া লাগবে না; আবার problem solving একেবারে ছেড়ে দিলেও অন্য gap তৈরি হবে।",
      ),
      now: l(
        "For two or three sessions a week, practise arrays, strings, maps/sets, sorting/searching, complexity and edge cases. Say the reasoning aloud and test it.",
        "সপ্তাহে দুই বা তিনটি session-এ array, string, map/set, sorting/searching, complexity আর edge case practice করুন। চিন্তাটা মুখে বলুন, তারপর test করে দেখুন।",
      ),
      next: l(
        "Use the remaining practice time to strengthen one role-relevant project and rehearse the hiring tasks shown in real postings.",
        "বাকি practice time-এ role-এর সঙ্গে মেলে এমন একটি project শক্ত করুন, আর আসল job posting-এ যে hiring task দেখা যায় সেটিই rehearse করুন।",
      ),
      applyWhen: l(
        "Apply when you can reason through a fresh foundation problem, debug a small failure and explain your project. Let repeated assessment feedback decide whether DSA depth should increase.",
        "নতুন foundation problem ভেঙে বলতে, ছোট failure debug করতে এবং নিজের project বোঝাতে পারলে আবেদন শুরু করুন। Assessment-এ একই gap বারবার ধরা পড়লে তবেই DSA-এর depth বাড়ান।",
      ),
      destination: "stage-practice",
    },
    {
      id: "role-evidence",
      title: l(
        "Little CP practice or low algorithmic confidence",
        "CP practice কম, algorithm নিয়েও আত্মবিশ্বাস কম",
      ),
      signal: l(
        "Your stronger signals may be a project, CGPA, careful implementation, testing, UI work, domain understanding or the ability to learn—not contest history.",
        "Contest history নয়—project, CGPA, যত্ন নিয়ে implementation, testing, UI work, domain বোঝা বা দ্রুত শেখার ক্ষমতাই হয়তো আপনার শক্ত signal।",
      ),
      strategy: l(
        "Do not self-reject. Look for internships, trainee and junior routes whose real work can be demonstrated through projects, debugging, testing, take-home work or role discussion. Frontend/UI, mobile, QA/testing, implementation/support and junior development can use different evidence; read the duties instead of treating any title as an easy back door.",
        "নিজেই নিজেকে বাদ দেবেন না। এমন internship, trainee বা junior role খুঁজুন যেখানে project, debugging, testing, take-home task বা role discussion দিয়ে কাজ দেখানো যায়। Frontend/UI, mobile, QA/testing, implementation/support কিংবা junior development-এ evidence আলাদা হতে পারে; কোনো title-কে সহজ পেছনের দরজা না ভেবে আসল দায়িত্ব পড়ুন।",
      ),
      now: l(
        "Choose one role from actual postings, then build the minimum problem-solving floor: inputs, conditions, loops, arrays/strings/maps, simple complexity, edge cases and systematic debugging.",
        "আসল job posting দেখে একটি role বেছে নিন। তারপর ন্যূনতম problem-solving floor বানান: input, condition, loop, array/string/map, সহজ complexity, edge case আর গুছিয়ে debugging।",
      ),
      next: l(
        "Produce one reviewable role artifact: for example an accessible interface, a small API with data validation, a mobile flow, or a test plan with reproducible bug reports. Ask someone else to review it.",
        "Role অনুযায়ী review করা যায় এমন একটি artifact বানান—যেমন accessible interface, data validation-সহ ছোট API, mobile flow, অথবা test plan ও reproducible bug report। অন্য কাউকে দিয়ে review করান।",
      ),
      applyWhen: l(
        "Apply when you meet the essential conditions and can complete, test, debug and explain one small relevant task. Continue the bounded foundation practice while applications run.",
        "মূল শর্ত মিলে গেলে এবং ছোট একটি প্রাসঙ্গিক কাজ শেষ, test, debug ও explain করতে পারলে আবেদন শুরু করুন। আবেদনের পাশাপাশি সীমিত foundation practice চালিয়ে যান।",
      ),
      destination: "stage-target",
    },
  ],
  starts: [
    {
      id: "project",
      title: l(
        "My project works, but the repository is messy.",
        "প্রজেক্ট চলে, কিন্তু repository এলোমেলো।",
      ),
      note: l(
        "Strengthen the work you already understand before starting another large project.",
        "আরেকটি বড় প্রজেক্টে ঝাঁপ দেওয়ার আগে, যে কাজটি ভালো বুঝুন সেটিকেই শক্ত করুন।",
      ),
      destination: "stage-strengthen",
    },
    {
      id: "presentation",
      title: l(
        "My project is ready, but my CV or portfolio is weak.",
        "প্রজেক্ট প্রস্তুত, কিন্তু CV বা portfolio-তে তা ঠিকমতো ফুটে ওঠেনি।",
      ),
      note: l(
        "Make the evidence understandable in two minutes without exaggerating it.",
        "বাড়িয়ে না বলে, আপনার কাজের প্রমাণটি যেন দুই মিনিটেই বোঝা যায়—সেভাবে সাজান।",
      ),
      destination: "stage-present",
    },
    {
      id: "interview",
      title: l(
        "I need junior interview preparation.",
        "Junior role-এর ইন্টারভিউয়ের প্রস্তুতি দরকার।",
      ),
      note: l(
        "Build a bounded role-specific baseline; advanced contest programming is not the universal entry ticket.",
        "লক্ষ্য করা role-এর জন্য যতটুকু দরকার, ততটুকুর একটি শক্ত ভিত্তি বানান; advanced contest programming সবার প্রবেশপত্র নয়।",
      ),
      destination: "stage-practice",
    },
    {
      id: "applications",
      title: l(
        "I am ready to apply, but the process feels random.",
        "আবেদন করার মতো প্রস্তুতি আছে, কিন্তু কোথায় কীভাবে শুরু করব বুঝতে পারছি না।",
      ),
      note: l(
        "Use a small targeted batch, an honest application log and written opportunity checks.",
        "অল্প কয়েকটি উপযুক্ত চাকরিতে মন দিয়ে আবেদন করুন, হিসাব রাখুন, আর সুযোগের শর্তগুলো লিখে যাচাই করুন।",
      ),
      destination: "stage-apply",
    },
    {
      id: "feedback",
      title: l(
        "I apply or interview, but I am not progressing.",
        "আবেদন বা interview দিচ্ছি, কিন্তু পরের ধাপে যেতে পারছি না।",
      ),
      note: l(
        "Use the stage where the process stops as a signal—not a verdict on your future.",
        "প্রক্রিয়াটি যেখানে বারবার থামছে, সেটিকে সূত্র হিসেবে দেখুন—আপনার ভবিষ্যতের রায় হিসেবে নয়।",
      ),
      destination: "feedback-loop",
    },
  ],
  stages: [
    {
      id: "target",
      title: l(
        "Target one role for this cycle",
        "এই পর্যায়ের জন্য একটি role ঠিক করুন",
      ),
      why: l(
        "“Software developer” is too broad to decide what evidence or interview practice matters next. A provisional target reduces noise without locking your career forever.",
        "‘Software developer’ কথাটি এত বিস্তৃত যে কী দেখাবে বা কোন ধরনের interview practice করবে, তা ঠিক করা কঠিন। আপাতত একটি role বেছে নিলে অপ্রয়োজনীয় শব্দ কমবে; এতে সারাজীবনের ক্যারিয়ার তালাবদ্ধ হয়ে যাবে না।",
      ),
      tasks: [
        l(
          "Read five to ten current internship, trainee or junior postings from official employer pages. Record repeated tasks, foundations, stack, degree/experience conditions and application channel; check the closing date.",
          "প্রতিষ্ঠানের অফিসিয়াল career page থেকে পাঁচ থেকে দশটি চলতি internship, trainee বা junior job posting পড়ুন। যে কাজ, ভিত্তি, tech stack ও যোগ্যতার কথা বারবার এসেছে সেগুলো লিখে রাখুন; আবেদনের মাধ্যম ও শেষ তারিখও বাদ দেবেন না।",
        ),
        l(
          "Choose one primary role—such as frontend, backend, mobile or software QA—and one adjacent backup. Use the career pages to compare actual work, not prestige or salary rumors.",
          "Frontend, backend, mobile বা software QA-এর মতো একটি মূল role এবং কাছাকাছি আরেকটি বিকল্প বেছে নিন। পদবির চাকচিক্য বা বেতনের গুজব নয়—career page দেখে প্রতিদিনের কাজগুলো মিলিয়ে দেখুন।",
        ),
        l(
          "Write a one-sentence target: role, employer category, evidence you already have and the two most repeated gaps you will address.",
          "এক বাক্যে লক্ষ্যটি লিখুন: কোন role, কোন ধরনের প্রতিষ্ঠান, হাতে কী প্রমাণ আছে, আর বারবার চোখে পড়া কোন দুটি ঘাটতি আগে পূরণ করবেন।",
        ),
      ],
      evidence: l(
        "You can name the work you are targeting, show the postings behind the decision and explain which two gaps matter first.",
        "কোন কাজটি লক্ষ্য করছেন, কোন job posting দেখে সিদ্ধান্ত নিয়েছেন, আর কোন দুটি ঘাটতি আগে পূরণ করবেন—সব পরিষ্কারভাবে বলতে পারছেন।",
      ),
      notYet: l(
        "Do not learn every technology mentioned across every posting or choose a role only because its title sounds impressive.",
        "সব job posting-এ দেখা প্রতিটি technology এখনই শেখার দরকার নেই; শুধু চমৎকার শোনায় বলে কোনো role-ও বেছে নেবেন না।",
      ),
      sourceId: "basis-industry-catalog",
    },
    {
      id: "strengthen",
      title: l(
        "Strengthen one project you already understand",
        "নিজের বোঝা একটি প্রজেক্টকে শক্ত করুন",
      ),
      why: l(
        "A completed academic project can become hiring evidence when another person can understand, run and question it. You do not need to pretend it was built with practices you did not use.",
        "অন্য কেউ যদি প্রজেক্টটি বুঝতে, চালাতে এবং তা নিয়ে প্রশ্ন করতে পারে, তবে বিশ্ববিদ্যালয়ের প্রজেক্টও চাকরির জন্য ভালো প্রমাণ হতে পারে। যে practice আগে ব্যবহার করেননি, সেটি করেছিলেন—এমন গল্প বানানোর দরকার নেই।",
      ),
      tasks: [
        l(
          "Audit one core user journey: setup, validation, failure handling, tests, security/privacy/accessibility where relevant, deployment or a reproducible demo, and known limitations.",
          "একটি গুরুত্বপূর্ণ user journey শুরু থেকে শেষ পর্যন্ত যাচাই করুন: setup, validation, ভুল হলে কী ঘটে, test, প্রাসঙ্গিক security/privacy/accessibility, deployment বা আবার চালানো যায় এমন demo, এবং জানা সীমাবদ্ধতা।",
        ),
        l(
          "Make one genuine version 1.1 improvement now: open an issue, use a short branch, add or update a test, open a pull request, request feedback, address it, merge and tag a small release. If solo, ask a peer to review; do not fabricate historical teamwork.",
          "এখন সত্যিকারের একটি version 1.1 উন্নতি করুন: issue খুলুন, ছোট একটি branch-এ কাজ করুন, test যোগ বা হালনাগাদ করুন, pull request দিয়ে মতামত নিন, তারপর ঠিক করে merge ও ছোট release tag দিন। একা কাজ করলে সহপাঠীর review চান; অতীতে দলবদ্ধভাবে কাজ করেছিলেন—এমন গল্প বানাবেন না।",
        ),
        l(
          "Give the README to someone unfamiliar with the project. Observe where setup or purpose becomes unclear, then fix the document or automation.",
          "প্রজেক্টটি চেনে না এমন কাউকে শুধু README দেখে চালাতে দিন। কোথায় setup বা উদ্দেশ্য বোঝা কঠিন হচ্ছে লক্ষ্য করুন, তারপর documentation বা automation ঠিক করুন।",
        ),
      ],
      evidence: l(
        "A reviewer can understand the problem, run or view the project, inspect one tested change and see honest limitations and contribution history.",
        "একজন reviewer সমস্যাটি বুঝতে, প্রজেক্ট চালাতে বা দেখতে, test করা একটি পরিবর্তন যাচাই করতে এবং সীমাবদ্ধতা ও contribution history পরিষ্কারভাবে দেখতে পারছেন।",
      ),
      notYet: l(
        "Do not rewrite the whole project, erase honest history or start a second giant project merely to add another framework name.",
        "এখনই পুরো প্রজেক্ট নতুন করে লেখা, সত্যিকারের history মুছে ফেলা বা শুধু আরেকটি framework-এর নাম দেখাতে বিশাল দ্বিতীয় প্রজেক্ট শুরু করার দরকার নেই।",
      ),
      sourceId: "github-readmes",
    },
    {
      id: "present",
      title: l(
        "Make the evidence easy to review",
        "কাজের প্রমাণটি সহজে দেখার মতো করুন",
      ),
      why: l(
        "Good work can be missed when a reviewer cannot quickly find the problem, your contribution, a working result and the engineering decisions behind it.",
        "Reviewer যদি সমস্যাটি, আপনার অবদান, চলমান ফলাফল আর engineering decision দ্রুত খুঁজে না পান, ভালো কাজও চোখ এড়িয়ে যেতে পারে।",
      ),
      tasks: [
        l(
          "Give the repository a concise overview, feature list, stack, setup, demo/screenshots, test command, architecture note, limitations and contribution/attribution. Remove secrets and private or licensed data before making anything public.",
          "Repository-তে সংক্ষিপ্ত পরিচিতি, feature list, tech stack, setup, demo বা screenshot, test command, architecture note, সীমাবদ্ধতা এবং কার কী অবদান—সব গুছিয়ে দিন। Public করার আগে secret এবং private বা licensed data সরিয়ে ফেলুন।",
        ),
        l(
          "Prepare three honest walkthroughs: 90 seconds for problem–solution–contribution–result; five minutes for architecture, one hard decision, testing and a limitation; fifteen minutes for code, debugging and trade-offs.",
          "তিনটি সৎ walkthrough প্রস্তুত করুন: ৯০ সেকেন্ডে সমস্যা–সমাধান–আপনার অবদান–ফলাফল; পাঁচ মিনিটে architecture, একটি কঠিন সিদ্ধান্ত, testing ও সীমাবদ্ধতা; আর ১৫ মিনিটে code, debugging ও trade-off।",
        ),
        l(
          "Write CV bullets as problem + your action + relevant technology + verifiable evidence. Include CGPA when it strengthens the application, but let project and skill evidence explain what you can do.",
          "CV-এর bullet লিখুন এভাবে: সমস্যা + আপনি কী করেছেন + প্রাসঙ্গিক technology + যাচাই করা যায় এমন ফল। CGPA আবেদনকে শক্ত করলে অবশ্যই রাখুন, তবে আপনি কী করতে পারেন তা প্রজেক্ট ও দক্ষতার প্রমাণ দিয়েই বোঝান।",
        ),
        l(
          "Pin only a small set of relevant public work and test every link from a private/incognito browser. A recording is acceptable when deployment is unsafe or impractical; explain how to reproduce the result.",
          "প্রাসঙ্গিক অল্প কয়েকটি public কাজ সামনে রাখুন এবং private/incognito browser থেকে প্রতিটি link পরীক্ষা করুন। Deploy করা অনিরাপদ বা অবাস্তব হলে recording দিলেও চলে; ফলটি আবার কীভাবে পাওয়া যাবে সেটি বুঝিয়ে দিন।",
        ),
      ],
      evidence: l(
        "A stranger can understand the project in two minutes, reach a working result and distinguish your contribution from team, library and AI assistance.",
        "অপরিচিত কেউ দুই মিনিটে প্রজেক্টটি বুঝতে, কাজ করা ফলাফল দেখতে এবং আপনার অবদানকে দল, library ও AI-এর সহায়তা থেকে আলাদা করতে পারছেন।",
      ),
      notYet: l(
        "Do not invent impact numbers, client logos, teamwork, production scale or skill percentages. Do not publish confidential code to create a portfolio.",
        "Impact number, client logo, teamwork, production scale বা skill percentage বানিয়ে লিখুন না। Portfolio সাজাতে গিয়ে confidential code public করবেন না।",
      ),
      sourceId: "github-career-profile",
    },
    {
      id: "practice",
      title: l(
        "Practise the hiring work—not every possible exam",
        "চাকরির জন্য দরকারি কাজ অনুশীলন করুন—পৃথিবীর সব পরীক্ষা নয়",
      ),
      why: l(
        "Interview formats vary. The useful baseline is independent reasoning, role fundamentals, debugging, testing and clear communication—not automatically an advanced competitive-programming record.",
        "প্রতিষ্ঠানভেদে interview-এর ধরন বদলায়। সবার জন্য দরকার নিজের মাথায় ভাবতে পারা, role-এর ভিত্তি বোঝা, debug ও test করা এবং পরিষ্কারভাবে কথা বলা; advanced competitive-programming record কোনো সর্বজনীন শর্ত নয়।",
      ),
      tasks: [
        l(
          "Confirm the likely format from the vacancy or recruiter. Practise the role's language/framework, Git, debugging, tests and the systems behind your project—such as HTTP/API, browser behavior, databases/SQL, mobile lifecycle or QA risk.",
          "Vacancy বা recruiter-এর কাছ থেকে সম্ভাব্য interview format জেনে নিন। Role-এর language/framework, Git, debugging, test এবং আপনার প্রজেক্টের নিচের system—যেমন HTTP/API, browser behavior, database/SQL, mobile lifecycle বা QA risk—অনুশীলন করুন।",
        ),
        l(
          "For general coding rounds, build a bounded DSA baseline: arrays, strings, maps/sets, sorting/searching, stack/queue, basic recursion/tree when relevant, complexity and edge cases. Solve unfamiliar problems aloud and test the result.",
          "সাধারণ coding round-এর জন্য সীমিত কিন্তু শক্ত DSA ভিত্তি বানান: array, string, map/set, sorting/searching, stack/queue, প্রাসঙ্গিক হলে basic recursion/tree, complexity এবং edge case। অপরিচিত problem সমাধানের সময় চিন্তাটা মুখে বলুন, তারপর ফল পরীক্ষা করুন।",
        ),
        l(
          "Rehearse the project walkthrough with someone who interrupts: why this design, what failed, how you tested it, what you would change and which part was truly yours.",
          "মাঝপথে থামিয়ে প্রশ্ন করবে—এমন কারও সঙ্গে project walkthrough অনুশীলন করুন: এই design কেন, কী ব্যর্থ হয়েছিল, কীভাবে test করেছেন, কী বদলাতে, আর কোন অংশটি সত্যিই আপনার।",
        ),
        l(
          "Use AI for critique or mock questions, then answer and debug independently. Never upload private employer material, take-home tasks or interview content without permission.",
          "সমালোচনা বা mock question পেতে AI ব্যবহার করতে পারেন, তবে উত্তর ও debugging নিজে করুন। অনুমতি ছাড়া কোনো প্রতিষ্ঠানের private material, take-home task বা interview content upload করবেন না।",
        ),
      ],
      evidence: l(
        "You can clarify an unfamiliar problem, propose and test a solution, explain complexity, debug a small failure and defend your own project decisions.",
        "অপরিচিত problem পরিষ্কার করে নিতে, সমাধান প্রস্তাব ও পরীক্ষা করতে, complexity বোঝাতে, ছোট failure debug করতে এবং নিজের project decision-এর যুক্তি দিতে পারছেন।",
      ),
      notYet: l(
        "Do not postpone every application until you reach ICPC-level problem solving or memorize hundreds of answers. Increase depth only when target interviews demand it.",
        "ICPC পর্যায়ের problem solving বা শত শত উত্তর মুখস্থ না হওয়া পর্যন্ত আবেদন বন্ধ রাখবেন না। লক্ষ্য করা interview-এ যতটা দরকার, গভীরতা ততটাই বাড়ান।",
      ),
      sourceId: "microsoft-interviews",
    },
    {
      id: "apply",
      title: l(
        "Run a focused application cycle",
        "গুছিয়ে আবেদন করার একটি cycle চালান",
      ),
      why: l(
        "A small, reviewable process produces better learning than random mass applications or waiting to feel completely ready.",
        "এলোপাতাড়ি শত আবেদন বা নিজেকে শতভাগ প্রস্তুত মনে হওয়ার অপেক্ষার চেয়ে, অল্প কয়েকটি আবেদন করে ফল দেখা ও শেখা অনেক বেশি কাজে দেয়।",
      ),
      tasks: [
        l(
          "Apply to suitable internships, graduate/trainee programmes and junior roles when you meet the essential conditions. Search by real duties as well as titles: development, QA/testing, implementation or technical support can be different legitimate routes when the work and learning match your goal—not automatic back doors into another role. Do not self-reject because every preferred item is absent.",
          "মূল শর্তগুলো মিললে উপযুক্ত internship, graduate/trainee programme ও junior role-এ আবেদন করুন। শুধু title নয়, আসল দায়িত্ব দিয়েও খুঁজুন: development, QA/testing, implementation বা technical support—কাজ ও শেখার সুযোগ আপনার লক্ষ্যের সঙ্গে মিললে এগুলো আলাদা ও বৈধ route; অন্য role-এ ঢোকার automatic পেছনের দরজা নয়। ‘Preferred’ তালিকার সবকিছু নেই বলে নিজেই নিজেকে বাদ দেবেন না।",
        ),
        l(
          "Tailor the summary, evidence order and project bullets to the role without changing facts. Send a concise message; request a referral only with a specific vacancy and reviewable evidence.",
          "তথ্য না বদলে summary, কাজের প্রমাণের ক্রম ও project bullet role অনুযায়ী সাজান। ছোট ও পরিষ্কার message পাঠান; নির্দিষ্ট vacancy এবং দেখার মতো কাজ থাকলে তবেই referral চান।",
        ),
        l(
          "Keep a private application log: role URL, source, date, closing date, CV version, stage, next follow-up and feedback. Store no employer secrets and respect requests not to contact again.",
          "নিজের জন্য application log রাখুন: role-এর URL, উৎস, আবেদনের তারিখ, শেষ তারিখ, CV version, বর্তমান ধাপ, পরের follow-up এবং পাওয়া মতামত। প্রতিষ্ঠানের গোপন তথ্য রাখবেন না; আর যোগাযোগ না করতে বললে সেটিও সম্মান করুন।",
        ),
        l(
          "Evaluate the opportunity too: written responsibilities, supervision and review, probation, hours, support duties, compensation terms, take-home scope and any eligibility or location constraint.",
          "সুযোগটিকেও যাচাই করুন: লিখিত দায়িত্ব, supervision ও review, probation, কাজের সময়, support duty, পারিশ্রমিকের শর্ত, take-home task-এর পরিধি এবং যোগ্যতা বা location-এর বাধা। চাকরি আপনাকে বাছবে, ঠিক; আপনিও চাকরিটিকে যাচাই করবেন।",
        ),
      ],
      evidence: l(
        "You have completed a small batch of accurate, role-matched applications and can state what changed between versions and why.",
        "অল্প কয়েকটি সঠিক ও role-matched আবেদন শেষ করেছেন, এবং এক version থেকে আরেক version-এ কী বদলেছেন ও কেন—তা বলতে পারছেন।",
      ),
      notYet: l(
        "Do not pay someone to secure an interview, spam employees, complete vague unpaid production work or accept unclear terms because the title sounds impressive.",
        "Interview নিশ্চিত করার নামে টাকা দেবেন না, employee-দের spam করবেন না, অস্পষ্ট unpaid production work করবেন না, আর শুধু চমৎকার পদবি দেখে অস্পষ্ট শর্ত মেনে নেবেন না।",
      ),
      sourceId: "basis-industry-catalog",
    },
    {
      id: "improve",
      title: l(
        "Use the response to improve one bottleneck",
        "প্রতিক্রিয়া দেখে একটি bottleneck ঠিক করুন",
      ),
      why: l(
        "A rejection is incomplete data, not a diagnosis. Patterns across several suitable attempts can still show where the process needs attention.",
        "একটি rejection অসম্পূর্ণ তথ্য, পূর্ণ diagnosis নয়। তবে কয়েকটি উপযুক্ত চেষ্টায় একই pattern দেখা গেলে, প্রক্রিয়ার কোথায় নজর দিতে হবে তার ইঙ্গিত পাওয়া যায়।",
      ),
      tasks: [
        l(
          "Review the stage where progress usually stops: discovery, CV screen, assessment, technical interview or final conversation. Separate facts from guesses and ask for feedback politely when appropriate.",
          "আপনি সাধারণত যে ধাপে আটকে যাচ্ছেন সেটি দেখুন: সুযোগ খোঁজা, CV screening, assessment, technical interview নাকি শেষ আলোচনা। জানা তথ্য আর নিজের অনুমান আলাদা রাখুন; সুযোগ থাকলে ভদ্রভাবে feedback চান।",
        ),
        l(
          "Change one variable for the next small batch: role targeting, first-page CV evidence, one repeated technical gap, project walkthrough or communication—not everything at once.",
          "পরের ছোট batch-এ একটি জিনিস বদলান: role targeting, CV-এর প্রথম পাতার প্রমাণ, বারবার ধরা পড়া technical gap, project walkthrough বা যোগাযোগ—সব একসঙ্গে নয়।",
        ),
        l(
          "Keep shipping small relevant improvements while applying. If openings are scarce, broaden employer category, internship/trainee/junior title or one adjacent role before abandoning the whole direction.",
          "আবেদনের পাশাপাশি ছোট কিন্তু প্রাসঙ্গিক উন্নতি release করতে থাকুন। চাকরি কম থাকলে পুরো পথ ছেড়ে দেওয়ার আগে প্রতিষ্ঠানের ধরন, internship/trainee/junior পদবি বা কাছাকাছি একটি role যোগ করে খোঁজ বাড়ান।",
        ),
      ],
      evidence: l(
        "Your next cycle has one evidence-based change, a way to observe its effect and a fallback route that still uses your existing skills.",
        "পরের cycle-এ প্রমাণভিত্তিক একটি পরিবর্তন আছে, তার ফল দেখার উপায় আছে, আর বর্তমান দক্ষতা কাজে লাগে—এমন একটি বিকল্প পথও আছে।",
      ),
      notYet: l(
        "Do not treat silence or one rejection as proof that you chose the wrong field, and do not respond by collecting random certificates.",
        "উত্তর না পাওয়া বা একটি rejection-কে ভুল field বেছে নেওয়ার প্রমাণ ধরে এলোপাতাড়ি certificate সংগ্রহ শুরু করবেন না।",
      ),
      sourceId: "microsoft-interviews",
    },
  ],
  interviewBaseline: [
    {
      title: l("Problem solving", "সমস্যা ভেঙে সমাধান করা"),
      description: l(
        "Clarify, choose a simple approach, discuss complexity and test edge cases. Contest depth depends on the employer; honest reasoning is always useful.",
        "প্রশ্নটি পরিষ্কার করে নিন, সহজ একটি পদ্ধতি বেছে নিন, complexity বোঝান এবং edge case পরীক্ষা করুন। কতটা contest-level দক্ষতা লাগবে তা প্রতিষ্ঠানভেদে বদলায়; সৎ ও পরিষ্কার reasoning সবখানেই কাজে লাগে।",
      ),
    },
    {
      title: l("Build and debug", "কিছু বানান, সমস্যা হলে debug করুন"),
      description: l(
        "Read unfamiliar code, reproduce a failure, inspect evidence, make a bounded change and verify that it did not break the core path.",
        "অপরিচিত code পড়ুন, failure আবার ঘটিয়ে দেখুন, প্রমাণ যাচাই করুন, সীমিত পরিবর্তন করুন এবং মূল flow ভাঙেনি তা নিশ্চিত করুন।",
      ),
    },
    {
      title: l("Engineering foundations", "Engineering-এর ভিত্তি"),
      description: l(
        "Know the language, Git, tests and the web/mobile/data concepts directly underneath the role and your project.",
        "আপনার role ও প্রজেক্টের নিচে থাকা language, Git, testing এবং web/mobile/data-এর মূল ধারণাগুলো বুঝুন।",
      ),
    },
    {
      title: l("Explain your evidence", "নিজের কাজের প্রমাণ বুঝিয়ে বলুন"),
      description: l(
        "Describe decisions, failure, trade-offs, contribution and limitations without hiding behind framework vocabulary or AI output.",
        "Framework-এর ভারী শব্দ বা AI output-এর আড়ালে লুকিয়ে না থেকে সিদ্ধান্ত, ব্যর্থতা, trade-off, নিজের অবদান ও সীমাবদ্ধতা খোলাখুলি বলুন।",
      ),
    },
  ],
  feedbackSignals: [
    {
      signal: l(
        "Few relevant applications found",
        "প্রাসঙ্গিক চাকরির বিজ্ঞপ্তি কম পাচ্ছ",
      ),
      likelyGap: l(
        "Target may be too narrow, titles may differ or the search sources may be weak.",
        "আপনার লক্ষ্য খুব সংকীর্ণ হতে পারে, একই কাজের পদবি আলাদা হতে পারে, অথবা খোঁজার জায়গাগুলো ঠিক নাও হতে পারে।",
      ),
      nextAction: l(
        "Add one adjacent title and employer category; keep the underlying role evidence consistent.",
        "কাছাকাছি আরেকটি পদবি ও প্রতিষ্ঠানের ধরন যোগ করুন; তবে যে role-এর প্রমাণ দেখাচ্ছ সেটি যেন একই থাকে।",
      ),
    },
    {
      signal: l(
        "Applications receive no screening response",
        "আবেদন করেও screening-এর ডাক পাচ্ছ না",
      ),
      likelyGap: l(
        "Eligibility, targeting, first-page clarity or visible evidence may not match the role.",
        "যোগ্যতার শর্ত, role targeting, CV-এর প্রথম পাতার স্পষ্টতা বা চোখে পড়ার মতো কাজ—কোনোটি হয়তো role-এর সঙ্গে মিলছে না।",
      ),
      nextAction: l(
        "Recheck essential conditions and let a reviewer compare the CV and project links with the vacancy.",
        "মূল শর্তগুলো আবার পড়ুন এবং কাউকে দিয়ে vacancy-এর পাশে CV ও project link রেখে মিলিয়ে দেখান।",
      ),
    },
    {
      signal: l(
        "Assessments repeatedly stop progress",
        "Assessment-এ বারবার আটকে যাচ্ছেন",
      ),
      likelyGap: l(
        "A repeated coding, debugging, language, database or role-specific skill may need deliberate practice.",
        "Coding, debugging, language, database বা role-specific কোনো দক্ষতায় লক্ষ্য করে অনুশীলন দরকার হতে পারে।",
      ),
      nextAction: l(
        "Recreate the skill category with fresh practice—not confidential questions—and verify it under realistic time/tool conditions.",
        "গোপন interview question নকল না করে একই ধরনের নতুন problem অনুশীলন করুন; বাস্তব সময় ও tool-এর সীমার মধ্যে নিজেকে যাচাই করুন।",
      ),
    },
    {
      signal: l(
        "Technical conversations go poorly",
        "Technical আলোচনায় নিজেকে বোঝাতে পারছেন না",
      ),
      likelyGap: l(
        "Reasoning, project ownership or explanation may be weaker than memorized answers suggest.",
        "মুখস্থ উত্তরের আড়ালে reasoning, project ownership বা বোঝানোর দক্ষতা দুর্বল থাকতে পারে।",
      ),
      nextAction: l(
        "Record one mock walkthrough, identify where the explanation loses evidence and practise that exact transition.",
        "একটি mock walkthrough record করুন, কোথায় আপনার কথার সঙ্গে প্রমাণের যোগ হারিয়ে যায় তা খুঁজে বের করুন, তারপর ঠিক সেই অংশটি অনুশীলন করুন।",
      ),
    },
  ],
  pitfalls: [
    l(
      "Do not hide that a project was solo. Explain how you sought review and what collaboration skill you are building now.",
      "প্রজেক্ট একা করেছেন—এটি লুকানোর কিছু নয়। কীভাবে review নিয়েছেন এবং এখন দলগত কাজের কোন দক্ষতা গড়ছেন, সেটি বলুন।",
    ),
    l(
      "Do not let a good CGPA become either your entire identity or something you dismiss. Use it as one signal beside verifiable work.",
      "ভালো CGPA-কে নিজের পুরো পরিচয়ও বানাবেন না, আবার অপ্রয়োজনীয় ভেবেও ফেলে দেবেন না। যাচাই করা যায় এমন কাজের পাশে এটি আরেকটি ভালো signal।",
    ),
    l(
      "Do not confuse collecting courses with closing a hiring gap. Every study block should connect to a target task, project change or interview observation.",
      "Course জমালেই চাকরির ঘাটতি পূরণ হয় না। প্রতিটি শেখার সময়কে লক্ষ্য করা কাজ, প্রজেক্টের পরিবর্তন বা interview-এ দেখা দুর্বলতার সঙ্গে যুক্ত করুন।",
    ),
    l(
      "Do not compare your first application cycle with someone else's established career. Compare this week's evidence with last week's.",
      "নিজের প্রথম application cycle-কে অন্য কারও প্রতিষ্ঠিত career-এর সঙ্গে তুলনা করবেন না। এই সপ্তাহে আপনার কাজের প্রমাণ গত সপ্তাহের চেয়ে কতটা ভালো, সেটাই দেখুন।",
    ),
  ],
  thisWeek: l(
    "Choose one target role, inspect five suitable current postings and make one reviewed, tested improvement to the project you already understand. Then write the 90-second walkthrough. That is a complete first cycle—not a small achievement.",
    "একটি role বেছে নিন, উপযুক্ত পাঁচটি চলতি job posting দেখুন এবং নিজের বোঝা প্রজেক্টে review ও test করা একটি উন্নতি করুন। তারপর ৯০ সেকেন্ডের walkthrough লিখুন। এটিই একটি পূর্ণ প্রথম cycle—মোটেও ছোট অর্জন নয়।",
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
