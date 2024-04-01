import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import review1 from "../public/images/Reviews/Review1.png";
import review2 from "../public/images/Reviews/Review2.png";
import review3 from "../public/images/Reviews/Review3.png";
import review4 from "../public/images/Reviews/Review4.png";
import review5 from "../public/images/Reviews/Review5.png";
import "swiper/css";
import "swiper/css/pagination";

const timer = 4000;

import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// const review = [review1, review2, review3, review4, review5, review3];

const detailReview = [
  {
    img: "https://i.ibb.co/FmFZpKc/Ellipse.png",
    review: `Exceptional service! The team at Acme Digital Solutions delivered a top-notch solution for our business needs. Their attention to detail and commitment to excellence truly sets them apart.`,
    userName: "John D",
    stars: "⭐⭐⭐⭐",
    postedDate: "2018",
  },
  {
    img: "https://i.ibb.co/tsb0C9S/bb.png",
    review:
      "Highly impressed with the professionalism and expertise of Acme Digital Solutions. They were able to turn our vague idea into a fully functional software product that exceeded our expectations. Would definitely recommend!",
    userName: "Alice S",
    stars: "⭐⭐⭐",
    postedDate: "2018",
  },
  {
    img: "https://i.ibb.co/1sbWC97/ee.png",
    review:
      "Working with Acme Digital Solutions was a breeze. Their communication throughout the project was excellent, and they were able to meet all our deadlines without compromising on quality. Great job!",
    userName: "Robert M",
    stars: "⭐⭐⭐⭐⭐",
    postedDate: "2018",
  },
  {
    img: "https://i.ibb.co/tsb0C9S/bb.png",
    review:
      "Acme Digital Solutions provided us with innovative solutions that streamlined our processes and boosted our productivity. Their team's technical proficiency and dedication to customer satisfaction make them a valuable partner for any software project.",
    userName: "Emily ",
    stars: "⭐⭐⭐⭐⭐",
    postedDate: "2018",
  },
  {
    img: "https://i.ibb.co/1sbWC97/ee.png",
    review:
      "I can't thank Acme Digital Solutions enough for the incredible work they did for us. From concept to deployment, they guided us every step of the way and delivered a product that exceeded our expectations. Truly impressed!",
    userName: "David",
    stars: "⭐⭐⭐⭐⭐",
    postedDate: "2018",
  },
  {
    img: "https://i.ibb.co/FmFZpKc/Ellipse.png",
    review:
      "Choosing Acme Digital Solutions for our software project was one of the best decisions we made. Their team went above and beyond to understand our requirements and delivered a solution that perfectly catered to our needs.",
    userName: "Sarah",
    stars: "⭐⭐⭐⭐⭐",
    postedDate: "2018",
  },
];

export default function ReviewSliderTesting2() {
  const [index, setIndex] = useState(0);
  const [currentReview, setCurrentReview] = useState(detailReview[index].review);

  setTimeout(() => {
    if (index < detailReview.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
    setCurrentReview(detailReview[index].review);
  }, timer);

  return (
    <>
      <div className="review border-2   ">
        <div className="text flex relative   justify-center items-center ">
          <p className="text-xl relative md:text-3xl md:w-[50vw] lg:w-[50vw] text-center py-10 ">
            Why cutomers love <br /> <span className="font-bold">working with us</span>
            <img src="https://i.ibb.co/X3NGf8h/topComa.png" alt="Comma" />
            <p className="text-lg ">
              {/* Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing
              agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work
              to someone else. */}
              {currentReview}
            </p>
            <img className="absolute right-8 " src="https://i.ibb.co/DMQ90mt/Bottom-Comma.png" alt="Comma" />
          </p>
        </div>
        {/* swiper component started form here */}
        <Swiper
          slidesPerView={5}
          spaceBetween={0}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 4700,
            disableOnInteraction: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
        >
          <div className="reviewslider">
            {detailReview.map((item, i) => (
              <div key={i}>
                <SwiperSlide onClick={() => setCurrentReview(item.review)}>
                  <div className="flex flex-col justify-center items-center text-center">
                    <img className="max-w-20 h-fit rounded-full" src={item.img} alt="" />
                    <p>{item.stars}</p>
                    <p>{item.userName}</p>
                    <p>{item.postedDate}</p>
                  </div>

                  {/* <img src={item.img} alt="" /> */}
                </SwiperSlide>
              </div>
            ))}
          </div>
        </Swiper>{" "}
      </div>
    </>
  );
}
