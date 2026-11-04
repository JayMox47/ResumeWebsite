import ts from 'typescript';
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const baseline = 'e1a8e3534df9831f9dea48e1354d5dde11d6783c';
const original = (path) =>
  execFileSync('git', ['show', `${baseline}:${path}`], { encoding: 'utf8' });
const normalize = (text) => text.replace(/\s+/g, ' ').trim();
const html = [
  'dist/client/index.html',
  'dist/client/experience/index.html',
  'dist/client/projects/index.html',
]
  .map((path) => readFileSync(path, 'utf8'))
  .join(' ');
const rendered = normalize(
  html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"'),
);
const missing = [];
let assertions = 0;
const checkText = (value) => {
  assertions++;
  if (!rendered.includes(normalize(value))) missing.push(value);
};
for (const path of ['app/page.tsx', 'app/projects/page.tsx']) {
  const source = ts.createSourceFile(
    path,
    original(path),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  );
  function visit(node) {
    if (
      ts.isVariableDeclaration(node) &&
      ['experience', 'projects'].includes(node.name.getText(source))
    ) {
      function values(child) {
        if (ts.isStringLiteral(child)) {
          const value = child.text;
          if (
            /^(https?:|\.\.\/assets)/.test(value) ||
            child.parent.name?.getText(source) === 'alt'
          ) {
            assertions++;
            const expected = value
              .replace('../assets/', '/assets/')
              .replaceAll('&', '&amp;');
            if (!html.includes(expected)) missing.push(value);
          } else checkText(value);
        }
        ts.forEachChild(child, values);
      }
      values(node.initializer);
    }
    if (ts.isJsxText(node)) {
      const text = normalize(node.text);
      const ui = [
        'Skip to content',
        'Experience',
        'Education',
        'Contact',
        'Projects',
        'View resume',
        'Back to top ↑',
        'Back to resume',
        'What I’m working on outside of my day-to-day work.',
        '©',
      ];
      if (text && !ui.includes(text)) {
        if (node.parent.openingElement?.tagName.getText(source) === 'dd')
          text.split(', ').forEach(checkText);
        else checkText(text);
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
}
const tracked = execFileSync(
  'git',
  ['ls-tree', '-r', '--name-only', baseline, 'public'],
  { encoding: 'utf8' },
)
  .trim()
  .split('\n');
for (const path of tracked) {
  assertions++;
  const hash = (data) => createHash('sha256').update(data).digest('hex');
  if (
    hash(readFileSync(path)) !==
    hash(
      execFileSync('git', ['show', `${baseline}:${path}`], {
        maxBuffer: 20 * 1024 * 1024,
      }),
    )
  )
    missing.push(`Changed asset: ${path}`);
}
if (missing.length) {
  console.error('Content audit failures:', missing);
  process.exit(1);
}
console.log(
  `PASS: ${assertions} checks — original personal text, dates, project links, alt text, portrait, résumé PDF, and all public assets preserved.`,
);
