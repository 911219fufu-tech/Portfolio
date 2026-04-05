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
          title="Computer science foundation with a focus on web systems and human-centered design."
          description="Building a strong technical base through engineering and interaction-focused coursework."
        />

        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8">
          {educationItems.map((item) => (
            <EducationCard key={item.school} item={item} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
