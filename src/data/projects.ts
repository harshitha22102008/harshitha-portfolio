export type Project = {
  id: string
  progression: string
  /** New skill layer she can name in interviews (PLAN.md). */
  narrative: string
  name: string
  oneLiner: string
  /** Live sibling GitHub repo URL */
  url: string
  status: 'hub' | 'planned'
}

/**
 * Progression 01–07 per docs/program/PLAN.md.
 * Links point at live sibling GitHub repos under harshitha22102008.
 */
export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    progression: '01',
    narrative: 'Layout, responsive UI, routing, deploy',
    name: 'Portfolio 2.0',
    oneLiner: 'Personal hub for my work, skills, and demos.',
    url: 'https://github.com/harshitha22102008/harshitha-portfolio',
    status: 'hub',
  },
  {
    id: 'studyflow',
    progression: '02',
    narrative: 'First full-stack CRUD + JWT + charts',
    name: 'StudyFlow',
    oneLiner: 'Track study sessions and see hours with simple charts.',
    url: 'https://github.com/harshitha22102008/studyflow',
    status: 'planned',
  },
  {
    id: 'spendwise',
    progression: '03',
    narrative: 'Aggregations, CSV import/export',
    name: 'SpendWise',
    oneLiner: 'Log expenses, chart months, import/export CSV.',
    url: 'https://github.com/harshitha22102008/spendwise',
    status: 'planned',
  },
  {
    id: 'campushub',
    progression: '04',
    narrative: 'Roles, relationships, protected routes',
    name: 'CampusHub',
    oneLiner: 'Clubs and campus events with login and roles.',
    url: 'https://github.com/harshitha22102008/campushub',
    status: 'planned',
  },
  {
    id: 'skillswap',
    progression: '05',
    narrative: 'Request workflow (pending → accept/decline)',
    name: 'SkillSwap',
    oneLiner: 'Request and accept peer skill-teaching swaps.',
    url: 'https://github.com/harshitha22102008/skillswap',
    status: 'planned',
  },
  {
    id: 'codequest',
    progression: '06',
    narrative: 'Seed data, scoring rules, progress',
    name: 'CodeQuest',
    oneLiner: 'Gamified quiz practice with XP and progress.',
    url: 'https://github.com/harshitha22102008/codequest',
    status: 'planned',
  },
  {
    id: 'campuspulse',
    progression: '07',
    narrative: 'Dashboard + explainable rule-based tips',
    name: 'CampusPulse',
    oneLiner: 'Campus dashboard with explainable rule-based tips.',
    url: 'https://github.com/harshitha22102008/campuspulse',
    status: 'planned',
  },
]
