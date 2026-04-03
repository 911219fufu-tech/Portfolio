import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import portrait from "../assets/joyce-hero.JPG";
import { heroRoles } from "../data/portfolioData";
import TypingText from "../components/TypingText";

const textTransition = {
  duration: 0.6,
  ease: "easeOut",
};

export default function HeroSection() {
  return (
    <section
      id="home"
      data-section="true"
      className="section-shell flex min-h-[calc(100vh-5rem)] scroll-mt-24 items-center py-16 sm:py-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={textTransition}
            className="font-display text-xl text-moss"
          >
            I create intuitive digital experiences through design & engineering.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.08 }}
            className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-charcoal sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m Joyce Fu
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.16 }}
            className="mt-6 text-2xl font-medium text-stone-600 sm:text-3xl"
          >
            <TypingText words={heroRoles} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.24 }}
            className="mt-8 max-w-2xl text-lg leading-8 text-stone-600"
          >
            I build user-focused web applications with strong frontend engineering and clean, scalable design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.32 }}
            className="mt-10 flex flex-wrap gap-4"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...textTransition, delay: 0.4 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {[
              "User-Centered Design",
              "Frontend Engineering",
              "System Thinking",
            ].map((item) => (
              <div
                key={item}
                className="glass-panel rounded-3xl px-5 py-4 text-sm font-medium text-stone-700"
              >
                {item}
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
          transition={{
            opacity: { duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] },
            y: {
              duration: 7,
              delay: 0.18,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="section-card overflow-hidden rounded-[2rem] p-4 sm:p-5"
          >
            <img
              src={portrait}
              alt="Portrait of Joyce Fu"
              className="w-full rounded-[1.7rem] object-cover"
            />
          </motion.div>

          {/* <div className="absolute bottom-3 right-3 rounded-full bg-white/80 px-3 py-1.5 text-xs text-gray-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-md sm:bottom-4 sm:right-4">
            Based in New York
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
