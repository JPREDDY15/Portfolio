import React from 'react'
import "./intro.css"
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import Leetcode from '../../img/leetcode (2).png'
import glassesimoji from '../../img/glassesimoji.png';
import Floatingdiv from '../Floatingdiv/Floatingdiv';
import { motion } from 'framer-motion';
const Intro = () => {
    const transition={duration:2,type:'spring'}
  return ( 
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
            <span>Hey! I Am</span>
            <span>JPREDDY</span>
            <span>I am Janga Prashanth Reddy, currently pursuing a B.Tech in Computer Science and Engineering <br /> with a specialization in the Internet of Things (IoT) at Sree Vidyanikethan Engineering College, with a GPA of 8.3. 
            </span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <img src={Github} alt=""/>
            <img src={LinkedIn} alt=""/>
            <img src={Leetcode} alt=""/>
        </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt="" />
            <img src={boy} alt=""/>
            <motion.img 
            initial={{left:"-36%"}}
            whileInView={{left:"-24%"}}
            transition={transition}
            src={glassesimoji}
             alt=''/>
            < motion.div 
            initial={{top:'-4%',left:'74%'}}
            whileInView={{left:'68%'}}
            transition={transition}
            style={{top:'-4%',left:'68%'}}
            className="floating-div">
                <Floatingdiv image={crown} txt1='Front End' txt2='Developer'/>
            </motion.div>
            <motion.div 
             initial={{top:'18rem',left:'21rem'}}
             whileInView={{left:'0rem'}}
             transition={transition}
            style={{top:'18rem',left:'0rem'}}
            className='floating-div'>
            <Floatingdiv image={thumbup} txt1='Best Designer'txt2='Award'/>
            </motion.div>
                <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
                <div className="blur" style={{background:"#C1F5FF",top:'17rem',left:'-9rem',width:'21rem',height:'11rem'}}></div>
        </div>
    </div>
    )
    }

    export default Intro