import { Button } from "@/components/ui/Button";
import { StatusDot } from "@/components/ui/StatusDot";
import { navContent } from "@/config/siteContent";

/*
  Nav — top bar, rendered once from app/layout.tsx.

  Server component: it holds no state of its own. The only interactive
  parts are the links, and those are <Button variant="nav">, which is
  already a client component and owns the Lenis hash-scroll handling.

  Not sticky on purpose. Scroll behavior (hide-on-scroll, backdrop blur,
  a shrinking bar) is a motion decision and belongs to the GSAP pass.
*/
export default function Nav() {
  const { name, nickname, statusText, navLinks } = navContent;

  return (
    <header className="border-b border-line">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-gutter py-5 md:py-6"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-display text-nav-name font-semibold text-primary">
            {name}
          </span>
          {/* Dropped at 390 — the mobile comp shows name + status only. */}
          <span className="hidden font-mono text-label text-muted sm:inline">
            &ldquo;{nickname}&rdquo;
          </span>
        </div>

        <div className="flex items-center gap-8">
          {/* Hidden below md: three in-page anchors on a single-page site,
              and the hero CTAs already cover Work and Contact. A real
              mobile menu is a cycle-2 item. */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Button href={href} variant="nav">
                  {label}
                </Button>
              </li>
            ))}
          </ul>

          <span className="inline-flex items-center gap-2 font-mono text-label text-primary">
            <StatusDot size="sm" />
            {statusText}
          </span>
        </div>
      </nav>
    </header>
  );
}
