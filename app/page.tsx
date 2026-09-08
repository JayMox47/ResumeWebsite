import {
  ArrowUpRight,
  Download,
  MapPin,
  Mail,
  CodeXml,
  BriefcaseBusiness,
  Camera,
} from 'lucide-react';
const socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jonathan-mox-900290435/',
    icon: BriefcaseBusiness,
  },
  { name: 'GitHub', url: 'https://github.com/JayMox47', icon: CodeXml },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/jaymox47/',
    icon: Camera,
  },
];
const experience = [
  {
    company: 'Central Integrations',
    role: 'Network Analyst',
    date: 'May 2024 — Present',
    bullets: [
      'Supported device management, maintenance, and repair across 50+ schools and businesses.',
      'Maintained client device inventories and assisted with inventory audits.',
      'Helped install, document, and operate an imaging server, including creating and deploying client-specific device images.',
      'Trained new employees and provided ongoing technical and operational support.',
    ],
  },
  {
    company: 'Plexus Parc',
    role: 'Infrastructure Support Technician',
    date: 'Sep 2023 — Sep 2025',
    bullets: [
      'Deployed production servers and maintained the data center to minimize its attack surface.',
      'Managed SSL/TLS certificates to help protect sensitive customer data.',
    ],
  },
  {
    company: 'Central Catholic High School',
    role: 'Junior IT Technician',
    date: 'Nov 2022 — May 2025',
    bullets: [
      'Created and deployed device images for students and faculty.',
      'Maintained inventories of servers, laptops, and mobile devices, along with spreadsheets for incoming student information.',
      'Wrote documentation for essential IT functions and completed project tasks on time.',
    ],
  },
];
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top">
            Jonathan Mox
          </a>
          <nav aria-label="Main navigation">
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
            <a href="projects/">Projects</a>
          </nav>
        </div>
      </header>
      <main id="main">
        <section className="hero" id="top">
          <div className="container resume-header">
            <div>
              <h1>Jonathan Mox</h1>
              <p className="resume-role">
                Network Analyst · Penn State Student
              </p>
              <p className="location">
                <MapPin size={15} /> Pittsburgh, Pennsylvania
              </p>
              <p className="resume-summary">
                I’m a Network Analyst at Central Integrations and a student
                pursuing a B.S. in Enterprise Technology Integration at Penn
                State. My experience includes device deployment, infrastructure
                support, and training technical teams.
              </p>
              <div className="profile-links">
                <div className="hero-socials">
                  {socials.map(({ name, url, icon: Icon }) => (
                    <a key={name} href={url} target="_blank" rel="noreferrer">
                      <Icon size={16} />
                      {name}
                      <ArrowUpRight size={13} />
                    </a>
                  ))}
                  <a href="mailto:jmox47@gmail.com">
                    <Mail size={16} /> Email <ArrowUpRight size={13} />
                  </a>
                </div>
                <a
                  className="text-link resume-download"
                  href="assets/jonathan-mox-resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View resume <Download size={16} />
                </a>
              </div>
            </div>
            <img
              className="resume-portrait"
              src="assets/jonathan-mox.png"
              alt="Jonathan Mox"
              width="886"
              height="994"
              fetchPriority="high"
            />
          </div>
        </section>
        <section className="experience-section" id="experience">
          <div className="container section">
            <div className="section-heading">
              <h2>Work Experience</h2>
            </div>
            <div className="experience-list">
              {experience.map((job) => (
                <article className="job" key={job.company}>
                  <div className="job-meta">
                    <p className="date">{job.date}</p>
                    <p>Pittsburgh, PA</p>
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
          <div className="section-heading">
            <h2>Leadership Experience</h2>
          </div>
          <article className="job">
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
          <article className="job">
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
          <div className="section-heading">
            <h2>Education</h2>
          </div>
          <article className="job">
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
          <article className="job">
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
          <div className="section-heading">
            <h2>Technical Skills</h2>
          </div>
          <dl className="resume-skills">
            <div>
              <dt>Infrastructure & support</dt>
              <dd>
                Wireless networking, VPNs, hardware configuration and upgrades,
                troubleshooting, software installation, device deployment
              </dd>
            </div>
            <div>
              <dt>Tools & platforms</dt>
              <dd>
                Hyper-V, Google Admin, Azure DevOps, IT documentation, inventory
                management
              </dd>
            </div>
            <div>
              <dt>Programming & web</dt>
              <dd>Python, Java, HTML, CSS</dd>
            </div>
          </dl>
        </section>
        <section className="contact-section" id="contact">
          <div className="container resume-contact">
            <h2>Contact</h2>
            <a href="mailto:jmox47@gmail.com">
              <Mail size={17} /> jmox47@gmail.com <ArrowUpRight size={17} />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-mox-900290435/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowUpRight size={17} />
            </a>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <span>© {new Date().getFullYear()} Jonathan Mox</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
