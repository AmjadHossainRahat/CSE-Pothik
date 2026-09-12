import { l } from "@/lib/localized";
import type { FinalYearProjectGuide } from "@/types/content";

export const finalYearProject: FinalYearProjectGuide = {
  title: l(
    "Final-year project: build evidence, not just a demo",
    "ফাইনাল ইয়ার প্রজেক্ট: শুধু demo নয়, আপনার কাজের প্রমাণ",
  ),
  summary: l(
    "Build a final-year project you can explain and hand over: task planning, team Git workflow, useful sync-ups, risk-based testing, CI and practical evidence templates.",
    "এমন একটি ফাইনাল ইয়ার প্রজেক্ট বানান, যা আপনি বুঝিয়ে বলতে এবং অন্যের হাতে তুলে দিতে পারেন। Task planning, দলের Git workflow, কাজের sync-up, risk-based testing, CI ও evidence template—সবই এখানে পাবে।",
  ),
  stages: [
    {
      id: "define",
      title: l(
        "1 · Define a useful, finishable problem",
        "১ · দরকারি, শেষ করা যায় এমন সমস্যা",
      ),
      why: l(
        "A smaller project with a real question and reliable evidence teaches more than a large feature list nobody can finish.",
        "শেষই করা যায় না—এমন বিশাল feature list-এর চেয়ে বাস্তব প্রশ্ন ও নির্ভরযোগ্য প্রমাণসহ ছোট প্রজেক্ট অনেক বেশি শেখায়।",
      ),
      tasks: [
        l(
          "Start with your department rubric and supervisor’s constraints: dates, team size, ethics approval, assessment and required report format.",
          "আগে department-এর rubric ও supervisor-এর শর্তগুলো দেখুন: সময়সীমা, দলের আকার, ethics approval, assessment এবং report format।",
        ),
        l(
          "Name the user or research question, current problem, evidence that it exists and the smallest useful outcome. Seek consent before interviews; avoid collecting sensitive data by default.",
          "কার সমস্যা সমাধান করছেন বা কোন research question-এর উত্তর খুঁজছেন, সমস্যাটি সত্যি হওয়ার প্রমাণ কী, আর সবচেয়ে ছোট উপকারী ফলটি কী—লিখে ফেলুন। Interview-এর আগে সম্মতি নিন; প্রয়োজন না থাকলে sensitive data সংগ্রহ করবেন না।",
        ),
        l(
          "Write in-scope and out-of-scope items, budget/tooling limits, top three risks and an alternative if data, lab access or a dependency fails.",
          "কোন কাজটি করবে, কোনটি করবে না, budget ও tool-এর সীমা, বড় তিনটি ঝুঁকি এবং data, lab বা dependency না পেলে বিকল্প—সব লিখে রাখুন।",
        ),
      ],
      evidence: l(
        "A one-page brief that another person can explain back to you, with supervisor feedback recorded.",
        "Supervisor-এর feedback-সহ এক পাতার brief, যা পড়ে অন্য কেউ প্রজেক্টটি আবার আপনাকেই বুঝিয়ে বলতে পারে।",
      ),
      notYet: l(
        "Do not choose microservices, blockchain or an AI model before explaining the problem they solve.",
        "কোন সমস্যার সমাধান করবে সেটি বোঝানোর আগেই microservices, blockchain বা AI model বেছে বসবেন না। Technology দিয়ে নয়, সমস্যা দিয়ে শুরু করুন।",
      ),
      sourceId: "gov-research",
    },
    {
      id: "specify",
      title: l(
        "2 · Turn requirements into testable promises",
        "২ · Requirement-কে যাচাই করা যায়—এমন করুন",
      ),
      why: l(
        "‘Fast, secure and user-friendly’ cannot guide implementation until you say what observable behavior counts.",
        "কোন আচরণ দেখলে বলবে কাজটি ঠিক হয়েছে, তা না জানলে ‘fast, secure, user-friendly’—শুধু সুন্দর তিনটি শব্দ হয়; implementation-এর নির্দেশনা নয়।",
      ),
      tasks: [
        l(
          "Give each critical requirement an ID, a user scenario and an observable acceptance criterion; include failure and recovery behavior.",
          "প্রতিটি গুরুত্বপূর্ণ requirement-কে একটি ID, user scenario ও চোখে দেখা যায় এমন acceptance criterion দিন। ভুল হলে কী ঘটবে এবং কীভাবে ফিরে আসবে, সেটিও লিখুন।",
        ),
        l(
          "Choose measurable constraints appropriate to your lab: response time with a stated dataset/device, supported screens, accessibility checks and data-retention limits.",
          "আপনার lab-এর সামর্থ্য অনুযায়ী মাপা যায়—এমন constraint ঠিক করুন: নির্দিষ্ট dataset বা device-এ response time, কোন screen support করবে, accessibility check এবং data কত দিন রাখবে।",
        ),
        l(
          "Link requirements to design decisions, implementation and tests. Review the small traceability example below with a peer.",
          "Requirement-এর সঙ্গে design decision, implementation ও test-এর যোগসূত্র রাখুন। নিচের ছোট traceability example-টি একজন সহপাঠীর সঙ্গে মিলিয়ে দেখুন।",
        ),
      ],
      evidence: l(
        "A prioritized requirement list and test matrix; someone can tell what passes, what fails and what is deliberately excluded.",
        "গুরুত্ব অনুযায়ী সাজানো requirement list ও test matrix, যেখান থেকে যে কেউ বুঝতে পারে কোনটি pass, কোনটি fail, আর কোনটি জেনেশুনে বাদ দেওয়া হয়েছে।",
      ),
      notYet: l(
        "Do not invent performance targets or pretend a usability claim is validated without observation.",
        "কারণ ছাড়া performance target বানাবেন না; সত্যিকারের পর্যবেক্ষণ ছাড়া usability যাচাই হয়েছে—এ দাবিও করবেন না।",
      ),
      sourceId: "wai-evaluation",
    },
    {
      id: "design",
      title: l(
        "3 · Design the smallest coherent system",
        "৩ · সবচেয়ে ছোট সুসংগত system-টি design করুন",
      ),
      why: l(
        "A diagram is useful when it explains boundaries and trade-offs, not when it contains many fashionable boxes.",
        "Diagram তখনই কাজে লাগে, যখন system-এর সীমা ও trade-off বোঝায়; fashionable box-এর সংখ্যা বেশি হলেই architecture ভালো হয় না।",
      ),
      tasks: [
        l(
          "Draw components, data flow, trust boundaries and deployment or experiment setup. Define API/data contracts and failure states where relevant.",
          "Component, data flow, trust boundary এবং deployment বা experiment setup আঁকুন। যেখানে দরকার API/data contract ও failure state লিখে দিন।",
        ),
        l(
          "Record one important decision: context, at least two options, chosen approach and consequences. Prefer a simple modular design unless evidence requires more.",
          "একটি গুরুত্বপূর্ণ সিদ্ধান্ত লিখে রাখুন: প্রেক্ষাপট কী, অন্তত দুটি বিকল্প কী ছিল, কোনটি বেছে নিলে এবং তার পরিণতি কী। প্রমাণ ছাড়া জটিলতার দরকার নেই; সহজ modular design-ই ভালো।",
        ),
        l(
          "Identify data owners, minimal permissions, secrets handling, dependency licenses and credible threats before implementation.",
          "Implementation শুরুর আগেই data-এর মালিকানা, সর্বনিম্ন permission, secret handling, dependency-এর license এবং সম্ভাব্য threat নিয়ে ভাবুন।",
        ),
      ],
      evidence: l(
        "A peer can trace one scenario through the design and explain a rejected alternative and one unresolved risk.",
        "একজন সহপাঠী design ধরে একটি scenario-এর পথ অনুসরণ করতে, বাদ দেওয়া বিকল্পটির কারণ বলতে এবং অন্তত একটি অমীমাংসিত ঝুঁকি চিহ্নিত করতে পারে।",
      ),
      notYet: l(
        "Do not add distributed services, Kubernetes or custom authentication just to look industrial.",
        "শুধু ‘industry-level’ দেখানোর জন্য distributed service, Kubernetes বা custom authentication যোগ করবেন না। প্রজেক্টকে জটিল করলেই সে চাকরি পেয়ে যায় না।",
      ),
      sourceId: "owasp-asvs",
    },
    {
      id: "build",
      title: l(
        "4 · Deliver in small, reviewed slices",
        "৪ · ছোট ছোট অংশে কাজ করুন, review নিয়ে এগিয়ে যান",
      ),
      why: l(
        "A repeatable team workflow is part of the project, not paperwork added the night before submission.",
        "বারবার অনুসরণ করা যায়—এমন team workflow প্রজেক্টেরই অংশ; submission-এর আগের রাতে বানানো paperwork নয়।",
      ),
      tasks: [
        l(
          "Use version control from the start, a short issue list, clear commits and small pull requests. Record individual contributions without turning commit counts into a productivity score.",
          "শুরু থেকেই version control ব্যবহার করুন। ছোট issue, পরিষ্কার commit ও সহজে review করা যায়—এমন pull request রাখুন। প্রত্যেকের অবদান লিখে রাখবে, তবে commit-এর সংখ্যা দিয়ে কারও কাজের মান মাপবে না।",
        ),
        l(
          "Make one end-to-end slice run early. Review requirements, code/design and tests together. Solo? Ask a peer or supervisor for a scheduled review.",
          "শুরুর দিকেই ছোট একটি end-to-end flow চালিয়ে দেখুন। Requirement, code/design ও test একসঙ্গে review করুন। একা কাজ করলে নির্দিষ্ট সময়ে সহপাঠী বা supervisor-এর review নিন।",
        ),
        l(
          "Automate formatting, static checks and relevant tests in CI; pin dependencies, document tool versions and keep secrets and real personal data out of Git.",
          "Formatting, static check ও প্রাসঙ্গিক test CI-তে চালান; dependency-এর version স্থির রাখুন, tool-এর version লিখে রাখুন, আর secret ও সত্যিকারের ব্যক্তিগত data Git-এর বাইরে রাখুন।",
        ),
      ],
      evidence: l(
        "A fresh checkout runs using documented steps; a reviewed change shows its requirement, test result and contribution.",
        "README-এর ধাপ অনুসরণ করে fresh checkout থেকে প্রজেক্ট চলে; review হওয়া পরিবর্তনটির সঙ্গে requirement, test result ও কার অবদান—সব দেখা যায়।",
      ),
      notYet: l(
        "Do not save integration until the final week or submit a tutorial clone without explaining your own contribution.",
        "Integration শেষ সপ্তাহের জন্য তুলে রাখবেন না; আর নিজের অবদান বোঝাতে না পারলে tutorial clone-কে প্রজেক্ট বলে জমা দেবেন না।",
      ),
      sourceId: "engineering-review",
    },
    {
      id: "verify",
      title: l(
        "5 · Test the claims, including failures",
        "৫ · সফলতার পাশাপাশি failure-ও পরীক্ষা করুন",
      ),
      why: l(
        "A successful demo shows one path. Engineering evidence also explains boundaries, failure modes and what remains unknown.",
        "সফল demo কেবল একটি পথ দেখায়। ভালো engineering evidence কোথায় সীমা, কীভাবে failure হয় এবং এখনও কী অজানা—সেটিও বলে।",
      ),
      tasks: [
        l(
          "Test critical logic, component boundaries and an end-to-end journey. Include invalid input, permissions, data loss/recovery and a realistic device or dataset constraint.",
          "গুরুত্বপূর্ণ logic, component boundary ও end-to-end journey test করুন। Invalid input, permission, data হারানো ও recovery, এবং বাস্তব device বা dataset-এর সীমাও ধরুন।",
        ),
        l(
          "For interfaces, test keyboard, focus, labels, contrast, resizing and error recovery; use automation plus manual checks. Record actual devices and assistive tools used, not assumed coverage.",
          "Interface-এ keyboard navigation, focus, label, contrast, resizing এবং error recovery পরীক্ষা করুন; automation-এর পাশাপাশি হাতে ধরেও দেখুন। যে device ও assistive tool সত্যিই ব্যবহার করেছেন, শুধু সেটিই লিখুন।",
        ),
        l(
          "Run relevant security/dependency checks and a bounded performance experiment only on authorized systems. Record environment, method, actual results and limitations; fix important defects and rerun affected tests.",
          "শুধু অনুমোদিত system-এ প্রাসঙ্গিক security/dependency check এবং সীমিত performance experiment চালান। Environment, পদ্ধতি, সত্যিকারের ফল ও সীমাবদ্ধতা লিখুন; গুরুত্বপূর্ণ defect ঠিক করে affected test আবার চালান।",
        ),
      ],
      evidence: l(
        "A traceable test report with pass/fail results, fixed-defect evidence and explicit remaining risks—not a claim of zero bugs or universal security.",
        "Pass/fail ফল, ঠিক করা defect-এর প্রমাণ ও বাকি ঝুঁকিসহ traceable test report। ‘Zero bug’ বা ‘পুরোপুরি secure’—এমন অবাস্তব দাবি নয়।",
      ),
      notYet: l(
        "Do not chase 100% coverage, hide failures, fabricate participants or use AI-generated measurements as results.",
        "শুধু সংখ্যা বাড়াতে 100% coverage-এর পেছনে ছুটবেন না, failure লুকাবেন না, কাল্পনিক participant বানাবেন না, আর AI বানানো measurement-কে আসল result হিসেবে দেবেন না।",
      ),
      sourceId: "wai-evaluation",
    },
    {
      id: "release",
      title: l(
        "6 · Make it reproducible and recoverable",
        "৬ · অন্য কেউ যেন চালাতে পারে, সমস্যা হলে ফিরিয়েও আনতে পারে",
      ),
      why: l(
        "‘It works on my laptop’ is a starting observation, not a handover plan.",
        "‘আমার laptop-এ চলে’—এটি ভালো শুরু, কিন্তু handover plan নয়।",
      ),
      tasks: [
        l(
          "Tag a release; provide source, setup instructions, tool versions, example configuration without secrets and safe sample data. Respect licenses and access restrictions.",
          "Release tag দিন; source, setup instruction, tool-এর version, secret ছাড়া example config ও নিরাপদ sample data রাখুন। License ও access restriction মেনে চলুন।",
        ),
        l(
          "Have a peer rebuild or rerun the experiment from the instructions. Record failures and repair the instructions or setup before repeating.",
          "শুধু instruction দিয়ে একজন সহপাঠীকে rebuild বা experiment আবার চালাতে দিন। কোথায় আটকে গেল লিখে রাখুন, instruction বা setup ঠিক করুন, তারপর আবার চেষ্টা করান।",
        ),
        l(
          "For deployed systems, document logs, backup/restore, rollback and who maintains or shuts down the demo. For offline projects, provide a reproducible local run and explain deployment limits.",
          "Deploy করা system-এর log, backup/restore, rollback এবং demo কে চালু রাখবে বা বন্ধ করবে—লিখে রাখুন। Offline project হলে একইভাবে চালানো যায়—এমন local setup ও deployment-এর সীমা বোঝান।",
        ),
      ],
      evidence: l(
        "An independent reproduction note tied to the release and a tested recovery procedure where relevant.",
        "Release-এর সঙ্গে যুক্ত স্বাধীন reproduction note এবং যেখানে দরকার test করা recovery procedure।",
      ),
      notYet: l(
        "Do not pay for production hosting or expose sensitive data just to show a public link.",
        "শুধু public link দেখানোর জন্য production hosting-এ অপ্রয়োজনীয় খরচ করবেন না বা sensitive data প্রকাশ করবেন না।",
      ),
      sourceId: "acm-artifacts",
    },
    {
      id: "defend",
      title: l(
        "7 · Explain, defend and hand over honestly",
        "৭ · সততার সঙ্গে বোঝান, defend করুন ও handover দিন",
      ),
      why: l(
        "You should be able to explain why the work is useful, how you know, and what you would change next.",
        "কাজটি কেন উপকারী, তা কীভাবে জানুন এবং এরপর কী বদলাতে—এই তিনটি প্রশ্নের উত্তর আপনার জানা থাকা দরকার।",
      ),
      tasks: [
        l(
          "Follow the department report format. Cover problem, related work, method/design, implementation, evaluation, limitations, ethics and references; distinguish your work from borrowed assets and code.",
          "Department-এর report format মেনে চলুন। সমস্যা, related work, method/design, implementation, evaluation, সীমাবদ্ধতা, ethics ও reference রাখুন; অন্যের asset বা code থেকে নিজের কাজ স্পষ্টভাবে আলাদা করুন।",
        ),
        l(
          "Prepare a short demo with a normal path, a failure/recovery path and evidence linked to a requirement. Keep an offline backup demonstration for connectivity problems.",
          "স্বাভাবিক flow, failure ও recovery, এবং requirement-এর সঙ্গে যুক্ত প্রমাণসহ ছোট demo তৈরি করুন। Internet বিগড়ে গেলে দেখানোর জন্য offline backup রাখুন—demo day-তে Wi-Fi-র নাটক নতুন কিছু নয়।",
        ),
        l(
          "Disclose AI/tool use under your department policy, verify every citation and explain any generated code you retain. State each member’s contribution and unresolved issues.",
          "Department-এর policy অনুযায়ী AI ও tool ব্যবহারের কথা জানান, প্রতিটি citation যাচাই করুন এবং যে generated code রেখেছ সেটি বুঝিয়ে বলতে প্রস্তুত থাকুন। প্রত্যেকের অবদান ও অমীমাংসিত issue লিখে রাখুন।",
        ),
      ],
      evidence: l(
        "A report, reproducible artifact and defense that agree with one another; a new maintainer can identify the next safe change.",
        "Report, চালানো যায় এমন artifact ও defense-এর কথা একে অন্যের সঙ্গে মেলে; নতুন maintainer পরের নিরাপদ পরিবর্তনটি বুঝতে পারে।",
      ),
      notYet: l(
        "Do not call a student prototype production-ready, a paper accepted, or a design certified unless you have the relevant evidence.",
        "প্রাসঙ্গিক প্রমাণ ছাড়া student prototype-কে production-ready, paper-কে accepted বা design-কে certified বলে দাবি করবেন না।",
      ),
      sourceId: "acm-authorship",
    },
  ],
  variants: [
    {
      title: l("Web / mobile / software", "Web / mobile / software"),
      evidence: l(
        "Show a usable core journey, API/data contracts, permission boundaries, automated and manual tests, accessible failure states and release instructions. For mobile, test lifecycle, offline state and actual target devices where available.",
        "ব্যবহারযোগ্য মূল journey, API/data contract, permission boundary, automated ও manual test, accessible failure state এবং release instruction দেখান। Mobile হলে lifecycle, offline state এবং সুযোগ থাকলে আসল target device-এ পরীক্ষা করুন।",
      ),
      caution: l(
        "A public deployment is optional; a repeatable local demonstration can protect privacy and control cost.",
        "Public deployment বাধ্যতামূলক নয়; বারবার চালানো যায়—এমন local demo অনেক সময় privacy ও খরচ দুটোই ভালোভাবে সামলায়।",
      ),
    },
    {
      title: l(
        "Research / data / machine learning",
        "Research / data / machine learning",
      ),
      evidence: l(
        "State a research question, source and permission for data, baseline, train/validation/test separation, leakage checks, metrics with uncertainty and reproducible environment/seeds. Report negative results and error analysis.",
        "Research question, data-এর উৎস ও অনুমতি, baseline, train/validation/test ভাগ, leakage check, uncertainty-সহ metric এবং আবার তৈরি করা যায়—এমন environment ও seed লিখে রাখুন। Negative result ও error analysis-ও দেখান।",
      ),
      caution: l(
        "A high accuracy number is not a contribution by itself. Publication is a separate review process, not a graduation promise.",
        "শুধু বড় accuracy-ই contribution নয়। Publication আলাদা review process; graduation হলেই paper বের হবে—এমন প্রতিশ্রুতি নয়।",
      ),
    },
    {
      title: l("Hardware / embedded systems", "Hardware / embedded systems"),
      evidence: l(
        "Provide schematics, BOM, firmware/tool versions, test conditions, simulation versus measurement, calibration/uncertainty and supervised safety review before physical work.",
        "Schematic, BOM, firmware/tool-এর version, test condition, simulation বনাম বাস্তব measurement, calibration ও uncertainty লিখে রাখুন; physical কাজের আগে supervisor-এর safety review নিন।",
      ),
      caution: l(
        "Simulator-first. A student demonstration is not an electrically certified product; no unsupervised hazardous circuits.",
        "আগে simulator-এ যাচাই করুন। Student demonstration কোনো electrically certified product নয়; বিপজ্জনক circuit নিয়ে supervision ছাড়া কাজ করবেন না।",
      ),
    },
    {
      title: l(
        "Networks / security / infrastructure",
        "Networks / security / infrastructure",
      ),
      evidence: l(
        "Document an isolated topology, authorization, threat/failure model, versioned configuration, traffic/test plan, monitoring evidence and rollback. Remove credentials and sensitive packet payloads.",
        "Isolated topology, অনুমতির প্রমাণ, threat/failure model, versioned config, traffic/test plan, monitoring evidence ও rollback লিখে রাখুন। Credential ও sensitive packet payload সরিয়ে ফেলুন।",
      ),
      caution: l(
        "No campus, public or client-system experiments without explicit permission and a defined safe scope.",
        "স্পষ্ট অনুমতি ও নিরাপদ scope ছাড়া campus, public বা client system-এ কোনো experiment করবেন না। কৌতূহল ভালো; অনুমতি ছাড়া কৌতূহল বিপদ ডেকে আনে।",
      ),
    },
  ],
  releaseChecks: [
    l(
      "The supervisor/rubric requirements and team contributions are documented.",
      "Supervisor ও rubric-এর শর্ত এবং দলের প্রত্যেকের অবদান লেখা আছে।",
    ),
    l(
      "Critical requirements have observable acceptance criteria and linked results.",
      "প্রতিটি গুরুত্বপূর্ণ requirement-এর মাপা যায় এমন acceptance criteria ও তার সঙ্গে যুক্ত result আছে।",
    ),
    l(
      "The main design decision and rejected alternative are explained.",
      "মূল design decision ও বাদ দেওয়া বিকল্পটির কারণ ব্যাখ্যা করা আছে।",
    ),
    l(
      "A peer can run the tagged artifact using the README and safe data.",
      "একজন সহপাঠী README ও নিরাপদ sample data ব্যবহার করে tagged artifact চালাতে পারে।",
    ),
    l(
      "Tests include a failure case; results name the environment and remaining limitations.",
      "Test-এ অন্তত একটি failure case আছে; result-এ environment ও বাকি সীমাবদ্ধতা বলা আছে।",
    ),
    l(
      "Relevant accessibility, privacy, security and physical-safety risks are reviewed.",
      "প্রাসঙ্গিক accessibility, privacy, security ও physical-safety risk যাচাই করা হয়েছে।",
    ),
    l(
      "Licenses, citations, dataset permissions and AI assistance are honestly attributed.",
      "License, citation, dataset-এর অনুমতি ও AI-এর সহায়তা সততার সঙ্গে উল্লেখ করা হয়েছে।",
    ),
    l(
      "Recovery/handover steps and known issues match the demo and report.",
      "Recovery ও handover-এর ধাপ এবং জানা issue demo ও report-এর সঙ্গে মেলে।",
    ),
  ],
  sourceIds: [
    "github-projects",
    "github-flow",
    "github-actions",
    "playwright-practices",
    "gitlab-communication",
    "engineering-review",
    "owasp-asvs",
    "wai-evaluation",
    "acm-artifacts",
    "acm-authorship",
    "gov-research",
  ],
};
