import React, { useContext, useEffect } from "react";
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
// import OurResourse from "../Components/ourResourse/OurResourse";
import { Link } from "react-router-dom";
import Process from './Process'
import ProcessCircle from "../Components/process circle design/ProcessCircle";
import logo from "../../public/images/logo/1.png";
import { Btncontext } from "../Components/Contexts/MenuButton";
import ParticlesBackground from "../Components/Particles/ParticlesBackground";
const homeData = {
  mainText: `We help build and manage a team of world-class developers to bring your vision to life.`,
};
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="main  ">
        {/* hero section stared */}
        <div className="">
          <div className="heroSection    lg:min-h-[100vh] h-[90vh]  flex justify-center items-center leading-7 md:leading-10   ">
{/* blobs */}
          <article className="relative flex w-[100vw] h-[100vh] ">
    <svg style={{
        filter: 'drop-shadow(5px 5px 6px rgba(0, 0, 0, 7.5))',
        transition: 'filter 0.3s', 
    }}
     viewBox="0 0 100 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgb(101, 193, 230)' }}></stop>
                <stop offset="100%" style={{ stopColor: 'rgb(101, 193, 230)' }}></stop>
            </linearGradient>
        </defs>
        <path fill="url(#gradient)">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
             values='M389,278Q375,306,368,339.5Q361,373,337.5,410Q314,447,275,413Q236,379,185,415Q134,
             451,136,391Q138,331,103.5,310Q69,289,77,252Q85,215,94.5,179.5Q104,144,120,98Q136,52,186,
             86Q236,120,277.5,79.5Q319,39,329,95.5Q339,152,408.5,150Q478,148,440.5,199Q403,250,389,278Z;           
             
             M414,275.5Q365,301,388.5,365.5Q412,430,363,438Q314,446,275,413.5Q236,381,208.5,375.5Q181,370,
             159.5,350.5Q138,331,131,304Q124,277,88,242.5Q52,208,85,181Q118,154,143.5,132Q169,110,202.5,
             114Q236,118,262.5,124Q289,130,328,125Q367,120,405,142Q443,164,453,207Q463,250,414,275.5Z;
             
             M431.5,292Q440,334,423,378.5Q406,423,362,441Q318,459,272.5,462Q227,465,188,445Q149,425,135.5,
             384Q122,343,76,320Q30,297,79,260.5Q128,224,91,165.5Q54,107,90,71.5Q126,36,176,30.5Q226,25,261,
             66.5Q296,108,322,124.5Q348,141,412,145Q476,149,449.5,199.5Q423,250,431.5,292Z;
             
             M429,289Q426,328,410.5,369.5Q395,411,348,408.5Q301,406,263,449Q225,492,179,472Q133,452,95.5,420.5Q58,
             389,33,345Q8,301,63.5,261.5Q119,222,117.5,187.5Q116,153,138,123.5Q160,94,194,67.5Q228,41,260,81.5Q292,122,
             326.5,124Q361,126,401,145.5Q441,165,436.5,207.5Q432,250,429,289Z;

             M389,278Q375,306,368,339.5Q361,373,337.5,410Q314,447,275,413Q236,379,185,415Q134,
             451,136,391Q138,331,103.5,310Q69,289,77,252Q85,215,94.5,179.5Q104,144,120,98Q136,52,186,
             86Q236,120,277.5,79.5Q319,39,329,95.5Q339,152,408.5,150Q478,148,440.5,199Q403,250,389,278Z;
             '>
            </animate>
        </path>
    </svg>
    
            </article>

            <div className="w-full flex pt-[10vh] justify-center  absolute   py-8  px-4 items-center">
              {/* <div className="max-w-screen-xl mx-auto grid md:grid-cols-2"> */}
              {/* <div className="max-w-[100vw]  mx-auto grid lg:grid-cols-2 justify-between "> */}
              <div className="max-w-[100vw]  mx-auto grid lg:grid-cols-2  justify-between ">

              {/* max-h-[50vh] */}
               <div className="flex flex-col justify-center ">
                 {/* blobs 2*/}

               <article className="h-[50vh] w-full flex justify-center items-center md:block hidden ">
    <svg className="h-[20vh] " style={{
        filter: 'drop-shadow(5px 5px 6px rgba(0, 0, 0, 7.5))',transition: 'filter 0.3s', }}
     viewBox="0 0 100 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
        <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'rgb(101, 193, 230)' }}></stop>
                <stop offset="100%" style={{ stopColor: 'rgb(101, 193, 230)' }}></stop>
            </linearGradient>
        </defs>
        <path fill="url(#gradient)">
            <animate attributeName="d" dur="10s" repeatCount="indefinite"
             values='M389,278Q375,306,368,339.5Q361,373,337.5,410Q314,447,275,413Q236,379,185,415Q134,
             451,136,391Q138,331,103.5,310Q69,289,77,252Q85,215,94.5,179.5Q104,144,120,98Q136,52,186,
             86Q236,120,277.5,79.5Q319,39,329,95.5Q339,152,408.5,150Q478,148,440.5,199Q403,250,389,278Z;           
             
             M414,275.5Q365,301,388.5,365.5Q412,430,363,438Q314,446,275,413.5Q236,381,208.5,375.5Q181,370,
             159.5,350.5Q138,331,131,304Q124,277,88,242.5Q52,208,85,181Q118,154,143.5,132Q169,110,202.5,
             114Q236,118,262.5,124Q289,130,328,125Q367,120,405,142Q443,164,453,207Q463,250,414,275.5Z;
             
             M431.5,292Q440,334,423,378.5Q406,423,362,441Q318,459,272.5,462Q227,465,188,445Q149,425,135.5,
             384Q122,343,76,320Q30,297,79,260.5Q128,224,91,165.5Q54,107,90,71.5Q126,36,176,30.5Q226,25,261,
             66.5Q296,108,322,124.5Q348,141,412,145Q476,149,449.5,199.5Q423,250,431.5,292Z;
             
             M429,289Q426,328,410.5,369.5Q395,411,348,408.5Q301,406,263,449Q225,492,179,472Q133,452,95.5,420.5Q58,
             389,33,345Q8,301,63.5,261.5Q119,222,117.5,187.5Q116,153,138,123.5Q160,94,194,67.5Q228,41,260,81.5Q292,122,
             326.5,124Q361,126,401,145.5Q441,165,436.5,207.5Q432,250,429,289Z;

             M389,278Q375,306,368,339.5Q361,373,337.5,410Q314,447,275,413Q236,379,185,415Q134,
             451,136,391Q138,331,103.5,310Q69,289,77,252Q85,215,94.5,179.5Q104,144,120,98Q136,52,186,
             86Q236,120,277.5,79.5Q319,39,329,95.5Q339,152,408.5,150Q478,148,440.5,199Q403,250,389,278Z;
             '>
            </animate>
        </path>
    </svg>
    
            </article>

                  {/* <p className="text-caribbean-green "></p> */}
                  <h1 className=" py-2  md:absolute ">
                    Great <span className=" text-[#b53d7d] "> Product</span> is <br />
                    <span className="bold font-bold">
                      built by great<span className=" text-[#b53d7d]"> teams </span> <br />
                    </span>
                  </h1>
                  <h3 className="text-gray-800  font-[400]  ">{homeData.mainText}</h3>
                  <div className="bg-gray-300  mx-auto mt-6">
                  <Link to={'/contactus'} className="bg-[#3D63EA] text-xl mt-8 md:mt-20 text-white w-fit rounded-md font-medium my-10 px-4 mx-auto lg:mx-0 py-3">
                    Let’s get started!
                  </Link>
                  </div>
                 
                </div>
                
                <img
    // style={{
    //     filter: 'drop-shadow(10px 15px 6px rgba(3, 1, 0, 1.5))',
    //     transition: 'filter 0.3s', // Add transition for smooth effect
    // }}
    className="max-h-[50vh] w-fit mx-auto cursor-pointer transition duration-1000 "
    src={logo}
    alt="/"
    onMouseOver={(e) => { // Mouse over event handler
        e.target.style.filter = 'drop-shadow(10px 15px 6px rgba(3, 1, 0, 1.5))';
    }}
    onMouseOut={(e) => { // Mouse out event handler
        e.target.style.filter = 'none'; // Reset filter on mouse out
    }}
    />
              </div>
            </div>
            {/* <img className="absolute md:top-[105vh] lg:top-[105vh] top-[97vh] left-20" src={bgImage} alt="" /> */}
            {/* hero section ended */}
          </div>
        </div>
        {/* hero section ended */}
        {/* Services We Offer and slider*/}
        <div className="ServicesWeOffer relative  my-10  ">
          {/* will redirect to the services page */}
          
            <h2 className="   py-10 text-center">Services we offer</h2>
            <div className="slider">
            <Link to="/services">
              <CardSlider />
              </Link>

            </div>
          {/* <img className="absolute bottom-[10px] left-20 md:left-40 lg:left-[70%]" src={bgImage} alt="" /> */}
        </div>
{/* this div created for the space and give the backgrond color */}
        <div className="forSpace py-24 "></div>
         {/* <Process/> */}
         <ProcessCircle/>
        {/* Banner section */}
       
        <div className="banner relative flex flex-wrap justify-center my-20  py-10">
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
        <div className="caseStudy py-20 px-4  leading-10  ">
          <div className="text py-20">
            <h2 className=" text-center ">
              Our recent <br /> <span>Case studies</span>{" "}
            </h2>
          </div>
          <CaseStudy />
        </div>
        {/* way of building start*/}
        <div className="wayofbuilding py-20 px-4 ">
          <div className=" text-center">
            <h2 >
              Way of building <br /> <span className="font-bold">Great Software</span>{" "}
            </h2>
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
              <h2 className="py-4">
                Our design and <br />
                <span className="font-bold py-3">development approach</span>
              </h2>
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
