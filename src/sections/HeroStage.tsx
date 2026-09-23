import { motion } from 'framer-motion'
import { SITE } from '../data/site'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.12 + i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

export function HeroStage() {
  return (
    <section
      id="top"
      className="grain relative flex min-h-dvh flex-col justify-end overflow-hidden pb-16 pt-[calc(var(--nav-h)+2rem)] sm:pb-20"
    >
      {/* Atmospheric plane */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 55% at 15% 20%, var(--glow), transparent 55%),
            radial-gradient(ellipse 60% 45% at 90% 10%, var(--signal-soft), transparent 50%),
            radial-gradient(ellipse 50% 40% at 70% 90%, var(--glow), transparent 55%),
            linear-gradient(180deg, transparent 55%, color-mix(in srgb, var(--paper) 88%, transparent) 100%)
          `,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent"
      />

      <div className="page-x max-page relative z-10 w-full">
        <motion.p
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted sm:mb-6"
        >
          {SITE.role}
        </motion.p>

        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="font-display text-[clamp(3.4rem,14vw,9.5rem)] leading-[0.88] tracking-[-0.03em] text-ink"
        >
          {SITE.name}
        </motion.h1>

        <div className="mt-8 flex flex-col gap-8 sm:mt-10 sm:flex-row sm:items-end sm:justify-between sm:gap-12">
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-md text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {SITE.tagline}
          </motion.p>

          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_var(--glow)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_var(--glow)] active:translate-y-0"
            >
              View work
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-paper-elevated/60 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-sm transition-all duration-300 hover:border-ink/30 hover:bg-paper-elevated"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-muted sm:mt-20"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-40" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          Scroll to explore
        </motion.div>
      </div>
    </section>
  )
}
