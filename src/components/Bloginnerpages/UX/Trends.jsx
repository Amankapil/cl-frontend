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
        <title> UX Design | Codelinear</title>
        <meta name=" UX Design " content="Once upon a 2008, when a 28-year-old Londoner named Richard Pierson quit his job, and felt burned out even as a freelancer, he turned to a Buddhist monk named Andy Puddicombe. While Puddicombe taught Pierson a 2,500-year-old meditation technique, the latter had a business idea. Both turned meditation into a successful local business in 2010." />
        <link rel="canonical" href="https://www.codelinear.com/UX" />
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
