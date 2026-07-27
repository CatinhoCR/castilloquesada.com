import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const links = [
  // TODO: confirm the public-facing email you want on the site
  { label: "Email", href: "mailto:hello@castilloquesada.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/catinhocr" },
  { label: "GitHub", href: "https://github.com/CatinhoCR" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="px-[var(--space-gutter)] py-[var(--space-section)]"
      aria-label="Contact"
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="mt-8 max-w-xl text-[length:var(--text-h3)] leading-snug">
        Open to senior frontend and creative engineering roles, and select
        freelance engagements.
      </p>

      <ul className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Button
              href={href}
              variant="link"
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {label}
            </Button>
          </li>
        ))}
      </ul>

      <p className="mt-[var(--space-section)] text-[length:var(--text-small)] text-[var(--color-text-muted)]">
        © {new Date().getFullYear()} Andrés Castillo Quesada · San José,
        Costa Rica
      </p>
    </section>
  );
}
