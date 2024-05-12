import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
<<<<<<< HEAD
import ParticlesBackground from "./Components/Particles/ParticlesBackground.jsx";
import Loader from "./Components/Loader/Loader.jsx";
// import Design from "./Components/Particles/Design";
=======
>>>>>>> upstream/main
// import ReviewSliderTesting2 from "./Testing2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* wraper with suspense for lazy loading */}
<<<<<<< HEAD
    {/* <div className="min-h-[100vh] flex justify-center items-center  text-3xl">Loading...</div> */}
    <Suspense fallback={<Loader/>}>
    {/* <ParticlesBackground/>   */}
    {/* <Design/> */}
=======
    <Suspense fallback={<div className="min-h-[100vh] flex justify-center items-center  text-3xl">Loading...</div>}>
>>>>>>> upstream/main
    <App />
    </Suspense>
  </React.StrictMode>
);
