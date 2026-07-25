"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { CaseStudy as CaseStudyType } from "@/lib/caseStudies";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/*
  Narrative case study block (NDA-safe format):
  role + problem + approach + stack + outcome, no client assets.
  Visual slot = abstract diagram or (for Vans) the LinkedIn embed.
*/
export default function CaseStudy({ study }: { study: CaseStudyType }) {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from("[data-reveal]", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: scope.current,
          start: "top 75%",
        },
      });
    },
    { scope }
  );

  return (
    <article ref={scope} className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      <div>
        <p
          data-reveal
          className="text-[length:var(--text-small)] uppercase tracking-[0.2em] text-[var(--color-text-muted)]"
        >
          {study.client} · {study.context}
        </p>

        <h3
          data-reveal
          className="mt-3 text-[length:var(--text-h2)] font-semibold leading-tight"
        >
          {study.title}
        </h3>

        <p
          data-reveal
          className="mt-2 text-[length:var(--text-small)] text-[var(--color-text-muted)]"
        >
          {study.role}
        </p>

        <p data-reveal className="mt-6 max-w-prose text-[length:var(--text-body)]">
          {study.narrative}
        </p>

        <ul data-reveal className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {study.stack.map((tech) => (
            <li
              key={tech}
              className="text-[length:var(--text-small)] text-[var(--color-text-muted)]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal>
        {study.embed && study.embed.src ? (
          <iframe
            src={study.embed.src}
            title={study.embed.title}
            className="w-full border border-[var(--color-line)]"
            style={{ aspectRatio: study.embed.aspectRatio }}
            allowFullScreen
            loading="lazy"
          />
        ) : (
          /* Abstract visual slot: architecture diagram / illustration.
             Replace this placeholder with an <Image> or inline SVG. */
          <div
            className="flex w-full items-center justify-center border border-[var(--color-line)] bg-[var(--color-surface)] text-[length:var(--text-small)] text-[var(--color-text-muted)]"
            style={{ aspectRatio: "16 / 10" }}
            role="img"
            aria-label={`Abstract visual for ${study.title}`}
          >
            Visual slot — diagram / illustration
          </div>
        )}
      </div>
    </article>
  );
}
