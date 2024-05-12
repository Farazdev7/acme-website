import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import questionmark from "../../../public/images/Resources/questionMark.png";
import soluction from "../../../public/images/Resources/check.png";
import result from "../../../public/images/Resources/award.png";
import { Link, useParams } from "react-router-dom";
import { Pagination } from "swiper/modules";
import contents from "../data/CaseStudyDetailDAta";
import "swiper/css";
import "swiper/css/pagination";
const data = contents[2];
import Aos from "aos";
import "aos/dist/aos.css";

const CaseStudyDetail = () => {
  useEffect(() => {
    Aos.init();
  });
  let { id, catagory } = useParams();
  
  // ====================================================
  // search by the catagory
  // ====================================================
  const search_by_catagory = (array, catagory) => {
    return array.find((obj) => obj.id === id);
  };
  const SearchedByCatagory = search_by_catagory(data, catagory);

  // ====================================================
  // search by the if from the catory array
  // ====================================================
  //Search by the id
  const search = (array, id) => {
    return array.find((obj) => obj.id === id);
  };
  //   now the search array will be stored in searched
  const Searched = search(data, id);

  // ==========================================================================
  // SearchedByCatagory is a a object that will give the sugesstion application under the box related apps
  // ==========================================================================

  // console.log(SearchedByCatagory);
  //   search by the catagory
  //   const search_by_catagory = (array, id) => {
  //     return array.find((obj) => obj.id === id);
  //   };
  //   const SearchedByCatagory = search_by_catagory(data, catagory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="caseStudy">
      {/* from here the cocntent div start */}
      <div className="contents-main   grid gap-20 ">
        <div
          // className={`content relative bg-cover  md:h-[40vh] h-[40vh] lg:h-[50vh] bg-no-repeat bg-[url(${contents.bgImg})]`}
          className={`content relative bg-cover  h-[50vh]  bg-no-repeat `}
          style={{
            backgroundImage: `url(${Searched.backgroundImage})`,
          }}
        >
          <div
            className=" relative  h-[100%] w-[100%] opacity-25"
            style={{ background: "linear-gradient(to right, #00f,#fff )" }}
          ></div>
          {/* this is a div which containe the text and images */}
          <div className="texts-img-outer absolute w-[70vw] md:w-[50vw] bottom-0 left-0 text-white text-left p-4 md:p-6 lg:p-8 ">
            {/* here is text div */}
            <div className="text-inner">
              <h1 className="heading  font-bold">{Searched.heading}</h1>
              <h3 data-aos="fade-down-left" className="text  font-[400]">{Searched.text}</h3>
            </div>
            {/* apple android and react image is here */}
            <div  data-aos="zoom-in" className="imgs flex gap-4 max-h-20 max-w-[35%] md:max-w-[25%]">
              <img loading="lazy" className="w-fit lg:h-20 h-10" src={Searched.logImg1} alt="" />
              <img loading="lazy" className="w-fit lg:h-20 h-10" src={Searched.logImg2} alt="" />
              <img loading="lazy" className="w-fit lg:h-20 h-10" src={Searched.logImg3} alt="" />
            </div>
          </div>
          {/* floating image is here which is phone */}
          <div className="phone absolute max-w-[120px] md:max-w-[220px] bottom-5 right-6 lg:right-20">
            <img loading="lazy" className="h-[30%] lg:h-[14%] w-fit" src={Searched.moboImg} alt="" />
          </div>
        </div>
      </div>
      {/* here image box ended */}
      {/* from here detail started about page */}
      <div className={`aboutapp flex justify-center items-center flex-col text-center ${Searched.detail ? "" : "hidden"}`}>
        <h2 className=" font-[400] pt-10">About {Searched.heading}</h2>
        <p className= {`w-[80%] md:w-[60%] ${Searched.detail===true ? "hidden" : ""}`}>{Searched.detail}</p>
       
        
      </div>


{/* this is  for testing  button */}
<div className="btns flex flex-wrap gap-8  justify-center mt-6">
<a target="_blank" href={Searched.webTestLink} className={`${Searched.webTestLink ? "" : "hidden"}`}>
          <button  className=" text-xl bg-cyan-700 active:bg-cyan-600 py-4 px-6 rounded-full text-white  ">
            Test Website Now
          </button>
        </a>


        <a target="_blank" href={Searched.appTestLink} className={`${Searched.appTestLink ? "" : "hidden"}`}>
          <button  className=" text-xl bg-cyan-700 active:bg-cyan-600 py-4 px-6 rounded-full text-white  ">
            Test Android App Now
          </button>
        </a>

        <a  target="_blank" href={Searched.isoTestLink} className={`${Searched.isoTestLink ? "" : "hidden"}`}>
          <button  className=" text-xl bg-cyan-700 active:bg-cyan-600 py-4 px-6 rounded-full text-white  ">
            Test ISO App Now
          </button>
        </a>
</div>
    







      {/* displaying the app testing area */}
      <div className={`mainapp-datails-with-Image h-[60vh]  mb-18 ${Searched.screenScreenshort ? "" : "hidden"} `}>
        <div className="slider-app-detail ">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper  flex justify-center items-center flex-col py-20 "
          >
             {
              Searched.screenScreenshort.map((item, index) => (
                <SwiperSlide key={index} className="flex  justify-center items-center">
                <img
                  className="max-h-[60vh] h-fit hover:scale-125 duration-700  "
                  src={item}
                  alt="1"
                />
               </SwiperSlide>
              ))
          }
          </Swiper>
        </div>
        {/* swiper divs ends */}
      </div>

      {/* client review */}
      {/* slider will be use at the place of client review */}
<<<<<<< HEAD

{/* this is a testemonial section  going to hide due to some technical issue */}
      {/* <div className={`client  py-16 mt-32 bg-orange-300 grid place-items-center font-[400] leading-10 text-white text-center ${Searched.clientReview[0].clientreview ? "" : "hidden"}`}>
=======
      <div className={`client  py-16 mt-32 bg-orange-300 grid place-items-center font-[400] leading-10 text-white text-center ${Searched.clientReview[0].clientreview ? "" : "hidden"}`}>
>>>>>>> upstream/main
        <h2 className=" ">Testimonial</h2>
       <p><i>{Searched.clientReview[0].clientreview}</i></p> 
        <div className="client-img flex flex-col md:flex-row gap-8">
          <img loading="lazy" className="max-h-[80px] rounded-full w-fit" src={Searched.clientReview[0].clientImg} alt="n" />
          <p className="name font-bold">{Searched.clientReview[0].clientname}</p>
        </div>
<<<<<<< HEAD
      </div> */}


=======
      </div>
>>>>>>> upstream/main
      {/* the problem soluction section */}
      <div className={`font-[400] py-10 text-center
       ${Searched.Process[0].theProblem ||
        Searched.Process[0].theSoluction ||
         Searched.Process[0].theResult ? "" : "hidden"}  `}>
        <h2 className="  pb-8">How We made a difference</h2>
        <div className="flex justify-center items-center  flex-wrap gap-6">
          {/* the problem section */}
          <div data-aos="fade-up" className={`problem bg-white max-w-[80vw] lg:max-w-[25vw]  shadow-lg ${Searched.Process[0].theProblem ? "" : "hidden"}  `}>
            <div className="problem-img py-16 grid place-items-center bg-cyan-800">
              <div className="a">
                <img className="max-h-[80px] w-fit" src={questionmark} alt="" />
              </div>
              <p className="text-white">The Problem</p>
            </div>
            <p className="py-10 px-2">{Searched.Process[0].theProblem}</p>
          </div>
          {/* the soluction section */}
          <div data-aos="fade-up" className={`problem bg-white max-w-[80vw] lg:max-w-[25vw]  shadow-lg ${Searched.Process[0].theSoluction ? "" : "hidden"} `}>
            <div className="soluction-img py-16 grid place-items-center bg-cyan-800">
              <div className="a">
                <img className="max-h-[80px] w-fit" src={soluction} alt="" />
              </div>
              <p className="text-white">The Soluction</p>
            </div>
            <p className="py-10 px-2">{Searched.Process[0].theSoluction}</p>
          </div>
          {/* the result */}
          <div data-aos="fade-up" className={`problem bg-white max-w-[80vw] lg:max-w-[25vw]  shadow-lg ${Searched.Process[0].theresult ? "" : "hidden"}`}>
            <div className="result-img py-16 grid place-items-center bg-cyan-800">
              <div className="a">
                <img className="max-h-[80px] w-fit" src={result} alt="" />
              </div>
              <p className="text-white">The Result</p>
            </div>
            <p className="py-10 px-2">{Searched.Process[0].theresult}</p>
          </div>
        </div>
        {/* maping from here */}
      </div>

      {/* ended */}
    </div>
  );
};

export default CaseStudyDetail;
