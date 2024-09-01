"use client"
import Image from "next/image";
import "./styles.css"
import Head from 'next/head';
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Home() {
    const lenis: any = useLenis(({ scroll }) => {
    })
    const [pageloaded, setPageLoaded] = useState(false);
    const [first, setFirst] = useState(0)
    const [screenWidth, setScreenWidth] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);
    const ctxRef: any = useRef(null);

    // useEffect for page preloader
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
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);

    useEffect(() => {

        if (pageloaded) {

            let preloader: any = document.getElementById('loading');
            let content: any = document.getElementById('content');

            preloader.style.display = 'none';
            content.style = "display: block;"
            gsap.fromTo(".slider-container", { opacity: 0 }, { duration: 1, opacity: 1, ease: "power4.inOut" })

            ctxRef.current = gsap.context(() => {
                gsap.registerPlugin(ScrollTrigger);

                if (screenWidth > 1000) {

                    //section 1
                    const mytimeline3 = gsap.timeline({ paused: true })
                    mytimeline3.fromTo([".bench-container", ".birds", ".clouds"],
                        {
                            x: -50, opacity: 1,
                        },
                        {
                            x: 0, opacity: 1,
                            duration: 2,

                        });

                    if (first === 0) {
                        mytimeline3.play()
                        setFirst(1)
                    }

                    let tl = gsap.timeline({})

                    tl.to("#main-heading", {
                        opacity: 1, duration: 3, ease: "expo.inOut",
                    }, "<")
                    tl.fromTo("#sub-script", { y: "0px" }, {
                        opacity: 1, duration: 1.5, y: "0px", ease: "power3.out"
                    }, "-=1.5")
                    tl.fromTo("#scroll-assist", {
                        y: 100, opacity: 0, scale: 1.2
                    }, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out" })

                    // horizontal scroll
                    let sections: any = gsap.utils.toArray(".panels");
                    let scrolltween = gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".slider-container",
                            pin: true,
                            scrub: 1,
                            snap: {
                                snapTo: 1 / (sections.length - 1),
                            },
                            start: "top top",
                            end: () => screenWidth * 4
                        }
                    });

                    ScrollTrigger.create({
                        trigger: "#headings",
                        containerAnimation: scrolltween,
                        scrub: 1,
                        // markers: true,
                        start: "top top",
                        end: "left -=1500",
                        onEnter: () => { mytimeline3.reverse() },
                        onLeaveBack: () => { mytimeline3.play() },
                        once: false,
                    });

                    const scrollassist0 = gsap.timeline({
                        scrollTrigger: {
                            // markers:true,
                            trigger: "#section-1",
                            containerAnimation: scrolltween,
                            start: "left 50%",
                            toggleActions: "play none none reverse",
                        }
                    }
                    )
                    scrollassist0.to(
                        "#lang-btn",
                        { backgroundColor: "#EAEDFE", color: "#2E4BF5" }
                    ).to(
                        "#scroll-assist",
                        { backgroundColor: "#2E4BF5", color: "#EAEDFE" }
                    );

                    //section 2
                    const scrollassist1 = gsap.timeline({
                        scrollTrigger: {
                            // markers:true,
                            trigger: "#section-2",
                            containerAnimation: scrolltween,
                            start: "left 50%",
                            toggleActions: "play none none reverse",
                        }
                    }
                    )
                    scrollassist1.to(
                        "#lang-btn",
                        { backgroundColor: "#FFF5D8", color: "#FFC325" }
                    ).to(
                        "#scroll-assist",
                        { backgroundColor: "#FFC325", color: "#FFF5D8" }
                    );

                    lamps(scrolltween, "#section-2 #cealling-lamp", ["#section-2 #cealling-lamp #Group_2", "#section-2 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-3 #cealling-lamp", ["#section-3 #cealling-lamp #Group_2", "#section-3 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-4 #cealling-lamp", ["#section-4 #cealling-lamp #Group_2", "#section-4 #cealling-lamp #Group_12"])

                    // txtanimation(scrolltween, "#section-2", "#wed-main-illus", "#akaar-wed", "#akaar-wed-shadow", "#akaar-wed-shadow-1", "#sub-tag-wed", "#now-booking-wed")

                    gsap.to(["#wed-clock", "#floor-lamp,#sofa"], {
                        x: "-20vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-2",
                            containerAnimation: scrolltween,
                            start: "+=20% right",
                            end: "left -=1000",
                            scrub: 1,
                            // id: "1",
                        }
                    })

                    gsap.to(["#mirror", "#windows"], {
                        x: "-20vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-3",
                            containerAnimation: scrolltween,
                            start: "+=20% right",
                            end: "left -=1000",
                            scrub: 1,
                            // id: "1",
                        }
                    })

                    //section 3
                    const scrollassist2 = gsap.timeline({
                        scrollTrigger: {
                            // markers:true,
                            trigger: "#section-3",
                            containerAnimation: scrolltween,
                            start: "left 50%",
                            toggleActions: "play none none reverse",
                        }
                    }
                    )

                    scrollassist2.to(
                        "#lang-btn",
                        { backgroundColor: "#FFC7C7", color: "#FF2424" }
                    ).to(
                        "#scroll-assist",
                        { backgroundColor: "#FF2424", color: "#FFC7C7" }
                    );

                    // txtanimation(scrolltween, "#section-3", "#fashion-illus", "#akaar-fashion", "#akaar-fashion-shadow", "#akaar-fashion-shadow-1", "#sub-tag-fashion", "#now-booking-fashion")

                    //section 4
                    const scrollassist3 = gsap.timeline({
                        scrollTrigger: {
                            // markers:true,
                            trigger: "#section-4",
                            containerAnimation: scrolltween,
                            start: "left 50%",
                            toggleActions: "play none none reverse",
                        }
                    }
                    )

                    scrollassist3.to(
                        "#lang-btn",
                        { backgroundColor: "#DFC3EC", color: "#7800B0" }
                    ).to(
                        "#scroll-assist",
                        { backgroundColor: "#7800B0", color: "#DFC3EC" }
                    );

                    // section 5
                    gsap.to([".p1", ".p2", ".p3"], {
                        y: "-=2100",
                        scrollTrigger: {
                            // markers:true,
                            trigger: "#section-5",
                            start: "center center",
                            end: "+=2000",
                            pin: true,
                            scrub: 1
                        }
                    })

                    //section 7

                    gsap.to("#section-7 div", {
                        xPercent: "-600",
                        scrollTrigger: {
                            // markers:true,
                            trigger: "#section-7",
                            start: "top top",
                            end: "+=3000",
                            pin: true,
                            scrub: 1
                        }
                    })

                    //section 6
                    const letdive = gsap.timeline({
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-6",
                            start: "top top",
                            end: "bottom+=4000 bottom",
                            pin: true,
                            scrub: 0.8,
                        },
                        defaults: {
                            ease: "expo.in"     // Apply easing to all tweens in the timeline
                        }
                    });
                    letdive.fromTo("#section-6 .s2", { scale: 1, }, {
                        scale: window.innerWidth / 14,
                    });
                    letdive.to("#section-6 .s1", {
                        scale: 10,
                        x: "-=750", y: "-=750",
                    }, "<").to("#section-6 .s3", {
                        scale: 10,
                        x: "+=750", y: "+=750",
                    }, "<");


                } else {

                    //section 1
                    const scrollassist0 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#section-1",
                            // markers: true,
                            start: "top top",
                            end: "+=10 top",
                            scrub: 1,
                        }
                    }
                    )
                    scrollassist0.to(
                        "#scroll-assist, #lang-btn",
                        { backgroundColor: "#EAEDFE", color: "#2E4BF5" }
                    ).to("#scroll-assist :nth-child(1)", {
                        backgroundColor: "#2E4BF5"
                    }, "<");

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
                    const scrollassist1 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#section-2",
                            // markers: true,
                            start: () => `-=20 top`,
                            end: () => `+=10 top`,
                            scrub: 1,
                        }
                    }
                    )
                    scrollassist1.to(
                        "#scroll-assist, #lang-btn",
                        { backgroundColor: "#FFF5D8", color: "#FFC325" }
                    ).to("#scroll-assist :nth-child(1)", {
                        backgroundColor: "#FFC325"
                    }, "<");

                    const mytween1 = gsap.to("#akaar-presents", { opacity: 1, duration: 0.5, paused: true, })

                    ScrollTrigger.create({
                        trigger: "#section-2",
                        scrub: 1,
                        // markers: true,
                        start: () => `top top`,
                        end: () => `+=500 top`,
                        onEnter: () => {
                            mytween1.play();
                        },
                        onLeaveBack: () => {
                            mytween1.reverse();
                        },
                    })

                    const tl2 = gsap.timeline({
                        paused: true
                    });

                    tl2.to("#akaar-wed-shadow",
                        {
                            y: "+=10", duration: 0.5, ease: "power1.easeInOut"
                        }).to("#akaar-wed-shadow-1", {
                            y: "+=25", duration: 0.5, ease: "power1.easeInOut"
                        }).fromTo("#now-booking-wed",
                            {
                                x: 200,
                                scale: 0
                            },
                            {
                                x: 0,
                                scale: 1,
                                duration: 1.5,
                                ease: "elastic.out"
                            }, "<").fromTo("#sub-tag-wed",
                                {
                                    y: -10,
                                    opacity: 0
                                },
                                {
                                    y: 0,
                                    opacity: 1,
                                    duration: 0.25,
                                }, "-=0.5");

                    ScrollTrigger.create({
                        trigger: "#section-2",
                        scrub: 1,
                        // markers: true,
                        start: () => `-=30 top`,
                        end: () => `+=500 top`,
                        onEnter: () => tl2.play(),
                        onLeaveBack: () => tl2.reverse(),
                    })

                    //section 3
                    const scrollassist2 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#section-3",
                            // markers: true,
                            start: () => `-=20 top`,
                            end: () => `+=10 top`,
                            scrub: 1,
                        }
                    }
                    )
                    scrollassist2.to(
                        "#scroll-assist, #lang-btn",
                        { backgroundColor: "#FFC7C7", color: "#FF2424" }
                    ).to("#scroll-assist :nth-child(1)", {
                        backgroundColor: "#FF2424"
                    }, "<");

                    const tl3 = gsap.timeline({
                        paused: true
                    });

                    tl3.to("#akaar-fashion-shadow",
                        {
                            y: "+=10", duration: 0.5, ease: "power1.easeInOut"
                        }).to("#akaar-fashion-shadow-1", {
                            y: "+=25", duration: 0.5, ease: "power1.easeInOut"
                        }).fromTo("#now-booking-fashion",
                            {
                                x: 200,
                                scale: 0
                            },
                            {
                                x: 0,
                                scale: 1,
                                duration: 1.5,
                                ease: "elastic.out"
                            }, "<").fromTo("#sub-tag-fashion",
                                {
                                    y: -10,
                                    opacity: 0
                                },
                                {
                                    y: 0,
                                    opacity: 1,
                                    duration: 0.25,
                                }, "-=0.5");

                    ScrollTrigger.create({
                        trigger: "#section-3",
                        scrub: 1,
                        // markers: true,
                        start: () => `-=30 top`,
                        end: () => `+=500 top`,
                        onEnter: () => tl3.play(),
                        onLeaveBack: () => tl3.reverse(),
                    })

                    //section 4
                    const scrollassist3 = gsap.timeline({
                        scrollTrigger: {
                            trigger: "#section-4",
                            // markers: true,
                            start: () => `-=20 top`,
                            end: () => `+=10 top`,
                            scrub: 1,
                        }
                    }
                    )
                    scrollassist3.to(
                        "#scroll-assist, #lang-btn",
                        { backgroundColor: "#DFC3EC", color: "#7800B0" }
                    ).to("#scroll-assist :nth-child(1)", {
                        backgroundColor: "#7800B0"
                    }, "<");

                    const tl445 = gsap.timeline({
                        paused: true
                    });

                    tl445.to("#akaar-commercials-shadow",
                        {
                            y: "+=10", duration: 0.5, ease: "power1.easeInOut"
                        }).to("#akaar-commercials-shadow-1", {
                            y: "+=25", duration: 0.5, ease: "power1.easeInOut"
                        }).fromTo("#now-booking-commercials",
                            {
                                x: 200,
                                scale: 0
                            },
                            {
                                x: 0,
                                scale: 1,
                                duration: 1.5,
                                ease: "elastic.out"
                            }, "<").fromTo("#sub-tag-commercials",
                                {
                                    y: -10,
                                    opacity: 0
                                },
                                {
                                    y: 0,
                                    opacity: 1,
                                    duration: 0.25,
                                }, "-=0.5");

                    ScrollTrigger.create({
                        trigger: "#section-4",
                        scrub: 1,
                        // markers: true,
                        start: () => `top top`,
                        end: () => `+=300 top`,
                        onEnterBack: () => { mytween1.play(); },
                        onLeave: () => { mytween1.reverse(); },
                        once: false,
                    });

                    ScrollTrigger.create({
                        trigger: "#section-4",
                        scrub: 1,
                        // markers: true,
                        start: () => `-=20 top`,
                        end: () => `+=500 top`,
                        onEnter: () => { tl445.play(); },
                        onLeaveBack: () => { tl445.reverse() },
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

    const gotowedportfolio = (id) => {
        lenis.scrollTo("#" + id, {
            duration: 9,
            easing: (t) => t
        })
    }

    const lamps = (scrolltween, trigger, targets) => {
        const lamps = gsap.timeline({
            // paused: true,
            scrollTrigger: {
                // markers: true,
                trigger: trigger,
                containerAnimation: scrolltween,
                start: "left right",
                toggleActions: "play none reverse reverse",
                // scrub: 1,
                // id: "1",
            }
        });

        lamps.to(targets, {
            rotation: 16, duration: 2, ease: "sine.inOut"
        }).to(targets, {
            rotation: -4, duration: 1.8, ease: "sine.inOut"
        }).to(targets, {
            rotation: 0, duration: 1.5, ease: "sine.inOut"
        })
    }

    return (
        <>
            {/* AKAAR CREATIVE AGENCY */}
            {/* AKAAR VIDEOGRAPHY & PHOTOGRAPHY */}
            {/* AKAAR  WEDDINGS*/}
            {/* AKAAR  CONTACT*/}
            <ReactLenis root options={{
                lerp: 0.05,
                // smoothTouch: true
            }}>
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
                            <div className="cnt-for-h">
                                <div id="headings">
                                    <h1 id="main-heading" style={{ textAlign: "center" }}>AKAAR<sup>Creative Agency</sup></h1>
                                    <p id="sub-script"><span>AKAAR</span> - is a dynamic force in the world of visual storytelling, specializing in creative videography, photography, illustration and animation that captivates and inspires. We blend artistic vision with strategic marketing to craft compelling content that resonates with your audience.</p>
                                </div>

                            </div>
                            <div className="clouds">
                                <svg viewBox="0 0 411 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group">
                                        <g id="Group_2">
                                            <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M6.151 60.878H16.671C16.55 60.118 16.485 59.339 16.485 58.544C16.485 50.462 23.038 43.908 31.121 43.908C34.107 43.908 36.884 44.804 39.199 46.339C40.231 42.529 43.712 39.728 47.847 39.728C49.19 39.728 50.463 40.024 51.607 40.552C54.445 29.1 64.79 20.611 77.12 20.611C86.17 20.611 94.151 25.185 98.879 32.147C101.526 29.279 105.317 27.481 109.527 27.481C113.703 27.481 117.466 29.249 120.109 32.076C122.334 13.998 137.743 0 156.423 0C176.631 0 193.013 16.383 193.013 36.591C193.013 37.386 192.988 38.175 192.937 38.958L193.049 38.939C193.528 32.696 198.744 27.78 205.11 27.78C211.792 27.78 217.208 33.196 217.208 39.877C217.208 40.675 217.129 41.455 216.982 42.21C217.757 41.956 218.586 41.817 219.448 41.817C223.82 41.817 227.364 45.361 227.364 49.733C227.364 50.511 227.251 51.263 227.042 51.973H244.089C243.896 51.31 243.791 50.608 243.791 49.882C243.791 46.483 246.063 43.613 249.173 42.71C249.332 37.241 253.816 32.857 259.323 32.857C261.611 32.857 263.722 33.614 265.421 34.891C268.568 30.922 273.43 28.376 278.888 28.376C279.495 28.376 280.094 28.407 280.685 28.469C285.12 14.724 298.016 4.77899 313.238 4.77899C328.427 4.77899 341.301 14.681 345.761 28.382C346.405 28.28 347.065 28.227 347.737 28.227C353.37 28.227 358.134 31.938 359.72 37.049C360.903 36.75 362.143 36.591 363.418 36.591C370.514 36.591 376.463 41.491 378.071 48.092H378.501V48.45C379.459 48.216 380.459 48.092 381.488 48.092C388.417 48.092 394.033 53.708 394.033 60.636C394.033 60.718 394.032 60.798 394.03 60.879H404.367C407.751 60.879 410.518 63.647 410.518 67.03C410.518 70.413 407.751 73.181 404.367 73.181H381.488H378.501H347.272H31.121H6.151C2.768 73.181 0 70.412 0 67.03C0 63.645 2.768 60.878 6.151 60.878Z" fill="#D7E5F5" fillOpacity="0.6" />
                                            <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M360.517 9.25293H360.683C364.066 9.25293 366.833 12.0209 366.833 15.4039C366.833 18.7869 364.066 21.5549 360.683 21.5549H360.517C357.133 21.5549 354.366 18.7859 354.366 15.4039C354.366 12.0199 357.133 9.25293 360.517 9.25293Z" fill="#D7E5F5" fillOpacity="0.6" />
                                            <path id="Vector_3" fillRule="evenodd" clipRule="evenodd" d="M372.172 24.427H372.287C374.638 24.427 376.56 26.35 376.56 28.7C376.56 31.05 374.637 32.973 372.287 32.973H372.172C369.822 32.973 367.899 31.049 367.899 28.7C367.899 26.35 369.823 24.427 372.172 24.427Z" fill="#D7E5F5" fillOpacity="0.6" />
                                            <path id="Vector_4" fillRule="evenodd" clipRule="evenodd" d="M273.208 12.822H273.323C275.674 12.822 277.596 14.745 277.596 17.095C277.596 19.445 275.673 21.368 273.323 21.368H273.208C270.857 21.368 268.935 19.444 268.935 17.095C268.934 14.745 270.857 12.822 273.208 12.822Z" fill="#D7E5F5" fillOpacity="0.6" />
                                        </g>
                                        <path id="Vector_5" fillRule="evenodd" clipRule="evenodd" d="M247.397 59.389C244.652 60.186 242.645 62.718 242.645 65.72C242.645 66.361 242.738 66.98 242.908 67.566H227.859C228.044 66.939 228.143 66.275 228.143 65.587C228.143 61.728 225.015 58.599 221.155 58.599C220.395 58.599 219.663 58.721 218.978 58.946C219.108 58.28 219.177 57.592 219.177 56.887C219.177 50.988 214.396 46.207 208.497 46.207C202.877 46.207 198.271 50.548 197.849 56.059L197.75 56.076C197.794 55.385 197.816 54.688 197.816 53.986C197.816 47.935 196.152 42.273 193.257 37.431C193.156 37.923 193.085 38.426 193.046 38.939L192.934 38.958C192.975 38.316 192.999 37.671 193.007 37.021C187.316 27.816 177.13 21.683 165.513 21.683C149.023 21.683 135.42 34.04 133.456 50C131.122 47.505 127.8 45.944 124.114 45.944C120.396 45.944 117.05 47.53 114.713 50.063C110.539 43.916 103.493 39.878 95.503 39.878C84.619 39.878 75.485 47.372 72.981 57.482C71.971 57.015 70.847 56.754 69.663 56.754C66.012 56.754 62.938 59.228 62.027 62.591C59.983 61.236 57.532 60.445 54.896 60.445C47.822 60.445 42.077 66.129 41.976 73.178H166.975C168.494 73.178 169.739 74.421 169.739 75.943C169.739 77.463 165.495 78.707 166.975 78.707H159.316C156.42 78.707 154.049 81.077 154.049 83.974C154.049 86.871 156.419 89.24 159.316 89.24H349.486C352.383 89.24 354.752 86.871 354.752 83.974C354.752 81.078 352.383 78.707 349.486 78.707H338.711C337.19 78.707 335.946 77.463 335.946 75.943C335.946 74.422 340.537 73.178 338.711 73.178H347.27H375.095C374.14 68.032 369.628 64.136 364.206 64.136C363.297 64.136 362.414 64.246 361.568 64.452V64.136H361.189C359.769 58.309 354.516 53.983 348.252 53.983C347.126 53.983 346.031 54.124 344.986 54.387C343.587 49.875 339.38 46.599 334.408 46.599C333.814 46.599 333.231 46.646 332.664 46.736C328.725 34.642 317.36 25.9 303.951 25.9C290.513 25.9 279.129 34.679 275.214 46.814C274.693 46.759 274.163 46.732 273.627 46.732C268.809 46.732 264.516 48.979 261.738 52.483C260.239 51.356 258.375 50.688 256.355 50.688C251.495 50.69 247.538 54.56 247.397 59.389ZM142.298 78.709C145.194 78.709 147.564 81.079 147.564 83.976C147.564 86.873 145.194 89.242 142.298 89.242H142.155C139.259 89.242 136.889 86.873 136.889 83.976C136.889 81.08 139.258 78.709 142.155 78.709H142.298Z" fill="#D7E5F5" fillOpacity="0.6" />
                                    </g>
                                </svg>

                            </div>
                            <div className="birds">
                                <svg viewBox="0 0 862 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="birds">
                                        <path id="XMLID_57_" d="M416.372 78.368C417.307 78.3554 418.104 77.7023 418.297 76.7833C421.826 60.47 434.56 46.9193 451.936 43.226C466.008 40.2348 479.904 44.4119 489.925 53.2445C495.499 41.0971 506.496 31.6289 520.568 28.6377C537.958 24.9414 555.09 32.1509 564.965 45.6223C565.513 46.3769 566.508 46.6489 567.367 46.2802C568.228 45.9184 568.733 45.0003 568.567 44.0826C568.477 43.6552 568.4 43.2175 568.309 42.7901C563.287 19.1629 540.043 4.07489 516.416 9.097C502.343 12.0882 491.348 21.5563 485.771 33.697C475.752 24.8712 461.855 20.6943 447.783 23.6853C424.141 28.7106 409.073 51.9421 414.095 75.5692C414.186 75.9967 414.277 76.4241 414.381 76.8406C414.602 77.7474 415.423 78.3848 416.372 78.368Z" fill="#AFCDFB" />
                                        <path id="XMLID_55_" d="M733.841 223.474C699.533 230.767 672.746 253.84 659.163 283.431C634.732 261.92 600.861 251.74 566.568 259.029C508.974 271.271 472.213 327.888 484.455 385.483C484.678 386.529 484.916 387.574 485.181 388.611C485.726 390.824 487.721 392.365 490.005 392.335C492.278 392.306 494.241 390.696 494.721 388.467C503.296 348.7 534.321 315.662 576.692 306.656C610.986 299.367 644.855 309.546 669.287 331.058C682.868 301.466 709.656 278.394 743.964 271.101C786.321 262.098 828.115 279.657 852.124 312.498C853.468 314.334 855.916 315.005 858.003 314.106C860.105 313.213 861.301 310.994 860.899 308.75C860.718 307.693 860.511 306.644 860.289 305.597C848.046 248.003 791.435 211.232 733.841 223.474Z" fill="#AFCDFB" />
                                        <path id="XMLID_56_" d="M161.218 227.051C171.783 203.996 192.645 186.03 219.363 180.352C252.36 173.338 284.906 187.02 303.606 212.593C304.656 214.03 306.552 214.549 308.191 213.852C309.826 213.154 310.755 211.425 310.442 209.674C310.298 208.857 310.138 208.034 309.964 207.215C300.43 162.361 256.341 133.728 211.479 143.264C184.762 148.943 163.9 166.908 153.332 189.951C134.291 173.203 107.926 165.275 81.2078 170.954C36.3597 180.487 7.7287 224.576 17.2627 269.43C17.4369 270.25 17.6234 271.06 17.8234 271.857C18.2506 273.582 19.7998 274.787 21.5812 274.765C23.3623 274.737 24.8832 273.489 25.2576 271.75C31.9381 240.782 56.1066 215.052 89.0917 208.04C115.809 202.363 142.175 210.289 161.218 227.051Z" fill="#AFCDFB" />
                                    </g>
                                </svg>

                            </div>
                            <div className="bench-container">
                                <svg id="bench" viewBox="0 0 2556 1512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Group">
                                        <path id="Vector" d="M161.321 1511.52L737.585 1510.66L776.584 1510.53L2043.52 1506.39L2461.41 1505.02C2461.41 1505.02 2619.4 1226.97 2525.23 947.133C2515.94 919.507 2504.2 891.881 2489.61 864.501C2479.9 846.281 2468.93 828.167 2456.58 810.242C2455.31 808.405 2454.03 806.576 2452.74 804.739C2435.03 779.664 2414.57 754.957 2391.07 730.874C2211.76 547.047 2046.4 522.102 1910.73 534.607C1802.47 544.561 1713.13 578.371 1650.69 574.287C1510 565.111 1464.88 275.643 1048.68 188.33C965.643 170.913 872.434 160.786 779.339 160.687C519.112 160.384 259.722 238.259 225.561 453.28C220.633 484.308 220.395 518.166 225.52 555.066C229.12 581.142 235.416 608.718 244.633 637.886C261.706 692.022 288.832 751.578 327.511 816.965C451.003 1025.7 349.983 1120.94 203.967 1203.72C197.964 1207.12 191.987 1210.61 186.058 1214.18C81.8591 1277.01 161.321 1511.51 161.321 1511.52Z" fill="#EBF3FA" />
                                        <path id="Vector_2" d="M595.699 1108.72V993.522H604.34V754.041H737.204V993.522H894.646V839.191H1134.37V550.675H1285.36V925.876H1332.48V606.426H1453.67V925.876H1732.88V1218.1H1874.61V1020.53H2006.75V1218.1H2045V806.702H2190.52V1218.1H2242.78V1510.03H2190.52H2045H1732.88H1713.76H1453.67H1332.48H1127.18V1508.5H1014.2H894.646H737.204H670.772H604.34H595.699H320.684V1254.23L595.699 1108.72Z" fill="#DDEAF4" />
                                        <g id="Group_5">
                                            <path id="Vector_18" d="M2109.72 1414.41C2028.45 1442.03 1878.83 1512.96 1706.99 1464.78C1535.14 1416.61 1331.64 1458.59 1076.02 1510.67C1074.78 1510.92 1073.52 1511.15 1072.27 1511.39L2490.98 1509.37C2381.9 1386.16 2234.72 1371.94 2109.72 1414.41Z" fill="#1C468A" />
                                        </g>
                                        <g id="Group_6">
                                            <g id="Group_7">
                                                <path id="Vector_19" d="M562.87 40.5239H576.766L576.643 39.437L572.451 2.49194C572.31 1.30294 571.304 0.402954 570.101 0.402954C569.95 0.402954 569.809 0.411939 569.658 0.430939C568.878 0.523939 568.163 0.860943 567.599 1.36694C566.94 1.96694 566.498 2.80095 566.405 3.74695L562.87 40.5239Z" fill="#A2C5F9" />
                                                <path id="Vector_20" d="M575.423 32.141L575.919 32.154L572.45 2.49097C572.309 1.30197 571.303 0.401978 570.1 0.401978C569.949 0.401978 569.808 0.410962 569.657 0.429962C569.527 0.541962 569.403 0.65397 569.29 0.77597C568.679 1.43197 568.312 2.29397 568.303 3.24997L568.1 24.576C568.061 28.668 571.322 32.034 575.423 32.141Z" fill="#AFCDFB" />
                                                <path id="Vector_21" d="M580.808 204.92H554.014V1384.28H580.808V204.92Z" fill="#A2C5F9" />
                                                <path id="Vector_22" d="M580.808 204.92H568.435V1384.28H580.808V204.92Z" fill="#AFCDFB" />
                                                <path id="Vector_23s" d="M610.086 1196.08H524.745V1508.12H610.086V1196.08Z" fill="#A2C5F9" />
                                                <path id="Vector_24" d="M610.086 1196.08H559.221V1508.12H610.086V1196.08Z" fill="#AFCDFB" />
                                                <path id="Vector_25" d="M520.777 58.32C520.777 72.895 542.731 84.704 569.817 84.704C571.886 84.704 573.917 84.638 575.919 84.497C600.119 82.885 618.858 71.779 618.858 58.32C618.858 44.862 600.119 33.766 575.919 32.153C573.918 32.013 571.886 31.947 569.817 31.947C542.731 31.948 520.777 43.757 520.777 58.32Z" fill="#A2C5F9" />
                                                <path id="Vector_26" d="M524.846 228.18H610.182L640.269 83.766H499.365L524.846 228.18Z" fill="#AFCDFB" />
                                                <path id="Vector_27" d="M647.881 72.885H491.755V86.737H647.881V72.885Z" fill="#A2C5F9" />
                                                <path id="Vector_28" d="M596.104 1196.08H541.574L549.554 1171.95C550.262 1169.81 552.266 1168.37 554.527 1168.37H580.074C582.843 1168.37 585.342 1170.03 586.396 1172.59L596.104 1196.08Z" fill="#A2C5F9" />
                                                <path id="Vector_29" d="M545.852 57.0559H546.215C547.061 45.8589 559.054 36.3359 575.919 32.1539C599.357 33.7149 617.669 44.1729 618.801 57.0559H626.755L637.906 72.8859H647.882V86.7379H549.735V72.8859H535.266L545.852 57.0559Z" fill="#AFCDFB" />
                                                <path id="Vector_30" d="M630.187 90.8049H509.843L533.347 220.608H602.452L630.187 90.8049Z" fill="#C7DCF9" />
                                                <path id="Vector_31" d="M615.614 59.877C615.614 59.877 606.447 39.915 588.348 40.524C588.348 40.524 599.866 50.74 598.807 59.877C597.751 69.015 615.614 59.877 615.614 59.877Z" fill="#C7DCF9" />
                                                <path id="Vector_32" d="M501.73 72.885H637.906L626.755 57.056H512.316L501.73 72.885Z" fill="#A2C5F9" />
                                                <path id="Vector_33" d="M622.195 95.335H594.616L586.585 216.547H594.616L622.195 95.335Z" fill="#D2E4F9" />
                                            </g>
                                            <g id="Group_8">
                                                <path id="Vector_34" d="M1731.72 1509.68H1921.67L1950.35 1154.22H1703.04L1731.72 1509.68Z" fill="#A2C5F9" />
                                                <path id="Vector_35" d="M1902.55 1488.77C1904.67 1488.77 1906.38 1487.06 1906.38 1484.94V1180.15C1906.38 1178.04 1904.67 1176.33 1902.55 1176.33C1900.44 1176.33 1898.73 1178.04 1898.73 1180.15V1484.94C1898.73 1487.06 1900.44 1488.77 1902.55 1488.77Z" fill="#AFCDFB" />
                                                <path id="Vector_36" d="M1882 1488.77C1884.11 1488.77 1885.83 1487.06 1885.83 1484.94V1180.15C1885.83 1178.04 1884.11 1176.33 1882 1176.33C1879.89 1176.33 1878.18 1178.04 1878.18 1180.15V1484.94C1878.18 1487.06 1879.89 1488.77 1882 1488.77Z" fill="#AFCDFB" />
                                                <path id="Vector_37" d="M1861.45 1488.77C1863.56 1488.77 1865.27 1487.06 1865.27 1484.94V1180.15C1865.27 1178.04 1863.56 1176.33 1861.45 1176.33C1859.34 1176.33 1857.63 1178.04 1857.63 1180.15V1484.94C1857.63 1487.06 1859.34 1488.77 1861.45 1488.77Z" fill="#AFCDFB" />
                                                <path id="Vector_38" d="M1840.9 1488.77C1843.01 1488.77 1844.72 1487.06 1844.72 1484.94V1180.15C1844.72 1178.04 1843.01 1176.33 1840.9 1176.33C1838.79 1176.33 1837.08 1178.04 1837.08 1180.15V1484.94C1837.08 1487.06 1838.79 1488.77 1840.9 1488.77Z" fill="#AFCDFB" />
                                                <path id="Vector_39" d="M1820.35 1488.77C1822.46 1488.77 1824.17 1487.06 1824.17 1484.94V1180.15C1824.17 1178.04 1822.46 1176.33 1820.35 1176.33C1818.24 1176.33 1816.53 1178.04 1816.53 1180.15V1484.94C1816.53 1487.06 1818.24 1488.77 1820.35 1488.77Z" fill="#AFCDFB" />
                                                <path id="Vector_40" d="M1799.8 1488.77C1801.91 1488.77 1803.62 1487.06 1803.62 1484.94V1180.15C1803.62 1178.04 1801.91 1176.33 1799.8 1176.33C1797.69 1176.33 1795.98 1178.04 1795.98 1180.15V1484.94C1795.98 1487.06 1797.69 1488.77 1799.8 1488.77Z" fill="#AFCDFB" />
                                                <path id="Vector_41" d="M1779.25 1488.77C1781.36 1488.77 1783.07 1487.06 1783.07 1484.94V1180.15C1783.07 1178.04 1781.36 1176.33 1779.25 1176.33C1777.14 1176.33 1775.42 1178.04 1775.42 1180.15V1484.94C1775.42 1487.06 1777.14 1488.77 1779.25 1488.77Z" fill="#AFCDFB" />
                                                <path id="Vector_42" d="M1758.7 1488.77C1760.81 1488.77 1762.52 1487.06 1762.52 1484.94V1180.15C1762.52 1178.04 1760.81 1176.33 1758.7 1176.33C1756.59 1176.33 1754.87 1178.04 1754.87 1180.15V1484.94C1754.87 1487.06 1756.59 1488.77 1758.7 1488.77Z" fill="#AFCDFB" />
                                            </g>
                                            <g id="Group_9">
                                                <path id="Vector_43" d="M1565.28 1509.68H1593.96V1318.72C1593.96 1246.29 1652.88 1187.37 1725.3 1187.37C1797.73 1187.37 1856.65 1246.29 1856.65 1318.72V1509.68H1885.32V1318.72C1885.32 1230.48 1813.54 1158.7 1725.3 1158.7C1637.07 1158.7 1565.28 1230.48 1565.28 1318.72V1509.68H1565.28Z" fill="#AFCDFB" />
                                                <path id="Vector_44" d="M742.306 1286.52C750.225 1286.52 756.644 1280.11 756.644 1272.19V914.412C756.644 906.493 750.225 900.074 742.306 900.074C734.387 900.074 727.968 906.493 727.968 914.412V1272.19C727.968 1280.11 734.387 1286.52 742.306 1286.52Z" fill="#AFCDFB" />
                                                <path id="Vector_45" d="M1625.98 1286.52C1633.9 1286.52 1640.32 1280.11 1640.32 1272.19V914.412C1640.32 906.493 1633.9 900.074 1625.98 900.074C1618.07 900.074 1611.65 906.493 1611.65 914.412V1272.19C1611.65 1280.11 1618.07 1286.52 1625.98 1286.52Z" fill="#AFCDFB" />
                                                <path id="Vector_46" d="M678.393 1229.16H1708.51C1715.74 1229.16 1721.59 1223.31 1721.59 1216.08V1153.93C1721.59 1146.7 1715.74 1140.85 1708.51 1140.85H678.393C671.168 1140.85 665.312 1146.7 665.312 1153.93V1216.08C665.312 1223.31 671.168 1229.16 678.393 1229.16Z" fill="#365DA4" />
                                                <path id="Vector_47" d="M715.88 1290.15H1847.81C1857.73 1290.15 1865.77 1282.11 1865.77 1272.19C1865.77 1262.27 1857.73 1254.23 1847.81 1254.23H715.88V1290.15Z" fill="#365DA4" />
                                                <path id="Vector_48" d="M671.102 1124.99H1701.22C1708.44 1124.99 1714.3 1119.14 1714.3 1111.91V1049.76C1714.3 1042.54 1708.44 1036.68 1701.22 1036.68H671.102C663.878 1036.68 658.021 1042.54 658.021 1049.76V1111.91C658.022 1119.14 663.878 1124.99 671.102 1124.99Z" fill="#365DA4" />
                                                <path id="Vector_49" d="M661.29 1017.05H1691.41C1698.63 1017.05 1704.49 1011.2 1704.49 1003.97V941.817C1704.49 934.593 1698.63 928.737 1691.41 928.737H661.29C654.066 928.737 648.209 934.593 648.209 941.817V1003.97C648.209 1011.2 654.065 1017.05 661.29 1017.05Z" fill="#365DA4" />
                                                <path id="Vector_50" d="M700.794 1509.68H729.47V1318.72C729.47 1246.29 788.391 1187.37 860.816 1187.37C933.241 1187.37 992.163 1246.29 992.163 1318.72V1509.68H1020.84V1318.72C1020.84 1230.48 949.053 1158.7 860.818 1158.7C772.581 1158.7 700.795 1230.48 700.795 1318.72L700.794 1509.68Z" fill="#AFCDFB" />
                                            </g>
                                        </g>
                                        <path id="Vector_51" d="M931.203 1472.26C791.565 1515.76 644.862 1463.27 376.375 1421.27C107.888 1379.27 0.821045 1511.52 0.821045 1511.52L1306.33 1511.39C1265.83 1471.03 1070.84 1428.77 931.203 1472.26Z" fill="#1C468A" />
                                        <g id="Group_10">
                                            <g id="Group_11">
                                                <path id="Vector_52" d="M1232.15 905.809C1235.83 900.526 1240.55 890.85 1244.96 872.962C1244.44 874.724 1237.67 897.092 1226.81 908.635C1186.92 926.594 1105.09 994.74 1104.07 1009.96C1104.07 1009.96 1086.27 964.722 1085.89 964.408C1085.89 964.408 1050.02 900.049 1108.55 875.777C1138.3 863.442 1141.56 842.05 1143.39 823.306C1145.2 804.557 1166.46 726.004 1217.41 755.56C1217.41 755.56 1226.73 753.079 1230.54 754.28C1230.54 754.28 1227.26 754.383 1225.37 755.796C1231.72 756.427 1240.64 758.325 1247.47 763.787C1265.56 778.263 1267.21 882.534 1232.15 905.809Z" fill="#1C468A" />
                                                <path id="Vector_53" d="M1225.35 890.83C1225.35 890.83 1236.37 935.436 1236.75 951.443C1236.87 956.564 1240.22 969.439 1245.19 984.795C1255.77 1017.46 1273.71 1061.39 1283.68 1066.08C1288.96 1068.58 1294.22 1071.03 1298.86 1072.66C1307.1 1075.56 1313.4 1075.92 1314.4 1069.49C1315.97 1059.42 1292.39 928.765 1283.06 915.429C1273.71 902.085 1225.35 890.83 1225.35 890.83Z" fill="#AFCDFB" />
                                                <path id="Vector_54" d="M1244.75 1440.4C1242.45 1443.04 1242.15 1445.99 1243.29 1449.13C1243.29 1449.15 1243.3 1449.16 1243.32 1449.18C1245.42 1455 1252.38 1461.5 1260.47 1467.99C1261.5 1468.82 1262.42 1469.58 1263.22 1470.29C1263.43 1470.47 1263.64 1470.65 1263.84 1470.84C1264 1470.98 1264.15 1471.13 1264.31 1471.27C1271.85 1478.22 1269.01 1479.81 1282.56 1493.91C1298 1509.98 1308.63 1510.27 1311.66 1508.81C1314.22 1507.56 1309.02 1499.04 1303.26 1489.46C1302.98 1489 1302.7 1488.53 1302.42 1488.06C1301.65 1486.79 1300.89 1485.5 1300.13 1484.22C1293.38 1472.69 1295.11 1467.28 1296.71 1450.12C1298.01 1436.18 1318.4 1372.24 1318.4 1372.24L1288.8 1367.14C1288.8 1367.14 1279.89 1418.06 1270.07 1425.9C1264.82 1430.08 1258.94 1430.13 1253.9 1433.23C1253.54 1433.45 1253.19 1433.67 1252.85 1433.89C1249.98 1435.79 1247.06 1437.76 1244.75 1440.4Z" fill="#F7AA74" />
                                                <path id="Vector_55" d="M1244.75 1440.4C1242.45 1443.04 1242.15 1445.99 1243.29 1449.13C1243.29 1449.15 1243.3 1449.16 1243.32 1449.18C1245.9 1454.99 1252.68 1461.46 1260.49 1467.93C1261.52 1468.78 1262.42 1469.56 1263.22 1470.29C1263.43 1470.47 1263.64 1470.66 1263.84 1470.84C1264 1470.99 1264.16 1471.13 1264.31 1471.27C1271.85 1478.22 1269.01 1479.81 1282.56 1493.92C1298 1509.98 1308.63 1510.27 1311.66 1508.81C1314.22 1507.56 1309.02 1499.04 1303.26 1489.46C1300.25 1488.36 1286.29 1482.69 1275.73 1469.18C1266.43 1457.31 1260.23 1442.06 1253.9 1433.23C1253.54 1433.45 1253.19 1433.67 1252.85 1433.9C1249.98 1435.8 1247.06 1437.76 1244.75 1440.4Z" fill="#163560" />
                                                <path id="Vector_56" d="M1483.49 1423.26C1485.32 1432.4 1498.34 1430.88 1512.89 1427.32C1527.44 1423.77 1523.98 1427.99 1544.69 1425.7C1565.39 1423.41 1571.67 1415.69 1572.3 1412.61C1572.86 1409.88 1562.63 1408.91 1551.66 1407.65C1550.28 1407.5 1548.89 1407.32 1547.51 1407.15C1535.12 1405.6 1526.04 1397.6 1514.79 1391.04C1504.13 1384.82 1488.22 1359.48 1488.22 1359.48L1459.82 1361.73C1459.82 1361.73 1474.73 1384.36 1480.49 1394.2C1483.88 1399.99 1483.7 1407.64 1483.28 1413.55C1483.06 1416.76 1482.85 1420.05 1483.49 1423.26Z" fill="#F7AA74" />
                                                <path id="Vector_57" d="M1512.89 1427.32C1527.44 1423.76 1523.98 1427.99 1544.69 1425.7C1565.39 1423.41 1571.67 1415.69 1572.3 1412.61C1572.86 1409.88 1562.63 1408.91 1551.66 1407.65L1551.56 1407.86C1551.56 1407.86 1539.14 1416.67 1521.9 1417.08C1507.85 1417.42 1492.98 1413.39 1483.28 1413.55C1483.06 1416.76 1482.84 1420.05 1483.49 1423.26C1485.32 1432.4 1498.34 1430.88 1512.89 1427.32Z" fill="#163560" />
                                                <path id="Vector_58" d="M1374.68 1241.69L1313.48 1406.39C1313.48 1406.39 1304.08 1407.3 1295.06 1404.7C1286.77 1402.31 1277.27 1396.03 1277.27 1396.03C1277.27 1396.03 1292.44 1237.9 1320.28 1205C1348.11 1172.11 1374.68 1241.69 1374.68 1241.69Z" fill="#2D427C" />
                                                <path id="Vector_59" d="M1132.62 1175.07C1132.62 1175.07 1308.47 1115.61 1347.69 1128.26C1386.9 1140.91 1504.66 1375.18 1504.66 1375.18C1504.66 1375.18 1502 1378.72 1494.75 1381.44C1488 1383.97 1471.67 1383.81 1471.67 1383.81C1471.67 1383.81 1365.4 1292.72 1352.75 1266.15C1340.1 1239.59 1335.04 1214.28 1322.38 1216.81C1309.73 1219.34 1159.19 1278.8 1125.03 1243.38C1090.87 1207.96 1099.81 1161.94 1099.81 1161.94L1132.62 1175.07Z" fill="#365DA4" />
                                                <path id="Vector_60" d="M1191.1 912.219C1203.64 918.791 1223.41 913.739 1223.25 913.619C1221.18 912.048 1222.67 902.545 1224.92 892.691C1225.06 892.07 1225.2 891.45 1225.35 890.83C1227.97 879.676 1231.31 868.672 1231.31 868.672L1192.67 851.746L1190.38 850.736C1190.18 851.635 1189.98 852.526 1189.78 853.386C1183.07 881.866 1174.9 886.888 1171.22 890.82C1166.18 896.213 1179.31 906.036 1191.1 912.219Z" fill="#F7AA74" />
                                                <path id="Vector_61" d="M1189.78 853.387C1194.04 867.102 1203.02 883.683 1225.63 889.634C1228.25 878.481 1231.31 868.672 1231.31 868.672L1192.67 851.746L1190.38 850.736C1190.18 851.636 1189.98 852.526 1189.78 853.387Z" fill="#AFCDFB" />
                                                <path id="Vector_62" d="M1187.43 844.746C1187.43 844.746 1178.62 824.277 1178.33 807.929C1178.12 796.258 1190.61 755.104 1231.92 767.9C1231.92 767.9 1244.01 771.064 1254.31 780.7C1262.5 788.362 1273.62 803.857 1252.96 838.213L1247.13 850.002L1187.43 844.746Z" fill="#1C468A" />
                                                <path id="Vector_63" d="M1245.19 984.795C1255.77 1017.46 1273.71 1061.39 1283.68 1066.08C1288.96 1068.58 1294.22 1071.03 1298.86 1072.66C1297.61 1046.62 1247.87 975.782 1247.87 975.782L1245.19 984.795Z" fill="#AFCDFB" />
                                                <path id="Vector_64" d="M1235.44 876.572C1235.44 876.572 1182.18 868.986 1187.41 835.885C1192.65 802.786 1189.3 779.514 1223.53 782.958C1257.76 786.403 1262.36 800.075 1263.3 811.548C1264.23 823.022 1249.44 877.692 1235.44 876.572Z" fill="#F7AA74" />
                                                <path id="Vector_65" d="M1247.85 786.002C1247.85 786.002 1227.12 822.511 1203.89 824.696C1180.65 826.881 1171.92 819.356 1171.92 819.356C1171.92 819.356 1173.22 800.102 1180.56 776.923C1180.56 776.923 1239.83 765.776 1247.85 786.002Z" fill="#1C468A" />
                                                <path id="Vector_66" d="M1243.75 788.581C1243.75 788.581 1253.23 798.978 1254.54 807.828C1255.84 816.678 1254.27 834.216 1259.42 834.432C1259.42 834.432 1274.58 809.787 1264.65 792.898C1254.11 774.986 1243.75 788.581 1243.75 788.581Z" fill="#1C468A" />
                                                <path id="Vector_67" d="M1090.23 1167.13C1090.2 1167.91 1090.2 1168.65 1090.23 1169.38C1090.31 1171.83 1090.68 1174.05 1091.38 1176C1093.94 1183.1 1101.15 1185.55 1110.99 1185.06C1112.31 1185 1113.68 1184.88 1115.1 1184.72C1137.83 1182.07 1171.62 1166.8 1195.95 1156.24C1233.07 1140.15 1249.93 1155.27 1261.75 1145.04C1263.14 1143.83 1264.02 1142.45 1264.51 1140.78C1264.63 1140.4 1264.72 1140.01 1264.8 1139.6C1267.23 1126.49 1251.42 1096.76 1270.18 1006.32C1277.61 970.47 1225.35 890.83 1225.35 890.83C1225.35 890.83 1220.11 913.384 1174.45 887.601C1174.17 887.44 1161.98 914.438 1144.89 946.841C1126.05 982.584 1107.99 1025.76 1113.3 1048.01C1119.18 1072.64 1107.99 1103.93 1099.23 1130.42C1094.53 1144.62 1090.53 1157.45 1090.23 1167.13Z" fill="#AFCDFB" />
                                                <path id="Vector_68" d="M1090.23 1167.13C1090.2 1167.91 1090.2 1168.65 1090.23 1169.38C1090.31 1171.83 1090.68 1174.05 1091.38 1176C1093.94 1183.1 1101.15 1185.55 1110.99 1185.06C1112.31 1185 1113.68 1184.88 1115.1 1184.72C1137.83 1182.07 1171.62 1166.8 1195.95 1156.24C1233.07 1140.15 1249.35 1154.93 1262.07 1145.84C1265.57 1143.34 1264.77 1136.89 1265.26 1135.22C1244.98 1124.01 1194.65 1133.1 1217.96 1083.57C1229.85 1058.31 1170.07 986.575 1153.79 1014.04C1129.19 1050.15 1110.13 1025.94 1117.06 1048.42C1124.61 1072.91 1110.57 1103.93 1099.23 1130.42C1094.53 1144.62 1090.53 1157.45 1090.23 1167.13Z" fill="#AFCDFB" />
                                                <path id="Vector_69" d="M1314.4 1069.48L1279.05 1138.18L1208.47 1134.84L1241.95 1061.48L1314.4 1069.48Z" fill="#1C468A" />
                                                <path id="Vector_70" d="M1328.51 1086.73C1328.51 1086.73 1336.47 1109.26 1334.06 1119.41C1332.25 1127 1319.11 1127.61 1303.34 1129.55C1297 1130.73 1291.84 1131.26 1291.84 1131.26L1328.51 1086.73Z" fill="#AFCDFB" />
                                                <path id="Vector_71" d="M1351.08 1044.14L1314.4 1069.48L1279.05 1138.18L1319.73 1116.17L1351.08 1044.14Z" fill="#163560" />
                                                <g id="Group_12">
                                                    <path id="Vector_72" d="M1345.12 1048.26L1340.66 1044.14L1311.9 1064.06L1314.4 1069.48L1345.12 1048.26Z" fill="#CCBCB2" />
                                                    <path id="Vector_73" d="M1314.4 1069.48L1311.9 1064.06L1247.88 1056.81V1062.14L1314.4 1069.48Z" fill="#EFE5DF" />
                                                    <path id="Vector_74" d="M1247.88 1056.81L1244.23 1061.73L1247.88 1062.14V1056.81Z" fill="#CCBCB2" />
                                                </g>
                                                <path id="Vector_75" d="M1208.07 1112.94C1208.07 1112.94 1216.45 1101.2 1227.35 1100.15C1238.26 1099.1 1245.42 1104.66 1245.98 1108.02C1246.54 1111.37 1243.8 1122.09 1236.16 1125.25C1228.52 1128.41 1204.4 1129.44 1204.4 1129.44L1208.07 1112.94Z" fill="#F7AA74" />
                                                <path id="Vector_76" d="M1334.1 1112.19C1334.1 1112.19 1328.03 1100.78 1318.92 1099.92C1309.82 1099.06 1303.32 1104.65 1302.56 1107.95C1301.81 1111.26 1302.92 1122.56 1309.4 1124.74C1339.35 1134.85 1334.1 1112.19 1334.1 1112.19Z" fill="#F7AA74" />
                                                <path id="Vector_77" d="M1174.45 887.602C1174.45 887.602 1137.48 891.809 1122.3 912.98C1100.93 942.781 1064.03 1112.49 1088.31 1129.44C1116.93 1149.41 1211.82 1131.38 1211.82 1131.38C1211.82 1131.38 1212.56 1120.25 1208.07 1112.94C1203.57 1105.63 1128.7 1099.2 1125.33 1095.83C1121.95 1092.45 1167.28 981.017 1167.28 970.896C1167.28 960.773 1174.45 887.602 1174.45 887.602Z" fill="#AFCDFB" />
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div id="section-2" className="full-screen panels">

                            <div className="akaar-wedstyle">
                                <h1 id="akaar-wed">WEDDINGS</h1>
                            </div>

                            <svg id="cealling-lamp" width="188" height="266" viewBox="0 0 188 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Lamp_2">
                                    <g id="Group">
                                        <g id="Group_2">
                                            <path id="Vector" opacity="0.1" d="M55.56 265.248C86.098 265.248 110.854 240.492 110.854 209.954C110.854 179.416 86.098 154.66 55.56 154.66C25.0219 154.66 0.265991 179.416 0.265991 209.954C0.265991 240.492 25.0219 265.248 55.56 265.248Z" fill="#FFC325" />
                                            <path id="Vector_2" opacity="0.3" d="M55.56 242.979C75.8498 242.979 92.298 226.531 92.298 206.241C92.298 185.951 75.8498 169.503 55.56 169.503C35.2701 169.503 18.822 185.951 18.822 206.241C18.822 226.531 35.2701 242.979 55.56 242.979Z" fill="#FFC325" />
                                            <g id="Group_3">
                                                <g id="Group_4">
                                                    <g id="Group_5">
                                                        <g id="Group_6">
                                                            <g id="Group_7">
                                                                <path id="Vector_3" d="M55.385 192.83C61.165 192.898 65.906 188.267 65.974 182.487C66.011 179.35 64.639 176.363 62.236 174.346C61.794 173.981 61.119 173.54 61.134 172.626C61.134 172.598 61.087 170.339 61.087 170.339H50.078C50.078 170.339 50.031 172.686 50.031 172.713C50.031 173.518 49.408 173.865 48.949 174.228C46.514 176.18 45.08 179.12 45.042 182.241C44.974 188.021 49.605 192.762 55.385 192.83Z" fill="#FFC325" />
                                                                <path id="Vector_4" opacity="0.4" d="M55.385 192.83C61.165 192.898 65.906 188.267 65.974 182.487C66.011 179.35 64.639 176.363 62.236 174.346C61.794 173.981 61.119 173.54 61.134 172.626C61.134 172.598 61.087 170.339 61.087 170.339H50.078C50.078 170.339 50.031 172.686 50.031 172.713C50.031 173.518 49.408 173.865 48.949 174.228C46.514 176.18 45.08 179.12 45.042 182.241C44.974 188.021 49.605 192.762 55.385 192.83Z" fill="white" />
                                                                <path id="Vector_5" opacity="0.2" d="M50.182 188.32C50.182 186.282 52.567 184.626 55.524 184.626C58.481 184.626 60.866 186.282 60.866 188.32C60.866 190.358 58.481 192.017 55.524 192.017C52.567 192.017 50.182 190.361 50.182 188.32Z" fill="white" />
                                                            </g>
                                                            <path id="Vector_6" d="M63.483 178.385C64.394 179.947 64.756 181.822 64.492 183.61C64.228 185.399 63.34 187.089 62.017 188.321" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                            <path id="Vector_7" d="M57.771 172.626C56.968 175.359 56.827 178.34 57.367 181.156C57.454 181.611 57.66 182.159 58.068 182.17C58.433 182.179 58.673 181.73 58.752 181.323C59.031 179.885 58.285 178.423 57.331 177.43C56.815 176.892 56.188 176.423 55.49 176.389C54.789 176.355 54.119 176.77 53.612 177.323C52.64 178.381 52.156 180.038 52.508 181.516C52.657 182.141 53.1 182.813 53.659 182.693C53.995 182.621 54.241 182.266 54.328 181.889C54.415 181.512 54.372 181.113 54.323 180.727C53.968 177.944 53.288 175.216 52.309 172.635" stroke="#263238" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                    </g>
                                                    <path id="Vector_8" d="M49.384 169.675H61.723C62.036 169.675 62.289 169.929 62.289 170.241V170.437C62.289 170.75 62.035 171.003 61.723 171.003H49.384C49.071 171.003 48.818 170.749 48.818 170.437V170.241C48.818 169.928 49.071 169.675 49.384 169.675Z" fill="#263238" />
                                                    <path id="Vector_9" opacity="0.3" d="M49.384 169.675H61.723C62.036 169.675 62.289 169.929 62.289 170.241V170.437C62.289 170.75 62.035 171.003 61.723 171.003H49.384C49.071 171.003 48.818 170.749 48.818 170.437V170.241C48.818 169.928 49.071 169.675 49.384 169.675Z" fill="white" />
                                                    <path id="Vector_10" d="M49.584 168.509H61.523C61.826 168.509 62.071 168.754 62.071 169.057V169.247C62.071 169.55 61.826 169.795 61.523 169.795H49.584C49.281 169.795 49.036 169.55 49.036 169.247V169.057C49.036 168.754 49.282 168.509 49.584 168.509Z" fill="#263238" />
                                                    <path id="Vector_11" opacity="0.3" d="M49.584 168.509H61.523C61.826 168.509 62.071 168.754 62.071 169.057V169.247C62.071 169.55 61.826 169.795 61.523 169.795H49.584C49.281 169.795 49.036 169.55 49.036 169.247V169.057C49.036 168.754 49.282 168.509 49.584 168.509Z" fill="white" />
                                                    <path id="Vector_12" d="M50.38 166.191H60.727C61.03 166.191 61.275 166.436 61.275 166.739V166.929C61.275 167.232 61.03 167.477 60.727 167.477H50.38C50.077 167.477 49.832 167.232 49.832 166.929V166.739C49.832 166.436 50.077 166.191 50.38 166.191Z" fill="#263238" />
                                                    <path id="Vector_13" opacity="0.3" d="M50.38 166.191H60.727C61.03 166.191 61.275 166.436 61.275 166.739V166.929C61.275 167.232 61.03 167.477 60.727 167.477H50.38C50.077 167.477 49.832 167.232 49.832 166.929V166.739C49.832 166.436 50.077 166.191 50.38 166.191Z" fill="white" />
                                                    <path id="Vector_14" d="M49.76 167.37H61.347C61.65 167.37 61.895 167.615 61.895 167.918V168.108C61.895 168.411 61.65 168.656 61.347 168.656H49.76C49.457 168.656 49.212 168.411 49.212 168.108V167.918C49.212 167.615 49.458 167.37 49.76 167.37Z" fill="#263238" />
                                                    <path id="Vector_15" opacity="0.3" d="M49.76 167.37H61.347C61.65 167.37 61.895 167.615 61.895 167.918V168.108C61.895 168.411 61.65 168.656 61.347 168.656H49.76C49.457 168.656 49.212 168.411 49.212 168.108V167.918C49.212 167.615 49.458 167.37 49.76 167.37Z" fill="white" />
                                                </g>
                                            </g>
                                            <path id="Vector_16" d="M72.421 162.848H38.594V168.013H72.421V162.848Z" fill="#263238" />
                                            <path id="Vector_17" d="M62.861 169.042H48.154V156.416C48.154 152.954 50.961 150.147 54.423 150.147H56.593C60.055 150.147 62.862 152.954 62.862 156.416V169.042H62.861Z" fill="#263238" />
                                            <g id="Group_8">
                                                <g id="Group_9">
                                                    <path id="Vector_18" d="M56.258 153.584C56.258 135.53 56.258 117.477 56.258 99.423C56.258 78.384 56.258 57.346 56.258 36.307C56.258 27.138 56.258 17.969 56.258 8.8C56.258 7.835 54.758 7.833 54.758 8.8C54.758 26.854 54.758 44.907 54.758 62.961C54.758 84 54.758 105.038 54.758 126.077C54.758 135.246 54.758 144.415 54.758 153.584C54.758 154.549 56.258 154.551 56.258 153.584Z" fill="#263238" />
                                                </g>
                                            </g>
                                            <path id="Vector_19" opacity="0.5" d="M74.199 165.321L38.289 164.732C21.754 171.53 10.111 187.798 10.111 206.784C10.111 231.885 30.459 252.233 55.56 252.233C80.661 252.233 101.009 231.885 101.009 206.784C101.009 188.326 90.005 172.438 74.199 165.321Z" fill="#FFC325" />
                                            <g id="Group_10" opacity="0.2">
                                                <path id="Vector_20" d="M90.35 177.548C85.978 172.352 80.469 168.145 74.199 165.322L38.289 164.733C21.754 171.531 10.111 187.799 10.111 206.785C10.111 216.698 13.294 225.862 18.681 233.332C27.676 236.067 37.657 235.27 46.452 231.828C56.404 227.933 64.907 220.867 71.625 212.556C78.343 204.244 83.378 194.698 87.708 184.927C88.761 182.552 89.785 180.074 90.35 177.548Z" fill="white" />
                                            </g>
                                            <g id="Group_11" opacity="0.3">
                                                <path id="Vector_21" d="M35.468 173.632C35.65 172.307 34.084 171.412 32.972 172.155C26.542 176.457 21.397 182.662 18.378 189.787C15.198 197.292 14.391 205.781 16.101 213.751C16.287 214.617 16.515 215.505 17.058 216.205C17.601 216.905 18.54 217.371 19.386 217.108C20.403 216.792 20.853 215.643 21.088 214.588C21.39 213.229 21.579 211.848 21.707 210.462C22.283 204.192 22.65 197.828 24.306 191.739C25.771 186.35 28.327 181.126 32.435 177.343C33.221 176.619 34.433 175.696 35.038 174.815C35.238 174.521 35.405 174.089 35.468 173.632Z" fill="white" />
                                            </g>
                                            <path id="Vector_22" opacity="0.2" d="M62.861 161.636H48.154V162.848H62.861V161.636Z" fill="black" />
                                        </g>
                                        <g id="Group_12">
                                            <path id="Vector_23s" opacity="0.1" d="M132.454 175.21C163 175.21 187.762 150.448 187.762 119.902C187.762 89.3562 163 64.594 132.454 64.594C101.908 64.594 77.146 89.3562 77.146 119.902C77.146 150.448 101.908 175.21 132.454 175.21Z" fill="#FFC325" />
                                            <path id="Vector_24" opacity="0.3" d="M132.454 152.935C152.749 152.935 169.201 136.483 169.201 116.188C169.201 95.8931 152.749 79.4409 132.454 79.4409C112.159 79.4409 95.707 95.8931 95.707 116.188C95.707 136.483 112.159 152.935 132.454 152.935Z" fill="#FFC325" />
                                            <g id="Group_13">
                                                <g id="Group_14">
                                                    <g id="Group_15">
                                                        <g id="Group_16">
                                                            <g id="Group_17">
                                                                <path id="Vector_25" d="M132.279 102.773C138.06 102.841 142.802 98.209 142.87 92.428C142.907 89.291 141.535 86.302 139.131 84.285C138.689 83.92 138.013 83.479 138.028 82.565C138.028 82.537 137.982 80.277 137.982 80.277H126.97C126.97 80.277 126.923 82.625 126.923 82.652C126.923 83.457 126.3 83.804 125.841 84.167C123.405 86.12 121.971 89.06 121.933 92.182C121.865 97.964 126.497 102.705 132.279 102.773Z" fill="#FFC325" />
                                                                <path id="Vector_26" opacity="0.4" d="M132.279 102.773C138.06 102.841 142.802 98.209 142.87 92.428C142.907 89.291 141.535 86.302 139.131 84.285C138.689 83.92 138.013 83.479 138.028 82.565C138.028 82.537 137.982 80.277 137.982 80.277H126.97C126.97 80.277 126.923 82.625 126.923 82.652C126.923 83.457 126.3 83.804 125.841 84.167C123.405 86.12 121.971 89.06 121.933 92.182C121.865 97.964 126.497 102.705 132.279 102.773Z" fill="white" />
                                                                <path id="Vector_27" opacity="0.2" d="M127.074 98.262C127.074 96.224 129.459 94.567 132.417 94.567C135.375 94.567 137.76 96.223 137.76 98.262C137.76 100.301 135.375 101.96 132.417 101.96C129.46 101.96 127.074 100.304 127.074 98.262Z" fill="white" />
                                                            </g>
                                                            <path id="Vector_28" d="M140.378 88.325C141.289 89.887 141.651 91.762 141.387 93.551C141.123 95.34 140.235 97.031 138.911 98.263" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                            <path id="Vector_29" d="M134.666 82.565C133.863 85.298 133.722 88.281 134.262 91.097C134.349 91.552 134.555 92.1 134.963 92.111C135.329 92.12 135.568 91.671 135.647 91.264C135.926 89.825 135.18 88.364 134.226 87.37C133.709 86.832 133.083 86.363 132.384 86.329C131.682 86.295 131.013 86.71 130.505 87.263C129.533 88.321 129.049 89.978 129.401 91.457C129.55 92.082 129.994 92.754 130.552 92.634C130.888 92.562 131.134 92.207 131.221 91.829C131.308 91.451 131.265 91.053 131.216 90.667C130.861 87.884 130.181 85.154 129.201 82.573" stroke="#263238" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                    </g>
                                                    <path id="Vector_30" d="M126.276 79.613H138.618C138.931 79.613 139.184 79.866 139.184 80.179V80.375C139.184 80.688 138.931 80.941 138.618 80.941H126.276C125.963 80.941 125.71 80.687 125.71 80.375V80.179C125.71 79.866 125.964 79.613 126.276 79.613Z" fill="#263238" />
                                                    <path id="Vector_31" opacity="0.3" d="M126.276 79.613H138.618C138.931 79.613 139.184 79.866 139.184 80.179V80.375C139.184 80.688 138.931 80.941 138.618 80.941H126.276C125.963 80.941 125.71 80.687 125.71 80.375V80.179C125.71 79.866 125.964 79.613 126.276 79.613Z" fill="white" />
                                                    <path id="Vector_32" d="M126.477 78.446H138.419C138.722 78.446 138.967 78.691 138.967 78.994V79.184C138.967 79.487 138.722 79.732 138.419 79.732H126.477C126.174 79.732 125.929 79.487 125.929 79.184V78.994C125.928 78.692 126.174 78.446 126.477 78.446Z" fill="#263238" />
                                                    <path id="Vector_33" opacity="0.3" d="M126.477 78.446H138.419C138.722 78.446 138.967 78.691 138.967 78.994V79.184C138.967 79.487 138.722 79.732 138.419 79.732H126.477C126.174 79.732 125.929 79.487 125.929 79.184V78.994C125.928 78.692 126.174 78.446 126.477 78.446Z" fill="white" />
                                                    <path id="Vector_34" d="M127.272 76.128H137.622C137.925 76.128 138.17 76.373 138.17 76.676V76.866C138.17 77.169 137.925 77.414 137.622 77.414H127.272C126.969 77.414 126.724 77.169 126.724 76.866V76.676C126.724 76.373 126.97 76.128 127.272 76.128Z" fill="#263238" />
                                                    <path id="Vector_35" opacity="0.3" d="M127.272 76.128H137.622C137.925 76.128 138.17 76.373 138.17 76.676V76.866C138.17 77.169 137.925 77.414 137.622 77.414H127.272C126.969 77.414 126.724 77.169 126.724 76.866V76.676C126.724 76.373 126.97 76.128 127.272 76.128Z" fill="white" />
                                                    <path id="Vector_36" d="M126.653 77.3069H138.243C138.546 77.3069 138.791 77.5519 138.791 77.8549V78.0449C138.791 78.3479 138.546 78.5929 138.243 78.5929H126.653C126.35 78.5929 126.105 78.3479 126.105 78.0449V77.8549C126.105 77.5519 126.35 77.3069 126.653 77.3069Z" fill="#263238" />
                                                    <path id="Vector_37" opacity="0.3" d="M126.653 77.3069H138.243C138.546 77.3069 138.791 77.5519 138.791 77.8549V78.0449C138.791 78.3479 138.546 78.5929 138.243 78.5929H126.653C126.35 78.5929 126.105 78.3479 126.105 78.0449V77.8549C126.105 77.5519 126.35 77.3069 126.653 77.3069Z" fill="white" />
                                                </g>
                                            </g>
                                            <path id="Vector_38" d="M149.319 72.7839H115.484V77.9499H149.319V72.7839Z" fill="#263238" />
                                            <path id="Vector_39" d="M139.757 78.98H125.047V66.35C125.047 62.888 127.854 60.081 131.316 60.081H133.489C136.951 60.081 139.758 62.888 139.758 66.35V78.98H139.757Z" fill="#263238" />
                                            <g id="Group_18">
                                                <g id="Group_19">
                                                    <path id="Vector_40" d="M133.151 63.518C133.151 49.505 133.151 35.491 133.151 21.478C133.151 15.858 133.151 10.237 133.151 4.61696C133.151 3.65196 131.651 3.64996 131.651 4.61696C131.651 18.63 131.651 32.644 131.651 46.657C131.651 52.277 131.651 57.898 131.651 63.518C131.651 64.483 133.151 64.485 133.151 63.518Z" fill="#263238" />
                                                </g>
                                            </g>
                                            <path id="Vector_41" opacity="0.5" d="M151.097 75.2579L115.179 74.6689C98.64 81.4689 86.994 97.74 86.994 116.731C86.994 141.838 107.347 162.191 132.454 162.191C157.561 162.191 177.914 141.838 177.914 116.731C177.914 98.268 166.907 82.3759 151.097 75.2579Z" fill="#FFC325" />
                                            <g id="Group_20" opacity="0.2">
                                                <path id="Vector_42" d="M167.252 87.4869C162.879 82.2889 157.368 78.0809 151.097 75.2579L115.179 74.6689C98.64 81.4689 86.994 97.74 86.994 116.731C86.994 126.646 90.178 135.813 95.566 143.284C104.564 146.019 114.547 145.222 123.344 141.779C133.299 137.883 141.803 130.816 148.523 122.502C155.243 114.188 160.278 104.64 164.61 94.867C165.663 92.493 166.687 90.0139 167.252 87.4869Z" fill="white" />
                                            </g>
                                            <g id="Group_21" opacity="0.3">
                                                <path id="Vector_43" d="M112.357 83.571C112.539 82.245 110.972 81.35 109.86 82.094C103.428 86.397 98.282 92.604 95.262 99.73C92.081 107.236 91.274 115.728 92.984 123.699C93.17 124.565 93.398 125.454 93.941 126.154C94.484 126.854 95.423 127.32 96.269 127.057C97.286 126.741 97.737 125.592 97.971 124.536C98.273 123.177 98.463 121.795 98.59 120.409C99.166 114.137 99.533 107.772 101.189 101.681C102.655 96.291 105.211 91.065 109.32 87.282C110.106 86.558 111.319 85.634 111.924 84.754C112.126 84.46 112.294 84.028 112.357 83.571Z" fill="white" />
                                            </g>
                                            <path id="Vector_44" opacity="0.2" d="M139.756 71.572H125.046V72.785H139.756V71.572Z" fill="black" />
                                        </g>
                                        <path id="Vector_45" d="M165.827 8.79998H23.686L24.686 0.432983H166.827L165.827 8.79998Z" fill="#263238" />
                                    </g>
                                </g>
                            </svg>

                            <svg id="wed-clock" viewBox="0 0 330 364" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                                                        <path id="Vector_6" d="M255.815 289.192C290.551 254.456 290.551 198.138 255.815 163.402C221.079 128.666 164.76 128.666 130.024 163.402C95.2884 198.138 95.2884 254.456 130.024 289.192C164.76 323.928 221.079 323.928 255.815 289.192Z" fill="#FFF230" fillOpacity="0.37" />
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

                            <svg id="floor-lamp" viewBox="0 0 138 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group 1">
                                    <g id="Floor_lamp">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" d="M135.533 89.733H2.30099L5.30099 0H132.533L135.533 89.733Z" fill="#FFBC10" />
                                                <path id="Vector_2" opacity="0.4" d="M121.606 89.733H92.014L89.014 0H118.606L121.606 89.733Z" fill="white" />
                                            </g>
                                            <g id="Group_3">
                                                <g id="Group_4">
                                                    <g id="Group_5">
                                                        <path id="Vector_3" d="M71.307 393.753H66.526L62.922 117.555H74.912L71.307 393.753Z" fill="#FFE59D" />

                                                    </g>
                                                    <g id="Group_6">
                                                        <path id="Vector_6" d="M4.78098 393.753H0L50.932 117.555H62.922L4.78098 393.753Z" fill="#FFE59D" />

                                                    </g>
                                                    <g id="Group_7">
                                                        <path id="Vector_9" d="M133.053 393.753H137.834L86.902 117.555H74.912L133.053 393.753Z" fill="#FFE59D" />

                                                    </g>
                                                </g>
                                                <g id="Group_8">
                                                    <path id="Vector_12" d="M88.418 106.18H49.416V117.555H88.418V106.18Z" fill="#FFE59D" />

                                                </g>
                                                <g id="Group_9">
                                                    <path id="Vector_14" d="M72.893 89.733H64.941V106.18H72.893V89.733Z" fill="#FFE59D" />

                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                            <svg id="sofa" viewBox="0 0 224 222" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Sofa">
                                    <g id="Group">
                                        <g id="Group_2">
                                            <g id="Group_3">
                                                <path id="Vector" d="M22.628 150.083L0 219.97H6.485L34.226 160.343L22.628 150.083Z" fill="#FFE59D" />
                                            </g>
                                            <path id="Vector_2" d="M185.699 72.324L208.751 219.97L219.281 219.699L201.776 70.561L185.699 72.324Z" fill="#FFE59D" />
                                            <path id="Vector_3" d="M7.832 34.311C7.832 34.311 12.516 148.351 20.601 156.343C34.809 170.387 79.858 162.837 98.603 163.388C117.348 163.939 209.483 163.012 211.137 160.806C212.791 158.601 210.402 148.441 210.402 148.441L136.523 142.928L116.124 26.597C116.124 26.597 7.405 28.404 7.832 34.311Z" fill="#FFE59D" />
                                            <g id="Group_4">
                                                <path id="Vector_4" d="M20.372 5.533C20.372 5.533 29.002 120.983 33.059 125.04C37.116 129.097 162.368 145.685 162.368 145.685L144.158 4.64799C143.815 1.99 141.552 0.00100708 138.872 0.00100708H31.805L20.372 5.533Z" fill="#FFBC10" />
                                                <path id="Vector_5" opacity="0.3" d="M33.059 125.039C33.592 125.572 36.235 126.324 40.397 127.224C44.065 126.558 47.226 125.352 47.226 125.352L31.805 0L20.371 5.532C20.371 5.532 29.002 120.982 33.059 125.039Z" fill="#FFE59D" />
                                            </g>
                                            <g id="Group_5">
                                                <path id="Vector_6" d="M90.12 149.004C90.12 149.004 34.081 149.155 32.953 145.685C31.825 142.215 30.002 120.605 34.797 119.13C39.592 117.655 154.134 113.012 154.199 113.515C154.264 114.018 216.626 114.704 221.052 120.237C225.478 125.769 222.941 147.489 221.052 147.489C220.167 147.488 90.12 149.004 90.12 149.004Z" fill="#FFBC10" />
                                                <g id="Group_6">
                                                    <g id="Group_7" opacity="0.3">
                                                        <path id="Vector_7" d="M92.577 124.44H92.58C135.543 124.851 178.527 123.575 221.347 120.658C221.251 120.512 221.155 120.365 221.052 120.236C217.491 115.785 176.438 114.471 160.487 113.866L79.406 116.346C64.449 117.051 50.833 117.768 42.645 118.347L92.581 124.424C92.579 124.429 92.578 124.435 92.577 124.44Z" fill="white" fillOpacity="0.7" />
                                                    </g>
                                                    <g id="Group_8" opacity="0.3">
                                                        <path id="Vector_8" d="M92.58 124.424L42.644 118.347C38.29 118.655 35.468 118.923 34.797 119.13C30.002 120.605 31.824 142.215 32.953 145.685C34.081 149.155 90.12 149.004 90.12 149.004C90.12 149.004 91.372 148.99 93.608 148.963C90.279 141.684 91.06 131.082 92.577 124.439C92.578 124.435 92.579 124.429 92.58 124.424Z" fill="#FFE59D" />
                                                    </g>
                                                </g>
                                            </g>
                                            <path id="Vector_9" opacity="0.3" d="M72.112 164.335L53.877 164.058L53.546 148.351L72.112 148.825V164.335Z" fill="#FFE59D" />
                                            <path id="Vector_10" d="M53.546 79.056L59.228 221.11H69.718V79.269L53.546 79.056Z" fill="#FFE59D" />
                                            <path id="Vector_11" d="M144.82 150.083L119.173 219.97H125.658L156.418 160.343L144.82 150.083Z" fill="#FFE59D" />
                                            <path id="Vector_12" d="M152.89 71.638L207.462 58.98C210.314 58.289 213.177 60.078 213.806 62.945C214.41 65.698 212.726 68.434 209.997 69.136L154.348 82.939L152.89 71.638Z" fill="#FFE59D" />
                                            <path id="Vector_13" d="M3.242 90.879L81.24 68.921C84.092 68.23 86.955 70.019 87.584 72.886C88.188 75.639 86.504 78.375 83.775 79.077L4.701 102.179L3.242 90.879Z" fill="#FFE59D" />
                                            <path id="Vector_14" opacity="0.3" d="M186.18 75.258L201.858 71.228L202.59 77.175L187.218 81.599L186.369 76.413" fill="#FFE59D" />
                                            <path id="Vector_15" opacity="0.3" d="M53.864 87.817L54.123 94.382L69.718 89.894V83.184L53.864 87.817Z" fill="#FFE59D" />
                                            <path id="Vector_16" opacity="0.3" d="M12.516 99.896L13.325 107.264L54.655 94.382L56.108 87.16L12.516 99.896Z" fill="#FFE59D" />
                                            <path id="Vector_17" opacity="0.3" d="M139.852 163.425L154.927 163.232L151.423 170.026L137.549 170.247L139.852 163.425Z" fill="#FFE59D" />
                                            <path id="Vector_18" opacity="0.3" d="M200.384 161.992L212.953 161.457L213.956 169.616H201.632L200.384 161.992Z" fill="#FFE59D" />
                                        </g>
                                        <g id="Group_9" opacity="0.2">
                                            <path id="Vector_19" d="M136.24 3.92902C106.357 3.92902 66.569 4.92001 36.686 4.92001C36.686 4.92001 44.281 13.01 78.291 10.203C112.301 7.39602 136.24 3.92902 136.24 3.92902Z" fill="white" fillOpacity="0.7" />
                                        </g>
                                        <g id="Group_10">
                                            <g id="Group_11">
                                                <path id="Vector_20" d="M111.9 81.078C109.497 89.869 109.84 99.508 113.539 107.838C114.945 111.004 116.804 113.944 118.657 116.872C118.937 117.314 119.236 117.775 119.698 118.021C120.019 118.193 120.39 118.243 120.751 118.29C134.429 120.063 148.214 120.835 161.985 121.606C164.559 121.75 167.134 121.894 169.708 122.038C173.752 122.264 178.403 122.25 181.071 119.203C182.908 117.104 183.257 114.067 182.933 111.296C182.609 108.525 181.708 105.848 181.371 103.079C180.352 94.704 184.51 86.704 187.146 78.69C188.018 76.039 188.736 73.292 188.675 70.502C188.614 67.712 187.694 64.85 185.69 62.908C182.36 59.68 177.143 59.753 172.511 59.973C167.257 60.223 162 60.399 156.741 60.499C153.392 60.563 150.018 60.595 146.724 59.989C143.225 59.345 139.895 57.995 136.432 57.177C133.48 56.479 129.353 55.859 126.526 57.366C124.175 58.619 122.229 61.647 120.639 63.738C116.698 68.917 113.619 74.787 111.9 81.078Z" fill="#FFBC10" />
                                                <path id="Vector_21" opacity="0.7" d="M111.9 81.078C109.497 89.869 109.84 99.508 113.539 107.838C114.945 111.004 116.804 113.944 118.657 116.872C118.937 117.314 119.236 117.775 119.698 118.021C120.019 118.193 120.39 118.243 120.751 118.29C134.429 120.063 148.214 120.835 161.985 121.606C164.559 121.75 167.134 121.894 169.708 122.038C173.752 122.264 178.403 122.25 181.071 119.203C182.908 117.104 183.257 114.067 182.933 111.296C182.609 108.525 181.708 105.848 181.371 103.079C180.352 94.704 184.51 86.704 187.146 78.69C188.018 76.039 188.736 73.292 188.675 70.502C188.614 67.712 187.694 64.85 185.69 62.908C182.36 59.68 177.143 59.753 172.511 59.973C167.257 60.223 162 60.399 156.741 60.499C153.392 60.563 150.018 60.595 146.724 59.989C143.225 59.345 139.895 57.995 136.432 57.177C133.48 56.479 129.353 55.859 126.526 57.366C124.175 58.619 122.229 61.647 120.639 63.738C116.698 68.917 113.619 74.787 111.9 81.078Z" fill="white" fillOpacity="0.7" />
                                                <g id="Group_12" opacity="0.3">
                                                    <g id="Group_13">
                                                        <path id="Vector_22" d="M182.421 71.953C174.713 84.986 173.078 101.22 178.05 115.525C178.208 115.978 178.932 115.783 178.773 115.326C173.863 101.202 175.455 85.205 183.068 72.332C183.315 71.915 182.667 71.537 182.421 71.953Z" fill="#FFE59D" />
                                                    </g>
                                                </g>
                                                <g id="Group_14" opacity="0.3">
                                                    <g id="Group_15">
                                                        <path id="Vector_23" d="M160.367 103.737C164.267 109.723 170.181 113.881 175.963 117.886C176.361 118.161 176.736 117.512 176.341 117.238C170.669 113.309 164.841 109.231 161.015 103.358C160.752 102.956 160.102 103.331 160.367 103.737Z" fill="#FFE59D" />
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="Group_16">
                                                <g id="Group_17">
                                                    <path id="Vector_24" d="M135.311 61.956C148.84 64.964 162.881 65.138 176.481 62.473C176.954 62.38 176.754 61.657 176.282 61.75C162.818 64.389 148.904 64.21 135.511 61.233C135.04 61.128 134.839 61.851 135.311 61.956Z" fill="white" fillOpacity="0.7" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>

                            <div id="sub-tag-wed">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Your Story Told Like None Other.</p>
                            </div>

                            <button id="now-booking-wed" onClick={() => {
                                gotowedportfolio("section-7")
                            }}>
                                Our Portfolio
                            </button>
                        </div>
                        <div id="section-3" className="full-screen panels">

                            <div className="akaar-wedstyle">
                                <h1 id="akaar-fashion">FASHION</h1>
                            </div>
                            <svg id="cealling-lamp" viewBox="0 0 188 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Lamp_2">
                                    <g id="Group">
                                        <g id="Group_2">
                                            <path id="Vector" opacity="0.1" d="M55.56 265.248C86.098 265.248 110.854 240.492 110.854 209.954C110.854 179.416 86.098 154.66 55.56 154.66C25.022 154.66 0.266006 179.416 0.266006 209.954C0.266006 240.492 25.022 265.248 55.56 265.248Z" fill="#FF1010" />
                                            <path id="Vector_2" opacity="0.3" d="M55.56 242.979C75.8498 242.979 92.298 226.531 92.298 206.241C92.298 185.951 75.8498 169.503 55.56 169.503C35.2702 169.503 18.822 185.951 18.822 206.241C18.822 226.531 35.2702 242.979 55.56 242.979Z" fill="#FF1010" />
                                            <g id="Group_3">
                                                <g id="Group_4">
                                                    <g id="Group_5">
                                                        <g id="Group_6">
                                                            <g id="Group_7">
                                                                <path id="Vector_3" d="M55.385 192.83C61.165 192.898 65.906 188.267 65.974 182.487C66.011 179.35 64.639 176.363 62.236 174.346C61.794 173.981 61.119 173.54 61.134 172.626C61.134 172.598 61.087 170.339 61.087 170.339H50.078C50.078 170.339 50.031 172.686 50.031 172.713C50.031 173.518 49.408 173.865 48.949 174.228C46.514 176.18 45.08 179.12 45.042 182.241C44.974 188.021 49.605 192.762 55.385 192.83Z" fill="#FF1010" />
                                                                <path id="Vector_4" opacity="0.4" d="M55.385 192.83C61.165 192.898 65.906 188.267 65.974 182.487C66.011 179.35 64.639 176.363 62.236 174.346C61.794 173.981 61.119 173.54 61.134 172.626C61.134 172.598 61.087 170.339 61.087 170.339H50.078C50.078 170.339 50.031 172.686 50.031 172.713C50.031 173.518 49.408 173.865 48.949 174.228C46.514 176.18 45.08 179.12 45.042 182.241C44.974 188.021 49.605 192.762 55.385 192.83Z" fill="white" />
                                                                <path id="Vector_5" opacity="0.2" d="M50.182 188.32C50.182 186.282 52.567 184.626 55.524 184.626C58.481 184.626 60.866 186.282 60.866 188.32C60.866 190.358 58.481 192.017 55.524 192.017C52.567 192.017 50.182 190.361 50.182 188.32Z" fill="white" />
                                                            </g>
                                                            <path id="Vector_6" d="M63.483 178.385C64.394 179.947 64.756 181.822 64.492 183.61C64.228 185.399 63.34 187.089 62.017 188.321" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                            <path id="Vector_7" d="M57.771 172.626C56.968 175.359 56.827 178.34 57.367 181.156C57.454 181.611 57.66 182.159 58.068 182.17C58.433 182.179 58.673 181.73 58.752 181.323C59.031 179.885 58.285 178.423 57.331 177.43C56.815 176.892 56.188 176.423 55.49 176.389C54.789 176.355 54.119 176.77 53.612 177.323C52.64 178.381 52.156 180.038 52.508 181.516C52.657 182.141 53.1 182.813 53.659 182.693C53.995 182.621 54.241 182.266 54.328 181.889C54.415 181.512 54.372 181.113 54.323 180.727C53.968 177.944 53.288 175.216 52.309 172.635" stroke="#263238" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                    </g>
                                                    <path id="Vector_8" d="M49.384 169.675H61.723C62.036 169.675 62.289 169.929 62.289 170.241V170.437C62.289 170.75 62.035 171.003 61.723 171.003H49.384C49.071 171.003 48.818 170.749 48.818 170.437V170.241C48.818 169.928 49.071 169.675 49.384 169.675Z" fill="#263238" />
                                                    <path id="Vector_9" opacity="0.3" d="M49.384 169.675H61.723C62.036 169.675 62.289 169.929 62.289 170.241V170.437C62.289 170.75 62.035 171.003 61.723 171.003H49.384C49.071 171.003 48.818 170.749 48.818 170.437V170.241C48.818 169.928 49.071 169.675 49.384 169.675Z" fill="white" />
                                                    <path id="Vector_10" d="M49.584 168.509H61.523C61.826 168.509 62.071 168.754 62.071 169.057V169.247C62.071 169.55 61.826 169.795 61.523 169.795H49.584C49.281 169.795 49.036 169.55 49.036 169.247V169.057C49.036 168.754 49.282 168.509 49.584 168.509Z" fill="#263238" />
                                                    <path id="Vector_11" opacity="0.3" d="M49.584 168.509H61.523C61.826 168.509 62.071 168.754 62.071 169.057V169.247C62.071 169.55 61.826 169.795 61.523 169.795H49.584C49.281 169.795 49.036 169.55 49.036 169.247V169.057C49.036 168.754 49.282 168.509 49.584 168.509Z" fill="white" />
                                                    <path id="Vector_12" d="M50.38 166.191H60.727C61.03 166.191 61.275 166.436 61.275 166.739V166.929C61.275 167.232 61.03 167.477 60.727 167.477H50.38C50.077 167.477 49.832 167.232 49.832 166.929V166.739C49.832 166.436 50.077 166.191 50.38 166.191Z" fill="#263238" />
                                                    <path id="Vector_13" opacity="0.3" d="M50.38 166.191H60.727C61.03 166.191 61.275 166.436 61.275 166.739V166.929C61.275 167.232 61.03 167.477 60.727 167.477H50.38C50.077 167.477 49.832 167.232 49.832 166.929V166.739C49.832 166.436 50.077 166.191 50.38 166.191Z" fill="white" />
                                                    <path id="Vector_14" d="M49.76 167.37H61.347C61.65 167.37 61.895 167.615 61.895 167.918V168.108C61.895 168.411 61.65 168.656 61.347 168.656H49.76C49.457 168.656 49.212 168.411 49.212 168.108V167.918C49.212 167.615 49.458 167.37 49.76 167.37Z" fill="#263238" />
                                                    <path id="Vector_15" opacity="0.3" d="M49.76 167.37H61.347C61.65 167.37 61.895 167.615 61.895 167.918V168.108C61.895 168.411 61.65 168.656 61.347 168.656H49.76C49.457 168.656 49.212 168.411 49.212 168.108V167.918C49.212 167.615 49.458 167.37 49.76 167.37Z" fill="white" />
                                                </g>
                                            </g>
                                            <path id="Vector_16" d="M72.421 162.848H38.594V168.013H72.421V162.848Z" fill="#263238" />
                                            <path id="Vector_17" d="M62.861 169.042H48.154V156.416C48.154 152.954 50.961 150.147 54.423 150.147H56.593C60.055 150.147 62.862 152.954 62.862 156.416V169.042H62.861Z" fill="#263238" />
                                            <g id="Group_8">
                                                <g id="Group_9">
                                                    <path id="Vector_18" d="M56.258 153.584C56.258 135.53 56.258 117.477 56.258 99.423C56.258 78.384 56.258 57.346 56.258 36.307C56.258 27.138 56.258 17.969 56.258 8.8C56.258 7.835 54.758 7.833 54.758 8.8C54.758 26.854 54.758 44.907 54.758 62.961C54.758 84 54.758 105.038 54.758 126.077C54.758 135.246 54.758 144.415 54.758 153.584C54.758 154.549 56.258 154.551 56.258 153.584Z" fill="#263238" />
                                                </g>
                                            </g>
                                            <path id="Vector_19" opacity="0.5" d="M74.199 165.321L38.289 164.732C21.754 171.53 10.111 187.798 10.111 206.784C10.111 231.885 30.459 252.233 55.56 252.233C80.661 252.233 101.009 231.885 101.009 206.784C101.009 188.326 90.005 172.438 74.199 165.321Z" fill="#FF1010" />
                                            <g id="Group_10" opacity="0.2">
                                                <path id="Vector_20" d="M90.35 177.548C85.978 172.352 80.469 168.145 74.199 165.322L38.289 164.733C21.754 171.531 10.111 187.799 10.111 206.785C10.111 216.698 13.294 225.862 18.681 233.332C27.676 236.067 37.657 235.27 46.452 231.828C56.404 227.933 64.907 220.867 71.625 212.556C78.343 204.244 83.378 194.698 87.708 184.927C88.761 182.552 89.785 180.074 90.35 177.548Z" fill="white" />
                                            </g>
                                            <g id="Group_11" opacity="0.3">
                                                <path id="Vector_21" d="M35.468 173.632C35.65 172.307 34.084 171.412 32.972 172.155C26.542 176.457 21.397 182.662 18.378 189.787C15.198 197.292 14.391 205.781 16.101 213.751C16.287 214.617 16.515 215.505 17.058 216.205C17.601 216.905 18.54 217.371 19.386 217.108C20.403 216.792 20.853 215.643 21.088 214.588C21.39 213.229 21.579 211.848 21.707 210.462C22.283 204.192 22.65 197.828 24.306 191.739C25.771 186.35 28.327 181.126 32.435 177.343C33.221 176.619 34.433 175.696 35.038 174.815C35.238 174.521 35.405 174.089 35.468 173.632Z" fill="white" />
                                            </g>
                                            <path id="Vector_22" opacity="0.2" d="M62.861 161.636H48.154V162.848H62.861V161.636Z" fill="black" />
                                        </g>
                                        <g id="Group_12">
                                            <path id="Vector_23s" opacity="0.1" d="M132.454 175.21C163 175.21 187.762 150.448 187.762 119.902C187.762 89.3562 163 64.594 132.454 64.594C101.908 64.594 77.146 89.3562 77.146 119.902C77.146 150.448 101.908 175.21 132.454 175.21Z" fill="#FF1010" />
                                            <path id="Vector_24" opacity="0.3" d="M132.454 152.935C152.749 152.935 169.201 136.483 169.201 116.188C169.201 95.8931 152.749 79.4409 132.454 79.4409C112.159 79.4409 95.707 95.8931 95.707 116.188C95.707 136.483 112.159 152.935 132.454 152.935Z" fill="#FF1010" />
                                            <g id="Group_13">
                                                <g id="Group_14">
                                                    <g id="Group_15">
                                                        <g id="Group_16">
                                                            <g id="Group_17">
                                                                <path id="Vector_25" d="M132.279 102.773C138.06 102.841 142.802 98.209 142.87 92.428C142.907 89.291 141.535 86.302 139.131 84.285C138.689 83.92 138.013 83.479 138.028 82.565C138.028 82.537 137.982 80.277 137.982 80.277H126.97C126.97 80.277 126.923 82.625 126.923 82.652C126.923 83.457 126.3 83.804 125.841 84.167C123.405 86.12 121.971 89.06 121.933 92.182C121.865 97.964 126.497 102.705 132.279 102.773Z" fill="#FF1010" />
                                                                <path id="Vector_26" opacity="0.4" d="M132.279 102.773C138.06 102.841 142.802 98.209 142.87 92.428C142.907 89.291 141.535 86.302 139.131 84.285C138.689 83.92 138.013 83.479 138.028 82.565C138.028 82.537 137.982 80.277 137.982 80.277H126.97C126.97 80.277 126.923 82.625 126.923 82.652C126.923 83.457 126.3 83.804 125.841 84.167C123.405 86.12 121.971 89.06 121.933 92.182C121.865 97.964 126.497 102.705 132.279 102.773Z" fill="white" />
                                                                <path id="Vector_27" opacity="0.2" d="M127.074 98.262C127.074 96.224 129.459 94.567 132.417 94.567C135.375 94.567 137.76 96.223 137.76 98.262C137.76 100.301 135.375 101.96 132.417 101.96C129.46 101.96 127.074 100.304 127.074 98.262Z" fill="white" />
                                                            </g>
                                                            <path id="Vector_28" d="M140.378 88.325C141.289 89.887 141.651 91.762 141.387 93.551C141.123 95.34 140.235 97.031 138.911 98.263" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                            <path id="Vector_29" d="M134.666 82.565C133.863 85.298 133.722 88.281 134.262 91.097C134.349 91.552 134.555 92.1 134.963 92.111C135.329 92.12 135.568 91.671 135.647 91.264C135.926 89.825 135.18 88.364 134.226 87.37C133.709 86.832 133.083 86.363 132.384 86.329C131.682 86.295 131.013 86.71 130.505 87.263C129.533 88.321 129.049 89.978 129.401 91.457C129.55 92.082 129.994 92.754 130.552 92.634C130.888 92.562 131.134 92.207 131.221 91.829C131.308 91.451 131.265 91.053 131.216 90.667C130.861 87.884 130.181 85.154 129.201 82.573" stroke="#263238" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                    </g>
                                                    <path id="Vector_30" d="M126.276 79.613H138.618C138.931 79.613 139.184 79.866 139.184 80.179V80.375C139.184 80.688 138.931 80.941 138.618 80.941H126.276C125.963 80.941 125.71 80.687 125.71 80.375V80.179C125.71 79.866 125.964 79.613 126.276 79.613Z" fill="#263238" />
                                                    <path id="Vector_31" opacity="0.3" d="M126.276 79.613H138.618C138.931 79.613 139.184 79.866 139.184 80.179V80.375C139.184 80.688 138.931 80.941 138.618 80.941H126.276C125.963 80.941 125.71 80.687 125.71 80.375V80.179C125.71 79.866 125.964 79.613 126.276 79.613Z" fill="white" />
                                                    <path id="Vector_32" d="M126.477 78.446H138.419C138.722 78.446 138.967 78.691 138.967 78.994V79.184C138.967 79.487 138.722 79.732 138.419 79.732H126.477C126.174 79.732 125.929 79.487 125.929 79.184V78.994C125.928 78.692 126.174 78.446 126.477 78.446Z" fill="#263238" />
                                                    <path id="Vector_33" opacity="0.3" d="M126.477 78.446H138.419C138.722 78.446 138.967 78.691 138.967 78.994V79.184C138.967 79.487 138.722 79.732 138.419 79.732H126.477C126.174 79.732 125.929 79.487 125.929 79.184V78.994C125.928 78.692 126.174 78.446 126.477 78.446Z" fill="white" />
                                                    <path id="Vector_34" d="M127.272 76.128H137.622C137.925 76.128 138.17 76.373 138.17 76.676V76.866C138.17 77.169 137.925 77.414 137.622 77.414H127.272C126.969 77.414 126.724 77.169 126.724 76.866V76.676C126.724 76.373 126.97 76.128 127.272 76.128Z" fill="#263238" />
                                                    <path id="Vector_35" opacity="0.3" d="M127.272 76.128H137.622C137.925 76.128 138.17 76.373 138.17 76.676V76.866C138.17 77.169 137.925 77.414 137.622 77.414H127.272C126.969 77.414 126.724 77.169 126.724 76.866V76.676C126.724 76.373 126.97 76.128 127.272 76.128Z" fill="white" />
                                                    <path id="Vector_36" d="M126.653 77.3069H138.243C138.546 77.3069 138.791 77.5519 138.791 77.8549V78.0449C138.791 78.3479 138.546 78.5929 138.243 78.5929H126.653C126.35 78.5929 126.105 78.3479 126.105 78.0449V77.8549C126.105 77.5519 126.35 77.3069 126.653 77.3069Z" fill="#263238" />
                                                    <path id="Vector_37" opacity="0.3" d="M126.653 77.3069H138.243C138.546 77.3069 138.791 77.5519 138.791 77.8549V78.0449C138.791 78.3479 138.546 78.5929 138.243 78.5929H126.653C126.35 78.5929 126.105 78.3479 126.105 78.0449V77.8549C126.105 77.5519 126.35 77.3069 126.653 77.3069Z" fill="white" />
                                                </g>
                                            </g>
                                            <path id="Vector_38" d="M149.319 72.7839H115.484V77.9499H149.319V72.7839Z" fill="#263238" />
                                            <path id="Vector_39" d="M139.757 78.98H125.047V66.35C125.047 62.888 127.854 60.081 131.316 60.081H133.489C136.951 60.081 139.758 62.888 139.758 66.35V78.98H139.757Z" fill="#263238" />
                                            <g id="Group_18">
                                                <g id="Group_19">
                                                    <path id="Vector_40" d="M133.151 63.518C133.151 49.505 133.151 35.491 133.151 21.478C133.151 15.858 133.151 10.237 133.151 4.61696C133.151 3.65196 131.651 3.64996 131.651 4.61696C131.651 18.63 131.651 32.644 131.651 46.657C131.651 52.277 131.651 57.898 131.651 63.518C131.651 64.483 133.151 64.485 133.151 63.518Z" fill="#263238" />
                                                </g>
                                            </g>
                                            <path id="Vector_41" opacity="0.5" d="M151.097 75.2579L115.179 74.6689C98.64 81.4689 86.994 97.74 86.994 116.731C86.994 141.838 107.347 162.191 132.454 162.191C157.561 162.191 177.914 141.838 177.914 116.731C177.914 98.268 166.907 82.3759 151.097 75.2579Z" fill="#FF1010" />
                                            <g id="Group_20" opacity="0.2">
                                                <path id="Vector_42" d="M167.252 87.4869C162.879 82.2889 157.368 78.0809 151.097 75.2579L115.179 74.6689C98.64 81.4689 86.994 97.74 86.994 116.731C86.994 126.646 90.178 135.813 95.566 143.284C104.564 146.019 114.547 145.222 123.344 141.779C133.299 137.883 141.803 130.816 148.523 122.502C155.243 114.188 160.278 104.64 164.61 94.867C165.663 92.493 166.687 90.0139 167.252 87.4869Z" fill="white" />
                                            </g>
                                            <g id="Group_21" opacity="0.3">
                                                <path id="Vector_43" d="M112.357 83.571C112.539 82.245 110.972 81.35 109.86 82.094C103.428 86.397 98.282 92.604 95.262 99.73C92.081 107.236 91.274 115.728 92.984 123.699C93.17 124.565 93.398 125.454 93.941 126.154C94.484 126.854 95.423 127.32 96.269 127.057C97.286 126.741 97.737 125.592 97.971 124.536C98.273 123.177 98.463 121.795 98.59 120.409C99.166 114.137 99.533 107.772 101.189 101.681C102.655 96.291 105.211 91.065 109.32 87.282C110.106 86.558 111.319 85.634 111.924 84.754C112.126 84.46 112.294 84.028 112.357 83.571Z" fill="white" />
                                            </g>
                                            <path id="Vector_44" opacity="0.2" d="M139.756 71.572H125.046V72.785H139.756V71.572Z" fill="black" />
                                        </g>
                                        <path id="Vector_45" d="M165.827 8.79998H23.686L24.686 0.432983H166.827L165.827 8.79998Z" fill="#263238" />
                                    </g>
                                </g>
                            </svg>

                            <svg id="mirror" viewBox="0 0 77 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="table">
                                    <g id="Group">
                                        <g id="Group_2">
                                            <g id="Group_3">
                                                <path id="Vector" d="M37.064 22.6281C36.896 22.4541 36.693 22.3161 36.434 22.3741C36.367 22.3891 36.305 22.4221 36.244 22.4541C35.831 22.6781 35.431 22.9261 35.073 23.2321C34.607 23.6311 34.209 24.1101 33.905 24.6441C33.367 25.5871 33.043 26.7731 32.08 27.2751L33.564 31.6851C35.153 31.1811 36.389 29.7061 36.608 28.0541C36.692 27.4151 36.635 26.7701 36.664 26.1291C36.689 25.5811 36.642 24.9691 36.941 24.4811C37.193 24.0691 37.518 23.9731 37.933 23.7831C37.962 23.7701 37.994 23.7521 38 23.7211C38.005 23.6941 37.988 23.6671 37.971 23.6451C37.787 23.4011 37.585 23.1701 37.369 22.9531C37.262 22.8451 37.165 22.7341 37.064 22.6281Z" fill="#87976D" />
                                                <path id="Vector_2" d="M14.905 26.8541C14.363 26.4741 13.775 26.1671 13.16 25.9451C12.853 25.8331 12.54 25.7442 12.224 25.6752C12.056 25.6362 11.898 25.5991 11.784 25.5911C11.665 25.5811 11.604 25.5991 11.569 25.6211L11.54 25.6431L11.507 25.6691L11.465 25.7052C11.409 25.7502 11.353 25.8041 11.298 25.8541C11.188 25.9601 11.079 26.0721 10.975 26.1911C10.766 26.4281 10.568 26.6852 10.384 26.9512C10.199 27.2172 10.028 27.4941 9.873 27.7751C9.796 27.9161 9.72198 28.0571 9.65398 28.1991C9.58598 28.3401 9.528 28.4752 9.472 28.6192C9.253 29.1892 9.10899 29.8081 9.09099 30.3681C9.08099 30.6461 9.111 30.9091 9.174 31.0941C9.204 31.1871 9.24398 31.2552 9.27898 31.2952L9.304 31.3201L9.32597 31.3381L9.34499 31.3541L9.373 31.3772L9.43199 31.4221C9.51299 31.4801 9.60298 31.5312 9.70198 31.5762C9.75198 31.5982 9.80098 31.6181 9.85698 31.6381C9.92798 31.6631 9.99799 31.6901 10.07 31.7131C10.356 31.8081 10.647 31.8871 10.941 31.9451C11.529 32.0621 12.128 32.1031 12.715 32.0691C13.394 32.0301 13.975 32.5481 14.014 33.2261C14.053 33.9041 13.535 34.4861 12.857 34.5251C12.813 34.5271 12.77 34.5281 12.728 34.5261L12.71 34.5251C11.911 34.4871 11.124 34.3471 10.371 34.1111C9.99399 33.9941 9.62697 33.8512 9.26997 33.6882C9.17997 33.6482 9.09298 33.6031 9.00398 33.5611C8.90198 33.5111 8.79499 33.4541 8.69399 33.3921C8.48999 33.2681 8.29198 33.1231 8.11098 32.9541C8.06598 32.9121 8.02098 32.8681 7.97798 32.8241L7.91399 32.7561L7.88298 32.7211L7.84499 32.6761C7.79499 32.6161 7.745 32.5551 7.704 32.4921C7.659 32.4291 7.62098 32.3661 7.58598 32.3011C7.44298 32.0431 7.35898 31.7821 7.30998 31.5381C7.21498 31.0471 7.235 30.6082 7.291 30.1962C7.411 29.3762 7.674 28.6501 8.024 27.9571C8.112 27.7861 8.21 27.6111 8.312 27.4501C8.413 27.2891 8.51799 27.1332 8.62599 26.9812C8.84299 26.6772 9.072 26.3871 9.317 26.1091C9.562 25.8311 9.82097 25.5641 10.102 25.3111C10.242 25.1841 10.39 25.0631 10.545 24.9451C10.625 24.8881 10.702 24.8291 10.788 24.7751L10.851 24.7341C10.872 24.7201 10.89 24.7081 10.926 24.6871C10.988 24.6481 11.056 24.6151 11.125 24.5861C11.265 24.5281 11.415 24.4981 11.553 24.4901C11.692 24.4821 11.819 24.4931 11.932 24.5121C12.161 24.5521 12.337 24.6111 12.504 24.6641C12.856 24.7801 13.199 24.9182 13.529 25.0802C14.191 25.4002 14.805 25.8081 15.353 26.2851C15.503 26.4161 15.519 26.6431 15.389 26.7931C15.267 26.9331 15.061 26.9571 14.912 26.8531L14.905 26.8541Z" fill="#C06C66" />
                                                <path id="Vector_3" d="M34.33 34.0701C34.268 34.2921 34.197 34.5111 34.119 34.7281C33.672 35.9591 32.97 37.1081 32.079 38.0301C31.864 38.2521 31.638 38.4611 31.403 38.6551C31.143 38.8701 30.871 39.0661 30.588 39.2401C27.816 40.9491 24.187 41.4201 20.996 41.1301C17.705 40.8321 13.952 39.4441 11.874 36.7411C10.661 35.1641 10.419 33.0211 10.854 31.0851C10.92 30.7901 11.002 30.5001 11.099 30.2181C11.188 29.9561 11.29 29.7011 11.404 29.4541C12.171 27.7901 13.316 26.4871 14.697 25.5121C19.037 22.4481 25.706 22.6351 30.292 25.0731C31.284 25.6011 32.188 26.2881 32.912 27.1191C33.129 27.3671 33.33 27.6271 33.511 27.8991C34.006 28.6391 34.364 29.4691 34.538 30.3791C34.559 30.4791 34.575 30.5811 34.59 30.6841C34.622 30.9021 34.643 31.1221 34.653 31.3441C34.699 32.2461 34.584 33.1731 34.33 34.0701Z" fill="#C06C66" />
                                                <path id="Vector_4" d="M34.652 31.3441C34.642 31.1221 34.621 30.9031 34.589 30.6841C34.574 30.5811 34.557 30.4801 34.537 30.3791C34.363 29.4691 34.005 28.6391 33.51 27.8991C33.329 27.6271 33.128 27.3671 32.911 27.1191C32.187 26.2891 31.284 25.6011 30.291 25.0731C26.245 22.9221 20.578 22.5251 16.319 24.5651C18.998 26.2591 22.393 26.7741 25.491 26.5941C26.317 26.5461 27.139 26.4521 27.941 26.3561C28.717 26.2641 29.497 26.3881 30.066 26.9671C30.937 27.8531 30.886 29.2781 30.785 30.4291C30.547 33.1411 29.142 35.5261 26.811 36.9631C24.062 38.6581 20.617 38.6541 17.566 37.9141C16.171 37.5761 14.788 37.0901 13.479 36.5021C12.528 36.0751 11.554 35.5011 10.882 34.6821C11.077 35.4231 11.401 36.1251 11.874 36.7401C13.952 39.4431 17.705 40.8311 20.996 41.1291C24.187 41.4191 27.817 40.9481 30.588 39.2391C30.871 39.0651 31.143 38.8691 31.403 38.6541C31.638 38.4601 31.864 38.2511 32.079 38.0291C32.97 37.1071 33.671 35.9581 34.119 34.7271C34.197 34.5101 34.269 34.2911 34.33 34.0691C34.584 33.1731 34.699 32.2461 34.652 31.3441Z" fill="#A34F4D" />
                                                <path id="Vector_5" d="M20.766 26.0351C23.954 26.2801 27.143 26.1221 30.252 25.3701C30.372 25.3411 30.502 25.3041 30.569 25.2041C30.674 25.0491 30.568 24.8391 30.439 24.7011C28.661 22.8121 25.549 21.9531 22.982 21.8891C20.494 21.8271 17.883 22.5141 15.834 23.9031C14.458 24.8361 15.305 25.2271 16.564 25.4591C17.954 25.7151 19.357 25.9261 20.766 26.0351Z" fill="#87976D" />
                                                <path id="Vector_6" d="M21.298 20.9111C21.247 20.7881 21.199 20.6511 21.241 20.5251C21.27 20.4401 21.337 20.3721 21.408 20.3181C21.76 20.0511 22.235 20.0311 22.676 20.0431C22.949 20.0501 23.221 20.0651 23.493 20.0881C23.642 20.1001 23.8 20.1191 23.916 20.2121C24.039 20.3101 24.092 20.4751 24.089 20.6321C24.086 20.7891 24.035 20.9401 23.982 21.0871C23.906 21.2961 23.824 21.5031 23.736 21.7081C23.66 21.8851 23.569 22.0721 23.401 22.1671C23.29 22.2301 23.16 22.2431 23.033 22.2501C22.676 22.2681 22.13 22.3071 21.875 22.0261C21.622 21.7451 21.442 21.2571 21.298 20.9111Z" fill="#87976D" />
                                            </g>
                                            <g id="Group_4">
                                                <g id="Group_5">
                                                    <path id="Vector_7" d="M20.812 29.9521C20.811 29.9541 20.814 29.9591 20.822 29.9651C20.816 29.9561 20.812 29.9521 20.812 29.9521Z" fill="#FDBB21" />
                                                    <path id="Vector_8" d="M27.159 32.2361C27.159 32.2361 26.95 32.2841 26.899 32.0431C26.848 31.8021 27.351 31.2871 27.351 31.2871C27.351 31.2871 26.882 31.4721 26.547 31.4801C26.212 31.4881 26.313 31.2551 26.313 31.2551C26.313 31.2551 25.76 31.6011 25.593 31.5931C25.426 31.5851 25.434 31.3031 25.434 31.3031C25.434 31.3031 24.203 32.2201 24.061 31.9301C23.927 31.6571 24.74 30.1211 24.838 29.9651C24.787 30.0101 24.544 30.1401 24.295 30.0481C24.01 29.9431 24.061 29.2281 24.061 29.2281C24.061 29.2281 23.81 29.4211 23.617 29.2841C23.424 29.1471 23.491 28.2951 23.491 28.2951C23.491 28.2951 23.344 28.4581 23.156 28.3591C22.896 28.2221 22.829 27.2251 22.829 27.2251C22.829 27.2251 22.762 28.2221 22.502 28.3591C22.314 28.4581 22.167 28.2951 22.167 28.2951C22.167 28.2951 22.234 29.1481 22.041 29.2841C21.848 29.4201 21.597 29.2281 21.597 29.2281C21.597 29.2281 21.647 29.9441 21.363 30.0481C21.114 30.1391 20.871 30.0091 20.82 29.9651C20.918 30.1221 21.732 31.6571 21.597 31.9301C21.455 32.2201 20.224 31.3031 20.224 31.3031C20.224 31.3031 20.232 31.5841 20.065 31.5931C19.898 31.6011 19.345 31.2551 19.345 31.2551C19.345 31.2551 19.445 31.4881 19.111 31.4801C18.776 31.4721 18.307 31.2871 18.307 31.2871C18.307 31.2871 18.809 31.8021 18.759 32.0431C18.709 32.2841 18.499 32.2361 18.499 32.2361C18.499 32.2361 19.085 32.3971 19.119 32.7511C19.153 33.1051 18.868 33.2741 18.868 33.2741C18.868 33.2741 20.182 33.6761 20.333 34.0461C20.484 34.4161 20.216 34.7461 19.939 34.9071C19.663 35.0681 18.834 35.5341 18.834 35.5341C18.834 35.5341 20.241 35.4861 20.324 35.6791C20.408 35.8721 20.224 36.1541 20.224 36.1541C20.224 36.1541 20.994 35.8001 21.212 35.8641C21.43 35.9281 21.254 36.2981 21.254 36.2981C22.225 36.1051 22.828 35.6711 22.828 35.6711C22.828 35.6711 23.431 36.1051 24.402 36.2981C24.402 36.2981 24.226 35.9281 24.444 35.8641C24.662 35.8001 25.432 36.1541 25.432 36.1541C25.432 36.1541 25.248 35.8731 25.332 35.6791C25.416 35.4861 26.822 35.5341 26.822 35.5341C26.822 35.5341 25.993 35.0681 25.717 34.9071C25.441 34.7461 25.173 34.4161 25.323 34.0461C25.474 33.6761 26.788 33.2741 26.788 33.2741C26.788 33.2741 26.503 33.1051 26.537 32.7511C26.573 32.3971 27.159 32.2361 27.159 32.2361Z" fill="#FDBB21" />
                                                    <path id="Vector_9" d="M24.779 30.0351L24.827 29.9591C24.835 29.9461 24.839 29.9401 24.848 29.9401H24.856L24.86 29.9471C24.866 29.9591 24.853 29.9711 24.847 29.9761L24.779 30.0351Z" fill="#FDBB21" />
                                                </g>
                                                <g id="Group_6">
                                                    <path id="Vector_10" d="M24.749 38.7491C24.742 38.7491 24.734 38.7481 24.727 38.7461C23.604 38.3941 23.103 37.5601 22.881 36.9221C22.642 36.2341 22.666 35.6381 22.667 35.6131L22.706 30.2651C22.706 30.2241 22.739 30.1921 22.78 30.1921H22.781C22.822 30.1921 22.855 30.2261 22.854 30.2661L22.815 35.6171C22.815 35.6261 22.791 36.2171 23.022 36.8781C23.329 37.7571 23.918 38.3381 24.771 38.6051C24.81 38.6171 24.832 38.6591 24.819 38.6981C24.81 38.7291 24.78 38.7491 24.749 38.7491Z" fill="#63704A" />
                                                </g>
                                                <g id="Group_7">
                                                    <path id="Vector_11" d="M22.749 34.6481C22.725 34.6481 22.701 34.6361 22.687 34.6141C22.057 33.6251 20.197 32.4531 20.179 32.4411C20.144 32.4191 20.134 32.3741 20.156 32.3391C20.178 32.3041 20.223 32.2941 20.258 32.3161C20.263 32.3191 20.738 32.6181 21.287 33.0371C22.027 33.6021 22.54 34.1061 22.813 34.5351C22.835 34.5691 22.825 34.6151 22.79 34.6371C22.776 34.6441 22.762 34.6481 22.749 34.6481Z" fill="#63704A" />
                                                </g>
                                                <g id="Group_8">
                                                    <path id="Vector_12" d="M22.749 34.6481C22.735 34.6481 22.722 34.6441 22.709 34.6361C22.675 34.6141 22.664 34.5681 22.686 34.5341C22.959 34.1061 23.469 33.6021 24.203 33.0371C24.747 32.6181 25.219 32.3191 25.224 32.3161C25.258 32.2941 25.304 32.3051 25.326 32.3391C25.348 32.3731 25.338 32.4191 25.303 32.4411C25.284 32.4531 23.441 33.6251 22.811 34.6141C22.797 34.6361 22.773 34.6481 22.749 34.6481Z" fill="#63704A" />
                                                </g>
                                                <g id="Group_9">
                                                    <path id="Vector_13" d="M20.383 35.2321C20.353 35.2321 20.325 35.2141 20.314 35.1841C20.299 35.1461 20.319 35.1031 20.357 35.0891C21.346 34.7111 22.681 34.6601 22.737 34.6581C22.777 34.6561 22.812 34.6881 22.813 34.7291C22.814 34.7701 22.783 34.8041 22.742 34.8051C22.728 34.8051 21.375 34.8571 20.409 35.2261C20.401 35.2301 20.392 35.2321 20.383 35.2321Z" fill="#63704A" />
                                                </g>
                                                <g id="Group_10">
                                                    <path id="Vector_14" d="M25.105 35.2321C25.096 35.2321 25.087 35.2301 25.079 35.2271C24.112 34.8581 22.76 34.8061 22.746 34.8061C22.705 34.8051 22.673 34.7701 22.675 34.7301C22.676 34.6891 22.711 34.6571 22.751 34.6591C22.807 34.6611 24.142 34.7121 25.131 35.0901C25.169 35.1051 25.188 35.1471 25.174 35.1851C25.163 35.2141 25.135 35.2321 25.105 35.2321Z" fill="#63704A" />
                                                </g>
                                            </g>
                                        </g>
                                        <g id="Group_11">
                                            <path id="Vector_15" d="M86.557 38.5591H0.481995V45.1311H86.557V38.5591Z" fill="#87976D" />
                                            <g id="Group_12">
                                                <path id="Vector_16" d="M10.437 45.1321L2.216 106.864H0L8.03799 45.1321H10.437Z" fill="#C9844B" />
                                            </g>
                                            <g id="Group_13">
                                                <path id="Vector_17" d="M29.96 45.1321L21.74 106.864H19.523L27.561 45.1321H29.96Z" fill="#CC8A4D" />
                                            </g>
                                            <g id="Group_14">
                                                <path id="Vector_18" d="M57.944 45.1321L66.164 106.864H68.381L60.343 45.1321H57.944Z" fill="#CC8A4D" />
                                            </g>
                                        </g>
                                    </g>
                                    <path id="Vector_19" d="M49.623 13.2612C49.623 13.2612 45.689 10.4002 45.689 8.49217C45.689 6.58417 49.862 9.08818 49.862 9.08818C49.862 9.08818 47.12 4.79618 47.954 3.84218C48.789 2.88818 50.219 4.43818 50.219 4.43818C50.219 4.43818 50.934 0.504173 52.484 0.0271729C54.034 -0.449827 54.988 5.51118 54.988 5.51118C54.988 5.51118 56.299 3.48418 57.134 4.43818C57.969 5.39218 56.776 9.08818 56.776 9.08818C56.776 9.08818 57.73 8.73018 58.445 9.08818C58.445 9.08818 58.326 6.34618 59.995 5.51118C59.995 5.51118 62.022 6.94217 61.903 9.56517C61.903 9.56517 62.499 8.37317 63.453 8.49217C63.453 8.49217 62.38 4.55818 63.811 3.12718C63.811 3.12718 65.599 3.84216 66.076 5.15416C66.076 5.15416 66.314 2.29316 67.507 1.57716C68.7 0.861161 69.057 4.43818 69.057 4.43818C69.057 4.43818 71.918 1.45716 73.588 1.93416C73.588 1.93416 75.019 5.15317 73.23 8.01417C73.23 8.01417 75.376 6.46418 75.972 7.53718C76.568 8.61018 73.707 12.7832 72.515 13.3792C71.323 13.9752 49.623 13.2612 49.623 13.2612Z" fill="#87976D" />
                                    <path id="Vector_20" d="M47.087 9.79117C48.435 9.99917 49.758 10.3682 51.019 10.8882C50.897 10.6052 50.856 10.2871 50.901 9.98215C51.189 10.0371 51.477 10.0922 51.765 10.1482C50.963 8.94716 50.162 7.74516 49.36 6.54416C49.998 6.37316 50.726 6.61617 51.133 7.13617C50.73 5.79317 51.215 4.22916 52.307 3.35016C53.503 4.65616 53.709 6.56117 53.857 8.32617C54.177 7.46417 54.809 6.72215 55.608 6.26715C56.005 7.92015 55.914 9.68615 55.349 11.2892C55.613 10.7722 56.268 10.5522 56.842 10.6362C57.416 10.7202 57.923 11.0461 58.389 11.3911C58.081 10.8721 58.792 10.1372 59.321 10.4292C59.065 9.86617 59.057 9.19614 59.3 8.62814C59.386 8.42614 59.572 8.20715 59.782 8.27115C59.929 8.31515 60.001 8.47716 60.052 8.62216C60.288 9.29616 60.452 9.99416 60.541 10.7032C60.742 10.0892 61.825 10.1242 61.986 10.7502C62.704 9.82915 64.238 9.70816 65.091 10.5062C64.896 10.1122 64.755 9.66117 64.862 9.23517C64.969 8.80817 65.399 8.44215 65.828 8.53915C64.891 7.88415 64.271 6.79717 64.184 5.65817C65.091 6.09517 65.908 6.72115 66.566 7.48315C66.405 6.68315 66.521 5.83015 66.891 5.10315C67.367 5.75215 67.684 6.51716 67.805 7.31216C68.69 5.92216 69.949 4.77316 71.413 4.01816C71.737 5.39016 71.401 6.90316 70.526 8.00916C70.86 7.93716 71.193 7.86616 71.527 7.79416C71.489 8.70116 71.181 9.59415 70.651 10.3311C71.463 9.95215 72.308 9.64515 73.173 9.41415C73.05 11.6742 71.462 13.6631 69.5 14.7921C67.538 15.9211 65.244 16.3172 62.991 16.5272C59.494 16.8522 55.926 16.6842 52.681 15.2312C50.523 14.2642 47.377 12.3352 47.087 9.79117Z" fill="#728254" />
                                    <g id="Group_15">
                                        <g id="Group_16">
                                            <path id="Vector_21" d="M45.679 11.4622L48.891 38.5161H72.315L75.526 11.4622H45.679Z" fill="#FFBDBD" />
                                            <path id="Vector_22" d="M46.504 18.4082H74.702L75.526 11.4622H45.679L46.504 18.4082Z" fill="#AB605B" />
                                        </g>
                                    </g>
                                </g>
                            </svg>


                            <svg id="windows" viewBox="0 0 99 164" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="decorations">
                                    <path id="Vector" opacity="0.41" d="M60.686 138.927H29.762V145.588H60.686V138.927Z" fill="#E0BF99" />
                                    <g id="Group">
                                        <g id="Group_2">
                                            <path id="Vector_2" d="M60.523 21.155C60.508 21.155 60.493 21.154 60.478 21.152C60.272 21.128 60.125 20.941 60.149 20.734C61.05 13.205 63.827 7.13501 68.402 2.69301C68.551 2.54901 68.789 2.55201 68.933 2.70101C69.078 2.85001 69.074 3.08801 68.925 3.23201C64.477 7.55001 61.776 13.469 60.895 20.823C60.873 21.015 60.711 21.155 60.523 21.155Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_3">
                                            <path id="Vector_3" d="M62.184 20.028C62.112 20.028 62.039 20.007 61.975 19.964C61.803 19.848 61.757 19.615 61.873 19.443C64.812 15.067 68.514 12.368 73.189 11.192C73.391 11.145 73.595 11.264 73.645 11.465C73.696 11.666 73.573 11.871 73.372 11.922C68.885 13.05 65.328 15.648 62.496 19.862C62.423 19.97 62.305 20.028 62.184 20.028Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_4">
                                            <path id="Vector_4" d="M57.937 20.72C57.789 20.72 57.648 20.632 57.589 20.486C55.458 15.239 51.725 12.554 46.177 12.277C45.97 12.267 45.81 12.091 45.82 11.883C45.831 11.676 46.011 11.496 46.214 11.527C52.084 11.819 56.033 14.657 58.285 20.203C58.363 20.395 58.27 20.615 58.078 20.693C58.032 20.711 57.984 20.72 57.937 20.72Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_5">
                                            <path id="Vector_5" fill-rule="evenodd" clip-rule="evenodd" d="M52.457 13.39C50.435 12.849 49.225 12.052 48.127 10.503C47.15 9.23301 47.24 7.676 47.706 6.526C49.112 6.571 50.585 7.09 51.675 8.894C52.419 10.383 52.961 12.127 52.457 13.39Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_6">
                                            <path id="Vector_6" fill-rule="evenodd" clip-rule="evenodd" d="M46.157 11.887C45.074 13.165 44.045 13.781 42.443 14.075C41.105 14.368 39.872 13.804 39.098 13.098C39.579 12.113 40.474 11.219 42.278 11.016C43.714 10.962 45.3 11.128 46.157 11.887Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_7">
                                            <path id="Vector_7" fill-rule="evenodd" clip-rule="evenodd" d="M63.635 9.52597C62.387 8.39097 61.838 7.36898 61.688 5.83498C61.508 4.54998 62.222 3.45197 63.041 2.79797C64.033 3.34697 64.89 4.26397 64.935 5.97797C64.853 7.33097 64.522 8.79697 63.635 9.52597Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_8">
                                            <path id="Vector_8" fill-rule="evenodd" clip-rule="evenodd" d="M61.966 13.631C62.379 12.045 63.041 11.083 64.364 10.188C65.454 9.39101 66.822 9.42101 67.837 9.75201C67.837 10.842 67.424 12 65.883 12.894C64.597 13.511 63.086 13.984 61.966 13.631Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_9">
                                            <path id="Vector_9" fill-rule="evenodd" clip-rule="evenodd" d="M65.514 15.691C66.401 14.759 67.213 14.338 68.453 14.18C69.49 14.015 70.4 14.496 70.964 15.067C70.543 15.796 69.821 16.443 68.431 16.525C67.334 16.502 66.131 16.307 65.514 15.691Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_10">
                                            <path id="Vector_10" fill-rule="evenodd" clip-rule="evenodd" d="M72.987 11.639C73.611 10.985 74.182 10.684 75.054 10.579C75.783 10.459 76.422 10.797 76.821 11.203C76.528 11.714 76.017 12.165 75.039 12.225C74.265 12.21 73.415 12.075 72.987 11.639Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_11">
                                            <path id="Vector_11" fill-rule="evenodd" clip-rule="evenodd" d="M52.727 17.194C53.524 16.735 54.163 16.6 55.027 16.72C55.764 16.803 56.282 17.299 56.538 17.787C56.102 18.2 55.478 18.501 54.531 18.298C53.787 18.081 53.013 17.728 52.727 17.194Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_12">
                                            <path id="Vector_12" fill-rule="evenodd" clip-rule="evenodd" d="M68.048 0.603C68.905 -0.201 70.288 -0.201 71.138 0.603C71.995 1.407 71.995 2.70801 71.138 3.51201C70.289 4.30901 68.905 4.30901 68.048 3.51201C67.198 2.70801 67.198 1.408 68.048 0.603Z" fill="#EDB000" />
                                        </g>
                                        <g id="Group_13">
                                            <path id="Vector_13" d="M58.17 25.636C58.146 25.636 58.121 25.634 58.096 25.629C57.892 25.589 57.76 25.39 57.801 25.187C58.975 19.296 58.381 14.116 56.035 9.789C55.936 9.606 56.004 9.379 56.186 9.28C56.368 9.181 56.597 9.249 56.695 9.431C59.127 13.916 59.746 19.267 58.537 25.334C58.503 25.512 58.346 25.636 58.17 25.636Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_14">
                                            <path id="Vector_14" fill-rule="evenodd" clip-rule="evenodd" d="M57.606 8.62398C57.185 7.88698 56.208 7.60197 55.426 7.99297C54.637 8.38397 54.336 9.30897 54.757 10.045C55.17 10.789 56.148 11.067 56.937 10.676C57.719 10.286 58.02 9.36798 57.606 8.62398Z" fill="#EDB000" />
                                        </g>
                                        <g id="Group_15">
                                            <path id="Vector_15" fill-rule="evenodd" clip-rule="evenodd" d="M66.296 59.99L52.073 59.96C48.705 58.306 47.315 52.668 47.465 49.12C47.585 46.083 48.75 40.881 51.712 38.911L51.84 38.798C54.396 37.046 55.554 34.032 55.696 31.16L56.004 22.974L62.356 23.004L62.664 31.19C62.814 34.062 63.972 37.069 66.528 38.828L66.656 38.941C69.618 40.911 70.783 46.113 70.903 49.15C71.055 52.698 69.664 58.336 66.296 59.99Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_16">
                                            <path id="Vector_16" fill-rule="evenodd" clip-rule="evenodd" d="M65.507 59.945L63.034 59.983C65.815 57.878 67.341 52.706 67.206 49.444C67.078 46.384 66.086 41.588 63.132 39.611L63.004 39.498C60.441 37.724 59.824 34.364 59.681 31.477L59.38 23.464L61.575 23.472L61.883 31.546C62.026 34.38 63.184 37.349 65.739 39.078L65.867 39.191C68.829 41.13 69.994 46.265 70.114 49.257C70.265 52.751 68.875 58.306 65.507 59.945Z" fill="#FFBDBD" />
                                        </g>
                                        <g id="Group_17">
                                            <path id="Vector_17" fill-rule="evenodd" clip-rule="evenodd" d="M55.065 20.953V22.434C55.065 23.111 55.644 23.652 56.358 23.652H62.282C62.989 23.652 63.575 23.111 63.575 22.434V20.953C63.575 20.284 62.989 19.735 62.282 19.735H56.358C55.644 19.735 55.065 20.284 55.065 20.953Z" fill="#FAB2A0" />
                                        </g>
                                        <g id="Group_18">
                                            <path id="Vector_18" fill-rule="evenodd" clip-rule="evenodd" d="M73.799 10.353C74.656 9.549 76.039 9.549 76.889 10.353C77.746 11.15 77.746 12.458 76.889 13.255C76.04 14.059 74.656 14.059 73.799 13.255C72.949 12.458 72.949 11.15 73.799 10.353Z" fill="#EDB000" />
                                        </g>
                                    </g>
                                    <g id="Group_19">
                                        <g id="Group_20">
                                            <path id="Vector_19" d="M28.654 19.973L32.134 163.359H30.394L26.953 32.638L28.654 19.973Z" fill="#713342" />
                                            <path id="Vector_20" d="M30.394 163.359H25.754L23.901 55.363L26.953 32.638L30.394 163.359Z" fill="#B3533B" />
                                        </g>
                                        <g id="Group_21">
                                            <path id="Vector_21" d="M0 163.359H6.61301L26.45 19.973H21.578L0 163.359Z" fill="#C9844B" />
                                            <path id="Vector_22" d="M26.45 19.973H28.654L9.397 163.359H6.61301L26.45 19.973Z" fill="#B9692E" />
                                        </g>
                                        <g id="Group_22">
                                            <path id="Vector_23" d="M95.004 19.973L98.484 163.359H96.744L93.303 32.638L95.004 19.973Z" fill="#713342" />
                                            <path id="Vector_24" d="M96.744 163.359H92.104L90.251 55.363L93.303 32.638L96.744 163.359Z" fill="#B3533B" />
                                        </g>
                                        <g id="Group_23">
                                            <path id="Vector_25" d="M79.065 138.649H91.68V144.77H78.243L79.065 138.649Z" fill="#713342" />
                                            <path id="Vector_26" d="M84.525 97.999H90.982L91.087 104.119H83.703L84.525 97.999Z" fill="#713342" />
                                            <path id="Vector_27" d="M89.735 57.928H90.251L90.4 64.048H89.084L89.735 57.928Z" fill="#713342" />
                                        </g>
                                        <g id="Group_24">
                                            <path id="Vector_28" d="M11.364 138.649H70.068L69.147 144.77H10.517L11.364 138.649Z" fill="#C9844B" />
                                            <path id="Vector_29" d="M16.846 97.999H76.185L75.264 104.119H16L16.846 97.999Z" fill="#C9844B" />
                                            <path id="Vector_30" d="M22.089 57.928H82.148L81.301 64.048H21.355L22.089 57.928Z" fill="#CC8A4D" />
                                        </g>
                                        <g id="Group_25">
                                            <path id="Vector_31" d="M66.35 163.359H72.962L92.8 19.973H87.927L66.35 163.359Z" fill="#C9844B" />
                                            <path id="Vector_32" d="M92.8 19.973H95.004L75.746 163.359H72.962L92.8 19.973Z" fill="#B9692E" />
                                        </g>
                                    </g>
                                </g>
                            </svg>


                            <div id="fashion-illus">
                                {/* viewBox="0 0 156 402" */}
                                {/*  viewBox="0 0 194 330" */}
                                <svg viewBox="0 0 194 405" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M49.562 46.703C49.562 46.703 49.562 43.736 52.684 37.669C53.757 35.583 52.193 34.114 52.96 29.796C53.728 25.479 57.972 20.526 60.15 15.32C62.328 10.114 64.744 3.89202 71.719 0.971016C78.694 -1.94998 85.739 4.86301 85.739 4.86301C85.739 4.86301 88.04 1.31302 92.529 2.45502C97.018 3.59802 99.223 8.97402 99.223 15.443C99.223 21.674 101.837 22.43 103.825 26.366C105.813 30.302 98.399 34.874 97.968 39.318C97.537 43.762 98.082 43.889 103.268 45.032C108.454 46.175 108.224 49.984 107.432 52.397C107.432 52.397 106.482 47.826 102.743 47.572C102.743 47.572 111.171 56.968 104.06 61.286C96.951 65.605 52.613 76.402 49.562 46.703Z" fill="#332C33" />
                                    <path d="M107.215 29.575C107.215 29.575 100.99 29.009 99.329 28.034C98.755 27.697 97.2 24.963 97.159 24.171C97.118 23.379 98.724 22.221 98.724 22.221C98.724 22.221 91.858 18.286 92.343 17.495C92.827 16.704 98.708 18.819 98.708 18.819C98.708 18.819 94.332 14.109 95.144 13.181C96.231 11.939 102.493 18.522 102.493 18.522C102.493 18.522 102.022 18.053 102.429 17.206C102.837 16.359 103.638 16.91 103.638 16.91C103.638 16.91 103.683 15.717 104.468 15.398C105.253 15.08 107.966 16.417 109.668 18.289C110.674 19.395 116.046 29.022 116.046 29.022L110.639 33.27L107.215 29.575Z" fill="#FF9785" />
                                    <path d="M98.724 22.222C98.724 22.222 102.929 19.624 103.804 19.779C104.679 19.934 104.626 23.558 101.41 25.046" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M103.133 23.761C103.133 23.761 107.031 23.235 108.026 25.092" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M104.236 21.563C104.236 21.563 105.414 24.046 106.653 24.013C108.332 23.968 105.059 18.536 105.059 18.536" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M106.955 22.488C106.955 22.488 108.038 23.515 108.701 22.611C109.364 21.708 107.226 18.375 107.226 18.375" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M107.753 19.269L108.784 19.55" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M96.806 49.41C133.113 58.817 139.895 58.745 139.895 58.745C139.895 58.745 161.285 70.628 153.015 79.004C146.724 85.374 113.849 82.771 101.174 78.376C86.564 73.308 80.531 45.193 96.806 49.41Z" fill="#A6CAC8" />
                                    <path d="M131.995 70.048C131.995 70.048 116.689 45.977 112.884 43.552C109.078 41.126 109.585 40.38 108.594 39.085C107.604 37.79 104.998 37.269 104.221 36.119C103.444 34.969 114.564 25.692 116.53 25.78C118.495 25.867 118.374 27.654 118.831 28.587C119.288 29.52 120.896 29.676 121.566 30.754C122.237 31.832 156.915 61.915 155.863 73.638C154.436 89.523 131.995 70.048 131.995 70.048Z" fill="#A6CAC8" />
                                    <path d="M119.474 29.655C116.145 33.293 112.233 36.398 107.934 38.814" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M125.978 60.815C127.906 63.645 129.628 66.615 131.127 69.693C132.094 71.679 133.183 73.912 135.274 74.622" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M86.038 38.593C86.038 38.593 93.423 39.427 98.302 42.945C103.365 46.595 121.591 76.046 125.771 90.155C129.951 104.264 130.689 140.659 140.803 150.55C140.803 150.55 130.424 151.737 120.89 157.275C120.89 157.275 112.104 145.279 110.148 131.892C108.192 118.505 108.115 89.991 105.78 76.556C103.445 63.121 98.473 51.674 87.706 49.881L86.038 38.593Z" fill="#C77568" />
                                    <path d="M113.42 64.593H102.505" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M108.033 55.639H97.84" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M101.768 46.685H87.233" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M126.184 91.457H107.352" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M122.854 82.502H106.585" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M118.493 73.548H105.203" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M130.386 118.32H108.821" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M130.724 119.002V152.926" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M121.769 80.124V156.78" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M112.815 63.383V141.941" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M103.86 49.484V68.191" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M94.906 41.034V53.043" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M129.205 109.366H108.377" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M127.89 100.411H107.899" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M137.173 145.184H114.124" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M133.998 136.229H111.018" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M127.233 154.138H118.826" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M131.995 127.275H109.596" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M40.98 148.575C40.98 148.575 76.419 157.417 117.69 128.005C117.69 128.005 84.933 121.546 40.98 148.575Z" fill="#332C33" />
                                    <path d="M1.1 239.429C1.1 239.429 -3.872 250.506 33.028 250.506C69.928 250.506 142.411 206.244 134.389 191.716C126.368 177.187 47.562 194.066 1.1 239.429Z" fill="#332C33" />
                                    <path d="M71.588 168.82C71.588 168.82 77.69 224.132 73.138 243.121C68.585 262.11 82.188 372.231 82.188 372.231L104.817 371.297C104.817 371.297 113.588 275.561 114.488 251.033C115.388 226.506 121.119 168.82 121.119 168.82H71.588Z" fill="#ED705C" />
                                    <path d="M117.727 387.467L104.817 371.297L82.188 372.231C82.188 372.231 77.954 378.154 78.636 383.429C78.943 385.807 81.392 401.972 81.392 401.972H91.15L91.488 395.655C91.488 395.655 103.819 402.139 110.469 401.968L145.48 401.971C147.25 396.615 117.727 387.467 117.727 387.467Z" fill="#EBEBEB" />
                                    <path d="M104.388 379.011L113.29 375.253L106.97 385.216L117.443 380.235L113.883 390.681L122.784 386.634" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M82.188 372.23L78.958 363.726L108.385 357.582L108.821 364.468L82.188 372.23Z" fill="#EBEBEB" />
                                    <path d="M48.406 168.82C48.406 168.82 51.008 224.132 45.254 243.121C39.5 262.11 46.134 372.231 46.134 372.231L68.822 371.297C68.822 371.297 83.651 275.561 86.103 251.033C88.555 226.505 97.937 168.82 97.937 168.82H48.406Z" fill="#FF9785" />
                                    <path d="M80.709 387.467L68.822 371.297L46.134 372.231C46.134 372.231 41.525 378.154 41.873 383.429C42.03 385.807 43.456 401.972 43.456 401.972H53.214L53.952 395.655C53.952 395.655 65.873 402.139 72.533 401.968L107.544 401.971C109.653 396.615 80.709 387.467 80.709 387.467Z" fill="white" />
                                    <path d="M67.84 379.011L76.741 375.253L70.421 385.216L80.895 380.235L77.335 390.681L86.236 386.634" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M46.134 372.23L43.442 363.726L73.258 357.582V364.468L46.134 372.23Z" fill="white" />
                                    <path d="M50.622 137.018C50.622 137.018 41.716 161.363 29.057 181.934C16.398 202.505 3.73801 225.714 1.10101 239.428C1.10101 239.428 36.423 235.736 72.301 214.109C108.178 192.483 123.68 190.419 134.391 191.714C134.391 191.714 121.381 145.772 110.032 123.237C110.032 123.237 72.715 124.805 50.622 137.018Z" fill="#F9677A" />
                                    <path d="M4.52899 228.252C30.813 219.549 57.45 208.059 81.671 194.647C97.269 186.009 113.947 177.312 131.318 181.333" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M115 115.045L117.69 128.005C117.69 128.005 107.5 127.605 91.1 130.765C74.7 133.935 40.98 148.575 40.98 148.575C40.98 140.265 47.27 134.325 48.06 129.185C48.85 124.045 50.302 115.185 50.302 115.185C50.302 115.185 47.859 114.16 46.279 111.78C44.699 109.41 46.279 105.645 46.279 105.645C44.369 102.475 35.53 67.474 38.17 62.194C40.81 56.924 69.55 50.404 69.55 50.404L87.71 49.884C87.71 49.884 92.53 50.461 96.851 53.625C99.566 55.614 117.69 74.594 117.69 81.714C117.69 84.964 116.29 88.124 114.77 90.614C112.95 93.574 110.96 95.564 110.96 95.564L115 115.045Z" fill="#BFEDEB" />
                                    <path d="M115 115.045C65.7 117.145 53.406 93.711 53.406 93.711L114.65 90.155L114.77 90.615C112.95 93.575 110.96 95.565 110.96 95.565L115 115.045Z" fill="#332C33" />
                                    <path d="M49.562 115.091C56.125 117.911 61.996 122.324 66.529 127.844C66.697 128.049 66.873 128.28 66.868 128.545C66.858 129.095 66.141 129.315 65.592 129.269C63.686 129.109 62.137 127.727 60.743 126.417" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M116.577 122.643C116.577 122.643 87.242 115.717 42.266 141.969" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M87.039 71.692C73.805 75.361 69.553 50.406 69.553 50.406L70.523 30.234L85.116 32.984L87.706 49.881C87.706 49.881 102.258 67.473 87.039 71.692Z" fill="#FF9785" />
                                    <path d="M85.121 32.987L73.822 33.587C73.822 33.587 74.77 47.453 87.067 45.717L85.121 32.987Z" fill="#332C33" />
                                    <path d="M89.155 40.435C82.777 43.755 73.752 39.34 70.911 33.076C68.082 26.824 68.789 17.434 73.045 11.912C76.171 7.85002 90.216 5.84201 92.339 17.617C92.864 20.503 93.32 23.139 93.605 25.535C93.787 26.973 93.913 28.319 93.959 29.574C94.152 34.775 93.022 38.426 89.155 40.435Z" fill="#FF9785" />
                                    <path d="M86.553 10.424C86.57 11.852 86.208 13.335 85.273 14.415C83.929 15.965 81.712 16.399 80.05 17.603C77.422 19.508 76.368 23.191 73.49 24.691C72.162 25.383 70.612 25.505 69.115 25.466C68.168 25.442 67.21 25.356 66.318 25.036C65.426 24.716 64.599 24.14 64.13 23.317C63.676 22.52 63.591 21.567 63.621 20.65C63.754 16.519 66.057 12.633 69.284 10.051C72.511 7.46802 76.579 6.09401 80.678 5.56701C82.057 5.39001 84.127 5.19301 85.332 6.10802C86.456 6.96302 86.538 9.16702 86.553 10.424Z" fill="#332C33" />
                                    <path d="M75.087 29.677C75.165 30.799 76.512 31.664 78.097 31.611C79.681 31.557 80.903 30.604 80.825 29.482C80.747 28.36 79.4 27.495 77.815 27.548C76.231 27.602 75.01 28.555 75.087 29.677Z" fill="#FF755C" />
                                    <path d="M93.958 29.573C92.44 29.573 91.185 28.729 91.106 27.645C91.038 26.584 92.133 25.671 93.605 25.534C93.787 26.971 93.912 28.317 93.958 29.573Z" fill="#FF755C" />
                                    <path d="M80.418 24.086C80.486 24.634 80.875 25.036 81.285 24.984C81.695 24.933 81.973 24.447 81.904 23.9C81.835 23.353 81.447 22.951 81.037 23.002C80.627 23.053 80.35 23.538 80.418 24.086Z" fill="#332C33" />
                                    <path d="M89.153 23.36C89.221 23.907 89.61 24.309 90.02 24.258C90.431 24.207 90.708 23.721 90.64 23.174C90.572 22.627 90.183 22.224 89.773 22.276C89.362 22.327 89.085 22.813 89.153 23.36Z" fill="#332C33" />
                                    <path d="M81.746 21.592C79.738 19.402 78.612 22.85 79.003 22.073" stroke="#332C33" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M90.603 20.179C88.595 17.988 87.469 21.437 87.86 20.66" stroke="#332C33" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M69.934 25.052C65.87 23.276 62.118 22.596 62.309 27.553C62.5 32.509 67.647 34.797 71.269 32.509C74.89 30.221 72.895 26.346 69.934 25.052Z" fill="#FF9785" />
                                    <path d="M64.97 26.437C64.97 26.437 69.283 26.128 68.682 30.697" stroke="#332C33" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M68.33 28.059L66.62 29.162" stroke="#332C33" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M86.417 29.077C86.946 29.058 88.273 28.49 88.337 27.474C88.397 26.516 86.715 27.531 86.223 26.135L85.741 23.555" stroke="#332C33" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M81.452 32.551C81.452 32.551 84.214 33.155 89.278 32.223C89.278 32.223 88.538 36.462 84.788 36.237C81.608 36.046 81.452 32.551 81.452 32.551Z" fill="white" />
                                    <path d="M70.081 39.427C70.081 39.427 58.744 46.109 58.215 48.219C57.686 50.329 59.008 51.064 58.215 53.334C57.422 55.604 62.28 76.703 69.214 88.835C76.148 100.967 74.251 114.681 73.219 125.494C72.187 136.307 71.664 160.571 71.664 160.571C71.664 160.571 79.508 157.934 85.74 156.615C91.972 155.296 97.511 157.142 97.511 157.142C97.511 157.142 94.874 129.186 95.401 119.428C95.928 109.67 96.969 88.015 92.531 82.769C88.093 77.523 71.395 54.174 69.551 50.405L70.081 39.427Z" fill="#C77568" />
                                    <path d="M79.421 64.593H60.068" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M93.142 83.67V156.292" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M84.188 71.757V156.963" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M75.233 58.637V159.432" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M66.279 41.773V82.937" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M72.84 55.639H58.539" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M69.553 46.685H59.443" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M95.246 91.457H70.565" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M92.307 82.502H66.089" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M86.038 73.548H62.301" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M95.46 118.32H73.895" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M95.854 109.366H74.17" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M95.854 100.411H73.399" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M96.5 145.184H72.123" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M95.872 136.229H72.413" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M97.239 154.138H71.831" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M95.46 127.275H73.064" stroke="#A66157" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M118.135 3.24001L121.942 40.199L140.803 38.51L137.487 1.50601L118.135 3.24001Z" fill="#332C33" />
                                    <path d="M124.881 4.88606L120.882 5.24429L121.762 15.0738L125.762 14.7156L124.881 4.88606Z" fill="#524752" />
                                    <path d="M124.467 7.50302C124.534 8.24702 123.985 8.90302 123.241 8.97002C122.497 9.03702 121.841 8.48802 121.774 7.74402C121.707 7.00002 122.256 6.34402 123 6.27702C123.744 6.21002 124.401 6.75902 124.467 7.50302Z" fill="white" />
                                    <path d="M124.886 12.172C124.953 12.916 124.404 13.572 123.66 13.639C122.916 13.706 122.26 13.157 122.193 12.413C122.126 11.669 122.675 11.013 123.419 10.946C124.163 10.879 124.819 11.428 124.886 12.172Z" fill="white" />
                                    <path d="M117.182 47.5C117.182 47.5 116.187 42.812 116.749 40.699C117.311 38.586 118.82 35.416 119.201 33.885C119.583 32.353 120.251 30.986 120.963 31.469C121.675 31.953 121.441 34.824 121.441 34.824C121.441 34.824 123.531 33.148 124.506 31.585C125.481 30.022 126.105 25.472 126.794 25.066C127.482 24.661 128.018 26.983 127.943 29.641C127.868 32.299 127.356 33.528 127.356 33.528C127.356 33.528 130.932 33.063 132.156 33.649C133.38 34.235 132.045 35.639 132.045 35.639C132.045 35.639 133.429 37.343 133.179 37.847C132.929 38.351 132.929 38.351 132.929 38.351C132.929 38.351 134.026 39.891 133.391 40.669C132.756 41.447 130.267 42.417 129.178 43.317C128.089 44.217 125.573 48.218 125.781 51.114L117.182 47.5Z" fill="#FF9785" />
                                    <path d="M46.279 60.879C80.254 76.765 103.577 81.978 103.577 81.978C103.577 81.978 111.94 61.053 112.064 56.542C112.188 52.031 113.088 52.081 113.689 50.566C114.29 49.051 113.398 46.548 113.984 45.29C114.571 44.032 128.245 48.799 129.181 50.53C130.117 52.26 128.522 53.075 127.957 53.947C127.392 54.819 128.085 56.278 127.505 57.407C126.925 58.536 122.434 97.572 112.772 104.294C105.423 109.407 56.936 96.794 45.279 90.155C31.84 82.502 31.049 53.758 46.279 60.879Z" fill="#BFEDEB" />
                                    <path d="M50.254 60.872C54.519 61.428 56.821 65.689 60.8 67.323C66.279 69.575 78.713 74.311 87.04 77.179C92.3 78.991 96.705 79.452 102.214 80.229" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M99.225 85.814C99.225 84.088 100.533 82.022 102.513 80.127C103.68 79.01 104.856 77.883 105.779 76.557C107.249 74.448 108.013 71.938 108.676 69.454C109.203 67.482 109.72 66.105 110.147 64.109" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                    <path d="M113.704 49.158C114.651 50.65 115.98 51.852 117.171 53.157C118.363 54.462 119.46 55.954 119.773 57.694C119.296 57.762 118.805 57.732 118.339 57.606" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                </svg>
                            </div>
                            <div id="sub-tag-fashion">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Taking your fashion to the next level.</p>
                            </div>
                            <button id="now-booking-fashion" onClick={() => {
                                gotowedportfolio("section-6")
                            }}>
                                Our Portfolio
                            </button>
                        </div>
                        <div id="section-4" className="full-screen panels">

                            <div className="akaar-wedstyle">
                                <h1 id="akaar-commercials">COMMERCIALS</h1>
                            </div>

                            <svg id="cealling-lamp" width="188" height="266" viewBox="0 0 188 266" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Lamp_2">
                                    <g id="Group">
                                        <g id="Group_2">
                                            <path id="Vector" opacity="0.1" d="M55.56 265.248C86.098 265.248 110.854 240.492 110.854 209.954C110.854 179.416 86.098 154.66 55.56 154.66C25.0219 154.66 0.265991 179.416 0.265991 209.954C0.265991 240.492 25.0219 265.248 55.56 265.248Z" fill="#7800B0" />
                                            <path id="Vector_2" opacity="0.3" d="M55.56 242.979C75.8498 242.979 92.298 226.531 92.298 206.241C92.298 185.951 75.8498 169.503 55.56 169.503C35.2702 169.503 18.822 185.951 18.822 206.241C18.822 226.531 35.2702 242.979 55.56 242.979Z" fill="#7800B0" />
                                            <g id="Group_3">
                                                <g id="Group_4">
                                                    <g id="Group_5">
                                                        <g id="Group_6">
                                                            <g id="Group_7">
                                                                <path id="Vector_3" d="M55.385 192.83C61.165 192.898 65.906 188.267 65.974 182.487C66.011 179.35 64.639 176.363 62.236 174.346C61.794 173.981 61.119 173.54 61.134 172.626C61.134 172.598 61.087 170.339 61.087 170.339H50.078C50.078 170.339 50.031 172.686 50.031 172.713C50.031 173.518 49.408 173.865 48.949 174.228C46.514 176.18 45.08 179.12 45.042 182.241C44.974 188.021 49.605 192.762 55.385 192.83Z" fill="#7800B0" />
                                                                <path id="Vector_4" opacity="0.4" d="M55.385 192.83C61.165 192.898 65.906 188.267 65.974 182.487C66.011 179.35 64.639 176.363 62.236 174.346C61.794 173.981 61.119 173.54 61.134 172.626C61.134 172.598 61.087 170.339 61.087 170.339H50.078C50.078 170.339 50.031 172.686 50.031 172.713C50.031 173.518 49.408 173.865 48.949 174.228C46.514 176.18 45.08 179.12 45.042 182.241C44.974 188.021 49.605 192.762 55.385 192.83Z" fill="white" />
                                                                <path id="Vector_5" opacity="0.2" d="M50.182 188.32C50.182 186.282 52.567 184.626 55.524 184.626C58.481 184.626 60.866 186.282 60.866 188.32C60.866 190.358 58.481 192.017 55.524 192.017C52.567 192.017 50.182 190.361 50.182 188.32Z" fill="white" />
                                                            </g>
                                                            <path id="Vector_6" d="M63.483 178.385C64.394 179.947 64.756 181.822 64.492 183.61C64.228 185.399 63.34 187.089 62.017 188.321" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                            <path id="Vector_7" d="M57.771 172.626C56.968 175.359 56.827 178.34 57.367 181.156C57.454 181.611 57.6599 182.159 58.0679 182.17C58.4329 182.179 58.673 181.73 58.752 181.323C59.031 179.885 58.2849 178.423 57.3309 177.43C56.8149 176.892 56.188 176.423 55.49 176.389C54.789 176.355 54.119 176.77 53.612 177.323C52.64 178.381 52.1559 180.038 52.5079 181.516C52.6569 182.141 53.1 182.813 53.659 182.693C53.995 182.621 54.241 182.266 54.328 181.889C54.415 181.512 54.372 181.113 54.323 180.727C53.968 177.944 53.288 175.216 52.309 172.635" stroke="#263238" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                    </g>
                                                    <path id="Vector_8" d="M49.384 169.675H61.723C62.036 169.675 62.289 169.929 62.289 170.241V170.437C62.289 170.75 62.035 171.003 61.723 171.003H49.384C49.071 171.003 48.818 170.749 48.818 170.437V170.241C48.818 169.928 49.071 169.675 49.384 169.675Z" fill="#263238" />
                                                    <path id="Vector_9" opacity="0.3" d="M49.384 169.675H61.723C62.036 169.675 62.289 169.929 62.289 170.241V170.437C62.289 170.75 62.035 171.003 61.723 171.003H49.384C49.071 171.003 48.818 170.749 48.818 170.437V170.241C48.818 169.928 49.071 169.675 49.384 169.675Z" fill="white" />
                                                    <path id="Vector_10" d="M49.584 168.509H61.523C61.826 168.509 62.071 168.754 62.071 169.057V169.247C62.071 169.55 61.826 169.795 61.523 169.795H49.584C49.281 169.795 49.036 169.55 49.036 169.247V169.057C49.036 168.754 49.282 168.509 49.584 168.509Z" fill="#263238" />
                                                    <path id="Vector_11" opacity="0.3" d="M49.584 168.509H61.523C61.826 168.509 62.071 168.754 62.071 169.057V169.247C62.071 169.55 61.826 169.795 61.523 169.795H49.584C49.281 169.795 49.036 169.55 49.036 169.247V169.057C49.036 168.754 49.282 168.509 49.584 168.509Z" fill="white" />
                                                    <path id="Vector_12" d="M50.38 166.191H60.727C61.03 166.191 61.275 166.436 61.275 166.739V166.929C61.275 167.232 61.03 167.477 60.727 167.477H50.38C50.077 167.477 49.832 167.232 49.832 166.929V166.739C49.832 166.436 50.077 166.191 50.38 166.191Z" fill="#263238" />
                                                    <path id="Vector_13" opacity="0.3" d="M50.38 166.191H60.727C61.03 166.191 61.275 166.436 61.275 166.739V166.929C61.275 167.232 61.03 167.477 60.727 167.477H50.38C50.077 167.477 49.832 167.232 49.832 166.929V166.739C49.832 166.436 50.077 166.191 50.38 166.191Z" fill="white" />
                                                    <path id="Vector_14" d="M49.76 167.37H61.347C61.65 167.37 61.895 167.615 61.895 167.918V168.108C61.895 168.411 61.65 168.656 61.347 168.656H49.76C49.457 168.656 49.212 168.411 49.212 168.108V167.918C49.212 167.615 49.458 167.37 49.76 167.37Z" fill="#263238" />
                                                    <path id="Vector_15" opacity="0.3" d="M49.76 167.37H61.347C61.65 167.37 61.895 167.615 61.895 167.918V168.108C61.895 168.411 61.65 168.656 61.347 168.656H49.76C49.457 168.656 49.212 168.411 49.212 168.108V167.918C49.212 167.615 49.458 167.37 49.76 167.37Z" fill="white" />
                                                </g>
                                            </g>
                                            <path id="Vector_16" d="M72.421 162.848H38.594V168.013H72.421V162.848Z" fill="#263238" />
                                            <path id="Vector_17" d="M62.861 169.042H48.1541V156.416C48.1541 152.954 50.9611 150.147 54.423 150.147H56.593C60.055 150.147 62.862 152.954 62.862 156.416V169.042H62.861Z" fill="#263238" />
                                            <g id="Group_8">
                                                <g id="Group_9">
                                                    <path id="Vector_18" d="M56.2579 153.584C56.2579 135.53 56.2579 117.477 56.2579 99.423C56.2579 78.384 56.2579 57.346 56.2579 36.307C56.2579 27.138 56.2579 17.969 56.2579 8.8C56.2579 7.835 54.7579 7.833 54.7579 8.8C54.7579 26.854 54.7579 44.907 54.7579 62.961C54.7579 84 54.7579 105.038 54.7579 126.077C54.7579 135.246 54.7579 144.415 54.7579 153.584C54.7579 154.549 56.2579 154.551 56.2579 153.584Z" fill="#263238" />
                                                </g>
                                            </g>
                                            <path id="Vector_19" opacity="0.5" d="M74.199 165.321L38.289 164.732C21.754 171.53 10.111 187.798 10.111 206.784C10.111 231.885 30.459 252.233 55.56 252.233C80.661 252.233 101.009 231.885 101.009 206.784C101.009 188.326 90.005 172.438 74.199 165.321Z" fill="#7800B0" />
                                            <g id="Group_10" opacity="0.2">
                                                <path id="Vector_20" d="M90.35 177.548C85.978 172.352 80.469 168.145 74.199 165.322L38.289 164.733C21.754 171.531 10.111 187.799 10.111 206.785C10.111 216.698 13.294 225.862 18.681 233.332C27.676 236.067 37.657 235.27 46.452 231.828C56.404 227.933 64.907 220.867 71.625 212.556C78.343 204.244 83.378 194.698 87.708 184.927C88.761 182.552 89.785 180.074 90.35 177.548Z" fill="white" />
                                            </g>
                                            <g id="Group_11" opacity="0.3">
                                                <path id="Vector_21" d="M35.468 173.632C35.65 172.307 34.084 171.412 32.972 172.155C26.542 176.457 21.397 182.662 18.378 189.787C15.198 197.292 14.391 205.781 16.101 213.751C16.287 214.617 16.515 215.505 17.058 216.205C17.601 216.905 18.54 217.371 19.386 217.108C20.403 216.792 20.853 215.643 21.088 214.588C21.39 213.229 21.579 211.848 21.707 210.462C22.283 204.192 22.65 197.828 24.306 191.739C25.771 186.35 28.327 181.126 32.435 177.343C33.221 176.619 34.433 175.696 35.038 174.815C35.238 174.521 35.405 174.089 35.468 173.632Z" fill="white" />
                                            </g>
                                            <path id="Vector_22" opacity="0.2" d="M62.861 161.636H48.1541V162.848H62.861V161.636Z" fill="black" />
                                        </g>
                                        <g id="Group_12">
                                            <path id="Vector_23s" opacity="0.1" d="M132.454 175.21C163 175.21 187.762 150.448 187.762 119.902C187.762 89.3562 163 64.594 132.454 64.594C101.908 64.594 77.146 89.3562 77.146 119.902C77.146 150.448 101.908 175.21 132.454 175.21Z" fill="#7800B0" />
                                            <path id="Vector_24" opacity="0.3" d="M132.454 152.935C152.749 152.935 169.201 136.483 169.201 116.188C169.201 95.8932 152.749 79.441 132.454 79.441C112.159 79.441 95.707 95.8932 95.707 116.188C95.707 136.483 112.159 152.935 132.454 152.935Z" fill="#7800B0" />
                                            <g id="Group_13">
                                                <g id="Group_14">
                                                    <g id="Group_15">
                                                        <g id="Group_16">
                                                            <g id="Group_17">
                                                                <path id="Vector_25" d="M132.279 102.773C138.06 102.841 142.802 98.209 142.87 92.428C142.907 89.291 141.535 86.302 139.131 84.285C138.689 83.92 138.013 83.479 138.028 82.565C138.028 82.537 137.982 80.277 137.982 80.277H126.97C126.97 80.277 126.923 82.625 126.923 82.652C126.923 83.457 126.3 83.804 125.841 84.167C123.405 86.12 121.971 89.06 121.933 92.182C121.865 97.964 126.497 102.705 132.279 102.773Z" fill="#7800B0" />
                                                                <path id="Vector_26" opacity="0.4" d="M132.279 102.773C138.06 102.841 142.802 98.209 142.87 92.428C142.907 89.291 141.535 86.302 139.131 84.285C138.689 83.92 138.013 83.479 138.028 82.565C138.028 82.537 137.982 80.277 137.982 80.277H126.97C126.97 80.277 126.923 82.625 126.923 82.652C126.923 83.457 126.3 83.804 125.841 84.167C123.405 86.12 121.971 89.06 121.933 92.182C121.865 97.964 126.497 102.705 132.279 102.773Z" fill="white" />
                                                                <path id="Vector_27" opacity="0.2" d="M127.074 98.262C127.074 96.224 129.459 94.567 132.417 94.567C135.375 94.567 137.76 96.223 137.76 98.262C137.76 100.301 135.375 101.96 132.417 101.96C129.46 101.96 127.074 100.304 127.074 98.262Z" fill="white" />
                                                            </g>
                                                            <path id="Vector_28" d="M140.378 88.325C141.289 89.887 141.651 91.762 141.387 93.551C141.123 95.34 140.235 97.031 138.911 98.263" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                            <path id="Vector_29" d="M134.666 82.565C133.863 85.298 133.722 88.281 134.262 91.097C134.349 91.552 134.555 92.1 134.963 92.111C135.329 92.12 135.568 91.671 135.647 91.264C135.926 89.825 135.18 88.364 134.226 87.37C133.709 86.832 133.083 86.363 132.384 86.329C131.682 86.295 131.013 86.71 130.505 87.263C129.533 88.321 129.049 89.978 129.401 91.457C129.55 92.082 129.994 92.754 130.552 92.634C130.888 92.562 131.134 92.207 131.221 91.829C131.308 91.451 131.265 91.053 131.216 90.667C130.861 87.884 130.181 85.154 129.201 82.573" stroke="#263238" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                    </g>
                                                    <path id="Vector_30" d="M126.276 79.613H138.618C138.931 79.613 139.184 79.866 139.184 80.179V80.375C139.184 80.688 138.931 80.941 138.618 80.941H126.276C125.963 80.941 125.71 80.687 125.71 80.375V80.179C125.71 79.866 125.964 79.613 126.276 79.613Z" fill="#263238" />
                                                    <path id="Vector_31" opacity="0.3" d="M126.276 79.613H138.618C138.931 79.613 139.184 79.866 139.184 80.179V80.375C139.184 80.688 138.931 80.941 138.618 80.941H126.276C125.963 80.941 125.71 80.687 125.71 80.375V80.179C125.71 79.866 125.964 79.613 126.276 79.613Z" fill="white" />
                                                    <path id="Vector_32" d="M126.477 78.446H138.419C138.722 78.446 138.967 78.691 138.967 78.994V79.184C138.967 79.487 138.722 79.732 138.419 79.732H126.477C126.174 79.732 125.929 79.487 125.929 79.184V78.994C125.928 78.692 126.174 78.446 126.477 78.446Z" fill="#263238" />
                                                    <path id="Vector_33" opacity="0.3" d="M126.477 78.446H138.419C138.722 78.446 138.967 78.691 138.967 78.994V79.184C138.967 79.487 138.722 79.732 138.419 79.732H126.477C126.174 79.732 125.929 79.487 125.929 79.184V78.994C125.928 78.692 126.174 78.446 126.477 78.446Z" fill="white" />
                                                    <path id="Vector_34" d="M127.272 76.128H137.622C137.925 76.128 138.17 76.373 138.17 76.676V76.866C138.17 77.169 137.925 77.414 137.622 77.414H127.272C126.969 77.414 126.724 77.169 126.724 76.866V76.676C126.724 76.373 126.97 76.128 127.272 76.128Z" fill="#263238" />
                                                    <path id="Vector_35" opacity="0.3" d="M127.272 76.128H137.622C137.925 76.128 138.17 76.373 138.17 76.676V76.866C138.17 77.169 137.925 77.414 137.622 77.414H127.272C126.969 77.414 126.724 77.169 126.724 76.866V76.676C126.724 76.373 126.97 76.128 127.272 76.128Z" fill="white" />
                                                    <path id="Vector_36" d="M126.653 77.307H138.243C138.546 77.307 138.791 77.552 138.791 77.855V78.045C138.791 78.348 138.546 78.593 138.243 78.593H126.653C126.35 78.593 126.105 78.348 126.105 78.045V77.855C126.105 77.552 126.35 77.307 126.653 77.307Z" fill="#263238" />
                                                    <path id="Vector_37" opacity="0.3" d="M126.653 77.307H138.243C138.546 77.307 138.791 77.552 138.791 77.855V78.045C138.791 78.348 138.546 78.593 138.243 78.593H126.653C126.35 78.593 126.105 78.348 126.105 78.045V77.855C126.105 77.552 126.35 77.307 126.653 77.307Z" fill="white" />
                                                </g>
                                            </g>
                                            <path id="Vector_38" d="M149.319 72.784H115.484V77.95H149.319V72.784Z" fill="#263238" />
                                            <path id="Vector_39" d="M139.757 78.98H125.047V66.35C125.047 62.888 127.854 60.081 131.316 60.081H133.489C136.951 60.081 139.758 62.888 139.758 66.35V78.98H139.757Z" fill="#263238" />
                                            <g id="Group_18">
                                                <g id="Group_19">
                                                    <path id="Vector_40" d="M133.151 63.518C133.151 49.505 133.151 35.491 133.151 21.478C133.151 15.858 133.151 10.237 133.151 4.61699C133.151 3.65199 131.651 3.64999 131.651 4.61699C131.651 18.63 131.651 32.644 131.651 46.657C131.651 52.277 131.651 57.898 131.651 63.518C131.651 64.483 133.151 64.485 133.151 63.518Z" fill="#263238" />
                                                </g>
                                            </g>
                                            <path id="Vector_41" opacity="0.5" d="M151.097 75.258L115.179 74.669C98.64 81.469 86.994 97.74 86.994 116.731C86.994 141.838 107.347 162.191 132.454 162.191C157.561 162.191 177.914 141.838 177.914 116.731C177.914 98.268 166.907 82.376 151.097 75.258Z" fill="#7800B0" />
                                            <g id="Group_20" opacity="0.2">
                                                <path id="Vector_42" d="M167.252 87.487C162.879 82.289 157.368 78.081 151.097 75.258L115.179 74.669C98.64 81.469 86.994 97.74 86.994 116.731C86.994 126.646 90.178 135.813 95.566 143.284C104.564 146.019 114.547 145.222 123.344 141.779C133.299 137.883 141.803 130.816 148.523 122.502C155.243 114.188 160.278 104.64 164.61 94.867C165.663 92.493 166.687 90.014 167.252 87.487Z" fill="white" />
                                            </g>
                                            <g id="Group_21" opacity="0.3">
                                                <path id="Vector_43" d="M112.357 83.571C112.539 82.245 110.972 81.35 109.86 82.094C103.428 86.397 98.2819 92.604 95.2619 99.73C92.0809 107.236 91.2739 115.728 92.9839 123.699C93.1699 124.565 93.3979 125.454 93.9409 126.154C94.4839 126.854 95.4229 127.32 96.2689 127.057C97.2859 126.741 97.7369 125.592 97.9709 124.536C98.2729 123.177 98.4629 121.795 98.5899 120.409C99.1659 114.137 99.5329 107.772 101.189 101.681C102.655 96.291 105.211 91.065 109.32 87.282C110.106 86.558 111.319 85.634 111.924 84.754C112.126 84.46 112.294 84.028 112.357 83.571Z" fill="white" />
                                            </g>
                                            <path id="Vector_44" opacity="0.2" d="M139.756 71.572H125.046V72.785H139.756V71.572Z" fill="black" />
                                        </g>
                                        <path id="Vector_45" d="M165.827 8.79998H23.686L24.686 0.432983H166.827L165.827 8.79998Z" fill="#263238" />
                                    </g>
                                </g>
                            </svg>

                            <svg id="sofa-1" viewBox="0 0 769 520" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                    <path id="Vector" d="M173.617 368.417L171.47 387.412L157.07 515.077C157.07 515.077 151.872 519.371 145.545 519.597C143.235 519.685 141.076 519.308 139.255 518.806C136.116 517.927 134.02 516.659 134.02 516.659L138.54 393.024L139.444 368.417H173.617Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_2" d="M173.617 368.417L170.738 393.906C157.899 391.04 145.245 394.354 138.258 400.836L139.444 368.417H173.617Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_3" d="M154.02 421.159C150.694 441.659 147.581 506.26 147.355 510.327C147.129 514.394 151.875 517.784 153.118 508.971C154.361 500.158 160.687 436.815 162.608 418.447C164.528 400.079 157.346 400.659 154.02 421.159Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_4" d="M150.693 368.417L139.256 518.806C136.117 517.927 134.021 516.659 134.021 516.659L139.445 368.417H150.693Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_5" d="M579.425 370.451C578.546 371.33 576.174 371.995 571.88 372.234C571.767 372.246 571.641 372.259 571.516 372.259C566.996 372.485 562.477 371.129 562.477 371.129L556.124 332.888L553.676 318.124L553.437 316.668L567.322 314.358L576.487 312.826C576.487 312.826 576.625 314.847 576.839 318.124C577.04 321.25 577.329 325.531 577.617 330.302C578.671 347.05 579.99 369.886 579.425 370.451Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_6" d="M577.617 330.302C570.75 329.775 562.389 331.231 556.124 332.888L553.676 318.124H576.839C577.039 321.251 577.328 325.532 577.617 330.302Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_7" d="M571.88 372.229C571.767 372.241 571.642 372.254 571.516 372.254C566.997 372.48 562.477 371.124 562.477 371.124L553.438 316.663L567.323 314.353L571.88 372.229Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_8" d="M744.615 413.161C744.251 413.412 743.799 413.626 743.272 413.789C742.406 414.065 741.326 414.228 740.146 414.304C737.798 414.467 735.024 414.292 732.576 414.053C729.111 413.689 726.311 413.162 726.311 413.162L691.121 325.282L683.764 306.928L681.893 299.27L681.341 297.01L690.895 296.182L697.147 295.642L704.428 295.002L710.04 294.512L710.982 297.739L717.046 318.567L744.615 413.161Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_9" d="M716.569 316.927C714.033 316.543 709.588 316.505 706.965 317.522C702.426 319.281 695.013 324.301 692.457 328.623L683.765 306.926L681.894 299.268L710.983 297.737L716.569 316.927Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_10" d="M732.576 414.048C729.111 413.684 726.311 413.157 726.311 413.157L683.764 306.922L681.341 297.004L690.895 296.175L732.576 414.048Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_11" d="M743.272 413.785C742.406 414.061 741.326 414.225 740.146 414.299C740.146 414.299 716.819 347.2 710.793 330.629C705.299 315.521 714.323 321.265 716.694 328.845C719.066 336.424 743.272 413.785 743.272 413.785Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_12" d="M764.05 196.217C764.05 202.997 759.078 268.079 755.011 278.925C750.943 289.772 752.638 295.196 746.373 297.907C740.096 300.619 525.868 326.682 516.829 327.887C507.79 329.093 355.932 350.184 334.841 353.197C315.482 355.959 213.402 369.895 189.286 374.025C187.114 374.402 185.583 374.691 184.792 374.892C175.15 377.302 161.29 377.302 148.636 378.507C135.981 379.712 109.466 371.878 85.965 365.249C62.463 358.621 48 357.416 41.372 338.734C34.743 320.053 24.499 258.587 20.883 233.277C17.267 207.968 1.59901 112.152 1.59901 112.152C0.557008 106.227 -0.220981 97.677 1.27302 88.223C3.63302 73.158 11.756 55.783 33.688 43.002C69.393 22.213 127.243 16.337 139.898 14.077C152.553 11.817 212.663 5.48998 231.645 4.58698C250.627 3.68298 271.417 7.74998 291.303 4.58698C311.189 1.42298 365.424 0.971008 374.915 0.971008C382.498 0.971008 430.795 1.26001 468.797 4.14801C478.351 4.87601 487.239 5.75498 494.684 6.84698C531.745 12.27 591.403 32.609 605.413 41.196C619.424 49.784 637.05 66.957 652.417 70.121C667.784 73.285 711.623 75.544 728.798 79.612C736.444 81.42 744.453 83.504 751.258 85.977C759.745 89.053 766.361 92.732 768.119 97.239C771.281 105.374 764.05 189.438 764.05 196.217Z" fill="#C800E8" />
                                    <path id="Vector_13" d="M184.189 65.376C183.079 66.956 178.314 72.782 180.121 76.197C181.928 79.612 185.511 84.358 188.691 84.81C191.871 85.262 197.63 87.07 199.722 84.81C201.814 82.55 201.362 78.466 198.876 75.649C196.392 72.833 188.03 59.91 184.189 65.376Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_14" d="M262.788 61.308C259.318 62.986 256.954 70.105 259.44 72.034C261.926 73.963 264.411 73.511 265.767 76.675C267.123 79.839 269.383 82.55 270.964 83.906C272.546 85.262 279.325 82.776 279.325 81.194C279.325 79.612 279.099 72.364 278.195 72.034C277.292 71.703 268.396 58.596 262.788 61.308Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_15" d="M347.119 57.015C343.927 58.488 341.47 65.15 345.763 68.766C350.057 72.382 350.508 75.093 351.864 76.449C353.22 77.805 360.451 78.031 362.711 75.545C364.971 73.059 364.293 66.506 361.129 65.828C357.965 65.15 352.995 54.303 347.119 57.015Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_16" d="M424.856 54.981C423.2 55.947 420.336 62.212 423.726 65.376C427.116 68.54 425.76 69.465 428.471 72.618C431.183 75.771 436.929 78.031 438.463 74.415C439.996 70.799 441.352 64.472 437.285 62.212C433.217 59.952 427.568 53.399 424.856 54.981Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_17" d="M505.982 49.482C505.553 49.689 500.559 51.556 502.216 54.737C503.873 57.918 502.216 59.877 502.969 62.438C503.722 64.999 506.283 68.464 510.652 67.259C515.021 66.054 517.281 66.458 518.034 65.503C518.787 64.548 518.486 58.982 516.076 58.752C513.666 58.522 509.598 54.002 509.447 52.948C509.297 51.892 507.716 48.646 505.982 49.482Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_18" d="M197.296 138.593C196.311 136.733 189.186 133.396 189.286 138.593C189.387 143.791 187.83 146.954 189.286 150.118C190.742 153.282 195.262 153.96 197.296 154.638C199.33 155.316 202.267 155.316 202.945 153.056C203.623 150.796 204.008 147.863 202.007 145.827C200.007 143.79 197.296 138.593 197.296 138.593Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_19" d="M282.038 134.749C280.856 132.001 273.677 132.939 273.677 134.749C273.677 136.559 276.163 141.531 276.841 144.468C277.519 147.405 278.389 152.603 284.281 151.247C290.173 149.891 291.192 148.761 291.135 146.727C291.077 144.694 282.038 134.749 282.038 134.749Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_20" d="M365.424 127.972C364.449 125.926 359.774 122.77 358.419 125.484C357.063 128.198 353.899 133.622 356.837 134.526C359.775 135.43 361.357 135.656 362.712 139.045C364.068 142.435 365.198 143.791 367.457 144.243C369.717 144.695 372.655 144.695 373.784 140.853C374.914 137.011 367.457 132.142 367.457 132.142L365.424 127.972Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_21" d="M442.913 124.431C441.007 121.935 440.624 116.928 438.39 120.303C436.155 123.678 433.896 127.09 435.477 130.468C437.059 133.847 441.579 138.09 444.516 137.776C447.454 137.462 453.513 135.828 452.415 133.021C451.316 130.215 442.913 124.431 442.913 124.431Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_22" d="M428.687 26.929C426.556 24.799 433.368 49.482 433.368 55.508C433.368 61.534 449.94 57.316 449.94 57.316C449.94 57.316 447.831 53.7 445.42 52.495C443.01 51.29 443.311 49.181 441.804 47.674C440.297 46.168 440.398 48.277 438.389 45.264C436.381 42.251 433.206 31.448 428.687 26.929Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_23s" d="M507.467 24.646C507.467 24.646 510.803 45.5649 510.502 52.1939C510.201 58.8229 521.048 54.906 521.048 54.906C521.048 54.906 526.471 49.784 521.048 44.662C515.624 39.54 516.452 40.021 515.548 38.515C514.644 37.007 509.576 24.558 507.467 24.646Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_24" d="M352.607 31.12C352.607 31.12 356.535 49.038 355.932 58.751C355.329 68.464 364.067 61.09 364.067 58.751C364.067 56.412 364.777 52.34 362.97 51.436C361.162 50.532 358.801 45.634 358.198 40.813C357.596 35.993 354.415 31.723 352.607 31.12Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_25" d="M268.868 35.802C269.834 43.184 274.581 58.507 274.882 63.636C275.183 68.765 283.62 67.861 284.524 65.451C285.428 63.04 287.715 59.756 286.334 57.925C284.089 54.95 282.472 55.755 279.402 51.892C276.401 48.118 268.868 31.734 268.868 35.802Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_26" d="M189.539 41.453C190.384 47.703 193.136 59.67 193.333 67.381C193.53 75.092 210.403 69.914 213.114 67.381C215.826 64.848 209.197 66.355 205.883 65.149C202.569 63.944 201.296 64.335 199.723 59.123C198.045 53.563 192.097 41.941 189.539 41.453Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_27" d="M200.007 135.757C200.007 133.395 200.76 129.775 203.171 129.099C205.582 128.423 206.598 129.779 207.709 131.361C208.82 132.943 210.402 133.39 213.566 134.748C216.73 136.106 220.119 135.428 219.667 139.044C219.215 142.66 211.681 145.754 208.82 145.823C205.959 145.892 204.074 144.241 203.171 143.563C202.267 142.886 200.007 135.757 200.007 135.757Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_28" d="M284.749 132.265C284.906 129.261 283.619 124.82 284.749 122.441C285.879 120.062 288.817 118.706 290.624 123.678C292.432 128.649 295.822 129.101 297.629 132.265C299.437 135.429 293.994 138.99 290.172 137.374C286.351 135.757 284.749 132.265 284.749 132.265Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_29" d="M369.039 125.484C368.273 122.759 367.457 118.933 367.457 116.899C367.457 114.865 368.726 110.225 371.223 113.84C373.093 116.547 374.261 120.544 376.961 120.303C379.66 120.062 385.762 122.322 385.762 124.13C385.762 125.938 387.44 127.515 384.68 129.099C381.92 130.683 370.303 130.457 370.303 130.457L369.039 125.484Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_30" d="M445.194 122.442C444.342 119.24 443.32 116.197 442.934 114.188C442.611 112.504 443.528 107.535 444.402 107.295C446.632 106.685 448.583 109.197 449.939 112.031C451.295 114.865 452.425 115.543 455.137 116.899C457.849 118.255 461.916 120.075 461.916 122.442C461.916 124.809 459.204 126.842 456.718 126.842C454.233 126.842 445.194 122.442 445.194 122.442Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_31" d="M710.041 232.6C714.277 234.147 718.854 235.826 722.47 233.196C726.086 230.566 725.634 210.276 725.634 206.636C725.634 202.996 733.191 157.801 732.577 154.637C731.962 151.473 732.356 120.739 732.577 112.605C732.866 101.984 744.073 104.8 750.04 97.088C752.991 93.274 693.319 94.255 683.376 92.447C673.433 90.639 649.325 87.641 639.536 85.668C633.365 84.424 612.399 81.765 605.639 73.013C598.88 64.262 574.083 42.501 553.439 37.128C546.225 35.251 533.072 34.144 531.717 38.664C530.362 43.184 531.774 51.862 531.746 61.534C531.717 71.205 521.644 82.262 515.927 92.267C508.865 104.627 503.932 119.384 500.784 132.141C498.893 139.804 479.328 160.154 451.754 166.434C424.18 172.715 543.497 174.07 543.497 174.07L710.041 232.6Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_32" d="M715.69 207.516C715.69 211.672 715.589 216.467 713.619 220.61C712.652 222.681 711.221 224.59 709.112 226.172C706.714 227.98 703.437 229.373 698.968 230.114C682.698 232.826 625.751 235.538 605.413 238.702C585.075 241.866 525.417 248.193 510.502 248.645C495.587 249.097 414.235 261.3 400.676 262.203C387.117 263.107 327.911 270.791 315.256 273.05C302.601 275.31 233.452 279.829 225.317 280.281C217.182 280.733 200.007 283.445 185.545 282.089C171.082 280.733 160.085 268.53 160.085 268.53V189.802C168.509 188.823 232.398 185.069 244.45 185.069C256.502 185.069 312.545 179.47 331.828 178.352C351.111 177.234 408.962 168.798 421.617 168.798C434.272 168.798 484.288 162.772 493.328 162.169C502.367 161.567 570.161 156.445 588.239 157.348C606.317 158.252 644.282 158.704 656.937 162.319C669.592 165.934 691.738 166.839 699.421 170.002C707.104 173.166 713.431 172.714 715.691 178.137C717.95 183.562 715.69 198.929 715.69 207.516Z" fill="#C800E8" />
                                    <path id="Vector_33" d="M709.112 226.172C706.714 227.98 703.437 229.373 698.968 230.114C682.698 232.826 625.751 235.538 605.413 238.702C585.075 241.866 525.417 248.193 510.502 248.645C495.587 249.097 414.235 261.3 400.676 262.203C387.117 263.107 327.911 270.791 315.256 273.05C302.601 275.31 233.452 279.829 225.317 280.281C217.182 280.733 200.007 283.445 185.545 282.089C171.082 280.733 167.467 270.217 167.467 270.217L160.085 219.204C162.32 220.196 164.592 221.339 166.563 222.43C173.041 226.046 182.834 226.046 193.329 224.238C202.958 222.581 227.515 219.781 228.055 219.781C228.03 219.806 227.866 219.819 227.578 219.856C223.059 220.433 214.471 228.305 208.596 231.921C202.721 235.537 207.24 244.576 208.596 250.903C209.952 257.23 223.963 265.817 233.454 268.078C242.945 270.338 292.66 262.202 307.575 261.75C322.49 261.298 353.223 256.326 373.109 256.326C392.995 256.326 438.191 245.931 454.461 245.931C470.732 245.931 509.148 239.152 522.255 238.248C535.362 237.344 557.508 234.632 567.903 233.728C578.298 232.824 606.319 226.497 619.878 227.426C633.437 228.342 656.939 226.497 681.796 224.689C695.478 223.699 704.228 224.615 709.112 226.172Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_34" d="M182.381 277.57C177.592 277.159 174.246 280.13 173.643 282.466C173.04 284.801 182.08 295.347 191.42 294.443C200.761 293.539 201.363 294.553 206.184 294.498C211.005 294.443 225.769 288.718 230.288 288.718C234.808 288.718 247.462 286.326 251.982 286.015C256.502 285.704 281.811 285.704 284.523 284.801C287.235 283.897 307.723 279.679 312.846 279.076C317.968 278.473 348.701 275.762 357.74 275.762C366.779 275.762 375.517 273.351 379.133 271.544C382.749 269.736 410.167 266.723 416.796 266.422C423.425 266.121 444.516 263.71 450.843 261.902C457.17 260.094 491.519 257.382 498.75 256.78C505.981 256.177 510.802 254.068 516.828 253.164C522.854 252.26 559.915 249.548 566.845 249.247C573.775 248.946 597.879 245.33 605.111 244.426C612.342 243.522 631.927 242.919 641.268 242.015C650.608 241.111 662.359 241.714 667.783 240.207C673.207 238.701 678.931 237.495 685.861 237.495C692.791 237.495 706.651 235.386 711.171 235.386C715.691 235.386 716.494 229.661 716.695 228.155C716.896 226.648 719.005 210.077 718.704 207.365C718.403 204.653 705.748 210.378 705.748 210.378L182.381 277.57Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_35" d="M108.259 362.241L100.714 378.097L66.98 449.017C66.98 449.017 60.05 451.277 54.627 450.222C54.275 450.159 53.949 450.084 53.622 450.021C48.939 448.966 47.094 447.51 47.094 447.51L73.421 379.202L82.046 356.818L95.981 359.705L108.259 362.241Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_36" d="M108.259 362.241L100.714 378.097C89.767 376.239 79.673 377.733 73.421 379.202L82.046 356.818L95.981 359.705L108.259 362.241Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_37" d="M95.981 359.705L53.622 450.021C48.939 448.966 47.094 447.51 47.094 447.51L82.045 356.817L95.981 359.705Z" fill="#CD9FE2" fillOpacity="0.8" />
                                    <path id="Vector_38" d="M710.492 194.138C709.16 189.575 706.198 187.585 700.324 186.01C697.995 185.386 688.875 182.997 682.547 182.997C676.22 182.997 662.058 182.696 643.377 182.997C624.696 183.299 578.304 186.917 569.256 186.312C561.651 185.803 520.445 193.544 504.174 194.146C487.904 194.749 423.424 202.344 407.757 201.867C392.089 201.377 335.444 205.595 314.353 207.403C293.262 209.211 242.04 214.635 235.411 214.032C228.782 213.429 210.102 215.237 200.46 215.84C190.818 216.443 181.177 222.468 172.137 217.648C168.823 215.878 164.391 213.606 160.085 211.308V189.84C168.509 188.861 232.398 185.107 244.45 185.107C256.502 185.107 312.545 179.508 331.828 178.39C351.111 177.272 408.962 168.836 421.617 168.836C434.272 168.836 484.288 162.81 493.328 162.207C502.367 161.605 570.161 156.483 588.239 157.386C606.317 158.29 644.282 158.742 656.937 162.357C669.592 165.972 691.738 166.877 699.421 170.04C707.104 173.204 713.431 172.752 715.691 178.175C716.954 181.206 717.178 187.378 716.428 193.669C714.109 213.12 711.107 196.245 710.492 194.138Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_39" d="M193.941 80.076C198.06 80.076 201.399 76.7369 201.399 72.618C201.399 68.499 198.06 65.16 193.941 65.16C189.822 65.16 186.483 68.499 186.483 72.618C186.483 76.7369 189.822 80.076 193.941 80.076Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_40" d="M273.26 75.403C277.379 75.403 280.718 72.0639 280.718 67.945C280.718 63.8261 277.379 60.487 273.26 60.487C269.141 60.487 265.802 63.8261 265.802 67.945C265.802 72.0639 269.141 75.403 273.26 75.403Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_41" d="M358.425 70.9738C362.234 69.4048 364.049 65.0458 362.48 61.2374C360.911 57.429 356.552 55.6136 352.744 57.1825C348.935 58.7514 347.12 63.1105 348.689 66.9189C350.258 70.7272 354.617 72.5427 358.425 70.9738Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_42" d="M425.059 60.848C425.059 56.729 428.398 53.39 432.517 53.39C436.636 53.39 439.975 56.729 439.975 60.848C439.975 64.967 436.636 68.306 432.517 68.306C428.398 68.306 425.059 64.967 425.059 60.848Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_43" d="M511.388 64.262C515.507 64.262 518.846 60.923 518.846 56.804C518.846 52.6851 515.507 49.346 511.388 49.346C507.269 49.346 503.93 52.6851 503.93 56.804C503.93 60.923 507.269 64.262 511.388 64.262Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_44" d="M195.35 78.692C199.027 78.692 202.008 75.7111 202.008 72.034C202.008 68.3569 199.027 65.376 195.35 65.376C191.673 65.376 188.692 68.3569 188.692 72.034C188.692 75.7111 191.673 78.692 195.35 78.692Z" fill="#C800E8" />
                                    <path id="Vector_45" d="M274.569 74.164C278.246 74.164 281.227 71.1831 281.227 67.506C281.227 63.8289 278.246 60.848 274.569 60.848C270.892 60.848 267.911 63.8289 267.911 67.506C267.911 71.1831 270.892 74.164 274.569 74.164Z" fill="#C800E8" />
                                    <path id="Vector_46" d="M356.987 70.294C360.664 70.294 363.645 67.3131 363.645 63.636C363.645 59.9589 360.664 56.978 356.987 56.978C353.31 56.978 350.329 59.9589 350.329 63.636C350.329 67.3131 353.31 70.294 356.987 70.294Z" fill="#C800E8" />
                                    <path id="Vector_47" d="M433.645 67.015C437.322 67.015 440.303 64.0341 440.303 60.357C440.303 56.6799 437.322 53.699 433.645 53.699C429.968 53.699 426.987 56.6799 426.987 60.357C426.987 64.0341 429.968 67.015 433.645 67.015Z" fill="#C800E8" />
                                    <path id="Vector_48" d="M444.957 134.3C449.076 134.3 452.415 130.961 452.415 126.842C452.415 122.723 449.076 119.384 444.957 119.384C440.838 119.384 437.499 122.723 437.499 126.842C437.499 130.961 440.838 134.3 444.957 134.3Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_49" d="M446.633 132.142C450.31 132.142 453.291 129.161 453.291 125.484C453.291 121.807 450.31 118.826 446.633 118.826C442.956 118.826 439.975 121.807 439.975 125.484C439.975 129.161 442.956 132.142 446.633 132.142Z" fill="#C800E8" />
                                    <path id="Vector_50" d="M376.034 131.133C376.692 127.067 373.93 123.238 369.864 122.58C365.798 121.921 361.969 124.684 361.311 128.75C360.652 132.815 363.415 136.645 367.481 137.303C371.546 137.961 375.376 135.199 376.034 131.133Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_51" d="M370.303 135.757C373.98 135.757 376.961 132.776 376.961 129.099C376.961 125.422 373.98 122.441 370.303 122.441C366.626 122.441 363.645 125.422 363.645 129.099C363.645 132.776 366.626 135.757 370.303 135.757Z" fill="#C800E8" />
                                    <path id="Vector_52" d="M284.28 144.015C288.399 144.015 291.738 140.676 291.738 136.557C291.738 132.438 288.399 129.099 284.28 129.099C280.161 129.099 276.822 132.438 276.822 136.557C276.822 140.676 280.161 144.015 284.28 144.015Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_53" d="M286.351 142.415C290.028 142.415 293.009 139.434 293.009 135.757C293.009 132.08 290.028 129.099 286.351 129.099C282.674 129.099 279.693 132.08 279.693 135.757C279.693 139.434 282.674 142.415 286.351 142.415Z" fill="#C800E8" />
                                    <path id="Vector_54" d="M199.554 149.854C203.673 149.854 207.012 146.515 207.012 142.396C207.012 138.277 203.673 134.938 199.554 134.938C195.435 134.938 192.096 138.277 192.096 142.396C192.096 146.515 195.435 149.854 199.554 149.854Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_55" d="M194.393 141.407C194.393 137.73 197.374 134.749 201.051 134.749C204.728 134.749 207.709 137.73 207.709 141.407C207.709 145.084 204.728 148.065 201.051 148.065C197.374 148.065 194.393 145.084 194.393 141.407Z" fill="#C800E8" />
                                    <path id="Vector_56" d="M512.64 62.662C516.317 62.662 519.298 59.6811 519.298 56.004C519.298 52.3269 516.317 49.346 512.64 49.346C508.963 49.346 505.982 52.3269 505.982 56.004C505.982 59.6811 508.963 62.662 512.64 62.662Z" fill="#C800E8" />
                                    <path id="Vector_57" d="M525.057 125.484C528.734 125.484 531.715 122.503 531.715 118.826C531.715 115.149 528.734 112.168 525.057 112.168C521.38 112.168 518.399 115.149 518.399 118.826C518.399 122.503 521.38 125.484 525.057 125.484Z" fill="#C800E8" />
                                    <path id="Vector_58" d="M766.198 94.302C763.875 94.491 748.306 91.273 739.116 88.229C730.359 85.328 722.115 83.876 710.492 82.806C701.041 81.936 672.98 78.311 663.488 77.684C653.997 77.044 630.743 69.004 628.085 66.385C624.679 63.03 605.487 49.06 600.968 45.444C596.448 41.828 580.479 36.104 570.084 32.94C559.689 29.776 530.55 19.168 516.753 15.163C502.956 11.158 479.317 8.204 469.826 6.396C466.725 5.806 466.951 4.97699 468.797 4.14899C478.351 4.87699 487.239 5.75602 494.684 6.84802C531.745 12.271 591.403 32.61 605.413 41.197C619.424 49.785 637.05 66.958 652.417 70.122C667.784 73.286 711.623 75.545 728.798 79.613C736.443 81.42 759.906 87.024 766.198 94.302Z" fill="#9D3FE7" fillOpacity="0.7" />
                                    <path id="Vector_59" d="M189.286 374.024C187.114 374.401 185.583 374.69 184.792 374.891C175.15 377.301 161.29 377.301 148.636 378.506C135.981 379.711 109.466 371.877 85.965 365.248C62.463 358.62 48 357.415 41.372 338.733C34.743 320.052 24.499 258.586 20.883 233.276C17.267 207.967 1.59901 112.151 1.59901 112.151C0.557008 106.226 -0.220981 97.676 1.27302 88.222L10.562 68.642C11.918 65.591 16.965 66.918 16.965 78.694C16.965 90.458 22.614 107.209 30.524 113.959C34.064 116.98 41.823 124.354 49.958 125.258C58.093 126.162 84.307 127.97 90.634 129.1C96.961 130.23 112.391 134.749 113.031 145.597C113.684 156.444 114.851 216.103 116.521 229.209C118.203 242.316 120.915 277.631 122.271 290.034C123.627 302.425 126.79 332.707 136.281 344.457C145.772 356.208 155.929 368.637 176.706 370.67C182.368 371.225 186.411 372.493 189.286 374.024Z" fill="#6D00C2" fillOpacity="0.9" />
                                    <path id="Vector_60" d="M69.09 82.625C69.407 89.246 69.693 104.922 87.771 110.345C105.849 115.768 138.993 119.384 148.635 126.013C158.277 132.642 163.7 146.502 164.905 157.349C166.11 168.196 170.328 205.558 172.136 217.61C173.944 229.662 175.149 268.229 176.957 274.255C178.765 280.281 178.162 294.744 185.996 296.552C193.83 298.36 196.24 314.63 189.009 315.233C181.778 315.836 169.123 303.181 165.507 285.705C161.891 268.229 155.865 194.108 153.455 177.838C151.045 161.568 148.217 133.997 140.8 130.835C133.383 127.673 114.888 123.001 107.656 121.796C100.425 120.591 90.592 117.675 75.491 115.498C56.885 112.816 35.719 89.737 46.114 67.243C50.594 57.55 60.878 53.579 69.314 51.169C77.751 48.758 84.154 45.858 95.001 44.059C105.848 42.26 132.137 39.422 133.342 43.682C134.547 47.942 128.87 51.409 120.311 53.098C109.062 55.318 73.307 68.766 72.102 72.382C70.898 75.997 68.832 77.228 69.09 82.625Z" fill="#9D3FE7" fillOpacity="0.7" />
                                </g>
                            </svg>


                            <div id="commercials-illus">
                                <svg viewBox="0 0 194 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="left">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" d="M184.627 111.685L249.506 6.83502" stroke="#38303B" strokeWidth="2" strokeMiterlimit="10" />
                                                <path id="Vector_2" d="M184.627 111.685L209.544 71.418" stroke="white" strokeWidth="4" strokeMiterlimit="10" />
                                            </g>
                                            <g id="Group_3">
                                                <path id="Vector_3" d="M225.435 20.077L262.589 20.445L263.028 1.51502L225.886 0.653015L225.435 20.077Z" fill="#332C33" />
                                                <path id="Vector_4" d="M227.804 13.5576L227.711 17.5724L237.577 17.8013L237.67 13.7866L227.804 13.5576Z" fill="#524752" />
                                                <path id="Vector_5" d="M230.382 14.264C231.128 14.281 231.719 14.9 231.702 15.647C231.685 16.393 231.066 16.984 230.319 16.967C229.573 16.95 228.982 16.331 228.999 15.584C229.017 14.838 229.636 14.247 230.382 14.264Z" fill="white" />
                                                <path id="Vector_6" d="M235.069 14.373C235.815 14.39 236.406 15.009 236.389 15.756C236.372 16.503 235.753 17.093 235.006 17.076C234.26 17.059 233.669 16.44 233.686 15.693C233.703 14.947 234.322 14.355 235.069 14.373Z" fill="white" />
                                            </g>
                                        </g>
                                        <g id="Group_4">
                                            <g id="Group_5">
                                                <path id="Vector_7" d="M161.68 166.665C161.68 166.665 151.65 168.045 151.13 163.995C151.13 163.995 142.68 161.585 133.53 154.175C128.22 149.885 122.68 143.915 118.42 135.755C116.33 131.735 114.74 128.055 113.61 124.705C108.46 109.515 112.64 101.305 121.18 101.115C137.41 100.745 144.8 132.965 161.68 142.765C161.68 142.765 157.46 160.195 161.68 166.665Z" fill="#6F5A7B" />
                                                <path id="Vector_8" d="M133.53 154.175C128.22 149.885 122.68 143.915 118.42 135.755C116.33 131.735 114.74 128.055 113.61 124.705C115.05 122.915 116.88 121.765 119.21 121.975C119.21 121.975 137.24 134.155 133.53 154.175Z" fill="#332C33" />
                                                <path id="Vector_9" d="M149.828 164.172C149.09 160.268 148.893 156.262 149.244 152.305" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                                <path id="Vector_10" d="M152.713 135.163C149.113 129.586 141.935 127.675 136.801 123.468C135.658 122.531 134.522 121.04 135.167 119.71C136.973 120.156 138.67 121.035 140.076 122.252" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                            </g>
                                            <g id="Group_6">
                                                <path id="Vector_11" d="M161.675 142.645C169.872 137.719 195.17 100.098 195.17 100.098L204.928 104.078C204.928 104.078 179.858 171.142 161.675 166.545C151.126 163.878 154.291 147.083 161.675 142.645Z" fill="#FE9E8E" />
                                                <path id="Vector_12" d="M204.928 104.199C204.928 104.199 208.818 94.483 208.818 91.516C208.818 88.549 196.752 80.241 193.983 81.032C191.214 81.823 195.565 86.971 195.565 86.971C195.565 86.971 193.523 87.362 193.061 88.746C192.598 90.131 194.379 91.317 194.379 91.317C194.379 91.317 191.808 91.881 192.005 92.588C192.203 93.295 194.576 94.476 194.576 94.476C194.576 94.476 193.645 98.386 195.169 100.218L204.928 104.199Z" fill="#FE9E8E" />
                                                <path id="Vector_13" d="M206.046 88.509C206.046 88.509 207.656 81.974 208.535 79.45C209.415 76.926 203.167 82.472 202.961 86.291L206.046 88.509Z" fill="#FE9E8E" />
                                            </g>
                                        </g>
                                        <g id="Group_7">
                                            <path id="Vector_14" d="M45.382 201.814C45.382 201.814 108.532 211.583 135.291 179.179C135.291 179.179 83.638 161.913 45.382 201.814Z" fill="#332C33" />
                                        </g>
                                        <g id="Group_8">
                                            <g id="Group_9">
                                                <path id="Vector_15" d="M219.942 412.313C219.942 412.313 197.145 440.116 169.916 431.904C169.916 431.904 183.79 411.483 219.942 412.313Z" fill="#332C33" />
                                            </g>
                                            <g id="Group_10">
                                                <g id="Group_11">
                                                    <path id="Vector_16" d="M210.982 425.641L200.313 384.097L171.402 390.554L183.333 433.356L210.982 425.641Z" fill="#FE9E8E" />
                                                </g>
                                                <g id="Group_12">
                                                    <path id="Vector_17" d="M258.324 465.971C258.324 465.971 256.798 452.611 248.992 451.44C241.185 450.269 224.551 447.896 219.275 441.029C214 434.161 210.982 425.64 210.982 425.64L183.333 433.355L189.138 465.97L258.324 465.971Z" fill="#FFFFFD" />
                                                    <path id="Vector_18" d="M209.138 434.472L219.8 431.352L213.74 442.295L224.902 438.985L220.354 449.216L231.321 444.402" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                                </g>
                                            </g>
                                            <g id="Group_13">
                                                <path id="Vector_19" d="M87.356 421.413C87.356 421.413 106.29 440.284 139.074 423.115C139.074 423.115 104.708 408.726 87.356 421.413Z" fill="#332C33" />
                                            </g>
                                            <g id="Group_14">
                                                <g id="Group_15">
                                                    <path id="Vector_20" d="M126.468 425.641L125.192 384.097L94.821 390.554L97.074 433.356L126.468 425.641Z" fill="#FE9E8E" />
                                                </g>
                                                <g id="Group_16">
                                                    <path id="Vector_21" d="M164.69 465.971C164.69 465.971 166.185 452.611 158.643 451.44C151.101 450.269 135.003 447.896 131.28 441.029C127.557 434.161 126.467 425.64 126.467 425.64L97.074 433.355L95.505 465.97L164.69 465.971Z" fill="#FFFFFD" />
                                                    <path id="Vector_22" d="M122.627 434.472L133.994 431.352L125.46 442.295L137.37 438.985L130.508 449.216L142.564 444.402" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                                </g>
                                            </g>
                                            <g id="Group_17">
                                                <path id="Vector_23s" d="M127.034 178.36L219.941 412.313C219.941 412.313 182.575 415.786 169.915 431.904C169.915 431.904 164.427 426.145 166.819 412.494C169.211 398.843 154.079 395.451 151.574 381.752C149.069 368.053 98.439 239.459 98.439 239.459C98.439 239.459 124.893 364.835 128.003 375.121C131.113 385.406 126.327 392.805 127.282 396.799C128.237 400.793 137.068 412.654 139.075 423.115C139.075 423.115 98.078 412.239 87.357 421.413C87.357 421.413 57.532 260.63 52.353 242.485C47.174 224.34 54.53 193.567 64.062 181.966L127.034 178.36Z" fill="#88BFFF" />
                                                <path id="Vector_24" d="M67.147 182.11C63.988 194.877 58.596 210.833 56.345 223.806C55.184 230.497 54.144 237.341 55.196 244.092C56.46 252.197 60.633 259.563 64.091 267.053C73.909 288.318 78.237 311.516 82.479 334.434C84.08 343.083 85.684 351.759 86.21 360.517C86.55 366.186 86.437 371.872 86.95 377.532C87.602 384.731 85.482 378.71 87.133 385.768C89.675 396.631 96.807 411.286 93.325 418.685" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                <path id="Vector_25" d="M98.439 239.459C98.439 239.459 105.123 233.494 108.182 222.533C108.182 222.533 120.244 244.098 107.788 263.356L98.439 239.459Z" fill="#332C33" />
                                                <path id="Vector_26" d="M109.934 188.145C111.495 197.165 112.22 206.329 112.097 215.482" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                <path id="Vector_27" d="M103.273 234.622C110.342 247.794 117.411 260.965 124.48 274.137C133.946 291.775 143.495 309.62 148.564 328.985C154.283 350.836 155.291 376.283 172.326 391.116C174.865 393.326 177.99 395.868 177.613 399.213C177.427 400.867 176.379 402.273 175.6 403.744C172.187 410.193 174.422 419.055 180.485 423.114" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                <path id="Vector_28" d="M78.682 183.822C78.682 183.822 79.554 206.409 60.222 207.154" stroke="white" strokeWidth="0.5" strokeMiterlimit="10" />
                                                <path id="Vector_29" d="M166.71 424.43C166.71 424.43 178.764 406.308 216.505 403.659" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                                <path id="Vector_30" d="M85.146 410.008C85.146 410.008 98.404 399.651 135.602 413.096" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                            </g>
                                        </g>
                                        <g id="Group_18">
                                            <path id="Vector_31" d="M82.548 80.98C69.364 82.553 61.663 87.612 58.642 93.512C55.621 99.412 68.049 101.112 68.049 101.112C68.049 101.112 50.873 107.65 49.06 109.055C47.247 110.46 50.963 157.482 50.661 162.539C50.359 167.596 53.682 170.124 53.682 170.124C53.682 170.124 50.056 173.355 50.963 175.462C51.869 177.569 54.245 182.11 54.245 182.11C54.245 182.11 37.966 197.67 45.382 201.814C45.382 201.814 72.697 178.361 135.291 179.179C135.291 179.179 135.291 173.408 129.376 171.57C129.376 171.57 122.742 163.816 122.906 150.331C123.07 136.846 121.184 101.114 121.184 101.114L104.895 99.379C104.895 99.379 113.859 95.205 109.058 88.558C105.531 83.671 92.626 79.778 82.548 80.98Z" fill="#6F5A7B" />
                                            <path id="Vector_32" d="M60.222 136.484C60.357 137.56 67.52 159.693 50.641 164.176L49.059 141.495L60.222 136.484Z" fill="#332C33" />
                                            <path id="Vector_33" d="M121.811 141.715C116.326 147.279 112.672 154.35 108 160.613C103.328 166.876 97.029 172.641 89.278 173.625C89.133 171.992 89.589 170.313 90.538 168.977" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                            <path id="Vector_34" d="M54.423 182.835C57.987 181.129 61.808 179.96 65.717 179.379C69.221 178.859 72.801 178.807 76.244 177.97" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                            <path id="Vector_35" d="M119.741 172.088C122.73 172.088 125.719 172.088 128.708 172.088" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                            <path id="Vector_36" d="M65.334 130.154L117.368 124.088L118.42 135.755L66.673 143.32L65.334 130.154Z" fill="#886D96" />
                                        </g>
                                        <g id="Group_19">
                                            <g id="Group_20">
                                                <path id="Vector_37" d="M49.06 109.055C33.789 109.923 10.089 162.33 7.02499 161.934C3.96099 161.538 -2.00702 168.314 0.712983 173.366C0.712983 173.366 23.332 166.177 31.053 175.462C31.053 175.462 48.511 157.805 57.235 143.874C65.959 129.943 64.682 108.167 49.06 109.055Z" fill="#6F5A7B" />
                                                <path id="Vector_38" d="M7.02499 161.934C10.15 161.782 13.401 162.281 16.41 163.138C19.51 164.021 22.683 165.441 25.827 164.728C25.98 163.825 25.776 162.867 25.269 162.104" stroke="#38303B" strokeWidth="0.5" strokeMiterlimit="10" />
                                            </g>
                                            <g id="Group_21">
                                                <path id="Vector_39" d="M31.053 175.462L63.505 195.488C63.505 195.488 69.432 191.573 75.729 196.846C75.729 196.846 71.839 206.687 60.614 206.835C60.614 206.835 20.575 193.423 9.762 188.557C-1.051 183.692 -0.231004 174.626 0.711996 173.365C3.697 169.376 23.477 166.893 31.053 175.462Z" fill="#FE9E8E" />
                                            </g>
                                        </g>
                                        <g id="Group_22">
                                            <path id="Vector_40" d="M92.77 86.313C91.939 87.193 91.106 88.077 90.147 88.772C87.11 90.974 82.752 91.033 79.295 88.919L80.426 89.576C79.507 91.686 76.827 92.249 74.664 91.394C72.501 90.539 70.781 88.62 69.304 86.654C68.685 85.831 68.053 84.77 68.381 83.855C68.572 83.323 69.046 83 69.363 82.552C70.223 81.337 69.771 79.432 68.909 78.045C68.047 76.658 66.833 75.537 66.003 74.129C64.594 71.738 64.494 68.609 65.756 66.388C67.171 63.899 70.121 62.454 70.545 59.491C70.846 57.394 69.737 55.134 70.065 53.044C70.529 50.092 73.617 48.74 76.419 48.65C79.221 48.56 82.156 49.265 84.803 48.476C85.438 48.287 86.041 48.016 86.63 47.712C88.191 46.907 88.807 45.122 90.338 44.268C91.87 43.415 93.957 43.221 95.53 44.267C96.702 45.046 97.415 46.373 98.576 47.17C100.558 48.53 103.104 47.952 105.435 48.153C107.237 48.308 109.078 49.01 110.41 50.306C111.741 51.602 112.484 53.528 112.076 55.208C111.832 56.211 111.22 57.056 110.721 57.946C110.222 58.836 109.823 59.863 110.054 60.908C110.286 61.953 111.378 62.935 112.407 62.711C112.66 63.643 112.604 65.25 112.186 66.067C111.708 67.001 110.694 67.559 109.631 67.769C108.568 67.979 107.445 67.887 106.339 67.794C107.368 70.222 108.112 72.911 107.856 75.426C107.593 78.007 106.092 80.227 104.282 82.004C101.468 84.768 96.885 87.276 92.77 86.313Z" fill="#8A525F" />
                                            <g id="Group_23">
                                                <g id="Group_24">
                                                    <g id="Group_25">
                                                        <path id="Vector_41" d="M79.198 79.428L77.92 101.111C77.92 101.111 87.722 111.185 95.18 102.065V80.18L79.198 79.428Z" fill="#FE9E8E" />
                                                        <path id="Vector_42" d="M82.548 84.94C82.548 84.94 82.548 101.024 95.18 99.239V85.769L82.548 84.94Z" fill="#332C33" />
                                                    </g>
                                                    <g id="Group_26">
                                                        <g id="Group_27">
                                                            <path id="Vector_43" d="M103.711 88.253C102.593 92.207 97.931 93.928 92.117 94.427C86.292 94.913 80.816 92.057 79.202 81.667C78.163 74.994 77.746 70.678 78.457 65.652C79.338 59.478 93.427 57.171 98.112 60.875C101.792 63.781 102.492 70.566 102.718 74.508C102.741 74.882 102.774 75.269 102.819 75.68C102.932 76.603 103.09 77.613 103.271 78.648C103.824 81.929 104.478 85.546 103.711 88.253Z" fill="#FE9E8E" />
                                                        </g>
                                                        <g id="Group_28">
                                                            <path id="Vector_44" d="M104.896 65.592C102.96 67.15 98.404 66.732 96.287 65.876C95.137 65.411 94.162 64.601 93.038 64.08C91.913 63.559 90.5 63.368 89.389 64.121C88.808 64.515 88.381 65.119 87.861 65.603C86.722 66.662 85.177 67.092 83.724 67.09C82.271 67.088 80.878 66.697 79.505 66.309C80.639 67.45 81.872 68.831 82.353 70.432C82.834 72.032 82.389 74.152 80.928 75.072C80.391 75.411 79.721 75.601 79.386 76.158C78.761 77.197 79.563 79.016 78.475 79.423C78.116 79.557 77.746 79.399 77.432 79.221C74.349 77.475 72.788 73.606 72.938 69.784C73.088 65.962 80.013 58.071 82.096 56.815C86.067 54.423 95.098 52.371 98.353 54.365C101.605 56.359 104.565 61.531 104.896 65.592Z" fill="#8A525F" />
                                                        </g>
                                                        <g id="Group_29">
                                                            <path id="Vector_45" d="M78.417 76.141C73.974 74.2 69.873 73.456 70.081 78.875C70.289 84.293 75.916 86.794 79.875 84.293C83.835 81.792 81.655 77.555 78.417 76.141Z" fill="#FE9E8E" />
                                                            <path id="Vector_46" d="M72.991 77.654C72.991 77.654 77.706 77.316 77.049 82.311" stroke="#332C33" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path id="Vector_47" d="M76.664 79.428L74.795 80.634" stroke="#332C33" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                        <g id="Group_30">
                                                            <path id="Vector_48" d="M94.63 73.92C95.064 76.56 96.506 78.727 98.819 80.094C99.055 80.233 99.138 80.579 98.928 80.785C97.75 81.942 96.436 82.783 94.897 83.378" stroke="#332C33" strokeWidth="0.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                        <g id="Group_31">
                                                            <g id="Group_32">
                                                                <g id="Group_33">
                                                                    <g id="Group_34">
                                                                        <g id="Group_35">
                                                                            <g id="Group_36">
                                                                                <path id="Vector_49" d="M82.312 79.638C82.486 80.553 83.577 81.113 84.748 80.889C85.919 80.665 86.728 79.741 86.554 78.826C86.38 77.911 85.289 77.351 84.118 77.575C82.946 77.799 82.138 78.723 82.312 79.638Z" fill="#FF755C" />
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="Group_37">
                                                                <g id="Group_38">
                                                                    <g id="Group_39">
                                                                        <g id="Group_40">
                                                                            <g id="Group_41">
                                                                                <g id="Group_42">
                                                                                    <path id="Vector_50" d="M103.271 78.649C103.011 78.811 102.718 78.924 102.39 78.986C101.216 79.211 100.121 78.649 99.951 77.726C99.77 76.816 100.583 75.892 101.757 75.668C102.13 75.593 102.491 75.606 102.818 75.68C102.932 76.603 103.09 77.614 103.271 78.649Z" fill="#FF755C" />
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="Group_43">
                                                            <g id="Group_44">
                                                                <g id="Group_45">
                                                                    <g id="Group_46">
                                                                        <g id="Group_47">
                                                                            <g id="Group_48">
                                                                                <g id="Group_49">
                                                                                    <path id="Vector_51" d="M88.422 72.716C88.46 73.379 88.894 73.894 89.392 73.865C89.889 73.836 90.262 73.276 90.223 72.612C90.185 71.949 89.751 71.435 89.254 71.463C88.757 71.492 88.384 72.053 88.422 72.716Z" fill="#332C33" />
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                            <g id="Group_50">
                                                                <g id="Group_51">
                                                                    <g id="Group_52">
                                                                        <g id="Group_53">
                                                                            <g id="Group_54">
                                                                                <g id="Group_55">
                                                                                    <path id="Vector_52" d="M98.975 72.548C99.013 73.211 99.447 73.725 99.945 73.697C100.442 73.668 100.815 73.107 100.777 72.444C100.739 71.781 100.305 71.266 99.807 71.295C99.309 71.324 98.937 71.885 98.975 72.548Z" fill="#332C33" />
                                                                                </g>
                                                                            </g>
                                                                        </g>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="Group_56">
                                                            <path id="Vector_53" d="M90.218 69.827C87.983 67.033 86.351 71.086 86.883 70.183" stroke="#332C33" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path id="Vector_54" d="M100.974 68.843C98.739 66.049 97.107 70.102 97.639 69.199" stroke="#332C33" strokeWidth="0.75" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        </g>
                                                        <g id="Group_57">
                                                            <path id="Vector_55" d="M90.226 85.697C90.226 85.697 98.403 83.975 102.213 83.671C102.213 83.671 104.06 88.94 97.537 90.106C90.863 91.298 90.226 85.697 90.226 85.697Z" fill="white" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <div id="sub-tag-commercials">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Taking your commercials to the next level.</p>
                            </div>
                            <button id="now-booking-commercials" onClick={() => {
                                gotowedportfolio("section-5")
                            }}>
                                Our Portfolio
                            </button>
                        </div>
                        <div id="akaar-presents">
                            <h4>AKAAR Presents</h4>
                        </div>
                        <button id="scroll-assist" className="sec-1-btn" onClick={() => {
                            gotowedportfolio("contact")
                        }}>
                            Get In Touch
                        </button>
                        <button id="lang-btn">
                            EN
                        </button>
                    </div>
                    <div id="section-5">
                        {/* <div className="portfolio-grid">
                            <div className="left1">
                                <div className="product">
                                    <button className="fullscreen-btn" onClick={() => handleClick("1-video")}></button>
                                    <iframe id="1-video" width="560" height="315" src="https://www.youtube.com/embed/FJGSqtMzmlo?si=48HwWIVNCRaeELEr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false}>

                                    </iframe>
                                </div>
                                <div className="product"></div>
                                <div className="product"></div>
                                <div className="product"></div>
                                
                            </div>
                            <div className="right1">

                            </div>
                            <div className="sec-p-head">
                                <h1 className="common-h1">Akaar Commercial</h1>
                                <p>At Akaar, we don't just make commercials; we craft stories that resonate. Our team of creative visionaries brings your brand to life with stunning videography, immersive animation, and powerful storytelling. Whether you're launching a new product, building brand awareness, or connecting with your audience on a deeper level, we create commercials that captivate, engage, and inspire. Let us turn your vision into a compelling narrative that leaves a lasting impact.</p>
                                <button id="get-in-touch-commercial" onClick={() => {
                                    gotowedportfolio("contact")
                                }}>Get In Touch</button>
                            </div>
                        </div> */}
                        <p className="sec-5-side-h">
                            WHY AKAAR?
                        </p>
                        <div className="para-para">
                            <p className="p1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna eu orci facilisis commodo. Sed vitae purus nec justo egestas aliquet. Cras sagittis ligula at arcu malesuada, a pellentesque lectus vestibulum. Curabitur luctus, risus eu vestibulum malesuada, erat nisl posuere magna, nec feugiat lorem libero sit amet eros. Aenean fermentum arcu non metus iaculis, non hendrerit libero interdum. In ut purus non libero tempus dictum. Nam id eros vel mi ultricies tincidunt.
                            </p>
                            <p className="p2">
                                Praesent euismod, ligula at sollicitudin scelerisque, justo ante interdum risus, at auctor mi dolor ac felis. Suspendisse et justo vitae lectus lacinia viverra. Duis malesuada turpis non nunc hendrerit, ac sagittis lacus convallis. Donec vehicula risus sed risus tincidunt, id tincidunt nulla suscipit. Proin ac augue a orci varius posuere a ac lectus. Integer eget magna at nisl elementum vestibulum. Nulla facilisi. Phasellus a orci libero. Morbi id ante vel ipsum malesuada varius.
                            </p>
                            <p className="p3">
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis finibus lorem non orci consectetur, a bibendum urna malesuada. Ut vehicula, dolor nec gravida hendrerit, neque metus dictum neque, vel tincidunt turpis magna nec purus. Nulla dignissim urna id sapien sollicitudin, nec tincidunt felis interdum. Cras malesuada neque vitae ante elementum, et sodales nulla auctor. Quisque tincidunt quam a nunc ultricies, id aliquam metus vehicula. Vivamus eget lacus sit amet arcu euismod tincidunt.
                            </p>
                        </div>
                    </div>
                    <div id="section-7">
                        <div style={{ marginLeft: "10%" }} >
                            {/* <button className="fullscreen-btn" onClick={() => handleClick("1-video")}></button>
                            <iframe id="1-video" src="https://www.youtube.com/embed/FJGSqtMzmlo?si=48HwWIVNCRaeELEr" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen={false}>

                            </iframe> */}
                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        <div>

                        </div>
                        {/* <div className="portfolio-grid">
                            <div className="left1">
                                <div className="product">
                                </div>
                                <div className="product"></div>
                                <div className="product"></div>
                                <div className="product"></div>
                            </div>
                            <div className="right1">
                            </div>
                            <div className="sec-p-head">
                                <h1 className="common-h1">Akaar Weddings</h1>
                                <p>
                                    Let us be a part of your celebration, ensuring that every detail, every emotion, and every memory is captured in a way that you'll cherish forever. Trust Akaar to turn your wedding day into a masterpiece that you’ll revisit for a lifetime.
                                </p>
                                <button id="get-in-touch-wed" onClick={() => {
                                    gotowedportfolio("contact")
                                }}>Get In Touch</button>
                            </div>
                        </div> */}
                    </div>
                    <div id="section-6">
                        {/* <div className="portfolio-grid">
                            <div className="left1">
                            </div>
                            <div className="right1">
                                <div className="product">
                                </div>
                                <div className="product"></div>
                                <div className="product"></div>
                                <div className="product"></div>
                            </div>
                            <div className="sec-p-head">
                                <h1 className="common-h1">Akaar Fashion</h1>
                                <p>
                                    Our expertise extends beyond traditional advertising, offering cutting-edge fashion photography and videography that captures the essence of your brand. Whether you're launching a new collection, building brand awareness, or connecting with your audience on a deeper level, we create visuals that captivate, engage, and inspire. Let us turn your vision into a compelling narrative that leaves a lasting impact.
                                </p>
                                <button id="get-in-touch-fashion" onClick={() => {
                                    gotowedportfolio("contact")
                                }}>Get In Touch</button>
                            </div>
                        </div> */}
                        <p className="s1">
                            LETS START
                        </p>
                        <p className="s3">
                            YOUR JOURNEY
                        </p>
                        <p className="s2">
                            ENTER
                        </p>
                    </div>
                    <div id="contact">
                        <p className="c1">
                            LETS <span>GET IN TOUCH</span> TO START YOUR JOURNEY
                        </p>
                        {/* <div className="contact-div">
                            <svg id="my-rocket-path" viewBox="0 0 1022 515" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="rocket-path">
                                    <path id="vector-1-rocket" d="M1 443C179.5 681 417.5 231 588.5 340.5C725.3 428.1 821 184.5 953 164" stroke="black" strokeWidth="1" strokeDasharray="20 20" />
                                    
                                </g>

                                <g id="myrocket">
                                    <rect x="0" y="-50" width="100" height="100" fill="transparent" />
                                    <g transform="translate(-150, -50)">
                                        <g id="Group_2">
                                            <g id="Group_3">
                                                <path id="Vector_2" d="M83.8205 44.0577C125.585 15.5632 145.06 33.4697 145.06 33.4697V44.0577V44.1572V55.7462C145.06 55.7462 126.759 72.6527 84.9945 44.1572H84.843C84.8685 44.1407 84.895 44.1257 84.918 44.1077C84.8945 44.0907 84.868 44.0752 84.843 44.0572H83.8205V44.0577Z" fill="#FFC500" />
                                                <path id="Vector_3" d="M105.121 44.3467C137.118 22.2092 144.817 38.9997 144.817 38.9997V44.9742V45.0307C144.817 45.0307 146.07 49.8392 144.817 51.0062C129.273 65.4622 105.121 44.3467 105.121 44.3467Z" fill="#FDEBA1" />
                                            </g>
                                            <g id="Group_4">
                                                <g id="rocket_2_">
                                                    <path id="Vector_4" d="M144.516 57.7232L144.857 31.7022L153.036 31.8207L152.698 57.8402L144.516 57.7232Z" fill="#DF3428" />
                                                    <path id="Vector_5" d="M187.752 46.0607C187.423 71.1527 167.768 91.2177 143.846 90.8772C138.288 90.7962 132.994 89.6097 128.14 87.5382C144.356 81.1582 156.002 64.8722 156.253 45.6092C156.503 26.3452 145.288 9.73065 129.245 2.89265C134.15 0.960153 139.471 -0.073848 145.031 0.00465205C168.953 0.347152 188.08 20.9672 187.752 46.0607Z" fill="#FF7748" />
                                                    <path id="Vector_6" d="M154.947 33.9872C151.591 19.8567 141.943 8.30815 129.245 2.89215C134.15 0.959649 139.472 -0.0743362 145.032 0.00416383C165.13 0.293664 181.837 14.8987 186.47 34.4397L154.947 33.9872Z" fill="#DF3428" />
                                                    <path id="Vector_7" d="M201.477 74.3332C181.062 74.0402 162.439 69.2422 148.052 61.5257C149.646 56.4917 150.553 51.1172 150.624 45.5287C150.698 39.9402 149.933 34.5442 148.47 29.4622C163.052 22.1662 181.792 17.9017 202.207 18.1947C234.636 18.6597 262.567 30.4747 276.122 47.3282C262.132 63.7862 233.906 74.7982 201.477 74.3332Z" fill="#E2E2E2" />
                                                    <path id="Vector_8" d="M275.551 47.3452C261.376 63.4437 233.478 74.7927 201.477 74.3337C181.061 74.0407 162.438 69.2427 148.051 61.5262C149.412 57.2302 150.266 50.1762 150.534 45.4627L275.551 47.3452Z" fill="white" />
                                                    <path id="Vector_9" d="M244.488 67.5962L240.721 68.8327C240.721 68.8327 243.626 44.8532 240.87 24.2347L245.026 26.1632C245.026 26.1622 247.935 53.8567 244.488 67.5962Z" fill="#FFAE00" />
                                                    <path id="Vector_10" d="M159.403 50.9622C145.915 50.7687 134.272 48.1537 128.585 44.4972C134.364 41.0067 146.072 38.7227 159.56 38.9162C173.047 39.1097 184.692 41.7282 190.378 45.3817C184.598 48.8737 172.89 51.1567 159.403 50.9622Z" fill="#FF7748" />
                                                    <path id="Vector_11" d="M128.865 44.6632C128.775 44.6052 128.674 44.5522 128.585 44.4972C134.364 41.0067 146.071 38.7227 159.559 38.9162C173.047 39.1097 184.692 41.7282 190.378 45.3817C190.288 45.4342 190.182 45.4852 190.095 45.5407L128.865 44.6632Z" fill="#DF3428" />
                                                    <path id="Vector_12" d="M244.488 67.5962C245.003 60.8567 245.33 53.9457 245.421 46.8882C245.513 39.8322 245.369 32.9142 245.026 26.1627C258.301 31.3072 269.134 38.6402 276.122 47.3282C268.91 55.8137 257.891 62.8332 244.488 67.5962Z" fill="#FF7748" />
                                                    <path id="Vector_13" d="M245.425 46.2032C245.497 39.3852 245.357 32.6942 245.026 26.1622C258.301 31.3067 269.134 38.6397 276.122 47.3277C275.992 47.4807 275.851 47.6297 275.719 47.7812L245.425 46.2032Z" fill="#DF3428" />
                                                    <path id="Vector_14" d="M228.744 46.4746L228.743 46.6482C228.7 49.9687 227.425 53.0766 225.151 55.3986C222.877 57.7201 219.881 58.9741 216.716 58.9291C210.263 58.8346 205.012 53.2517 205.011 46.4817L205.013 46.3077C205.102 39.4442 210.498 33.9356 217.041 34.0301C223.495 34.1241 228.744 39.7061 228.744 46.4746Z" fill="#FFAE00" />
                                                    <path id="Vector_15" d="M225.861 46.6077C225.795 51.8052 221.709 55.9757 216.756 55.9052C211.799 55.8327 207.828 51.5482 207.896 46.3502C207.963 41.1542 212.045 36.9827 217.002 37.0542C221.954 37.1252 225.929 41.4122 225.861 46.6077Z" fill="#C0F6FF" />
                                                </g>
                                            </g>
                                        </g>

                                    </g>
                                   
                                    <animateMotion dur="5s" repeatCount="indefinite">
                                        <mpath href="#vector-1-rocket" />
                                    </animateMotion>
                                </g>

                            </svg>
                            <div className="heading">
                                <p >Contact Us</p>
                            </div>

                            <button id="get-in-touch-fashion" style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", backgroundColor: "#2E4BF5" }}>
                                Send
                            </button>
                        </div> */}
                    </div>
                </div >
            </ReactLenis >
        </>
    );
}