import './circles.css';
import { Link } from "react-router-dom";

import { FaRegLightbulb, FaSearch } from "react-icons/fa";
import { HiMiniRocketLaunch } from "react-icons/hi2";
import { FiTool } from "react-icons/fi";
import { FaMobileScreenButton, FaPaintbrush } from "react-icons/fa6";
import { LuRefreshCcw } from "react-icons/lu";

const dataOfProcess = {
    appDevelopmwnt: `Our proven app development process has been finely tuned over the last 9 years. Based upon Agile project
      management techniques we have tailored it to ensure app development cycles are delivered succinctly and to the
      utmost standards. Bi-weekly retrospectives and SMT meetings ensure a continuous feedback loop from all
      departments of the business. Your app should grow with your business, which is why our app development process
      incorporates scalability and longevity. We pride ourselves on successful long-term partnerships with clients,
      who value our proactive input and ongoing support. You'll get a dedicated project manager, and we're always on
      hand to answer any questions you have.`,
  };



const ProcessCircle = () => {

    return (  

        <>
<main>
<div className="app-development-process text-center font-[400] md:px-32 px-8  ">
        <h2 className="my-8  ">App Development Process</h2>
        <p className="my-10">{dataOfProcess.appDevelopmwnt}</p>
        <Link className=" bg-[#1f475b] text-white rounded-md py-[10px] px-[20px] " to="/casestudies">
          {" "}
          Read Case Studies
        </Link>
      </div>
<div className="processing grid md:grid-cols-3  px-10 py-32 justify-items-center  ">
        <div className="right-heading-text-image">
          {/* box1 */}
          <div className="py-4">
            <ul>
              <li className="text-3xl">01</li>
            </ul>{" "}
            <img src="" alt="" />
            <h1 className="text-[#99d8e7] text-3xl">DISCOVER</h1>
          </div>

          <p>
            We will help define your primary objectives and identify what will deliver an engaging experience for your
            audience. Understanding user needs and your purpose will help streamline the process and create a
            goal-focused product.
          </p>
          {/* box3*/}
          <div className="py-4">
            <ul>
              <li className="text-3xl hidden md:block">03</li>
              <li className="text-3xl  md:hidden ">02</li>

            </ul>{" "}
            <img src="" alt="" />
            <h1 className="text-[#0097a7] text-3xl ">WIREFRAMING</h1>
          </div>

          <p>
            Our team will conceptualise the primary user journeys using best practice techniques. Visualising the
            experience will make it easier to validate and test the product’s key features early in the process.
          </p>
          {/* box 5 */}
          <div className="py-4">
            <ul>
              <li className="text-3xl hidden md:block">05</li>
              <li className="text-3xl  md:hidden">03</li>

            </ul>{" "}
            <img src="" alt="" />
            <h1 className="text-[#1a3b4f] text-3xl">MVP DEVELOPMENT</h1>
          </div>

          <p>
            Our technical teams work through sprint-based cycles developing and testing the prioritised feature set.
            Each iterative release building toward a customer-focused deliverable.
          </p>
          {/* box7 */}
          <div className="py-4">
            <ul>
              <li className="text-3xl hidden md:block">07</li>
              <li className="text-3xl  md:hidden">04</li>

            </ul>{" "}
            <img src="" alt="" />
            <h1 className="text-[#eb9b79] text-3xl">ITERATION</h1>
          </div>

          <p>
            Regular updates ensure your app is always relevant from both a security and user experience perspective.
            They also provide a great way to demonstrate that you are listening to your customer’s feedback
          </p>
        </div>

        <section className="half-circle-divs hidden  relative  max-w-[110px]  md:grid place-items-center ">
          <div className="circle circle1  ">
            <span>
              <FaRegLightbulb className=" rotate-[-45deg] h-fit w-[40px]" />{" "}
            </span>
          </div>
          <div className="circle circle2  ">
            <span>
              <FaSearch className=" rotate-[-45deg] h-fit w-[40px]" />
            </span>
          </div>
          <div className="circle circle3  ">
            <span>
              <FaMobileScreenButton className=" rotate-[-45deg] h-fit w-[40px]" />
            </span>
          </div>
          <div className="circle circle4  ">
            <span>
              <FaPaintbrush className=" rotate-[-45deg] h-fit w-[40px]" />
            </span>
          </div>
          <div className="circle circle5  ">
            <span>
              <FiTool className=" rotate-[-45deg] h-fit w-[40px]" />
            </span>
          </div>
          <div className="circle circle6  ">
            <span>
              <HiMiniRocketLaunch className=" rotate-[-45deg] h-fit w-[40px]" />{" "}
            </span>
          </div>
          <div className="circle circle7  ">
            <span>
              <LuRefreshCcw className=" rotate-[-45deg] h-fit w-[40px]" />{" "}
            </span>
          </div>
        </section>

        <div className="left-heading-text-img text-right md:py-32">
          {/* box2*/}
          <div className="py-4">
            <ul>
              <li className="text-3xl hidden md:block">2</li>
              <li className="text-3xl md:hidden">5</li>



            </ul>{" "}
            <img src="" alt="" />
            <h1 className="text-[#2baeba] text-3xl">JOURNEY MAPPING</h1>
          </div>

          <p>
            By focusing on your users needs, we will help map their objectives into engaging user experiences that
            subsequently meet your wider goals. Evaluating how other businesses have approached similar challenges.{" "}
          </p>
          {/* box4*/}
          <div className="py-4">
            <ul>
              <li className="text-3xl hidden md:block">4</li>
            <li className="text-3xl md:hidden">6</li>
            </ul>{" "}
            <img src="" alt="" />
            <h1 className="text-[#1f475b] text-3xl">DESIGN</h1>
          </div>

          <p>
            UI designers will apply creative flair to platform/HCI guidelines to produce an intuitive interface that
            aligns with your brand guidelines and engages your customers
          </p>
          {/* box6*/}
          <div className="py-4">
            <ul>
              <li className="text-3xl hidden md:block">6</li>
            <li className="text-3xl md:hidden">7</li>


            </ul>{" "}
            <img src="" alt="" />
            <h1 className="text-[#f16427] text-3xl">LAUNCH</h1>
          </div>

          <p>
            Whether the app is being released as a beta or to an internal or global audience we support you through each
            phase of the release cycle, gathering feedback and aligning with third party marketing goals
          </p>
        </div>
      </div>

</main>
        </>
      )
}


export default ProcessCircle;