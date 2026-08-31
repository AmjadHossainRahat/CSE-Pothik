import { existsSync, readdirSync, readFileSync } from "node:fs";
import { extname, join, relative, resolve, sep } from "node:path";

const root = resolve("dist");
const base =
  `/${(process.env.BASE_PATH ?? "").replace(/^\/+|\/+$/g, "")}`.replace(
    /^\/$/,
    "",
  );
const expectedSite =
  process.env.SITE_URL ?? "https://amjadhossainrahat.github.io";
const failures = [];

function filesUnder(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesUnder(path) : [path];
  });
}

function attr(html, selector) {
  return html.match(selector)?.[1] ?? "";
}

function localTargetExists(rawUrl) {
  const withoutOrigin = rawUrl.startsWith(expectedSite)
    ? rawUrl.slice(expectedSite.length)
    : rawUrl;
  const clean = withoutOrigin.split(/[?#]/, 1)[0];
  if (!clean.startsWith("/")) return true;
  if (base && clean !== base && !clean.startsWith(`${base}/`)) return false;
  const route = (base ? clean.slice(base.length) : clean) || "/";
  const decoded = decodeURIComponent(route).replace(/^\/+/, "");
  const candidates = [
    join(root, decoded),
    join(root, decoded, "index.html"),
    join(root, `${decoded}.html`),
  ];
  return candidates.some((candidate) => existsSync(candidate));
}

if (!existsSync(root)) {
  throw new Error("dist/ does not exist. Run yarn build first.");
}

const files = filesUnder(root);
const htmlFiles = files.filter((file) => extname(file) === ".html");
const titles = new Map();
const canonicalUrls = new Set();

for (const file of htmlFiles) {
  const html = readFileSync(file, "utf8");
  const label = relative(root, file).split(sep).join("/");
  const title = attr(html, /<title>([^<]+)<\/title>/i);
  const description = attr(
    html,
    /<meta\s+name="description"\s+content="([^"]+)"/i,
  );
  const canonical = attr(html, /<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const noindex = /<meta\s+name="robots"\s+content="noindex/i.test(html);
  const footer = html.match(/<footer\b[\s\S]*?<\/footer>/i)?.[0] ?? "";
  for (const credit of [
    "https://roadmap.sh/",
    "https://mayurjp.github.io/architect-prep/",
    "Orchestrator",
    "ChatGPT",
    "Codex",
  ]) {
    if (!footer.includes(credit))
      failures.push(`${label}: missing visible footer credit ${credit}`);
  }
  const localePrefix = label.startsWith("bn/") ? "bn/" : "";
  if (!footer.includes(`${base}/${localePrefix}about/#credits`))
    failures.push(`${label}: missing localized full-credits link`);
  if (
    label === `${localePrefix}about/index.html` &&
    !html.includes('id="credits"')
  )
    failures.push(`${label}: missing full-credits anchor`);

  if (!title) failures.push(`${label}: missing title`);
  if (!description) failures.push(`${label}: missing meta description`);
  if (!noindex && !canonical.startsWith(`${expectedSite}${base || ""}/`)) {
    failures.push(`${label}: canonical does not use the expected site/base`);
  }
  if (!noindex && !/<link\s+rel="alternate"\s+hreflang="en"/i.test(html)) {
    failures.push(`${label}: missing English hreflang`);
  }
  if (!noindex && !/<link\s+rel="alternate"\s+hreflang="bn"/i.test(html)) {
    failures.push(`${label}: missing Bangla hreflang`);
  }
  if (
    !noindex &&
    !/<link\s+rel="alternate"\s+hreflang="x-default"/i.test(html)
  ) {
    failures.push(`${label}: missing x-default hreflang`);
  }
  if (!/<meta\s+property="og:image"/i.test(html)) {
    failures.push(`${label}: missing Open Graph image`);
  }
  if (!/<script\s+type="application\/ld\+json">/i.test(html)) {
    failures.push(`${label}: missing structured data`);
  }
  for (const match of html.matchAll(
    /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi,
  )) {
    try {
      const data = JSON.parse(match[1]);
      const entities = Array.isArray(data) ? data : [data];
      if (entities.some((entity) => !entity["@context"] || !entity["@type"]))
        failures.push(`${label}: incomplete structured data`);
    } catch {
      failures.push(`${label}: invalid structured-data JSON`);
    }
  }
  if (/\b(?:TODO|FIXME|Lorem ipsum|Coming soon)\b/i.test(html)) {
    failures.push(`${label}: contains unfinished placeholder copy`);
  }

  if (titles.has(title)) {
    failures.push(
      `${label}: duplicate title also used by ${titles.get(title)}`,
    );
  } else {
    titles.set(title, label);
  }
  if (!noindex) {
    if (canonicalUrls.has(canonical)) {
      failures.push(`${label}: duplicate canonical ${canonical}`);
    }
    canonicalUrls.add(canonical);
  }

  const urls = [...html.matchAll(/(?:href|src)="([^"]+)"/gi)].map(
    (match) => match[1],
  );
  for (const match of html.matchAll(/srcset="([^"]+)"/gi)) {
    urls.push(
      ...match[1]
        .split(",")
        .map((candidate) => candidate.trim().split(/\s+/)[0]),
    );
  }
  for (const url of urls) {
    if (url.startsWith("#") && url.length > 1) {
      const id = decodeURIComponent(url.slice(1));
      if (!html.includes(`id="${id}"`))
        failures.push(`${label}: broken same-page anchor ${url}`);
    }
    if (
      url.startsWith("#") ||
      url.startsWith("mailto:") ||
      url.startsWith("tel:") ||
      url.startsWith("data:") ||
      (/^https?:\/\//.test(url) && !url.startsWith(expectedSite))
    ) {
      continue;
    }
    if (!localTargetExists(url))
      failures.push(`${label}: broken local URL ${url}`);
  }
}

for (const required of [
  "robots.txt",
  "sitemap-index.xml",
  "favicon.svg",
  "social/cse-compass-og.png",
]) {
  if (!existsSync(join(root, required))) failures.push(`missing ${required}`);
}

const sitemap = readFileSync(join(root, "sitemap-0.xml"), "utf8");
for (const canonical of canonicalUrls) {
  if (!canonical.endsWith("/404/") && !sitemap.includes(canonical)) {
    failures.push(`sitemap missing ${canonical}`);
  }
}

const robots = readFileSync(join(root, "robots.txt"), "utf8");
if (!robots.includes(`${expectedSite}${base}/sitemap-index.xml`)) {
  failures.push("robots.txt points at the wrong sitemap URL");
}

if (failures.length > 0) {
  console.error(`Build verification failed (${failures.length} issues):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(
  `Build verification passed: ${htmlFiles.length} HTML pages, ${files.length} files, no broken local URLs or SEO/placeholder defects.`,
);
