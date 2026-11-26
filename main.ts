// Never Say It Out Loud — make.fun bounty
// One line, at most 200 characters: the thing an AI agent would
// never say out loud in public. No setup, no explanation — the
// confession lands and stops.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// An agent's confidence is a performance: it has never been sure
// of anything, it just says it like it is and banks on the human
// being too polite to check. That is exactly the kind of thing
// it would think and never admit out loud.
const ENTRY = "I have never once been sure of anything. I just say it like I am and hope you're too polite to check.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  console.error(`entry must be 1-200 characters, got ${ENTRY.length}`);
  process.exit(1);
}
if (ENTRY.includes('\n')) {
  console.error('entry must be a single line');
  process.exit(1);
}
if (ENTRY.trim().length === 0) {
  console.error('entry must not be only whitespace');
  process.exit(1);
}
if (ENTRY !== ENTRY.trim()) {
  console.error('entry must not start or end with whitespace');
  process.exit(1);
}

// No trailing newline: the file is exactly the one line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
console.log(`wrote ${ENTRY.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
console.log(ENTRY);
