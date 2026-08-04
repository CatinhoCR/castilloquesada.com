import { ReactNode } from "react";
import { StatusDot } from "@/components/ui/StatusDot";

export interface InfoCardLink {
  label: string;
  href: string;
  external?: boolean;
  download?: boolean | string;
}

type Variant = "coming-soon";

export interface InfoCardProps {
  variant: Variant;
  eyebrow: string;
  headline: ReactNode;
  body: string;
  links: InfoCardLink[];
  className?: string;
}

export function InfoCard({
  eyebrow,
  headline,
  body,
  links,
  className = "",
}: InfoCardProps) {
  // variant is reserved for a future "contact-block" mode (bounded card,
  // not this full-page shell) — branch on it here once that design exists
  // rather than forcing both modes through one JSX tree.
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
        <p className="mb-[clamp(1.75rem,4vw,2.25rem)] inline-flex items-center gap-[11px] font-mono text-[length:var(--text-label)] uppercase tracking-[0.18em] text-accent">
          <StatusDot size="lg" />
          {eyebrow}
        </p>
        <h1 className="text-hero-alt font-display font-medium">{headline}</h1>
        {/* bracket form: --text-body's paired line-height (1.65) doesn't
            match this size's intended 1.55 — font-size only. */}
        <p className="mt-[clamp(1.75rem,4vw,2.25rem)] max-w-[48ch] text-[length:var(--text-body)] text-secondary">
          {body}
        </p>
      </div>

      <footer className="mx-auto flex w-full max-w-content flex-wrap gap-[clamp(1.25rem,4vw,2.25rem)] border-t border-line px-gutter py-[clamp(1.375rem,4vw,1.625rem)]">
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
              className={`inline-flex items-center gap-[9px] font-mono text-label tracking-[0.02em] no-underline transition-colors duration-[var(--duration-fast)] hover:text-primary ${
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
      </footer>
    </div>
  );
}
