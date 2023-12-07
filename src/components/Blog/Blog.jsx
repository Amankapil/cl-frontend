import "./Blog.css";
import { useRef, useEffect } from "react";
import gsap from "gsap";

import Bloghero from "./Bloghero";
import Navbar from "../navigationBar/Nav";
import Footer from "../footer/footer";
import Blogsection from "./Blogsection";

import { Helmet } from "react-helmet";

export default function Blog({
  isDarkMode,
  toggleDarkMode,
  handleButtonHover,
  handleimgHover,
}) {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load
  }, []);

  let fade = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "0" });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Ideas | Codelinear</title>
        <meta name="blog" content="Product Development" />
        <link rel="canonical" href="https://www.codelinear.com/blog" />
      </Helmet>

      <main className="blog-page" ref={(el) => (fade = el)}>
        <Navbar
          handleButtonHover={handleButtonHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Bloghero
          handleButtonHover={handleButtonHover}
          handleimgHover={handleimgHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Blogsection
          handleButtonHover={handleButtonHover}
          handleimgHover={handleimgHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <Footer
          handleButtonHover={handleButtonHover}
          handleimgHover={handleimgHover}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </main>
    </>
  );
}
