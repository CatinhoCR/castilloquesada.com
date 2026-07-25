"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "@/styles/Hero.module.scss";
import { Button } from "@/components/ui/Button";

gsap.registerPlugin(useGSAP);

/*
  Hero — carries the most ambitious animation on the page.
  This stub ships a minimal load-in so the GSAP pipeline is proven
  end-to-end on day one; the real choreography lands in the Sunday
  GSAP block, guided by the wireframes.
*/
export default function Hero() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-hero-line]", {
        yPercent: 110,
        opacity: 0,
        duration: 1,
        ease: "expo.out",
        stagger: 0.08,
        delay: 0.15,
      });
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      className={`${styles.hero} flex min-h-svh flex-col justify-center px-[var(--space-gutter)]`}
      aria-label="Introduction"
    >
      <p
        data-hero-line
        className="mb-4 text-[length:var(--text-small)] uppercase tracking-[0.2em] text-accent"
      >
        Creative Technologist
      </p>

      <h1 className="text-[length:var(--text-display)] font-display font-semibold leading-[0.95] tracking-tight">
        {/* Each line wrapped for staggered reveal */}
        <span className="block overflow-hidden">
          <span data-hero-line className="block">
            Andrés
          </span>
        </span>
        <span className="block overflow-hidden">
          <span data-hero-line className="block">
            Castillo Quesada
          </span>
        </span>
      </h1>

      <p
        data-hero-line
        className="mt-8 max-w-xl text-[length:var(--text-body)] text-[var(--color-text-muted)]"
      >
        Senior Frontend Engineer &amp; Architect — 13 years bridging design
        and engineering through interactive 3D, animation, and scalable
        systems.
      </p>
      <Button href="#work" variant="secondary">View selected work →</Button>
      <Button href="#contact">Get in touch</Button>
      {/* <a
        data-hero-line
        href="#contact"
        className="mt-10 inline-block w-fit border-b border-[var(--color-text)] pb-1 text-[length:var(--text-body)] transition-opacity hover:opacity-60"
      >
        Get in touch
      </a> */}
    </section>
  );
}
