"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { Button } from "@/components/ui/Button";
import { heroContent } from "@/content/hero";
import { dur, ease, stagger, triggerStart } from "@/lib/motion";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

/*
  Hero — the page's load-in choreography.

  Eyebrow fades, then the headline reveals line-by-line from behind
  SplitText's masks, then the subhead rises, then the CTAs rise once
  the subhead has landed. Gated on the hero genuinely, visually
  entering the viewport (top crossing 80% down), so it fires exactly
  once per session.

  This is deliberately NOT plain ScrollTrigger `{ once: true }`: that
  flag fires onEnter immediately whenever the trigger's start position
  has already been scrolled past at creation, with no upper bound —
  it can't tell "hero is genuinely visible right now" apart from
  "scrolled 2000px past it already" (confirmed against the installed
  ScrollTrigger source, ScrollTrigger.js's own refresh() comment:
  "ensures that... callbacks are triggered"). That matters because
  browsers restore scroll position on reload by default: reloading
  deep in the page would otherwise silently auto-play the entrance
  off-screen. So mount does one synchronous getBoundingClientRect()
  check — not an ongoing observer — to decide whether the hero starts
  on-screen; if not, the ScrollTrigger's own first (synthetic) fire is
  ignored and "once, ever" is instead self-managed via a flag + an
  explicit .kill(), so the trigger survives to catch the real crossing
  whenever the user actually scrolls the hero into view.
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
      let tl: gsap.core.Timeline | undefined;

      // Reduced motion: this block simply never runs, so the hero renders
      // in its natural, fully-visible state — no split, no tween, no
      // ScrollTrigger. gsap.matchMedia also re-evaluates if the OS setting
      // is toggled mid-session, which a one-shot window.matchMedia check
      // can't.
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let hasEntered = false;

        const buildTimeline = (lines: Element[]) =>
          gsap
            .timeline({ paused: true })
            .from("[data-hero-fade]", {
              opacity: 0,
              duration: dur.base,
              ease: ease.out,
            })
            .from(lines, {
              yPercent: 110,
              duration: dur.slow,
              ease: ease.text,
              stagger: stagger.lines,
            })
            .from(
              "[data-hero-subhead]",
              {
                opacity: 0,
                y: 24,
                duration: dur.base,
                ease: ease.out,
              },
              // ">" is the end of the headline tween *including* its
              // stagger, so this offset holds at any line count.
              `>${dur.fast}`
            )
            // No position argument: defaults to right after the subhead
            // tween finishes, so the CTAs rise in once the subhead has
            // fully landed rather than alongside it.
            .from("[data-hero-cta]", {
              opacity: 0,
              y: 24,
              duration: dur.base,
              ease: ease.out,
            });

        split = SplitText.create(headline.current, {
          type: "lines",
          // Required for the clip — `type: "lines"` alone does not mask.
          mask: "lines",
          // Re-splits on resize AND on webfont load, so line breaks never
          // go stale against fallback-font metrics. Can fire again before
          // the ScrollTrigger below has ever entered (e.g. a resize while
          // the hero is still below the fold).
          autoSplit: true,
          onSplit: (self) => {
            if (hasEntered) {
              // Already played: a later resize/font re-split lands the
              // new lines at rest instead of replaying the entrance.
              gsap.set(self.lines, { yPercent: 0 });
              return;
            }

            // Not yet played (including the very first split): (re)build
            // a paused timeline against the current lines. Building it
            // paused — rather than letting it autoplay — means its
            // .from() calls still apply their *starting* values
            // immediately (eyebrow hidden, lines offset, subhead/CTA
            // offset), so nothing flashes visible before the
            // ScrollTrigger below actually plays it. Returned so GSAP
            // reverts it before any subsequent re-split.
            tl = buildTimeline(self.lines);
            return tl;
          },
        });

        // A trigger that starts already past its threshold fires onEnter
        // once, immediately, regardless of how far past — so a reload
        // that restores scroll position deep in the page would otherwise
        // auto-play the entrance off-screen. Checked once, synchronously,
        // not tracked on an ongoing basis.
        const rect = scope.current!.getBoundingClientRect();
        const startsOnScreen = rect.bottom > 0 && rect.top < window.innerHeight;

        let skipFirstFire = !startsOnScreen;
        let firedOnce = false;

        // ScrollTrigger.create() can invoke onEnter synchronously, within
        // its own call, if the hero starts already past the threshold —
        // before any outer `const trigger = ...` assignment could finish.
        // Killing via the `self` GSAP passes into the callback (rather
        // than closing over an outer variable) sidesteps that entirely.
        function onCross(self: ScrollTrigger) {
          if (skipFirstFire) {
            // This IS that synthetic fire — the hero was off-screen at
            // mount, so this call reflects "already past," not a real
            // scroll. Ignore it and keep listening.
            skipFirstFire = false;
            return;
          }
          if (firedOnce) return;
          firedOnce = true;

          hasEntered = true;
          tl?.play();
          self.kill();
        }

        ScrollTrigger.create({
          trigger: scope.current,
          start: triggerStart,
          // Not `once: true`: that flag kills the trigger on the very
          // first fire unconditionally, including the synthetic one this
          // skips above — which would leave nothing listening for the
          // later, genuine crossing. "Once, ever" is self-managed via
          // firedOnce + the explicit .kill() instead.
          onEnter: onCross,
          onEnterBack: onCross,
        });
      });

      return () => {
        // Context auto-tracks the first split's synchronously-created
        // timeline and the ScrollTrigger, but a later resize-triggered
        // rebuild happens async (outside that tracked call), so both
        // stay explicit here rather than relying on context.revert()
        // alone. revert() (not kill()) on the timeline matters if the
        // component unmounts before the ScrollTrigger ever fires: it
        // restores the inline styles .from()'s immediate-render already
        // applied to the non-split elements, rather than leaving them
        // stuck mid-entrance.
        split?.revert();
        tl?.revert();
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
          <span className="block">{headlineLine1}</span>{" "}
          <span className="block text-accent">{headlineLine2}</span>
        </h1>

        <p data-hero-subhead className="mt-8 max-w-[52ch] text-lead text-secondary">
          {subhead}
        </p>

        <div data-hero-cta className="mt-10 flex flex-wrap gap-4">
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
