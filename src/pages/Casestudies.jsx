import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

// data of theh buttons and content are fetching from here and this object will be fetch from the backent
import caseStudyData from "../Components/data/CaseStudyDetailDAta";
// const CaseStudybtn = [
//   "View All",
//   "B2B",
//   "Charity",
//   "Consumer",
//   "Education",
//   "Enterprise",
//   "FinTech",
//   "Health",
//   "IOT",
//   "The Core",
//   "Travel",
// ];

const Casestudies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init();
  });
  const [btnCategory, setCategory] = useState(0);

  const filteredData =
    btnCategory === 0 || btnCategory === "View All"
      ? caseStudyData[2]
      : caseStudyData[2].filter((item) => item.category.toLowerCase() === btnCategory.toLowerCase());

  return (
    <div className="caseStudy bg-white">
      <div className="title bg-[#fff] text-center pb-10">
        <div className="bg-[#2baeba] text-[14px] md:text-[18px] px-[15px] py-10 text-white">
          <p className="text-[30px] font-[400] md:pt-[50px] mb-[20px]">Case Studies</p>
          <p className="px-4">{caseStudyData[1][0].mainText}</p>
        </div>
        <div className="buttons py-10 place-items-center flex flex-wrap gap-4 items-center justify-center">
          {caseStudyData[0].map((item, i) => (
            <button
              key={i}
              onClick={() => {
                // console.log(i);
                // console.log(btnCategory);
                setCategory(item);
              }}
              className={`text-[#2baeba] hover:text-white text-[16px] md:text-[18px] bg-transparent hover:bg-[#009688] border border-[#009688] md:h-14 md:w-40 h-10 w-32 rounded-[30px] ${
                i === btnCategory ? "bg-[#009688] " : " "
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="contents-main py-10 grid gap-20">
        {filteredData.map((item, i) => (
          <Link key={i} to={`${item.id}/${item.category} `}>
            <div
              className="content relative bg-cover md:h-[40vh] h-[40vh] lg:h-[60vh] bg-no-repeat"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
              }}
            >
              <div
                className="relative h-[100%] w-[100%] opacity-50 "
                style={{ background: `linear-gradient(to right, ${item.bgColorTo},${item.bgColorfrom} )` }}
              ></div>
              <div className="texts-img-outer absolute w-[70vw] md:w-[50vw] bottom-0 left-0 text-white text-left p-4 md:p-6 lg:p-8 ">
                <div className="text-inner">
                  <h2 className="heading  font-bold">{item.heading}</h2>
                  <h2 className="text  font-[400] my-5">{item.text}</h2>
                </div>
                <div className="imgs flex gap-4 max-h-20 max-w-[35%] md:max-w-[25%]">
                  <img className="w-fit lg:h-20 h-10" src={item.logImg1} alt="" />
                  <img className="w-fit lg:h-20 h-10" src={item.logImg2} alt="" />
                  <img className="w-fit lg:h-20 h-10" src={item.logImg3} alt="" />
                </div>
              </div>
              <div className="phone absolute max-w-[140px] md:max-w-[260px] bottom-5 right-6 lg:right-20">
                <img data-aos="zoom-in-up" className="h-[100%] w-fit lg:h-[100%]" src={item.moboImg}  alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Casestudies;
