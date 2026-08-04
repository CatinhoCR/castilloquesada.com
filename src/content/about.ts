/**
 * content/about.ts — copy for components/sections/About.tsx.
 */

export interface ConceptPairing {
  concept: string;
  tool: string;
}

export interface AboutContent {
  eyebrow: string;
  headline: string;
  intro: string;
  frameworksLabel: string;
  frameworks: string[];
  pairings: ConceptPairing[];
}

export const aboutContent: AboutContent = {
  eyebrow: "About",
  headline:
    "I'm a creative technologist who lives where interface design meets real engineering.",
  intro:
    "Thirteen years building production frontends and the systems behind them — interactive 3D, motion, design systems, and full-stack architecture. I care about work that's fast, considered, and actually ships.",
  frameworksLabel: "Core frameworks",
  frameworks: ["React", "Next.js", "Vue", "Angular", "TypeScript"],
  pairings: [
    { concept: "Interactive 3D & WebGL", tool: "Three.js" },
    { concept: "Motion & interaction", tool: "GSAP" },
    { concept: "Design systems", tool: "SCSS / Tailwind Tokens" },
    { concept: "Frontend architecture", tool: "React / Next" },
    { concept: "Backend & APIs", tool: "NodeJS / NestJS" },
    { concept: "Cloud & infra", tool: "AWS / Docker" },
    { concept: "Testing & quality", tool: "Playwright" },
  ],
};
