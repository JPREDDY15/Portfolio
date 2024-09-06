import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card'
import Resume from './Resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Services = () => {
  const transition={duration:1,type:'spring'}
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="Services">
        {/*left side*/}
        <div className="awesome">
            <span style={{color:darkMode?'white':''}}>My Awesome</span>
            <span>Skills</span>
            <span>I am a dedicated frontend developer with a strong foundation in<br />
             HTML5, CSS3, and JavaScript,java  including frameworks like <br />
             React.js,Node.js,Express.Js.Also i have better grip in the computer topics <br /> DBMS,Operating Systems,Computer Networks,Cloud Computing[AWS].</span>
            <a href={Resume} download>
            <button className="button s-button">Download</button>
            </a>
            
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/*right side*/}      
        <div className="cards">
        <motion.div 
        whileInView={{left:'14rem'}}
        initial={{left:'25%'}}
        transition={transition}
        
        style={{left:'14rem'}}>
           <Card
           emoji={HeartEmoji}
           heading={'librarys'}
           detail={"React Js, Node Js, Git, Java Fx"}
            />
           </motion.div>
           {/*second card*/}
           <motion.div 
           initial={{ left: "-11rem", top: "12rem" }}
           whileInView={{ left: "-4rem" }}
           transition={transition}
           style={{top:"12rem",left:"-4rem"}}>
              <Card
              emoji={Glasses}
              heading={"Languages"}
              detail={"HTML,CSS,Java Script,Java,Basic Python & C"}
              />
            </motion.div>
            {/*third card*/}
            <motion.div 
             initial={{ top: "19rem", left: "25rem" }}
             whileInView={{ left: "12rem" }}
             transition={transition}
            style={{top:"19rem",left:"12rem"}}>
              <Card
              emoji={Humble}
              heading={"Data Bases"}
              detail={"Mongo DB, SQL,"}
              />
            </motion.div>
            <motion.div 
             initial={{ top: "17rem", left: "-10rem" }}
             whileInView={{ left: "30rem" }}
             transition={transition}
            style={{top:"19rem",left:"12rem"}}>
              <Card
              emoji={Humble}
              heading={"Concepts"}
              detail={"DBMS,Operating Systems,Computer Networks,Cloud Computing[AWS]"}
              />
            </motion.div>
            <div className="blur s-blur2" style={{background:"var(yellowgreen)"}}></div>
        </div>
    </div>
  )
}

export default Services