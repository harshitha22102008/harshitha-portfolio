import { motion } from 'framer-motion'

export function AboutBand() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-line bg-paper-elevated/50 py-[var(--section-y)]"
    >
      <div className="page-x max-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
            About
          </p>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            Early in the journey.
            <br />
            <span className="italic text-ink-soft">Serious about the craft.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6 text-base leading-relaxed text-ink-soft sm:text-lg"
        >
          <p>
            I’m Harshitha, a first-year B.Tech student learning software by
            shipping end-to-end projects — React frontends, Express APIs, and
            Prisma + SQLite data models.
          </p>
          <p>
            I’m not trying to look like a senior engineer. I want club leads and
            mentors to see someone who builds, understands auth flows and data
            models, and can explain what happens when you click Login.
          </p>
          <dl className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Education
              </dt>
              <dd className="mt-1 font-medium text-ink">
                B.Tech · 1st year
                <br />
                <span className="font-normal text-ink-soft">
                  [Branch] · [College]
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Focus now
              </dt>
              <dd className="mt-1 font-medium text-ink">
                Full-stack web · clear UI · explainable demos
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
