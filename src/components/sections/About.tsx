import SectionHeading from "@/components/ui/SectionHeading";

const capabilities = [
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
];

export default function About() {
  return (
    <section
      id="about"
      className="px-[var(--space-gutter)] py-[var(--space-section)]"
      aria-label="About and capabilities"
    >
      <SectionHeading>About</SectionHeading>

      <p className="mt-8 max-w-2xl text-[length:var(--text-h3)] leading-snug">
        I build the layer where design meets engineering — product
        experiences with motion and depth, on architecture that scales.
      </p>

      <div className="mt-16 grid gap-12 sm:grid-cols-3">
        {capabilities.map(({ area, skills }) => (
          <div key={area}>
            <h3 className="text-[length:var(--text-small)] uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              {area}
            </h3>
            <ul className="mt-4 space-y-2 text-[length:var(--text-body)]">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
