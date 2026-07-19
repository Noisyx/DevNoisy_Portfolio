# DevNoisy — 3D Creator Portfolio

Landing page built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

- `src/sections/` — the five page sections (Hero, Marquee, About, Services, Projects), in render order in `App.tsx`.
- `src/components/` — reusable pieces: `FadeIn` (scroll-reveal), `Magnet` (mouse-following hover effect), `AnimatedText` (character-by-character scroll reveal), `ContactButton`, `LiveProjectButton`.
- `src/data/` — marquee image URLs and services/projects copy, kept separate from markup so content is easy to edit.
- `src/index.css` — global reset, dark background, Kanit font, and the `.hero-heading` gradient-text utility.

## Notes

- All external images are hot-linked from their original hosts (figma.site, motionsites.ai, higgs.ai/cloudfront). Swap the URLs in `src/data/` and the section files if you want to self-host them instead.
- The marquee rows and the sticky project-card stack are driven by scroll position via `window.scrollY` / Framer Motion's `useScroll`, not by autoplay — scroll the page to see them move.
- Reduced-motion is respected globally via a `prefers-reduced-motion` media query in `index.css`.
