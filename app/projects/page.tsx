import type { Metadata } from 'next';
import { ArrowUpRight, ArrowLeft, Music2 } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Projects | Jonathan Mox',
  description: 'Personal projects by Jonathan Mox, including NowSpinning.',
  icons: { icon: '../favicon.svg' },
};

export default function Projects() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="../">
            Jonathan Mox
          </a>
          <nav aria-label="Main navigation">
            <a href="../#experience">Experience</a>
            <a href="../#education">Education</a>
            <a href="../#contact">Contact</a>
            <a href="../projects/" aria-current="page">
              Projects
            </a>
          </nav>
        </div>
      </header>
      <main id="main" className="container projects-main">
        <h1>Projects</h1>
        <p className="projects-intro">
          What I’m working on outside of my day-to-day work.
        </p>
        <article className="project-entry">
          <div className="project-icon">
            <Music2 size={25} aria-hidden="true" />
          </div>
          <div className="project-copy">
            <h2>NowSpinning</h2>
            <p>My personal music project.</p>
            <a
              className="project-link"
              href="https://music.jonathanmox.com"
              target="_blank"
              rel="noreferrer"
            >
              music.jonathanmox.com <ArrowUpRight size={17} />
            </a>
          </div>
        </article>
        <a className="back-link" href="../">
          <ArrowLeft size={15} /> Back to resume
        </a>
      </main>
      <footer className="container footer projects-footer">
        <span>© {new Date().getFullYear()} Jonathan Mox</span>
      </footer>
    </>
  );
}
