import { l } from "@/lib/localized";
import type { ProjectPlaybook } from "@/types/content";

export const teamPlaybooks: ProjectPlaybook[] = [
  {
    id: "team-plan",
    title: l(
      "Agree how the team will work",
      "Team কীভাবে কাজ করবে, আগে ঠিক করুন",
    ),
    when: l("Before the first feature", "প্রথম feature-এর আগে"),
    summary: l(
      "Start with one useful outcome, realistic availability and a shared agreement. A student team needs clarity, not a miniature corporate bureaucracy.",
      "একটি দরকারি outcome, বাস্তবসম্মত সময় আর shared agreement দিয়ে শুরু করুন। Student team-এর দরকার স্পষ্টতা, ছোট আকারের corporate bureaucracy নয়।",
    ),
    steps: [
      {
        title: l("Write a one-page agreement", "এক পৃষ্ঠায় agreement লিখুন"),
        body: l(
          "Record the rubric, deadline, weekly hours around classes/exams, communication channel, response window and supervisor review dates. Agree how to raise concerns, handle absences and credit contributions. Do not rank people by commit counts.",
          "Rubric, deadline, class/exam বাদে সাপ্তাহিক সময়, যোগাযোগের channel, response window আর supervisor review date লিখুন। Concern, অনুপস্থিতি আর contribution credit কীভাবে সামলাবে ঠিক করুন। Commit count দিয়ে কাউকে rank করবেন না।",
        ),
      },
      {
        title: l(
          "Share ownership, rotate responsibilities",
          "Ownership ভাগ করুন, দায়িত্ব rotate করুন",
        ),
        body: l(
          "Give every issue one owner and a different reviewer. Rotate meeting facilitation, release coordination and quality checks; QA is everyone’s responsibility. Pair on risky work so no critical module is understood by only one person. Solo students can arrange milestone reviews with a peer or supervisor.",
          "প্রতি issue-তে একজন owner আর আলাদা reviewer রাখুন। Meeting facilitation, release coordination আর quality check rotate করুন; QA সবার দায়িত্ব। Risky কাজ pair-এ করুন, যেন critical module শুধু একজনই না বোঝে। Solo হলে peer বা supervisor দিয়ে milestone review করান।",
        ),
      },
      {
        title: l(
          "Plan backward from evidence",
          "Evidence থেকে উল্টো দিকে plan করুন",
        ),
        body: l(
          "Agree a small end-to-end milestone, then work in one-week iterations. Reserve time for review, testing, integration and exams. Keep a risk list with owner, early warning and fallback. If access to data or hardware is uncertain, investigate that first, before promising features.",
          "ছোট end-to-end milestone ঠিক করে এক সপ্তাহের iteration-এ কাজ করুন। Review, testing, integration আর exam-এর সময় রাখুন। Risk list-এ owner, early warning আর fallback রাখুন। Data বা hardware access অনিশ্চিত হলে feature promise করার আগেই তা যাচাই করুন।",
        ),
      },
      {
        title: l(
          "Trade scope, not sleep or evidence",
          "Scope কমান, ঘুম বা evidence নয়",
        ),
        body: l(
          "When new work appears, record its benefit, cost and risk; exchange it for a lower-priority item with the team and supervisor. Keep a visible cut list. Freeze nonessential features before the submission buffer; do not postpone all testing or the report to the last week.",
          "নতুন কাজ এলে benefit, cost আর risk লিখুন; team ও supervisor-এর সঙ্গে কম জরুরি কাজ বাদ দিয়ে সেটি নিন। Cut list দৃশ্যমান রাখুন। Submission buffer-এর আগে অপ্রয়োজনীয় feature freeze করুন; সব testing বা report শেষ সপ্তাহে রাখবেন না।",
        ),
      },
    ],
    example: {
      title: l(
        "Example: a 12-week window, not a prescribed schedule",
        "উদাহরণ: ১২ সপ্তাহের window, বাধ্যতামূলক schedule নয়",
      ),
      lines: [
        l(
          "Weeks 1–2: validate the problem, permissions, brief and repo; investigate the biggest risk. Weeks 3–4: demo one tested vertical slice.",
          "সপ্তাহ ১–২: problem, permission, brief আর repo ঠিক করুন; সবচেয়ে বড় risk যাচাই করুন। সপ্তাহ ৩–৪: একটি tested vertical slice demo করুন।",
        ),
        l(
          "Weeks 5–8: add only core slices with review and tests each week. Weeks 9–10: integrate, evaluate, repair and rehearse recovery; freeze new scope.",
          "সপ্তাহ ৫–৮: প্রতি সপ্তাহে review ও test-সহ শুধু core slice যোগ করুন। সপ্তাহ ৯–১০: integration, evaluation, repair আর recovery rehearsal করুন; নতুন scope বন্ধ করুন।",
        ),
        l(
          "Weeks 11–12: independent clean setup, final evidence, report and defense rehearsal. Write the report throughout. Resize this example to your actual semester and approvals.",
          "সপ্তাহ ১১–১২: অন্য কাউকে দিয়ে clean setup, final evidence, report আর defense rehearsal করুন। Report পুরো সময় জুড়েই লিখুন। নিজের semester আর approval অনুযায়ী এই উদাহরণ বদলান।",
        ),
      ],
    },
    sourceIds: ["gitlab-communication"],
  },
  {
    id: "task-board",
    title: l(
      "Turn an idea into small, testable tasks",
      "Idea-কে ছোট, যাচাইযোগ্য task-এ ভাঙুন",
    ),
    when: l(
      "At planning, then update while working",
      "Planning-এ, তারপর কাজের সঙ্গে update",
    ),
    summary: l(
      "Use one shared task manager as the source of truth. Track outcomes and evidence—not a board full of vague cards such as “do frontend”.",
      "একটি shared task manager-এ আসল অবস্থা রাখুন। Outcome আর evidence track করুন—শুধু “frontend করুন” ধরনের অস্পষ্ট card নয়।",
    ),
    steps: [
      {
        title: l("Set up a small board", "ছোট board বানান"),
        body: l(
          "GitHub Projects beside GitHub Issues is a convenient starting point; an existing Trello, Jira or other shared board is fine too. Create Status, Owner, Priority, Milestone and Estimate fields; use labels or the issue body for risk and dependencies. Keep one record per task and link the repository instead of duplicating status in chat.",
          "GitHub Issues-এর পাশে GitHub Projects দিয়ে শুরু করা সুবিধাজনক; আগে থেকেই Trello, Jira বা অন্য shared board থাকলে সেটিও ঠিক আছে। Status, Owner, Priority, Milestone আর Estimate field রাখুন; risk ও dependency label বা issue body-তে লিখুন। প্রতি task-এর একটিই record রাখুন; chat-এ আলাদা status না রেখে repo link করুন।",
        ),
      },
      {
        title: l(
          "Split by usable behavior",
          "ব্যবহারযোগ্য behavior ধরে ভাগ করুন",
        ),
        body: l(
          "Outcome → milestone → user-visible slice → implementation and test tasks. A slice crosses UI, logic and data to deliver one small behavior; separate specialists can own its subtasks. Aim for roughly half a day to two days of focused work per task. If you cannot estimate a risk, create a time-boxed research spike with a question, experiment and decision—not an endless “research” card.",
          "Outcome → milestone → user-visible slice → implementation ও test task। একটি slice UI, logic আর data মিলিয়ে ছোট behavior দেয়; specialist-রা subtask নিতে পারে। প্রতি task আনুমানিক অর্ধ দিন থেকে দুই দিনের focused কাজের মতো রাখুন। Risk estimate না হলে question, experiment আর decision-সহ সময়-বাঁধা research spike করুন—অন্তহীন “research” card নয়।",
        ),
      },
      {
        title: l("Define Ready and Done", "Ready আর Done স্পষ্ট করুন"),
        body: l(
          "Ready means the problem, owner, acceptance criteria, dependencies and test approach are understood. Done means reviewed and merged code, passing relevant tests, verified acceptance criteria, updated docs and linked evidence. “It works on my laptop” and “PR merged” alone are not Done. If an issue auto-closes on merge, keep its verification status separate or complete verification before merging.",
          "Ready মানে problem, owner, acceptance criteria, dependency আর test approach বোঝা হয়েছে। Done মানে reviewed ও merged code, relevant test pass, acceptance criteria যাচাই, updated docs আর evidence link। “আমার laptop-এ চলে” বা “PR merge হয়েছে” একা Done নয়। Merge-এ issue auto-close হলে verification আলাদা track করুন, অথবা merge-এর আগেই verify করুন।",
        ),
      },
      {
        title: l("Keep flow honest", "Board-এ সত্যি অবস্থা রাখুন"),
        body: l(
          "Backlog → Ready → In progress → In review → Verify → Done. Mark blocked work with the reason, helper and next check-in; do not hide it in Done. Start with one active implementation task per person. Review waiting work before starting more. A failed acceptance check returns to In progress with a reproducible defect; adjust estimates using actual experience, not pressure.",
          "Backlog → Ready → In progress → In review → Verify → Done। Blocked হলে কারণ, সাহায্যকারী আর next check-in লিখুন; Done-এ লুকাবেন না। শুরুতে জনপ্রতি একটি active implementation task রাখুন। নতুন কাজের আগে অপেক্ষায় থাকা review দেখুন। Acceptance fail হলে reproducible defect-সহ In progress-এ ফেরান; চাপ দিয়ে নয়, অভিজ্ঞতা দিয়ে estimate বদলান।",
        ),
      },
    ],
    example: {
      title: l(
        "Worked task: prevent a double booking",
        "Worked task: double booking আটকাও",
      ),
      lines: [
        l(
          "Outcome: reliable equipment booking. Milestone: one equipment type can be booked safely. Slice: REQ-01 rejects overlapping reservations, including simultaneous requests.",
          "Outcome: নির্ভরযোগ্য equipment booking। Milestone: এক ধরনের equipment নিরাপদে book করা যায়। Slice: REQ-01 overlapping reservation আটকায়, simultaneous request-সহ।",
        ),
        l(
          "Issue #42: enforce atomic conflict protection. Owner: one implementer; reviewer: another teammate. Dependency: agreed time-zone and interval rules. Estimate: one focused day plus review; re-estimate after the database spike if needed.",
          "Issue #42: atomic conflict protection দিন। Owner: একজন implementer; reviewer: অন্য teammate। Dependency: time-zone আর interval rule ঠিক করা। Estimate: এক focused দিন ও review; database spike-এর পরে দরকার হলে বদলান।",
        ),
        l(
          "AC-01: for two valid concurrent requests for the same slot, one succeeds, one gets a clear conflict, and exactly one booking remains. Tasks: prove the database rule, implement it with an integration test, then connect the accessible conflict message as the next linked task. Evidence: ADR-01 → PR #43 → TEST-01 log.",
          "AC-01: একই slot-এর দুই valid concurrent request-এর একটি succeed, অন্যটিতে পরিষ্কার conflict, আর ঠিক একটি booking থাকবে। Task: database rule প্রমাণ, integration test-সহ implementation, তারপর linked task-এ accessible conflict message। Evidence: ADR-01 → PR #43 → TEST-01 log।",
        ),
      ],
    },
    sourceIds: ["github-projects"],
  },
  {
    id: "repository",
    title: l(
      "Start version control on day one",
      "প্রথম দিন থেকেই version control",
    ),
    when: l(
      "Before code, data or reports start spreading",
      "Code, data বা report ছড়িয়ে পড়ার আগেই",
    ),
    summary: l(
      "Git records local history; a hosted repository lets the team collaborate and recover shared work. Start with the brief and setup instructions, not the night before submission.",
      "Git local history রাখে; hosted repository team-কে একসঙ্গে কাজ আর shared work recover করতে সাহায্য করে। Brief আর setup instruction দিয়েই শুরু করুন, submission-এর আগের রাতে নয়।",
    ),
    steps: [
      {
        title: l("Create one shared home", "একটি shared home বানান"),
        body: l(
          "A maintainer creates the repository, invites teammates using individual accounts and gives only necessary permissions. Choose visibility with the supervisor and data owner; public is not automatically appropriate. Enable account protection. Others clone that repository; do not exchange project ZIPs or create unrelated copies as the collaboration workflow.",
          "Maintainer repository খুলে প্রত্যেকের নিজস্ব account-এ invite করবে, প্রয়োজনমতো permission দেবে। Supervisor আর data owner-এর সঙ্গে visibility ঠিক করুন; public সবসময় উপযুক্ত নয়। Account protection চালু করুন। অন্যরা সেই repository clone করবে; ZIP বা আলাদা অসংযুক্ত copy দিয়ে teamwork নয়।",
        ),
      },
      {
        title: l("Make the first commit useful", "প্রথম commit-ই কাজে লাগুক"),
        body: l(
          "Include a README with purpose, prerequisites and exact setup/test commands; a stack-specific ignore file; a safe .env.example; the package lockfile; and a contribution guide describing branches and reviews. Record licensing with the rights holder. Do not add a license to borrowed work you do not own. Commit small logical changes after checking the diff; push regularly so local history is not your only copy.",
          "README-তে purpose, prerequisite আর exact setup/test command; stack অনুযায়ী ignore file; safe .env.example; package lockfile; আর branch/review-সহ contribution guide রাখুন। Rights holder-এর সঙ্গে licensing ঠিক করুন; নিজের নয় এমন কাজের license দেবেন না। Diff দেখে ছোট logical change commit করুন; নিয়মিত push করুন, যেন শুধু local copy না থাকে।",
        ),
      },
      {
        title: l("Organize for the chosen stack", "Stack অনুযায়ী folder সাজান"),
        body: l(
          "Keep application source, tests, documentation, automation and configuration distinguishable. Follow your framework’s conventions before inventing layers. A web app may use src/, tests/, docs/, scripts/ and .github/workflows/; a research project may also need reproducible experiment configs and data manifests. Version migrations and safe sample data, not live database dumps or generated dependency/build folders.",
          "Application source, test, docs, automation আর configuration আলাদা বোঝা যায় এমন রাখুন। নতুন layer বানানোর আগে framework-এর convention মানুন। Web app-এ src/, tests/, docs/, scripts/ আর .github/workflows/ হতে পারে; research-এ reproducible experiment config ও data manifest লাগতে পারে। Migration আর safe sample data version করুন, live database dump বা generated dependency/build folder নয়।",
        ),
      },
      {
        title: l(
          "Protect data and recoverability",
          "Data আর recovery রক্ষা করুন",
        ),
        body: l(
          "Keep passwords, tokens, personal records and unapproved datasets out of Git, issues and screenshots. A private repo is not a secret vault. Store approved large artifacts separately with version/checksum and access instructions. Back up data separately from code and test restoration. If a credential leaks, revoke/rotate it promptly, notify the responsible owner and follow the host’s cleanup process; deleting the visible file is not enough.",
          "Password, token, personal record আর অনুমতিহীন dataset Git, issue বা screenshot-এ রাখবেন না। Private repo secret vault নয়। অনুমোদিত বড় artifact আলাদা রেখে version/checksum ও access instruction দিন। Code থেকে আলাদা data backup আর restore test করুন। Credential leak হলে দ্রুত revoke/rotate, দায়িত্বশীল owner-কে জানানো আর host-এর cleanup process মানুন; শুধু file delete যথেষ্ট নয়।",
        ),
      },
    ],
    example: {
      title: l("A first-day handoff check", "প্রথম দিনের handoff check"),
      lines: [
        l(
          "A teammate clones the repo into a fresh folder, follows only the README, installs locked dependencies and runs the smallest check. Record where they get stuck, repair the instructions and repeat. Agree now which folders are generated and which evidence belongs in Git.",
          "Teammate নতুন folder-এ clone করে শুধু README মেনে locked dependency install ও সবচেয়ে ছোট check চালাবে। কোথায় আটকাল লিখে instruction ঠিক করে আবার করবে। কোন folder generated আর কোন evidence Git-এ থাকবে এখনই ঠিক করুন।",
        ),
      ],
    },
    sourceIds: ["github-flow", "acm-artifacts"],
  },
  {
    id: "git-workflow",
    title: l(
      "Use a simple branch → review → merge flow",
      "সহজ branch → review → merge flow নিন",
    ),
    when: l("For every meaningful change", "প্রতিটি অর্থপূর্ণ change-এ"),
    summary: l(
      "For a small student team, prefer short-lived feature branches and a working main branch. This is a GitHub-flow-style recommendation, not a requirement for the heavier Gitflow develop/release-branch model.",
      "ছোট student team-এ short-lived feature branch আর working main রাখুন। এটি GitHub-flow ধরনের পরামর্শ; ভারী Gitflow-এর develop/release branch বাধ্যতামূলক নয়।",
    ),
    steps: [
      {
        title: l("Agree the main-branch rules", "Main branch-এর নিয়ম ঠিক করুন"),
        body: l(
          "Keep main runnable. Where the hosting plan permits, require a pull request, at least one peer approval and passing CI; prohibit force pushes to shared branches. Otherwise document the same review gate and enforce it as a team—do not claim the server enforces it. Add long-lived release branches only if you genuinely maintain multiple versions.",
          "Main runnable রাখুন। Hosting plan-এ সম্ভব হলে pull request, অন্তত একটি peer approval আর passing CI বাধ্যতামূলক করুন; shared branch-এ force push নিষিদ্ধ রাখুন। না হলে একই review gate team agreement দিয়ে মানুন—server enforce করে এমন দাবি নয়। একাধিক version সত্যি maintain করলেই long-lived release branch ভাবুন।",
        ),
      },
      {
        title: l(
          "Branch from an up-to-date main",
          "Updated main থেকে branch করুন",
        ),
        body: l(
          "Check git status before switching. Finish or safely preserve unrelated local work first. Pull main with --ff-only, create a descriptive branch such as feature/42-booking-conflict, and commit only relevant files after reviewing the staged diff. Push the branch and open a draft PR early when the approach is risky.",
          "Switch করার আগে git status দেখুন। আগে unrelated local কাজ শেষ করুন বা নিরাপদে সংরক্ষণ করুন। --ff-only দিয়ে main pull, feature/42-booking-conflict-এর মতো branch, তারপর staged diff দেখে শুধু relevant file commit করুন। Branch push করে risky approach হলে শুরুতেই draft PR খুলুন।",
        ),
      },
      {
        title: l(
          "Review behavior, not just formatting",
          "শুধু formatting নয়, behavior review করুন",
        ),
        body: l(
          "Link the issue and acceptance criteria; explain what changed, why, how to test, risks and screenshots where useful. The reviewer checks logic, failure cases, tests, accessibility/security and documentation, then runs the change when practical. Label feedback as blocking or optional; criticize the code, not the person. The author fixes comments, adds evidence and requests re-review.",
          "Issue আর acceptance criteria link করুন; কী বদলেছে, কেন, কীভাবে test, risk আর দরকারি screenshot দিন। Reviewer logic, failure case, test, accessibility/security ও docs দেখবে; সম্ভব হলে চালাবে। Feedback blocking নাকি optional বলুন; code নিয়ে কথা বলুন, মানুষ নিয়ে নয়। Author fix ও evidence দিয়ে re-review চাইবে।",
        ),
      },
      {
        title: l("Resolve conflicts together", "Conflict একসঙ্গে বুঝুন"),
        body: l(
          "Agree who coordinates overlapping edits. If main changed, merge origin/main into your feature branch after fetching, resolve the intended behavior with the other author, then rerun tests and push. Never choose “ours/theirs” blindly or use reset --hard to make a conflict disappear. If the update is confusing, pause and ask for a paired review before changing shared history.",
          "Overlapping edit কে coordinate করবে ঠিক করুন। Main বদলালে fetch-এর পরে feature branch-এ origin/main merge করে অন্য author-এর সঙ্গে intended behavior বুঝে conflict মেটাও; আবার test ও push করুন। অন্ধভাবে “ours/theirs” বা reset --hard দিয়ে conflict লুকাবেন না। Update অস্পষ্ট হলে shared history বদলানোর আগে pair review করুন।",
        ),
      },
      {
        title: l(
          "Merge, verify and release deliberately",
          "বুঝে merge, verify আর release করুন",
        ),
        body: l(
          "After approvals and fresh passing checks, squash-merge if that is the team convention, delete the merged feature branch and verify the integrated acceptance criteria. Update the task’s status and evidence. Tag a tested milestone on main; not every commit is a release. Repair a bad merge through a reviewed revert/fix PR, and consider data compatibility before rolling back a deployment.",
          "Approval আর fresh passing check-এর পরে team convention হলে squash-merge, merged feature branch delete আর integrated acceptance criteria verify করুন। Task status ও evidence update করুন। Main-এর tested milestone tag করুন; সব commit release নয়। Bad merge reviewed revert/fix PR দিয়ে ঠিক করুন; deployment rollback-এর আগে data compatibility ভাবুন।",
        ),
      },
    ],
    example: {
      title: l(
        "Example commands inside an already-cloned repo",
        "আগে clone করা repo-তে command-এর উদাহরণ",
      ),
      lines: [
        l(
          "Run one line at a time, only with a clean working tree. The example path must exist in your project; substitute your actual changed file, issue and branch. Stop and read any error. Review and merge happen in the PR after these commands.",
          "Clean working tree-তে এক লাইন করে চালান। উদাহরণের path আপনার project-এ থাকতে হবে; নিজের changed file, issue আর branch বসাও। Error এলে থেমে পড়ুন। এই command-এর পরে PR-এ review ও merge হবে।",
        ),
      ],
      code: 'git status\ngit switch main\ngit pull --ff-only\ngit switch -c feature/42-booking-conflict\n# Implement and run the relevant tests, then:\ngit diff\ngit add src/booking.ts\ngit diff --staged\ngit commit -m "Prevent overlapping bookings (#42)"\ngit push -u origin feature/42-booking-conflict',
    },
    sourceIds: ["github-flow", "engineering-review"],
  },
  {
    id: "team-sync",
    title: l(
      "Keep sync-ups short and decisions written",
      "Sync-up ছোট, decision লিখিত রাখুন",
    ),
    when: l(
      "On agreed workdays and once each week",
      "ঠিক করা workday-তে আর প্রতি সপ্তাহে",
    ),
    summary: l(
      "Use calls to remove blockers and make decisions, not to read the task board aloud. Written updates keep absent teammates included and leave evidence for your report.",
      "Call দিয়ে blocker সরাও আর decision নিন; task board পড়ে শোনানোর জন্য নয়। Written update অনুপস্থিত teammate-কে যুক্ত রাখে, report-এর evidence-ও হয়।",
    ),
    steps: [
      {
        title: l(
          "Send an asynchronous three-line update",
          "Async তিন লাইনের update দিন",
        ),
        body: l(
          "On agreed workdays, post: finished since the last update + issue/PR link; next action; blocker + the help needed. Update the board first. Set a response window that respects classes and sleep. Raise blockers when discovered, not only at the next scheduled call.",
          "ঠিক করা workday-তে লিখুন: আগের update থেকে কী শেষ + issue/PR link; পরের কাজ; blocker + কী সাহায্য লাগবে। আগে board update করুন। Class আর ঘুমের সময় মেনে response window রাখুন। Blocker পেলে তখনই জানান, পরের call পর্যন্ত অপেক্ষা নয়।",
        ),
      },
      {
        title: l(
          "Try a 15-minute sync when needed",
          "দরকার হলে ১৫ মিনিটের sync করুন",
        ),
        body: l(
          "Before: share the agenda and links. Minutes 0–3: check the milestone and blocked cards. Minutes 3–10: agree decisions or pair people to investigate. Minutes 10–15: confirm each action’s owner and due/check-in date. Move deep debugging to a smaller follow-up with only the needed people. Cancel the call if written updates solve everything.",
          "আগে agenda আর link দিন। মিনিট ০–৩: milestone ও blocked card দেখুন। ৩–১০: decision নিন বা investigation-এর pair ঠিক করুন। ১০–১৫: প্রতিটি action-এর owner আর due/check-in date নিশ্চিত করুন। Deep debugging দরকারি মানুষ নিয়ে আলাদা follow-up-এ করুন। Written update-এই সমাধান হলে call বাদ দিন।",
        ),
      },
      {
        title: l(
          "Demo weekly, improve one habit",
          "সাপ্তাহিক demo, একটি habit উন্নত করুন",
        ),
        body: l(
          "Spend 20–30 minutes showing the integrated slice against acceptance criteria, including a failure—not slides alone. Ask the supervisor for decisions at agreed reviews. Then spend 10 minutes on what helped, what hurt and one process change to try next week. Replan unfinished work using remaining capacity; do not quietly carry every task forward.",
          "২০–৩০ মিনিটে integrated slice acceptance criteria মিলিয়ে দেখান, failure-সহ—শুধু slide নয়। ঠিক করা review-এ supervisor-এর decision চান। তারপর ১০ মিনিটে কী সাহায্য করেছে, কী সমস্যা আর পরের সপ্তাহে একটি process change ঠিক করুন। বাকি capacity দেখে unfinished কাজ replan করুন; সব task চুপচাপ carry করবেন না।",
        ),
      },
      {
        title: l("Leave a decision trail", "Decision-এর trail রাখুন"),
        body: l(
          "Publish a short note: date, attendees, decisions and reasons, actions with owner/date, unresolved questions and links to issues or ADRs. Summarize for absent members; confirm disagreements instead of assuming silence is approval. Do not record calls without consent or place private participant information in public notes.",
          "ছোট note দিন: date, attendee, decision ও কারণ, owner/date-সহ action, unresolved question আর issue/ADR link। অনুপস্থিতদের summary দিন; চুপ থাকাকে approval ধরুন না, disagreement নিশ্চিত করুন। Consent ছাড়া call record বা public note-এ private participant information রাখবেন না।",
        ),
      },
    ],
    example: {
      title: l(
        "A sync-up outcome, not “discussed database”",
        "Sync-up outcome, শুধু “database আলোচনা” নয়",
      ),
      lines: [
        l(
          "Decision: keep server-side atomic conflict protection (ADR-01); client-only checks fail with concurrent requests. Action: issue #42 owner reproduces the race before Thursday’s review; a second teammate reviews the test. Blocker: sandbox database access; supervisor contact assigned. Fallback: reduce the equipment catalogue, not the integrity rule.",
          "Decision: server-side atomic conflict protection থাকবে (ADR-01); concurrent request-এ শুধু client check ব্যর্থ। Action: issue #42 owner বৃহস্পতিবারের review-এর আগে race reproduce করবে; আরেক teammate test review করবে। Blocker: sandbox database access; supervisor contact-এর দায়িত্ব দেওয়া। Fallback: equipment catalogue ছোট হবে, integrity rule নয়।",
        ),
      ],
    },
    sourceIds: ["gitlab-communication"],
  },
];
