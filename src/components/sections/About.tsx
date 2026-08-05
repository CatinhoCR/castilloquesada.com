import { aboutContent } from "@/content/about";

export default function About() {
  const { eyebrow, headline, intro, frameworksLabel, frameworks, pairings } =
    aboutContent;

  return (
    <section
      id="about"
      className="px-gutter py-section"
      aria-label="About and capabilities"
    >
      <p className="font-mono text-eyebrow uppercase text-secondary">{eyebrow}</p>

      <h2 className="mt-6 max-w-[34ch] text-lead tracking-[-0.01em] text-primary">
        {headline}
      </h2>

      <p className="mt-6 max-w-[56ch] text-body text-secondary">{intro}</p>

      <div className="mt-12 border-t border-line pt-8">
        <p className="font-mono text-eyebrow uppercase tracking-[0.16em] text-secondary">
          {frameworksLabel}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {frameworks.map((framework) => (
            <span
              key={framework}
              className="rounded-sm border border-line-strong px-2.5 py-1.25 font-mono text-label text-secondary"
            >
              {framework}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-3 border-t border-line pt-8 sm:grid-cols-2">
        {pairings.map(({ concept, tool }) => (
          <div key={concept} className="flex items-baseline justify-between gap-4 text-small">
            <span className="text-primary">{concept}</span>
            <span className="font-mono text-(length:--text-eyebrow) text-secondary">
              {tool}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
