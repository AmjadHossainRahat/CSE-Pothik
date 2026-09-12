import type { CareerSeed } from "@/data/careers";
import { l } from "@/lib/localized";

export const additionalCareers: CareerSeed[] = [
  {
    id: "mobile-app-development",
    familyId: "build-software",
    title: l("Mobile App Development", "Mobile App Development"),
    description: l(
      "Build apps that remain useful on real phones: small screens, unreliable networks, limited battery and interrupted sessions.",
      "ছোট screen, দুর্বল network, সীমিত battery আর বারবার interruption—বাস্তব ফোনের এসব সীমার মধ্যেও কাজে লাগে এমন app বানান।",
    ),
    work: [
      l(
        "Design navigation, state and touch interactions for a small screen.",
        "ছোট screen-এর navigation, state আর touch interaction তৈরি করা।",
      ),
      l(
        "Connect APIs and local storage; handle offline use and retries.",
        "API আর local storage যুক্ত করা; offline ব্যবহার আর retry সামলানো।",
      ),
      l(
        "Handle lifecycle changes, permissions and device capabilities.",
        "App lifecycle, permission আর device capability সামলানো।",
      ),
      l(
        "Test accessibility, performance and failures on emulators and real devices.",
        "Emulator আর real device-এ accessibility, performance আর failure test করা।",
      ),
      l(
        "Review crashes, protect user data and prepare controlled releases.",
        "Crash বোঝা, user data রক্ষা আর নিয়ন্ত্রিত release প্রস্তুত করা।",
      ),
    ],
    enjoy: [
      l(
        "You like seeing software respond in your hand.",
        "হাতে থাকা ফোনে নিজের software কাজ করতে দেখতে ভালো লাগে।",
      ),
      l(
        "You enjoy investigating bugs that only appear on some devices.",
        "কেবল কিছু device-এ দেখা দেওয়া bug খুঁজতে আগ্রহ হয়।",
      ),
      l(
        "You care about both interaction details and reliable data.",
        "Interaction-এর খুঁটিনাটি আর নির্ভরযোগ্য data—দুটিই গুরুত্বপূর্ণ মনে হয়।",
      ),
    ],
    dislike: [
      l(
        "Device-specific behavior and slow builds exhaust your curiosity.",
        "Device-specific আচরণ আর slow build কৌতূহল শেষ করে দেয়।",
      ),
      l(
        "You want every user to have the same screen and network.",
        "সব user-এর একই screen আর network থাকলেই শুধু কাজ করতে চান।",
      ),
      l(
        "You dislike maintaining released software after the demo.",
        "Demo-র পরে released software maintain করা অপছন্দ।",
      ),
    ],
    dimensions: {
      coding: 3,
      mathematics: 1,
      systems: 2,
      investigation: 3,
      creativity: 2,
      communication: 2,
      production: 3,
    },
    foundation: [
      l(
        "One programming language, functions, collections, async work and Git.",
        "একটি language, function, collection, async কাজ আর Git।",
      ),
      l(
        "HTTP, JSON, basic data modeling and debugging.",
        "HTTP, JSON, basic data modeling আর debugging।",
      ),
      l(
        "Choose one starting platform: Kotlin/Compose for Android, Swift/SwiftUI for Apple, or Flutter/React Native for shared UI.",
        "শুরুতে একটি platform: Android-এর Kotlin/Compose, Apple-এর Swift/SwiftUI, অথবা shared UI-এর Flutter/React Native।",
      ),
    ],
    core: [
      l(
        "State, navigation, lifecycle and accessible touch targets.",
        "State, navigation, lifecycle আর accessible touch target।",
      ),
      l(
        "Local persistence, loading/error/empty states and API contracts.",
        "Local persistence, loading/error/empty state আর API contract।",
      ),
      l(
        "Native and cross-platform are choices, not levels; check device/tooling access before choosing.",
        "Native আর cross-platform হলো আলাদা পছন্দ, level নয়; বাছার আগে device/tooling-এর সুযোগ দেখুন।",
      ),
    ],
    practical: [
      l(
        "Build a small offline reading list and restore it after restart.",
        "ছোট offline reading list বানান; restart-এর পরেও ফিরিয়ে আনুন।",
      ),
      l(
        "Test lost connectivity, denied permissions and interrupted sessions.",
        "Network হারানো, permission না দেওয়া আর interrupted session test করুন।",
      ),
      l(
        "Check screen-reader labels and larger text on a real device when available.",
        "সুযোগ থাকলে real device-এ screen-reader label আর বড় text যাচাই করুন।",
      ),
    ],
    later: [
      l(
        "Performance profiling, background work and native integrations.",
        "Performance profiling, background work আর native integration।",
      ),
      l(
        "Secure storage, observability and release automation.",
        "Secure storage, observability আর release automation।",
      ),
      l(
        "Learn a second platform only when a role or user need justifies it.",
        "Role বা user-এর দরকার হলে তবেই দ্বিতীয় platform শিখুন।",
      ),
    ],
    notYet: [
      l(
        "Learning Kotlin, Swift, Dart and React Native simultaneously.",
        "Kotlin, Swift, Dart আর React Native একসঙ্গে শেখা।",
      ),
      l(
        "A super-app, payments or a custom architecture framework for your first project.",
        "প্রথম project-এই super-app, payment বা নিজস্ব architecture framework।",
      ),
      l(
        "Buying hardware or paying store fees before checking the official tooling and distribution requirements.",
        "Official tooling আর distribution requirement যাচাইয়ের আগেই hardware বা store fee-তে খরচ।",
      ),
    ],
    resources: ["android-compose", "react-native", "flutter", "apple-swift"],
    related: [
      "frontend-engineering",
      "ux-ui-engineering",
      "backend-engineering",
    ],
    day: [
      [
        "09:30",
        l(
          "Reproduce a crash after the app resumes from the background.",
          "Background থেকে ফেরার পর crash reproduce করা।",
        ),
      ],
      [
        "12:00",
        l(
          "Build an offline state and discuss its wording with design.",
          "Offline state বানিয়ে design-এর সঙ্গে wording আলোচনা।",
        ),
      ],
      [
        "16:00",
        l(
          "Review tests and check a release candidate on two screen sizes.",
          "Test review আর দুই screen size-এ release candidate যাচাই।",
        ),
      ],
    ],
    ai: [
      {
        task: l("Routine screen scaffolding", "Routine screen scaffolding"),
        exposure: "higher",
        explanation: l(
          "AI can draft familiar layouts quickly, but may use obsolete APIs or ignore lifecycle behavior.",
          "AI পরিচিত layout দ্রুত লিখতে পারে; পুরোনো API বা lifecycle সমস্যা থেকে যেতে পারে।",
        ),
        studentResponse: l(
          "Read current platform docs and explain each state transition before keeping generated code.",
          "Current platform docs পড়ুন; generated code রাখার আগে প্রতিটি state transition বোঝান।",
        ),
      },
      {
        task: l("Device and network debugging", "Device আর network debugging"),
        exposure: "medium",
        explanation: l(
          "Suggestions help, but a plausible explanation is not a reproduced crash.",
          "Suggestion কাজে লাগে; বিশ্বাসযোগ্য ব্যাখ্যা মানেই crash reproduce হওয়া নয়।",
        ),
        studentResponse: l(
          "Capture a minimal reproduction, logs and a regression test without exposing user data.",
          "User data না দিয়ে minimal reproduction, log আর regression test তৈরি করুন।",
        ),
      },
      {
        task: l(
          "Release safety and user trust",
          "Release safety আর user trust",
        ),
        exposure: "lower",
        explanation: l(
          "Permissions, data handling and rollout decisions need accountable human judgment.",
          "Permission, data handling আর rollout-এর সিদ্ধান্তে দায়িত্বশীল মানুষের বিচার দরকার।",
        ),
        studentResponse: l(
          "Practice permission minimization, accessible flows and a rollback plan.",
          "কম permission, accessible flow আর rollback plan practice করুন।",
        ),
      },
    ],
  },
  {
    id: "ux-ui-engineering",
    familyId: "technology-people",
    title: l("UX/UI Engineering", "UX/UI Engineering"),
    description: l(
      "Connect user understanding and interface implementation. UX/product design studies the problem; UI engineering turns tested interactions into accessible software.",
      "ব্যবহারকারীর প্রয়োজন বোঝা ও interface বাস্তবে তৈরি করার মাঝের সেতু। UX/product design সমস্যাটি খুঁজে বোঝে; UI engineering যাচাই করা interaction-কে accessible software-এ রূপ দেয়।",
    ),
    work: [
      l(
        "Understand a user task through observation, questions and existing evidence.",
        "Observation, প্রশ্ন আর আগের evidence দিয়ে user-এর কাজ বোঝা।",
      ),
      l(
        "Map flows and prototype alternatives before polishing screens.",
        "Screen সাজানোর আগে flow map আর বিকল্প prototype বানানো।",
      ),
      l(
        "Implement semantic, responsive interfaces with meaningful states.",
        "Semantic, responsive interface আর অর্থপূর্ণ state implement করা।",
      ),
      l(
        "Test usability with consent and accessibility with keyboard and assistive tools.",
        "সম্মতি নিয়ে usability test; keyboard আর assistive tool দিয়ে accessibility যাচাই।",
      ),
      l(
        "Maintain design-system components and collaborate across design and engineering.",
        "Design-system component maintain আর design-engineering collaboration।",
      ),
    ],
    enjoy: [
      l(
        "You ask why someone struggled before changing a button color.",
        "Button-এর রং বদলানোর আগে কেন user আটকাল জিজ্ঞেস করুন।",
      ),
      l(
        "You like both visual details and implementation constraints.",
        "Visual detail আর implementation constraint—দুটিই ভালো লাগে।",
      ),
      l(
        "You can welcome feedback that contradicts your first design.",
        "নিজের প্রথম design-এর বিরুদ্ধে feedback-ও গ্রহণ করতে পারেন।",
      ),
    ],
    dislike: [
      l(
        "You only want to draw polished screens, without observing use.",
        "ব্যবহার না দেখে শুধু সুন্দর screen আঁকতে চান।",
      ),
      l(
        "You strongly dislike coding, testing or maintaining components; a design-focused path may fit better.",
        "Coding, testing বা component maintenance একদম অপছন্দ; design-focused path বেশি মানাতে পারে।",
      ),
      l(
        "Ambiguous feedback and collaborative iteration feel intolerable.",
        "অস্পষ্ট feedback আর বারবার একসঙ্গে কাজ বদলানো অসহ্য লাগে।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 1,
      systems: 2,
      investigation: 3,
      creativity: 3,
      communication: 3,
      production: 2,
    },
    foundation: [
      l(
        "User goals, information hierarchy, typography, spacing and clear language.",
        "User goal, information hierarchy, typography, spacing আর পরিষ্কার ভাষা।",
      ),
      l(
        "Semantic HTML, CSS layout, basic JavaScript and Git.",
        "Semantic HTML, CSS layout, basic JavaScript আর Git।",
      ),
      l(
        "Separate roles: UX/product design emphasizes discovery and decisions; frontend engineering covers broader application behavior; UI engineering bridges interaction and reusable implementation.",
        "Role আলাদা করুন: UX/product design-এ discovery আর decision; frontend-এ বিস্তৃত application behavior; UI engineering-এ interaction আর reusable implementation-এর যোগসূত্র।",
      ),
    ],
    core: [
      l(
        "Task flows, low-fidelity prototypes and usability observation.",
        "Task flow, low-fidelity prototype আর usability observation।",
      ),
      l(
        "Keyboard focus, forms, error recovery and screen-reader semantics.",
        "Keyboard focus, form, error recovery আর screen-reader semantics।",
      ),
      l(
        "Design tokens, component states and responsive behavior in English and Bangla.",
        "Design token, component state আর English/Bangla responsive behavior।",
      ),
    ],
    practical: [
      l(
        "Redesign one confusing form and explain the original problem.",
        "বিভ্রান্তিকর একটি form নতুন করে বানান; আগের সমস্যা ব্যাখ্যা করুন।",
      ),
      l(
        "Observe a consenting participant attempting a task without coaching.",
        "সম্মতি দেওয়া কাউকে সাহায্য না করে কাজটি করতে দেখুন।",
      ),
      l(
        "Build, test and document the revised interaction, including error states.",
        "Error state-সহ সংশোধিত interaction build, test আর document করুন।",
      ),
    ],
    later: [
      l(
        "Design-system governance, complex widgets and cross-platform patterns.",
        "Design-system governance, complex widget আর cross-platform pattern।",
      ),
      l(
        "Research-method depth and responsible product measurement.",
        "Research method-এর গভীরতা আর দায়িত্বশীল product measurement।",
      ),
      l(
        "Choose a design-heavy or engineering-heavy specialization from real work.",
        "বাস্তব কাজ দেখে design-heavy বা engineering-heavy specialization বেছে নিন।",
      ),
    ],
    notYet: [
      l(
        "Buying a design tool or learning every prototyping app before understanding a user task.",
        "User task বোঝার আগে design tool কেনা বা সব prototyping app শেখা।",
      ),
      l(
        "A huge component library or decorative animation before usable forms.",
        "Usable form-এর আগে বিশাল component library বা সাজসজ্জার animation।",
      ),
      l(
        "Calling a pretty mockup validated UX, or inventing participants and research results.",
        "সুন্দর mockup-কে validated UX বলা, বা participant আর research result বানিয়ে লেখা।",
      ),
    ],
    resources: ["mdn", "gov-user-research", "web-a11y", "gov-design-system"],
    related: [
      "frontend-engineering",
      "mobile-app-development",
      "technical-product-leadership",
    ],
    day: [
      [
        "09:30",
        l(
          "Watch where a participant gets stuck in an application form.",
          "Application form-এ participant কোথায় আটকে যায় দেখা।",
        ),
      ],
      [
        "12:00",
        l(
          "Prototype a simpler flow and check assumptions with a designer.",
          "সহজ flow prototype করে designer-এর সঙ্গে assumption যাচাই।",
        ),
      ],
      [
        "16:00",
        l(
          "Implement error recovery and review keyboard behavior with an engineer.",
          "Error recovery implement আর engineer-এর সঙ্গে keyboard behavior review।",
        ),
      ],
    ],
    ai: [
      {
        task: l(
          "Visual variations and component drafts",
          "Visual variation আর component draft",
        ),
        exposure: "higher",
        explanation: l(
          "AI generates options quickly but does not establish that people can use them.",
          "AI দ্রুত option তৈরি করে; মানুষ ব্যবহার করতে পারবে—তার প্রমাণ দেয় না।",
        ),
        studentResponse: l(
          "Compare options against a real task, semantic markup and responsive constraints.",
          "বাস্তব task, semantic markup আর responsive constraint দিয়ে option বিচার করুন।",
        ),
      },
      {
        task: l(
          "Research synthesis and accessibility suggestions",
          "Research synthesis আর accessibility suggestion",
        ),
        exposure: "medium",
        explanation: l(
          "AI may miss context, fabricate patterns or treat automated checks as complete accessibility.",
          "AI context হারাতে, pattern বানাতে বা automated check-কেই পুরো accessibility ভাবতে পারে।",
        ),
        studentResponse: l(
          "Use anonymized notes only with permission; trace findings to observations and test manually.",
          "অনুমতি নিয়ে anonymized note ব্যবহার করুন; finding-এর observation খুঁজে manual test করুন।",
        ),
      },
      {
        task: l(
          "Understanding people and negotiating trade-offs",
          "মানুষ বোঝা আর trade-off মেলানো",
        ),
        exposure: "lower",
        explanation: l(
          "Trust, inclusive judgment and accountability cannot be replaced by a polished generated screen.",
          "চকচকে generated screen দিয়ে trust, inclusive judgment আর দায়িত্ববোধের বিকল্প হয় না।",
        ),
        studentResponse: l(
          "Practice listening, accessible interaction design and explaining why a decision changed.",
          "শোনা, accessible interaction design আর decision কেন বদলাল তা বলা practice করুন।",
        ),
      },
    ],
  },
];
