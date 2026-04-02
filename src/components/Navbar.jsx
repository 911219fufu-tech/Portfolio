import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navItems } from "../data/portfolioData";

export default function Navbar({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const goToSection = (sectionId) => {
    setIsOpen(false);

    if (!isHome) {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="section-shell">
        <div className="glass-panel flex items-center justify-between rounded-full px-5 py-3 sm:px-6">
          <Link
            to="/"
            className="flex items-center gap-3 text-sm font-semibold tracking-[0.24em] text-charcoal"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-xs font-bold text-white">
              JF
            </span>
            <span className="hidden sm:inline">JOYCE FU</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = isHome && activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? "bg-charcoal text-white"
                      : "text-stone-600 hover:bg-white hover:text-charcoal"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-charcoal transition hover:border-moss hover:text-moss md:hidden"
            aria-label="Toggle navigation menu"
          >
            <span className="relative h-4 w-4">
              <span
                className={`absolute left-0 top-1 h-px w-4 bg-current transition ${
                  isOpen ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 h-px w-4 bg-current transition ${
                  isOpen ? "-translate-y-[1px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="section-shell mt-3 md:hidden"
          >
            <div className="glass-panel rounded-[1.75rem] p-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-medium text-stone-700 transition hover:bg-white hover:text-charcoal"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
