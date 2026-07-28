/**
 * config/siteContent.ts — all user-facing copy for the landing page.
 *
 * A plain typed module, not JSON and not a fetch: this is a static
 * single-page site, so the content ships in the bundle and gets
 * type-checked at every call site. Components stay layout-only —
 * no literal copy lives inside a .tsx file.
 *
 * Nav content is a sibling export rather than a field on heroContent:
 * the nav is rendered by app/layout.tsx and outlives the hero section,
 * so folding it into hero data would misplace ownership.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface NavContent {
  name: string;
  /** Rendered in quotes beside the name; hidden at the smallest breakpoint. */
  nickname: string;
  /** Sits next to the pulsing availability dot. */
  statusText: string;
  navLinks: NavLink[];
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

export const navContent: NavContent = {
  name: "Andrés Castillo",
  nickname: "Cato",
  statusText: "Available",
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};

export const heroContent: HeroContent = {
  eyebrow: "Creative Technologist",
  headlineLine1: "Senior frontend engineering with a",
  headlineLine2: "designer's eye.",
  subhead:
    "13 years building interactive 3D, motion systems and design-system architecture for global brands — from real-time product configurators to platforms serving multiple teams.",
  ctaPrimary: { label: "View selected work →", href: "#work" },
  ctaSecondary: { label: "Get in touch", href: "#contact" },
};
