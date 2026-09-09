import { l } from "@/lib/localized";
import type { ProjectPlaybook } from "@/types/content";

export const qualityPlaybooks: ProjectPlaybook[] = [
  {
    id: "test-strategy",
    title: l(
      "Design tests around risk, not a coverage trophy",
      "Coverage trophy নয়, risk ধরে test করো",
    ),
    when: l(
      "At acceptance criteria, during coding and before release",
      "Acceptance criteria-তে, coding-এর সময় আর release-এর আগে",
    ),
    summary: l(
      "Write the test approach before implementation. Use fast focused checks for rules, integration tests for boundaries and a few end-to-end journeys for what users must be able to do.",
      "Implementation-এর আগে test approach লেখো। Rule-এর জন্য দ্রুত focused check, boundary-তে integration test আর জরুরি user journey-তে অল্প end-to-end test রাখো।",
    ),
    steps: [
      {
        title: l(
          "Choose the highest-risk behaviors",
          "সবচেয়ে risky behavior বেছে নাও",
        ),
        body: l(
          "List each requirement, what can fail and the impact. Prioritize lost/corrupted data, unauthorized access, incorrect results and unusable core journeys before cosmetic issues. For each test record ID, requirement, level, owner, setup, inputs, action and expected result. Mark not-run work honestly; a planned test is not evidence of passing.",
          "প্রতি requirement-এ কী fail হতে পারে আর impact লেখো। Cosmetic issue-এর আগে data loss/corruption, unauthorized access, ভুল result আর unusable core journey দেখো। প্রতি test-এ ID, requirement, level, owner, setup, input, action আর expected result রাখো। না চালালে not-run লেখো; planned test pass-এর evidence নয়।",
        ),
      },
      {
        title: l(
          "Test rules and real boundaries",
          "Rule আর বাস্তব boundary test করো",
        ),
        body: l(
          "Unit tests isolate deterministic logic: empty input, boundaries and invalid states. Integration tests exercise real database constraints, migrations or service contracts in an isolated test environment. Mock external services where needed, but do not mock away the database behavior you are claiming to verify. Reset test data and control clocks/randomness where practical.",
          "Unit test-এ deterministic logic আলাদা করে empty input, boundary আর invalid state দেখো। Integration test-এ isolated test environment-এ real database constraint, migration বা service contract যাচাই করো। দরকারে external service mock করো, কিন্তু যে database behavior যাচাইয়ের দাবি করছ সেটিই mock কোরো না। Test data reset আর সম্ভব হলে clock/randomness control করো।",
        ),
      },
      {
        title: l(
          "Verify the user journey and failures",
          "User journey আর failure যাচাই করো",
        ),
        body: l(
          "Automate a small set of critical end-to-end journeys using user-visible behavior and stable accessible locators. Cover success, validation, permissions, empty/error states and recovery. Avoid arbitrary sleeps and shared test accounts that interfere with each other. Test the production build on the real deployment path as well as local development.",
          "User-visible behavior আর stable accessible locator দিয়ে অল্প critical end-to-end journey automate করো। Success, validation, permission, empty/error state আর recovery দেখো। অকারণ sleep বা পরস্পরকে প্রভাবিত করা shared test account এড়াও। Local development-এর সঙ্গে real deployment path-এ production build test করো।",
        ),
      },
      {
        title: l(
          "Add manual and specialist checks",
          "Manual আর specialist check যোগ করো",
        ),
        body: l(
          "For interfaces, check keyboard-only use, visible focus, labels, zoom, narrow screens and relevant languages/themes; automated accessibility scans cannot prove conformance. In an authorized sandbox, check role permissions, secret handling and invalid input. Set a realistic performance target with device, dataset and workload before measuring. Adapt evidence for ML, hardware and networks in the project-type section; web E2E is not a substitute for model evaluation or hardware safety.",
          "Interface-এ keyboard-only use, visible focus, label, zoom, সরু screen আর relevant language/theme দেখো; automated accessibility scan conformance প্রমাণ করে না। অনুমোদিত sandbox-এ role permission, secret handling আর invalid input দেখো। মাপার আগে device, dataset ও workload-সহ বাস্তব performance target ঠিক করো। Project-type section মেনে ML, hardware ও network evidence বদলাও; web E2E model evaluation বা hardware safety-এর বিকল্প নয়।",
        ),
      },
      {
        title: l(
          "Turn defects into regression evidence",
          "Defect থেকে regression evidence বানাও",
        ),
        body: l(
          "A bug report needs environment/commit, minimal reproduction, expected versus actual behavior, impact and safe logs. Distinguish severity (harm) from priority (when to fix). Reproduce, add a failing regression test where practical, fix, rerun the affected tests and core journey, then ask a peer to verify. Investigate flaky tests; retries are diagnostic, not a reason to hide failures. Coverage helps find gaps but 100% does not prove correctness.",
          "Bug report-এ environment/commit, ছোট reproduction, expected বনাম actual, impact আর safe log দাও। Severity (ক্ষতি) আর priority (কখন fix) আলাদা করো। Reproduce, সম্ভব হলে failing regression test, fix, affected test ও core journey আবার চালাও, তারপর peer verification। Flaky test খতিয়ে দেখো; retry দিয়ে failure লুকিও না। Coverage gap খুঁজতে সাহায্য করে, কিন্তু ১০০% correctness প্রমাণ নয়।",
        ),
      },
    ],
    example: {
      title: l(
        "TEST-01: a plan for REQ-01, not fabricated results",
        "TEST-01: REQ-01-এর plan, বানানো result নয়",
      ),
      lines: [
        l(
          "Unit: touching time intervals do not overlap under the agreed rule; invalid/reversed intervals are rejected. Integration: with an empty isolated database and two valid users, submit competing reservations concurrently; assert exactly one success, one conflict and one stored booking.",
          "Unit: agreed rule অনুযায়ী পাশাপাশি interval overlap নয়; invalid/উল্টো interval reject। Integration: empty isolated database আর দুই valid user দিয়ে একই slot-এ concurrently reservation দাও; ঠিক এক success, এক conflict আর এক stored booking assert করো।",
        ),
        l(
          "End-to-end/manual: the unsuccessful user gets a clear, keyboard-reachable recovery path and can choose another slot. Security: a different user cannot cancel somebody else’s booking. Recovery: a cancelled slot becomes available again without duplicate records.",
          "End-to-end/manual: unsuccessful user পরিষ্কার keyboard-এ ব্যবহারযোগ্য recovery path পায়, অন্য slot নিতে পারে। Security: অন্য user কারও booking cancel করতে পারে না। Recovery: cancel হলে slot আবার available, duplicate record ছাড়া।",
        ),
        l(
          "Run record: commit/tag, database and app versions, fixture, command, timestamp, expected/actual, pass/fail/blocked/not-run and log or screenshot. Repeat on the release candidate and link failures to issues. No invented pass counts, latency numbers or screenshots.",
          "Run record: commit/tag, database ও app version, fixture, command, timestamp, expected/actual, pass/fail/blocked/not-run আর log বা screenshot। Release candidate-এ আবার চালিয়ে failure issue-তে link করো। বানানো pass count, latency বা screenshot নয়।",
        ),
      ],
    },
    sourceIds: ["playwright-practices", "wai-evaluation", "owasp-asvs"],
  },
  {
    id: "continuous-integration",
    title: l(
      "Make checks repeatable and releases recoverable",
      "Check repeatable, release recoverable করো",
    ),
    when: l(
      "From the first runnable slice onward",
      "প্রথম runnable slice থেকেই",
    ),
    summary: l(
      "Continuous integration runs agreed checks whenever changes are proposed. Start small, keep the checks trustworthy and build the artifact that you actually test and hand over.",
      "Continuous integration change প্রস্তাবের সময় agreed check চালায়। ছোট করে শুরু করো, check বিশ্বাসযোগ্য রাখো, আর যে artifact test ও handover করবে সেটিই build করো।",
    ),
    steps: [
      {
        title: l(
          "Create a fast pull-request gate",
          "দ্রুত pull-request gate বানাও",
        ),
        body: l(
          "On pull requests and main updates, use a clean runner, pinned runtime and locked dependency install. Run formatting checks (not silent auto-fixes), lint/static checks, unit and relevant integration tests, then a production build. Add schema/content checks for content sites. Use the same documented commands locally and in CI; a skipped check must not be described as passed.",
          "Pull request আর main update-এ clean runner, pinned runtime ও locked dependency install রাখো। Formatting check (চুপচাপ auto-fix নয়), lint/static check, unit ও relevant integration test, তারপর production build চালাও। Content site-এ schema/content check দাও। Local ও CI-তে একই documented command; skipped check-কে pass বলবে না।",
        ),
      },
      {
        title: l("Test the release candidate", "Release candidate test করো"),
        body: l(
          "Serve the built artifact in an isolated test environment and run critical E2E checks. Before a milestone tag, also run the broader regression suite, accessibility/manual checks, migration and recovery rehearsal, and a clean setup by someone else. Use safe fixtures and stub third-party services; student CI should not charge real cards, email real users or modify production data.",
          "Built artifact isolated test environment-এ serve করে critical E2E চালাও। Milestone tag-এর আগে broader regression, accessibility/manual check, migration ও recovery rehearsal, আর অন্য কাউকে দিয়ে clean setup করাও। Safe fixture ও third-party stub নাও; student CI যেন real card charge, user-কে email বা production data modify না করে।",
        ),
      },
      {
        title: l(
          "Keep logs safe and failures visible",
          "Log নিরাপদ, failure দৃশ্যমান রাখো",
        ),
        body: l(
          "Use minimal CI permissions and protected secrets only when necessary; do not expose them to untrusted pull-request code. Keep test reports and useful failure artifacts with sensible retention, removing personal data. Fix a failed gate before merging; document any explicitly approved exception, owner and follow-up instead of disabling the test to get green.",
          "CI-তে minimum permission আর প্রয়োজন হলেই protected secret দাও; untrusted pull-request code-এ secret দিও না। Personal data বাদ দিয়ে test report ও দরকারি failure artifact সীমিত retention-এ রাখো। Merge-এর আগে failed gate fix করো; approved exception হলে owner ও follow-up লেখো, green করতে test বন্ধ নয়।",
        ),
      },
      {
        title: l(
          "Practice a release and a handover",
          "Release আর handover rehearsal করো",
        ),
        body: l(
          "Name the tested commit/tag, artifact checksum when useful, config, migration steps, known limitations and release owner. Rehearse a smoke test and a safe rollback/restore; code rollback cannot undo an incompatible data migration. Give the next maintainer setup, architecture decisions, test commands, open issues and access-transfer instructions without secrets in the report. Keep an offline demo backup permitted by your rubric.",
          "Tested commit/tag, দরকারে artifact checksum, config, migration step, known limit আর release owner লেখো। Smoke test ও safe rollback/restore rehearsal করো; code rollback incompatible data migration উল্টাতে পারে না। পরের maintainer-কে setup, architecture decision, test command, open issue ও access-transfer instruction দাও, report-এ secret নয়। Rubric অনুমতি দিলে offline demo backup রাখো।",
        ),
      },
    ],
    example: {
      title: l(
        "A pipeline students can explain",
        "যে pipeline student explain করতে পারে",
      ),
      lines: [
        l(
          "Pull request → clean install → format/lint/type checks → unit/integration tests → production build → preview smoke/E2E → peer review → merge. For a milestone, add full regression, manual checks and independent reproduction before tagging the verified commit.",
          "Pull request → clean install → format/lint/type check → unit/integration test → production build → preview smoke/E2E → peer review → merge। Milestone-এ full regression, manual check আর independent reproduction করে verified commit tag করো।",
        ),
        l(
          "For CSE-Pothik specifically: yarn install --immutable; yarn check; yarn build; yarn verify:build; then set PLAYWRIGHT_SERVER=preview with the same BASE_PATH and run yarn test:e2e and yarn test:a11y. These are this repository’s commands, not a universal pipeline for every stack.",
          "CSE-Pothik-এর জন্য: yarn install --immutable; yarn check; yarn build; yarn verify:build; তারপর একই BASE_PATH-সহ PLAYWRIGHT_SERVER=preview দিয়ে yarn test:e2e ও yarn test:a11y। এগুলো এই repository-এর command, সব stack-এর universal pipeline নয়।",
        ),
      ],
    },
    sourceIds: ["github-actions", "acm-artifacts"],
  },
];
