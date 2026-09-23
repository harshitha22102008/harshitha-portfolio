import { motion } from 'framer-motion'
import { SITE } from '../data/site'

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
            Just getting started,
            <br />
            <span className="italic text-ink-soft">and already building.</span>
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
            I’m Harshitha. I’m in my first year of B.Tech CSE at SRM. Most of
            what I know about web development comes from making things — React
            frontends, small Express backends, databases with Prisma.
          </p>
          <p>
            I like projects I can open later and still understand. If something
            breaks, I want to know why. That’s pretty much how I learn.
          </p>
          <dl className="grid gap-4 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Education
              </dt>
              <dd className="mt-1 font-medium text-ink">
                B.Tech {SITE.branch} · {SITE.year}
                <br />
                <span className="font-normal text-ink-soft">{SITE.college}</span>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Right now
              </dt>
              <dd className="mt-1 font-medium text-ink">
                Web apps, campus tools, figuring out what sticks
              </dd>
            </div>
          </dl>
        </motion.div>
      </div>
    </section>
  )
}
