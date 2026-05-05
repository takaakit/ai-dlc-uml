#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');

const TARGETS = [
  '.aidlc-rule-details',
  '.claude',
  '.codex',
  '.gemini',
  '.mcp.json',
  'AGENTS.md',
  'CLAUDE.md',
  'GEMINI.md'
];

const pkgRoot = path.resolve(__dirname, '..');
const cwd = process.cwd();

for (const name of TARGETS) {
  const src = path.join(pkgRoot, name);
  if (!fs.existsSync(src)) continue;
  const dst = path.join(cwd, name);
  fs.cpSync(src, dst, { recursive: true, force: true });
  console.log(`installed: ${name}`);
}
