import { Link } from "react-router-dom";
import "./HalfRedHalfBlueCircle.css";
import { FaRegLightbulb, FaSearch } from "react-icons/fa";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { FiTool } from "react-icons/fi";
import { FaMobileScreenButton, FaPaintbrush } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProcessCircle from "../Components/process circle design/ProcessCircle";


const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init();
  });
  return (
    <div className="">
      {/* for the cloud background */}
      <div className="background relative bg-[#2baeba] md:h-[95vh] h-[60vh] ">
        <h1 className="text-white text-3xl md:text-3xl font-[400] text-center pt-10">
          We're with you all the way, from idea to launch and beyond...
        </h1>

        {/* smalls clouds1 */}
        <img
          className="max-h-[70px] absolute right-10 w-fit"
          src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/clouds-small.svg"
          alt=""
        />
        {/* smalls clouds2 */}

        <img
          className="max-h-[70px] hidden md:block  right-32 absolute top-64 w-fit"
          src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/clouds-small.svg"
          alt=""
        />

        {/* smalls clouds3 */}
        <img
          className="max-h-[70px] absolute top-64 md:top-32 left-10 w-fit"
          src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/clouds-small.svg"
          alt=""
        />
        {/* rocket image */}
        <div className=" grid place-items-center">
          <img
            data-aos="fade-up"
            className="h-fit max-w-[100px] grid place-items-center"
            src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/rocket.svg"
            alt=""
          />
        </div>

        {/* large cloude */}
        <img
          className=" large-cloud absolute bottom-0"
          src="https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/clouds-large-2.svg"
          alt=""
        />
      </div>
      <hr className="border border-[#2baeba]" />

  

      {/* ============================================================================================================= */}
      {/* process started form here */}
      {/* ============================================================================================================= */}
     <ProcessCircle/>

      {/* that is main div ended here */}
    </div>
  );
};

export default Process;
