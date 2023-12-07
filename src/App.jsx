import About from "./components/about/about";
import Services from "./components/services/services";
import Home from "./components/Home/Home";
import Work from "./components/work/Work";
import Career from "./components/Career/career";
import Blog from "./components/Blog/Blog";
import Talk from "./components/letsTalk/Talk";
import Empathy from "./components/Bloginnerpages/empathy/empathy";
import Trend from "./components/Bloginnerpages/trends/Trends";
import Bing from "./components/Bloginnerpages/Bing/Trends";
import Brand from "./components/Bloginnerpages/Branded/Trends";
import Change from "./components/Bloginnerpages/Changing/Trends";
import Design from "./components/Bloginnerpages/Design/Trends";
import Ai from "./components/Bloginnerpages/Ai/Trends";
import Discovery from "./components/Bloginnerpages/Discovery/Trends";
import Gesalt from "./components/Bloginnerpages/Gesalt/Trends";
import Listen from "./components/Bloginnerpages/Listening/Trends";
import MVP from "./components/Bloginnerpages/MVP/Trends";
import NCR from "./components/Bloginnerpages/NCR/Trends";
import Reactblog from "./components/Bloginnerpages/React/Trends";
import SVM from "./components/Bloginnerpages/SVM/Trends";
import Story from "./components/Bloginnerpages/Story/Trends";
import UXblog from "./components/Bloginnerpages/UX/Trends";
import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Consulting from "./components/consultingAndStrategy/consulting";
import UX from "./components/userExperience/UX";
import DM from "./components/digitalMarketing/digitalmarketing";
import PD from "./components/productDevelopment/productdevelopment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "./components/Dashboard/dash";
import Login from "./components/Dashboard/Login";
import { useState } from "react";
import NotFound from "./components/NotFound";
import { useEffect } from "react";
import CustomCursor from "./CustomCursor";
// import Lenis from "@studio-freight/lenis";
// import AnimatedCursor from "react-animated-cursor";

function App() {
  window.scroll({
    behavior: "smooth",
  });

  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 2,
  //     easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)), // https://easings.net
  //     direction: 0,
  //     smooth: true,
  //     // smoothTouch: false,
  //     // touchMultiplier: 2
  //     // wheelMultiplier:0,
  //     // touchMultiplier:0,
  //     normalizeWheel: true,
  //     smoothWheel: true,
  //   });

  //   // addEffect((time) => {
  //   //   lenis.raf(time);
  //   // });
  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);
  // }, []);

  const [isDarkMode, setIsDarkMode] = useState(false);
  // const [user, setUser] = useState(false);
  // useEffect(() => {
  //   const data = localStorage.getItem("jwt");
  //   if (data) {
  //     setUser(true);
  //   } else {
  //     setUser(false);
  //   }
  // }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const handleButtonHover = (isHovered) => {
    setIsButtonHovered(isHovered);
  };
  const [isimgHovered, setIsimgHovered] = useState(false);
  const handleimgHover = (isHoveredimg) => {
    setIsimgHovered(isHoveredimg);
  };
  const [isdrag, setIsdrag] = useState(false);
  const handledrag = (isdragg) => {
    setIsdrag(isdragg);
  };

  // const [Widht, setWidth] = useState(window.innerWidth);
  // useEffect(() => {
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));
  // });

  return (
    <div style={{ backgroundColor: isDarkMode ? "#FFFFFF" : "#090909" }}>
      <CustomCursor
        isButtonHovered={isButtonHovered}
        isimgHovered={isimgHovered}
        isdrag={isdrag}
        handleimgHover={handleimgHover}
        handleButtonHover={handleButtonHover}
        handledrag={handledrag}
      />

      {/* {Widht > 1100 ? (
        <AnimatedCursor
          innerSize={8}
          outerSize={0}
          color="255, 255, 255"
          outerAlpha={0.6}
          innerScale={6}
          outerScale={0}
          hasBlendMode={true}
          outerStyle={{
            mixBlendMode: "difference",
            zIndex: "9999999999999999999",
          }}
          innerStyle={{
            mixBlendMode: "difference",
            zIndex: "9999999999999999999",
          }}
        />
      ) : (
        ""
      )} */}

      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                handleimgHover={handleimgHover}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          {/* <Route exact path="/admin" element={user ? <Dash /> : <Login />} /> */}
          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/admin" element={<Dash />} />
          <Route
            exact
            path="/about"
            element={
              <About
                handleimgHover={handleimgHover}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/work"
            element={
              <Work
                handleimgHover={handleimgHover}
                handledrag={handledrag}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/career"
            element={
              <Career
                handleimgHover={handleimgHover}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/blog"
            element={
              <Blog
                handleimgHover={handleimgHover}
                handledrag={handledrag}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/services"
            element={
              <Services
                handleimgHover={handleimgHover}
                handleButtonHover={handleButtonHover}
                handledrag={handledrag}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/consultingandstrategy"
            element={
              <Consulting
                handleimgHover={handleimgHover}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
                handledrag={handledrag}
              />
            }
          />
          <Route
            exact
            path="/userexperience"
            element={
              <UX
                handleimgHover={handleimgHover}
                handledrag={handledrag}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/productdevelopment"
            element={
              <PD
                handleimgHover={handleimgHover}
                handledrag={handledrag}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/digitalmarketing"
            element={
              <DM
                handleimgHover={handleimgHover}
                handledrag={handledrag}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/let's_talk"
            element={
              <Talk
                handleimgHover={handleimgHover}
                handledrag={handledrag}
                handleButtonHover={handleButtonHover}
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/empathy-in-UX"
            element={
              <Empathy
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/digital-marketing-trends-2023"
            element={
              <Trend isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/bing-vs-google"
            element={
              <Bing isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/ai"
            element={
              <Ai isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/Branded"
            element={
              <Brand isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/changing"
            element={
              <Change isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/Discovery"
            element={
              <Discovery
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/Gestalt"
            element={
              <Gesalt isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/Listening"
            element={
              <Listen isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/minimum-viable-product"
            element={
              <MVP isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/No-code-revolution"
            element={
              <NCR isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/react-vs-flutter"
            element={
              <Reactblog
                isDarkMode={isDarkMode}
                toggleDarkMode={toggleDarkMode}
              />
            }
          />
          <Route
            exact
            path="/Design"
            element={
              <Design isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/shopify-vs-magento"
            element={
              <SVM isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/Story"
            element={
              <Story isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            exact
            path="/UX"
            element={
              <UXblog isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          \
          <Route element={NotFound} />
          {/* </Switch> */}
        </Routes>
      </BrowserRouter>
      {/* </Cursor> */}
    </div>

    //  </ReactLenis>
  );
}

export default App;
