# castilloquesada.com — Personal Portfolio & Creative Lab

![Tests](https://github.com/CatinhoCR/castilloquesada.com/actions/workflows/tests.yml/badge.svg)

> Production portfolio built with Next.js (App Router), GSAP, Lenis, and Tailwind CSS. Focused on 60fps performance, design systems, and responsive accessibility.

Personal portfolio and case study site for **Andrés Castillo Quesada** —
Senior Frontend Engineer & Architect / Creative Technologist.

**[castilloquesada.com](https://castilloquesada.com)**

## 🛠 Tech Stack & Architecture
- **Framework:** [Next.js](https://nextjs.org) (App Router / React 19), TypeScript
- **Styling:** Tailwind CSS v4 (`@theme` design tokens) + SCSS Modules (Design Tokens & Keyframe Isolation)
- **Motion Engine:** [GSAP](https://gsap.com) (ScrollTrigger) + `@gsap/react`,
  [Lenis](https://lenis.darkroom.engineering) for smooth scroll
- **Typography:** Space Grotesk, Hanken Grotesk, Space Mono\
- **Deployment** — [Vercel](https://vercel.com)

## 📐 Key Technical Highlights
- **Polymorphic Architecture:** Reusable `<InfoCard />` pattern for dual-use layout stages.
- **GSAP/Lenis Sync:** Custom RAF ticker integration preventing frame drops on High-Refresh Rate displays.
- **Zero-CLSS Strategy:** Strict SSR/CSR layout isolation for smooth font/asset hydration.

## About

13 years of frontend engineering bridging design and interactive
engineering — 3D/WebGL, motion, design systems, and full-stack
architecture. This site is both a portfolio and a working example of the
stack it describes: hand-built, token-driven, animation-first.

## Architecture notes

- **Design tokens** live in a single source of truth (`lib/theme.css`),
  consumed by both Tailwind utilities and SCSS modules. No hardcoded
  colors, type sizes, or spacing in components — everything resolves
  through a CSS variable.
- **Type scale is fluid**, interpolated with `clamp()` between mobile
  (390px) and desktop (1440px) design specs, rather than fixed
  breakpoints.
- **Motion tokens** (`lib/motion.ts`) centralize GSAP durations, eases,
  and stagger values so animation timing stays consistent across the
  site rather than being reinvented per component.
- **UI components** use a `variant` prop pattern (e.g. `<Button
  variant="main">`) rather than BEM-style CSS class modifiers, keeping
  variants type-checked and wired directly into the token system.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Branching

- `main` — production, always deployable, mirrors what's live on the
  domain.
- Feature branches per work cycle, merged into `main` when ready. Every
  push gets an automatic Vercel preview deployment.

## Case studies

Three case studies are featured, presented as narrative summaries (role,
scope, technical decisions) rather than asset showcases, in line with
NDA constraints on the underlying client work:

- **Vans — 3D Shoe Customizer** — real-time product customization
  (Vue + Three.js)
- **Walmart Connect — Design System** — SCSS token/component library for
  a multi-team ad platform
- **Uniwatch** — AI-powered IP vigilance SaaS, built and led as sole
  technical lead (NestJS, PostgreSQL, Python/TensorFlow, AWS)

## License

Site content and design are © Andrés Castillo Quesada. Code structure is
shared for portfolio/demonstration purposes.

## Contact

[LinkedIn](https://linkedin.com/in/catinhocr) ·
[GitHub](https://github.com/CatinhoCR)
