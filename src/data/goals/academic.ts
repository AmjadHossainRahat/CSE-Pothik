import { l } from "@/lib/localized";
import type { GoalGuide } from "@/types/content";

export const academicGoals: GoalGuide[] = [
  {
    id: "study-abroad",
    title: l("Study abroad", "বিদেশে উচ্চশিক্ষার প্রস্তুতি"),
    summary: l(
      "Choose between taught study and research, then build academic readiness, program fit and a financially realistic application plan.",
      "Coursework-কেন্দ্রিক পড়াশোনা নাকি research—উদ্দেশ্যটি আগে ঠিক করুন। তারপর academic preparation, program-এর সঙ্গে মিল এবং সামর্থ্যের মধ্যে application plan সাজান।",
    ),
    reality: l(
      "There is no universal CGPA, test score or publication checklist for all universities. Each program sets its rules. Admission, funding and visa decisions are separate; a strong profile guarantees none of them. Use official program and immigration sources for current requirements, not social-media promises.",
      "সব university-র জন্য এক CGPA, test score বা publication checklist নেই; প্রতিটি program-এর নিয়ম আলাদা। Admission, funding ও visa তিনটি পৃথক সিদ্ধান্ত—ভালো profile থাকলেও কোনোটি নিশ্চিত নয়। চলতি শর্ত জানতে program ও immigration-এর অফিসিয়াল source দেখুন, social media-র নিশ্চয়তা নয়।",
    ),
    variants: [
      {
        title: l(
          "Taught / professional master's",
          "Taught / professional master's",
        ),
        description: l(
          "Prioritize prerequisite coursework, curriculum fit, learning outcomes and total cost. A research supervisor or paper is not automatically required.",
          "Prerequisite coursework, curriculum fit, learning outcome আর মোট খরচ দেখুন। Research supervisor বা paper সবসময় বাধ্যতামূলক নয়।",
        ),
      },
      {
        title: l("Research master's", "Research master's"),
        description: l(
          "Check the thesis structure, supervisor-matching process, methods preparation and funding model for that program.",
          "Program-এর thesis structure, supervisor-matching process, methods preparation আর funding model দেখুন।",
        ),
      },
      {
        title: l("PhD", "PhD"),
        description: l(
          "Look for a research question, faculty fit and evidence that you can investigate independently. Check whether contact before applying is encouraged, optional or discouraged.",
          "Research question, faculty fit আর independent investigation-এর evidence দেখুন। Apply-এর আগে contact উৎসাহিত, optional না নিরুৎসাহিত—যাচাই করুন।",
        ),
      },
    ],
    stages: [
      {
        id: "foundation",
        title: l(
          "Choose the purpose and close academic gaps",
          "উদ্দেশ্য বেছে academic gap কমান",
        ),
        why: l(
          "A destination country is not enough to choose a useful degree.",
          "শুধু destination country দিয়ে useful degree বাছা যায় না।",
        ),
        tasks: [
          l(
            "Write why you want this degree and what you want to do afterwards. Compare a taught and a research route before deciding.",
            "এই degree কেন আর পরে কী করতে চান লিখুন। সিদ্ধান্তের আগে taught আর research route compare করুন।",
          ),
          l(
            "Audit transcripts against target prerequisites. Strengthen relevant math, CS foundations, technical reading and writing; ask a faculty mentor about gaps you cannot judge alone.",
            "Target prerequisite-এর সঙ্গে transcript মেলান। Relevant math, CS foundation, technical reading আর writing শক্ত করুন; নিজে বিচার না করতে পারা gap নিয়ে faculty mentor-এর সঙ্গে কথা বলুন।",
          ),
        ],
        evidence: l(
          "A clear degree purpose, prerequisite gap list and one piece of work showing academic readiness.",
          "Degree-এর পরিষ্কার উদ্দেশ্য, prerequisite gap list আর academic readiness দেখানো একটি কাজ।",
        ),
        notYet: l(
          "Do not book every standardized test before checking which tests your programs accept or require.",
          "Program কোন test নেয় বা চায় দেখার আগে সব standardized test বুক নয়।",
        ),
        sourceId: "berkeley-admissions",
      },
      {
        id: "evidence",
        title: l(
          "Build a program and funding shortlist",
          "Program আর funding shortlist বানান",
        ),
        why: l(
          "A feasible shortlist balances fit, uncertainty and actual costs.",
          "Feasible shortlist-এ fit, uncertainty আর actual cost একসঙ্গে দেখতে হয়।",
        ),
        tasks: [
          l(
            "For each program record curriculum/lab fit, prerequisites, official deadline with time zone, documents, test validity, tuition, living costs and funding conditions. Date every check.",
            "প্রতি program-এর curriculum/lab fit, prerequisite, time zone-সহ official deadline, document, test validity, tuition, living cost আর funding condition লিখুন। Check-এর date রাখুন।",
          ),
          l(
            "For research routes, read faculty work and write a specific fit note. Follow the program's contact guidance; avoid mass emails. Investigate scholarships through official calls.",
            "Research route-এ faculty-এর কাজ পড়ে specific fit note লিখুন। Program-এর contact guidance মানুন; mass email নয়। Official call থেকে scholarship দেখুন।",
          ),
        ],
        evidence: l(
          "A small comparison sheet with official links, costs, funding uncertainty and deadlines—not a ranking screenshot.",
          "Official link, cost, funding uncertainty আর deadline-সহ ছোট comparison sheet—ranking screenshot নয়।",
        ),
        notYet: l(
          "Do not assume an advertised scholarship covers every expense or that admission automatically brings funding.",
          "Advertised scholarship সব expense দেয় বা admission মানেই funding—ধরে নেবেন না।",
        ),
        sourceId: "erasmus-mundus",
      },
      {
        id: "application",
        title: l(
          "Prepare a coherent application",
          "সুসংগত application প্রস্তুত করুন",
        ),
        why: l(
          "Documents should support the same honest academic story.",
          "সব document যেন একই সৎ academic story সমর্থন করে।",
        ),
        tasks: [
          l(
            "Ask recommenders early and give them your work, goals and deadlines. Draft a specific statement showing preparation, fit and future questions; distinguish your contribution in team work.",
            "Recommender-কে আগে বলুন; নিজের কাজ, goal আর deadline দিন। Preparation, fit আর future question-সহ specific statement লিখুন; team work-এ নিজের contribution আলাদা করুন।",
          ),
          l(
            "Arrange transcripts and required tests in time, follow each portal's instructions and have a trusted reviewer check consistency. Keep submission confirmations and funding applications separately.",
            "Transcript আর required test সময়মতো করুন, portal instruction মানুন, trusted reviewer দিয়ে consistency দেখান। Submission confirmation আর funding application আলাদা রাখুন।",
          ),
        ],
        evidence: l(
          "A program-specific, reviewed application package with a document checklist and no invented achievements.",
          "Program-specific reviewed application package, document checklist আর কোনো বানানো achievement নয়।",
        ),
        notYet: l(
          "Do not recycle a generic statement, invent supervisor agreement or pay for ghostwritten academic work.",
          "Generic statement recycle, supervisor-এর agreement বানানো বা ghostwritten academic কাজ কেনা নয়।",
        ),
        sourceId: "berkeley-admissions",
      },
      {
        id: "adapt",
        title: l(
          "Compare offers and keep a fallback",
          "Offer compare আর fallback রাখুন",
        ),
        why: l(
          "Acceptance is the start of a practical decision, not the end of one.",
          "Acceptance practical decision-এর শুরু, শেষ নয়।",
        ),
        tasks: [
          l(
            "Read written funding terms, duration, duties, renewal conditions and uncovered costs. Ask the program to clarify anything uncertain before committing money.",
            "Written funding terms, duration, duty, renewal condition আর uncovered cost পড়ুন। টাকা দেওয়ার আগে uncertainty program-এর কাছে পরিষ্কার করুন।",
          ),
          l(
            "Check the relevant government's current visa process and official university arrival guidance. Keep a local study/work/research alternative while awaiting decisions.",
            "Relevant government-এর current visa process আর official university arrival guidance দেখুন। Decision-এর অপেক্ষায় local study/work/research alternative রাখুন।",
          ),
        ],
        evidence: l(
          "An offer comparison with verified costs and conditions, a document plan and a viable alternative.",
          "Verified cost আর condition-সহ offer comparison, document plan আর বাস্তব বিকল্প।",
        ),
        notYet: l(
          "Do not resign, buy non-refundable travel or treat an informal funding email as a finalized award without verification.",
          "যাচাই ছাড়া resign, non-refundable travel কেনা বা informal funding email-কে finalized award ভাবা নয়।",
        ),
        sourceId: "erasmus-mundus",
      },
    ],
    pitfalls: [
      l(
        "A publication may help demonstrate research readiness but is neither universally required nor a substitute for fit and fundamentals.",
        "Publication research readiness দেখাতে পারে; সব জায়গায় বাধ্যতামূলক নয়, fit আর foundation-এর বিকল্পও নয়।",
      ),
      l(
        "Application, testing and visa costs can be significant. Free guidance does not mean the process is free.",
        "Application, test আর visa cost বড় হতে পারে। Guidance free মানে process free নয়।",
      ),
      l(
        "Do not generalize one university's rules to another; requirements and funding can change each intake.",
        "এক university-এর নিয়ম অন্যটিতে ধরুন না; intake অনুযায়ী requirement আর funding বদলাতে পারে।",
      ),
    ],
    aiPractice: l(
      "Use AI to check clarity or rehearse questions, not invent achievements, references or faculty interests. Verify claims against original sources and follow each institution's application and AI-use rules.",
      "Clarity check বা question rehearsal-এ AI নিন; achievement, reference বা faculty interest বানাতে নয়। Original source দিয়ে claim যাচাই আর institution-এর application/AI rule মানুন।",
    ),
    thisWeek: l(
      "Compare two real programs of different types, list your missing prerequisites and read one relevant faculty paper or course outline. Clarity now can save months of unfocused preparation.",
      "আলাদা ধরনের দুই real program compare, missing prerequisite লিখুন আর relevant faculty paper বা course outline পড়ুন। এখন পরিষ্কার হলে কয়েক মাসের এলোমেলো preparation বাঁচে।",
    ),
    careerIds: [
      "systems-research",
      "machine-learning",
      "ai-engineering",
      "data-engineering",
      "data-analytics-bi",
      "embedded-systems",
      "cybersecurity",
      "application-security",
      "ux-ui-engineering",
      "network-engineering",
      "hardware-engineering",
    ],
    relatedGoalIds: [
      "research-publication",
      "global-companies",
      "local-industry",
    ],
    sourceIds: ["berkeley-admissions", "erasmus-mundus"],
  },
  {
    id: "research-publication",
    title: l(
      "Thesis, research & publication",
      "Thesis, research আর publication",
    ),
    summary: l(
      "Learn to ask a defensible question, evaluate evidence and communicate a contribution. Aim for quality—not a promised world-class journal.",
      "যাচাই করা যায় এমন প্রশ্ন করতে, প্রমাণ বিচার করতে এবং নিজের অবদান পরিষ্কারভাবে বোঝাতে শিখুন। লক্ষ্য হোক কাজের মান; ‘world-class journal নিশ্চিত’ ধরনের প্রতিশ্রুতি নয়।",
    ),
    reality: l(
      "A strong thesis is a research process, not a paper-shaped document. In computing, respected conferences as well as journals can be relevant. Venue quality depends on the field and review standards, not just a metric. Acceptance is never guaranteed; honest negative results can still teach you a great deal.",
      "ভালো thesis শুধু paper-এর মতো দেখতে একটি document নয়; এটি একটি সৎ research process। Computing-এ সম্মানজনক conference ও journal—দুটিই প্রাসঙ্গিক হতে পারে। Venue-এর মান field ও review standard দিয়ে বুঝুন, শুধু একটি metric দিয়ে নয়। Acceptance নিশ্চিত নয়; সৎ negative result থেকেও মূল্যবান শেখা সম্ভব।",
    ),
    variants: [
      {
        title: l(
          "First thesis / research apprenticeship",
          "প্রথম thesis / research apprenticeship",
        ),
        description: l(
          "Start with a supervisor, a bounded question and a reproducible baseline. Learn methods before optimizing publication count.",
          "Supervisor, bounded question আর reproducible baseline দিয়ে শুরু। Publication count বাড়ানোর আগে method শিখুন।",
        ),
      },
      {
        title: l(
          "Journal or conference submission",
          "Journal বা conference submission",
        ),
        description: l(
          "After evidence is solid, choose a venue whose scope matches the contribution. Read recent accepted work, ethics rules, author instructions and fees.",
          "Evidence শক্ত হলে contribution-এর scope মেলে এমন venue নিন। Recent accepted work, ethics rule, author instruction আর fee পড়ুন।",
        ),
      },
    ],
    stages: [
      {
        id: "foundation",
        title: l(
          "Find a question small enough to test",
          "Test করা যায় এমন ছোট প্রশ্ন খুঁজুন",
        ),
        why: l(
          "A fashionable topic is not yet a research question.",
          "Trending topic এখনো research question নয়।",
        ),
        tasks: [
          l(
            "With a supervisor, choose a narrow area and read a small set of relevant papers. Record each question, method, data, result, limitation and open issue; verify every citation.",
            "Supervisor-এর সঙ্গে narrow area নিয়ে অল্প কিছু relevant paper পড়ুন। Question, method, data, result, limitation আর open issue লিখুন; citation যাচাই করুন।",
          ),
          l(
            "Write a testable question and a feasibility plan covering time, compute, data access and permissions. Get institutional ethics approval when required before collecting participant or sensitive data.",
            "Testable question আর time, compute, data access, permission-সহ feasibility plan লিখুন। Participant বা sensitive data নেওয়ার আগে প্রয়োজনীয় institutional ethics approval নিন।",
          ),
        ],
        evidence: l(
          "A short literature matrix and proposal with a question, baseline, evaluation plan and ethical constraints.",
          "ছোট literature matrix আর question, baseline, evaluation plan, ethical constraint-সহ proposal।",
        ),
        notYet: l(
          "Do not start with 'add AI to something' or collect sensitive data first and ask about consent later.",
          "‘কিছুতে AI যোগ করি’ দিয়ে শুরু বা sensitive data আগে নিয়ে consent পরে ভাবা নয়।",
        ),
        sourceId: "gov-research",
      },
      {
        id: "evidence",
        title: l(
          "Reproduce, compare and test assumptions",
          "Reproduce, compare আর assumption test করুন",
        ),
        why: l(
          "You need to know what your result is being compared against.",
          "Result কিসের সঙ্গে compare হচ্ছে তা জানা দরকার।",
        ),
        tasks: [
          l(
            "Reproduce a baseline on a permitted dataset or controlled system. Record environment, versions, seeds where relevant, preprocessing and evaluation; separate development from final evaluation data.",
            "Permitted dataset বা controlled system-এ baseline reproduce করুন। Environment, version, relevant seed, preprocessing আর evaluation লিখুন; development আর final evaluation data আলাদা রাখুন।",
          ),
          l(
            "Change one justified factor, compare fairly and inspect failures. Use field-appropriate statistics, uncertainty, ablations or qualitative analysis with your supervisor's guidance.",
            "যুক্তিসংগত একটি factor বদলে fair comparison আর failure দেখুন। Supervisor-এর guidance-এ field-appropriate statistics, uncertainty, ablation বা qualitative analysis করুন।",
          ),
        ],
        evidence: l(
          "A reproducible baseline, documented comparison and limits on what the findings actually support.",
          "Reproducible baseline, documented comparison আর finding কী সমর্থন করে তার সীমা।",
        ),
        notYet: l(
          "Do not chase only the best score, leak test data or hide negative runs and inconvenient observations.",
          "শুধু best score, test data leakage বা negative run আর inconvenient observation লুকানো নয়।",
        ),
        sourceId: "acm-artifacts",
      },
      {
        id: "application",
        title: l(
          "Write, defend and choose a venue",
          "লিখুন, defend করুন আর venue বাছুন",
        ),
        why: l(
          "A reader should be able to trace your claims back to evidence.",
          "Reader যেন claim থেকে evidence খুঁজে পান।",
        ),
        tasks: [
          l(
            "Write the problem, related work, method, evaluation, findings and limitations. Distinguish your contribution; agree on authorship with collaborators and preserve source attribution.",
            "Problem, related work, method, evaluation, finding আর limitation লিখুন। নিজের contribution আলাদা করুন; collaborator-এর সঙ্গে authorship ঠিক আর source attribution রাখুন।",
          ),
          l(
            "Rehearse a thesis defense with critical questions. For publication, inspect venue scope, editorial/review process, recent work, submission rules and costs with your supervisor; do not select by a flattering invitation.",
            "Critical question নিয়ে thesis defense rehearsal করুন। Publication-এর জন্য supervisor-এর সঙ্গে venue scope, editorial/review process, recent work, submission rule আর cost দেখুন; প্রশংসার invitation দেখে নয়।",
          ),
        ],
        evidence: l(
          "A reviewed manuscript or thesis, an artifact package and a venue-fit explanation with honest limitations.",
          "Reviewed manuscript বা thesis, artifact package আর honest limitation-সহ venue-fit explanation।",
        ),
        notYet: l(
          "No purchased authorship, fabricated citations, paper mills or simultaneous submissions where venue rules prohibit them.",
          "কেনা authorship, fabricated citation, paper mill বা venue rule নিষেধ করলে simultaneous submission নয়।",
        ),
        sourceId: "acm-authorship",
      },
      {
        id: "adapt",
        title: l(
          "Respond to review and make work usable",
          "Review-এর উত্তর আর usable কাজ",
        ),
        why: l(
          "Research improves through scrutiny, not just acceptance emails.",
          "Research scrutiny দিয়ে উন্নত হয়, শুধু acceptance email দিয়ে নয়।",
        ),
        tasks: [
          l(
            "Respond point by point, distinguishing changes, evidence and respectful disagreement. If rejected, diagnose fit and methodological gaps before choosing the next step with your supervisor.",
            "Point-by-point উত্তর দিন; change, evidence আর সম্মানজনক disagreement আলাদা করুন। Reject হলে supervisor-এর সঙ্গে next step-এর আগে fit আর method gap দেখুন।",
          ),
          l(
            "Share code, data or materials only when consent, licenses and agreements permit. Provide setup and reproduction instructions; document what cannot be released and why.",
            "Consent, license আর agreement অনুমতি দিলেই code, data বা material share করুন। Setup/reproduction instruction দিন; কী release করা যাচ্ছে না আর কেন লিখুন।",
          ),
        ],
        evidence: l(
          "A revision log, reproducible permitted materials and a clear explanation of remaining uncertainty.",
          "Revision log, reproduce করা যায় এমন permitted material আর বাকি uncertainty-এর ব্যাখ্যা।",
        ),
        notYet: l(
          "Do not erase failed experiments or overstate practical impact to make the conclusion exciting.",
          "Conclusion আকর্ষণীয় করতে failed experiment মুছে বা practical impact বাড়িয়ে বলুন না।",
        ),
        sourceId: "acm-artifacts",
      },
    ],
    pitfalls: [
      l(
        "A high metric alone does not prove a venue is suitable; inspect the field, real peer review and publication practices.",
        "উঁচু metric একা suitable venue প্রমাণ করে না; field, real peer review আর publication practice দেখুন।",
      ),
      l(
        "Publication costs, data permissions and compute requirements belong in the plan, not in a last-minute surprise.",
        "Publication cost, data permission আর compute requirement plan-এ রাখুন, শেষ মুহূর্তের surprise নয়।",
      ),
      l(
        "One small study cannot support claims about everyone. Report sampling and evaluation limits explicitly.",
        "ছোট এক study দিয়ে সবার বিষয়ে দাবি নয়। Sampling আর evaluation limit স্পষ্ট লিখুন।",
      ),
    ],
    aiPractice: l(
      "AI is not evidence or an accountable author. Verify citations, code and analysis against originals; do not upload restricted data. Follow the current institution and venue rules for permitted AI use and disclosure, including research-method use.",
      "AI evidence বা দায়িত্ব নেওয়া author নয়। Original দিয়ে citation, code আর analysis যাচাই করুন; restricted data upload নয়। Research method-এ ব্যবহার-সহ permitted AI use আর disclosure নিয়ে current institution/venue rule মানুন।",
    ),
    thisWeek: l(
      "Read three closely related papers, build a literature matrix and propose one reproducible baseline to a supervisor. A smaller question with honest evidence is a real start.",
      "কাছাকাছি তিন paper পড়ে literature matrix বানান আর supervisor-কে একটি reproducible baseline প্রস্তাব করুন। Honest evidence-সহ ছোট প্রশ্নই সত্যিকারের শুরু।",
    ),
    careerIds: [
      "systems-research",
      "machine-learning",
      "ai-engineering",
      "embedded-systems",
      "cybersecurity",
      "application-security",
      "data-engineering",
      "data-analytics-bi",
      "ux-ui-engineering",
      "network-engineering",
      "hardware-engineering",
    ],
    relatedGoalIds: ["study-abroad", "global-companies", "tech-business"],
    sourceIds: ["gov-research", "acm-artifacts", "acm-authorship"],
  },
];
