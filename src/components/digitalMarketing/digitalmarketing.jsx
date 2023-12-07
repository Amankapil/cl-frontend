import { gsap } from "gsap";
import { useRef, useEffect } from "react";
import Servicesslide from "../services/Explore/Explore";

import Footer from "../footer/footer";
import Navbar from "../navigationBar/Nav";
// import Animation from "../consultingAndStrategy/animation";
import Parent from "../consultingAndStrategy/Scrooll";

export default function Digitalmarketing({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handledrag,
  handleimgHover
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
    <main className="serviceinnerpage" ref={(el) => (fade = el)}>
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        handleButtonHover={handleButtonHover}
      />
      <main>
        <section className="otherservices">
          <h1
            style={{ color: isDarkMode ? "#000000" : "#d8d6d6" }}
            className="inner-service-h1"
          >
            Traversing You Closer To Your Users.
          </h1>
        </section>
        {/* <Animation /> */}
        <Parent isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <div className="slide-container">
          <Servicesslide
          handleimgHover={handleimgHover}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            handledrag={handledrag}
          />
        </div>
      </main>
      <Footer handleButtonHover={handleButtonHover} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </main>
  );
}
