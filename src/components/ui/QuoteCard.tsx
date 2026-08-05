import { ReactNode } from "react";

/*
  QuoteCard — dev-note-style annotation card: accent left border, mono
  type, a labeled first line prefixed with a glyph, a muted description
  below. Originally the "MOTION · ..." design-annotation treatment from
  the Claude Design export — kept as a reusable presentational piece,
  not tied to any one section's content.
*/
export interface QuoteCardProps {
  icon?: ReactNode;
  label: string;
  description: string;
  className?: string;
}

export function QuoteCard({
  icon = "▸",
  label,
  description,
  className = "",
}: QuoteCardProps) {
  return (
    <p
      className={`max-w-[70ch] border-l-2 border-accent pl-3 font-mono text-eyebrow leading-relaxed text-secondary ${className}`}
    >
      <span className="text-accent">
        {icon} {label}
      </span>
      <br />
      {description}
    </p>
  );
}
