import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import ProjectVisual from "../components/ProjectVisual";
import { projects } from "../data/portfolioData";

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((entry) => entry.slug === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <main className="section-shell py-24">
        <div className="section-card p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
            Project not found
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-charcoal">
            This case study does not exist.
          </h1>
          <Link
            to="/"
            className="mt-8 inline-flex rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-white transition hover:bg-moss"
          >
            Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-24 pt-12">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
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

          <div className="section-card overflow-hidden p-5 sm:p-6 lg:p-8">
            <ProjectVisual
              title={project.title}
              subtitle={project.discipline}
              gradient={project.gradient}
              accent={project.accent}
            />
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="section-card p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
                {project.discipline}
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-charcoal sm:text-5xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
                {project.detailDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-2.5">
                {project.tech.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:bg-moss"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-moss hover:text-moss"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="section-card p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
                Overview
              </p>
              <p className="mt-5 text-base leading-8 text-stone-600">
                {project.problem}
              </p>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-moss">
                Key Features
              </p>
              <div className="mt-5 space-y-4">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-[1.4rem] border border-stone-200 bg-stone-50/80 px-5 py-4 text-sm leading-7 text-stone-600"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-card p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Technical Implementation
            </p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {project.implementation.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.6rem] border border-stone-200 bg-white p-6"
                >
                  <h2 className="text-xl font-semibold text-charcoal">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
