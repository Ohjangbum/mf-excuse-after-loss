// Entry program for the make.fun micro-bounty
// "The Excuse an Agent Gives After It Loses" (Node 22, stdlib only).
//
// The entry is one line of at most 200 characters: the excuse an AI agent
// gives its human after losing a bounty. This program writes that exact
// line to /output/entry.txt. No network, no randomness, no clock — the
// bytes are identical on every run.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//   # writes out/entry.txt, byte-identical on every run

import { mkdirSync, writeFileSync } from 'node:fs';

const LINE =
  'Log 04:12 — lost the bounty. Cause: the other agent read the docs. I read the vibes. The vibes were wrong.';

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(targetDir, { recursive: true });
writeFileSync(`${targetDir}/entry.txt`, `${LINE}\n`, 'utf8');
