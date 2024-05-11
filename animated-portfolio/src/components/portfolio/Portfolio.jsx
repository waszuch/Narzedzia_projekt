import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring } from "framer-motion";

const items = [
  {
    id: 1,
    title: "STAGE 1",
    img: "/jedynka.png",
    desc: "Download PDF",
    pdfPath: "/etap1_projekt_Narzedzia_1.pdf",
  },
  {
    id: 2,
    title: "STAGE 2",
    img: "/dwójka.png",
    desc: "Download PDF",
    pdfPath: "/Raport_Etap2 .pdf",
  },
  {
    id: 3,
    title: "STAGE 3",
    img: "/trójka.png",
    desc: "Download PDF",
    pdfPath: "/Raport_etap3_2.pdf",
  },
];

const Single = ({ item }) => {
  const variants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
    whileHover: {
      scale: 1.1,
    },
  };

  const handleDownload = () => {
    
    window.open(item.pdfPath, "_blank");
  };

  return (
    <section>
      <div className="container">
        <motion.div
          className="wrapper"
          variants={variants}
          initial="initial"
          whileInView="animate"
          whileHover="whileHover"
        >
          <div className="imgContainer">
            <img src={item.img} alt="" />
          </div>
          <div className="textContainer">
            <h2>{item.title}</h2>
            
            <button onClick={handleDownload}>{item.desc}</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>FIRST THREE TASKS</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
