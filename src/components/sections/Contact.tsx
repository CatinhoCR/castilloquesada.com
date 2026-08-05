import { InfoCard } from "@/components/ui/InfoCard";
import { contactContent, type ContactRow } from "@/content/contact";

/*
  Numbered editorial row — index (01 in accent, rest in secondary),
  font-body label, trailing directional arrow (↗ external/mailto, ↓
  download). Bespoke to Contact rather than InfoCard's shared LinkRow:
  InfoCard's coming-soon variant still uses the inline numbered-link
  treatment, and the two no longer share a visual language.
*/
function ContactRowLink({
  row,
  index,
  isLast,
}: {
  row: ContactRow;
  index: number;
  isLast: boolean;
}) {
  const arrow = row.download ? "↓" : "↗";

  return (
    <a
      href={row.href}
      target={row.external ? "_blank" : undefined}
      rel={row.external ? "noopener noreferrer" : undefined}
      download={row.download}
      className={`group flex items-center justify-between gap-6 border-t border-line py-6 no-underline transition-[color,padding-left] duration-(--duration-fast) ease-out-expo hover:pl-2.5 ${
        isLast ? "border-b" : ""
      }`}
    >
      <span className="flex items-baseline gap-4">
        <span
          className={`font-mono text-label transition-colors duration-(--duration-fast) group-hover:text-accent ${
            index === 1 ? "text-accent" : "text-secondary"
          }`}
        >
          {String(index).padStart(2, "0")}
        </span>
        <span className="font-sans font-medium text-(length:--text-body-l) text-primary transition-colors duration-(--duration-fast) group-hover:text-accent">
          {row.label}
        </span>
      </span>
      <span className="font-mono text-secondary transition-colors duration-(--duration-fast) group-hover:text-accent">
        {arrow}
      </span>
    </a>
  );
}

export default function Contact() {
  const {
    eyebrow,
    headlineLine1,
    headlineLine2,
    description,
    rowsEyebrow,
    rows,
    footer,
  } = contactContent;

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
      />

      <div className="mx-auto w-full max-w-content px-gutter">
        <p className="mt-16 font-mono text-(length:--text-label) uppercase tracking-[0.06em] text-secondary">
          {rowsEyebrow}
        </p>
        <div className="mt-6">
          {rows.map((row, i) => (
            <ContactRowLink
              key={row.href}
              row={row}
              index={i + 1}
              isLast={i === rows.length - 1}
            />
          ))}
        </div>
      </div>

      <p className="px-gutter pb-section pt-16 text-(length:--text-small) text-secondary">
        © {new Date().getFullYear()} {footer}
      </p>
    </section>
  );
}
