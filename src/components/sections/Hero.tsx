"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

import { Button } from "@/components/ui/Button";
import { heroContent } from "@/config/siteContent";
import { dur, ease, stagger } from "@/lib/motion";

gsap.registerPlugin(useGSAP, SplitText);

/*
  Hero — the page's load-in choreography.

  Eyebrow fades, then the headline reveals line-by-line from behind
  SplitText's masks, then the subhead and CTAs rise together. Runs once
  on load; nothing here is scroll-triggered.
*/
export default function Hero() {
  const scope = useRef<HTMLElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);

  const {
    eyebrow,
    headlineLine1,
    headlineLine2,
    subhead,
    ctaPrimary,
    ctaSecondary,
  } = heroContent;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      let split: SplitText | undefined;

      // Reduced motion: this block simply never runs, so the hero renders
      // in its natural, fully-visible state — no split, no tween, nothing
      // to undo. gsap.matchMedia also re-evaluates if the OS setting is
      // toggled mid-session, which a one-shot window.matchMedia check can't.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let hasPlayed = false;

        split = SplitText.create(headline.current, {
          type: "lines",
          // Required for the clip — `type: "lines"` alone does not mask.
          mask: "lines",
          // Re-splits on resize AND on webfont load, so line breaks never
          // go stale against fallback-font metrics.
          autoSplit: true,
          onSplit: (self) => {
            if (hasPlayed) {
              // A resize/font re-split rather than the initial one: land
              // the new lines at rest instead of replaying the entrance.
              gsap.set(self.lines, { yPercent: 0 });
              return;
            }
            hasPlayed = true;

            // Returned so GSAP reverts it before any subsequent re-split.
            return gsap
              .timeline()
              .from("[data-hero-fade]", {
                opacity: 0,
                duration: dur.base,
                ease: ease.out,
              })
              .from(self.lines, {
                yPercent: 110,
                duration: dur.slow,
                ease: ease.text,
                stagger: stagger.lines,
              })
              .from(
                "[data-hero-rise]",
                {
                  opacity: 0,
                  y: 24,
                  duration: dur.base,
                  ease: ease.out,
                },
                // ">" is the end of the headline tween *including* its
                // stagger, so this offset holds at any line count.
                `>${dur.fast}`
              );
          },
        });
      });

      return () => {
        // gsap.context tracks tweens and ScrollTriggers, not SplitText
        // instances — this revert has to be explicit or the line wrappers
        // survive teardown and accumulate.
        split?.revert();
        mm.revert();
      };
    },
    { scope }
  );

  return (
    <section
      ref={scope}
      id="hero"
      aria-label="Introduction"
      className="flex min-h-svh flex-col justify-center"
    >
      <div className="mx-auto w-full max-w-content px-gutter py-section-sm">
        <p
          data-hero-fade
          className="font-mono text-eyebrow uppercase text-accent"
        >
          {eyebrow}
        </p>

        {/*
          The two spans are line-break and color carriers only — SplitText
          produces the actual animated line elements (and their masks) from
          the rendered text, so nothing here is hand-wrapped.
        */}
        <h1
          ref={headline}
          className="mt-6 text-display font-display font-medium text-primary"
        >
          <span className="block">{headlineLine1}</span>
          <span className="block text-accent">{headlineLine2}</span>
        </h1>

        <p data-hero-rise className="mt-8 max-w-[52ch] text-lead text-secondary">
          {subhead}
        </p>

        <div data-hero-rise className="mt-10 flex flex-wrap gap-4">
          <Button href={ctaPrimary.href} variant="outline">
            {ctaPrimary.label}
          </Button>
          <Button href={ctaSecondary.href} variant="secondary">
            {ctaSecondary.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
