/**
 * content/hero.ts — copy for components/sections/Hero.tsx.
 */

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  /** Stored in natural case — the uppercasing is a CSS concern. */
  eyebrow: string;
  headlineLine1: string;
  /** Rendered in --color-accent. */
  headlineLine2: string;
  subhead: string;
  ctaPrimary: CtaLink;
  ctaSecondary: CtaLink;
}

export const heroContent: HeroContent = {
  eyebrow: "Senior frontend engineer & architect",
  headlineLine1: "building high-performance",
  headlineLine2: "frontend architecture",
  subhead:
    "13 years engineering scalable frontend architecture and real-time 3D for Walmart and Vans — plus Publicis Groupe's Next.js careers platform. TypeScript, React, Vue, Next.js, and automated Playwright regression testing.",
  ctaPrimary: { label: "View selected work →", href: "#work" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};
