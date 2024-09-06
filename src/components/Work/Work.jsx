import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import AWS from "../../img/AWSIcon.png"
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png"
import Salesforce from "../../img/salesforce.png"
import Coursera from '../../img/corsera.png';
import Eduskills from '../../img/Eduskills.jpg'
import Infosys from '../../img/infosys.png';
import MotionCut from '../../img/MotionCut.jpg';
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import { motion } from 'framer-motion';
const Work = () => {
  const transition={duration:3.5,type:'spring'}
    const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="Works">
      <div className="awesome">
            <span style={{color:darkMode?'white':''}}>Work for these</span>
            <span>Internships And Certifications</span>
            <span> Salesforce developer virtual internship[May-June,2024] < br/>
            Web Development Intern [june-August,2024]
            < br/>
            Embedded System Developer Virtual Internship[july-September,Aicte-eduskills]
            < br/>
            Learning Full Stack Development certificate [Infosys Springboard] <br/>
            Compeletion of HTML, CSS, and Javascript for Web Developer in Coursera
            </span>
           

            <button className="button s-button">Hire me</button>
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="w-right">
          <motion.div 
          initial={{rotate:45}}
          whileInView={{rotate:0}}
          viewport={{margin:'-40px'}}
          transition={transition}
          className="w-maincricle">
            <div className="w-secCircle">
              <img src={Salesforce} alt=''/>
            </div>
            <div className="w-secCircle">
              <img src={Coursera} alt=''/>
            </div>
            <div className="w-secCircle">
              <img src={MotionCut} alt=''/>
              
            </div>
            <div className="w-secCircle">
              <img src={Eduskills} alt=''/>
            </div>
            <div className="w-secCircle">
              <img src={Infosys} alt=''/>
            </div>
          </motion.div>
          <div className="w-backCricle bluecircle"></div>
          <div className="w-backCricle yellowcircle"></div>
        </div>
    </div>
  )
}

export default Work