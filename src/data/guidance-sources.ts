import { l } from "@/lib/localized";
import type { GuidanceSource } from "@/types/content";

const lastReviewed = "2026-08-31";
export const guidanceSources: GuidanceSource[] = [
  {
    id: "amazon-interviews",
    title: "Software development interview topics",
    provider: "Amazon Jobs",
    url: "https://www.amazon.jobs/content/en/how-we-hire/interview-prep/software-development-topics",
    scope: l(
      "Use the topic guidance to plan role-specific practice; confirm the actual format with the recruiter.",
      "Role-specific practice plan করতে topic guidance নাও; recruiter-এর কাছে actual format নিশ্চিত করো।",
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
      "Problem solving, coding আর testing expectation পড়ো; role আর level অনুযায়ী requirement বদলায়।",
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
      "নির্দিষ্ট vacancy খুঁজে qualification, location আর application instruction দেখো।",
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
      "Current vacancy আর role-specific preparation দেখো; company name দিয়ে requirement ধরে নিও না।",
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
      "Software, embedded, robotics আর অন্য role আলাদা করো; actual responsibility আর eligibility দেখো।",
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
      "NASA company নয়, government agency। FAQ অনুযায়ী বেশিরভাগ ক্ষেত্রে U.S. citizenship প্রয়োজন; প্রতিটি route আর vacancy আলাদা করে দেখো।",
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
      "নির্দিষ্ট opening-এ work authorization আর export-control condition থাকলে পড়ো। সব applicant-এর জন্য এক নিয়ম ধরে নিও না।",
    ),
    lastReviewed,
  },
  {
    id: "bjit-careers",
    title: "Careers",
    provider: "BJIT",
    url: "https://bjitgroup.com/career",
    scope: l(
      "An example of an export-services employer's vacancy source, not a ranking or a claim of current availability for your role.",
      "Export-services employer-এর vacancy source-এর উদাহরণ; ranking বা তোমার role-এ এখন vacancy আছে—এমন দাবি নয়।",
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
      "Written, asynchronous collaboration-এর public example হিসেবে দেখো; সব remote team-এর নিয়ম নয়।",
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
      "একটি university-এর official example। প্রতিটি target program-এর prerequisite, test, deadline, funding আর fee আলাদা করে যাচাই করো।",
    ),
    lastReviewed,
  },
  {
    id: "erasmus-mundus",
    title: "Erasmus Mundus Joint Masters",
    provider: "European Commission",
    url: "https://erasmus-plus.ec.europa.eu/opportunities/opportunities-for-individuals/students/erasmus-mundus-joint-masters",
    scope: l(
      "Explore joint master's programs and funding information; the program's own call determines eligibility and deadlines.",
      "Joint master's program আর funding information দেখো; eligibility আর deadline program-এর নিজস্ব call ঠিক করে।",
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
      "Reproducibility আর artifact criteria reference হিসেবে নাও; বাছা venue-এর actual submission rule মানো।",
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
      "Submission-এর আগে current authorship আর AI-use policy দেখো। Venue অনুযায়ী policy আলাদা এবং বদলাতে পারে।",
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
      "একটি platform-এর workflow; যোগ দেওয়া বাধ্যতামূলক নয়। ব্যবহার করলে current fee, eligibility, payment আর dispute terms পড়ো।",
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
      "শুধু সাধারণ customer, market আর cost-planning ধারণা নাও। U.S. registration, tax বা funding advice বাংলাদেশের legal guidance নয়।",
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
      "Interview, informed consent আর analysis guidance পড়ো। Privacy মানো; participant evidence বানিয়ে লিখো না।",
    ),
    lastReviewed,
  },
];
export const guidanceSourceById = new Map(
  guidanceSources.map((source) => [source.id, source]),
);
