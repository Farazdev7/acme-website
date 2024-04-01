import React from "react";
import { Link } from "react-router-dom";
import res1 from "../../../public/images/Resources/res1.png";
import res2 from "../../../public/images/Resources/res2.png";
import res3 from "../../../public/images/Resources/res3.png";
import res4 from "../../../public/images/Resources/res4.png";
import res5 from "../../../public/images/Resources/res5.png";

const cards = [
  {
    id: 1,
    title: "How development through Alcaline works",
    // imageUrl: "https://via.placeholder.com/300x200",
    imageUrl: res1,
    description:
      "#1 Assemble the right team... We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.",
    linkTo: "/page-1",
  },
  {
    id: 2,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: res2,
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    linkTo: "/page-2",
  },
  {
    id: 3,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: res3,
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    linkTo: "/page-2",
  },
  {
    id: 4,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: res4,
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    linkTo: "/page-2",
  },
  {
    id: 5,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: res5,
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    linkTo: "/page-2",
  },
  {
    id: 6,
    title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    imageUrl: "https://via.placeholder.com/300x200",
    description:
      "We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently.",
    linkTo: "/page-2",
  },
];

const OurResourse = () => {
  return (
    <div className="main pt-40 px-4">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Featured Services</h2>
      <div className="services-container mt-12 flex flex-wrap justify-center md:flex-nowrap">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-4">
          {cards.map((card) => (
            <div key={card.id} className="card rounded-lg shadow-md overflow-hidden">
              <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover" />
              <div className="card-content px-4 py-2">
                <h3 className="text-sm md:text-base font-bold mb-2">{card.title}</h3>
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  {card.description} {card.description.length > 10 && "..."}
                </p>
                <Link
                  to={card.linkTo}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-600 rounded-md hover:bg-indigo-700 "
                >
                  Read More
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurResourse;
