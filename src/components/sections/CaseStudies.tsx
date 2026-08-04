import CaseStudyRow from "@/components/ui/CaseStudyRow";
import { VansMark } from "@/components/ui/marks/VansMark";
import { WalmartMark } from "@/components/ui/marks/WalmartMark";
import { UniwatchMark } from "@/components/ui/marks/UniwatchMark";
import { caseStudies } from "@/content/caseStudies";

const marks = {
  vans: <VansMark />,
  "walmart-connect": <WalmartMark />,
  uniwatch: <UniwatchMark />,
} as const;

export default function CaseStudies() {
  return (
    <section
      id="work"
      className="px-gutter py-section"
      aria-label="Selected work"
    >
      <h2 className="text-h2 font-display font-medium tracking-[-0.02em] text-primary">
        Selected work
      </h2>

      <div className="mt-8">
        {caseStudies.map((study, i) => (
          <CaseStudyRow
            key={study.id}
            study={study}
            index={i + 1}
            isFirst={i === 0}
            isLast={i === caseStudies.length - 1}
            mark={marks[study.id as keyof typeof marks]}
          />
        ))}
      </div>
    </section>
  );
}
