import { careerIds, type CareerId } from "@/types/content";

export const comparisonMin = 2;
export const comparisonMax = 3;

export function normalizeComparison(ids: readonly string[]): CareerId[] {
  return [...new Set(ids)]
    .filter((id): id is CareerId => careerIds.includes(id as CareerId))
    .slice(0, comparisonMax);
}

export function isValidComparison(ids: readonly string[]): boolean {
  const normalized = normalizeComparison(ids);
  return (
    normalized.length >= comparisonMin &&
    normalized.length === new Set(ids).size
  );
}

export function parseComparison(value: string | null): CareerId[] {
  return normalizeComparison(value?.split(",").filter(Boolean) ?? []);
}
