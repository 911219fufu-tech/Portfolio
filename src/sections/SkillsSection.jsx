import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { skillGroups } from "../data/portfolioData";

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Frontend-first, with product and design depth."
          description="A toolkit centered on building polished interfaces, collaborating across disciplines, and shipping work that stays maintainable."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="section-card p-7 sm:p-8">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-charcoal">
                  {group.title}
                </h3>
                <span className="text-sm font-medium text-moss">
                  {group.emphasis}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span key={item} className="tag-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
