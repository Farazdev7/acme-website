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
// import apple from "../../../public/images/caseStudies/apple.png";
// import android from "../../../public/images/caseStudies/android.png";
// import react from "../../../public/images/caseStudies/react js.png";
// import react2 from "../../../public/images/caseStudies/react js2.png";

// const contents = [
//   {
//     backgroundImage:
//       "https://thedistance.co.uk/wp-content/uploads/2016/05/fc3a59798f3f4c432dabf7c21dc2fd4d2b62be85.jpg",
//     moboImg: "https://thedistance.co.uk/wp-content/uploads/2023/03/paystreamheadergraphic.png",
//     heading: "PayStream",
//     text: "Your Partner in simplifying and optimising ",
//     path: "/about",
//     bgColorfrom: "",
//     bgColorTo: "",
//     category: "",
//     logImg1: apple,
//     logImg2: android,
//     logImg3: react,
//     detail: `DSActive is a programme run by the Down’s Syndrome Association (DSA). The aim to provide as many opportunities as possible for people with Down’s syndrome to lead active and healthy lives. They started in 2006 by offering a football session for people with Down’s syndrome with Fulham FC Foundation. We offer expert training to coaches, run festivals to celebrate the achievements of our athletes and support people with Down’s syndrome to achieve coaching qualifications.`,
//     appScreenshort1: "https://thedistance.co.uk/wp-content/uploads/2020/02/DSA-1.png",
//     appScreenshort2: "https://thedistance.co.uk/wp-content/uploads/2020/02/DSA-1.png",
//     appScreenshort3: "https://thedistance.co.uk/wp-content/uploads/2020/02/DSA-1.png",
//     appTestLink: "",
//     webTestLink: "",
//     isoTestLink: "",
//     clientReview: [
//       {
//         clientreview:
//           "The build was completed very quickly. The Distance App Developers’ efforts resulted in impressive reviews and generated more users than expected. The work was completed efficiently and the project management was good. Their team was well-structured and highly engaging.",
//         clientImg: "https://thedistance.co.uk/wp-content/uploads/2020/02/guy-300x300.jpeg",
//         clientname: "Guy Wilcox",
//       },
//     ],
//     Process: [
//       {
//         theProblem:
//           "The Down Syndrome Association (DSA) aimed to create an accessible and user-friendly application offering healthy recipes and activity tracking for individuals with Down Syndrome. Their priority was to ensure that the app was easy to understand and use",
//         theSoluction:
//           "The Distance took a user-centric approach, engaging with the Down Syndrome community directly to understand their needs. They shared an early prototype for user feedback, ensuring the app's suitability before development. The project involved building both a front-end application and a content management system (CMS) for DSA, enabling content control and personalisation",
//         theresult:
//           "The resulting 'Health Swap' app successfully promoted physical activity and healthy eating choices among users. It seamlessly integrated into their routines, thanks to extensive user involvement and feedback. Users appreciated the simplicity and effectiveness of the tool, which fulfilled its intended purpose",
//       },
//     ],
//   },
// ];

