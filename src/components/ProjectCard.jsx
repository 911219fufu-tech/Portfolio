import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectVisual from "./ProjectVisual";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className="group h-full"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="section-card flex h-full flex-col overflow-hidden p-4 sm:p-5"
      >
        <div className="overflow-hidden rounded-[1.75rem]">
          <div className="transition duration-500 group-hover:scale-[1.02]">
            <ProjectVisual
              title={project.title}
              subtitle={project.track}
              gradient={project.gradient}
              accent={project.accent}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-1 pb-2 pt-6">
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              {project.discipline}
            </p>
            <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600">
              View Case Study
            </span>
          </div>

          <p className="mt-4 text-base leading-7 text-stone-600">
            {project.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span key={tag} className="tag-pill">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
