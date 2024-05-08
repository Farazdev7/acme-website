import React, { useContext, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { FreeMode, Pagination, Autoplay } from "swiper/modules";


const detailReview = [

  {
    img: "https://i.ibb.co/pvzfykz/3642b943-2afc-471c-8ca5-ca4bbdcae44b.jpg",

    // img: "https://manforhimself.com/wp-content/uploads/2022/03/Bulldog-original-styling-pomade-review-man-for-himself-1-1-600x600.jpg",
    review: `Exceptional service! The team at Acme Digital Solutions delivered a top-notch solution for our business needs. Their attention to detail and commitment to excellence truly sets them apart.`,
    userName: "Gabriela Angels",
    stars: "⭐⭐⭐⭐",
    postedDate: "2018",
  },
  {
    img: "https://manforhimself.com/wp-content/uploads/2022/03/Bulldog-original-styling-pomade-review-man-for-himself-1-1-600x600.jpg",

    review: `You guys are just awesome.`,
    userName: "John D",
    stars: "⭐⭐⭐⭐",
    postedDate: "2024",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG20Oz1H8riejD6YVMU0i0bN7Mz83ZC4AMCQ&usqp=CAU",
    review: `Faraz and his team delivered on their promise to complete our Flutter backend App project. They communicated efficiently, made sure they understood what we wanted, and delivered an app backend that worked just like we wanted. They delivered the project on time and within our budget limitations. We are very pleased with their work, and we recommend their services. Thank you, Faraz, for an excellent job! We'll definetly contact you for future projects.`,
    userName: " Jack",
    stars: "⭐⭐⭐⭐",
    postedDate: "2018",
  },
  {
    img: "https://img.freepik.com/premium-photo/happy-man-thumbs-up-like-emoji-portrait-with-smile-hands-advertising-sale-promotion-face-winner-person-thank-you-review-yes-sign-yellow-studio-background-motivation_590464-128335.jpg",
    review:
      "Highly impressed with the professionalism and expertise of Acme Digital Solutions. They were able to turn our vague idea into a fully functional software product that exceeded our expectations. Would definitely recommend!",
    userName: "John Paul",
    stars: "⭐⭐⭐",
    postedDate: 2024,
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6KykzuB7UajGvenPKYwCVv_QEGk2NWt4ewtjZP8_gj0a4XJ6DMNvkzn-6J5j2rxqJyso&usqp=CAU",
    review:
      "Working with Acme Digital Solutions was a breeze. Their communication throughout the project was excellent, and they were able to meet all our deadlines without compromising on quality. Great job!",
    userName: "Daniel Ryan",
    stars: "⭐⭐⭐⭐⭐",
    postedDate: "2022",
  },
  {
    img: "https://i.guim.co.uk/img/media/b616c669df8026632576e3dd9f34c70b46db1801/1483_96_2160_2160/master/2160.jpg?width=445&dpr=1&s=none",
    review:
      "Acme Digital Solutions provided us with innovative solutions that streamlined our processes and boosted our productivity. Their team's technical proficiency and dedication to customer satisfaction make them a valuable partner for any software project.",
    userName: "Alexander David",
    stars: "⭐⭐⭐⭐⭐",
    postedDate: "2023",
  },
  {
    img: "https://e-cdns-images.dzcdn.net/images/artist/5c9f84d97a49eab40cc32e2a8e1e1c11/500x500-000000-80-0-0.jpg",
    review:
      "I can't thank Acme Digital Solutions enough for the incredible work they did for us. From concept to deployment, they guided us every step of the way and delivered a product that exceeded our expectations. Truly impressed!",
    userName: "Robert Anthony",
    stars: "⭐⭐⭐⭐⭐",
    postedDate: "2022",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbZ-zSXKJXuj9uAgvx_fImNgAgfkqf0s9QA4jcL_GWxz4069FyZEeiTRESJhgXt_mM4J4&usqp=CAU",
    review:
      "Choosing Acme Digital Solutions for our software project was one of the best decisions we made. Their team went above and beyond to understand our requirements and delivered a solution that perfectly catered to our needs.",
    userName: "William Edward",
    stars: "⭐⭐⭐⭐⭐",
    postedDate: "2024",
  },
];

export default function ReviewSlider() {
  const [index, setIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState(detailReview[index].review);
  
  useEffect(() => {
    setCurrentReview(detailReview[index].review)
  },[index,currentReview])

  const onSwiperChanged = () => {
if(index<detailReview.length-1){
  setIndex(index+1)
}
if(index===detailReview.length-1){
  setIndex(0)
}

   
  }
  return (
    <>
      <div className="review border-2   ">
        <div className="text flex relative   justify-center items-center ">
          <section className="relative  md:w-[50vw] lg:w-[50vw] text-center py-10 ">
            <h2 className="">
            Why cutomers love <br /> <span className="font-bold">working with us</span>
            </h2>
            
            <img src="https://i.ibb.co/X3NGf8h/topComa.png" alt="Comma" />
            <p className=" ">
              {currentReview}
            </p>
            <img className="absolute right-8 " src="https://i.ibb.co/DMQ90mt/Bottom-Comma.png" alt="Comma" />
          </section>
        </div>
        {/* swiper component started form here */}
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            // disableOnInteraction: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={onSwiperChanged } 
          allowTouchMove={false}

        >
          <div className="reviewslider px-1">
            {detailReview.map((item, i) => (
  <div key={`${i}-${item.userName}`} >
    <SwiperSlide >
      <div className="flex flex-col justify-center items-center text-center  ">
        <img className="w-fit h-20 rounded-full" src={item.img} alt="" />
        <p >{item.stars}</p>
        <p>{item.userName}</p>
        <p>{item.postedDate}</p>
      </div>
    </SwiperSlide>
  </div>
))}

          </div>
        </Swiper>{" "}
      </div>
    </>
  );
}
