import bgvideo from "./images/revised.mp4";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ScrollMagic from "scrollmagic";
import { TweenMax } from "gsap";

// import { Bounce } from "gsap/all";

export default function Hero({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
}) {
  const [array, setarray] = useState();

  useEffect(() => {
    axios.get("https://codelinear.in/code").then((response) => {
      setarray(response.data.homeHero);
      console.log(response.data);
    });
  }, []);

  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".servicchomesectionlinks");
    sections.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 2, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0.3, { opacity: 1, x: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });

    const sectionsheadleft = document.querySelectorAll(".home-hero-left");
    sectionsheadleft.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 2, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0.3, {
            opacity: 1,
            y: 0,
            rotation: 0,
            ease: "easeIn",
          });
        })
        .addTo(controller);
    });
    const sectionsheadright = document.querySelectorAll(".home-hero-right");
    sectionsheadright.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 3, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0.2, {
            opacity: 1,
            y: 0,
            rotation: 0,
            ease: "easeIn",
          });
        })
        .addTo(controller);
    });
    const sectionsheadrightbtn = document.querySelectorAll(
      ".home-hero-right-btn"
    );
    sectionsheadrightbtn.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 3, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, y: 0, ease: "easeOut" });
        })
        .addTo(controller);
    });
  }, []);
  return (
    <>
      <section
        style={{ backgroundColor: isDarkMode ? "white" : "#000" }}
        id="hero"
        className=""
      >
        <div className="bgi">
          <video
            className="bgv"
            src={bgvideo}
            autoPlay
            loop
            muted
            playsInline
            loading="lazy"
          ></video>
        </div>
        <section id="content">
          <h1 class="max-2xl:text-7xl " id="header">
            {/* <p className="line-hero">  

            <p className="home-hero-left ml-7 text-[#d8d6d6] ">Propelling The World,</p>
          </p>
            <p className="line-hero"> 
            <p className="home-hero-right -ml2 text-[#d8d6d6]">By Design
            </p>
            </p> */}
            {array}
          </h1>
          <p className="line-hero">
            <div className="home-hero-right-btn">
              <Link
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
                to={"/about"}
                id="aboutbtn"
              >
                <p className={isDarkMode ? "dark" : "aboutbtn_content"}>
                  About Us
                </p>
              </Link>
            </div>
          </p>
        </section>
      </section>
    </>
  );
}
