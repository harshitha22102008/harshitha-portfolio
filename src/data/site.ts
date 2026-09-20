export type NavLink = {
  href: string
  label: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const SITE = {
  name: 'Harshitha',
  email: 'harshitha@example.com',
  github: 'https://github.com/harshitha22102008',
  linkedin: 'https://linkedin.com/in/harshitha',
  resumePath: '/resume.pdf',
} as const
