import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./TahirNavBar.css"; // Import the CSS file

const TahirNavBar = ({ value }) => {

  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname)
  // Extracting the active class from the pathname
  // const activeClass = pathname.substring(1)


 

  const showNavbar = !value === true ? "show" : "hide";

  return (
    <div className={`menu-mainDiv bg-gray-700 bg-opacity-60 backdrop-blur-sm ${showNavbar}`}>
      <main className={`tahir-nav-bar ${showNavbar}`}>
        <ul>
          <li style={{ "--i": 6 }}  className={ pathname=='/casestudies'?'active':'' }>
            <NavLink to={"/casestudies"} activeClassName="active" >Case Studies</NavLink>
          </li>
          <li style={{ "--i": 5 }} className={ pathname=='/services'?'active':''}>
            <NavLink to={"/services"} >Services</NavLink>
          </li>
          <li style={{ "--i": 4 }} className={pathname=='/blog'?'active':''}>
            <NavLink to={"/blog"} >Blog</NavLink>
          </li>
          <li style={{ "--i": 3 }} className={ pathname=='/process'?'active':''}>
            <NavLink to={"/process"} >Process</NavLink>
          </li>
          <li style={{ "--i": 2 }} className={+ pathname=='/about'?'active':''}>
            <NavLink to={"/about"} >About us</NavLink>
          </li>
          <li style={{ "--i": 1 }} className={ pathname=='/contactus'?'active':''}>
            <NavLink to={"/contactus"} >Contact us</NavLink>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default TahirNavBar;
