# schweizer-jonas.de

Personal website of Jonas Schweizer — software engineer, ex-CTO & co-founder.

Static site built with [Astro](https://astro.build), [Vue 3](https://vuejs.org) islands and
[Tailwind CSS 4](https://tailwindcss.com). No cookies, no trackers, no third-party requests
(fonts are self-hosted via Fontsource).

## Development

```sh
npm install
npm run dev        # dev server at http://localhost:4321
npm run build      # static build into dist/
npm run preview    # serve the production build locally
npm run shots      # Playwright screenshots of key pages into /tmp/joschwe-shots
```

## Architecture

- `src/data/*.ts` — all content that changes over time (nav, offerings, timeline, quotes,
  contact details). Edit these to update the site; the markup rarely needs touching.
- `src/components/` — small Astro components plus two Vue islands (`ThemeToggle.vue`,
  `MobileMenu.vue`), the only JavaScript shipped to browsers besides a tiny
  scroll-reveal observer.
- `src/styles/global.css` — the design system: semantic color tokens as CSS variables
  (light/dark via a `.dark` class on `<html>`), font stacks, reveal animation. Changing the
  look of the site means changing tokens here.
- `src/pages/` — one `.astro` file per route.

## Deployment (Cloudflare Pages)

1. Push this repository to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git** and
   select the repository.
3. Build settings: framework preset **Astro**, build command `npm run build`, output
   directory `dist`.

Every push to the default branch deploys automatically; other branches get preview URLs.

## Content TODOs

Search the codebase for `TODO(content)`:

- Final domain (`astro.config.mjs`, `src/data/site.ts`), contact email and social URLs
- Real reference quotes (`src/data/quotes.ts`)
- CV PDF at `public/cv-jonas-schweizer.pdf`
- Full legal address in `src/pages/imprint.astro`
