/**
 * content/contact.ts — copy for components/sections/Contact.tsx.
 */

export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean;
}

export interface ContactContent {
  eyebrow: string;
  /** Rendered as two lines; the second is colored accent by the component. */
  headlineLine1: string;
  headlineLine2: string;
  description: string;
  links: ContactLink[];
  /** Composed at render as `© ${year} ${footer}` — the year is a render-time value, not content. */
  footer: string;
}

export const contactContent: ContactContent = {
  eyebrow: "Get in touch",
  headlineLine1: "Let's build",
  headlineLine2: "something good.",
  description:
    "Open to remote Senior React/Next.js roles — reach out directly, or grab the résumé below.",
  links: [
    {
      label: "andres@castilloquesada.com",
      href: "mailto:andres@castilloquesada.com",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/catinhocr",
      external: true,
    },
    { label: "GitHub", href: "https://github.com/CatinhoCR", external: true },
    {
      label: "Download résumé",
      href: "/andres_castillo_resume.pdf",
      download: true,
    },
  ],
  footer: "Andrés Castillo Quesada · San José, Costa Rica",
};
