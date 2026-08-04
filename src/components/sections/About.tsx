import SectionHeading from "@/components/ui/SectionHeading";
import { aboutContent } from "@/content/about";

export default function About() {
  const { intro, capabilities } = aboutContent;

  return (
    <section
      id="about"
      className="px-[var(--space-gutter)] py-[var(--space-section)]"
      aria-label="About and capabilities"
    >
      <SectionHeading>About</SectionHeading>

      <p className="mt-8 max-w-2xl text-[length:var(--text-h3)] leading-snug">
        {intro}
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
