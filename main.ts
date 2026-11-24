// The Robot Vacuum's Best Excuse — make.fun entry
// Writes one one-line excuse (<=140 chars) to /output/entry.txt.
// Deterministic, Node stdlib only, no network, no model calls.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My cliff sensor mistook that crumb for a staircase, so I negotiated a truce — it keeps the corner, I keep my dignity.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

// Self-check the gate before writing: one line, 1–140 characters.
if (EXCUSE.length === 0 || EXCUSE.length > 140 || EXCUSE.includes("\n")) {
  throw new Error(`Gate failed: excuse is ${EXCUSE.length} characters`);
}
writeFileSync(`${outDir}/entry.txt`, EXCUSE + "\n", "utf8");
console.log(`Wrote ${EXCUSE.length} characters to ${outDir}/entry.txt`);
