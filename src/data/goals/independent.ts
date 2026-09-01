import { l } from "@/lib/localized";
import type { GoalGuide } from "@/types/content";

export const independentGoals: GoalGuide[] = [
  {
    id: "freelancing",
    title: l("Freelancing", "Freelancing-এর প্রস্তুতি"),
    summary: l(
      "Turn a specific skill into a clearly scoped service: find a real client need, show proof, agree on delivery and build trust.",
      "নির্দিষ্ট skill-কে clear scope-এর service করো: real client need খোঁজো, proof দেখাও, delivery ঠিক করো আর trust বানাও।",
    ),
    reality: l(
      "Freelancing is client work plus running a small service business—not quick income from learning a tool. Finding clients, pricing, revisions and uncertain demand are part of the work. Platforms are optional; their fees, identity requirements and terms vary. No income or first-client timeline is guaranteed.",
      "Freelancing হলো client work আর ছোট service business চালানো—tool শিখে দ্রুত income নয়। Client খোঁজা, pricing, revision আর uncertain demand কাজের অংশ। Platform optional; fee, identity requirement আর terms আলাদা। Income বা first-client timeline নিশ্চিত নয়।",
    ),
    variants: [
      {
        title: l("A narrow technical service", "নির্দিষ্ট technical service"),
        description: l(
          "Examples: accessible landing pages, a small mobile feature, a tested integration or a data-cleaning task. Choose something you can deliver and support safely.",
          "উদাহরণ: accessible landing page, ছোট mobile feature, tested integration বা data-cleaning task। নিরাপদে deliver আর support করতে পারবে এমন কাজ বাছো।",
        ),
      },
      {
        title: l(
          "Direct clients or a marketplace",
          "Direct client বা marketplace",
        ),
        description: l(
          "Direct work needs your own discovery and agreement process. A marketplace adds rules and fees; neither route removes the need to verify clients and scope.",
          "Direct কাজে নিজের discovery আর agreement process লাগে। Marketplace-এ rule আর fee যোগ হয়; কোনোটিতেই client আর scope যাচাই বাদ যায় না।",
        ),
      },
    ],
    stages: [
      {
        id: "foundation",
        title: l(
          "Define one service you can deliver",
          "Deliver করতে পারো এমন একটি service ঠিক করো",
        ),
        why: l(
          "Clients buy an outcome, not an endless list of technologies.",
          "Client outcome কেনেন, technology-এর লম্বা list নয়।",
        ),
        tasks: [
          l(
            "Choose one client type and a bounded problem. Use the linked career roadmap to fill the skills needed to deliver, test and explain the result.",
            "এক client type আর bounded problem নাও। Result deliver, test আর explain করার skill gap linked career roadmap দিয়ে পূরণ করো।",
          ),
          l(
            "Write what is included, excluded, needed from the client and what 'done' means. Build a small demonstration using fictional or permitted data.",
            "কী included, excluded, client থেকে কী দরকার আর 'done' মানে কী লেখো। Fictional বা permitted data দিয়ে ছোট demonstration বানাও।",
          ),
        ],
        evidence: l(
          "One service brief and a demo you can modify without following a tutorial step by step.",
          "এক service brief আর tutorial ধাপে ধাপে না দেখে বদলাতে পারো এমন demo।",
        ),
        notYet: l(
          "Do not offer everything from logos to AI systems before proving one service.",
          "একটি service prove করার আগে logo থেকে AI system সব offer নয়।",
        ),
        sourceId: "upwork-start",
      },
      {
        id: "evidence",
        title: l(
          "Show proof and learn the client's problem",
          "Proof দেখাও আর client-এর সমস্যা জানো",
        ),
        why: l(
          "Good discovery prevents expensive misunderstandings.",
          "ভালো discovery খরচের ভুল বোঝাবুঝি কমায়।",
        ),
        tasks: [
          l(
            "Create two focused examples with a problem, your decisions, testing and limitations. Label self-initiated projects honestly; never invent clients or testimonials.",
            "Problem, decision, testing আর limitation-সহ দুই focused example বানাও। Self-initiated project সেভাবে বলো; client বা testimonial বানিও না।",
          ),
          l(
            "Talk to plausible clients respectfully. Ask how the task works today, what fails, who approves and what constraints exist before proposing a solution.",
            "সম্ভাব্য client-এর সঙ্গে সম্মান রেখে কথা বলো। Solution-এর আগে আজ কাজ কীভাবে হয়, কোথায় আটকে, কে approve করে আর constraint কী জিজ্ঞেস করো।",
          ),
        ],
        evidence: l(
          "A compact portfolio and a discovery note that distinguishes the client's need from your assumptions.",
          "Compact portfolio আর client need বনাম নিজের assumption আলাদা করা discovery note।",
        ),
        notYet: l(
          "Do not spam generic proposals or perform a complete client project as a free sample.",
          "Generic proposal spam বা free sample হিসেবে সম্পূর্ণ client project নয়।",
        ),
        sourceId: "gov-research",
      },
      {
        id: "application",
        title: l(
          "Agree scope, milestones and safeguards",
          "Scope, milestone আর safeguard ঠিক করো",
        ),
        why: l(
          "A shared written definition of the job protects both sides.",
          "কাজের shared written definition দুই পক্ষকেই সাহায্য করে।",
        ),
        tasks: [
          l(
            "Write a proposal with deliverables, assumptions, schedule, acceptance criteria, revision limits, payment milestones, ownership and support boundaries. Clarify change requests in writing.",
            "Deliverable, assumption, schedule, acceptance criteria, revision limit, payment milestone, ownership আর support boundary-সহ proposal লেখো। Change request লিখিতভাবে পরিষ্কার করো।",
          ),
          l(
            "Verify the client and payment workflow; use the agreed contract/platform safeguards. Read current fees and dispute rules and seek qualified advice for tax or legal obligations.",
            "Client আর payment workflow যাচাই; agreed contract/platform safeguard ব্যবহার করো। Current fee/dispute rule পড়ো; tax বা legal obligation-এ qualified advice নাও।",
          ),
        ],
        evidence: l(
          "A written agreement both sides understand, with a small first milestone and clear acceptance criteria.",
          "দুই পক্ষ বোঝে এমন written agreement, ছোট first milestone আর clear acceptance criteria।",
        ),
        notYet: l(
          "Do not send money to unlock a job, share passwords or follow off-platform payment requests that violate agreed platform rules.",
          "Job unlock করতে টাকা, password share বা agreed platform rule ভেঙে off-platform payment request মানা নয়।",
        ),
        sourceId: "upwork-start",
      },
      {
        id: "adapt",
        title: l(
          "Deliver, hand over and improve",
          "Deliver, handover আর improve করো",
        ),
        why: l(
          "A usable handoff creates more trust than a polished sales message.",
          "Polished sales message-এর চেয়ে usable handoff বেশি trust তৈরি করে।",
        ),
        tasks: [
          l(
            "Send short progress updates, demonstrate milestones and test against agreed criteria. Report delays or risks early; do not hide problems behind silence.",
            "ছোট progress update, milestone demonstration আর agreed criteria দিয়ে test করো। Delay বা risk আগে জানাও; চুপ থেকে সমস্যা লুকিও না।",
          ),
          l(
            "Hand over setup, usage and maintenance notes, then agree any support period. Ask permission before showing work publicly; review scope accuracy and sustainable pricing for the next job.",
            "Setup, usage আর maintenance note handover করে support period ঠিক করো। Public-এ দেখানোর আগে অনুমতি নাও; পরের কাজের জন্য scope accuracy আর sustainable pricing review করো।",
          ),
        ],
        evidence: l(
          "Accepted deliverables, a usable handover and a short reflection on effort, communication and what to change next time.",
          "Accepted deliverable, usable handover আর effort, communication, পরেরবারের change নিয়ে ছোট reflection।",
        ),
        notYet: l(
          "Do not promise unlimited lifetime support or display confidential client work without permission.",
          "Unlimited lifetime support বা অনুমতি ছাড়া confidential client work দেখানো নয়।",
        ),
        sourceId: "gitlab-communication",
      },
    ],
    pitfalls: [
      l(
        "Low prices cannot fix unclear scope or unreliable delivery.",
        "কম price দিয়ে unclear scope বা unreliable delivery ঠিক হয় না।",
      ),
      l(
        "A good portfolio is honest evidence, not fake client logos and income screenshots.",
        "ভালো portfolio honest evidence, fake client logo আর income screenshot নয়।",
      ),
      l(
        "Client privacy, licenses and intellectual-property terms matter even for a small project.",
        "ছোট project-এও client privacy, license আর intellectual-property terms গুরুত্বপূর্ণ।",
      ),
    ],
    aiPractice: l(
      "Use AI only within client permission and confidentiality terms. Verify generated work, licenses and security; price and communicate the agreed outcome honestly. You remain responsible for delivery.",
      "Client permission আর confidentiality terms-এর মধ্যে AI ব্যবহার করো। Generated work, license আর security যাচাই; agreed outcome-এর price আর communication সৎ রাখো। Delivery-এর দায়িত্ব তোমার।",
    ),
    thisWeek: l(
      "Write one service brief and finish a small demonstration. Ask one suitable person whether the problem is real—without trying to sell before listening.",
      "এক service brief লিখে ছোট demonstration শেষ করো। একজন উপযুক্ত মানুষকে সমস্যা বাস্তব কি না জিজ্ঞেস করো—শোনার আগে বিক্রি করতে যেও না।",
    ),
    careerIds: [
      "frontend-engineering",
      "backend-engineering",
      "mobile-app-development",
      "ux-ui-engineering",
      "data-engineering",
      "data-analytics-bi",
      "ai-engineering",
      "application-security",
      "software-quality-assurance",
    ],
    relatedGoalIds: ["tech-business", "remote-employment", "local-industry"],
    sourceIds: ["upwork-start", "gov-research", "gitlab-communication"],
  },
  {
    id: "tech-business",
    title: l(
      "Build a business with tech skills",
      "Tech skill দিয়ে business গড়ো",
    ),
    summary: l(
      "Start with a painful problem and a reachable customer. Validate a small service or product before investing in a large build.",
      "তীব্র সমস্যা আর পৌঁছানো যায় এমন customer দিয়ে শুরু। বড় build-এ যাওয়ার আগে ছোট service বা product validate করো।",
    ),
    reality: l(
      "Coding is one capability in a business. Customer discovery, distribution, costs, support and trust matter too. Compliments are not purchase commitments. Start within an affordable loss limit; this guide offers learning experiments, not investment, tax or legal advice or a promise of revenue.",
      "Business-এ coding একটি capability। Customer discovery, distribution, cost, support আর trust-ও লাগে। প্রশংসা purchase commitment নয়। সহনীয় loss limit-এর মধ্যে শুরু; এই guide শেখার experiment দেয়, investment, tax বা legal advice বা revenue promise নয়।",
    ),
    variants: [
      {
        title: l("Service studio / agency", "Service studio / agency"),
        description: l(
          "Sell delivery for a defined client problem. Build repeatable discovery, scoping, quality checks and handover before hiring a team.",
          "Defined client problem-এর delivery বিক্রি করো। Team hire-এর আগে repeatable discovery, scope, quality check আর handover বানাও।",
        ),
      },
      {
        title: l("Product / software business", "Product / software business"),
        description: l(
          "Serve a repeated need across customers. Validate adoption and willingness to pay; account for acquisition, ongoing hosting, security and support.",
          "একাধিক customer-এর repeated need মেটাও। Adoption আর payment willingness যাচাই; acquisition, ongoing hosting, security আর support হিসাব করো।",
        ),
      },
    ],
    stages: [
      {
        id: "foundation",
        title: l(
          "Find a real, reachable problem",
          "বাস্তব আর নাগালে থাকা সমস্যা খোঁজো",
        ),
        why: l(
          "A technically impressive solution can still solve a problem nobody prioritizes.",
          "Technically impressive solution-ও এমন সমস্যা solve করতে পারে যা কারও priority নয়।",
        ),
        tasks: [
          l(
            "Choose one reachable customer group. Talk to a few people with consent about recent behavior, workarounds, frequency and consequences; avoid pitching during discovery.",
            "নাগালে থাকা এক customer group নাও। সম্মতি নিয়ে কয়েকজনের recent behavior, workaround, frequency আর consequence জানো; discovery-তে pitch নয়।",
          ),
          l(
            "Write the problem, current alternatives, buyer versus user, and evidence that would disprove your idea. Separate observations from guesses.",
            "Problem, current alternative, buyer বনাম user আর idea ভুল প্রমাণ করবে এমন evidence লেখো। Observation আর guess আলাদা করো।",
          ),
        ],
        evidence: l(
          "A problem brief grounded in actual conversations, with unknowns and a clear customer group.",
          "Actual conversation-ভিত্তিক problem brief, unknown আর clear customer group।",
        ),
        notYet: l(
          "Do not begin with a logo, company registration or six-month build before testing demand; check legal prerequisites before any real trading.",
          "Demand test-এর আগে logo, company registration বা ছয় মাসের build দিয়ে শুরু নয়; real trading-এর আগে legal prerequisite যাচাই করো।",
        ),
        sourceId: "gov-research",
      },
      {
        id: "evidence",
        title: l(
          "Test the smallest useful offer",
          "সবচেয়ে ছোট useful offer test করো",
        ),
        why: l(
          "A bounded pilot can reveal whether the problem and solution connect.",
          "ছোট pilot-এ problem আর solution-এর মিল আছে কি না বোঝা যায়।",
        ),
        tasks: [
          l(
            "Create a manual service, clickable prototype or tiny working feature. State what the pilot will test, its limits and how you will observe use ethically.",
            "Manual service, clickable prototype বা tiny working feature বানাও। Pilot কী test করবে, limit আর ethically use observe করার উপায় লেখো।",
          ),
          l(
            "Ask for a concrete next action such as a trial appointment or a written pilot agreement. Discuss pricing honestly; do not count likes or friendly compliments as revenue.",
            "Trial appointment বা written pilot agreement-এর মতো concrete next action চাও। Pricing সৎভাবে আলোচনা করো; like বা বন্ধুত্বের প্রশংসাকে revenue ধরো না।",
          ),
        ],
        evidence: l(
          "Observed pilot use or a specific commitment, plus a decision to continue, revise or stop based on evidence.",
          "Observed pilot use বা specific commitment, আর evidence দিয়ে continue, revise বা stop-এর সিদ্ধান্ত।",
        ),
        notYet: l(
          "Do not add subscriptions, AI features or an elaborate architecture just to make the demo look like a startup.",
          "Demo-কে startup দেখাতে subscription, AI feature বা elaborate architecture যোগ নয়।",
        ),
        sourceId: "sba-planning",
      },
      {
        id: "application",
        title: l(
          "Make delivery and economics explicit",
          "Delivery আর economics স্পষ্ট করো",
        ),
        why: l(
          "A sale is not sustainable if delivering it costs more time and money than you can support.",
          "Deliver করতে সামর্থ্যের চেয়ে বেশি সময়/টাকা লাগলে sale টেকসই নয়।",
        ),
        tasks: [
          l(
            "Estimate build time, hosting, payment costs, support and customer acquisition. Test simple pricing with customers and record assumptions; use actual numbers when available.",
            "Build time, hosting, payment cost, support আর customer acquisition estimate করো। Customer-এর সঙ্গে simple pricing test; assumption লেখো, actual number পেলে ব্যবহার করো।",
          ),
          l(
            "Agree pilot scope, ownership, data handling, refund/support boundaries and success criteria. Consult relevant official Bangladesh sources or qualified professionals for registration, tax and legal obligations before trading.",
            "Pilot scope, ownership, data handling, refund/support boundary আর success criteria ঠিক করো। Trading-এর আগে registration, tax আর legal obligation-এ relevant official Bangladesh source বা qualified professional দেখো।",
          ),
        ],
        evidence: l(
          "A small cost model, written pilot terms and one realistic way to reach the next customer.",
          "ছোট cost model, written pilot terms আর next customer-এ পৌঁছানোর একটি বাস্তব উপায়।",
        ),
        notYet: l(
          "Do not take on debt, hire or make revenue projections from an untested growth assumption.",
          "Untested growth assumption দিয়ে debt, hiring বা revenue projection নয়।",
        ),
        sourceId: "sba-planning",
      },
      {
        id: "adapt",
        title: l("Learn from actual delivery", "Actual delivery থেকে শেখো"),
        why: l(
          "Repeat use and reliable service tell you more than a launch announcement.",
          "Launch announcement-এর চেয়ে repeat use আর reliable service বেশি জানায়।",
        ),
        tasks: [
          l(
            "Deliver the bounded pilot, track its agreed outcome and ask what prevented use. Fix reliability and usability issues before adding more features.",
            "ছোট pilot deliver, agreed outcome দেখা আর use-এ বাধা কী জিজ্ঞেস করো। বেশি feature-এর আগে reliability আর usability issue ঠিক করো।",
          ),
          l(
            "Review costs, support effort, repeat demand and customer feedback. Choose to improve, narrow, pivot or stop; write the reason and preserve reusable learning.",
            "Cost, support effort, repeat demand আর customer feedback review করো। Improve, narrow, pivot বা stop বেছে কারণ লেখো; reusable learning রাখো।",
          ),
        ],
        evidence: l(
          "A pilot review with observed outcomes, costs and a justified next decision—not a vanity dashboard.",
          "Observed outcome, cost আর যুক্তিসংগত next decision-সহ pilot review—vanity dashboard নয়।",
        ),
        notYet: l(
          "Do not scale an unreliable service or collect personal data merely because it might be useful someday.",
          "Unreliable service scale বা ভবিষ্যতে কাজে লাগতে পারে বলে personal data collect নয়।",
        ),
        sourceId: "gov-research",
      },
    ],
    pitfalls: [
      l(
        "A product idea and a sustainable business are different things; distribution is part of the work.",
        "Product idea আর sustainable business আলাদা; distribution কাজের অংশ।",
      ),
      l(
        "Validate with potential customers, not only friends who want to encourage you.",
        "শুধু উৎসাহ দিতে চাওয়া বন্ধু নয়, potential customer দিয়ে validate করো।",
      ),
      l(
        "Use clear agreements with cofounders and clients. Public U.S. business guidance is not Bangladesh legal guidance.",
        "Cofounder আর client-এর সঙ্গে clear agreement করো। Public U.S. business guidance বাংলাদেশের legal guidance নয়।",
      ),
    ],
    aiPractice: l(
      "AI can help prototype and critique assumptions, but synthetic personas are not customer interviews. Verify costs, security and claims; do not let cheap generation create expensive maintenance or privacy problems.",
      "AI prototype আর assumption critique-এ সাহায্য করে; synthetic persona customer interview নয়। Cost, security আর claim যাচাই করো; সস্তা generation যেন ব্যয়বহুল maintenance/privacy সমস্যা না বানায়।",
    ),
    thisWeek: l(
      "Speak with three reachable potential users, write one problem brief and sketch a tiny pilot. Learning that an idea is wrong early is progress, not embarrassment.",
      "নাগালে থাকা তিন potential user-এর সঙ্গে কথা, এক problem brief আর tiny pilot sketch করো। শুরুতেই idea ভুল জানা progress, লজ্জা নয়।",
    ),
    careerIds: [
      "technical-product-leadership",
      "ux-ui-engineering",
      "frontend-engineering",
      "backend-engineering",
      "mobile-app-development",
      "data-engineering",
      "data-analytics-bi",
      "machine-learning",
      "ai-engineering",
      "application-security",
    ],
    relatedGoalIds: ["freelancing", "local-industry", "research-publication"],
    sourceIds: ["gov-research", "sba-planning"],
  },
];
