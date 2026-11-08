export const SITE = {
  name: 'Invariants',
  tagline: 'Essays on mathematics, physics, philosophy, computation & markets',
  description:
    'Invariants is a publication by Kairav Shah: essays and notes on mathematics, physics, philosophy, computer science and finance, and the projects that grew out of them.',
  author: 'Kairav Shah',
  github: 'https://github.com/shahkairav',
  established: 'MMXXVI',
};

export const NAV = [
  { href: '/essays/', label: 'Essays', key: 'essays' },
  { href: '/projects/', label: 'Projects', key: 'projects' },
  { href: '/notes/', label: 'Notes', key: 'notes' },
  { href: '/about/', label: 'About', key: 'about' },
] as const;
