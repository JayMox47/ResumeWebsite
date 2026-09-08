import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, extname } from 'node:path';
const base = (process.env.SITE_BASE_PATH || '').replace(/\/$/, '');
if (base && !/^\/[A-Za-z0-9._-]+$/.test(base)) throw new Error('Invalid Pages base path');
async function visit(dir) {
  for (const item of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, item.name);
    if (item.isDirectory()) await visit(path);
    else if (['.html', '.js', '.rsc', '.json', '.css'].includes(extname(path))) {
      const text = await readFile(path, 'utf8');
      await writeFile(path, text.replaceAll('/_next/', `${base}/_next/`));
    }
  }
}
await readFile('dist/client/index.html');
if (base) await visit('dist/client');
await writeFile('dist/client/.nojekyll', '');
console.log(`GitHub Pages output ready for ${base || '/'}`);
