import { SITE } from '../data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-footer text-white">
      <div className="mx-auto flex max-w-[var(--max-w)] flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-display text-lg font-semibold tracking-tight text-white">
          {SITE.name}
        </p>
        <div className="flex flex-wrap gap-5 text-sm text-white/70">
          <a
            href={SITE.github}
            className="transition-colors hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href={SITE.linkedin}
            className="transition-colors hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="transition-colors hover:text-white"
          >
            Email
          </a>
        </div>
        <p className="text-sm text-white/50">
          © {year} {SITE.name}. Built to explain.
        </p>
      </div>
    </footer>
  )
}
