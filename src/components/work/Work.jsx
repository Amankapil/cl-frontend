import "./work.css";
import Workhero from "./Workhero";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
import Card from "./card/Card";
// import Card2 from "./card/Card2";
import { useRef, useEffect } from "react";

import { Helmet } from "react-helmet";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { TweenMax } from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
// import Card3 from "./card/Card3";

gsap.registerPlugin(ScrollTrigger);

export default function Work({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handleimgHover,
  handledrag,
}) {
  const handleButtonMouseEnter = () => {
    handledrag(true);
  };

  const handleButtonMouseLeave = () => {
    handledrag(false);
  };

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

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".herosection");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, y: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);

  // let section = gsap.utils.toArray();

  return (
    <>
      <Helmet>
        <title>Work | Codelinear</title>
        <meta
          name="Work"
          content="We're Proud To Show You Our Accomplishments"
        />
        <link rel="canonical" href="https://www.codelinear.com/work" />
      </Helmet>
      <main className="aboutpage" ref={(el) => (fade = el)}>
        <Navbar
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Workhero
          handleButtonHover={handleButtonHover}
          handleimgHover={handleimgHover}
          isDarkMode={isDarkMode}
        />

        <div
          onMouseEnter={handleButtonMouseEnter}
          onMouseLeave={handleButtonMouseLeave}
        >
          <Card
            handleButtonHover={handleButtonHover}
            handleimgHover={handleimgHover}
            isDarkMode={isDarkMode}
            handledrag={handledrag}
          />
        </div>
        {/* <Card2 handleButtonHover={handleButtonHover}
          handleimgHover={handleimgHover}
          isDarkMode={isDarkMode} /> */}
        {/* <Card3/> */}
        <section className="">
          <Footer
            handleButtonHover={handleButtonHover}
            isDarkMode={isDarkMode}
            handleimgHover={handleimgHover}
            toggleDarkMode={toggleDarkMode}
          />
        </section>
      </main>
    </>
  );
}
