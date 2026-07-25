/**
 * lib/fonts.ts — font loading via next/font
 * Pairing from the design pass: Space Grotesk (display) /
 * Hanken Grotesk (body) / Space Mono (labels, tags, meta).
 * All Google Fonts, self-hosted automatically by next/font.
 */

import { Space_Grotesk, Hanken_Grotesk, Space_Mono } from "next/font/google";

export const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],   // 500 is the primary heading weight; add "700" only if a section demands it
  variable: "--font-display",
  display: "swap",
});

export const bodyFont = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const monoFont = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-face",
  display: "swap",
});

/**
 * app/layout.tsx:
 *
 *   import { displayFont, bodyFont, monoFont } from "@/lib/fonts";
 *
 *   <html
 *     lang="en"
 *     className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
 *   >
 */
