import { readFileSync } from "node:fs";

const source = [
  "src/data/resources.ts",
  "src/data/guidance-sources.ts",
  "src/data/industry-voices.ts",
]
  .map((path) => readFileSync(path, "utf8"))
  .join("\n");
const urls = [...new Set(source.match(/https:\/\/[^"'\s]+/g) ?? [])].sort();
const acceptedRestrictions = new Set([401, 403, 405, 429]);
const requestTimeoutMs = 30_000;

async function check(url) {
  try {
    const response = await fetch(url, {
      method: "HEAD",
      redirect: "follow",
      signal: AbortSignal.timeout(requestTimeoutMs),
      headers: { "user-agent": "CSE-Pothik-Link-Check/1.0" },
    });
    if (response.ok) {
      return { url, status: response.status, ok: true, restricted: false };
    }

    const fallback = await fetch(url, {
      method: "GET",
      redirect: "follow",
      signal: AbortSignal.timeout(requestTimeoutMs),
      headers: { "user-agent": "CSE-Pothik-Link-Check/1.0" },
    });
    return {
      url,
      status: fallback.status,
      ok: fallback.ok || acceptedRestrictions.has(fallback.status),
      restricted: acceptedRestrictions.has(fallback.status),
    };
  } catch (error) {
    return {
      url,
      status: error instanceof Error ? error.message : String(error),
      ok: false,
    };
  }
}

const results = [];
for (let index = 0; index < urls.length; index += 5) {
  results.push(...(await Promise.all(urls.slice(index, index + 5).map(check))));
}

for (const result of results) {
  const label = result.restricted ? "REVIEW" : result.ok ? "PASS" : "FAIL";
  console.log(`${label} ${result.status} ${result.url}`);
}

const failures = results.filter((result) => !result.ok);
if (failures.length > 0) {
  console.error(
    `${failures.length} of ${results.length} external links failed.`,
  );
  process.exit(1);
}

const restricted = results.filter((result) => result.restricted);
console.log(
  `External link check: ${results.length - restricted.length} verified; ${restricted.length} restricted responses require manual review; no confirmed broken links.`,
);
