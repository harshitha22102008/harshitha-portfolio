export function Hero() {
  return (
    <section
      aria-labelledby="hero-name"
      className="relative flex min-h-[calc(100svh-var(--nav-h))] flex-col justify-center px-5 py-[var(--space-8)] sm:px-8"
    >
      <div className="mx-auto w-full max-w-[var(--max-w)]">
        <div className="animate-fade-up max-w-[38rem]">
          <h1
            id="hero-name"
            className="font-display text-[length:var(--text-hero)] font-semibold text-ink"
          >
            Harshitha
          </h1>
          <p className="mt-5 text-[length:var(--text-xl)] leading-snug text-ink sm:text-[length:var(--text-2xl)]">
            Building small, honest web projects.
          </p>
          <p className="mt-4 max-w-[34rem] text-[length:var(--text-lg)] text-muted">
            First-year B.Tech · learning full-stack by shipping demos I can
            explain.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex h-10 items-center rounded-[var(--radius-sm)] bg-accent px-4 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-accent-hover"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-border bg-surface px-4 text-sm font-semibold text-ink transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-accent"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
