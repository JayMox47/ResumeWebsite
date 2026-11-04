import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/resume-content';
export function ProjectList({
  heading: Heading = 'h3',
}: {
  heading?: 'h2' | 'h3';
}) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <article data-reveal="" className="project-entry" key={project.name}>
          <a
            className={`project-preview project-${index}`}
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
              decoding="async"
            />
          </a>
          <div className="project-copy">
            <div className="project-title">
              <Heading>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.name}
                  <ArrowUpRight size={19} aria-hidden="true" />
                </a>
              </Heading>
              <span className="project-number" aria-hidden="true">
                0{index + 1}
              </span>
            </div>
            <p>{project.description}</p>
            <a
              className="project-link"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              {project.label}
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
