import { Button } from "@/components/ui/Button";
import { StatusDot } from "@/components/ui/StatusDot";
import { GithubIcon } from "@/components/ui/icons/GithubIcon";
import { navContent } from "@/content/nav";

/*
  Nav — top bar, rendered once from app/layout.tsx.

  Server component: it holds no state of its own. The only interactive
  parts are the links, and those are <Button variant="link">, which is
  already a client component and owns the Lenis hash-scroll handling.

  Sticky (not fixed) at md+ only: sticky keeps the header's box in
  normal document flow, so it reserves its own height and there's no
  layout jump on load switching a fixed element out of flow — fixed
  would need a manually-sized spacer to avoid that. Mobile keeps the
  original static, simplified (name + status only) treatment.
*/
export default function Nav() {
  const { name, nickname, statusText, navLinks, githubUrl } = navContent;

  return (
    <header className="border-b border-line md:sticky md:top-0 md:z-50 md:bg-base/80 md:backdrop-blur-sm">
      <nav
        aria-label="Main"
        className="mx-auto flex w-full max-w-content items-center justify-between gap-6 px-gutter py-5 md:py-6"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-display text-nav-name font-semibold text-primary">
            {name}
          </span>
          {/* Dropped at 390 — the mobile comp shows name + status only. */}
          <span className="hidden font-mono text-label text-secondary sm:inline">
            &ldquo;{nickname}&rdquo;
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* Hidden below md: three in-page anchors on a single-page site,
              and the hero CTAs already cover Work and Contact. A real
              mobile menu is a cycle-2 item. */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Button href={href} variant="link">
                  {label}
                </Button>
              </li>
            ))}
          </ul>

          {/* Icon-only, so it carries its own accessible name rather
              than relying on visible text. Hidden below md alongside
              the rest of the desktop nav — first thing to go if space
              is tight, same as the in-page links above. */}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View this website's repository on GitHub"
            aria-label="View this website's repository on GitHub"
            className="hidden text-secondary transition-colors duration-(--duration-fast) hover:text-accent md:inline-flex"
          >
            <GithubIcon size={16} />
          </a>

          <span className="inline-flex items-center gap-2 font-mono text-label text-primary">
            <StatusDot size="sm" />
            {statusText}
          </span>
        </div>
      </nav>
    </header>
  );
}
