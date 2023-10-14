import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    //initial state
    opacity: 0,
    x: "100vw",
  },
  visible: {
    //final state (animate)
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const nextVariants = {
  hidden: {
    //initial state
    x: "-100vw",
  },
  visible: {
    //final state (animate)
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};

const buttonVariants = {
  /* visible: {
    x: [0, -20, 20, -20, 20, 0], //animate the x position
    transition: {
      delay: 2.5,
    },
  }, */
  hover: {
    scale: 1.1, //animate the scale
    textShadow: "0px 0px 6px rgb(255,255,255)",
    boxShadow: "0px 0px 6px rgb(255,255,255)",
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatType: "reverse", //animate back and forth infinitely
    },
  },
};

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <motion.div
      className="base container"
      variants={containerVariants} //pass in the variants
      initial="hidden" //initial state
      animate="visible" //final state
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{
                scale: 1.2,
                color: "#f8e112",
                originX: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        //zde nemusíme použít initial a animate, protože se převezme z parent komponenty
        <motion.div className="next" variants={nextVariants}>
          <Link to="/toppings">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              /* whileHover={{
                scale: 1.1,
                textShadow: "0px 0px 6px rgb(255,255,255)",
                boxShadow: "0px 0px 6px rgb(255,255,255)",
              }} */
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
