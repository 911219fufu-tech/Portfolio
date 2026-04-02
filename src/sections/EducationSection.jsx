import AnimatedSection from "../components/AnimatedSection";
import EducationCard from "../components/EducationCard";
import SectionHeader from "../components/SectionHeader";
import { educationItems } from "../data/portfolioData";

export default function EducationSection() {
  return (
    <AnimatedSection id="education">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Education"
          title="Academic grounding in computer science and human-centered systems."
          description="A technical foundation shaped by both engineering rigor and interaction-focused coursework."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {educationItems.map((item) => (
            <EducationCard key={item.school} item={item} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
