/**
 * Central site configuration. Everything that is likely to change over time
 * (links, contact details, nav) lives here.
 */
export const site = {
  name: 'Jonas Schweizer',
  title: 'Jonas Schweizer — Software Engineer, Ex-CTO & Co-Founder',
  description:
    'Jonas Schweizer — senior software engineer, ex-CTO and co-founder. Twenty years from code to C-level and back. Web apps, prototyping, CxO sparring and mentoring.',
  url: 'https://www.schweizer-jonas.de',
  // TODO(content): confirm final contact email and social URLs
  email: 'webmaster@schweizer-jonas.de',
  linkedin: 'https://www.linkedin.com/in/jonasschweizer/',
  github: 'https://github.com/Noerdsteil',
  cvUrl: '/cv-jonas-schweizer.pdf',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const nav: NavItem[] = [
  { label: 'Engineering', href: '/engineering/' },
  { label: 'Prototyping', href: '/prototyping/' },
  { label: 'CxO Sparring', href: '/cxo-sparring/' },
  { label: 'Mentoring', href: '/mentoring/' },
];

export const footerNav: NavItem[] = [
  { label: 'Imprint', href: '/imprint/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'How I built this site', href: '/colophon/' },
];
