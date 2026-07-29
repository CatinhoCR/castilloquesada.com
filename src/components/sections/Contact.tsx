import SectionHeading from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { contactContent } from "@/content/contact";

export default function Contact() {
  const { intro, links, footer } = contactContent;

  return (
    <section
      id="contact"
      className="px-[var(--space-gutter)] py-[var(--space-section)]"
      aria-label="Contact"
    >
      <SectionHeading>Contact</SectionHeading>

      <p className="mt-8 max-w-xl text-[length:var(--text-h3)] leading-snug">
        {intro}
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
        © {new Date().getFullYear()} {footer}
      </p>
    </section>
  );
}
