import { InfoCard } from "@/components/ui/InfoCard";
import { contactContent } from "@/content/contact";

export default function Contact() {
  const { eyebrow, headlineLine1, headlineLine2, description, links, footer } =
    contactContent;

  return (
    <section id="contact" aria-label="Contact">
      <InfoCard
        variant="contact-block"
        eyebrow={eyebrow}
        headline={
          <>
            {headlineLine1}
            <br />
            <span className="text-accent">{headlineLine2}</span>
          </>
        }
        body={description}
        links={links}
      />

      <p className="px-gutter pb-section text-(length:--text-small) text-secondary">
        © {new Date().getFullYear()} {footer}
      </p>
    </section>
  );
}
