import { motion } from 'framer-motion'
import { SITE } from '../data/site'

export function Connect() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-line bg-ink py-[var(--section-y)] text-paper"
    >
      <div className="page-x max-page">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-paper/50">
            Contact
          </p>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl md:text-6xl">
            Say hi
          </h2>
          <p className="mt-4 max-w-md text-base text-paper/60 sm:text-lg">
            Questions, club stuff, or just want to talk code — email works best.
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="group mt-10 inline-flex max-w-full items-baseline gap-3 font-display text-2xl text-paper transition-colors duration-300 hover:text-[var(--signal)] sm:text-4xl md:text-5xl"
          >
            <span className="break-all border-b border-paper/30 pb-1 transition-[border-color] duration-300 group-hover:border-[var(--signal)]">
              {SITE.email}
            </span>
            <span
              aria-hidden
              className="shrink-0 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 sm:text-3xl"
            >
              ↗
            </span>
          </a>

          <div className="mt-12 flex flex-wrap gap-3">
            <Social href={SITE.github} label="GitHub" />
            <Social href={SITE.linkedin} label="LinkedIn" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Social({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm font-semibold text-paper/90 transition-all duration-300 hover:-translate-y-0.5 hover:border-paper/50 hover:bg-paper/10 hover:text-paper"
    >
      {label}
    </a>
  )
}
