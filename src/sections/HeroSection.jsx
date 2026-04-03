import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portrait from "../assets/profile-portrait.svg";
import { heroRoles } from "../data/portfolioData";
import TypingText from "../components/TypingText";

export default function HeroSection() {
  return (
    <section
      id="home"
      data-section="true"
      className="section-shell flex min-h-[calc(100vh-5rem)] scroll-mt-24 items-center py-16 sm:py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-display text-xl text-moss">
            I design and build modern, user-centered web applications.
          </p>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-charcoal sm:text-6xl lg:text-7xl">
            Hi, I&apos;m Joyce Fu
          </h1>

          <div className="mt-6 text-2xl font-medium text-stone-600 sm:text-3xl">
            <TypingText words={heroRoles} />
          </div>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600">
            I build modern, responsive web applications with a focus on user
            experience and clean design.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="rounded-full bg-charcoal px-6 py-3 text-sm font-medium text-white transition hover:bg-moss"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-full border border-stone-200 bg-white px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-moss hover:text-moss"
            >
              Contact Me
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              "Design-led engineering",
              "Product thinking",
              "Responsive systems",
            ].map((item) => (
              <div
                key={item}
                className="glass-panel rounded-3xl px-5 py-4 text-sm font-medium text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02 }}
          className="relative"
        >
          <div className="section-card overflow-hidden rounded-[2rem] p-4 sm:p-5">
            <img
              src={portrait}
              alt="Stylized portrait of Joyce Fu"
              className="w-full rounded-[1.7rem] object-cover"
            />
          </div>

          <div className="glass-panel absolute -left-2 bottom-6 rounded-3xl px-4 py-3 sm:-left-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">
              Focus
            </p>
            <p className="mt-2 text-sm text-stone-700">
              Frontend craft with a UX mindset
            </p>
          </div>

          <div className="glass-panel absolute -right-2 top-8 rounded-3xl px-4 py-3 sm:-right-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">
              Approach
            </p>
            <p className="mt-2 text-sm text-stone-700">
              Clear structure, polished interaction
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
