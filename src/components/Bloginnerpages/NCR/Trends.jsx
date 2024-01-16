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
        <title>No-Code Revolution | Codelinear</title>
        <meta name="No-Code Revolution" content="When Ole Kirk Christiansen went out of business back in the 1930s, little did he know that the scraps from his furniture factory would help build a whole new business during the world recession. Ole along with his son Godtfred founded Lego (meaning ‘put together’ in Latin) - a company that sold toys made of fine wood." />
        <link rel="canonical" href="https://www.codelinear.com/no-code-revolution" />
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
