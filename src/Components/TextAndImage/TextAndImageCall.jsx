import React from "react";
import TextAndImage from "./TextAndImage";
import farazimg from '../../../public/images/team/faraz.jpg'
const TextAndImageCall = () => {
  const data = [
    {
      id: "1",
      heading: "Build the right team to scale",
      p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
      text: "Our delivery model helps you cut costs and deliver within budget.",
      italic:
        "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      imageUrl: "https://i.ibb.co/H21r2VY/great-Software1.png",
      isImageRight: true,
      img: farazimg,
      name: "Faraz Rasool",
      post: "CEO",
    },
    {
      id: "2",
      heading: "Build the right team to scale",
      p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
      text: "Our delivery model helps you cut costs and deliver within budget.",
      italic:
        "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      imageUrl: "https://i.ibb.co/Bqd1tPN/great-Software2.png",
      isImageRight: false,
      img: farazimg,
      name: "Faraz Rasool",
      post: "CEO",
    },
    {
      id: "3",
      heading: "Build the right team to scale",
      p: "Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers",
      text: "Our delivery model helps you cut costs and deliver within budget.",
      italic:
        "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules",
      imageUrl: "https://i.ibb.co/C1GXS1w/great-Software3.png",
      isImageRight: true,
      img: farazimg,
      name: "Faraz Rasool",
      post: "CEO",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        // <ResponsiveDiv key={index} text={item.text} imageUrl={item.imageUrl} isImageRight={item.isImageRight} />
        <TextAndImage
          key={index}
          id={item.id}
          heading={item.heading}
          p={item.p}
          text={item.text}
          italic={item.italic}
          imageUrl={item.imageUrl}
          isImageRight={item.isImageRight}
          img={item.img}
          name={item.name}
          post={item.post}
        />
      ))}
    </div>
  );
};

export default TextAndImageCall;
