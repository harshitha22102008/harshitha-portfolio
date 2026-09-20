export type SkillGroup = {
  title: string
  items: string[]
}

/** Honest beginner–intermediate list — edit as Harshitha learns. */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Comfortable / learning by building',
    items: [
      'HTML, CSS, Tailwind',
      'JavaScript / TypeScript',
      'React (Vite)',
      'Node.js, Express (basics)',
      'REST APIs, JWT auth (basics)',
      'Prisma + SQLite (basics)',
      'Git & GitHub',
    ],
  },
  {
    title: 'Exposed to / next',
    items: [
      'PostgreSQL hosting',
      'Testing (Vitest / basic API tests)',
      'Accessibility',
      'DSA basics',
    ],
  },
]
