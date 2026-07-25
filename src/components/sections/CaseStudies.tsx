import { caseStudies } from "@/lib/caseStudies";
import CaseStudy from "@/components/sections/CaseStudy";
import SectionHeading from "@/components/ui/SectionHeading";

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="px-[var(--space-gutter)] py-[var(--space-section)]"
      aria-label="Selected work"
    >
      <SectionHeading>Selected work</SectionHeading>

      <div className="mt-16 space-y-[var(--space-section)]">
        {caseStudies.map((study) => (
          <CaseStudy key={study.slug} study={study} />
        ))}
      </div>
    </section>
  );
}
