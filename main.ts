import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// A short text that settles the reader into bravery: slow light, a tide
// already moving. Shown, not instructed — the image does the steadying.
const text = "Evening settles over the harbour, and the lighthouse turns once, slow, giving the dark back its light. A small boat slips its rope and finds the tide already moving with it, steady as a breath let out at last.";

// The gate requires 1–280 Unicode code points; fail loudly instead of
// writing an invalid entry.
const length = [...text].length;
if (length < 1 || length > 280) {
  throw new Error(`entry text is ${length} code points, must be 1–280`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
