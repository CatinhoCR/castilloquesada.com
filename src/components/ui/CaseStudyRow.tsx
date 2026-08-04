"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { CaseStudy } from "@/content/caseStudies";
import { dur, ease, stagger, triggerStart } from "@/lib/motion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface CaseStudyRowProps {
  study: CaseStudy;
  index: number;
  isFirst?: boolean;
  isLast?: boolean;
  mark: ReactNode;
}

export default function CaseStudyRow({
  study,
  index,
  isFirst = false,
  isLast = false,
  mark,
}: CaseStudyRowProps) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: scope.current,
              start: triggerStart,
              once: true,
            },
          })
          .from("[data-row-fade]", {
            opacity: 0,
            duration: dur.base,
            ease: ease.out,
          })
          .from("[data-row-title]", {
            y: 24,
            opacity: 0,
            duration: dur.base,
            ease: ease.out,
          })
          .from("[data-row-stagger]", {
            y: 24,
            opacity: 0,
            duration: dur.base,
            ease: ease.out,
            stagger: stagger.cards,
          });
      });

      return () => mm.revert();
    },
    { scope }
  );

  return (
    <article
      ref={scope}
      className={`grid grid-cols-1 items-center gap-3 py-9 lg:grid-cols-[120px_1fr_300px] lg:gap-10 lg:py-15 ${
        isFirst ? "" : "border-t border-line"
      } ${isLast ? "border-b" : ""}`}
      aria-label={study.title}
    >
      <span
        data-row-fade
        className="font-display text-index-numeral text-transparent [-webkit-text-stroke:1px_var(--color-line-strong)]"
      >
        {String(index).padStart(2, "0")}
      </span>

      <div>
        <p
          data-row-fade
          className="font-mono text-eyebrow uppercase tracking-[0.16em] text-muted"
        >
          {study.client} · {study.role}
        </p>

        <h3
          data-row-title
          className="mt-3 text-h3 font-display font-medium tracking-[-0.02em] text-primary"
        >
          {study.title}
        </h3>

        <p
          data-row-stagger
          className="mt-4 max-w-(--container-prose) text-body text-secondary"
        >
          {study.problem} {study.approach}
        </p>

        <p
          data-row-stagger
          className="mt-5 max-w-[24ch] text-lead font-display font-medium tracking-[-0.01em] text-accent"
        >
          {study.outcome}
        </p>

        <div data-row-stagger className="mt-6 flex flex-wrap gap-2">
          {study.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-line-strong px-2.5 py-1.25 font-mono text-label text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden aspect-square w-[clamp(160px,16.83vw-12px,230px)] justify-self-end lg:block">
        {mark}
      </div>
    </article>
  );
}
