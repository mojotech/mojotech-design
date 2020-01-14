export const workContainerVariants = {
  open: {
    transition: { staggerChildren: 0.03, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const workTextVariants = {
  open: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  closed: {
    opacity: 0,
  },
};

export const workImageVariants = {
  open: {
    y: 200,
    transition: {
      type: "spring",
      stiffness: 65,
      damping: 10,
    },
  },
  closed: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 65,
      damping: 10,
    },
  },
};
