import React from "react";
import DevelopmentCards from "./DisplayCard";

const data = [
  {
    heading: "UX Driven Engineering",
    text: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    img: "https://i.ibb.co/JqS7K5G/rocket.png",
    backGroundColor: "black",
  },
  {
    heading: "Developing Shared Understanding",
    text: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    img: "https://i.ibb.co/5TMdY3p/coderr.png",
    backGroundColor: "blue",
  },
  {
    heading: "Proven Experience and Expertise",
    text: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    img: "https://i.ibb.co/hF6BRcM/heart.png",
    backGroundColor: "pink",
  },
  {
    heading: "Security & Intellectual Property (IP)",
    text: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    img: "https://i.ibb.co/m5ZsWv5/shild.png",
    backGroundColor: "olive",
  },
  {
    heading: "Security & Intellectual Property (IP)",
    text: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    img: "https://i.ibb.co/VMx4fCp/success.png",
    backGroundColor: "yellow",
  },
  {
    heading: "Security & Intellectual Property (IP)",
    text: "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    img: "https://i.ibb.co/CbzXxz1/lock.png",
    backGroundColor: "purple",
  },
];

const DisplayCardCall = () => {
  return (
    <div className="main  flex justify-center ">
      <div className="  py-8   flex flex-wrap  ">
        {data.map((item, i) => (
          <DevelopmentCards
            key={i}
            heading={item.heading}
            text={item.text}
            img={item.img}
            backGroundColor={item.backGroundColor}
          />
        ))}
      </div>
    </div>
  );
};

export default DisplayCardCall;
