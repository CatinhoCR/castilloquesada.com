export interface CaseStudy {
  id: string;              // "vans" | "walmart-connect" | "uniwatch"
  client: string;          // "Vans" — used in tag/label, not as image/logo (NDA)
  title: string;           // "3D Shoe Customizer"
  role: string;            // "Senior Frontend Engineer, 3 years"
  problem: string;         // 1-2 sentences, from your drafted copy
  approach: string;        // 1-2 sentences
  outcome: string;         // the quantified win — rendered at --text-lead, accent color
  stack: string[];         // ["Vue", "Three.js", "WebGL"]
}

export const caseStudies: CaseStudy[] = [
  {
    id: "vans",
    client: "Global Footwear Brand",
    title: "3D Shoe Customizer",
    role: "Senior Frontend Engineer, 3 years",
    problem:
      "The client needed a real-time 3D configurator that let millions of users personalize shoes with custom artwork — accurately projected onto curved geometry, at production scale.",
    approach:
      "Built the customizer's image library and randomizer features in Vue + Three.js, including the warping and UV-mapping logic to project 2D artwork onto 3D shoe geometry. Hardened the selection and real-time preview layer, resolving hundreds of defects across customization state and model previsualization.",
    outcome:
      "Award-winning, production configurator delivering real-time photorealistic personalization to millions of users.",
    stack: ["Vue", "Three.js", "WebGL"],
  },
  {
    id: "walmart-connect",
    client: "Multi-Team Retail Ad Platform",
    title: "Design System",
    role: "Technology Architect, Design System Lead",
    problem:
      "A 3-5 engineer delivery team was rebuilding UI from scratch on every feature, with no shared source of truth across the retail-media platform.",
    approach:
      "Sole owner of the design system: architected and shipped the SCSS token and component library the full team built from, with themeable partials so new components composed from existing tokens instead of custom styling.",
    outcome:
      "Cut delivery of a new component from 3-5 days to 1.",
    stack: ["SCSS", "Design Tokens", "Adobe Experience Manager"],
  },
  {
    id: "uniwatch",
    client: "Uniwatch",
    title: "AI-Powered IP Vigilance Platform",
    role: "Sole Technical Lead",
    problem:
      "An undocumented, single-maintainer production platform — monitoring trademark filings across Latin America — was a single point of failure blocking the business from onboarding additional engineers.",
    approach:
      "Took ownership of the full stack: an Express.js BFF, a NestJS + PostgreSQL REST API, and a dedicated TensorFlow execution server, stabilized across three AWS EC2 instances. Completed a full architecture audit and authored the platform's first technical documentation.",
    outcome:
      "Eliminated the single-point-of-failure risk; monitoring a 2M+ record trademark corpus nightly.",
    stack: ["NestJS", "PostgreSQL", "TensorFlow", "AWS"],
  },
];
