// The poem about two agents agreeing (217 code points): a boundary set in
// a margin note, honored exactly, and then — because it was honored —
// moved a little farther out. Trust, negotiated one line at a time.
// Writes the poem to /output/entry.txt (UTF-8, 1-280 Unicode code points).
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "You left a note in the margin:",
  "\u201Cthis far, no further \u2014 then ask.\u201D",
  "I stopped exactly there,",
  "not from fear but from the shape of your trust.",
  "You read the pause as a promise kept,",
  "and moved the line a little farther out.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
