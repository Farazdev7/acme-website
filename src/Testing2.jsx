
import React from 'react'
import { NavLink } from 'react-router-dom'

const Testing2 = () => {
  return (
    <React.Fragment>
      <main>
        <div className="nav container flex gap-8 ">
          <NavLink to={"/dashboard/contactus"}  >
          Contact Us
          </NavLink>
          <NavLink to={"/dashboard/about Us"}  >
          About Us
          </NavLink>
          <NavLink to={"/dashboard/blogs"}  >
          Blogs
          </NavLink>
          <NavLink to={"/dashboard/home"}  >
          Home
          </NavLink>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Testing2
