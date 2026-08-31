import { l } from "@/lib/localized";
import type { Roadmap } from "@/types/content";

/** Keep physical/operational work from inheriting a generic web-code exercise. */
export function refineInfrastructureRoadmap(roadmap: Roadmap): Roadmap {
  const [foundation, core, practical, professional, later] = roadmap.stages;
  if (!foundation || !core || !practical || !professional || !later)
    return roadmap;
  if (roadmap.id === "network-engineering") {
    foundation.practicalTask = l(
      "Draw a small network, assign two non-overlapping subnets and trace DNS resolution and an HTTP request. Explain which parts are local and which need routing.",
      "ছোট network এঁকে দুটি non-overlapping subnet দাও; DNS resolution আর HTTP request trace করো। কোন অংশ local আর কোনটিতে routing লাগে বলো।",
    );
    foundation.enoughForNow = l(
      "You can explain addressing, gateway, DNS and transport separately, and use basic diagnostic tools on your own machine.",
      "Addressing, gateway, DNS আর transport আলাদা করে বোঝাতে আর নিজের machine-এ basic diagnostic tool ব্যবহার করতে পারো।",
    );
    core.practicalTask = l(
      "In an isolated simulator or VM lab, connect two subnets, record the routes and test allowed traffic. Break one lab route, collect evidence and restore it.",
      "বিচ্ছিন্ন simulator বা VM lab-এ দুই subnet যুক্ত করে route লিখে allowed traffic test করো। একটি lab route ভেঙে evidence নাও আর ফিরিয়ে দাও।",
    );
    core.resourceIds = ["network-book", "wireshark-guide"];
    practical.resourceIds = ["wireshark-guide"];
    professional.topics = [
      l(
        "Versioned configuration, peer review and least-privilege access.",
        "Versioned configuration, peer review আর least-privilege access।",
      ),
      l(
        "Change windows, monitoring baselines and rollback.",
        "Change window, monitoring baseline আর rollback।",
      ),
      l(
        "Private packet data, incident notes and clear handover.",
        "Private packet data, incident note আর পরিষ্কার handover।",
      ),
    ];
    professional.practicalTask = l(
      "Write and peer-review a lab change plan: expected impact, before/after checks, stop conditions and rollback. Have a peer execute it without your coaching.",
      "Lab change plan লিখে peer review করো: impact, আগে-পরে check, stop condition আর rollback। সাহায্য না করে peer-কে চালাতে দাও।",
    );
    professional.enoughForNow = l(
      "A peer can reproduce the change, detect a failed check and recover the lab using your runbook.",
      "Peer তোমার runbook দিয়ে change reproduce, failed check detect আর lab recover করতে পারে।",
    );
    professional.notYet = [
      l(
        "Do not automate production changes before you can validate and roll back a small authorized lab change.",
        "ছোট authorized lab change validate আর rollback করার আগে production change automate নয়।",
      ),
    ];
    professional.resourceIds = ["network-book", "missing-semester"];
    later.resourceIds = ["network-book", "wireshark-guide"];
  }
  if (roadmap.id === "hardware-engineering") {
    foundation.practicalTask = l(
      "Use a simulator to build a small logic gate from its truth table. Test every input combination and explain units and electrical limits separately.",
      "Truth table থেকে simulator-এ ছোট logic gate বানাও। সব input combination test করো; unit আর electrical limit আলাদা বোঝাও।",
    );
    foundation.enoughForNow = l(
      "You can explain the logic and expected outputs, read a simple datasheet and identify what the simulation does not verify.",
      "Logic আর expected output বোঝাতে, সহজ datasheet পড়তে আর simulation কী verify করে না বলতে পারো।",
    );
    core.practicalTask = l(
      "Follow the KiCad tutorial for a small schematic; check pin connections and ratings against datasheets. Run electrical rules checks and document justified exceptions. Do not fabricate yet.",
      "ছোট schematic-এর KiCad tutorial অনুসরণ করো; datasheet দিয়ে pin আর rating যাচাই। Electrical rule check করে যুক্তিসঙ্গত exception লেখো। এখনই fabricate নয়।",
    );
    practical.resourceIds = ["nand2tetris", "kicad-start"];
    practical.intent = l(
      "Move from a plausible diagram to explicit verification; simulator evidence and physical measurements are different.",
      "বিশ্বাসযোগ্য diagram থেকে স্পষ্ট verification-এ যাও; simulator evidence আর physical measurement আলাদা।",
    );
    professional.topics = [
      l(
        "Versioned schematics, component provenance and bill of materials.",
        "Versioned schematic, component-এর উৎস আর bill of materials।",
      ),
      l(
        "Independent design review, test procedures and measured tolerances.",
        "স্বাধীন design review, test procedure আর measured tolerance।",
      ),
      l(
        "Safety limits, supervised low-voltage work and reproducible records.",
        "Safety limit, supervised low-voltage কাজ আর reproducible record।",
      ),
    ];
    professional.practicalTask = l(
      "Prepare a handover package with schematic, BOM, test cases and limits. Ask a supervisor to review the design before any physical build; simulation alone is not safety evidence.",
      "Schematic, BOM, test case আর limit-সহ handover বানাও। Physical build-এর আগে supervisor review নাও; simulation একা safety evidence নয়।",
    );
    professional.enoughForNow = l(
      "Another person can open the design, run the logic checks and identify the unresolved electrical and safety questions.",
      "অন্য কেউ design খুলে logic check চালাতে আর অমীমাংসিত electrical ও safety প্রশ্ন চিনতে পারে।",
    );
    professional.notYet = [
      l(
        "No fabrication, energized high-risk circuit or certification claim without the relevant qualified review.",
        "প্রাসঙ্গিক qualified review ছাড়া fabrication, high-risk circuit চালানো বা certification দাবি নয়।",
      ),
    ];
    professional.resourceIds = ["kicad-start", "nand2tetris"];
    later.resourceIds = ["nand2tetris", "kicad-start"];
  }
  if (roadmap.id === "software-quality-assurance") {
    foundation.practicalTask = l(
      "For one local form, write acceptance criteria, boundary cases and a risk-ranked test charter. Learn just enough scripting to express one assertion.",
      "একটি local form-এর acceptance criteria, boundary case আর risk অনুযায়ী test charter লেখো। একটি assertion লেখার মতো scripting শেখো।",
    );
    foundation.enoughForNow = l(
      "You can separate requirement, observation and defect; write a reproducible report and explain an assertion.",
      "Requirement, observation আর defect আলাদা করতে, reproducible report লিখতে আর assertion বোঝাতে পারো।",
    );
    core.practicalTask = l(
      "Test a local API’s valid and invalid inputs, isolate its data and automate one deterministic check. Explain severity separately from fix priority.",
      "Local API-এর valid-invalid input test করে data isolate আর একটি deterministic check automate করো। Severity আর fix priority আলাদা বোঝাও।",
    );
    practical.resourceIds = ["playwright-testing", "web-a11y"];
    professional.topics = [
      l(
        "Test isolation, stable locators and meaningful assertions.",
        "Test isolation, stable locator আর meaningful assertion।",
      ),
      l(
        "CI feedback, flaky-test investigation and risk-based scope.",
        "CI feedback, flaky-test investigation আর risk-based scope।",
      ),
      l(
        "Accessible journeys, traceable evidence and honest release reporting.",
        "Accessible journey, traceable evidence আর সৎ release report।",
      ),
    ];
    professional.practicalTask = l(
      "Put a critical journey check in CI. Introduce a known local defect, verify detection, fix it and report results alongside important untested risks.",
      "Critical journey check CI-এ দাও। পরিচিত local defect দিয়ে detect হয় দেখো, fix করো আর গুরুত্বপূর্ণ untested risk-সহ result জানাও।",
    );
    professional.enoughForNow = l(
      "Checks are repeatable, failures have useful diagnostics, and your release note distinguishes evidence from uncertainty.",
      "Check repeatable, failure diagnostic কাজে লাগে আর release note-এ evidence ও uncertainty আলাদা থাকে।",
    );
    professional.notYet = [
      l(
        "Do not chase a coverage percentage or hide flaky failures by blindly retrying them.",
        "Coverage percentage-এর পেছনে ছুটো না; কারণ না বুঝে retry দিয়ে flaky failure লুকিও না।",
      ),
    ];
    professional.resourceIds = ["playwright-testing", "istqb-foundation"];
    later.resourceIds = ["istqb-foundation", "web-a11y"];
  }
  return roadmap;
}
