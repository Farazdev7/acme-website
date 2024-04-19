// DashboardSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function DashboardSidebar() {
  return (
    <div className="bg-gray-800 h-full w-[10vw]   top-0 left-0 fixed px-3">
      <ul className="mt-6">
        <li>
          <NavLink exact to="/dashboard/home" activeClassName="text-orange-500" className="block py-2 px-4 text-white hover:text-gray-300">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/casestudies" activeClassName="text-orange-500" className="block py-2 px-4 text-white hover:text-gray-300">CaseStudy</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/blog" activeClassName="text-orange-500" className="block py-2 px-4 text-white hover:text-gray-300">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard/contact" activeClassName="text-orange-500" className="block py-2 px-4 text-white hover:text-gray-300">Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DashboardSidebar;
