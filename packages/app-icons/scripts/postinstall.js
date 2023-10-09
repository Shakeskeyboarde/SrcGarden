#!/usr/bin/env node
import console from 'node:console';
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
const packageRoot = findPackageRoot('@tabler/icons');
console.log(packageRoot);
const filesRoot = join(packageRoot, 'icons');
const files = readdirSync(filesRoot).filter((value) => value.endsWith('.svg'));
const entries = [];

for (const file of files) {
  let key = basename(file, '.svg');
  if (!/^(?!\d)\w+$/u.test(key)) key = `'${key}'`;
  entries.push(`\n  ${key}: lazy(() => {\n    return import('@tabler/icons/${file}?react');\n  }),`);
}

const updated = new Date().toLocaleString();
const entriesText = entries.join('');
const script = `/* eslint-disable max-lines, import/no-extraneous-dependencies */
/* Updated: ${updated} */
import { type FC, lazy, type LazyExoticComponent, type SVGProps } from 'react';

type Icon = LazyExoticComponent<FC<SVGProps<SVGSVGElement> & { title?: string | undefined }>>;

export const icons: Record<string, Icon> = {${entriesText}
};
`;

writeFileSync(resolve(__dirname, '..', 'src', 'icons.ts'), script);
