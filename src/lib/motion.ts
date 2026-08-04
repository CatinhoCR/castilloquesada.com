/**
 * lib/motion.ts — motion tokens for GSAP
 *
 * Single source of truth for durations, eases, and stagger values
 * used in GSAP timelines. The CSS mirror lives in theme.css
 * (--ease-*, --duration-*) for plain hover transitions; if you
 * change a value here, change it there too.
 *
 * Why this file exists: without it, every component invents its own
 * duration: 0.5 and the site's motion feels arbitrary. With it,
 * everything shares one rhythm — which is exactly what reads as
 * "senior" to another animation-literate reviewer.
 */

export const dur = {
  fast: 0.2,   // micro-interactions, hovers handled in JS
  base: 0.4,   // standard element transitions
  slow: 0.8,   // hero reveals, section entrances
  scroll: 2,   // Large scroll animations
  crawl: 1.4,  // large clip-path / mask reveals
} as const;

export const ease = {
  // Primary ease for entrances — matches --ease-out-expo in CSS
  out: "expo.out",
  // Symmetric moves (pinned scrub sections, position swaps)
  inOut: "power3.inOut",
  // Text reveal character/line stagger feel
  text: "power4.out",
} as const;

export const stagger = {
  lines: 0.09,   // hero headline line-by-line reveal
  chars: 0.02,   // only if the design calls for char-level splits
  cards: 0.12,   // case study card cascade on scroll
} as const;

/**
 * Default ScrollTrigger start position for section reveals.
 * One constant so every section animates at the same scroll depth.
 */
export const triggerStart = "top 80%";

/**
 * Usage:
 *
 *   import { dur, ease, stagger, triggerStart } from "@/lib/motion";
 *
 *   gsap.from(lines, {
 *     yPercent: 110,
 *     duration: dur.slow,
 *     ease: ease.text,
 *     stagger: stagger.lines,
 *   });
 */
