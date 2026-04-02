import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { galleryItems } from "../data/portfolioData";

export default function AboutSection() {
  return (
    <AnimatedSection id="about">
      <div className="section-shell">
        <SectionHeader
          eyebrow="About"
          title="Design-minded engineering with product clarity."
          description="I work at the intersection of interface design and frontend development, translating product ideas into experiences that feel intuitive, polished, and useful."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="section-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Professional
            </p>
            <div className="mt-6 space-y-5 text-lg leading-8 text-stone-600">
              <p>
                My work focuses on bridging design and engineering. I care about
                how interfaces feel, how systems scale, and how product choices
                shape the experience for the person using them.
              </p>
              <p>
                On the engineering side, I build modern React interfaces with
                strong structure, responsive behavior, and maintainable
                components. On the design side, I think in flows, hierarchy, and
                clarity so the final product feels intentional from first glance
                to final interaction.
              </p>
              <p>
                That combination helps me build user-centered products that are
                not only functional, but calm, consistent, and easier to trust.
              </p>
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
