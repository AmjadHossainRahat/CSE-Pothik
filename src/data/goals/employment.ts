import { l } from "@/lib/localized";
import type { GoalGuide } from "@/types/content";

export const employmentGoals: GoalGuide[] = [
  {
    id: "global-companies",
    title: l(
      "Global companies & advanced engineering",
      "Global company আর advanced engineering",
    ),
    summary: l(
      "Prepare for a role, not a logo: Google, Meta, Microsoft, Amazon, Tesla, SpaceX and NASA-related routes have different work and eligibility.",
      "Logo নয়, role-এর জন্য প্রস্তুতি: Google, Meta, Microsoft, Amazon, Tesla, SpaceX আর NASA-সম্পর্কিত route-এ কাজ ও eligibility আলাদা।",
    ),
    reality: l(
      "Ambition is useful; a company name is not a syllabus. NASA is a government agency and most NASA employment requires U.S. citizenship. Check each vacancy's location, work authorization, degree and experience conditions before investing in a company-specific route. No roadmap guarantees an interview or offer.",
      "বড় স্বপ্ন কাজে লাগে; company name কোনো syllabus নয়। NASA government agency; বেশিরভাগ NASA চাকরিতে U.S. citizenship লাগে। Company-specific পথে সময় দেওয়ার আগে vacancy-এর location, work authorization, degree আর experience condition দেখো। Roadmap interview বা offer নিশ্চিত করে না।",
    ),
    variants: [
      {
        title: l(
          "Software & product engineering",
          "Software আর product engineering",
        ),
        description: l(
          "Backend, frontend, mobile, data, security and UX/UI roles. Build role depth plus coding, testing and collaborative problem-solving; interview emphasis varies.",
          "Backend, frontend, mobile, data, security আর UX/UI role। Role-এর গভীরতা, coding, testing আর একসঙ্গে problem solve করা শেখো; interview emphasis আলাদা হতে পারে।",
        ),
      },
      {
        title: l(
          "Embedded, robotics & physical systems",
          "Embedded, robotics আর physical system",
        ),
        description: l(
          "For relevant Tesla, SpaceX or other engineering roles, inspect requirements for C/C++, hardware interfaces, control, real-time behavior and safety. A web portfolio alone may not demonstrate these.",
          "Tesla, SpaceX বা অন্য relevant role-এ C/C++, hardware interface, control, real-time behavior আর safety requirement দেখো। শুধু web portfolio দিয়ে এগুলো বোঝানো নাও যেতে পারে।",
        ),
      },
      {
        title: l(
          "Research & scientific computing",
          "Research আর scientific computing",
        ),
        description: l(
          "Match a specific scientific question, lab or research role. Mathematics, experiments, papers and sometimes advanced degrees matter more than a generic interview-question streak.",
          "নির্দিষ্ট scientific question, lab বা research role-এর সঙ্গে মিল দেখো। Generic interview streak-এর চেয়ে math, experiment, paper আর কখনো advanced degree বেশি প্রাসঙ্গিক।",
        ),
      },
    ],
    stages: [
      {
        id: "foundation",
        title: l("Choose a role and audit the gap", "Role বেছে gap দেখো"),
        why: l(
          "You need a feasible target before a preparation calendar.",
          "Preparation calendar-এর আগে বাস্তবসম্মত target দরকার।",
        ),
        tasks: [
          l(
            "Read three actual openings at a suitable level. Record repeated skills, responsibilities, location constraints and which requirements are essential versus preferred.",
            "উপযুক্ত level-এর তিনটি actual opening পড়ো। Common skill, responsibility, location constraint আর essential বনাম preferred requirement লেখো।",
          ),
          l(
            "Pick one career roadmap below. Practice a language, data structures, debugging, Git and the CS fundamentals your target uses; keep notes on concepts you cannot yet explain.",
            "নিচের একটি career roadmap নাও। একটি language, data structure, debugging, Git আর target-এর CS foundation practice করো; যা বোঝাতে পারো না লিখে রাখো।",
          ),
        ],
        evidence: l(
          "A one-page role brief and a small independently explained program. You know whether your target is currently eligible or needs an alternative route.",
          "এক পাতার role brief আর নিজে বোঝানো ছোট program। Target-এ এখন eligible কি না, না হলে বিকল্প route দরকার কি না জানো।",
        ),
        notYet: l(
          "Do not collect seven company-specific courses or start senior system-design memorization before basic coding is dependable.",
          "Basic coding নির্ভরযোগ্য হওয়ার আগে সাত company-এর course বা senior system-design মুখস্থ শুরু নয়।",
        ),
        sourceId: "google-careers",
      },
      {
        id: "evidence",
        title: l(
          "Build proof of engineering depth",
          "Engineering depth-এর প্রমাণ বানাও",
        ),
        why: l(
          "Solving exercises and owning useful work are complementary skills.",
          "Exercise solve আর useful কাজের দায়িত্ব নেওয়া—দুটিই দরকার।",
        ),
        tasks: [
          l(
            "Build one role-aligned artifact: a tested service, accessible mobile flow, evaluated model or measured embedded prototype. Explain a failure, trade-off and limitation.",
            "Role-matched artifact বানাও: tested service, accessible mobile flow, evaluated model বা measured embedded prototype। Failure, trade-off আর limitation বোঝাও।",
          ),
          l(
            "Get a review, respond in writing and improve the artifact. For research roles, reproduce a baseline before proposing a new method.",
            "Review নিয়ে লিখিতভাবে উত্তর দাও আর artifact উন্নত করো। Research role হলে নতুন method-এর আগে baseline reproduce করো।",
          ),
        ],
        evidence: l(
          "A runnable project, clear README, meaningful tests or evaluation, and one review-driven improvement you can defend.",
          "Runnable project, পরিষ্কার README, meaningful test বা evaluation আর review থেকে করা একটি improvement বোঝাতে পারো।",
        ),
        notYet: l(
          "A copied clone and inflated impact numbers are not evidence. Avoid publishing employer or user secrets.",
          "Copied clone আর বাড়িয়ে বলা impact evidence নয়। Employer বা user-এর secret প্রকাশ নয়।",
        ),
        sourceId: "microsoft-interviews",
      },
      {
        id: "application",
        title: l(
          "Practice the actual hiring process",
          "Actual hiring process practice করো",
        ),
        why: l(
          "Good work still needs clear explanation under the relevant interview conditions.",
          "ভালো কাজও relevant interview condition-এ পরিষ্কার করে বোঝাতে হয়।",
        ),
        tasks: [
          l(
            "For coding interviews, solve unfamiliar problems aloud: clarify, plan, implement, test and explain complexity. Review mistakes instead of counting solved questions.",
            "Coding interview-তে নতুন problem নিয়ে clarify, plan, implement, test আর complexity বোঝানো practice করো। Question count নয়, ভুল review করো।",
          ),
          l(
            "Prepare honest stories about collaboration, setbacks and decisions. Use role-specific mock interviews; confirm format, permitted tools and accommodations with the employer.",
            "Collaboration, setback আর decision-এর সৎ গল্প প্রস্তুত করো। Role-specific mock interview করো; format, permitted tool আর accommodation employer-এর কাছে নিশ্চিত করো।",
          ),
        ],
        evidence: l(
          "You can complete a realistic mock, explain the gaps and revise your plan; your CV links directly to verifiable work.",
          "Realistic mock শেষ করে gap বোঝাতে আর plan বদলাতে পারো; CV থেকে যাচাইযোগ্য কাজে যাওয়া যায়।",
        ),
        notYet: l(
          "Do not secretly use AI in an assessment or assume every role has the same algorithm and system-design rounds.",
          "Assessment-এ লুকিয়ে AI নয়; সব role-এ একই algorithm আর system-design round ধরে নিও না।",
        ),
        sourceId: "amazon-interviews",
      },
      {
        id: "adapt",
        title: l(
          "Apply broadly and use feedback",
          "বিভিন্ন জায়গায় apply করে feedback কাজে লাগাও",
        ),
        why: l(
          "A narrow employer list makes useful skills feel like a failed lottery ticket.",
          "খুব ছোট employer list থাকলে useful skill-ও ব্যর্থ lottery মনে হতে পারে।",
        ),
        tasks: [
          l(
            "Apply to suitable internships and roles across employer sizes. Verify the listing on the official site; ask for a referral only with a clear role and evidence, not spam.",
            "বিভিন্ন size-এর employer-এ suitable internship আর role-এ apply করো। Official site-এ listing যাচাই করো; clear role আর evidence নিয়ে referral চাও, spam নয়।",
          ),
          l(
            "Keep a private application log, revise one weak skill from feedback and continue shipping work. Consider local or remote experience as valid routes, not consolation prizes.",
            "নিজের application log রাখো, feedback-এর একটি weak skill ঠিক করো আর কাজ চালাও। Local বা remote experience-ও বাস্তব route, সান্ত্বনা পুরস্কার নয়।",
          ),
        ],
        evidence: l(
          "A targeted application pack, an alternative route and a concrete next practice task after each review cycle.",
          "Targeted application pack, বিকল্প route আর প্রতি review cycle-এর পর নির্দিষ্ট practice task।",
        ),
        notYet: l(
          "Do not promise yourself a fixed hiring date or treat rejection as a measure of personal worth.",
          "নির্দিষ্ট hiring date-এর promise বা rejection দিয়ে নিজের মূল্য বিচার নয়।",
        ),
        sourceId: "meta-careers",
      },
    ],
    pitfalls: [
      l(
        "Company prestige does not replace role fit, health, eligibility or learning quality.",
        "Company prestige দিয়ে role fit, স্বাস্থ্য, eligibility বা শেখার মানের বিকল্প হয় না।",
      ),
      l(
        "Competitive programming can strengthen problem solving; it is not the whole preparation for every role.",
        "Competitive programming problem solving বাড়াতে পারে; সব role-এর সম্পূর্ণ preparation নয়।",
      ),
      l(
        "Citizenship, work authorization and export-control conditions must be checked in current official postings; do not infer legal eligibility from this guide.",
        "Citizenship, work authorization আর export-control condition current official posting-এ দেখো; এই guide দিয়ে legal eligibility ধরে নিও না।",
      ),
    ],
    aiPractice: l(
      "Use AI to challenge your explanation or generate test cases, then verify them. Regularly code and reason unaided so your independent ability is visible. Follow each assessment's tool rules.",
      "AI দিয়ে explanation challenge বা test case তৈরি করিয়ে verify করো। নিয়মিত সাহায্য ছাড়া code আর reasoning করো যাতে নিজের ক্ষমতা বোঝা যায়। Assessment-এর tool rule মানো।",
    ),
    thisWeek: l(
      "Pick one role, annotate three vacancies and finish one small task from its foundation roadmap. Your first win is a clearer target—not an offer letter by Friday.",
      "একটি role বেছে তিন vacancy-তে note নাও আর foundation roadmap-এর ছোট একটি task শেষ করো। প্রথম জয় হলো target পরিষ্কার হওয়া—শুক্রবারের মধ্যে offer letter নয়।",
    ),
    careerIds: [
      "backend-engineering",
      "frontend-engineering",
      "mobile-app-development",
      "ux-ui-engineering",
      "data-engineering",
      "machine-learning",
      "cybersecurity",
      "devops-sre",
      "embedded-systems",
      "systems-research",
    ],
    relatedGoalIds: [
      "local-industry",
      "remote-employment",
      "research-publication",
    ],
    sourceIds: [
      "amazon-interviews",
      "microsoft-interviews",
      "google-careers",
      "meta-careers",
      "tesla-careers",
      "nasa-careers",
      "spacex-careers",
    ],
  },
  {
    id: "local-industry",
    title: l("Build a career in Bangladesh", "বাংলাদেশের industry-তে career"),
    summary: l(
      "Explore product teams, export services, fintech, telecom, enterprise IT and public-interest technology—then prepare for the actual work.",
      "Product team, export service, fintech, telecom, enterprise IT আর public-interest technology দেখো—তারপর actual কাজের প্রস্তুতি নাও।",
    ),
    reality: l(
      "Local does not mean easy or second-rate. Company category helps you ask better questions; it does not predict pay, culture or engineering quality. Verify vacancies and evaluate mentorship, ownership, working conditions and learning opportunities individually.",
      "Local মানে সহজ বা নিম্নমানের নয়। Company category ভালো প্রশ্ন করতে সাহায্য করে; pay, culture বা engineering quality নিশ্চিত করে না। Vacancy যাচাই করে mentorship, দায়িত্ব, কাজের পরিবেশ আর শেখার সুযোগ আলাদা করে দেখো।",
    ),
    variants: [
      {
        title: l("Product companies & startups", "Product company আর startup"),
        description: l(
          "Practice shipping a narrow feature, using feedback and maintaining it. Ask who reviews junior work and how product decisions are made.",
          "ছোট feature release, feedback ব্যবহার আর maintain করা practice করো। Junior-এর কাজ কে review করে আর product decision কীভাবে হয় জিজ্ঞেস করো।",
        ),
      },
      {
        title: l(
          "Services, outsourcing & export",
          "Service, outsourcing আর export",
        ),
        description: l(
          "Prepare for client requirements, readable delivery, documentation and changing scope. Confirm team language, review process and time-zone expectations.",
          "Client requirement, readable delivery, documentation আর scope change-এর প্রস্তুতি নাও। Team language, review process আর time-zone expectation জেনে নাও।",
        ),
      },
      {
        title: l("Banks & fintech", "Bank আর fintech"),
        description: l(
          "Emphasize correctness, data access boundaries, auditability and integration. Use fictional data; production financial systems are not student playgrounds.",
          "Correctness, data access boundary, auditability আর integration-এ জোর দাও। Fictional data ব্যবহার করো; production financial system practice-এর জায়গা নয়।",
        ),
      },
      {
        title: l("Telecom & enterprise IT", "Telecom আর enterprise IT"),
        description: l(
          "Explore networks, operations, integration, reliability and internal tools. Distinguish engineering roles from support and administration in each posting.",
          "Network, operation, integration, reliability আর internal tool দেখো। Posting-এ engineering, support আর administration role আলাদা করো।",
        ),
      },
      {
        title: l(
          "Government & public-interest technology",
          "Government আর public-interest technology",
        ),
        description: l(
          "Check each circular's degree, examination and eligibility rules. For NGOs and service delivery, learn accessibility, field constraints and responsible data handling.",
          "প্রতিটি circular-এর degree, examination আর eligibility rule দেখো। NGO আর service delivery-তে accessibility, মাঠের constraint আর responsible data handling শেখো।",
        ),
      },
    ],
    stages: [
      {
        id: "foundation",
        title: l(
          "Choose a work category, then a role",
          "কাজের category, তারপর role বাছো",
        ),
        why: l(
          "An industry label is too broad to tell you what to study tomorrow.",
          "Industry label এত broad যে আগামীকাল কী পড়বে বলে না।",
        ),
        tasks: [
          l(
            "Compare three junior/internship postings from official employer pages. Note tasks, required stack, degree conditions and application channel; check the closing date.",
            "Official employer page থেকে তিন junior/internship posting compare করো। Task, required stack, degree condition, application channel আর closing date লেখো।",
          ),
          l(
            "Use one career roadmap for the repeated fundamentals. Practice reading technical English and explaining work clearly in Bangla and English.",
            "বারবার আসা foundation-এর জন্য একটি career roadmap নাও। Technical English পড়া আর Bangla/English-এ কাজ বোঝানো practice করো।",
          ),
        ],
        evidence: l(
          "One target role, a short employer comparison and a practical learning gap list.",
          "এক target role, ছোট employer comparison আর practical learning gap list।",
        ),
        notYet: l(
          "Do not rank employers from rumors or treat every advertised technology as a prerequisite.",
          "গুজব দিয়ে employer ranking বা advertised সব technology-কে prerequisite ধরা নয়।",
        ),
        sourceId: "bjit-careers",
      },
      {
        id: "evidence",
        title: l(
          "Deliver a relevant small project",
          "Relevant ছোট project deliver করো",
        ),
        why: l(
          "A reviewer needs to see whether you can finish and explain useful work.",
          "Reviewer দেখতে চান useful কাজ শেষ আর explain করতে পারো কি না।",
        ),
        tasks: [
          l(
            "Choose a realistic local use case: a bilingual service form, stock ledger, appointment flow or offline mobile list. Use synthetic data and keep scope small.",
            "Realistic local use case নাও: bilingual service form, stock ledger, appointment flow বা offline mobile list। Synthetic data আর ছোট scope রাখো।",
          ),
          l(
            "Add validation, tests, setup instructions and one failure-recovery path. Ask a peer to run it from the README and fix unclear instructions.",
            "Validation, test, setup instruction আর একটি failure-recovery path দাও। Peer-কে README দিয়ে run করতে দিয়ে অস্পষ্ট instruction ঠিক করো।",
          ),
        ],
        evidence: l(
          "A reviewer can run the project, see your contribution and reproduce one test or bug fix.",
          "Reviewer project run, তোমার contribution দেখা আর একটি test বা bug fix reproduce করতে পারেন।",
        ),
        notYet: l(
          "No real bank credentials, customer data or unpaid production project disguised as a portfolio exercise.",
          "Real bank credential, customer data বা portfolio exercise নামে unpaid production project নয়।",
        ),
        sourceId: "microsoft-interviews",
      },
      {
        id: "application",
        title: l(
          "Prepare for interviews and evaluate the team",
          "Interview প্রস্তুতি আর team যাচাই",
        ),
        why: l(
          "Hiring is a two-way check, not just a coding exam.",
          "Hiring দুই দিকের যাচাই, শুধু coding exam নয়।",
        ),
        tasks: [
          l(
            "Practice coding/debugging, basic databases or your role's core tasks, plus a short project walkthrough. Tailor your CV to evidence, not skill-bar graphics.",
            "Coding/debugging, basic database বা role-এর core task আর ছোট project walkthrough practice করো। CV-তে evidence দাও, skill-bar graphic নয়।",
          ),
          l(
            "Ask about supervision, code review, probation, hours, support duties, pay terms and the written role. Clarify take-home scope before doing a large assignment.",
            "Supervision, code review, probation, hours, support duty, pay terms আর written role জিজ্ঞেস করো। বড় take-home-এর আগে scope পরিষ্কার করো।",
          ),
        ],
        evidence: l(
          "A targeted CV, practiced walkthrough and written questions to assess the opportunity.",
          "Targeted CV, practiced walkthrough আর opportunity যাচাইয়ের লিখিত প্রশ্ন।",
        ),
        notYet: l(
          "Do not pay a recruiter to secure an interview or accept vague terms solely because the title sounds impressive.",
          "Interview নিশ্চিত করতে recruiter-কে টাকা বা impressive title দেখে vague terms গ্রহণ নয়।",
        ),
        sourceId: "bjit-careers",
      },
      {
        id: "adapt",
        title: l(
          "Turn the first role into learning",
          "প্রথম role-কে শেখার সুযোগ করো",
        ),
        why: l(
          "Reliable small contributions create options beyond the first job title.",
          "নির্ভরযোগ্য ছোট contribution প্রথম job title-এর বাইরেও সুযোগ তৈরি করে।",
        ),
        tasks: [
          l(
            "When joining, agree on a bounded first task, review expectations and who to ask for help. Learn the system before proposing a rewrite.",
            "যোগ দিলে ছোট প্রথম task, review expectation আর সাহায্যের মানুষ ঠিক করো। Rewrite প্রস্তাবের আগে system শেখো।",
          ),
          l(
            "Write concise updates, document decisions and reflect on one improvement each week. Keep confidential work private and describe public contributions honestly.",
            "ছোট update, decision note আর প্রতি সপ্তাহের একটি improvement লেখো। Confidential কাজ private রাখো; public contribution সৎভাবে বলো।",
          ),
        ],
        evidence: l(
          "A completed reviewed task and a clear account of what you learned—not just time spent at a company.",
          "Reviewed task শেষ আর কী শিখেছ তার পরিষ্কার বিবরণ—শুধু company-তে সময় কাটানো নয়।",
        ),
        notYet: l(
          "Do not compare your first month to someone else's fifth year.",
          "নিজের প্রথম মাসকে অন্যের পঞ্চম বছরের সঙ্গে তুলনা নয়।",
        ),
        sourceId: "gitlab-communication",
      },
    ],
    pitfalls: [
      l(
        "A referral helps discovery; it does not replace competence or guarantee selection.",
        "Referral পরিচিত হতে সাহায্য করে; competence-এর বিকল্প বা selection guarantee নয়।",
      ),
      l(
        "One person's experience is a clue, not proof about every team in a company.",
        "একজনের experience সূত্র হতে পারে; company-এর সব team-এর প্রমাণ নয়।",
      ),
      l(
        "Read written employment terms and seek qualified local advice for legal questions; this is educational guidance.",
        "Written employment terms পড়ো; legal প্রশ্নে qualified local advice নাও। এটি educational guidance।",
      ),
    ],
    aiPractice: l(
      "Use AI to review practice work and improve explanations; never upload employer code or client data without authorization. Be able to debug your own submission without AI.",
      "Practice কাজ review আর explanation উন্নত করতে AI নাও; অনুমতি ছাড়া employer code বা client data upload নয়। নিজের submission AI ছাড়া debug করতে পারো।",
    ),
    thisWeek: l(
      "Compare three suitable postings and build one tiny feature that appears in their work. A reviewed, working feature beats another week of collecting stack names.",
      "তিন suitable posting compare করে তাদের কাজের একটি tiny feature বানাও। আরেক সপ্তাহ stack-এর নাম জমানোর চেয়ে reviewed, working feature ভালো evidence।",
    ),
    careerIds: [
      "backend-engineering",
      "frontend-engineering",
      "mobile-app-development",
      "ux-ui-engineering",
      "data-engineering",
      "cybersecurity",
      "devops-sre",
      "technical-product-leadership",
    ],
    relatedGoalIds: ["global-companies", "remote-employment", "tech-business"],
    sourceIds: ["bjit-careers", "microsoft-interviews", "gitlab-communication"],
  },
  {
    id: "remote-employment",
    title: l("Remote employment", "Remote চাকরির প্রস্তুতি"),
    summary: l(
      "Become dependable without sharing an office: role competence, written collaboration, visible delivery and realistic location constraints.",
      "এক office-এ না থেকেও dependable হও: role competence, লিখিত collaboration, দৃশ্যমান delivery আর বাস্তব location constraint।",
    ),
    reality: l(
      "Remote describes where a team works, not a beginner skill or permission to work from any country. Employment and contractor arrangements differ. Verify Bangladesh eligibility, time-zone overlap, equipment, payment and contract terms with the employer; this guide is not legal or tax advice.",
      "Remote হলো team কোথা থেকে কাজ করে, beginner skill বা যেকোনো দেশ থেকে কাজের অনুমতি নয়। Employment আর contractor arrangement আলাদা। Employer-এর কাছে Bangladesh eligibility, time-zone overlap, equipment, payment আর contract terms যাচাই করো; এটি legal বা tax advice নয়।",
    ),
    variants: [
      {
        title: l("Remote employee", "Remote employee"),
        description: l(
          "A continuing role inside a team. Ask how the employer can hire in your country and what support, benefits and hours apply.",
          "Team-এর মধ্যে চলমান role। তোমার দেশে কীভাবে hire করবে, support, benefit আর hours কী—জেনে নাও।",
        ),
      },
      {
        title: l(
          "Long-term independent contractor",
          "Long-term independent contractor",
        ),
        description: l(
          "May resemble team employment day-to-day, but contractual duties and protections differ. Read the actual agreement and seek qualified advice when needed.",
          "দৈনন্দিন কাজে employment-এর মতো লাগলেও contractual duty আর protection আলাদা। Actual agreement পড়ো; প্রয়োজন হলে qualified advice নাও।",
        ),
      },
    ],
    stages: [
      {
        id: "foundation",
        title: l("Make one role dependable", "একটি role-এ dependable হও"),
        why: l(
          "Remote teams need work they can trust, not a special remote technology stack.",
          "Remote team-এর দরকার ভরসাযোগ্য কাজ, বিশেষ remote technology stack নয়।",
        ),
        tasks: [
          l(
            "Choose a career roadmap and finish a small project with tests, setup documentation and a demonstrated bug fix.",
            "Career roadmap বেছে test, setup documentation আর দেখানো bug fix-সহ ছোট project শেষ করো।",
          ),
          l(
            "Read eligible junior openings and identify whether they expect synchronous hours, written English, production experience or particular tools.",
            "Eligible junior opening পড়ে synchronous hour, written English, production experience আর tool expectation দেখো।",
          ),
        ],
        evidence: l(
          "A runnable artifact you can explain, plus a realistic list of roles open to your location and level.",
          "নিজে বোঝানো runnable artifact আর তোমার location/level-এ খোলা role-এর realistic list।",
        ),
        notYet: l(
          "Do not buy a remote-job course or assume remote roles skip interviews and experience requirements.",
          "Remote-job course কেনা বা remote role-এ interview/experience লাগে না ধরে নেওয়া নয়।",
        ),
        sourceId: "gitlab-communication",
      },
      {
        id: "evidence",
        title: l(
          "Practice asynchronous collaboration",
          "Asynchronous collaboration practice করো",
        ),
        why: l(
          "Clear written context lets another person move work forward without waiting for you.",
          "পরিষ্কার লিখিত context থাকলে অন্যজন তোমার জন্য অপেক্ষা না করে এগোতে পারেন।",
        ),
        tasks: [
          l(
            "Work with a peer through an issue and pull request. Write the problem, plan, acceptance criteria, changes and evidence; respond to review respectfully.",
            "Peer-এর সঙ্গে issue আর pull request দিয়ে কাজ করো। Problem, plan, acceptance criteria, change আর evidence লেখো; review-এর উত্তর সম্মান রেখে দাও।",
          ),
          l(
            "Send a concise status update with progress, blockers, attempted fixes and a specific question. Practice a handoff that survives a full day offline.",
            "Progress, blocker, tried fix আর specific question-সহ ছোট status update দাও। এক দিন offline থাকলেও চলে—এমন handoff practice করো।",
          ),
        ],
        evidence: l(
          "A reviewable change and handoff that a peer can continue without a live explanation.",
          "Reviewable change আর এমন handoff যা peer live explanation ছাড়াই চালাতে পারেন।",
        ),
        notYet: l(
          "Always-online messaging is not the same as reliability. Do not confuse fluent accents with clear communication.",
          "সবসময় online থাকা reliability নয়। Fluent accent-কে clear communication ভেবো না।",
        ),
        sourceId: "gitlab-communication",
      },
      {
        id: "application",
        title: l(
          "Demonstrate work and verify the offer",
          "কাজ দেখাও আর offer যাচাই করো",
        ),
        why: l(
          "A remote search needs both relevant evidence and protection from impersonation.",
          "Remote search-এ relevant evidence আর impersonation থেকে সুরক্ষা—দুটিই দরকার।",
        ),
        tasks: [
          l(
            "Tailor a short application around two relevant examples. Prepare coding or role-specific interviews and a concise screen-share walkthrough of your work.",
            "দুটি relevant example দিয়ে ছোট application সাজাও। Coding বা role-specific interview আর সংক্ষিপ্ত screen-share walkthrough practice করো।",
          ),
          l(
            "Verify the vacancy and recruiter through official channels. Clarify country eligibility, overlap hours, equipment and written terms; never pay an upfront recruitment fee or share credentials.",
            "Official channel-এ vacancy আর recruiter যাচাই করো। Country eligibility, overlap hour, equipment আর written terms পরিষ্কার করো; upfront recruitment fee বা credential দিও না।",
          ),
        ],
        evidence: l(
          "A tailored application, practiced walkthrough and verified opportunity with unresolved terms explicitly listed.",
          "Tailored application, practiced walkthrough আর unresolved term লেখা verified opportunity।",
        ),
        notYet: l(
          "Do not accept indefinite free trial work or a request to buy equipment from an unknown seller.",
          "অনির্দিষ্ট free trial work বা অপরিচিত seller থেকে equipment কেনার অনুরোধ গ্রহণ নয়।",
        ),
        sourceId: "microsoft-interviews",
      },
      {
        id: "adapt",
        title: l(
          "Build a sustainable working rhythm",
          "টেকসই working rhythm বানাও",
        ),
        why: l(
          "Remote work should not mean invisible work or endless work.",
          "Remote মানে অদৃশ্য কাজ বা শেষহীন কাজ নয়।",
        ),
        tasks: [
          l(
            "Agree on overlap hours, response expectations, security practices and escalation routes. Test your connectivity and backup plan within your means.",
            "Overlap hour, response expectation, security practice আর escalation route ঠিক করো। সামর্থ্যের মধ্যে connectivity আর backup plan test করো।",
          ),
          l(
            "Make completed work, risks and decisions visible. Ask for feedback, protect rest time and renegotiate an unsustainable schedule early.",
            "Completed work, risk আর decision দৃশ্যমান রাখো। Feedback চাও, বিশ্রামের সময় রাখো, অসহনীয় schedule হলে আগে আলোচনা করো।",
          ),
        ],
        evidence: l(
          "A repeatable weekly handoff and feedback loop that teammates can rely on.",
          "প্রতি সপ্তাহে করা যায় এমন handoff আর feedback loop, যাতে teammate ভরসা করতে পারেন।",
        ),
        notYet: l(
          "Do not imitate another team's handbook blindly; agree on your team's actual conventions.",
          "অন্য team-এর handbook অন্ধভাবে নয়; নিজের team-এর actual convention ঠিক করো।",
        ),
        sourceId: "gitlab-communication",
      },
    ],
    pitfalls: [
      l(
        "Entry-level remote work exists, but competition and supervision needs vary; build evidence rather than assuming easy access.",
        "Entry-level remote কাজ আছে, তবে competition আর supervision need আলাদা; সহজ access ধরে না নিয়ে evidence বানাও।",
      ),
      l(
        "Freelancing involves finding and scoping clients; remote employment is a different preparation problem.",
        "Freelancing-এ client খোঁজা আর scope ঠিক করা লাগে; remote employment আলাদা preparation।",
      ),
      l(
        "Never send identity documents to an unverified recruiter or publish private team discussions as portfolio evidence.",
        "Unverified recruiter-কে identity document বা portfolio-তে private team discussion দিও না।",
      ),
    ],
    aiPractice: l(
      "Draft clearer updates with AI using non-sensitive information, then check accuracy and ownership. Practice independent work; teammates need your judgment when generated suggestions fail.",
      "Non-sensitive তথ্য দিয়ে AI-তে update পরিষ্কার করো; accuracy আর দায়িত্ব যাচাই করো। নিজে কাজ practice করো; generated suggestion ভুল হলে team-এর তোমার judgment দরকার।",
    ),
    thisWeek: l(
      "Pair with a peer on one issue. Finish it through a written review and handoff. That is a stronger first remote-work rehearsal than rewriting your profile headline.",
      "Peer-এর সঙ্গে একটি issue নাও। Written review আর handoff দিয়ে শেষ করো। Profile headline আবার লেখার চেয়ে এটি ভালো প্রথম remote-work rehearsal।",
    ),
    careerIds: [
      "backend-engineering",
      "frontend-engineering",
      "mobile-app-development",
      "ux-ui-engineering",
      "data-engineering",
      "machine-learning",
      "cybersecurity",
      "devops-sre",
      "technical-product-leadership",
    ],
    relatedGoalIds: ["local-industry", "global-companies", "freelancing"],
    sourceIds: ["gitlab-communication", "microsoft-interviews"],
  },
];
