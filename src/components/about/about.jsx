import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
import Circles from "./circlesanimation";

import Abouthero from "./Abouthero";

import Crew from "./crew";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import image from "./images/ss.png";
import "./about.css";
import Vision from "./vision/Vision";
import BlogHome from "../Home/BlogHome";
import { Helmet } from "react-helmet";

export default function About({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handleimgHover,
}) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);

  let fade = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <>
      <Helmet>
        <title>About | Codelinear</title>
        <meta
          name="About"
          content="Welcome To The World Of Codelinear- The World Of Impact"
        />
        {/* <link rel="canonical" href="https://www.codelinear.com/about" /> */}
        
      </Helmet>
      <main className="aboutpage" ref={(el) => (fade = el)}>
        <Navbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          handleButtonHover={handleButtonHover}
        />
        <div className="iframe-container">
          {/* <iframe
          className="iframe"
          src="https://my.spline.design/untitled-7e4e7fbe3d7aaedc118f34cadd85536b/"
          frameborder="0"
          width="100%"
          title="j"
          height="100%"
          style={{
            position: "absolute",
          }}
        ></iframe> */}
        </div>
        <Abouthero
          handleButtonHover={handleButtonHover}
          handleimgHover={handleimgHover}
          isDarkMode={isDarkMode}
        />
        <Circles isDarkMode={isDarkMode} />
        <img src={image} alt="" className="image" />
        <Vision
          handleimgHover={handleimgHover}
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
        />
        <Crew
          handleButtonHover={handleButtonHover}
          handleimgHover={handleimgHover}
          isDarkMode={isDarkMode}
        />
        <div className="about-case">
          <BlogHome
            handleButtonHover={handleButtonHover}
            handleimgHover={handleimgHover}
            isDarkMode={isDarkMode}
          />
        </div>
        <Footer
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </main>
    </>
  );
}
