export const titleAnim = {
    hidden: { y: 200 },
    show: {
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };
  export const fade = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { ease: "easeOut", duration: 1 },
    },
  };

export const scrollReveal = {
    hidden: { opacity: 0, y: 30, transition: { duration: 0.5 } },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };