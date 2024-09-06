import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import "swiper/css"; 
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import Aicte from '../../img/Eduskills.jpg'
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
import Nss from '../../img/nss.png'

const Testimonial = () => {
  const clients = [
    {
      img: Aicte,
      review:
        "Achived an excellence and participation Certificate in Prototyping of ArduBotics an outreach workshop of Technex'23,IIT Varanasi delivered by Innovians Technologies(india) in collaboration with AICTE IDEA LAB",
    },
    {
      img: Nss,
      review:
        "NSS volunteers may visit orphanages, old age homes, and schools for underprivileged children. They may also teach, provide support, and organize recreational activities in Villages.",
    },
    {
      img: profilePic3,
      review:
        "Many Events was conduct in class and college very succesfull programms on Tait(Technical Association Of Informative Technoloy)",
    },
    {
      img: profilePic4,
      review:""
    },
  ];

  return (
    <div className="t-wrapper" id="testimonials">
      <div className="t-heading">
        <span>Achievements </span>
        <span>And</span>
        <span> Excellence of work.</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;