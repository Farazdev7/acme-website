import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import iklogo from "../../../public/images/Ik developers.png";
import logo from "../../../public/images/Vector.png";
const navigation = [
  { name: "About us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/casestudies" },
  { name: "Blog", path: "/blog" },
  // { name: "How it Works", path: "/howitworks" },
  // { name: "Hire", path: "/hire" },
  { name: "Process", path: "/process" },
];
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>
              <img className="logo" src={logo} alt="" />
            </span>
            <span className="icon">
              <img className="iklogo" src={iklogo} alt="" />
            </span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* {navigation.map((nav, i) => (
              <li key={i} className="nav-item">
                <NavLink activeClassName="active" className="nav-links" onClick={handleClick}>
                  <Link to={nav.path}>{nav.name}</Link>
                </NavLink>
              </li>
            ))} */}

            {navigation.map((nav, i) => (
              <li key={i} className="nav-item">
                <NavLink to={nav.path} activeClassName="active" className="nav-links" onClick={handleClick}>
                  {nav.name}
                </NavLink>
              </li>
            ))}

            {/* <li className="nav-item">
              <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleClick}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleClick}>
                Contact Us
              </NavLink>
            </li> */}
            <li>
              {" "}
              {/* <button className="contact-us-mobile"> */}
              <span className="contact-us-mobile">
                ><Link to="/contactus">Contact us</Link>
              </span>
              {/* </button> */}
            </li>
          </ul>
          {/* <button className="contact-us">Contact us</button> */}
          <span className="contact-us">
            <Link to="/contactus">Contact us</Link>
          </span>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}
            {click ? (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
