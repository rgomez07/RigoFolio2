import   './about.scss'
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

const About = () => {
  
  return (
    <div className='about'>
      <div className="wrapper">
      <div className="textContainer" >
        <h2 >RIGOBERTO GOMEZ</h2>
        <h2>I am a software developer from Chicago. I started my journey into Software Engineering in 2021, I started by doing a lot of self-learning and tutorials. After completing a couple of apps on my own using nothing but HTML, Javascript, and CSS it was time to dive deeper. I attended Fullstack Academy in 2022 and graduated in September of 2022. At Fullstack Academy I learned all about Front End and Back End Development and working in an Agile environment. When I am not coding I enjoy playing, watching, and coaching soccer. I also enjoy traveling and living abroad in different countries. I have a deep undertanding and love for Asian cultures especially South Korea and Japan. I am currently an English Teacher in the JET Program, teaching in a Japanese High School in Tokyo. I love living and working in Tokyo.  </h2>
      </div>
      </div>
        <div className="imageContainer">
            <img  className='cancunPng'src="/cancun.png" alt="" />
        </div>
    </div>
  )
}


export default About