import Sidebar from "../sidebar/sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} 
            animate={{opacity:1,scale:1}} 
            transition={{duration:1}}
            >NARZEDZIA PROGRAMISTYCZNE</motion.span>
            <div className="social">
                <a href="https://github.com/waszuch" target="_blank" rel="noopener noreferrer">
                  <img src="/github.png" alt="" />
                  </a>

            </div>
        </div>
        </div>
  )
}

export default Navbar
