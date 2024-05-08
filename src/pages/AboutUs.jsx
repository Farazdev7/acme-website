import { useEffect, useState } from "react";
import { GiPodiumWinner } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiSolidBookAlt } from "react-icons/bi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Aos from "aos";
import "aos/dist/aos.css";

// thats array of object will come from backend

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    Aos.init();
  });
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    //bg-gray-100
    <section>
      <div className="grid place-items-center text-center">
        {/* Mission Banner */}
        <div className="w-full">
          {/* <img
            className="w-full h-auto object-cover object-center"
            src="../../public/images/team/cover.jpeg"
            alt="Mission Banner"
          /> */}
          {/* Our mission */}
          <div className="pt-6  pb-16">
            <h2 className="text-xl md: font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 font-[400]">
              We are dedicated to providing innovative software solutions that
              empower businesses and individuals to achieve their goals
              efficiently and effectively.
            </p>
          </div>
        </div>
        {/* Our Values Section */}
        <div className="mt-12 my-16">
          <h2 className=" font-semibold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Value 1 */}
            <div className="max-w-xs">
              <GiPodiumWinner className="mx-auto w-24 h-24 object-cover object-center mb-4" />
              <h3 className=" font-semibold mb-2">Empower Success</h3>
            </div>
            {/* Value 2 */}
            <div className="max-w-xs">
              <HiOutlineLightBulb className="mx-auto w-24 h-24 object-cover object-center mb-4" />
              <h3 className=" font-semibold mb-2">Passionate Experts</h3>
            </div>
            {/* Value 3 */}
            <div className="max-w-xs">
              <BiSolidBookAlt className="mx-auto w-24 h-24 object-cover object-center mb-4" />
              <h3 className=" font-semibold mb-2">Creative Problem Solver</h3>
            </div>
            {/* Value 4 */}
            <div className="max-w-xs">
              <HiOutlineRocketLaunch className="mx-auto w-24 h-24 object-cover object-center mb-4" />
              <h3 className=" font-semibold mb-2">Enjoy the Journey</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
