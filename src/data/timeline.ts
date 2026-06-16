export interface TimelineEntry {
  period: string;
  title: string;
  org?: string;
  highlights: string[];
}

export const timeline: TimelineEntry[] = [
  {
    period: '2025 — today',
    title: 'Senior Software Engineer',
    org: 'rhome',
    highlights: [
      'Sustainably growing tech, team and processes while scaling rhome’s business',
      'Taking rhome to the next level in processes, compliance & security, and culture',
    ],
  },
  {
    period: '2021 — 2025',
    title: 'Co-Founder',
    org: 'Laserhub',
    highlights: [
      'Stepped back as managing director and supported the company in changing roles',
    ],
  },
  {
    period: '2017 — 2021',
    title: 'Co-Founder & CTO',
    org: 'Laserhub',
    highlights: [
      'Grew the company from 3 to 50 employees',
      'Contributed to three VC financing rounds',
      'Built and grew a tech team from zero',
      'From bare metal to a cloud-native software stack',
    ],
  },
  {
    period: '2014 — 2017',
    title: 'Business & IT Consultant',
    org: 'diconium strategy',
    highlights: [
      'Leveled up my conceptual and strategic thinking',
      'Learned how to structure any problem',
      'Started to grow a team-first leadership mindset',
    ],
  },
  {
    period: '2012',
    title: 'Working Student, Product Management',
    org: 'Grünspar',
    highlights: [
      'First startup experience at the Münster-based e-commerce startup for energy-saving products',
      'Grünspar later exited successfully to energy company EWE',
    ],
  },
  {
    period: '2011',
    title: 'Co-Founder',
    org: 'blogfieber.com',
    highlights: [
      'Co-founded a student startup — it didn’t take off, but taught me the most important lesson early: team wins',
      'The team didn’t match, and no idea survives that',
    ],
  },
  {
    period: '2011 — 2014',
    title: 'Freelance Software Engineer',
    highlights: [
      'Worked for multiple clients across varying tech stacks',
    ],
  },
  {
    period: '2011 — 2014',
    title: 'M.Sc. Information Engineering',
    highlights: [
      'Learned the strategic foundations and a lot about process modeling',
      'Sharpened my analytical thinking',
    ],
  },
  {
    period: '2010 — 2011',
    title: 'Junior Engineer',
    org: 'Bigpoint, a gaming scale-up',
    highlights: ['Engineering at gaming scale-up speed'],
  },
  {
    period: '2006 — 2009',
    title: 'B.Sc. Computer Science',
    highlights: [
      'Majored in Human-Computer Interaction',
      'Worked as a software engineer in various university departments from day one',
    ],
  },
];
