// import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, FreeMode, Pagination, Navigation } from "swiper";
// import "./card.scss";
// import { gsap, Power2 } from "gsap";

// import { TweenMax } from "gsap";

// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Card3 = () => {
//   useEffect(() => {

//     let sections = gsap.utils.toArray(".panel");
//     gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         // ease: "none",
//         scrollTrigger: {
//           trigger: "#",
//           pin: true,
//           scrub: 1,
//         //   snap: 1 / (sections.length - 1),
//           // base vertical scrolling on how wide the container is so it feels more natural.
//           end: "+=3500",
//         }
//       });
//   }, []);
//   return (
//     <>

//     {/* <div className="h-full sticky"> */}

 
//       <div class="containerw sticky">
//         <div class="description panel blue">
//           <div>
//             <h1>Horizontal snapping sections (simple)</h1>
//             <p>
//               Scroll vertically to scrub the horizontal animation. It also
//               dynamically snaps to the sections in an organic way based on the
//               velocity. The snapping occurs based on the natural ending position
//               after momentum is applied, not a simplistic "wherever it is when
//               the user stops".
//             </p>
//             <div class="scroll-down">
//               Scroll down<div class="arrow"></div>
//             </div>
//           </div>
//         </div>

//         <section class="panel red">ONE</section>
//         <section class="panel orange">TWO</section>
//         <section class="panel purple">THREE</section>
//         <section class="panel green">FOUR</section>
//         <section class="panel gray">FIVE</section>
//       </div>
//       {/* </div> */}
//     </>
//   );
// };

// export default Card3;
