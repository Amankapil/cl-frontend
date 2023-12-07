import React, { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./card.scss";
import { gsap } from 'gsap';
import arrow from "../../services/images/downarrow.svg";
import WorkFoldCards from "../WorkFoldCards";

const Card2 = ({ isDarkMode, toggleDarkMode ,handledrag}) => {
  let arrowswipe = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    tl.fromTo(arrowswipe, 1.5, { x: "-30px" }, { x: "50px" });
  }, []);

  const [Widht, setWidth] = useState(window.innerWidth);
  const [explore, setExplore] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });
  const toggleCase = () => {
    if (!explore) {
      setExplore(true);
    } else {
      setExplore(false);
    }
  };
  const handleButtonMouseEnter = () => {
    handledrag(true);};const handleButtonMouseLeave = () => {
    handledrag(false);
  };
  return (
    <>
      {!explore ? (
        <>
          <div
        
            className="drag"
            style={{
              color: "#d8d6d6",
              fontFamily: "graphik",
              opacity: "0.7",
            }}
          >
            swipe
            <div className="arrowcontainer">
              <img
                src={arrow}
                alt=""
                className="swipe-arrow"
                ref={(el) => (arrowswipe = el)}
              />
            </div>
          </div>
          {Widht > 768 ? (
            <>
            <div   className="worksection">
              <div   className="tst">
                <Swiper
                  slidesPerView={3}
                  slidesPerGroupSkip={1}
                  spaceBetween={10}
                  freeMode={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      containerClass: "half-image-container",
                    },
                    435: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    90: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1060: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave} 
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper h  mt-0 max-md:mt-0  w-[100%] ml20 max-lg:ml-0 max-xl:w-[100%]"
                  
                >
                  <SwiperSlide  className="mr-0 flex justify-center items-center">
                    <div  onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave} 
                        className="card111 hidee hiee max-md:mx-4 mx10 flex flex-col justify-cnter px-5 py-10">
                      <h1
                        className="text-5xl mt-16 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        COWBOY
                      </h1>
                      <p
                        className="colo my-10 mt-10"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        Cowboy is an e-bike provider, unifying intelligent
                        technology, delightful design and meticulous service to
                        revolutionise the daily commute of its riders to the
                        next level.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX/UI Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Shopify Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Landing Pages Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Mobile Application Development
                          </li>
                        </ul>
                      </p>
                      <div className=" mt5 max-lg:ml-0 ">
                        <button className="btn  max-sm:text-[0.7rem] about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div
                      onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  className="MANGO hiee max-md:mx-4 mx10 flex flex-col justify-cnter px-5 py-10">
                      <h1
                        className="text-5xl mt-16 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        MANGO
                      </h1>
                      <p
                        className="colo my-10 mt-10"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        Mango is a leading luxury apparel brand that through its
                        unique, sophisticated and trendy designs has taken over
                        the world of fashion.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Discovery Workshop
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX Design
                          </li>
                        
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Mobile Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Backend Development
                          </li>
                          
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            DevOps
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem] about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div   onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  className="Willium hiee max-md:mx-4 mx10 flex flex-col justify-center px-5 py-10">
                      <h1
                        className="text-5xl mt-16 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        William Abraham
                      </h1>
                      <p
                        className="colo my-10 mt-10"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        William Abraham is a luxury sock company that through
                        their unparalleled and innovative approach bring the
                        comfort and luxury to one place.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX/UI Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Shopify Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Landing Pages Development
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div   onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  className="Lyra hiee max-md:mx-4 mx10 mr-12 flex flex-col justify-center px-5 py-10">
                      <h1
                        className="text-5xl mt-16 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Lyra Health
                      </h1>
                      <p
                        className="colo my-10 mt-10"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        Lyra Health, a mental well-being firm, is transforming
                        behavioural health care through technology with a human
                        touch.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Discovery Workshop
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UI Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            CMS Integration
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div   onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  className="klub hiee max-md:mx-4 mx10 flex flex-col justify-center   px-5 py-10">
                      <h1
                        className="text-5xl mt-10 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Klub
                      </h1>
                      <p
                        className="colo my-10 mt-5"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        Klub is the first investment-oriented platform enhanced
                        by a community to take your finances beyond traditional
                        banking.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Discovery Workshop
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UI Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Website Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Web App Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Mobile Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Backend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Quality Analysis
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            DevOps
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-7 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide   onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}  className="flex justify-center items-center">
                    <button
                      className=" hover:text-black"
                      onClick={toggleCase}
                      onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave} 
                    >
                      <div className="exploree hidee hfull max-lg:h-[600px] max-lg:w-[300px] hover:text-black max-md:mx-0 flex items-center justify-center">
                        <div className="flex w-full justify-center hover:text-black items-center h-full">
                          <h1 className="text-4xl extra  hover:text-black font-extrabold ">
                            Explore More
                          </h1>
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            </>
          ) : (
            <div className="worksection">
              <div className="tst">
                <Swiper
                  slidesPerView={3}
                  slidesPerGroupSkip={1}
                  spaceBetween={10}
                  freeMode={true}
                  breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 0,
                      containerClass: "half-image-container",
                    },
                    435: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 30,
                    },
                    90: {
                      slidesPerView: 2,
                      spaceBetween: 30,
                    },
                    1060: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper h  mt-0 max-md:mt-0  w-[100%] -ml-20 max-lg:ml-0 max-xl:w-[100%]"
                >
                  <SwiperSlide className="mr-0 flex justify-center items-center">
                    <div className="card111 hiee max-md:mx-4 mx-10 flex flex-col justify-cnter px-5 py-10">
                      <h1
                        className="text-5xl mt-16 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        COWBOY
                      </h1>
                      <p
                        className="colo my-10 mt-10"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        Cowboy is an e-bike provider, unifying intelligent
                        technology, delightful design and meticulous service to
                        revolutionise the daily commute of its riders to the
                        next level.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX/UI Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Shopify Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Landing Pages Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Mobile Application Development
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn  max-sm:text-[0.7rem] about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div className="MANGO hiee max-md:mx-4 mx-10 flex flex-col justify-cnter px-5 py-10">
                      <h1
                        className="text-5xl mt-16 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        MANGO
                      </h1>
                      <p
                        className="colo my-10 mt-10"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        Mango is a leading luxury apparel brand that through its
                        unique, sophisticated and trendy designs has taken over
                        the world of fashion.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Discovery Workshop
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX Design
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UI Design
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Mobile Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Backend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Quality Analysis
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            DevOps
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem] about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div className="Willium hiee max-md:mx-4 mx-10 flex flex-col justify-center px-5 py-10">
                      <h1
                        className="text-5xl mt-16 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        William Abraham
                      </h1>
                      <p
                        className="colo my-10 mt-10"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        William Abraham is a luxury sock company that through
                        their unparalleled and innovative approach bring the
                        comfort and luxury to one place.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX/UI Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Shopify Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Landing Pages Development
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div className="Lyra hiee max-md:mx-4 mx-10 mr-12 flex flex-col justify-center px-5 py-10">
                      <h1
                        className="text-5xl mt-16 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Lyra Health
                      </h1>
                      <p
                        className="colo my-10 mt-10"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        Lyra Health, a mental well-being firm, is transforming
                        behavioural health care through technology with a human
                        touch.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Discovery Workshop
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UI Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            CMS Integration
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <div className="klub hiee max-md:mx-4 mx-10 flex flex-col justify-center   px-5 py-10">
                      <h1
                        className="text-5xl mt-10 wcw"
                        style={{
                          fontFamily: "graphikthin",
                          color: "#d8d6d6",
                          fontWeight: "600",
                        }}
                      >
                        Klub
                      </h1>
                      <p
                        className="colo my-10 mt-5"
                        style={{
                          fontFamily: "graphik",
                          color: "#848484",
                          height: "58%",
                        }}
                      >
                        Klub is the first investment-oriented platform enhanced
                        by a community to take your finances beyond traditional
                        banking.
                        <ul
                          style={{
                            listStyle: "disc",
                            marginLeft: "20px",
                            marginTop: "20px",
                          }}
                        >
                          <div
                            style={{
                              marginLeft: "-20px",
                              color: "#848484",
                              marginBottom: "5px",
                            }}
                          >
                            Services Rendered:
                          </div>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Discovery Workshop
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UX Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            UI Designs
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Website Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Web App Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Mobile Frontend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Backend Development
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            Quality Analysis
                          </li>
                          <li
                            style={{
                              color: "#848484",
                            }}
                          >
                            DevOps
                          </li>
                        </ul>
                      </p>
                      <div className=" mt-5 max-lg:ml-0 ">
                        <button className="btn max-sm:text-[0.7rem]  about px-7 py-1 flex justify-center  text-1xl ">
                          View case study
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="flex justify-center items-center">
                    <button
                      className=" hover:text-black h-full"
                      onClick={toggleCase}
                    >
                      <div className="exploree hidee h-full max-lg:h-[600px] max-lg:w-[300px] hover:text-black max-md:mx-0 flex items-center justify-center">
                        <div className="flex w-full justify-center hover:text-black items-center h-full">
                          <h1 className="text-4xl extra  hover:text-black font-extrabold ">
                            Explore More
                          </h1>
                        </div>
                      </div>
                    </button>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          )}
        </>
      ) : (


        <WorkFoldCards/>
      )}
    </>
  );
};

export default Card2;
