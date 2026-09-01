import { l } from "@/lib/localized";
import type { Roadmap } from "@/types/content";

/** Replace generic software-engineering stages where specialist evidence matters. */
export function refineSpecialistRoadmap(roadmap: Roadmap): Roadmap {
  const [foundation, core, practical, professional, later] = roadmap.stages;
  if (!foundation || !core || !practical || !professional || !later)
    return roadmap;

  if (roadmap.id === "data-analytics-bi") {
    foundation.practicalTask = l(
      "Define three metrics for a fictional orders table, validate its rows and calculate each result twice using two simple methods.",
      "Fictional orders table-এর তিনটি metric define করো, row validate করো আর দুটি সহজ method-এ প্রতিটি result calculate করো।",
    );
    foundation.enoughForNow = l(
      "You can distinguish a question, metric definition, calculation and interpretation—and explain where a number could mislead.",
      "Question, metric definition, calculation আর interpretation আলাদা করতে এবং number কোথায় mislead করতে পারে বোঝাতে পারো।",
    );
    core.resourceIds = ["sqlbolt", "openintro-statistics"];
    practical.resourceIds = ["kaggle-pandas", "power-bi-learning"];
    professional.topics = [
      l(
        "Versioned metric definitions, query review and reproducible data checks.",
        "Versioned metric definition, query review আর reproducible data check।",
      ),
      l(
        "Accessible dashboards, decision context and uncertainty communication.",
        "Accessible dashboard, decision context আর uncertainty communication।",
      ),
      l(
        "Privacy-aware access, data lineage and monitored refresh quality.",
        "Privacy-aware access, data lineage আর monitored refresh quality।",
      ),
    ];
    professional.practicalTask = l(
      "Publish a small dashboard with a metric dictionary, validation log and refresh note. Ask a peer to reproduce one number and state the decision it supports.",
      "Metric dictionary, validation log আর refresh note-সহ ছোট dashboard publish করো। Peer-কে একটি number reproduce আর কোন decision support করে তা বলতে দাও।",
    );
    professional.enoughForNow = l(
      "A reviewer can trace each visible number to its definition and source, reproduce it and understand its caveats.",
      "Reviewer প্রতিটি visible number-এর definition ও source trace, reproduce আর caveat বুঝতে পারে।",
    );
    professional.notYet = [
      l(
        "Do not optimize a dashboard for visual polish while its definitions, source quality or decision owner remain unclear.",
        "Definition, source quality বা decision owner unclear রেখে dashboard-এর visual polish optimize কোরো না।",
      ),
    ];
    professional.resourceIds = ["power-bi-learning", "openintro-statistics"];
    later.resourceIds = ["kaggle-pandas", "openintro-statistics"];
  }

  if (roadmap.id === "ai-engineering") {
    foundation.practicalTask = l(
      "Build a deterministic text-matching baseline over five documents and record where it succeeds, refuses and fails before calling a model.",
      "Model call-এর আগে পাঁচ document-এর ওপর deterministic text-matching baseline বানিয়ে success, refusal আর failure লিখে রাখো।",
    );
    foundation.enoughForNow = l(
      "You can separate retrieval, generation and evaluation, write a small test set and explain why a baseline matters.",
      "Retrieval, generation আর evaluation আলাদা করতে, ছোট test set লিখতে আর baseline কেন দরকার বোঝাতে পারো।",
    );
    core.resourceIds = ["hf-llm-course", "full-stack-deep-learning"];
    practical.resourceIds = ["made-with-ml", "amirul-ai-roadmap"];
    professional.topics = [
      l(
        "Versioned prompts, datasets, model settings and evaluation cases.",
        "Versioned prompt, dataset, model setting আর evaluation case।",
      ),
      l(
        "Typed boundaries, privacy review, refusal behavior and human escalation.",
        "Typed boundary, privacy review, refusal behavior আর human escalation।",
      ),
      l(
        "Cost, latency, quality monitoring, staged rollout and rollback.",
        "Cost, latency, quality monitoring, staged rollout আর rollback।",
      ),
    ];
    professional.practicalTask = l(
      "Create a release gate with representative evaluation cases, a minimum threshold and explicit refusal checks. Compare two versions and document cost, latency and known failure modes.",
      "Representative evaluation case, minimum threshold আর explicit refusal check-সহ release gate বানাও। দুই version compare করে cost, latency আর known failure mode লেখো।",
    );
    professional.enoughForNow = l(
      "You can show evidence for a release decision, reproduce model and prompt settings, and stop or roll back a harmful regression.",
      "Release decision-এর evidence দেখাতে, model ও prompt setting reproduce করতে আর harmful regression stop বা rollback করতে পারো।",
    );
    professional.notYet = [
      l(
        "Do not ship an impressive demo as a dependable product without representative evaluation, privacy boundaries and failure handling.",
        "Representative evaluation, privacy boundary আর failure handling ছাড়া impressive demo-কে dependable product হিসেবে ship কোরো না।",
      ),
    ];
    professional.resourceIds = ["made-with-ml", "full-stack-deep-learning"];
    later.resourceIds = ["amirul-ai-roadmap", "hf-llm-course"];
  }

  if (roadmap.id === "application-security") {
    foundation.practicalTask = l(
      "Draw one owned app's data flow, mark its trust boundaries and write three abuse cases before using a scanner or exploit tool.",
      "Scanner বা exploit tool ব্যবহারের আগে নিজের app-এর data flow এঁকে trust boundary mark আর তিনটি abuse case লেখো।",
    );
    foundation.enoughForNow = l(
      "You can state an authorized scope, distinguish authentication from authorization and trace untrusted input to a protected action.",
      "Authorized scope বলতে, authentication আর authorization আলাদা করতে এবং untrusted input থেকে protected action trace করতে পারো।",
    );
    core.resourceIds = ["owasp-top-ten", "owasp-threat-modeling"];
    practical.resourceIds = ["owasp-cheat-sheets", "portswigger"];
    professional.topics = [
      l(
        "Threat-model review, secure defaults and testable security requirements.",
        "Threat-model review, secure default আর testable security requirement।",
      ),
      l(
        "Evidence-based triage, reproducible fixes and regression protection.",
        "Evidence-based triage, reproducible fix আর regression protection।",
      ),
      l(
        "Responsible disclosure, secret-safe records and accountable risk acceptance.",
        "Responsible disclosure, secret-safe record আর accountable risk acceptance।",
      ),
    ];
    professional.practicalTask = l(
      "For an authorized local finding, write scope and evidence, implement the smallest server-side fix and add a regression test. Have a peer review both risk and remediation.",
      "Authorized local finding-এর scope ও evidence লিখে smallest server-side fix আর regression test দাও। Peer-কে risk আর remediation দুটোই review করতে দাও।",
    );
    professional.enoughForNow = l(
      "A reviewer can reproduce the finding safely, verify the fix and understand the remaining risk without receiving secrets.",
      "Reviewer secret না পেয়েও finding safely reproduce, fix verify আর remaining risk বুঝতে পারে।",
    );
    professional.notYet = [
      l(
        "Do not test outside written authorization, publish exploitable details carelessly or equate scanner severity with business risk.",
        "Written authorization-এর বাইরে test, exploitable detail careless publish বা scanner severity-কে business risk ভাবা নয়।",
      ),
    ];
    professional.resourceIds = ["owasp-cheat-sheets", "owasp-threat-modeling"];
    later.resourceIds = ["owasp-top-ten", "portswigger"];
  }

  return roadmap;
}
