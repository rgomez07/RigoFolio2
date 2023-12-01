import   './hero.scss'
import {motion} from "framer-motion"


const textVariants = {
  initial:{
    x: -500,
    opacity:0,
  },
  animate:{
    x: 0,
    opacity:1,
    transition:{
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat: Infinity,
    }
  }
}

const sliderVariants = {
  initial:{
    x: 0,
  },
  animate:{
    x: "-220%",
    transition:{
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    }
  },
}

const Hero = () => {
  const scrollToContactMe = () => {
    const contactMeSection = document.getElementById("contactMeSection");
    if (contactMeSection) {
      contactMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToSeeMyWork = () => {
    const seeMyWork = document.getElementById("portfolioSection");
    if (seeMyWork) {
      seeMyWork.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollDown = () => {
    const seeDown = document.getElementById("servicesSection");
    if (seeDown) {
      seeDown.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='hero'>
      <div className="wrapper">
      <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
        <motion.h2 variants={textVariants}>RIGOBERTO GOMEZ</motion.h2>
        <motion.h1 variants={textVariants}> Software Developer and Engineer</motion.h1>
        <motion.div variants={textVariants} className="buttons" >
          <motion.button onClick={scrollToSeeMyWork}variants={textVariants}>See My Work</motion.button>
          <motion.button onClick={scrollToContactMe} variants={textVariants}>Contact Me</motion.button>

        </motion.div>
        <motion.img className="scrollDown"onClick={scrollDown} variants={textVariants} animate="scrollButton"src="/scroll.png" alt="" />
      </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Educator Motivator Doer
      </motion.div>
        <div className="imageContainer">
            <img  className='mePng'src="/IMG_9882.png" alt="" />
        </div>
    </div>
  )
}


export default Hero
