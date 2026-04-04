import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function DetailSection({ title, items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <div className="border-t border-stone-200/70 pt-5 first:border-t-0 first:pt-0">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
        {title}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((entry) => (
          <span key={entry} className="tag-pill">
            {entry}
          </span>
        ))}
      </div>
    </div>
  );
}

function HonorsSection({ items }) {
  const [activeHonor, setActiveHonor] = useState(null);

  if (!items?.length) {
    return null;
  }

  const selectedHonor = items.find((item) => item.label === activeHonor);

  return (
    <div className="border-t border-stone-200/70 pt-5 first:border-t-0 first:pt-0">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
        Honors & Awards
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {items.map((item) => {
          const isInteractive = Boolean(item.details?.length);
          const isExternalLink = Boolean(item.href);
          const isActive = activeHonor === item.label;

          if (isExternalLink) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="tag-pill transition hover:border-moss hover:text-moss"
              >
                {item.label}
              </a>
            );
          }

          if (!isInteractive) {
            return (
              <span key={item.label} className="tag-pill">
                {item.label}
              </span>
            );
          }

          return (
            <button
              key={item.label}
              type="button"
              onClick={() =>
                setActiveHonor((current) =>
                  current === item.label ? null : item.label,
                )
              }
              className={`tag-pill transition ${
                isActive
                  ? "border-moss bg-moss/10 text-moss"
                  : "hover:border-moss hover:text-moss"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <AnimatePresence initial={false}>
        {selectedHonor?.details?.length ? (
          <motion.div
            key={selectedHonor.label}
            initial={{ opacity: 0, y: 8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: 8, height: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mt-4 overflow-hidden rounded-3xl border border-stone-200/80 bg-stone-50/80 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss">
              Details
            </p>
            <div className="mt-3 space-y-2">
              {selectedHonor.details.map((detail) => (
                <p key={detail} className="text-sm leading-6 text-stone-600">
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

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
            <div className="space-y-5">
              <DetailSection
                title="Relevant Coursework"
                items={item.coursework}
              />
              <HonorsSection items={item.honors} />
              <DetailSection
                title="Certifications"
                items={item.certifications}
              />
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {item.transcriptLinks.map((transcript) => (
                <a
                  key={transcript.label}
                  href={transcript.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-white transition hover:bg-moss"
                >
                  {transcript.label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
