/**
 * content/about.ts — copy for components/sections/About.tsx.
 */

export interface Capability {
  area: string;
  skills: string[];
}

export interface AboutContent {
  intro: string;
  capabilities: Capability[];
}

export const aboutContent: AboutContent = {
  intro:
    "I build the layer where design meets engineering — product experiences with motion and depth, on architecture that scales.",
  capabilities: [
    {
      area: "Creative",
      skills: ["Three.js / WebGL", "GSAP / ScrollTrigger", "Interactive 3D"],
    },
    {
      area: "Architecture",
      skills: [
        "Design systems",
        "React / Next.js",
        "Vue / Nuxt",
        "TypeScript",
        "SCSS / Tailwind",
      ],
    },
    {
      area: "Full-stack",
      skills: ["NestJS / Node.js", "PostgreSQL", "REST / GraphQL", "AWS / Docker"],
    },
  ],
};
