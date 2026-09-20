import { Section } from '../components/Section'
import { PROJECTS } from '../data/projects'

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      lead="Built in order 01–07. Each card names the new skill layer — sibling repos ship next."
    >
      <ol className="grid list-none gap-4 p-0 sm:grid-cols-2">
        {PROJECTS.map((project) => (
          <li key={project.id}>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-[var(--radius)] border border-border bg-surface p-5 shadow-[var(--shadow-soft)] transition-[border-color,transform] duration-150 hover:-translate-y-0.5 hover:border-accent"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-xs font-medium tracking-wider text-accent">
                  {project.progression}
                </span>
                <span className="text-xs font-medium uppercase tracking-wide text-[var(--ink-faint)]">
                  {project.status === 'hub' ? 'This site' : 'Planned'}
                </span>
              </div>
              <h3 className="mt-3 text-xl text-ink transition-colors group-hover:text-accent">
                {project.name}
              </h3>
              <p className="mt-1.5 text-xs font-medium tracking-wide text-accent">
                {project.narrative}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {project.oneLiner}
              </p>
              <span className="mt-4 text-sm font-medium text-accent">
                View repo →
              </span>
            </a>
          </li>
        ))}
      </ol>
    </Section>
  )
}
