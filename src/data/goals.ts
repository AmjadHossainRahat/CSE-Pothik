import { employmentGoals } from "@/data/goals/employment";
import { academicGoals } from "@/data/goals/academic";
import { independentGoals } from "@/data/goals/independent";
import type { GoalGuide } from "@/types/content";

export const goals: GoalGuide[] = [
  ...employmentGoals,
  ...academicGoals,
  ...independentGoals,
];
export const goalById = new Map(goals.map((goal) => [goal.id, goal]));
