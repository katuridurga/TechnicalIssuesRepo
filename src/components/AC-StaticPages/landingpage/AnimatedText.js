import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function getInitial(direction) {
  switch (direction) {
    case "left":
      return { opacity: 0, x: -100 };
    case "right":
      return { opacity: 0, x: 100 };
    case "up":
      return { opacity: 0, y: 100 };
    default:
      return { opacity: 0 };
  }
}

function AnimatedText({ children, direction = "left", delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 allow multiple animations
    threshold: 0.2,
  });

  const initial = getInitial(direction);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedText;
