import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import { projects } from "../data/portfolioData";

function SectionLabel({ children }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
      {children}
    </p>
  );
}

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((entry) => entry.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="pb-24 pt-12">
        <div className="section-shell">
          <div className="mx-auto max-w-2xl py-20">
            <SectionLabel>Project not found</SectionLabel>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-charcoal">
              This case study does not exist.
            </h1>
            <Link
              to="/projects"
              className="mt-8 inline-flex rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-white transition hover:bg-moss"
            >
              Back to Projects
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const detailTitle = project.detailTitle ?? project.title;
  const tools = project.tools ?? project.tech ?? [];
  const contextBadges = project.contextBadges ?? [];
  const actionButtons =
    project.actionButtons ??
    [
      project.githubUrl
        ? {
            label: "GitHub",
            href: project.githubUrl,
            variant: "primary",
          }
        : null,
      project.liveUrl
        ? {
            label: "Live Demo",
            href: project.liveUrl,
            variant: "secondary",
          }
        : null,
    ].filter(Boolean);
  const overviewStatement = project.overviewStatement ?? project.detailDescription;
  const overviewSupporting = project.overviewSupporting ?? project.overview ?? project.problem;
  const reflectionText =
    project.reflection ??
    "This project reinforced the value of defining structure early, focusing the interface on the primary workflow, and making decisions that balance polish with maintainability. If I continued the work, I would validate more edge cases through feedback and deepen the areas with the biggest product impact.";
  const reflectionSegments = reflectionText.split(/(?<=\.)\s+/);
  const reflectionLead =
    project.reflectionLead ??
    reflectionSegments[0] ??
    "This project sharpened how I think about product decisions, clarity, and execution.";
  const reflectionSupporting =
    project.reflectionSupporting ?? reflectionSegments.slice(1).join(" ");

  return (
    <main className="pb-24 pt-12">
      <div className="section-shell">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-16 sm:space-y-20"
        >
          <div className="flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-moss hover:text-moss"
            >
              Back to Projects
            </Link>
            <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-moss shadow-sm">
              {project.track}
            </span>
          </div>

          <header className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start lg:gap-14">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <SectionLabel>{project.discipline}</SectionLabel>
                {project.contextLabel ? (
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone-600">
                    {project.contextLabel}
                  </span>
                ) : null}
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
                {detailTitle}
              </h1>

              {contextBadges.length ? (
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {contextBadges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full bg-white/80 px-3.5 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-stone-600 shadow-sm backdrop-blur-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              ) : null}

              <p className="mt-8 max-w-3xl text-xl leading-9 text-stone-600 sm:text-[1.4rem]">
                {project.detailDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {tools.map((tool) => (
                  <span key={tool} className="tag-pill">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                {actionButtons.map((button) => (
                  <a
                    key={`${button.label}-${button.href}`}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    className={
                      button.variant === "primary"
                        ? "inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-white transition hover:bg-moss"
                        : "inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-moss hover:text-moss"
                    }
                  >
                    {button.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:pt-10">
              <div className="overflow-hidden rounded-[2rem] shadow-[0_18px_50px_rgba(46,46,46,0.08)]">
                <ProjectVisual
                  title={project.title}
                  subtitle={project.discipline}
                  gradient={project.gradient}
                  accent={project.accent}
                />
              </div>
            </div>
          </header>

          <section className="border-t border-stone-200/70 pt-16 sm:pt-20">
            <div className="max-w-3xl">
              <SectionLabel>Overview</SectionLabel>
              <p className="mt-5 text-2xl font-medium leading-[1.7] tracking-tight text-charcoal sm:text-[1.9rem]">
                {overviewStatement}
              </p>
              <p className="mt-6 text-base leading-8 text-stone-600">
                {overviewSupporting}
              </p>
            </div>
          </section>

          <section className="border-t border-stone-200/70 pt-16 sm:pt-20">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <div className="section-card p-8 sm:p-10">
                <SectionLabel>Key Features</SectionLabel>
                <ul className="mt-6 space-y-4">
                  {project.features.map((feature, index) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-4 py-1 text-base leading-8 text-stone-600 ${
                        index > 0 ? "border-t border-stone-200/70 pt-5" : ""
                      }`}
                    >
                      <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-moss/80" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="section-card p-8 sm:p-10">
                <SectionLabel>Technical Implementation</SectionLabel>
                <div className="mt-6 space-y-5">
                  {project.implementation.map((item, index) => (
                    <div
                      key={item.title}
                      className={index > 0 ? "border-t border-stone-200/70 pt-5" : ""}
                    >
                      <h2 className="text-base font-semibold text-charcoal sm:text-lg">
                        {item.title}
                      </h2>
                      <p className="mt-3 text-sm leading-7 text-stone-600 sm:text-base sm:leading-8">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-stone-200/70 pt-16 sm:pt-20">
            <div className="section-card overflow-hidden p-8 sm:p-10">
              <SectionLabel>Reflection</SectionLabel>
              <div className="mt-6 max-w-3xl">
                <p className="text-xl font-medium leading-9 tracking-tight text-charcoal sm:text-[1.55rem]">
                  {reflectionLead}
                </p>
                {reflectionSupporting ? (
                  <p className="mt-5 text-base leading-8 text-stone-600">
                    {reflectionSupporting}
                  </p>
                ) : null}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-stone-100 px-3.5 py-1.5 text-xs font-medium text-stone-600">
                  Product thinking
                </span>
                <span className="rounded-full bg-stone-100 px-3.5 py-1.5 text-xs font-medium text-stone-600">
                  Design clarity
                </span>
                <span className="rounded-full bg-stone-100 px-3.5 py-1.5 text-xs font-medium text-stone-600">
                  Iteration
                </span>
              </div>
            </div>
          </section>
        </motion.article>
      </div>
    </main>
  );
}
