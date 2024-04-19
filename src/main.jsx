import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import ReviewSliderTesting2 from "./Testing2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* wraper with suspense for lazy loading */}
    <Suspense>
    <App />
    </Suspense>
    {/* <ReviewSlider /> */}
    {/* <ReviewSliderTesting2 /> */}
  </React.StrictMode>
);
