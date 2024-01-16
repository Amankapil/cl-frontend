import { useRef, useEffect } from "react";
import "./career.css";
import CareerHero from "./Careerhero";
import gsap from "gsap";
import Horizontalanimation1 from "./Horizontalanimation1";
import Horizontalanimation2 from "./Horizontalanimation2";
import Positions from "./Position";
import Whyus from "./Whyus";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
import { Helmet } from "react-helmet";
import PositionDynamic from "./PositionDynamic";

export default function Career({
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
      defaults: { duration: 2 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Career | Codelinear</title>
        <meta
          name="Career"
          content="We Are An Impact-Driven Firm,
       Join Us And Be A Part Of The Impact"
        />
        <link rel="canonical" href="https://www.codelinear.com/career" />
      </Helmet>
      <Navbar
        handleButtonHover={handleButtonHover}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="career-page" ref={(el) => (fade = el)}>
        <CareerHero
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Horizontalanimation1
          handleimgHover={handleimgHover}
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Whyus
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Horizontalanimation2
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        {/* <Positions
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        /> */}

        <PositionDynamic
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </main>

      <Footer
        handleButtonHover={handleButtonHover}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </>
  );
}
