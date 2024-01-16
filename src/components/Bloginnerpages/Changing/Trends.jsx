import Trendhero from "./Trendhero";
import Trendsection from "./TrendSection";
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
        <title>The Changing Nature Of SEO| Codelinear</title>
        <meta
          name="The Changing Nature Of SEO"
          content="Gadget Flow is a well-known product discovery platform that helps readers find latest tech and gear apart from information on unique crowdfunding campaigns."
        />
        <link rel="canonical" href="https://www.codelinear.com/Changing" />
      </Helmet>
      <Navbar
        handleButtonHover={handleButtonHover}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="empathy-page" ref={(el) => (fade = el)}>
        <Trendhero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Trendsection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
