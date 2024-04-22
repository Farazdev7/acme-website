import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import ReviewSliderTesting2 from "./Testing2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* wraper with suspense for lazy loading */}
    <Suspense fallback={<div className="min-h-[100vh] flex justify-center items-center  text-3xl">Loading...</div>}>
    <App />
    </Suspense>
  </React.StrictMode>
);
