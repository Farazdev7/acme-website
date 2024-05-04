import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const data = [
  {
    heading: "Website Design for SCFC Canada",
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    img: "https://i.ibb.co/T0F7rJm/Case-study-image1.png",
    path: "casestudies/19/Consumer",
    bgColor: "#F1F2FF",
  },
  {
    heading: "Website Design for SCFC Canada",
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    img: "https://i.ibb.co/P4SLH5M/Case-study-image2.png",
    path: "casestudies/7/Health",
    bgColor: "#F0FFF7",
  },
  {
    heading: "Website Design for SCFC Canada",
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    img: "https://i.ibb.co/dfdtBCh/Case-study-image3.png",
    path: "casestudies/33/Charity",
    bgColor: `#FFF4F4`,
  },
];
const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="case-study-main flex justify-center flex-col gap-10 items-center  ">
      {/* mapping from here */}
      {data.map((item, i) => (
        <div
          key={i}
          style={{ backgroundColor: item.bgColor }}
          // flex-col md:flex-row
          className={`case_study relative border-2   rounded-md md:flex flex-col  lg:flex-row  gap-10 justify-center items-center md:w-[80vw]   leading-7`}
        >
          <div className="img  lg:w-[40%]" style={{ height: "100%" }}>
            <img className="h-[100%] w-fit " src={item.img} alt="" />
          </div>
          <div className="txt md:w-[80%] lg:w-[60%] relative">
            <h3 className="font-bold">{item.heading}</h3>
            <div className="pb-10">
              {" "}
              {item.text}
              <div className="">
                <button className="text-pink-400 absolute right-[10%]  top-[90%] font-bold  md:text-lg text-md italic ">
                  <Link to={item.path}> Read More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudy;
