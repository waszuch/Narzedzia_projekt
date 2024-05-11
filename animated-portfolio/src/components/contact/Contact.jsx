import "./contact.scss"
import {motion} from "framer-motion"
import emailjs from '@emailjs/browser';
import { useState, useRef } from "react";


const variants={
  initial:{
    y:500,
    opacity:0,
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.5,
      staggerChildren:0.1,
    }
  }
}

function Contact() {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_k56nowh', 'template_6uhfkh6', formRef.current, {
        publicKey: 'z8kstAVWK_z0UkfzJ',
      })
      .then(
        () => {
          setSuccess(true);
          
        },
        (error) => {
          setError(true);
          
        },
      );
  };

  return (
    <motion.div className="contact" variants={variants} initial="initial" whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item">
          <h2>Mail</h2>
          <span>waszuch77@gmail.com</span>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        <motion.div className="phoneSvg" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:2,duration:1}}>
      <svg width="800px" height="800px" viewBox="0 0 32.666 32.666" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z" fill="#ffa500"/>
</svg>
      </motion.div>
        <motion.form 
        initial={{opacity:0}}
        whileInView={{opacity:1}} 
        transition={{delay:2,duration:1}} 
        ref={formRef} 
        onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={10} placeholder="Message" name="message" />
          <button>Submit</button>
          {success && "Success"}
          {error && "Error"}
        </motion.form>
      </div>
    </motion.div>
  );
}


export default Contact