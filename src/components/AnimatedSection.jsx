import { motion } from "framer-motion";

const transition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1],
};

export default function AnimatedSection({
  id,
  className = "",
  children,
}) {
  return (
    <motion.section
      id={id}
      data-section="true"
      className={`scroll-mt-28 py-20 sm:py-24 ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}
