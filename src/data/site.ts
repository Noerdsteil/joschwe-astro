/**
 * Central site configuration. Everything that is likely to change over time
 * (links, contact details, nav) lives here.
 */
export const site = {
  name: 'Jonas Schweizer',
  title: 'Jonas Schweizer — Software Engineer, Ex-CTO & Co-Founder',
  description:
    'Senior software engineer with a pure startup mindset. Web apps, rapid prototyping, CxO sparring, compliance for startups and free mentoring.',
  url: 'https://www.schweizer-jonas.de',
  // TODO(content): confirm final contact email and social URLs
  email: 'hello@schweizer-jonas.de',
  linkedin: 'https://www.linkedin.com/in/jonas-schweizer',
  github: 'https://github.com/joschwe',
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
  { label: 'Compliance', href: '/compliance/' },
  { label: 'Mentoring', href: '/mentoring/' },
  { label: 'Pricing', href: '/pricing/' },
];

export const footerNav: NavItem[] = [
  { label: 'Imprint', href: '/imprint/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'How I built this site', href: '/colophon/' },
];
