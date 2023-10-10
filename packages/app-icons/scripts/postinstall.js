#!/usr/bin/env node
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const ESLINT_DISABLE =
  `
/* eslint-disable unicorn/no-abusive-eslint-disable */
/* eslint-disable */
  `.trim() + '\n';

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

for (const file of files) {
  const name = basename(file, '.js');
  entries.push(
    `export const ${name} = createLazyIcon('${name}', () => import('@tabler/icons-react/dist/esm/icons/${file}')) as IconType<ForwardRefExoticComponent<SVGProps<SVGSVGElement>>>;\n`,
  );
}

writeFileSync(
  join(srcRoot, 'icons.ts'),
  `
${ESLINT_DISABLE}
import { type ForwardRefExoticComponent, type SVGProps } from 'react';

import { createLazyIcon, type IconType } from './icon.js';

${entries.join('')}
  `.trim() + '\n',
);
