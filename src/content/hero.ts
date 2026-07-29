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
  headlineLine1: "Senior frontend engineering with a",
  headlineLine2: "designer's eye.",
  subhead:
    "13 years building interactive 3D, motion systems and design-system architecture for global brands — from real-time product configurators to platforms serving multiple teams.",
  ctaPrimary: { label: "View selected work →", href: "#work" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};
