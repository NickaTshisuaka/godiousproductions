// utils/motion.js

export const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
};

export const slideIn = (direction = "left", delay = 0) => {
  const distance = 60;
  return {
    initial: {
      opacity: 0,
      x: direction === "left" ? -distance : direction === "right" ? distance : 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
    },
    animate: {
      opacity: 1,
      x: 0,
      y: 0
    },
    transition: { duration: 0.8, delay, ease: "easeOut" }
  };
};
