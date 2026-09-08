import type { ExperimentSeed } from "@/data/experiments";
import { l } from "@/lib/localized";

export const infrastructureExperiments: ExperimentSeed[] = [
  {
    id: "network-engineering",
    title: l(
      "Trace one request through your own lab",
      "নিজের lab-এ একটি request কোথা দিয়ে যায়, খুঁজে দেখো",
    ),
    duration: "60–90 min",
    prerequisites: [
      l(
        "Basic IP/DNS knowledge, Wireshark installed and permission to capture your own loopback traffic. Installation time is separate. Do not capture shared Wi-Fi or other people’s traffic.",
        "Basic IP/DNS ধারণা, Wireshark installed আর নিজের loopback traffic capture-এর অনুমতি। Installation-এর সময় আলাদা। Shared Wi-Fi বা অন্যের traffic capture নয়।",
      ),
    ],
    goals: [
      l(
        "Experience packet evidence and controlled failure diagnosis rather than command collecting.",
        "Command collect নয়—packet evidence আর নিয়ন্ত্রিত failure diagnosis অনুভব করো।",
      ),
    ],
    steps: [
      l(
        "Start a tiny HTTP server on loopback with a tool you already know. Record its address and port; sketch browser → loopback → server.",
        "চেনা tool দিয়ে loopback-এ ছোট HTTP server চালাও। Address আর port লিখে browser → loopback → server আঁকো।",
      ),
      l(
        "Select only the loopback interface and filter for your server port. Request a harmless local page; stop capture immediately afterwards.",
        "শুধু loopback interface বেছে server port-এর filter দাও। নিরীহ local page request করে সঙ্গে সঙ্গে capture বন্ধ করো।",
      ),
      l(
        "Find the TCP conversation and HTTP response. Explain source/destination ports and why this local request needs no router hop.",
        "TCP conversation আর HTTP response খুঁজে source/destination port বোঝাও; কেন local request-এ router hop লাগে না বলো।",
      ),
      l(
        "Stop only your test server, repeat the request and compare failure evidence. Restore it and verify recovery; do not change system-wide firewall or DNS settings.",
        "শুধু test server বন্ধ করে request আবার দাও; failure evidence compare করো। Server ফিরিয়ে recovery যাচাই; system-wide firewall বা DNS বদলিও না।",
      ),
      l(
        "Write a short incident note: symptom, evidence, cause, fix and what the lab cannot prove. Keep packet captures private and remove any sensitive payload before sharing.",
        "ছোট incident note লেখো: লক্ষণ, evidence, কারণ, fix আর lab কী প্রমাণ করে না। Capture private রাখো; share-এর আগে sensitive payload সরাও।",
      ),
    ],
    attention: [
      l(
        "Did tracing the failure feel more satisfying than guessing a fix?",
        "Fix আন্দাজের চেয়ে failure-এর পথ খুঁজতে ভালো লেগেছে?",
      ),
      l(
        "Can a peer distinguish your observation from your explanation?",
        "Peer কি তোমার observation আর ব্যাখ্যা আলাদা করতে পারবে?",
      ),
    ],
    resources: ["network-book", "wireshark-guide"],
  },
  {
    id: "hardware-engineering",
    title: l(
      "Design and verify a tiny logic circuit",
      "ছোট একটি logic circuit তৈরি ও যাচাই করো",
    ),
    duration: "60–90 min",
    prerequisites: [
      l(
        "Basic Boolean logic and the free Nand2Tetris hardware simulator set up using its official software page. Setup time is separate; no physical hardware or purchase is needed.",
        "Basic Boolean logic আর official software page অনুযায়ী free Nand2Tetris hardware simulator setup। Setup-এর সময় আলাদা; physical hardware বা কেনাকাটা দরকার নেই।",
      ),
    ],
    goals: [
      l(
        "Feel hardware design as a specification, circuit and independent verification—not just wiring a demo.",
        "শুধু demo wiring নয়—specification, circuit আর স্বাধীন verification হিসেবে hardware design অনুভব করো।",
      ),
    ],
    steps: [
      l(
        "Choose an AND gate built from NAND gates. Before implementation, write expected outputs for all four input combinations.",
        "NAND দিয়ে AND gate বেছে নাও। Implementation-এর আগে চার input combination-এর expected output লেখো।",
      ),
      l(
        "Implement the circuit in the simulator’s HDL, drawing how the intermediate signal connects.",
        "Simulator-এর HDL-এ circuit implement করে intermediate signal-এর connection আঁকো।",
      ),
      l(
        "Test all four cases against your independent truth table; record actual outputs.",
        "নিজের truth table দিয়ে চারটি case test করে actual output লেখো।",
      ),
      l(
        "Deliberately miswire one connection in a copy, find a failing case and explain the cause. Restore the correct circuit and rerun every case.",
        "Copy-তে ইচ্ছা করে একটি connection ভুল দিয়ে failing case খোঁজো আর কারণ বলো। সঠিক circuit ফিরিয়ে সব case আবার চালাও।",
      ),
      l(
        "Save the design, test table and a short limitation note: this verifies ideal logic, not physical timing, power or electrical safety.",
        "Design, test table আর সীমাবদ্ধতা রাখো: ideal logic verify হয়েছে, physical timing, power বা electrical safety নয়।",
      ),
    ],
    attention: [
      l(
        "Did an exhaustive truth table reveal something a single successful demo would miss?",
        "একটি successful demo যা ধরত না, পুরো truth table কি তা ধরেছে?",
      ),
      l(
        "Would you like to investigate how real timing and component limits change this model?",
        "Real timing আর component limit model-টিকে কীভাবে বদলায় জানতে চাও?",
      ),
    ],
    resources: ["nand2tetris", "kicad-start"],
  },
  {
    id: "software-quality-assurance",
    title: l(
      "Find a risk, report it, protect the fix",
      "ঝুঁকি খুঁজে report করো, তারপর fix-টি যেন টিকে থাকে তা নিশ্চিত করো",
    ),
    duration: "75–120 min",
    prerequisites: [
      l(
        "A tiny local app you own, such as a notes list, with source access. For automation, basic JavaScript and Playwright installed; setup time is separate. No third-party testing.",
        "Source-সহ নিজের ছোট local app, যেমন notes list। Automation-এর জন্য basic JavaScript আর installed Playwright; setup-এর সময় আলাদা। অন্যের service test নয়।",
      ),
    ],
    goals: [
      l(
        "Experience the reasoning behind QA: choose risks, gather reproducible evidence and automate a useful regression check.",
        "QA-এর reasoning অনুভব করো: risk বাছা, reproducible evidence আর দরকারি regression check automate করা।",
      ),
    ],
    steps: [
      l(
        "Write three acceptance criteria for saving a note. Name the most harmful failure, such as silently losing text.",
        "Note save-এর তিনটি acceptance criterion লেখো। সবচেয়ে ক্ষতিকর failure বলো, যেমন চুপচাপ text হারানো।",
      ),
      l(
        "Spend 15 minutes exploring empty input, long text, repeated save and reload. Record conditions and actual behavior, not just pass/fail.",
        "১৫ মিনিট empty input, long text, repeated save আর reload explore করো। শুধু pass/fail নয়, condition আর actual behavior লেখো।",
      ),
      l(
        "If you find a defect, report steps, expected/actual results and impact. If not, report the coverage and remaining uncertainty honestly—do not invent a bug.",
        "Defect পেলে step, expected/actual result আর impact লেখো। না পেলে coverage আর uncertainty সৎভাবে বলো—bug বানিও না।",
      ),
      l(
        "Write one automated save-and-reload check from the acceptance criterion. Temporarily introduce a local defect to confirm the check fails for the right reason.",
        "Acceptance criterion থেকে save-and-reload check automate করো। Local-এ সাময়িক defect দিয়ে সঠিক কারণে check fail হয় দেখো।",
      ),
      l(
        "Restore or fix the app, rerun the check and explain what it still cannot test. Have a peer reproduce your report.",
        "App ফিরিয়ে বা fix করে check আবার চালাও; কী test করতে পারে না বলো। Peer-কে report reproduce করতে দাও।",
      ),
    ],
    attention: [
      l(
        "Did choosing what to test require more thought than writing the click steps?",
        "Click step লেখার চেয়ে কী test করবে বাছতে বেশি ভাবতে হয়েছে?",
      ),
      l(
        "Can you describe release risk without blaming a developer or promising zero bugs?",
        "Developer-কে দোষ না দিয়ে বা zero bug promise না করে release risk বোঝাতে পারো?",
      ),
    ],
    resources: ["istqb-foundation", "playwright-testing"],
  },
];
