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
import ReviewSliderTesting2 from "../Testing2";
const homeData = {
  mainText: `We help build and manage a team of world-class developers to bring your vision to life.`,
};
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div className="main bg-slate-200 font-[500] ">
        {/* hero section stared */}
        <div className="">
          <div className="heroSection  h-[90vh] md:h-[80vh]  lg:h-[100vh] bg-green-500 flex leading-7 md:leading-10  ">
            <div className="w-full flex justify-center  bg-white py-8  px-4 items-center">
              {/* <div className="max-w-screen-xl mx-auto grid md:grid-cols-2"> */}
              {/* <div className="max-w-[100vw]  mx-auto grid lg:grid-cols-2 justify-between "> */}
              <div className="max-w-[100vw]  mx-auto grid xl:grid-cols-2 justify-between ">
                <div className="flex flex-col justify-center max-h-[50vh] ">
                  <p className="text-caribbean-green "></p>
                  <h1 className="md:text-4xl sm:text-3xl text-2xl  py-2 ">
                    {" "}
                    Great <span className=" text-[#b53d7d] "> Product</span> is <br />
                    <span className="bold font-bold">
                      built by great<span className=" text-[#b53d7d]"> teams </span> <br />
                    </span>
                  </h1>
                  <p className="text-gray-800  text-xl font-[400] md:mt-10 ">{homeData.mainText}</p>
                  <button className="bg-[#3D63EA] mt-8 md:mt-20 text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                    Let’s get started!
                  </button>
                </div>
                <img
                  className="md:max-w-[40vw] h-[40vh]  w-fit mx-auto "
                  src="https://i.ibb.co/Rg8mTFW/main.png"
                  alt="/"
                />
              </div>
            </div>
            <img className="absolute md:top-[105vh] lg:top-[105vh] top-[97vh] left-20" src={bgImage} alt="" />
            {/* hero section ended */}
          </div>
        </div>
        {/* hero section ended */}
        {/* Services We Offer and slider*/}
        <div className="ServicesWeOffer relative  my-10 ">
          {/* will redirect to the services page */}
          <Link to="/services">
            <h1 className="md:text-2xl text-xl font-bold py-10 text-center">Services we offer</h1>
            <div className="slider">
              <CardSlider />
            </div>
          </Link>
          <img className="absolute bottom-[10px] left-20 md:left-40 lg:left-[70%]" src={bgImage} alt="" />
        </div>
        {/* video section started*/}
        <div className=" ">
          <div className="video   md:h-[100vh]  bg-green-500 flex leading-7 md:leading-10    ">
            <div className="w-full flex justify-center  bg-white py-8  px-4 items-center">
              {/* <div className="max-w-screen-xl mx-auto grid md:grid-cols-2"> */}
              <div className="max-w-[100vw]  mx-auto grid lg:grid-cols-2 ">
                {/* <div className="flex flex-col justify-center max-h-[50vh] md:ml-14 "> */}
                <div className=" ml-10  ">
                  {/* <p className="text-caribbean-green "></p> */}
                  <img src={line} alt="" />
                  <h1 className="md:text-4xl sm:text-3xl text-2xl py-2  ">
                    Leading companies trust us <br />
                    <span className="bold font-bold">
                      to develop software <br />
                    </span>
                  </h1>
                  <p className="text-gray-[#718096] font-[400] md:mt-10 text-start ">
                    We <span className="text-[#F76680]">add development capacity</span> to tech teams. Our value isn’t
                    limited to building teams but is equally distributed across the project lifecycle. We are a custom
                    software development company that guarantees the successful delivery of your project.
                  </p>
                  <button className=" text-[#57007B] font-medium my-6 mx-auto md:mx-0 flex items-center gap-3">
                    See more Informations <img src={arrow} alt="" />
                  </button>
                </div>
                <img className="md:max-w-[40vw]  md:h- mx-auto " src={videoImg} alt="/" />
              </div>
            </div>
            {/* <img className="absolute md:top-[105vh] lg:top-[105vh] top-[97vh] left-20" src={bgImage} alt="" /> */}
            {/* video section ended*/}
          </div>
          {/* meet people text and ball bg */}
          <div className="text-xl relative m-10">
            <img src={line} alt="" />
            Meet the People <br /> <span className="font-bold">We are Working With</span>
            <img
              className="absolute md:bottom-[10px] lg:bottom-[-95px] bottom-[-110px]  left-[50vw]"
              src={bgImage}
              alt=""
            />
          </div>
        </div>
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
        {/* <div className="review border-2   ">
          <div className="text flex relative   justify-center items-center ">
            <p className="text-xl relative md:text-3xl md:w-[50vw] lg:w-[50vw] text-center py-10 ">
              Why cutomers love <br /> <span className="font-bold">working with us</span>
              <img src="https://i.ibb.co/X3NGf8h/topComa.png" alt="Comma" />
              <p className="text-lg">
                Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing
                agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their
                work to someone else.
              </p>
              <img className="absolute right-8 " src="https://i.ibb.co/DMQ90mt/Bottom-Comma.png" alt="Comma" />
            </p>
          </div>
        </div> */}
        {/* {ReviewSliderTesting2} */}
        {/* case study section */}
        <ReviewSlider />
        <div className="caseStudy py-20 px-4 bg-[#eeeef9] leading-10 ">
          <div className="text py-20">
            <p className=" text-center font-bold md:text-xl text-lg">
              Our recent <br /> <span>Case studies</span>{" "}
            </p>
          </div>
          <CaseStudy />
        </div>
        {/* way of building start*/}
        <div className="wayofbuilding py-20 px-4 ">
          <div className=" text-center">
            <p className="md:text-2xl text-xl">
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
              <p className="md:text-2xl text-xl  py-4">
                Our design and <br />
                <span className="font-bold py-3">development approach</span>
              </p>
            </p>
          </div>
          {/* <DisplayCard /> */}
          <DisplayCardCall />
        </div>
        {/* from here our tech stack */}
        <div className="our-stack">
          <div>
            <Ourstack />
          </div>
        </div>
        {/* resourse cards sections */}
        <OurResourse />
      </div>
    </React.Fragment>
  );
};

export default Home;
