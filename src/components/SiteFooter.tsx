import { SITE } from '../data/site'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-paper/10 bg-ink px-[var(--page-x)] py-8 text-paper/55">
      <div className="max-page flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {SITE.name}. Built with React, Vite & Tailwind.
        </p>
        <a
          href="#top"
          className="link-underline w-fit font-medium text-paper/70 transition-colors hover:text-paper"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
