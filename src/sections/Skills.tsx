import { Section } from '../components/Section'
import { SKILL_GROUPS } from '../data/skills'

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      lead="Honest beginner–intermediate list. Only tools I can open and explain."
    >
      <div className="grid gap-10 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className="text-base font-semibold text-ink">{group.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[length:var(--text-base)] text-muted"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
