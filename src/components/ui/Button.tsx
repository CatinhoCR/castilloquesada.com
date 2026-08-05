"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, MouseEvent } from "react";
import gsap from "gsap";
import { useLenis } from "@/components/providers/SmoothScroll";
import { dur, ease } from "@/lib/motion";

// Layout + reset only. Typography lives on each variant, because the
// chrome'd buttons and the text-link variants want different families
// and casing — a shared type declaration up here would force one of
// them to undo it.
//
// `no-underline` is load-bearing: theme.css sets a global
// `@layer base { a { text-decoration: underline } }`, and every href'd
// Button renders an <a>.
const base =
  "inline-flex items-center justify-center no-underline transition-colors duration-[var(--duration-fast)]";

// Rounded-rect, not pill — shared by the three chrome'd variants.
const shape = "rounded-card px-6 py-3 font-sans text-small";

const variants = {
  // Solid accent fill.
  main: `${shape} bg-accent text-accent-ink hover:bg-accent-hover`,
  // Accent outline on transparent — the design's primary CTA treatment.
  outline: `${shape} border border-accent text-accent hover:bg-accent-subtle`,
  // Neutral outline on transparent.
  secondary: `${shape} border border-line-strong text-primary hover:border-accent hover:text-accent`,
  // Plain text link, no button chrome — pairs with the hover-underline
  // utilities (styles/utilities.css) for anchor-style CTAs.
  link: "font-mono text-small uppercase tracking-[0.12em] text-primary hover-underline hover-underline-right",
};

type Variant = keyof typeof variants;

export function Button({
  variant = "main",
  href,
  className = "",
  onClick,
  ...props
}: { variant?: Variant; href?: string; className?: string } & (
  | ButtonHTMLAttributes<HTMLButtonElement>
  | AnchorHTMLAttributes<HTMLAnchorElement>
)) {
  const lenis = useLenis();
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      // In-page anchors get a GSAP-eased Lenis scroll instead of the
      // instant native jump; falls through untouched when Lenis is off
      // (prefers-reduced-motion) or the href points off-page.
      if (href.startsWith("#") && lenis) {
        e.preventDefault();
        lenis.scrollTo(href, {
          duration: dur.scroll,
          easing: gsap.parseEase(ease.out),
        });
      }
      (onClick as ((e: MouseEvent<HTMLAnchorElement>) => void) | undefined)?.(
        e
      );
    };
    return (
      <Link
        href={href}
        className={classes}
        onClick={handleClick}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }

  return (
    <button
      className={classes}
      onClick={
        onClick as ((e: MouseEvent<HTMLButtonElement>) => void) | undefined
      }
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    />
  );
}
