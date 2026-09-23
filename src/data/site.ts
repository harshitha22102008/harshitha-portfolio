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
  role: 'B.Tech CSE · SRM',
  tagline: 'First-year student. I build web apps and learn by actually finishing them.',
  email: 'harshitha22rajesh@gmail.com',
  github: 'https://github.com/harshitha22102008',
  linkedin: 'https://linkedin.com/in/harshitha',
  branch: 'CSE',
  college: 'SRM',
  year: '1st year',
} as const
