
import Sidebar from "../Sidebar/sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () =>{
    return (
        <div className="navbar">
         
            <Sidebar/>
            <div className="wrapper">
                <motion.span 
                initial = {{opacity:0, scale:0.5}} 
                animate = {{opacity:1, scale:1}} 
                transition={{duration:0.5}}>Rigo Dev</motion.span>
                <div className="social">
                <a href="https://www.linkedin.com/in/rigoberto-gomez-a9bb618a/"><img src="/Linkedin2.png" alt=""/></a> 
                    <a href="https://github.com/rgomez07"><img src="/Github.png" alt=""/></a>
                </div>
            </div>
         </div>
    )
}

    export default Navbar