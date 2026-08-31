import { l } from "@/lib/localized";
import type { FinalYearProjectGuide } from "@/types/content";

export const finalYearProject: FinalYearProjectGuide = {
  title: l(
    "Final-year project: build evidence, not just a demo",
    "Final-year project: শুধু demo নয়, কাজের প্রমাণ বানাও",
  ),
  summary: l(
    "Build a final-year project you can explain and hand over: task planning, team Git workflow, useful sync-ups, risk-based testing, CI and practical evidence templates.",
    "Explain আর handover করা যায় এমন final-year project বানাও: task planning, team Git workflow, useful sync-up, risk-based testing, CI আর practical evidence template।",
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
        "যে বড় feature list শেষই হয় না তার চেয়ে বাস্তব প্রশ্ন আর নির্ভরযোগ্য evidence-সহ ছোট project বেশি শেখায়।",
      ),
      tasks: [
        l(
          "Start with your department rubric and supervisor’s constraints: dates, team size, ethics approval, assessment and required report format.",
          "Department rubric আর supervisor-এর constraint আগে দেখো: date, team size, ethics approval, assessment আর report format।",
        ),
        l(
          "Name the user or research question, current problem, evidence that it exists and the smallest useful outcome. Seek consent before interviews; avoid collecting sensitive data by default.",
          "User বা research question, বর্তমান সমস্যা, তার evidence আর সবচেয়ে ছোট useful outcome লেখো। Interview-এর আগে consent নাও; শুরুতেই sensitive data collect নয়।",
        ),
        l(
          "Write in-scope and out-of-scope items, budget/tooling limits, top three risks and an alternative if data, lab access or a dependency fails.",
          "In-scope/out-of-scope, budget/tooling limit, বড় তিন risk আর data/lab/dependency না পেলে বিকল্প লেখো।",
        ),
      ],
      evidence: l(
        "A one-page brief that another person can explain back to you, with supervisor feedback recorded.",
        "Supervisor feedback-সহ এক page brief, যা অন্য কেউ তোমাকে বুঝিয়ে বলতে পারে।",
      ),
      notYet: l(
        "Do not choose microservices, blockchain or an AI model before explaining the problem they solve.",
        "কোন সমস্যা solve করবে বোঝানোর আগে microservices, blockchain বা AI model বেছে নিও না।",
      ),
      sourceId: "gov-research",
    },
    {
      id: "specify",
      title: l(
        "2 · Turn requirements into testable promises",
        "২ · Requirement-কে যাচাইযোগ্য করো",
      ),
      why: l(
        "‘Fast, secure and user-friendly’ cannot guide implementation until you say what observable behavior counts.",
        "কোন observable behavior গ্রহণযোগ্য না বললে ‘fast, secure, user-friendly’ implementation-এর নির্দেশনা হয় না।",
      ),
      tasks: [
        l(
          "Give each critical requirement an ID, a user scenario and an observable acceptance criterion; include failure and recovery behavior.",
          "Critical requirement-কে ID, user scenario আর দেখা যায় এমন acceptance criterion দাও; failure আর recovery রাখো।",
        ),
        l(
          "Choose measurable constraints appropriate to your lab: response time with a stated dataset/device, supported screens, accessibility checks and data-retention limits.",
          "Lab অনুযায়ী measurable constraint নাও: নির্দিষ্ট dataset/device-এ response time, supported screen, accessibility check আর data-retention limit।",
        ),
        l(
          "Link requirements to design decisions, implementation and tests. Review the small traceability example below with a peer.",
          "Requirement-এর সঙ্গে design decision, implementation আর test যুক্ত করো। নিচের ছোট traceability example peer-এর সঙ্গে দেখো।",
        ),
      ],
      evidence: l(
        "A prioritized requirement list and test matrix; someone can tell what passes, what fails and what is deliberately excluded.",
        "Prioritized requirement list আর test matrix; কেউ বলতে পারে কী pass/fail আর ইচ্ছা করে কী বাদ।",
      ),
      notYet: l(
        "Do not invent performance targets or pretend a usability claim is validated without observation.",
        "কারণ ছাড়া performance target বানিও না; observation ছাড়া usability claim validated বলো না।",
      ),
      sourceId: "wai-evaluation",
    },
    {
      id: "design",
      title: l(
        "3 · Design the smallest coherent system",
        "৩ · সবচেয়ে ছোট সুসংগত system design",
      ),
      why: l(
        "A diagram is useful when it explains boundaries and trade-offs, not when it contains many fashionable boxes.",
        "Diagram boundary আর trade-off বোঝালে কাজে লাগে; fashionable box বেশি থাকলেই নয়।",
      ),
      tasks: [
        l(
          "Draw components, data flow, trust boundaries and deployment or experiment setup. Define API/data contracts and failure states where relevant.",
          "Component, data flow, trust boundary আর deployment বা experiment setup আঁকো। দরকারমতো API/data contract আর failure state লেখো।",
        ),
        l(
          "Record one important decision: context, at least two options, chosen approach and consequences. Prefer a simple modular design unless evidence requires more.",
          "একটি গুরুত্বপূর্ণ decision লেখো: context, অন্তত দুই option, পছন্দ আর consequence। Evidence না চাইলে সহজ modular design নাও।",
        ),
        l(
          "Identify data owners, minimal permissions, secrets handling, dependency licenses and credible threats before implementation.",
          "Implementation-এর আগে data owner, কম permission, secret handling, dependency license আর সম্ভাব্য threat চিনো।",
        ),
      ],
      evidence: l(
        "A peer can trace one scenario through the design and explain a rejected alternative and one unresolved risk.",
        "Peer design ধরে একটি scenario trace করে বাতিল option আর একটি অমীমাংসিত risk বোঝাতে পারে।",
      ),
      notYet: l(
        "Do not add distributed services, Kubernetes or custom authentication just to look industrial.",
        "Industrial দেখাতে distributed service, Kubernetes বা custom authentication যোগ কোরো না।",
      ),
      sourceId: "owasp-asvs",
    },
    {
      id: "build",
      title: l(
        "4 · Deliver in small, reviewed slices",
        "৪ · ছোট reviewed অংশে delivery",
      ),
      why: l(
        "A repeatable team workflow is part of the project, not paperwork added the night before submission.",
        "Repeatable team workflow project-এর অংশ; submission-এর আগের রাতে যোগ করা paperwork নয়।",
      ),
      tasks: [
        l(
          "Use version control from the start, a short issue list, clear commits and small pull requests. Record individual contributions without turning commit counts into a productivity score.",
          "শুরু থেকে version control, ছোট issue list, পরিষ্কার commit আর ছোট pull request ব্যবহার করো। Individual contribution লেখো; commit count-কে productivity score নয়।",
        ),
        l(
          "Make one end-to-end slice run early. Review requirements, code/design and tests together. Solo? Ask a peer or supervisor for a scheduled review.",
          "শুরুতেই একটি end-to-end slice চালাও। Requirement, code/design আর test একসঙ্গে review। একা হলে peer বা supervisor-এর নির্দিষ্ট review নাও।",
        ),
        l(
          "Automate formatting, static checks and relevant tests in CI; pin dependencies, document tool versions and keep secrets and real personal data out of Git.",
          "Formatting, static check আর relevant test CI-এ দাও; dependency pin, tool version document আর secret/real personal data Git-এর বাইরে রাখো।",
        ),
      ],
      evidence: l(
        "A fresh checkout runs using documented steps; a reviewed change shows its requirement, test result and contribution.",
        "Documented step দিয়ে fresh checkout চলে; reviewed change-এ requirement, test result আর contribution আছে।",
      ),
      notYet: l(
        "Do not save integration until the final week or submit a tutorial clone without explaining your own contribution.",
        "শেষ সপ্তাহের জন্য integration রেখো না; নিজের contribution না বুঝিয়ে tutorial clone submit নয়।",
      ),
      sourceId: "engineering-review",
    },
    {
      id: "verify",
      title: l(
        "5 · Test the claims, including failures",
        "৫ · Failure-সহ claim যাচাই",
      ),
      why: l(
        "A successful demo shows one path. Engineering evidence also explains boundaries, failure modes and what remains unknown.",
        "Successful demo একটি পথ দেখায়। Engineering evidence boundary, failure আর কী অজানা তাও বলে।",
      ),
      tasks: [
        l(
          "Test critical logic, component boundaries and an end-to-end journey. Include invalid input, permissions, data loss/recovery and a realistic device or dataset constraint.",
          "Critical logic, component boundary আর end-to-end journey test করো। Invalid input, permission, data loss/recovery আর বাস্তব device/dataset constraint রাখো।",
        ),
        l(
          "For interfaces, test keyboard, focus, labels, contrast, resizing and error recovery; use automation plus manual checks. Record actual devices and assistive tools used, not assumed coverage.",
          "Interface-এ keyboard, focus, label, contrast, resizing আর error recovery; automation-এর সঙ্গে manual check। যে device/assistive tool সত্যি ব্যবহার করেছ তাই লেখো।",
        ),
        l(
          "Run relevant security/dependency checks and a bounded performance experiment only on authorized systems. Record environment, method, actual results and limitations; fix important defects and rerun affected tests.",
          "শুধু authorized system-এ relevant security/dependency check আর bounded performance experiment চালাও। Environment, method, actual result আর limitation লেখো; গুরুত্বপূর্ণ defect fix করে আবার test।",
        ),
      ],
      evidence: l(
        "A traceable test report with pass/fail results, fixed-defect evidence and explicit remaining risks—not a claim of zero bugs or universal security.",
        "Pass/fail, fixed-defect evidence আর বাকি risk-সহ traceable test report; zero bug বা universal security দাবি নয়।",
      ),
      notYet: l(
        "Do not chase 100% coverage, hide failures, fabricate participants or use AI-generated measurements as results.",
        "100% coverage-এর পেছনে ছুটো না, failure লুকিও না, participant বানিও না, AI-generated measurement result হিসেবে দিও না।",
      ),
      sourceId: "wai-evaluation",
    },
    {
      id: "release",
      title: l(
        "6 · Make it reproducible and recoverable",
        "৬ · Reproduce আর recover করা যায় এমন করো",
      ),
      why: l(
        "‘It works on my laptop’ is a starting observation, not a handover plan.",
        "‘আমার laptop-এ চলে’ শুরু করার observation; handover plan নয়।",
      ),
      tasks: [
        l(
          "Tag a release; provide source, setup instructions, tool versions, example configuration without secrets and safe sample data. Respect licenses and access restrictions.",
          "Release tag দাও; source, setup, tool version, secret ছাড়া example config আর safe sample data দাও। License আর access restriction মানো।",
        ),
        l(
          "Have a peer rebuild or rerun the experiment from the instructions. Record failures and repair the instructions or setup before repeating.",
          "Peer-কে instruction দিয়ে rebuild বা experiment rerun করতে দাও। Failure লিখে instruction/setup ঠিক করে আবার করো।",
        ),
        l(
          "For deployed systems, document logs, backup/restore, rollback and who maintains or shuts down the demo. For offline projects, provide a reproducible local run and explain deployment limits.",
          "Deployed system-এ log, backup/restore, rollback আর demo কে maintain/বন্ধ করবে লেখো। Offline project-এ reproducible local run আর deployment limit বোঝাও।",
        ),
      ],
      evidence: l(
        "An independent reproduction note tied to the release and a tested recovery procedure where relevant.",
        "Release-এর সঙ্গে যুক্ত independent reproduction note আর প্রাসঙ্গিক tested recovery procedure।",
      ),
      notYet: l(
        "Do not pay for production hosting or expose sensitive data just to show a public link.",
        "Public link দেখাতেই production hosting-এর খরচ বা sensitive data প্রকাশ কোরো না।",
      ),
      sourceId: "acm-artifacts",
    },
    {
      id: "defend",
      title: l(
        "7 · Explain, defend and hand over honestly",
        "৭ · সৎ ব্যাখ্যা, defense আর handover",
      ),
      why: l(
        "You should be able to explain why the work is useful, how you know, and what you would change next.",
        "কাজ কেন useful, কীভাবে জানো আর পরের পরিবর্তন কী—তা বোঝাতে পারা দরকার।",
      ),
      tasks: [
        l(
          "Follow the department report format. Cover problem, related work, method/design, implementation, evaluation, limitations, ethics and references; distinguish your work from borrowed assets and code.",
          "Department report format মানো। Problem, related work, method/design, implementation, evaluation, limitation, ethics আর reference রাখো; ধার করা asset/code থেকে নিজের কাজ আলাদা করো।",
        ),
        l(
          "Prepare a short demo with a normal path, a failure/recovery path and evidence linked to a requirement. Keep an offline backup demonstration for connectivity problems.",
          "Normal path, failure/recovery আর requirement-linked evidence-সহ ছোট demo তৈরি করো। Network সমস্যার জন্য offline backup demonstration রাখো।",
        ),
        l(
          "Disclose AI/tool use under your department policy, verify every citation and explain any generated code you retain. State each member’s contribution and unresolved issues.",
          "Department policy অনুযায়ী AI/tool use disclose, প্রতিটি citation verify আর রাখা generated code explain করো। প্রত্যেকের contribution আর unresolved issue লেখো।",
        ),
      ],
      evidence: l(
        "A report, reproducible artifact and defense that agree with one another; a new maintainer can identify the next safe change.",
        "Report, reproducible artifact আর defense পরস্পর মেলে; নতুন maintainer পরের safe change বুঝতে পারে।",
      ),
      notYet: l(
        "Do not call a student prototype production-ready, a paper accepted, or a design certified unless you have the relevant evidence.",
        "প্রাসঙ্গিক evidence ছাড়া student prototype-কে production-ready, paper accepted বা design certified বলো না।",
      ),
      sourceId: "acm-authorship",
    },
  ],
  variants: [
    {
      title: l("Web / mobile / software", "Web / mobile / software"),
      evidence: l(
        "Show a usable core journey, API/data contracts, permission boundaries, automated and manual tests, accessible failure states and release instructions. For mobile, test lifecycle, offline state and actual target devices where available.",
        "Usable core journey, API/data contract, permission boundary, automated/manual test, accessible failure state আর release instruction দেখাও। Mobile-এ lifecycle, offline state আর সুযোগ থাকলে target device test করো।",
      ),
      caution: l(
        "A public deployment is optional; a repeatable local demonstration can protect privacy and control cost.",
        "Public deployment optional; repeatable local demo privacy রক্ষা আর খরচ নিয়ন্ত্রণ করতে পারে।",
      ),
    },
    {
      title: l(
        "Research / data / machine learning",
        "Research / data / machine learning",
      ),
      evidence: l(
        "State a research question, source and permission for data, baseline, train/validation/test separation, leakage checks, metrics with uncertainty and reproducible environment/seeds. Report negative results and error analysis.",
        "Research question, data source/permission, baseline, train/validation/test separation, leakage check, uncertainty-সহ metric আর reproducible environment/seed লেখো। Negative result আর error analysis দাও।",
      ),
      caution: l(
        "A high accuracy number is not a contribution by itself. Publication is a separate review process, not a graduation promise.",
        "বড় accuracy নিজেই contribution নয়। Publication আলাদা review process, graduation-এর promise নয়।",
      ),
    },
    {
      title: l("Hardware / embedded systems", "Hardware / embedded systems"),
      evidence: l(
        "Provide schematics, BOM, firmware/tool versions, test conditions, simulation versus measurement, calibration/uncertainty and supervised safety review before physical work.",
        "Schematic, BOM, firmware/tool version, test condition, simulation বনাম measurement, calibration/uncertainty আর physical কাজের আগে supervised safety review দাও।",
      ),
      caution: l(
        "Simulator-first. A student demonstration is not an electrically certified product; no unsupervised hazardous circuits.",
        "আগে simulator। Student demonstration electrically certified product নয়; supervision ছাড়া hazardous circuit নয়।",
      ),
    },
    {
      title: l(
        "Networks / security / infrastructure",
        "Networks / security / infrastructure",
      ),
      evidence: l(
        "Document an isolated topology, authorization, threat/failure model, versioned configuration, traffic/test plan, monitoring evidence and rollback. Remove credentials and sensitive packet payloads.",
        "Isolated topology, authorization, threat/failure model, versioned config, traffic/test plan, monitoring evidence আর rollback document করো। Credential আর sensitive packet payload সরাও।",
      ),
      caution: l(
        "No campus, public or client-system experiments without explicit permission and a defined safe scope.",
        "স্পষ্ট অনুমতি আর নিরাপদ scope ছাড়া campus, public বা client system-এ experiment নয়।",
      ),
    },
  ],
  releaseChecks: [
    l(
      "The supervisor/rubric requirements and team contributions are documented.",
      "Supervisor/rubric requirement আর team contribution লেখা আছে।",
    ),
    l(
      "Critical requirements have observable acceptance criteria and linked results.",
      "Critical requirement-এ observable acceptance criteria আর linked result আছে।",
    ),
    l(
      "The main design decision and rejected alternative are explained.",
      "Main design decision আর বাদ দেওয়া option ব্যাখ্যা করা আছে।",
    ),
    l(
      "A peer can run the tagged artifact using the README and safe data.",
      "Peer README আর safe data দিয়ে tagged artifact চালাতে পারে।",
    ),
    l(
      "Tests include a failure case; results name the environment and remaining limitations.",
      "Test-এ failure case আছে; result-এ environment আর বাকি limitation বলা।",
    ),
    l(
      "Relevant accessibility, privacy, security and physical-safety risks are reviewed.",
      "Relevant accessibility, privacy, security আর physical-safety risk review হয়েছে।",
    ),
    l(
      "Licenses, citations, dataset permissions and AI assistance are honestly attributed.",
      "License, citation, dataset permission আর AI assistance সৎভাবে উল্লেখ করা।",
    ),
    l(
      "Recovery/handover steps and known issues match the demo and report.",
      "Recovery/handover step আর known issue demo ও report-এর সঙ্গে মেলে।",
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
