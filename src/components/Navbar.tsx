import { useState } from 'react'
import { NAV_LINKS, SITE } from '../data/site'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md">
      <div
        className="mx-auto flex h-[var(--nav-h)] max-w-[var(--max-w)] items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent"
        >
          {SITE.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-[var(--radius-sm)] border border-border bg-surface px-3 text-sm font-medium text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="animate-fade-in border-t border-border bg-bg px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-1 text-base font-medium text-ink hover:text-accent"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
