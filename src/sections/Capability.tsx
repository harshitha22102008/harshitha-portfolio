import { motion } from 'framer-motion'
import { SKILL_GROUPS } from '../data/skills'

export function Capability() {
  return (
    <section id="skills" className="page-x max-page scroll-mt-24 py-[var(--section-y)]">
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Skills
        </p>
        <h2 className="font-display text-4xl tracking-tight text-ink sm:text-5xl">
          Tools I use to ship
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink-soft">
          Honest year-one stack — comfortable enough to build with, still
          sharpening every week.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{
              delay: gi * 0.08,
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.items.map((item, ii) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: gi * 0.05 + ii * 0.03,
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="inline-flex cursor-default rounded-lg border border-line bg-paper-elevated px-3.5 py-2 text-sm font-medium text-ink-soft shadow-[0_1px_0_var(--line)] transition-all duration-300 hover:-translate-y-0.5 hover:border-signal/40 hover:text-ink hover:shadow-[0_8px_24px_var(--glow)]">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
