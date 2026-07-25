import { ReactNode } from "react";

/*
  Shared section heading — the first resident of ui/.
  One consistent treatment across About / Work / Contact so the page
  reads as a system, not assembled parts.
*/
export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="border-b border-[var(--color-line)] pb-4 text-[length:var(--text-small)] uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
      {children}
    </h2>
  );
}
