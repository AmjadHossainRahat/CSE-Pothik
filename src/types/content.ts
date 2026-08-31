export const locales = ["en", "bn"] as const;
export type Locale = (typeof locales)[number];

export const exposureLevels = ["higher", "medium", "lower"] as const;
export type ExposureLevel = (typeof exposureLevels)[number];

export const careerIds = [
  "backend-engineering",
  "frontend-engineering",
  "data-engineering",
  "machine-learning",
  "cybersecurity",
  "devops-sre",
  "embedded-systems",
  "systems-research",
  "technical-product-leadership",
] as const;
export type CareerId = (typeof careerIds)[number];

export const familyIds = [
  "build-software",
  "work-with-data",
  "build-intelligence",
  "protect-systems",
  "run-systems",
  "close-to-hardware",
  "computing-deeply",
  "technology-people",
] as const;
export type FamilyId = (typeof familyIds)[number];

export interface LocalizedText {
  en: string;
  bn: string;
}

export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  url: string;
  type:
    | "official-docs"
    | "course"
    | "university"
    | "lab"
    | "book"
    | "practice"
    | "video"
    | "article";
  isFree: true;
  recommendedScope: LocalizedText;
  whyRecommended: LocalizedText;
  lastReviewed: string;
  language: "en" | "bn" | "both";
}

export interface CareerDimensions {
  coding: 1 | 2 | 3;
  mathematics: 1 | 2 | 3;
  systems: 1 | 2 | 3;
  investigation: 1 | 2 | 3;
  creativity: 1 | 2 | 3;
  communication: 1 | 2 | 3;
  production: 1 | 2 | 3;
}

export interface AITaskExposure {
  task: LocalizedText;
  exposure: ExposureLevel;
  explanation: LocalizedText;
  studentResponse: LocalizedText;
}

export interface DaySegment {
  time: string;
  activity: LocalizedText;
}

export interface Career {
  id: CareerId;
  slug: string;
  familyId: FamilyId;
  title: LocalizedText;
  shortDescription: LocalizedText;
  actualWork: LocalizedText[];
  enjoyIf: LocalizedText[];
  dislikeIf: LocalizedText[];
  realisticDay: DaySegment[];
  dimensions: CareerDimensions;
  roadmapId: CareerId;
  experimentId: CareerId;
  aiExposure: AITaskExposure[];
  relatedCareerIds: CareerId[];
  notYet: LocalizedText[];
  foundation: LocalizedText[];
  core: LocalizedText[];
  practical: LocalizedText[];
  later: LocalizedText[];
  resourceIds: string[];
}

export interface CareerFamily {
  id: FamilyId;
  title: LocalizedText;
  description: LocalizedText;
  careerIds: CareerId[];
  accent: string;
}

export interface RoadmapStage {
  id: string;
  title: LocalizedText;
  intent: LocalizedText;
  topics: LocalizedText[];
  enoughForNow: LocalizedText;
  practicalTask: LocalizedText;
  notYet: LocalizedText[];
  resourceIds: string[];
}

export interface Roadmap {
  id: CareerId;
  careerId: CareerId;
  stages: RoadmapStage[];
}

export interface CareerExperiment {
  id: CareerId;
  careerId: CareerId;
  title: LocalizedText;
  duration: string;
  prerequisites: LocalizedText[];
  experienceGoals: LocalizedText[];
  steps: LocalizedText[];
  attention: LocalizedText[];
  reflectionPrompts: LocalizedText[];
  resourceIds: string[];
}

export interface StudentSituation {
  id: string;
  label: LocalizedText;
  note: LocalizedText;
  destination: { en: string; bn: string };
}
