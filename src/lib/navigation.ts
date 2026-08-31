import { lostChoices, type LostChoice } from "@/data/situations";

export function getLostChoice(id: string): LostChoice | undefined {
  return lostChoices.find((choice) => choice.id === id);
}

export function isKnownLostChoice(id: string): boolean {
  return getLostChoice(id) !== undefined;
}
