export interface Quote {
  text: string;
  author: string;
  role?: string;
  /** Pages the quote is shown on */
  context: ('engineering' | 'cxo' | 'home' | 'leadership')[];
}

/**
 * Real references. Keep them short and attributable — quotes without photos, by design.
 */
export const quotes: Quote[] = [
  {
    text: 'As an engineering leader, Jonas drove initiatives that kept us reaching for smarter, state-of-the-art and long-lasting solutions. He was a fountain of ideas that kept things fresh and exciting — and always had an open ear, challenging input with the right questions to draw out even better ideas.',
    author: 'Samitha J.',
    role: 'Former colleague at Laserhub, now Team Lead Backend',
    context: ['engineering'],
  },
  {
    text: 'As a CTO, Jonas gave me a fresh perspective on leadership — one that pushes, enables and grows the team rather than just commanding. He built a culture of ownership, accountability and teamwork that made it feel good to be part of the team. I’m confident that any role Jonas takes on becomes a positive transformation: better results, a better culture and a better sense of purpose.',
    author: 'Samitha J.',
    role: 'Former colleague at Laserhub, now Team Lead Backend',
    context: ['leadership'],
  },
  {
    text: 'Jonas can boil down a complex technical problems into their simplest components while getting the team to pull in the same direction. I’ve met few who can do this.',
    author: 'Lukas Hermann',
    role: 'CEO stagetimer.io, former colleague at Laserhub',
    context: ['home', 'cxo'],
  },
  {
    text: 'Once a founder, always a legend.',
    author: 'The Laserhub team',
    role: 'Farewell booklet, 2025',
    context: ['cxo'],
  },
  {
    text: 'Working with Jonas is a significant period in my career — what I learned and experienced then, I still proudly and successfully apply in my own teams today. I’m grateful to him for being that role model.',
    author: 'Samitha J.',
    role: 'Former colleague at Laserhub, now Team Lead Backend',
    context: ['home'],
  },
  {
    text: 'Jonas isn’t just someone who has the ability to understand problems in depth and develop solutions, but also to strategically bring issues back to the forefront. On a personal level, too, working with Jonas has always been a lot of fun.',
    author: 'Sarah G.',
    context: ['home', 'leadership'],
  },
];
