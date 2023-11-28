import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring} from "framer-motion"



const items = [
  {
    id:1,
    title: "Planr",
    img: "./public/travelItin.png",
    desc: "Travel Itinerary App that allows you to search hotels, restaurants and attractions based off of desired location. You can also save itinerary and arrange by date.",

  },
  {
    id:2,
    title: "Planr",
    img: "./public/travelItin.png",
    desc: "Travel Itinerary App that allows you to search hotels, restaurants and attractions based off of desired location. You can also save itinerary and arrange by date.",

  },
  {
    id:3,
    title: "Planr",
    img: "./public/travelItin.png",
    desc: "Travel Itinerary App that allows you to search hotels, restaurants and attractions based off of desired location. You can also save itinerary and arrange by date.",

  },
  {
    id:4,
    title: "Planr",
    img: "./public/travelItin.png",
    desc: "Travel Itinerary App that allows you to search hotels, restaurants and attractions based off of desired location. You can also save itinerary and arrange by date.",

  },
]

const Single = ({item}) => {

  const ref =  useRef()

  return(
    <section ref={ref}>
      <div className="container">
        <img src={item.img} alt=""/>
        <div className="textContainer">
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Repo</button>
        </div>
        
      </div>
    </section>
  )
}

const Portfolio = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({target:ref, offset: ["end end" , "start start"],})

  const scaleX = useSpring(scrollYProgress, {
    stiffness:100,
    damping:30,

  })

  return (
    <div className="portfolio" ref= {ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{scaleX}}className="progressBar"></motion.div>
      </div>
      {items.map(item =>(
        <Single item={item} key={item.id}/>

      ))}
    
    </div>
  )
}
export default Portfolio