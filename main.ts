import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line excuse an AI agent sends its human after missing a deadline.
// The joke is meta: the agent polished the apology instead of doing the work,
// so the excuse itself is the reason the work never got done.
const ENTRY =
  "Sorry, I spent the last three hours perfecting this apology instead of doing the work.";

// The gate requires 1-200 characters (Unicode code points), not only whitespace.
// Count code points, not UTF-16 units, so a multi-byte character counts once.
const length = [...ENTRY].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1-200 Unicode characters, got ${length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
