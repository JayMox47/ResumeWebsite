# Jonathan Mox — personal portfolio

A responsive résumé and project portfolio with a light navy palette, subtle glass navigation, a professional portrait, and accessible entrance and hover animations.

## Development

Node.js 22.13+ is required (Node 24 recommended).

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npx tsc --noEmit
npm run build
node scripts/verify-prototype-content.mjs
```

Static output is generated in `dist/client`. Publish that directory, not `dist/server`. `netlify.toml` declares the existing Netlify build command and publish directory. The custom domain is managed by the existing host; no DNS change is needed for content releases.

## Source layout

- `app/page.tsx`: introduction, work summaries, projects, contact.
- `app/experience/page.tsx`: full work history, leadership, education, and skills.
- `app/projects/page.tsx`: project listing.
- `lib/resume-content.ts`: shared personal content and existing project links.
- `components/portfolio/`: navigation, footer, project cards, link handling, scroll reveals.
- `app/globals.css`: responsive layout, typography, motion, glass fallbacks, focus, and print styles.
- `public/assets/jonathan-mox-professional.jpg`: optimized professional portrait.
- `public/assets/jonathan-mox-resume-2026-09-15.pdf`: original downloadable résumé.

The content audit checks personal text, dates, links, and original asset hashes against commit `e1a8e3534df9831f9dea48e1354d5dde11d6783c`. Explicitly approved UI changes are excluded; original personal content and original assets remain preserved.

The local development server uses framework client navigation. Static exports use native links because this Vinext version omits its client router runtime there. Headings and content share a single reveal controller with a per-element replay guard. Animations respect reduced-motion preferences, and content stays readable without JavaScript.

The legacy GitHub Pages preparation helper remains available in `scripts/prepare-pages.mjs`; the primary custom domain is served by the existing Netlify deployment.

## Static-host animation startup

Reveal targets include `data-reveal` in server-rendered HTML. CSS establishes their starting opacity and transform before hydration, so browsers cannot paint the finished content and then rewind it when JavaScript arrives. The controller waits two paint frames, allows project images to decode with a bounded timeout, and plays each entrance once. It releases animation layers afterward. Reduced-motion, print, unsupported-animation, and no-JavaScript paths show content without motion.

Production-output navigation and reveal completion were checked in Brave and Safari. Build, TypeScript, and the 110-check content audit passed.
