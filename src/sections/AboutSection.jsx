import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { galleryItems } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <AnimatedSection id="about">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Design-minded engineering for clear, user-centered products."
          description="I work at the intersection of interface design and frontend development, turning product ideas into intuitive, polished, and user-centered web experiences."
        />

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-stone-500 sm:gap-x-5">
          <span>4+ Projects</span>
          <span className="hidden text-stone-300 sm:inline">|</span>
          <span>1 Leadership Role</span>
          <span className="hidden text-stone-300 sm:inline">|</span>
          <span>2 Degrees</span>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Professional
            </p>
            <div className="mt-6 space-y-5 text-lg leading-8 text-stone-600">
              <p>
                My work sits at the intersection of design and engineering, where I focus on translating product ideas into intuitive, scalable web experiences.

              </p>
              <p>
                On the engineering side, I build modern React applications with clean architecture, responsive design, and maintainable component systems. On the design side, I think in user flows, hierarchy, and interaction details to ensure each interface feels intentional and cohesive.

              </p>
              <p>
                I care deeply about creating products that are not only functional, but also clear, consistent, and easy to trust.

              </p>
            </div>

            <div className="mt-8 space-y-3 border-t border-stone-200/80 pt-6">
              {[
                "Built 4+ full-stack and frontend-focused web applications",
                "Led a cross-functional team of 7 as a Scrum Master",
                "Developed data-driven applications handling 8,000+ records",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-stone-600 sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Beyond Coding
            </p>
            <p className="mt-6 text-base leading-8 text-stone-600">
              Outside of building web applications, I enjoy exploring new
              places, capturing everyday moments, and staying active. These
              experiences influence how I approach design, focusing on clarity,
              simplicity, and human-centered thinking.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Photography",
                "Travel",
                "Running",
                "Design Inspiration",
              ].map((item) => (
                <span key={item} className="tag-pill">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {galleryItems.map((item) => (
                <div key={item.title} className="overflow-hidden rounded-[1.35rem]">
                  <div
                    className="relative aspect-[0.82] rounded-[1.35rem] border border-white/60 p-3 shadow-sm"
                    style={{ backgroundImage: item.gradient }}
                  >
                    <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/70 p-3 backdrop-blur-lg">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
