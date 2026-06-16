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
      'Fully working prototypes in days, not months. Real software that turns an idea into something you can actually test.',
  },
  {
    title: 'CxO Sparring',
    href: '/cxo-sparring/',
    slug: 'cxo-sparring',
    teaser:
      'I’ve sat in the CTO chair: team setup, tech stack, processes, AI leverage — and the hard calls in between. Sometimes that’s worth a conversation.',
  },
  {
    title: 'Mentoring',
    href: '/mentoring/',
    slug: 'mentoring',
    teaser:
      'Free mentoring for engineers and founders. Someone helped me when I started out — this is me paying it forward.',
  },
];
