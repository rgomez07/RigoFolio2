import { useRef } from "react"
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"



const items = [
  {
    id:1,
    title: "Planr",
    img: "./public/travelItin.png",
    desc: "Travel Itinerary App that allows you to search hotels, restaurants and attractions based off of desired location. You can also save itinerary and arrange by date. Built using React and PostgreSQL while leveraging Google Places API, Google Maps API, and Travel Advisor API.",
    linked: "https://github.com/2206-capstone-ktr/Planr",

  },
  {
    id:2,
    title: "GameShopper",
    img: "./public/Gameshopper.png",
    desc: "Online e-commerce site for video games. Fully functional with account management options and a cart that can be checked out. Built using React and PostgreSQL.",
    linked: "https://github.com/rgomez07/game-shopper"

  },
  {
    id:3,
    title: "RecipeApp",
    img: "./public/Recipeapp.png",
    desc: "Recipe app that allows you to login or create an account, add new recipes and save recipes as well as save your favorite recipes. Built using React, bcrypt, ang Mongodb.",
    linked: "https://github.com/rgomez07/RecipeApp"

  },
 
]

const Single = ({item}) => {

  const ref =  useRef()
  const {scrollYProgress} = useScroll({target:ref})
  const redirectToRepo = ()=>{
    window.open(item.linked, "_blank") 
  }

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return(
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
        <img src={item.img} alt=""/>
        </div>
        <motion.div className="textContainer" style={{y}}>
          <h2 >{item.title}</h2>
          <p>{item.desc}</p>
          <button onClick={redirectToRepo}>See Repo</button>
        </motion.div>
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
    <div id="portfolioSection"className="portfolio" ref= {ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{scaleX}}className="progressBar"></motion.div>
      </div>
      {items.map((item) =>(
        <Single item={item} key={item.id}/>

      ))}
    
    </div>
  )
}
export default Portfolio