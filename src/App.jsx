import  { lazy, useContext, useState } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Casestudies from "./pages/Casestudies";
import Process from "./pages/Process";
import TahirNavBar from "./Components/NavBar/TahirNavBar";
import MenuButton from "./Components/NavBar/MenuButton/MenuButton";
import { Btncontext } from "./Components/Contexts/MenuButton";
// import ParticlesBackground from "./Components/Particles/ParticlesBackground";
// import Testing from "./pages/Testing";
// to use the lazy loading and code spliting we need 
// to wrap the main file for example in this app i wrap the app.js 
// becase in this component i use lazy loading
// ================================================
// lazy loading and spling component through lazy 
// =================================================
const AboutUs=lazy(()=>{return import("./pages/AboutUs")})
const ContactUs=lazy(()=>{return import("./pages/ContactUs")})
const Blog=lazy(()=>{return import("./pages/Blog")})
const BlogDetail=lazy(()=>{return import("./Components/BlogDetail/BlogDetail")})
const CaseStudyDetail=lazy(()=>{return import("./Components/CaseStudyDetailPage/CaseStudyDetail")})
// ================================================
// lazy loading and spling component through lazy 
// =================================================

const App = () => {
  return (
    

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/casestudies" element={<Casestudies />} />
            <Route path="/casestudies/:id/:catagory" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route  path="blog/:postId" element={<BlogDetail />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/process" element={<Process />} />
          </Route>
        </Routes>
      </BrowserRouter>


  );
};

const LayoutComponent = () => {
  const[menuToggle ,setMenuToggle]=useState(true)

  return (
    <Btncontext.Provider value={{menuToggle, setMenuToggle}}>

    <div>
      {/* lg:hidden block */}
      <div className="hidden "> <NavBar /></div>
      {/* {clasName=''} */}


      {/* <ParticlesBackground/>   */}
      {/* <Testing/> */}
      {/* lg:block hidden*/}
      <div className=""> <TahirNavBar value={menuToggle}/></div>

             {/* lg:block hidden*/}
      <div className=""><MenuButton/></div> 
      <Outlet />
      <Footer />
      
    </div>
    </Btncontext.Provider>

  );
};

export default App;