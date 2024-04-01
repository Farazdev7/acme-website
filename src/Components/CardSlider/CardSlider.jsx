import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "./CardSlider.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
const data = [
  {
    img: "https://i.ibb.co/XkvBwdq/mobile.png",
    heading: "Mobile App Development",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "https://i.ibb.co/XkvBwdq/mobile.png",
    heading: "Mobile App Development",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "https://i.ibb.co/pZd1FLw/coder.png",
    heading: "Web Design & Development",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "https://i.ibb.co/F5brMXC/Dashboard.png",
    heading: "Software Testing Service",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "https://i.ibb.co/XkvBwdq/mobile.png",
    heading: "Software Testing Service",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "https://i.ibb.co/F5brMXC/Dashboard.png",
    heading: "Software Testing Service",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    img: "https://i.ibb.co/XkvBwdq/mobile.png",
    heading: "Mobile App Development",
    text: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
];

export default function CardSlider() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          850: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
        {/* services */}
        <div className="cardSliderMain ">
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              {/* <div className="sliderBox w-full  p-4 bg-zinc-100 h-[287px] leading-7"> */}
              <div className="sliderBox w-full  p-4 bg-zinc-100  leading-7 ">
                <img className="py-2" src={item.img} alt="" />
                <b>{item.heading}</b> <br />
                <p>{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </>
  );
}
