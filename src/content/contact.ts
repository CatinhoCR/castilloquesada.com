/**
 * content/contact.ts — copy for components/sections/Contact.tsx.
 */

export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactContent {
  intro: string;
  links: ContactLink[];
  /** Composed at render as `© ${year} ${footer}` — the year is a render-time value, not content. */
  footer: string;
}

export const contactContent: ContactContent = {
  intro:
    "Open to senior frontend and creative engineering roles, and select freelance engagements.",
  links: [
    { label: "Email", href: "mailto:hello@castilloquesada.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/catinhocr" },
    { label: "GitHub", href: "https://github.com/CatinhoCR" },
  ],
  footer: "Andrés Castillo Quesada · San José, Costa Rica",
};
