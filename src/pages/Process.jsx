<<<<<<< HEAD

=======
>>>>>>> upstream/main
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ProcessCircle from "../Components/process circle design/ProcessCircle";

<<<<<<< HEAD
const cloud='https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/clouds-small.svg'
=======
const cloud =
  "https://thedistance.co.uk/wp-content/themes/thedistance/dist/images/clouds-small.svg";
>>>>>>> upstream/main

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
        <h2 className="text-white  font-[400] text-center pt-10">
          We're with you all the way, from idea to launch and beyond...
        </h2>

        {/* smalls clouds1 */}
        <img
          className="max-h-[70px] absolute right-10 w-fit"
          src={cloud}
          alt=""
        />
        {/* smalls clouds2 */}

        <img
          className="max-h-[70px] hidden md:block  right-32 absolute top-64 w-fit"
          src={cloud}
          alt=""
        />

        {/* smalls clouds3 */}
        <img
          className="max-h-[70px] absolute top-64 md:top-32 left-10 w-fit"
          src={cloud}
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

<<<<<<< HEAD
  

      {/* ============================================================================================================= */}
      {/* process started form here */}
      {/* ============================================================================================================= */}
     <ProcessCircle/>
=======
      {/* ============================================================================================================= */}
      {/* process started form here */}
      {/* ============================================================================================================= */}
      <ProcessCircle />
>>>>>>> upstream/main

      {/* that is main div ended here */}
    </div>
  );
};

export default Process;
