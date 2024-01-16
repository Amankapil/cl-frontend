import image1 from "./Images/Frame 43.png";
import image2 from "./Images/Frame 44.png";
import image3 from "./Images/Frame 46.png";
import image4 from "./Images/Frame 472.png";
import image5 from "./Images/Frame 45.png";
import image6 from "./Images/Frame 47.png";
import discovery from "./Images/Frame 58.png";
import story from "./Images/Frame 60.png";
import brand from "./Images/Frame 61.png";
import Ai from "./Images/Frame 1000001793.png";
import SEO from "./Images/Frame 64.png";
import UX from "./Images/Frame 57.png";
import gestalt from "./Images/Frame 62.png";
import BVG from "./Images/Frame 59.png";
import listen from "./Images/Frame 63.png";
import reactimg from "./Images/Frame 4.svg";
import { useRef, useState } from "react";
import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Blogsection({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handleimgHover
}) {
  let empathy = useRef(null);
  let db = useRef(null);
  let digitalmarketing = useRef(null);
  let dw = useRef(null);
  let MVP = useRef(null);
  let design = useRef(null);
  let gp = useRef(null);
  let NCR = useRef(null);
  let SVM = useRef(null);
  let Bg = useRef(null);
  let NSEO = useRef(null);
  let Cust = useRef(null);
  let UXi = useRef(null);
  let STM = useRef(null);
  let RVF = useRef(null);
  let all = useRef(null);
  let aii = useRef(null);

  const [isSortActive, setIsSortActive] = useState(false);
  const [isSort1Active, setIsSort1Active] = useState(false);
  const [isSort2Active, setIsSort2Active] = useState(false);
  const [isSort3Active, setIsSort3Active] = useState(false);
  const [isSort4Active, setIsSort4Active] = useState(false);
  const [isSort5Active, setIsSort5Active] = useState(false);
  const [isSort6Active, setIsSort6Active] = useState(false);
  const [isSort7Active, setIsSort7Active] = useState(false);
  const [isSort8Active, setIsSort8Active] = useState(false);
  const [isSort9Active, setIsSort9Active] = useState(false);
  const [isSort10Active, setIsSort10Active] = useState(false);
  const [isSort11Active, setIsSort11Active] = useState(false);



  const onClickSort1 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(dw, 0, { display: "flex" });
    gsap.to(db, 0, { display: "flex" });
    gsap.to(gp, 0, { display: "flex" });
    gsap.to(NCR, 0, { display: "flex" });
    gsap.to(NSEO, 0, { display: "flex" });
    gsap.to(Cust, 0, { display: "flex" });
    gsap.to(UXi, 0, { display: "flex" });
    gsap.to(STM, 0, { display: "flex" });
    gsap.to(empathy, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(MVP, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "flex" });
    gsap.to(Bg, 0, { display: "flex" });
    gsap.to(aii, 0, { display: "flex" });
    setIsSortActive(true);
  };
  const onClickSort2 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "flex" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(STM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort2Active(true);

  };
  const onClickSort3 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "flex" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "flex" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "flex" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "flex" });
    gsap.to(design, 0, { display: "flex" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "flex" });
    setIsSort3Active(true);
    
  };
  const onClickSort4 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "flex" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "flex" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort4Active(true);

  };
  const onClickSort5 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "flex" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });

    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort5Active(true);

  };
  const onClickSort6 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "flex" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "flex" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort6Active(true);

  };
  const onClickSort8 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "flex" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort7Active(true);

  };
  const onClickSort7 = () => {
    gsap.to(digitalmarketing, 0, { display: "flex" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "none" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort8Active(true);

  };
  const onClickSort9 = () => {
    gsap.to(digitalmarketing, 0, { display: "none" });
    gsap.to(dw, 0, { display: "none" });
    gsap.to(db, 0, { display: "none" });
    gsap.to(gp, 0, { display: "none" });
    gsap.to(NCR, 0, { display: "flex" });
    gsap.to(NSEO, 0, { display: "none" });
    gsap.to(Cust, 0, { display: "none" });
    gsap.to(UXi, 0, { display: "none" });
    gsap.to(STM, 0, { display: "none" });
    gsap.to(empathy, 0, { display: "none" });
    gsap.to(design, 0, { display: "none" });
    gsap.to(MVP, 0, { display: "none" });
    gsap.to(SVM, 0, { display: "none" });
    gsap.to(all, 0, { visibility: "visible" });
    gsap.to(RVF, 0, { display: "none" });
    gsap.to(Bg, 0, { display: "none" });
    gsap.to(aii, 0, { display: "none" });
    setIsSort9Active(true);

  };

  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };

  const handleimgMouseEnter = () => {
    handleimgHover(true);
  };

  const handleimgMouseLeave = () => {
    handleimgHover(false);
  };


  useEffect(() => {
    const controller = new ScrollMagic.Controller();

    const sections = document.querySelectorAll(".servicchomesection");
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

  return (
    <>

    <div className="flex w-full justify-center">

  
      <section className="blog-content-section servicchomesection">
        <div className="blog-btns  servicchomesection">
        <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{
              color: isDarkMode ? "#00000099" : "#848484",
              visibility: "visible",
            }}
            className="blog-btn-content"
            ref={(el) => (all = el)}
            onClick={onClickSort1}
          >
            All
          </button>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort2}
          >
            Branding
          </button>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort3}
          >
            UI/UX Design
          </button>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort4}
          >
            SEO
          </button>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort5}
          >
            Social Media
          </button>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort6}
          >
            Product Development
          </button>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort7}
          >
            Digital Marketing
          </button>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort8}
          >
            eCommerce
          </button>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="blog-btn-content"
            onClick={onClickSort9}
          >
            No Code
          </button>
        </div>
      </section>
      </div>


      <section className="blog-section" >
        <Link
        
        onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/ai"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (aii = el)}>
            <img src={Ai} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
              AI-Powered Design Tools
              </h1>
            </div>
          </div>
        </Link>
        <Link
        
        onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/Branded"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (db = el)}>
            <img src={brand} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Disruptive Branding
              </h1>
            </div>
          </div>
        </Link>
        <Link
          onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/Discovery"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (dw = el)}>
            <img src={discovery} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Discovery Workshop
              </h1>
            </div>
          </div>
        </Link>
        <Link 
          onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/gestalt"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (gp = el)}>
            <img src={gestalt} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Gestalt Psychology
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/bing-vs-google"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (Bg = el)}>
            <img src={BVG} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Bing Vs Google
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/Changing"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (NSEO = el)}>
            <img src={SEO} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                The Changing Nature Of SEO
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/Listening"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (Cust = el)}>
            <img src={listen} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                When To Listen To your customer
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/UX"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (UXi = el)}>
            <img src={UX} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                UX Desing Benefits SMEs
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/Story"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (STM = el)}>
            <img src={story} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Storytelling in Marketing
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/react-vs-flutter"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (RVF = el)}>
            <img src={reactimg} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                React Native Vs Flutter
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/Design"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (design = el)}>
            <img src={image4} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Design System
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/shopify-vs-magento"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (SVM = el)}>
            <img src={image6} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Shopify Vs Magento
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/no-code-revolution"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (NCR = el)}>
            <img src={image5} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                No Code Revolution
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/minimum-viable-product"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (MVP = el)}>
            <img src={image3} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Minimum Viable Product
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/digital-marketing-trends-2023"} className="link-imgs">
          <div
            className="blog-containers"
            ref={(el) => (digitalmarketing = el)}
          >
            <img src={image2} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Digital Marketing Trends 2023
              </h1>
            </div>
          </div>
        </Link>
        <Link   onMouseEnter={handleimgMouseEnter}
            onMouseLeave={handleimgMouseLeave} to={"/empathy-in-UX"} className="link-imgs">
          <div className="blog-containers" ref={(el) => (empathy = el)}>
            <img src={image1} alt="" className="blog-imgs" />
            <div className="blog-container-content">
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="blog-heading"
              >
                Empathy In UX
              </h1>
            </div>
          </div>
        </Link>
      </section>
    </>
  );
}
