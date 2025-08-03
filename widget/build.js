#!/usr/bin/env node

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function build() {
  console.log('Building Star Support widget...');

  // First run TypeScript
  const { execSync } = await import('child_process');
  execSync('tsc', { stdio: 'inherit', cwd: __dirname });

  // Read the compiled files
  const jsContent = await fs.readFile(path.join(__dirname, 'dist/star-support.js'), 'utf-8');
  const iconsContent = await fs.readFile(path.join(__dirname, 'dist/icons.js'), 'utf-8');
  const cssContent = await fs.readFile(path.join(__dirname, 'src/styles.css'), 'utf-8');

  // Fix the imports in star-support.js
  let bundledJs = jsContent
    .replace("import { ICONS } from './icons';", '') // Remove icons import
    .replace("import './styles.css';", ''); // Remove CSS import

  // Inject the icons content directly
  const iconsExport = iconsContent.replace('export const ICONS', 'const ICONS');
  bundledJs = iconsExport + '\n' + bundledJs;

  // Write the bundled JS
  await fs.writeFile(path.join(__dirname, 'dist/star-support.js'), bundledJs);

  // Copy CSS
  await fs.copyFile(
    path.join(__dirname, 'src/styles.css'),
    path.join(__dirname, 'dist/styles.css')
  );

  console.log('✅ Widget built successfully!');
}

build().catch(console.error);