import { PortfolioLink as Link } from '@/components/portfolio/portfolio-link';
import { ArrowUpRight, Download, Mail, MapPin, ArrowUp } from 'lucide-react';
import { socials } from '@/lib/resume-content';

export function SiteHeader({
  current,
}: {
  current: 'home' | 'experience' | 'projects';
}) {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header container">
        <Link className="brand" href="/" aria-label="Jonathan Mox home">
          <span className="brand-mark">
            jm<span>.</span>
          </span>
          <span className="brand-name">Jonathan Mox</span>
        </Link>
        <nav className="main-nav glass" aria-label="Main navigation">
          {(
            [
              ['home', '/', 'Home'],
              ['experience', '/experience/', 'Experience'],
              ['projects', '/projects/', 'Projects'],
            ] as const
          ).map(([key, href, label]) => (
            <Link
              key={key}
              href={href}
              aria-current={current === key ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <a className="header-contact" href="mailto:jmox47@gmail.com">
          Get in touch <ArrowUpRight size={14} />
        </a>
      </header>
    </>
  );
}

export function SocialLinks() {
  return (
    <div className="social-links">
      {socials.map(({ name, url, icon: Icon }) => (
        <a key={name} href={url} target="_blank" rel="noreferrer">
          <Icon size={15} aria-hidden="true" />
          {name}
          <ArrowUpRight className="out-arrow" size={12} aria-hidden="true" />
        </a>
      ))}
      <a href="mailto:jmox47@gmail.com">
        <Mail size={15} aria-hidden="true" />
        Email
        <ArrowUpRight className="out-arrow" size={12} aria-hidden="true" />
      </a>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="container site-footer" id="contact">
      <div className="footer-top">
        <div>
          <Link className="footer-name" href="/">
            Jonathan Mox<span className="accent">.</span>
          </Link>
          <p>Network Analyst · Penn State Student</p>
          <p className="footer-location">
            <MapPin size={13} />
            Pittsburgh, Pennsylvania
          </p>
        </div>
        <div className="footer-contact">
          <a href="mailto:jmox47@gmail.com">
            jmox47@gmail.com <ArrowUpRight size={15} />
          </a>
          <a
            href="/assets/jonathan-mox-resume-2026-09-15.pdf"
            target="_blank"
            rel="noreferrer"
          >
            View resume <Download size={14} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Jonathan Mox</span>
        <SocialLinks />
        <a className="back-top" href="#top">
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
