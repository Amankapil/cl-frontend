import "./home.css";
import { gsap } from "gsap";
import { useRef, useEffect, useState } from "react";
import BlogHome from "./BlogHome";
import Hero from "./Hero";
import HomeAbout from "./homeAbout";
import HomeServices from "./Homeservices";
import Testimonials from "./Testmonials";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
import { Helmet } from "react-helmet";
import ScrollReveal from "scrollreveal";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handleimgHover,
}) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);

  let fade = useRef(null);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.75 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "0" });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".tagline", { delay: 500 });

    // ScrollReveal().reveal( {
    //   // ScrollReveal options and configuration here
    //   // See documentation for available options: https://scrollrevealjs.org/api/reveal.html
    // });
  }, []);

  return (
    <>
      <Helmet>
        <title>Codelinear</title>
        <meta
          name="Home"
          content="Propelling The World,By Design"
        />
        <link rel="canonical" href="https://www.codelinear.com/" />
      </Helmet>

      <div className="tagline">
        <header className="App-header" style={{ top: scrollY }}>
          <Navbar
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            handleButtonHover={handleButtonHover}
          />
        </header>
        <main ref={(el) => (fade = el)} className="home">
          <Hero
            handleButtonHover={handleButtonHover}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <HomeAbout
            handleButtonHover={handleButtonHover}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <HomeServices
            handleButtonHover={handleButtonHover}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <Testimonials
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
          <BlogHome
            handleButtonHover={handleButtonHover}
            handleimgHover={handleimgHover}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </main>
        <footer className="App-footer" style={{ bottom: -scrollY }}>
          <Footer
            handleButtonHover={handleButtonHover}
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </footer>
      </div>
    </>
  );
}
