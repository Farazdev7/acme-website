import React, { useEffect } from "react";
import bgImage from "../../public/images/bgImage.png";
import videoImg from "../../public/images/video.png";
import arrow from "../../public/images/arrow-right-line.png";
import line from "../../public/images/Deco-line.png";
import CardSlider from "../Components/CardSlider/CardSlider";
import ReviewSlider from "../Components/ReviewSlider/ReviewSlider";
// import CaseStudy from "../Components/CaseStudy/CaseStudy"
import CaseStudy from "../Components/CaseStudy/CaseStudy";
import TextAndImageCall from "../Components/TextAndImage/TextAndImageCall";
import DisplayCardCall from "../Components/DisplayCard/DisplayCardCall";
import Ourstack from "../Components/ourStack/OurStack";
import OurResourse from "../Components/ourResourse/OurResourse";
import { Link } from "react-router-dom";
import Process from './Process'
import ProcessCircle from "../Components/process circle design/ProcessCircle";
import logo from "../../public/images/logo/1.png";

const homeData = {
  mainText: `We help build and manage a team of world-class developers to bring your vision to life.`,
};
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="main bg-slate-200  ">
        {/* hero section stared */}
        <div className="">
          <div className="heroSection  h-[90vh]  bg-green-500 flex leading-7 md:leading-10  ">
            <div className="w-full flex justify-center  bg-white py-8  px-4 items-center">
              {/* <div className="max-w-screen-xl mx-auto grid md:grid-cols-2"> */}
              {/* <div className="max-w-[100vw]  mx-auto grid lg:grid-cols-2 justify-between "> */}
              <div className="max-w-[100vw]  mx-auto grid lg:grid-cols-2  justify-between ">
                <div className="flex flex-col justify-center max-h-[50vh] ">
                  {/* <p className="text-caribbean-green "></p> */}
                  <h1 className="md:text-6xl lg:text-7xl sm:text-5xl text-4xl  py-2 ">
                    {" "}
                    Great <span className=" text-[#b53d7d] "> Product</span> is <br />
                    <span className="bold font-bold">
                      built by great<span className=" text-[#b53d7d]"> teams </span> <br />
                    </span>
                  </h1>
                  <p className="text-gray-800 text-xl sm:text-3xl md:text-3xl font-[400] md:mt-10 ">{homeData.mainText}</p>
                  <button className="bg-[#3D63EA] text-xl mt-8 md:mt-20 text-white w-[200px] rounded-md font-medium my-10 mx-auto lg:mx-0 py-3">
                    Let’s get started!
                  </button>
                </div>
                <img
                  className=" h-[40vh]   xl:h-[70vh]  w-fit mx-auto "
                  // src="https://i.ibb.co/Rg8mTFW/main.png"
                  src={logo}
                  alt="/"
                />
              </div>
            </div>
            {/* <img className="absolute md:top-[105vh] lg:top-[105vh] top-[97vh] left-20" src={bgImage} alt="" /> */}
            {/* hero section ended */}
          </div>
        </div>
        {/* hero section ended */}
        {/* Services We Offer and slider*/}
        <div className="ServicesWeOffer relative  my-10 text-xl ">
          {/* will redirect to the services page */}
          
            <h1 className="md:text-3xl lg:text-5xl text-3xl  py-10 text-center">Services we offer</h1>
            <div className="slider">
            <Link to="/services">
              <CardSlider />
              </Link>

            </div>
          {/* <img className="absolute bottom-[10px] left-20 md:left-40 lg:left-[70%]" src={bgImage} alt="" /> */}
        </div>
{/* this div created for the space and give the backgrond color */}
        <div className="forSpace py-24 bg-white"></div>
         {/* <Process/> */}
         <ProcessCircle/>
        {/* Banner section */}
       
        <div className="banner relative flex flex-wrap justify-center my-20 bg-[#F7F7FA] py-10">
          <img src="https://i.ibb.co/XzQ7HFm/Logo-9.png" alt="-9" />
          <img src="https://i.ibb.co/BgRh1fY/logo8.png" alt="8" />
          <img src="https://i.ibb.co/mJX257t/logo5.png" alt="5" />
          <img src="https://i.ibb.co/cFvPJXx/Logo-7.png" alt="7" />

          <img src="https://i.ibb.co/Lnpb7pv/logo9.png" alt="9" />
          <img src="https://i.ibb.co/YL1ZB2g/Logo-6.png" alt="6" />
          <img src="https://i.ibb.co/1G2rHvV/logo3.png" alt="3" />
        </div>
        {/* review section started  and slider */}
        <ReviewSlider />

        {/* case study section */}
        <div className="caseStudy py-20 px-4 bg-[#eeeef9] leading-10 text-xl ">
          <div className="text py-20">
            <p className=" text-center md:text-3xl lg:text-5xl text-3xl">
              Our recent <br /> <span>Case studies</span>{" "}
            </p>
          </div>
          <CaseStudy />
        </div>
        {/* way of building start*/}
        <div className="wayofbuilding py-20 px-4 text-xl">
          <div className=" text-center">
            <p className=" lg:text-5xl text-3xl">
              Way of building <br /> <span className="font-bold">Great Software</span>{" "}
            </p>
          </div>
          {/* to redirect at blog page */}
          <Link to="/blog">
            <TextAndImageCall />
          </Link>
        </div>
        {/* Development Aproch section */}
        <div className="development">
          <div className="">
            <p className=" flex justify-center items-center flex-col text-center">
              <img src={line} alt="" />
              <p className=" lg:text-5xl text-3xl  py-4">
                Our design and <br />
                <span className="font-bold py-3">development approach</span>
              </p>
            </p>
          </div>
          {/* <DisplayCard /> */}
          <DisplayCardCall />
        </div>
        {/* from here our tech stack */}
        <div className="our-stack py-10">
          <div>
            <Ourstack />
          </div>
        </div>
        {/* resourse cards sections */}
        {/* <OurResourse /> */}
      </div>
    </React.Fragment>
  );
};

export default Home;
