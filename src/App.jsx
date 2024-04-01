import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Casestudies from "./pages/Casestudies";
import Blog from "./pages/Blog";
import Hire from "./pages/Hire";
import CaseStudyDetail from "./Components/CaseStudyDetailPage/CaseStudyDetail";
import Process from "./pages/Process";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import blogData from "./Components/data/Blogs";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        {/* landing page */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* rought for the services page */}
        <Routes>
          <Route path="/services" element={<Services />} />
        </Routes>
        {/* route for the case study  */}
        <Routes>
          <Route path="/casestudies" element={<Casestudies />} />
        </Routes>

        {/* ================================================================================== */}
        <Routes>
          <Route path="/casestudies/:id/:catagory" element={<CaseStudyDetail />} />
        </Routes>
        {/* routes for the blogs */}
        <Routes>
          <Route path="/blog" element={<Blog />} />
        </Routes>
        {/* routes for the blogs Detail page */}
        <Routes>
          <Route path="blog/:postId" element={<BlogDetail />} />
          {/* <Route path="blog/:postId" render={() => <BlogDetail posts={blogData} />} /> */}
        </Routes>
        {/* routes for the contact us page */}
        <Routes>
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        {/* for about us */}
        <Routes>
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        {/* route the hire */}
        <Routes>
          <Route path="/hire" element={<Hire />} />
        </Routes>

        <Routes>
          <Route path="/process" element={<Process />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
