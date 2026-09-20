import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  title: string
  lead?: string
  children: ReactNode
}

export function Section({ id, title, lead, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-[calc(var(--nav-h)+1rem)] px-5 py-[var(--space-7)] sm:px-8 sm:py-[var(--space-8)]"
    >
      <div className="mx-auto max-w-[var(--max-w)]">
        <header className="mb-8 max-w-[42rem]">
          <h2 className="text-[length:var(--text-2xl)] sm:text-[length:var(--text-3xl)]">
            {title}
          </h2>
          {lead ? (
            <p className="mt-3 text-[length:var(--text-lg)] text-muted">{lead}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  )
}
