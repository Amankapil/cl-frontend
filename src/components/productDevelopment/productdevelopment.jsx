import gsap from "gsap";
import { useRef, useEffect } from "react";
import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
// import Animation from "../consultingAndStrategy/animation";
import Parent from "../consultingAndStrategy/Scrooll";

export default function Productdevelopment({handleimgHover, isDarkMode, toggleDarkMode ,handleButtonHover,handledrag }) {
  let fade = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);


  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <main className="serviceinnerpage" ref={(el) => (fade = el)}>
      <Navbar  handleButtonHover={handleButtonHover}  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <section className="otherservices">
        {/* <AnimatedCursor color="255, 255, 255" /> */}

        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="inner-service-h1"
        >
          Developing Products That Transform Your Ideas Into Reality And Enrich
          Lives.
        </h1>
      </section>
      {/* <Animation /> */}
      <Parent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="slide-container">
        <Servicesslide
        handleimgHover={handleimgHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          handledrag= {handledrag}
        />
      </div>
      <Footer      handleButtonHover={handleButtonHover} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}
