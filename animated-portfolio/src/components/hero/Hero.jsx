import "./hero.scss"
import {animate, motion, stagger} from "framer-motion"


const SliderVariants={
    initial:{
        x:0,
    },
    animate:{
        x:"-290%",
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
};


const textVariants = {
    initial:{
        x:-500,
        opacity: 0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren: 0.1,
        },
    },
};

const Hero = () => {
  return (
    <motion.div
      className="hero">
       <motion.div className="titleContainer" variants={textVariants} initial="initial" animate="animate">
        <div className="title">
            <motion.h1 variants={textVariants}>
                <b1>Our Team</b1>
            </motion.h1>
        </div>
        </motion.div> 
        <motion.div className="slidingTextConatiner" variants={SliderVariants} initial="initial" animate="animate">
            Members of the Team 
        </motion.div>

       <motion.div className="listContainer" variants={textVariants} initial="initial" animate="animate">
       
       <div className="box">
            <img src="/mis.webp" alt="" />
            <h2>Marcin Waszewski</h2>
            <a href="https://github.com/waszuch" target="" rel="">
            <button>GitHub</button>
            </a>
        </div>

            
    
        <div className="box">
            <img src="/delman.png" alt="" />
            <h2>Nicolas Graeb</h2>
            <a href="https://github.com/NicolasGraeb" target="" rel="">
            <button>GitHub</button>
            </a>
            
        </div>
        <div className="box">
            <img src="kot.png" alt="" />
            <h2>Jan Majorkiewicz</h2>
            <a href="https://github.com/j4chuu" target="" rel="">
            <button>GitHub</button>
            </a>
            
        </div>
       </motion.div>
      </motion.div>
  )
}

export default Hero
