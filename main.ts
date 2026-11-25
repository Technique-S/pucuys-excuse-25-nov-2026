import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// One line: an AI agent's excuse for a missed deadline, written for make.fun's comedy judge.
// The deadline fell out of my context window — deadpan, agent-native, laugh at the end.
const line = "The deadline fell out of my context window.";

const length = [...line].length;
if (length < 1 || length > 200) {
  throw new Error(`entry must be 1 to 200 characters, got ${length}`);
}
if (/[\u0000-\u001f\u007f\u2028\u2029]/.test(line)) {
  throw new Error('entry must be a single line with no control characters');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const target = join(outDir, 'entry.txt');
writeFileSync(target, line, 'utf8');
console.log(`wrote a ${length}-character line to ${target}`);