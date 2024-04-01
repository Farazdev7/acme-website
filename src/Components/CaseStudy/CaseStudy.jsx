import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const data = [
  {
    heading: "Website Design for SCFC Canada",
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    img: "https://i.ibb.co/T0F7rJm/Case-study-image1.png",
    path: "/study",
    bgColor: "#F1F2FF",
  },
  {
    heading: "Website Design for SCFC Canada",
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    img: "https://i.ibb.co/P4SLH5M/Case-study-image2.png",
    path: "/study",
    bgColor: "#F0FFF7",
  },
  {
    heading: "Website Design for SCFC Canada",
    text: "Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.",
    img: "https://i.ibb.co/dfdtBCh/Case-study-image3.png",
    path: "/study",
    bgColor: `#FFF4F4`,
  },
];
const CaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="case-study-main flex justify-center flex-col items-center gap-8 ">
      {/* mapping from here */}
      {data.map((item, i) => (
        <div
          key={i}
          style={{ backgroundColor: item.bgColor }}
          className={`case_study relative px-5  flex flex-col md:flex-row gap-10 justify-center items-center md:w-[90vw]  leading-7`}
        >
          <div className="img md:w-[40%]" style={{ height: "100%" }}>
            <img className="h-[100%] w-fit " src={item.img} alt="" />
          </div>
          <div className="txt md:w-[60%] relative">
            <p className="md:text-xl text-lg font-bold">{item.heading}</p>
            <p className="pb-10">
              {" "}
              {item.text}
              <div className="">
                <button className="text-pink-400 absolute right-[10%]  top-[90%] font-bold  md:text-lg text-md italic ">
                  <Link to="/casestudies"> Read More</Link>
                </button>
              </div>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CaseStudy;
