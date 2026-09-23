import { motion } from 'framer-motion'
import { PROJECTS } from '../data/projects'

export function Work() {
  return (
    <section id="work" className="page-x max-page scroll-mt-24 py-[var(--section-y)]">
      <div className="mb-10 flex flex-col gap-4 border-b border-line pb-8 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            Selected work
          </p>
          <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
            A progression of builds
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-ink-soft sm:text-base">
          Seven projects — from interfaces to full-stack apps — shipped as
          separate repos I can walk through in an interview.
        </p>
      </div>

      <ul className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <motion.li
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{
              delay: index * 0.04,
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block border-b border-line py-5 transition-colors duration-300 hover:bg-signal-soft/35 sm:py-6"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <span className="font-display text-2xl text-muted transition-colors duration-300 group-hover:text-signal sm:text-3xl">
                  {project.progression}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-ink transition-transform duration-300 group-hover:translate-x-1 sm:text-xl">
                      {project.name}
                    </h3>
                    <StatusPill status={project.status} />
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                    {project.narrative}
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-[0.95rem]">
                    {project.oneLiner}
                  </p>
                </div>

                <span
                  aria-hidden
                  className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-signal group-hover:bg-signal group-hover:text-white group-hover:shadow-[0_8px_24px_var(--glow)]"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </span>
              </div>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

function StatusPill({ status }: { status: 'hub' | 'mvp' | 'planned' }) {
  const label = status === 'hub' ? 'Hub' : status === 'mvp' ? 'MVP' : 'Soon'
  return (
    <span className="rounded-md border border-line bg-paper-elevated px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
      {label}
    </span>
  )
}
