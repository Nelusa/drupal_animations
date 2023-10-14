import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20], //animate the x position
    y: [0, -30], //animate the y position
    transition: {
      x: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse", //animate back and forth infinitely
      },
      y: {
        duration: 0.25,
        repeat: Infinity,
        repeatType: "reverse", //animate back and forth infinitely
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    x: 0,
    y: [0, -40],
    transition: {
      y: {
        duration: 0.25,
        repeat: Infinity,
        repeatType: "reverse", //animate back and forth infinitely
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");

  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;
