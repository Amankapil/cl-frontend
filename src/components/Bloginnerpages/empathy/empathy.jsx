import "./empathy.css";
import Empathyhero from "./Empathyhero";
import Empathysection from "./Empathysection";
import Navbar from "../../navigationBar/Nav";
import Footer from "../../footer/footer";
import gsap from "gsap";
import { useRef, useEffect } from "react";

export default function Empathy({ isDarkMode, toggleDarkMode ,handleButtonHover }) {
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
    <>
      <Navbar  handleButtonHover={handleButtonHover}  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="empathy-page" ref={(el) => (fade = el)}>
        <Empathyhero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Empathysection
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </main>
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
