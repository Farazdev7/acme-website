import React, { useState } from "react";
import line from "../../../public/images/stacks/Deco-line.png";
import dotnet from "../../../public/images/stacks/dotnet.png";
import go from "../../../public/images/stacks/go.png";
import java from "../../../public/images/stacks/Java.png";
import mongodb from "../../../public/images/stacks/mongodb.png";
import mysql from "../../../public/images/stacks/mysql.png";
import nodejs from "../../../public/images/stacks/nodejs.png";
import php from "../../../public/images/stacks/php.png";
import python from "../../../public/images/stacks/python.png";
import ruby from "../../../public/images/stacks/ruby.png";
import react from "../../../public/images/stacks/react.png";
import angular from "../../../public/images/stacks/angular.png";
import angular2 from "../../../public/images/stacks/angular2.png";
import vue from "../../../public/images/stacks/vue.png";
import javaScript from "../../../public/images/stacks/javascript.png";
import html from "../../../public/images/stacks/html.png";
import css from "../../../public/images/stacks/css.png";

const flutter='https://cdn-images-1.medium.com/max/1200/1*5-aoK8IBmXve5whBQM90GA.png'
const nosql='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdHR8IVafJTt5lhLxDual3CibpMiq3kHNcPA&usqp=CAU'
const Ourstack = () => {
  const [activeButton, setActiveButton] = useState("frontend");

  const stacks = {
    backend: [dotnet, go, java, mongodb, mysql, nodejs, php, python, ruby],
    frontend: [react, angular2, vue, javaScript, html, css,flutter],
    database: [
      mysql,
      "https://i.ibb.co/kyYxBcQ/Postgre-SQL.png",
      mongodb,
      "https://i.ibb.co/1XCnRBG/Oracle-Database.png",
      "https://i.ibb.co/fQrr4yZ/SQL-Server.png",
      nosql,
    ],
    cms: ["https://i.ibb.co/J7sfX3y/Word-Press.png", "Drupal", "Joomla", "Contentful", "Prismic", "Statamic"],
    cloudtesting: ["AWS Lambda", "Google Cloud Functions", "Azure Functions", "Selenium", "Cypress", "Jest"],
    devops: ["Jenkins", "GitLab", "GitHub Actions", "Docker", "Kubernetes", "Terraform"],
  };

  const handleClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="ourstack flex flex-col items-center content-center text-center ">
      {/* <img src="" alt="" /> */}
      <h2 className=" font-bold mb-4 flex-col flex  items-center content-center">
        {" "}
        <img className="py-1" src={line} alt="" />
        Our <br /> Tech Stack
      </h2>
      <div className="button-container flex flex-wrap justify-center gap-2">
        {Object.keys(stacks).map((button) => (
          <button
            key={button}
            className={`
              text-black  px-4 py-4 font-medium 
              ${activeButton === button ? "text-purple-700" : ""}`}
            onClick={() => handleClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="image-container flex flex-wrap justify-center gap-8 mt-4">
        {activeButton &&
          stacks[activeButton].map((stack, index) => (
            <img
              key={index}
              src={stack}
              alt={stack}
              className=" rounded-lg shadow-md aspect-square w-fit h-14 md:w-fit md:h-20 lg:w-fit lg:h-20"
            />
          ))}
      </div>
    </div>
  );
};

export default Ourstack;
