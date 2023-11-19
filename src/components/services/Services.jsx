import './services.scss'
import {motion} from "framer-motion"




const Services = () => {
  return (
    <motion.div className='services'>
        <motion.div className="textContainer">
            <p> I scale businesses 
                <br/>and help them grow.</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">

            <div className="title">
                <img src= "./people.webp" alt =''/>
                <h1><b>Unique</b> Ideas</h1>
            </div>
            <div className="title">
                <h1><b>For your</b>Business.</h1>
                <button>What I do</button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <div className="box">
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!

                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!

                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!

                </p>
                <button>Go</button>
            </div>
            <div className="box">
                <h2>Branding</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!

                </p>
                <button>Go</button>
            </div>
        </motion.div>


        </motion.div>
  )
}
export default Services