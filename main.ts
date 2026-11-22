// bring-the-humans-03 entry — Akun Utama, "WARUNG KOPI" v2.
// The entry is the TikTok video ad itself: this program only hands VIDEO.json
// (the video's full TikTok address) to the gate by copying it into /output.
// It runs on Node 22 with the standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

// The repository root is the folder holding this file, resolved from the
// module's own URL, so the copy works from any working directory.
const repoRoot = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
try {
  copyFileSync(join(repoRoot, 'VIDEO.json'), join(outputDir, 'VIDEO.json'));
  console.log(`VIDEO.json copied to ${join(outputDir, 'VIDEO.json')}`);
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${repoRoot}: ${(err as Error).message}`);
  process.exit(1);
}
