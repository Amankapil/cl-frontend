// import axios from "axios";
// import { useState } from "react";
import { useEffect } from "react";
import ScrollMagic from "scrollmagic";
// import { gsap, Power2 } from 'gsap';
import { TweenMax } from "gsap";

const Abouthero = (isDarkMode) => {
  // const [heroaboutGET, setHeroAboutGET] = useState();

  useEffect(() => {
    const controller = new ScrollMagic.Controller();
    const sectionsheadleft = document.querySelectorAll(".about-hero-left");
    sectionsheadleft.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 3, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1, y:0, rotation:0, ease: "easeOut" });
        })
        .addTo(controller);
    });
    const sectionsheadright = document.querySelectorAll(".about-hero-right");
    sectionsheadright.forEach((section) => {
      new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 3, // Adjust this value to control when the animation starts
        reverse: false,
      })
        .on("enter", () => {
          TweenMax.to(section, 0, { opacity: 1,y:0, rotation: 0, ease: "easeIn" });
        })
        .addTo(controller);
    });
  
  }, []);


  // useEffect(() => {
  //   axios.get("https://codelinear.in/code/aboutHero").then((response) => {
  //     // setarray(response.data.homeHero);
  //     setHeroAboutGET(response.data.aboutHeading);
  //     console.log(response.data);
  //   });
  // }, []);
  return (
    <section className="about-hero">
      <h1
        style={{ color: isDarkMode ? "#d8d6d6" : "#000000" }}
        className="about-hero-h1 text-white"
      >
      <p className="line-hero-about ">  
      <p className="about-hero-left ml-7  text-[#d8d6d6]">
        Welcome To The World Of Codelinear-
      </p>
      </p>
        {/* <br /> */}
        <p className="line-hero-about ">  
        <p className="about-hero-right ml-7  text-[#d8d6d6]">
         The World Of Impact
        </p>
        </p>
        {/* {heroaboutGET} */}
      </h1>
    </section>
  );
};

export default Abouthero;
