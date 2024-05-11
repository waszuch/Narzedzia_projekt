import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xBg = useTransform(scrollYProgress, [1, 0], ["-50%", "0%"]);

  return (
    <div
      className="parallax"
      style={{
        background:
          type === "portfolio"
            ? "linear-gradient(180deg, #111132, #0c0c1d )"
            : "linear-gradient(180deg, #0c0c1d, #111132 )"
      }}
      ref={ref}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "portfolio" ? "project stages" : null}
      </motion.h1>
      <motion.div className="ground"></motion.div>
      <motion.div style={{ x: xBg }} className="clouds1"></motion.div>
      <motion.div style={{ x: yBg }} className="clouds2"></motion.div>
      <motion.div className="hill-left"></motion.div>
      <motion.div style={{ y: yBg }} className="sun"></motion.div>
    </div>
  );
};

export default Parallax;
