import type { Metadata } from 'next';
import { SiteHeader, SiteFooter } from '@/components/portfolio/site-shell';
import { ProjectList } from '@/components/portfolio/project-list';
export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Projects | Jonathan Mox',
  description:
    'Explore WeekWise, JobSpot, and NowSpinning: personal web projects by Jonathan Mox.',
  icons: { icon: '/favicon.svg' },
};
export default function Projects() {
  return (
    <>
      <SiteHeader current="projects" />
      <main tabIndex={-1} id="main" className="container projects-main">
        <div className="page-intro">
          <h1>
            Things I’ve built<span className="accent">.</span>
          </h1>
        </div>
        <ProjectList heading="h2" />
      </main>
      <SiteFooter />
    </>
  );
}
