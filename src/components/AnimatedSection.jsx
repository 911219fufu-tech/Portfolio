import { motion } from "framer-motion";

const transition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1],
};

export default function AnimatedSection({
  id,
  className = "",
  children,
  revealOnScroll = true,
}) {
  return (
    <motion.section
      id={id}
      data-section="true"
      className={`scroll-mt-24 pt-8 pb-16 ${className}`}
      initial={{ opacity: 0, y: 32 }}
      animate={revealOnScroll ? undefined : { opacity: 1, y: 0 }}
      whileInView={revealOnScroll ? { opacity: 1, y: 0 } : undefined}
      viewport={revealOnScroll ? { once: true, amount: 0.24 } : undefined}
      transition={transition}
    >
      {children}
    </motion.section>
  );
}
