# Jonathan Mox — personal website

A responsive professional resume website featuring work experience, leadership, education, technical skills, social links, and the original downloadable resume.

## Local development

Requires Node.js 22.13+ (Node 24 recommended).

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
```

The static website is generated in `dist/client`. No database, server runtime, or API keys are needed for hosting. Do not publish `dist/server`.

## Editing

- `app/page.tsx`: biography, experience, education, skills, and social URLs.
- `app/projects/page.tsx`: the separate Projects page and NowSpinning link.
- `app/globals.css`: colors, typography, layout, and responsive styles.
- `app/layout.tsx`: page title and description.
- `public/assets/jonathan-mox-resume.pdf`: downloadable resume.
- `public/assets/jonathan-mox.png`: portrait.

Content is based on the resume hosted on jonathanmox.com on September 8, 2026. The LinkedIn URL was supplied separately. The existing resume and portrait are preserved. Confirm employment dates, GPA, and new accomplishments when updating the site.

## Publish using GitHub Pages

The source is stored on `main`. The generated static site is published from the
`gh-pages` branch, allowing GitHub Pages to serve the site without a server or
build step.

When ready to move jonathanmox.com, configure it in the repository's Pages settings and update DNS for GitHub Pages. The existing live website has not been modified by this project. No GitHub remote or deployment has been configured yet.

For a manual build under a repository subpath:

```sh
npm run build
SITE_BASE_PATH=/your-repository node scripts/prepare-pages.mjs
```
