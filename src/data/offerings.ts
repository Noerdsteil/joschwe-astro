export interface Offering {
  title: string;
  href: string;
  /** Short label rendered in mono font, terminal-style */
  slug: string;
  teaser: string;
}

export const offerings: Offering[] = [
  {
    title: 'Software Engineering',
    href: '/engineering/',
    slug: 'engineering',
    teaser:
      'Senior full-stack engineering with a pure startup mindset. Web apps, pragmatic automations and an AI-first approach — built to ship and built to last.',
  },
  {
    title: 'Prototyping',
    href: '/prototyping/',
    slug: 'prototyping',
    teaser:
      'Fully working prototypes within 2–3 days. Validate your idea and your business model before you commit a budget to it.',
  },
  {
    title: 'CxO Sparring',
    href: '/cxo-sparring/',
    slug: 'cxo-sparring',
    teaser:
      'Sparring for CEOs, COOs and CTOs from someone who has been on both sides: team setup, tech stack, processes, AI leverage — and interim CTO work.',
  },
  {
    title: 'Compliance for Startups',
    href: '/compliance/',
    slug: 'compliance',
    teaser:
      'ISO 27001, TISAX and data privacy without the enterprise overhead. From review to strategy to hands-on implementation.',
  },
  {
    title: 'Mentoring',
    href: '/mentoring/',
    slug: 'mentoring',
    teaser:
      'Free mentoring for engineers and founders. Someone helped me when I started out — this is me paying it forward.',
  },
];
