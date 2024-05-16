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
        <NavLink to={"/"} activeClassName="active" >
        <li style={{ "--i": 7 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/'?'active':'' }>Home</li></NavLink>
           <NavLink to={"/casestudies"} activeClassName="active" >
          <li style={{ "--i": 6 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/casestudies'?'active':'' }>Case Studies</li></NavLink>
          <NavLink to={"/services"} >  <li style={{ "--i": 5 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/services'?'active':''}>Services</li></NavLink>
           <NavLink to={"/blog"} >  <li style={{ "--i": 4 }} onClick={() => setMenuToggle(!menuToggle)} className={pathname=='/blog'?'active':''}>Blog</li></NavLink>
           <NavLink to={"/process"} >  <li style={{ "--i": 3 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/process'?'active':''}> Process</li></NavLink>
            <NavLink to={"/about"} > <li style={{ "--i": 2 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/about'?'active':''}> About us</li></NavLink>
            <NavLink to={"/contactus"} > <li style={{ "--i": 1 }} onClick={() => setMenuToggle(!menuToggle)} className={ pathname=='/contactus'?'active':''}>Contact us</li></NavLink>
        </ul>
      </main>
    </div>
  );
};

export default TahirNavBar;
