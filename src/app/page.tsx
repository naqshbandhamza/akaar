"use client"
import Image from "next/image";
import "./styles.css"
import Head from 'next/head';
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ReactLenis, useLenis } from 'lenis/react'

export default function Home() {

  const [pageloaded, setPageLoaded] = useState(false);
  const [first, setFirst] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);
  const ctxRef = useRef(null);
  const lenisRef: any = useRef()

  // this useEffect is for page preloader
  useEffect(() => {

    setScreenHeight(screen.height)
    setScreenWidth(window.innerWidth);

    const textContainer: any = document.querySelector('.text-container');
    const mask = document.createElement('div');
    mask.classList.add('mask');
    textContainer.appendChild(mask);
    gsap.to(mask, {
      duration: 2,
      scaleX: 0,
      ease: "ease",
      repeat: -1,
      yoyo: true
    });

    if (document.readyState === 'complete') {
      setTimeout(() => {
        setPageLoaded(true);
      }, 3000)
    }

    const handlePageLoad = () => {
      setPageLoaded(true);
    };

    window.addEventListener('load', handlePageLoad);
    return () => window.removeEventListener('load', handlePageLoad);
  }, []);

  const handleResize = () => {
    setScreenHeight(window.innerHeight)
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    // Attach the resize event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {

    if (pageloaded) {

      alert(screenHeight)

      let preloader: any = document.getElementById('loading');
      let content: any = document.getElementById('content');

      preloader.style.display = 'none';
      content.style = "display: block;"
      gsap.fromTo(".slider-container", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power4.inOut" })

      ctxRef.current = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

        if (screenWidth > 1000) {
          // horizontal scroll
          let sections: any = gsap.utils.toArray(".panels");
          gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
              trigger: ".slider-container",
              pin: true,
              scrub: 1,
              // markers: true,
              snap: {
                snapTo: 1 / (sections.length - 1),
              },
              onSnapComplete: (self) => {
                const currentIndex = Math.round(self.progress * (sections.length - 1));
                if (currentIndex === 0) {
                  const myTimeline = gsap.timeline()
                  myTimeline.to(
                    "#scroll-assist, #lang-btn",
                    { backgroundColor: "#EAEDFE", color: "#2E4BF5", duration: 1, ease: "expo.inOut" }
                  ).to("#scroll-assist :nth-child(1)", {
                    backgroundColor: "#2E4BF5", duration: 1, ease: "expo.inOut"
                  }, "<");
                } else if (currentIndex === 1) {
                  const myTimeline = gsap.timeline()
                  myTimeline.to(
                    "#scroll-assist, #lang-btn",
                    { backgroundColor: "#FFF5D8", color: "#FFC325", duration: 1, ease: "expo.inOut" }
                  ).to("#scroll-assist :nth-child(1)", {
                    backgroundColor: "#FFC325", duration: 1, ease: "expo.inOut"
                  }, "<");
                } else if (currentIndex === 2) {
                  const myTimeline1 = gsap.timeline()
                  myTimeline1.to(
                    "#scroll-assist, #lang-btn",
                    { backgroundColor: "#FFC7C7", color: "#FF2424", duration: 1, ease: "expo.inOut" }
                  ).to("#scroll-assist :nth-child(1)", {
                    backgroundColor: "#FF2424", duration: 1, ease: "expo.inOut"
                  }, "<");
                } else if (currentIndex === 3) {
                  const myTimeline2 = gsap.timeline()
                  myTimeline2.to(
                    "#scroll-assist, #lang-btn",
                    { backgroundColor: "#DFC3EC", color: "#7800B0", duration: 1, ease: "expo.inOut" }
                  ).to("#scroll-assist :nth-child(1)", {
                    backgroundColor: "#7800B0", duration: 1, ease: "expo.inOut"
                  }, "<");
                }
              },
              start: "top top",
              end: () => screenWidth * 4
            }
          });

          //section 1
          const mytimeline3 = gsap.timeline({ paused: true })
          mytimeline3.fromTo("#headings",
            {
              x: 40, opacity: 0,
            },
            {
              x: 0, opacity: 1,
              duration: 2,
            });
          mytimeline3.fromTo("#my-vectors img",
            {
              x: -50, opacity: 0,
            },
            {
              x: 0, opacity: 1,
              duration: 2,

            }, "<");

          ScrollTrigger.create({
            trigger: "#headings",
            scrub: 1,
            // markers: true,
            start: "top top",
            end: "500 top",
            onEnter: () => { mytimeline3.reverse() },
            onLeaveBack: () => { mytimeline3.play() },
            once: false,
          });

          if (first === 0) {
            mytimeline3.play()
            setFirst(1)
          }

          //section 2
          const mytween = gsap.to("#street-light, #wed-clock, #wed-plant", {
            opacity: 1,
            x: "-=100",
            duration: 2.5,
            paused: true
          })

          const mytween1 = gsap.to("#akaar-presents", { opacity: 1, duration: 1, paused: true, })

          ScrollTrigger.create({
            trigger: "#wedding-illus",
            scrub: 1,
            // markers: true,
            start: () => `${screenWidth} 15%`,
            end: () => `${screenWidth + 500} top`,
            onEnter: () => { mytween.play(); mytween1.play(); },
            onLeaveBack: () => { mytween.reverse(); mytween1.reverse(); },
          })

          const tl2 = gsap.timeline({
            paused: true
          });

          tl2.to("#akaar-wed-shadow",
            {
              y: "+=20", duration: 0.75, delay: 0.5, ease: "power1.easeInOut"
            }).to("#akaar-wed-shadow-1", {
              y: "+=40", duration: 0.75, ease: "power1.easeInOut"
            });

          ScrollTrigger.create({
            trigger: "#wedding-illus",
            scrub: 1,
            // markers: true,
            start: () => `${screenWidth} 15%`,
            end: () => `${screenWidth + 500} top`,
            onEnter: () => tl2.play(),
            onLeaveBack: () => tl2.reverse(),
          })

          let tween = gsap.fromTo("#now-booking-wed",
            {
              x: 200,
              scale: 0
            },
            {
              x: 0,
              scale: 1,
              duration: 1.5,
              paused: true,
              ease: "elastic.out"
            });

          let tweent = gsap.fromTo("#sub-tag-wed",
            {
              y: -10,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              delay: 1,
              paused: true,
            });

          ScrollTrigger.create({
            trigger: "#wedding-illus",
            scrub: 1,
            //markers: true,
            start: () => `${screenWidth * 1} 15%`,
            end: () => `${screenWidth * 1 + 500} top`,
            onEnter: () => { tween.play(); tweent.play() },
            onLeaveBack: () => { tween.reverse(); tweent.reverse() },
            once: false,
          });

          //section 1
          let tl = gsap.timeline({})
          tl.fromTo(
            document.querySelectorAll(".ofx"),
            { opacity: 0 },
            {
              opacity: 1, duration: 2, ease: "expo.inOut"
            }
          );
          tl.to("#main-heading", {
            opacity: 1, duration: 3, ease: "expo.inOut",
          }, "<")
          tl.fromTo("#sub-script", { y: "0px" }, {
            opacity: 1, duration: 1.5, y: "0px", ease: "power3.out"
          }, "-=1.5")
          tl.fromTo("#my-bulb-svg", {
            left: "-350px", opacity: 0,
          }, { left: "-150px", opacity: 1, duration: 2, ease: "expo.out", }, "-=1.5")
          tl.fromTo("#my-globe-svg", {
            right: "-250px", opacity: 0,
          }, { right: "0px", opacity: 1, duration: 2, ease: "expo.out", }, "<")
          tl.fromTo("#hills", {
            right: "-250px", opacity: 0,
          }, { right: "-100px", opacity: 1, duration: 2, ease: "expo.out", }, "<")
          tl.fromTo("#scroll-assist", {
            y: 100, opacity: 0, scale: 1.2
          }, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out" })
        } else {

          //section 1
          const mytimeline3 = gsap.timeline({ paused: true })
          mytimeline3.fromTo("#headings",
            {
              x: 40, opacity: 0,
            },
            {
              x: 0, opacity: 1,
              duration: 2,
            });
          mytimeline3.fromTo("#my-vectors img",
            {
              x: -50, opacity: 0,
            },
            {
              x: 0, opacity: 1,
              duration: 2,

            }, "<");

          ScrollTrigger.create({
            trigger: "#headings",
            scrub: 1,
            // markers: true,
            start: "top top",
            end: "500 top",
            onEnter: () => { mytimeline3.reverse() },
            onLeaveBack: () => { mytimeline3.play() },
            once: false,
          });

          if (first === 0) {
            mytimeline3.play()
            setFirst(1)
          }

          //section 2
          const mytween = gsap.to("#street-light, #wed-clock, #wed-plant", {
            opacity: 1,
            x: "-=100",
            duration: 2.5,
            paused: true
          })

          const mytween1 = gsap.to("#akaar-presents", { opacity: 1, duration: 1, paused: true, })

          ScrollTrigger.create({
            trigger: "#section-2",
            scrub: 1,
            markers: true,
            start: () => `top top`,
            end: () => `+=500 top`,
            onEnter: () => { mytween.play(); mytween1.play(); },
            onLeaveBack: () => { mytween.reverse(); mytween1.reverse(); },
          })

          const tl2 = gsap.timeline({
            paused: true
          });

          tl2.to("#akaar-wed-shadow",
            {
              y: "+=20", duration: 0.75, delay: 0.5, ease: "power1.easeInOut"
            }).to("#akaar-wed-shadow-1", {
              y: "+=40", duration: 0.75, ease: "power1.easeInOut"
            });

          ScrollTrigger.create({
            trigger: "#section-2",
            scrub: 1,
            // markers: true,
            start: () => `top top`,
            end: () => `+=500 top`,
            onEnter: () => tl2.play(),
            onLeaveBack: () => tl2.reverse(),
          })

          let tween = gsap.fromTo("#now-booking-wed",
            {
              x: 200,
              scale: 0
            },
            {
              x: 0,
              scale: 1,
              duration: 1.5,
              paused: true,
              ease: "elastic.out"
            });

          let tweent = gsap.fromTo("#sub-tag-wed",
            {
              y: -10,
              opacity: 0
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.5,
              delay: 1,
              paused: true,
            });

          ScrollTrigger.create({
            trigger: "#section-2",
            scrub: 1,
            //markers: true,
            start: () => `top top`,
            end: () => `+=500 top`,
            onEnter: () => { tween.play(); tweent.play() },
            onLeaveBack: () => { tween.reverse(); tweent.reverse() },
            once: false,
          });

          //section 1
          let tl = gsap.timeline({})
          tl.fromTo(
            document.querySelectorAll(".ofx"),
            { opacity: 0 },
            {
              opacity: 1, duration: 2, ease: "expo.inOut"
            }
          );
          tl.to("#main-heading", {
            opacity: 1, duration: 3, ease: "expo.inOut",
          }, "<")
          tl.fromTo("#sub-script", { y: "0px" }, {
            opacity: 1, duration: 1.5, y: "0px", ease: "power3.out"
          }, "-=1.5")
          tl.fromTo("#my-bulb-svg", {
            left: "-350px", opacity: 0,
          }, { left: "-150px", opacity: 1, duration: 2, ease: "expo.out", }, "-=1.5")
          tl.fromTo("#my-globe-svg", {
            right: "-250px", opacity: 0,
          }, { right: "0px", opacity: 1, duration: 2, ease: "expo.out", }, "<")
          tl.fromTo("#hills", {
            right: "-250px", opacity: 0,
          }, { right: "-100px", opacity: 1, duration: 2, ease: "expo.out", }, "<")
          tl.fromTo("#scroll-assist", {
            y: 100, opacity: 0, scale: 1.2
          }, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out" })
        }

      });

      return () => {
        ctxRef.current && ctxRef.current.revert(); // This kills the context
      };
    }
  }, [pageloaded, screenWidth]);

  const handleClick = (passedValue) => {
    document.getElementById("full-screen-container").style.display = "block"
    let myele = document.getElementById("fscreen")
    const iframe: any = document.getElementById(passedValue);
    myele.appendChild(iframe.cloneNode(true));
  };

  const close = () => {
    document.getElementById("full-screen-container").style.display = "none";
  }

  return (
    <>
      {/* AKAAR CREATIVE AGENCY */}
      {/* AKAAR VIDEOGRAPHY & PHOTOGRAPHY */}
      {/* AKAAR  WEDDINGS*/}
      {/* AKAAR  CONTACT*/}

      <div id="loading">
        <div className="text-container" id="loading-image">
          <h1 className="masked-text">AKAAR <sup>...</sup></h1>
        </div>
      </div>

      <div id="full-screen-container">
        <div id="akaar-presents">
          <h4 className="text-shadow" style={{ color: "white" }}>AKAAR Presents MANTO</h4>
        </div>
        <button className="close-btn" onClick={() => {
          close()
        }}>x</button>
        <div id="fscreen">

        </div>
      </div>


      <div id="content">
        <div className="slider-container" id="slider-id">
          <div id="section-1" className="full-screen panels">
            <svg id="my-bulb-svg" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="bulb">
                <path id="bulb_2"
                  d="M274.466 37.557C271.046 34.305 266.725 32.087 262.276 30.605C262.246 30.595 262.178 30.576 262.076 30.549C258.046 29.47 253.798 29.47 249.768 30.549C249.667 30.576 249.598 30.595 249.568 30.605C245.119 32.087 240.798 34.306 237.378 37.557C227.198 47.236 228.852 64.804 238.766 74.074C241.547 76.674 242.768 80.031 243.619 83.732C243.876 84.847 245.351 96.472 244.836 96.472C249.811 96.472 255.921 96.472 255.921 96.472C255.921 96.472 262.031 96.472 267.006 96.472C266.492 96.472 267.967 84.846 268.223 83.732C269.075 80.032 270.296 76.675 273.077 74.074C282.992 64.805 284.645 47.237 274.466 37.557Z"
                  fill="#EDB62B" />
                <path id="shade-curve" opacity="0.52"
                  d="M251.935 83.732C251.084 80.032 249.862 76.675 247.082 74.074C237.168 64.804 235.514 47.236 245.694 37.557C249.114 34.305 253.435 32.087 257.884 30.605C257.914 30.595 257.982 30.576 258.084 30.549C258.744 30.372 259.41 30.235 260.08 30.116C256.66 29.509 253.138 29.646 249.768 30.549C249.667 30.576 249.598 30.595 249.568 30.605C245.119 32.087 240.797 34.306 237.378 37.557C227.198 47.236 228.852 64.804 238.766 74.074C241.547 76.674 242.768 80.031 243.619 83.732C243.876 84.847 245.351 96.472 244.836 96.472C247.693 96.472 250.918 96.472 253.152 96.472C253.667 96.472 252.192 84.846 251.935 83.732Z"
                  fill="#FFF6E7" />
                <path id="Vector_23"
                  d="M255.922 96.472V69.36L260.694 66.609C262.271 65.7 261.956 63.337 260.196 62.873L251.512 60.581C250.031 60.19 249.863 58.156 251.26 57.527L255.921 55.43V46.227"
                  stroke="#FEFEFE" strokeWidth="2.2387" strokeMiterlimit="10"
                  strokeLinecap="round" />
                <path id="Vector_24"
                  d="M269.213 100.203C269.213 101.027 268.545 101.695 267.721 101.695H243.345C242.521 101.695 241.853 101.027 241.853 100.203C241.853 99.379 242.521 98.711 243.345 98.711H267.721C268.544 98.711 269.213 99.379 269.213 100.203Z"
                  fill="#2F2F35" />
                <path id="Vector_25"
                  d="M269.213 104.68C269.213 105.504 268.545 106.173 267.721 106.173H243.345C242.521 106.173 241.853 105.505 241.853 104.68C241.853 103.856 242.521 103.188 243.345 103.188H267.721C268.544 103.188 269.213 103.856 269.213 104.68Z"
                  fill="#2F2F35" />
                <path id="Vector_26"
                  d="M269.213 109.157C269.213 109.981 268.545 110.649 267.721 110.649H243.345C242.521 110.649 241.853 109.981 241.853 109.157C241.853 108.333 242.521 107.664 243.345 107.664H267.721C268.544 107.665 269.213 108.333 269.213 109.157Z"
                  fill="#2F2F35" />
                <path id="Vector_27"
                  d="M255.532 121.096C260.34 121.096 264.238 117.198 264.238 112.39H246.827C246.827 117.199 250.724 121.096 255.532 121.096Z"
                  fill="#2F2F35" />
              </g>
            </svg>
            <svg id="my-globe-svg" width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="globe-stars">
                <path id="star"
                  d="M373.444 194.954L375.552 199.226L380.266 199.911L376.855 203.236L377.66 207.932L373.444 205.715L369.227 207.932L370.033 203.236L366.622 199.911L371.336 199.226L373.444 194.954Z"
                  fill="#9E9E9E" />
                <path id="star_2"
                  d="M434.141 188.986L437.085 194.951L443.668 195.908L438.905 200.551L440.029 207.107L434.141 204.012L428.254 207.107L429.378 200.551L424.615 195.908L431.198 194.951L434.141 188.986Z"
                  fill="#666666" />
                <path id="star_3"
                  d="M415.72 278.379L417.363 281.708L421.038 282.242L418.379 284.834L419.007 288.493L415.72 286.765L412.434 288.493L413.061 284.834L410.402 282.242L414.077 281.708L415.72 278.379Z"
                  fill="#9E9E9E" />
                <path id="star_4"
                  d="M357.095 255.824L360.039 261.789L366.621 262.745L361.858 267.388L362.983 273.944L357.095 270.849L351.207 273.944L352.332 267.388L347.568 262.745L354.151 261.789L357.095 255.824Z"
                  fill="#666666" />
                <g id="Globe">
                  <g id="Group_4">
                    <path id="ball"
                      d="M413.544 269.92C430.373 263.172 438.545 244.058 431.797 227.229C425.048 210.4 405.935 202.228 389.106 208.976C372.277 215.725 364.105 234.838 370.853 251.667C377.601 268.496 396.715 276.668 413.544 269.92Z"
                      fill="#EDB62B" />
                  </g>
                  <g id="Group_5" opacity="0.67">
                    <path id="moon"
                      d="M392.481 271.063C404.078 274.299 415.953 270.88 424.054 263.108C418.568 264.578 412.63 264.65 406.763 263.013C389.299 258.14 379.092 240.033 383.965 222.569C385.602 216.702 388.738 211.659 392.836 207.727C381.993 210.633 372.919 219.023 369.683 230.62C364.811 248.083 375.018 266.19 392.481 271.063Z"
                      fill="#A87D1D" />
                  </g>
                  <path id="shade" opacity="0.52"
                    d="M410.128 207.822C408.493 207.366 406.851 207.042 405.216 206.843C404.36 209.913 403.893 213.144 403.893 216.487C403.893 233.576 415.857 247.861 431.863 251.449C432.267 250.417 432.623 249.356 432.927 248.266C437.798 230.802 427.591 212.694 410.128 207.822Z"
                    fill="#FFF6E7" />
                </g>
                <g>
                  <path id="ring"
                    d="M368.589 236.741C355.853 231.779 347.931 227.29 348.597 224.905C349.704 220.937 374.152 224.292 403.203 232.398C432.254 240.504 454.906 250.292 453.799 254.26C453.136 256.638 444.092 256.386 430.698 254.058"
                    stroke="#666666" strokeWidth="2" strokeMiterlimit="10" />
                  <circle id="Ellipse 1" r="4.5" fill="#D9D9D9">
                    <animateMotion dur="5s" repeatCount="indefinite">
                      <mpath href="#ring" />
                    </animateMotion>
                  </circle>
                </g>
              </g>
            </svg>
            <svg id="hills" width="259" height="201" viewBox="0 0 1038 804" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="undraw_art_re_vj2w 1" clipPath="url(#clip0_1_3)">
                <path id="Vector" d="M664.01 510.834C662.172 470.173 654.784 429.953 642.05 391.294C642.05 391.294 642.06 391.284 642.05 391.284C639.27 382.814 636.223 374.414 632.91 366.084C631.67 362.954 630.393 359.834 629.08 356.724C618.791 332.349 606.363 308.934 591.94 286.754C586.82 278.854 581.443 271.121 575.81 263.554C562.602 245.812 548.117 229.057 532.47 213.424C526.08 207.034 519.533 200.864 512.83 194.914C511.86 194.044 510.89 193.184 509.91 192.344C485.812 171.268 459.521 152.839 431.49 137.374C431.09 137.134 430.7 136.924 430.3 136.714C424.59 133.574 418.81 130.567 412.96 127.694C412.36 127.394 411.77 127.094 411.17 126.814C406.16 124.364 401.1 122.014 395.99 119.764C395.18 119.394 394.36 119.034 393.54 118.684C393.52 118.674 393.51 118.664 393.49 118.664C392.05 118.034 390.61 117.414 389.17 116.804C388.79 116.644 388.41 116.484 388.03 116.324H388.02C336.208 94.5637 280.762 82.7546 224.58 81.514C220.96 81.424 217.33 81.3806 213.69 81.384H116.15C108.577 81.3781 101.037 82.3837 93.73 84.374C93.58 84.414 93.44 84.4539 93.29 84.494C75.3349 89.5113 59.5122 100.261 48.2325 115.104C36.9529 129.947 30.8346 148.071 30.81 166.714V537.724C30.809 539.737 31.2542 541.726 32.1135 543.547C32.9729 545.367 34.2251 546.975 35.78 548.254C35.8 548.274 35.82 548.284 35.83 548.294C38.2689 550.302 41.3308 551.398 44.49 551.394H645.32C650.408 551.388 655.285 549.364 658.883 545.766C662.48 542.169 664.504 537.292 664.51 532.204C664.51 525.054 664.343 517.931 664.01 510.834Z" fill="#F2F2F2" />
                <path id="Vector_2" d="M440.878 454.746C440.927 488.084 433.295 520.986 418.572 550.898H44.49C40.9952 550.898 37.6435 549.51 35.1723 547.038C32.7011 544.567 31.3127 541.216 31.3127 537.721V350.637C88.7894 244.841 221.148 205.67 326.944 263.147C361.418 281.876 390.199 309.561 410.252 343.283C430.304 377.004 440.885 415.512 440.878 454.746Z" fill="#D5DBFD" />
                <path id="Vector_3" d="M664.011 419.954V532.204C664.011 537.162 662.041 541.917 658.536 545.423C655.03 548.929 650.275 550.898 645.317 550.898H43.6615C40.1924 550.898 36.8653 549.52 34.412 547.068C31.9586 544.615 30.5798 541.288 30.5788 537.819V537.686C30.5788 444.191 321.378 364.443 404.062 333.476C450.753 316.045 502.003 315.119 549.294 330.851C596.585 346.583 637.067 378.027 664.011 419.954Z" fill="#D5DBFD" />
                <path id="Vector_4" d="M618.536 219.028C623.341 189.418 603.233 161.519 573.623 156.714C544.013 151.908 516.114 172.017 511.309 201.627C506.504 231.237 526.612 259.136 556.222 263.941C585.832 268.746 613.731 248.638 618.536 219.028Z" fill="#FF6584" />
                <path id="Vector_5" d="M281.36 222.794C281.36 230.334 281.047 237.531 280.42 244.384C272.32 333.814 212.84 365.734 140.68 365.734C138.87 365.734 137.08 365.714 135.29 365.664C131.69 365.594 128.12 365.424 124.6 365.174C92.21 362.884 63.17 353.354 41.28 334.064C37.5426 330.766 34.0438 327.207 30.81 323.414C11.53 300.824 0 268.124 0 222.794C0 149.124 68 61.5239 109.45 14.9739C113.247 10.6941 117.884 7.24169 123.073 4.83142C128.261 2.42116 133.891 1.10466 139.61 0.963888H140.01C146.024 0.855198 151.99 2.05135 157.497 4.46997C163.004 6.88858 167.921 10.4722 171.91 14.9739C190.785 36.0777 208.374 58.2978 224.58 81.5139C254.69 125.064 281.36 176.664 281.36 222.794Z" fill="#6C63FF" />
                <path id="Vector_6" d="M135.55 349.524L187.01 277.624L135.42 357.414L135.29 365.664L134.14 436.414L133.72 462.364H119.51L120.49 443.624L124.6 365.174L130.15 259.184L130.1 258.354L130.2 258.204L130.24 257.354L130.72 248.194L79.01 168.214L130.88 240.684L131 242.804L135.19 162.724L93.29 84.494L90.92 80.074L93.73 84.374L135.74 148.654L136.36 124.744L137.5 81.384L139.61 0.963989H140.01L139.57 81.384L139.39 113.544L166.69 81.384L183.46 61.634L169.62 81.384L139.2 124.814L138.04 196.524L179.19 127.714L137.87 207.074L137.22 246.944L196.95 151.154L141.6 252.424L136.99 260.854L135.55 349.524Z" fill="#6A7FF8" />
                <path id="Vector_7" d="M510.74 174.234C510.74 180.574 510.463 186.611 509.91 192.344C503.13 263.714 455.42 289.214 397.57 289.214C396.12 289.214 394.67 289.194 393.24 289.164C390.34 289.104 387.473 288.967 384.64 288.754C376.189 288.207 367.803 286.915 359.58 284.894C339.14 279.814 321.42 269.984 308.32 254.134C293.34 236.004 284.41 210.004 284.41 174.234C284.41 147.674 295.4 118.864 310.53 91.7839C327.05 62.2139 348.51 34.7139 365.98 14.4539C369.784 10.0283 374.477 6.45411 379.755 3.96431C385.033 1.47452 390.776 0.125047 396.61 0.00389181H397.01C403.102 -0.0925267 409.141 1.15191 414.698 3.64904C420.256 6.14617 425.197 9.8349 429.17 14.4539C462.65 53.2639 510.74 118.674 510.74 174.234Z" fill="#6C63FF" />
                <path id="Vector_8" d="M393.45 276.174L434.84 218.344L393.35 282.524L393.24 289.164L392.77 318.114L392.46 337.674L391.98 366.944H380.55L381.89 341.334L383.66 307.504L384.64 288.754L389.1 203.504L389.07 202.844L389.14 202.724L389.56 194.664L347.97 130.324L389.69 188.624L389.79 190.334L393.16 125.914L388.03 116.324H388.02L357.55 59.434L393.6 114.604L396.61 0.0039978H397.01L396.53 86.354L431.98 44.604L396.39 95.424L395.99 119.764L395.45 153.104L411.17 126.814L428.55 97.754L412.96 127.694L395.31 161.594L394.79 193.664L430.3 136.714L442.84 116.614L431.49 137.374L394.61 204.854L393.45 276.174Z" fill="#6A7FF8" />
                <path id="Vector_9" d="M743.87 294.454C743.87 351.834 709.76 371.864 667.68 371.864C666.71 371.864 665.74 371.854 664.77 371.834C662.82 371.784 660.89 371.704 658.98 371.554C650.068 371.028 641.282 369.185 632.91 366.084C608.32 356.634 591.5 334.754 591.5 294.454C591.503 291.881 591.65 289.31 591.94 286.754C593.35 273.884 598.11 260.454 604.61 247.404C608.337 239.988 612.47 232.784 616.99 225.824C622.75 216.884 628.94 208.414 634.95 200.784C638.752 195.938 643.586 192.001 649.101 189.26C654.615 186.518 660.672 185.04 666.83 184.934C666.97 184.934 667.11 184.924 667.26 184.934C673.634 184.847 679.942 186.231 685.694 188.98C691.445 191.73 696.485 195.769 700.42 200.784C721.07 227.014 743.87 263.064 743.87 294.454Z" fill="#6C63FF" />
                <path id="Vector_10" d="M664.91 363.084L692.77 324.154L664.84 367.364L664.77 371.834L663.98 419.904L663.91 424.194H656.22L656.98 409.684L658.98 371.554L661.98 314.164L661.95 313.714L662 313.634L662.29 308.214L634.29 264.894L662.37 304.144L662.44 305.294L664.71 261.924L640.74 217.164L665.01 254.324L666.83 184.934C666.97 184.934 667.11 184.924 667.26 184.934L666.98 235.294L690.85 207.184L666.88 241.394L666.25 280.234L688.54 242.964L666.16 285.944L665.81 307.534L698.16 255.664L665.69 315.064L664.91 363.084Z" fill="#6A7FF8" />
                <path id="Vector_11" d="M182.228 400.316C178.856 405.694 174.482 405.568 170.537 403.095C166.593 400.623 164.573 396.74 167.945 391.362C171.317 385.984 182.747 383.618 182.747 383.618C182.747 383.618 185.6 394.938 182.228 400.316Z" fill="#6C63FF" />
                <path id="Vector_12" d="M77.2676 414.996C73.8959 420.374 69.5212 420.248 65.5771 417.775C61.6329 415.302 59.6128 411.42 62.9845 406.042C66.3562 400.663 77.7871 398.298 77.7871 398.298C77.7871 398.298 80.6393 409.617 77.2676 414.996Z" fill="#6C63FF" />
                <path id="Vector_13" d="M449.358 389.123C449.982 395.441 446.444 398.017 441.812 398.475C437.179 398.932 433.206 397.098 432.582 390.78C431.958 384.463 439.552 375.598 439.552 375.598C439.552 375.598 448.734 382.806 449.358 389.123Z" fill="#6C63FF" />
                <path id="Vector_14" d="M328.292 310.769C324.92 316.148 320.545 316.021 316.601 313.549C312.657 311.076 310.637 307.194 314.009 301.815C317.38 296.437 328.811 294.072 328.811 294.072C328.811 294.072 331.663 305.391 328.292 310.769Z" fill="#6C63FF" />
                <path id="Vector_15" d="M607.207 393.71C603.836 399.088 599.461 398.962 595.517 396.489C591.573 394.017 589.553 390.134 592.924 384.756C596.296 379.378 607.727 377.012 607.727 377.012C607.727 377.012 610.579 388.332 607.207 393.71Z" fill="#6C63FF" />
              </g>
              <defs>
                <clipPath id="clip0_1_3">
                  <rect width="1150.08" height="803.243" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <div className="cnt-for-h">
              <div id="headings">
                <h1 id="main-heading" style={{ textAlign: "center" }}>AKAAR<sup>CREATIVE AGENCY</sup></h1>
                <p id="sub-script"><span>AKAAR</span> - is a dynamic force in the world of visual storytelling, specializing in creative videography, photography, illustration and animation that captivates and inspires. We blend artistic vision with strategic marketing to craft compelling content that resonates with your audience. At Akaar, we bring ideas to life, turning your brand's message into unforgettable visual experiences.</p>
              </div>
              <span id="my-vectors">
                <Image
                  className="ofx"
                  id="afx"
                  src="/static/1.gif"
                  width={150}
                  height={150}
                  alt="Picture of the videographer"
                />
                <Image
                  className="ofx"
                  id="photofx"
                  src="/static/2.gif"
                  width={150}
                  height={150}
                  alt="Picture of the photographer"
                />
                <Image
                  className="ofx"
                  id="photofx-1"
                  src="/static/3.gif"
                  width={150}
                  height={150}
                  alt="Picture of the photographer"
                />
                <Image
                  className="ofx"
                  id="photofx-2"
                  src="/static/4.gif"
                  width={150}
                  height={150}
                  alt="Picture of the photographer"
                />
                <Image
                  className="ofx"
                  id="photofx-3"
                  src="/static/5.gif"
                  width={150}
                  height={150}
                  alt="Picture of the photographer"
                />
                <Image
                  className="ofx"
                  id="photofx-4"
                  src="/static/6.gif"
                  width={150}
                  height={150}
                  alt="Picture of the photographer"
                />
                <Image
                  className="ofx"
                  id="photofx-5"
                  src="/static/7.gif"
                  width={150}
                  height={150}
                  alt="Picture of the photographer"
                />
                <Image
                  className="ofx"
                  id="photofx-6"
                  src="/static/8.gif"
                  width={150}
                  height={150}
                  alt="Picture of the photographer"
                />
              </span>
            </div>
          </div>
          <div id="section-2" className="full-screen panels">
            <div className="akaar-wedstyle">
              <h1 id="akaar-wed-shadow-1" style={{ color: "#E5E1D4" }}>AKAARWEDDINGS</h1>
            </div>
            <div className="akaar-wedstyle">
              <h1 id="akaar-wed-shadow" style={{ color: "#B2AFA5" }}>AKAARWEDDINGS</h1>
            </div>
            <div id="akaar-wed" className="akaar-wedstyle">
              <h1>AKAARWEDDINGS</h1>
            </div>
            <div id="wedding-illus">

              <svg id="wed-plant" width="279" height="360" viewBox="0 0 279 360" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="plant">
                  <g id="OBJECTS">
                    <g id="Group">
                      <path id="Vector" d="M227.407 208.196C227.407 208.196 227.688 130.296 204.975 51.925C204.066 48.79 203.762 46.94 204.652 47.817C204.652 47.817 230.725 105.059 230.725 200.977L227.407 208.196Z" fill="#FFE57A" />
                      <path id="Vector_2" d="M230.544 236.454C230.544 236.454 235.094 168.065 229.204 130.204C228.811 127.68 228.847 126.212 229.429 127.006C229.429 127.006 243.112 164.769 232.056 238.398L230.544 236.454Z" fill="#FFE57A" />
                      <g id="Group_2">
                        <path id="Vector_3" d="M132.67 54.726C132.67 54.726 132.673 54.742 132.673 54.783C132.676 54.799 132.673 54.824 132.679 54.856C132.811 55.812 132.746 57.019 132.498 58.391C132.498 58.391 132.498 58.391 132.492 58.4C130.643 69.041 118.162 90.07 95.183 85.756C87.561 84.325 79.605 83.796 72.166 83.699C44.091 79.187 39.716 82.242 39.145 82.858C39.116 82.88 39.103 82.899 39.091 82.918C62.863 38.114 132.67 54.726 132.67 54.726Z" fill="#FFF230" fill-opacity="0.8" />
                        <path id="Vector_4" d="M132.673 54.783C132.676 54.799 132.673 54.824 132.679 54.856C132.675 55.252 132.683 56.536 132.498 58.391C132.498 58.391 132.498 58.391 132.492 58.4C131.528 68.252 125.443 94.02 87.93 86.557C81.984 85.369 76.758 84.437 72.166 83.7C44.091 79.188 39.716 82.243 39.145 82.859C40.186 81.489 52.031 66.683 71.707 66.9C92.352 67.128 112.593 79.897 122.697 71.708C132.344 63.884 132.663 55.519 132.673 54.783Z" fill="#FFF230" fill-opacity="0.8" />
                      </g>
                      <g id="Group_3">
                        <g id="Group_4">
                          <g id="Group_5">
                            <path id="Vector_5" d="M223.055 130.222C222.857 130.293 221.97 128.561 220.546 125.387C219.78 123.827 218.843 121.918 217.754 119.702C216.571 117.537 215.307 115.034 213.682 112.396C210.518 107.08 206.334 100.993 200.947 94.865C198.219 91.836 195.266 88.731 191.942 85.792C190.326 84.272 188.552 82.873 186.799 81.4C184.981 80.006 183.159 78.563 181.218 77.232C173.541 71.782 165.557 67.577 158.057 64.341C150.539 61.127 143.494 58.877 137.495 57.319C125.482 54.178 117.741 53.611 117.788 53.108C117.801 52.916 119.75 52.815 123.26 53.048C126.766 53.293 131.837 53.882 137.995 55.22C144.154 56.532 151.401 58.607 159.142 61.747C166.865 64.908 175.095 69.143 182.979 74.739C184.971 76.106 186.841 77.592 188.701 79.033C190.496 80.554 192.307 82.005 193.955 83.581C197.342 86.631 200.335 89.864 203.073 93.024C208.484 99.416 212.58 105.779 215.561 111.334C217.095 114.092 218.245 116.706 219.297 118.973C220.253 121.285 221.049 123.285 221.646 124.938C222.744 128.279 223.253 130.15 223.055 130.222Z" fill="#FFE57A" />
                          </g>
                        </g>
                      </g>
                      <g id="Group_6">
                        <g id="Group_7">
                          <path id="Vector_6" d="M163.718 34.748C163.718 34.748 160.265 93.646 97.7321 104.697C97.7321 104.697 102.426 19.788 163.718 34.748Z" fill="#FFF230" fill-opacity="0.8" />
                        </g>
                        <g id="Group_8">
                          <g id="Group_9">
                            <g id="Group_10">
                              <path id="Vector_7" d="M222.706 125.154C222.278 125.278 220.04 118.559 216.394 107.746C214.555 102.347 212.37 95.918 209.62 88.929C206.868 81.947 203.524 74.4 199.111 67.027C196.911 63.337 194.469 59.927 191.977 56.738C191.338 55.952 190.705 55.174 190.078 54.403C189.437 53.643 188.772 52.914 188.132 52.179C186.862 50.673 185.562 49.389 184.187 48.131C178.753 43.116 172.959 39.632 167.788 37.631C162.575 35.688 158.007 35.366 154.908 35.63C154.134 35.713 153.421 35.677 152.835 35.822C152.242 35.934 151.735 36.021 151.32 36.082C150.491 36.204 150.031 36.222 149.997 36.122C149.963 36.023 150.356 35.809 151.151 35.49C151.548 35.331 152.046 35.145 152.641 34.935C153.229 34.692 153.955 34.63 154.755 34.451C155.159 34.376 155.586 34.296 156.034 34.213C156.484 34.133 156.963 34.145 157.461 34.107C158.46 34.055 159.552 33.966 160.716 34.1C161.3 34.143 161.905 34.187 162.53 34.233C163.145 34.342 163.779 34.454 164.432 34.57C165.755 34.754 167.079 35.212 168.503 35.595C174.084 37.449 180.278 40.914 186.069 46.041C187.51 47.301 188.992 48.723 190.295 50.225C190.965 50.971 191.658 51.711 192.327 52.485C192.982 53.273 193.643 54.068 194.311 54.87C196.914 58.132 199.456 61.648 201.725 65.452C206.275 73.055 209.606 80.804 212.247 87.927C214.887 95.061 216.871 101.598 218.454 107.103C221.586 118.122 223.088 125.044 222.706 125.154Z" fill="#FFE57A" />
                            </g>
                          </g>
                        </g>
                      </g>
                      <g id="Group_11">
                        <g id="Group_12">
                          <g id="Group_13">
                            <path id="Vector_8" d="M226.591 199.122C226.142 199.104 226.06 193.995 225.592 185.785C225.356 181.68 225.012 176.801 224.492 171.394C223.964 165.988 223.262 160.057 222.397 153.842C221.941 150.736 221.495 147.704 221.065 144.775C220.64 141.883 220.049 139.151 219.36 136.557C218.668 133.97 217.889 131.542 217.035 129.327C216.613 128.217 216.168 127.163 215.707 126.171C215.248 125.166 214.777 124.247 214.266 123.454C212.191 120.203 209.251 118.442 207.237 118.511C206.219 118.507 205.483 118.909 204.969 119.17C204.503 119.501 204.203 119.665 204.121 119.598C204.041 119.533 204.18 119.232 204.57 118.702C205.009 118.245 205.807 117.541 207.121 117.328C208.411 117.109 210.056 117.405 211.606 118.27C213.167 119.123 214.72 120.442 216.037 122.22C216.706 123.121 217.28 124.103 217.815 125.119C218.361 126.143 218.883 127.226 219.376 128.365C220.373 130.639 221.272 133.128 222.067 135.794C222.856 138.455 223.538 141.321 224.018 144.301C224.51 147.239 224.983 150.289 225.42 153.421C226.292 159.686 226.916 165.688 227.295 171.163C227.666 176.639 227.789 181.584 227.75 185.734C227.667 194.039 226.984 199.14 226.591 199.122Z" fill="#FFE57A" />
                          </g>
                        </g>
                      </g>
                      <g id="Group_14">
                        <path id="Vector_9" d="M212.138 118.885C212.138 118.885 193.546 105.605 181.594 129.509C169.642 153.413 180.93 173.997 170.306 182.629C170.306 182.629 212.138 181.966 212.138 118.885Z" fill="#FFF230" fill-opacity="0.8" />
                        <path id="Vector_10" d="M212.164 120.691C212.164 120.691 190.93 114.147 190.148 138.913C189.256 167.162 182.849 179.059 170.306 182.63C170.306 182.63 215.256 184.074 212.164 120.691Z" fill="#FFF230" fill-opacity="0.9" />
                      </g>
                      <path id="Vector_11" d="M251.595 196.3H215.081V247.806H251.595V196.3Z" fill="#FFCE4E" />
                      <path id="Vector_12" d="M215.464 201.403H251.264" stroke="#FFCE4E" stroke-miterlimit="10" />
                      <g id="Group_15">
                        <g id="Group_16">
                          <g id="Group_17">
                            <path id="Vector_13" d="M223.547 135.024C223.324 135.051 223.005 134.089 222.405 132.365C221.799 130.64 220.923 128.144 219.841 125.06C218.739 121.981 217.403 118.32 215.868 114.281C214.291 110.253 212.664 105.801 210.417 101.439C205.952 92.482 201.893 84.397 198.792 78.651C197.246 75.775 195.934 73.496 195 71.943C194.526 71.171 194.166 70.563 193.903 70.167C193.655 69.753 193.553 69.492 193.625 69.415C193.697 69.338 193.941 69.45 194.35 69.745C194.779 70.029 195.306 70.537 195.947 71.227C197.214 72.614 198.84 74.774 200.647 77.55C204.272 83.097 208.667 91.089 213.147 100.077C213.426 100.641 213.703 101.201 213.979 101.758C214.249 102.339 214.536 102.92 214.773 103.491C215.276 104.635 215.727 105.764 216.165 106.877C217.036 109.101 217.798 111.263 218.512 113.328C219.918 117.463 221.052 121.228 221.901 124.423C222.75 127.617 223.304 130.247 223.56 132.093C223.816 133.941 223.743 135.003 223.547 135.024Z" fill="#FFE57A" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <svg id="wed-clock" width="130" height="164" viewBox="0 0 330 364" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="clock">
                  <g id="OBJECTS">
                    <g id="Group">
                      <path id="Vector" d="M128.039 375.145C128.039 375.145 143.89 373.893 147.232 387.576C150.573 401.259 141.339 416.437 127.605 416.241C113.871 416.045 104.203 401.826 105.156 393.403C106.108 384.979 114.439 374.128 128.039 375.145Z" fill="white" />
                      <path id="Vector_2" d="M97.999 352.941C97.999 352.941 108.367 352.122 110.553 361.072C112.739 370.022 106.699 379.95 97.715 379.821C88.731 379.693 82.408 370.393 83.031 364.883C83.654 359.374 89.104 352.276 97.999 352.941Z" fill="white" />
                    </g>
                    <g id="Group_2">
                      <g id="Group_3">
                        <g id="Group_4">
                          <g id="Group_5">
                            <path id="Vector_3" d="M206.421 117.959C214.351 110.029 214.351 97.1721 206.421 89.2422C198.491 81.3123 185.634 81.3123 177.704 89.2422C169.774 97.1721 169.774 110.029 177.704 117.959C185.634 125.889 198.491 125.889 206.421 117.959Z" fill="#F9C852" />
                          </g>
                          <g id="Group_6">
                            <path id="Vector_4" d="M279.679 313.056C327.594 265.14 327.594 187.453 279.679 139.538C231.763 91.6219 154.076 91.6219 106.161 139.538C58.2448 187.453 58.2448 265.14 106.161 313.056C154.076 360.971 231.763 360.971 279.679 313.056Z" fill="#FFCE4E" />
                          </g>
                          <g id="Group_7">
                            <path id="Vector_5" d="M262.691 296.068C301.224 257.534 301.224 195.059 262.691 156.526C224.157 117.992 161.682 117.992 123.149 156.526C84.6151 195.059 84.6151 257.534 123.149 296.068C161.682 334.601 224.157 334.601 262.691 296.068Z" fill="#FFE8AB" />
                          </g>
                          <g id="Group_8">
                            <path id="Vector_6" d="M255.815 289.192C290.551 254.456 290.551 198.138 255.815 163.402C221.079 128.666 164.76 128.666 130.024 163.402C95.2884 198.138 95.2884 254.456 130.024 289.192C164.76 323.928 221.079 323.928 255.815 289.192Z" fill="#FFF230" fill-opacity="0.37" />
                          </g>
                          <g id="Group_9">
                            <g id="Group_10">
                              <path id="Vector_7" d="M258.275 227.012C258.275 225.474 259.522 224.227 261.06 224.227H273.794C275.332 224.227 276.579 225.474 276.579 227.012C276.579 227.706 276.325 228.34 275.906 228.828C275.395 229.422 274.638 229.797 273.794 229.797H261.06C259.522 229.797 258.275 228.55 258.275 227.012Z" fill="#FFE8AB" />
                              <path id="Vector_8" d="M109.266 227.012C109.266 225.474 110.513 224.227 112.052 224.227H124.785C126.323 224.227 127.57 225.474 127.57 227.012C127.57 227.706 127.316 228.34 126.897 228.828C126.386 229.422 125.629 229.797 124.785 229.797H112.052C110.513 229.797 109.266 228.55 109.266 227.012Z" fill="#FFE8AB" />
                            </g>
                            <g id="Group_11">
                              <g id="Group_12">
                                <path id="Vector_9" d="M192.923 161.659C191.385 161.659 190.138 160.412 190.138 158.874V146.14C190.138 144.602 191.385 143.354 192.923 143.354C193.617 143.354 194.251 143.608 194.739 144.027C195.332 144.538 195.708 145.295 195.708 146.139V158.872C195.708 160.412 194.461 161.659 192.923 161.659Z" fill="#FFE8AB" />
                              </g>
                              <g id="Group_13">
                                <path id="Vector_10" d="M192.923 310.668C191.385 310.668 190.138 309.421 190.138 307.883V295.15C190.138 293.612 191.385 292.365 192.923 292.365C193.617 292.365 194.251 292.619 194.739 293.038C195.332 293.549 195.708 294.306 195.708 295.15V307.883C195.708 309.421 194.461 310.668 192.923 310.668Z" fill="#FFE8AB" />
                              </g>
                            </g>
                            <g id="Group_14">
                              <path id="Vector_11" d="M226.187 283.265C227.511 282.482 229.219 282.921 230.002 284.245L236.483 295.206C237.266 296.53 236.827 298.238 235.503 299.021C234.906 299.374 234.231 299.479 233.597 299.366C232.826 299.229 232.117 298.768 231.687 298.041L225.206 287.08C224.424 285.756 224.863 284.048 226.187 283.265Z" fill="#FFE8AB" />
                              <path id="Vector_12" d="M150.341 155.003C151.665 154.22 153.373 154.659 154.157 155.983L160.638 166.944C161.421 168.268 160.982 169.976 159.658 170.759C159.061 171.112 158.385 171.217 157.752 171.104C156.981 170.967 156.272 170.506 155.842 169.779L149.361 158.818C148.578 157.494 149.017 155.786 150.341 155.003Z" fill="#FFE8AB" />
                            </g>
                            <g id="Group_15">
                              <g id="Group_16">
                                <path id="Vector_13" d="M249.176 193.747C248.393 192.423 248.832 190.715 250.156 189.932L261.117 183.451C262.441 182.668 264.149 183.107 264.932 184.431C265.285 185.028 265.39 185.704 265.277 186.337C265.139 187.108 264.679 187.817 263.952 188.247L252.991 194.728C251.667 195.51 249.959 195.071 249.176 193.747Z" fill="#FFE8AB" />
                              </g>
                              <g id="Group_17">
                                <path id="Vector_14" d="M120.914 269.593C120.131 268.269 120.57 266.561 121.894 265.778L132.854 259.297C134.178 258.514 135.886 258.953 136.669 260.277C137.022 260.874 137.127 261.55 137.014 262.183C136.876 262.954 136.416 263.663 135.689 264.093L124.729 270.574C123.405 271.356 121.697 270.917 120.914 269.593Z" fill="#FFE8AB" />
                              </g>
                            </g>
                            <g id="Group_18">
                              <path id="Vector_15" d="M250.611 257.721C251.334 256.363 253.021 255.848 254.379 256.571L265.619 262.554C266.977 263.277 267.492 264.964 266.769 266.322C266.443 266.934 265.921 267.375 265.321 267.609C264.591 267.893 263.747 267.869 263.001 267.472L251.761 261.489C250.402 260.765 249.888 259.079 250.611 257.721Z" fill="#FFE8AB" />
                              <path id="Vector_16" d="M119.077 187.702C119.8 186.344 121.487 185.829 122.845 186.552L134.085 192.535C135.443 193.258 135.958 194.945 135.235 196.303C134.909 196.916 134.387 197.356 133.787 197.59C133.057 197.874 132.213 197.85 131.467 197.453L120.227 191.47C118.869 190.746 118.354 189.059 119.077 187.702Z" fill="#FFE8AB" />
                            </g>
                            <g id="Group_19">
                              <g id="Group_20">
                                <path id="Vector_17" d="M223.632 169.324C222.274 168.601 221.759 166.914 222.482 165.556L228.465 154.316C229.188 152.958 230.875 152.443 232.233 153.166C232.845 153.492 233.286 154.014 233.52 154.614C233.804 155.344 233.78 156.188 233.383 156.934L227.4 168.174C226.676 169.532 224.99 170.047 223.632 169.324Z" fill="#FFE8AB" />
                              </g>
                              <g id="Group_21">
                                <path id="Vector_18" d="M153.612 300.857C152.254 300.134 151.739 298.447 152.462 297.089L158.445 285.849C159.168 284.491 160.855 283.976 162.213 284.699C162.825 285.025 163.266 285.547 163.5 286.147C163.784 286.877 163.76 287.721 163.363 288.467L157.38 299.707C156.657 301.065 154.97 301.58 153.612 300.857Z" fill="#FFE8AB" />
                              </g>
                            </g>
                          </g>
                          <g id="Group_22">
                            <g id="Group_23">
                              <path id="Vector_19" d="M200.931 193.897C200.931 197.346 197.218 197.41 192.637 197.41C188.056 197.41 184.343 197.346 184.343 193.897C184.343 190.448 192.637 180.821 192.637 180.821C192.637 180.821 200.931 190.448 200.931 193.897Z" fill="#43315C" />
                            </g>
                            <g id="Group_24">
                              <path id="Vector_20" d="M194.353 192.548H190.921V219.147H194.353V192.548Z" fill="#43315C" />
                            </g>
                          </g>
                          <g id="Group_25">
                            <g id="Group_26">
                              <g id="Group_27">
                                <path id="Vector_21" d="M240.194 232.589C236.745 232.589 236.681 230.412 236.681 227.727C236.681 225.042 236.745 222.865 240.194 222.865C243.643 222.865 253.27 227.727 253.27 227.727C253.27 227.727 243.643 232.589 240.194 232.589Z" fill="#43315C" />
                              </g>
                              <g id="Group_28">
                                <path id="Vector_22" d="M249.838 226.297H194.067V229.729H249.838V226.297Z" fill="#43315C" />
                              </g>
                            </g>
                          </g>
                          <g id="Group_29">
                            <path id="Vector_23s" d="M194.068 227.155C193.571 227.155 193.089 226.896 192.825 226.434C192.434 225.748 192.672 224.874 193.358 224.483L243.981 195.596C244.667 195.205 245.54 195.443 245.932 196.129C246.324 196.815 246.085 197.689 245.399 198.08L194.776 226.967C194.552 227.094 194.308 227.155 194.068 227.155Z" fill="#F9C852" />
                          </g>
                          <g id="Group_30">
                            <path id="Vector_24" d="M201.615 234.993C206.418 230.19 206.418 222.403 201.615 217.601C196.813 212.798 189.026 212.798 184.224 217.601C179.421 222.403 179.421 230.19 184.224 234.993C189.026 239.795 196.813 239.795 201.615 234.993Z" fill="#FFCE4E" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>

              <svg id="street-light" width="240" height="473" viewBox="0 0 188 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <g id="Group">
                    <g id="Group_2">
                      <path id="Vector" d="M31.287 465.587C42.2548 465.587 51.146 462.928 51.146 459.647C51.146 456.366 42.2548 453.707 31.287 453.707C20.3192 453.707 11.428 456.366 11.428 459.647C11.428 462.928 20.3192 465.587 31.287 465.587Z" fill="#FFCE4E" />
                      <path id="Vector_2" d="M49.125 458.107C49.125 460.538 41.139 462.508 31.287 462.508C21.436 462.508 13.449 460.538 13.449 458.107C13.449 455.677 21.435 453.706 31.287 453.706C41.139 453.707 49.125 455.677 49.125 458.107Z" fill="#FFE8AB" />
                      <g id="Group_3">
                        <path id="Vector_3" d="M39.697 90.743H21.628V95.009H39.697V90.743Z" fill="#FFCE4E" />
                        <path id="Vector_4" d="M33.598 90.743H27.06V366.154H33.598V90.743Z" fill="#FFCE4E" />
                        <path id="Vector_5" d="M33.598 90.743H31.102V366.154H33.598V90.743Z" fill="#FFE8AB" />
                        <path id="Vector_6" d="M25.597 22.517C25.597 22.517 21.861 19.986 22.958 15.936C24.055 11.886 28.908 5.81101 32.135 7.33001C35.362 8.84901 38.635 14.755 37.758 20.155C36.88 25.554 25.597 22.517 25.597 22.517Z" fill="#FDC469" />
                        <path id="Vector_7" d="M4.84299 34.186L21.043 89.758H40.788L54.457 34.186H4.84299Z" fill="#FFCE4E" />
                        <path id="Vector_8" d="M6.53 34.186L23.626 89.758H38.088L51.925 34.186H6.53Z" fill="#FDC469" />
                        <path id="Vector_9" d="M26.073 85.751C25.064 81.014 24.195 76.25 23.21 71.508C22.19 66.598 21.077 61.701 19.937 56.817C18.174 49.264 16.272 41.742 14.526 34.185H6.53L23.626 89.757H26.968C26.655 88.425 26.358 87.089 26.073 85.751Z" fill="#FDC469" />
                        <path id="Vector_10" d="M43.62 34.186C42.755 37.456 42.044 40.768 41.393 44.087C40.499 48.649 39.713 53.232 38.779 57.786C37.825 62.439 36.787 67.077 35.636 71.685C35.055 74.014 34.429 76.334 33.859 78.665C33.314 80.893 32.914 83.153 32.543 85.415C32.306 86.86 32.078 88.31 31.836 89.756H38.087L45.006 61.97L51.925 34.184H43.62V34.186Z" fill="#FDC469" />
                        <path id="Vector_11" d="M11.171 32.642L3.82999 30.617L21.296 19.479H41.041L56.988 32.642H11.171Z" fill="#FFCE4E" />
                        <path id="Vector_12" d="M26.706 19.479H22.733C22.102 20.151 21.482 20.834 20.845 21.5C17.356 25.143 13.791 28.718 10.363 32.418L11.172 32.641H19.821C22.118 28.256 24.429 23.876 26.706 19.479Z" fill="#FFCE4E" />
                        <path id="Vector_13" opacity="0.6" d="M32.991 32.642H56.988L41.041 19.479H31.505C32.045 23.861 32.449 28.26 32.991 32.642Z" fill="#FFCE4E" />
                        <path id="Vector_14" d="M16.3468 32.4204L14.1008 32.8626L25.3476 89.9812L27.5935 89.539L16.3468 32.4204Z" fill="#FFE8AB" />
                        <path id="Vector_15" d="M43.1328 32.4238L31.8744 89.5366L34.1202 89.9793L45.3786 32.8665L43.1328 32.4238Z" fill="#FFE8AB" />
                        <path id="Vector_16" d="M41.64 88.078H19.018V93.408H41.64V88.078Z" fill="#576F7D" />
                        <path id="Vector_17" d="M41.64 88.078H19.018V93.408H41.64V88.078Z" fill="#FFE8AB" />
                        <path id="Vector_18" d="M30.915 461.447V363.991C30.915 363.991 28.637 359.182 25.346 360.447C22.055 361.713 17.752 365.763 18.005 372.851C18.258 379.939 18.005 449.55 18.005 449.55C18.005 449.55 17.752 457.144 22.308 458.663C26.865 460.181 30.915 461.447 30.915 461.447Z" fill="#FFE8AB" />
                        <path id="Vector_19" d="M18.102 412.951C18.453 407.921 18.723 402.887 18.904 397.844C19.127 391.609 19.387 385.385 19.814 379.16C20.094 375.076 20.407 370.933 21.514 366.974C22.114 364.826 23.031 362.512 24.542 360.81C21.398 362.385 17.773 366.328 18.006 372.851C18.13 376.336 18.132 394.94 18.102 412.951Z" fill="#FFE8AB" />
                        <path id="Vector_20" d="M30.915 461.447V363.991C30.915 363.991 33.193 359.182 36.484 360.447C39.775 361.713 44.078 365.763 43.825 372.851C43.572 379.939 43.825 449.55 43.825 449.55C43.825 449.55 44.078 457.144 39.522 458.663C34.966 460.182 30.915 461.447 30.915 461.447Z" fill="#FFCE4E" />
                        <path id="Vector_21" d="M58.001 30.617H2.81799V32.642H58.001V30.617Z" fill="#5E7C9E" />
                        <path id="Vector_22" opacity="0.6" d="M7.78699 28.094L3.82999 30.617L11.171 32.642H56.988L51.478 28.094H7.78699Z" fill="#FFCE4E" />
                        <path id="Vector_23s" d="M58.001 30.617H2.81799V37.705H58.001V30.617Z" fill="#FFE8AB" />
                        <path id="Vector_24" d="M58.001 30.617H2.81799V32.421H58.001V30.617Z" fill="#FFCE4E" />
                      </g>
                    </g>
                    <g id="Group_4">
                      <g id="Group_5">
                        <path id="Vector_25" d="M78.187 292.167C78.382 292.025 78.298 292.095 78.187 292.167Z" fill="#274D3F" />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>


              <svg id="wed-main-illus" viewBox="0 0 194 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="OBJECTS">
                  <g id="Group">
                    <g id="Clip path group">
                      <g id="Group_2">
                        <g id="Group_3">
                          <path id="Vector" d="M9.401 301.343C8.744 304.13 8.08699 306.917 7.42999 309.703C7.21699 310.607 7.013 311.599 7.427 312.43C8.08 313.741 9.837 313.935 11.3 313.957C15.582 314.02 19.864 314.082 24.146 314.145C26.008 314.172 28.245 313.994 29.136 312.358C29.848 311.05 29.319 309.441 28.78 308.053C27.685 305.233 26.59 302.413 25.495 299.593C25.154 298.715 24.805 297.823 24.223 297.083C22.917 295.424 20.618 294.811 18.515 295.009C14.022 295.431 10.467 296.82 9.401 301.343Z" fill="#161516" />
                          <path id="Vector_2" d="M24.023 288.875C24.145 290.925 23.91 294.594 24.224 296.394C24.736 299.338 21.605 298.577 20.471 298.562C18.843 298.541 17.215 298.52 15.587 298.499C14.397 298.484 13.024 298.378 12.333 297.409C11.877 296.769 11.859 295.924 11.891 295.139C12.013 292.145 12.308 290.253 12.18 285.492" fill="#FAFFFF" />
                          <g id="Group_4">
                            <path id="Vector_3" d="M119.739 116.445C121.755 120.819 129.51 122.629 129.429 123.396C129.348 124.163 125.892 123.625 124.107 123.087C127.875 126.086 133.489 128.66 133.236 129.228C132.983 129.796 127.371 127.999 124.633 126.517C127.38 128.642 133.59 131.19 133.235 131.883C132.88 132.576 127.353 131.23 123.724 129.66C126.365 131.112 131.985 133.532 131.532 134.259C131.079 134.987 126.393 133.642 122.878 131.627C124.802 133.061 127.742 135.174 127.297 135.708C126.852 136.243 113.38 132.964 106.42 119.496" fill="#F2C3B1" />
                            <path id="Vector_4" d="M44.084 35.942C30.936 41.989 37.517 88.654 114.717 135.208C118.969 126.773 119.732 127.158 123.984 118.723C75.042 87.087 73.753 61.59 67.061 49.23C59.664 35.57 49.464 33.468 44.084 35.942Z" fill="#FFE57A" />
                          </g>
                          <g id="Group_5">
                            <path id="Vector_5" d="M39.616 133.213C37.265 185.697 32.305 237.43 30.522 293.443C24.222 296.508 12.785 295.014 6.35899 293.317C2.79199 233.129 6.591 171.942 8.514 139.093L39.616 133.213Z" fill="#FAFFFF" />
                          </g>
                          <path id="Vector_6" d="M66.488 301.671C67.035 304.481 67.583 307.292 68.131 310.102C68.309 311.013 68.474 312.012 68.028 312.827C67.324 314.111 65.562 314.237 64.098 314.201C59.817 314.096 55.536 313.992 51.255 313.887C49.393 313.842 47.165 313.576 46.339 311.907C45.679 310.572 46.271 308.985 46.863 307.619C48.067 304.844 49.272 302.069 50.476 299.294C50.851 298.43 51.234 297.552 51.845 296.836C53.215 295.229 55.537 294.706 57.629 294.986C62.101 295.583 65.599 297.11 66.488 301.671Z" fill="#281C4C" />
                          <path id="Vector_7" d="M52.134 290.261C52.018 292.311 52.264 295.98 51.956 297.781C51.452 300.726 54.582 299.956 55.715 299.938C57.343 299.912 58.971 299.887 60.599 299.861C61.789 299.842 63.162 299.732 63.85 298.761C64.305 298.12 64.319 297.275 64.285 296.49C64.154 293.496 63.853 291.605 63.967 286.844" fill="#FAFFFF" />
                          <g id="Group_6">
                            <path id="Vector_8" d="M37.57 130.901C40.343 183.365 44.419 237.58 46.652 293.577C49.733 296.448 64.394 296.436 70.807 294.688C73.89 234.473 69.583 160.832 67.396 128L37.57 130.901Z" fill="#FAFFFF" />
                          </g>
                          <path id="Vector_9" d="M26.915 40.5C8.734 51.86 13.361 110.939 11.177 135.37C10.899 138.478 53.731 140.011 69.571 137.337C72.588 136.827 78.638 8.18 26.915 40.5Z" fill="#FFF230" fill-opacity="0.37" />
                          <path id="Vector_10" d="M46.052 26.932C46.167 28.823 46.269 37.222 44.64 38.34C42.952 39.499 38.262 39.183 36.339 38.48C33.752 37.534 34.893 28.93 35.277 26.939" fill="#F2C3B1" />
                          <g id="Group_7">
                            <path id="Vector_11" d="M33.751 17.02C32.889 15.646 30.89 15.14 29.478 15.938C28.066 16.736 27.468 18.709 28.2 20.157C28.932 21.604 30.876 22.292 32.356 21.627" fill="#F4CDC0" />
                            <path id="Vector_12" d="M50.511 19.383C51.849 18.466 53.884 18.798 54.861 20.093C55.838 21.388 55.6 23.436 54.352 24.472C53.104 25.508 51.047 25.364 49.955 24.165" fill="#F4CDC0" />
                            <path id="Vector_13" d="M31.216 24.413C31.954 27.561 34.364 30.239 37.386 31.397C46.716 34.97 50.307 26.548 51.04 25.013C51.332 24.443 53.665 19.439 54.2 11.717L33.18 10.589C31.215 14.566 30.206 20.086 31.216 24.413Z" fill="#F4CDC0" />
                            <path id="Vector_14" d="M34.344 2.55899C35.841 1.77799 38.421 1.44299 40.103 1.58499C46.82 2.15399 53.618 2.47899 59.95 0.166992C59.721 2.03699 58.695 3.79599 57.181 4.91699C58.19 4.74399 59.2 4.57 60.209 4.397C60.474 7.179 59.02 9.95699 56.831 11.694C54.642 13.431 51.812 14.216 49.02 14.333C46.228 14.451 43.448 13.946 40.722 13.334C39.376 13.032 37.988 12.702 36.633 12.954C34.831 13.289 33.331 14.646 32.493 16.276C32.106 17.029 31.845 17.84 31.678 18.669C31.534 19.382 31.64 20.381 31.366 21.01C28.858 13.921 29.825 4.91599 34.344 2.55899Z" fill="#161516" />
                            <path id="Vector_15" d="M36.59 16.335C37.489 16.412 39.054 16.596 39.33 17.662C39.429 18.046 38.833 18.156 38.793 17.756C38.71 16.932 37.206 16.576 36.582 16.425C36.534 16.413 36.537 16.33 36.59 16.335Z" fill="#161516" />
                            <path id="Vector_16" d="M49.633 19.089C48.804 18.732 47.338 18.155 46.591 18.964C46.322 19.255 46.796 19.634 47.02 19.301C47.482 18.614 48.976 19.012 49.598 19.173C49.646 19.185 49.682 19.11 49.633 19.089Z" fill="#161516" />
                            <path id="Vector_17" d="M40.608 28.293C37.846 27.903 39.244 23.999 39.244 23.999C39.669 24.676 42.726 25.389 43.728 24.896C43.293 26.82 42.509 28.562 40.608 28.293Z" fill="#161516" />
                            <path id="Vector_18" d="M43.4 26.007C43.526 25.652 43.639 25.284 43.727 24.896C42.725 25.39 39.669 24.677 39.243 23.999C39.243 23.999 39.089 24.459 38.985 25.066C40.351 25.915 41.865 26.127 43.4 26.007Z" fill="#FAFFFF" />
                            <g id="Group_8" opacity="0.45">
                              <path id="Vector_19" d="M51.23 24.613C51.034 24.397 50.818 24.199 50.574 24.043C48.794 22.908 46.281 23.017 45.348 25.195C44.866 26.32 45.115 27.719 45.954 28.609C46.488 29.176 47.243 29.513 48.018 29.577C49.788 27.811 50.709 25.706 51.041 25.011C51.076 24.944 51.142 24.808 51.23 24.613Z" fill="#F29E72" />
                              <path id="Vector_20" d="M36.316 21.632C34.945 20.595 32.282 20.621 31.247 22.157C31.111 22.359 31.012 22.58 30.941 22.811C31.006 23.359 31.094 23.896 31.215 24.415C31.317 24.848 31.456 25.27 31.619 25.683C32.156 26.295 32.898 26.728 33.691 26.939C34.335 27.11 35.028 27.148 35.662 26.944C36.706 26.608 37.483 25.599 37.598 24.508C37.713 23.417 37.191 22.294 36.316 21.632Z" fill="#F29E72" />
                            </g>
                            <path id="Vector_21" d="M55.025 11.829C55.193 12.315 55.14 12.847 55.071 13.356C54.51 17.538 52.033 25.455 50.766 25.192C50.356 25.107 51.448 23.191 51.807 22.202C52.41 20.539 52.869 18.825 53.179 17.084C53.338 16.19 53.458 15.29 53.538 14.386C53.616 13.507 53.544 12.586 53.659 11.717C53.796 10.692 54.762 11.069 55.025 11.829Z" fill="#161516" />
                            <path id="Vector_22" d="M37.427 18.503C36.775 18.261 36.207 18.586 35.656 18.924C35.523 19.006 35.53 19.249 35.703 19.281C36.154 19.365 36.604 19.499 37.026 19.681C37.393 19.839 37.646 20.078 38.044 20.18C38.373 20.264 38.642 19.971 38.572 19.651C38.442 19.049 37.988 18.711 37.427 18.503Z" fill="#161516" />
                            <path id="vector_23" d="M49.113 21.983C48.939 21.535 48.631 21.033 48.147 20.875C47.638 20.71 47.074 20.861 46.629 21.125C46.379 21.273 46.503 21.693 46.796 21.673C47.295 21.639 48.012 21.941 48.338 22.339C48.617 22.68 49.306 22.481 49.113 21.983Z" fill="#161516" />
                          </g>
                          <path id="Vector_24" d="M6.07601 71.75C2.59101 92.894 4.01801 131.059 2.78301 152.453C2.62001 155.27 2.56801 158.382 4.36501 160.558C6.08401 162.64 8.981 163.212 11.637 163.694C22.937 165.742 31.907 166.309 37.144 163.874C37.215 156.692 37.236 143.803 37.172 128.861C37.005 89.521 36.254 35.95 34.304 34.831C31.737 33.359 20.55 37.43 18.801 39.279C8.256 50.422 7.38501 63.805 6.07601 71.75Z" fill="#FFE784" />
                          <path id="Vector_25" d="M63.438 49.034C66.955 56.145 68.366 64.209 69.585 72.154C72.829 93.298 75.2 131.06 76.349 152.453C76.5 155.27 76.549 158.382 74.876 160.558C73.276 162.64 70.579 163.212 68.107 163.694C57.588 165.742 49.238 166.309 44.363 163.874C44.122 137.781 43.886 36.406 46.391 34.863C48.781 33.391 53.686 37.228 55.56 38.786C58.844 41.516 61.495 45.105 63.438 49.034Z" fill="#FFE784" />
                          <path id="Vector_26" d="M45.913 34.269C42.154 52.134 42.278 78.064 44.151 96.25C45.071 84.906 46.775 65.86 50.837 54.868C51.599 52.806 52.435 50.556 51.739 48.47C51.36 47.332 50.563 46.391 49.96 45.354C49.357 44.318 48.942 43.036 49.408 41.931C49.812 40.972 50.786 40.367 51.285 39.454C51.85 38.42 52.414 37.737 51.841 36.707C50.221 33.794 45.913 34.269 45.913 34.269Z" fill="#FFFBEC" />
                          <path id="Vector_27" d="M64.087 60.203C64.678 60.982 61.598 64.991 60.733 65.245C59.868 65.498 53.64 62.54 53.863 61.175C54.052 60.008 63.496 59.425 64.087 60.203Z" fill="#FAFFFF" />
                          <g id="Group_9">
                            <path id="Vector_28" d="M58.9087 56.179C58.5297 54.729 57.2357 54.539 56.1657 55.1C55.3157 55.546 54.8337 56.599 55.0527 57.535C55.2717 58.47 56.1697 59.201 57.1297 59.224" fill="#FAFFFF" fill-opacity="0.8" />
                            <path id="Vector_29" d="M57.6547 57.873C57.1407 57.172 57.0447 56.186 57.4147 55.399C57.7847 54.612 58.6037 54.056 59.4727 54.004C60.3407 53.952 61.2207 54.406 61.6817 55.143C61.9907 55.638 62.1007 56.313 61.7677 56.792" fill="#FFF230" fill-opacity="0.7" />
                            <path id="Vector_30" d="M58.6786 57.809C58.8156 56.689 59.6596 55.655 60.7626 55.417C61.8656 55.179 63.1257 55.851 63.4337 56.936C63.7227 57.951 63.1267 59.107 62.1757 59.564C61.2247 60.021 60.0247 59.811 59.2037 59.147" fill="#FAFFFF" fill-opacity="0.8" />
                            <path id="Vector_31" d="M58.1157 57.758C57.4957 57.057 56.2617 57.111 55.6227 57.793C54.9827 58.475 54.9587 59.61 55.4727 60.392C55.9867 61.174 56.9487 61.599 57.8837 61.585C58.3257 61.578 58.7757 61.479 59.1437 61.234C59.5117 60.989 59.7877 60.585 59.8127 60.144" fill="#FFF230" fill-opacity="0.7" />
                            <path id="Vector_32" d="M60.7707 58.615C61.4207 58.235 62.3277 58.472 62.7857 59.07C63.2427 59.668 63.2637 60.535 62.9227 61.206C62.4487 62.138 61.2967 62.668 60.2807 62.422C59.2647 62.176 58.5317 60.822 58.7537 59.471" fill="#FFF230" fill-opacity="0.7" />
                            <path id="Vector_33" d="M60.3146 59.631C61.5106 60.371 61.3847 61.814 60.8097 62.467C60.2347 63.12 59.2927 63.425 58.4447 63.233C57.5967 63.041 56.8776 62.359 56.6406 61.523C56.4816 60.962 56.9197 59.462 58.3527 59.43" fill="#FAFFFF" fill-opacity="0.8" />
                            <path id="Vector_34" d="M59.0567 56.648C58.6917 56.65 58.3167 56.754 58.0477 57C57.7477 57.275 57.6157 57.698 57.6157 58.106C57.6157 58.733 57.9227 59.36 58.4387 59.717C58.9547 60.073 59.6707 60.133 60.2227 59.837C61.9897 58.886 60.7167 56.639 59.0567 56.648Z" fill="#FFF230" fill-opacity="0.9" />
                            <path id="Vector_35" d="M59.1786 57.383C58.9746 57.384 58.7647 57.442 58.6147 57.58C58.4467 57.734 58.3727 57.97 58.3727 58.198C58.3727 58.548 58.5447 58.899 58.8327 59.098C59.1207 59.297 59.5207 59.331 59.8297 59.165C60.8187 58.634 60.1066 57.378 59.1786 57.383Z" fill="#FAFFFF" />
                          </g>
                          <path id="Vector_36" d="M63.462 54.367C64.297 53.818 65.228 53.414 66.2 53.178C65.79 53.552 65.539 54.063 65.264 54.546C64.989 55.028 64.661 55.513 64.167 55.767C63.911 55.899 63.606 55.96 63.331 55.873C62.459 55.594 62.949 54.704 63.462 54.367Z" fill="#E5DFF7" />
                          <path id="Vector_37" d="M51.527 57.579C51.836 57.853 52.145 58.127 52.453 58.401C52.744 58.659 53.041 58.921 53.399 59.073C53.799 59.242 54.336 59.259 54.656 58.921C54.912 58.651 54.997 58.187 54.709 57.916C54.388 57.614 53.7 57.635 53.292 57.599C52.705 57.545 52.115 57.539 51.527 57.579Z" fill="#E5DFF7" />
                          <path id="Vector_38" d="M66.901 58.438C68.281 72.481 72.244 93.162 73.791 105.188" stroke="#2B2A29" stroke-width="1.1094" stroke-miterlimit="10" />
                          <g id="Group_10">
                            <g id="Group_11">
                              <path id="Vector_39" opacity="0.63" d="M90.552 33.537C91.15 30.354 92.256 26.686 95.302 25.589C97.514 24.792 100.045 25.74 101.786 27.32C103.527 28.9 104.656 31.024 105.825 33.065C123.776 64.414 155.459 81.488 191.561 80.204C194.208 86.628 194.101 96.755 188.965 101.434C183.829 106.113 177.55 110.183 175.103 116.686C172.901 122.539 174.175 129.606 170.603 134.738C168.287 138.066 164.395 139.858 161.234 142.397C156.91 145.871 153.978 150.731 150.873 155.327C144.935 164.115 135.817 171.872 124.508 167.37C116.41 164.146 111.128 151.022 107.379 143.865C96.113 122.358 89.506 98.432 88.048 74.201C87.232 60.613 88.037 46.92 90.552 33.537Z" fill="#FAFFFF" />
                              <path id="Vector_40" d="M107.841 37.994C107.196 40.641 107.569 43.53 108.85 45.807C109.846 47.576 111.325 48.934 112.633 50.435C113.941 51.936 115.135 53.715 115.33 55.807C115.584 58.529 114.026 61.247 111.916 62.815C109.806 64.383 107.235 64.97 104.728 65.198C99.751 65.65 94.792 64.823 89.947 63.733C86.224 62.895 82.534 61.901 78.89 60.752C77.7 60.377 76.491 59.973 75.495 59.183C74.499 58.393 73.737 57.14 73.79 55.771C73.836 54.565 74.5 53.453 75.317 52.612C76.134 51.772 77.108 51.144 78.015 50.424C80.675 48.312 82.777 45.35 83.979 42.021C84.773 39.821 85.191 37.452 86.299 35.412C87.407 33.372 89.516 31.671 91.589 32.152" fill="#161516" />
                              <path id="Vector_41" d="M71.304 89.777C70.89 78.474 73.327 69.299 77.455 65.721C83.05 60.871 88.086 69.06 95.06 69.008C100.775 68.965 110.994 60.521 115.59 64.478C120.449 68.662 121.477 71.153 123.025 77.955C125.563 89.111 113.705 98.311 118.355 128.209C119.234 133.857 159.579 258.112 159.579 312.525C152.745 336.146 48.779 332.779 44.858 319.872C43.312 210.964 73.026 137.91 73.637 127.9C74.385 115.648 72.071 110.685 71.304 89.777Z" fill="#FAFFFF" />
                              <path id="Vector_42" d="M88.358 54.734C89.657 56.35 90.667 59.654 89.246 61.164C87.825 62.673 79.617 65.742 76.087 67.582C76.084 71.078 85.826 74.227 91.982 74.441C105.788 74.919 116.61 69.555 116.051 65.238C115.8 63.3 107.723 62.256 105.774 62.121C103.194 61.942 100.736 61.59 99.019 59.656C97.302 57.722 98.01 54.228 98.136 51.645" fill="#F2C3B1" />
                              <path id="Vector_43" d="M101.835 50.867C101.426 51.545 100.951 52.186 100.433 52.794C99.67 53.665 98.801 54.443 97.846 55.093C96.009 56.333 93.891 57.038 91.695 56.85C88.048 56.552 85.062 53.769 83.608 50.331C83.132 49.203 82.818 47.995 82.701 46.786C82.571 45.513 82.625 44.237 82.824 42.976C83.338 39.437 84.993 36.024 86.991 33.009L105.45 39.004C104.768 43.106 103.995 47.314 101.835 50.867Z" fill="#F4CDC0" />
                              <path id="Vector_44" d="M91.095 26.888C91.83 26.023 93.604 23.953 95.325 23.043C96.15 24.24 98.721 23.512 100.518 21C99.9 22.736 101.762 25.128 104.323 25.109C104.322 27.093 105.774 30.204 106.834 31.748" fill="#FAFFFF" />
                              <path id="Vector_45" d="M100.012 48.8C98.599 45.945 94.118 45.968 92.758 48.842C92.148 50.125 92.312 51.743 93.159 52.892C94.007 54.041 95.502 54.667 96.91 54.476C97.119 54.443 97.33 54.399 97.532 54.341C98.238 54.139 98.875 53.732 99.37 53.192C99.656 52.875 99.879 52.511 100.047 52.125C100.507 51.077 100.514 49.825 100.012 48.8ZM86.668 44.696C86.262 43.677 84.996 42.271 83.756 42.326C83.466 42.343 83.173 42.444 82.89 42.618C82.698 43.836 82.549 45.317 82.678 46.546C82.794 47.714 82.976 48.826 83.44 49.916C84.379 49.936 85.487 49.227 86.076 48.502C86.929 47.455 87.149 45.956 86.668 44.696Z" fill="#F2B7B1" />
                              <path id="Vector_46" d="M87.611 40.503C87.193 39.812 86.549 39.38 85.756 39.235C85.404 39.171 85.307 39.742 85.655 39.776C86.283 39.836 87.764 41.334 87.309 40.71C87.448 40.902 87.733 40.704 87.611 40.503Z" fill="#161516" />
                              <path id="Vector_47" d="M97.516 42.94C96.717 42.735 95.927 42.773 95.153 43.056C95.106 43.073 95.12 43.153 95.172 43.145C95.932 43.027 96.651 43.126 97.345 43.458C97.699 43.628 97.913 43.042 97.516 42.94Z" fill="#161516" />
                              <path id="Vector_48" d="M90.941 48.706C89.757 49.006 88.011 48.607 87.124 48.148C87.047 49.861 87.67 51.484 88.94 51.649C90.257 51.824 90.729 49.88 90.941 48.706Z" fill="#161516" />
                              <path id="Vector_49" d="M90.711 49.728C90.812 49.369 90.886 49.011 90.942 48.706C89.758 49.006 88.012 48.607 87.125 48.148C87.11 48.489 87.13 48.823 87.17 49.146C88.207 49.863 89.481 49.924 90.711 49.728Z" fill="#FAFFFF" />
                              <path id="Vector_50" d="M102.165 47.264C103.64 44.217 106.158 45.069 106.386 45.472C106.631 45.904 106.502 46.443 106.367 46.921C106.121 47.792 105.852 48.704 105.209 49.34C104.67 49.873 103.893 50.156 103.137 50.092C102.382 50.029 101.662 49.622 101.219 49.007" fill="#F4CDC0" />
                              <path id="Vector_51" d="M89.518 154.702C159.87 155.416 126.767 66.402 115.59 64.477C120.232 73.209 120.021 87.368 119.148 94.45C119.148 94.45 132.465 145.622 91.426 145.88" fill="#F2C3B1" />
                              <g id="Group_12">
                                <g id="Group_13">
                                  <path id="Vector_52" d="M93.783 121.734C95.095 134.521 95.345 146.048 94.59 158.88" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                  <path id="Vector_53" d="M97.641 121.074C95.649 133.749 95.709 145.726 97.042 158.487" stroke="#E4CAB5" stroke-width="0.832" stroke-miterlimit="10" />
                                  <path id="Vector_54" d="M100.34 116.402C97.528 130.218 96.791 144.455 98.164 158.487" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                  <path id="Vector_55" d="M85.835 119.731C91.18 132.069 93.756 145.597 93.319 159.035" stroke="#FF9494" stroke-miterlimit="10" />
                                  <path id="Vector_56" d="M102.82 116.658C99.577 130.234 98.437 144.31 99.453 158.231" stroke="#FF9494" stroke-miterlimit="10" />
                                  <path id="Vector_57" d="M97.371 123.513C95.8 133.516 95.66 148.457 97.042 158.487" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                  <path id="Vector_58" d="M90.699 125.06C92.723 132.932 94.003 150.361 93.783 158.487" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                  <path id="Vector_59" d="M81.094 118.093C88.036 127.188 93.1 138.923 93.184 150.364" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                  <path id="Vector_60" d="M107.916 115.556C99.832 127.048 97.759 143.439 98.284 157.479" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                </g>
                                <path id="Vector_61" d="M117.253 112.325C118.429 111.648 119.72 111.186 120.893 110.502C120.498 111.418 120.102 112.333 119.707 113.249C119.357 114.059 118.965 114.92 118.209 115.375C117.585 115.751 114.964 116.029 114.658 115.09C114.356 114.167 116.649 112.673 117.253 112.325Z" fill="#FF9494" />
                                <path id="Vector_62" d="M82.057 106.153C80.939 103.783 80.731 101.101 80.54 98.487C83.225 99.748 85.209 102.4 85.661 105.331C85.748 105.896 85.777 106.497 85.535 107.015C84.62 108.97 82.641 107.393 82.057 106.153Z" fill="#FF9494" fill-opacity="0.8" />
                                <path id="Vector_63" d="M74.856 106.434C75.195 107.336 75.537 108.246 76.06 109.055C76.583 109.864 77.307 110.576 78.21 110.912C78.746 111.111 79.865 111.319 80.396 110.966C81.234 110.408 80.43 109.878 79.862 109.375C78.404 108.082 76.697 107.075 74.856 106.434Z" fill="#FF9494" />
                                <path id="Vector_64" d="M104.564 104.938C105.544 102.883 107.082 101.154 108.599 99.456C108.692 101.198 108.785 102.939 108.879 104.68C108.923 105.496 108.965 106.323 108.798 107.123C108.63 107.923 108.225 108.706 107.544 109.158C106.63 109.763 104.987 109.608 104.375 108.615C103.728 107.566 104.082 105.948 104.564 104.938Z" fill="#FF9494" fill-opacity="0.8" />
                                <g id="Group_14">
                                  <path id="Vector_65" d="M89.054 112.228C85.78 111.82 84.334 114.312 84.609 116.958C84.828 119.062 86.589 120.906 88.68 121.222C90.771 121.538 92.999 120.296 93.83 118.352" fill="#E5DFF7" />
                                  <path id="Vector_66" d="M91.494 116.175C89.64 116.654 87.545 116.046 86.237 114.647C84.929 113.248 84.461 111.118 85.064 109.3C85.666 107.482 87.313 106.052 89.198 105.711C90.462 105.482 91.934 105.81 92.642 106.882" fill="#FF9494" />
                                  <path id="Vector_67" d="M92.2 114.028C90.021 112.834 88.595 110.263 89.007 107.814C89.419 105.364 91.822 103.335 94.293 103.59C96.605 103.828 98.483 105.99 98.641 108.309C98.799 110.628 97.39 112.91 95.363 114.047" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_68" d="M91.636 115.14C89.696 115.835 88.799 118.403 89.673 120.269C90.547 122.135 92.848 123.109 94.866 122.696C96.885 122.283 98.539 120.662 99.274 118.737C99.621 117.828 99.786 116.826 99.585 115.874C99.384 114.922 98.783 114.028 97.902 113.616" fill="#FF9494" />
                                  <path id="Vector_69" d="M95.554 110.407C95.307 108.768 96.533 107.104 98.129 106.656C99.725 106.208 101.516 106.875 102.61 108.12C104.129 109.85 104.273 112.638 102.941 114.516C101.608 116.394 98.241 116.787 95.659 115.231" fill="#FF9494" />
                                  <path id="Vector_70" d="M97.262 112.169C99.752 110.327 102.601 111.763 103.467 113.471C104.334 115.179 104.188 117.355 103.103 118.933C102.018 120.511 100.037 121.425 98.132 121.227C96.854 121.094 94.143 118.974 95.249 116.016" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_71" d="M90.133 112.307C89.839 113.054 89.746 113.908 90.03 114.659C90.348 115.498 91.106 116.114 91.939 116.446C93.222 116.957 94.755 116.842 95.905 116.078C97.055 115.314 97.762 113.899 97.606 112.527C97.106 108.135 91.47 108.905 90.133 112.307Z" fill="#FF3333" />
                                  <path id="Vector_72" d="M91.737 112.657C91.573 113.075 91.521 113.552 91.68 113.971C91.858 114.44 92.281 114.784 92.747 114.969C93.464 115.255 94.321 115.19 94.964 114.763C95.607 114.336 96.002 113.545 95.914 112.778C95.633 110.326 92.484 110.756 91.737 112.657Z" fill="#FAFFFF" />
                                </g>
                                <g id="Group_15">
                                  <path id="Vector_73" d="M109.945 111.585C109.745 110.071 108.46 109.716 107.308 110.149C106.392 110.493 105.772 111.497 105.875 112.47C105.978 113.443 106.795 114.295 107.762 114.439" fill="#FF3333" />
                                  <path id="Vector_74" d="M108.464 113.14C108.032 112.366 108.06 111.357 108.533 110.608C109.006 109.859 109.905 109.4 110.79 109.457C111.674 109.514 112.507 110.084 112.88 110.888C113.13 111.427 113.156 112.124 112.759 112.567" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_75" d="M109.508 113.205C109.788 112.09 110.771 111.151 111.916 111.049C113.061 110.947 114.25 111.785 114.426 112.921C114.59 113.984 113.842 115.077 112.822 115.42C111.803 115.762 110.616 115.398 109.87 114.624" fill="#FF3333" />
                                  <path id="Vector_76" d="M108.944 113.082C108.406 112.295 107.151 112.194 106.418 112.803C105.685 113.413 105.518 114.557 105.939 115.412C106.36 116.267 107.279 116.818 108.227 116.922C108.675 116.971 109.142 116.927 109.545 116.726C109.948 116.525 110.277 116.151 110.359 115.708" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_77" d="M111.521 114.282C112.226 113.98 113.114 114.334 113.501 114.996C113.888 115.658 113.799 116.538 113.37 117.173C112.773 118.056 111.542 118.446 110.545 118.069C109.548 117.692 108.978 116.23 109.373 114.893" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_78" d="M110.932 115.253C112.048 116.152 111.739 117.595 111.075 118.183C110.412 118.771 109.421 118.961 108.587 118.659C107.754 118.358 107.113 117.578 106.979 116.702C106.889 116.115 107.521 114.653 108.974 114.802" fill="#4D2D9A" />
                                  <path id="Vector_79" d="M110.036 112.078C109.667 112.034 109.274 112.092 108.971 112.307C108.633 112.548 108.446 112.959 108.394 113.371C108.315 114.005 108.546 114.678 109.023 115.103C109.5 115.528 110.216 115.679 110.812 115.449C112.72 114.711 111.716 112.278 110.036 112.078Z" fill="#FAFFFF" />
                                  <path id="Vector_80" d="M110.067 112.837C109.861 112.812 109.641 112.845 109.472 112.965C109.283 113.1 109.178 113.329 109.15 113.56C109.106 113.914 109.235 114.29 109.502 114.528C109.769 114.766 110.169 114.85 110.502 114.721C111.567 114.308 111.006 112.949 110.067 112.837Z" fill="#FF9AEF" />
                                </g>
                                <g id="Group_16">
                                  <path id="Vector_81" d="M81.476 115.725C80.72 113.673 78.813 113.58 77.338 114.547C76.166 115.316 75.615 116.914 76.066 118.242C76.516 119.569 77.925 120.504 79.323 120.401" fill="#FF3333" />
                                  <path id="Vector_82" d="M79.895 118.364C79.049 117.418 78.77 115.999 79.196 114.803C79.622 113.607 80.734 112.683 81.988 112.485C83.242 112.287 84.585 112.822 85.359 113.827C85.878 114.502 86.133 115.468 85.717 116.211" fill="#E5DFF7" />
                                  <path id="Vector_83" d="M81.374 118.126C81.414 116.48 82.494 114.858 84.062 114.355C85.63 113.852 87.556 114.65 88.158 116.183C88.721 117.617 88.02 119.381 86.702 120.179C85.384 120.977 83.612 120.842 82.326 119.994" fill="#FF3333" />
                                  <path id="Vector_84" d="M80.548 118.132C79.548 117.201 77.763 117.454 76.93 118.537C76.097 119.619 76.223 121.271 77.081 122.334C77.938 123.397 79.396 123.878 80.753 123.725C81.394 123.653 82.034 123.445 82.533 123.037C83.033 122.629 83.376 122.003 83.351 121.359" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_85" d="M84.526 119C85.416 118.356 86.769 118.572 87.518 119.375C88.267 120.178 88.42 121.437 88.019 122.459C87.462 123.88 85.864 124.813 84.353 124.6C82.842 124.386 81.586 122.523 81.716 120.529" fill="#FFE2C8" />
                                  <path id="Vector_86" d="M84.008 120.541C85.85 121.447 85.872 123.561 85.13 124.591C84.388 125.621 83.062 126.197 81.802 126.039C80.543 125.88 79.402 124.992 78.939 123.81C78.629 123.017 79.052 120.776 81.13 120.527" fill="#FFA4BF" />
                                  <path id="Vector_87" d="M81.758 116.385C81.229 116.439 80.697 116.644 80.342 117.04C79.945 117.483 79.812 118.116 79.871 118.708C79.96 119.619 80.495 120.487 81.295 120.932C82.095 121.377 83.143 121.363 83.904 120.853C86.337 119.222 84.169 116.138 81.758 116.385Z" fill="#FF9AE3" />
                                  <path id="Vector_88" d="M82.04 117.436C81.744 117.466 81.447 117.581 81.248 117.802C81.026 118.049 80.952 118.404 80.984 118.734C81.034 119.243 81.333 119.728 81.78 119.977C82.227 120.226 82.813 120.217 83.238 119.933C84.599 119.021 83.387 117.298 82.04 117.436Z" fill="#FAFFFF" />
                                </g>
                                <g id="Group_17">
                                  <path id="Vector_89" d="M109.536 121.351C111.983 121.273 112.755 119.279 112.249 117.372C111.846 115.856 110.343 114.706 108.774 114.716C107.205 114.725 105.715 115.892 105.331 117.413" fill="#FFA4BF" />
                                  <path id="Vector_90" d="M107.292 118.739C108.596 118.174 110.201 118.379 111.321 119.253C112.441 120.128 113.029 121.635 112.797 123.037C112.565 124.439 111.523 125.677 110.181 126.144C109.281 126.457 108.164 126.387 107.522 125.683" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_91" d="M107.022 120.394C108.756 121.018 110.098 122.738 110.079 124.581C110.059 126.424 108.532 128.188 106.691 128.287C104.969 128.379 103.343 127.011 102.96 125.33C102.577 123.648 103.347 121.813 104.701 120.746" fill="#FFA4BF" />
                                  <path id="Vector_92" d="M107.026 119.808C108.368 119.075 108.729 117.089 107.874 115.822C107.018 114.555 105.22 114.106 103.788 114.641C102.356 115.176 101.331 116.555 101.013 118.051C100.863 118.758 100.858 119.51 101.115 120.185C101.372 120.86 101.915 121.445 102.609 121.646" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_93" d="M104.981 123.434C105.351 124.607 104.644 125.968 103.526 126.48C102.408 126.992 101.018 126.71 100.073 125.923C98.76 124.83 98.333 122.803 99.094 121.273C99.854 119.743 102.277 119.067 104.349 119.909" fill="#E5DFF7" />
                                  <path id="Vector_94" d="M103.527 122.34C101.914 123.977 99.661 123.253 98.829 122.101C97.997 120.949 97.852 119.337 98.466 118.056C99.08 116.774 100.426 115.876 101.845 115.802C102.797 115.752 105.028 116.994 104.559 119.289" fill="#FFA4BF" />
                                  <path id="Vector_95" d="M108.736 121.417C108.865 120.836 108.835 120.199 108.54 119.681C108.21 119.103 107.584 118.739 106.935 118.591C105.936 118.364 104.825 118.626 104.07 119.318C103.315 120.011 102.96 121.129 103.233 122.117C104.106 125.279 108.147 124.065 108.736 121.417Z" fill="#FF9AEF" />
                                  <path id="Vector_96" d="M107.52 121.345C107.592 121.02 107.576 120.664 107.41 120.375C107.226 120.052 106.876 119.848 106.513 119.766C105.955 119.639 105.334 119.785 104.912 120.172C104.49 120.559 104.292 121.184 104.444 121.736C104.932 123.503 107.191 122.825 107.52 121.345Z" fill="#FAFFFF" />
                                </g>
                                <g id="Group_18">
                                  <path id="Vector_97" d="M87.309 119.591C87.062 117.724 85.476 117.285 84.055 117.819C82.925 118.243 82.16 119.482 82.287 120.683C82.414 121.883 83.422 122.935 84.616 123.113" fill="#FFA4BF" />
                                  <path id="Vector_98" d="M85.481 121.508C84.949 120.553 84.982 119.308 85.566 118.384C86.15 117.46 87.259 116.894 88.35 116.964C89.441 117.034 90.468 117.737 90.929 118.729C91.238 119.394 91.269 120.254 90.779 120.8" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_99" d="M86.769 121.588C87.114 120.213 88.328 119.054 89.74 118.928C91.152 118.802 92.62 119.836 92.836 121.238C93.038 122.549 92.115 123.899 90.857 124.32C89.599 124.742 88.135 124.293 87.215 123.338" fill="#FFA4BF" />
                                  <path id="Vector_100" d="M86.073 121.437C85.409 120.466 83.862 120.341 82.957 121.093C82.053 121.845 81.847 123.256 82.366 124.312C82.885 125.367 84.019 126.047 85.189 126.175C85.741 126.236 86.318 126.182 86.815 125.934C87.312 125.685 87.719 125.225 87.819 124.678" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_101" d="M89.252 122.918C90.121 122.545 91.217 122.982 91.695 123.799C92.173 124.616 92.063 125.701 91.533 126.485C90.796 127.574 89.278 128.055 88.048 127.591C86.819 127.126 86.116 125.323 86.602 123.672" fill="#FAFFFF" />
                                  <path id="Vector_102" d="M88.526 124.115C89.903 125.224 89.521 127.005 88.703 127.73C87.884 128.455 86.662 128.689 85.633 128.317C84.605 127.945 83.814 126.984 83.649 125.903C83.538 125.178 84.317 123.375 86.11 123.558" fill="#FFA4BF" />
                                  <path id="Vector_103" d="M87.421 120.234C86.966 120.18 86.481 120.251 86.107 120.517C85.69 120.814 85.459 121.321 85.396 121.829C85.299 122.611 85.584 123.441 86.172 123.966C86.76 124.491 87.644 124.677 88.379 124.392C90.731 123.483 89.493 120.482 87.421 120.234Z" fill="#FF9AEF" />
                                  <path id="Vector_104" d="M87.459 121.135C87.205 121.105 86.934 121.145 86.725 121.293C86.492 121.459 86.363 121.742 86.328 122.026C86.274 122.463 86.433 122.927 86.762 123.22C87.091 123.513 87.585 123.617 87.995 123.458C89.309 122.95 88.616 121.273 87.459 121.135Z" fill="#FAFFFF" />
                                </g>
                                <g id="Group_19">
                                  <path id="Vector_105" d="M95.277 122.361C94.913 119.612 92.58 118.966 90.488 119.752C88.824 120.377 87.699 122.201 87.886 123.968C88.073 125.735 89.556 127.282 91.313 127.545" fill="#FF9494" />
                                  <path id="Vector_106" d="M92.587 125.184C91.803 123.779 91.853 121.947 92.712 120.586C93.571 119.225 95.204 118.392 96.81 118.496C98.416 118.599 99.928 119.634 100.606 121.094C101.061 122.073 101.107 123.339 100.386 124.142" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_107" d="M94.483 125.302C94.991 123.277 96.778 121.571 98.857 121.386C100.936 121.2 103.097 122.723 103.415 124.786C103.712 126.716 102.354 128.702 100.502 129.323C98.651 129.944 96.495 129.283 95.14 127.877" fill="#FF9494" />
                                  <path id="Vector_108" d="M93.459 125.079C92.482 123.65 90.204 123.466 88.872 124.573C87.54 125.68 87.238 127.757 88.002 129.311C88.766 130.865 90.436 131.865 92.157 132.054C92.97 132.143 93.819 132.064 94.55 131.698C95.282 131.332 95.88 130.654 96.028 129.85" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_109" d="M98.139 127.259C99.419 126.71 101.032 127.353 101.735 128.555C102.438 129.757 102.277 131.355 101.497 132.509C100.413 134.112 98.177 134.821 96.368 134.137C94.558 133.453 93.523 130.798 94.239 128.369" fill="#FAFFFF" fill-opacity="0.8" />
                                  <path id="Vector_110" d="M97.069 129.022C99.095 130.655 98.534 133.276 97.329 134.343C96.125 135.41 94.325 135.755 92.811 135.208C91.297 134.661 90.134 133.245 89.89 131.654C89.726 130.587 90.874 127.933 93.514 128.203" fill="#FF9494" />
                                  <path id="Vector_111" d="M95.443 123.256C94.773 123.176 94.059 123.281 93.509 123.672C92.895 124.109 92.555 124.856 92.462 125.604C92.319 126.755 92.738 127.978 93.604 128.75C94.47 129.523 95.77 129.797 96.853 129.378C100.316 128.038 98.493 123.62 95.443 123.256Z" fill="#FAFFFF" />
                                  <path id="Vector_112" d="M95.337 124.634C94.963 124.589 94.564 124.648 94.256 124.867C93.913 125.111 93.723 125.528 93.671 125.946C93.591 126.589 93.826 127.273 94.309 127.704C94.793 128.136 95.52 128.289 96.124 128.055C98.06 127.306 97.041 124.838 95.337 124.634Z" fill="#FF3333" />
                                </g>
                              </g>
                              <path id="Vector_113" d="M99.688 153.909C103.167 153.42 102.576 147.049 100.154 144.92C99.347 144.21 95.876 145.305 94.525 145.226C82.087 144.496 64.563 134.068 71.898 100.404C71.179 89.284 69.493 76.937 76.086 67.582C41.277 105.642 58.474 159.701 99.688 153.909Z" fill="#F2C3B1" />
                              <path id="Vector_114" d="M81.39 30.93C80.361 33.593 81.405 36.862 83.701 38.558C85.997 40.255 89.321 40.333 91.777 38.879C92.472 38.468 93.252 37.925 94.011 38.199C94.724 38.457 95 39.292 95.267 40.002C96.103 42.223 97.738 44.133 99.804 45.302C100.26 45.56 100.742 45.787 101.125 46.144C101.508 46.501 101.784 47.026 101.686 47.54C101.64 47.783 101.514 48.005 101.469 48.249C101.424 48.492 101.491 48.789 101.717 48.89C101.966 49.001 102.258 48.804 102.376 48.559C102.495 48.314 102.5 48.031 102.564 47.767C102.753 46.982 103.422 46.424 104.022 45.884C105.522 44.536 106.827 42.937 107.638 41.091C108.449 39.245 108.743 37.137 108.246 35.183C107.7 33.034 106.232 31.194 104.437 29.891C102.643 28.588 100.534 27.78 98.395 27.194C95.699 26.456 92.85 26.048 90.063 26.444C88.972 26.599 88.029 27.005 86.93 27.058C85.81 27.111 84.739 27.443 83.793 28.05C82.725 28.735 81.85 29.739 81.39 30.93Z" fill="#161516" />
                              <path id="Vector_115" d="M85.912 41.356C85.477 41.105 85.013 41.161 84.542 41.26C84.321 41.307 84.38 41.638 84.594 41.644C85.081 41.657 85.423 41.729 85.724 42.148C85.917 42.417 86.009 42.671 86.295 42.853C86.603 43.049 86.93 42.726 86.869 42.412C86.781 41.971 86.29 41.574 85.912 41.356Z" fill="#161516" />
                              <path id="Vector_116" d="M97.963 45.346C97.481 44.927 97.011 44.66 96.361 44.662C95.753 44.664 95.172 44.832 94.643 45.124C94.333 45.295 94.543 45.793 94.884 45.695C95.755 45.447 96.756 45.667 97.583 45.999C97.946 46.145 98.247 45.593 97.963 45.346Z" fill="#161516" />
                            </g>
                            <path id="Vector_117" d="M58.783 69.431C56.591 71.131 54.622 73.308 53.897 75.986C52.954 79.469 54.256 83.157 55.906 86.366C58.12 90.672 61.17 94.785 65.514 96.925C67.071 97.692 68.906 98.184 70.535 97.586C72.455 96.881 73.55 94.899 74.429 93.052C76.361 88.991 78.067 84.823 79.536 80.572C80.493 77.803 81.359 74.924 81.188 72C81.03 69.307 80.065 64.809 76.907 64.336C72.921 63.739 68.542 64.528 64.829 65.998C62.667 66.853 60.621 68.005 58.783 69.431Z" fill="#FAFFFF" />
                            <path id="Vector_118" d="M109.608 69.034C110.73 75.252 110.85 81.647 112.516 87.742C113.112 89.922 113.864 92.112 115.245 93.902C116.626 95.692 118.74 97.041 121.001 97.005C123.129 96.972 125.044 95.76 126.764 94.506C129.991 92.154 133.065 89.415 134.922 85.88C136.78 82.345 137.24 77.878 135.281 74.399C134.184 72.452 132.443 70.963 130.722 69.537C128.129 67.387 125.481 65.268 122.517 63.668C118.999 61.768 108.324 61.922 109.608 69.034Z" fill="#FAFFFF" />
                            <path id="Vector_119" opacity="0.16" d="M77.964 158.413C67.947 209.154 62.547 269.072 63.027 320.79" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_120" opacity="0.16" d="M89.739 157.584C86.996 210.96 87.954 269.857 92.602 323.101" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_121" opacity="0.16" d="M112.079 149.676C126.442 206.607 137.66 261.471 141.583 320.055" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_122" opacity="0.16" d="M102.689 149.668C114.818 209.982 121.43 261.58 121.218 323.101" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_123" opacity="0.16" d="M72.55 66.402C66.325 67.816 57.418 74.237 54.665 81.876" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_124" opacity="0.16" d="M74.797 70.519C67.259 75.222 61.698 80.9 57.853 88.909" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_125" opacity="0.16" d="M74.092 76.598C72 83.394 68.959 89.897 65.085 95.859" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_126" opacity="0.16" d="M114.562 67.816C120.311 75.809 124.071 85.222 125.411 94.976" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_127" opacity="0.16" d="M119.851 67.306C126.519 72.184 131.187 79.717 132.587 87.859" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                            <path id="Vector_128" opacity="0.16" d="M114.3 72.588C115.255 81.134 117.519 88.313 121.64 95.86" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                          </g>
                          <g id="Group_20">
                            <g id="Vector_129">
                              <mask id="path-129-inside-1_1_7" fill="white">
                                <path d="M67.008 107.428C71.154 109.879 78.562 106.958 78.931 107.635C79.3 108.312 76.152 109.835 74.378 110.407C79.183 110.731 85.264 109.655 85.38 110.266C85.495 110.877 79.857 112.59 76.762 112.929C80.23 113.115 86.787 111.679 86.889 112.451C86.991 113.223 81.679 115.259 77.801 116.031C80.799 115.723 86.798 114.518 86.839 115.374C86.881 116.23 82.261 117.789 78.224 118.131C80.622 118.216 84.242 118.282 84.179 118.975C84.117 119.668 71.171 124.632 57.787 117.512" />
                              </mask>
                              <path d="M67.008 107.428C71.154 109.879 78.562 106.958 78.931 107.635C79.3 108.312 76.152 109.835 74.378 110.407C79.183 110.731 85.264 109.655 85.38 110.266C85.495 110.877 79.857 112.59 76.762 112.929C80.23 113.115 86.787 111.679 86.889 112.451C86.991 113.223 81.679 115.259 77.801 116.031C80.799 115.723 86.798 114.518 86.839 115.374C86.881 116.23 82.261 117.789 78.224 118.131C80.622 118.216 84.242 118.282 84.179 118.975C84.117 119.668 71.171 124.632 57.787 117.512" fill="#F2C3B1" />
                              <path d="M74.378 110.407L74.0711 109.455L74.3107 111.405L74.378 110.407ZM85.38 110.266L86.3628 110.081L86.3625 110.079L85.38 110.266ZM76.762 112.929L76.6531 111.935L76.7084 113.928L76.762 112.929ZM77.801 116.031L77.6058 115.05L77.9032 117.026L77.801 116.031ZM86.839 115.374L85.8401 115.422L85.8402 115.423L86.839 115.374ZM78.224 118.131L78.1396 117.135L78.1886 119.13L78.224 118.131ZM84.179 118.975L83.1831 118.884L83.183 118.886L84.179 118.975ZM66.4991 108.289C68.8984 109.707 72.1066 109.527 74.5249 109.187C75.7516 109.015 76.8984 108.78 77.6659 108.647C78.0727 108.577 78.3507 108.539 78.5246 108.531C78.6161 108.528 78.6174 108.536 78.5698 108.525C78.5545 108.522 78.2416 108.46 78.053 108.114L79.809 107.156C79.5743 106.726 79.1603 106.607 78.9939 106.571C78.7952 106.528 78.5955 106.527 78.441 106.533C78.123 106.546 77.7292 106.606 77.3249 106.676C76.47 106.824 75.4365 107.039 74.2468 107.206C71.8324 107.545 69.2636 107.6 67.5169 106.567L66.4991 108.289ZM78.053 108.114C77.8873 107.81 77.9876 107.541 78.0211 107.475C78.0467 107.424 78.0491 107.445 77.9512 107.534C77.7656 107.703 77.4306 107.931 76.971 108.187C76.0669 108.691 74.8968 109.189 74.0711 109.455L74.6849 111.359C75.6332 111.053 76.9241 110.503 77.9452 109.934C78.4483 109.653 78.9419 109.337 79.2983 109.012C79.4713 108.855 79.673 108.641 79.807 108.375C79.949 108.094 80.0669 107.63 79.809 107.156L78.053 108.114ZM74.3107 111.405C76.794 111.572 79.585 111.378 81.7084 111.226C82.7902 111.149 83.6765 111.085 84.3027 111.076C84.6228 111.071 84.8169 111.082 84.9141 111.098C84.9686 111.106 84.9272 111.107 84.8468 111.067C84.7786 111.033 84.4756 110.864 84.3976 110.453L86.3625 110.079C86.2699 109.592 85.9058 109.359 85.7335 109.274C85.5489 109.183 85.3602 109.143 85.228 109.122C84.9517 109.078 84.6141 109.071 84.2728 109.076C83.576 109.086 82.6199 109.156 81.5663 109.231C79.419 109.384 76.767 109.566 74.4453 109.409L74.3107 111.405ZM84.3973 110.451C84.3277 110.081 84.5049 109.833 84.5452 109.781C84.5957 109.716 84.629 109.699 84.5906 109.727C84.521 109.776 84.368 109.863 84.1075 109.98C83.6008 110.207 82.8544 110.476 81.9813 110.744C80.2324 111.28 78.1151 111.775 76.6531 111.935L76.8709 113.923C78.5039 113.744 80.7531 113.213 82.5682 112.655C83.4771 112.376 84.3121 112.08 84.9268 111.804C85.2271 111.67 85.5199 111.52 85.7487 111.357C85.8595 111.279 86.0052 111.162 86.1271 111.005C86.2389 110.86 86.4467 110.527 86.3627 110.081L84.3973 110.451ZM76.7084 113.928C78.5485 114.026 81.1615 113.698 83.2017 113.464C84.2541 113.343 85.1498 113.247 85.7852 113.226C86.1121 113.214 86.3033 113.226 86.391 113.242C86.4399 113.251 86.3841 113.249 86.2908 113.194C86.1828 113.131 85.9451 112.941 85.8976 112.582L87.8804 112.32C87.8201 111.864 87.5193 111.596 87.3023 111.468C87.1001 111.35 86.8896 111.299 86.7427 111.273C86.4387 111.219 86.0738 111.215 85.7174 111.227C84.9864 111.252 84.0069 111.358 82.9738 111.477C80.843 111.721 78.4434 112.018 76.8155 111.93L76.7084 113.928ZM85.8976 112.582C85.8642 112.329 85.9546 112.153 85.9872 112.098C86.0212 112.041 86.0434 112.028 86.0113 112.057C85.9483 112.115 85.8077 112.218 85.5606 112.36C85.0779 112.636 84.354 112.966 83.4742 113.309C81.7204 113.993 79.4793 114.677 77.6058 115.05L77.9962 117.012C80.0007 116.613 82.3546 115.893 84.2008 115.173C85.121 114.814 85.9483 114.442 86.5541 114.095C86.8513 113.925 87.1393 113.737 87.3624 113.532C87.4734 113.43 87.603 113.294 87.7055 113.122C87.8066 112.952 87.9266 112.67 87.8804 112.32L85.8976 112.582ZM77.9032 117.026C79.3881 116.873 81.7691 116.479 83.5518 116.258C84.4882 116.142 85.2808 116.07 85.8269 116.072C86.1117 116.073 86.2523 116.096 86.2937 116.107C86.3159 116.113 86.2365 116.097 86.1331 116.013C86.004 115.908 85.8537 115.705 85.8401 115.422L87.8378 115.326C87.8191 114.936 87.6171 114.642 87.3942 114.461C87.197 114.301 86.9815 114.223 86.8299 114.18C86.5237 114.095 86.1656 114.074 85.8353 114.072C85.1513 114.069 84.2491 114.157 83.306 114.274C81.3294 114.518 79.2119 114.881 77.6988 115.036L77.9032 117.026ZM85.8402 115.423C85.8233 115.08 86.0305 114.929 85.9532 115.003C85.9122 115.043 85.8038 115.127 85.5934 115.243C85.1815 115.472 84.5487 115.734 83.7511 115.995C82.1636 116.512 80.0751 116.971 78.1396 117.135L78.3084 119.127C80.4099 118.949 82.6499 118.457 84.3712 117.896C85.2279 117.617 85.9945 117.308 86.5633 116.992C86.8431 116.837 87.1204 116.656 87.3397 116.445C87.5228 116.269 87.8651 115.882 87.8378 115.325L85.8402 115.423ZM78.1886 119.13C79.4086 119.174 80.871 119.21 82.0298 119.321C82.6166 119.376 83.0624 119.446 83.338 119.524C83.4847 119.566 83.5045 119.589 83.4664 119.563C83.4293 119.537 83.1441 119.314 83.1831 118.884L85.1749 119.066C85.2296 118.463 84.8451 118.086 84.6127 117.924C84.3793 117.761 84.1079 117.664 83.8866 117.601C83.4263 117.47 82.829 117.387 82.219 117.329C80.984 117.212 79.4374 117.173 78.2594 117.132L78.1886 119.13ZM83.183 118.886C83.2109 118.573 83.3822 118.394 83.3947 118.381C83.4342 118.337 83.4578 118.323 83.4372 118.338C83.3999 118.365 83.3067 118.422 83.138 118.504C82.8087 118.665 82.2945 118.871 81.6104 119.086C80.2473 119.516 78.2761 119.965 75.8901 120.177C71.1191 120.602 64.7402 120.078 58.2567 116.629L57.3173 118.395C64.2178 122.066 71.0039 122.62 76.0674 122.169C78.5986 121.944 80.712 121.467 82.212 120.994C82.9595 120.758 83.5713 120.518 84.0142 120.302C84.2316 120.196 84.436 120.083 84.6017 119.964C84.6825 119.906 84.784 119.826 84.8769 119.723C84.9428 119.651 85.1432 119.42 85.175 119.064L83.183 118.886Z" fill="#F2C3B1" mask="url(#path-129-inside-1_1_7)" />
                            </g>
                            <path id="Vector_130" d="M28.4986 54.8523L28.4986 54.8523C21.397 70.3152 19.6084 84.9696 26.1164 94.5495C32.5708 104.05 46.9787 108.283 71.5405 103.658C69.1568 109.93 68.7102 115.888 69.527 122.355C42.5773 126.991 21.6788 122.043 10.458 109.541C-0.806015 96.9902 -2.48981 76.6237 9.57807 50.1132C13.9254 40.5635 20.6148 37.8851 25.0981 39.3606C27.348 40.101 29.129 41.8976 29.8924 44.5344C30.6579 47.178 30.4064 50.6992 28.4986 54.8523Z" fill="#FFE57A" stroke="#FFE784" />
                            <path id="Vector_131" d="M23.773 69.619C23.175 72.85 22.821 76.109 22.884 79.399C23.038 87.294 25.984 95.535 32.347 100.21C38.35 104.62 54.777 106.183 72.337 102.996" stroke="#FFE784" stroke-miterlimit="10" />
                          </g>
                          <path id="Vector_132" d="M34.77 34.269C38.529 52.134 38.868 77.458 36.995 95.644C36.075 84.3 33.908 65.86 29.846 54.867C29.084 52.805 28.248 50.555 28.944 48.469C29.323 47.331 30.12 46.39 30.723 45.353C31.326 44.317 31.741 43.035 31.275 41.93C30.871 40.971 29.897 40.366 29.398 39.453C28.833 38.419 28.269 37.736 28.842 36.706C30.462 33.794 34.77 34.269 34.77 34.269Z" fill="#FFFBEC" />
                          <path id="Vector_133" d="M39.978 36.871C39.232 38.219 38.73 39.567 38.707 40.915C37.6 40.508 32.768 38.569 33.133 34.858C33.182 34.359 33.825 33.665 34.389 33.828C34.931 33.985 35.567 34.766 36.054 35.091C37.258 35.895 38.588 36.5 39.978 36.871Z" fill="#FAFFFF" />
                          <path id="Vector_134" d="M39.978 36.886C40.914 38.031 41.525 39.287 41.367 40.803C42.576 40.408 47.855 38.53 47.457 34.936C47.403 34.453 46.701 33.78 46.085 33.939C45.492 34.091 44.799 34.847 44.266 35.162C42.949 35.94 41.496 36.527 39.978 36.886Z" fill="#FAFFFF" />
                          <g id="Group_21">
                            <path id="Vector_135" d="M39.51 37.18C39.165 36.665 38.749 36.198 38.277 35.796C38.028 35.584 37.757 35.387 37.447 35.282C37.137 35.178 36.779 35.176 36.496 35.341C36.263 35.477 36.101 35.713 36.007 35.966C35.914 36.219 35.883 36.491 35.863 36.759C35.825 37.278 35.824 37.801 35.86 38.32C35.895 38.813 35.98 39.341 36.327 39.692C36.725 40.095 37.376 40.151 37.915 39.979C38.454 39.806 38.909 39.444 39.35 39.089" fill="#FFF230" fill-opacity="0.65" />
                            <path id="Vector_136" d="M40.888 37.18C41.233 36.665 41.649 36.198 42.121 35.796C42.37 35.584 42.641 35.387 42.951 35.282C43.261 35.178 43.619 35.176 43.902 35.341C44.135 35.477 44.297 35.713 44.391 35.966C44.484 36.219 44.515 36.491 44.535 36.759C44.573 37.278 44.574 37.801 44.538 38.32C44.504 38.813 44.418 39.341 44.071 39.692C43.673 40.095 43.022 40.151 42.483 39.979C41.944 39.806 41.489 39.444 41.048 39.089" fill="#FFF230" fill-opacity="0.65" />
                            <path id="Vector_137" d="M41.571 38.008C41.964 37.814 42.361 37.629 42.762 37.452C42.935 37.376 42.812 37.084 42.633 37.146C42.218 37.289 41.807 37.44 41.399 37.6C41.369 37.612 41.364 37.636 41.343 37.653C41.308 37.515 41.267 37.379 41.179 37.267C41.009 37.049 40.735 36.93 40.461 36.889C40.026 36.825 39.407 36.778 39.151 37.216C39.067 37.36 39.031 37.523 39.005 37.689C38.489 37.491 37.973 37.293 37.457 37.095C37.323 37.044 37.264 37.26 37.398 37.311C37.922 37.512 38.447 37.713 38.971 37.914L38.945 38.139C38.509 38.219 38.073 38.3 37.636 38.38C37.448 38.415 37.494 38.713 37.681 38.709C38.081 38.702 38.481 38.695 38.881 38.687L38.858 38.884C38.832 39.104 38.813 39.348 38.945 39.525C39.082 39.709 39.333 39.757 39.56 39.791C39.834 39.832 40.112 39.873 40.388 39.847C40.664 39.821 40.943 39.72 41.131 39.517C41.328 39.304 41.393 39.019 41.414 38.723C41.769 38.775 42.127 38.816 42.479 38.895C42.654 38.935 42.791 38.667 42.608 38.589C42.218 38.422 41.815 38.296 41.415 38.163C41.41 38.115 41.405 38.067 41.402 38.019C41.451 38.035 41.507 38.04 41.571 38.008Z" fill="#FFE57A" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div id="sub-tag-wed">
              {/* <p>Be careful, violence tends to escalate</p> */}
              <p>Your Story Told Like None Other.</p>
            </div>
            <button id="now-booking-wed">
              Our Portfolio
            </button>
          </div>
          <div id="section-3" className="full-screen panels">

          </div>
          <div id="section-4" className="full-screen panels">

          </div>
          <div id="akaar-presents">
            <h4>AKAAR Presents</h4>
          </div>
          <div id="scroll-assist">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <button id="lang-btn">
            EN
          </button>
        </div>
        <div id="section-5">
          <div style={{ width: "100%", height: "90px", textAlign: "center" }}>
            <h1>Our Portfolio</h1>
          </div>
          <div id="portfolio-grid">
            <div className="product">
              <button className="fullscreen-btn" onClick={() => handleClick("1-video")}></button>
              <iframe id="1-video" width="560" height="315" src="https://www.youtube.com/embed/FJGSqtMzmlo?si=48HwWIVNCRaeELEr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false}>

              </iframe>
            </div>
            <div className="product"></div>
            <div className="product"></div>
            <div className="product"></div>
            <div className="product"></div>
            <div className="product"></div>
          </div>
        </div>
      </div>
    </>
  );
}
