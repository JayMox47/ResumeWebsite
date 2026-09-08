import { mkdir, rename, access } from 'node:fs/promises';
// Vinext currently redirects slash-ended routes during prerendering.
// Export without that redirect, then use directory URLs for static hosting.
await mkdir('dist/client/projects', { recursive: true });
await rename('dist/client/projects.html', 'dist/client/projects/index.html');
try {
  await access('dist/client/projects.rsc');
  await rename('dist/client/projects.rsc', 'dist/client/projects/index.rsc');
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
