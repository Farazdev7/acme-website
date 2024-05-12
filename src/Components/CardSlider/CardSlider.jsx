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
    "img": "https://i.ibb.co/XkvBwdq/mobile.png",
    "heading": "Mobile App Development",
    "text": "Empower your business with our mobile app development expertise. Your app is vital for digital success, and we specialize in bringing your vision to life with engaging and functional applications."
  },
  {
    "img": "https://i.ibb.co/pZd1FLw/coder.png",
    "heading": "Web App Development",
    "text": "Empower your online presence with our custom web app development solutions. Let us transform your ideas into functional and engaging web applications."
  },
  {
    "img": "https://i.ibb.co/XkvBwdq/mobile.png",
    "heading": "Digital Marketing",
    "text": "Boost your online presence with our tailored digital marketing services. From SEO to social media, we'll elevate your online strategy for success."
  },
  {
    "img": "https://i.ibb.co/F5brMXC/Dashboard.png",
    "heading": "Software Testing Service",
    "text": "Ensuring the reliability and functionality of your software through comprehensive testing. Trust us to optimize your digital assets and enhance user experiences."
  }, 
  {
    "img": "https://i.ibb.co/XkvBwdq/mobile.png",
    "heading": "Web App Designing",
    "text": "Crafting intuitive, visually appealing web apps that effectively communicate your brand's message, engage users seamlessly, and drive conversions."
  },
  {
    "img": "https://i.ibb.co/F5brMXC/Dashboard.png",
    "heading": "Mobile App Designing",
    "text": "Crafting intuitive, visually stunning mobile app designs that captivate your audience and reflect your brand's essence."
  },
   {
    "img": "https://i.ibb.co/F5brMXC/Dashboard.png",
    "heading": "Mobile App Designing",
    "text": "Crafting intuitive, visually stunning mobile app designs that captivate your audience and reflect your brand's essence."
  },
];


const data2={
  img:'abc',
  img2:'abc',
  img3:'abc',

}

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
              <div className="sliderBox w-full  shadow-xl rounded-xl   p-4 bg-zinc-100 min-h-[40vh]  leading-7 " style={{ boxShadow: '10px 10px 10px 10px rgba(0, 0, 0, 0.1)' }}>
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
