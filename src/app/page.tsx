/**
 * app/page.tsx — coming-soon page for the `main` branch.
 *
 * Lives on production while the real site is built on `build/launch`.
 * Friday's launch replaces this via merge. Runs entirely on the
 * theme.css tokens, so it doubles as a live smoke test that the
 * token system and next/font wiring work in production.
 */

import { Button } from "@/components/ui/Button";

export default function ComingSoon() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center px-[var(--spacing-gutter)] text-center">
      <p className="font-mono text-eyebrow uppercase tracking-[0.12em] text-primary">
        castilloquesada.com
      </p>

      <h1 className="mt-6 font-display text-display text-primary">
        Andrés Castillo
        <br />
        <span className="text-accent">Front-End Engineering</span>
      </h1>

      <p className="mt-8 max-w-md text-lead text-secondary">
        Creative technologist — interactive 3D, animation, and
        full-stack architecture. New site launching shortly.
      </p>

      <div className="mt-12 flex items-center gap-8">
        <Button
          href="https://www.linkedin.com/in/catinhocr"
          variant="link"
          className="text-accent "
        >
          LinkedIn
        </Button>
        <Button
          href="https://github.com/CatinhoCR"
          variant="link"
          className="text-accent "
        >
          GitHub
        </Button>
        <Button
          href="mailto:hola@castilloquesada.com"
          variant="link"
          className="text-accent"
        >
          Email
        </Button>
      </div>
    </main>
  );
}

/**
 * Notes:
 * - Swap the mailto for your real address at the domain.
 * - If tokens aren't filled yet, this renders in the placeholder
 *   grayscale — acceptable for a coming-soon, and it upgrades
 *   automatically the moment the token fill lands on main.
 * - No GSAP here on purpose: zero dependencies to break while
 *   the domain is propagating.
 */
