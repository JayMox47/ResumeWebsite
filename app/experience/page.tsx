import type { Metadata } from 'next';
import { Download, ArrowDown } from 'lucide-react';
import { SiteHeader, SiteFooter } from '@/components/portfolio/site-shell';
import { experience } from '@/lib/resume-content';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Experience | Jonathan Mox',
  icons: { icon: '/favicon.svg' },
};
export default function Experience() {
  return (
    <>
      <SiteHeader current="experience" />
      <main tabIndex={-1} id="main" className="experience-main">
        <div data-reveal="" className="container page-intro">
          <h1>
            Experience<span className="accent">.</span>
          </h1>
          <div className="page-intro-bottom">
            <a
              className="button glass"
              href="/assets/jonathan-mox-resume-2026-09-15.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume <Download size={15} />
            </a>
          </div>
          <nav className="section-nav" aria-label="Experience sections">
            <a href="#experience">
              Work <ArrowDown size={12} />
            </a>
            <a href="#leadership">
              Leadership <ArrowDown size={12} />
            </a>
            <a href="#education">
              Education <ArrowDown size={12} />
            </a>
            <a href="#skills">
              Skills <ArrowDown size={12} />
            </a>
          </nav>
        </div>
        <section className="experience-section" id="experience">
          <div className="container section">
            <div data-reveal="" className="section-heading">
              <h2>Work Experience</h2>
            </div>
            <div className="experience-list">
              {experience.map((job, index) => (
                <article
                  data-reveal=""
                  className="job"
                  id={`job-${index}`}
                  key={job.role}
                >
                  <div className="job-meta">
                    <p className="date">{job.date}</p>
                    <p>{job.location}</p>
                    {'arrangement' in job && (
                      <p className="job-arrangement">{job.arrangement}</p>
                    )}
                  </div>
                  <div className="job-content">
                    <h3>{job.role}</h3>
                    <p className="company">{job.company}</p>
                    <ul>
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="section container" id="leadership">
          <div data-reveal="" className="section-heading">
            <h2>Leadership Experience</h2>
          </div>
          <article data-reveal="" className="job">
            <div className="job-meta">
              <p className="date">May 2026 — Present</p>
              <p>Pittsburgh, PA</p>
            </div>
            <div className="job-content">
              <h3>Head of Interns</h3>
              <p className="company">Central Integrations</p>
              <ul>
                <li>
                  Led a team of interns in day-to-day operations and served as
                  their first point of contact for support.
                </li>
                <li>Trained new interns and employees.</li>
              </ul>
            </div>
          </article>
          <article data-reveal="" className="job">
            <div className="job-meta">
              <p className="date">May 2023 — May 2025</p>
              <p>Pittsburgh, PA</p>
            </div>
            <div className="job-content">
              <h3>Robotics Team Captain & Electronics Team Lead</h3>
              <p className="company">Central Catholic High School</p>
              <p className="role-note">
                Team Captain: May 2024 – May 2025
                <br />
                Electronics Team Lead: May 2023 – May 2024
              </p>
              <ul>
                <li>
                  Led a team of 25 students and assigned responsibilities based
                  on each member’s strengths.
                </li>
                <li>
                  Managed an annual budget of more than $75,000 for robotics
                  competitions.
                </li>
                <li>
                  Installed electronic components and ensured they were ready
                  for competition.
                </li>
              </ul>
            </div>
          </article>
        </section>
        <section className="section container education-section" id="education">
          <div data-reveal="" className="section-heading">
            <h2>Education</h2>
          </div>
          <article data-reveal="" className="job">
            <div className="job-meta">
              <p className="date">Expected May 2029</p>
              <p>State College, PA</p>
            </div>
            <div className="job-content">
              <h3>Pennsylvania State University</h3>
              <p className="company">
                B.S. in Enterprise Technology Integration
              </p>
              <p className="gpa">
                Cumulative GPA: <strong>4.0</strong>
              </p>
            </div>
          </article>
          <article data-reveal="" className="job">
            <div className="job-meta">
              <p className="date">May 2025</p>
              <p>Pittsburgh, PA</p>
            </div>
            <div className="job-content">
              <h3>Central Catholic High School</h3>
              <p className="education-detail">High Honor Roll, 2021–2025</p>
            </div>
          </article>
        </section>
        <section className="section container education-section" id="skills">
          <div data-reveal="" className="section-heading">
            <h2>Technical Skills</h2>
          </div>
          <dl className="resume-skills">
            <div data-reveal="">
              <dt>Infrastructure & support</dt>
              <dd className="skill-tags">
                <span className="skill-tag">Wireless networking</span>
                <span className="skill-tag">VPNs</span>
                <span className="skill-tag">
                  hardware configuration and upgrades
                </span>
                <span className="skill-tag">troubleshooting</span>
                <span className="skill-tag">software installation</span>
                <span className="skill-tag">device deployment</span>
              </dd>
            </div>
            <div data-reveal="">
              <dt>Tools & platforms</dt>
              <dd className="skill-tags">
                <span className="skill-tag">Hyper-V</span>
                <span className="skill-tag">Google Admin</span>
                <span className="skill-tag">Azure DevOps</span>
                <span className="skill-tag">IT documentation</span>
                <span className="skill-tag">inventory management</span>
              </dd>
            </div>
            <div data-reveal="">
              <dt>Programming & web</dt>
              <dd className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
              </dd>
            </div>
          </dl>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
