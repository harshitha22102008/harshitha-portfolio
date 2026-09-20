import { useEffect, useRef, useState } from 'react'
import { NAV_LINKS, SITE } from '../data/site'
import { useScrolled } from '../hooks/useScrolled'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState('#about')
  const scrolled = useScrolled(12)
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const [indicator, setIndicator] = useState({ left: 0, width: 0 })

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) {
          setActiveHref(`#${visible.target.id}`)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = linkRefs.current[activeHref]
    if (!el) return
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth })
  }, [activeHref, scrolled])

  return (
    <header
      className={[
        'sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-250',
        scrolled
          ? 'border-border bg-bg/95 shadow-[var(--shadow-soft)] backdrop-blur-md'
          : 'border-border/60 bg-bg/80 backdrop-blur-sm',
      ].join(' ')}
    >
      <div
        className={[
          'mx-auto flex max-w-[var(--max-w)] items-center justify-between gap-4 px-5 transition-[height] duration-250 sm:px-8',
          scrolled ? 'h-[var(--nav-h-compact)]' : 'h-[var(--nav-h)]',
        ].join(' ')}
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink transition-colors hover:text-accent sm:text-xl"
        >
          {SITE.name}
        </a>

        <nav
          className="relative hidden items-center gap-0 md:flex"
          aria-label="Primary"
        >
          <span
            className="pointer-events-none absolute bottom-0 h-[2px] bg-accent transition-[left,width] duration-300 ease-[var(--ease-out)]"
            style={{ left: indicator.left, width: indicator.width }}
            aria-hidden="true"
          />
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              ref={(node) => {
                linkRefs.current[link.href] = node
              }}
              className={[
                'px-3 py-2 text-sm font-medium transition-colors duration-150',
                activeHref === link.href
                  ? 'text-ink'
                  : 'text-muted hover:text-ink',
              ].join(' ')}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-3">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="btn-press inline-flex h-9 items-center border border-border bg-surface px-3 text-xs font-semibold uppercase tracking-wider text-ink hover:border-accent hover:text-accent"
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
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={[
                    'block border-b border-border py-2.5 text-base font-medium transition-colors',
                    activeHref === link.href
                      ? 'text-accent'
                      : 'text-ink hover:text-accent',
                  ].join(' ')}
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
