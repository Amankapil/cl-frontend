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
        <title>AI-Powered Design Tools| Codelinear</title>
        <meta
          name="AI-Powered Design Tools"
          content="So, AI finally became a thing. It is wildly different from its dystopian counterpart in sci-fi movies. It was supposed to control and destroy humanity. Surprisingly, it is creating things, which was thought to be not possible just a few years ago.."
        />
        <link rel="canonical" href="https://www.codelinear.com/ai" />
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
