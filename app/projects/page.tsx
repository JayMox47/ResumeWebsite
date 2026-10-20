import type { Metadata } from 'next';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Projects | Jonathan Mox',
  description:
    'Explore WeekWise, JobSpot, and NowSpinning: personal web projects by Jonathan Mox.',
  icons: { icon: '../favicon.svg' },
};

const projects = [
  {
    name: 'WeekWise',
    description:
      'A student planner that brings Canvas assignments, class schedules, and personal tasks into one weekly view. A browser extension syncs assignments, while calendars and course progress rings help keep deadlines in sight.',
    url: 'https://tasks.jonathanmox.com',
    label: 'tasks.jonathanmox.com',
    image: '../assets/projects/weekwise.jpg',
    alt: 'WeekWise sample workspace with weekly course progress rings and an upcoming class.',
    width: 1280,
    height: 720,
  },
  {
    name: 'JobSpot',
    description:
      'A job and internship discovery app that brings live listings together and compares them with an editable skills and experience profile. It explains potential matches, supports focused searches, and keeps a shortlist of saved opportunities.',
    url: 'https://jobs.jonathanmox.com',
    label: 'jobs.jonathanmox.com',
    image: '../assets/projects/jobspot.jpg',
    alt: 'JobSpot dashboard with job discovery, profile matching, and saved jobs.',
    width: 1280,
    height: 720,
  },
  {
    name: 'NowSpinning',
    description:
      'A Spotify-connected album display designed for a screen or digital frame. It pairs album artwork with artist details and a track list, highlighting the song currently playing.',
    url: 'https://music.jonathanmox.com',
    label: 'music.jonathanmox.com',
    image: '../assets/projects/nowspinning.jpg',
    alt: 'NowSpinning displaying Mac Miller’s I Love Life, Thank You with album artwork and a track list.',
    width: 1600,
    height: 920,
  },
];

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
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-entry" key={project.name}>
              <a
                className="project-preview"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.name}`}
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  width={project.width}
                  height={project.height}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </a>
              <div className="project-copy">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.label} <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
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
