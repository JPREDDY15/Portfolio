    import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import Tictactoe from '../../img/Tic-Tac-Toe.png';
import Elearning from '../../img/E-learning.png';
import Chatapp from '../../img/Chat-App.png'
import MusicApp from "../../img/musicapp.png"
import 'swiper/css'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import LineFollower from '../../img/line follower.jpeg';
export const Portfolio = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolios">
        <span style={{color:darkMode?'white':''}}>Recent Projects </span>
        <span>Portfolio </span>
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
            <SwiperSlide>
                <img src={Chatapp} alt=""/>
            </SwiperSlide> 
            <SwiperSlide>
                <img src={Elearning} alt=""/>
            </SwiperSlide> 
            <SwiperSlide>
                <img src={Tictactoe} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={LineFollower} alt=""/>
            </SwiperSlide>
            
        </Swiper>
    </div>
  )
}
