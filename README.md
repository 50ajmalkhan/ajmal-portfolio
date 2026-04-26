# ajmalportfolio.com

Personal portfolio site for **Muhammad Ajmal Khan** — Senior Full Stack Developer (React + Python/FastAPI) and AI Engineer (LangChain · RAG · Multi-Agent Systems).

Live: https://ajmalportfolio.com (after deploy)

---

## Stack

- **Framework:** Next.js 14 (App Router) · TypeScript
- **Styling:** Tailwind CSS · custom design tokens for warm-light + dark mode
- **Animations:** Framer Motion · scroll-driven effects · CSS keyframes
- **Theming:** `next-themes` (dark by default)
- **Icons:** lucide-react · react-icons
- **SEO:** dynamic Open Graph image, sitemap, robots, JSON-LD Person schema
- **Deploy target:** Vercel

## What's inside

```
src/
├── app/
│   ├── layout.tsx              # Root layout, metadata, JSON-LD, fonts
│   ├── page.tsx                # Single-page scroll site
│   ├── globals.css             # Aurora, marquee, shine, dot-grid
│   ├── opengraph-image.tsx     # Dynamic 1200×630 OG via next/og
│   ├── icon.tsx                # Dynamic favicon
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── animated/               # Reveal, LetterStagger, MagneticButton, SectionHeading
│   ├── sections/               # Hero, About, Skills, Projects, Experience, Contact
│   ├── nav.tsx · footer.tsx
│   ├── scroll-progress.tsx     # Top-of-page gradient progress bar
│   ├── cursor-spotlight.tsx    # Pointer-tracking blur blob
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
└── content/                    # Single source of truth for site copy
    ├── personal.ts
    ├── projects.ts
    ├── experience.ts
    └── skills.ts
public/
└── resume.pdf                  # Replace with real CV
```

## Animations

- Aurora gradient hero background (animated 18s loop) with parallax on scroll
- Letter-by-letter name reveal
- Rotating role typewriter with blinking caret
- Magnetic CTA buttons + shine sweep on hover
- Cursor-tracking spotlight blob
- Scroll progress bar (orange → fuchsia → sky)
- Marquee tech ribbon
- Project cards with 3D tilt + radial spotlight
- Scroll-driven gradient line draw on the experience timeline
- Animated theme toggle (sun ↔ moon)
- All effects respect `prefers-reduced-motion`

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Editing content

All site copy is in `src/content/`. Update the strings there — no JSX edits required.

- `personal.ts` — name, bio, contact links, rotating role list, hero stats
- `projects.ts` — featured projects with descriptions, contributions, tech
- `experience.ts` — career timeline + education
- `skills.ts` — grouped skill chips

## Deploy

1. Push to GitHub (already done — `main` branch).
2. Import the repo on [Vercel](https://vercel.com/new) — framework auto-detects.
3. Add `ajmalportfolio.com` in Project Settings → Domains and follow the DNS instructions.

## License

All rights reserved © Muhammad Ajmal Khan.
