import React, { useEffect } from "react";
import upwordLine from "../../../public/images/Reviews/upwordLine.png";
import { Link } from "react-router-dom";

const TextAndImage = ({ id, heading, p, text, italic, imageUrl, isImageRight, img, name, post }) => {
  const desktopLayoutClass = isImageRight ? "lg:flex-row-reverse  " : "";
  console.log(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Link to={`/blog/${id}`}>
      <div className="container mx-auto my-20 mb-44 bg-slate-50 ">
        <div className={`flex flex-col lg:flex-row md:items-center md:justify-between ${desktopLayoutClass}`}>
          {/* Text */}
          <div className="lg:w-1/2 md:ml-8  pt-4">
            <div className="md:text-left text-center max-w-md md:max-w-none">
              <h2 className="text-xl font-bold mb-4">{heading}</h2>
              <p className="">{p}</p>
              <p className="md:my-10 my-6">{text}</p>
              <div className="flex gap-4 items-center">
                <img className="max-h-[4rem]" src={upwordLine} alt={upwordLine} />
                <p className="md:my-10 my-6 text-pink-700 italic">" {italic}"</p>
              </div>
              {/* name img and post section */}
              <div className="flex items-center ">
                <img className="h-[50px] rounded-full w-fit" src={img} alt="" />
                <p>
                  <span className="  font-bold">{name}</span> <br />
                  <span className="text-gray-500">{post}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className=" md:mt-0 mt-8 max-w-md md:max-w-none">
            <img src={imageUrl} alt="Image" className="md:mx-auto w-full md:w-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TextAndImage;
