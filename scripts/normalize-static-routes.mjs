import { mkdir, rename, access } from 'node:fs/promises';
// Vinext currently redirects slash-ended routes during prerendering.
// Export without that redirect, then use directory URLs for static hosting.
for (const route of ['projects', 'experience']) {
  await mkdir(`dist/client/${route}`, { recursive: true });
  await rename(`dist/client/${route}.html`, `dist/client/${route}/index.html`);
  try {
    await access(`dist/client/${route}.rsc`);
    await rename(`dist/client/${route}.rsc`, `dist/client/${route}/index.rsc`);
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}
