import React, { useContext, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./TahirNavBar.css"; // Import the CSS file
import ParticlesBackground from "../Particles/ParticlesBackground";
import { Btncontext } from "../Contexts/MenuButton";

const TahirNavBar = ({ value }) => {
  const { menuToggle, setMenuToggle } = useContext(Btncontext);

  const location = useLocation();
  const pathname = location.pathname;
  console.log(pathname)
  // Extracting the active class from the pathname
  // const activeClass = pathname.substring(1)


 

  const showNavbar = !value === true ? "show" : "hide";

  return (
    <div className={`menu-mainDiv bg-gray-700 bg-opacity-60 backdrop-blur-sm ${showNavbar}`}>
      <ParticlesBackground/>
      <main className={`tahir-nav-bar ${showNavbar}`}>
        <ul>
        <li style={{ "--i": 7 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/'?'active':'' }>
            <NavLink to={"/"} activeClassName="active" >Home</NavLink>
          </li>
          <li style={{ "--i": 6 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/casestudies'?'active':'' }>
            <NavLink to={"/casestudies"} activeClassName="active" >Case Studies</NavLink>
          </li>
          <li style={{ "--i": 5 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/services'?'active':''}>
            <NavLink to={"/services"} >Services</NavLink>
          </li>
          <li style={{ "--i": 4 }} onClick={() => setMenuToggle(!menuToggle)} className={pathname=='/blog'?'active':''}>
            <NavLink to={"/blog"} >Blog</NavLink>
          </li>
          <li style={{ "--i": 3 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/process'?'active':''}>
            <NavLink to={"/process"} >Process</NavLink>
          </li>
          <li style={{ "--i": 2 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/about'?'active':''}>
            <NavLink to={"/about"} >About us</NavLink>
          </li>
          <li style={{ "--i": 1 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/contactus'?'active':''}>
            <NavLink to={"/contactus"} >Contact us</NavLink>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default TahirNavBar;
