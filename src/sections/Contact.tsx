import { Section } from '../components/Section'
import { SITE } from '../data/site'

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      lead="Reach out for club interviews, feedback, or collabs."
    >
      <div className="max-w-[42rem]">
        <ul className="space-y-4 text-[length:var(--text-lg)] text-muted">
          <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-[var(--ink-faint)] sm:w-20">
              Email
            </span>
            <a
              href={`mailto:${SITE.email}`}
              className="font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {SITE.email}
            </a>
          </li>
          <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-[var(--ink-faint)] sm:w-20">
              GitHub
            </span>
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              {SITE.github.replace(/^https:\/\//, '')}
            </a>
          </li>
          <li className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            <span className="shrink-0 text-sm font-medium text-[var(--ink-faint)] sm:w-20">
              LinkedIn
            </span>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-ink underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              LinkedIn profile
            </a>
          </li>
        </ul>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href={SITE.resumePath}
            download
            className="inline-flex h-10 items-center rounded-[var(--radius-sm)] bg-accent px-4 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:-translate-y-px hover:bg-accent-hover"
          >
            Download résumé
          </a>
          <a
            href={`mailto:${SITE.email}?subject=Hello%20Harshitha`}
            className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-border bg-surface px-4 text-sm font-semibold text-ink transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-accent"
          >
            Email me
          </a>
        </div>
        <p className="mt-3 text-sm text-[var(--ink-faint)]">
          Résumé is a placeholder at{' '}
          <code className="text-muted">public/resume.pdf</code> — replace when
          ready.
        </p>
      </div>
    </Section>
  )
}
