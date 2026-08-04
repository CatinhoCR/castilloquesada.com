/**
 * app/coming-soon.tsx — reference copy of the coming-soon page that
 * shipped to `main`.
 *
 * NOT a route: App Router only serves `page.tsx`. Kept here so the
 * launch copy and link set stay recoverable while the real site is
 * built out. It is still type-checked, so it moves with InfoCard's API.
 *
 * The name / nickname / status row it used to pass now lives in
 * components/layout/Nav.tsx, rendered site-wide from app/layout.tsx.
 */

import { InfoCard } from "@/components/ui/InfoCard";

export default function ComingSoon() {
  return (
    <InfoCard
      variant="coming-soon"
      eyebrow="New site — launching soon"
      headline={
        <>
          Full portfolio
          <br />
          <span className="text-accent">launching this week.</span>
        </>
      }
      body="Senior Frontend Engineer & Creative Technologist. 13 years — Three.js, GSAP, design systems, full-stack architecture. In the meantime, here's where to find the work:"
      links={[
        {
          label: "Download Resume",
          href: "/andres_castillo_resume.pdf",
          download: true,
        },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/catinhocr",
          external: true,
        },
        {
          label: "GitHub",
          href: "https://github.com/CatinhoCR",
          external: true,
        },
        {
          label: "andres@castilloquesada.com",
          href: "mailto:andres@castilloquesada.com",
        }
      ]}
    />
  );
}

/**
 * Notes:
 * - No GSAP here on purpose: zero dependencies to break while
 *   the domain is propagating.
 */
