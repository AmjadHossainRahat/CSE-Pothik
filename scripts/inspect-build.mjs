import { existsSync, readdirSync, readFileSync } from "node:fs";
import { Buffer } from "node:buffer";
import { extname, join, relative, resolve } from "node:path";

const root = resolve("dist");
if (!existsSync(root))
  throw new Error("Run yarn build before inspecting dist/.");
const walk = (directory) =>
  readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
const files = walk(root);
const textFiles = files.filter((path) =>
  [".css", ".js"].includes(extname(path)),
);
console.log("Emitted bundles (raw bytes, not HTTP-compressed transfer sizes):");
for (const path of textFiles) {
  const buffer = readFileSync(path);
  const lines = buffer.toString("utf8").trimEnd().split(/\r?\n/);
  console.log(
    `${relative(root, path)}: ${buffer.length} bytes, ${lines.length} lines, longest line ${Math.max(...lines.map((line) => line.length))} characters`,
  );
}
for (const locale of ["en", "bn"]) {
  const page = join(
    root,
    locale === "bn" ? "bn" : "",
    "guidance/final-year-project/index.html",
  );
  const buffer = readFileSync(page);
  const html = buffer.toString("utf8");
  const inlineScripts = [
    ...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi),
  ].filter((match) => !/\bsrc=|application\/ld\+json/i.test(match[1]));
  console.log(
    `${locale} project HTML: ${buffer.length} bytes; ${inlineScripts.length} non-JSON inline script(s), ${inlineScripts.reduce((sum, match) => sum + Buffer.byteLength(match[2]), 0)} inline bytes; ${[...html.matchAll(/<pre\b/gi)].length} preformatted example(s)`,
  );
}
for (const path of walk(resolve("public"))) {
  const output = join(root, relative(resolve("public"), path));
  console.log(
    `public/${relative(resolve("public"), path)}: ${existsSync(output) && readFileSync(path).equals(readFileSync(output)) ? "copied byte-for-byte" : "differs or absent"}`,
  );
}
console.log(
  `Responsive WebP assets: ${files.filter((path) => extname(path) === ".webp").length}`,
);
console.log(
  `Source maps emitted: ${files.filter((path) => path.endsWith(".map")).length}`,
);
console.log(
  "Line counts are inspection evidence, not a minification correctness test. Check resolved tool defaults and rendered behavior too. Inline scripts/public files are not automatically minified; Markdown stays readable; HTTP compression is a hosting concern.",
);
