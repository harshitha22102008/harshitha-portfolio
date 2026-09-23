export type SkillGroup = {
  title: string
  items: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Using regularly',
    items: [
      'HTML, CSS, Tailwind',
      'JavaScript / TypeScript',
      'React (Vite)',
      'Node.js, Express',
      'REST APIs, JWT',
      'Prisma + SQLite',
      'Git & GitHub',
    ],
  },
  {
    title: 'Next up',
    items: [
      'PostgreSQL',
      'Testing',
      'Accessibility',
      'DSA',
    ],
  },
]
