import { ReactNode } from "react";
import { StatusDot } from "@/components/ui/StatusDot";

export interface InfoCardLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean | string;
}

type Variant = "coming-soon" | "contact-block";

export interface InfoCardProps {
  variant: Variant;
  eyebrow: string;
  headline: ReactNode;
  body: string;
  /** Only rendered by the coming-soon variant — contact-block builds its own link rows. */
  links?: InfoCardLink[];
  className?: string;
}

/*
  Shared link-row treatment: numbered mono link (01/02/03...), arrow
  suffix on external/download links, accent color for downloads.
  Same visual language in both variants — only the surrounding shell
  differs (full-page vs. in-page bounded card).
*/
function LinkRow({ links }: { links: InfoCardLink[] }) {
  return (
    <>
      {links.map((link, index) => {
        const isDownload = Boolean(link.download);
        const showArrow = link.external || isDownload;
        const target = link.external ? "_blank" : undefined;
        const rel = link.external ? "noopener noreferrer" : undefined;

        return (
          <a
            key={link.href}
            href={link.href}
            target={target}
            rel={rel}
            download={link.download}
            className={`inline-flex items-center gap-[9px] font-mono text-label tracking-[0.02em] no-underline transition-colors duration-(--duration-fast) hover:text-primary ${
              isDownload ? "text-accent" : "text-secondary"
            }`}
          >
            <span
              className={`text-tag ${
                isDownload ? "text-accent" : "text-primary"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            {link.label}
            {showArrow && " →"}
          </a>
        );
      })}
    </>
  );
}

export function InfoCard({
  variant,
  eyebrow,
  headline,
  body,
  links = [],
  className = "",
}: InfoCardProps) {
  if (variant === "contact-block") {
    return (
      <div className={`mx-auto w-full max-w-content px-gutter pt-section ${className}`}>
        <p className="font-mono text-(length:--text-label) uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-8 text-h1 font-display font-medium">{headline}</h2>
        <p className="mt-6 max-w-[52ch] text-body text-secondary">{body}</p>
      </div>
    );
  }

  return (
    <div
      className={`flex min-h-svh flex-col bg-base text-primary ${className}`}
    >
      {/* No nav bar here — the site-wide one is rendered by app/layout.tsx.
          A <div> rather than <main> for the same reason: layout.tsx owns
          the page's single <main> landmark. */}
      <div className="mx-auto flex w-full max-w-content flex-1 flex-col justify-center px-gutter py-[clamp(1.5rem,5vw,2.5rem)]">
        {/* bracket form: reuses --text-label's size but needs 0.18em
            tracking here, not the token's own paired 0.02em. */}
        <p className="mb-[clamp(1.75rem,4vw,2.25rem)] inline-flex items-center gap-[11px] font-mono text-(length:--text-label) uppercase tracking-[0.18em] text-accent">
          <StatusDot size="lg" />
          {eyebrow}
        </p>
        <h1 className="text-hero-alt font-display font-medium">{headline}</h1>
        {/* bracket form: --text-body's paired line-height (1.65) doesn't
            match this size's intended 1.55 — font-size only. */}
        <p className="mt-[clamp(1.75rem,4vw,2.25rem)] max-w-[48ch] text-(length:--text-body) text-secondary">
          {body}
        </p>
      </div>

      <footer className="mx-auto flex w-full max-w-content flex-wrap gap-[clamp(1.25rem,4vw,2.25rem)] border-t border-line px-gutter py-[clamp(1.375rem,4vw,1.625rem)]">
        <LinkRow links={links} />
      </footer>
    </div>
  );
}
