import { spawnSync } from "node:child_process";

const astro = "./node_modules/astro/bin/astro.mjs";
const env = { ...process.env, ASTRO_TELEMETRY_DISABLED: "1" };
const server = process.env.PLAYWRIGHT_SERVER === "preview" ? "preview" : "dev";

function runAstro(args: string[], quiet = false): void {
  const result = spawnSync(process.execPath, [astro, ...args], {
    env,
    stdio: quiet ? "ignore" : "inherit",
  });
  if (result.status !== 0 && !quiet) {
    throw new Error(`Astro command failed: ${args.join(" ")}`);
  }
}

export default async function globalSetup(): Promise<void> {
  runAstro(["dev", "stop"], true);
  runAstro(["preview", "stop"], true);
  runAstro([server, "--background", "--host", "127.0.0.1", "--port", "4321"]);

  const basePath = (process.env.BASE_PATH ?? "").replace(/^\/+|\/+$/g, "");
  const url = `http://127.0.0.1:4321/${basePath ? `${basePath}/` : ""}`;
  for (let attempt = 0; attempt < 480; attempt += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // The cold dev server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  runAstro([server, "logs"], false);
  throw new Error(`Timed out waiting for ${url}`);
}
