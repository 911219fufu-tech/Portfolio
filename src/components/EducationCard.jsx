import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function EducationCard({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="section-card overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-semibold text-charcoal">{item.school}</h3>
          <p className="mt-2 text-base text-stone-700">{item.degree}</p>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-stone-500">
            <span>GPA: {item.gpa}</span>
            <span>{item.duration}</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-moss hover:text-moss"
        >
          {isOpen ? "Hide Details" : "View Details"}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 24 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden border-t border-stone-200/80 pt-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Relevant Coursework
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.coursework.map((course) => (
                <span key={course} className="tag-pill">
                  {course}
                </span>
              ))}
            </div>

            <a
              href={item.transcriptUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-white transition hover:bg-moss"
            >
              View Transcript
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
