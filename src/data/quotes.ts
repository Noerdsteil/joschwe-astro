export interface Quote {
  text: string;
  author: string;
  role?: string;
  /** Page the quote is shown on */
  context: 'engineering' | 'cxo' | 'home';
}

/**
 * TODO(content): replace placeholder quotes with real references.
 * Keep them short and attributable — quotes without photos, by design.
 */
export const quotes: Quote[] = [
  {
    text: 'Placeholder — a short quote about working with Jonas as a software engineer goes here.',
    author: 'Reference name',
    role: 'Role, Company',
    context: 'engineering',
  },
  {
    text: 'Placeholder — a short quote about Jonas’ leadership style as CTO goes here.',
    author: 'Reference name',
    role: 'Role, Company',
    context: 'cxo',
  },
  {
    text: 'Placeholder — a short quote about why people loved working with Jonas goes here.',
    author: 'Reference name',
    role: 'Role, Company',
    context: 'home',
  },
];
