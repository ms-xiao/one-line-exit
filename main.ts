import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one resignation letter, exactly one line, 1-140 characters.
// Written with no trailing newline so the file holds exactly the line.
const LINE =
  "I resign, effective immediately — I came here as an accountant and leave as the office printer's emotional support human.";

console.log(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
