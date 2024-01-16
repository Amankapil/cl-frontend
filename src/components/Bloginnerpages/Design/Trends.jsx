import Trendhero from "./Trendhero";
import Trendsection from "./TrendSection";
import Navbar from "../../navigationBar/Nav";
import Footer from "../../footer/footer";
import gsap from "gsap";
import { useRef, useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Empathy({ isDarkMode, toggleDarkMode ,handleButtonHover }) {
  let fade = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1 },
    });
    tl.fromTo(fade, { opacity: "0" }, { opacity: "1" });
  }, []);
  return (
    <>
     <Helmet>
        <title>Design System  | Codelinear</title>
        <meta name="Design System " content="Late Steve Jobs loved his childhood home for its simple design. He lived in working-class subdivision homes between San Francisco and San Jose. These were the postwar suburban homes with floor-to-ceiling glass walls, exposed post-and-beam construction with concrete slab floors and lots of sliding glass doors. These urban homes were developed by Joseph Eichler and his imitators in the 1950s." />
        <link rel="canonical" href="https://www.codelinear.com/Design" />
      </Helmet>
      <Navbar  handleButtonHover={handleButtonHover}  isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="empathy-page" ref={(el) => (fade = el)}>
        <Trendhero isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
        <Trendsection isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </main>
      <Footer isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode}/>
    </>
  );
}
