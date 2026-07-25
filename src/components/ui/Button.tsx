"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, MouseEvent } from "react";
import gsap from "gsap";
import { useLenis } from "@/components/providers/SmoothScroll";
import { dur, ease } from "@/lib/motion";

const base =
  "inline-flex items-center justify-center font-mono text-[length:var(--text-small)] uppercase tracking-[0.12em] transition-colors duration-[var(--duration-fast)] px-6 py-3 rounded-[var(--radius-pill)]";

const variants = {
  main: "bg-[var(--color-accent)] text-[var(--color-accent-ink)] hover:bg-[var(--color-accent-hover)]",
  secondary:
    "border border-[var(--color-line-strong)] text-[var(--color-primary)] hover:border-[var(--color-accent)]",
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
