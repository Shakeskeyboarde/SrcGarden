#!/usr/bin/env node
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const findPackageRoot = (name, dir = process.cwd()) => {
  const root = join(dir, 'node_modules', name);

  if (existsSync(root)) return root;

  const parent = dirname(dir);

  if (parent === dir) return null;

  return findPackageRoot(name, parent);
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const srcRoot = resolve(__dirname, '..', 'src');
const packageRoot = findPackageRoot('@tabler/icons-react');
const filesRoot = join(packageRoot, 'dist', 'esm', 'icons');
const files = readdirSync(filesRoot).filter((value) => value.startsWith('Icon') && value.endsWith('.js'));
const entries = [];
const names = [];

for (const file of files) {
  const name = basename(file, '.js').replace(/^Icon/u, '');

  entries.push(`\n  '${name}': createLazyIcon('${name}', () => import('@tabler/icons-react/dist/esm/icons/${file}')),`);
  names.push(name);
}

writeFileSync(
  join(srcRoot, 'icons.js'),
  `import { createLazyIcon } from './create.js';\n\nexport const icons = {${entries.join('')}\n};\n`,
);

writeFileSync(
  join(srcRoot, 'names.ts'),
  `export const ICON_NAMES = [${names.map((name) => `\n  '${name}',`).join('')}\n] as const;\n`,
);
