export type Project = {
  id: string
  progression: string
  narrative: string
  name: string
  oneLiner: string
  url: string
  status: 'hub' | 'mvp' | 'planned'
}

export const PROJECTS: Project[] = [
  {
    id: 'portfolio',
    progression: '01',
    narrative: 'Brand, layout, motion, deployment',
    name: 'Portfolio 2.0',
    oneLiner: 'This site — the hub for everything I build and learn.',
    url: 'https://github.com/harshitha22102008/harshitha-portfolio',
    status: 'hub',
  },
  {
    id: 'studyflow',
    progression: '02',
    narrative: 'JWT auth · subjects · sessions · charts',
    name: 'StudyFlow',
    oneLiner: 'Track study hours with auth, subjects, sessions, and charts.',
    url: 'https://github.com/harshitha22102008/studyflow',
    status: 'mvp',
  },
  {
    id: 'spendwise',
    progression: '03',
    narrative: 'CRUD · categories · CSV · monthly charts',
    name: 'SpendWise',
    oneLiner: 'Personal finance tracker with categories, charts, and CSV.',
    url: 'https://github.com/harshitha22102008/spendwise',
    status: 'mvp',
  },
  {
    id: 'campushub',
    progression: '04',
    narrative: 'Clubs · events · join flows',
    name: 'CampusHub',
    oneLiner: 'Campus clubs and events with profiles and RSVPs.',
    url: 'https://github.com/harshitha22102008/campushub',
    status: 'mvp',
  },
  {
    id: 'skillswap',
    progression: '05',
    narrative: 'Marketplace · offer/want · requests',
    name: 'SkillSwap',
    oneLiner: 'Peer skill marketplace with offer/want tags and requests.',
    url: 'https://github.com/harshitha22102008/skillswap',
    status: 'mvp',
  },
  {
    id: 'codequest',
    progression: '06',
    narrative: 'Tracks · quizzes · XP · levels',
    name: 'CodeQuest',
    oneLiner: 'Gamified coding practice with tracks, quizzes, and XP.',
    url: 'https://github.com/harshitha22102008/codequest',
    status: 'mvp',
  },
  {
    id: 'campuspulse',
    progression: '07',
    narrative: 'Feed · dashboard · rule-based tips',
    name: 'CampusPulse',
    oneLiner: 'Campus intelligence feed with explainable recommendations.',
    url: 'https://github.com/harshitha22102008/campuspulse',
    status: 'mvp',
  },
]
