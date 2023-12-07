import "./talk.css";
import { useRef, useEffect } from "react";
import Contacthero from "./contactHero";
import Navbar from "../navigationBar/Nav";
import LowerFooter from "../footer/lowerFooter";
import Form from "./form";
import Address from "./Address";
import { Helmet } from "react-helmet";

import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { TweenMax } from "gsap";


export default function Talk({ isDarkMode, toggleDarkMode ,handleButtonHover }) {
  let fade = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);


  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".headingsection");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 3, // Adjust this value to control when the animation starts
        reverse: true,
      })
        .on("enter", () => {
          TweenMax.to(section, 0.3, { opacity: 1, y: 0, ease: "easeIn" });
        })
        .addTo(controller);
    });
  }, []);
  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".headingsection-talk");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 3, // Adjust this value to control when the animation starts
        reverse: true,
      })
        .on("enter", () => {
          TweenMax.to(section, 0.3, { opacity: 1, y: 0, ease: "easeIn" });
        })
        .addTo(controller);
    });
  }, []);
  return (
    <>
      <Helmet><title>Contact Us | Codelinear</title></Helmet>
      <main className="contact-page" ref={(el) => (fade = el)}>
        <Navbar  handleButtonHover={handleButtonHover}  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Contacthero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}  handleButtonHover={handleButtonHover} />
        <Form isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}  handleButtonHover={handleButtonHover} />
        <Address isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}  handleButtonHover={handleButtonHover}/>
      </main>
      <div className="centerclass">
        <LowerFooter isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}  handleButtonHover={handleButtonHover} />
      </div>
    </>
  );
}
