import { l } from "@/lib/localized";
import type { GuidanceSource } from "@/types/content";

const lastReviewed = "2026-08-31";
export const guidanceSources: GuidanceSource[] = [
  {
    id: "dora-ai-software-2025",
    title: "State of AI-assisted Software Development 2025",
    provider: "DORA",
    url: "https://dora.dev/research/2025/dora-report/",
    scope: l(
      "Use the finding that AI amplifies an organization's existing strengths and weaknesses as a reason to improve the underlying engineering system—not as a permanent forecast about one tool or role.",
      "AI organization-এর existing শক্তি ও দুর্বলতা amplify করে—এই finding-টি underlying engineering system উন্নত করার কারণ হিসেবে নিন; কোনো tool বা role নিয়ে স্থায়ী forecast হিসেবে নয়।",
    ),
    lastReviewed: "2026-09-07",
  },
  {
    id: "nist-ai-devsecops-oversight",
    title: "AI in secure software development",
    provider: "NIST NCCoE",
    url: "https://pages.nist.gov/nccoe-devsecops/notational-reference-model.html#artificial-intelligence",
    scope: l(
      "Use the guidance on human validation, verifiable processes and oversight of AI-generated software. Apply effort in proportion to the system's actual risk and context.",
      "AI-generated software-এ human validation, verifiable process ও oversight-এর guidance নিন। System-এর বাস্তব risk ও context অনুযায়ী effort ঠিক করুন।",
    ),
    lastReviewed: "2026-09-07",
  },
  {
    id: "github-career-profile",
    title: "Using your GitHub profile to enhance your resume",
    provider: "GitHub Docs",
    url: "https://docs.github.com/en/account-and-profile/tutorials/using-your-github-profile-to-enhance-your-resume",
    scope: l(
      "Use the project-selection, repository-presentation and profile guidance to make relevant work easier to review. Edit any AI-assisted draft yourself and never expose secrets, private data or invented achievements.",
      "Relevant project বাছাই, repository presentation আর profile guidance দিয়ে কাজ reviewer-এর জন্য সহজ করুন। AI-assisted draft নিজে edit করুন; secret, private data বা বানানো achievement প্রকাশ করবেন না।",
    ),
    lastReviewed: "2026-09-02",
  },
  {
    id: "github-readmes",
    title: "About the repository README file",
    provider: "GitHub Docs",
    url: "https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes",
    scope: l(
      "Use a concise README to explain what the project does, why it matters, how to run it, where to get help and who contributed. A README improves discoverability; it does not prove the claims by itself.",
      "Project কী করে, কেন দরকার, কীভাবে run করবে, কোথায় help পাবে আর কার contribution—সংক্ষিপ্ত README-তে বোঝান। README কাজ খুঁজে পেতে সাহায্য করে; একা কোনো claim প্রমাণ করে না।",
    ),
    lastReviewed: "2026-09-02",
  },
  {
    id: "github-projects",
    title: "Best practices for Projects",
    provider: "GitHub Docs",
    url: "https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/best-practices-for-projects",
    scope: l(
      "Use linked issues, small tasks and shared project views. The board states and student timeboxes in this guide are editorial suggestions, not GitHub requirements.",
      "Linked issue, ছোট task আর shared project view নিন। Guide-এর board state আর student timebox editorial suggestion, GitHub requirement নয়।",
    ),
    lastReviewed: "2026-09-01",
  },
  {
    id: "github-flow",
    title: "GitHub flow",
    provider: "GitHub Docs",
    url: "https://docs.github.com/en/get-started/using-github/github-flow",
    scope: l(
      "Learn the branch, pull-request, feedback and merge cycle. Adapt review and branch-protection settings to the team and hosting plan; this is not the heavier Gitflow model.",
      "Branch, pull-request, feedback আর merge cycle শিখুন। Team ও hosting plan অনুযায়ী review এবং branch protection ঠিক করুন; এটি ভারী Gitflow model নয়।",
    ),
    lastReviewed: "2026-09-01",
  },
  {
    id: "playwright-practices",
    title: "Best practices for browser testing",
    provider: "Playwright",
    url: "https://playwright.dev/docs/best-practices",
    scope: l(
      "Use user-visible behavior, test isolation and resilient locators for web E2E tests. This source does not cover all unit, research or hardware testing needs.",
      "Web E2E-তে user-visible behavior, test isolation আর resilient locator ব্যবহার করুন। এই source সব unit, research বা hardware testing-এর প্রয়োজন মেটায় না।",
    ),
    lastReviewed: "2026-09-01",
  },
  {
    id: "github-actions",
    title: "Understanding GitHub Actions",
    provider: "GitHub Docs",
    url: "https://docs.github.com/en/actions/get-started/understand-github-actions",
    scope: l(
      "Understand event-triggered workflows, runners, jobs and steps. Choose project-specific checks; merely using Actions does not make a project production-ready.",
      "Event-triggered workflow, runner, job আর step বুঝুন। Project অনুযায়ী check নিন; শুধু Actions ব্যবহার করলেই production-ready নয়।",
    ),
    lastReviewed: "2026-09-01",
  },
  {
    id: "engineering-review",
    title: "Engineering practices: code review",
    provider: "Google Engineering Practices",
    url: "https://google.github.io/eng-practices/review/",
    scope: l(
      "Use the review principles for small, understandable changes and constructive feedback. These are engineering practices, not a university grading rubric.",
      "ছোট, বোঝা যায় এমন change আর গঠনমূলক feedback-এর review principle নিন। এগুলো engineering practice, university grading rubric নয়।",
    ),
    lastReviewed,
  },
  {
    id: "owasp-asvs",
    title: "Application Security Verification Standard",
    provider: "OWASP Foundation",
    url: "https://owasp.org/www-project-application-security-verification-standard/",
    scope: l(
      "Select relevant application-security checks with your supervisor and document scope. A student checklist does not establish ASVS compliance or certify security.",
      "Supervisor-এর সঙ্গে প্রাসঙ্গিক application-security check বেছে scope লিখুন। Student checklist মানেই ASVS compliance বা security certification নয়।",
    ),
    lastReviewed,
  },
  {
    id: "wai-evaluation",
    title: "Evaluating Web Accessibility",
    provider: "W3C Web Accessibility Initiative",
    url: "https://www.w3.org/WAI/test-evaluate/",
    scope: l(
      "Combine automated checks, keyboard/manual checks and appropriate user involvement. No automated tool alone proves accessibility conformance.",
      "Automated check, keyboard/manual check আর উপযুক্ত user involvement মেলান। শুধু automated tool accessibility conformance প্রমাণ করে না।",
    ),
    lastReviewed,
  },
  {
    id: "amazon-interviews",
    title: "Software development interview topics",
    provider: "Amazon Jobs",
    url: "https://www.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics",
    scope: l(
      "Use the topic guidance to plan role-specific practice; confirm the actual format with the recruiter.",
      "Role-specific practice plan করতে topic guidance নিন; recruiter-এর কাছে actual format নিশ্চিত করুন।",
    ),
    lastReviewed,
  },
  {
    id: "microsoft-interviews",
    title: "Technical interviewing",
    provider: "Microsoft Careers",
    url: "https://careers.microsoft.com/v2/global/en/hiring-tips/technical-interviewing",
    scope: l(
      "Read problem solving, coding and testing expectations; requirements vary by role and level.",
      "Problem solving, coding আর testing expectation পড়ুন; role আর level অনুযায়ী requirement বদলায়।",
    ),
    lastReviewed,
  },
  {
    id: "google-careers",
    title: "Careers and job search",
    provider: "Google",
    url: "https://www.google.com/about/careers/applications/",
    scope: l(
      "Find a specific vacancy and check its qualifications, location and application instructions.",
      "নির্দিষ্ট vacancy খুঁজে qualification, location আর application instruction দেখুন।",
    ),
    lastReviewed,
  },
  {
    id: "meta-careers",
    title: "Careers",
    provider: "Meta",
    url: "https://www.metacareers.com/",
    scope: l(
      "Check current vacancies and role-specific preparation; do not infer requirements from the company name.",
      "Current vacancy আর role-specific preparation দেখুন; company name দিয়ে requirement ধরে নেবেন না।",
    ),
    lastReviewed,
  },
  {
    id: "tesla-careers",
    title: "Careers",
    provider: "Tesla",
    url: "https://www.tesla.com/careers",
    scope: l(
      "Separate software, embedded, robotics and other roles; inspect the actual responsibilities and eligibility.",
      "Software, embedded, robotics আর অন্য role আলাদা করুন; actual responsibility আর eligibility দেখুন।",
    ),
    lastReviewed,
  },
  {
    id: "nasa-careers",
    title: "Careers FAQ",
    provider: "NASA",
    url: "https://www.nasa.gov/careers/faq/",
    scope: l(
      "NASA is a government agency, not a company. Its FAQ says U.S. citizenship is required in most cases; check each route and vacancy.",
      "NASA company নয়, government agency। FAQ অনুযায়ী বেশিরভাগ ক্ষেত্রে U.S. citizenship প্রয়োজন; প্রতিটি route আর vacancy আলাদা করে দেখুন।",
    ),
    lastReviewed,
  },
  {
    id: "spacex-careers",
    title: "Careers",
    provider: "SpaceX",
    url: "https://www.spacex.com/careers/",
    scope: l(
      "Read the specific opening, including work authorization and any export-control conditions. Do not assume one rule covers every applicant.",
      "নির্দিষ্ট opening-এ work authorization আর export-control condition থাকলে পড়ুন। সব applicant-এর জন্য এক নিয়ম ধরে নেবেন না।",
    ),
    lastReviewed,
  },
  {
    id: "basis-industry-catalog",
    title: "Bangladesh IT industry catalog",
    provider: "BASIS",
    url: "https://itcatalog.basis.org.bd/product-enlist",
    scope: l(
      "Use the member and product categories to discover different kinds of local technology employers, then verify vacancies and requirements on each employer's official page.",
      "Member আর product category দেখে local technology employer-এর ধরনগুলো খুঁজে নিন; তারপর প্রতিটি employer-এর official page-এ vacancy আর requirement যাচাই করুন।",
    ),
    lastReviewed,
  },
  {
    id: "gitlab-communication",
    title: "Communication handbook",
    provider: "GitLab",
    url: "https://handbook.gitlab.com/handbook/communication/",
    scope: l(
      "Study written, asynchronous collaboration as one team's public example, not a universal remote-work rulebook.",
      "Written, asynchronous collaboration-এর public example হিসেবে দেখুন; সব remote team-এর নিয়ম নয়।",
    ),
    lastReviewed,
  },
  {
    id: "berkeley-admissions",
    title: "Graduate application requirements",
    provider: "UC Berkeley Graduate Division",
    url: "https://grad.berkeley.edu/admissions/application-process/requirements/",
    scope: l(
      "One university's official example. Verify every target program's prerequisites, tests, deadlines, funding and fees independently.",
      "একটি university-এর official example। প্রতিটি target program-এর prerequisite, test, deadline, funding আর fee আলাদা করে যাচাই করুন।",
    ),
    lastReviewed,
  },
  {
    id: "erasmus-mundus",
    title: "Erasmus Mundus Joint Masters",
    provider: "European Commission",
    url: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters",
    scope: l(
      "Explore joint master's programs and funding information; the program's own call determines eligibility and deadlines.",
      "Joint master's program আর funding information দেখুন; eligibility আর deadline program-এর নিজস্ব call ঠিক করে।",
    ),
    lastReviewed,
  },
  {
    id: "acm-artifacts",
    title: "Artifact review and badging",
    provider: "ACM",
    url: "https://www.acm.org/publications/policies/artifact-review-and-badging-current",
    scope: l(
      "Use reproducibility and artifact criteria as a reference; follow your chosen venue's actual submission rules.",
      "Reproducibility আর artifact criteria reference হিসেবে নিন; বাছা venue-এর actual submission rule মানুন।",
    ),
    lastReviewed,
  },
  {
    id: "acm-authorship",
    title: "Policy on authorship",
    provider: "ACM",
    url: "https://www.acm.org/publications/policies/new-acm-policy-on-authorship",
    scope: l(
      "Check current authorship and AI-use policies before submission. Policies differ between venues and can change.",
      "Submission-এর আগে current authorship আর AI-use policy দেখুন। Venue অনুযায়ী policy আলাদা এবং বদলাতে পারে।",
    ),
    lastReviewed,
  },
  {
    id: "upwork-start",
    title: "Getting started as a freelancer",
    provider: "Upwork Help",
    url: "https://support.upwork.com/hc/en-us/articles/211067578-How-to-get-started-as-a-freelancer-on-Upwork",
    scope: l(
      "One platform's workflow, not a requirement to join it. Read current fees, eligibility, payment and dispute terms before using a platform.",
      "একটি platform-এর workflow; যোগ দেওয়া বাধ্যতামূলক নয়। ব্যবহার করলে current fee, eligibility, payment আর dispute terms পড়ুন।",
    ),
    lastReviewed,
  },
  {
    id: "sba-planning",
    title: "Plan your business",
    provider: "U.S. Small Business Administration",
    url: "https://www.sba.gov/counseling/plan-your-business/",
    scope: l(
      "Use general customer, market and cost-planning ideas only. U.S. registration, tax and funding advice is not Bangladesh legal guidance.",
      "শুধু সাধারণ customer, market আর cost-planning ধারণা নিন। U.S. registration, tax বা funding advice বাংলাদেশের legal guidance নয়।",
    ),
    lastReviewed,
  },
  {
    id: "gov-research",
    title: "User research",
    provider: "GOV.UK Service Manual",
    url: "https://www.gov.uk/service-manual/user-research",
    scope: l(
      "Read interviewing, informed consent and analysis guidance. Respect privacy and do not invent participant evidence.",
      "Interview, informed consent আর analysis guidance পড়ুন। Privacy মানুন; participant evidence বানিয়ে লিখুন না।",
    ),
    lastReviewed,
  },
];
export const guidanceSourceById = new Map(
  guidanceSources.map((source) => [source.id, source]),
);
