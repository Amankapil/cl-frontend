import image6 from "./images/Vector.svg";
import image7 from "./images/Vector-1.svg";
import image8 from "./images/Vector-2.svg";
import image9 from "./images/Vector-3.svg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Whyus({ isDarkMode, toggleDarkMode ,handleButtonHover }) {
  const [array, setarray] = useState("");
  const [Aboutarray, setAboutarray] = useState();
  const [Servicesarray, setServicesarray] = useState();
  const [vision_pera, setvision_pera] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [guiding_pera, setguiding_pera] = useState();
  const [grothPera, setgrothPera] = useState("");
  const [flex, setflex] = useState("");
  const [flexPera, setflexPera] = useState("");
  const [lifeHeading, setlifeHeading] = useState("");
  const [lifePera, setlifePera] = useState("");





  useEffect(() => {
    axios
      .get("https://codelinear.in/code/careerwhyus")
      .then((response) => {
        setServicesarray(response.data.heading);
        setAboutarray(response.data.pera1);
        setarray(response.data.pera2);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://codelinear.in/code/careerBoxes")
      .then((response) => {
        setgrothPera(response.data.grothHeading);
        setflex(response.data.grothPera);
        setflexPera(response.data.flex);
        setguiding_pera(response.data.flexPera);
        setvision_pera(response.data.value);
        setEditMode(response.data.valuePera);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://codelinear.in/code/careerlifeat")
      .then((response) => {
        setlifeHeading(response.data.lifeHeading);
        setlifePera(response.data.lifePera);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".headingsection");
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

  let proxy = { skew: 0 },
  skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
  clamp = gsap.utils.clamp(-30,20); // don't let the skew go beyond 20 degrees.

ScrollTrigger.create({
  onUpdate: (self) => {
    let skew = clamp(self.getVelocity() / -300);
    // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
    if (Math.abs(skew) > Math.abs(proxy.skew)) {
      proxy.skew = skew;
      gsap.to(proxy, {
        skew: 0,
        duration: 0.8,
        ease: "power3",
        overwrite: true,
        onUpdate: () => skewSetter(proxy.skew),
      });
    }
  },
});

// make the right edge "stick" to the scroll bar. force3D: true improves performance
gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });


  return (
    <section className="whyus ">
      <div className="why-us-container headingsection">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="whyus-h1"
        >
          Why Us?
          {/* {Servicesarray} */}
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="whyus-para headingsection"
        >
          We are a diverse blend of experts, young professionals, and even
          mentees. And though we may come from diverse backgrounds, our drive to
          make a difference in society unites us.
          {/* {Aboutarray} */}
          {/* <p
            className="mt-5 headingsection"
            style={{
              color: "#848484",
            }}
          > */}
            <br />
            <br />
            Our cohort comprises designers, developers, strategists, and
            marketers, and collectively we blend each of our expertise to
            innovate, to impact.
            <br />
            If this sounds like you, we have a role for you!
            {/* {array} */}
          {/* </p> */}
        </p>
      </div>
      <div className="main-container  ">
        <div className="whyus-container skewElem ">
          <div className="whyus-content-container ">
            <span className="no">
              COLLECTIVE GROWTH
              {/* {grothPera} */}
            </span>
            <p className="wucontainer-para">
              We ensure the collective growth and upliftment of our crew. We
              organise several workshops, provide access to numerous skill
               courses, and foster an environment of mentorship
              within  firm.
              {/* {flex} */}
            </p>
          </div>
          <img src={image6} alt="" className="card-imgs" loading="lazy" />
        </div>
        <div className="whyus-container skewElem">
          <div className="whyus-content-container">
            <span className="no">
            FLEXIBILITY
            {/* {flexPera} */}
            
            </span>
            <p className="wucontainer-para">
              We strive to provide our team with the most flexible and
              autonomous work arrangement, enabling them to drive maximum
              productivity whilst maintaining work-life balance.{" "}
              {/* {guiding_pera} */}
            </p>
          </div>
          <img src={image8} alt="" className="card-imgs" loading="lazy" />
        </div>
        <div className="whyus-container skewElem">
          <div className="whyus-content-container">
            <span className="no">
            VALUE-BASED PROJECTS
            {/* {vision_pera} */}
            </span>
            <p className="wucontainer-para">
              As a part of Codelinear, you will get the opportunity to hone your
              skills as well as disposition by working on a diverse range of
              projects that actually create a tangible impact for clients and
              society.
              {/* {editMode} */}
            </p>
          </div>
          <img src={image7} alt="" className="card-imgs" loading="lazy" />
        </div>
      </div>
      <div className="life-container max-xl:my-10 headingsection">
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="life-h1"
        >
          Life At Codelinear
          {/* {lifeHeading} */}
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="life-para headingsection mt-6"
        >
          We believe in actions over statements. When we say we are diverse, we
          are inclusive and we are here to give back to the community, we mean
          it! We have painstakingly built an environment of "Community" within
          us, in which we uplift and empower one another, and we take immense
          pride in it.
          {/* {lifePera} */}
        </p>
      </div>
    </section>
  );
}
