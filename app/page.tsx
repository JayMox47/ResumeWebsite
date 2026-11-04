import { PortfolioLink as Link } from '@/components/portfolio/portfolio-link';
import { ArrowRight, ArrowUpRight, Download, MapPin } from 'lucide-react';
import {
  SiteHeader,
  SiteFooter,
  SocialLinks,
} from '@/components/portfolio/site-shell';
import { ProjectList } from '@/components/portfolio/project-list';
import { experience } from '@/lib/resume-content';
export default function Home() {
  return (
    <>
      <SiteHeader current="home" />
      <main tabIndex={-1} id="main">
        <section className="hero container" aria-labelledby="intro-title">
          <div className="portrait-frame">
            <img
              className="resume-portrait"
              src="/assets/jonathan-mox-professional.jpg"
              alt="Jonathan Mox in a navy suit and gold tie"
              width="1600"
              height="1143"
              fetchPriority="high"
            />
          </div>
          <div className="hero-copy">
            <p className="hero-location">
              <MapPin size={12} /> PITTSBURGH, PENNSYLVANIA
            </p>
            <h1 id="intro-title">
              Jonathan Mox<span className="accent">.</span>
            </h1>
            <p className="resume-role">
              Network Analyst <span>·</span> Penn State Student
            </p>
            <p className="resume-summary">
              I’m a Network Analyst at Central Integrations and a student
              pursuing a B.S. in Enterprise Technology Integration at Penn
              State. My experience includes device deployment, infrastructure
              support, and training technical teams.
            </p>
            <SocialLinks />
            <div className="hero-actions">
              <Link className="button button-primary" href="/experience/">
                Explore my experience <ArrowRight size={15} />
              </Link>
              <a
                className="button glass"
                href="/assets/jonathan-mox-resume-2026-09-15.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View resume <Download size={15} />
              </a>
            </div>
          </div>
        </section>
        <section
          className="container home-experience section"
          aria-labelledby="work-heading"
        >
          <div className="section-heading">
            <div>
              <h2 id="work-heading">
                Work experience<span className="accent">.</span>
              </h2>
            </div>
            <Link className="text-link" href="/experience/">
              Full experience <ArrowRight size={15} />
            </Link>
          </div>
          <div className="experience-preview">
            {experience.map((job, index) => (
              <Link
                className="experience-preview-row"
                href={`/experience/#job-${index}`}
                key={job.role}
              >
                <span className="timeline-dot" aria-hidden="true" />
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}</p>
                </div>
                <span className="preview-date">{job.date}</span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            ))}
          </div>
        </section>
        <section
          className="container section home-projects"
          aria-labelledby="projects-heading"
        >
          <div className="section-heading">
            <div>
              <h2 id="projects-heading">
                Things I’ve built<span className="accent">.</span>
              </h2>
            </div>
            <Link className="text-link" href="/projects/">
              All projects <ArrowRight size={15} />
            </Link>
          </div>
          <ProjectList />
        </section>
        <section className="container contact-callout">
          <div>
            <h2>
              Get in touch<span className="accent">.</span>
            </h2>
          </div>
          <a className="button glass" href="mailto:jmox47@gmail.com">
            jmox47@gmail.com <ArrowUpRight size={16} />
          </a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
