export const themeStorageKey = "cse-compass-theme";
export type Theme = "light" | "dark";

export function isTheme(value: unknown): value is Theme {
  return value === "light" || value === "dark";
}

export function resolveTheme(value: unknown): Theme {
  return isTheme(value) ? value : "light";
}
