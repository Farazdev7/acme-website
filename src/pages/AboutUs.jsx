import React, { useEffect } from "react";
import { GiPodiumWinner } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiSolidBookAlt } from "react-icons/bi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import Aos from "aos";
import "aos/dist/aos.css";

// thats array of object will come from backend
const About = [
  {
    bgimg: "",
    title: "",
    // here is tream array of objects
    team: [
      {
        name: "Faraz Rasool",
        image:
          "https://media.licdn.com/dms/image/D4D35AQFLLJjx2ess4g/profile-framedphoto-shrink_400_400/0/1707802088320?e=1712217600&v=beta&t=feExePu2uNEy6mP7yc-50CjHN0toWmdrAl_7I3GJTTc",
        desination: "CEO",
      },
      {
        name: "MERN Stack Developer",
        image:
          "https://media.licdn.com/dms/image/D4E03AQHjHufBy6Slgg/profile-displayphoto-shrink_800_800/0/1698992294688?e=1717027200&v=beta&t=SxnAaipJtYSFpFic37R5H1sXIeEGdv2ctI-1_jBOIF8",
        desination: "MERN Stack Developer",
      },
      {
        name: "Asher",
        image:
          "https://media.licdn.com/dms/image/D4D03AQHS1lBkLWCAzA/profile-displayphoto-shrink_800_800/0/1679736742854?e=1717027200&v=beta&t=1TPZSaD3ERXPyyT6l7KttjQez18GTh2WWHEkhX8GfYk",
        desination: "Flutter",
      },
      {
        name: "Ahsan Rasheed",
        image: "https://i.ibb.co/k8GPjh9/Whats-App-Image-2024-03-28-at-12-44-41-667cb29f.jpg",
        desination: "MERN Stack Developer",
      },
    ],
  },
];

// {
//   name: "Faraz Rasool",
//   image:
//     "https://media.licdn.com/dms/image/D4D35AQFLLJjx2ess4g/profile-framedphoto-shrink_400_400/0/1707802088320?e=1712217600&v=beta&t=feExePu2uNEy6mP7yc-50CjHN0toWmdrAl_7I3GJTTc",
//   desination: "CEO",
// },
// {
//   name: "MERN Stack Developer",
//   image:
//     "https://media.licdn.com/dms/image/D4E03AQHjHufBy6Slgg/profile-displayphoto-shrink_800_800/0/1698992294688?e=1717027200&v=beta&t=SxnAaipJtYSFpFic37R5H1sXIeEGdv2ctI-1_jBOIF8",
//   desination: "MERN Stack Developer",
// },
// {
//   name: "Asher",
//   image:
//     "https://media.licdn.com/dms/image/D4D03AQHS1lBkLWCAzA/profile-displayphoto-shrink_800_800/0/1679736742854?e=1717027200&v=beta&t=1TPZSaD3ERXPyyT6l7KttjQez18GTh2WWHEkhX8GfYk",
//   desination: "Flutter",
// },
// {
//   name: "Ahsan Rasheed",
//   image: "https://i.ibb.co/k8GPjh9/Whats-App-Image-2024-03-28-at-12-44-41-667cb29f.jpg",
//   desination: "MERN Stack Developer",
// },

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    Aos.init();
  });
  return (
    <section className="bg-gray-100 ">
      <div className="grid place-items-center text-center">
        {/* Mission Banner */}
        <div className="w-full ">
          <img
            className="w-full h-auto object-cover object-center"
            src="https://thedistance.co.uk/wp-content/uploads/2023/01/IMG_5759-1-2-e1673451940838.png"
            alt="Mission Banner"
          />
          {/* our mission */}
          <div className="pt-6  bg-orange-500 pb-16 ">
            <h3 className="text-xl md:text-3xl font-semibold mb-4 ">Our Mission</h3>
            <p className="text-gray-700 font-[400]">
              We are dedicated to providing innovative software solutions that empower businesses and individuals to
              achieve their goals efficiently and effectively.
            </p>
          </div>
        </div>
        {/* Our Values Section */}
        <div className="mt-12 my-16 ">
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
        <section className="bg-[#99d8e7] w-full py-14 ">
          <article className="text-white text-center font-[400]">
            <h1 className="text-xl md:text-2xl lg:text-4xl"> Senior Management Team</h1>
            <p>
              Our SMT brings a world of experience to the company. Our business leaders inspire and guide the team to
              ensure the quality and efficiency of all our app development projects.
            </p>
          </article>
          <div className="w-full  flex flex-wrap justify-center space-x-4 mt-12 text-white text-center font-[400] ">
            {/* Employee maping here */}

            {About[0].team.map((item, i) => (
              <div key={i} data-aos="fade-up" className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4">
                <img className="w-full h-64 object-cover object-center" src={item.image} alt="Employee" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-700">{item.desination}</p>
                </div>
              </div>
            ))}
            {/* <div data-aos="fade-right" className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://media.licdn.com/dms/image/D4D35AQFLLJjx2ess4g/profile-framedphoto-shrink_400_400/0/1707802088320?e=1712217600&v=beta&t=feExePu2uNEy6mP7yc-50CjHN0toWmdrAl_7I3GJTTc"
                alt="Employee"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Faraz Rasool</h3>
                <p className="text-gray-700">CEO</p>
              </div>
            </div> */}
            {/* Employee Card 2 */}
            {/* <div data-aos="fade-up" className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://media.licdn.com/dms/image/D4E03AQHjHufBy6Slgg/profile-displayphoto-shrink_800_800/0/1698992294688?e=1717027200&v=beta&t=SxnAaipJtYSFpFic37R5H1sXIeEGdv2ctI-1_jBOIF8"
                alt="Employee"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Hamza</h3>
                <p className="text-gray-700">MERN Stack Developer</p>
              </div>
            </div> */}
            {/* employee card 3 */}
            {/* <div data-aos="fade-down" className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://media.licdn.com/dms/image/D4D03AQHS1lBkLWCAzA/profile-displayphoto-shrink_800_800/0/1679736742854?e=1717027200&v=beta&t=1TPZSaD3ERXPyyT6l7KttjQez18GTh2WWHEkhX8GfYk"
                alt="Employee"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Asher</h3>
                <p className="text-gray-700">Flutter</p>
              </div>
            </div> */}
            {/* employee card 4 */}
            {/* <div data-aos="fade-left" className="max-w-sm rounded-lg overflow-hidden shadow-lg mb-4">
              <img
                className="w-full h-64 object-cover object-center"
                src="https://i.ibb.co/k8GPjh9/Whats-App-Image-2024-03-28-at-12-44-41-667cb29f.jpg"
                alt="Employee"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Ahsan Rasheed</h3>
                <p className="text-gray-700">MERN Stack Developer</p>
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutUs;
