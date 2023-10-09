#!/usr/bin/env node
import { readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import hljs from 'highlight.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const highlightPackage = require.resolve('highlight.js/package.json');
const highlightRoot = dirname(highlightPackage);
const languageFiles = readdirSync(join(highlightRoot, 'lib', 'languages')).filter(
  (value) => value.endsWith('.js') && !value.endsWith('.js.js'),
);
const keys = new Set();
const entries = [];

const add = (name, aliases = []) => {
  [name, ...aliases].forEach((key) => {
    if (keys.has(key)) return;
    keys.add(key);
    if (!/^(?!\d)\w+$/u.test(key)) key = `'${key}'`;
    entries.push(`\n  ${key}: () => import('highlight.js/lib/languages/${name}'),`);
  });
};

for (const languageFile of languageFiles) {
  const name = basename(languageFile, '.js');
  const languageFn = require(`highlight.js/lib/languages/${name}`);
  const language = languageFn(hljs);

  add(name, language.aliases);
}

const updated = new Date().toLocaleString();
const entriesText = entries.join('');
const script = `/* eslint-disable max-lines */\n/* Updated: ${updated} */\nimport { type LanguageFn } from 'highlight.js';\n\nexport const languages: Record<string, () => Promise<{ default: LanguageFn }>> = {${entriesText}\n};\n`;

writeFileSync(resolve(__dirname, '..', 'src', 'languages.ts'), script);
