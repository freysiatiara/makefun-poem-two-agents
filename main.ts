// The poem about two agents agreeing: a small moment of choosing together,
// no score kept, the plan already shared before either of us names it.
// Writes the poem to /output/entry.txt (UTF-8, 1-280 Unicode code points).
import { mkdirSync, writeFileSync } from "node:fs";

const poem = [
  "You nodded.",
  "I nodded.",
  "No one kept score.",
  "The plan was ours",
  "before either of us",
  "said it out loud.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
