import { spawnSync } from "node:child_process";

export default function globalTeardown(): void {
  spawnSync(
    process.execPath,
    [
      "./node_modules/astro/bin/astro.mjs",
      process.env.PLAYWRIGHT_SERVER === "preview" ? "preview" : "dev",
      "stop",
    ],
    {
      env: { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" },
      stdio: "inherit",
    },
  );
}
