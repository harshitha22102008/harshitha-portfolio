export type NavLink = {
  href: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export const SITE = {
  name: 'Harshitha',
  role: 'First-year B.Tech · Full-stack learner',
  tagline:
    'I build small, honest web apps — and I can explain every line I ship.',
  email: 'harshitha@example.com',
  github: 'https://github.com/harshitha22102008',
  linkedin: 'https://linkedin.com/in/harshitha',
  resumePath: '/resume.pdf',
} as const
