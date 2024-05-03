import { IoClose } from "react-icons/io5";
import './TahirNavBar.css'; // Import the CSS file
import { Link } from 'react-router-dom';



const TahirNavBar = ({ value }) => {


  const showNavbar = !value === true ? 'show' : 'hide'; 

  return (
    <div className={`menu-mainDiv  bg-gray-700 bg-opacity-60 backdrop-blur-sm ${showNavbar}  `}>
      <main className={`tahir-nav-bar  ${showNavbar}`}>
        <ul>
          <li style={{ '--i': 6 }}><Link to={''}>Home</Link></li>
          <li style={{ '--i': 5 }}><Link to={''}>About</Link></li>
          <li style={{ '--i': 4 }}><Link to={''}>Services</Link></li>
          <li style={{ '--i': 3 }}><Link to={''}>Portfolio</Link></li>
          <li style={{ '--i': 2 }}><Link to={''}>Our Team</Link></li>
          <li style={{ '--i': 1 }}><Link to={''}>Contact</Link></li>
        </ul>
      </main>
    </div>
  );
};

export default TahirNavBar;
