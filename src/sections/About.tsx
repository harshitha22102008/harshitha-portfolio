import { Section } from '../components/Section'

export function About() {
  return (
    <Section
      id="about"
      title="About"
      lead="A first-year student shipping small end-to-end projects — not fake senior polish."
    >
      <div className="max-w-[42rem] space-y-5 text-[length:var(--text-lg)] text-muted">
        <p>
          I’m Harshitha, currently in my first year of B.Tech (
          <span className="text-ink">[Branch — e.g. CSE / IT / ECE]</span>) at{' '}
          <span className="text-ink">[College / University name]</span>. I’m
          exploring software development by shipping small end-to-end projects:
          React frontends, Express APIs, and SQLite databases with Prisma.
        </p>
        <p>
          My goal isn’t to fake senior-level polish — it’s to understand what I
          build: auth, data models, APIs, and simple product thinking. This
          portfolio is the hub for that work.
        </p>
        <dl className="grid gap-4 border-t border-border pt-6 text-base sm:grid-cols-2">
          <div>
            <dt className="text-sm font-medium text-[var(--ink-faint)]">
              Education
            </dt>
            <dd className="mt-1 text-ink">
              B.Tech ([Branch]) · 1st year (batch [YYYY–YYYY])
              <br />
              [College name], [City]
            </dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-[var(--ink-faint)]">
              Focus now
            </dt>
            <dd className="mt-1 text-ink">
              Web development, data basics, campus problem-solving
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  )
}
