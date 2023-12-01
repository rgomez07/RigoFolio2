import { useRef } from 'react'
import './services.scss'
import {motion, useInView} from "framer-motion"

const variants ={
    initial: {
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren: 0.1
        }
    }
}


const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, {margin:"-100px"})
    const scrollToPortfolio = () => {
        const portfolioSection = document.getElementById("portfolioSection");
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: "smooth" });
        }
      };
  return (
    <motion.div 
    className='services' 
    variants={variants} 
    initial= "initial" 
    //whileInView= "animate"
    ref={ref}
    // animate= {isInView && "animate"}
    animate = {'animate'}
    >
        <motion.div id="servicesSection" className="textContainer" variants={variants}>
            <p> I scale businesses 
                <br/>and help them grow.</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>

            <div className="title">
                <img src= "./people.webp" alt =''/>
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For your</motion.b>Business.</h1>
                <button onClick={scrollToPortfolio} >What I do</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Software Development</h2>
                <p>
                Experience in writing, designing, and testing code for reliability and scalability. Consistently updating code to reflect market research.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Collaborative Teamwork</h2>
                <p>
               Collaborate in large or small teams and participate in pair-coding experience, code review, demo days and client consulting.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Maintenance</h2>
                <p>
                    Maintain and update software, analyze and optimize code. Countinuosly integrate new technology into the software I write.
              </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                <h2>Methodology</h2>
                <p>
                    Work in a Agile or waterfall methodology and in a CI/CD environment.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>


        </motion.div>
  )
}
export default Services