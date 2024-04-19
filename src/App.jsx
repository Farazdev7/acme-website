import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Casestudies from "./pages/Casestudies";
import Blog from "./pages/Blog";
import CaseStudyDetail from "./Components/CaseStudyDetailPage/CaseStudyDetail";
import Process from "./pages/Process";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import BlogDetail from "./Components/BlogDetail/BlogDetail";
import Dashboard from "./Dashboard/Dashboard";
import Testing2 from "./Testing2";
// import DashboardLayout from "./Dashboard/DashboardLayout";
import DashboardSidebar from "./Dashboard/DashboardNavBar";
import DashBlog from "./Dashboard/components/DashBlog";
import DashContact from "./Dashboard/components/DashContact";
import Dashhome from "./Dashboard/components/Dashhome";
import DashCaseStudy from "./Dashboard/components/DashCaseStudy";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutComponent />}>
            <Route index element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/casestudies" element={<Casestudies />} />
            <Route path="/casestudies/:id/:catagory" element={<CaseStudyDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="blog/:postId" element={<BlogDetail />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/process" element={<Process />} />
          </Route>

          {/* <Route path="/dashboard" element={<DashboardLayout />}> */}
          {/* <Route path="/dashboard" element={<DashboardSidebar />}>
            <Route index element={<Dashboard/>} />
            <Route path="/dashboard/blog" element={<DashBlog/>} />
            <Route path="/dashboard/contactus" element={<DashContact/>} />
          </Route> */}
<Route path="/dashboard" element={<DashboardLayout />}>
<Route path="/dashboard/contact" element={<DashContact />}/>
<Route path="/dashboard/blog" element={<DashBlog/>}/>
<Route path="/dashboard/home" element={<Dashhome/>}/>
<Route path="/dashboard/casestudies" element={<DashCaseStudy/>}/>
{/* <Route path="/dashboard/con" element={<DashContact />}/> */}

</Route>
{/* <Route path="/dashboard/con" element={<DashContact />}/> */}

          <Route path="/testing2" element={<Testing2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
const DashboardLayout=()=>{
  return(
    <div>
      <DashboardSidebar/>
      <Outlet/>
    </div>
  )
}
const LayoutComponent = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;