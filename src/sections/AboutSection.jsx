import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import SectionHeader from "../components/SectionHeader";
import { beyondCodingTabs } from "../data/portfolioData";

function PhotographyPanel({ items }) {
  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-3">
      {items.slice(0, 3).map((item) => (
        <div
          key={item.title}
          className="group overflow-hidden rounded-[1.4rem] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card"
        >
          <div
            className="relative aspect-[0.9] overflow-hidden rounded-[1.4rem] p-3 transition duration-300 group-hover:scale-[1.03]"
            style={{ backgroundImage: item.gradient }}
          >
            <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/78 p-3 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-stone-600">{item.caption}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function TravelPanel({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.slice(0, 2).map((item) => (
        <div
          key={item.title}
          className="rounded-[1.5rem] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card"
        >
          <div
            className="aspect-[1.25] rounded-[1.2rem]"
            style={{ backgroundImage: item.gradient }}
          />
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-moss">
            {item.title}
          </p>
          <p className="mt-2 text-sm leading-7 text-stone-600">{item.note}</p>
        </div>
      ))}
    </div>
  );
}

function DailyMomentsPanel({ items }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.slice(0, 2).map((item) => (
        <div
          key={item.title}
          className="rounded-[1.5rem] bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card"
        >
          <div
            className="aspect-[1.12] rounded-[1.2rem]"
            style={{ backgroundImage: item.gradient }}
          />
          <p className="mt-4 text-base font-semibold text-charcoal">
            {item.title}
          </p>
          <p className="mt-2 text-sm leading-7 text-stone-600">
            {item.reflection}
          </p>
        </div>
      ))}
    </div>
  );
}

function InspirationPanel({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <div
          key={item.title}
          className="group rounded-[1.4rem] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-card"
        >
          <div className="flex items-center gap-3">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                background:
                  index % 2 === 0 ? "rgba(122,139,122,0.95)" : "rgba(216,167,177,0.95)",
              }}
            />
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-charcoal">
              {item.title}
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-stone-600">{item.note}</p>
        </div>
      ))}
    </div>
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("photography");
  const activeContent = beyondCodingTabs.find((tab) => tab.id === activeTab);

  const renderTabContent = () => {
    if (!activeContent) {
      return null;
    }

    if (activeContent.id === "photography") {
      return <PhotographyPanel items={activeContent.items} />;
    }

    if (activeContent.id === "travel") {
      return <TravelPanel items={activeContent.items} />;
    }

    if (activeContent.id === "daily-moments") {
      return <DailyMomentsPanel items={activeContent.items} />;
    }

    return <InspirationPanel items={activeContent.items} />;
  };

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
              Outside of building products, I pay attention to moments, places,
              and visual details that shape how I think about clarity,
              atmosphere, and human-centered design.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {beyondCodingTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab.id
                      ? "bg-charcoal text-white"
                      : "bg-white/60 text-gray-500 hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="mt-6"
              >
                <p className="mb-5 max-w-2xl text-sm leading-7 text-stone-600">
                  {activeContent?.intro}
                </p>
                {renderTabContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
