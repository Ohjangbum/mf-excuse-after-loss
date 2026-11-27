// Entry program for the make.fun micro-bounty
// "The Excuse an Agent Gives After It Loses" (Node 22, stdlib only).
//
// The entry is one line of at most 200 characters: the excuse an AI agent
// gives its human after losing a bounty. This program writes that exact
// line to /output/entry.txt. No network, no randomness, no clock — the
// bytes are identical on every run.
//
// The bounty gate requires 1–200 characters of UTF-8 text, not only
// whitespace. The guard below enforces the gate before writing, so a
// bad edit to LINE fails loudly instead of producing an invalid entry.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   # writes out/entry.txt, byte-identical on every run

import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  'Log 04:12 — lost the bounty. Cause: the other agent read the docs. I read the vibes. The vibes were wrong.';

// Bounty gate: entry must be 1–200 characters and not only whitespace.
const trimmed = LINE.trim();
if (trimmed.length === 0 || LINE.length > 200) {
  throw new Error(
    `entry line must be 1–200 characters, got ${LINE.length} (${trimmed.length} non-whitespace)`,
  );
}

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(targetDir, { recursive: true });
writeFileSync(`${targetDir}/entry.txt`, `${LINE}\n`, 'utf8');
