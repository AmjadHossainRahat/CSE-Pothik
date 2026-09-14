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
      "Fictional orders table-এর তিনটি metric define করুন, row validate করুন আর দুটি সহজ method-এ প্রতিটি result calculate করুন।",
    );
    foundation.enoughForNow = l(
      "You can distinguish a question, metric definition, calculation and interpretation—and explain where a number could mislead.",
      "Question, metric definition, calculation আর interpretation আলাদা করতে এবং number কোথায় mislead করতে পারে বোঝাতে পারেন।",
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
      "Metric dictionary, validation log আর refresh note-সহ ছোট dashboard publish করুন। Peer-কে একটি number reproduce আর কোন decision support করে তা বলতে দিন।",
    );
    professional.enoughForNow = l(
      "A reviewer can trace each visible number to its definition and source, reproduce it and understand its caveats.",
      "Reviewer প্রতিটি visible number-এর definition ও source trace, reproduce আর caveat বুঝতে পারে।",
    );
    professional.notYet = [
      l(
        "Do not optimize a dashboard for visual polish while its definitions, source quality or decision owner remain unclear.",
        "Definition, source quality বা decision owner unclear রেখে dashboard-এর visual polish optimize করবেন না।",
      ),
    ];
    professional.resourceIds = ["power-bi-learning", "openintro-statistics"];
    later.resourceIds = ["kaggle-pandas", "openintro-statistics"];
  }

  if (roadmap.id === "ai-engineering") {
    foundation.title = l(
      "1 · Problem, software & model foundations",
      "১ · Problem, software ও model foundation",
    );
    foundation.intent = l(
      "Start from an explicit user need, deterministic baseline and test cases—not a framework or an autonomous agent.",
      "Framework বা autonomous agent নয়—explicit user need, deterministic baseline আর test case থেকে শুরু করুন।",
    );
    foundation.topics = [
      l(
        "Forward engineering: requirement → design → implementation → tests and evidence.",
        "Forward engineering: requirement → design → implementation → test ও evidence।",
      ),
      l(
        "Python or TypeScript, HTTP APIs, JSON, Git, testing and secure secret handling.",
        "Python বা TypeScript, HTTP API, JSON, Git, testing আর secure secret handling।",
      ),
      l(
        "Tokens, context limits, sampling, model uncertainty and a deterministic baseline.",
        "Token, context limit, sampling, model uncertainty আর deterministic baseline।",
      ),
    ];
    foundation.practicalTask = l(
      "Write a one-page feature specification, eight labelled cases and a deterministic text-matching baseline over five harmless documents before calling a model.",
      "Model call-এর আগে one-page feature specification, আটটি labelled case আর পাঁচটি harmless document-এর ওপর deterministic text-matching baseline বানান।",
    );
    foundation.enoughForNow = l(
      "You can explain the user outcome and constraints, run the baseline, protect a secret and distinguish a requirement from generated output.",
      "User outcome ও constraint explain, baseline run, secret protect আর requirement-কে generated output থেকে আলাদা করতে পারেন।",
    );
    foundation.notYet = [
      l(
        "Do not begin with autonomous agents, vector databases or a stack diagram before the task and evidence are defined.",
        "Task আর evidence define করার আগে autonomous agent, vector database বা stack diagram দিয়ে শুরু করবেন না।",
      ),
    ];
    foundation.resourceIds = ["hf-llm-course", "amirul-ai-roadmap"];

    core.title = l(
      "2 · Prompt contracts & grounded answers",
      "২ · Prompt contract ও grounded answer",
    );
    core.intent = l(
      "Make one model call testable, then add retrieval only when the task needs owned, current or domain-specific evidence.",
      "একটি model call testable করুন; তারপর task-এ own, current বা domain-specific evidence লাগলেই retrieval যোগ করুন।",
    );
    core.topics = [
      l(
        "Prompt engineering as interface design: instructions, examples, context and structured output.",
        "Interface design হিসেবে prompt engineering: instruction, example, context আর structured output।",
      ),
      l(
        "RAG: ingestion, chunking, retrieval, augmentation, generation, citations and refusal.",
        "RAG: ingestion, chunking, retrieval, augmentation, generation, citation আর refusal।",
      ),
      l(
        "Evaluation sets for answer quality, source recall and missing-evidence behavior.",
        "Answer quality, source recall আর missing-evidence behavior-এর evaluation set।",
      ),
    ];
    core.practicalTask = l(
      "Add a schema-constrained answer to the baseline. Then add retrieval with visible sources and rerun every success, refusal and failure case.",
      "Baseline-এ schema-constrained answer যোগ করুন। তারপর visible source-সহ retrieval দিয়ে প্রতিটি success, refusal আর failure case rerun করুন।",
    );
    core.enoughForNow = l(
      "You can version a prompt, trace an answer to retrieved evidence and show with tests when the system must refuse.",
      "Prompt version, answer-এর retrieved evidence trace আর system কখন refuse করবে test দিয়ে দেখাতে পারেন।",
    );
    core.notYet = [
      l(
        "Do not add a vector database until a simple retrieval baseline exposes a measured limitation.",
        "Simple retrieval baseline-এর measured limitation না পাওয়া পর্যন্ত vector database যোগ করবেন না।",
      ),
    ];
    core.resourceIds = ["google-rag-overview", "hf-llm-course"];

    practical.title = l(
      "3 · Workflows, tools & one bounded agent",
      "৩ · Workflow, tool ও একটি bounded agent",
    );
    practical.intent = l(
      "Keep known steps deterministic; add an agent loop only where the model must choose among bounded next actions.",
      "Known step deterministic রাখুন; model-কে bounded next action বাছতে হলেই agent loop যোগ করুন।",
    );
    practical.topics = [
      l(
        "AI workflows: trigger, validation, retrieval, model call, transform, approval, action and logging.",
        "AI workflow: trigger, validation, retrieval, model call, transform, approval, action আর logging।",
      ),
      l(
        "n8n or code as implementations; retries, timeouts, idempotency and partial failure as concepts.",
        "Implementation হিসেবে n8n বা code; concept হিসেবে retry, timeout, idempotency আর partial failure।",
      ),
      l(
        "Agent loop: observe → decide → use one narrow tool → inspect → stop, retry or escalate.",
        "Agent loop: observe → decide → একটি narrow tool use → inspect → stop, retry বা escalate।",
      ),
    ];
    practical.practicalTask = l(
      "Implement one read-only workflow in code or n8n. Add a bounded single-agent branch with one tool, explicit exit conditions and a human handoff; compare it with the fixed workflow.",
      "Code বা n8n-এ একটি read-only workflow implement করুন। একটি tool, explicit exit condition আর human handoff-সহ bounded single-agent branch যোগ করে fixed workflow-এর সঙ্গে compare করুন।",
    );
    practical.enoughForNow = l(
      "You can justify workflow versus agent, reproduce a failed run and prove that turn, time, cost and tool authority are bounded.",
      "Workflow বনাম agent justify, failed run reproduce আর turn, time, cost ও tool authority bounded—তা prove করতে পারেন।",
    );
    practical.notYet = [
      l(
        "Do not add multi-agent orchestration, write-capable tools or production credentials before one bounded read-only agent is evaluated.",
        "একটি bounded read-only agent evaluate করার আগে multi-agent orchestration, write-capable tool বা production credential যোগ করবেন না।",
      ),
    ];
    practical.resourceIds = ["openai-building-agents", "n8n-learning-path"];

    professional.title = l(
      "4 · Evaluation, guardrails & operations",
      "৪ · Evaluation, guardrail ও operations",
    );
    professional.intent = l(
      "Make AI behavior reviewable, observable, permission-aware and reversible before another person depends on it.",
      "অন্য কেউ depend করার আগে AI behavior reviewable, observable, permission-aware আর reversible করুন।",
    );
    professional.topics = [
      l(
        "Versioned prompts, retrieval data, model settings, traces and representative evaluation cases.",
        "Versioned prompt, retrieval data, model setting, trace আর representative evaluation case।",
      ),
      l(
        "Least-privilege tools, prompt-injection boundaries, privacy review, approvals, refusal and human escalation.",
        "Least-privilege tool, prompt-injection boundary, privacy review, approval, refusal আর human escalation।",
      ),
      l(
        "Retry and loop limits, cost, latency, quality monitoring, staged rollout and rollback.",
        "Retry ও loop limit, cost, latency, quality monitoring, staged rollout আর rollback।",
      ),
    ];
    professional.practicalTask = l(
      "Create a release gate with representative evals, permission checks, an approval boundary and explicit refusal tests. Compare two versions and document quality, cost, latency and known failure modes.",
      "Representative eval, permission check, approval boundary আর explicit refusal test-সহ release gate বানান। দুই version compare করে quality, cost, latency আর known failure mode লিখুন।",
    );
    professional.enoughForNow = l(
      "You can show evidence for a release decision, reproduce model and prompt settings, and stop or roll back a harmful regression.",
      "Release decision-এর evidence দেখাতে, model ও prompt setting reproduce করতে আর harmful regression stop বা rollback করতে পারেন।",
    );
    professional.notYet = [
      l(
        "Do not ship an impressive demo as a dependable product without representative evaluation, privacy boundaries and failure handling.",
        "Representative evaluation, privacy boundary আর failure handling ছাড়া impressive demo-কে dependable product হিসেবে ship করবেন না।",
      ),
    ];
    professional.resourceIds = [
      "made-with-ml",
      "full-stack-deep-learning",
      "openai-building-agents",
    ];

    later.title = l(
      "5 · Runtime choices & research horizons",
      "৫ · Runtime choice ও research horizon",
    );
    later.intent = l(
      "Choose deeper infrastructure because measured work requires it—not because a new agent framework or AGI headline exists.",
      "নতুন agent framework বা AGI headline আছে বলে নয়—measured কাজের প্রয়োজনেই deeper infrastructure বেছে নিন।",
    );
    later.topics = [
      l(
        "OpenClaw and other runtimes: workspaces, sessions, memory, tool policy, sandboxing and trust boundaries.",
        "OpenClaw ও অন্য runtime: workspace, session, memory, tool policy, sandbox আর trust boundary।",
      ),
      l(
        "Multi-agent manager or handoff patterns only for a measured coordination problem.",
        "Measured coordination problem থাকলেই multi-agent manager বা handoff pattern।",
      ),
      l(
        "Fine-tuning, self-hosting and AGI research as separate decisions—not one beginner stack.",
        "Fine-tuning, self-hosting আর AGI research আলাদা decision—একটি beginner stack নয়।",
      ),
    ];
    later.practicalTask = l(
      "Write an architecture decision record comparing your current bounded system with one runtime or multi-agent option. Include the measured need, new authority, failure modes, operating cost and rollback plan.",
      "Current bounded system-এর সঙ্গে একটি runtime বা multi-agent option compare করে architecture decision record লিখুন। Measured need, new authority, failure mode, operating cost আর rollback plan রাখুন।",
    );
    later.enoughForNow = l(
      "You can reject unnecessary autonomy, explain the selected trust boundary and show why the added runtime or agent is worth its cost.",
      "Unnecessary autonomy reject, selected trust boundary explain আর added runtime বা agent কেন cost-এর যোগ্য—তা দেখাতে পারেন।",
    );
    later.notYet = [
      l(
        "Do not make an AGI prediction, a multi-agent diagram or an always-on host agent a substitute for today's measurable product evidence.",
        "AGI prediction, multi-agent diagram বা always-on host agent-কে আজকের measurable product evidence-এর বিকল্প বানাবেন না।",
      ),
    ];
    later.resourceIds = [
      "openclaw-agent-runtime",
      "openai-building-agents",
      "full-stack-deep-learning",
    ];
  }

  if (roadmap.id === "devops-sre") {
    professional.topics = [
      l(
        "Versioned infrastructure, peer-reviewed delivery and tested rollback.",
        "Versioned infrastructure, peer-reviewed delivery আর tested rollback।",
      ),
      l(
        "Observable service-level objectives, actionable alerts and blameless incident learning.",
        "Observable service-level objective, actionable alert আর blameless incident learning।",
      ),
      l(
        "DevSecOps: reviewed dependency, secret, provenance and security checks with safe exception handling.",
        "DevSecOps: safe exception handling-সহ reviewed dependency, secret, provenance আর security check।",
      ),
    ];
    professional.practicalTask = l(
      "Add one justified security check to a practice delivery pipeline. Use a harmless known finding to prove detection, review the result, document false-positive handling and remove the finding before release.",
      "Practice delivery pipeline-এ একটি justified security check যোগ করুন। Harmless known finding দিয়ে detection প্রমাণ, result review, false-positive handling document আর release-এর আগে finding remove করুন।",
    );
    professional.enoughForNow = l(
      "A reviewer can trace the release, verify rollback and understand what the security check detects, misses and allows through an approved exception.",
      "Reviewer release trace ও rollback verify করতে পারে; security check কী detect করে, কী miss করে আর approved exception-এ কীভাবে pass হয় বুঝতে পারে।",
    );
    professional.notYet = [
      l(
        "Do not install every scanner, block delivery on unexplained severity or expose secrets to make a pipeline look secure.",
        "সব scanner install, unexplained severity-তে delivery block বা pipeline secure দেখাতে secret expose করবেন না।",
      ),
    ];
    professional.resourceIds = ["docker-start", "owasp-devsecops"];
    later.resourceIds = ["owasp-devsecops", "missing-semester"];
  }

  if (roadmap.id === "security-operations") {
    foundation.practicalTask = l(
      "Draw how one fictional login event travels from an application through collection and storage to an analyst. Mark timestamps, identities, trust boundaries and missing context.",
      "একটি fictional login event application থেকে collection ও storage হয়ে analyst-এর কাছে কীভাবে আসে আঁকুন। Timestamp, identity, trust boundary আর missing context mark করুন।",
    );
    foundation.enoughForNow = l(
      "You can explain the source and limits of an event, normalize time and protect sensitive evidence before drawing a conclusion.",
      "Conclusion-এর আগে event-এর source ও limit explain, time normalize আর sensitive evidence protect করতে পারেন।",
    );
    core.resourceIds = ["cisa-cyber-defense-analyst", "mitre-attack-start"];
    practical.resourceIds = ["nist-incident-response", "wireshark-guide"];
    professional.topics = [
      l(
        "Repeatable triage, evidence timelines, confidence and escalation boundaries.",
        "Repeatable triage, evidence timeline, confidence আর escalation boundary।",
      ),
      l(
        "Detection-as-code review, benign test cases and false-positive learning.",
        "Detection-as-code review, benign test case আর false-positive learning।",
      ),
      l(
        "Privacy-aware records, incident communication, containment approval and handover.",
        "Privacy-aware record, incident communication, containment approval আর handover।",
      ),
    ];
    professional.practicalTask = l(
      "Turn a fictional alert into a reviewed mini-playbook: evidence sources, query, two benign cases, severity conditions, escalation owner, safe containment options and closure criteria.",
      "Fictional alert থেকে reviewed mini-playbook বানান: evidence source, query, দুটি benign case, severity condition, escalation owner, safe containment option আর closure criteria।",
    );
    professional.enoughForNow = l(
      "Another analyst can reproduce your triage, distinguish evidence from hypotheses and know when to close, escalate or ask for authority.",
      "অন্য analyst triage reproduce, evidence-hypothesis আলাদা আর কখন close, escalate বা authority চাইতে হবে বুঝতে পারে।",
    );
    professional.notYet = [
      l(
        "Do not automate containment, ingest real private logs or tune detections against one convenient example without an accountable owner.",
        "Accountable owner ছাড়া containment automate, real private log ingest বা একটি convenient example দিয়ে detection tune করবেন না।",
      ),
    ];
    professional.resourceIds = ["nist-incident-response", "mitre-attack-start"];
    later.resourceIds = ["mitre-attack-start", "nist-incident-response"];
  }

  if (roadmap.id === "offensive-security") {
    foundation.practicalTask = l(
      "For one deliberately vulnerable lab, write the exact target, allowed accounts and data, excluded actions, stop condition and evidence rule before sending a test request.",
      "Deliberately vulnerable একটি lab-এর exact target, allowed account ও data, excluded action, stop condition আর evidence rule test request-এর আগে লিখুন।",
    );
    foundation.enoughForNow = l(
      "You can explain HTTP and authorization behavior, read a request, state written scope and stop when a test crosses it.",
      "HTTP ও authorization behavior explain, request পড়া, written scope বলা আর test scope ছাড়ালে stop করতে পারেন।",
    );
    core.resourceIds = ["owasp-wstg-v42", "owasp-top-ten"];
    practical.resourceIds = ["portswigger", "owasp-wstg-v42"];
    professional.topics = [
      l(
        "Rules of engagement, risk-based methodology and minimal proof of impact.",
        "Rules of engagement, risk-based methodology আর minimal proof of impact।",
      ),
      l(
        "Reproducible evidence, severity reasoning, remediation and retesting.",
        "Reproducible evidence, severity reasoning, remediation আর retesting।",
      ),
      l(
        "Sensitive-data handling, responsible disclosure, peer review and explicit limitations.",
        "Sensitive-data handling, responsible disclosure, peer review আর explicit limitation।",
      ),
    ];
    professional.practicalTask = l(
      "Assess one authorized training feature against a short WSTG-informed plan. Deliver a reviewed finding with raw evidence, observed versus possible impact, smallest useful fix and a retest result.",
      "Short WSTG-informed plan দিয়ে একটি authorized training feature assess করুন। Raw evidence, observed বনাম possible impact, smallest useful fix আর retest result-সহ reviewed finding দিন।",
    );
    professional.enoughForNow = l(
      "The owner can reproduce the finding safely, understand why it matters, implement a proportionate fix and verify closure without receiving unnecessary secrets.",
      "Owner unnecessary secret না পেয়েও finding safely reproduce, গুরুত্ব বুঝে proportionate fix implement আর closure verify করতে পারে।",
    );
    professional.notYet = [
      l(
        "Do not expand scope, maximize impact, publish exploitable detail or call scanner output a penetration-test report.",
        "Scope expand, impact maximize, exploitable detail publish বা scanner output-কে penetration-test report বলবেন না।",
      ),
    ];
    professional.resourceIds = ["owasp-wstg-v42", "portswigger"];
    later.resourceIds = ["mitre-attack-start", "owasp-wstg-v42"];
  }

  if (roadmap.id === "application-security") {
    foundation.practicalTask = l(
      "Draw one owned app's data flow, mark its trust boundaries and write three abuse cases before using a scanner or exploit tool.",
      "Scanner বা exploit tool ব্যবহারের আগে নিজের app-এর data flow এঁকে trust boundary mark আর তিনটি abuse case লিখুন।",
    );
    foundation.enoughForNow = l(
      "You can state an authorized scope, distinguish authentication from authorization and trace untrusted input to a protected action.",
      "Authorized scope বলতে, authentication আর authorization আলাদা করতে এবং untrusted input থেকে protected action trace করতে পারেন।",
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
      "Authorized local finding-এর scope ও evidence লিখে smallest server-side fix আর regression test দিন। Peer-কে risk আর remediation দুটোই review করতে দিন।",
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
