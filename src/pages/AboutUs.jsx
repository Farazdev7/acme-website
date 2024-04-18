import React, { useEffect } from "react";
import { GiPodiumWinner } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiSolidBookAlt } from "react-icons/bi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Aos from "aos";
import "aos/dist/aos.css";
 import frazimg from "../../public/images/team/faraz.jpg";
 import zeryabimg from "../../public/images/team/zeryab.jpg";
 import saadimg from "../../public/images/team/saad.jpg";
 import hamzaimg from "../../public/images/team/hamza2.jpg";

 import ashirimg from "../../public/images/team/ashir2.jpg";
 import ahsanimg from "../../public/images/team/ahsan2.jpg";



// thats array of object will come from backend
const About = [
  {
    bgimg: "",
    title: "",
    // here is tream array of objects
    team: [
      {
        name: "Faraz Rasool",
        image:frazimg,
        desination: "CEO",
      },
      {
        name: "Zeryab Salman",
        image:zeryabimg,
        desination: "Markiting Manager",
      },
      {
        name: "Saad Salman",
        image:saadimg,
        desination: "UI/UX Engineer",
      },
      {
        name: "Hamza Nafasat",
        image:hamzaimg,  
          desination: "MERN Stack Developer",
      },
      {
        name: "Asher",
        image:ashirimg,
          // "../../public/images/team/asher.jpeg",

        desination: "Flutter develop",
      },
      {
        name: "Ahsan Rasheed",
        image:ahsanimg,
        // image: '../../public/images/team/ahsan.jpg',

        desination: "MERN Stack Developer",
      },
    ],
  },
];


const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="bg-gray-100 text-xl">
    <div className="grid place-items-center text-center">
      {/* Mission Banner */}
      <div className="w-full">
        {/* <img
          className="w-full h-auto object-cover object-center"
          src="../../public/images/team/cover.jpeg"
          alt="Mission Banner"
        /> */}
        {/* Our mission */}
        <div className="pt-6 bg-orange-500 pb-16">
          <h3 className="text-xl md:text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-700 font-[400]">
            We are dedicated to providing innovative software solutions that empower businesses and individuals to achieve
            their goals efficiently and effectively.
          </p>
        </div>
      </div>
      {/* Our Values Section */}
      <div className="mt-12 my-16">
        <h3 className="text-3xl font-semibold mb-4">Our Values</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Value 1 */}
          <div className="max-w-xs">
            <GiPodiumWinner className="mx-auto w-24 h-24 object-cover object-center mb-4" />
            <p className="text-xl font-semibold mb-2">Empower Success</p>
          </div>
          {/* Value 2 */}
          <div className="max-w-xs">
            <HiOutlineLightBulb className="mx-auto w-24 h-24 object-cover object-center mb-4" />
            <p className="text-xl font-semibold mb-2">Passionate Experts</p>
          </div>
          {/* Value 3 */}
          <div className="max-w-xs">
            <BiSolidBookAlt className="mx-auto w-24 h-24 object-cover object-center mb-4" />
            <p className="text-xl font-semibold mb-2">Creative Problem Solvers</p>
          </div>
          {/* Value 4 */}
          <div className="max-w-xs">
            <HiOutlineRocketLaunch className="mx-auto w-24 h-24 object-cover object-center mb-4" />
            <p className="text-xl font-semibold mb-2">Enjoy the Journey</p>
          </div>
        </div>
      </div>
      {/* Our Team Section */}
      <section className="bg-[#99d8e7] w-full py-14">
        <article className="text-white text-center font-[400]">
          <h1 className="text-xl md:text-2xl lg:text-4xl">Senior Management Team</h1>
          <p>
            Our SMT brings a world of experience to the company. Our business leaders inspire and guide the team to ensure
            the quality and efficiency of all our app development projects.
          </p>
        </article>
        <div className="w-full flex flex-wrap justify-center space-x-4 mt-12 text-white text-center font-[400]">
          {/* Employee mapping here */}
          {About[0].team.map((item, i) => (
            <div key={i} data-aos="fade-up" className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4">
              <img className="w-full h-64 object-cover object-center" src={item.image} alt="Employee" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-700">{item.desination}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </section>
  
  );
};

export default AboutUs;
