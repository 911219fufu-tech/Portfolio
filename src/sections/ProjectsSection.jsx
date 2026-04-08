import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import ProjectCard from "../components/ProjectCard";
import SectionHeader from "../components/SectionHeader";
import { projects } from "../data/portfolioData";

const filters = ["All", "Frontend", "UX/UI", "Fullstack"];

function matchesDiscipline(projectDiscipline, activeFilter) {
  if (activeFilter === "All") return true;

  return projectDiscipline
    .split("+")
    .map((item) => item.trim())
    .includes(activeFilter);
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((project) =>
    matchesDiscipline(project.discipline, activeFilter),
  );

  return (
    <AnimatedSection id="projects" revealOnScroll={false}>
      <div className="section-shell">
        <div className="section-card overflow-hidden p-8 sm:p-10 lg:p-12">
          <SectionHeader
            eyebrow="Projects"
            title="Selected work across engineering and product design."
            description="The portfolio centers on projects where frontend execution, UX thinking, and system design all matter. Each case study goes deeper into the problem, decisions, and implementation details."
          />

          <div className="mt-10 flex flex-wrap gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  activeFilter === filter
                    ? "bg-charcoal text-white"
                    : "border border-stone-200 bg-white text-stone-600 hover:border-moss hover:text-moss"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
