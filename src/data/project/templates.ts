import { l } from "@/lib/localized";
import type { ProjectTemplate } from "@/types/content";

export const projectTemplates: ProjectTemplate[] = [
  {
    id: "brief",
    title: l("Project brief & risk register", "Project brief ও risk register"),
    use: l(
      "Agree the smallest useful outcome with your supervisor before committing to scope.",
      "Scope নেওয়ার আগে supervisor-এর সঙ্গে সবচেয়ে ছোট useful outcome ঠিক করুন।",
    ),
    fields: [
      l(
        "Title / team / supervisor / review date / rubric link:",
        "Title / team / supervisor / review date / rubric link:",
      ),
      l(
        "User and problem / real evidence or research question / permission to use evidence:",
        "User ও problem / বাস্তব evidence বা research question / evidence ব্যবহারের permission:",
      ),
      l(
        "Smallest measurable outcome / in scope / explicitly out of scope:",
        "সবচেয়ে ছোট measurable outcome / scope-এ কী / স্পষ্টভাবে scope-এর বাইরে কী:",
      ),
      l(
        "Deadline / weekly capacity / budget / equipment and data constraints:",
        "Deadline / সাপ্তাহিক capacity / budget / equipment ও data constraint:",
      ),
      l(
        "Risk / impact and likelihood / early warning / owner / mitigation or fallback / next review:",
        "Risk / impact ও likelihood / early warning / owner / mitigation বা fallback / পরের review:",
      ),
      l(
        "Ethics, privacy and safety approvals / approver / status / evidence link:",
        "Ethics, privacy ও safety approval / approver / status / evidence link:",
      ),
    ],
  },
  {
    id: "team-agreement",
    title: l(
      "Team agreement & milestone plan",
      "Team agreement ও milestone plan",
    ),
    use: l(
      "Write together at kickoff; revisit when availability or scope changes.",
      "Kickoff-এ একসঙ্গে লিখুন; availability বা scope বদলালে আবার দেখুন।",
    ),
    fields: [
      l(
        "Members / weekly availability / absence and handoff arrangements:",
        "Member / সাপ্তাহিক availability / অনুপস্থিতি ও handoff ব্যবস্থা:",
      ),
      l(
        "Shared board and repo / communication channel / response window / escalation contact:",
        "Shared board ও repo / যোগাযোগের channel / response window / escalation contact:",
      ),
      l(
        "Issue owner and reviewer rule / rotating facilitation and release roles / contribution credit:",
        "Issue owner ও reviewer rule / facilitation ও release role rotation / contribution credit:",
      ),
      l(
        "Ready criteria / Done criteria / WIP limit / blocked-work policy:",
        "Ready criteria / Done criteria / WIP limit / blocked কাজের নিয়ম:",
      ),
      l(
        "Milestone / demoable outcome / acceptance evidence / target date / dependencies / scope cut:",
        "Milestone / demo দেখানো যায় এমন outcome / acceptance evidence / target date / dependency / scope cut:",
      ),
      l(
        "Supervisor review dates / feature freeze / test-report-defense buffer / disagreement process:",
        "Supervisor review date / feature freeze / test-report-defense buffer / মতবিরোধের প্রক্রিয়া:",
      ),
    ],
  },
  {
    id: "issue",
    title: l("Ready-to-pick-up issue", "কাজ শুরু করার মতো issue"),
    use: l(
      "Copy into your task manager. Split the task if a peer cannot explain what Done means.",
      "Task manager-এ copy করুন। Peer Done বোঝাতে না পারলে task আরও ভাঙুন।",
    ),
    fields: [
      l(
        "Issue ID and behavior-focused title / parent outcome or milestone / requirement ID:",
        "Issue ID ও behavior-focused title / parent outcome বা milestone / requirement ID:",
      ),
      l(
        "Problem and why now / in scope / out of scope:",
        "Problem ও এখন কেন / scope-এর ভিতরে কী / বাইরে কী:",
      ),
      l(
        "Owner / reviewer / priority / estimate / dependency IDs / risk or spike question:",
        "Owner / reviewer / priority / estimate / dependency ID / risk বা spike question:",
      ),
      l(
        "Acceptance: Given [starting state], when [action], then [observable result]; failure/boundary case:",
        "Acceptance: Given [শুরুর অবস্থা], when [কাজ], then [দেখা যায় এমন result]; failure/boundary case:",
      ),
      l(
        "Implementation subtasks / test approach and data / docs affected:",
        "Implementation subtask / test approach ও data / কোন docs বদলাবে:",
      ),
      l(
        "Status / blocked reason, helper and next check-in / PR link / verification evidence:",
        "Status / blocked কারণ, সাহায্যকারী ও next check-in / PR link / verification evidence:",
      ),
    ],
  },
  {
    id: "pull-request",
    title: l("Pull request & peer review", "Pull request ও peer review"),
    use: l(
      "Use for one coherent change; report checks you actually ran, including failures.",
      "একটি coherent change-এর জন্য নিন; সত্যি চালানো check লিখুন, failure-সহ।",
    ),
    fields: [
      l(
        "Issue / requirement / base and feature branch / summary and reason:",
        "Issue / requirement / base ও feature branch / summary ও কারণ:",
      ),
      l(
        "How to run and review / test commands / environment / actual result and log links:",
        "কীভাবে run ও review / test command / environment / actual result ও log link:",
      ),
      l(
        "Acceptance evidence / screenshots if relevant / failure and recovery behavior:",
        "Acceptance evidence / দরকারি screenshot / failure ও recovery behavior:",
      ),
      l(
        "Security, privacy, accessibility and compatibility impact / config or migration / rollback considerations:",
        "Security, privacy, accessibility ও compatibility impact / config বা migration / rollback-এ কী ভাবতে হবে:",
      ),
      l(
        "Docs changed / known gaps / reviewer / blocking feedback and resolution / approval:",
        "Docs change / known gap / reviewer / blocking feedback ও সমাধান / approval:",
      ),
      l(
        "CI run link / merged commit / integrated verification / final issue status:",
        "CI run link / merged commit / integrated verification / final issue status:",
      ),
    ],
  },
  {
    id: "sync-note",
    title: l("Sync-up & weekly review note", "Sync-up ও weekly review note"),
    use: l(
      "Share the agenda first and publish decisions afterward; include absent teammates.",
      "আগে agenda দিন, পরে decision প্রকাশ করুন; অনুপস্থিত teammate-দের জানান।",
    ),
    fields: [
      l(
        "Date / attendees / facilitator / agenda and milestone:",
        "Date / attendee / facilitator / agenda ও milestone:",
      ),
      l(
        "Async update: completed + issue/PR; next action; blocker + help needed:",
        "Async update: শেষ কাজ + issue/PR; পরের কাজ; blocker + কী সাহায্য দরকার:",
      ),
      l(
        "Demo / acceptance criteria checked / actual evidence and feedback:",
        "Demo / যাচাই করা acceptance criteria / actual evidence ও feedback:",
      ),
      l(
        "Decision / reason / ADR or issue link / unresolved question:",
        "Decision / কারণ / ADR বা issue link / unresolved question:",
      ),
      l(
        "Action / one owner / due or next check-in date / dependency:",
        "Action / একজন owner / due বা next check-in date / dependency:",
      ),
      l(
        "Retrospective: keep / change / one experiment next week / owner:",
        "Retrospective: কী রাখব / কী বদলাব / পরের সপ্তাহের একটি experiment / owner:",
      ),
    ],
  },
  {
    id: "decision",
    title: l(
      "Decision & traceability record",
      "Decision ও traceability record",
    ),
    use: l(
      "Explain the tradeoff and connect a requirement to its evidence, not just a diagram.",
      "শুধু diagram নয়, tradeoff বোঝান আর requirement থেকে evidence যুক্ত করুন।",
    ),
    fields: [
      l(
        "ADR ID / context / constraints / at least two options / choice and reason:",
        "ADR ID / context / constraint / অন্তত দুটি option / choice ও কারণ:",
      ),
      l(
        "Consequences / risks / reviewer / review date / trigger to revisit:",
        "Consequence / risk / reviewer / review date / কখন আবার ভাববে:",
      ),
      l(
        "Requirement ID → scenario → acceptance criterion ID → issue/ADR → implementation/PR → test ID → actual result → release:",
        "সংযোগ লিখুন: Requirement ID → scenario → acceptance criterion ID → issue/ADR → implementation/PR → test ID → actual result → release:",
      ),
    ],
  },
  {
    id: "test-plan",
    title: l(
      "Risk-based test plan & run report",
      "Risk-based test plan ও run report",
    ),
    use: l(
      "Plan before implementation; fill actual results only after running the tests.",
      "Implementation-এর আগে plan; test চালানোর পরেই actual result লিখুন।",
    ),
    fields: [
      l(
        "Scope / excluded checks and reasons / highest risks / release criteria:",
        "Scope / বাদ দেওয়া check ও কারণ / সবচেয়ে বড় risk / release criteria:",
      ),
      l(
        "Test ID / requirement ID / risk / unit, integration, E2E or manual / owner:",
        "Test ID / requirement ID / risk / unit, integration, E2E বা manual / owner:",
      ),
      l(
        "Setup / safe fixture / inputs / actions or exact command / expected outcome:",
        "Setup / safe fixture / input / action বা exact command / expected outcome:",
      ),
      l(
        "Run: commit/tag / runtime and dependency versions / device or environment / date:",
        "Run: commit/tag / runtime ও dependency version / device বা environment / date:",
      ),
      l(
        "Actual outcome / PASS, FAIL, BLOCKED or NOT RUN / safe log or screenshot / defect link:",
        "Actual outcome / PASS, FAIL, BLOCKED বা NOT RUN / safe log বা screenshot / defect link:",
      ),
      l(
        "Accessibility, permission, performance and recovery checks appropriate to this project:",
        "এই project-এর উপযুক্ত accessibility, permission, performance ও recovery check:",
      ),
      l(
        "Retest commit / affected tests rerun / peer verification / remaining limitations:",
        "Retest commit / আবার চালানো affected test / peer verification / বাকি limitation:",
      ),
    ],
  },
  {
    id: "bug-report",
    title: l("Reproducible bug report", "Reproduce করা যায় এমন bug report"),
    use: l(
      "Describe what failed so another person can reproduce it without guessing.",
      "কী fail করেছে এমনভাবে লিখুন যেন অন্যজন অনুমান ছাড়াই reproduce করতে পারে।",
    ),
    fields: [
      l(
        "Title / requirement or test ID / affected commit / environment:",
        "Title / requirement বা test ID / affected commit / environment:",
      ),
      l(
        "Preconditions / minimal steps and safe input / expected result / actual result:",
        "Precondition / ছোট steps ও safe input / expected result / actual result:",
      ),
      l(
        "Frequency / severity and impact / priority and reason / redacted evidence:",
        "Frequency / severity ও impact / priority ও কারণ / private তথ্য বাদ দেওয়া evidence:",
      ),
      l(
        "Owner / workaround / failing regression test / fix PR / retest evidence / verifier:",
        "দায়িত্বশীল owner / workaround / failing regression test / fix PR / retest evidence / যাচাইকারী:",
      ),
    ],
  },
  {
    id: "release-record",
    title: l(
      "Release, reproduction & handover",
      "Release, reproduction ও handover",
    ),
    use: l(
      "Rehearse with a peer using a clean environment; do not merely tick a checklist.",
      "Peer-কে নিয়ে clean environment-এ rehearsal করুন; শুধু checklist tick নয়।",
    ),
    fields: [
      l(
        "Release tag and commit / artifact and checksum if applicable / owner / release notes:",
        "Release tag ও commit / প্রযোজ্য artifact ও checksum / owner / release note:",
      ),
      l(
        "Prerequisites / exact setup-build-test commands / config example without secrets / safe sample data:",
        "Prerequisite / exact setup-build-test command / secret ছাড়া config example / safe sample data:",
      ),
      l(
        "Independent reproducer / environment / actual result / issues found and repaired:",
        "Independent reproducer / environment / actual result / পাওয়া issue ও repair:",
      ),
      l(
        "Deployment and migration steps / smoke test / backup and restore evidence / rollback limits:",
        "Deployment ও migration step / smoke test / backup ও restore evidence / rollback limit:",
      ),
      l(
        "Known issues / safe operating limits / maintenance owner / access transfer without exposed credentials:",
        "Known issue / safe operating limit / maintenance owner / credential প্রকাশ ছাড়া access transfer:",
      ),
      l(
        "Report and demo links / defense questions / permitted offline fallback / department sign-off:",
        "Report ও demo link / defense question / অনুমোদিত offline fallback / department sign-off:",
      ),
    ],
  },
  {
    id: "attribution",
    title: l(
      "Contribution, sources & AI disclosure",
      "Contribution, source ও AI disclosure",
    ),
    use: l(
      "Follow your department and publication rules; explain what each person can defend.",
      "Department ও publication rule মানুন; প্রত্যেকে কী defend করতে পারে লিখুন।",
    ),
    fields: [
      l(
        "Member / design, implementation, testing or research contribution / evidence links:",
        "Member / design, implementation, testing বা research contribution / evidence link:",
      ),
      l(
        "Borrowed code, assets and datasets / source / license or permission / citation:",
        "ধার করা code, asset ও dataset / source / license বা permission / citation:",
      ),
      l(
        "AI/tool assistance allowed by policy / where used / human verification / limitations:",
        "Policy-তে অনুমোদিত AI/tool assistance / কোথায় ব্যবহার / human verification / limitation:",
      ),
      l(
        "Consent and approval records stored safely / public report redactions / reviewer:",
        "নিরাপদে রাখা consent ও approval record / public report থেকে বাদ দেওয়া private তথ্য / reviewer:",
      ),
    ],
  },
];
