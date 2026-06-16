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
