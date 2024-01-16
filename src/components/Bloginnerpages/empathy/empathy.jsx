import "./empathy.css";
import Empathyhero from "./Empathyhero";
import Empathysection from "./Empathysection";
import Navbar from "../../navigationBar/Nav";
import Footer from "../../footer/footer";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Empathy({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
}) {
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
      <Helmet>
        <title>Empathy | Codelinear</title>
        <meta
          name="empathy in UX"
          content="Since 1989, Intuit (maker of Quickbooks, Mint, and TurboTax) has run a “Follow me Home ” program that involves questionnaires, observations, interviews, etc. with the actual users at workplaces where Intuit’s products are being used. The goal of the program is to find out how customers use the product, what they like and don’t, and what challenges they may have."
        />
        <link rel="canonical" href="https://www.codelinear.com/empathy-in-UX" />
      </Helmet>
      <Navbar
        handleButtonHover={handleButtonHover}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
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
