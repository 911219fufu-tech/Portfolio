import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { experienceItems } from "../data/portfolioData";

export default function ExperienceSection() {
  return (
    <AnimatedSection id="experience">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Real-world work that shaped how I think about users, workflows, and product decisions."
          description="These experiences are smaller in scale than a traditional software role, but they gave me direct exposure to customer needs, operational complexity, and fast decision-making in live environments."
        />

        <div className="mt-12 grid gap-6">
          {experienceItems.map((item) => (
            <article key={item.role} className="section-card p-7 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-600">
                      {item.type}
                    </span>
                    <span className="text-sm font-medium text-moss">
                      {item.timeline}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-charcoal">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-base font-medium text-stone-600">
                    {item.organization}
                  </p>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600">
                    {item.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-8 grid gap-4 lg:grid-cols-3">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-[1.75rem] border border-stone-200/80 bg-white/80 p-5 text-sm leading-7 text-stone-600 shadow-sm"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
