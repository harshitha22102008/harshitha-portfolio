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
    narrative: 'This site',
    name: 'Portfolio',
    oneLiner: 'Where I keep my projects and how to reach me.',
    url: 'https://github.com/harshitha22102008/harshitha-portfolio',
    status: 'hub',
  },
  {
    id: 'studyflow',
    progression: '02',
    narrative: 'Auth · subjects · charts',
    name: 'StudyFlow',
    oneLiner: 'Log study sessions and see how your hours stack up.',
    url: 'https://github.com/harshitha22102008/studyflow',
    status: 'mvp',
  },
  {
    id: 'spendwise',
    progression: '03',
    narrative: 'Expenses · CSV · charts',
    name: 'SpendWise',
    oneLiner: 'Track income and spending with categories and monthly charts.',
    url: 'https://github.com/harshitha22102008/spendwise',
    status: 'mvp',
  },
  {
    id: 'campushub',
    progression: '04',
    narrative: 'Clubs · events',
    name: 'CampusHub',
    oneLiner: 'Join clubs and RSVP to campus events.',
    url: 'https://github.com/harshitha22102008/campushub',
    status: 'mvp',
  },
  {
    id: 'skillswap',
    progression: '05',
    narrative: 'Peer learning',
    name: 'SkillSwap',
    oneLiner: 'Find people to teach and learn skills from.',
    url: 'https://github.com/harshitha22102008/skillswap',
    status: 'mvp',
  },
  {
    id: 'codequest',
    progression: '06',
    narrative: 'Quizzes · XP',
    name: 'CodeQuest',
    oneLiner: 'Practice coding with tracks, quizzes, and XP.',
    url: 'https://github.com/harshitha22102008/codequest',
    status: 'mvp',
  },
  {
    id: 'campuspulse',
    progression: '07',
    narrative: 'Campus feed',
    name: 'CampusPulse',
    oneLiner: 'Events and opportunities in one place, with simple recommendations.',
    url: 'https://github.com/harshitha22102008/campuspulse',
    status: 'mvp',
  },
]