const CaseStudyDetail = () => {
  let { id, catagory } = useParams();
  //   console.log(id);
  //   i have get the id with the help of useParams
  // creating a search function to search the id from the array to find the details.
  // in search function pass two parameters to the search function array and identidy

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

  console.log(SearchedByCatagory);
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
          className={`content relative bg-cover  md:h-[60vh] h-[55vh] lg:h-[65vh] bg-no-repeat `}
          style={{
            backgroundImage: `url(${Searched.backgroundImage})`,
          }}
        >
          <div
            className=" relative  h-[100%] w-[100%] opacity-50"
            style={{ background: "linear-gradient(to right, #00f,#fff )" }}
          ></div>
          {/* this is a div which containe the text and images */}
          <div className="texts-img-outer absolute w-[70vw] md:w-[50vw] bottom-0 left-0 text-white text-left p-4 md:p-6 lg:p-8 ">
            {/* here is text div */}
            <div className="text-inner">
              {/* <p className="heading text-xl md:text-2xl lg:text-5xl font-bold">{contents.heading}</p> */}
              <p className="text text-xl md:text-2xl lg:text-5xl font-extralight">{Searched.text}</p>
            </div>
            {/* apple android and react image is here */}
            <div className="imgs flex gap-4 max-h-20 max-w-[35%] md:max-w-[25%]">
              <img className="w-fit lg:h-20 h-10" src={Searched.logImg1} alt="" />
              <img className="w-fit lg:h-20 h-10" src={Searched.logImg2} alt="" />
              <img className="w-fit lg:h-20 h-10" src={Searched.logImg3} alt="" />
            </div>
          </div>
          {/* floating image is here which is phone */}
          <div className="phone absolute max-w-[120px] md:max-w-[220px] bottom-5 right-6 lg:right-20">
            <img className="h-[30%] lg:h-[14%]" src={Searched.moboImg} alt="" />
          </div>
        </div>
      </div>
      {/* here image box ended */}
      {/* form here detail started about page */}
      <div className="aboutapp flex justify-center items-center flex-col text-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-[400] py-10">About {Searched.heading}</h1>
        <p className="font-[400]">{Searched.detail}</p>
        <Link to={Searched.appTestLink}>
          <button className="mt-10 bg-orange-500 hover:bg-cyan-700 py-4 px-6 rounded-full text-white font-[300] my-5">
            Test Now
          </button>
        </Link>
      </div>
      {/* displaying the app testing area */}
      {/* here i have decided to add a swiper here  */}
      <div className="mainapp-datails-with-Image h-[60vh] bg-cyan-500  mb-18">
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
            {/* image one */}
            <SwiperSlide className="flex  justify-center items-center">
              <img
                className="max-h-[60vh] h-fit hover:scale-125 duration-700  "
                src={Searched.appScreenshort1}
                alt="1"
              />
            </SwiperSlide>
            {/* image two*/}
            <SwiperSlide className="flex justify-center items-center">
              <img className="max-h-[60vh] h-fit hover:scale-125 duration-700" src={Searched.appScreenshort2} alt="2" />
            </SwiperSlide>
            {/* image three*/}
            <SwiperSlide className="flex justify-center items-center ">
              <img
                className="max-h-[60vh] h-fit hover:scale-125 duration-700 "
                src={Searched.appScreenshort3}
                alt="3"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* swiper divs ends */}
      </div>

      {/* client review */}
      {/* slider will be use at the place of client review */}
      <div className="client py-16 mt-32 bg-orange-500 grid place-items-center font-[400] leading-10 text-white text-center">
        <h1 className="text-xl md:text-2xl lg:text:3xl ">Testimonial</h1>
        <i>{Searched.clientReview[0].clientreview}</i>
        <div className="client-img flex flex-col md:flex-row gap-8">
          <img className="max-h-[80px] rounded-full w-fit" src={Searched.clientReview[0].clientImg} alt="n" />
          <p className="name font-bold">{Searched.clientReview[0].clientname}</p>
        </div>
      </div>
      {/* the problem soluction section */}
      <div className="font-[400] py-10 text-center  ">
        <p className="text-xl md:text-2xl lg:text-3xl pb-8">How We made a difference</p>
        <div className="flex justify-center items-center  flex-wrap gap-6">
          {/* the problem section */}
          <div className="problem bg-white max-w-[80vw] lg:max-w-[25vw]  shadow-lg  ">
            <div className="problem-img py-16 grid place-items-center bg-cyan-800">
              <div className="a">
                <img className="max-h-[80px] w-fit" src={questionmark} alt="" />
              </div>
              <p className="text-white">The Problem</p>
            </div>
            <p className="py-10 px-2">{Searched.Process[0].theProblem}</p>
          </div>
          {/* the soluction section */}
          <div className="problem bg-white max-w-[80vw] lg:max-w-[25vw]  shadow-lg  ">
            <div className="soluction-img py-16 grid place-items-center bg-cyan-800">
              <div className="a">
                <img className="max-h-[80px] w-fit" src={soluction} alt="" />
              </div>
              <p className="text-white">The Soluction</p>
            </div>
            <p className="py-10 px-2">{Searched.Process[0].theSoluction}</p>
          </div>
          {/* the result */}
          <div className="problem bg-white max-w-[80vw] lg:max-w-[25vw]  shadow-lg  ">
            <div className="result-img py-16 grid place-items-center bg-cyan-800">
              <div className="a">
                <img className="max-h-[80px] w-fit" src={result} alt="" />
              </div>
              <p className="text-white">The Result</p>
            </div>
            <p className="py-10 px-2">{Searched.Process[0].theProblem}</p>
          </div>
        </div>
        {/* maping from here */}
      </div>

      {/* ended */}
    </div>
  );
};

export default CaseStudyDetail;
