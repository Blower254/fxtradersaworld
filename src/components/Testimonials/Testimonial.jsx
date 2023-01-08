import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "I've been following this forex channel for a while now and I've been really impressed with the accuracy and consistency of the trade signals. I've made some great profits thanks to this channel.",
    },
    {
      img: profilePic2,
      review:
        "I really appreciate the detailed analysis and explanations provided in this forex channel. It helps me understand the reasoning behind each trade recommendation and feel more confident in my own trades.",
    },
    {
      img: profilePic3,
      review:
        "The support provided by this forex channel has been excellent. Whenever I have a question or concern, the team is quick to respond and provide helpful guidance.",
    },
    {
      img: profilePic4,
      review:
        "I've tried a few different forex channels in the past, but this one has by far been the most profitable for me. I highly recommend giving it a try.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
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
