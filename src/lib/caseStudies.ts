/*
  Content as data. Narrative wording lives here so NDA-driven revisions
  (post ex-colleague feedback) are a data edit, not a component edit.

  Rules for this file (agency/NDA constraints):
  - Experience narratives, not project showcases.
  - No client assets, logos, or screenshots. Visuals are abstract
    (architecture diagrams / illustrations you author).
  - `embed` is an optional iframe URL (e.g. LinkedIn post embed).
*/

export type CaseStudy = {
  slug: string;
  client: string;
  context: string; // e.g. "via Publicis Global Delivery"
  title: string;
  role: string;
  narrative: string; // ~150 words: problem → approach → outcome
  stack: string[];
  embed?: {
    src: string;
    title: string;
    aspectRatio: string; // e.g. "16 / 9"
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "vans-3d-customizer",
    client: "Vans",
    context: "via agency engagement",
    title: "Real-time 3D shoe customizer",
    role: "Frontend Engineer — 3D & interaction",
    narrative:
      "PLACEHOLDER — replace with your ~150-word narrative from Friday night's content session: the problem (letting shoppers design their own pair in the browser), your approach (Vue app driving a Three.js scene: materials, texture swaps, camera choreography, performance on mid-range devices), and the outcome. No client imagery — the embedded team video and your own abstract diagram carry the visual.",
    stack: ["Vue", "Three.js", "WebGL", "GSAP"],
    embed: {
      // Paste the LinkedIn "Embed this post" iframe src here.
      src: "",
      title: "Vans 3D Customizer — team video",
      aspectRatio: "16 / 9",
    },
  },
  {
    slug: "walmart-connect-design-system",
    client: "Walmart Connect",
    context: "via Publicis Global Delivery",
    title: "Design system & SCSS component library",
    role: "Senior Frontend Engineer — design system owner",
    narrative:
      "PLACEHOLDER — narrative: the problem (consistency and velocity across teams shipping on one platform), your approach (token architecture, SCSS component library, Storybook documentation, contribution model), and the outcome. Visual slot: an architecture diagram of the token/component hierarchy you authored — your thinking, not their assets.",
    stack: ["SCSS", "Design Tokens", "Storybook", "Figma"],
  },
  {
    slug: "uniwatch",
    client: "Uniwatch",
    context: "AI-powered IP vigilance SaaS",
    title: "Sole technical lead across the full stack",
    role: "Technical Lead — frontend, APIs, infrastructure",
    narrative:
      "PLACEHOLDER — narrative: inheriting a production system as the only engineer, stabilizing it, owning frontend through NestJS/Express APIs, PostgreSQL, AWS, and the Python/TensorFlow ML pipeline integration; the architecture audit and documentation eliminating single-point-of-failure risk. Visual slot: system architecture diagram.",
    stack: [
      "React",
      "NestJS",
      "PostgreSQL",
      "AWS",
      "Python / TensorFlow",
    ],
  },
];
