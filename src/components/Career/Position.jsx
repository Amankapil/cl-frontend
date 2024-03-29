import { useRef, useEffect, useState } from "react";
import axios from "axios";

import ScrollMagic from "scrollmagic";
import { gsap, Power2 } from "gsap";
import { TweenMax } from "gsap";

function Position({ isDarkMode, toggleDarkMode, handleButtonHover }) {
  let positioncard = useRef(null);
  let applyingform = useRef(null);
  let jobdesc = useRef(null);
  let positioncard1 = useRef(null);
  let applyingform1 = useRef(null);
  let jobdesc1 = useRef(null);
  let positioncard2 = useRef(null);
  let applyingform2 = useRef(null);
  let jobdesc2 = useRef(null);
  let positioncard3 = useRef(null);
  let applyingform3 = useRef(null);
  let jobdesc3 = useRef(null);
  let positioncard4 = useRef(null);
  let applyingform4 = useRef(null);
  let jobdesc4 = useRef(null);
  let position = useRef(null);

  const [fristName, SetfristName] = useState("");
  const [lastName, SetlastName] = useState("");
  const [email, SetEmail] = useState("");
  const [number, SetNumber] = useState("");
  const [message, Setmessage] = useState("");
  const [openposition, SetOpenPosition] = useState("");

  const handleSubmit = async (e) => {
    const data = { fristName, lastName, email, message, openposition };
    console.log(data);

    if (!openposition) {
      alert("Please confirm position");
      return;
    }
    const response = await axios
      .post(
        // "https://codelinear.in/code/send_mail_career",
        "https://codelinear.in/code/send_mail_career",
        data
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Your Application was sent successfully");
          // window.location.reload();
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const application = () => {
    gsap.to(positioncard, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide = () => {
    gsap.to(positioncard, 0.1, { css: { display: "none" } });
    gsap.to(applyingform, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow = () => {
    gsap.to(jobdesc, 0.1, { css: { display: "none" } });
    gsap.to(applyingform, 0.1, { css: { display: "block" } });
  };
  const application1 = () => {
    gsap.to(positioncard1, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc1, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide1 = () => {
    gsap.to(positioncard1, 0.1, { css: { display: "none" } });
    gsap.to(applyingform1, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc1, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow1 = () => {
    gsap.to(jobdesc1, 0.1, { css: { display: "none" } });
    gsap.to(applyingform1, 0.1, { css: { display: "block" } });
  };
  const application2 = () => {
    gsap.to(positioncard2, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc2, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide2 = () => {
    gsap.to(positioncard2, 0.1, { css: { display: "none" } });
    gsap.to(applyingform2, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc2, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow2 = () => {
    gsap.to(jobdesc2, 0.1, { css: { display: "none" } });
    gsap.to(applyingform2, 0.1, { css: { display: "block" } });
  };
  const application3 = () => {
    gsap.to(positioncard3, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc3, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide3 = () => {
    gsap.to(positioncard3, 0.1, { css: { display: "none" } });
    gsap.to(applyingform3, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc3, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow3 = () => {
    gsap.to(jobdesc3, 0.1, { css: { display: "none" } });
    gsap.to(applyingform3, 0.1, { css: { display: "block" } });
  };
  const application4 = () => {
    gsap.to(positioncard4, 0.1, { css: { display: "block" } });
    gsap.to(jobdesc4, 0.1, { css: { display: "block" } });
    gsap.to(position, 0.1, { css: { display: "none" } });
  };
  const formhide4 = () => {
    gsap.to(positioncard4, 0.1, { css: { display: "none" } });
    gsap.to(applyingform4, 0.1, { css: { display: "none" } });
    gsap.to(jobdesc4, 0.1, { css: { display: "none" } });
    gsap.to(position, 0.1, { css: { display: "flex" } });
  };
  const applyNow4 = () => {
    gsap.to(jobdesc4, 0.1, { css: { display: "none" } });
    gsap.to(applyingform4, 0.1, { css: { display: "block" } });
  };

  const handleButtonMouseEnter = () => {
    handleButtonHover(true);
  };

  const handleButtonMouseLeave = () => {
    handleButtonHover(false);
  };

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

  return (
    <>
      <section className="position-container">
        <div className="position-content-container">
          <h1
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="position-h1 headingsection"
          >
            Open Positions
          </h1>
          <div
            className="open-pos headingsection"
            ref={(el) => (position = el)}
          >
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className={
                isDarkMode ? "positionsdark" : "positions headingsection"
              }
              onClick={application}
            >
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="position-content-h1"
              >
                Product Designer{" "}
                <a
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: 100,
                  }}
                >
                  (
                </a>
                UX/UI
                <a
                  style={{
                    fontFamily: "sans-serif",
                    fontWeight: 100,
                  }}
                >
                  )
                </a>
              </h1>
              <span
                style={{
                  color: isDarkMode ? "#000000" : "#d8d6d6",
                  fontWeight: 900,
                }}
                className="office"
              >
                Bangalore (Remote)
              </span>
            </div>
            <hr className="pos-hr" />
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className={
                isDarkMode ? "positionsdark" : "positions headingsection"
              }
              onClick={application1}
            >
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="position-content-h1"
              >
                Software Development Engineer - Mobile Frontend
              </h1>
              <span
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="office"
              >
                Bangalore (Remote)
              </span>
            </div>
            <hr className="pos-hr" />
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className={
                isDarkMode ? "positionsdark" : "positions headingsection"
              }
              onClick={application2}
            >
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="position-content-h1"
              >
                Software Development Engineer - Web Frontend
              </h1>
              <span
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="office"
              >
                Bangalore (Remote)
              </span>
            </div>
            <hr className="pos-hr" />
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className={
                isDarkMode ? "positionsdark" : "positions headingsection"
              }
              onClick={application3}
            >
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="position-content-h1"
              >
                Software Development Engineer - Backend
              </h1>
              <span
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="office"
              >
                Bangalore (Remote)
              </span>
            </div>
            <hr className="pos-hr" />
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className={
                isDarkMode ? "positionsdark" : "positions headingsection"
              }
              onClick={application4}
            >
              <h1
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="position-content-h1"
              >
                Software Development Engineer - CMS/E-Commerce
              </h1>
              <span
                style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
                className="office"
              >
                Bangalore (Remote)
              </span>
            </div>
            <hr className="pos-hr" />
          </div>
        </div>
      </section>
      <div
        // className="PD"
        className={isDarkMode ? "PDdark" : "PD"}
        ref={(el) => (positioncard = el)}
      >
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="job-pd-title"
        >
          <div>
            Product Designer{" "}
            <span
              style={{
                fontFamily: "sans-serif",
                fontWeight: 100,
              }}
            >
              (
            </span>
            UI
            <span
              style={{
                fontFamily: "sans-serif",
                fontWeight: 100,
              }}
            >
              /
            </span>
            UX
            <span
              style={{
                fontFamily: "sans-serif",
                fontWeight: 100,
              }}
            >
              )
            </span>
          </div>
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="jobline"
            onClick={formhide}
          >
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className="close-line"
            ></div>
          </button>
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Bangalore (Remote)
        </p>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Experience Band: 3+ Yrs
        </p>
        <div className="job-description" ref={(el) => (jobdesc = el)}>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="job-pd-desc job-loc"
          >
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As an experienced UI/ UX
            designer, you will contribute by having a working knowledge of tools
            such as Figma and work as a part of a cross-functional team by
            collaborating with our Creative Director to design products that
            uplift brand values.
          </p>
          <div
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="job-req"
          >
            Figma | Wireframes
            <span
              style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              className="and"
            >
              &
            </span>
            User Flows | Prototypes UX Research | Personas | Design System
          </div>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="apply"
          >
            Feel like you’re a match?
          </p>
          <div
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="apply_btn"
            onClick={applyNow}
          >
            <p
              // style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
              // className="about_btn_content"

              className={
                isDarkMode ? "about_btn_contentdark" : "about_btn_content"
              }
            >
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                {/* <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select> */}
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-start w-[43%]">
              <select
                name=""
                id=""
                // value={openposition}
                onChange={(e) => SetOpenPosition(e.target.value)}
                className="first-name"
              >
                <option default>confirm position</option>
                <option value="Product Design">Product Design</option>
                {/* <option value="Ecommerce">Developer CMS/E-commerce</option> */}
              </select>
            </div>

            <button
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div
        className={isDarkMode ? "PDdark" : "PD"}
        ref={(el) => (positioncard1 = el)}
      >
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="job-pd-title"
        >
          Software Development Engineer - Mobile Frontend{" "}
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="jobline"
            onClick={formhide1}
          >
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className="close-line"
            ></div>
          </button>
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Bangalore (Remote)
        </p>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Experience Band: 3+ Yrs
        </p>
        <div className="job-description" ref={(el) => (jobdesc1 = el)}>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="job-pd-desc job-loc"
          >
            AAt Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a mobile front-end
            developer, you will work with our front-end experts to build
            high-definition and responsive mobile applications that seamlessly
            interact with users. You will utilise your knowledge of various
            programming languages to build intuitive applications.
          </p>
          <div
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="job-req"
          >
            Android Java | Kotlin | Objective-C | Swift | React Native | Flutter
          </div>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="apply"
          >
            Feel like you’re a match?
          </p>
          <div
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="apply_btn"
            onClick={applyNow1}
          >
            <p
              className={
                isDarkMode ? "about_btn_contentdark" : "about_btn_content"
              }
            >
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform1 = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                {/* <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select> */}
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-start w-[43%]">
              <select
                name=""
                id=""
                // value={openposition}
                onChange={(e) => SetOpenPosition(e.target.value)}
                className="first-name"
              >
                <option default>confirm position</option>
                <option value="Mobile Frontend">
                  Software Development Engineer - Mobile Frontend
                </option>
                <option value=" Mobile Backend">
                  Software Development Engineer - Mobile Backend
                </option>
              </select>
            </div>
            <button
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div
        className={isDarkMode ? "PDdark" : "PD"}
        ref={(el) => (positioncard2 = el)}
      >
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="job-pd-title"
        >
          Software Development Engineer - Web Frontend{" "}
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="jobline"
            onClick={formhide2}
          >
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className="close-line"
            ></div>
          </button>
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Bangalore (Remote)
        </p>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Experience Band: 3+ Yrs
        </p>
        <div className="job-description" ref={(el) => (jobdesc2 = el)}>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="job-pd-desc job-loc"
          >
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a web frontend
            developer, you will collaborate with designers to build
            detail-oriented, and responsive user interfaces. You will design the
            site's layouts and build consistent web platforms that flawlessly
            interact with users, and are highly navigable.
          </p>
          <div
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="job-req"
          >
            HTML5 | CSS3 | jQuery | JavaScript | BootStrap | React.js Veu.js |
            Angular
          </div>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="apply"
          >
            Feel like you’re a match?
          </p>
          <div
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="apply_btn"
            onClick={applyNow2}
          >
            <p
              className={
                isDarkMode ? "about_btn_contentdark" : "about_btn_content"
              }
            >
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform2 = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                {/* <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select> */}
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-start w-[43%]">
              <select
                name=""
                id=""
                // value={openposition}
                onChange={(e) => SetOpenPosition(e.target.value)}
                className="first-name"
              >
                <option default>confirm position</option>
                <option value="Web frontend">Software Development Engineer - Web Frontend</option>
                <option value="Web Backend">Software Development Engineer - Web Backend</option>
              </select>
            </div>

            <button
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div
        className={isDarkMode ? "PDdark" : "PD"}
        ref={(el) => (positioncard3 = el)}
      >
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="job-pd-title"
        >
          Software Development Engineer - Backend{" "}
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="jobline"
            onClick={formhide3}
          >
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className="close-line"
            ></div>
          </button>
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Bangalore (Remote)
        </p>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Experience Band: 3+ Yrs
        </p>
        <div className="job-description" ref={(el) => (jobdesc3 = el)}>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="job-pd-desc job-loc"
          >
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a backend developer, you
            will oversee the server side of the projects, including databases,
            architectures and APIs, and write algorithms to build scalable
            applications. You will ensure that the applications perform in
            congruity with the front-end aspects of the products.
          </p>
          <div
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="job-req"
          >
            Php | Node.js | Python | Java | Ruby On Rails | Golang
          </div>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="apply"
          >
            Feel like you’re a match?
          </p>
          <div
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="apply_btn"
            onClick={applyNow3}
          >
            <p
              className={
                isDarkMode ? "about_btn_contentdark" : "about_btn_content"
              }
            >
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform3 = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                {/* <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select> */}
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-start w-[43%]">
              <select
                name=""
                id=""
                // value={openposition}
                onChange={(e) => SetOpenPosition(e.target.value)}
                className="first-name"
              >
                <option default>confirm position</option>
                <option value="Web frontend">Software Development Engineer - Web Frontend</option>
                <option value="Web Backend">Software Development Engineer - Web Backend</option>
              </select>
            </div>

            <button
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
      <div
        className={isDarkMode ? "PDdark" : "PD"}
        ref={(el) => (positioncard4 = el)}
      >
        <h1
          style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
          className="job-pd-title"
        >
          Software Development Engineer - CMS/E-Commerce
          <button
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="jobline"
            onClick={formhide4}
          >
            <div
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className="close-line"
            ></div>
          </button>
        </h1>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Bangalore (Remote)
        </p>
        <p
          style={{ color: isDarkMode ? "#00000099" : "#848484" }}
          className="job-loc"
        >
          Experience Band: 3+ Yrs
        </p>
        <div className="job-description" ref={(el) => (jobdesc4 = el)}>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="job-pd-desc job-loc"
          >
            At Codelinear, we are looking for people who are passionate and
            driven to be the "Propellers of Impact". As a CMS developer, you
            will be a part of a cross-functional team and build high-quality
            websites and e-commerce platforms. You will closely work with
            clients to address their concerns and design websites that resolve
            those.
          </p>
          <div
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="job-req"
          >
            WordPress | Shopify | Magento | HubSpot | WooCommerce BigCommerce |
            Drupal | Joomla | Wix | Squarespace Commerce
          </div>
          <p
            style={{ color: isDarkMode ? "#00000099" : "#848484" }}
            className="apply"
          >
            Feel like you’re a match?
          </p>
          <div
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="apply_btn"
            onClick={applyNow4}
          >
            <p
              className={
                isDarkMode ? "about_btn_contentdark" : "about_btn_content"
              }
            >
              apply now
            </p>
          </div>
        </div>
        <div className="applying-form" ref={(el) => (applyingform4 = el)}>
          <div className="form">
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name*"
                className="first-name"
                onChange={(e) => SetfristName(e.target.value)}
                // onChange={() => SetOpenPosition("Developer CMS/E-commerce")}
                required
              />
              <input
                type="text"
                placeholder="Last Name*"
                className="first-name"
                onChange={(e) => SetlastName(e.target.value)}
                required
              />
            </div>
            <div className="name-container">
              <div className="number">
                {/* <select name="" id="" className="tele">
                  <option value="">+91</option>
                </select> */}
                <input
                  type="email"
                  onChange={(e) => SetEmail(e.target.value)}
                  placeholder="Email"
                  className="phone-number"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Past The Drive Link Of Your Resume Here*"
                className="first-name"
                onChange={(e) => Setmessage(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-start w-[43%]">
              <select
                name=""
                id=""
                // value={openposition}
                onChange={(e) => SetOpenPosition(e.target.value)}
                className="first-name"
              >
                <option default>confirm position</option>
                <option value="Shopify">Developer Shopify</option>
                <option value="Ecommerce">Developer CMS/E-commerce</option>
              </select>
            </div>

            <button
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              onClick={handleSubmit}
              className="sub_btn-content submit_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Position;
