/**
 * app/page.tsx — coming-soon page for the `main` branch.
 *
 * Lives on production while the real site is built on `build/launch`.
 * Friday's launch replaces this via merge.
 */

import { InfoCard } from "@/components/ui/InfoCard";

export default function ComingSoon() {
  return (
    <InfoCard
      variant="coming-soon"
      name="Andrés Castillo"
      nickname="Cato"
      statusLabel="Available for work"
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
          href: "/andres_castillo_resume_2026.pdf",
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
