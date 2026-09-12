import type { CareerSeed } from "@/data/careers";
import { l } from "@/lib/localized";

export const infrastructureCareers: CareerSeed[] = [
  {
    id: "network-engineering",
    familyId: "run-systems",
    title: l("Network Engineering", "Network Engineering"),
    description: l(
      "Design, connect and troubleshoot the networks people and services depend on. This is not just configuring a router—or the same job as cybersecurity.",
      "মানুষ ও service যে network-এর ওপর নির্ভর করে, সেটি তৈরি, যুক্ত ও troubleshoot করুন। কাজটি শুধু router configure করা নয়; cybersecurity-এর সঙ্গেও এক নয়।",
    ),
    work: [
      l(
        "Plan addressing, routing, switching and segmentation for a documented need.",
        "নির্দিষ্ট প্রয়োজনের জন্য addressing, routing, switching আর segmentation plan করা।",
      ),
      l(
        "Trace a failure across DNS, transport, routes and application boundaries.",
        "DNS, transport, route আর application boundary ধরে failure খোঁজা।",
      ),
      l(
        "Review configurations, test changes in a lab and prepare rollback.",
        "Configuration review, lab-এ change test আর rollback প্রস্তুত করা।",
      ),
      l(
        "Monitor latency, loss and capacity; distinguish symptoms from causes.",
        "Latency, loss আর capacity দেখা; লক্ষণ আর মূল কারণ আলাদা করা।",
      ),
      l(
        "Document topology, coordinate maintenance and explain outages calmly.",
        "Topology document, maintenance সমন্বয় আর শান্তভাবে outage ব্যাখ্যা করা।",
      ),
    ],
    enjoy: [
      l(
        "You want to know where a packet went, not just whether Wi-Fi works.",
        "শুধু Wi-Fi চলছে কি না নয়—packet কোথায় গেল জানতে চান।",
      ),
      l(
        "You enjoy diagrams, systematic diagnosis and reproducible evidence.",
        "Diagram, ধাপে ধাপে diagnosis আর reproducible evidence ভালো লাগে।",
      ),
      l(
        "You can communicate clearly while a service is unavailable.",
        "Service বন্ধ থাকলেও পরিষ্কারভাবে যোগাযোগ করতে পারেন।",
      ),
    ],
    dislike: [
      l(
        "Maintenance windows, on-call work or field visits would be a poor fit; these vary by employer.",
        "Maintenance window, on-call বা field visit আপনার জন্য কঠিন; employer অনুযায়ী বদলায়।",
      ),
      l(
        "You dislike documenting small configuration changes.",
        "ছোট configuration change লিখে রাখা অপছন্দ।",
      ),
      l(
        "You prefer quick guesses over testing competing explanations.",
        "একাধিক ব্যাখ্যা test করার চেয়ে দ্রুত আন্দাজ পছন্দ।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 2,
      systems: 3,
      investigation: 3,
      creativity: 1,
      communication: 3,
      production: 3,
    },
    foundation: [
      l(
        "Binary, subnetting, Ethernet, IP and the difference between a switch and router.",
        "Binary, subnetting, Ethernet, IP আর switch-router-এর পার্থক্য।",
      ),
      l(
        "DNS, DHCP, TCP/UDP and basic Linux/Windows network tools.",
        "DNS, DHCP, TCP/UDP আর basic Linux/Windows network tool।",
      ),
      l(
        "Read a topology and record observations before changing configuration.",
        "Configuration বদলানোর আগে topology পড়ুন আর observation লিখুন।",
      ),
    ],
    core: [
      l(
        "VLANs, routing tables, IPv4/IPv6 and access-control intent.",
        "VLAN, routing table, IPv4/IPv6 আর access control-এর উদ্দেশ্য।",
      ),
      l(
        "Packet analysis, latency/loss measurement and failure isolation.",
        "Packet analysis, latency/loss measurement আর failure আলাদা করা।",
      ),
      l(
        "Safe changes, configuration backups and small automation scripts.",
        "নিরাপদ change, configuration backup আর ছোট automation script।",
      ),
    ],
    practical: [
      l(
        "Build an isolated two-subnet lab and explain every hop.",
        "বিচ্ছিন্ন two-subnet lab বানিয়ে প্রতিটি hop বোঝান।",
      ),
      l(
        "Introduce a wrong gateway only in your lab; diagnose and restore it.",
        "শুধু নিজের lab-এ ভুল gateway দিয়ে diagnose করে ঠিক করুন।",
      ),
      l(
        "Write a topology, test matrix and rollback runbook for a peer.",
        "Peer-এর জন্য topology, test matrix আর rollback runbook লিখুন।",
      ),
    ],
    later: [
      l(
        "Choose enterprise/campus, ISP/telecom, data-center or cloud networking from real role requirements.",
        "বাস্তব role requirement দেখে enterprise/campus, ISP/telecom, data-center বা cloud networking বেছে নিন।",
      ),
      l(
        "Study BGP, redundancy, wireless or network automation when the lab demands it.",
        "Lab-এর প্রয়োজন হলে BGP, redundancy, wireless বা network automation শিখুন।",
      ),
      l(
        "Certifications may structure study, but optional paid exams do not replace troubleshooting evidence.",
        "Certification পড়াশোনা সাজাতে পারে; optional paid exam troubleshooting evidence-এর বিকল্প নয়।",
      ),
    ],
    notYet: [
      l(
        "Buying racks of equipment before learning in a simulator or local lab.",
        "Simulator বা local lab-এ শেখার আগে অনেক equipment কেনা।",
      ),
      l(
        "Capturing other people’s traffic, scanning public networks or changing campus routers without explicit authorization.",
        "স্পষ্ট অনুমতি ছাড়া অন্যের traffic capture, public network scan বা campus router বদলানো।",
      ),
      l(
        "Memorizing vendor commands without understanding the packet path.",
        "Packet-এর পথ না বুঝে vendor command মুখস্থ করা।",
      ),
    ],
    resources: ["network-book", "wireshark-guide", "missing-semester"],
    related: ["devops-sre", "cybersecurity", "hardware-engineering"],
    day: [
      [
        "09:00",
        l(
          "Compare an outage report with DNS and route evidence.",
          "Outage report-এর সঙ্গে DNS আর route evidence মেলানো।",
        ),
      ],
      [
        "12:00",
        l(
          "Test a proposed subnet change in an isolated lab.",
          "বিচ্ছিন্ন lab-এ subnet change test করা।",
        ),
      ],
      [
        "16:00",
        l(
          "Review the maintenance plan and hand over monitoring notes.",
          "Maintenance plan review আর monitoring note handover।",
        ),
      ],
    ],
    ai: [
      {
        task: l(
          "Configuration and script drafts",
          "Configuration আর script draft",
        ),
        exposure: "higher",
        explanation: l(
          "AI can draft common commands but can invent syntax or unsafe defaults.",
          "AI পরিচিত command লিখতে পারে; ভুল syntax বা অনিরাপদ default-ও দিতে পারে।",
        ),
        studentResponse: l(
          "Read vendor docs, diff the change and test only in your lab first.",
          "Vendor docs পড়ে change diff দেখুন; আগে নিজের lab-এ test করুন।",
        ),
      },
      {
        task: l(
          "Incident hypothesis generation",
          "Incident-এর সম্ভাব্য কারণ খোঁজা",
        ),
        exposure: "medium",
        explanation: l(
          "Suggestions can organize evidence but cannot establish what actually happened on your network.",
          "Suggestion evidence সাজায়; আপনার network-এ কী ঘটেছে তার প্রমাণ নয়।",
        ),
        studentResponse: l(
          "Keep timestamps, test one hypothesis at a time and redact captures before any sharing.",
          "Timestamp রাখুন, একবারে একটি hypothesis test করুন; share করার আগে capture-এর private data সরাও।",
        ),
      },
      {
        task: l(
          "Change approval and operational accountability",
          "Change approval আর operational দায়িত্ব",
        ),
        exposure: "lower",
        explanation: l(
          "Service impact, authorization and rollback decisions require accountable judgment.",
          "Service impact, অনুমতি আর rollback-এর সিদ্ধান্তে দায়িত্বশীল বিচার দরকার।",
        ),
        studentResponse: l(
          "Practice peer review, clear maintenance notices and a tested recovery path.",
          "Peer review, পরিষ্কার maintenance notice আর tested recovery practice করুন।",
        ),
      },
    ],
  },
  {
    id: "hardware-engineering",
    familyId: "close-to-hardware",
    title: l("Hardware Engineering", "Hardware Engineering"),
    description: l(
      "Design and verify electronic systems: logic, components, schematics and boards. Embedded engineering focuses more on software controlling devices; hardware is not simply computer repair.",
      "Logic, component, schematic ও board মিলিয়ে electronic system তৈরি ও যাচাই করুন। Embedded engineering-এ device চালানো software-এ জোর বেশি; আর hardware engineering মানে শুধু computer repair নয়।",
    ),
    work: [
      l(
        "Translate a system need into electrical, timing, cost and power constraints.",
        "System-এর প্রয়োজনকে electrical, timing, cost আর power constraint-এ বদলানো।",
      ),
      l(
        "Read datasheets and choose components with documented margins.",
        "Datasheet পড়ে margin লিখে component বাছা।",
      ),
      l(
        "Design logic or schematics and review connections before fabrication.",
        "Fabrication-এর আগে logic বা schematic design আর connection review।",
      ),
      l(
        "Simulate, measure and investigate differences between design and reality.",
        "Simulation আর measurement করে design আর বাস্তবতার পার্থক্য খোঁজা।",
      ),
      l(
        "Maintain versioned design files, a bill of materials and verification evidence.",
        "Versioned design file, bill of materials আর verification evidence রাখা।",
      ),
    ],
    enjoy: [
      l(
        "You enjoy physics, circuits and constraints that code cannot wish away.",
        "Physics, circuit আর code দিয়ে এড়ানো যায় না এমন constraint ভালো লাগে।",
      ),
      l(
        "You are patient with measurements and datasheets.",
        "Measurement আর datasheet নিয়ে ধৈর্য আছে।",
      ),
      l(
        "You like debugging both a model and a physical implementation.",
        "Model আর বাস্তব implementation—দুটির debugging ভালো লাগে।",
      ),
    ],
    dislike: [
      l(
        "You need every experiment to be instant and cost-free; real prototypes can take time and money.",
        "প্রতিটি experiment তৎক্ষণাৎ আর বিনা খরচে চাই; real prototype-এ সময় ও অর্থ লাগে।",
      ),
      l(
        "You dislike lab safety, careful measurement or component tolerances.",
        "Lab safety, সতর্ক measurement বা component tolerance অপছন্দ।",
      ),
      l(
        "You want only application coding, without electronics foundations.",
        "Electronics foundation ছাড়া শুধু application coding করতে চান।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 3,
      systems: 3,
      investigation: 3,
      creativity: 2,
      communication: 2,
      production: 2,
    },
    foundation: [
      l(
        "Voltage, current, resistance, units and safe measurement principles.",
        "Voltage, current, resistance, unit আর নিরাপদ measurement-এর ভিত্তি।",
      ),
      l(
        "Boolean logic, truth tables, state and binary representation.",
        "Boolean logic, truth table, state আর binary representation।",
      ),
      l(
        "Read a simple datasheet and distinguish simulation from measured evidence.",
        "সহজ datasheet পড়ুন; simulation আর মাপা evidence আলাদা করুন।",
      ),
    ],
    core: [
      l(
        "Schematics, component ratings, grounding and power budgets.",
        "Schematic, component rating, grounding আর power budget।",
      ),
      l(
        "Digital timing, interfaces and verification test cases.",
        "Digital timing, interface আর verification test case।",
      ),
      l(
        "PCB layout basics, electrical/design rule checks and BOM provenance.",
        "PCB layout-এর ভিত্তি, electrical/design rule check আর BOM-এর উৎস।",
      ),
    ],
    practical: [
      l(
        "Design and test a small digital logic circuit in a simulator first.",
        "আগে simulator-এ ছোট digital logic circuit design আর test করুন।",
      ),
      l(
        "Draft a low-voltage board schematic and review component ratings with a supervisor.",
        "Low-voltage board schematic এঁকে supervisor-এর সঙ্গে rating review করুন।",
      ),
      l(
        "Record expected versus observed behavior and one design revision.",
        "Expected আর observed behavior এবং একটি design revision লিখুন।",
      ),
    ],
    later: [
      l(
        "Choose board/product design, FPGA/digital verification or semiconductor/VLSI study deliberately.",
        "ভেবে board/product design, FPGA/digital verification বা semiconductor/VLSI study বেছে নিন।",
      ),
      l(
        "Signal integrity, EMC, power electronics and fabrication require deeper domain and safety training.",
        "Signal integrity, EMC, power electronics আর fabrication-এর জন্য গভীর domain ও safety training দরকার।",
      ),
      l(
        "Explore device/IoT teams, electronics R&D and verification roles; local lab access and role supply vary.",
        "Device/IoT team, electronics R&D আর verification role দেখুন; local lab আর role-এর সুযোগ ভিন্ন হয়।",
      ),
    ],
    notYet: [
      l(
        "Ordering a custom board before schematic review and simulation.",
        "Schematic review আর simulation-এর আগে custom board order।",
      ),
      l(
        "Mains circuits, high voltage or lithium-battery charging projects without qualified supervision.",
        "যোগ্য supervision ছাড়া mains circuit, high voltage বা lithium-battery charging project।",
      ),
      l(
        "Treating a simulation as proof that a physical device is safe or certified.",
        "Simulation-কে physical device নিরাপদ বা certified হওয়ার প্রমাণ ভাবা।",
      ),
    ],
    resources: ["nand2tetris", "kicad-start", "arduino-docs"],
    related: ["embedded-systems", "network-engineering", "systems-research"],
    day: [
      [
        "09:00",
        l(
          "Check a timing failure against the device datasheet.",
          "Device datasheet দিয়ে timing failure যাচাই।",
        ),
      ],
      [
        "12:00",
        l(
          "Review a schematic and a revised component choice.",
          "Schematic আর সংশোধিত component choice review।",
        ),
      ],
      [
        "16:00",
        l(
          "Record measurements, limitations and the next prototype change.",
          "Measurement, সীমাবদ্ধতা আর পরের prototype change লেখা।",
        ),
      ],
    ],
    ai: [
      {
        task: l(
          "Boilerplate HDL and documentation drafts",
          "Boilerplate HDL আর documentation draft",
        ),
        exposure: "higher",
        explanation: l(
          "AI can draft familiar structures but may invent parts, pinouts or constraints.",
          "AI পরিচিত structure লিখতে পারে; part, pinout বা constraint বানিয়েও দিতে পারে।",
        ),
        studentResponse: l(
          "Verify against the exact datasheet and simulate each claimed behavior.",
          "সঠিক datasheet-এর সঙ্গে মিলিয়ে প্রতিটি claimed behavior simulate করুন।",
        ),
      },
      {
        task: l(
          "Design alternatives and fault analysis",
          "Design-এর বিকল্প আর fault analysis",
        ),
        exposure: "medium",
        explanation: l(
          "Models help explore hypotheses but may miss parasitics, tolerances or measurement artifacts.",
          "Model hypothesis খুঁজতে সাহায্য করে; parasitic, tolerance বা measurement artifact বাদ পড়তে পারে।",
        ),
        studentResponse: l(
          "Keep calculations, test conditions and measurement uncertainty alongside every conclusion.",
          "প্রতিটি conclusion-এর সঙ্গে calculation, test condition আর measurement uncertainty রাখুন।",
        ),
      },
      {
        task: l(
          "Physical verification and safety responsibility",
          "Physical verification আর safety-এর দায়িত্ব",
        ),
        exposure: "lower",
        explanation: l(
          "A persuasive answer cannot certify a real board or replace a qualified safety review.",
          "বিশ্বাসযোগ্য উত্তর real board certify করতে বা qualified safety review-এর জায়গা নিতে পারে না।",
        ),
        studentResponse: l(
          "Use simulator-first practice, supervised low-voltage work and documented stop conditions.",
          "আগে simulator, পরে supervised low-voltage কাজ; কখন থামতে হবে লিখে রাখুন।",
        ),
      },
    ],
  },
  {
    id: "software-quality-assurance",
    familyId: "build-software",
    title: l("Software QA & Testing", "Software QA ও Testing"),
    description: l(
      "Help a team understand product risk and prevent defects. Explore behavior, challenge requirements and automate useful checks—not just click through screens or count bugs.",
      "Product-এর ঝুঁকি বুঝতে ও defect আগেই ঠেকাতে team-কে সাহায্য করুন। আচরণ অনুসন্ধান, requirement যাচাই এবং দরকারি check automate করুন—কাজটি শুধু screen-এ click করা বা bug গোনা নয়।",
    ),
    work: [
      l(
        "Clarify acceptance criteria and find missing edge cases before coding.",
        "Coding-এর আগে acceptance criteria পরিষ্কার আর বাদ পড়া edge case খোঁজা।",
      ),
      l(
        "Design risk-based exploratory, functional and regression tests.",
        "Risk অনুযায়ী exploratory, functional আর regression test design।",
      ),
      l(
        "Write reproducible bug reports with expected and actual behavior.",
        "Expected আর actual behavior-সহ reproducible bug report লেখা।",
      ),
      l(
        "Test APIs, data and accessibility; automate stable, valuable checks.",
        "API, data আর accessibility test; স্থিতিশীল দরকারি check automate করা।",
      ),
      l(
        "Investigate flaky tests and communicate release risk with developers and product teams.",
        "Flaky test investigate আর developer-product team-কে release risk বোঝানো।",
      ),
    ],
    enjoy: [
      l(
        "You ask what could go wrong and can explain why it matters.",
        "কী ভুল হতে পারে ভাবুন আর কেন গুরুত্বপূর্ণ বোঝাতে পারেন।",
      ),
      l(
        "You enjoy careful investigation, not blaming the author of a bug.",
        "Bug-এর লেখককে দোষ না দিয়ে সতর্ক investigation ভালো লাগে।",
      ),
      l(
        "You like a mix of human exploration, scripting and clear communication.",
        "মানুষের exploration, scripting আর পরিষ্কার যোগাযোগের মিশ্রণ পছন্দ।",
      ),
    ],
    dislike: [
      l(
        "Reproducing intermittent failures feels intolerable.",
        "মাঝে মাঝে হওয়া failure reproduce করা অসহ্য লাগে।",
      ),
      l(
        "You want QA to be a coding-free shortcut; automation roles require programming.",
        "QA-কে coding ছাড়া shortcut ভাবুন; automation role-এ programming লাগে।",
      ),
      l(
        "You dislike negotiating risk when exhaustive testing is impossible.",
        "সবকিছু test করা অসম্ভব হলে risk নিয়ে আলোচনা অপছন্দ।",
      ),
    ],
    dimensions: {
      coding: 2,
      mathematics: 1,
      systems: 2,
      investigation: 3,
      creativity: 2,
      communication: 3,
      production: 3,
    },
    foundation: [
      l(
        "Software lifecycle, test purpose, acceptance criteria and defect reporting.",
        "Software lifecycle, test-এর উদ্দেশ্য, acceptance criteria আর defect reporting।",
      ),
      l(
        "Equivalence classes, boundaries, state transitions and exploratory charters.",
        "Equivalence class, boundary, state transition আর exploratory charter।",
      ),
      l(
        "HTTP, basic SQL, Git and one scripting language.",
        "HTTP, basic SQL, Git আর একটি scripting language।",
      ),
    ],
    core: [
      l(
        "Risk-based test design and separating severity from priority.",
        "Risk-based test design আর severity-priority আলাদা করা।",
      ),
      l(
        "API checks, test data, isolated fixtures and deterministic automation.",
        "API check, test data, isolated fixture আর deterministic automation।",
      ),
      l(
        "Accessibility, negative cases and communicating what was not tested.",
        "Accessibility, negative case আর কী test হয়নি তা জানানো।",
      ),
    ],
    practical: [
      l(
        "Explore a small app you own; write a test charter and two precise bug reports.",
        "নিজের ছোট app explore করে test charter আর দুটি নির্ভুল bug report লিখুন।",
      ),
      l(
        "Automate one important user journey and one failure case.",
        "একটি গুরুত্বপূর্ণ user journey আর একটি failure case automate করুন।",
      ),
      l(
        "Run checks in CI and fix one flaky test by investigating its cause.",
        "CI-এ check চালিয়ে কারণ বুঝে একটি flaky test ঠিক করুন।",
      ),
    ],
    later: [
      l(
        "Choose manual/exploratory depth, automation/SDET, performance or domain-specific quality work.",
        "Manual/exploratory depth, automation/SDET, performance বা domain-specific quality কাজ বেছে নিন।",
      ),
      l(
        "Study load models, contract testing and quality strategy when product risks justify them.",
        "Product risk দাবি করলে load model, contract testing আর quality strategy শিখুন।",
      ),
      l(
        "A certificate is optional; show test decisions, readable code and honest release-risk reporting.",
        "Certificate optional; test decision, readable code আর সৎ release-risk report দেখান।",
      ),
    ],
    notYet: [
      l(
        "Automating every UI click before understanding the highest-risk behavior.",
        "সবচেয়ে ঝুঁকিপূর্ণ behavior না বুঝে প্রতিটি UI click automate করা।",
      ),
      l(
        "Using bug counts or 100% coverage as proof of product quality.",
        "Bug count বা 100% coverage-কে product quality-এর প্রমাণ ধরা।",
      ),
      l(
        "Load-testing or security-testing a third-party service without explicit permission.",
        "স্পষ্ট অনুমতি ছাড়া অন্যের service-এ load test বা security test।",
      ),
    ],
    resources: ["istqb-foundation", "playwright-testing", "web-a11y"],
    related: ["backend-engineering", "ux-ui-engineering", "cybersecurity"],
    day: [
      [
        "09:00",
        l(
          "Question an ambiguous acceptance criterion with product and engineering.",
          "Product আর engineering-এর সঙ্গে অস্পষ্ট acceptance criterion আলোচনা।",
        ),
      ],
      [
        "12:00",
        l(
          "Reproduce a data-loss bug and reduce it to three reliable steps.",
          "Data-loss bug reproduce করে তিনটি নির্ভরযোগ্য step-এ নামানো।",
        ),
      ],
      [
        "16:00",
        l(
          "Review regression results and explain the remaining release risk.",
          "Regression result review আর বাকি release risk বোঝানো।",
        ),
      ],
    ],
    ai: [
      {
        task: l(
          "Routine test case and automation drafts",
          "Routine test case আর automation draft",
        ),
        exposure: "higher",
        explanation: l(
          "AI can generate plausible checks that accidentally repeat the implementation’s assumptions.",
          "AI এমন check বানাতে পারে যা implementation-এর ভুল assumption-ই আবার ধরে।",
        ),
        studentResponse: l(
          "Derive expected results independently from requirements and make the check fail for the right reason.",
          "Requirement থেকে independently expected result বের করুন; সঠিক কারণে check fail হয় দেখুন।",
        ),
      },
      {
        task: l(
          "Failure triage and exploratory ideas",
          "Failure triage আর exploratory idea",
        ),
        exposure: "medium",
        explanation: l(
          "Suggestions broaden exploration but can misclassify severity or miss domain context.",
          "Suggestion exploration বাড়ায়; severity ভুল বা domain context বাদ যেতে পারে।",
        ),
        studentResponse: l(
          "Reproduce, minimize and attach evidence; never invent defects or user research.",
          "Reproduce করে ছোট করুন, evidence যোগ করুন; defect বা user research বানিয়ে লিখুন না।",
        ),
      },
      {
        task: l(
          "Risk judgment and quality collaboration",
          "Risk বিচার আর quality collaboration",
        ),
        exposure: "lower",
        explanation: l(
          "Release decisions involve affected people, uncertainty and accountable trade-offs.",
          "Release decision-এ affected মানুষ, uncertainty আর দায়িত্বশীল trade-off আছে।",
        ),
        studentResponse: l(
          "State scope, untested risks and alternatives clearly; QA informs a team decision, not a safety guarantee.",
          "Scope, untested risk আর বিকল্প স্পষ্ট বলুন; QA team-এর decision-এ সাহায্য করে, safety guarantee নয়।",
        ),
      },
    ],
  },
];
