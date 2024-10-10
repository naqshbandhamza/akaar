"use client"
import Image from "next/image";
import "./styles.scss";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import VideoComponent from "../ui/video-component";
import the1 from "../../../videos/1.mp4"
import the2 from "../../../videos/2.mp4"
import the3 from "../../../videos/3.mp4"
import the4 from "../../../videos/4.mp4"
import the5 from "../../../videos/5.mp4"
import the6 from "../../../videos/6.mp4"
import the7 from "../../../videos/7.mp4"
import the8 from "../../../videos/8.mp4"
import the9 from "../../../videos/9.mp4"
import the10 from "../../../videos/10.mp4"
import the11 from "../../../videos/11.mp4"
import the12 from "../../../videos/12.mp4"
import the13 from "../../../videos/13.mp4"
import the14 from "../../../videos/14.mp4"
import the15 from "../../../videos/15.mp4"
import the16 from "../../../videos/16.mp4"
import the17 from "../../../videos/17.mp4"
import the18 from "../../../videos/18.mp4"
import the19 from "../../../videos/19.mp4"



let scrolltween1: any;

export default function LandingPage() {
    const lenis: any = useLenis(({ scroll }) => {
    })
    const [pageloaded, setPageLoaded] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const ctxRef: any = useRef(null);

    const [videoData, setVideodata] = useState<any>([]);

    // const videos = videoData.map((video, index) => (
    //     <video key={index} src={video.src} width={video.w} height={video.h} style={{ position: "absolute", left: video.left, top: video.top }} controls autoPlay loop muted />
    // ));

    // useEffect for page preloader
    useEffect(() => {
        setScreenWidth(window.innerWidth);
        let preloader: any = document.getElementById('loading');
        gsap.timeline().to(preloader, { backgroundColor: "#ffffff", duration: 1, ease: "power4.inOut" }).to(preloader, { transform: "scale(1.5)", duration: 1.5, ease: "power3.out" }, "<")
        if (document.readyState === 'complete') {
            setTimeout(() => {
                setPageLoaded(true);
            }, 3000)
        }

        setVideodata([
            { src: the1, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the2, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the3, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the4, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the5, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the6, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the7, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the8, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the9, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the10, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the11, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the12, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the13, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the14, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the15, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the16, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the17, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the18, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },
            { src: the19, w: 250, h: 150, left: `${Math.random() * window.innerWidth}px`, top: `${Math.random() * window.innerHeight}px` },

            // Add more video objects as needed
        ])

        const handlePageLoad = () => {
            setPageLoaded(true);
        };

        window.addEventListener('load', handlePageLoad);
        return () => window.removeEventListener('load', handlePageLoad);
    }, []);

    const handleResize = () => {
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
        window.scrollTo(0, 0);
        if (pageloaded) {

            let preloader: any = document.getElementById('loading');
            let content: any = document.getElementById('content');

            gsap.to(preloader, {
                opacity: 0, duration: 1.75, ease: "expo.inOut", onComplete: () => {
                    preloader.style.display = 'none';
                }
            })
            content.style = "display: block;"
            gsap.fromTo(".slider-container", { opacity: 0 }, { opacity: 1 })

            ctxRef.current = gsap.context(() => {
                gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

                if (screenWidth > 1000 || true) {

                    // horizontal scroll
                    let sections: any = gsap.utils.toArray(".panels");
                    let scrolltween: any = gsap.to(sections, {
                        xPercent: -100 * (sections.length - 1),
                        ease: "none",
                        scrollTrigger: {
                            trigger: ".slider-container",
                            pin: true,
                            scrub: 1,
                            snap: {
                                snapTo: 1 / (sections.length - 1),
                                inertia: false,
                                duration: { min: 0.1, max: 1.5 }
                            },
                            start: "top top",
                            end: () => screenWidth * 8 + 100,
                            id: 'horizontalScroll', // You can give it an ID for easy reference
                        }
                    });
                    scrolltween1 = scrolltween

                    //section 1
                    let tl = gsap.timeline({})
                    tl.fromTo("#main-heading", {
                        yPercent: 100, opacity: 1,
                    }, { yPercent: 0, opacity: 1, duration: 1.7, delay: 1, ease: "power4.out" })
                    tl.to(["#ca"], { opacity: 1, duration: 1, ease: "expo.in" }, "-=0.75")
                    tl.to(
                        "#sub-script", { opacity: 1, duration: 1, ease: "expo.in" }, "-=0.5"
                    ).fromTo(".section-assist", { y: "200%", scale: 1.2 }, { y: 0, scale: 1, duration: 1.25, ease: "power4.out" });

                    const scrollassist0 = gsap.timeline({
                        scrollTrigger: {
                            // markers:true,
                            trigger: "#section-1",
                            containerAnimation: scrolltween,
                            start: "left 10%",
                            toggleActions: "play none none reverse",
                        }
                    }
                    )

                    let olapola0: any = document.getElementById("scroll-id-main");
                    scrollassist0.to(
                        ["#lang-btn", "#e-btn"],
                        { backgroundColor: "#FFFFFF", color: "#EDC68C", duration: 0.25 }
                    );
                    scrollassist0.to(
                        [".section-assist"],
                        { backgroundColor: "#edc68c", color: "#FFFFFF", duration: 0.25 }
                    );
                    scrollassist0.to(
                        [".section-assist #tag"],
                        { color: "#FFFFFF", backgroundColor: "#e7a43e", duration: 0.2, x: olapola0.offsetLeft - 10 }
                    );

                    //section 2
                    sassist(scrolltween, "#section-2", "left 50%", "scroll-id-wed", "#FFF5D8", "#FFC325")


                    lamps(scrolltween, "#section-2 #cealling-lamp", ["#section-2 #cealling-lamp #Group_2", "#section-2 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-3 #cealling-lamp", ["#section-3 #cealling-lamp #Group_2", "#section-3 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-4 #cealling-lamp", ["#section-4 #cealling-lamp #Group_2", "#section-4 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-6 #cealling-lamp", ["#section-6 #cealling-lamp #Group_2", "#section-6 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-7 #cealling-lamp", ["#section-7 #cealling-lamp #Group_2", "#section-7 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-8 #cealling-lamp", ["#section-8 #cealling-lamp #Group_2", "#section-8 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-5 #cealling-lamp", ["#section-5 #cealling-lamp #Group_2", "#section-5 #cealling-lamp #Group_12"])


                    let myanim = gsap.timeline({ paused: true })

                    myanim
                        .to(".bgsss",
                            { left: "0", top: "0", fill: "#FFFBEC", backgroundColor: "#FFFBEC" }
                        )
                        .to(".bgsss",
                            { left: "0", top: "0", fill: "#FFECEC", backgroundColor: "#FFECEC" }
                        )
                        .to(".bgsss",

                            { left: "0", top: "0", fill: "#EBD9F3", backgroundColor: "#EBD9F3" }
                        ).to(".bgsss",

                            { left: "0", top: "0", fill: "#6094A6", backgroundColor: "#DFF2F9" }
                        ).to(".bgsss",

                            { left: "0", top: "0", fill: "#6094A6", backgroundColor: "#DEDEDE" }
                        ).to(".bgsss",

                            { left: "0", top: "0", fill: "#6094A6", backgroundColor: "#CEE0F2" }
                        ).to(".bgsss",

                            { left: "0", top: "0", fill: "#D7DCC6", backgroundColor: "#D7DCC6" }
                        );

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: "#section-1",
                            containerAnimation: scrolltween,
                            start: "top+=10 top",
                            end: `left+=${screenWidth * 7} left`,
                            scrub: true,
                            // markers: true, 
                            onUpdate: (self) => {
                                myanim.progress(self.progress);
                            },
                        }
                    });

                    const mytween1 = gsap.to("#akaar-presents", { opacity: 1, duration: 0.5, paused: true, })

                    gsap.to(["#studio-1", "#studio-2", "#studio-3"], {
                        x: "-5vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-1",
                            containerAnimation: scrolltween,
                            start: "right right",
                            end: "left -=1000",
                            scrub: 1,
                        }
                    })

                    ScrollTrigger.create({
                        // markers:true,
                        containerAnimation: scrolltween,
                        trigger: "#section-2",
                        start: "+=20% center",
                        end: "left -=1000",
                        onEnter: () => {
                            mytween1.play()
                        },
                        onLeaveBack: () => {
                            mytween1.reverse()
                        }
                    })

                    gsap.to(["#wed-clock", "#floor-lamp,#sofa"], {
                        x: "-20vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-2",
                            containerAnimation: scrolltween,
                            start: "+=20% right",
                            end: "left -=1000",
                            scrub: 1,
                        }
                    })

                    gsap.to(["#windows"], {
                        x: "-20vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-3",
                            containerAnimation: scrolltween,
                            start: "+=20% right",
                            end: "left -=1000",
                            scrub: 1,
                        }
                    })

                    gsap.to(["#mirror"], {
                        x: "-40vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-3",
                            containerAnimation: scrolltween,
                            start: "+=20% right",
                            end: "left -=1000",
                            scrub: 1,
                        }
                    })

                    gsap.to(["#sofa-1"], {
                        x: "-20vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-4",
                            containerAnimation: scrolltween,
                            start: "+=20% right",
                            end: "left -=1000",
                            scrub: 1,
                        }
                    })

                    gsap.to(["#graphics-v1", "#graphics-v2"], {
                        x: "-20vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-6",
                            containerAnimation: scrolltween,
                            start: "+=20% right",
                            end: "left -=1000",
                            scrub: 1,
                        }
                    })


                    //section 3
                    sassist(scrolltween, "#section-3", "left 50%", "scroll-id-fashion", "#FFC7C7", "#FF2424")


                    //section 4
                    sassist(scrolltween, "#section-4", "left 50%", "scroll-id-commercial", "#DFC3EC", "#7800B0")


                    //section-6
                    sassist(scrolltween, "#section-6", "left 50%", "scroll-id-graphics-post-prod", "#A9E6FC", "#73D5F9")


                    //section-5
                    sassist(scrolltween, "#section-5", "left 50%", "scroll-id-talent", "#D0DCA9", "#5B8C91")

                    //section-7
                    sassist(scrolltween, "#section-7", "left 50%", "scroll-id-products", "#9A70AA", "#955BAB")

                    //section-8
                    sassist(scrolltween, "#section-8", "left 50%", "scroll-id-socials", "#ADD1F5", "#5BA7F3")
                    //gallery
                    // Number of images and gallery element

                    gsap.fromTo("#g-p", { y: 400 }, {
                        y: -10,
                        scrollTrigger: {
                            // markers: true,
                            trigger: ".gallery-container",
                            start: "top center",
                            end: "bottom top",
                            scrub: 1
                        }
                    })

                    const numImages = 12;
                    const gallery: any = document.querySelector('.gallery');
                    const allvideos = document.querySelectorAll(".gallery video")
                    console.log(allvideos)
                    // gallery.innerHTML = ""

                    // Randomly generate images and append to the gallery
                    // for (let i = 0; i < numImages; i++) {
                    //     // const img = document.createElement('video');
                    //     // if (i === 0)
                    //     //     img.src = `/static/videos/1.mp4`; // Random image source
                    //     // else if (i === 1)
                    //     //     img.src = `/static/videos/2.mp4`; // Random image source
                    //     // else if (i === 2)
                    //     //     img.src = `/static/videos/3.mp4`; // Random image source
                    //     // else if (i === 3)
                    //     //     img.src = `/static/videos/4.mp4`; // Random image source
                    //     // else if (i === 4)
                    //     //     img.src = `/static/videos/5.mp4`; // Random image source
                    //     // else if (i === 5)
                    //     //     img.src = `/static/videos/6.mp4`; // Random image source
                    //     // else if (i === 6)
                    //     //     img.src = `/static/videos/7.mp4`; // Random image source
                    //     // else if (i === 7)
                    //     //     img.src = `/static/videos/8.mp4`; // Random image source
                    //     // else if (i === 8)
                    //     //     img.src = `/static/videos/9.mp4`; // Random image source
                    //     // else if (i === 9)
                    //     //     img.src = `/static/videos/10.mp4`; // Random image source
                    //     // else if (i === 10)
                    //     //     img.src = `/static/videos/11.mp4`; // Random image source
                    //     // else if (i === 11)
                    //     //     img.src = `/static/videos/12.mp4`; // Random image source
                    //     // else if (i === 12)
                    //     //     img.src = `/static/videos/13.mp4`; // Random image source
                    //     // else
                    //     //     img.src = ""

                    //     // img.classList.add('absolute');
                    //     // img.style.width = '250px';
                    //     // img.style.height = '150px';
                    //     // img.autoplay = true
                    //     // img.muted = true
                    //     // img.loop = true
                    //     // img.style.borderRadius = "5px"
                    //     // img.style.objectFit = "cover"
                    //     // img.style.pointerEvents = "none"
                    //     // img.style.boxShadow = "0 3px 10px rgba(0, 0, 0, 0.129)"

                    //     // // Random positioning
                    //     // img.style.left = `${Math.random() * window.innerWidth}px`;
                    //     // img.style.top = `${Math.random() * window.innerHeight}px`;

                    //     // gallery.appendChild(img);

                    //     //Animate each image
                    //     gsap.to(img, {
                    //         x: window.innerWidth * 1.5, // Move out from the right
                    //         duration: gsap.utils.random(10, 20), // Random duration for each image
                    //         repeat: -1,
                    //         ease: "none",
                    //         modifiers: {
                    //             x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth) // Looping modifier
                    //         }
                    //     });
                    // }

                    allvideos.forEach(element => {
                        gsap.to(element, {
                            x: window.innerWidth * 1.5, // Move out from the right
                            duration: gsap.utils.random(10, 20), // Random duration for each image
                            repeat: -1,
                            ease: "none",
                            modifiers: {
                                x: gsap.utils.unitize((x) => parseFloat(x) % window.innerWidth) // Looping modifier
                            }
                        });
                    });

                    // Optional Scroll-based Animation
                    gsap.to('.gallery', {
                        xPercent: -100, // Moves entire gallery on scroll
                        ease: "none",
                        scrollTrigger: {
                            // markers:true,
                            trigger: '.gallery-container',
                            start: 'top top',
                            end: 'bottom+=1000 top',
                            pin: true,
                            scrub: 1, // Smooth scroll effect
                        }
                    });


                    // All the varialbe logic from https://www.youtube.com/watch?v=0DSkgXNFZHs
                    const targets = document.querySelectorAll("#our-brands img");
                    const numberOfTargets = targets.length;
                    const duration = 1.5;
                    const pause = 0; // change this
                    const stagger = duration + pause;
                    const repeatDelay = stagger * (numberOfTargets - 1) + pause;


                    // Postion all the elments just outside of teh container and set their scale to 0
                    gsap.set(targets, {
                        xPercent: 200,
                        scale: 1
                    });

                    // Timeline with default duration
                    const tllogos = gsap.timeline({
                        defaults: {
                            duration: duration,
                            ease: "none" // Set ease to none for continuous flow
                        },
                        // repeat: -1 // Repeat indefinitely
                    });

                    // Animation #1
                    tllogos.to(targets, {
                        xPercent: "-=100", // move from it's current postion 1 postion over
                        scale: 1,
                        transformOrigin: "center left", // set the scale  to come from from the correct side 
                        stagger: {
                            each: stagger,
                            repeat: -1,
                            repeatDelay: repeatDelay
                            // start: 0
                        }
                    });

                    // Animation #2
                    tllogos.to(
                        targets,
                        {
                            xPercent: "-=100", // move from it's current postion 1 postion over
                            stagger: {
                                each: stagger,
                                repeat: -1,
                                repeatDelay: repeatDelay
                                // start: 0
                            }
                        },
                        stagger // start when the first has animated
                    );

                    // Animation #3
                    tllogos.to(
                        targets,
                        {
                            xPercent: "-=100", // move from it's current postion 1 postion over

                            stagger: {
                                each: stagger,
                                repeat: -1,
                                repeatDelay: repeatDelay
                                // start: 0
                            }
                        },
                        stagger * 2 // start when the second has animated
                    );

                    // Animation #4
                    tllogos.to(
                        targets,
                        {
                            xPercent: "-=100", // move from it's current postion 1 postion over
                            transformOrigin: "center right", // change the scale  to come from from the correct side 
                            scale: 1,
                            stagger: {
                                each: stagger,
                                repeat: -1,
                                repeatDelay: repeatDelay
                                // start: 0
                            }
                        },
                        stagger * 3 // start when the third has animated
                    );



                    const timelineanother = gsap.timeline({
                        scrollTrigger: {
                            // markers: true,
                            trigger: '.another',
                            start: 'top top',
                            end: 'bottom+=5000 top',
                            pin: true,
                            toggleActions: "play none none reset"
                            // scrub: 1, // Smooth scroll effect
                        }
                    })

                    timelineanother.fromTo('#another-svg', {
                        y: "0%", x: "-100%"
                    }, { y: "0%", x: "0%", duration: 1.25 }).fromTo("#another-svg svg path", {
                        fill: "#FFECEC"
                    }, {
                        fill: "#EBD9F3", duration: 1.25
                    }, "<").fromTo('#another-svg1', {
                        y: "0%", x: "100%"
                    }, { y: "0%", x: "0%", duration: 1 }, "<");
                    timelineanother.from("#a-1 .line span", {
                        y: 100,
                        ease: "power4.out",
                        delay: 1,
                        skewY: 7,
                        duration: 1,
                        stagger: {
                            amount: 0.3
                        },
                    }, "<").to("#a-1 .line span", {
                        y: 100,
                        ease: "power4.out",
                        delay: 1,
                        skewY: 7,
                        duration: 1,
                        stagger: {
                            amount: 0.3
                        },
                    }).to("#a-2 p", {
                        opacity: 1,
                        duration: 1.75,
                    }, "-=1").to("#a-2 .reveal", {
                        opacity: 1,
                        duration: 4,
                    },"-=1")


                }

            });

            return () => {
                ctxRef.current && ctxRef.current.revert(); // This kills the context
            };
        }
    }, [pageloaded, screenWidth]);

    const goToSection = (id) => {

        let targetElem = document.getElementById(id),
            panelsContainer: any = document.getElementById("slider-id"),
            panels: any = gsap.utils.toArray(".panels"),
            y1: any = targetElem;
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
            let totalScroll = scrolltween1.scrollTrigger.end - scrolltween1.scrollTrigger.start,
                totalMovement = (panels.length - 1) * targetElem.offsetWidth;
            y1 = Math.round(scrolltween1.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
        }
        gsap.to(window, {
            scrollTo: {
                y: y1,
                autoKill: false
            },
            duration: 1
        });
    }

    const lamps = (scrolltween, trigger, targets) => {
        function lamps1() {
            let t = gsap.timeline({
                scrollTrigger: {
                    // markers: true,
                    trigger: trigger,
                    containerAnimation: scrolltween,
                    start: "left-=10 right",
                    toggleActions: "play pause resume reset",
                }
            });

            t.to(targets[0], {
                rotation: 16, duration: 2, ease: "sine.inOut"
            }).to(targets[0], {
                rotation: -5, duration: 1.8, ease: "sine.inOut"
            }).to(targets[0], {
                rotation: 2, duration: 1.5, ease: "sine.inOut"
            }).to(targets[0], {
                rotation: 0, duration: 0.9, ease: "sine.inOut"
            })

            return t;

        }

        function lamps2() {
            let t = gsap.timeline({
                scrollTrigger: {
                    // markers: true,
                    trigger: trigger,
                    containerAnimation: scrolltween,
                    start: "left-=10 right",
                    toggleActions: "play pause resume reset",
                }
            });

            t.to(targets[1], {
                rotation: 12, duration: 2, ease: "sine.inOut"
            }).to(targets[1], {
                rotation: -5, duration: 1.8, ease: "sine.inOut"
            }).to(targets[1], {
                rotation: 1, duration: 1.5, ease: "sine.inOut"
            }).to(targets[1], {
                rotation: 0, duration: 0.9, ease: "sine.inOut"
            })

            return t;

        }

        lamps1();
        lamps2();
    }

    const sassist = (scrolltween, trigger, starts, sid, bgcolor, color) => {

        const scrollassist1 = gsap.timeline({
            scrollTrigger: {
                // markers:true,
                trigger: trigger,
                containerAnimation: scrolltween,
                start: starts,
                toggleActions: "play none none reverse",
            }
        }
        )


        let olapola: any = document.getElementById(sid);
        let ox = olapola.offsetLeft - 20;
        if (trigger === "#section-5")
            ox = olapola.offsetLeft - 35;
        scrollassist1.to(
            ["#lang-btn", "#e-btn"],
            { backgroundColor: "#FFFFFF", color: color, duration: 0.25 }
        );
        scrollassist1.to(
            [".section-assist"],
            { backgroundColor: bgcolor, color: color, duration: 0.25 }
        );
        scrollassist1.to(
            [".section-assist #tag"],
            { color: "#FFFFFF", backgroundColor: color, duration: 0.2, x: ox, ease: "power2.out" }
        );
    }

    return (
        <ReactLenis root options={{
            lerp: 0.05,
            // smoothTouch: true
        }}>
            <div id="loading">
                <div className="intro">
                    <p>Enter</p>
                    <p>AKAAR</p>
                    <p>AGENCY</p>
                </div>
                {/* <div className="text-container" id="loading-image">
                    <Image src={"/static/infinity.gif"} height={60} width={80} alt="infinity" />
                </div> */}
            </div>

            <div id="full-screen-container">
                <button className="close-btn" onClick={() => {
                    close()
                }}>x</button>
                <div id="fscreen">
                </div>
            </div>


            <div id="content">
                <div className="slider-container" id="slider-id">
                    <div className="bgsss">
                    </div>
                    <div id="akaar-presents">
                        <h4>AKAAR Presents</h4>
                    </div>
                    <div id="section-1" className="panels">
                        <div className="sec-top">


                            <div id="our-brands">
                                <h2>Our <span>Trusted</span> Brands</h2>
                                <div className="inner">
                                    <img src={"/static/sat.svg"} />
                                    <img src={"/static/rose.svg"} />
                                    <img src={"/static/sat.svg"} />
                                    <img src={"/static/sat.svg"} />
                                    <img src={"/static/sat.svg"} />
                                    <img src={"/static/sat.svg"} />
                                </div>
                            </div>

                            <div className="cnt-for-h">
                                <div id="headings">
                                    <h1 id="main-heading">AKAAR</h1>
                                </div>
                                <div id="headings1">
                                    <p id="ca"><sup>Creative Agency</sup></p>
                                </div>
                                <p id="sub-script"><span>AKAAR</span> - is a dynamic force in the world of visual storytelling, specializing in creative videography, photography, illustration and animation that captivates and inspires. We blend artistic vision with strategic marketing to craft compelling content that resonates with your audience.</p>
                                <div className="my-btns">
                                    <button>GET IN TOUCH <svg style={{ display: "inline" }} width="15" height="15" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path id="Vector" d="M58.688 320H-1.15032e-05V298.667C-0.322962 268.755 7.59879 239.332 22.8962 213.625C38.1937 187.919 60.2757 166.922 86.72 152.939C112.771 140.094 140.984 132.209 169.92 129.685C157.276 145.33 144.597 161.956 131.883 179.563C103.245 224.041 78.7444 271.05 58.688 320ZM332.437 380.011C287.963 408.685 240.954 433.222 192 453.312V512H213.333C243.245 512.323 272.668 504.401 298.375 489.104C324.081 473.806 345.078 451.724 359.061 425.28C371.906 399.229 379.791 371.016 382.315 342.08C366.741 354.667 350.116 367.31 332.437 380.011ZM512 63.808C509.163 156.672 442.304 248.768 307.584 345.408C270.923 369.174 232.247 389.676 192 406.677V394.667C191.905 374.893 184.007 355.957 170.025 341.975C156.043 327.993 137.107 320.095 117.333 320H105.323C122.345 279.754 142.875 241.084 166.677 204.437C263.083 69.9307 355.029 3.072 447.744 0C493.952 0 512 18.88 512 63.808ZM384 181.333C384 167.188 378.381 153.623 368.379 143.621C358.377 133.619 344.812 128 330.667 128C316.522 128 302.956 133.619 292.954 143.621C282.952 153.623 277.333 167.188 277.333 181.333C277.333 195.478 282.952 209.044 292.954 219.046C302.956 229.048 316.522 234.667 330.667 234.667C344.812 234.667 358.377 229.048 368.379 219.046C378.381 209.044 384 195.478 384 181.333ZM29.312 507.413C53.3333 503.147 111.253 491.243 130.603 471.915C136.546 465.971 141.261 458.915 144.477 451.15C147.694 443.384 149.349 435.061 149.349 426.656C149.349 418.251 147.694 409.928 144.477 402.162C141.261 394.397 136.546 387.341 130.603 381.397C124.659 375.454 117.603 370.739 109.838 367.523C102.072 364.306 93.7493 362.651 85.344 362.651C68.3687 362.651 52.0887 369.394 40.0853 381.397C20.7573 400.747 8.83199 458.667 4.58666 482.688L-0.682678 512.683L29.312 507.413Z" fill="white" />
                                    </svg>
                                    </button>
                                </div>
                            </div>
                            <svg id="studio-1" viewBox="0 0 233 587" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                    <path id="Vector" opacity="0.1" d="M161.153 586.676C200.365 586.676 232.153 583.676 232.153 579.975C232.153 576.274 200.365 573.274 161.153 573.274C121.941 573.274 90.1529 576.274 90.1529 579.975C90.1529 583.676 121.941 586.676 161.153 586.676Z" fill="black" />
                                    <g id="Group_2">
                                        <g id="Group_3">
                                            <g id="Group_4">
                                                <path id="Vector_2" d="M165.155 21.9711H159.155V497.971H165.155V21.9711Z" fill="#EAA949" />
                                                <path id="Vector_3" d="M170.155 164.771C170.155 161.568 167.558 158.971 164.355 158.971H160.955C157.752 158.971 155.155 161.568 155.155 164.771V175.171C155.155 178.374 157.752 180.971 160.955 180.971H164.355C167.558 180.971 170.155 178.374 170.155 175.171V164.771Z" fill="#EDC68C" />
                                                <path id="Vector_4" d="M170.155 299.771C170.155 296.568 167.558 293.971 164.355 293.971H160.955C157.752 293.971 155.155 296.568 155.155 299.771V310.171C155.155 313.374 157.752 315.971 160.955 315.971H164.355C167.558 315.971 170.155 313.374 170.155 310.171V299.771Z" fill="#EDC68C" />
                                                <path id="Vector_5" d="M156.998 440.57L103.896 572.33L109.774 574.699L162.876 442.939L156.998 440.57Z" fill="#EAA949" />
                                                <g id="Group_5">
                                                    <path id="Vector_6" d="M167.486 440.579L161.609 442.948L214.71 574.708L220.588 572.339L167.486 440.579Z" fill="#EAA949" />
                                                    <path id="Vector_7" d="M227.155 572.771C227.155 569.568 224.558 566.971 221.355 566.971H210.955C207.752 566.971 205.155 569.568 205.155 572.771V576.171C205.155 579.374 207.752 581.971 210.955 581.971H221.355C224.558 581.971 227.155 579.374 227.155 576.171V572.771Z" fill="#EDC68C" />
                                                </g>
                                                <path id="Vector_8" d="M118.155 576.172C118.155 579.374 115.558 581.971 112.355 581.971H101.955C98.7519 581.971 96.1549 579.374 96.1549 576.172V572.77C96.1549 569.568 98.7519 566.971 101.955 566.971H112.355C115.558 566.971 118.155 569.568 118.155 572.77V576.172Z" fill="#EDC68C" />
                                                <path id="Vector_9" d="M172.155 434.56C172.155 430.906 169.152 427.971 165.496 427.971H160.991C157.335 427.971 154.155 430.906 154.155 434.56V445.405C154.155 449.059 157.335 451.971 160.991 451.971H165.496C169.152 451.971 172.155 449.059 172.155 445.405V434.56Z" fill="#EDC68C" />
                                            </g>
                                            <path id="Vector_10" d="M170.155 492.77C170.155 489.568 167.558 486.971 164.355 486.971H160.955C157.752 486.971 155.155 489.568 155.155 492.77V503.172C155.155 506.374 157.752 508.971 160.955 508.971H164.355C167.558 508.971 170.155 506.374 170.155 503.172V492.77Z" fill="#EDC68C" />
                                        </g>
                                        <g id="Group_6">
                                            <path id="Vector_11" d="M174.504 55.8941C174.504 55.8941 168.038 68.0041 171.016 77.1781C173.995 86.3511 164.495 90.0021 160.239 85.1851C155.982 80.3681 140.623 48.7521 140.623 48.7521L174.504 55.8941Z" fill="#EDC68C" />
                                            <path id="Vector_12" d="M162.965 78.9961C162.025 80.3241 162.34 82.1611 163.667 83.1011C164.995 84.0411 166.832 83.7251 167.772 82.3971C168.711 81.0701 168.399 79.2331 167.07 78.2921C165.742 77.3541 163.904 77.6691 162.965 78.9961Z" fill="#EAA949" />
                                        </g>
                                        <g id="Group_7">
                                            <path id="Vector_13" d="M192.065 49.436C192.434 50.787 192.354 51.9861 191.46 52.2301L131.558 68.6021C130.664 68.8461 129.639 67.9491 129.27 66.5981L116.342 19.2971C115.974 17.9461 116.399 16.652 117.293 16.408L177.195 0.0370464C178.09 -0.206954 178.769 0.784054 179.138 2.13505L192.065 49.436Z" fill="#EAA949" />
                                            <path id="Vector_14" d="M63.5359 156.935C63.5359 156.935 -16.1011 119.362 2.9419 6.19999C2.9419 6.19999 133.772 -11.434 150.847 31.089C167.921 73.612 106.415 137.72 63.5359 156.935Z" fill="#F2F0C4" />
                                            <path id="Vector_15" d="M63.5359 156.935C63.5359 156.935 73.4289 97.471 2.94189 6.19999C2.94189 6.19999 133.772 -11.434 150.847 31.089C167.921 73.612 106.415 137.72 63.5359 156.935Z" fill="#EAA949" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg id="studio-2" viewBox="0 0 134 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="camera">
                                    <g id="Group">
                                        <path id="Vector" d="M130.849 341.232L70.329 108.393L70.323 108.4V108.393H64.053V108.472L3.55298 340.113L9.89597 343.471L64.053 132.492V343.471H70.323V132.382L124.507 343.471L130.849 341.232Z" fill="#EAA949" fill-opacity="0.956863" />
                                        <g id="Group_2">
                                            <g id="Group_3">
                                                <path id="Vector_2" d="M73.8319 75.752H60.4039V130.563H73.8319V75.752Z" fill="#EDC68C" />
                                                <path id="Vector_3" d="M75.9349 128.495C75.9349 129.809 74.8589 130.885 73.5429 130.885H60.6909C59.3769 130.885 58.2999 129.81 58.2999 128.495V121.302C58.2999 119.988 59.3759 118.912 60.6909 118.912H73.5429C74.8589 118.912 75.9349 119.987 75.9349 121.302V128.495Z" fill="#EDC68C" />
                                                <path id="Vector_4" d="M77.9999 72.932H55.9999V80.932H77.9999V72.932Z" fill="#EDC68C" />
                                            </g>
                                            <g id="Group_4">
                                                <g id="Group_5">
                                                    <path id="Vector_5" d="M117.154 65.525C117.154 69.792 113.662 73.284 109.395 73.284H24.6119C20.3439 73.284 16.8519 69.792 16.8519 65.525V23.91C16.8519 19.643 20.3439 16.151 24.6119 16.151H109.395C113.662 16.151 117.154 19.643 117.154 23.91V65.525Z" fill="#EAA949" />
                                                    <path id="Vector_6" d="M81.6719 0H66.7329H66.7119H51.7699L41.3439 17.151H92.5509L81.6719 0ZM78.2549 12.747H55.6419V4.711H78.2549V12.747Z" fill="#EAA949" />
                                                </g>
                                                <path id="Vector_7" d="M82.9999 23.932H26.9999V64.932H82.9999V23.932Z" fill="#FBF5ED" fill-opacity="0.956863" />
                                                <path id="Vector_8" d="M100.72 64.445C106.167 64.445 110.583 60.0292 110.583 54.582C110.583 49.1348 106.167 44.719 100.72 44.719C95.2728 44.719 90.8569 49.1348 90.8569 54.582C90.8569 60.0292 95.2728 64.445 100.72 64.445Z" fill="#EDC68C" />
                                                <path id="Vector_9" opacity="0.3" d="M100.72 62.267C104.964 62.267 108.405 58.8263 108.405 54.582C108.405 50.3377 104.964 46.897 100.72 46.897C96.4756 46.897 93.0349 50.3377 93.0349 54.582C93.0349 58.8263 96.4756 62.267 100.72 62.267Z" fill="#181919" />
                                                <path id="Vector_10" d="M99.9999 27.932C99.9999 28.485 99.5529 28.932 98.9999 28.932H92.9999C92.4469 28.932 91.9999 28.485 91.9999 27.932V24.932C91.9999 24.379 92.4469 23.932 92.9999 23.932H98.9999C99.5529 23.932 99.9999 24.379 99.9999 24.932V27.932Z" fill="#EDC68C" />
                                                <path id="Vector_11" d="M99.9999 35.932C99.9999 36.485 99.5529 36.932 98.9999 36.932H92.9999C92.4469 36.932 91.9999 36.485 91.9999 35.932V32.932C91.9999 32.379 92.4469 31.932 92.9999 31.932H98.9999C99.5529 31.932 99.9999 32.379 99.9999 32.932V35.932Z" fill="#EDC68C" />
                                                <path id="Vector_12" d="M111 27.932C111 28.485 110.553 28.932 110 28.932H104C103.447 28.932 103 28.485 103 27.932V24.932C103 24.379 103.447 23.932 104 23.932H110C110.553 23.932 111 24.379 111 24.932V27.932Z" fill="#EDC68C" />
                                                <path id="Vector_13" d="M111 35.932C111 36.485 110.553 36.932 110 36.932H104C103.447 36.932 103 36.485 103 35.932V32.932C103 32.379 103.447 31.932 104 31.932H110C110.553 31.932 111 32.379 111 32.932V35.932Z" fill="#EDC68C" />
                                            </g>
                                        </g>
                                    </g>
                                    <path id="Vector_14" d="M14 345.932C14 346.485 13.552 346.932 13 346.932H1C0.448 346.932 0 346.485 0 345.932V338.932C0 338.379 0.448 337.932 1 337.932H13C13.552 337.932 14 338.379 14 338.932V345.932Z" fill="#EAA949" fill-opacity="0.956863" />
                                    <path id="Vector_15" d="M74 345.932C74 346.485 73.552 346.932 73 346.932H61C60.448 346.932 60 346.485 60 345.932V338.932C60 338.379 60.448 337.932 61 337.932H73C73.552 337.932 74 338.379 74 338.932V345.932Z" fill="#EAA949" fill-opacity="0.956863" />
                                    <path id="Vector_16" d="M134 345.932C134 346.485 133.553 346.932 133 346.932H121C120.448 346.932 120 346.485 120 345.932V338.932C120 338.379 120.448 337.932 121 337.932H133C133.553 337.932 134 338.379 134 338.932V345.932Z" fill="#EAA949" fill-opacity="0.956863" />
                                </g>
                            </svg>

                            <svg id="studio-3" viewBox="0 0 277 497" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Group">
                                    <path id="Vector" d="M180.348 15.5336C179.564 16.9936 177.745 17.5416 176.286 16.7586L173.642 15.3406C172.182 14.5566 171.634 12.7375 172.417 11.2785L175.727 5.11055C176.511 3.65055 178.33 3.10254 179.789 3.88554L182.432 5.30354C183.892 6.08754 184.44 7.90655 183.657 9.36555L180.348 15.5336Z" fill="#262626" />
                                    <g id="Group_2">
                                        <g id="Group_3">
                                            <path id="Vector_2" d="M148.699 1.37755C119.117 -2.58845 96.002 2.04754 81.849 14.7895C63.189 31.5905 59.441 62.0826 70.708 105.418C90.198 180.378 104.243 261.367 109.243 327.617C114.603 398.653 109.226 446.381 94.1 462.008C77.048 479.624 50.01 491.078 21.772 492.647C14.439 493.054 7.16 492.783 0 491.868V495.902C4.981 496.516 10.017 496.833 15.088 496.833C17.383 496.833 19.687 496.769 21.994 496.642C51.211 495.019 79.241 483.112 96.974 464.79C117.393 443.695 117.085 378.388 113.231 327.317C108.214 260.84 94.126 179.594 74.579 104.412C63.719 62.6405 67.063 33.4896 84.52 17.7666C116.735 -11.2474 187.133 14.6826 187.84 14.9476L189.246 11.2025C189.065 11.1345 170.818 4.34455 148.699 1.37755Z" fill="#EAA949" />
                                        </g>
                                        <g id="Group_4">
                                            <g id="Group_5">
                                                <path id="Vector_3" opacity="0.1" d="M192 492.402C231.212 492.402 263 489.402 263 485.701C263 482 231.212 479 192 479C152.788 479 121 482 121 485.701C121 489.402 152.788 492.402 192 492.402Z" fill="black" />
                                            </g>
                                            <path id="Vector_4" d="M247.142 79.9875C247.142 79.9875 276.904 71.6186 276.904 31.3266C276.904 31.3266 232.632 17.5976 224.242 31.3266C215.852 45.0546 233.414 70.8355 247.142 79.9875Z" fill="#EAA949" />
                                            <path id="Vector_5" d="M195.538 43.8215H190.538V418.822H195.538V43.8215Z" fill="#EAA949" />
                                            <path id="Vector_6" d="M199.538 164.246C199.538 166.773 197.489 168.822 194.962 168.822H192.114C189.587 168.822 187.538 166.773 187.538 164.246V156.398C187.538 153.871 189.587 151.822 192.114 151.822H194.962C197.489 151.822 199.538 153.871 199.538 156.398V164.246Z" fill="#EDC68C" />
                                            <path id="Vector_7" d="M199.538 270.246C199.538 272.773 197.489 274.822 194.962 274.822H192.114C189.587 274.822 187.538 272.773 187.538 270.246V262.398C187.538 259.871 189.587 257.822 192.114 257.822H194.962C197.489 257.822 199.538 259.871 199.538 262.398V270.246Z" fill="#EDC68C" />
                                            <path id="Vector_8" d="M197.106 373.793L192.468 375.662L234.356 479.638L238.994 477.77L197.106 373.793Z" fill="#EAA949" />
                                            <g id="Group_6">
                                                <path id="Vector_9" d="M188.808 373.812L146.919 477.788L151.557 479.657L193.446 375.68L188.808 373.812Z" fill="#EAA949" />
                                                <path id="Vector_10" d="M158.538 481.246C158.538 483.773 156.489 485.822 153.962 485.822H146.114C143.587 485.822 141.538 483.773 141.538 481.246V478.397C141.538 475.87 143.587 473.822 146.114 473.822H153.962C156.489 473.822 158.538 475.87 158.538 478.397V481.246Z" fill="#EDC68C" />
                                            </g>
                                            <path id="Vector_11" d="M244.538 478.398C244.538 475.871 242.489 473.822 239.962 473.822H232.114C229.587 473.822 227.538 475.871 227.538 478.398V481.246C227.538 483.773 229.587 485.822 232.114 485.822H239.962C242.489 485.822 244.538 483.773 244.538 481.246V478.398Z" fill="#EDC68C" />
                                            <path id="Vector_12" d="M200.538 377.6C200.538 380.484 198.2 382.822 195.316 382.822H191.76C188.876 382.822 186.538 380.484 186.538 377.6V369.043C186.538 366.159 188.876 363.821 191.76 363.821H195.316C198.2 363.821 200.538 366.159 200.538 369.043V377.6Z" fill="#EDC68C" />
                                            <path id="Vector_13" d="M199.538 426.246C199.538 428.773 197.489 430.822 194.962 430.822H192.114C189.587 430.822 187.538 428.773 187.538 426.246V418.398C187.538 415.871 189.587 413.822 192.114 413.822H194.962C197.489 413.822 199.538 415.871 199.538 418.398V426.246Z" fill="#EDC68C" />
                                            <path id="Vector_14" d="M191.642 31.3266C191.642 31.3266 190.287 42.0736 184.187 46.6246C178.087 51.1756 182.541 57.8565 187.479 56.6945C192.417 55.5325 216.72 42.1705 216.72 42.1705L191.642 31.3266Z" fill="#EAA949" />
                                            <path id="Vector_15" d="M227.772 46.4935C226.649 48.7575 223.903 49.6825 221.639 48.5575L176.547 26.1856C174.283 25.0626 173.358 22.3156 174.482 20.0516L182.617 3.65555C183.74 1.39155 186.487 0.466547 188.751 1.59055L233.842 23.9635C236.106 25.0875 237.03 27.8336 235.907 30.0976L227.772 46.4935Z" fill="#EDC68C" />
                                            <path id="Vector_16" d="M188.544 51.4665C188.544 52.7495 187.503 53.7905 186.22 53.7905C184.936 53.7905 183.896 52.7495 183.896 51.4665C183.896 50.1835 184.936 49.1426 186.22 49.1426C187.504 49.1426 188.544 50.1825 188.544 51.4665Z" fill="#EDC68C" />
                                        </g>
                                    </g>
                                </g>
                            </svg>



                            {/* <svg id="studio-1" viewBox="0 0 506 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="plights">
                                    <path id="Vector" d="M445.841 498.375H449.532V157.826L445.841 157.347V498.375Z" fill="#EDC68C" />
                                    <path id="Vector_2" d="M445.65 414.108L433.443 420.82H464.735L451.456 414.108H445.65Z" fill="#EDC68C" />
                                    <path id="Vector_3" d="M438.859 420.82C438.016 420.82 392.237 498.375 392.237 498.375H397.012L444.327 420.82H438.859Z" fill="#EDC68C" />
                                    <path id="Vector_4" d="M458.703 420.82C459.546 420.82 505.325 498.375 505.325 498.375H500.55L453.235 420.82H458.703Z" fill="#EDC68C" />
                                    <g id="Group">
                                        <path id="Vector_5" d="M474.676 450.254C474.664 450.241 474.468 450.392 474.106 450.692C473.709 451.03 473.188 451.472 472.54 452.023C471.15 453.235 469.216 454.923 466.845 456.992C462.031 461.26 455.454 467.091 448.187 473.532C448.065 473.641 447.942 473.75 447.83 473.851L448.168 473.844C440.722 467.774 434.002 462.295 429.087 458.289C426.669 456.349 424.697 454.768 423.281 453.632C422.621 453.117 422.092 452.704 421.687 452.387C421.319 452.107 421.121 451.967 421.109 451.98C421.098 451.994 421.274 452.161 421.621 452.467C422.01 452.802 422.519 453.241 423.153 453.787C424.544 454.954 426.48 456.579 428.855 458.572C433.744 462.609 440.431 468.131 447.838 474.247L448.01 474.389L448.177 474.24C448.29 474.139 448.412 474.03 448.534 473.921C455.761 467.435 462.302 461.564 467.09 457.267C469.415 455.147 471.312 453.417 472.675 452.174C473.296 451.593 473.795 451.126 474.176 450.77C474.515 450.445 474.688 450.267 474.676 450.254Z" fill="#EDC68C" />
                                    </g>
                                    <g id="Group_2">
                                        <path id="Vector_6" d="M431.713 434.786C431.713 434.93 439.204 435.046 448.443 435.046C457.685 435.046 465.174 434.929 465.174 434.786C465.174 434.643 457.684 434.526 448.443 434.526C439.204 434.526 431.713 434.642 431.713 434.786Z" fill="#EDC68C" />
                                    </g>
                                    <path id="Vector_7" opacity="0.1" d="M342.949 94.7468L22.9999 273C35.9999 319 86 367 120 381L355.5 108L342.949 94.7468Z" fill="#EDC68C" fill-opacity="0.7" />
                                    <path id="Vector_8" d="M381.666 94.7076L472.454 227.959C473.094 228.898 474.374 229.141 475.313 228.501C476.252 227.861 476.495 226.581 475.855 225.642L385.067 92.3906C384.427 91.4516 383.147 91.2086 382.208 91.8486C381.269 92.4886 381.027 93.7686 381.666 94.7076Z" fill="#EDC68C" />
                                    <path id="Vector_9" d="M391.612 87.3536C383.198 94.4056 372.677 103.135 372.677 103.135L355.777 82.8216L374.209 66.9066C379.857 62.0296 388.399 62.6946 393.223 68.3876C398.038 74.0656 397.316 82.5716 391.612 87.3536Z" fill="#EDC68C" />
                                    <path id="Vector_10" d="M373.81 102.031C374.199 103.215 384.102 126.243 384.102 126.243L383.361 175.166L377.898 180.235L276.543 69.4816L282.006 64.4126L331.229 69.7836L356.911 81.7176L373.81 102.031Z" fill="#EDC68C" />
                                    <path id="Vector_11" d="M457.534 195.888C457.048 196.511 445.128 206.482 438.099 195.391C431.07 184.299 445.862 177.911 445.862 177.911L457.534 195.888Z" fill="#EDC68C" />
                                    <g id="Group_3">
                                        <path id="Vector_12" d="M442.619 189.068C442.661 189.088 442.793 188.802 443.149 188.389C443.499 187.984 444.132 187.453 445.07 187.253C445.984 187.04 447.222 187.254 448.111 188.134C449.006 188.977 449.415 190.51 448.819 191.82C448.247 193.141 446.835 193.866 445.609 193.767C444.36 193.697 443.372 192.922 442.916 192.101C442.436 191.272 442.405 190.446 442.471 189.915C442.539 189.376 442.663 189.086 442.619 189.068C442.598 189.056 442.407 189.319 442.271 189.881C442.139 190.432 442.105 191.333 442.593 192.279C443.054 193.213 444.143 194.137 445.575 194.246C446.978 194.39 448.631 193.566 449.295 192.031C449.988 190.51 449.491 188.732 448.443 187.787C447.402 186.798 445.986 186.609 444.984 186.893C443.955 187.165 443.309 187.795 442.989 188.262C442.664 188.743 442.596 189.06 442.619 189.068Z" fill="#EDC68C" />
                                    </g>
                                    <g id="Group_4">
                                        <path id="Vector_13" d="M281.704 64.6926C281.599 64.7906 304.387 89.5196 332.597 119.921C360.817 150.332 383.771 174.897 383.876 174.799C383.981 174.701 361.198 149.977 332.978 119.566C304.769 89.1656 281.81 64.5946 281.704 64.6926Z" fill="#EDC68C" />
                                    </g>
                                    <g id="Group_5">
                                        <path id="Vector_14" d="M356.642 82.0716C356.616 82.0956 356.835 82.3866 357.254 82.8906C357.756 83.4776 358.357 84.1806 359.059 85.0006C360.685 86.8686 362.767 89.2606 365.068 91.9056C367.361 94.5596 369.435 96.9586 371.054 98.8326C371.766 99.6426 372.377 100.338 372.887 100.918C373.327 101.404 373.584 101.663 373.611 101.64C373.639 101.617 373.435 101.316 373.043 100.789C372.651 100.262 372.068 99.5126 371.336 98.5966C369.872 96.7636 367.805 94.2686 365.46 91.5636C363.115 88.8606 360.937 86.4606 359.33 84.7526C358.527 83.8986 357.868 83.2156 357.402 82.7526C356.938 82.2916 356.668 82.0466 356.642 82.0716Z" fill="#EDC68C" />
                                    </g>
                                    <g id="Group_6">
                                        <path id="Vector_15" d="M333.656 72.0756C333.643 72.0886 333.809 72.2786 334.135 72.6306C334.501 73.0156 334.981 73.5196 335.579 74.1496C336.883 75.5016 338.701 77.3866 340.93 79.6976C345.445 84.3846 351.64 90.8986 358.356 98.2106C365.071 105.528 371.034 112.258 375.318 117.156C377.43 119.574 379.153 121.546 380.389 122.96C380.966 123.61 381.428 124.132 381.78 124.528C382.102 124.883 382.278 125.064 382.292 125.052C382.306 125.04 382.157 124.837 381.86 124.46C381.527 124.047 381.09 123.505 380.544 122.828C379.394 121.416 377.705 119.395 375.597 116.914C371.382 111.952 365.459 105.18 358.739 97.8576C352.019 90.5406 345.777 84.0626 341.193 79.4396C338.901 77.1276 337.031 75.2716 335.722 74.0066C335.094 73.4046 334.591 72.9226 334.208 72.5556C333.859 72.2286 333.669 72.0626 333.656 72.0756Z" fill="#EDC68C" />
                                    </g>
                                </g>
                            </svg> */}
                            {/* <svg id="studio-2" viewBox="0 0 506 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="plights">
                                    <path id="Vector" d="M445.841 498.375H449.532V157.826L445.841 157.347V498.375Z" fill="#EDC68C" />
                                    <path id="Vector_2" d="M445.65 414.108L433.443 420.82H464.735L451.456 414.108H445.65Z" fill="#EDC68C" />
                                    <path id="Vector_3" d="M438.859 420.82C438.016 420.82 392.237 498.375 392.237 498.375H397.012L444.327 420.82H438.859Z" fill="#EDC68C" />
                                    <path id="Vector_4" d="M458.703 420.82C459.546 420.82 505.325 498.375 505.325 498.375H500.55L453.235 420.82H458.703Z" fill="#EDC68C" />
                                    <g id="Group">
                                        <path id="Vector_5" d="M474.676 450.254C474.664 450.241 474.468 450.392 474.106 450.692C473.709 451.03 473.188 451.472 472.54 452.023C471.15 453.235 469.216 454.923 466.845 456.992C462.031 461.26 455.454 467.091 448.187 473.532C448.065 473.641 447.942 473.75 447.83 473.851L448.168 473.844C440.722 467.774 434.002 462.295 429.087 458.289C426.669 456.349 424.697 454.768 423.281 453.632C422.621 453.117 422.092 452.704 421.687 452.387C421.319 452.107 421.121 451.967 421.109 451.98C421.098 451.994 421.274 452.161 421.621 452.467C422.01 452.802 422.519 453.241 423.153 453.787C424.544 454.954 426.48 456.579 428.855 458.572C433.744 462.609 440.431 468.131 447.838 474.247L448.01 474.389L448.177 474.24C448.29 474.139 448.412 474.03 448.534 473.921C455.761 467.435 462.302 461.564 467.09 457.267C469.415 455.147 471.312 453.417 472.675 452.174C473.296 451.593 473.795 451.126 474.176 450.77C474.515 450.445 474.688 450.267 474.676 450.254Z" fill="#EDC68C" />
                                    </g>
                                    <g id="Group_2">
                                        <path id="Vector_6" d="M431.713 434.786C431.713 434.93 439.204 435.046 448.443 435.046C457.685 435.046 465.174 434.929 465.174 434.786C465.174 434.643 457.684 434.526 448.443 434.526C439.204 434.526 431.713 434.642 431.713 434.786Z" fill="#EDC68C" />
                                    </g>
                                    <path id="Vector_7" opacity="0.1" d="M342.949 94.7468L22.9999 273C35.9999 319 86 367 120 381L355.5 108L342.949 94.7468Z" fill="#EDC68C" fill-opacity="0.7" />
                                    <path id="Vector_8" d="M381.666 94.7076L472.454 227.959C473.094 228.898 474.374 229.141 475.313 228.501C476.252 227.861 476.495 226.581 475.855 225.642L385.067 92.3906C384.427 91.4516 383.147 91.2086 382.208 91.8486C381.269 92.4886 381.027 93.7686 381.666 94.7076Z" fill="#EDC68C" />
                                    <path id="Vector_9" d="M391.612 87.3536C383.198 94.4056 372.677 103.135 372.677 103.135L355.777 82.8216L374.209 66.9066C379.857 62.0296 388.399 62.6946 393.223 68.3876C398.038 74.0656 397.316 82.5716 391.612 87.3536Z" fill="#EDC68C" />
                                    <path id="Vector_10" d="M373.81 102.031C374.199 103.215 384.102 126.243 384.102 126.243L383.361 175.166L377.898 180.235L276.543 69.4816L282.006 64.4126L331.229 69.7836L356.911 81.7176L373.81 102.031Z" fill="#EDC68C" />
                                    <path id="Vector_11" d="M457.534 195.888C457.048 196.511 445.128 206.482 438.099 195.391C431.07 184.299 445.862 177.911 445.862 177.911L457.534 195.888Z" fill="#EDC68C" />
                                    <g id="Group_3">
                                        <path id="Vector_12" d="M442.619 189.068C442.661 189.088 442.793 188.802 443.149 188.389C443.499 187.984 444.132 187.453 445.07 187.253C445.984 187.04 447.222 187.254 448.111 188.134C449.006 188.977 449.415 190.51 448.819 191.82C448.247 193.141 446.835 193.866 445.609 193.767C444.36 193.697 443.372 192.922 442.916 192.101C442.436 191.272 442.405 190.446 442.471 189.915C442.539 189.376 442.663 189.086 442.619 189.068C442.598 189.056 442.407 189.319 442.271 189.881C442.139 190.432 442.105 191.333 442.593 192.279C443.054 193.213 444.143 194.137 445.575 194.246C446.978 194.39 448.631 193.566 449.295 192.031C449.988 190.51 449.491 188.732 448.443 187.787C447.402 186.798 445.986 186.609 444.984 186.893C443.955 187.165 443.309 187.795 442.989 188.262C442.664 188.743 442.596 189.06 442.619 189.068Z" fill="#EDC68C" />
                                    </g>
                                    <g id="Group_4">
                                        <path id="Vector_13" d="M281.704 64.6926C281.599 64.7906 304.387 89.5196 332.597 119.921C360.817 150.332 383.771 174.897 383.876 174.799C383.981 174.701 361.198 149.977 332.978 119.566C304.769 89.1656 281.81 64.5946 281.704 64.6926Z" fill="#EDC68C" />
                                    </g>
                                    <g id="Group_5">
                                        <path id="Vector_14" d="M356.642 82.0716C356.616 82.0956 356.835 82.3866 357.254 82.8906C357.756 83.4776 358.357 84.1806 359.059 85.0006C360.685 86.8686 362.767 89.2606 365.068 91.9056C367.361 94.5596 369.435 96.9586 371.054 98.8326C371.766 99.6426 372.377 100.338 372.887 100.918C373.327 101.404 373.584 101.663 373.611 101.64C373.639 101.617 373.435 101.316 373.043 100.789C372.651 100.262 372.068 99.5126 371.336 98.5966C369.872 96.7636 367.805 94.2686 365.46 91.5636C363.115 88.8606 360.937 86.4606 359.33 84.7526C358.527 83.8986 357.868 83.2156 357.402 82.7526C356.938 82.2916 356.668 82.0466 356.642 82.0716Z" fill="#EDC68C" />
                                    </g>
                                    <g id="Group_6">
                                        <path id="Vector_15" d="M333.656 72.0756C333.643 72.0886 333.809 72.2786 334.135 72.6306C334.501 73.0156 334.981 73.5196 335.579 74.1496C336.883 75.5016 338.701 77.3866 340.93 79.6976C345.445 84.3846 351.64 90.8986 358.356 98.2106C365.071 105.528 371.034 112.258 375.318 117.156C377.43 119.574 379.153 121.546 380.389 122.96C380.966 123.61 381.428 124.132 381.78 124.528C382.102 124.883 382.278 125.064 382.292 125.052C382.306 125.04 382.157 124.837 381.86 124.46C381.527 124.047 381.09 123.505 380.544 122.828C379.394 121.416 377.705 119.395 375.597 116.914C371.382 111.952 365.459 105.18 358.739 97.8576C352.019 90.5406 345.777 84.0626 341.193 79.4396C338.901 77.1276 337.031 75.2716 335.722 74.0066C335.094 73.4046 334.591 72.9226 334.208 72.5556C333.859 72.2286 333.669 72.0626 333.656 72.0756Z" fill="#EDC68C" />
                                    </g>
                                </g>
                            </svg> */}
                        </div>
                    </div>
                    <div id="section-2" className="panels">
                        <div className="sec-top">
                            <div className="akaar-wedstyle">
                                <h1 id="akaar-wed">WEDDINGS</h1>
                            </div>

                            <div id="cealling-lamp">
                                <svg viewBox="0 0 201 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Lamp_2">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" opacity="0.1" d="M55.294 264.815C85.832 264.815 110.588 240.059 110.588 209.521C110.588 178.983 85.832 154.227 55.294 154.227C24.756 154.227 0 178.983 0 209.521C0 240.059 24.756 264.815 55.294 264.815Z" fill="#FFC325" />
                                                <path id="Vector_2" opacity="0.3" d="M55.294 242.546C75.5838 242.546 92.032 226.098 92.032 205.808C92.032 185.518 75.5838 169.07 55.294 169.07C35.0042 169.07 18.556 185.518 18.556 205.808C18.556 226.098 35.0042 242.546 55.294 242.546Z" fill="#FFC325" />
                                                <g id="Group_3">
                                                    <g id="Group_4">
                                                        <g id="Group_5">
                                                            <g id="Group_6">
                                                                <g id="Group_7">
                                                                    <path id="Vector_3" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="#FFC325" />
                                                                    <path id="Vector_4" opacity="0.4" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="white" />
                                                                    <path id="Vector_5" opacity="0.2" d="M49.916 187.887C49.916 185.849 52.301 184.193 55.258 184.193C58.215 184.193 60.6 185.849 60.6 187.887C60.6 189.925 58.215 191.584 55.258 191.584C52.301 191.584 49.916 189.928 49.916 187.887Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_6" d="M63.217 177.952C64.128 179.514 64.49 181.389 64.226 183.177C63.962 184.966 63.074 186.656 61.751 187.888" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_7" d="M57.505 172.193C56.702 174.926 56.561 177.907 57.101 180.723C57.188 181.178 57.394 181.726 57.802 181.737C58.167 181.746 58.407 181.297 58.486 180.89C58.765 179.452 58.019 177.99 57.065 176.997C56.549 176.459 55.922 175.99 55.224 175.956C54.523 175.922 53.853 176.337 53.346 176.89C52.374 177.948 51.89 179.605 52.242 181.083C52.391 181.708 52.834 182.38 53.393 182.26C53.729 182.188 53.975 181.833 54.062 181.456C54.149 181.079 54.106 180.68 54.057 180.294C53.702 177.511 53.022 174.783 52.043 172.202" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_8" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="#263238" />
                                                        <path id="Vector_9" opacity="0.3" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="white" />
                                                        <path id="Vector_10" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="#263238" />
                                                        <path id="Vector_11" opacity="0.3" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="white" />
                                                        <path id="Vector_12" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="#263238" />
                                                        <path id="Vector_13" opacity="0.3" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="white" />
                                                        <path id="Vector_14" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="#263238" />
                                                        <path id="Vector_15" opacity="0.3" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_16" d="M72.155 162.415H38.328V167.58H72.155V162.415Z" fill="#263238" />
                                                <path id="Vector_17" d="M62.595 168.609H47.888V155.983C47.888 152.521 50.695 149.714 54.157 149.714H56.327C59.789 149.714 62.596 152.521 62.596 155.983V168.609H62.595Z" fill="#263238" />
                                                <g id="Group_8">
                                                    <g id="Group_9">
                                                        <path id="Vector_18" d="M55.992 153.151C55.992 135.097 55.992 117.044 55.992 98.99C55.992 77.951 55.992 56.913 55.992 35.874C55.992 26.705 55.992 17.536 55.992 8.36702C55.992 7.40202 54.492 7.40002 54.492 8.36702C54.492 26.421 54.492 44.474 54.492 62.528C54.492 83.567 54.492 104.605 54.492 125.644C54.492 134.813 54.492 143.982 54.492 153.151C54.492 154.116 55.992 154.118 55.992 153.151Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_19" opacity="0.5" d="M73.933 164.888L38.023 164.299C21.488 171.097 9.84497 187.365 9.84497 206.351C9.84497 231.452 30.193 251.8 55.294 251.8C80.395 251.8 100.743 231.452 100.743 206.351C100.743 187.893 89.739 172.005 73.933 164.888Z" fill="#FFC325" />
                                                <g id="Group_10" opacity="0.2">
                                                    <path id="Vector_20" d="M90.084 177.115C85.712 171.919 80.203 167.712 73.933 164.889L38.023 164.3C21.488 171.098 9.84497 187.366 9.84497 206.352C9.84497 216.265 13.028 225.429 18.415 232.899C27.41 235.634 37.391 234.837 46.186 231.395C56.138 227.5 64.641 220.434 71.359 212.123C78.077 203.811 83.112 194.265 87.442 184.494C88.495 182.119 89.519 179.641 90.084 177.115Z" fill="white" />
                                                </g>
                                                <g id="Group_11" opacity="0.3">
                                                    <path id="Vector_21" d="M35.202 173.199C35.384 171.874 33.818 170.979 32.706 171.722C26.276 176.024 21.131 182.229 18.112 189.354C14.932 196.859 14.125 205.348 15.835 213.318C16.021 214.184 16.249 215.072 16.792 215.772C17.335 216.472 18.274 216.938 19.12 216.675C20.137 216.359 20.587 215.21 20.822 214.155C21.124 212.796 21.313 211.415 21.441 210.029C22.017 203.759 22.384 197.395 24.04 191.306C25.505 185.917 28.061 180.693 32.169 176.91C32.955 176.186 34.167 175.263 34.772 174.382C34.972 174.088 35.139 173.656 35.202 173.199Z" fill="white" />
                                                </g>
                                                <path id="Vector_22" opacity="0.2" d="M62.595 161.203H47.888V162.415H62.595V161.203Z" fill="black" />
                                            </g>
                                            <g id="Group_12">
                                                <path id="Vector_23" opacity="0.1" d="M145.308 214.777C175.854 214.777 200.616 190.015 200.616 159.469C200.616 128.923 175.854 104.161 145.308 104.161C114.762 104.161 90 128.923 90 159.469C90 190.015 114.762 214.777 145.308 214.777Z" fill="#FFC325" />
                                                <path id="Vector_24" opacity="0.3" d="M145.308 192.502C165.603 192.502 182.055 176.05 182.055 155.755C182.055 135.46 165.603 119.008 145.308 119.008C125.013 119.008 108.561 135.46 108.561 155.755C108.561 176.05 125.013 192.502 145.308 192.502Z" fill="#FFC325" />
                                                <g id="Group_13">
                                                    <g id="Group_14">
                                                        <g id="Group_15">
                                                            <g id="Group_16">
                                                                <g id="Group_17">
                                                                    <path id="Vector_25" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="#FFC325" />
                                                                    <path id="Vector_26" opacity="0.4" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="white" />
                                                                    <path id="Vector_27" opacity="0.2" d="M139.928 137.829C139.928 135.791 142.313 134.134 145.271 134.134C148.229 134.134 150.614 135.79 150.614 137.829C150.614 139.868 148.229 141.527 145.271 141.527C142.314 141.527 139.928 139.871 139.928 137.829Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_28" d="M153.232 127.892C154.143 129.454 154.505 131.329 154.241 133.118C153.977 134.907 153.089 136.598 151.765 137.83" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_29" d="M147.52 122.132C146.717 124.865 146.576 127.848 147.116 130.664C147.203 131.119 147.409 131.667 147.817 131.678C148.183 131.687 148.422 131.238 148.501 130.831C148.78 129.392 148.034 127.931 147.08 126.937C146.563 126.399 145.937 125.93 145.238 125.896C144.536 125.862 143.867 126.277 143.359 126.83C142.387 127.888 141.903 129.545 142.255 131.024C142.404 131.649 142.848 132.321 143.406 132.201C143.742 132.129 143.988 131.774 144.075 131.396C144.162 131.018 144.119 130.62 144.07 130.234C143.715 127.451 143.035 124.721 142.055 122.14" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_30" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="#263238" />
                                                        <path id="Vector_31" opacity="0.3" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="white" />
                                                        <path id="Vector_32" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="#263238" />
                                                        <path id="Vector_33" opacity="0.3" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="white" />
                                                        <path id="Vector_34" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="#263238" />
                                                        <path id="Vector_35" opacity="0.3" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="white" />
                                                        <path id="Vector_36" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="#263238" />
                                                        <path id="Vector_37" opacity="0.3" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_38" d="M162.173 112.351H128.338V117.517H162.173V112.351Z" fill="#263238" />
                                                <path id="Vector_39" d="M152.611 118.547H137.901V105.917C137.901 102.455 140.708 99.648 144.17 99.648H146.343C149.805 99.648 152.612 102.455 152.612 105.917V118.547H152.611Z" fill="#263238" />
                                                <g id="Group_18">
                                                    <g id="Group_19">
                                                        <path id="Vector_40" d="M146.005 102.563C146.005 78.4591 146.005 54.3533 146.005 30.2492C146.005 20.5821 146.005 10.9133 146.005 1.24623C146.005 -0.413689 144.505 -0.41713 144.505 1.24623C144.505 25.3503 144.505 49.4561 144.505 73.5602C144.505 83.2273 144.505 92.8961 144.505 102.563C144.505 104.223 146.005 104.227 146.005 102.563Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_41" opacity="0.5" d="M163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 181.405 120.201 201.758 145.308 201.758C170.415 201.758 190.768 181.405 190.768 156.298C190.768 137.835 179.761 121.943 163.951 114.825Z" fill="#FFC325" />
                                                <g id="Group_20" opacity="0.2">
                                                    <path id="Vector_42" d="M180.106 127.054C175.733 121.856 170.222 117.648 163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 166.213 103.032 175.38 108.42 182.851C117.418 185.586 127.401 184.789 136.198 181.346C146.153 177.45 154.657 170.383 161.377 162.069C168.097 153.755 173.132 144.207 177.464 134.434C178.517 132.06 179.541 129.581 180.106 127.054Z" fill="white" />
                                                </g>
                                                <g id="Group_21" opacity="0.3">
                                                    <path id="Vector_43" d="M125.211 123.138C125.393 121.812 123.826 120.917 122.714 121.661C116.282 125.964 111.136 132.171 108.116 139.297C104.935 146.803 104.128 155.295 105.838 163.266C106.024 164.132 106.252 165.021 106.795 165.721C107.338 166.421 108.277 166.887 109.123 166.624C110.14 166.308 110.591 165.159 110.825 164.103C111.127 162.744 111.317 161.362 111.444 159.976C112.02 153.704 112.387 147.339 114.043 141.248C115.509 135.858 118.065 130.632 122.174 126.849C122.96 126.125 124.173 125.201 124.778 124.321C124.98 124.027 125.148 123.595 125.211 123.138Z" fill="white" />
                                                </g>
                                                <path id="Vector_44" opacity="0.2" d="M152.61 111.139H137.9V112.352H152.61V111.139Z" fill="black" />
                                            </g>
                                            <path id="Vector_45" d="M165.561 8.367H23.42L24.42 0H166.561L165.561 8.367Z" fill="#263238" />
                                        </g>
                                    </g>
                                </svg>

                            </div>

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

                            <div id="wedding-illus">
                                <svg viewBox="0 0 193 330" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="wedding-ok">
                                        <g id="Group">
                                            <g id="Clip path group">
                                                <g id="Group_2">
                                                    <g id="Group_3">
                                                        <path id="Vector" d="M8.65855 301.176C8.00155 303.963 7.34454 306.75 6.68754 309.536C6.47454 310.44 6.27055 311.432 6.68455 312.263C7.33755 313.574 9.09455 313.768 10.5576 313.79C14.8396 313.853 19.1215 313.915 23.4035 313.978C25.2655 314.005 27.5026 313.827 28.3936 312.191C29.1056 310.883 28.5765 309.274 28.0375 307.886C26.9426 305.066 25.8475 302.246 24.7525 299.426C24.4115 298.548 24.0626 297.656 23.4806 296.916C22.1746 295.257 19.8756 294.644 17.7726 294.842C13.2796 295.264 9.72455 296.653 8.65855 301.176Z" fill="#161516" />
                                                        <path id="Vector_2" d="M23.2805 288.708C23.4025 290.758 23.1675 294.427 23.4815 296.227C23.9935 299.171 20.8625 298.41 19.7285 298.395C18.1005 298.374 16.4725 298.353 14.8445 298.332C13.6545 298.317 12.2815 298.211 11.5905 297.242C11.1345 296.602 11.1165 295.757 11.1485 294.972C11.2705 291.978 11.5655 290.086 11.4375 285.325" fill="#FAFFFF" />
                                                        <g id="Group_4">
                                                            <path id="Vector_3" d="M118.997 116.278C121.013 120.652 128.767 122.462 128.686 123.229C128.605 123.996 125.15 123.458 123.365 122.92C127.133 125.919 132.747 128.493 132.493 129.061C132.24 129.629 126.629 127.832 123.891 126.35C126.638 128.475 132.847 131.023 132.492 131.716C132.137 132.409 126.611 131.063 122.982 129.493C125.623 130.945 131.243 133.365 130.79 134.092C130.337 134.82 125.65 133.475 122.135 131.46C124.059 132.894 127 135.007 126.555 135.541C126.11 136.076 112.638 132.797 105.678 119.329" fill="#F2C3B1" />
                                                            <path id="Vector_4" d="M43.3415 35.775C30.1935 41.822 36.7745 88.487 113.975 135.041C118.227 126.606 118.99 126.991 123.242 118.556C74.2995 86.92 73.0105 61.423 66.3185 49.063C58.9215 35.403 48.7215 33.301 43.3415 35.775Z" fill="#FFE57A" />
                                                        </g>
                                                        <g id="Group_5">
                                                            <path id="Vector_5" d="M38.8735 133.046C36.5225 185.53 31.5625 237.263 29.7795 293.276C23.4795 296.341 12.0425 294.847 5.61653 293.15C2.04953 232.962 5.84854 171.775 7.77154 138.926L38.8735 133.046Z" fill="#FAFFFF" />
                                                        </g>
                                                        <path id="Vector_6" d="M65.7456 301.504C66.2926 304.314 66.8405 307.125 67.3885 309.935C67.5665 310.846 67.7316 311.845 67.2856 312.66C66.5816 313.944 64.8196 314.07 63.3556 314.034C59.0746 313.929 54.7936 313.825 50.5126 313.72C48.6506 313.675 46.4226 313.409 45.5966 311.74C44.9366 310.405 45.5286 308.818 46.1206 307.452C47.3246 304.677 48.5296 301.902 49.7336 299.127C50.1086 298.263 50.4916 297.385 51.1026 296.669C52.4726 295.062 54.7946 294.539 56.8866 294.819C61.3586 295.416 64.8566 296.943 65.7456 301.504Z" fill="#281C4C" />
                                                        <path id="Vector_7" d="M51.3915 290.094C51.2755 292.144 51.5215 295.813 51.2135 297.614C50.7095 300.559 53.8395 299.789 54.9725 299.771C56.6005 299.745 58.2285 299.72 59.8565 299.694C61.0465 299.675 62.4195 299.565 63.1075 298.594C63.5625 297.953 63.5765 297.108 63.5425 296.323C63.4115 293.329 63.1105 291.438 63.2245 286.677" fill="#FAFFFF" />
                                                        <g id="Group_6">
                                                            <path id="Vector_8" d="M36.8275 130.734C39.6005 183.198 43.6765 237.413 45.9095 293.41C48.9905 296.281 63.6515 296.269 70.0645 294.521C73.1475 234.306 68.8405 160.665 66.6535 127.833L36.8275 130.734Z" fill="#FAFFFF" />
                                                        </g>
                                                        <path id="Vector_9" d="M26.1726 40.333C7.99157 51.693 12.6186 110.772 10.4346 135.203C10.1566 138.311 52.9886 139.844 68.8286 137.17C71.8456 136.66 77.8956 8.01301 26.1726 40.333Z" fill="#FFF230" fill-opacity="0.37" />
                                                        <path id="Vector_10" d="M45.3096 26.765C45.4246 28.656 45.5266 37.055 43.8976 38.173C42.2096 39.332 37.5196 39.016 35.5966 38.313C33.0096 37.367 34.1505 28.763 34.5345 26.772" fill="#F2C3B1" />
                                                        <g id="Group_7">
                                                            <path id="Vector_11" d="M33.0086 16.853C32.1466 15.479 30.1476 14.973 28.7356 15.771C27.3236 16.569 26.7256 18.542 27.4576 19.99C28.1896 21.437 30.1336 22.125 31.6136 21.46" fill="#F4CDC0" />
                                                            <path id="Vector_12" d="M49.7686 19.216C51.1066 18.299 53.1415 18.631 54.1185 19.926C55.0955 21.221 54.8576 23.269 53.6096 24.305C52.3616 25.341 50.3046 25.197 49.2126 23.998" fill="#F4CDC0" />
                                                            <path id="Vector_13" d="M30.4735 24.246C31.2115 27.394 33.6215 30.072 36.6435 31.23C45.9735 34.803 49.5645 26.381 50.2975 24.846C50.5895 24.276 52.9225 19.272 53.4575 11.55L32.4375 10.422C30.4725 14.399 29.4635 19.919 30.4735 24.246Z" fill="#F4CDC0" />
                                                            <path id="Vector_14" d="M33.6016 2.392C35.0986 1.611 37.6786 1.276 39.3606 1.418C46.0776 1.987 52.8756 2.312 59.2076 0C58.9786 1.87 57.9526 3.629 56.4386 4.75C57.4476 4.577 58.4576 4.403 59.4666 4.23C59.7316 7.012 58.2776 9.79 56.0886 11.527C53.8996 13.264 51.0696 14.049 48.2776 14.166C45.4856 14.284 42.7056 13.779 39.9796 13.167C38.6336 12.865 37.2456 12.535 35.8906 12.787C34.0886 13.122 32.5886 14.479 31.7506 16.109C31.3636 16.862 31.1026 17.673 30.9356 18.502C30.7916 19.215 30.8976 20.214 30.6236 20.843C28.1156 13.754 29.0826 4.749 33.6016 2.392Z" fill="#161516" />
                                                            <path id="Vector_15" d="M35.8475 16.168C36.7465 16.245 38.3115 16.429 38.5875 17.495C38.6865 17.879 38.0905 17.989 38.0505 17.589C37.9675 16.765 36.4635 16.409 35.8395 16.258C35.7915 16.246 35.7945 16.163 35.8475 16.168Z" fill="#161516" />
                                                            <path id="Vector_16" d="M48.8905 18.922C48.0615 18.565 46.5956 17.988 45.8486 18.797C45.5796 19.088 46.0536 19.467 46.2776 19.134C46.7396 18.447 48.2336 18.845 48.8556 19.006C48.9036 19.018 48.9395 18.943 48.8905 18.922Z" fill="#161516" />
                                                            <path id="Vector_17" d="M39.8656 28.126C37.1036 27.736 38.5016 23.832 38.5016 23.832C38.9266 24.509 41.9835 25.222 42.9855 24.729C42.5505 26.653 41.7666 28.395 39.8656 28.126Z" fill="#161516" />
                                                            <path id="Vector_18" d="M42.6575 25.84C42.7835 25.485 42.8966 25.117 42.9846 24.729C41.9826 25.223 38.9265 24.51 38.5005 23.832C38.5005 23.832 38.3466 24.292 38.2426 24.899C39.6086 25.748 41.1225 25.96 42.6575 25.84Z" fill="#FAFFFF" />
                                                            <g id="Group_8" opacity="0.45">
                                                                <path id="Vector_19" d="M50.4875 24.446C50.2915 24.23 50.0756 24.032 49.8316 23.876C48.0516 22.741 45.5386 22.85 44.6056 25.028C44.1236 26.153 44.3725 27.552 45.2115 28.442C45.7455 29.009 46.5006 29.346 47.2756 29.41C49.0456 27.644 49.9665 25.539 50.2985 24.844C50.3335 24.777 50.3995 24.641 50.4875 24.446Z" fill="#F29E72" />
                                                                <path id="Vector_20" d="M35.5735 21.465C34.2025 20.428 31.5395 20.454 30.5045 21.99C30.3685 22.192 30.2695 22.413 30.1985 22.644C30.2635 23.192 30.3515 23.729 30.4725 24.248C30.5745 24.681 30.7136 25.103 30.8766 25.516C31.4136 26.128 32.1555 26.561 32.9485 26.772C33.5925 26.943 34.2856 26.981 34.9196 26.777C35.9636 26.441 36.7406 25.432 36.8556 24.341C36.9706 23.25 36.4485 22.127 35.5735 21.465Z" fill="#F29E72" />
                                                            </g>
                                                            <path id="Vector_21" d="M54.2826 11.662C54.4506 12.148 54.3976 12.68 54.3286 13.189C53.7676 17.371 51.2906 25.288 50.0236 25.025C49.6136 24.94 50.7056 23.024 51.0646 22.035C51.6676 20.372 52.1266 18.658 52.4366 16.917C52.5956 16.023 52.7156 15.123 52.7956 14.219C52.8736 13.34 52.8016 12.419 52.9166 11.55C53.0536 10.525 54.0196 10.902 54.2826 11.662Z" fill="#161516" />
                                                            <path id="Vector_22" d="M36.6846 18.336C36.0326 18.094 35.4646 18.419 34.9136 18.757C34.7806 18.839 34.7876 19.082 34.9606 19.114C35.4116 19.198 35.8616 19.332 36.2836 19.514C36.6506 19.672 36.9036 19.911 37.3016 20.013C37.6306 20.097 37.8996 19.804 37.8296 19.484C37.6996 18.882 37.2456 18.544 36.6846 18.336Z" fill="#161516" />
                                                            <path id="Vector_23" d="M48.3706 21.816C48.1966 21.368 47.8885 20.866 47.4045 20.708C46.8955 20.543 46.3315 20.694 45.8865 20.958C45.6365 21.106 45.7605 21.526 46.0535 21.506C46.5525 21.472 47.2695 21.774 47.5955 22.172C47.8745 22.513 48.5636 22.314 48.3706 21.816Z" fill="#161516" />
                                                        </g>
                                                        <path id="Vector_24" d="M5.33353 71.583C1.84853 92.727 3.27553 130.892 2.04053 152.286C1.87753 155.103 1.82553 158.215 3.62253 160.391C5.34153 162.473 8.23852 163.045 10.8945 163.527C22.1945 165.575 31.1645 166.142 36.4015 163.707C36.4725 156.525 36.4935 143.636 36.4295 128.694C36.2625 89.354 35.5115 35.783 33.5615 34.664C30.9945 33.192 19.8075 37.263 18.0585 39.112C7.51352 50.255 6.64253 63.638 5.33353 71.583Z" fill="#FFE784" />
                                                        <path id="Vector_25" d="M62.6956 48.867C66.2126 55.978 67.6236 64.042 68.8426 71.987C72.0866 93.131 74.4576 130.893 75.6066 152.286C75.7576 155.103 75.8066 158.215 74.1336 160.391C72.5336 162.473 69.8365 163.045 67.3645 163.527C56.8455 165.575 48.4956 166.142 43.6206 163.707C43.3796 137.614 43.1436 36.239 45.6486 34.696C48.0386 33.224 52.9436 37.061 54.8176 38.619C58.1016 41.349 60.7526 44.938 62.6956 48.867Z" fill="#FFE784" />
                                                        <path id="Vector_26" d="M45.1705 34.102C41.4115 51.967 41.5355 77.897 43.4085 96.083C44.3285 84.739 46.0325 65.693 50.0945 54.701C50.8565 52.639 51.6925 50.389 50.9965 48.303C50.6175 47.165 49.8205 46.224 49.2175 45.187C48.6145 44.151 48.1995 42.869 48.6655 41.764C49.0695 40.805 50.0435 40.2 50.5425 39.287C51.1075 38.253 51.6715 37.57 51.0985 36.54C49.4785 33.627 45.1705 34.102 45.1705 34.102Z" fill="#FFFBEC" />
                                                        <path id="Vector_27" d="M63.3445 60.036C63.9355 60.815 60.8555 64.824 59.9905 65.078C59.1255 65.331 52.8975 62.373 53.1205 61.008C53.3095 59.841 62.7535 59.258 63.3445 60.036Z" fill="#FAFFFF" />
                                                        <g id="Group_9">
                                                            <path id="Vector_28" d="M58.1662 56.0121C57.7872 54.5621 56.4932 54.372 55.4232 54.933C54.5732 55.379 54.0912 56.4321 54.3102 57.3681C54.5292 58.3031 55.4272 59.0341 56.3872 59.0571" fill="#FAFFFF" fill-opacity="0.8" />
                                                            <path id="Vector_29" d="M56.9122 57.706C56.3982 57.005 56.3022 56.0191 56.6722 55.2321C57.0422 54.4451 57.8612 53.889 58.7302 53.837C59.5982 53.785 60.4782 54.239 60.9392 54.976C61.2482 55.471 61.3582 56.146 61.0252 56.625" fill="#FFF230" fill-opacity="0.7" />
                                                            <path id="Vector_30" d="M57.9362 57.642C58.0732 56.522 58.9172 55.488 60.0202 55.25C61.1232 55.012 62.3832 55.684 62.6912 56.769C62.9802 57.784 62.3842 58.94 61.4332 59.397C60.4822 59.854 59.2822 59.6441 58.4612 58.9801" fill="#FAFFFF" fill-opacity="0.8" />
                                                            <path id="Vector_31" d="M57.3732 57.591C56.7532 56.89 55.5192 56.944 54.8802 57.626C54.2402 58.308 54.2162 59.443 54.7302 60.225C55.2442 61.007 56.2062 61.432 57.1412 61.418C57.5832 61.411 58.0332 61.312 58.4012 61.067C58.7692 60.822 59.0452 60.418 59.0702 59.977" fill="#FFF230" fill-opacity="0.7" />
                                                            <path id="Vector_32" d="M60.0282 58.448C60.6782 58.068 61.5852 58.305 62.0432 58.903C62.5002 59.501 62.5212 60.3681 62.1802 61.0391C61.7062 61.9711 60.5542 62.5011 59.5382 62.2551C58.5222 62.0091 57.7892 60.6551 58.0112 59.3041" fill="#FFF230" fill-opacity="0.7" />
                                                            <path id="Vector_33" d="M59.5722 59.4641C60.7682 60.2041 60.6422 61.647 60.0672 62.3C59.4922 62.953 58.5502 63.2581 57.7022 63.0661C56.8542 62.8741 56.1352 62.192 55.8982 61.356C55.7392 60.795 56.1772 59.295 57.6102 59.263" fill="#FAFFFF" fill-opacity="0.8" />
                                                            <path id="Vector_34" d="M58.3142 56.481C57.9492 56.483 57.5742 56.5871 57.3052 56.8331C57.0052 57.1081 56.8732 57.5311 56.8732 57.9391C56.8732 58.5661 57.1802 59.193 57.6962 59.55C58.2122 59.906 58.9282 59.966 59.4802 59.67C61.2472 58.719 59.9742 56.472 58.3142 56.481Z" fill="#FFF230" fill-opacity="0.9" />
                                                            <path id="Vector_35" d="M58.4362 57.216C58.2322 57.217 58.0222 57.2751 57.8722 57.4131C57.7042 57.5671 57.6302 57.8031 57.6302 58.0311C57.6302 58.3811 57.8022 58.732 58.0902 58.931C58.3782 59.13 58.7782 59.164 59.0872 58.998C60.0762 58.467 59.3642 57.211 58.4362 57.216Z" fill="#FAFFFF" />
                                                        </g>
                                                        <path id="Vector_36" d="M62.7195 54.2C63.5545 53.651 64.4855 53.247 65.4575 53.011C65.0475 53.385 64.7965 53.896 64.5215 54.379C64.2465 54.861 63.9185 55.346 63.4245 55.6C63.1685 55.732 62.8635 55.793 62.5885 55.706C61.7165 55.427 62.2065 54.537 62.7195 54.2Z" fill="#E5DFF7" />
                                                        <path id="Vector_37" d="M50.7845 57.412C51.0935 57.686 51.4026 57.96 51.7106 58.234C52.0016 58.492 52.2986 58.754 52.6566 58.906C53.0566 59.075 53.5936 59.092 53.9136 58.754C54.1696 58.484 54.2546 58.02 53.9666 57.749C53.6456 57.447 52.9576 57.468 52.5496 57.432C51.9626 57.378 51.3725 57.372 50.7845 57.412Z" fill="#E5DFF7" />
                                                        <path id="Vector_38" d="M66.1585 58.271C67.5385 72.314 71.5015 92.995 73.0485 105.021" stroke="#2B2A29" stroke-width="1.1094" stroke-miterlimit="10" />
                                                        <g id="Group_10">
                                                            <g id="Group_11">
                                                                <path id="Vector_39" opacity="0.63" d="M89.8095 33.37C90.4075 30.187 91.5135 26.519 94.5595 25.422C96.7715 24.625 99.3025 25.573 101.044 27.153C102.785 28.733 103.914 30.857 105.083 32.898C123.034 64.247 154.717 81.321 190.819 80.037C193.466 86.461 193.359 96.588 188.223 101.267C183.087 105.946 176.808 110.016 174.361 116.519C172.159 122.372 173.433 129.439 169.861 134.571C167.545 137.899 163.653 139.691 160.492 142.23C156.168 145.704 153.236 150.564 150.131 155.16C144.193 163.948 135.075 171.705 123.766 167.203C115.668 163.979 110.386 150.855 106.637 143.698C95.3705 122.191 88.7635 98.265 87.3055 74.034C86.4895 60.446 87.2945 46.753 89.8095 33.37Z" fill="#FAFFFF" />
                                                                <path id="Vector_40" d="M107.099 37.827C106.454 40.474 106.827 43.363 108.108 45.64C109.104 47.409 110.583 48.767 111.891 50.268C113.199 51.769 114.393 53.548 114.588 55.64C114.842 58.362 113.284 61.08 111.174 62.648C109.064 64.216 106.493 64.803 103.986 65.031C99.0085 65.483 94.0495 64.656 89.2045 63.566C85.4815 62.728 81.7915 61.734 78.1475 60.585C76.9575 60.21 75.7485 59.806 74.7525 59.016C73.7565 58.226 72.9945 56.973 73.0475 55.604C73.0935 54.398 73.7575 53.286 74.5745 52.445C75.3915 51.605 76.3655 50.977 77.2725 50.257C79.9325 48.145 82.0345 45.183 83.2365 41.854C84.0305 39.654 84.4485 37.285 85.5565 35.245C86.6645 33.205 88.7735 31.504 90.8465 31.985" fill="#161516" />
                                                                <path id="Vector_41" d="M70.5615 89.61C70.1475 78.307 72.5845 69.132 76.7125 65.554C82.3075 60.704 87.3435 68.893 94.3175 68.841C100.033 68.798 110.252 60.354 114.848 64.311C119.707 68.495 120.735 70.986 122.283 77.788C124.821 88.944 112.963 98.144 117.613 128.042C118.492 133.69 158.837 257.945 158.837 312.358C152.003 335.979 48.0365 332.612 44.1155 319.705C42.5695 210.797 72.2835 137.743 72.8945 127.733C73.6425 115.481 71.3285 110.518 70.5615 89.61Z" fill="#FAFFFF" />
                                                                <path id="Vector_42" d="M87.6155 54.567C88.9145 56.183 89.9245 59.487 88.5035 60.997C87.0825 62.506 78.8745 65.575 75.3445 67.415C75.3415 70.911 85.0835 74.06 91.2395 74.274C105.046 74.752 115.868 69.388 115.309 65.071C115.058 63.133 106.981 62.089 105.032 61.954C102.452 61.775 99.9935 61.423 98.2766 59.489C96.5596 57.555 97.2675 54.061 97.3935 51.478" fill="#F2C3B1" />
                                                                <path id="Vector_43" d="M101.093 50.7C100.684 51.378 100.209 52.019 99.6905 52.627C98.9275 53.498 98.0585 54.276 97.1035 54.926C95.2665 56.166 93.1485 56.871 90.9525 56.683C87.3055 56.385 84.3195 53.602 82.8655 50.164C82.3895 49.036 82.0755 47.828 81.9585 46.619C81.8285 45.346 81.8825 44.07 82.0815 42.809C82.5955 39.27 84.2505 35.857 86.2485 32.842L104.708 38.837C104.026 42.939 103.253 47.147 101.093 50.7Z" fill="#F4CDC0" />
                                                                <path id="Vector_44" d="M90.3525 26.721C91.0875 25.856 92.8616 23.786 94.5826 22.876C95.4075 24.073 97.9785 23.345 99.7755 20.833C99.1575 22.569 101.02 24.961 103.581 24.942C103.58 26.926 105.032 30.037 106.092 31.581" fill="#FAFFFF" />
                                                                <path id="Vector_45" d="M99.2695 48.633C97.8565 45.778 93.3755 45.801 92.0155 48.675C91.4055 49.958 91.5695 51.576 92.4165 52.725C93.2645 53.874 94.7595 54.5 96.1675 54.309C96.3765 54.276 96.5876 54.232 96.7896 54.174C97.4956 53.972 98.1325 53.565 98.6275 53.025C98.9135 52.708 99.1365 52.344 99.3045 51.958C99.7645 50.91 99.7715 49.658 99.2695 48.633ZM85.9255 44.529C85.5195 43.51 84.2536 42.104 83.0136 42.159C82.7236 42.176 82.4306 42.277 82.1476 42.451C81.9556 43.669 81.8065 45.15 81.9355 46.379C82.0515 47.547 82.2335 48.659 82.6975 49.749C83.6365 49.769 84.7445 49.06 85.3335 48.335C86.1865 47.288 86.4065 45.789 85.9255 44.529Z" fill="#F2B7B1" />
                                                                <path id="Vector_46" d="M86.8685 40.336C86.4505 39.645 85.8065 39.213 85.0135 39.068C84.6615 39.004 84.5645 39.575 84.9125 39.609C85.5405 39.669 87.0215 41.167 86.5665 40.543C86.7055 40.735 86.9905 40.537 86.8685 40.336Z" fill="#161516" />
                                                                <path id="Vector_47" d="M96.7735 42.773C95.9745 42.568 95.1845 42.606 94.4105 42.889C94.3635 42.906 94.3775 42.986 94.4295 42.978C95.1895 42.86 95.9085 42.959 96.6025 43.291C96.9565 43.461 97.1705 42.875 96.7735 42.773Z" fill="#161516" />
                                                                <path id="Vector_48" d="M90.1986 48.539C89.0146 48.839 87.2685 48.44 86.3815 47.981C86.3045 49.694 86.9276 51.317 88.1976 51.482C89.5146 51.657 89.9866 49.713 90.1986 48.539Z" fill="#161516" />
                                                                <path id="Vector_49" d="M89.9685 49.561C90.0695 49.202 90.1435 48.844 90.1995 48.539C89.0155 48.839 87.2695 48.44 86.3825 47.981C86.3675 48.322 86.3876 48.656 86.4276 48.979C87.4646 49.696 88.7385 49.757 89.9685 49.561Z" fill="#FAFFFF" />
                                                                <path id="Vector_50" d="M101.423 47.097C102.898 44.05 105.416 44.902 105.644 45.305C105.889 45.737 105.76 46.276 105.625 46.754C105.379 47.625 105.11 48.537 104.467 49.173C103.928 49.706 103.151 49.989 102.395 49.925C101.64 49.862 100.92 49.455 100.477 48.84" fill="#F4CDC0" />
                                                                <path id="Vector_51" d="M88.7755 154.535C159.128 155.249 126.025 66.235 114.848 64.31C119.49 73.042 119.279 87.201 118.406 94.283C118.406 94.283 131.723 145.455 90.6835 145.713" fill="#F2C3B1" />
                                                                <g id="Group_12">
                                                                    <g id="Group_13">
                                                                        <path id="Vector_52" d="M93.0405 121.567C94.3525 134.354 94.6025 145.881 93.8475 158.713" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                                                        <path id="Vector_53" d="M96.8985 120.907C94.9065 133.582 94.9665 145.559 96.2995 158.32" stroke="#E4CAB5" stroke-width="0.832" stroke-miterlimit="10" />
                                                                        <path id="Vector_54" d="M99.5975 116.235C96.7855 130.051 96.0485 144.288 97.4215 158.32" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                                                        <path id="Vector_55" d="M85.0925 119.564C90.4375 131.902 93.0135 145.43 92.5765 158.868" stroke="#FF9494" stroke-miterlimit="10" />
                                                                        <path id="Vector_56" d="M102.078 116.491C98.8345 130.067 97.6945 144.143 98.7105 158.064" stroke="#FF9494" stroke-miterlimit="10" />
                                                                        <path id="Vector_57" d="M96.6285 123.346C95.0575 133.349 94.9175 148.29 96.2995 158.32" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                                                        <path id="Vector_58" d="M89.9565 124.893C91.9805 132.765 93.2605 150.194 93.0405 158.32" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                                                        <path id="Vector_59" d="M80.3515 117.926C87.2935 127.021 92.3575 138.756 92.4415 150.197" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                                                        <path id="Vector_60" d="M107.173 115.389C99.0895 126.881 97.0165 143.272 97.5415 157.312" stroke="#B96236" stroke-opacity="0.6" stroke-miterlimit="10" />
                                                                    </g>
                                                                    <path id="Vector_61" d="M116.511 112.158C117.687 111.481 118.978 111.019 120.151 110.335C119.756 111.251 119.36 112.166 118.965 113.082C118.615 113.892 118.223 114.753 117.467 115.208C116.843 115.584 114.222 115.862 113.916 114.923C113.614 114 115.907 112.506 116.511 112.158Z" fill="#FF9494" />
                                                                    <path id="Vector_62" d="M81.3145 105.986C80.1965 103.616 79.9885 100.934 79.7975 98.32C82.4825 99.581 84.4665 102.233 84.9185 105.164C85.0055 105.729 85.0345 106.33 84.7925 106.848C83.8775 108.803 81.8985 107.226 81.3145 105.986Z" fill="#FF9494" fill-opacity="0.8" />
                                                                    <path id="Vector_63" d="M74.1135 106.267C74.4525 107.169 74.7945 108.079 75.3175 108.888C75.8405 109.697 76.5645 110.409 77.4675 110.745C78.0035 110.944 79.1225 111.152 79.6535 110.799C80.4915 110.241 79.6875 109.711 79.1195 109.208C77.6615 107.915 75.9545 106.908 74.1135 106.267Z" fill="#FF9494" />
                                                                    <path id="Vector_64" d="M103.822 104.771C104.802 102.716 106.34 100.987 107.857 99.289C107.95 101.031 108.043 102.772 108.137 104.513C108.181 105.329 108.223 106.156 108.056 106.956C107.888 107.756 107.483 108.539 106.802 108.991C105.888 109.596 104.245 109.441 103.633 108.448C102.986 107.399 103.34 105.781 103.822 104.771Z" fill="#FF9494" fill-opacity="0.8" />
                                                                    <g id="Group_14">
                                                                        <path id="Vector_65" d="M88.3115 112.061C85.0375 111.653 83.5915 114.145 83.8665 116.791C84.0855 118.895 85.8465 120.739 87.9375 121.055C90.0285 121.371 92.2565 120.129 93.0875 118.185" fill="#E5DFF7" />
                                                                        <path id="Vector_66" d="M90.7515 116.008C88.8975 116.487 86.8025 115.879 85.4945 114.48C84.1865 113.081 83.7185 110.951 84.3215 109.133C84.9235 107.315 86.5705 105.885 88.4555 105.544C89.7195 105.315 91.1915 105.643 91.8995 106.715" fill="#FF9494" />
                                                                        <path id="Vector_67" d="M91.4575 113.861C89.2785 112.667 87.8525 110.096 88.2645 107.647C88.6765 105.197 91.0795 103.168 93.5505 103.423C95.8625 103.661 97.7405 105.823 97.8985 108.142C98.0565 110.461 96.6475 112.743 94.6205 113.88" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_68" d="M90.8935 114.973C88.9535 115.668 88.0565 118.236 88.9305 120.102C89.8045 121.968 92.1055 122.942 94.1235 122.529C96.1425 122.116 97.7965 120.495 98.5315 118.57C98.8785 117.661 99.0435 116.659 98.8425 115.707C98.6415 114.755 98.0405 113.861 97.1595 113.449" fill="#FF9494" />
                                                                        <path id="Vector_69" d="M94.8115 110.24C94.5645 108.601 95.7905 106.937 97.3865 106.489C98.9825 106.041 100.774 106.708 101.868 107.953C103.387 109.683 103.531 112.471 102.199 114.349C100.866 116.227 97.4985 116.62 94.9165 115.064" fill="#FF9494" />
                                                                        <path id="Vector_70" d="M96.5195 112.002C99.0095 110.16 101.859 111.596 102.725 113.304C103.592 115.012 103.445 117.188 102.36 118.766C101.275 120.344 99.2945 121.258 97.3895 121.06C96.1115 120.927 93.4005 118.807 94.5065 115.849" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_71" d="M89.3905 112.14C89.0965 112.887 89.0035 113.741 89.2875 114.492C89.6055 115.331 90.3635 115.947 91.1965 116.279C92.4795 116.79 94.0125 116.675 95.1625 115.911C96.3125 115.147 97.0195 113.732 96.8635 112.36C96.3635 107.968 90.7275 108.738 89.3905 112.14Z" fill="#FF3333" />
                                                                        <path id="Vector_72" d="M90.9945 112.49C90.8305 112.908 90.7785 113.385 90.9375 113.804C91.1155 114.273 91.5385 114.617 92.0045 114.802C92.7215 115.088 93.5785 115.023 94.2215 114.596C94.8645 114.169 95.2595 113.378 95.1715 112.611C94.8905 110.159 91.7415 110.589 90.9945 112.49Z" fill="#FAFFFF" />
                                                                    </g>
                                                                    <g id="Group_15">
                                                                        <path id="Vector_73" d="M109.203 111.418C109.003 109.904 107.718 109.549 106.566 109.982C105.65 110.326 105.03 111.33 105.133 112.303C105.236 113.276 106.052 114.128 107.019 114.272" fill="#FF3333" />
                                                                        <path id="Vector_74" d="M107.721 112.973C107.289 112.199 107.317 111.19 107.79 110.441C108.263 109.692 109.163 109.233 110.048 109.29C110.932 109.347 111.765 109.917 112.138 110.721C112.388 111.26 112.414 111.957 112.017 112.4" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_75" d="M108.766 113.038C109.046 111.923 110.028 110.984 111.173 110.882C112.318 110.78 113.508 111.618 113.684 112.754C113.848 113.817 113.099 114.91 112.079 115.253C111.06 115.595 109.874 115.231 109.128 114.457" fill="#FF3333" />
                                                                        <path id="Vector_76" d="M108.202 112.915C107.664 112.128 106.409 112.027 105.676 112.636C104.943 113.246 104.776 114.39 105.197 115.245C105.618 116.1 106.537 116.651 107.485 116.755C107.933 116.804 108.4 116.76 108.803 116.559C109.206 116.358 109.535 115.984 109.617 115.541" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_77" d="M110.779 114.115C111.484 113.813 112.372 114.167 112.759 114.829C113.146 115.491 113.057 116.371 112.628 117.006C112.031 117.889 110.8 118.279 109.803 117.902C108.806 117.525 108.235 116.063 108.63 114.726" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_78" d="M110.19 115.086C111.306 115.985 110.997 117.428 110.333 118.016C109.67 118.604 108.679 118.794 107.845 118.492C107.012 118.191 106.371 117.411 106.237 116.535C106.147 115.948 106.779 114.486 108.232 114.635" fill="#4D2D9A" />
                                                                        <path id="Vector_79" d="M109.294 111.911C108.925 111.867 108.532 111.925 108.229 112.14C107.891 112.381 107.704 112.792 107.652 113.204C107.573 113.838 107.804 114.511 108.281 114.936C108.758 115.361 109.474 115.512 110.07 115.282C111.978 114.544 110.974 112.111 109.294 111.911Z" fill="#FAFFFF" />
                                                                        <path id="Vector_80" d="M109.325 112.67C109.119 112.645 108.899 112.678 108.73 112.798C108.541 112.933 108.436 113.162 108.408 113.393C108.364 113.747 108.493 114.123 108.76 114.361C109.027 114.599 109.427 114.683 109.76 114.554C110.825 114.141 110.264 112.782 109.325 112.67Z" fill="#FF9AEF" />
                                                                    </g>
                                                                    <g id="Group_16">
                                                                        <path id="Vector_81" d="M80.7335 115.558C79.9775 113.506 78.0705 113.413 76.5955 114.38C75.4235 115.149 74.8725 116.747 75.3235 118.075C75.7735 119.402 77.1825 120.337 78.5805 120.234" fill="#FF3333" />
                                                                        <path id="Vector_82" d="M79.1525 118.197C78.3065 117.251 78.0275 115.832 78.4535 114.636C78.8795 113.44 79.9915 112.516 81.2455 112.318C82.4995 112.12 83.8425 112.655 84.6165 113.66C85.1355 114.335 85.3905 115.301 84.9745 116.044" fill="#E5DFF7" />
                                                                        <path id="Vector_83" d="M80.6315 117.959C80.6715 116.313 81.7515 114.691 83.3195 114.188C84.8875 113.685 86.8135 114.483 87.4155 116.016C87.9785 117.45 87.2775 119.214 85.9595 120.012C84.6415 120.81 82.8695 120.675 81.5835 119.827" fill="#FF3333" />
                                                                        <path id="Vector_84" d="M79.8055 117.965C78.8055 117.034 77.0205 117.287 76.1875 118.37C75.3545 119.452 75.4805 121.104 76.3385 122.167C77.1955 123.23 78.6535 123.711 80.0105 123.558C80.6515 123.486 81.2915 123.278 81.7905 122.87C82.2905 122.462 82.6335 121.836 82.6085 121.192" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_85" d="M83.7835 118.833C84.6735 118.189 86.0265 118.405 86.7755 119.208C87.5245 120.011 87.6775 121.27 87.2765 122.292C86.7195 123.713 85.1215 124.646 83.6105 124.433C82.0995 124.219 80.8435 122.356 80.9735 120.362" fill="#FFE2C8" />
                                                                        <path id="Vector_86" d="M83.2655 120.374C85.1075 121.28 85.1295 123.394 84.3875 124.424C83.6455 125.454 82.3195 126.03 81.0595 125.872C79.8005 125.713 78.6595 124.825 78.1965 123.643C77.8865 122.85 78.3095 120.609 80.3875 120.36" fill="#FFA4BF" />
                                                                        <path id="Vector_87" d="M81.0155 116.218C80.4865 116.272 79.9545 116.477 79.5995 116.873C79.2025 117.316 79.0695 117.949 79.1285 118.541C79.2175 119.452 79.7525 120.32 80.5525 120.765C81.3525 121.21 82.4005 121.196 83.1615 120.686C85.5945 119.055 83.4265 115.971 81.0155 116.218Z" fill="#FF9AE3" />
                                                                        <path id="Vector_88" d="M81.2975 117.269C81.0015 117.299 80.7045 117.414 80.5055 117.635C80.2835 117.882 80.2095 118.237 80.2415 118.567C80.2915 119.076 80.5905 119.561 81.0375 119.81C81.4845 120.059 82.0705 120.05 82.4955 119.766C83.8565 118.854 82.6445 117.131 81.2975 117.269Z" fill="#FAFFFF" />
                                                                    </g>
                                                                    <g id="Group_17">
                                                                        <path id="Vector_89" d="M108.794 121.184C111.241 121.106 112.013 119.112 111.507 117.205C111.104 115.689 109.6 114.539 108.031 114.549C106.462 114.558 104.973 115.725 104.589 117.246" fill="#FFA4BF" />
                                                                        <path id="Vector_90" d="M106.549 118.572C107.853 118.007 109.459 118.212 110.579 119.086C111.699 119.961 112.287 121.468 112.055 122.87C111.823 124.272 110.781 125.51 109.439 125.977C108.539 126.29 107.422 126.22 106.78 125.516" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_91" d="M106.28 120.227C108.014 120.851 109.356 122.571 109.337 124.414C109.317 126.257 107.79 128.021 105.949 128.12C104.227 128.212 102.6 126.844 102.217 125.163C101.834 123.481 102.604 121.646 103.958 120.579" fill="#FFA4BF" />
                                                                        <path id="Vector_92" d="M106.284 119.641C107.626 118.908 107.987 116.922 107.132 115.655C106.276 114.388 104.478 113.939 103.046 114.474C101.614 115.009 100.589 116.388 100.271 117.884C100.121 118.591 100.115 119.343 100.372 120.018C100.629 120.693 101.173 121.278 101.867 121.479" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_93" d="M104.238 123.267C104.608 124.44 103.902 125.801 102.784 126.313C101.666 126.825 100.276 126.543 99.3305 125.756C98.0175 124.663 97.5905 122.636 98.3515 121.106C99.1115 119.576 101.535 118.9 103.607 119.742" fill="#E5DFF7" />
                                                                        <path id="Vector_94" d="M102.785 122.173C101.172 123.81 98.9185 123.086 98.0865 121.934C97.2545 120.782 97.1095 119.17 97.7235 117.889C98.3375 116.607 99.6835 115.709 101.102 115.635C102.054 115.585 104.285 116.827 103.816 119.122" fill="#FFA4BF" />
                                                                        <path id="Vector_95" d="M107.994 121.25C108.123 120.669 108.093 120.032 107.798 119.514C107.468 118.936 106.842 118.572 106.193 118.424C105.194 118.197 104.083 118.459 103.328 119.151C102.573 119.844 102.218 120.962 102.491 121.95C103.364 125.112 107.405 123.898 107.994 121.25Z" fill="#FF9AEF" />
                                                                        <path id="Vector_96" d="M106.778 121.178C106.85 120.853 106.834 120.497 106.668 120.208C106.484 119.885 106.134 119.681 105.771 119.599C105.213 119.472 104.592 119.618 104.17 120.005C103.748 120.392 103.55 121.017 103.702 121.569C104.19 123.336 106.449 122.658 106.778 121.178Z" fill="#FAFFFF" />
                                                                    </g>
                                                                    <g id="Group_18">
                                                                        <path id="Vector_97" d="M86.5665 119.424C86.3195 117.557 84.7335 117.118 83.3125 117.652C82.1825 118.076 81.4175 119.315 81.5445 120.516C81.6715 121.716 82.6795 122.768 83.8735 122.946" fill="#FFA4BF" />
                                                                        <path id="Vector_98" d="M84.7385 121.341C84.2065 120.386 84.2395 119.141 84.8235 118.217C85.4075 117.293 86.5165 116.727 87.6075 116.797C88.6985 116.867 89.7255 117.57 90.1865 118.562C90.4955 119.227 90.5265 120.087 90.0365 120.633" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_99" d="M86.0266 121.421C86.3716 120.046 87.5855 118.887 88.9975 118.761C90.4095 118.635 91.8775 119.669 92.0935 121.071C92.2955 122.382 91.3725 123.732 90.1145 124.153C88.8565 124.575 87.3925 124.126 86.4725 123.171" fill="#FFA4BF" />
                                                                        <path id="Vector_100" d="M85.3305 121.27C84.6665 120.299 83.1195 120.174 82.2145 120.926C81.3105 121.678 81.1045 123.089 81.6235 124.145C82.1425 125.2 83.2765 125.88 84.4465 126.008C84.9985 126.069 85.5755 126.015 86.0725 125.767C86.5695 125.518 86.9765 125.058 87.0765 124.511" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_101" d="M88.5096 122.751C89.3786 122.378 90.4746 122.815 90.9526 123.632C91.4306 124.449 91.3205 125.534 90.7905 126.318C90.0535 127.407 88.5356 127.888 87.3056 127.424C86.0766 126.959 85.3735 125.156 85.8595 123.505" fill="#FAFFFF" />
                                                                        <path id="Vector_102" d="M87.7835 123.948C89.1605 125.057 88.7785 126.838 87.9605 127.563C87.1415 128.288 85.9195 128.522 84.8905 128.15C83.8625 127.778 83.0715 126.817 82.9065 125.736C82.7955 125.011 83.5745 123.208 85.3675 123.391" fill="#FFA4BF" />
                                                                        <path id="Vector_103" d="M86.6785 120.067C86.2235 120.013 85.7385 120.084 85.3645 120.35C84.9475 120.647 84.7165 121.154 84.6535 121.662C84.5565 122.444 84.8415 123.274 85.4295 123.799C86.0175 124.324 86.9015 124.51 87.6365 124.225C89.9885 123.316 88.7505 120.315 86.6785 120.067Z" fill="#FF9AEF" />
                                                                        <path id="Vector_104" d="M86.7166 120.968C86.4626 120.938 86.1916 120.978 85.9826 121.126C85.7496 121.292 85.6206 121.575 85.5856 121.859C85.5316 122.296 85.6905 122.76 86.0195 123.053C86.3485 123.346 86.8425 123.45 87.2525 123.291C88.5665 122.783 87.8736 121.106 86.7166 120.968Z" fill="#FAFFFF" />
                                                                    </g>
                                                                    <g id="Group_19">
                                                                        <path id="Vector_105" d="M94.5345 122.194C94.1705 119.445 91.8375 118.799 89.7455 119.585C88.0815 120.21 86.9565 122.034 87.1435 123.801C87.3305 125.568 88.8135 127.115 90.5705 127.378" fill="#FF9494" />
                                                                        <path id="Vector_106" d="M91.8445 125.017C91.0605 123.612 91.1105 121.78 91.9695 120.419C92.8285 119.058 94.4615 118.225 96.0675 118.329C97.6735 118.432 99.1855 119.467 99.8635 120.927C100.319 121.906 100.365 123.172 99.6435 123.975" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_107" d="M93.7405 125.135C94.2485 123.11 96.0355 121.404 98.1145 121.219C100.194 121.033 102.355 122.556 102.673 124.619C102.97 126.549 101.612 128.535 99.7595 129.156C97.9085 129.777 95.7525 129.116 94.3975 127.71" fill="#FF9494" />
                                                                        <path id="Vector_108" d="M92.7165 124.912C91.7395 123.483 89.4615 123.299 88.1295 124.406C86.7975 125.513 86.4955 127.59 87.2595 129.144C88.0235 130.698 89.6935 131.698 91.4145 131.887C92.2275 131.976 93.0765 131.897 93.8075 131.531C94.5395 131.165 95.1375 130.487 95.2855 129.683" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_109" d="M97.3965 127.092C98.6765 126.543 100.289 127.186 100.992 128.388C101.695 129.59 101.535 131.188 100.755 132.342C99.6705 133.945 97.4345 134.654 95.6255 133.97C93.8155 133.286 92.7805 130.631 93.4965 128.202" fill="#FAFFFF" fill-opacity="0.8" />
                                                                        <path id="Vector_110" d="M96.3265 128.855C98.3525 130.488 97.7915 133.109 96.5865 134.176C95.3825 135.243 93.5825 135.588 92.0685 135.041C90.5545 134.494 89.3915 133.078 89.1475 131.487C88.9835 130.42 90.1315 127.766 92.7715 128.036" fill="#FF9494" />
                                                                        <path id="Vector_111" d="M94.7005 123.089C94.0305 123.009 93.3165 123.114 92.7665 123.505C92.1525 123.942 91.8125 124.689 91.7195 125.437C91.5765 126.588 91.9955 127.811 92.8615 128.583C93.7275 129.356 95.0275 129.63 96.1105 129.211C99.5735 127.871 97.7505 123.453 94.7005 123.089Z" fill="#FAFFFF" />
                                                                        <path id="Vector_112" d="M94.5945 124.467C94.2205 124.422 93.8215 124.481 93.5135 124.7C93.1705 124.944 92.9805 125.361 92.9285 125.779C92.8485 126.422 93.0835 127.106 93.5665 127.537C94.0505 127.969 94.7775 128.122 95.3815 127.888C97.3175 127.139 96.2985 124.671 94.5945 124.467Z" fill="#FF3333" />
                                                                    </g>
                                                                </g>
                                                                <path id="Vector_113" d="M98.9455 153.742C102.425 153.253 101.834 146.882 99.4115 144.753C98.6045 144.043 95.1335 145.138 93.7825 145.059C81.3445 144.329 63.8205 133.901 71.1555 100.237C70.4365 89.117 68.7505 76.77 75.3435 67.415C40.5345 105.475 57.7315 159.534 98.9455 153.742Z" fill="#F2C3B1" />
                                                                <path id="Vector_114" d="M80.6476 30.763C79.6186 33.426 80.6625 36.695 82.9585 38.391C85.2545 40.088 88.5785 40.166 91.0345 38.712C91.7295 38.301 92.5095 37.758 93.2685 38.032C93.9815 38.29 94.2575 39.125 94.5245 39.835C95.3605 42.056 96.9955 43.966 99.0615 45.135C99.5175 45.393 99.9995 45.62 100.383 45.977C100.766 46.334 101.042 46.859 100.944 47.373C100.898 47.616 100.772 47.838 100.727 48.082C100.682 48.325 100.749 48.622 100.975 48.723C101.224 48.834 101.516 48.637 101.634 48.392C101.753 48.147 101.758 47.864 101.822 47.6C102.011 46.815 102.68 46.257 103.28 45.717C104.78 44.369 106.085 42.77 106.896 40.924C107.707 39.078 108.001 36.97 107.504 35.016C106.958 32.867 105.49 31.027 103.695 29.724C101.901 28.421 99.7915 27.613 97.6525 27.027C94.9565 26.289 92.1075 25.881 89.3205 26.277C88.2295 26.432 87.2865 26.838 86.1875 26.891C85.0675 26.944 83.9965 27.276 83.0505 27.883C81.9825 28.568 81.1076 29.572 80.6476 30.763Z" fill="#161516" />
                                                                <path id="Vector_115" d="M85.1695 41.189C84.7345 40.938 84.2705 40.994 83.7995 41.093C83.5785 41.14 83.6375 41.471 83.8515 41.477C84.3385 41.49 84.6805 41.562 84.9815 41.981C85.1745 42.25 85.2666 42.504 85.5526 42.686C85.8606 42.882 86.1875 42.559 86.1265 42.245C86.0385 41.804 85.5475 41.407 85.1695 41.189Z" fill="#161516" />
                                                                <path id="Vector_116" d="M97.2206 45.179C96.7386 44.76 96.2685 44.493 95.6185 44.495C95.0105 44.497 94.4295 44.665 93.9005 44.957C93.5905 45.128 93.8005 45.626 94.1415 45.528C95.0125 45.28 96.0135 45.5 96.8405 45.832C97.2035 45.978 97.5046 45.426 97.2206 45.179Z" fill="#161516" />
                                                            </g>
                                                            <path id="Vector_117" d="M58.0406 69.264C55.8486 70.964 53.8796 73.141 53.1546 75.819C52.2116 79.302 53.5136 82.99 55.1636 86.199C57.3776 90.505 60.4276 94.618 64.7716 96.758C66.3286 97.525 68.1636 98.017 69.7926 97.419C71.7126 96.714 72.8076 94.732 73.6866 92.885C75.6185 88.824 77.3245 84.656 78.7935 80.405C79.7505 77.636 80.6165 74.757 80.4455 71.833C80.2875 69.14 79.3225 64.642 76.1645 64.169C72.1785 63.572 67.7995 64.361 64.0865 65.831C61.9245 66.686 59.8786 67.838 58.0406 69.264Z" fill="#FAFFFF" />
                                                            <path id="Vector_118" d="M108.866 68.867C109.988 75.085 110.108 81.48 111.774 87.575C112.37 89.755 113.122 91.945 114.503 93.735C115.884 95.525 117.998 96.874 120.259 96.838C122.387 96.805 124.302 95.593 126.022 94.339C129.249 91.987 132.323 89.248 134.18 85.713C136.038 82.178 136.498 77.711 134.539 74.232C133.442 72.285 131.701 70.796 129.98 69.37C127.387 67.22 124.739 65.101 121.775 63.501C118.257 61.601 107.582 61.755 108.866 68.867Z" fill="#FAFFFF" />
                                                            <path id="Vector_119" opacity="0.16" d="M77.2216 158.246C67.2046 208.987 61.8045 268.905 62.2845 320.623" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_120" opacity="0.16" d="M88.9966 157.417C86.2536 210.793 87.2115 269.69 91.8595 322.934" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_121" opacity="0.16" d="M111.337 149.509C125.7 206.44 136.918 261.304 140.841 319.888" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_122" opacity="0.16" d="M101.947 149.501C114.076 209.815 120.688 261.413 120.476 322.934" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_123" opacity="0.16" d="M71.8076 66.235C65.5826 67.649 56.6755 74.07 53.9225 81.709" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_124" opacity="0.16" d="M74.0545 70.352C66.5165 75.055 60.9555 80.733 57.1105 88.742" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_125" opacity="0.16" d="M73.3495 76.431C71.2575 83.227 68.2165 89.73 64.3425 95.692" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_126" opacity="0.16" d="M113.82 67.649C119.569 75.642 123.329 85.055 124.669 94.809" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_127" opacity="0.16" d="M119.109 67.139C125.777 72.017 130.445 79.55 131.845 87.692" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                            <path id="Vector_128" opacity="0.16" d="M113.558 72.421C114.513 80.967 116.777 88.146 120.898 95.693" stroke="#D9C4E4" stroke-width="0.9452" stroke-miterlimit="10" />
                                                        </g>
                                                        <g id="Group_20">
                                                            <g id="Vector_129">
                                                                <mask id="path-129-inside-1_1_7" fill="white">
                                                                    <path d="M66.2655 107.261C70.4115 109.712 77.8196 106.791 78.1886 107.468C78.5576 108.145 75.4096 109.668 73.6356 110.24C78.4406 110.564 84.5216 109.488 84.6376 110.099C84.7526 110.71 79.1145 112.423 76.0195 112.762C79.4875 112.948 86.0446 111.512 86.1466 112.284C86.2486 113.056 80.9365 115.092 77.0585 115.864C80.0565 115.556 86.0555 114.351 86.0965 115.207C86.1385 116.063 81.5186 117.622 77.4816 117.964C79.8796 118.049 83.4995 118.115 83.4365 118.808C83.3745 119.501 70.4286 124.465 57.0446 117.345" />
                                                                </mask>
                                                                <path d="M66.2655 107.261C70.4115 109.712 77.8196 106.791 78.1886 107.468C78.5576 108.145 75.4096 109.668 73.6356 110.24C78.4406 110.564 84.5216 109.488 84.6376 110.099C84.7526 110.71 79.1145 112.423 76.0195 112.762C79.4875 112.948 86.0446 111.512 86.1466 112.284C86.2486 113.056 80.9365 115.092 77.0585 115.864C80.0565 115.556 86.0555 114.351 86.0965 115.207C86.1385 116.063 81.5186 117.622 77.4816 117.964C79.8796 118.049 83.4995 118.115 83.4365 118.808C83.3745 119.501 70.4286 124.465 57.0446 117.345" fill="#F2C3B1" />
                                                                <path d="M73.6356 110.24L73.3287 109.288L73.5683 111.238L73.6356 110.24ZM84.6376 110.099L85.6203 109.914L85.62 109.912L84.6376 110.099ZM76.0195 112.762L75.9107 111.768L75.966 113.761L76.0195 112.762ZM77.0585 115.864L76.8633 114.883L77.1607 116.859L77.0585 115.864ZM86.0965 115.207L85.0977 115.255L85.0977 115.256L86.0965 115.207ZM77.4816 117.964L77.3971 116.968L77.4461 118.963L77.4816 117.964ZM83.4365 118.808L82.4406 118.717L82.4405 118.719L83.4365 118.808ZM65.7567 108.122C68.1559 109.54 71.3641 109.36 73.7825 109.02C75.0092 108.848 76.156 108.613 76.9234 108.48C77.3303 108.41 77.6082 108.372 77.7822 108.364C77.8736 108.361 77.875 108.369 77.8273 108.358C77.8121 108.355 77.4992 108.293 77.3105 107.947L79.0666 106.989C78.8318 106.559 78.4178 106.44 78.2515 106.404C78.0527 106.361 77.853 106.36 77.6985 106.366C77.3805 106.379 76.9868 106.439 76.5825 106.509C75.7276 106.657 74.694 106.872 73.5044 107.039C71.09 107.378 68.5212 107.433 66.7744 106.4L65.7567 108.122ZM77.3105 107.947C77.1449 107.643 77.2452 107.374 77.2787 107.308C77.3042 107.257 77.3067 107.278 77.2087 107.367C77.0232 107.536 76.6882 107.764 76.2286 108.02C75.3244 108.524 74.1544 109.022 73.3287 109.288L73.9424 111.192C74.8907 110.886 76.1817 110.336 77.2028 109.767C77.7058 109.486 78.1995 109.17 78.5559 108.845C78.7288 108.688 78.9306 108.474 79.0645 108.208C79.2065 107.927 79.3245 107.463 79.0666 106.989L77.3105 107.947ZM73.5683 111.238C76.0516 111.405 78.8425 111.211 80.966 111.059C82.0478 110.982 82.934 110.918 83.5602 110.909C83.8804 110.904 84.0744 110.915 84.1716 110.931C84.2261 110.939 84.1847 110.94 84.1043 110.9C84.0361 110.866 83.7332 110.697 83.6551 110.286L85.62 109.912C85.5274 109.425 85.1634 109.192 84.991 109.107C84.8064 109.016 84.6178 108.976 84.4856 108.955C84.2092 108.911 83.8716 108.904 83.5303 108.909C82.8335 108.919 81.8775 108.989 80.8239 109.064C78.6766 109.217 76.0245 109.399 73.7028 109.242L73.5683 111.238ZM83.6548 110.284C83.5852 109.914 83.7625 109.666 83.8028 109.614C83.8532 109.549 83.8866 109.532 83.8481 109.56C83.7786 109.609 83.6256 109.696 83.3651 109.813C82.8584 110.041 82.112 110.309 81.2389 110.577C79.49 111.113 77.3726 111.608 75.9107 111.768L76.1284 113.756C77.7615 113.577 80.0106 113.046 81.8257 112.488C82.7346 112.209 83.5696 111.914 84.1844 111.637C84.4847 111.503 84.7774 111.353 85.0063 111.19C85.1171 111.112 85.2628 110.995 85.3847 110.838C85.4964 110.693 85.7043 110.36 85.6203 109.914L83.6548 110.284ZM75.966 113.761C77.8061 113.859 80.4191 113.531 82.4593 113.297C83.5117 113.176 84.4073 113.08 85.0427 113.059C85.3697 113.048 85.5609 113.059 85.6485 113.075C85.6975 113.084 85.6416 113.082 85.5484 113.027C85.4404 112.964 85.2027 112.774 85.1552 112.415L87.1379 112.153C87.0777 111.697 86.7768 111.429 86.5599 111.302C86.3577 111.183 86.1471 111.132 86.0002 111.106C85.6962 111.052 85.3313 111.048 84.975 111.06C84.2439 111.085 83.2644 111.191 82.2313 111.31C80.1005 111.554 77.701 111.851 76.0731 111.763L75.966 113.761ZM85.1552 112.415C85.1217 112.162 85.2122 111.986 85.2447 111.931C85.2788 111.874 85.3009 111.861 85.2689 111.89C85.2059 111.948 85.0652 112.051 84.8182 112.193C84.3355 112.469 83.6115 112.799 82.7317 113.142C80.978 113.826 78.7369 114.51 76.8633 114.883L77.2538 116.845C79.2582 116.446 81.6121 115.726 83.4584 115.006C84.3786 114.647 85.2059 114.275 85.8117 113.928C86.1089 113.758 86.3968 113.57 86.6199 113.365C86.7309 113.263 86.8606 113.127 86.9631 112.955C87.0641 112.785 87.1841 112.503 87.1379 112.153L85.1552 112.415ZM77.1607 116.859C78.6457 116.706 81.0267 116.312 82.8093 116.091C83.7458 115.975 84.5384 115.903 85.0844 115.905C85.3692 115.906 85.5099 115.929 85.5513 115.94C85.5735 115.946 85.494 115.93 85.3907 115.846C85.2616 115.741 85.1113 115.538 85.0977 115.255L87.0954 115.159C87.0767 114.769 86.8747 114.475 86.6518 114.294C86.4546 114.134 86.2391 114.056 86.0875 114.013C85.7812 113.928 85.4231 113.907 85.0929 113.905C84.4089 113.902 83.5067 113.99 82.5635 114.107C80.5869 114.351 78.4694 114.714 76.9564 114.869L77.1607 116.859ZM85.0977 115.256C85.0809 114.913 85.2881 114.762 85.2108 114.836C85.1697 114.876 85.0614 114.96 84.8509 115.076C84.4391 115.305 83.8063 115.567 83.0086 115.828C81.4212 116.345 79.3326 116.804 77.3971 116.968L77.566 118.96C79.6675 118.782 81.9074 118.29 83.6287 117.729C84.4854 117.45 85.2521 117.141 85.8208 116.825C86.1007 116.67 86.3779 116.489 86.5972 116.278C86.7803 116.102 87.1227 115.715 87.0953 115.158L85.0977 115.256ZM77.4461 118.963C78.6661 119.007 80.1286 119.043 81.2873 119.154C81.8741 119.209 82.3199 119.279 82.5956 119.357C82.7423 119.399 82.762 119.422 82.7239 119.396C82.6869 119.37 82.4016 119.147 82.4406 118.717L84.4324 118.899C84.4872 118.296 84.1026 117.919 83.8703 117.757C83.6369 117.594 83.3655 117.497 83.1442 117.434C82.6839 117.303 82.0866 117.22 81.4765 117.162C80.2415 117.045 78.695 117.006 77.517 116.965L77.4461 118.963ZM82.4405 118.719C82.4685 118.406 82.6398 118.227 82.6522 118.214C82.6918 118.17 82.7154 118.156 82.6947 118.171C82.6574 118.198 82.5642 118.255 82.3956 118.337C82.0663 118.498 81.552 118.704 80.8679 118.919C79.5049 119.349 77.5337 119.798 75.1476 120.01C70.3766 120.435 63.9977 119.911 57.5142 116.462L56.5749 118.228C63.4754 121.899 70.2615 122.453 75.3249 122.002C77.8561 121.777 79.9696 121.3 81.4696 120.827C82.217 120.591 82.8289 120.351 83.2718 120.135C83.4892 120.029 83.6935 119.916 83.8592 119.797C83.94 119.739 84.0415 119.659 84.1345 119.556C84.2004 119.484 84.4007 119.253 84.4326 118.897L82.4405 118.719Z" fill="#F2C3B1" mask="url(#path-129-inside-1_1_7)" />
                                                            </g>
                                                            <path id="Vector_130" d="M27.7562 54.6853L27.7562 54.6853C20.6546 70.1482 18.8659 84.8026 25.3739 94.3825C31.8283 103.883 46.2362 108.116 70.7981 103.491C68.4143 109.763 67.9678 115.721 68.7846 122.188C41.8348 126.824 20.9363 121.876 9.71553 109.374C-1.54848 96.8232 -3.23227 76.4567 8.83561 49.9462C13.1829 40.3965 19.8723 37.7181 24.3556 39.1936C26.6056 39.9341 28.3865 41.7306 29.15 44.3674C29.9154 47.011 29.6639 50.5322 27.7562 54.6853Z" fill="#FFE57A" stroke="#FFE784" />
                                                            <path id="Vector_131" d="M23.0305 69.452C22.4325 72.683 22.0786 75.942 22.1416 79.232C22.2956 87.127 25.2416 95.368 31.6046 100.043C37.6076 104.453 54.0346 106.016 71.5946 102.829" stroke="#FFE784" stroke-miterlimit="10" />
                                                        </g>
                                                        <path id="Vector_132" d="M34.0275 34.102C37.7865 51.967 38.1255 77.291 36.2525 95.477C35.3325 84.133 33.1655 65.693 29.1035 54.7C28.3415 52.638 27.5055 50.388 28.2015 48.302C28.5805 47.164 29.3775 46.223 29.9805 45.186C30.5835 44.15 30.9985 42.868 30.5325 41.763C30.1285 40.804 29.1545 40.199 28.6555 39.286C28.0905 38.252 27.5265 37.569 28.0995 36.539C29.7195 33.627 34.0275 34.102 34.0275 34.102Z" fill="#FFFBEC" />
                                                        <path id="Vector_133" d="M39.2355 36.704C38.4895 38.052 37.9875 39.4 37.9645 40.748C36.8575 40.341 32.0255 38.402 32.3905 34.691C32.4395 34.192 33.0826 33.498 33.6466 33.661C34.1886 33.818 34.8245 34.599 35.3115 34.924C36.5155 35.728 37.8455 36.333 39.2355 36.704Z" fill="#FAFFFF" />
                                                        <path id="Vector_134" d="M39.2355 36.719C40.1715 37.864 40.7825 39.12 40.6245 40.636C41.8335 40.241 47.1125 38.363 46.7145 34.769C46.6605 34.286 45.9585 33.613 45.3425 33.772C44.7495 33.924 44.0565 34.68 43.5235 34.995C42.2065 35.773 40.7535 36.36 39.2355 36.719Z" fill="#FAFFFF" />
                                                        <g id="Group_21">
                                                            <path id="Vector_135" d="M38.7676 37.013C38.4226 36.498 38.0066 36.031 37.5346 35.629C37.2856 35.417 37.0146 35.22 36.7046 35.115C36.3946 35.011 36.0366 35.009 35.7536 35.174C35.5206 35.31 35.3586 35.546 35.2646 35.799C35.1716 36.052 35.1406 36.324 35.1206 36.592C35.0826 37.111 35.0816 37.634 35.1176 38.153C35.1526 38.646 35.2376 39.174 35.5846 39.525C35.9826 39.928 36.6336 39.984 37.1726 39.812C37.7116 39.639 38.1666 39.277 38.6076 38.922" fill="#FFF230" fill-opacity="0.65" />
                                                            <path id="Vector_136" d="M40.1456 37.013C40.4906 36.498 40.9066 36.031 41.3786 35.629C41.6276 35.417 41.8986 35.22 42.2086 35.115C42.5186 35.011 42.8766 35.009 43.1596 35.174C43.3926 35.31 43.5546 35.546 43.6486 35.799C43.7416 36.052 43.7726 36.324 43.7926 36.592C43.8306 37.111 43.8316 37.634 43.7956 38.153C43.7616 38.646 43.6756 39.174 43.3286 39.525C42.9306 39.928 42.2796 39.984 41.7406 39.812C41.2016 39.639 40.7466 39.277 40.3056 38.922" fill="#FFF230" fill-opacity="0.65" />
                                                            <path id="Vector_137" d="M40.8286 37.841C41.2216 37.647 41.6186 37.462 42.0196 37.285C42.1926 37.209 42.0696 36.917 41.8906 36.979C41.4756 37.122 41.0646 37.273 40.6566 37.433C40.6266 37.445 40.6216 37.469 40.6006 37.486C40.5656 37.348 40.5246 37.212 40.4366 37.1C40.2666 36.882 39.9926 36.763 39.7186 36.722C39.2836 36.658 38.6646 36.611 38.4086 37.049C38.3246 37.193 38.2886 37.356 38.2626 37.522C37.7466 37.324 37.2306 37.126 36.7146 36.928C36.5806 36.877 36.5216 37.093 36.6556 37.144C37.1796 37.345 37.7046 37.546 38.2286 37.747L38.2026 37.972C37.7666 38.052 37.3306 38.133 36.8936 38.213C36.7056 38.248 36.7516 38.546 36.9386 38.542C37.3386 38.535 37.7386 38.528 38.1386 38.52L38.1156 38.717C38.0896 38.937 38.0706 39.181 38.2026 39.358C38.3396 39.542 38.5906 39.59 38.8176 39.624C39.0916 39.665 39.3696 39.706 39.6456 39.68C39.9216 39.654 40.2006 39.553 40.3886 39.35C40.5856 39.137 40.6506 38.852 40.6716 38.556C41.0266 38.608 41.3846 38.649 41.7366 38.728C41.9116 38.768 42.0486 38.5 41.8656 38.422C41.4756 38.255 41.0726 38.129 40.6726 37.996C40.6676 37.948 40.6626 37.9 40.6596 37.852C40.7086 37.868 40.7646 37.873 40.8286 37.841Z" fill="#FFE57A" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </svg>

                            </div>

                            <div className="sub-tag">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Your Story Told Like None Other</p>
                            </div>

                            <button id="now-booking-wed"
                                onClick={() => {
                                }}
                            >
                                PORTFOLIO
                            </button>
                            <div className="custom-shape-divider-bottom-1726444224">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                                </svg>
                            </div>
                        </div>
                        {/*<div className="vertical-section sec-top1">
                            <div className="panel  ">
                                <button id="okays-back">back to horizontal</button>
                                <p>hello wedding</p>
                            </div>
                        </div>*/}
                    </div>
                    <div id="section-3" className="panels">
                        <div className="sec-top">
                            <div className="akaar-wedstyle">
                                <h1 id="akaar-fashion">FASHION</h1>
                            </div>

                            <div id="cealling-lamp">
                                <svg viewBox="0 0 201 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Lamp_2">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" opacity="0.1" d="M55.294 264.815C85.832 264.815 110.588 240.059 110.588 209.521C110.588 178.983 85.832 154.227 55.294 154.227C24.756 154.227 0 178.983 0 209.521C0 240.059 24.756 264.815 55.294 264.815Z" fill="#FF1010" />
                                                <path id="Vector_2" opacity="0.3" d="M55.294 242.546C75.5839 242.546 92.032 226.098 92.032 205.808C92.032 185.518 75.5839 169.07 55.294 169.07C35.0042 169.07 18.556 185.518 18.556 205.808C18.556 226.098 35.0042 242.546 55.294 242.546Z" fill="#FF1010" />
                                                <g id="Group_3">
                                                    <g id="Group_4">
                                                        <g id="Group_5">
                                                            <g id="Group_6">
                                                                <g id="Group_7">
                                                                    <path id="Vector_3" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="#FF1010" />
                                                                    <path id="Vector_4" opacity="0.4" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="white" />
                                                                    <path id="Vector_5" opacity="0.2" d="M49.916 187.887C49.916 185.849 52.301 184.193 55.258 184.193C58.215 184.193 60.6 185.849 60.6 187.887C60.6 189.925 58.215 191.584 55.258 191.584C52.301 191.584 49.916 189.928 49.916 187.887Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_6" d="M63.217 177.952C64.128 179.514 64.49 181.389 64.226 183.177C63.962 184.966 63.074 186.656 61.751 187.888" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_7" d="M57.505 172.193C56.702 174.926 56.561 177.907 57.101 180.723C57.188 181.178 57.394 181.726 57.802 181.737C58.167 181.746 58.407 181.297 58.486 180.89C58.765 179.452 58.019 177.99 57.065 176.997C56.549 176.459 55.922 175.99 55.224 175.956C54.523 175.922 53.853 176.337 53.346 176.89C52.374 177.948 51.89 179.605 52.242 181.083C52.391 181.708 52.834 182.38 53.393 182.26C53.729 182.188 53.975 181.833 54.062 181.456C54.149 181.079 54.106 180.68 54.057 180.294C53.702 177.511 53.022 174.783 52.043 172.202" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_8" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="#263238" />
                                                        <path id="Vector_9" opacity="0.3" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="white" />
                                                        <path id="Vector_10" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="#263238" />
                                                        <path id="Vector_11" opacity="0.3" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="white" />
                                                        <path id="Vector_12" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="#263238" />
                                                        <path id="Vector_13" opacity="0.3" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="white" />
                                                        <path id="Vector_14" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="#263238" />
                                                        <path id="Vector_15" opacity="0.3" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_16" d="M72.155 162.415H38.328V167.58H72.155V162.415Z" fill="#263238" />
                                                <path id="Vector_17" d="M62.595 168.609H47.888V155.983C47.888 152.521 50.695 149.714 54.157 149.714H56.327C59.789 149.714 62.596 152.521 62.596 155.983V168.609H62.595Z" fill="#263238" />
                                                <g id="Group_8">
                                                    <g id="Group_9">
                                                        <path id="Vector_18" d="M55.992 153.151C55.992 135.097 55.992 117.044 55.992 98.99C55.992 77.951 55.992 56.913 55.992 35.874C55.992 26.705 55.992 17.536 55.992 8.36702C55.992 7.40202 54.492 7.40002 54.492 8.36702C54.492 26.421 54.492 44.474 54.492 62.528C54.492 83.567 54.492 104.605 54.492 125.644C54.492 134.813 54.492 143.982 54.492 153.151C54.492 154.116 55.992 154.118 55.992 153.151Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_19" opacity="0.5" d="M73.933 164.888L38.023 164.299C21.488 171.097 9.84497 187.365 9.84497 206.351C9.84497 231.452 30.193 251.8 55.294 251.8C80.395 251.8 100.743 231.452 100.743 206.351C100.743 187.893 89.739 172.005 73.933 164.888Z" fill="#FF1010" />
                                                <g id="Group_10" opacity="0.2">
                                                    <path id="Vector_20" d="M90.084 177.115C85.712 171.919 80.203 167.712 73.933 164.889L38.023 164.3C21.488 171.098 9.84497 187.366 9.84497 206.352C9.84497 216.265 13.028 225.429 18.415 232.899C27.41 235.634 37.391 234.837 46.186 231.395C56.138 227.5 64.641 220.434 71.359 212.123C78.077 203.811 83.112 194.265 87.442 184.494C88.495 182.119 89.519 179.641 90.084 177.115Z" fill="white" />
                                                </g>
                                                <g id="Group_11" opacity="0.3">
                                                    <path id="Vector_21" d="M35.202 173.199C35.384 171.874 33.818 170.979 32.706 171.722C26.276 176.024 21.131 182.229 18.112 189.354C14.932 196.859 14.125 205.348 15.835 213.318C16.021 214.184 16.249 215.072 16.792 215.772C17.335 216.472 18.274 216.938 19.12 216.675C20.137 216.359 20.587 215.21 20.822 214.155C21.124 212.796 21.313 211.415 21.441 210.029C22.017 203.759 22.384 197.395 24.04 191.306C25.505 185.917 28.061 180.693 32.169 176.91C32.955 176.186 34.167 175.263 34.772 174.382C34.972 174.088 35.139 173.656 35.202 173.199Z" fill="white" />
                                                </g>
                                                <path id="Vector_22" opacity="0.2" d="M62.595 161.203H47.888V162.415H62.595V161.203Z" fill="black" />
                                            </g>
                                            <g id="Group_12">
                                                <path id="Vector_23" opacity="0.1" d="M145.308 214.777C175.854 214.777 200.616 190.015 200.616 159.469C200.616 128.923 175.854 104.161 145.308 104.161C114.762 104.161 90 128.923 90 159.469C90 190.015 114.762 214.777 145.308 214.777Z" fill="#FF1010" />
                                                <path id="Vector_24" opacity="0.3" d="M145.308 192.502C165.603 192.502 182.055 176.05 182.055 155.755C182.055 135.46 165.603 119.008 145.308 119.008C125.013 119.008 108.561 135.46 108.561 155.755C108.561 176.05 125.013 192.502 145.308 192.502Z" fill="#FF1010" />
                                                <g id="Group_13">
                                                    <g id="Group_14">
                                                        <g id="Group_15">
                                                            <g id="Group_16">
                                                                <g id="Group_17">
                                                                    <path id="Vector_25" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="#FF1010" />
                                                                    <path id="Vector_26" opacity="0.4" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="white" />
                                                                    <path id="Vector_27" opacity="0.2" d="M139.928 137.829C139.928 135.791 142.313 134.134 145.271 134.134C148.229 134.134 150.614 135.79 150.614 137.829C150.614 139.868 148.229 141.527 145.271 141.527C142.314 141.527 139.928 139.871 139.928 137.829Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_28" d="M153.232 127.892C154.143 129.454 154.505 131.329 154.241 133.118C153.977 134.907 153.089 136.598 151.765 137.83" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_29" d="M147.52 122.132C146.717 124.865 146.576 127.848 147.116 130.664C147.203 131.119 147.409 131.667 147.817 131.678C148.183 131.687 148.422 131.238 148.501 130.831C148.78 129.392 148.034 127.931 147.08 126.937C146.563 126.399 145.937 125.93 145.238 125.896C144.536 125.862 143.867 126.277 143.359 126.83C142.387 127.888 141.903 129.545 142.255 131.024C142.404 131.649 142.848 132.321 143.406 132.201C143.742 132.129 143.988 131.774 144.075 131.396C144.162 131.018 144.119 130.62 144.07 130.234C143.715 127.451 143.035 124.721 142.055 122.14" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_30" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="#263238" />
                                                        <path id="Vector_31" opacity="0.3" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="white" />
                                                        <path id="Vector_32" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="#263238" />
                                                        <path id="Vector_33" opacity="0.3" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="white" />
                                                        <path id="Vector_34" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="#263238" />
                                                        <path id="Vector_35" opacity="0.3" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="white" />
                                                        <path id="Vector_36" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="#263238" />
                                                        <path id="Vector_37" opacity="0.3" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_38" d="M162.173 112.351H128.338V117.517H162.173V112.351Z" fill="#263238" />
                                                <path id="Vector_39" d="M152.611 118.547H137.901V105.917C137.901 102.455 140.708 99.648 144.17 99.648H146.343C149.805 99.648 152.612 102.455 152.612 105.917V118.547H152.611Z" fill="#263238" />
                                                <g id="Group_18">
                                                    <g id="Group_19">
                                                        <path id="Vector_40" d="M146.005 102.563C146.005 78.4591 146.005 54.3533 146.005 30.2492C146.005 20.5821 146.005 10.9133 146.005 1.24623C146.005 -0.413689 144.505 -0.41713 144.505 1.24623C144.505 25.3503 144.505 49.4561 144.505 73.5602C144.505 83.2273 144.505 92.8961 144.505 102.563C144.505 104.223 146.005 104.227 146.005 102.563Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_41" opacity="0.5" d="M163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 181.405 120.201 201.758 145.308 201.758C170.415 201.758 190.768 181.405 190.768 156.298C190.768 137.835 179.761 121.943 163.951 114.825Z" fill="#FF1010" />
                                                <g id="Group_20" opacity="0.2">
                                                    <path id="Vector_42" d="M180.106 127.054C175.733 121.856 170.222 117.648 163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 166.213 103.032 175.38 108.42 182.851C117.418 185.586 127.401 184.789 136.198 181.346C146.153 177.45 154.657 170.383 161.377 162.069C168.097 153.755 173.132 144.207 177.464 134.434C178.517 132.06 179.541 129.581 180.106 127.054Z" fill="white" />
                                                </g>
                                                <g id="Group_21" opacity="0.3">
                                                    <path id="Vector_43" d="M125.211 123.138C125.393 121.812 123.826 120.917 122.714 121.661C116.282 125.964 111.136 132.171 108.116 139.297C104.935 146.803 104.128 155.295 105.838 163.266C106.024 164.132 106.252 165.021 106.795 165.721C107.338 166.421 108.277 166.887 109.123 166.624C110.14 166.308 110.591 165.159 110.825 164.103C111.127 162.744 111.317 161.362 111.444 159.976C112.02 153.704 112.387 147.339 114.043 141.248C115.509 135.858 118.065 130.632 122.174 126.849C122.96 126.125 124.173 125.201 124.778 124.321C124.98 124.027 125.148 123.595 125.211 123.138Z" fill="white" />
                                                </g>
                                                <path id="Vector_44" opacity="0.2" d="M152.61 111.139H137.9V112.352H152.61V111.139Z" fill="black" />
                                            </g>
                                            <path id="Vector_45" d="M165.561 8.367H23.42L24.42 0H166.561L165.561 8.367Z" fill="#263238" />
                                        </g>
                                    </g>
                                </svg>

                            </div>


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
                            <div className="sub-tag">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Taking your fashion to the next level</p>
                            </div>
                            <button id="now-booking-fashion" onClick={() => {
                            }}>
                                PORTFOLIO
                            </button>
                        </div>
                    </div>
                    <div id="section-4" className="panels">
                        <div className="sec-top">
                            <div className="akaar-wedstyle">
                                <h1 id="akaar-commercials">COMMERCIAL</h1>
                            </div>

                            <div id="cealling-lamp">
                                <svg viewBox="0 0 201 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Lamp_2">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" opacity="0.1" d="M55.294 264.815C85.832 264.815 110.588 240.059 110.588 209.521C110.588 178.983 85.832 154.227 55.294 154.227C24.756 154.227 0 178.983 0 209.521C0 240.059 24.756 264.815 55.294 264.815Z" fill="#7800B0" />
                                                <path id="Vector_2" opacity="0.3" d="M55.294 242.546C75.5839 242.546 92.032 226.098 92.032 205.808C92.032 185.518 75.5839 169.07 55.294 169.07C35.0042 169.07 18.556 185.518 18.556 205.808C18.556 226.098 35.0042 242.546 55.294 242.546Z" fill="#7800B0" />
                                                <g id="Group_3">
                                                    <g id="Group_4">
                                                        <g id="Group_5">
                                                            <g id="Group_6">
                                                                <g id="Group_7">
                                                                    <path id="Vector_3" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="#7800B0" />
                                                                    <path id="Vector_4" opacity="0.4" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="white" />
                                                                    <path id="Vector_5" opacity="0.2" d="M49.916 187.887C49.916 185.849 52.301 184.193 55.258 184.193C58.215 184.193 60.6 185.849 60.6 187.887C60.6 189.925 58.215 191.584 55.258 191.584C52.301 191.584 49.916 189.928 49.916 187.887Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_6" d="M63.217 177.952C64.128 179.514 64.49 181.389 64.226 183.177C63.962 184.966 63.074 186.656 61.751 187.888" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_7" d="M57.505 172.193C56.702 174.926 56.561 177.907 57.101 180.723C57.188 181.178 57.394 181.726 57.802 181.737C58.167 181.746 58.407 181.297 58.486 180.89C58.765 179.452 58.019 177.99 57.065 176.997C56.549 176.459 55.922 175.99 55.224 175.956C54.523 175.922 53.853 176.337 53.346 176.89C52.374 177.948 51.89 179.605 52.242 181.083C52.391 181.708 52.834 182.38 53.393 182.26C53.729 182.188 53.975 181.833 54.062 181.456C54.149 181.079 54.106 180.68 54.057 180.294C53.702 177.511 53.022 174.783 52.043 172.202" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_8" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="#263238" />
                                                        <path id="Vector_9" opacity="0.3" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="white" />
                                                        <path id="Vector_10" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="#263238" />
                                                        <path id="Vector_11" opacity="0.3" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="white" />
                                                        <path id="Vector_12" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="#263238" />
                                                        <path id="Vector_13" opacity="0.3" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="white" />
                                                        <path id="Vector_14" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="#263238" />
                                                        <path id="Vector_15" opacity="0.3" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_16" d="M72.155 162.415H38.328V167.58H72.155V162.415Z" fill="#263238" />
                                                <path id="Vector_17" d="M62.595 168.609H47.888V155.983C47.888 152.521 50.695 149.714 54.157 149.714H56.327C59.789 149.714 62.596 152.521 62.596 155.983V168.609H62.595Z" fill="#263238" />
                                                <g id="Group_8">
                                                    <g id="Group_9">
                                                        <path id="Vector_18" d="M55.992 153.151C55.992 135.097 55.992 117.044 55.992 98.99C55.992 77.951 55.992 56.913 55.992 35.874C55.992 26.705 55.992 17.536 55.992 8.36702C55.992 7.40202 54.492 7.40002 54.492 8.36702C54.492 26.421 54.492 44.474 54.492 62.528C54.492 83.567 54.492 104.605 54.492 125.644C54.492 134.813 54.492 143.982 54.492 153.151C54.492 154.116 55.992 154.118 55.992 153.151Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_19" opacity="0.5" d="M73.933 164.888L38.023 164.299C21.488 171.097 9.84497 187.365 9.84497 206.351C9.84497 231.452 30.193 251.8 55.294 251.8C80.395 251.8 100.743 231.452 100.743 206.351C100.743 187.893 89.739 172.005 73.933 164.888Z" fill="#7800B0" />
                                                <g id="Group_10" opacity="0.2">
                                                    <path id="Vector_20" d="M90.084 177.115C85.712 171.919 80.203 167.712 73.933 164.889L38.023 164.3C21.488 171.098 9.84497 187.366 9.84497 206.352C9.84497 216.265 13.028 225.429 18.415 232.899C27.41 235.634 37.391 234.837 46.186 231.395C56.138 227.5 64.641 220.434 71.359 212.123C78.077 203.811 83.112 194.265 87.442 184.494C88.495 182.119 89.519 179.641 90.084 177.115Z" fill="white" />
                                                </g>
                                                <g id="Group_11" opacity="0.3">
                                                    <path id="Vector_21" d="M35.202 173.199C35.384 171.874 33.818 170.979 32.706 171.722C26.276 176.024 21.131 182.229 18.112 189.354C14.932 196.859 14.125 205.348 15.835 213.318C16.021 214.184 16.249 215.072 16.792 215.772C17.335 216.472 18.274 216.938 19.12 216.675C20.137 216.359 20.587 215.21 20.822 214.155C21.124 212.796 21.313 211.415 21.441 210.029C22.017 203.759 22.384 197.395 24.04 191.306C25.505 185.917 28.061 180.693 32.169 176.91C32.955 176.186 34.167 175.263 34.772 174.382C34.972 174.088 35.139 173.656 35.202 173.199Z" fill="white" />
                                                </g>
                                                <path id="Vector_22" opacity="0.2" d="M62.595 161.203H47.888V162.415H62.595V161.203Z" fill="black" />
                                            </g>
                                            <g id="Group_12">
                                                <path id="Vector_23" opacity="0.1" d="M145.308 214.777C175.854 214.777 200.616 190.015 200.616 159.469C200.616 128.923 175.854 104.161 145.308 104.161C114.762 104.161 90 128.923 90 159.469C90 190.015 114.762 214.777 145.308 214.777Z" fill="#7800B0" />
                                                <path id="Vector_24" opacity="0.3" d="M145.308 192.502C165.603 192.502 182.055 176.05 182.055 155.755C182.055 135.46 165.603 119.008 145.308 119.008C125.013 119.008 108.561 135.46 108.561 155.755C108.561 176.05 125.013 192.502 145.308 192.502Z" fill="#7800B0" />
                                                <g id="Group_13">
                                                    <g id="Group_14">
                                                        <g id="Group_15">
                                                            <g id="Group_16">
                                                                <g id="Group_17">
                                                                    <path id="Vector_25" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="#7800B0" />
                                                                    <path id="Vector_26" opacity="0.4" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="white" />
                                                                    <path id="Vector_27" opacity="0.2" d="M139.928 137.829C139.928 135.791 142.313 134.134 145.271 134.134C148.229 134.134 150.614 135.79 150.614 137.829C150.614 139.868 148.229 141.527 145.271 141.527C142.314 141.527 139.928 139.871 139.928 137.829Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_28" d="M153.232 127.892C154.143 129.454 154.505 131.329 154.241 133.118C153.977 134.907 153.089 136.598 151.765 137.83" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_29" d="M147.52 122.132C146.717 124.865 146.576 127.848 147.116 130.664C147.203 131.119 147.409 131.667 147.817 131.678C148.183 131.687 148.422 131.238 148.501 130.831C148.78 129.392 148.034 127.931 147.08 126.937C146.563 126.399 145.937 125.93 145.238 125.896C144.536 125.862 143.867 126.277 143.359 126.83C142.387 127.888 141.903 129.545 142.255 131.024C142.404 131.649 142.848 132.321 143.406 132.201C143.742 132.129 143.988 131.774 144.075 131.396C144.162 131.018 144.119 130.62 144.07 130.234C143.715 127.451 143.035 124.721 142.055 122.14" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_30" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="#263238" />
                                                        <path id="Vector_31" opacity="0.3" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="white" />
                                                        <path id="Vector_32" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="#263238" />
                                                        <path id="Vector_33" opacity="0.3" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="white" />
                                                        <path id="Vector_34" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="#263238" />
                                                        <path id="Vector_35" opacity="0.3" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="white" />
                                                        <path id="Vector_36" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="#263238" />
                                                        <path id="Vector_37" opacity="0.3" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_38" d="M162.173 112.351H128.338V117.517H162.173V112.351Z" fill="#263238" />
                                                <path id="Vector_39" d="M152.611 118.547H137.901V105.917C137.901 102.455 140.708 99.6479 144.17 99.6479H146.343C149.805 99.6479 152.612 102.455 152.612 105.917V118.547H152.611Z" fill="#263238" />
                                                <g id="Group_18">
                                                    <g id="Group_19">
                                                        <path id="Vector_40" d="M146.005 102.563C146.005 78.4591 146.005 54.3533 146.005 30.2492C146.005 20.5821 146.005 10.9133 146.005 1.24623C146.005 -0.413689 144.505 -0.41713 144.505 1.24623C144.505 25.3503 144.505 49.4561 144.505 73.5602C144.505 83.2273 144.505 92.8961 144.505 102.563C144.505 104.223 146.005 104.227 146.005 102.563Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_41" opacity="0.5" d="M163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 181.405 120.201 201.758 145.308 201.758C170.415 201.758 190.768 181.405 190.768 156.298C190.768 137.835 179.761 121.943 163.951 114.825Z" fill="#7800B0" />
                                                <g id="Group_20" opacity="0.2">
                                                    <path id="Vector_42" d="M180.106 127.054C175.733 121.856 170.222 117.648 163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 166.213 103.032 175.38 108.42 182.851C117.418 185.586 127.401 184.789 136.198 181.346C146.153 177.45 154.657 170.383 161.377 162.069C168.097 153.755 173.132 144.207 177.464 134.434C178.517 132.06 179.541 129.581 180.106 127.054Z" fill="white" />
                                                </g>
                                                <g id="Group_21" opacity="0.3">
                                                    <path id="Vector_43" d="M125.211 123.138C125.393 121.812 123.826 120.917 122.714 121.661C116.282 125.964 111.136 132.171 108.116 139.297C104.935 146.803 104.128 155.295 105.838 163.266C106.024 164.132 106.252 165.021 106.795 165.721C107.338 166.421 108.277 166.887 109.123 166.624C110.14 166.308 110.591 165.159 110.825 164.103C111.127 162.744 111.317 161.362 111.444 159.976C112.02 153.704 112.387 147.339 114.043 141.248C115.509 135.858 118.065 130.632 122.174 126.849C122.96 126.125 124.173 125.201 124.778 124.321C124.98 124.027 125.148 123.595 125.211 123.138Z" fill="white" />
                                                </g>
                                                <path id="Vector_44" opacity="0.2" d="M152.61 111.139H137.9V112.352H152.61V111.139Z" fill="black" />
                                            </g>
                                            <path id="Vector_45" d="M165.561 8.367H23.42L24.42 0H166.561L165.561 8.367Z" fill="#263238" />
                                        </g>
                                    </g>
                                </svg>

                            </div>

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

                            <svg id="mirror" viewBox="0 0 384 411" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Lamp">
                                    <g id="Group">
                                        <g id="Group_2">
                                            <path id="Vector" d="M182.021 6.34101C182.021 24.699 182.021 43.057 182.021 61.416C182.021 88.982 182.021 116.548 182.021 144.115C182.021 174.824 182.021 205.534 182.021 236.243C182.021 264.517 182.021 292.791 182.021 321.065C182.021 340.84 182.021 360.616 182.021 380.391C182.021 381.912 182.021 383.433 182.021 384.955C182.021 386.88 185.013 386.884 185.013 384.955C185.013 366.597 185.013 348.238 185.013 329.88C185.013 302.314 185.013 274.748 185.013 247.181C185.013 216.472 185.013 185.762 185.013 155.053C185.013 126.779 185.013 98.505 185.013 70.231C185.013 50.456 185.013 30.68 185.013 10.905C185.013 9.38401 185.013 7.86301 185.013 6.34101C185.013 4.41501 182.021 4.41201 182.021 6.34101Z" fill="#713342" />
                                        </g>
                                        <g id="Group_3" opacity="0.5">
                                            <path id="Vector_2" d="M182.021 6.34101C182.021 24.699 182.021 43.057 182.021 61.416C182.021 88.982 182.021 116.548 182.021 144.115C182.021 174.824 182.021 205.534 182.021 236.243C182.021 264.517 182.021 292.791 182.021 321.065C182.021 340.84 182.021 360.616 182.021 380.391C182.021 381.912 182.021 383.433 182.021 384.955C182.021 386.88 185.013 386.884 185.013 384.955C185.013 366.597 185.013 348.238 185.013 329.88C185.013 302.314 185.013 274.748 185.013 247.181C185.013 216.472 185.013 185.762 185.013 155.053C185.013 126.779 185.013 98.505 185.013 70.231C185.013 50.456 185.013 30.68 185.013 10.905C185.013 9.38401 185.013 7.86301 185.013 6.34101C185.013 4.41501 182.021 4.41201 182.021 6.34101Z" fill="white" />
                                        </g>
                                        <path id="Vector_3" opacity="0.3" d="M185.013 25.852H182.021V31.013H185.013V25.852Z" fill="#713342" />
                                        <path id="Vector_4" d="M205.96 393.875H161.824V393.801C161.824 386.4 167.824 380.4 175.225 380.4H192.484C199.927 380.399 205.96 386.433 205.96 393.875Z" fill="#713342" />
                                        <path id="Vector_5" opacity="0.5" d="M205.96 393.875H161.824V393.801C161.824 386.4 167.824 380.4 175.225 380.4H192.484C199.927 380.399 205.96 386.433 205.96 393.875Z" fill="white" />
                                        <path id="Vector_6" d="M222.79 404.242H141.252V397.347C141.252 395.429 142.807 393.874 144.725 393.874H219.208C221.186 393.874 222.79 395.478 222.79 397.456V404.242Z" fill="#713342" />
                                        <path id="Vector_7" opacity="0.3" d="M222.79 404.242H141.252V397.347C141.252 395.429 142.807 393.874 144.725 393.874H219.208C221.186 393.874 222.79 395.478 222.79 397.456V404.242Z" fill="white" />
                                        <path id="Vector_8" d="M162.578 32.435C164.746 32.435 166.503 30.6777 166.503 28.51C166.503 26.3423 164.746 24.585 162.578 24.585C160.41 24.585 158.653 26.3423 158.653 28.51C158.653 30.6777 160.41 32.435 162.578 32.435Z" fill="#713342" />
                                        <path id="Vector_9" d="M187.47 3.925C187.47 6.093 185.713 7.85 183.545 7.85C181.377 7.85 179.62 6.092 179.62 3.925C179.62 1.757 181.377 0 183.545 0C185.713 0 187.47 1.758 187.47 3.925Z" fill="#713342" />
                                        <path id="Vector_10" opacity="0.5" d="M162.578 32.435C164.746 32.435 166.503 30.6777 166.503 28.51C166.503 26.3423 164.746 24.585 162.578 24.585C160.41 24.585 158.653 26.3423 158.653 28.51C158.653 30.6777 160.41 32.435 162.578 32.435Z" fill="white" />
                                        <path id="Vector_11" opacity="0.5" d="M187.47 3.925C187.47 6.093 185.713 7.85 183.545 7.85C181.377 7.85 179.62 6.092 179.62 3.925C179.62 1.757 181.377 0 183.545 0C185.713 0 187.47 1.758 187.47 3.925Z" fill="white" />
                                        <g id="Group_4">
                                            <path id="Vector_12" d="M163.925 30.006C182.053 30.006 200.181 30.006 218.309 30.006C220.234 30.006 220.238 27.014 218.309 27.014C200.181 27.014 182.053 27.014 163.925 27.014C162 27.014 161.996 30.006 163.925 30.006Z" fill="#713342" />
                                        </g>
                                        <g id="Group_5" opacity="0.5">
                                            <path id="Vector_13" d="M163.925 30.006C182.053 30.006 200.181 30.006 218.309 30.006C220.234 30.006 220.238 27.014 218.309 27.014C200.181 27.014 182.053 27.014 163.925 27.014C162 27.014 161.996 30.006 163.925 30.006Z" fill="white" />
                                        </g>
                                        <g id="Group_6">
                                            <path id="Vector_14" opacity="0.1" d="M261.688 40.406L383.364 402.375C320.668 409.981 261.393 414.982 222.789 404.243L212.695 64.83L261.688 40.406Z" fill="#FFBDBD" />
                                            <g id="Group_7">
                                                <path id="Vector_15" d="M261.803 40.36C261.803 40.36 252.756 29.58 247.366 26.885C241.976 24.19 235.624 24.96 235.624 24.96C235.624 24.96 227.924 7.44298 216.182 11.678C205.789 18.592 215.906 34.627 215.906 34.627C215.906 34.627 211.506 39.273 210.463 45.208C209.42 51.143 212.696 64.83 212.696 64.83L235.746 52.34L235.817 52.487L261.803 40.36Z" fill="#FFBDBD" />
                                                <path id="Vector_16" d="M212.62 64.676C213.831 67.125 225.798 63.678 239.348 56.976C252.898 50.274 262.9 42.855 261.689 40.406C260.477 37.957 248.511 41.404 234.961 48.106C221.411 54.808 211.409 62.227 212.62 64.676Z" fill="#FFBDBD" />
                                                <path id="Vector_17" opacity="0.5" d="M212.62 64.676C213.831 67.125 225.798 63.678 239.348 56.976C252.898 50.274 262.9 42.855 261.689 40.406C260.477 37.957 248.511 41.404 234.961 48.106C221.411 54.808 211.409 62.227 212.62 64.676Z" fill="white" />
                                            </g>
                                            <path id="Vector_18" opacity="0.2" d="M257.242 37.543C257.242 37.543 249.878 27.865 240.199 26.707H235.149C235.149 26.707 228.07 13.06 222.525 13.095C216.98 13.13 235.465 45.327 235.465 45.327C235.465 45.327 246.091 38.7 257.242 37.543Z" fill="white" />
                                        </g>
                                        <path id="Vector_19" opacity="0.3" d="M185.013 78.462H182.021V85.011H185.013V78.462Z" fill="#713342" />
                                        <g id="Group_8">
                                            <g id="Group_9">
                                                <path id="Vector_20" d="M138.292 83.005C155.715 83.005 173.137 83.005 190.56 83.005C195.538 83.005 200.516 83.005 205.494 83.005C207.419 83.005 207.422 80.013 205.494 80.013C188.071 80.013 170.649 80.013 153.226 80.013C148.248 80.013 143.27 80.013 138.292 80.013C136.366 80.013 136.363 83.005 138.292 83.005Z" fill="#713342" />
                                            </g>
                                            <g id="Group_10" opacity="0.5">
                                                <path id="Vector_21" d="M138.292 83.005C155.715 83.005 173.137 83.005 190.56 83.005C195.538 83.005 200.516 83.005 205.494 83.005C207.419 83.005 207.422 80.013 205.494 80.013C188.071 80.013 170.649 80.013 153.226 80.013C148.248 80.013 143.27 80.013 138.292 80.013C136.366 80.013 136.363 83.005 138.292 83.005Z" fill="white" />
                                            </g>
                                            <path id="Vector_22" d="M209.418 81.547C209.418 83.715 207.661 85.472 205.493 85.472C203.325 85.472 201.568 83.715 201.568 81.547C201.568 79.379 203.325 77.622 205.493 77.622C207.661 77.622 209.418 79.379 209.418 81.547Z" fill="#713342" />
                                            <path id="Vector_23" opacity="0.5" d="M209.418 81.547C209.418 83.715 207.661 85.472 205.493 85.472C203.325 85.472 201.568 83.715 201.568 81.547C201.568 79.379 203.325 77.622 205.493 77.622C207.661 77.622 209.418 79.379 209.418 81.547Z" fill="white" />
                                        </g>
                                        <path id="Vector_24" opacity="0.1" d="M104.992 102.651L0 404.242C49.8 413.006 105.178 411.933 164.272 404.307L158.412 113.288L104.992 102.651Z" fill="#FFBDBD" />
                                        <g id="Group_11">
                                            <path id="Vector_25" d="M155.793 94.502C153.3 89.016 147.879 85.617 147.879 85.617C147.879 85.617 153.668 67.563 141.878 63.465C129.45 62.298 126.371 81.184 126.371 81.184C126.371 81.184 120.028 82.026 115.482 85.982C110.936 89.938 104.869 102.637 104.869 102.637L133.062 107.887L133.094 107.727L158.533 114.062C158.532 114.06 158.285 99.989 155.793 94.502Z" fill="#FFBDBD" />
                                            <path id="Vector_26" d="M158.568 113.892C158.007 116.566 145.559 116.218 130.764 113.114C115.969 110.01 104.431 105.326 104.992 102.651C105.553 99.977 118.001 100.325 132.796 103.429C147.59 106.533 159.129 111.217 158.568 113.892Z" fill="#FFBDBD" />
                                            <path id="Vector_27" opacity="0.5" d="M158.568 113.892C158.007 116.566 145.559 116.218 130.764 113.114C115.969 110.01 104.431 105.326 104.992 102.651C105.553 99.977 118.001 100.325 132.796 103.429C147.59 106.533 159.129 111.217 158.568 113.892Z" fill="white" />
                                        </g>
                                        <path id="Vector_28" opacity="0.2" d="M108.582 98.768C108.582 98.768 113.294 87.557 122.377 84.018L127.266 82.756C127.266 82.756 130.711 67.773 136.089 66.421C141.467 65.069 131.613 100.864 131.613 100.864C131.613 100.864 119.668 97.103 108.582 98.768Z" fill="white" />
                                        <g id="Group_12">
                                            <g id="Group_13">
                                                <path id="Vector_29" d="M239.233 23.384C246.62 23.083 253.787 27.403 256.983 34.066C257.192 34.501 257.838 34.121 257.631 33.687C254.328 26.801 246.862 22.322 239.233 22.633C238.752 22.653 238.75 23.403 239.233 23.384Z" fill="#FFBDBD" />
                                            </g>
                                        </g>
                                    </g>
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

                            <div className="sub-tag">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Building commercials that communicate</p>
                            </div>

                            <button id="now-booking-commercials" onClick={() => {
                            }}>
                                PORTFOLIO
                            </button>
                        </div>
                    </div>
                    <div id="section-6" className="panels">
                        <div className="sec-top">
                            <div className="akaar-wedstyle">
                                <h1 id="akaar-graphics">GRAPHICS</h1>
                            </div>

                            <div id="cealling-lamp">
                                <svg viewBox="0 0 201 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Lamp_2">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" opacity="0.1" d="M55.294 264.815C85.832 264.815 110.588 240.059 110.588 209.521C110.588 178.983 85.832 154.227 55.294 154.227C24.756 154.227 0 178.983 0 209.521C0 240.059 24.756 264.815 55.294 264.815Z" fill="#73D5F9" />
                                                <path id="Vector_2" opacity="0.3" d="M55.294 242.546C75.5838 242.546 92.032 226.098 92.032 205.808C92.032 185.518 75.5838 169.07 55.294 169.07C35.0042 169.07 18.556 185.518 18.556 205.808C18.556 226.098 35.0042 242.546 55.294 242.546Z" fill="#73D5F9" />
                                                <g id="Group_3">
                                                    <g id="Group_4">
                                                        <g id="Group_5">
                                                            <g id="Group_6">
                                                                <g id="Group_7">
                                                                    <path id="Vector_3" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="#73D5F9" />
                                                                    <path id="Vector_4" opacity="0.4" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="white" />
                                                                    <path id="Vector_5" opacity="0.2" d="M49.916 187.887C49.916 185.849 52.301 184.193 55.258 184.193C58.215 184.193 60.6 185.849 60.6 187.887C60.6 189.925 58.215 191.584 55.258 191.584C52.301 191.584 49.916 189.928 49.916 187.887Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_6" d="M63.217 177.952C64.128 179.514 64.49 181.389 64.226 183.177C63.962 184.966 63.074 186.656 61.751 187.888" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_7" d="M57.505 172.193C56.702 174.926 56.561 177.907 57.101 180.723C57.188 181.178 57.394 181.726 57.802 181.737C58.167 181.746 58.407 181.297 58.486 180.89C58.765 179.452 58.019 177.99 57.065 176.997C56.549 176.459 55.922 175.99 55.224 175.956C54.523 175.922 53.853 176.337 53.346 176.89C52.374 177.948 51.89 179.605 52.242 181.083C52.391 181.708 52.834 182.38 53.393 182.26C53.729 182.188 53.975 181.833 54.062 181.456C54.149 181.079 54.106 180.68 54.057 180.294C53.702 177.511 53.022 174.783 52.043 172.202" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_8" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="#263238" />
                                                        <path id="Vector_9" opacity="0.3" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="white" />
                                                        <path id="Vector_10" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="#263238" />
                                                        <path id="Vector_11" opacity="0.3" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="white" />
                                                        <path id="Vector_12" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="#263238" />
                                                        <path id="Vector_13" opacity="0.3" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="white" />
                                                        <path id="Vector_14" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="#263238" />
                                                        <path id="Vector_15" opacity="0.3" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_16" d="M72.155 162.415H38.328V167.58H72.155V162.415Z" fill="#263238" />
                                                <path id="Vector_17" d="M62.595 168.609H47.888V155.983C47.888 152.521 50.695 149.714 54.157 149.714H56.327C59.789 149.714 62.596 152.521 62.596 155.983V168.609H62.595Z" fill="#263238" />
                                                <g id="Group_8">
                                                    <g id="Group_9">
                                                        <path id="Vector_18" d="M55.992 153.151C55.992 135.097 55.992 117.044 55.992 98.99C55.992 77.951 55.992 56.913 55.992 35.874C55.992 26.705 55.992 17.536 55.992 8.36702C55.992 7.40202 54.492 7.40002 54.492 8.36702C54.492 26.421 54.492 44.474 54.492 62.528C54.492 83.567 54.492 104.605 54.492 125.644C54.492 134.813 54.492 143.982 54.492 153.151C54.492 154.116 55.992 154.118 55.992 153.151Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_19" opacity="0.5" d="M73.933 164.888L38.023 164.299C21.488 171.097 9.84499 187.365 9.84499 206.351C9.84499 231.452 30.193 251.8 55.294 251.8C80.395 251.8 100.743 231.452 100.743 206.351C100.743 187.893 89.739 172.005 73.933 164.888Z" fill="#73D5F9" />
                                                <g id="Group_10" opacity="0.2">
                                                    <path id="Vector_20" d="M90.084 177.115C85.712 171.919 80.203 167.712 73.933 164.889L38.023 164.3C21.488 171.098 9.84499 187.366 9.84499 206.352C9.84499 216.265 13.028 225.429 18.415 232.899C27.41 235.634 37.391 234.837 46.186 231.395C56.138 227.5 64.641 220.434 71.359 212.123C78.077 203.811 83.112 194.265 87.442 184.494C88.495 182.119 89.519 179.641 90.084 177.115Z" fill="white" />
                                                </g>
                                                <g id="Group_11" opacity="0.3">
                                                    <path id="Vector_21" d="M35.202 173.199C35.384 171.874 33.818 170.979 32.706 171.722C26.276 176.024 21.131 182.229 18.112 189.354C14.932 196.859 14.125 205.348 15.835 213.318C16.021 214.184 16.249 215.072 16.792 215.772C17.335 216.472 18.274 216.938 19.12 216.675C20.137 216.359 20.587 215.21 20.822 214.155C21.124 212.796 21.313 211.415 21.441 210.029C22.017 203.759 22.384 197.395 24.04 191.306C25.505 185.917 28.061 180.693 32.169 176.91C32.955 176.186 34.167 175.263 34.772 174.382C34.972 174.088 35.139 173.656 35.202 173.199Z" fill="white" />
                                                </g>
                                                <path id="Vector_22" opacity="0.2" d="M62.595 161.203H47.888V162.415H62.595V161.203Z" fill="black" />
                                            </g>
                                            <g id="Group_12">
                                                <path id="Vector_23" opacity="0.1" d="M145.308 214.777C175.854 214.777 200.616 190.015 200.616 159.469C200.616 128.923 175.854 104.161 145.308 104.161C114.762 104.161 90 128.923 90 159.469C90 190.015 114.762 214.777 145.308 214.777Z" fill="#73D5F9" />
                                                <path id="Vector_24" opacity="0.3" d="M145.308 192.502C165.603 192.502 182.055 176.05 182.055 155.755C182.055 135.46 165.603 119.008 145.308 119.008C125.013 119.008 108.561 135.46 108.561 155.755C108.561 176.05 125.013 192.502 145.308 192.502Z" fill="#73D5F9" />
                                                <g id="Group_13">
                                                    <g id="Group_14">
                                                        <g id="Group_15">
                                                            <g id="Group_16">
                                                                <g id="Group_17">
                                                                    <path id="Vector_25" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="#73D5F9" />
                                                                    <path id="Vector_26" opacity="0.4" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="white" />
                                                                    <path id="Vector_27" opacity="0.2" d="M139.928 137.829C139.928 135.791 142.313 134.134 145.271 134.134C148.229 134.134 150.614 135.79 150.614 137.829C150.614 139.868 148.229 141.527 145.271 141.527C142.314 141.527 139.928 139.871 139.928 137.829Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_28" d="M153.232 127.892C154.143 129.454 154.505 131.329 154.241 133.118C153.977 134.907 153.089 136.598 151.765 137.83" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_29" d="M147.52 122.132C146.717 124.865 146.576 127.848 147.116 130.664C147.203 131.119 147.409 131.667 147.817 131.678C148.183 131.687 148.422 131.238 148.501 130.831C148.78 129.392 148.034 127.931 147.08 126.937C146.563 126.399 145.937 125.93 145.238 125.896C144.536 125.862 143.867 126.277 143.359 126.83C142.387 127.888 141.903 129.545 142.255 131.024C142.404 131.649 142.848 132.321 143.406 132.201C143.742 132.129 143.988 131.774 144.075 131.396C144.162 131.018 144.119 130.62 144.07 130.234C143.715 127.451 143.035 124.721 142.055 122.14" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_30" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="#263238" />
                                                        <path id="Vector_31" opacity="0.3" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="white" />
                                                        <path id="Vector_32" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="#263238" />
                                                        <path id="Vector_33" opacity="0.3" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="white" />
                                                        <path id="Vector_34" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="#263238" />
                                                        <path id="Vector_35" opacity="0.3" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="white" />
                                                        <path id="Vector_36" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="#263238" />
                                                        <path id="Vector_37" opacity="0.3" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_38" d="M162.173 112.351H128.338V117.517H162.173V112.351Z" fill="#263238" />
                                                <path id="Vector_39" d="M152.611 118.547H137.901V105.917C137.901 102.455 140.708 99.6479 144.17 99.6479H146.343C149.805 99.6479 152.612 102.455 152.612 105.917V118.547H152.611Z" fill="#263238" />
                                                <g id="Group_18">
                                                    <g id="Group_19">
                                                        <path id="Vector_40" d="M146.005 102.563C146.005 78.4591 146.005 54.3533 146.005 30.2492C146.005 20.5821 146.005 10.9133 146.005 1.24623C146.005 -0.413689 144.505 -0.41713 144.505 1.24623C144.505 25.3503 144.505 49.4561 144.505 73.5602C144.505 83.2273 144.505 92.8961 144.505 102.563C144.505 104.223 146.005 104.227 146.005 102.563Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_41" opacity="0.5" d="M163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 181.405 120.201 201.758 145.308 201.758C170.415 201.758 190.768 181.405 190.768 156.298C190.768 137.835 179.761 121.943 163.951 114.825Z" fill="#73D5F9" />
                                                <g id="Group_20" opacity="0.2">
                                                    <path id="Vector_42" d="M180.106 127.054C175.733 121.856 170.222 117.648 163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 166.213 103.032 175.38 108.42 182.851C117.418 185.586 127.401 184.789 136.198 181.346C146.153 177.45 154.657 170.383 161.377 162.069C168.097 153.755 173.132 144.207 177.464 134.434C178.517 132.06 179.541 129.581 180.106 127.054Z" fill="white" />
                                                </g>
                                                <g id="Group_21" opacity="0.3">
                                                    <path id="Vector_43" d="M125.211 123.138C125.393 121.812 123.826 120.917 122.714 121.661C116.282 125.964 111.136 132.171 108.116 139.297C104.935 146.803 104.128 155.295 105.838 163.266C106.024 164.132 106.252 165.021 106.795 165.721C107.338 166.421 108.277 166.887 109.123 166.624C110.14 166.308 110.591 165.159 110.825 164.103C111.127 162.744 111.317 161.362 111.444 159.976C112.02 153.704 112.387 147.339 114.043 141.248C115.509 135.858 118.065 130.632 122.174 126.849C122.96 126.125 124.173 125.201 124.778 124.321C124.98 124.027 125.148 123.595 125.211 123.138Z" fill="white" />
                                                </g>
                                                <path id="Vector_44" opacity="0.2" d="M152.61 111.139H137.9V112.352H152.61V111.139Z" fill="black" />
                                            </g>
                                            <path id="Vector_45" d="M165.561 8.367H23.42L24.42 0H166.561L165.561 8.367Z" fill="#263238" />
                                        </g>
                                    </g>
                                </svg>


                            </div>

                            <div id="graphics-v1">
                                <svg viewBox="0 0 130 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M126.82 94.582H2.793C1.251 94.582 0 93.332 0 91.789V2.793C0 1.251 1.25 0 2.793 0H126.82C128.362 0 129.613 1.25 129.613 2.793V91.789C129.613 93.331 128.363 94.582 126.82 94.582Z" fill="#73D5F9" />
                                    <path d="M59.64 80.249H22.435C20.892 80.249 19.642 78.999 19.642 77.456V17.125C19.642 15.583 20.892 14.332 22.435 14.332H59.64C61.182 14.332 62.433 15.582 62.433 17.125V77.456C62.433 78.999 61.182 80.249 59.64 80.249Z" fill="#FFFBF8" />
                                    <path d="M114.09 33.839H100.169C98.627 33.839 97.376 32.589 97.376 31.046V17.125C97.376 15.583 98.626 14.332 100.169 14.332H114.09C115.632 14.332 116.883 15.582 116.883 17.125V31.046C116.883 32.589 115.633 33.839 114.09 33.839Z" fill="#FFCA36" />
                                    <path d="M99.886 47.291H85.965C84.423 47.291 83.172 46.041 83.172 44.498V30.577C83.172 29.035 84.422 27.784 85.965 27.784H99.886C101.428 27.784 102.679 29.034 102.679 30.577V44.498C102.679 46.04 101.428 47.291 99.886 47.291Z" fill="#EF65C1" />
                                    <path d="M115.642 75.132H101.721C100.178 75.132 98.928 73.882 98.928 72.339V58.418C98.928 56.876 100.178 55.625 101.721 55.625H115.642C117.184 55.625 118.435 56.875 118.435 58.418V72.339C118.435 73.881 117.185 75.132 115.642 75.132Z" fill="#39D188" />
                                </svg>
                            </div>

                            <div id="graphics-v2">
                                <svg viewBox="0 0 97 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M76.303 53.258C75.064 53.838 74.214 55.015 74.04 56.373C73.001 64.488 66.068 70.76 57.67 70.76H16.505C7.39 70.76 0 63.371 0 54.255V16.505C0 7.39001 7.389 0 16.505 0H57.67C66.785 0 74.175 7.389 74.175 16.505V29.418C74.175 30.964 75.068 32.371 76.466 33.031L96.131 52.964C97.26 53.496 97.258 55.102 96.128 55.632L76.303 53.258Z" fill="#73D5F9" />
                                    <path d="M41.35 51.958C41.35 54.481 39.305 56.526 36.782 56.526C34.259 56.526 32.214 54.481 32.214 51.958" fill="#FFFBF8" />
                                    <path d="M29.636 46.598H43.928V50.277C43.928 51.205 43.175 51.958 42.247 51.958H31.317C30.389 51.958 29.636 51.205 29.636 50.277V46.598Z" fill="#FFFBF8" />
                                    <path d="M29.636 46.598C29.636 46.598 29.533 42.562 27.426 40.541C24.162 37.411 17.415 18.216 36.782 18.216C56.149 18.216 49.401 37.411 46.138 40.541C44.031 42.562 43.928 46.598 43.928 46.598H29.636Z" fill="#FFCA36" />
                                </svg>

                            </div>

                            <div className="sub-tag">
                                <p>Communicating effectively through visual design</p>
                            </div>

                            <button id="now-booking-graphics" onClick={() => {
                            }}>
                                PORTFOLIO
                            </button>
                        </div>
                    </div>
                    <div id="section-7" className="panels">
                        <div className="sec-top">
                            <div className="akaar-wedstyle">
                                <h1 id="akaar-products">PRODUCTS</h1>
                            </div>

                            <div id="cealling-lamp">
                                <svg viewBox="0 0 201 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Lamp_2">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" opacity="0.1" d="M55.294 264.815C85.832 264.815 110.588 240.059 110.588 209.521C110.588 178.983 85.832 154.227 55.294 154.227C24.756 154.227 0 178.983 0 209.521C0 240.059 24.756 264.815 55.294 264.815Z" fill="#955BAB" />
                                                <path id="Vector_2" opacity="0.3" d="M55.294 242.546C75.5838 242.546 92.032 226.098 92.032 205.808C92.032 185.518 75.5838 169.07 55.294 169.07C35.0042 169.07 18.556 185.518 18.556 205.808C18.556 226.098 35.0042 242.546 55.294 242.546Z" fill="#955BAB" />
                                                <g id="Group_3">
                                                    <g id="Group_4">
                                                        <g id="Group_5">
                                                            <g id="Group_6">
                                                                <g id="Group_7">
                                                                    <path id="Vector_3" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="#955BAB" />
                                                                    <path id="Vector_4" opacity="0.4" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="white" />
                                                                    <path id="Vector_5" opacity="0.2" d="M49.916 187.887C49.916 185.849 52.301 184.193 55.258 184.193C58.215 184.193 60.6 185.849 60.6 187.887C60.6 189.925 58.215 191.584 55.258 191.584C52.301 191.584 49.916 189.928 49.916 187.887Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_6" d="M63.217 177.952C64.128 179.514 64.49 181.389 64.226 183.177C63.962 184.966 63.074 186.656 61.751 187.888" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_7" d="M57.505 172.193C56.702 174.926 56.561 177.907 57.101 180.723C57.188 181.178 57.394 181.726 57.802 181.737C58.167 181.746 58.407 181.297 58.486 180.89C58.765 179.452 58.019 177.99 57.065 176.997C56.549 176.459 55.922 175.99 55.224 175.956C54.523 175.922 53.853 176.337 53.346 176.89C52.374 177.948 51.89 179.605 52.242 181.083C52.391 181.708 52.834 182.38 53.393 182.26C53.729 182.188 53.975 181.833 54.062 181.456C54.149 181.079 54.106 180.68 54.057 180.294C53.702 177.511 53.022 174.783 52.043 172.202" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_8" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="#263238" />
                                                        <path id="Vector_9" opacity="0.3" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="white" />
                                                        <path id="Vector_10" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="#263238" />
                                                        <path id="Vector_11" opacity="0.3" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="white" />
                                                        <path id="Vector_12" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="#263238" />
                                                        <path id="Vector_13" opacity="0.3" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="white" />
                                                        <path id="Vector_14" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="#263238" />
                                                        <path id="Vector_15" opacity="0.3" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_16" d="M72.155 162.415H38.328V167.58H72.155V162.415Z" fill="#263238" />
                                                <path id="Vector_17" d="M62.595 168.609H47.888V155.983C47.888 152.521 50.695 149.714 54.157 149.714H56.327C59.789 149.714 62.596 152.521 62.596 155.983V168.609H62.595Z" fill="#263238" />
                                                <g id="Group_8">
                                                    <g id="Group_9">
                                                        <path id="Vector_18" d="M55.992 153.151C55.992 135.097 55.992 117.044 55.992 98.99C55.992 77.951 55.992 56.913 55.992 35.874C55.992 26.705 55.992 17.536 55.992 8.36702C55.992 7.40202 54.492 7.40002 54.492 8.36702C54.492 26.421 54.492 44.474 54.492 62.528C54.492 83.567 54.492 104.605 54.492 125.644C54.492 134.813 54.492 143.982 54.492 153.151C54.492 154.116 55.992 154.118 55.992 153.151Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_19" opacity="0.5" d="M73.933 164.888L38.023 164.299C21.488 171.097 9.84499 187.365 9.84499 206.351C9.84499 231.452 30.193 251.8 55.294 251.8C80.395 251.8 100.743 231.452 100.743 206.351C100.743 187.893 89.739 172.005 73.933 164.888Z" fill="#955BAB" />
                                                <g id="Group_10" opacity="0.2">
                                                    <path id="Vector_20" d="M90.084 177.115C85.712 171.919 80.203 167.712 73.933 164.889L38.023 164.3C21.488 171.098 9.84499 187.366 9.84499 206.352C9.84499 216.265 13.028 225.429 18.415 232.899C27.41 235.634 37.391 234.837 46.186 231.395C56.138 227.5 64.641 220.434 71.359 212.123C78.077 203.811 83.112 194.265 87.442 184.494C88.495 182.119 89.519 179.641 90.084 177.115Z" fill="white" />
                                                </g>
                                                <g id="Group_11" opacity="0.3">
                                                    <path id="Vector_21" d="M35.202 173.199C35.384 171.874 33.818 170.979 32.706 171.722C26.276 176.024 21.131 182.229 18.112 189.354C14.932 196.859 14.125 205.348 15.835 213.318C16.021 214.184 16.249 215.072 16.792 215.772C17.335 216.472 18.274 216.938 19.12 216.675C20.137 216.359 20.587 215.21 20.822 214.155C21.124 212.796 21.313 211.415 21.441 210.029C22.017 203.759 22.384 197.395 24.04 191.306C25.505 185.917 28.061 180.693 32.169 176.91C32.955 176.186 34.167 175.263 34.772 174.382C34.972 174.088 35.139 173.656 35.202 173.199Z" fill="white" />
                                                </g>
                                                <path id="Vector_22" opacity="0.2" d="M62.595 161.203H47.888V162.415H62.595V161.203Z" fill="black" />
                                            </g>
                                            <g id="Group_12">
                                                <path id="Vector_23" opacity="0.1" d="M145.308 214.777C175.854 214.777 200.616 190.015 200.616 159.469C200.616 128.923 175.854 104.161 145.308 104.161C114.762 104.161 90 128.923 90 159.469C90 190.015 114.762 214.777 145.308 214.777Z" fill="#955BAB" />
                                                <path id="Vector_24" opacity="0.3" d="M145.308 192.502C165.603 192.502 182.055 176.05 182.055 155.755C182.055 135.46 165.603 119.008 145.308 119.008C125.013 119.008 108.561 135.46 108.561 155.755C108.561 176.05 125.013 192.502 145.308 192.502Z" fill="#955BAB" />
                                                <g id="Group_13">
                                                    <g id="Group_14">
                                                        <g id="Group_15">
                                                            <g id="Group_16">
                                                                <g id="Group_17">
                                                                    <path id="Vector_25" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="#955BAB" />
                                                                    <path id="Vector_26" opacity="0.4" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="white" />
                                                                    <path id="Vector_27" opacity="0.2" d="M139.928 137.829C139.928 135.791 142.313 134.134 145.271 134.134C148.229 134.134 150.614 135.79 150.614 137.829C150.614 139.868 148.229 141.527 145.271 141.527C142.314 141.527 139.928 139.871 139.928 137.829Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_28" d="M153.232 127.892C154.143 129.454 154.505 131.329 154.241 133.118C153.977 134.907 153.089 136.598 151.765 137.83" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_29" d="M147.52 122.132C146.717 124.865 146.576 127.848 147.116 130.664C147.203 131.119 147.409 131.667 147.817 131.678C148.183 131.687 148.422 131.238 148.501 130.831C148.78 129.392 148.034 127.931 147.08 126.937C146.563 126.399 145.937 125.93 145.238 125.896C144.536 125.862 143.867 126.277 143.359 126.83C142.387 127.888 141.903 129.545 142.255 131.024C142.404 131.649 142.848 132.321 143.406 132.201C143.742 132.129 143.988 131.774 144.075 131.396C144.162 131.018 144.119 130.62 144.07 130.234C143.715 127.451 143.035 124.721 142.055 122.14" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_30" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="#263238" />
                                                        <path id="Vector_31" opacity="0.3" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="white" />
                                                        <path id="Vector_32" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="#263238" />
                                                        <path id="Vector_33" opacity="0.3" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="white" />
                                                        <path id="Vector_34" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="#263238" />
                                                        <path id="Vector_35" opacity="0.3" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="white" />
                                                        <path id="Vector_36" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="#263238" />
                                                        <path id="Vector_37" opacity="0.3" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_38" d="M162.173 112.351H128.338V117.517H162.173V112.351Z" fill="#263238" />
                                                <path id="Vector_39" d="M152.611 118.547H137.901V105.917C137.901 102.455 140.708 99.648 144.17 99.648H146.343C149.805 99.648 152.612 102.455 152.612 105.917V118.547H152.611Z" fill="#263238" />
                                                <g id="Group_18">
                                                    <g id="Group_19">
                                                        <path id="Vector_40" d="M146.005 102.563C146.005 78.4591 146.005 54.3533 146.005 30.2492C146.005 20.5821 146.005 10.9133 146.005 1.24623C146.005 -0.413689 144.505 -0.41713 144.505 1.24623C144.505 25.3503 144.505 49.4561 144.505 73.5602C144.505 83.2273 144.505 92.8961 144.505 102.563C144.505 104.223 146.005 104.227 146.005 102.563Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_41" opacity="0.5" d="M163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 181.405 120.201 201.758 145.308 201.758C170.415 201.758 190.768 181.405 190.768 156.298C190.768 137.835 179.761 121.943 163.951 114.825Z" fill="#955BAB" />
                                                <g id="Group_20" opacity="0.2">
                                                    <path id="Vector_42" d="M180.106 127.054C175.733 121.856 170.222 117.648 163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 166.213 103.032 175.38 108.42 182.851C117.418 185.586 127.401 184.789 136.198 181.346C146.153 177.45 154.657 170.383 161.377 162.069C168.097 153.755 173.132 144.207 177.464 134.434C178.517 132.06 179.541 129.581 180.106 127.054Z" fill="white" />
                                                </g>
                                                <g id="Group_21" opacity="0.3">
                                                    <path id="Vector_43" d="M125.211 123.138C125.393 121.812 123.826 120.917 122.714 121.661C116.282 125.964 111.136 132.171 108.116 139.297C104.935 146.803 104.128 155.295 105.838 163.266C106.024 164.132 106.252 165.021 106.795 165.721C107.338 166.421 108.277 166.887 109.123 166.624C110.14 166.308 110.591 165.159 110.825 164.103C111.127 162.744 111.317 161.362 111.444 159.976C112.02 153.704 112.387 147.339 114.043 141.248C115.509 135.858 118.065 130.632 122.174 126.849C122.96 126.125 124.173 125.201 124.778 124.321C124.98 124.027 125.148 123.595 125.211 123.138Z" fill="white" />
                                                </g>
                                                <path id="Vector_44" opacity="0.2" d="M152.61 111.139H137.9V112.352H152.61V111.139Z" fill="black" />
                                            </g>
                                            <path id="Vector_45" d="M165.561 8.367H23.42L24.42 0H166.561L165.561 8.367Z" fill="#263238" />
                                        </g>
                                    </g>
                                </svg>

                            </div>

                            <div className="sub-tag">
                                <p>Portraying products in the best way.</p>
                            </div>

                            <button id="now-booking-products" onClick={() => {
                            }}>
                                PORTFOLIO
                            </button>
                        </div>
                    </div>
                    <div id="section-8" className="panels">
                        <div className="sec-top">
                            <div className="akaar-wedstyle">
                                <h1 id="akaar-socials">SOCIALS</h1>
                            </div>

                            <div id="cealling-lamp">
                                <svg viewBox="0 0 201 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Lamp_2">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" opacity="0.1" d="M55.294 264.815C85.832 264.815 110.588 240.059 110.588 209.521C110.588 178.983 85.832 154.227 55.294 154.227C24.756 154.227 0 178.983 0 209.521C0 240.059 24.756 264.815 55.294 264.815Z" fill="#5BA7F3" />
                                                <path id="Vector_2" opacity="0.3" d="M55.294 242.546C75.5839 242.546 92.032 226.098 92.032 205.808C92.032 185.518 75.5839 169.07 55.294 169.07C35.0042 169.07 18.556 185.518 18.556 205.808C18.556 226.098 35.0042 242.546 55.294 242.546Z" fill="#5BA7F3" />
                                                <g id="Group_3">
                                                    <g id="Group_4">
                                                        <g id="Group_5">
                                                            <g id="Group_6">
                                                                <g id="Group_7">
                                                                    <path id="Vector_3" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="#5BA7F3" />
                                                                    <path id="Vector_4" opacity="0.4" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="white" />
                                                                    <path id="Vector_5" opacity="0.2" d="M49.916 187.887C49.916 185.849 52.301 184.193 55.258 184.193C58.215 184.193 60.6 185.849 60.6 187.887C60.6 189.925 58.215 191.584 55.258 191.584C52.301 191.584 49.916 189.928 49.916 187.887Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_6" d="M63.217 177.952C64.128 179.514 64.49 181.389 64.226 183.177C63.962 184.966 63.074 186.656 61.751 187.888" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_7" d="M57.505 172.193C56.702 174.926 56.561 177.907 57.101 180.723C57.188 181.178 57.394 181.726 57.802 181.737C58.167 181.746 58.407 181.297 58.486 180.89C58.765 179.452 58.019 177.99 57.065 176.997C56.549 176.459 55.922 175.99 55.224 175.956C54.523 175.922 53.853 176.337 53.346 176.89C52.374 177.948 51.89 179.605 52.242 181.083C52.391 181.708 52.834 182.38 53.393 182.26C53.729 182.188 53.975 181.833 54.062 181.456C54.149 181.079 54.106 180.68 54.057 180.294C53.702 177.511 53.022 174.783 52.043 172.202" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_8" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="#263238" />
                                                        <path id="Vector_9" opacity="0.3" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="white" />
                                                        <path id="Vector_10" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="#263238" />
                                                        <path id="Vector_11" opacity="0.3" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="white" />
                                                        <path id="Vector_12" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="#263238" />
                                                        <path id="Vector_13" opacity="0.3" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="white" />
                                                        <path id="Vector_14" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="#263238" />
                                                        <path id="Vector_15" opacity="0.3" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_16" d="M72.155 162.415H38.328V167.58H72.155V162.415Z" fill="#263238" />
                                                <path id="Vector_17" d="M62.595 168.609H47.888V155.983C47.888 152.521 50.695 149.714 54.157 149.714H56.327C59.789 149.714 62.596 152.521 62.596 155.983V168.609H62.595Z" fill="#263238" />
                                                <g id="Group_8">
                                                    <g id="Group_9">
                                                        <path id="Vector_18" d="M55.992 153.151C55.992 135.097 55.992 117.044 55.992 98.99C55.992 77.951 55.992 56.913 55.992 35.874C55.992 26.705 55.992 17.536 55.992 8.367C55.992 7.402 54.492 7.4 54.492 8.367C54.492 26.421 54.492 44.474 54.492 62.528C54.492 83.567 54.492 104.605 54.492 125.644C54.492 134.813 54.492 143.982 54.492 153.151C54.492 154.116 55.992 154.118 55.992 153.151Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_19" opacity="0.5" d="M73.933 164.888L38.023 164.299C21.488 171.097 9.84497 187.365 9.84497 206.351C9.84497 231.452 30.193 251.8 55.294 251.8C80.395 251.8 100.743 231.452 100.743 206.351C100.743 187.893 89.739 172.005 73.933 164.888Z" fill="#5BA7F3" />
                                                <g id="Group_10" opacity="0.2">
                                                    <path id="Vector_20" d="M90.084 177.115C85.712 171.919 80.203 167.712 73.933 164.889L38.023 164.3C21.488 171.098 9.84497 187.366 9.84497 206.352C9.84497 216.265 13.028 225.429 18.415 232.899C27.41 235.634 37.391 234.837 46.186 231.395C56.138 227.5 64.641 220.434 71.359 212.123C78.077 203.811 83.112 194.265 87.442 184.494C88.495 182.119 89.519 179.641 90.084 177.115Z" fill="white" />
                                                </g>
                                                <g id="Group_11" opacity="0.3">
                                                    <path id="Vector_21" d="M35.202 173.199C35.384 171.874 33.818 170.979 32.706 171.722C26.276 176.024 21.131 182.229 18.112 189.354C14.932 196.859 14.125 205.348 15.835 213.318C16.021 214.184 16.249 215.072 16.792 215.772C17.335 216.472 18.274 216.938 19.12 216.675C20.137 216.359 20.587 215.21 20.822 214.155C21.124 212.796 21.313 211.415 21.441 210.029C22.017 203.759 22.384 197.395 24.04 191.306C25.505 185.917 28.061 180.693 32.169 176.91C32.955 176.186 34.167 175.263 34.772 174.382C34.972 174.088 35.139 173.656 35.202 173.199Z" fill="white" />
                                                </g>
                                                <path id="Vector_22" opacity="0.2" d="M62.595 161.203H47.888V162.415H62.595V161.203Z" fill="black" />
                                            </g>
                                            <g id="Group_12">
                                                <path id="Vector_23" opacity="0.1" d="M145.308 214.777C175.854 214.777 200.616 190.015 200.616 159.469C200.616 128.923 175.854 104.161 145.308 104.161C114.762 104.161 90 128.923 90 159.469C90 190.015 114.762 214.777 145.308 214.777Z" fill="#5BA7F3" />
                                                <path id="Vector_24" opacity="0.3" d="M145.308 192.502C165.603 192.502 182.055 176.05 182.055 155.755C182.055 135.46 165.603 119.008 145.308 119.008C125.013 119.008 108.561 135.46 108.561 155.755C108.561 176.05 125.013 192.502 145.308 192.502Z" fill="#5BA7F3" />
                                                <g id="Group_13">
                                                    <g id="Group_14">
                                                        <g id="Group_15">
                                                            <g id="Group_16">
                                                                <g id="Group_17">
                                                                    <path id="Vector_25" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="#5BA7F3" />
                                                                    <path id="Vector_26" opacity="0.4" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="white" />
                                                                    <path id="Vector_27" opacity="0.2" d="M139.928 137.829C139.928 135.791 142.313 134.134 145.271 134.134C148.229 134.134 150.614 135.79 150.614 137.829C150.614 139.868 148.229 141.527 145.271 141.527C142.314 141.527 139.928 139.871 139.928 137.829Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_28" d="M153.232 127.892C154.143 129.454 154.505 131.329 154.241 133.118C153.977 134.907 153.089 136.598 151.765 137.83" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_29" d="M147.52 122.132C146.717 124.865 146.576 127.848 147.116 130.664C147.203 131.119 147.409 131.667 147.817 131.678C148.183 131.687 148.422 131.238 148.501 130.831C148.78 129.392 148.034 127.931 147.08 126.937C146.563 126.399 145.937 125.93 145.238 125.896C144.536 125.862 143.867 126.277 143.359 126.83C142.387 127.888 141.903 129.545 142.255 131.024C142.404 131.649 142.848 132.321 143.406 132.201C143.742 132.129 143.988 131.774 144.075 131.396C144.162 131.018 144.119 130.62 144.07 130.234C143.715 127.451 143.035 124.721 142.055 122.14" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_30" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="#263238" />
                                                        <path id="Vector_31" opacity="0.3" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="white" />
                                                        <path id="Vector_32" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="#263238" />
                                                        <path id="Vector_33" opacity="0.3" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="white" />
                                                        <path id="Vector_34" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="#263238" />
                                                        <path id="Vector_35" opacity="0.3" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="white" />
                                                        <path id="Vector_36" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="#263238" />
                                                        <path id="Vector_37" opacity="0.3" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_38" d="M162.173 112.351H128.338V117.517H162.173V112.351Z" fill="#263238" />
                                                <path id="Vector_39" d="M152.611 118.547H137.901V105.917C137.901 102.455 140.708 99.648 144.17 99.648H146.343C149.805 99.648 152.612 102.455 152.612 105.917V118.547H152.611Z" fill="#263238" />
                                                <g id="Group_18">
                                                    <g id="Group_19">
                                                        <path id="Vector_40" d="M146.005 102.563C146.005 78.4591 146.005 54.3533 146.005 30.2492C146.005 20.5821 146.005 10.9133 146.005 1.24623C146.005 -0.413689 144.505 -0.41713 144.505 1.24623C144.505 25.3503 144.505 49.4561 144.505 73.5602C144.505 83.2273 144.505 92.8961 144.505 102.563C144.505 104.223 146.005 104.227 146.005 102.563Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_41" opacity="0.5" d="M163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 181.405 120.201 201.758 145.308 201.758C170.415 201.758 190.768 181.405 190.768 156.298C190.768 137.835 179.761 121.943 163.951 114.825Z" fill="#5BA7F3" />
                                                <g id="Group_20" opacity="0.2">
                                                    <path id="Vector_42" d="M180.106 127.054C175.733 121.856 170.222 117.648 163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 166.213 103.032 175.38 108.42 182.851C117.418 185.586 127.401 184.789 136.198 181.346C146.153 177.45 154.657 170.383 161.377 162.069C168.097 153.755 173.132 144.207 177.464 134.434C178.517 132.06 179.541 129.581 180.106 127.054Z" fill="white" />
                                                </g>
                                                <g id="Group_21" opacity="0.3">
                                                    <path id="Vector_43" d="M125.211 123.138C125.393 121.812 123.826 120.917 122.714 121.661C116.282 125.964 111.136 132.171 108.116 139.297C104.935 146.803 104.128 155.295 105.838 163.266C106.024 164.132 106.252 165.021 106.795 165.721C107.338 166.421 108.277 166.887 109.123 166.624C110.14 166.308 110.591 165.159 110.825 164.103C111.127 162.744 111.317 161.362 111.444 159.976C112.02 153.704 112.387 147.339 114.043 141.248C115.509 135.858 118.065 130.632 122.174 126.849C122.96 126.125 124.173 125.201 124.778 124.321C124.98 124.027 125.148 123.595 125.211 123.138Z" fill="white" />
                                                </g>
                                                <path id="Vector_44" opacity="0.2" d="M152.61 111.139H137.9V112.352H152.61V111.139Z" fill="black" />
                                            </g>
                                            <path id="Vector_45" d="M165.561 8.367H23.42L24.42 0H166.561L165.561 8.367Z" fill="#263238" />
                                        </g>
                                    </g>
                                </svg>

                            </div>

                            <div className="sub-tag">
                                <p>Marketing Your Brand Identity.</p>
                            </div>

                            <button id="now-booking-socials" onClick={() => {
                            }}>
                                PORTFOLIO
                            </button>
                        </div>
                    </div>
                    <div id="section-5" className="panels">
                        <div className="sec-top">
                            <div className="akaar-wedstyle">
                                <h1 id="akaar-talent">TALENT</h1>
                            </div>

                            <div id="cealling-lamp">
                                <svg viewBox="0 0 201 265" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Lamp_2">
                                        <g id="Group">
                                            <g id="Group_2">
                                                <path id="Vector" opacity="0.1" d="M55.294 264.815C85.832 264.815 110.588 240.059 110.588 209.521C110.588 178.983 85.832 154.227 55.294 154.227C24.756 154.227 0 178.983 0 209.521C0 240.059 24.756 264.815 55.294 264.815Z" fill="#5B8C91" />
                                                <path id="Vector_2" opacity="0.3" d="M55.294 242.546C75.5839 242.546 92.032 226.098 92.032 205.808C92.032 185.518 75.5839 169.07 55.294 169.07C35.0042 169.07 18.556 185.518 18.556 205.808C18.556 226.098 35.0042 242.546 55.294 242.546Z" fill="#5B8C91" />
                                                <g id="Group_3">
                                                    <g id="Group_4">
                                                        <g id="Group_5">
                                                            <g id="Group_6">
                                                                <g id="Group_7">
                                                                    <path id="Vector_3" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="#5B8C91" />
                                                                    <path id="Vector_4" opacity="0.4" d="M55.119 192.397C60.899 192.465 65.64 187.834 65.708 182.054C65.745 178.917 64.373 175.93 61.97 173.913C61.528 173.548 60.853 173.107 60.868 172.193C60.868 172.165 60.821 169.906 60.821 169.906H49.812C49.812 169.906 49.765 172.253 49.765 172.28C49.765 173.085 49.142 173.432 48.683 173.795C46.248 175.747 44.814 178.687 44.776 181.808C44.708 187.588 49.339 192.329 55.119 192.397Z" fill="white" />
                                                                    <path id="Vector_5" opacity="0.2" d="M49.916 187.887C49.916 185.849 52.301 184.193 55.258 184.193C58.215 184.193 60.6 185.849 60.6 187.887C60.6 189.925 58.215 191.584 55.258 191.584C52.301 191.584 49.916 189.928 49.916 187.887Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_6" d="M63.217 177.952C64.128 179.514 64.49 181.389 64.226 183.177C63.962 184.966 63.074 186.656 61.751 187.888" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_7" d="M57.505 172.193C56.702 174.926 56.561 177.907 57.101 180.723C57.188 181.178 57.394 181.726 57.802 181.737C58.167 181.746 58.407 181.297 58.486 180.89C58.765 179.452 58.019 177.99 57.065 176.997C56.549 176.459 55.922 175.99 55.224 175.956C54.523 175.922 53.853 176.337 53.346 176.89C52.374 177.948 51.89 179.605 52.242 181.083C52.391 181.708 52.834 182.38 53.393 182.26C53.729 182.188 53.975 181.833 54.062 181.456C54.149 181.079 54.106 180.68 54.057 180.294C53.702 177.511 53.022 174.783 52.043 172.202" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_8" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="#263238" />
                                                        <path id="Vector_9" opacity="0.3" d="M49.118 169.242H61.457C61.77 169.242 62.023 169.496 62.023 169.808V170.004C62.023 170.317 61.769 170.57 61.457 170.57H49.118C48.805 170.57 48.552 170.316 48.552 170.004V169.808C48.552 169.495 48.805 169.242 49.118 169.242Z" fill="white" />
                                                        <path id="Vector_10" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="#263238" />
                                                        <path id="Vector_11" opacity="0.3" d="M49.318 168.076H61.257C61.56 168.076 61.805 168.321 61.805 168.624V168.814C61.805 169.117 61.56 169.362 61.257 169.362H49.318C49.015 169.362 48.77 169.117 48.77 168.814V168.624C48.77 168.321 49.016 168.076 49.318 168.076Z" fill="white" />
                                                        <path id="Vector_12" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="#263238" />
                                                        <path id="Vector_13" opacity="0.3" d="M50.114 165.758H60.461C60.764 165.758 61.009 166.003 61.009 166.306V166.496C61.009 166.799 60.764 167.044 60.461 167.044H50.114C49.811 167.044 49.566 166.799 49.566 166.496V166.306C49.566 166.003 49.811 165.758 50.114 165.758Z" fill="white" />
                                                        <path id="Vector_14" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="#263238" />
                                                        <path id="Vector_15" opacity="0.3" d="M49.494 166.937H61.081C61.384 166.937 61.629 167.182 61.629 167.485V167.675C61.629 167.978 61.384 168.223 61.081 168.223H49.494C49.191 168.223 48.946 167.978 48.946 167.675V167.485C48.946 167.182 49.192 166.937 49.494 166.937Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_16" d="M72.155 162.415H38.328V167.58H72.155V162.415Z" fill="#263238" />
                                                <path id="Vector_17" d="M62.595 168.609H47.888V155.983C47.888 152.521 50.695 149.714 54.157 149.714H56.327C59.789 149.714 62.596 152.521 62.596 155.983V168.609H62.595Z" fill="#263238" />
                                                <g id="Group_8">
                                                    <g id="Group_9">
                                                        <path id="Vector_18" d="M55.992 153.151C55.992 135.097 55.992 117.044 55.992 98.99C55.992 77.951 55.992 56.913 55.992 35.874C55.992 26.705 55.992 17.536 55.992 8.367C55.992 7.402 54.492 7.4 54.492 8.367C54.492 26.421 54.492 44.474 54.492 62.528C54.492 83.567 54.492 104.605 54.492 125.644C54.492 134.813 54.492 143.982 54.492 153.151C54.492 154.116 55.992 154.118 55.992 153.151Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_19" opacity="0.5" d="M73.933 164.888L38.023 164.299C21.488 171.097 9.84497 187.365 9.84497 206.351C9.84497 231.452 30.193 251.8 55.294 251.8C80.395 251.8 100.743 231.452 100.743 206.351C100.743 187.893 89.739 172.005 73.933 164.888Z" fill="#5B8C91" />
                                                <g id="Group_10" opacity="0.2">
                                                    <path id="Vector_20" d="M90.084 177.115C85.712 171.919 80.203 167.712 73.933 164.889L38.023 164.3C21.488 171.098 9.84497 187.366 9.84497 206.352C9.84497 216.265 13.028 225.429 18.415 232.899C27.41 235.634 37.391 234.837 46.186 231.395C56.138 227.5 64.641 220.434 71.359 212.123C78.077 203.811 83.112 194.265 87.442 184.494C88.495 182.119 89.519 179.641 90.084 177.115Z" fill="white" />
                                                </g>
                                                <g id="Group_11" opacity="0.3">
                                                    <path id="Vector_21" d="M35.202 173.199C35.384 171.874 33.818 170.979 32.706 171.722C26.276 176.024 21.131 182.229 18.112 189.354C14.932 196.859 14.125 205.348 15.835 213.318C16.021 214.184 16.249 215.072 16.792 215.772C17.335 216.472 18.274 216.938 19.12 216.675C20.137 216.359 20.587 215.21 20.822 214.155C21.124 212.796 21.313 211.415 21.441 210.029C22.017 203.759 22.384 197.395 24.04 191.306C25.505 185.917 28.061 180.693 32.169 176.91C32.955 176.186 34.167 175.263 34.772 174.382C34.972 174.088 35.139 173.656 35.202 173.199Z" fill="white" />
                                                </g>
                                                <path id="Vector_22" opacity="0.2" d="M62.595 161.203H47.888V162.415H62.595V161.203Z" fill="black" />
                                            </g>
                                            <g id="Group_12">
                                                <path id="Vector_23" opacity="0.1" d="M145.308 214.777C175.854 214.777 200.616 190.015 200.616 159.469C200.616 128.923 175.854 104.161 145.308 104.161C114.762 104.161 90 128.923 90 159.469C90 190.015 114.762 214.777 145.308 214.777Z" fill="#5B8C91" />
                                                <path id="Vector_24" opacity="0.3" d="M145.308 192.502C165.603 192.502 182.055 176.05 182.055 155.755C182.055 135.46 165.603 119.008 145.308 119.008C125.013 119.008 108.561 135.46 108.561 155.755C108.561 176.05 125.013 192.502 145.308 192.502Z" fill="#5B8C91" />
                                                <g id="Group_13">
                                                    <g id="Group_14">
                                                        <g id="Group_15">
                                                            <g id="Group_16">
                                                                <g id="Group_17">
                                                                    <path id="Vector_25" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="#5B8C91" />
                                                                    <path id="Vector_26" opacity="0.4" d="M145.133 142.34C150.914 142.408 155.656 137.776 155.724 131.995C155.761 128.858 154.389 125.869 151.985 123.852C151.543 123.487 150.867 123.046 150.882 122.132C150.882 122.104 150.836 119.844 150.836 119.844H139.824C139.824 119.844 139.777 122.192 139.777 122.219C139.777 123.024 139.154 123.371 138.695 123.734C136.259 125.687 134.825 128.627 134.787 131.749C134.719 137.531 139.351 142.272 145.133 142.34Z" fill="white" />
                                                                    <path id="Vector_27" opacity="0.2" d="M139.928 137.829C139.928 135.791 142.313 134.134 145.271 134.134C148.229 134.134 150.614 135.79 150.614 137.829C150.614 139.868 148.229 141.527 145.271 141.527C142.314 141.527 139.928 139.871 139.928 137.829Z" fill="white" />
                                                                </g>
                                                                <path id="Vector_28" d="M153.232 127.892C154.143 129.454 154.505 131.329 154.241 133.118C153.977 134.907 153.089 136.598 151.765 137.83" stroke="white" stroke-width="0.5" stroke-miterlimit="10" />
                                                                <path id="Vector_29" d="M147.52 122.132C146.717 124.865 146.576 127.848 147.116 130.664C147.203 131.119 147.409 131.667 147.817 131.678C148.183 131.687 148.422 131.238 148.501 130.831C148.78 129.392 148.034 127.931 147.08 126.937C146.563 126.399 145.937 125.93 145.238 125.896C144.536 125.862 143.867 126.277 143.359 126.83C142.387 127.888 141.903 129.545 142.255 131.024C142.404 131.649 142.848 132.321 143.406 132.201C143.742 132.129 143.988 131.774 144.075 131.396C144.162 131.018 144.119 130.62 144.07 130.234C143.715 127.451 143.035 124.721 142.055 122.14" stroke="#263238" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                                            </g>
                                                        </g>
                                                        <path id="Vector_30" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="#263238" />
                                                        <path id="Vector_31" opacity="0.3" d="M139.13 119.18H151.472C151.785 119.18 152.038 119.433 152.038 119.746V119.942C152.038 120.255 151.785 120.508 151.472 120.508H139.13C138.817 120.508 138.564 120.254 138.564 119.942V119.746C138.564 119.433 138.818 119.18 139.13 119.18Z" fill="white" />
                                                        <path id="Vector_32" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="#263238" />
                                                        <path id="Vector_33" opacity="0.3" d="M139.331 118.013H151.273C151.576 118.013 151.821 118.258 151.821 118.561V118.751C151.821 119.054 151.576 119.299 151.273 119.299H139.331C139.028 119.299 138.783 119.054 138.783 118.751V118.561C138.782 118.259 139.028 118.013 139.331 118.013Z" fill="white" />
                                                        <path id="Vector_34" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="#263238" />
                                                        <path id="Vector_35" opacity="0.3" d="M140.126 115.695H150.476C150.779 115.695 151.024 115.94 151.024 116.243V116.433C151.024 116.736 150.779 116.981 150.476 116.981H140.126C139.823 116.981 139.578 116.736 139.578 116.433V116.243C139.578 115.94 139.824 115.695 140.126 115.695Z" fill="white" />
                                                        <path id="Vector_36" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="#263238" />
                                                        <path id="Vector_37" opacity="0.3" d="M139.507 116.874H151.097C151.4 116.874 151.645 117.119 151.645 117.422V117.612C151.645 117.915 151.4 118.16 151.097 118.16H139.507C139.204 118.16 138.959 117.915 138.959 117.612V117.422C138.959 117.119 139.204 116.874 139.507 116.874Z" fill="white" />
                                                    </g>
                                                </g>
                                                <path id="Vector_38" d="M162.173 112.351H128.338V117.517H162.173V112.351Z" fill="#263238" />
                                                <path id="Vector_39" d="M152.611 118.547H137.901V105.917C137.901 102.455 140.708 99.648 144.17 99.648H146.343C149.805 99.648 152.612 102.455 152.612 105.917V118.547H152.611Z" fill="#263238" />
                                                <g id="Group_18">
                                                    <g id="Group_19">
                                                        <path id="Vector_40" d="M146.005 102.563C146.005 78.4591 146.005 54.3533 146.005 30.2492C146.005 20.5821 146.005 10.9133 146.005 1.24623C146.005 -0.413689 144.505 -0.41713 144.505 1.24623C144.505 25.3503 144.505 49.4561 144.505 73.5602C144.505 83.2273 144.505 92.8961 144.505 102.563C144.505 104.223 146.005 104.227 146.005 102.563Z" fill="#263238" />
                                                    </g>
                                                </g>
                                                <path id="Vector_41" opacity="0.5" d="M163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 181.405 120.201 201.758 145.308 201.758C170.415 201.758 190.768 181.405 190.768 156.298C190.768 137.835 179.761 121.943 163.951 114.825Z" fill="#5B8C91" />
                                                <g id="Group_20" opacity="0.2">
                                                    <path id="Vector_42" d="M180.106 127.054C175.733 121.856 170.222 117.648 163.951 114.825L128.033 114.236C111.494 121.036 99.848 137.307 99.848 156.298C99.848 166.213 103.032 175.38 108.42 182.851C117.418 185.586 127.401 184.789 136.198 181.346C146.153 177.45 154.657 170.383 161.377 162.069C168.097 153.755 173.132 144.207 177.464 134.434C178.517 132.06 179.541 129.581 180.106 127.054Z" fill="white" />
                                                </g>
                                                <g id="Group_21" opacity="0.3">
                                                    <path id="Vector_43" d="M125.211 123.138C125.393 121.812 123.826 120.917 122.714 121.661C116.282 125.964 111.136 132.171 108.116 139.297C104.935 146.803 104.128 155.295 105.838 163.266C106.024 164.132 106.252 165.021 106.795 165.721C107.338 166.421 108.277 166.887 109.123 166.624C110.14 166.308 110.591 165.159 110.825 164.103C111.127 162.744 111.317 161.362 111.444 159.976C112.02 153.704 112.387 147.339 114.043 141.248C115.509 135.858 118.065 130.632 122.174 126.849C122.96 126.125 124.173 125.201 124.778 124.321C124.98 124.027 125.148 123.595 125.211 123.138Z" fill="white" />
                                                </g>
                                                <path id="Vector_44" opacity="0.2" d="M152.61 111.139H137.9V112.352H152.61V111.139Z" fill="black" />
                                            </g>
                                            <path id="Vector_45" d="M165.561 8.367H23.42L24.42 0H166.561L165.561 8.367Z" fill="#263238" />
                                        </g>
                                    </g>
                                </svg>

                            </div>

                            <div className="sub-tag">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Hiring Talent according to your needs</p>
                            </div>

                            <button id="now-booking-talent" onClick={() => {
                            }}>
                                PORTFOLIO
                            </button>
                        </div>
                    </div>
                    <button id="scroll-assist">Get In Touch</button>

                    <button id="e-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20}>
                            <path d="M4 5L16 5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 12L20 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M4 19L12 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <button id="lang-btn">
                        EN
                    </button>
                    <div className="section-assist">
                        <div id="tag">
                            <img src={"/static/arrow.png"} />
                            <img style={{ transform: "scaleX(-1)" }} src={"/static/arrow.png"} />
                        </div>
                        <div id="scroll-id-main" className="tooltip" onClick={() => {
                            goToSection("section-1")
                        }}><span className="tooltiptext">HOME</span></div>
                        <div id="scroll-id-wed" className="tooltip" onClick={() => {
                            console.log("clicked")
                            goToSection("section-2")
                        }}>  <span className="tooltiptext">Weddings</span>
                        </div>
                        <div id="scroll-id-fashion" className="tooltip" onClick={() => {
                            goToSection("section-3")
                        }}><span className="tooltiptext">FASHION</span></div>
                        <div id="scroll-id-commercial" className="tooltip" onClick={() => {
                            goToSection("section-4")
                        }}><span className="tooltiptext">COMMERCIAL</span></div>
                        <div id="scroll-id-graphics-post-prod" className="tooltip" onClick={() => {
                            goToSection("section-6")
                        }}><span className="tooltiptext">GRAPHICS</span></div>
                        <div id="scroll-id-products" className="tooltip" onClick={() => {
                            goToSection("section-7")
                        }}><span className="tooltiptext">PRODUCTS</span></div>
                        <div id="scroll-id-socials" className="tooltip" onClick={() => {
                            goToSection("section-8")
                        }}><span className="tooltiptext">SOCIALS</span></div>
                        <div id="scroll-id-talent" className="tooltip" onClick={() => {
                            goToSection("section-5")
                        }}><span className="tooltiptext">TALENT</span></div>
                    </div>
                </div>
                <div className="gallery-container relative overflow-hidden w-full h-screen">
                    <div className="gallery flex flex-wrap w-full h-full absolute">
                        {videoData.map((video, index) => (
                            <VideoComponent key={index} src={video.src} w={video.w} h={video.h} left={video.left} top={video.top} />
                        ))}
                    </div>
                    <p id="g-p">The Fastest Growing <span className="span-1">Video</span> Production Company</p>
                    <div className="custom-shape-divider-top-1728323637">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                        </svg>
                    </div>
                </div>
                <div className="another">
                    <div id="a-1">
                        <div className="line">
                            <span>Lets</span>
                        </div>
                        <div className="line">
                            <span>Walk Through <b style={{ color: "#7800B0" }}>Our</b></span>
                        </div>
                        <div className="line">
                            <span style={{ color: "#7800B0" }}>Process</span>
                        </div>
                    </div>

                    <section id="a-2">
                        <p>Our <b style={{ color: "#7800B0" }}>Process</b> & Goals</p>
                        <ul className="reveal">
                            <li>We listen very <b style={{ color: "#7800B0" }}>carefully to your needs.</b></li>
                            <li>We develop a  <b style={{ color: "#7800B0" }}>strategic plan to create content for your business.</b></li>
                            <li>Wether it be your <b style={{ color: "#7800B0" }}>social media, youtube channel, or your website.</b></li>
                            <li>We create <b style={{ color: "#7800B0" }}>compelling content</b> with <b style={{ color: "#7800B0" }}>startegic marketing</b> to resonate with your audience.</li>
                        </ul>
                    </section>
                    <div id="another-svg">
                        <svg viewBox="0 0 322 333" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M56.32 282.44C104.2 295.33 144.77 268.06 184.02 287.02C200.25 294.85 211.54 312.76 219.35 332.52H321.92C300.2 317.72 284.33 294.26 279.49 268.38C274.92 243.98 279.61 218.63 275.61 194.13C269.87 158.92 245.05 127.41 212.14 113.56C196.97 107.18 180.51 104.41 165.19 98.4C140.67 86.14 121.19 69.23 129.4 39C133.55 23.81 143.54 12.21 152.66 0H0.5V222.61C12.34 260.87 36.59 277.12 56.32 282.44Z" fill="#FFECEC" />
                        </svg>
                    </div>

                    <div id="another-svg1">
                        <svg viewBox="0 0 1174 1172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M783.443 7.6826C787.947 10.6964 791.981 13.9232 795.611 17.9678C796.436 18.834 797.261 19.7003 798.111 20.5928C808.2 33.0054 808.757 49.1851 807.193 64.3818C805.988 74.8358 805.988 74.8358 804.611 78.9678C805.89 78.9567 807.169 78.9456 808.488 78.9341C820.538 78.8328 832.589 78.7578 844.64 78.7087C850.836 78.6826 857.032 78.6472 863.227 78.5906C869.206 78.5363 875.183 78.5063 881.162 78.4934C883.444 78.4841 885.725 78.4661 888.007 78.4391C891.201 78.4029 894.394 78.3978 897.588 78.4001C899.006 78.3732 899.006 78.3732 900.452 78.3457C905.056 78.3819 906.984 78.4844 910.737 81.3782C912.611 83.9678 912.611 83.9678 912.611 85.9678C913.568 85.9668 914.525 85.9659 915.511 85.965C938.903 85.9427 962.295 85.9263 985.686 85.9159C996.999 85.9108 1008.31 85.9038 1019.62 85.8923C1029.49 85.8823 1039.37 85.8759 1049.24 85.8737C1054.45 85.8724 1059.67 85.8694 1064.89 85.862C1102.32 85.8118 1102.32 85.8118 1116.73 86.2864C1117.62 86.3085 1118.52 86.3306 1119.44 86.3533C1129.97 86.8021 1139.51 90.1292 1147.61 96.9678C1155.53 106.648 1159.39 117.477 1158.36 129.991C1157.92 133.164 1157.41 136.313 1156.86 139.468C1156.67 140.611 1156.48 141.755 1156.29 142.933C1155.91 145.23 1155.53 147.526 1155.14 149.821C1154.56 153.241 1154.03 156.667 1153.51 160.095C1152.35 167.685 1151.05 175.248 1149.72 182.811C1147.92 193.075 1146.18 203.3 1145.01 213.655C1144.5 217.877 1143.77 222.044 1142.98 226.222C1141.97 232.912 1141.97 232.912 1144.66 238.882C1146 240.224 1146 240.224 1147.36 241.593C1162.84 257.391 1171.52 278.259 1171.86 300.405C1171.78 306.173 1171.19 311.637 1170.17 317.308C1169.73 320.193 1169.41 323.004 1169.17 325.909C1169.06 327.223 1169.06 327.223 1168.95 328.563C1168.81 330.283 1168.68 332.004 1168.57 333.726C1167.86 342.306 1164.92 349.933 1158.61 355.968C1149.62 361.561 1141.04 363.301 1130.61 363.093C1129.74 363.084 1128.87 363.075 1127.97 363.065C1125.85 363.042 1123.73 363.006 1121.61 362.968C1120.13 365.931 1120.04 369.088 1119.67 372.343C1118.97 378.389 1118.07 384.346 1116.88 390.319C1116.57 393.399 1117.03 395.934 1117.61 398.968C1118.38 407.471 1116.96 414.35 1112.57 421.718C1111.09 425.185 1110.71 428.826 1110.17 432.53C1109.91 434.263 1109.65 435.996 1109.39 437.729C1109.26 438.609 1109.13 439.489 1108.99 440.395C1108.43 444.214 1107.83 448.029 1107.24 451.843C1107.12 452.592 1107 453.342 1106.88 454.114C1106.08 459.186 1105.21 464.242 1104.31 469.296C1104.08 470.583 1103.85 471.869 1103.62 473.195C1103.16 475.741 1102.7 478.287 1102.24 480.831C1100.5 490.353 1100.5 490.353 1100.61 499.968C1102.42 502.613 1102.42 502.613 1105.11 504.468C1106.48 505.591 1106.48 505.591 1107.88 506.737C1108.78 507.473 1109.68 508.209 1110.61 508.968C1115.71 513.852 1119.61 519.226 1123.17 525.28C1123.53 525.879 1123.89 526.478 1124.26 527.095C1126.68 531.386 1126.68 531.386 1126.33 534.386C1125.97 535.169 1125.97 535.169 1125.61 535.968C1123.63 536.298 1121.65 536.628 1119.61 536.968C1119.88 537.755 1120.14 538.543 1120.42 539.354C1126.86 559.219 1128.57 580.909 1119.95 600.511C1114.59 610.342 1105.69 622.841 1094.61 626.382C1088.31 628.48 1088.31 628.48 1083.61 632.968C1081.54 640.907 1082.28 649.395 1082.54 657.522C1082.63 662.18 1082.32 666.718 1081.8 671.343C1081.74 672.042 1081.68 672.741 1081.62 673.461C1081.1 678.216 1079.56 681.237 1076.61 684.968C1073.62 687.155 1072.33 687.968 1068.61 687.968C1068.61 688.958 1068.61 689.948 1068.61 690.968C1069.24 690.961 1069.88 690.954 1070.53 690.948C1077.15 690.881 1083.77 690.836 1090.39 690.803C1092.86 690.788 1095.32 690.767 1097.79 690.741C1101.35 690.705 1104.9 690.688 1108.45 690.675C1109.55 690.659 1110.65 690.644 1111.78 690.628C1118.97 690.626 1124.92 691.196 1130.85 695.651C1131.39 696.23 1131.93 696.809 1132.49 697.405C1133.04 697.981 1133.59 698.558 1134.17 699.151C1142.12 709.149 1140.47 728.24 1141.42 740.452C1141.67 743.763 1141.93 747.074 1142.2 750.384C1142.99 760.427 1143.73 770.467 1144.28 780.526C1144.56 785.51 1145.02 790.45 1145.61 795.405C1146.28 801.343 1146.78 807.249 1147.05 813.218C1147.46 822.061 1148.36 830.841 1149.25 839.646C1150.28 849.848 1151.06 860.045 1151.67 870.28C1152.21 879.185 1152.84 888.029 1153.93 896.883C1154.62 902.632 1154.94 908.369 1155.22 914.151C1155.49 919.617 1156 925.03 1156.61 930.468C1157.28 936.386 1157.78 942.269 1158.05 948.218C1158.46 957.083 1159.36 965.887 1160.25 974.715C1161.38 985.97 1162.21 997.221 1162.91 1008.51C1163.4 1016.2 1164.06 1023.84 1164.93 1031.5C1165.48 1036.41 1165.82 1041.29 1166.05 1046.22C1166.43 1054.27 1167.18 1062.26 1167.99 1070.28C1169.11 1081.59 1170.16 1092.9 1171.1 1104.22C1171.23 1105.82 1171.36 1107.42 1171.5 1109.02C1173.66 1134.43 1173.66 1134.43 1170.74 1142.97C1170.39 1144.02 1170.04 1145.07 1169.68 1146.16C1168.78 1148.52 1167.8 1150.74 1166.61 1152.97C1165.95 1152.97 1165.29 1152.97 1164.61 1152.97C1164.36 1153.55 1164.11 1154.13 1163.85 1154.72C1159.25 1163.04 1150.27 1167.15 1141.61 1169.97C1136.81 1171.23 1132.07 1171.11 1127.15 1171.1C1125.7 1171.1 1125.7 1171.1 1124.23 1171.11C1120.98 1171.11 1117.74 1171.11 1114.5 1171.11C1112.15 1171.11 1109.81 1171.11 1107.47 1171.12C1101.7 1171.12 1095.92 1171.13 1090.15 1171.13C1083.23 1171.13 1076.32 1171.14 1069.4 1171.14C1052.69 1171.16 1035.97 1171.16 1019.25 1171.17C1011.35 1171.17 1003.44 1171.17 995.529 1171.18C968.456 1171.19 941.382 1171.2 914.309 1171.21C912.609 1171.21 910.909 1171.21 909.21 1171.21C907.506 1171.21 905.802 1171.21 904.099 1171.21C900.681 1171.21 897.263 1171.21 893.845 1171.21C892.997 1171.21 892.15 1171.21 891.277 1171.21C863.804 1171.21 836.33 1171.23 808.857 1171.25C779.808 1171.28 750.759 1171.29 721.71 1171.29C718.521 1171.29 715.331 1171.29 712.141 1171.29C711.356 1171.29 710.57 1171.29 709.761 1171.29C697.128 1171.29 684.496 1171.3 671.863 1171.32C659.162 1171.33 646.46 1171.34 633.758 1171.33C626.879 1171.32 619.999 1171.32 613.12 1171.34C606.819 1171.35 600.519 1171.35 594.218 1171.34C591.942 1171.34 589.665 1171.34 587.388 1171.35C568.521 1171.42 551.881 1170.46 537.38 1156.78C526.898 1146.02 523.014 1133.46 523.129 1118.7C523.261 1114.75 523.746 1111.04 524.636 1107.19C524.818 1106.39 525 1105.6 525.188 1104.78C525.327 1104.18 525.467 1103.58 525.611 1102.97C524.753 1102.97 524.753 1102.97 523.878 1102.98C489.704 1103.12 455.531 1103.27 421.357 1103.4C417.221 1103.42 413.085 1103.43 408.948 1103.45C408.125 1103.45 407.302 1103.46 406.454 1103.46C393.26 1103.51 380.066 1103.57 366.872 1103.63C353.255 1103.69 339.638 1103.74 326.021 1103.79C318.406 1103.82 310.79 1103.85 303.175 1103.89C273.827 1104.03 244.487 1104.07 215.141 1103.54C214.007 1103.52 212.873 1103.5 211.705 1103.48C208.523 1103.42 205.341 1103.36 202.159 1103.29C201.246 1103.27 200.333 1103.25 199.392 1103.24C181.524 1102.82 181.524 1102.82 175.173 1100.28C174.391 1099.99 173.608 1099.7 172.802 1099.39C169.701 1097.38 168.342 1095.22 166.611 1091.97C165.878 1086.99 166.302 1081.98 166.611 1076.97C166.66 1076.15 166.71 1075.34 166.76 1074.5C168.58 1047.03 168.58 1047.03 173.611 1036.97C175.673 1036.34 175.673 1036.34 177.611 1035.97C183.851 1016.79 183.851 1016.79 182.048 998.28C178.878 990.975 181.894 982.331 183.31 974.78C185.136 964.622 186.206 954.346 187.406 944.099C189.886 922.953 189.886 922.953 191.584 913.323C192.958 905.294 193.811 897.2 194.728 889.108C195.053 886.242 195.382 883.376 195.712 880.51C196.147 876.727 196.581 872.944 197.015 869.161C197.784 862.449 198.566 855.739 199.361 849.03C199.476 848.039 199.591 847.047 199.71 846.026C199.817 845.131 199.923 844.237 200.033 843.315C200.166 842.186 200.166 842.186 200.301 841.034C200.611 838.968 200.611 838.968 201.102 837.12C201.802 834.161 202.043 831.217 202.33 828.19C202.392 827.542 202.455 826.894 202.52 826.226C202.72 824.161 202.916 822.096 203.111 820.03C203.306 817.969 203.502 815.907 203.702 813.846C203.883 811.973 204.061 810.099 204.238 808.226C204.611 804.968 204.611 804.968 205.111 802.507C205.768 799.17 206.045 795.82 206.33 792.437C206.392 791.723 206.455 791.009 206.52 790.274C206.72 788.006 206.916 785.737 207.111 783.468C207.368 780.478 207.629 777.488 207.892 774.499C207.949 773.819 208.007 773.138 208.066 772.437C208.3 769.78 208.568 767.178 209.105 764.563C209.604 762.002 209.876 759.522 210.076 756.921C210.153 755.943 210.229 754.965 210.308 753.958C210.388 752.912 210.467 751.866 210.548 750.788C210.676 749.159 210.676 749.159 210.806 747.497C211.077 744.029 211.344 740.561 211.611 737.093C211.878 733.632 212.145 730.171 212.416 726.71C212.584 724.559 212.75 722.408 212.913 720.256C213.314 715.122 213.859 710.064 214.611 704.968C214.903 701.035 215.03 697.096 215.173 693.155C215.216 692.033 215.258 690.91 215.302 689.753C215.725 677.492 215.71 665.234 215.611 652.968C213.074 656.213 211.643 659.144 210.236 663.03C208.303 668.216 206.175 673.234 203.849 678.253C202.158 681.961 200.607 685.721 199.052 689.487C197.3 693.718 195.518 697.937 193.736 702.155C191.095 708.411 188.492 714.682 185.923 720.968C183.708 726.382 181.383 731.722 178.923 737.03C176.907 741.543 175.065 746.124 173.201 750.701C171.546 754.749 169.83 758.751 167.986 762.718C166.194 766.582 164.617 770.484 163.111 774.468C161.255 779.378 159.206 784.132 156.994 788.89C155.276 792.714 153.692 796.586 152.111 800.468C149.835 806.051 147.459 811.559 144.923 817.03C142.935 821.481 141.108 825.996 139.285 830.517C137.676 834.479 135.98 838.385 134.197 842.272C131.577 847.993 129.14 853.779 126.736 859.593C126.303 860.635 125.87 861.676 125.425 862.75C123.467 867.468 121.517 872.189 119.584 876.917C116.817 883.681 113.997 890.398 110.923 897.03C109.235 900.809 107.673 904.635 106.111 908.468C103.835 914.051 101.459 919.559 98.9234 925.03C96.9073 929.543 95.0653 934.124 93.2012 938.701C91.5457 942.749 89.8302 946.751 87.9859 950.718C86.1945 954.582 84.6167 958.484 83.1109 962.468C81.2499 967.386 79.2263 972.169 76.9937 976.929C75.9166 979.296 74.9017 981.664 73.9156 984.069C73.617 984.786 73.3184 985.502 73.0108 986.24C72.4244 987.651 71.8487 989.066 71.2852 990.487C69.4572 994.838 67.6107 997.429 63.6109 999.968C62.9509 999.968 62.2909 999.968 61.6109 999.968C61.6315 1001.1 61.6522 1002.24 61.6734 1003.41C61.6816 1007.98 61.1978 1012.44 60.6109 1016.97C60.9409 1016.31 61.2709 1015.65 61.6109 1014.97C62.6009 1014.97 63.5909 1014.97 64.6109 1014.97C66.4419 1027.45 67.5807 1039.97 68.6734 1052.53C68.9334 1055.51 69.1944 1058.48 69.4582 1061.46C69.6208 1063.29 69.7812 1065.13 69.939 1066.96C70.3261 1071.34 70.8411 1075.64 71.6109 1079.97C72.2055 1087.37 72.3994 1093.05 67.6109 1098.97C59.5132 1104.62 47.6687 1103.12 38.2359 1103.09C36.3603 1103.1 36.3603 1103.1 34.4469 1103.1C12.782 1103.08 12.782 1103.08 3.61092 1096.97C-0.842707 1089.71 -0.578162 1081.35 1.21443 1073.24C3.05238 1066.06 5.27746 1059 7.61092 1051.97C7.87211 1051.17 8.13331 1050.38 8.40242 1049.56C12.2638 1038.05 17.2059 1024.93 25.6109 1015.97C26.6009 1015.97 27.5909 1015.97 28.6109 1015.97C28.9148 1013.24 29.1797 1010.51 29.4234 1007.78C29.513 1007.01 29.6026 1006.24 29.6949 1005.45C29.7561 1004.7 29.8174 1003.95 29.8804 1003.17C29.9485 1002.49 30.0166 1001.8 30.0867 1001.1C29.7686 998.67 29.7686 998.67 27.1131 996.844C23.443 992.625 24.0536 989.134 24.3062 983.733C24.3466 982.245 24.3465 982.245 24.3877 980.726C24.4799 977.555 24.6078 974.387 24.7359 971.218C24.8007 969.101 24.8632 966.983 24.9234 964.866C25.4236 948.712 25.4236 948.712 26.3855 940.999C26.8015 937.251 26.8985 933.484 27.0484 929.718C27.8901 911.353 30.0824 893.168 32.6109 874.968C32.7177 874.197 32.8244 873.427 32.9344 872.633C33.688 867.198 34.4487 861.764 35.2158 856.331C35.4753 854.491 35.7339 852.651 35.9914 850.811C38.1029 835.752 40.5947 820.848 44.0484 806.03C44.2645 805.096 44.4806 804.161 44.7032 803.198C45.1375 801.321 45.573 799.445 46.0098 797.569C46.5439 795.258 47.0635 792.944 47.5758 790.628C53.2672 765.151 61.993 740.567 70.6109 715.968C70.8496 715.285 71.0883 714.603 71.3342 713.899C72.004 711.987 72.6785 710.077 73.3531 708.167C73.7306 707.098 74.1082 706.029 74.4971 704.927C75.9395 701.095 77.6389 697.412 79.3765 693.706C80.6554 690.869 81.7688 688.006 82.8609 685.093C87.195 673.627 92.0975 662.345 97.2359 651.218C100.269 644.632 102.963 637.906 105.699 631.194C106.593 629.012 107.496 626.835 108.404 624.659C118.025 601.569 126.514 578.045 132.673 553.78C133.122 552.036 133.122 552.036 133.579 550.256C135.681 541.684 136.557 535.446 133.611 526.968C132.452 514.58 134.244 501.979 135.543 489.657C135.679 488.364 135.815 487.07 135.955 485.737C136.08 484.578 136.206 483.419 136.336 482.225C136.982 475.538 136.982 475.538 135.142 469.226C134.663 468.229 134.663 468.229 134.174 467.211C133.648 466.163 133.648 466.163 133.111 465.093C132.749 464.346 132.388 463.599 132.015 462.83C130.263 459.23 128.46 455.66 126.615 452.108C108.359 416.836 95.4697 376.88 106.607 337.44C116.065 308.348 137.896 284.647 164.798 270.819C169.302 268.579 173.932 266.76 178.658 265.042C181.207 264.115 183.681 263.098 186.173 262.03C191.362 259.936 196.697 258.337 202.048 256.718C203.383 256.312 203.383 256.312 204.744 255.898C205.586 255.648 206.427 255.397 207.295 255.14C208.053 254.914 208.812 254.688 209.593 254.455C211.611 253.968 211.611 253.968 214.611 253.968C214.883 253.241 215.155 252.514 215.435 251.765C216.572 249.06 217.881 246.709 219.423 244.218C221.453 240.88 223.478 237.543 225.423 234.155C226.021 233.125 226.021 233.125 226.63 232.073C229.168 226.625 229.764 219.829 228.611 213.968C226.944 211.791 225.169 210.402 222.97 208.769C215.082 202.748 208.754 194.398 205.611 184.968C204.975 175.922 204.985 169.262 210.986 162.155C214.254 159.432 216.432 157.893 220.787 158.042C224.484 158.411 228.019 159.015 231.611 159.968C231.838 159.1 232.065 158.233 232.298 157.339C233.782 153.527 235.841 150.951 238.611 148.03C239.096 147.51 239.58 146.99 240.08 146.455C246.502 139.754 254.412 132.757 264.048 132.53C268.242 132.592 269.312 132.745 272.798 135.343C274.611 137.968 274.611 137.968 274.611 139.968C275.663 139.473 276.715 138.978 277.798 138.468C284.321 136.062 291.721 135.547 298.306 137.952C304.569 141.3 308.777 144.884 311.072 151.706C313.039 159.958 311.738 169.511 307.509 176.89C304.796 180.426 301.67 182.268 297.611 183.968C297.938 189.964 299.349 193.714 302.388 198.862C303.941 201.535 305.044 203.919 305.611 206.968C304.205 209.861 302.949 210.801 300.068 212.222C297.387 213.763 297.387 213.763 296.72 216.64C296.542 218.163 296.542 218.163 296.361 219.718C296.148 221.321 296.148 221.321 295.931 222.956C295.685 225.271 295.457 227.588 295.236 229.905C294.45 233.757 293.58 235.37 290.611 237.968C284.33 240.357 277.238 240.464 270.611 240.968C269.951 244.928 269.291 248.888 268.611 252.968C270.426 253.277 272.241 253.587 274.111 253.905C275.132 254.079 276.153 254.253 277.205 254.433C278.891 254.698 278.891 254.698 280.611 254.968C281.77 255.152 282.929 255.336 284.123 255.526C290.36 256.282 296.651 256.112 302.923 256.093C304.178 256.097 305.433 256.1 306.726 256.104C317.848 256.093 328.077 255.436 338.798 252.405C339.655 252.171 340.512 251.937 341.394 251.696C343.469 251.128 345.54 250.549 347.611 249.968C349.014 244.707 350.001 239.642 350.611 234.218C351.277 228.544 352.069 222.922 353.045 217.292C353.772 213.023 354.441 208.746 355.111 204.468C355.923 199.297 356.741 194.129 357.611 188.968C358.874 181.464 360.043 173.946 361.224 166.429C362.681 157.156 362.681 157.156 363.415 152.532C364.15 147.902 364.873 143.27 365.584 138.636C365.926 136.434 366.268 134.232 366.611 132.03C366.765 131.012 366.919 129.995 367.077 128.946C370.285 108.477 370.285 108.477 375.611 101.968C376.081 101.334 376.552 100.699 377.037 100.046C382.175 93.5214 388.759 89.5851 396.611 86.9678C398.821 86.8167 401.034 86.719 403.248 86.6514C404.546 86.6095 405.845 86.5676 407.183 86.5244C408.555 86.4846 409.927 86.4449 411.298 86.4053C412.682 86.362 414.065 86.3184 415.449 86.2744C418.836 86.1682 422.223 86.0661 425.611 85.9678C426.06 85.0262 426.509 84.0846 426.972 83.1145C428.82 79.5664 430.179 78.0067 433.611 75.9678C437.448 75.5048 441.155 75.5303 445.017 75.5342C449.475 74.8316 450.685 73.2899 453.611 69.9678C457.501 67.4145 460.616 67.8547 465.091 68.4443C472.941 70.075 478.056 75.6573 482.611 81.9678C482.941 83.2878 483.271 84.6078 483.611 85.9678C517.931 85.9678 552.251 85.9678 587.611 85.9678C588.271 83.9878 588.931 82.0078 589.611 79.9678C591.968 78.7893 593.399 78.8305 596.027 78.8095C596.956 78.7998 597.884 78.79 598.841 78.7799C599.862 78.7741 600.883 78.7684 601.936 78.7624C603.545 78.7476 603.545 78.7476 605.188 78.7324C608.748 78.7008 612.308 78.676 615.869 78.6514C618.332 78.6308 620.795 78.6098 623.259 78.5884C629.753 78.5331 636.246 78.4837 642.74 78.4355C649.362 78.3854 655.985 78.3297 662.607 78.2744C675.608 78.1667 688.61 78.0651 701.611 77.9678C701.694 77.3475 701.777 76.7272 701.862 76.0881C702.246 73.2313 702.631 70.3749 703.017 67.5185C703.148 66.5431 703.278 65.5676 703.413 64.5626C706.643 40.7005 706.643 40.7005 710.611 30.9678C710.953 30.03 710.953 30.03 711.302 29.0732C715.74 18.5471 725.466 9.77728 735.611 4.96776C736.38 4.55783 737.15 4.14791 737.943 3.72557C752.299 -2.83074 770.346 -0.247797 783.443 7.6826Z" fill="#7800B0" />
                            <path d="M409.728 89.5068C410.748 89.5077 411.767 89.5086 412.818 89.5096C414.954 89.5156 417.09 89.5312 419.226 89.5561C422.498 89.5929 425.769 89.5971 429.041 89.5966C431.124 89.6064 433.207 89.6181 435.291 89.6318C436.267 89.634 437.243 89.6362 438.248 89.6385C439.157 89.6513 440.065 89.664 441.001 89.6772C441.797 89.6848 442.593 89.6924 443.413 89.7003C445.921 90.0055 447.489 90.6004 449.611 91.9677C453.295 98.0284 455.169 104.622 457.169 111.382C459.051 116.063 461.333 119.382 465.552 122.319C471.016 124.04 477.46 123.999 482.611 121.53C487.709 114.999 489.275 109.159 488.611 100.968C487.951 97.3377 487.291 93.7077 486.611 89.9677C519.611 89.9677 552.611 89.9677 586.611 89.9677C586 96.6831 585.418 102.512 584.048 108.968C581.125 123.828 582.712 139.123 591.025 152.19C593.895 156.128 597.03 159.655 600.611 162.968C601.498 163.793 602.385 164.618 603.298 165.468C607.288 168.744 611.931 170.854 616.611 172.968C617.785 173.503 617.785 173.503 618.982 174.05C625.016 176.157 631.259 176.113 637.572 176.101C638.891 176.105 638.891 176.105 640.237 176.108C643.173 176.115 646.108 176.114 649.043 176.113C651.153 176.116 653.262 176.119 655.372 176.123C661.095 176.132 666.819 176.134 672.542 176.135C676.121 176.136 679.7 176.138 683.279 176.14C695.774 176.15 708.27 176.154 720.765 176.153C732.397 176.152 744.028 176.163 755.66 176.179C765.658 176.192 775.657 176.197 785.655 176.197C791.622 176.196 797.588 176.199 803.554 176.21C809.169 176.219 814.784 176.219 820.399 176.212C822.453 176.211 824.507 176.214 826.562 176.22C850.649 176.286 870.037 172.544 887.861 155.03C890.582 152.24 890.582 152.24 892.611 148.968C893.271 148.968 893.931 148.968 894.611 148.968C895.015 147.908 895.015 147.908 895.427 146.827C897.071 142.856 899.086 139.102 901.076 135.296C904.324 128.255 906.097 121.311 907.173 113.655C907.422 111.994 907.67 110.332 907.919 108.671C908.037 107.871 908.154 107.071 908.274 106.247C908.735 103.129 909.229 100.016 909.736 96.9052C909.883 95.9861 910.03 95.067 910.181 94.1201C910.611 91.9677 910.611 91.9677 911.611 89.9677C936.455 89.8976 961.298 89.8447 986.142 89.8123C997.678 89.7968 1009.21 89.7758 1020.75 89.7414C1030.81 89.7115 1040.86 89.6921 1050.92 89.6855C1056.24 89.6816 1061.57 89.6724 1066.89 89.6505C1071.91 89.6301 1076.92 89.6239 1081.94 89.6284C1083.77 89.6276 1085.61 89.6217 1087.44 89.6101C1100.55 89.5316 1112.01 89.6443 1122.38 98.6669C1128.62 105.1 1131.7 112.108 1132.61 120.968C1132.72 121.973 1132.72 121.973 1132.83 122.999C1133.09 128.574 1131.99 133.955 1130.96 139.407C1129.62 146.605 1128.61 153.84 1127.61 161.093C1126.44 169.533 1125.12 177.849 1123.33 186.179C1122.19 192.18 1121.45 198.234 1120.7 204.295C1120.06 209.37 1119.17 214.093 1117.61 218.968C1116.68 218.679 1115.75 218.39 1114.79 218.093C1102.88 214.56 1090.34 212.519 1078.61 217.968C1076.01 219.942 1073.69 222.009 1071.39 224.323C1069.61 225.968 1069.61 225.968 1067.61 225.968C1067.2 226.847 1067.2 226.847 1066.79 227.745C1063.34 234.261 1057.53 239.073 1051.99 243.78C1051.44 244.248 1050.89 244.716 1050.32 245.198C1047.22 247.78 1044.11 249.972 1040.61 251.968C1039.58 252.621 1038.54 253.275 1037.47 253.948C1029.86 258.711 1022.16 262.662 1013.91 266.219C1001.98 271.081 1001.98 271.081 993.298 280.155C991.612 287.053 993.513 292.755 997.076 298.706C998.713 301.119 1000.47 303.381 1002.3 305.655C1006.64 311.116 1008.12 315.848 1007.92 322.8C1007.15 328.223 1003.04 331.999 998.982 335.335C993.529 339.09 987.494 341.951 981.611 344.968C970.621 349.957 970.621 349.957 963.611 358.968C962.781 366.199 963.65 370.773 967.478 376.909C969.252 380.133 969.285 382.392 968.611 385.968C964.487 391.971 959.878 394.1 953.318 396.89C949.654 398.561 947.919 399.5 945.646 402.952C942.887 410.989 944.979 417.535 948.611 424.968C949.606 426.638 950.603 428.306 951.611 429.968C951.611 430.958 951.611 431.948 951.611 432.968C952.271 432.968 952.931 432.968 953.611 432.968C955.126 434.542 955.126 434.542 956.861 436.655C962.006 442.667 967.57 446.687 974.439 450.538C977.483 452.542 978.477 454.35 979.244 457.886C979.406 458.965 979.568 460.044 979.736 461.155C979.987 462.785 979.987 462.785 980.244 464.448C980.365 465.28 980.486 466.111 980.611 466.968C981.621 466.844 982.632 466.72 983.673 466.593C987.919 466.997 988.179 467.201 990.923 470.03C993.174 472.224 994.091 472.933 997.275 473.143C999.737 472.876 1002.18 472.434 1004.61 471.968C1005.93 475.268 1007.25 478.568 1008.61 481.968C1007.73 482.247 1006.84 482.527 1005.94 482.815C992.896 487.171 981.158 492.953 974.634 505.702C972.629 509.823 970.878 514.027 969.173 518.28C967.237 523.052 965.279 527.795 963.111 532.468C960.973 537.082 959.03 541.76 957.111 546.468C954.841 552.036 952.472 557.531 949.943 562.987C946.999 569.575 944.33 576.284 941.611 582.968C940.621 582.968 939.631 582.968 938.611 582.968C936.849 580.765 936.849 580.765 934.923 577.718C934.225 576.628 933.526 575.539 932.806 574.417C932.446 573.848 932.085 573.278 931.713 572.692C929.954 569.941 928.122 567.239 926.298 564.53C923.97 561.059 921.747 557.559 919.611 553.968C915.291 547.044 910.808 540.242 906.212 533.499C904.611 530.968 904.611 530.968 903.611 527.968C898.881 525.787 894.245 525.663 889.127 525.649C888.297 525.639 887.467 525.629 886.612 525.618C883.885 525.588 881.158 525.571 878.431 525.554C876.534 525.535 874.637 525.515 872.74 525.495C867.759 525.444 862.777 525.404 857.796 525.367C852.708 525.327 847.62 525.276 842.533 525.226C832.559 525.129 822.585 525.044 812.611 524.968C812.583 520.97 812.579 517.305 813.486 513.405C814.868 506.973 815.72 500.483 816.611 493.968C817.593 486.788 818.627 479.671 820.111 472.577C821.165 467.077 821.852 461.515 822.611 455.968C823.593 448.788 824.627 441.671 826.111 434.577C827.165 429.077 827.852 423.515 828.611 417.968C829.593 410.788 830.627 403.671 832.111 396.577C833.165 391.077 833.852 385.515 834.611 379.968C836.451 366.514 836.451 366.514 837.716 360.518C838.512 356.7 838.909 353.069 838.923 349.155C838.94 348.097 838.957 347.039 838.974 345.948C838.551 342.48 837.753 340.717 835.611 337.968C831.348 334.66 827.408 334.528 822.205 334.569C821.402 334.566 820.6 334.564 819.773 334.561C818.082 334.559 816.391 334.564 814.7 334.577C812.119 334.593 809.54 334.577 806.958 334.558C805.311 334.56 803.664 334.563 802.017 334.569C801.249 334.563 800.481 334.557 799.69 334.551C795.158 334.61 792.197 335.135 788.611 337.968C785.852 342.287 785.093 346.166 784.548 351.218C784.085 355.398 783.54 359.461 782.677 363.577C781.351 369.997 780.499 376.475 779.611 382.968C778.629 390.148 777.595 397.264 776.111 404.358C775.057 409.858 774.369 415.421 773.611 420.968C772.629 428.148 771.595 435.264 770.111 442.358C769.057 447.858 768.369 453.421 767.611 458.968C766.629 466.148 765.595 473.264 764.111 480.358C763.057 485.858 762.369 491.421 761.611 496.968C760.629 504.148 759.595 511.264 758.111 518.358C757.057 523.858 756.369 529.421 755.611 534.968C754.629 542.148 753.595 549.264 752.111 556.358C751.057 561.858 750.369 567.421 749.611 572.968C748.629 580.148 747.595 587.264 746.111 594.358C745.057 599.858 744.369 605.421 743.611 610.968C742.629 618.148 741.595 625.264 740.111 632.358C739.057 637.858 738.369 643.421 737.611 648.968C736.972 653.639 736.314 658.306 735.611 662.968C735.461 663.969 735.311 664.97 735.157 666.001C735.004 666.899 734.851 667.797 734.693 668.722C734.564 669.501 734.435 670.28 734.302 671.083C733.611 672.968 733.611 672.968 730.298 674.905C729.081 675.256 727.865 675.606 726.611 675.968C725.683 676.525 724.755 677.081 723.798 677.655C721.611 678.968 721.611 678.968 719.611 678.968C717.527 682.815 716.114 686.868 714.611 690.968C709.991 690.968 705.371 690.968 700.611 690.968C701.003 688.72 701.395 686.471 701.798 684.155C703.71 672.934 705.247 661.656 706.809 650.383C707.758 643.579 708.767 636.821 710.189 630.097C710.855 626.736 711.226 623.372 711.611 619.968C712.217 614.799 713.011 609.741 714.111 604.655C714.77 601.111 715.188 597.546 715.611 593.968C716.221 588.8 717.011 583.741 718.111 578.655C719.007 573.837 719.499 568.96 720.048 564.093C720.407 561.202 720.918 558.384 721.521 555.534C723.217 547.314 724.214 538.966 725.358 530.654C726.575 521.842 727.911 513.074 729.498 504.32C730.912 496.441 732.014 488.521 733.111 480.593C735.494 463.398 735.494 463.398 736.705 456.726C736.86 455.856 737.015 454.986 737.175 454.09C737.453 452.577 737.747 451.066 738.062 449.56C738.983 444.504 738.155 441.398 735.611 436.968C732.751 433.961 730.616 432.726 726.542 432.45C724.951 432.424 723.359 432.421 721.767 432.436C720.92 432.433 720.074 432.429 719.201 432.425C717.416 432.422 715.631 432.429 713.846 432.446C711.119 432.468 708.396 432.446 705.669 432.421C703.931 432.423 702.193 432.429 700.455 432.436C699.237 432.424 699.237 432.424 697.995 432.412C694.032 432.477 692.057 432.687 688.623 434.85C686.284 437.312 685.685 438.851 684.986 442.155C684.644 443.747 684.644 443.747 684.294 445.37C684.069 446.557 683.843 447.745 683.611 448.968C683.422 449.939 683.422 449.939 683.229 450.929C681.485 459.942 680.154 468.967 679.138 478.089C678.755 480.91 678.292 483.597 677.705 486.374C676.009 494.604 675.009 502.96 673.864 511.281C672.647 520.091 671.311 528.855 669.724 537.606C668.303 545.529 667.207 553.494 666.111 561.468C664.916 570.153 663.679 578.813 662.115 587.44C660.521 596.23 659.266 605.056 658.048 613.905C655.697 630.973 655.697 630.973 654.033 638.841C653.366 642.201 652.995 645.564 652.611 648.968C652.004 654.139 651.212 659.2 650.107 664.288C649.587 667.099 649.237 669.912 648.915 672.751C648.596 675.513 648.228 678.266 647.855 681.021C647.63 682.815 647.467 684.616 647.31 686.417C646.828 689.759 646.323 692.048 644.611 694.968C641.241 697.286 637.895 698.882 634.134 700.448C629.699 702.361 626.292 704.897 622.611 707.968C621.724 708.648 620.837 709.329 619.923 710.03C617.329 712.204 614.969 714.542 612.611 716.968C612.943 714.301 613.277 711.634 613.611 708.968C613.72 708.091 613.83 707.215 613.942 706.312C614.307 703.405 614.677 700.499 615.048 697.593C615.17 696.616 615.292 695.638 615.417 694.632C615.991 690.162 616.618 685.744 617.552 681.335C619.127 673.78 620.057 666.109 621.111 658.468C623.471 641.346 623.471 641.346 625.097 633.673C626.367 626.986 627.182 620.209 628.111 613.468C630.531 595.913 630.531 595.913 632.191 588.079C632.858 584.725 633.227 581.366 633.611 577.968C634.084 573.781 634.638 569.709 635.513 565.589C637.121 557.801 638.087 549.904 639.173 542.03C639.609 538.875 640.048 535.72 640.49 532.565C640.588 531.847 640.686 531.128 640.786 530.387C641.197 527.455 641.672 524.785 642.611 521.968C642.983 516.947 642.748 513.97 639.611 509.968C636.748 507.047 634.669 505.72 630.634 505.482C629.085 505.469 627.535 505.479 625.986 505.507C624.749 505.508 624.749 505.508 623.487 505.51C621.749 505.516 620.011 505.531 618.273 505.556C615.62 505.593 612.968 505.597 610.314 505.597C608.621 505.606 606.929 505.618 605.236 505.632C604.051 505.635 604.051 505.635 602.843 505.639C598.674 505.71 595.362 506.095 591.611 507.968C591.611 508.628 591.611 509.288 591.611 509.968C590.951 509.968 590.291 509.968 589.611 509.968C589.446 511.136 589.446 511.136 589.279 512.327C588.244 519.627 587.188 526.924 586.111 534.218C585.992 535.032 585.874 535.846 585.752 536.685C585.164 540.646 584.503 544.566 583.673 548.483C582.116 556.082 581.17 563.788 580.111 571.468C577.751 588.589 577.751 588.589 576.125 596.263C574.855 602.949 574.04 609.727 573.111 616.468C570.751 633.589 570.751 633.589 569.125 641.263C567.855 647.949 567.04 654.727 566.111 661.468C563.691 679.022 563.691 679.022 562.031 686.856C561.364 690.211 560.995 693.569 560.611 696.968C559.988 702.287 559.165 707.502 558.052 712.741C557.314 716.466 556.903 720.184 556.611 723.968C556.495 725.132 556.495 725.132 556.376 726.319C556.123 730.535 556.267 733.117 558.986 736.468C563.152 740.435 566.383 740.169 571.9 740.284C572.718 740.305 573.537 740.326 574.38 740.347C576.999 740.413 579.617 740.471 582.236 740.53C584.009 740.573 585.783 740.617 587.556 740.661C591.908 740.768 596.259 740.87 600.611 740.968C598.939 751.366 597.127 761.679 594.861 771.968C591.327 788.276 587.976 804.624 584.611 820.968C536.101 820.968 487.591 820.968 437.611 820.968C437.611 821.958 437.611 822.948 437.611 823.968C485.791 823.968 533.971 823.968 583.611 823.968C583.02 828.698 582.472 833.023 581.447 837.608C581.215 838.661 580.984 839.713 580.745 840.797C580.495 841.926 580.244 843.055 579.986 844.218C577.505 855.563 575.232 866.937 573.048 878.343C571.043 888.8 568.959 899.214 566.527 909.582C564.553 918.055 562.796 926.571 561.048 935.093C560.906 935.785 560.764 936.477 560.618 937.19C558.241 948.774 555.93 960.372 553.611 971.968C506.091 971.968 458.571 971.968 409.611 971.968C409.941 972.958 410.271 973.948 410.611 974.968C457.141 975.298 503.671 975.628 551.611 975.968C550.966 982.415 550.247 988.458 548.904 994.737C548.739 995.532 548.573 996.326 548.403 997.145C548.053 998.827 547.7 1000.51 547.345 1002.19C546.42 1006.57 545.51 1010.96 544.599 1015.35C544.422 1016.2 544.244 1017.06 544.061 1017.94C542.802 1024 541.609 1030.07 540.486 1036.16C539.008 1044.1 537.365 1052 535.673 1059.91C535.444 1060.98 535.215 1062.05 534.979 1063.15C532.614 1074.11 530.096 1085.03 527.611 1095.97C450.721 1095.97 373.831 1095.97 294.611 1095.97C294.281 1092.01 293.951 1088.05 293.611 1083.97C286.137 1068.27 272.082 1060.96 256.486 1055.03C248.706 1052.05 242.649 1048.83 236.611 1042.97C235.745 1042.25 234.878 1041.52 233.986 1040.78C227.904 1035.44 227.904 1035.44 227.205 1031.92C227.457 1029.53 228.022 1027.31 228.611 1024.97C228.899 1022.7 229.168 1020.43 229.423 1018.16C229.806 1015.42 230.202 1012.7 230.611 1009.97C230.722 1009.19 230.834 1008.41 230.949 1007.61C232.786 995.254 236.309 985.685 242.539 974.911C244.753 970.897 246.402 966.649 248.154 962.417C249.69 958.781 251.353 955.218 253.048 951.655C255.953 945.527 258.578 939.31 261.124 933.025C262.717 929.104 264.375 925.238 266.173 921.405C268.53 916.329 270.452 911.13 272.376 905.879C273.844 901.907 275.43 898.051 277.236 894.218C279.436 889.529 281.074 884.77 282.658 879.843C283.496 877.315 284.414 874.868 285.423 872.405C296.048 846.342 304.706 819.762 309.268 791.957C309.812 788.801 310.475 785.669 311.111 782.53C324.16 714.493 327.927 616.916 305.611 549.968C305.025 543.311 306.282 537.611 307.611 530.968C323.781 530.638 339.951 530.308 356.611 529.968C356.941 526.338 357.271 522.708 357.611 518.968C364.372 519.333 368.155 519.762 373.611 523.968C384.495 530.967 392.801 533.317 405.736 531.343C411.599 530.01 417.425 527.163 420.896 522.089C421.256 521.471 421.615 520.854 421.986 520.218C423.586 517.637 424.256 517.063 427.251 516.257C429.214 515.984 431.179 515.727 433.146 515.487C435.86 515.178 435.86 515.178 437.673 512.53C437.983 511.685 438.292 510.839 438.611 509.968C439.271 508.978 439.931 507.988 440.611 506.968C450.35 511.263 460.062 515.598 469.693 520.132C470.284 520.404 470.876 520.676 471.486 520.956C473.134 521.741 474.761 522.568 476.379 523.413C485.154 527.815 493.323 529.527 502.923 530.843C504.358 531.054 505.792 531.268 507.226 531.483C510.685 531.999 514.147 532.49 517.611 532.968C515.774 529.718 513.948 527.07 511.255 524.487C510.633 523.881 510.011 523.274 509.371 522.649C508.728 522.033 508.085 521.416 507.423 520.78C506.134 519.541 504.848 518.298 503.568 517.05C503 516.506 502.433 515.961 501.848 515.401C500.611 513.968 500.611 513.968 500.611 511.968C499.771 511.56 499.771 511.56 498.914 511.144C496.47 509.896 494.121 508.539 491.759 507.14C490.825 506.587 489.89 506.034 488.927 505.464C487.957 504.888 486.986 504.311 485.986 503.718C484.565 502.877 484.565 502.877 483.115 502.018C478.505 499.288 473.904 496.545 469.314 493.78C466.564 492.127 463.806 490.495 461.009 488.921C460.012 488.359 459.014 487.797 457.986 487.218C456.962 486.645 455.939 486.073 454.884 485.483C454.134 484.983 453.384 484.483 452.611 483.968C452.611 483.308 452.611 482.648 452.611 481.968C453.57 481.101 453.57 481.101 454.548 480.218C457.118 477.415 457.532 475.744 457.611 471.968C456.778 469.468 456.778 469.468 454.611 467.968C448.906 467.017 444.666 468.914 439.455 471.19C434.566 472.527 430.911 471.645 426.47 469.331C425.444 468.654 424.418 467.977 423.361 467.28C418.427 464.096 413.424 461.177 408.244 458.413C405.539 456.928 402.922 455.339 400.298 453.718C397.625 452.084 395.485 450.927 392.486 449.968C389.771 449.023 388.497 448.215 386.298 446.468C376.139 438.512 364.212 432.515 352.611 426.968C351.915 426.593 351.219 426.217 350.501 425.831C347.464 424.444 344.895 424.68 341.611 424.968C336.663 427.099 334.906 430.432 332.798 435.155C332.487 435.79 332.176 436.425 331.855 437.079C329.634 441.907 328.901 445.662 329.611 450.968C332.802 455.205 337.012 457.651 341.611 460.155C342.291 460.531 342.971 460.907 343.671 461.294C349.583 464.511 355.609 467.489 361.673 470.405C362.993 471.043 362.993 471.043 364.339 471.693C368.018 473.431 371.583 475.058 375.517 476.12C379.299 477.156 381.483 478.679 384.611 480.968C376.128 486.623 366.593 488.14 356.611 487.968C356.611 484.998 356.611 482.028 356.611 478.968C355.283 478.845 353.955 478.723 352.587 478.597C345.365 477.874 338.178 476.879 330.986 475.905C329.586 475.717 328.186 475.529 326.787 475.341C323.394 474.885 320.003 474.427 316.611 473.968C316.897 471.175 317.189 468.384 317.486 465.593C317.564 464.818 317.643 464.043 317.724 463.245C318.159 459.194 318.722 455.23 319.556 451.241C320.888 444.862 321.728 438.422 322.611 431.968C323.604 424.703 324.646 417.497 326.146 410.319C326.951 406.247 327.49 402.141 328.048 398.03C329.039 390.938 330.063 383.854 331.173 376.78C331.288 376.04 331.403 375.299 331.521 374.536C332.117 370.766 332.795 367.029 333.576 363.292C334.878 356.893 335.726 350.435 336.611 343.968C337.594 336.78 338.63 329.656 340.115 322.555C341.147 317.166 341.809 311.715 342.548 306.28C343.744 297.673 345.083 289.191 346.9 280.694C347.979 275.038 348.675 269.338 349.418 263.629C350.296 256.999 351.363 250.424 352.548 243.843C354.355 233.806 355.838 223.738 357.216 213.633C358.017 207.823 358.945 202.089 360.142 196.347C360.946 192.266 361.488 188.151 362.048 184.03C365.631 158.371 365.631 158.371 368.08 146.741C368.852 142.707 369.476 138.651 370.111 134.593C370.243 133.762 370.376 132.931 370.512 132.075C371.072 128.54 371.605 125.014 372.037 121.46C373.425 110.721 377.835 102.937 385.876 95.7216C393.545 90.8025 400.726 89.3726 409.728 89.5068Z" fill="#FEFEFE" />
                            <path d="M674.692 694.627C676.369 694.628 678.046 694.628 679.722 694.626C684.234 694.625 688.745 694.643 693.257 694.664C697.987 694.682 702.717 694.684 707.446 694.688C716.385 694.697 725.324 694.722 734.262 694.752C744.446 694.785 754.63 694.802 764.814 694.817C785.746 694.848 806.678 694.901 827.611 694.968C825.172 698.068 822.848 700.777 819.798 703.28C808.019 713.399 800.144 725.474 797.611 740.968C797.52 742.674 797.481 744.384 797.486 746.093C797.482 747.365 797.482 747.365 797.478 748.663C797.522 749.754 797.566 750.844 797.611 751.968C797.62 752.689 797.629 753.409 797.638 754.152C798.073 763.608 801.361 772.169 804.423 781.03C804.964 782.63 805.504 784.229 806.042 785.829C810.148 798.723 810.148 798.723 815.735 810.989C817.994 816.092 815.078 823.313 813.548 828.343C813.335 829.052 813.122 829.761 812.902 830.492C811.52 835.065 810.096 839.625 808.677 844.187C808.336 845.286 807.995 846.385 807.644 847.517C806.981 849.651 806.314 851.784 805.642 853.915C802.641 863.545 800.188 873.175 797.611 882.968C705.541 883.463 705.541 883.463 611.611 883.968C611.281 884.958 610.951 885.948 610.611 886.968C654.501 886.968 698.391 886.968 743.611 886.968C742.399 892.421 741.181 897.774 739.736 903.155C739.484 904.108 739.484 904.108 739.227 905.08C738.364 908.314 737.441 911.502 736.427 914.694C733.808 923.015 732.46 929.647 735.798 937.905C738.522 941.005 741.561 942.674 745.693 943.267C748.114 943.409 750.521 943.461 752.947 943.48C753.826 943.497 754.705 943.515 755.611 943.534C758.403 943.588 761.194 943.622 763.986 943.655C765.886 943.688 767.785 943.723 769.685 943.759C774.327 943.844 778.969 943.91 783.611 943.968C782.982 945.56 782.352 947.151 781.72 948.741C781.194 950.07 781.194 950.07 780.657 951.426C779.448 954.365 778.09 957.158 776.611 959.968C775.951 959.968 775.291 959.968 774.611 959.968C774.338 960.532 774.064 961.097 773.783 961.679C772.568 964.051 771.242 966.313 769.861 968.593C769.337 969.459 768.814 970.325 768.275 971.218C767.726 972.125 767.177 973.033 766.611 973.968C765.485 975.842 764.36 977.717 763.236 979.593C762.37 981.037 761.503 982.48 760.611 983.968C766.221 986.938 771.831 989.908 777.611 992.968C777.611 994.288 777.611 995.608 777.611 996.968C772.657 995.085 768.047 992.656 763.353 990.21C760.657 988.761 760.657 988.761 757.611 988.968C751.224 1000.84 745.215 1012.65 740.298 1025.22C740.031 1025.88 739.764 1026.54 739.489 1027.22C737.462 1032.55 736.687 1037.26 738.548 1042.72C741.59 1046.04 745.11 1047.65 749.611 1047.97C774.583 1040.28 798.058 1020.52 813.611 999.968C814.344 999.015 815.078 998.063 815.833 997.081C822.388 988.968 822.388 988.968 824.404 979.147C823.482 975.45 822.014 973.041 819.861 969.905C818.848 968.403 818.848 968.403 817.814 966.87C815.657 963.88 815.657 963.88 812.849 961.272C810.611 958.968 810.611 958.968 810.548 956.155C813.611 946.968 813.611 946.968 816.611 943.968C824.023 944.674 824.023 944.674 826.611 945.968C826.941 944.978 827.271 943.988 827.611 942.968C829.264 942.268 830.923 941.572 832.626 941.007C836.634 938.908 839.129 936.146 840.833 931.98C841.111 930.883 841.388 929.786 841.673 928.655C842.153 926.813 842.153 926.813 842.642 924.933C842.966 923.611 843.289 922.29 843.611 920.968C843.954 919.594 844.297 918.22 844.642 916.847C845.156 914.791 845.669 912.734 846.177 910.677C849.676 896.536 849.676 896.536 852.611 890.968C853.271 890.968 853.931 890.968 854.611 890.968C856.26 893.397 857.793 895.826 859.298 898.343C860.201 899.821 861.106 901.297 862.013 902.772C862.456 903.494 862.9 904.216 863.356 904.959C867.362 911.373 871.879 917.429 876.544 923.374C877.611 924.968 877.611 924.968 877.611 926.968C878.271 926.968 878.931 926.968 879.611 926.968C881.236 928.968 881.236 928.968 882.611 930.968C884.261 930.638 885.911 930.308 887.611 929.968C888.139 930.95 888.139 930.95 888.677 931.952C889.418 933.321 889.418 933.321 890.173 934.718C890.715 935.721 891.256 936.724 891.814 937.757C893.004 939.884 894.244 941.985 895.533 944.054C896.157 945.057 896.78 946.06 897.423 947.093C898.007 948.003 898.591 948.913 899.193 949.851C900.502 952.729 900.815 954.225 901.025 957.276C901.454 962.556 903.551 966.379 906.173 970.905C907.011 972.392 907.846 973.88 908.677 975.37C909.048 976.015 909.419 976.659 909.8 977.323C910.611 978.968 910.611 978.968 910.611 980.968C912.405 980.014 914.196 979.054 915.986 978.093C916.984 977.559 917.981 977.025 919.009 976.476C921.664 975.086 921.664 975.086 923.611 972.968C924.931 972.968 926.251 972.968 927.611 972.968C927.611 973.958 927.611 974.948 927.611 975.968C925.463 977.511 923.392 978.844 921.111 980.155C920.181 980.707 920.181 980.707 919.232 981.271C917.697 982.179 916.155 983.075 914.611 983.968C915.398 987.378 916.482 990.657 917.611 993.968C918.431 993.33 919.25 992.692 920.095 992.034C921.183 991.199 922.272 990.365 923.361 989.53C923.9 989.109 924.438 988.689 924.994 988.255C927.784 986.128 930.083 984.439 933.611 983.968C933.611 984.958 933.611 985.948 933.611 986.968C931.65 988.821 929.72 990.49 927.611 992.155C927.038 992.619 926.466 993.082 925.876 993.56C924.461 994.704 923.037 995.837 921.611 996.968C925.586 1007.39 932.405 1015.83 939.353 1024.41C940.526 1025.86 941.683 1027.33 942.837 1028.8C944.767 1031.16 945.681 1032.15 948.611 1032.97C951.507 1033.17 954.003 1033.3 956.611 1031.97C968.157 1010.17 964.838 975.419 958.029 952.534C955.296 943.813 952.309 935.841 947.611 927.968C942.724 927.888 937.975 927.981 933.111 928.468C931.277 928.635 929.444 928.802 927.611 928.968C926.766 929.059 925.922 929.151 925.052 929.245C922.777 929.398 920.844 929.428 918.611 928.968C916.467 926.824 915.806 925.671 914.611 922.968C913.835 921.338 913.835 921.338 913.044 919.675C911.531 916.454 910.058 913.219 908.611 909.968C909.26 909.564 909.91 909.161 910.58 908.745C913.463 906.649 915.477 904.842 917.611 901.968C917.937 899.171 918.046 896.92 917.892 894.159C917.872 893.466 917.851 892.773 917.831 892.059C917.778 890.361 917.697 888.664 917.611 886.968C918.679 886.962 919.746 886.956 920.846 886.95C930.939 886.893 941.031 886.82 951.123 886.732C956.311 886.687 961.498 886.648 966.686 886.621C971.698 886.595 976.71 886.555 981.722 886.505C983.629 886.488 985.535 886.476 987.441 886.47C1004.9 886.722 1004.9 886.722 1020.04 878.956C1026.14 871.238 1027.74 861.494 1029.99 852.155C1030.39 850.527 1030.78 848.899 1031.18 847.27C1033.7 836.99 1036.06 826.681 1038.3 816.339C1040.41 806.72 1042.71 797.156 1045.05 787.593C1045.24 786.805 1045.43 786.017 1045.63 785.206C1046.77 780.53 1047.92 775.856 1049.07 771.181C1053.16 754.493 1057.23 737.818 1060.61 720.968C1059.62 720.638 1058.63 720.308 1057.61 719.968C1057.52 720.702 1057.42 721.436 1057.32 722.192C1056.08 731.03 1054.13 739.572 1051.96 748.22C1050.93 752.294 1049.93 756.373 1048.93 760.452C1048.63 761.67 1048.63 761.67 1048.32 762.912C1046.29 771.22 1044.43 779.563 1042.64 787.927C1041.18 794.686 1039.46 801.344 1037.65 808.018C1036.02 814.123 1034.61 820.279 1033.18 826.433C1032.66 828.65 1032.14 830.865 1031.62 833.081C1030.1 839.569 1028.58 846.059 1027.12 852.562C1026.8 853.989 1026.8 853.989 1026.46 855.446C1026.08 857.137 1025.7 858.83 1025.33 860.525C1023.82 867.127 1021.64 873.972 1016.17 878.343C1015.62 878.804 1015.06 879.266 1014.49 879.741C1009.29 883.132 1004.7 883.247 998.69 883.195C997.801 883.195 996.913 883.195 995.998 883.196C993.071 883.194 990.143 883.179 987.216 883.163C985.183 883.159 983.15 883.157 981.117 883.155C975.772 883.147 970.428 883.127 965.083 883.105C959.627 883.085 954.171 883.076 948.714 883.065C938.013 883.044 927.312 883.01 916.611 882.968C913.392 872.568 913.392 872.568 912.47 867.366C912.2 865.907 912.2 865.907 911.925 864.418C911.646 862.896 911.646 862.896 911.361 861.343C908.616 847.04 904.789 833.069 900.017 819.308C899.658 818.271 899.658 818.271 899.292 817.214C898.665 815.435 898.014 813.664 897.361 811.894C896.094 806.952 897.38 804.193 899.869 799.929C900.816 798.395 901.772 796.867 902.736 795.343C903.238 794.54 903.74 793.736 904.257 792.909C905.257 791.311 906.259 789.716 907.264 788.122C908.371 786.352 909.445 784.561 910.509 782.765C920.835 765.538 937.878 751.152 953.611 738.968C954.177 738.524 954.743 738.08 955.326 737.623C977.743 720.099 1001.6 706.665 1028.73 697.934C1032.46 696.979 1032.46 696.979 1035.61 694.968C1036.99 694.875 1038.38 694.85 1039.76 694.854C1040.64 694.854 1041.53 694.854 1042.43 694.855C1043.39 694.86 1044.35 694.865 1045.33 694.87C1046.8 694.872 1046.8 694.872 1048.29 694.874C1051.42 694.88 1054.55 694.893 1057.67 694.905C1059.79 694.91 1061.9 694.915 1064.02 694.919C1069.22 694.93 1074.41 694.947 1079.61 694.968C1078.33 696.675 1076.99 698.342 1075.61 699.968C1074.95 699.968 1074.29 699.968 1073.61 699.968C1072.04 706.117 1070.73 712.332 1069.36 718.53C1069.2 719.243 1069.05 719.957 1068.88 720.691C1066.76 730.359 1064.8 740.037 1063.05 749.78C1061.27 759.692 1059.21 769.509 1056.99 779.33C1054.87 788.731 1052.87 798.154 1050.92 807.593C1050.78 808.288 1050.63 808.983 1050.49 809.7C1048.9 817.362 1047.41 825.027 1046.09 832.741C1045.11 838.478 1043.89 844.081 1042.42 849.714C1040.6 857.056 1039.18 864.494 1037.67 871.905C1037.31 873.667 1036.95 875.428 1036.59 877.19C1034.67 886.623 1032.8 896.065 1031.04 905.53C1029.5 913.725 1027.73 921.868 1025.97 930.018C1020.78 953.972 1020.78 953.972 1016.11 978.03C1014.83 985.065 1013.32 992.043 1011.8 999.03C1009.6 1009.17 1007.55 1019.33 1005.61 1029.53C1003.57 1040.24 1001.35 1050.89 998.94 1061.52C996.806 1070.98 994.814 1080.47 992.861 1089.97C992.712 1090.69 992.563 1091.41 992.41 1092.15C986.018 1119.84 986.018 1119.84 994.622 1146.16C995.611 1147.97 995.611 1147.97 995.611 1150.97C996.271 1150.97 996.931 1150.97 997.611 1150.97C999.267 1152.68 999.267 1152.68 1001.11 1154.91C1003.5 1157.89 1003.5 1157.89 1006.61 1159.97C1006.61 1160.63 1006.61 1161.29 1006.61 1161.97C1007.15 1162.07 1007.68 1162.17 1008.24 1162.28C1011.24 1163.15 1013.85 1164.52 1016.61 1165.97C1016.61 1166.3 1016.61 1166.63 1016.61 1166.97C959.488 1167.04 902.365 1167.09 845.242 1167.12C838.497 1167.12 831.753 1167.13 825.009 1167.13C824.338 1167.13 823.667 1167.13 822.976 1167.13C801.234 1167.15 779.492 1167.17 757.75 1167.2C734.768 1167.23 711.786 1167.24 688.805 1167.25C675.041 1167.25 661.277 1167.27 647.513 1167.29C638.074 1167.31 628.635 1167.31 619.196 1167.31C613.751 1167.31 608.306 1167.31 602.86 1167.33C597.871 1167.34 592.882 1167.34 587.892 1167.33C586.091 1167.33 584.29 1167.33 582.489 1167.34C565.24 1167.43 552.46 1164.76 538.888 1153.46C537.368 1151.68 537.007 1150.25 536.611 1147.97C535.951 1147.97 535.291 1147.97 534.611 1147.97C525.976 1131.59 526.03 1118.71 529.912 1100.89C531.818 1092.05 533.645 1083.19 535.463 1074.32C535.85 1072.43 536.239 1070.55 536.629 1068.66C538.782 1058.23 540.846 1047.8 542.708 1037.31C543.855 1030.88 545.128 1024.55 546.802 1018.22C548.616 1010.92 550.022 1003.52 551.518 996.143C552.107 993.237 552.7 990.333 553.294 987.429C554.996 979.088 556.675 970.745 558.22 962.374C559.47 955.624 560.884 948.922 562.361 942.218C564.795 931.038 567.02 919.829 569.173 908.593C571.179 898.135 573.264 887.72 575.695 877.351C577.663 868.899 579.427 860.406 581.173 851.905C581.326 851.164 581.478 850.422 581.635 849.658C583.548 840.334 585.388 830.999 587.129 821.642C588.656 813.533 590.427 805.481 592.183 797.419C594.695 785.782 596.95 774.098 599.163 762.401C602.322 745.79 605.672 731.33 616.611 717.968C617.663 716.514 617.663 716.514 618.736 715.03C633.137 698.137 653.763 694.477 674.692 694.627Z" fill="#FCFCFC" />
                            <path d="M1095.74 694.534C1096.49 694.529 1097.25 694.524 1098.02 694.518C1099.6 694.512 1101.18 694.513 1102.76 694.522C1105.17 694.53 1107.58 694.501 1109.98 694.47C1111.53 694.468 1113.07 694.469 1114.61 694.472C1115.33 694.46 1116.04 694.449 1116.77 694.438C1122.62 694.519 1126.17 696.54 1130.26 700.601C1134.06 705.456 1134.86 708.532 1135.33 714.573C1135.42 715.709 1135.42 715.709 1135.52 716.868C1135.72 719.297 1135.92 721.726 1136.11 724.155C1136.31 726.566 1136.5 728.978 1136.7 731.388C1136.83 732.889 1136.95 734.389 1137.07 735.89C1137.33 739.128 1137.66 742.331 1138.12 745.547C1138.62 749.026 1138.9 752.461 1139.11 755.968C1139.19 757.267 1139.28 758.567 1139.36 759.905C1139.49 761.939 1139.61 763.973 1139.74 766.007C1139.86 767.994 1139.98 769.981 1140.11 771.968C1140.18 773.143 1140.26 774.319 1140.33 775.53C1140.51 777.762 1140.76 779.99 1141.09 782.206C1141.78 787.179 1142.12 792.156 1142.48 797.163C1142.6 798.798 1142.6 798.798 1142.72 800.465C1142.89 802.799 1143.06 805.132 1143.22 807.466C1143.66 813.565 1144.11 819.663 1144.56 825.761C1144.65 826.974 1144.74 828.187 1144.83 829.438C1145.56 839.314 1146.31 849.189 1147.11 859.06C1147.23 860.61 1147.36 862.159 1147.48 863.708C1147.65 865.835 1147.82 867.962 1148 870.089C1148.09 871.259 1148.19 872.428 1148.29 873.634C1148.51 875.914 1148.79 878.19 1149.12 880.458C1149.61 883.979 1149.89 887.454 1150.11 891.003C1150.19 892.307 1150.28 893.611 1150.36 894.954C1150.49 896.997 1150.61 899.04 1150.74 901.082C1150.86 903.077 1150.98 905.071 1151.11 907.065C1151.18 908.246 1151.26 909.427 1151.33 910.644C1151.56 913.9 1151.56 913.9 1152.1 916.816C1152.77 920.964 1153.03 925.101 1153.29 929.292C1153.42 931.145 1153.54 932.999 1153.67 934.853C1153.86 937.732 1154.05 940.612 1154.23 943.492C1154.93 954.098 1155.73 964.664 1156.9 975.229C1157.72 982.715 1158.22 990.201 1158.67 997.718C1158.83 1000.28 1158.99 1002.83 1159.15 1005.39C1159.24 1007.04 1159.24 1007.04 1159.35 1008.72C1159.53 1010.94 1159.78 1013.16 1160.1 1015.37C1160.65 1019.28 1160.97 1023.18 1161.22 1027.12C1161.34 1028.76 1161.45 1030.39 1161.56 1032.03C1161.62 1032.9 1161.68 1033.76 1161.74 1034.65C1162.94 1052.33 1164.3 1069.99 1165.74 1087.66C1165.82 1088.72 1165.91 1089.79 1166 1090.89C1166.24 1093.94 1166.49 1096.99 1166.74 1100.04C1166.82 1100.94 1166.89 1101.85 1166.96 1102.78C1167.36 1107.54 1167.93 1112.24 1168.61 1116.97C1168.85 1120.59 1168.89 1124.21 1168.92 1127.84C1168.95 1128.79 1168.98 1129.73 1169.01 1130.7C1169.11 1141.47 1164.66 1149.78 1157.36 1157.59C1148.86 1165.81 1138.43 1167.27 1127.04 1167.23C1126.01 1167.23 1124.98 1167.23 1123.92 1167.24C1120.54 1167.25 1117.16 1167.24 1113.77 1167.23C1111.41 1167.23 1109.05 1167.24 1106.68 1167.24C1101.74 1167.24 1096.79 1167.24 1091.84 1167.23C1085.52 1167.22 1079.19 1167.22 1072.87 1167.24C1067.99 1167.24 1063.11 1167.24 1058.23 1167.24C1055.9 1167.23 1053.57 1167.24 1051.24 1167.24C1047.97 1167.25 1044.71 1167.24 1041.44 1167.23C1040.01 1167.23 1040.01 1167.23 1038.56 1167.24C1024.09 1167.15 1013.37 1163.26 1002.8 1153.22C993.397 1143.55 990.435 1132.48 990.477 1119.21C990.68 1114.29 991.616 1109.64 992.673 1104.84C993.002 1103.28 993.002 1103.28 993.337 1101.68C993.82 1099.37 994.309 1097.07 994.802 1094.76C996.157 1088.4 997.468 1082.04 998.781 1075.67C999.221 1073.54 999.666 1071.41 1000.11 1069.28C1001.57 1062.27 1002.93 1055.25 1004.13 1048.19C1005.12 1042.46 1006.33 1036.85 1007.8 1031.23C1009.63 1023.86 1011.04 1016.4 1012.55 1008.97C1012.89 1007.31 1013.22 1005.66 1013.56 1004C1015.06 996.651 1016.55 989.297 1018.01 981.937C1021.07 966.557 1024.28 951.209 1027.48 935.856C1030.08 923.364 1032.67 910.879 1034.98 898.329C1036.01 892.83 1037.22 887.37 1038.42 881.905C1040.63 871.764 1042.67 861.601 1044.61 851.405C1046.65 840.689 1048.88 830.034 1051.29 819.395C1053.37 810.148 1055.33 800.878 1057.24 791.593C1057.39 790.86 1057.54 790.128 1057.69 789.374C1059.58 780.156 1061.4 770.927 1063.12 761.676C1064.72 753.184 1066.55 744.743 1068.4 736.303C1069.58 730.888 1070.73 725.481 1071.67 720.019C1071.83 719.116 1072 718.213 1072.16 717.282C1072.45 715.644 1072.72 714.003 1072.97 712.358C1073.99 706.616 1076.22 701.92 1080.61 697.968C1085.7 695.262 1089.97 694.51 1095.74 694.534Z" fill="#FEFEFE" />
                            <path d="M347.611 254.968C347.006 260.618 346.353 266.263 345.673 271.905C345.52 273.193 345.367 274.481 345.209 275.808C344.808 278.842 344.257 281.818 343.638 284.815C342.569 290.007 341.817 295.216 341.111 300.468C340.421 305.603 339.698 310.699 338.634 315.772C337.591 320.817 336.897 325.885 336.217 330.99C333.628 350.386 329.201 367.691 321.611 385.718C312.841 407.588 308.637 431.081 305.92 454.371C305.462 458.221 304.945 462.063 304.423 465.905C304.265 467.09 304.106 468.275 303.943 469.495C303.833 470.311 303.724 471.127 303.611 471.968C297.096 471.369 290.639 470.593 284.173 469.593C283.311 469.46 282.448 469.328 281.559 469.192C279.775 468.918 277.991 468.643 276.207 468.366C273.784 467.994 271.36 467.635 268.935 467.28C256.924 465.493 245.063 463.119 233.202 460.521C231.016 460.054 228.83 459.627 226.63 459.226C221.124 458.118 217.359 457.031 214.029 452.343C213.561 451.559 213.093 450.775 212.611 449.968C211.677 448.421 211.677 448.421 210.724 446.843C205.491 437.77 201.822 428.22 198.427 418.338C197.652 416.086 196.854 413.843 196.052 411.601C192.333 401.019 189.543 390.264 186.908 379.366C186.574 377.989 186.574 377.989 186.234 376.584C185.832 374.897 185.442 373.208 185.066 371.516C184.64 369.652 184.134 367.807 183.611 365.968C182.951 365.638 182.291 365.308 181.611 364.968C186.035 392.864 194.095 421.092 207.611 445.968C208.085 446.904 208.56 447.839 209.048 448.804C211.79 454.098 214.477 457.551 220.099 460.093C230.363 463.273 240.873 464.833 251.479 466.437C254.102 466.881 256.693 467.39 259.298 467.927C264.638 469.006 269.997 469.805 275.392 470.554C276.898 470.767 276.898 470.767 278.435 470.984C281.66 471.439 284.885 471.891 288.111 472.343C292.53 472.966 296.95 473.591 301.369 474.218C302.442 474.37 303.516 474.522 304.622 474.679C313.724 475.973 322.812 477.342 331.886 478.813C337.346 479.683 342.771 480.296 348.285 480.708C350.611 480.968 350.611 480.968 353.611 481.968C353.611 496.818 353.611 511.668 353.611 526.968C314.821 527.057 276.029 527.136 237.241 526.704C234.166 526.67 231.091 526.643 228.016 526.622C224.404 526.596 220.792 526.556 217.179 526.505C215.249 526.48 213.318 526.47 211.387 526.46C195.593 526.191 184.043 519.657 172.611 508.968C165.362 501.451 159.059 493.14 153.087 484.59C151.974 483.016 150.798 481.487 149.611 479.968C148.951 479.968 148.291 479.968 147.611 479.968C147.941 480.566 148.271 481.164 148.611 481.78C149.611 483.968 149.611 483.968 149.611 486.968C150.271 486.968 150.931 486.968 151.611 486.968C153.173 488.853 154.621 490.734 156.048 492.718C156.444 493.257 156.839 493.795 157.246 494.351C158.372 495.887 159.491 497.427 160.611 498.968C161.2 499.715 161.789 500.463 162.396 501.233C163.611 502.968 163.611 502.968 163.611 504.968C164.168 505.174 164.725 505.38 165.298 505.593C168.471 507.479 170.288 510.123 172.611 512.968C173.94 513.974 175.272 514.976 176.611 515.968C176.611 516.628 176.611 517.288 176.611 517.968C177.341 518.237 178.07 518.507 178.822 518.784C182.346 520.28 185.348 522.313 188.525 524.433C196.373 528.337 204.464 529.414 213.131 529.4C214.118 529.41 215.105 529.421 216.121 529.431C219.341 529.461 222.56 529.47 225.779 529.479C228.028 529.496 230.276 529.514 232.525 529.534C238.412 529.581 244.299 529.611 250.186 529.637C256.206 529.667 262.226 529.714 268.246 529.759C280.034 529.845 291.822 529.912 303.611 529.968C303.535 531.584 303.436 533.199 303.325 534.814C303.246 536.163 303.246 536.163 303.165 537.54C302.611 539.968 302.611 539.968 300.989 541.47C298.901 542.582 296.88 543.298 294.611 543.968C293.831 544.203 293.051 544.437 292.247 544.679C289.673 545.379 287.094 545.969 284.486 546.53C283.537 546.74 282.587 546.95 281.609 547.166C263.551 551.023 245.124 553.094 226.662 553.171C225.565 553.177 224.468 553.182 223.338 553.188C221.033 553.198 218.728 553.204 216.423 553.208C212.949 553.218 209.477 553.249 206.004 553.28C193.53 553.34 181.773 552.815 169.611 549.968C168.704 549.764 167.797 549.559 166.862 549.349C164.755 548.842 162.686 548.279 160.611 547.655C159.909 547.446 159.208 547.236 158.485 547.021C150.836 544.6 143.975 540.95 139.611 533.968C137.079 528.256 137.307 522.659 137.361 516.53C137.366 515.457 137.37 514.384 137.375 513.278C137.483 503.733 138.619 494.573 140.283 485.171C141.775 473.732 138.307 466.244 132.867 456.275C130.951 452.755 129.155 449.176 127.361 445.593C127.031 444.941 126.7 444.289 126.36 443.618C123.796 438.502 121.665 433.284 119.693 427.909C118.714 425.247 117.649 422.644 116.548 420.03C114.071 413.813 112.248 407.451 110.611 400.968C110.425 400.249 110.238 399.53 110.046 398.789C105.297 379.949 104.269 359.8 109.611 340.968C110.063 339.357 110.063 339.357 110.525 337.714C112.5 331.299 115.137 325.691 118.611 319.968C119.063 319.167 119.516 318.367 119.982 317.542C134.442 292.346 156.774 276.724 183.611 266.968C185.259 266.286 186.905 265.599 188.548 264.905C205.28 258.191 205.28 258.191 210.611 259.968C209.951 260.917 209.291 261.865 208.611 262.843C206.431 265.63 206.431 265.63 206.611 267.968C225.459 276.037 242.029 279.267 262.611 278.968C262.727 278.372 262.843 277.777 262.962 277.164C263.488 274.473 264.018 271.783 264.548 269.093C264.822 267.687 264.822 267.687 265.101 266.253C265.278 265.357 265.456 264.461 265.638 263.538C265.801 262.711 265.963 261.883 266.13 261.031C266.611 258.968 266.611 258.968 267.611 256.968C275.735 257.794 275.735 257.794 279.189 258.479C303.082 263.082 324.439 254.968 347.611 254.968Z" fill="#FEFEFE" />
                            <path d="M502.582 121.201C505.957 122.477 508.442 124.982 511.111 127.343C517.416 133.614 517.416 133.614 525.423 135.968C530.609 135.225 535.495 133.441 540.382 131.608C543.876 130.341 546.123 129.528 549.611 130.968C550.951 132.67 550.951 132.67 552.119 134.862C552.763 136.049 552.763 136.049 553.419 137.259C553.854 138.091 554.288 138.923 554.736 139.78C555.178 140.601 555.62 141.421 556.076 142.267C559.462 148.574 559.462 148.574 560.449 151.186C561.475 153.185 561.475 153.185 563.778 153.59C564.657 153.646 565.537 153.703 566.443 153.761C567.406 153.834 568.37 153.906 569.363 153.981C570.373 154.039 571.383 154.096 572.423 154.155C574.409 154.292 576.395 154.432 578.38 154.573C579.263 154.626 580.146 154.679 581.055 154.734C583.63 154.969 586.087 155.416 588.611 155.968C588.619 156.724 588.627 157.48 588.636 158.259C588.702 161.707 588.843 165.147 588.986 168.593C588.997 169.783 589.009 170.972 589.021 172.198C589.233 178.763 589.233 178.763 592.713 184.026C595.287 185.587 597.833 186.812 600.611 187.968C601.804 188.58 602.994 189.2 604.177 189.831C605.166 190.309 606.155 190.787 607.173 191.28C612.517 193.874 612.517 193.874 613.611 194.968C613.36 201.232 611.452 206.778 609.251 212.599C607.824 216.549 607.413 218.955 608.611 222.968C609.984 225.104 609.984 225.104 611.771 227.069C612.399 227.807 613.028 228.544 613.675 229.304C614.335 230.059 614.994 230.814 615.673 231.593C616.983 233.1 618.287 234.613 619.583 236.132C620.164 236.796 620.744 237.461 621.342 238.146C622.611 239.968 622.611 239.968 622.611 242.968C621.001 245.237 621.001 245.237 618.861 247.78C616.488 250.643 614.208 253.439 612.236 256.593C611.7 257.376 611.163 258.16 610.611 258.968C609.951 258.968 609.291 258.968 608.611 258.968C607.613 262.765 607.667 265.171 608.826 268.909C609.237 270.279 609.237 270.279 609.656 271.677C609.95 272.618 610.245 273.56 610.548 274.53C611.125 276.405 611.697 278.281 612.263 280.159C612.521 280.986 612.779 281.813 613.044 282.665C613.611 284.968 613.611 284.968 613.611 288.968C610.346 290.811 607.073 292.641 603.798 294.468C602.87 294.992 601.941 295.517 600.984 296.058C600.091 296.554 599.199 297.05 598.279 297.561C597.046 298.253 597.046 298.253 595.787 298.958C593.611 299.968 593.611 299.968 590.611 299.968C590.642 301.546 590.642 301.546 590.673 303.155C590.611 306.968 590.611 306.968 590.142 309.218C589.465 312.723 589.256 316.224 589.048 319.78C588.984 320.82 588.984 320.82 588.917 321.88C588.812 323.576 588.711 325.272 588.611 326.968C586.136 327.958 586.136 327.958 583.611 328.968C588.622 340.278 593.73 351.457 599.634 362.332C601.926 366.584 603.848 370.822 605.541 375.351C606.948 378.793 608.617 382.091 610.298 385.405C614.547 393.783 618.583 402.252 622.568 410.758C623.547 412.832 624.544 414.895 625.548 416.956C626.105 418.115 626.662 419.274 627.236 420.468C627.723 421.468 628.21 422.468 628.712 423.499C629.611 425.968 629.611 425.968 628.611 428.968C622.508 427.769 616.841 426.089 611.048 423.843C600.419 419.819 589.649 416.251 578.853 412.705C577.104 412.13 575.357 411.55 573.611 410.968C572.59 412.607 572.59 412.607 571.548 414.28C566.933 421.657 562.279 428.997 557.423 436.218C555.359 439.295 553.332 442.345 551.548 445.593C548.881 450.238 546.004 454.814 542.611 458.968C541.951 458.968 541.291 458.968 540.611 458.968C537.457 451.212 535.264 443.272 533.102 435.197C531.037 427.493 528.876 419.821 526.673 412.155C524.049 403.02 521.466 393.876 518.923 384.718C516.334 375.407 513.585 366.163 510.611 356.968C506.651 359.938 506.651 359.938 502.611 362.968C499.202 360.721 495.863 358.435 492.611 355.968C492.536 356.628 492.461 357.288 492.384 357.968C490.964 368.665 488.202 378.984 485.52 389.42C483.862 395.889 482.235 402.366 480.611 408.843C480.442 409.516 480.272 410.189 480.098 410.883C477.425 421.526 474.892 432.196 472.513 442.911C472.29 443.903 472.067 444.895 471.837 445.917C471.647 446.776 471.457 447.636 471.262 448.521C470.574 451.107 469.652 453.505 468.611 455.968C461.672 453.655 458.53 445.038 455.337 439.046C453.437 435.657 451.363 432.404 449.236 429.155C444.72 422.256 440.642 415.16 436.611 407.968C428.187 410.051 419.936 412.444 411.72 415.237C410.875 415.525 410.03 415.812 409.159 416.108C405.662 417.301 402.168 418.501 398.676 419.709C396.089 420.601 393.499 421.482 390.908 422.362C390.117 422.639 389.327 422.916 388.512 423.202C382.951 425.081 382.951 425.081 379.611 423.968C381.397 418.234 383.503 412.87 386.033 407.429C388.085 402.928 390.039 398.389 391.986 393.843C392.374 392.936 392.763 392.029 393.163 391.094C395.609 385.362 398.004 379.612 400.361 373.843C402.961 367.478 405.711 361.203 408.611 354.968C412.723 346.016 416.679 336.999 420.611 327.968C419.291 327.968 417.971 327.968 416.611 327.968C415.593 324.914 415.505 322.83 415.498 319.636C415.766 308.156 415.766 308.156 411.197 298.261C408.035 296.778 404.982 295.869 401.611 294.968C399.499 293.898 397.413 292.774 395.361 291.593C394.448 291.09 393.536 290.587 392.595 290.069C391.94 289.706 391.286 289.342 390.611 288.968C391.319 282.726 393.014 277.062 394.97 271.108C396.725 265.566 396.725 265.566 395.611 259.968C393.786 257.523 393.786 257.523 391.548 255.28C387.611 251.163 387.611 251.163 387.611 248.968C386.951 248.968 386.291 248.968 385.611 248.968C381.522 243.828 381.522 243.828 381.816 240.981C382.729 238.668 383.82 237.32 385.517 235.507C386.096 234.87 386.675 234.233 387.271 233.577C388.494 232.258 389.72 230.943 390.951 229.632C395.56 224.573 395.56 224.573 396.611 217.968C395.82 214.518 394.743 211.194 393.611 207.843C393.018 206.072 392.434 204.299 391.861 202.522C391.598 201.744 391.335 200.965 391.064 200.163C390.536 197.606 390.514 196.344 391.611 193.968C393.636 192.551 393.636 192.551 396.267 191.276C397.207 190.806 398.147 190.337 399.115 189.852C400.598 189.136 400.598 189.136 402.111 188.405C404.063 187.455 406.011 186.495 407.955 185.526C408.823 185.107 409.691 184.687 410.585 184.255C412.929 183.064 412.929 183.064 413.611 179.968C413.813 178.293 413.975 176.614 414.111 174.933C414.193 173.959 414.276 172.985 414.361 171.981C414.528 169.927 414.694 167.872 414.861 165.817C414.943 164.845 415.026 163.872 415.111 162.87C415.183 161.978 415.255 161.086 415.33 160.167C415.611 157.968 415.611 157.968 416.611 155.968C419.638 155.37 419.638 155.37 423.548 154.905C424.225 154.821 424.901 154.736 425.598 154.649C430.275 154.076 434.953 153.657 439.658 153.409C442.278 152.817 442.961 152.108 444.611 149.968C446.003 147.525 447.328 145.091 448.611 142.593C450.836 138.309 453.072 134.078 455.611 129.968C462.49 131.148 468.941 132.963 475.533 135.261C479.069 136.073 481.14 136.012 484.611 134.968C487.247 133.111 487.247 133.111 489.611 130.718C490.469 129.911 491.328 129.104 492.212 128.272C493.004 127.512 493.795 126.751 494.611 125.968C499.961 120.891 499.961 120.891 502.582 121.201Z" fill="#955BAB" />
                            <path d="M554.021 176.71C559.678 181.653 564.978 187.051 569.611 192.968C570.108 193.593 570.606 194.218 571.119 194.862C584.958 213.81 587.478 238.184 583.994 260.862C581.236 274.554 574.033 287.77 564.611 297.968C563.777 298.882 562.943 299.796 562.083 300.737C546.247 317.346 526.877 325.718 504.033 326.362C481.524 326.67 463.833 320.552 446.611 305.968C445.996 305.499 445.381 305.029 444.747 304.546C428.865 292.132 420.458 271.581 417.861 252.155C417.753 250.761 417.67 249.365 417.611 247.968C417.571 247.145 417.531 246.323 417.49 245.476C416.959 223.939 423.911 202.883 438.611 186.968C439.394 186.116 440.178 185.264 440.986 184.386C448.459 176.597 456.67 170.255 466.611 165.968C467.589 165.545 468.568 165.122 469.576 164.686C497.455 153.283 530.614 157.267 554.021 176.71Z" fill="#FEFEFE" />
                            <path d="M952.736 656.655C953.527 656.855 954.319 657.055 955.134 657.261C957.559 657.953 959.958 658.705 962.361 659.468C976.268 663.667 991.04 663.751 1005.44 664.57C1016.15 665.187 1026.79 665.977 1037.43 667.378C1038.74 667.546 1038.74 667.546 1040.08 667.717C1046.13 668.563 1051.81 670.065 1057.61 671.968C1052.28 683.098 1041.43 690.771 1029.98 694.92C1025.9 696.295 1021.79 697.609 1017.68 698.917C1008.8 701.787 1000.75 705.432 992.611 709.968C991.704 710.463 991.704 710.463 990.778 710.968C959.434 728.085 924.107 753.857 905.611 784.968C905.121 785.768 904.631 786.569 904.126 787.394C898.06 797.357 892.301 807.428 887.173 817.905C885.428 821.325 883.538 824.649 881.611 827.968C878.615 833.134 875.853 838.37 873.228 843.733C871.685 846.819 870.077 849.858 868.445 852.896C864.388 860.449 860.614 868.088 856.998 875.86C854.428 881.345 851.676 886.701 848.798 892.03C846.092 897.047 843.683 901.986 841.689 907.335C839.953 911.574 837.834 915.616 835.761 919.698C832.209 926.711 828.894 933.826 825.611 940.968C818.438 940.329 811.772 938.505 804.861 936.53C803.738 936.218 802.615 935.905 801.458 935.583C792.414 933.028 792.414 933.028 788.611 930.968C789.275 923.946 790.928 917.338 792.736 910.53C793.204 908.748 793.204 908.748 793.681 906.93C796.568 896.004 799.587 885.116 802.68 874.247C803.677 870.735 804.666 867.22 805.654 863.706C808.722 852.835 811.801 842.009 815.49 831.331C816.469 828.394 817.341 825.448 818.175 822.467C820.773 813.211 823.911 804.154 827.111 795.093C827.344 794.427 827.578 793.761 827.818 793.075C830.424 785.656 833.207 778.394 836.548 771.27C837.831 768.491 838.894 765.662 839.923 762.78C842.669 755.518 846.087 748.671 849.666 741.792C850.495 740.191 851.303 738.578 852.107 736.964C862.004 717.702 878.386 702.659 895.611 689.968C896.29 689.46 896.969 688.953 897.668 688.43C912.634 677.262 928.283 667.042 944.611 657.968C945.29 657.564 945.97 657.161 946.669 656.745C949.083 655.779 950.239 656.006 952.736 656.655Z" fill="#FEFEFE" />
                            <path d="M597.913 81.8476C598.816 81.8462 599.719 81.8448 600.65 81.8434C602.14 81.8488 602.14 81.8488 603.66 81.8543C605.226 81.8541 605.226 81.8541 606.823 81.8539C610.286 81.8546 613.749 81.8624 617.212 81.8702C619.608 81.872 622.004 81.8735 624.401 81.8745C630.717 81.8783 637.033 81.8881 643.349 81.8992C649.791 81.9094 656.232 81.914 662.673 81.919C675.319 81.9297 687.965 81.9466 700.611 81.9678C700.105 89.1857 699.544 96.3524 698.454 103.507C698.294 104.605 698.294 104.605 698.13 105.726C697.794 108.016 697.453 110.304 697.111 112.593C695.705 122.037 694.305 131.438 693.611 140.968C698.247 143.311 702.399 143.251 707.468 143.227C708.791 143.232 708.791 143.232 710.141 143.237C713.049 143.246 715.957 143.24 718.865 143.233C720.888 143.235 722.912 143.237 724.935 143.239C729.173 143.242 733.41 143.238 737.648 143.229C743.081 143.217 748.513 143.224 753.946 143.236C758.123 143.243 762.3 143.241 766.477 143.235C768.481 143.234 770.484 143.236 772.488 143.24C775.286 143.246 778.084 143.238 780.882 143.227C781.711 143.231 782.54 143.235 783.394 143.239C788.837 143.262 788.837 143.262 793.611 140.968C796.158 135.632 796.43 129.528 797.111 123.718C797.889 117.178 798.804 110.754 800.156 104.308C800.978 100.078 801.386 95.8022 801.822 91.5186C802.23 87.8934 802.879 85.1604 804.611 81.9678C817.728 81.9216 830.845 81.886 843.962 81.8642C850.052 81.8538 856.142 81.8396 862.233 81.817C868.107 81.7953 873.981 81.7833 879.856 81.7781C882.1 81.7744 884.344 81.7671 886.589 81.7564C889.725 81.7419 892.862 81.7399 895.999 81.7408C896.932 81.7336 897.866 81.7264 898.828 81.719C900.109 81.7231 900.109 81.7231 901.416 81.7273C902.158 81.7255 902.9 81.7236 903.664 81.7217C905.611 81.9678 905.611 81.9678 908.611 83.9678C908.064 92.6427 906.854 101.057 905.236 109.593C905.027 110.743 904.818 111.893 904.603 113.077C902.799 122.736 900.847 131.892 895.673 140.343C895.094 141.293 895.094 141.293 894.503 142.263C885.165 156.929 871.266 167.049 854.611 171.968C842.544 174.216 830.472 174.25 818.242 174.211C816.248 174.212 814.254 174.214 812.259 174.217C806.892 174.221 801.525 174.214 796.157 174.204C790.517 174.195 784.877 174.197 779.236 174.197C769.774 174.196 760.312 174.187 750.85 174.174C739.931 174.158 729.012 174.153 718.093 174.153C706.43 174.154 694.766 174.147 683.103 174.138C679.757 174.136 676.411 174.135 673.065 174.135C667.799 174.134 662.534 174.128 657.268 174.118C655.342 174.115 653.417 174.113 651.491 174.114C631.806 174.118 615.888 173.687 600.861 159.343C600.118 158.559 599.376 157.775 598.611 156.968C597.967 156.376 597.324 155.784 596.662 155.175C594.356 152.694 593.037 150.318 591.548 147.28C591.062 146.307 590.576 145.334 590.076 144.331C586.908 137.057 585.094 130.812 585.236 122.843C585.247 121.61 585.247 121.61 585.258 120.352C585.43 112.629 586.877 105.491 588.611 97.9678C589.169 94.7692 589.681 91.5667 590.181 88.3585C590.611 85.9678 590.611 85.9678 591.611 82.9678C593.95 81.7982 595.307 81.8445 597.913 81.8476Z" fill="#FEFEFE" />
                            <path d="M1001.61 486.968C1003.61 489.968 1003.61 489.968 1004.74 492.405C1008.3 497.277 1013.8 499.027 1019.61 499.968C1030.23 501.159 1039.8 498.061 1048.36 491.718C1049.84 490.512 1051.26 489.316 1052.61 487.968C1056.63 488.059 1060.62 488.559 1064.61 488.968C1065.73 489.045 1066.84 489.122 1067.99 489.202C1082.01 490.543 1093.31 497.656 1103.61 506.968C1104.31 507.593 1105 508.218 1105.72 508.862C1112.44 515.251 1118.12 522.852 1122.61 530.968C1122.61 531.628 1122.61 532.288 1122.61 532.968C1096.43 540.787 1096.43 540.787 1085.05 543.968C1084.31 544.175 1083.58 544.382 1082.82 544.595C1077.86 545.968 1077.86 545.968 1075.61 545.968C1075.67 546.57 1075.72 547.173 1075.78 547.793C1078.09 573.1 1078.09 573.1 1078.5 584.513C1078.58 586.298 1078.69 588.081 1078.81 589.864C1080.02 607.606 1080.02 607.606 1076.98 612.702C1074.29 614.692 1071.74 615.768 1068.61 616.968C1067.28 617.626 1065.97 618.299 1064.65 618.983C1055.92 623.466 1047.18 626.678 1037.61 628.968C1036.37 629.358 1035.13 629.749 1033.85 630.151C1024.26 632.904 1018.12 631.469 1009.34 626.703C1005.05 624.442 1005.05 624.442 1000.32 624.26C997.98 625.011 995.827 625.915 993.611 626.968C992.605 627.407 992.605 627.407 991.578 627.855C989.652 628.71 987.756 629.61 985.861 630.53C981.822 632.467 977.796 634.362 973.611 635.968C970.912 633.673 969.454 630.962 967.735 627.905C965.916 624.77 963.889 621.782 961.861 618.78C961.428 618.135 960.994 617.489 960.548 616.824C959.238 614.87 957.924 612.919 956.611 610.968C955.129 608.761 953.651 606.552 952.173 604.343C951.556 603.422 950.938 602.502 950.302 601.554C948.672 599.061 947.137 596.526 945.611 593.968C945.033 593.122 944.456 592.277 943.861 591.405C942.611 588.968 942.611 588.968 942.892 587.194C945.454 579.259 948.716 571.6 952.228 564.046C953.946 560.222 955.53 556.35 957.111 552.468C959.387 546.883 961.762 541.372 964.302 535.901C965.651 532.878 966.904 529.827 968.146 526.759C974.624 510.763 980.398 497.034 996.611 488.968C998.269 488.281 999.934 487.608 1001.61 486.968Z" fill="#FEFEFE" />
                            <path d="M802.076 337.632C802.905 337.625 803.735 337.618 804.59 337.612C806.344 337.602 808.099 337.597 809.853 337.597C812.535 337.593 815.216 337.556 817.898 337.519C819.603 337.513 821.308 337.509 823.013 337.507C824.215 337.485 824.215 337.485 825.441 337.463C829.008 337.492 831.168 337.647 834.096 339.768C838.13 345.625 836.437 352.968 835.298 359.53C835.011 361.3 834.724 363.069 834.439 364.839C834.225 366.14 834.225 366.14 834.007 367.467C833.273 372.101 832.713 376.757 832.138 381.413C831.732 384.154 831.243 386.814 830.677 389.522C829.36 395.962 828.501 402.458 827.611 408.968C826.629 416.148 825.595 423.264 824.111 430.358C823.057 435.858 822.369 441.421 821.611 446.968C820.629 454.148 819.595 461.264 818.111 468.358C817.057 473.858 816.369 479.421 815.611 484.968C814.609 492.294 813.564 499.566 812.048 506.805C811.233 510.836 810.729 514.914 810.173 518.987C809.627 521.883 808.796 524.279 807.611 526.968C806.306 529.964 806.306 529.964 805.611 532.968C805.941 533.597 806.271 534.227 806.611 534.876C807.867 537.503 807.557 538.587 806.853 541.378C805.938 545.378 805.23 549.334 804.681 553.401C804.528 554.536 804.375 555.671 804.217 556.84C804.058 558.017 803.899 559.193 803.736 560.405C802.54 568.913 801.322 577.409 799.673 585.843C799.54 586.59 799.407 587.337 799.27 588.106C798.163 593.445 796.176 596.051 792.611 599.968C792.332 600.713 792.054 601.458 791.767 602.226C790.112 604.72 788.07 604.858 785.253 605.436C784.546 605.57 783.839 605.704 783.111 605.843C770.927 608.531 759.613 615.345 752.611 625.968C746.17 637.877 744.362 650.546 742.7 663.809C742.587 664.677 742.474 665.546 742.357 666.44C742.261 667.216 742.165 667.993 742.066 668.792C741.581 671.112 740.757 672.903 739.611 674.968C738.621 674.968 737.631 674.968 736.611 674.968C737.178 670.379 737.75 665.792 738.329 661.205C738.51 659.769 738.69 658.334 738.87 656.899C739.113 654.963 739.362 653.028 739.611 651.093C739.755 649.961 739.9 648.829 740.048 647.663C740.473 644.872 740.972 642.157 741.548 639.397C742.864 632.963 743.721 626.472 744.611 619.968C745.593 612.788 746.627 605.671 748.111 598.577C749.165 593.077 749.852 587.515 750.611 581.968C751.593 574.788 752.627 567.671 754.111 560.577C755.165 555.077 755.852 549.515 756.611 543.968C757.593 536.788 758.627 529.671 760.111 522.577C761.165 517.077 761.852 511.515 762.611 505.968C763.593 498.788 764.627 491.671 766.111 484.577C767.165 479.077 767.852 473.515 768.611 467.968C769.593 460.788 770.627 453.671 772.111 446.577C773.165 441.077 773.852 435.515 774.611 429.968C775.593 422.788 776.627 415.671 778.111 408.577C779.165 403.077 779.852 397.515 780.611 391.968C781.605 384.698 782.642 377.484 784.146 370.3C785.087 365.576 785.717 360.795 786.378 356.024C787.192 350.561 788.171 344.967 790.611 339.968C794.446 337.411 797.627 337.644 802.076 337.632Z" fill="#FDFDFD" />
                            <path d="M702.947 434.73C703.663 434.721 704.38 434.713 705.118 434.705C706.632 434.691 708.147 434.68 709.662 434.673C711.208 434.661 712.754 434.641 714.299 434.611C716.536 434.568 718.772 434.552 721.009 434.542C721.696 434.524 722.383 434.507 723.09 434.489C727.887 434.511 730.246 435.586 733.611 438.968C735.916 442.426 735.778 443.171 735.361 447.155C735.251 448.219 735.142 449.282 735.029 450.378C734.891 451.563 734.753 452.747 734.611 453.968C734.538 454.616 734.465 455.264 734.391 455.932C733.692 462.13 732.987 468.288 731.697 474.394C730.008 482.618 729.008 490.967 727.864 499.281C726.647 508.091 725.311 516.855 723.724 525.606C722.302 533.529 721.207 541.494 720.111 549.468C718.916 558.153 717.679 566.813 716.115 575.44C714.521 584.231 713.266 593.056 712.048 601.905C709.697 618.973 709.697 618.973 708.033 626.841C707.366 630.201 706.995 633.564 706.611 636.968C706.004 642.136 705.21 647.195 704.111 652.28C703.323 656.516 702.867 660.793 702.363 665.07C701.807 669.679 701.032 674.176 700.048 678.71C699.576 681.146 699.296 683.561 699.048 686.03C698.611 689.968 698.611 689.968 697.611 690.968C694.845 691.116 692.101 691.203 689.333 691.249C688.493 691.267 687.652 691.286 686.786 691.305C684.082 691.364 681.378 691.416 678.673 691.468C663.61 691.69 663.61 691.69 648.611 692.968C650.426 676.318 650.426 676.318 652.111 668.62C652.777 665.089 653.19 661.534 653.611 657.968C654.221 652.8 655.011 647.741 656.111 642.655C656.77 639.112 657.188 635.546 657.611 631.968C658.221 626.8 659.011 621.741 660.111 616.655C661.007 611.837 661.499 606.96 662.048 602.093C662.407 599.202 662.918 596.384 663.521 593.534C665.217 585.314 666.214 576.966 667.358 568.655C668.575 559.845 669.911 551.08 671.498 542.329C672.919 534.406 674.014 526.441 675.111 518.468C676.305 509.782 677.544 501.122 679.111 492.495C680.167 486.679 681.091 480.86 681.892 475.003C681.994 474.263 682.095 473.523 682.2 472.76C682.61 469.755 683.016 466.749 683.413 463.742C686.448 440.885 686.448 440.885 690.523 437.273C694.553 434.754 698.35 434.779 702.947 434.73Z" fill="#FDFDFD" />
                            <path d="M789.611 16.9677C798.62 25.5325 803.969 36.5283 804.611 48.9677C804.621 57.5093 804.092 66.0192 802.146 74.3505C801.427 77.865 801.027 81.4077 800.611 84.9677C800.095 89.3378 799.541 93.6632 798.611 97.9677C797.724 102.076 797.211 106.167 796.736 110.343C795.974 116.928 794.845 123.405 793.548 129.905C793.374 130.788 793.199 131.671 793.019 132.581C791.74 138.838 791.74 138.838 790.611 139.968C787.761 140.074 784.935 140.115 782.084 140.113C781.189 140.116 780.295 140.12 779.374 140.123C776.402 140.133 773.43 140.135 770.458 140.136C768.402 140.139 766.346 140.142 764.289 140.146C759.972 140.152 755.655 140.154 751.339 140.153C745.795 140.153 740.252 140.167 734.709 140.184C730.46 140.195 726.211 140.197 721.962 140.196C719.918 140.198 717.874 140.202 715.83 140.21C712.975 140.22 710.122 140.217 707.267 140.211C705.99 140.219 705.99 140.219 704.687 140.228C698.839 140.196 698.839 140.196 696.611 137.968C696.295 132.488 696.893 127.442 697.955 122.061C699.06 116.138 700.058 110.217 700.892 104.249C700.993 103.526 701.095 102.804 701.199 102.059C701.505 99.8622 701.809 97.6651 702.111 95.4677C703.428 85.8916 704.846 76.3561 706.562 66.8426C707.651 60.8069 708.586 54.7572 709.427 48.6826C711.499 34.8021 717.301 23.5898 727.611 13.9677C746.795 -0.168032 771.907 0.630913 789.611 16.9677Z" fill="#FEFEFE" />
                            <path d="M613.295 508.618C615.042 508.601 616.789 508.574 618.535 508.536C621.057 508.481 623.577 508.459 626.099 508.444C626.876 508.422 627.654 508.399 628.454 508.376C632.469 508.391 634.385 508.796 637.616 511.252C642.452 517.835 638.934 528.897 637.798 536.468C637.524 538.344 637.524 538.344 637.244 540.259C636.098 547.994 634.807 555.684 633.392 563.374C632.103 570.677 631.148 578.037 630.144 585.384C629.27 591.69 628.279 597.958 627.146 604.222C625.545 613.085 624.276 621.984 623.048 630.905C620.754 647.56 620.754 647.56 619.615 652.94C618.042 660.376 617.148 667.942 616.111 675.468C613.682 693.088 613.682 693.088 612.049 700.776C611.441 703.816 611.04 706.874 610.623 709.944C609.344 719.153 607.829 728.716 602.514 736.593C599.551 738.734 596.397 738.436 592.873 738.436C592.114 738.444 591.356 738.452 590.574 738.46C588.97 738.47 587.365 738.473 585.76 738.469C583.317 738.468 580.876 738.509 578.433 738.554C576.871 738.559 575.309 738.562 573.748 738.561C573.022 738.578 572.297 738.594 571.55 738.611C567.709 738.559 565.159 738.001 562.169 735.665C559.381 732.725 558.623 730.851 558.439 726.815C558.69 722.655 559.419 718.615 560.21 714.525C561.81 706.246 562.936 697.909 564.076 689.556C564.952 683.249 565.942 676.979 567.076 670.714C568.676 661.85 569.945 652.952 571.173 644.03C573.467 627.375 573.467 627.375 574.607 621.995C576.18 614.559 577.073 606.993 578.111 599.468C580.471 582.346 580.471 582.346 582.097 574.673C583.367 567.986 584.182 561.209 585.111 554.468C587.564 536.669 587.564 536.669 589.2 528.976C589.764 526.22 590.116 523.443 590.486 520.655C591.225 516.09 592.071 513.176 595.611 509.968C600.468 507.539 607.894 508.655 613.295 508.618Z" fill="#FDFDFD" />
                            <path d="M509.798 581.437C510.578 581.433 511.358 581.429 512.162 581.425C513.806 581.422 515.45 581.43 517.094 581.446C519.603 581.468 522.11 581.446 524.619 581.421C526.22 581.424 527.822 581.429 529.423 581.437C530.169 581.428 530.915 581.42 531.684 581.412C536.605 581.5 539.162 582.45 542.611 585.968C546.833 594.413 542.491 608.815 540.665 617.562C539.354 623.988 538.499 630.472 537.611 636.968C536.629 644.148 535.594 651.264 534.111 658.358C533.057 663.858 532.369 669.421 531.611 674.968C530.627 682.162 529.601 689.3 528.115 696.408C527.087 701.627 526.341 706.896 525.548 712.155C525.375 713.292 525.201 714.428 525.023 715.599C524.855 716.704 524.686 717.809 524.513 718.948C524.353 719.997 524.192 721.045 524.027 722.125C523.687 724.445 523.404 726.76 523.138 729.089C522.419 733.014 520.66 734.499 517.611 736.968C512.299 738.738 506.551 738.154 500.987 738.153C498.751 738.155 496.515 738.173 494.279 738.192C492.85 738.195 491.422 738.197 489.994 738.198C488.051 738.204 488.051 738.204 486.068 738.211C481.815 737.912 478.877 737.22 475.818 734.194C474.302 731.398 474.244 729.515 474.298 726.343C474.302 725.381 474.306 724.419 474.31 723.429C474.625 719.807 475.305 716.398 476.051 712.845C477.138 707.257 477.84 701.607 478.611 695.968C479.593 688.788 480.627 681.671 482.111 674.577C483.165 669.077 483.852 663.515 484.611 657.968C486.451 644.513 486.451 644.513 487.583 639.175C488.511 634.739 489.173 630.279 489.794 625.792C489.897 625.054 489.999 624.316 490.104 623.555C490.527 620.488 490.945 617.421 491.358 614.353C492.386 606.744 493.461 599.145 494.958 591.612C495.156 590.612 495.353 589.611 495.556 588.58C498.241 581.929 503.287 581.366 509.798 581.437Z" fill="#FEFEFE" />
                            <path d="M575.173 328.905C576.653 328.921 578.132 328.94 579.611 328.968C580.061 329.928 580.511 330.888 580.974 331.878C585.431 341.377 589.939 350.851 594.471 360.314C597.729 367.117 600.967 373.931 604.19 380.751C607.205 387.125 610.251 393.484 613.298 399.843C617.137 407.854 620.932 415.881 624.611 423.968C619.937 423.063 615.607 422.066 611.216 420.218C605.131 417.735 598.949 415.546 592.741 413.393C590.782 412.712 588.826 412.019 586.871 411.327C585.611 410.889 584.351 410.451 583.091 410.015C581.966 409.621 580.841 409.228 579.682 408.822C576.759 408.009 574.614 407.568 571.611 407.968C569.765 410.126 568.381 412.065 566.923 414.468C566.284 415.475 566.284 415.475 565.631 416.502C564.274 418.647 562.942 420.806 561.611 422.968C560.737 424.359 559.862 425.75 558.986 427.14C555.801 432.201 552.637 437.274 549.533 442.386C548.919 443.382 548.306 444.379 547.673 445.405C547.149 446.27 546.624 447.135 546.084 448.026C544.611 449.968 544.611 449.968 541.611 450.968C534.884 428.022 528.186 405.074 522.06 381.96C520.087 374.57 517.896 367.291 515.459 360.042C514.644 357.088 514.16 354.994 514.611 351.968C516.956 348.587 519.669 347.03 523.611 345.968C528.784 346.484 533.659 348.441 538.502 350.237C541.82 351.386 545.194 352.168 548.611 352.968C549.489 351.386 550.363 349.802 551.236 348.218C551.789 347.225 552.342 346.233 552.912 345.21C554.657 341.991 554.657 341.991 556.029 338.601C559.494 330.506 559.494 330.506 562.638 328.991C566.776 328.482 571 328.97 575.173 328.905Z" fill="#FDFDFD" />
                            <path d="M423.611 328.968C425.257 328.94 426.902 328.921 428.548 328.905C429.923 328.888 429.923 328.888 431.326 328.87C432.41 328.902 433.494 328.935 434.611 328.968C435.678 328.89 435.678 328.89 436.767 328.81C439.392 328.785 441.173 328.969 443.611 329.968C446.491 333.267 448.282 336.977 450.173 340.905C450.971 342.447 450.971 342.447 451.785 344.02C455.611 351.52 455.611 351.52 455.611 353.968C456.734 353.558 457.856 353.148 459.013 352.726C462.847 351.336 466.696 349.998 470.556 348.682C472.191 348.114 473.812 347.503 475.427 346.878C477.72 346.119 479.208 345.691 481.611 345.968C485.009 347.91 487.806 350.25 490.611 352.968C487 369.907 487 369.907 484.673 377.78C481.181 389.665 478.543 401.775 475.841 413.858C475.688 414.543 475.535 415.227 475.377 415.932C474.616 419.33 473.859 422.73 473.11 426.132C471.541 433.173 469.826 440.1 467.611 446.968C466.621 446.968 465.631 446.968 464.611 446.968C463.04 444.91 461.698 442.921 460.361 440.718C459.965 440.083 459.568 439.448 459.16 438.795C456.107 433.874 453.191 428.874 450.302 423.854C446.326 417.069 442.013 410.483 437.611 403.968C426.6 406.392 416.027 410.048 405.361 413.655C403.537 414.268 401.713 414.881 399.888 415.493C395.461 416.98 391.035 418.472 386.611 419.968C385.378 416.27 385.929 415.737 387.611 412.343C389.911 407.525 391.99 402.666 393.986 397.718C396.405 391.763 398.998 385.934 401.77 380.134C405.089 373.099 408.02 365.901 410.971 358.706C413.373 352.868 415.888 347.101 418.522 341.365C419.733 338.698 420.856 336.007 421.923 333.28C422.249 332.451 422.576 331.623 422.912 330.769C423.142 330.174 423.373 329.58 423.611 328.968Z" fill="#FDFDFD" />
                            <path d="M922.986 654.593C924.897 654.623 926.809 654.65 928.72 654.675C933.352 654.74 937.981 654.843 942.611 654.968C941.375 657.439 940.481 657.712 938.048 658.968C908.092 675.138 874.703 697.191 855.611 725.968C854.955 726.941 854.299 727.914 853.623 728.917C848.33 737.108 844.427 745.675 840.627 754.63C839.514 757.192 838.334 759.718 837.154 762.249C834.454 768.163 832.26 774.211 830.111 780.343C829.331 782.542 828.55 784.742 827.767 786.94C827.212 788.501 827.212 788.501 826.646 790.093C825.011 794.634 823.268 799.127 821.486 803.612C820.703 805.72 820.101 807.776 819.611 809.968C818.951 809.968 818.291 809.968 817.611 809.968C817.369 809.218 817.126 808.467 816.877 807.694C816.541 806.671 816.206 805.647 815.861 804.593C815.374 803.096 815.374 803.096 814.877 801.569C813.893 798.771 812.846 796.048 811.728 793.304C809.424 787.597 807.434 781.804 805.486 775.968C804.966 774.444 804.966 774.444 804.435 772.89C798.851 756.202 797.882 742.38 805.072 725.983C811.878 712.647 823.036 703.08 834.611 693.968C835.622 693.163 836.632 692.359 837.673 691.53C849.539 682.168 861.761 674.223 875.173 667.218C876.189 666.687 877.206 666.156 878.252 665.609C880.303 664.558 882.365 663.528 884.437 662.519C886.566 661.478 888.672 660.39 890.753 659.256C901.405 653.91 911.307 654.269 922.986 654.593Z" fill="#FCFCFC" />
                            <path d="M217.611 1029.97C223.057 1033.83 228.05 1038.28 232.673 1043.09C240.118 1050.63 247.828 1054.6 257.639 1058.2C271.121 1063.27 283.945 1070.58 290.728 1083.76C292.043 1087.05 292.224 1089.49 291.611 1092.97C287.38 1098.42 281.238 1098.82 274.796 1099.72C267.926 1100.49 261.011 1100.31 254.111 1100.22C252.349 1100.2 250.587 1100.19 248.825 1100.18C244.094 1100.14 239.362 1100.08 234.631 1100.01C231.515 1099.97 228.399 1099.93 225.283 1099.9C219.95 1099.85 214.617 1099.78 209.285 1099.7C207.227 1099.67 205.17 1099.64 203.112 1099.62C200.217 1099.59 197.322 1099.54 194.427 1099.48C193.581 1099.47 192.735 1099.47 191.863 1099.46C184.891 1099.29 177.6 1098.34 172.013 1093.91C169.941 1089.56 170.06 1085.66 170.173 1080.91C170.185 1079.94 170.197 1078.98 170.209 1077.98C170.502 1065.41 172.429 1053.11 175.611 1040.97C181.114 1042.1 186.316 1043.46 191.568 1045.48C194.039 1046.07 195.273 1045.96 197.611 1044.97C199.14 1043.37 199.14 1043.37 200.423 1041.34C210.44 1027.23 210.44 1027.23 217.611 1029.97Z" fill="#FDFDFD" />
                            <path d="M421.497 637.673C423.022 637.661 424.548 637.641 426.073 637.611C442.059 637.301 442.059 637.301 448.611 641.968C450.302 643.827 450.302 643.827 451.173 645.718C451.484 646.331 451.795 646.945 452.115 647.577C452.847 651.108 452.106 654.433 451.611 657.968C451.459 659.077 451.308 660.186 451.152 661.329C450.045 669.402 448.911 677.471 447.773 685.539C447.195 689.632 446.621 693.726 446.055 697.821C445.503 701.806 444.944 705.79 444.378 709.773C444.166 711.28 443.956 712.788 443.749 714.297C440.944 734.736 440.944 734.736 435.966 739.497C431.772 741.335 428.451 741.546 423.923 741.499C423.103 741.503 422.282 741.507 421.436 741.511C419.708 741.513 417.98 741.506 416.252 741.489C413.618 741.468 410.987 741.489 408.353 741.515C406.668 741.512 404.983 741.507 403.298 741.499C402.517 741.507 401.736 741.515 400.93 741.524C395.742 741.435 392.633 740.529 388.611 736.968C385.93 732.571 385.28 729.707 385.789 724.608C385.909 723.378 386.028 722.148 386.151 720.88C386.943 714.147 387.801 707.429 388.755 700.718C388.86 699.977 388.964 699.236 389.072 698.473C389.622 694.568 390.178 690.664 390.739 686.761C391.314 682.751 391.871 678.738 392.423 674.725C392.854 671.612 393.299 668.502 393.749 665.392C393.96 663.913 394.166 662.433 394.367 660.953C394.648 658.886 394.949 656.824 395.255 654.761C395.42 653.591 395.586 652.42 395.757 651.215C397.154 645.902 399.91 641.849 404.611 638.968C410.003 637.171 415.849 637.702 421.497 637.673Z" fill="#FDFDFD" />
                            <path d="M278.236 180.968C279.635 181.258 281.035 181.547 282.435 181.835C285.829 182.536 289.221 183.248 292.611 183.968C292.79 184.621 292.969 185.274 293.153 185.947C294.588 190.984 296.132 195.395 298.861 199.905C300.501 202.62 300.501 202.62 301.611 204.968C301.116 206.453 301.116 206.453 300.611 207.968C299.644 208.298 298.677 208.628 297.681 208.968C294.482 210.61 294.482 210.61 293.809 213.218C293.26 216.129 292.842 219.026 292.486 221.968C292.228 223.97 291.955 225.97 291.666 227.968C291.557 228.855 291.449 229.742 291.337 230.655C290.404 233.628 289.295 234.451 286.611 235.968C283.181 236.534 279.826 236.867 276.367 237.14C272.449 237.451 272.449 237.451 268.981 239.121C267.083 241.679 266.682 244.026 266.041 247.14C265.784 248.362 265.527 249.584 265.263 250.843C265.007 252.122 264.75 253.4 264.486 254.718C264.222 255.981 263.957 257.244 263.685 258.546C262.486 264.341 261.407 270.102 260.611 275.968C244.134 276.425 225.379 275.211 210.611 266.968C212.251 262.257 214.767 258.278 217.423 254.093C218.062 253.07 218.062 253.07 218.714 252.026C220.815 248.689 222.973 245.43 225.298 242.245C231.25 234 232.523 224.906 233.611 214.968C235.096 214.473 235.096 214.473 236.611 213.968C236.241 208.732 236.241 208.732 234.486 203.905C233.104 200.845 233.994 198.176 234.611 194.968C240.852 193.622 240.852 193.622 244.486 195.28C246.611 196.968 246.611 196.968 247.611 198.968C248.931 198.968 250.251 198.968 251.611 198.968C251.248 195.16 250.728 193.133 248.486 189.968C246.611 186.968 246.611 186.968 246.548 183.78C247.611 180.968 247.611 180.968 249.548 179.093C258.735 175.718 269.002 179.005 278.236 180.968Z" fill="#FDFDFD" />
                            <path d="M795.611 632.968C805.269 632.867 814.926 632.82 824.585 632.841C829.07 632.849 833.554 632.839 838.039 632.786C842.371 632.736 846.701 632.735 851.033 632.767C852.682 632.771 854.332 632.757 855.981 632.725C868.866 632.495 868.866 632.495 873.179 636.136C876.544 640.794 878.258 645.442 879.611 650.968C881.319 653.271 882.254 653.894 885.091 654.479C885.985 654.537 886.878 654.595 887.798 654.655C888.699 654.721 889.6 654.787 890.529 654.854C891.216 654.892 891.903 654.929 892.611 654.968C889.524 657.604 886.238 659.131 882.571 660.77C874.34 664.453 866.529 668.598 858.861 673.343C858.06 673.835 857.259 674.327 856.433 674.834C855.631 675.34 854.828 675.845 854.001 676.366C853.148 676.902 852.295 677.437 851.416 677.989C849.241 679.523 847.428 681.013 845.491 682.808C834.258 692.813 823.668 692.295 809.173 691.655C806.978 691.6 804.782 691.55 802.585 691.505C797.258 691.385 791.935 691.202 786.611 690.968C787.228 682.327 788.237 673.789 789.486 665.218C789.662 663.997 789.839 662.775 790.02 661.517C793.623 636.944 793.623 636.944 795.611 632.968Z" fill="#FEFEFE" />
                            <path d="M42.2125 1016.77C45.012 1016.84 47.8115 1016.9 50.611 1016.97C51.931 1020.27 53.251 1023.57 54.611 1026.97C55.601 1026.97 56.591 1026.97 57.611 1026.97C58.271 1025.65 58.931 1024.33 59.611 1022.97C60.601 1022.97 61.591 1022.97 62.611 1022.97C63.3329 1030.53 64.0437 1038.08 64.7472 1045.64C64.9872 1048.21 65.2297 1050.77 65.4747 1053.34C67.8233 1077.95 67.8233 1077.95 68.0797 1086.93C68.1152 1088.01 68.1506 1089.09 68.1871 1090.2C67.3858 1094.05 65.635 1095.54 62.611 1097.97C58.8776 1099.63 54.51 1099.11 50.4782 1099.1C49.2903 1099.1 49.2903 1099.1 48.0785 1099.1C46.4025 1099.1 44.7265 1099.1 43.0504 1099.1C40.5159 1099.09 37.9815 1099.1 35.4469 1099.1C13.6101 1099.12 13.6101 1099.12 8.67347 1096.28C4.50965 1091.61 3.28472 1087.87 3.37683 1081.61C3.82597 1076.55 5.30431 1071.76 6.73597 1066.91C7.05509 1065.8 7.37421 1064.7 7.70301 1063.56C11.1708 1051.77 15.0905 1040.5 20.7985 1029.59C21.1316 1028.96 21.4647 1028.32 21.808 1027.66C23.5091 1024.54 24.5981 1022.98 27.611 1020.97C28.931 1023.28 30.251 1025.59 31.611 1027.97C34.1587 1026.69 34.4298 1025.58 35.611 1023.03C38.3849 1017.06 38.3849 1017.06 42.2125 1016.77Z" fill="#FCFCFC" />
                            <path d="M893.611 811.968C908.266 826.622 911.797 870.829 914.276 890.649C914.609 893.235 914.609 893.235 915.564 896.769C915.611 899.968 915.611 899.968 913.252 902.96C912.142 903.944 911.01 904.904 909.861 905.843C909.269 906.356 908.677 906.869 908.068 907.398C906.268 908.947 904.445 910.46 902.611 911.968C901.598 912.813 900.585 913.659 899.541 914.53C897.724 916.028 895.898 917.515 894.06 918.987C891.838 920.784 889.689 922.637 887.549 924.53C884.611 926.968 884.611 926.968 882.611 926.968C881.257 925.462 881.257 925.462 879.705 923.339C879.13 922.558 878.556 921.777 877.964 920.972C877.352 920.125 876.741 919.278 876.111 918.405C875.486 917.548 874.861 916.69 874.217 915.807C868.803 908.334 863.591 900.737 858.611 892.968C858.006 892.109 857.402 891.251 856.779 890.366C855.256 887.238 855.651 886.31 856.611 882.968C857.855 880.08 859.266 877.286 860.689 874.483C861.098 873.668 861.506 872.853 861.927 872.014C862.792 870.291 863.659 868.57 864.529 866.85C865.848 864.244 867.158 861.634 868.466 859.022C869.311 857.343 870.156 855.663 871.002 853.983C871.388 853.214 871.775 852.445 872.173 851.653C874.515 847.029 876.965 842.48 879.499 837.958C880.764 835.694 881.983 833.409 883.181 831.108C883.603 830.303 884.024 829.497 884.459 828.667C885.318 827.019 886.178 825.37 887.037 823.722C889.124 819.733 891.232 815.794 893.611 811.968Z" fill="#FDFDFD" />
                            <path d="M1116.61 538.968C1124.16 559.807 1124.56 580.593 1115.55 601.03C1108.79 613.753 1096.66 623.328 1083.61 628.968C1082.7 629.367 1081.79 629.767 1080.86 630.179C1064.94 636.753 1048.35 638.994 1031.26 639.635C1029.87 639.69 1028.48 639.752 1027.09 639.822C1019.91 640.18 1013.61 640.396 1006.86 637.658C1002.09 636.192 996.99 636.664 992.048 636.78C990.392 636.801 990.392 636.801 988.703 636.821C986.005 636.856 983.308 636.905 980.611 636.968C986.488 632.432 994.632 627.32 1002.21 626.784C1005.5 627.448 1008.13 628.706 1011.07 630.312C1019.38 634.698 1025.62 633.97 1034.61 631.968C1035.28 631.826 1035.95 631.685 1036.63 631.539C1055.69 627.435 1076.94 619.965 1088.36 603.058C1088.77 602.368 1089.19 601.678 1089.61 600.968C1090.02 600.288 1090.44 599.609 1090.86 598.909C1095.48 589.646 1095.36 577.165 1092.36 567.394C1090.58 562.312 1088.4 557.485 1085.91 552.706C1084.61 549.968 1084.61 549.968 1084.61 546.968C1091.43 544.838 1098.26 542.745 1105.11 540.718C1106.23 540.383 1107.36 540.047 1108.52 539.702C1111.36 539.028 1113.71 538.816 1116.61 538.968Z" fill="#FBFBFB" />
                            <path d="M372.611 441.968C378.525 444.066 385.076 446.665 388.611 451.968C390.218 452.378 391.825 452.787 393.435 453.187C397.101 454.503 400.167 456.748 403.376 458.921C407.016 461.224 410.758 463.25 414.547 465.295C419.976 468.259 425.32 471.37 430.673 474.468C432.333 475.425 432.333 475.425 434.027 476.401C439.878 479.781 445.703 483.198 451.481 486.699C453.524 487.916 455.587 489.078 457.673 490.218C462.895 493.088 468.016 496.124 473.144 499.156C476.532 501.159 479.921 503.154 483.341 505.101C484.96 506.025 484.96 506.025 486.611 506.968C487.56 507.504 488.508 508.04 489.486 508.593C491.611 509.968 491.611 509.968 492.611 511.968C492.052 514.132 492.052 514.132 491.173 516.593C490.886 517.41 490.598 518.227 490.302 519.069C490.074 519.696 489.846 520.322 489.611 520.968C492.137 518.605 493.499 517.303 494.611 513.968C498.936 515.626 501.705 518.839 504.861 522.093C505.415 522.656 505.969 523.219 506.541 523.8C507.902 525.185 509.257 526.576 510.611 527.968C497.476 531.972 480.114 522.735 468.611 516.968C467.925 516.627 467.24 516.286 466.534 515.934C463.859 514.601 461.186 513.265 458.528 511.898C454.474 509.828 450.378 508.027 446.156 506.326C439.957 503.803 435.254 501.473 431.154 496.003C424.263 486.913 412.555 479.041 401.611 475.968C397.465 475.598 395.252 475.628 391.548 477.593C388.611 478.968 388.611 478.968 385.423 478.343C382.611 476.968 382.611 476.968 381.236 475.468C379.071 473.469 376.834 473.249 374.017 472.64C369.327 471.33 364.987 469.076 360.611 466.968C362.071 462.054 364.156 457.807 366.611 453.343C369.695 447.699 369.695 447.699 372.611 441.968Z" fill="#F8F8F8" />
                            <path d="M405.423 479.968C416.525 484.617 428.923 494.937 435.611 504.968C436.236 508.155 436.236 508.155 435.611 510.968C433.064 513.151 431.309 513.885 427.986 514.28C425.611 513.968 425.611 513.968 422.611 511.968C422.405 512.813 422.198 513.659 421.986 514.53C419.7 520.245 416.24 524.421 410.798 527.405C402.898 530.461 393.141 530.451 385.126 527.827C380.496 525.594 376.517 522.966 372.548 519.718C367.871 516.044 367.871 516.044 357.611 514.968C357.611 507.048 357.611 499.128 357.611 490.968C361.942 490.411 361.942 490.411 366.361 489.843C373.898 488.764 379.751 487.034 386.361 483.175C388.611 481.968 388.611 481.968 391.611 481.968C391.611 481.308 391.611 480.648 391.611 479.968C396.011 477.768 400.866 478.772 405.423 479.968Z" fill="#FDFDFD" />
                            <path d="M749.553 886.848C750.404 886.85 751.254 886.852 752.131 886.854C753.572 886.854 753.572 886.854 755.042 886.854C756.61 886.862 756.61 886.862 758.208 886.87C759.272 886.872 760.336 886.873 761.433 886.874C764.846 886.88 768.26 886.893 771.673 886.905C773.981 886.91 776.289 886.915 778.597 886.919C784.268 886.93 789.94 886.947 795.611 886.968C794.391 893.3 793.031 899.569 791.447 905.819C791.25 906.604 791.053 907.389 790.85 908.198C790.231 910.663 789.608 913.128 788.986 915.593C788.561 917.282 788.137 918.97 787.712 920.659C786.681 924.763 785.647 928.865 784.611 932.968C785.601 933.298 786.591 933.628 787.611 933.968C786.951 935.948 786.291 937.928 785.611 939.968C779.721 940.042 773.831 940.096 767.941 940.133C765.938 940.148 763.935 940.168 761.932 940.194C759.05 940.231 756.169 940.248 753.287 940.261C752.394 940.276 751.501 940.292 750.581 940.308C745.764 940.309 742.51 940.133 738.611 936.968C735.918 932.867 735.989 928.704 736.611 923.968C737.668 919.83 738.896 915.77 740.169 911.694C741.993 905.835 743.493 899.896 744.998 893.949C746.778 887.019 746.778 887.019 749.553 886.848Z" fill="#FEFEFE" />
                            <path d="M1116.61 89.9678C1125.13 89.1757 1134.19 91.8515 1141.11 96.8428C1148.77 103.279 1153.46 110.248 1154.55 120.218C1154.95 128.83 1153.46 137.101 1152.01 145.564C1151.25 150.162 1150.71 154.788 1150.14 159.413C1149.73 162.154 1149.24 164.814 1148.68 167.522C1147.36 173.962 1146.5 180.458 1145.61 186.968C1144.62 194.223 1143.59 201.426 1142.09 208.596C1141.25 212.74 1140.63 216.916 1139.99 221.093C1139.85 221.954 1139.72 222.815 1139.58 223.702C1139.25 225.79 1138.93 227.879 1138.61 229.968C1134.05 229.968 1133.11 229.222 1129.55 226.593C1128.69 225.966 1127.83 225.34 1126.95 224.694C1125.79 223.84 1125.79 223.84 1124.61 222.968C1123.62 222.308 1122.63 221.648 1121.61 220.968C1121.73 218.676 1121.85 216.384 1121.99 214.093C1122.06 212.817 1122.13 211.54 1122.2 210.226C1122.5 206.323 1123.26 202.588 1124.07 198.762C1125.13 193.306 1125.8 187.786 1126.55 182.28C1127.75 173.641 1129.09 165.116 1130.88 156.581C1136.79 130.199 1136.79 130.199 1130.61 104.968C1126.88 99.1491 1126.88 99.1491 1121.61 94.9678C1121.61 94.3078 1121.61 93.6478 1121.61 92.9678C1120.97 92.844 1120.33 92.7203 1119.67 92.5928C1118.99 92.3865 1118.31 92.1803 1117.61 91.9678C1117.28 91.3078 1116.95 90.6478 1116.61 89.9678Z" fill="#FBFBFB" />
                            <path d="M821.693 593.268C823.552 593.234 825.41 593.18 827.268 593.103C842.679 592.475 842.679 592.475 847.299 596.045C849.111 598.617 850.388 601.075 851.611 603.968C852.638 605.538 852.638 605.538 853.685 607.14C854.217 607.99 854.75 608.841 855.298 609.718C857.074 612.542 858.86 615.334 860.736 618.093C862.352 620.571 863.8 623.059 865.228 625.647C865.675 626.457 866.122 627.266 866.583 628.1C867.092 629.025 867.092 629.025 867.611 629.968C858.553 630.014 849.495 630.05 840.437 630.071C836.232 630.082 832.026 630.096 827.82 630.119C823.761 630.14 819.702 630.152 815.643 630.158C814.094 630.161 812.546 630.168 810.997 630.179C808.828 630.194 806.66 630.196 804.491 630.195C802.639 630.201 802.639 630.201 800.749 630.208C797.743 629.978 796.085 629.637 793.611 627.968C790.708 623.406 791.822 619.021 792.611 613.968C792.781 612.463 792.781 612.463 792.955 610.929C793.795 604.418 794.617 600.381 799.611 595.968C806.218 592.472 814.415 593.363 821.693 593.268Z" fill="#FEFEFE" />
                            <path d="M1079.61 633.968C1079.83 644.29 1079.65 654.491 1078.74 664.78C1078.66 665.704 1078.58 666.628 1078.5 667.58C1078.05 672.309 1077.37 676.507 1075.61 680.968C1074.25 679.668 1074.25 679.668 1072.86 678.343C1055.63 663.818 1031.8 664.149 1010.47 662.505C1003.21 661.944 995.958 661.327 988.709 660.65C986.806 660.474 984.902 660.31 982.999 660.145C975.008 659.398 967.383 657.966 959.611 655.968C959.611 655.638 959.611 655.308 959.611 654.968C960.654 654.964 961.698 654.96 962.773 654.957C972.602 654.92 982.431 654.862 992.26 654.784C997.314 654.744 1002.37 654.712 1007.42 654.697C1012.3 654.682 1017.17 654.647 1022.05 654.599C1023.91 654.585 1025.77 654.577 1027.63 654.576C1030.24 654.574 1032.84 654.547 1035.45 654.514C1036.22 654.519 1036.99 654.524 1037.78 654.529C1041.18 654.463 1043.25 654.223 1046.06 652.246C1048 649.716 1048 649.716 1048.61 644.968C1025.51 644.968 1002.41 644.968 978.611 644.968C977.621 642.988 976.631 641.008 975.611 638.968C976.157 639.13 976.704 639.293 977.267 639.46C979.94 640.039 982.377 640.1 985.111 640.093C986.049 640.095 986.988 640.098 987.955 640.101C990.355 639.981 992.3 639.566 994.611 638.968C996.232 638.829 997.859 638.748 999.486 638.718C1000.31 638.692 1001.13 638.666 1001.98 638.64C1004.61 638.968 1004.61 638.968 1007.12 640.46C1012.52 642.79 1017.8 642.41 1023.61 642.343C1025.48 642.329 1025.48 642.329 1027.38 642.314C1043.92 642.049 1059.53 639.752 1075.35 634.956C1078.61 633.968 1078.61 633.968 1079.61 633.968Z" fill="#FDFDFD" />
                            <path d="M1002.61 132.968C1006.96 134.319 1008.63 135.993 1011.24 139.655C1014.15 143.145 1014.15 143.145 1018.36 144.37C1021.19 144.097 1023.85 143.631 1026.61 142.968C1032.4 141.83 1032.4 141.83 1035.61 143.968C1035.3 150.467 1034.16 154.483 1030.57 159.925C1029.44 161.884 1029.44 161.884 1029.79 163.89C1031.19 167.452 1032.99 170.815 1034.75 174.214C1035.61 176.968 1035.61 176.968 1035.01 179.753C1033.61 181.968 1033.61 181.968 1031.95 182.835C1028.64 183.023 1025.51 182.518 1022.24 182.093C1017.14 181.529 1017.14 181.529 1012.47 183.315C1011.01 185.128 1009.81 186.975 1008.61 188.968C1005.95 191.501 1004.55 192.815 1000.92 193.405C1000.16 193.261 999.397 193.117 998.611 192.968C996.446 189.721 996.5 188.146 996.435 184.369C996.35 177.909 996.35 177.909 993.167 172.601C990.16 170.722 987.029 169.514 983.701 168.327C980.611 166.968 980.611 166.968 979.427 165.046C979.611 162.968 979.611 162.968 981.197 160.921C983.767 158.842 986.32 157.274 989.236 155.718C990.197 155.197 991.159 154.676 992.15 154.14C994.611 152.968 994.611 152.968 996.611 152.968C996.648 152.339 996.686 151.71 996.724 151.062C997.22 144.601 997.813 137.766 1002.61 132.968Z" fill="#FFCA36" />
                            <path d="M940.009 159.495C942.611 159.968 942.611 159.968 944.4 162.409C945.006 163.439 945.612 164.469 946.236 165.53C949.269 169.61 949.269 169.61 953.864 171.375C958.187 171.488 962.391 171.032 966.673 170.476C967.973 170.308 969.272 170.14 970.611 169.968C971.611 170.968 971.611 170.968 971.896 173.655C971.464 178.674 968.79 181.857 966.044 185.968C964.314 189.588 964.49 191.166 965.611 194.968C966.574 197.085 966.574 197.085 967.736 198.968C969.327 201.961 969.616 202.864 969.423 206.405C968.611 208.968 968.611 208.968 967.611 209.968C964.152 210.193 961.349 210.163 957.982 209.272C952.505 207.696 952.505 207.696 947.267 209.253C945.217 211.054 943.397 212.906 941.611 214.968C938.093 218.887 938.093 218.887 934.986 219.405C934.202 219.261 933.418 219.117 932.611 218.968C929.697 214.597 930.169 210.374 929.955 205.218C929.85 201.823 929.85 201.823 927.611 198.968C924.55 197.358 921.421 195.974 918.263 194.565C915.611 192.968 915.611 192.968 914.619 190.933C914.611 188.968 914.611 188.968 916.548 186.468C920.496 183.245 924.805 180.782 929.724 179.354C932.824 177.076 933.015 173.555 933.736 169.968C935.775 160.33 935.775 160.33 940.009 159.495Z" fill="#FFCA36" />
                            <path d="M873.009 188.956C876.465 190.3 877.889 192.31 880.236 195.155C883.684 198.961 883.684 198.961 888.423 200.183C891.217 199.597 893.882 198.8 896.611 197.968C899.346 197.735 901.861 197.815 904.611 197.968C905.106 198.463 905.106 198.463 905.611 198.968C905.404 204.86 904.131 208.384 900.767 213.206C899.433 215.075 899.433 215.075 898.611 217.968C899.987 221.074 901.626 223.984 903.263 226.96C904.62 229.987 905.071 231.707 904.611 234.968C903.951 235.628 903.291 236.288 902.611 236.968C900.798 236.928 900.798 236.928 898.611 236.558C890.007 235.017 890.007 235.017 881.819 236.975C879.321 239.176 877.495 241.694 875.619 244.429C873.611 246.968 873.611 246.968 871.041 248.007C868.611 247.968 868.611 247.968 866.818 247.015C865.308 244.455 865.383 242.291 865.347 239.369C865.265 235.733 865.092 232.33 863.611 228.968C860.504 226.052 856.653 224.814 852.701 223.425C851.171 222.704 851.171 222.704 849.611 221.968C848.677 219.292 848.677 219.292 848.611 216.968C862.812 207.968 862.812 207.968 865.611 207.968C865.72 206.848 865.83 205.727 865.943 204.573C866.102 203.101 866.263 201.628 866.423 200.155C866.494 199.417 866.564 198.679 866.636 197.919C866.973 194.942 867.301 192.477 868.873 189.894C870.611 188.968 870.611 188.968 873.009 188.956Z" fill="#FFCA36" />
                            <path d="M810.88 221.593C814.761 222.126 815.815 224.013 818.298 226.968C821.704 230.671 821.704 230.671 826.166 232.667C828.728 232.655 831.085 232.395 833.611 231.968C835.319 231.798 837.027 231.631 838.736 231.468C840.015 231.303 841.293 231.138 842.611 230.968C844.611 233.968 844.611 233.968 844.462 236.339C843.156 240.373 840.592 243.253 838.009 246.565C836.416 248.79 836.416 248.79 836.736 250.937C838.241 254.43 839.94 257.817 841.65 261.214C842.728 264.303 842.542 265.877 841.611 268.968C835.538 270.061 830.921 269.399 824.923 268.28C820.427 268.263 817.883 270.962 814.798 273.905C813.884 274.822 812.97 275.738 812.029 276.683C809.611 278.968 809.611 278.968 806.611 279.968C804.47 279.073 804.47 279.073 802.611 276.968C801.967 274.083 801.914 271.228 801.861 268.28C801.831 267.483 801.802 266.686 801.771 265.864C801.7 263.899 801.653 261.934 801.611 259.968C800.698 259.753 800.698 259.753 799.768 259.533C797.167 258.851 794.907 257.823 792.486 256.655C791.617 256.247 790.748 255.838 789.853 255.417C787.386 253.823 786.639 252.676 785.611 249.968C789.946 244.735 795.315 242.35 801.611 239.968C802.271 239.968 802.931 239.968 803.611 239.968C803.648 239.411 803.686 238.854 803.724 238.28C805.079 222.551 805.079 222.551 810.88 221.593Z" fill="#FFCA36" />
                            <path d="M1099.61 719.968C1100.93 720.298 1102.25 720.628 1103.61 720.968C1103.84 768.511 1104.02 816.054 1104.12 863.598C1104.13 869.208 1104.15 874.818 1104.16 880.428C1104.16 881.545 1104.17 882.662 1104.17 883.813C1104.21 901.909 1104.29 920.004 1104.38 938.1C1104.48 956.662 1104.53 975.223 1104.55 993.785C1104.57 1005.24 1104.61 1016.7 1104.69 1028.16C1104.74 1036.01 1104.76 1043.86 1104.75 1051.71C1104.74 1056.25 1104.75 1060.78 1104.8 1065.31C1104.85 1069.46 1104.85 1073.61 1104.82 1077.76C1104.82 1079.26 1104.83 1080.77 1104.86 1082.27C1104.95 1086.68 1104.9 1090.73 1103.61 1094.97C1100.63 1097.97 1097.49 1099.4 1093.61 1100.97C1092.01 1101.86 1090.42 1102.78 1088.85 1103.72C1087.21 1104.66 1085.57 1105.6 1083.92 1106.53C1083.03 1107.04 1082.14 1107.55 1081.22 1108.07C1073.41 1112.52 1065.59 1116.95 1057.75 1121.36C1053.52 1123.74 1049.3 1126.14 1045.12 1128.6C1044.46 1128.99 1043.81 1129.37 1043.13 1129.77C1041.44 1130.76 1039.75 1131.77 1038.06 1132.77C1037.25 1133.17 1036.44 1133.56 1035.61 1133.97C1034.95 1133.64 1034.29 1133.31 1033.61 1132.97C1033.81 1131.12 1033.81 1131.12 1034.61 1128.97C1036.6 1127.69 1036.6 1127.69 1039.36 1126.47C1045.15 1123.74 1050.69 1120.73 1056.24 1117.53C1057.11 1117.03 1057.99 1116.52 1058.89 1116.01C1060.77 1114.92 1062.65 1113.83 1064.53 1112.75C1067.88 1110.81 1071.22 1108.89 1074.57 1106.96C1079.11 1104.35 1083.64 1101.74 1088.17 1099.12C1089.1 1098.58 1090.03 1098.05 1090.99 1097.49C1091.85 1096.99 1092.72 1096.49 1093.61 1095.97C1094.48 1095.57 1095.34 1095.17 1096.24 1094.76C1098.88 1093.17 1098.88 1093.17 1099.24 1090.2C1099.24 1088.51 1099.24 1088.51 1099.24 1086.77C1099.26 1085.47 1099.27 1084.16 1099.28 1082.82C1099.27 1081.36 1099.26 1079.9 1099.25 1078.45C1099.26 1076.91 1099.26 1075.36 1099.28 1073.82C1099.3 1069.58 1099.29 1065.33 1099.28 1061.09C1099.27 1056.51 1099.29 1051.94 1099.3 1047.36C1099.33 1039.43 1099.33 1031.5 1099.32 1023.57C1099.31 1012.11 1099.33 1000.64 1099.36 989.178C1099.4 970.578 1099.41 951.978 1099.42 933.379C1099.42 915.308 1099.43 897.237 1099.46 879.166C1099.46 877.496 1099.46 877.496 1099.46 875.792C1099.47 870.207 1099.48 864.621 1099.49 859.036C1099.56 812.68 1099.6 766.324 1099.61 719.968Z" fill="#7800B0" />
                            <path d="M1010.61 433.968C1011.6 434.298 1012.59 434.628 1013.61 434.968C1014.3 437.155 1014.3 437.155 1014.61 439.968C1014.14 440.69 1013.66 441.412 1013.17 442.155C1010.74 446.543 1010.22 450.101 1011.61 454.968C1014.44 458.839 1017.71 462.094 1021.13 465.448C1024.2 468.597 1026.83 472.131 1029.54 475.593C1033.46 480.086 1037.4 482.534 1042.92 484.718C1043.99 485.146 1045.06 485.574 1046.16 486.015C1047.37 486.486 1047.37 486.486 1048.61 486.968C1042.61 493.413 1035.29 497.191 1026.46 497.584C1019.64 497.611 1014.34 496.866 1008.61 492.968C1007.95 492.308 1007.29 491.648 1006.61 490.968C1006.67 489.03 1006.67 489.03 1007.61 486.968C1009.25 485.924 1010.92 484.92 1012.61 483.968C1012.07 482.755 1012.07 482.755 1011.52 481.519C1011.05 480.45 1010.59 479.381 1010.11 478.28C1009.65 477.225 1009.18 476.169 1008.7 475.081C1007.66 472.111 1007.38 470.076 1007.61 466.968C1004.94 467.462 1003.44 468.083 1001.17 469.655C998.611 470.968 998.611 470.968 996.111 470.468C993.611 468.968 993.611 468.968 991.111 466.405C988.391 463.753 987.236 463.506 983.611 462.968C983.464 462.362 983.317 461.756 983.166 461.132C981.547 455.085 979.229 450.244 975.818 444.999C974.611 442.968 974.611 442.968 974.611 440.968C975.33 441.122 976.049 441.277 976.791 441.437C982.662 442.542 988.07 443.347 993.49 440.405C995.344 439.126 997.188 437.832 999.021 436.522C1002.81 434.248 1005.3 434.489 1009.61 434.968C1009.94 434.638 1010.27 434.308 1010.61 433.968Z" fill="#FAFAFA" />
                            <path d="M1081.61 443.968C1081.22 451.076 1080.77 458.016 1079.22 464.972C1078.34 469.323 1077.67 473.706 1076.99 478.093C1076.85 478.96 1076.72 479.827 1076.58 480.72C1076.25 482.803 1075.93 484.885 1075.61 486.968C1072.49 486.731 1069.37 486.49 1066.25 486.237C1064.01 486.072 1061.77 485.937 1059.53 485.854C1050.39 485.427 1040.67 483.385 1033.86 476.843C1032.75 475.576 1031.67 474.281 1030.61 472.968C1029.45 471.587 1029.45 471.587 1028.26 470.179C1025.22 466.528 1022.25 462.921 1019.61 458.968C1020.35 458.878 1021.1 458.788 1021.86 458.696C1041.69 456.242 1059.85 452.335 1078.37 444.851C1080.61 443.968 1080.61 443.968 1081.61 443.968Z" fill="#FCFCFC" />
                            <path d="M510.08 577.437C510.878 577.433 511.677 577.429 512.499 577.425C514.18 577.422 515.861 577.43 517.542 577.446C520.104 577.468 522.662 577.446 525.224 577.421C526.863 577.424 528.503 577.429 530.142 577.437C530.902 577.428 531.661 577.42 532.444 577.412C537.587 577.502 540.528 578.586 544.611 581.968C551.332 591.941 545.885 608.348 544.018 619.512C543.358 623.494 542.736 627.481 542.111 631.468C541.861 633.051 541.611 634.634 541.361 636.218C541.237 637.002 541.113 637.785 540.986 638.593C538.611 653.634 536.236 668.676 533.861 683.718C533.737 684.502 533.613 685.286 533.486 686.094C533.236 687.674 532.986 689.255 532.736 690.836C532.104 694.831 531.477 698.826 530.861 702.823C530.131 707.541 529.381 712.256 528.611 716.968C528.487 717.729 528.363 718.49 528.236 719.274C527.873 721.466 527.495 723.655 527.111 725.843C526.894 727.098 526.678 728.354 526.455 729.647C525.275 734.289 524.159 736.999 520.031 739.583C515.87 741.268 512.544 741.402 508.107 741.366C506.905 741.371 506.905 741.371 505.68 741.375C503.995 741.377 502.31 741.371 500.625 741.359C498.052 741.343 495.482 741.359 492.91 741.378C491.267 741.376 489.624 741.372 487.982 741.366C487.217 741.372 486.452 741.378 485.665 741.385C480.115 741.312 477.007 740.022 472.861 736.468C469.85 732.855 470.385 728.397 470.611 723.968C470.944 720.783 471.419 717.63 471.923 714.468C472.059 713.59 472.194 712.712 472.333 711.807C473.158 706.546 474.092 701.319 475.111 696.093C476.542 688.704 477.568 681.287 478.556 673.826C479.3 668.215 480.117 662.631 481.083 657.054C481.774 653.01 482.411 648.958 483.048 644.905C483.24 643.689 483.24 643.689 483.435 642.448C483.697 640.784 483.958 639.12 484.22 637.456C484.971 632.675 485.727 627.894 486.483 623.114C487.127 619.044 487.766 614.974 488.396 610.901C489.117 606.254 489.854 601.61 490.611 596.968C490.785 595.899 490.959 594.831 491.138 593.729C492.201 587.801 493.354 583.804 498.191 579.868C502.409 577.524 505.349 577.386 510.08 577.437ZM496.611 585.968C492.888 594.785 492.59 605.815 491.365 615.245C489.859 626.814 488.089 638.351 486.13 649.851C485.617 652.928 485.135 656.009 484.657 659.091C483.228 668.299 481.657 677.477 480.048 686.655C478.444 695.817 476.973 704.947 475.97 714.194C475.611 716.968 475.611 716.968 474.611 719.968C473.912 727.849 473.912 727.849 476.361 735.155C481.83 739.561 489.568 738.19 496.255 738.208C498.471 738.218 500.687 738.249 502.904 738.28C504.324 738.287 505.745 738.292 507.165 738.296C509.091 738.31 509.091 738.31 511.056 738.324C514.939 737.935 517.317 737.032 520.611 734.968C522.622 731.951 523.044 730.473 523.611 726.987C523.775 725.996 523.938 725.005 524.107 723.983C524.273 722.926 524.44 721.869 524.611 720.78C524.787 719.696 524.963 718.612 525.144 717.495C526.304 710.232 527.264 702.968 528.119 695.663C528.713 691.201 529.56 686.811 530.433 682.396C531.749 675.577 532.645 668.71 533.556 661.827C534.301 656.208 535.119 650.616 536.087 645.03C536.892 640.324 537.624 635.607 538.358 630.889C539.107 626.1 539.885 621.317 540.693 616.538C540.876 615.438 541.059 614.338 541.248 613.205C541.606 611.059 541.97 608.915 542.341 606.772C544.587 595.49 544.587 595.49 541.736 584.905C537.951 581.455 534.617 581.777 529.716 581.729C528.932 581.721 528.147 581.713 527.339 581.705C525.677 581.691 524.016 581.68 522.354 581.673C519.818 581.655 517.284 581.612 514.749 581.567C513.134 581.557 511.519 581.549 509.904 581.542C509.148 581.524 508.393 581.507 507.615 581.489C502.648 581.509 500.065 582.378 496.611 585.968Z" fill="#7800B0" />
                            <path d="M465.611 71.9677C469.414 73.5073 473.075 75.6866 475.611 78.9677C475.611 79.6277 475.611 80.2877 475.611 80.9677C476.271 80.9677 476.931 80.9677 477.611 80.9677C483.518 91.0731 486.773 99.111 485.611 110.968C483.994 115.648 481.948 118.516 477.611 120.968C472.657 121.947 469.534 121.549 465.236 118.843C460.382 113.527 458.566 107.112 456.505 100.358C455.338 96.6843 454.025 93.9579 451.611 90.9677C451.611 90.3077 451.611 89.6477 451.611 88.9677C448.803 88.1882 446.191 87.7967 443.283 87.6513C442.483 87.6094 441.684 87.5675 440.861 87.5244C439.623 87.4654 439.623 87.4654 438.361 87.4052C437.52 87.362 436.68 87.3189 435.814 87.2744C433.746 87.1686 431.679 87.0677 429.611 86.9677C430.685 84.0526 431.389 82.1896 433.611 79.9677C435.49 79.6489 435.49 79.6489 437.744 79.5537C438.549 79.515 439.355 79.4763 440.185 79.4365C441.027 79.4055 441.869 79.3746 442.736 79.3427C444.01 79.2847 444.01 79.2847 445.31 79.2255C447.41 79.1312 449.51 79.0484 451.611 78.9677C451.907 78.3438 452.204 77.7199 452.509 77.0771C455.343 71.6511 459.878 70.9838 465.611 71.9677Z" fill="#FCFCFC" />
                            <path d="M787.611 622.968C792.148 629.773 792.971 633.333 791.423 641.218C791.283 642.013 791.144 642.808 791 643.628C790.422 646.862 789.797 650.083 789.12 653.298C787.324 661.879 786.244 670.55 785.111 679.239C784.946 680.448 784.781 681.656 784.611 682.901C784.466 683.995 784.322 685.089 784.173 686.216C783.611 688.968 783.611 688.968 781.611 691.968C781.452 691.376 781.294 690.784 781.13 690.175C779.365 684.197 777.347 680.229 771.81 676.878C769.12 675.765 766.76 675.55 763.861 675.343C762.876 675.268 761.891 675.193 760.876 675.116C760.129 675.067 759.381 675.018 758.611 674.968C762.062 646.343 762.062 646.343 767.611 636.968C768.271 636.968 768.931 636.968 769.611 636.968C769.854 636.381 770.098 635.795 770.349 635.19C773.853 629.018 781.136 625.31 787.611 622.968Z" fill="#FBFBFB" />
                            <path d="M366.185 957.808C371.923 960.624 374.514 964.001 376.611 969.968C378.384 975.286 378.333 980.006 376.048 985.093C373.112 990.364 369.066 993.843 363.611 996.343C356.434 997.838 351.675 996.862 345.611 992.968C340.019 988.494 338.133 983.494 337.111 976.593C337.976 970.323 340.633 964.946 345.111 960.468C351.766 956.475 358.702 955.366 366.185 957.808Z" fill="#FCFCFC" />
                            <path d="M380.021 879.14C384.684 882.522 388.761 886.419 390.611 891.968C391.557 904.575 391.557 904.575 387.611 909.968C382.757 914.712 377.923 917.613 371.111 918.343C364.998 917.688 359.957 915.314 355.611 910.968C351.369 905.118 350.544 899.047 351.611 891.968C352.653 889.213 353.867 887.41 355.611 884.968C356.044 884.225 356.477 883.483 356.923 882.718C362.516 876.918 372.88 875.668 380.021 879.14Z" fill="#FCFCFC" />
                            <path d="M397.923 805.405C402.77 809.523 406.235 814.905 406.83 821.331C406.379 827.852 403.911 833.604 399.361 838.28C393.642 841.789 388.628 843.756 381.849 842.667C376.242 840.915 372.1 837.249 369.173 832.218C368.658 831.145 368.142 830.073 367.611 828.968C367.281 828.308 366.951 827.648 366.611 826.968C365.789 820.474 366.777 815.308 370.611 809.968C378.011 801.887 388.312 798.992 397.923 805.405Z" fill="#FDFDFD" />
                            <path d="M541.611 210.968C545.486 212.843 545.486 212.843 546.611 213.968C547.156 216.662 546.915 218.421 545.579 220.825C544.101 223 542.562 225.113 540.986 227.218C539.93 228.66 538.875 230.102 537.822 231.546C537.286 232.276 536.751 233.005 536.2 233.757C534.129 236.639 532.177 239.591 530.223 242.553C526.422 248.247 522.455 253.83 518.533 259.44C514.928 264.607 511.372 269.798 507.889 275.047C506.318 277.408 504.723 279.742 503.048 282.03C502.511 282.784 501.973 283.538 501.419 284.315C499.611 285.968 499.611 285.968 497.263 286.558C493.398 285.698 491.34 283.269 488.736 280.468C488.202 279.914 487.668 279.36 487.118 278.789C483.87 275.395 480.765 271.898 477.74 268.304C475.848 266.228 473.902 264.275 471.888 262.319C471.209 261.657 470.529 260.994 469.829 260.311C468.453 258.976 467.069 257.65 465.676 256.334C465.038 255.714 464.401 255.094 463.744 254.456C462.876 253.629 462.876 253.629 461.99 252.785C460.275 250.525 459.884 248.774 459.611 245.968C460.736 244.093 460.736 244.093 462.611 242.968C467.132 243.285 469.066 244.98 472.111 248.218C472.895 249.038 473.678 249.857 474.486 250.702C475.187 251.45 475.888 252.197 476.611 252.968C477.436 253.793 478.261 254.618 479.111 255.468C479.936 256.293 480.761 257.118 481.611 257.968C482.312 258.657 483.013 259.347 483.736 260.058C490.624 266.866 490.624 266.866 493.548 270.468C495.365 273.014 495.365 273.014 497.611 273.968C497.959 272.939 497.959 272.939 498.314 271.89C499.897 268.323 502.053 265.337 504.361 262.218C507.677 257.694 510.864 253.114 513.959 248.436C517.779 242.727 521.754 237.124 525.689 231.495C526.364 230.527 527.04 229.559 527.736 228.562C528.722 227.15 528.722 227.15 529.728 225.71C531.958 222.463 534.092 219.159 536.189 215.825C537.771 213.759 539.472 212.433 541.611 210.968Z" fill="#7800B0" />
                            <path d="M1106.61 427.968C1106.25 436.443 1104.85 444.624 1103.34 452.955C1101.66 462.411 1100.24 471.901 1098.86 481.405C1098.69 482.566 1098.69 482.566 1098.52 483.749C1097.88 488.155 1097.24 492.561 1096.61 496.968C1093.79 495.714 1090.98 494.437 1088.17 493.155C1087.37 492.799 1086.57 492.442 1085.74 492.075C1084.98 491.724 1084.21 491.373 1083.43 491.011C1082.72 490.691 1082.01 490.372 1081.28 490.043C1079.61 488.968 1079.61 488.968 1078.61 485.968C1078.76 484.009 1079 482.056 1079.28 480.112C1079.45 478.94 1079.62 477.767 1079.79 476.559C1080.55 471.499 1081.34 466.442 1082.12 461.386C1082.53 458.543 1082.83 455.735 1083.06 452.874C1083.91 443.71 1083.91 443.71 1087.01 440.53C1090.38 437.849 1094.02 435.889 1097.86 433.966C1100.31 432.573 1104.07 427.968 1106.61 427.968Z" fill="#FBFBFB" />
                            <path d="M809.611 540.968C812.581 543.622 814.493 546.737 816.611 550.093C817.406 551.346 818.202 552.598 818.998 553.851C819.418 554.515 819.839 555.179 820.272 555.863C822.635 559.578 825.03 563.272 827.423 566.968C827.879 567.673 828.335 568.378 828.804 569.105C830.716 572.06 832.634 575.001 834.623 577.905C837.161 581.816 839.389 585.871 841.611 589.968C840.506 589.993 839.401 590.018 838.262 590.044C834.164 590.138 830.066 590.238 825.968 590.34C824.193 590.383 822.419 590.425 820.645 590.465C818.096 590.523 815.547 590.587 812.998 590.651C812.204 590.668 811.41 590.685 810.592 590.702C807.364 590.789 804.693 590.94 801.611 591.968C803.684 574.897 805.842 557.758 809.611 540.968Z" fill="#FCFCFC" />
                            <path d="M421.497 637.673C423.022 637.661 424.548 637.641 426.073 637.611C442.059 637.301 442.059 637.301 448.611 641.968C450.302 643.827 450.302 643.827 451.173 645.718C451.484 646.331 451.795 646.945 452.115 647.577C452.847 651.108 452.106 654.433 451.611 657.968C451.459 659.077 451.308 660.186 451.152 661.329C450.045 669.402 448.911 677.471 447.773 685.539C447.195 689.632 446.621 693.726 446.055 697.821C445.503 701.806 444.944 705.79 444.378 709.773C444.166 711.28 443.956 712.788 443.749 714.297C440.944 734.736 440.944 734.736 435.966 739.497C431.772 741.335 428.451 741.546 423.923 741.499C423.103 741.503 422.282 741.507 421.436 741.511C419.708 741.513 417.98 741.506 416.252 741.489C413.618 741.468 410.987 741.489 408.353 741.515C406.668 741.512 404.983 741.507 403.298 741.499C402.517 741.507 401.736 741.515 400.93 741.524C395.742 741.435 392.633 740.529 388.611 736.968C385.93 732.571 385.28 729.707 385.789 724.608C385.909 723.378 386.028 722.148 386.151 720.88C386.943 714.147 387.801 707.429 388.755 700.718C388.86 699.977 388.964 699.236 389.072 698.473C389.622 694.568 390.178 690.664 390.739 686.761C391.314 682.751 391.871 678.738 392.423 674.725C392.854 671.612 393.299 668.502 393.749 665.392C393.96 663.913 394.166 662.433 394.367 660.953C394.648 658.886 394.949 656.824 395.255 654.761C395.42 653.591 395.586 652.42 395.757 651.215C397.154 645.902 399.91 641.849 404.611 638.968C410.003 637.171 415.849 637.702 421.497 637.673ZM401.611 646.968C399.955 651.247 399.118 655.399 398.466 659.932C398.368 660.601 398.27 661.27 398.169 661.96C397.85 664.156 397.539 666.353 397.228 668.55C397.007 670.089 396.786 671.628 396.564 673.168C396.102 676.389 395.643 679.611 395.188 682.833C394.606 686.943 394.014 691.051 393.419 695.159C392.96 698.337 392.506 701.516 392.055 704.695C391.839 706.209 391.621 707.722 391.402 709.236C389.672 720.556 389.672 720.556 389.611 731.968C392.141 735.25 393.688 736.66 397.611 737.968C402.131 738.197 406.654 738.196 411.179 738.208C413.405 738.218 415.63 738.249 417.855 738.28C419.28 738.287 420.705 738.292 422.13 738.296C424.066 738.31 424.066 738.31 426.04 738.324C430.049 737.924 432.314 737.291 435.611 734.968C437.96 730.277 439.126 726.114 439.869 720.89C440.016 719.886 440.016 719.886 440.166 718.862C440.484 716.672 440.788 714.48 441.091 712.288C441.311 710.75 441.531 709.212 441.751 707.675C442.21 704.459 442.662 701.244 443.11 698.027C443.68 693.925 444.265 689.824 444.855 685.725C445.31 682.551 445.759 679.377 446.206 676.202C446.419 674.691 446.634 673.18 446.851 671.669C449.341 658.678 449.341 658.678 447.361 646.03C444.514 642.675 442.436 642.038 438.023 641.661C436.596 641.628 435.168 641.607 433.74 641.597C432.601 641.583 432.601 641.583 431.439 641.569C429.836 641.555 428.233 641.546 426.63 641.542C424.185 641.53 421.742 641.481 419.296 641.431C417.736 641.421 416.175 641.414 414.615 641.409C413.524 641.38 413.524 641.38 412.411 641.35C407.066 641.397 404.788 642.721 401.611 646.968Z" fill="#7800B0" />
                            <path d="M790.611 607.968C790.523 612.213 790.137 615.985 788.611 619.968C786.026 621.866 783.584 622.768 780.568 623.839C772.269 627.007 766.38 633.41 762.494 641.21C759.678 647.643 758.574 654.049 757.611 660.968C757.264 663.198 756.91 665.427 756.548 667.655C756.392 668.649 756.236 669.643 756.076 670.667C755.611 672.968 755.611 672.968 754.611 673.968C752.758 674.04 750.903 674.052 749.048 674.03C747.53 674.017 747.53 674.017 745.982 674.003C745.199 673.991 744.417 673.98 743.611 673.968C748.599 630.65 748.599 630.65 766.732 615.155C772.824 610.684 783.026 605.158 790.611 607.968Z" fill="#FBFBFB" />
                            <path d="M1029.61 980.968C1030.6 980.968 1031.59 980.968 1032.61 980.968C1032.11 988.939 1030.76 996.455 1028.92 1004.22C1026.63 1014.23 1024.53 1024.25 1022.61 1034.34C1020.67 1044.53 1018.66 1054.69 1016.55 1064.84C1014.22 1076.02 1011.92 1087.2 1009.72 1098.41C1009.05 1101.83 1008.34 1105.23 1007.56 1108.62C1005.12 1119.62 1004.84 1130.09 1010.99 1139.96C1017.39 1147.88 1024.77 1150.73 1034.61 1151.97C1036.95 1152.08 1039.3 1152.14 1041.65 1152.17C1042.31 1152.18 1042.98 1152.19 1043.66 1152.2C1045.83 1152.23 1048 1152.26 1050.17 1152.28C1051.68 1152.3 1053.2 1152.33 1054.71 1152.35C1058.68 1152.4 1062.65 1152.45 1066.61 1152.5C1070.67 1152.55 1074.72 1152.61 1078.78 1152.66C1086.72 1152.77 1094.67 1152.87 1102.61 1152.97C1102.61 1153.96 1102.61 1154.95 1102.61 1155.97C1093.14 1156.06 1083.66 1156.13 1074.18 1156.18C1069.78 1156.2 1065.38 1156.22 1060.98 1156.27C1056.73 1156.31 1052.47 1156.34 1048.22 1156.35C1046.6 1156.35 1044.99 1156.37 1043.37 1156.39C1030.6 1156.56 1020.3 1154.99 1010.61 1145.97C1002.91 1137.71 1001.03 1129.43 1001.25 1118.29C1001.84 1109.04 1003.92 1099.62 1006.57 1090.75C1008.01 1085.53 1008.98 1080.23 1009.98 1074.91C1010.64 1071.45 1011.3 1068 1011.96 1064.55C1012.1 1063.84 1012.23 1063.13 1012.37 1062.4C1018.74 1029.2 1018.74 1029.2 1021.67 1017.22C1023.75 1008.71 1025.35 1000.13 1026.95 991.521C1027.15 990.443 1027.35 989.364 1027.56 988.253C1027.74 987.282 1027.92 986.312 1028.1 985.312C1028.61 982.968 1028.61 982.968 1029.61 980.968Z" fill="#7800B0" />
                            <path d="M188.611 1003.97C191.4 1004.37 194.153 1004.83 196.923 1005.34C204.141 1006.62 211.286 1007.55 218.611 1007.97C218.03 1014.5 216.965 1023.04 211.814 1027.54C210.465 1028.33 209.094 1029.08 207.705 1029.8C202.439 1032.74 198.35 1037.65 195.611 1042.97C190.775 1041.98 186.135 1041.01 181.611 1038.97C182.396 1031.75 183.734 1024.66 185.111 1017.53C185.336 1016.33 185.562 1015.14 185.794 1013.91C186.012 1012.77 186.23 1011.64 186.455 1010.47C186.652 1009.44 186.85 1008.41 187.054 1007.34C187.611 1004.97 187.611 1004.97 188.611 1003.97Z" fill="#FAFAFA" />
                            <path d="M737.068 677.667C738.3 677.661 738.3 677.661 739.556 677.654C741.292 677.648 743.028 677.648 744.763 677.652C747.404 677.655 750.043 677.632 752.683 677.606C754.374 677.604 756.065 677.603 757.755 677.605C758.538 677.595 759.32 677.586 760.127 677.577C766.487 677.63 771.395 678.752 776.048 683.405C777.611 685.968 777.611 685.968 777.611 689.968C758.141 689.968 738.671 689.968 718.611 689.968C719.755 684.246 721.504 682.101 726.25 678.842C729.798 677.528 733.334 677.663 737.068 677.667Z" fill="#FDFDFD" />
                            <path d="M905.611 912.968C908.528 914.426 909.134 916.848 910.496 919.682C911.583 921.911 912.74 924.083 913.935 926.257C914.324 926.971 914.712 927.685 915.113 928.421C915.909 929.88 916.711 931.335 917.519 932.788C919.724 936.865 921.174 940.271 921.611 944.968C920.993 944.898 920.376 944.829 919.74 944.757C912.331 944.283 908.305 946.346 902.611 950.968C901.186 948.594 899.762 946.219 898.341 943.843C897.209 941.961 896.066 940.086 894.912 938.218C894.113 936.918 894.113 936.918 893.298 935.593C892.807 934.801 892.316 934.01 891.81 933.194C890.678 931.093 890.063 929.3 889.611 926.968C890.214 926.437 890.817 925.906 891.439 925.358C892.238 924.652 893.037 923.946 893.861 923.218C894.65 922.522 895.439 921.826 896.251 921.108C897.779 919.722 899.272 918.297 900.72 916.827C902.611 914.968 902.611 914.968 905.611 912.968Z" fill="#F9F9F9" />
                            <path d="M1103.92 704.718C1105.16 704.697 1106.4 704.677 1107.67 704.655C1109.46 704.648 1109.46 704.648 1111.29 704.64C1112.92 704.626 1112.92 704.626 1114.6 704.611C1118 705.014 1119.86 705.966 1122.61 707.968C1125.12 711.379 1125.01 715.09 1125.24 719.218C1125.31 720.481 1125.39 721.744 1125.46 723.046C1125.51 724.01 1125.56 724.974 1125.61 725.968C1124.29 725.968 1122.97 725.968 1121.61 725.968C1121.41 724.361 1121.41 724.361 1121.21 722.722C1121.03 721.325 1120.85 719.927 1120.67 718.53C1120.54 717.47 1120.54 717.47 1120.41 716.388C1120.23 712.88 1120.23 712.88 1118.61 709.968C1116.54 709.88 1114.46 709.861 1112.39 709.87C1110.5 709.875 1110.5 709.875 1108.57 709.88C1107.23 709.888 1105.89 709.897 1104.55 709.905C1103.2 709.91 1101.86 709.915 1100.52 709.919C1097.21 709.931 1093.91 709.947 1090.61 709.968C1085.39 722.69 1083.6 736.956 1081.04 750.401C1078.85 761.832 1076.52 773.23 1074.16 784.624C1073.87 786.027 1073.58 787.431 1073.29 788.835C1073.14 789.519 1073 790.203 1072.86 790.907C1071.22 798.805 1069.66 806.717 1068.12 814.633C1067.93 815.579 1067.75 816.525 1067.56 817.499C1067.4 818.32 1067.24 819.14 1067.07 819.985C1066.61 821.968 1066.61 821.968 1065.61 823.968C1064.62 823.968 1063.63 823.968 1062.61 823.968C1062.31 819.528 1062.79 815.918 1063.95 811.616C1065.76 804.581 1067.07 797.489 1068.36 790.343C1070.55 778.441 1072.86 766.571 1075.3 754.718C1075.44 754.011 1075.59 753.305 1075.74 752.577C1077.31 744.876 1079.02 737.232 1080.97 729.617C1082.02 725.289 1082.7 720.915 1083.34 716.509C1084.1 711.973 1085.41 709.267 1088.61 705.968C1093.04 703.753 1099.06 704.738 1103.92 704.718Z" fill="#7800B0" />
                            <path d="M327.611 376.968C328.903 380.842 328.16 383.918 327.486 387.843C327.352 388.659 327.218 389.474 327.08 390.315C326.206 395.586 325.285 400.849 324.365 406.112C323.926 408.627 323.487 411.141 323.049 413.655C322.83 414.909 322.61 416.163 322.385 417.455C321.048 425.188 319.899 432.9 319.002 440.694C318.39 445.819 317.512 450.887 316.611 455.968C316.347 457.474 316.082 458.981 315.818 460.487C315.087 464.648 314.35 468.808 313.611 472.968C311.631 472.968 309.651 472.968 307.611 472.968C307.253 463.81 308.191 455.073 309.528 446.043C309.858 443.802 310.171 441.56 310.482 439.317C312.599 424.453 315.986 410.112 320.674 395.843C321.012 394.786 321.35 393.729 321.699 392.64C323.433 387.287 325.282 382.09 327.611 376.968Z" fill="#F1F1F1" />
                            <path d="M790.611 935.968C798.328 936.694 805.453 939.116 812.611 941.968C811.65 944.982 810.635 947.975 809.611 950.968C809.332 951.842 809.054 952.716 808.767 953.616C806.585 959.879 804.478 962.768 798.611 965.968C797.621 965.968 796.631 965.968 795.611 965.968C795.095 965.205 794.58 964.442 794.048 963.655C790.554 959.802 786.563 959.13 781.611 957.968C782.256 955.155 783.107 952.561 784.205 949.894C784.513 949.144 784.821 948.394 785.138 947.622C785.459 946.849 785.78 946.076 786.111 945.28C786.432 944.496 786.753 943.711 787.083 942.903C789.483 937.096 789.483 937.096 790.611 935.968Z" fill="#FAFAFA" />
                            <path d="M1147.61 1031.97C1148.27 1031.97 1148.93 1031.97 1149.61 1031.97C1151.18 1039.7 1152.09 1047.32 1152.61 1055.19C1152.69 1056.32 1152.77 1057.46 1152.86 1058.63C1153.11 1062.25 1153.36 1065.86 1153.61 1069.47C1153.94 1074.21 1154.27 1078.95 1154.61 1083.69C1154.69 1084.83 1154.77 1085.98 1154.86 1087.16C1155.35 1093.94 1155.96 1100.7 1156.71 1107.46C1157.46 1114.2 1157.98 1120.86 1157.99 1127.66C1158.01 1128.55 1158.03 1129.45 1158.06 1130.37C1158.09 1137.56 1156.4 1142.66 1151.75 1148.17C1145.09 1153.83 1139.4 1156.52 1130.61 1155.97C1130.61 1154.98 1130.61 1153.99 1130.61 1152.97C1131.91 1152.62 1131.91 1152.62 1133.24 1152.27C1141.22 1150.01 1146.46 1148.31 1151.42 1141.47C1153.86 1136.34 1153.68 1131.47 1153.36 1125.91C1153.32 1125.07 1153.27 1124.23 1153.23 1123.37C1152.61 1112.68 1151.65 1102.01 1150.72 1091.34C1149.98 1082.96 1149.4 1074.59 1148.96 1066.19C1148.67 1060.72 1148.21 1055.29 1147.55 1049.84C1146.87 1044.18 1146.41 1038.68 1146.61 1032.97C1146.94 1032.64 1147.27 1032.31 1147.61 1031.97Z" fill="#7800B0" />
                            <path d="M121.611 124.968C124.693 126.596 126.875 127.998 128.986 130.78C130.204 135.045 130.185 138.638 128.423 142.718C125.398 146.473 122.967 147.795 118.173 148.405C113.803 147.869 111.871 146.931 108.611 143.968C106.965 141.378 106.004 139.019 105.611 135.968C106.804 131.924 108.174 128.545 111.611 125.968C115.23 124.761 117.803 124.645 121.611 124.968Z" fill="#FFCA36" />
                            <path d="M425.611 895.968C471.151 895.968 516.691 895.968 563.611 895.968C563.281 896.958 562.951 897.948 562.611 898.968C517.401 898.968 472.191 898.968 425.611 898.968C425.611 897.978 425.611 896.988 425.611 895.968Z" fill="#7800B0" />
                            <path d="M397.923 805.405C402.77 809.523 406.235 814.905 406.83 821.331C406.379 827.852 403.911 833.604 399.361 838.28C393.642 841.789 388.628 843.756 381.849 842.667C376.242 840.915 372.1 837.249 369.173 832.218C368.658 831.145 368.142 830.073 367.611 828.968C367.281 828.308 366.951 827.648 366.611 826.968C365.789 820.474 366.777 815.308 370.611 809.968C378.011 801.887 388.312 798.992 397.923 805.405ZM373.861 811.593C371.019 815.321 369.752 819.29 369.611 823.968C370.302 826.904 371.31 829.216 372.611 831.968C373.271 831.968 373.931 831.968 374.611 831.968C374.796 832.566 374.982 833.164 375.173 833.78C377.287 836.996 379.977 838.128 383.611 838.968C389.553 839.236 394.131 838.031 398.611 833.968C401.962 829.166 403.362 824.871 402.611 818.968C401.055 814.377 399.484 810.956 395.611 807.968C387.277 804.264 380.425 805.327 373.861 811.593Z" fill="#7800B0" />
                            <path d="M366.185 957.808C371.923 960.624 374.514 964.001 376.611 969.968C378.384 975.286 378.333 980.006 376.048 985.093C373.112 990.364 369.066 993.843 363.611 996.343C356.434 997.838 351.675 996.862 345.611 992.968C340.019 988.494 338.133 983.494 337.111 976.593C337.976 970.323 340.633 964.946 345.111 960.468C351.766 956.475 358.702 955.366 366.185 957.808ZM346.611 963.968C342.414 969.24 341.164 973.263 341.611 979.968C343.434 985.842 345.777 988.471 350.611 991.968C354.072 993.698 357.82 993.314 361.611 992.968C366.884 991.142 369.408 988.361 372.611 983.968C374.141 979.377 374.552 974.592 372.892 969.964C370.236 965.005 366.941 961.745 361.611 959.968C355.678 959.386 351.418 960.551 346.611 963.968Z" fill="#7800B0" />
                            <path d="M380.021 879.14C384.684 882.522 388.761 886.419 390.611 891.968C391.557 904.575 391.557 904.575 387.611 909.968C382.757 914.712 377.923 917.613 371.111 918.343C364.998 917.688 359.957 915.314 355.611 910.968C351.369 905.118 350.544 899.047 351.611 891.968C352.653 889.213 353.867 887.41 355.611 884.968C356.044 884.225 356.477 883.483 356.923 882.718C362.516 876.918 372.88 875.668 380.021 879.14ZM356.498 888.937C354.417 893.704 354.827 898.931 355.611 903.968C357.599 908.73 360.879 911.891 365.611 913.968C371.097 915.713 375.593 914.486 380.611 911.968C385.164 907.996 386.537 904.292 387.451 898.355C387.854 892.347 384.967 888.811 381.244 884.483C377.738 881.229 374.485 880.513 369.697 880.655C364.523 881.43 359.658 884.82 356.498 888.937Z" fill="#7800B0" />
                            <path d="M33.6108 999.968C41.5308 999.968 49.4508 999.968 57.6108 999.968C58.6914 1004.29 58.36 1006.86 57.6733 1011.22C57.4787 1012.48 57.284 1013.74 57.0835 1015.05C56.9275 1016.01 56.7715 1016.97 56.6108 1017.97C56.1313 1017.48 55.6518 1016.99 55.1577 1016.48C51.4323 1014.27 48.1048 1014.64 43.8608 1014.78C43.0681 1014.79 42.2753 1014.81 41.4585 1014.82C39.509 1014.86 37.5598 1014.91 35.6108 1014.97C34.9508 1016.95 34.2908 1018.93 33.6108 1020.97C33.2808 1020.97 32.9508 1020.97 32.6108 1020.97C32.9408 1014.04 33.2708 1007.11 33.6108 999.968Z" fill="#FAFAFA" />
                            <path d="M942.611 929.968C946.635 931.98 947.548 937.725 948.924 941.784C957.296 968.418 961.976 1000.78 949.611 1026.97C948.621 1026.64 947.631 1026.31 946.611 1025.97C946.888 1024.83 947.165 1023.7 947.451 1022.53C947.817 1021.01 948.183 1019.49 948.548 1017.97C948.731 1017.22 948.913 1016.48 949.101 1015.71C955.879 987.368 949.941 958.02 940.611 930.968C941.271 930.638 941.931 930.308 942.611 929.968Z" fill="#E5E5E5" />
                            <path d="M817.611 979.968C818.271 979.968 818.931 979.968 819.611 979.968C819.137 984.947 817.701 988.035 814.611 991.968C813.951 991.968 813.291 991.968 812.611 991.968C812.394 992.501 812.178 993.035 811.955 993.585C810.121 996.836 807.656 999.396 805.111 1002.09C804.573 1002.67 804.036 1003.24 803.482 1003.83C801.864 1005.55 800.238 1007.26 798.611 1008.97C797.755 1009.88 796.899 1010.79 796.017 1011.73C784.12 1024.05 766.375 1037.74 748.451 1039.14C746.837 1039.15 745.222 1039.07 743.611 1038.97C743.611 1037.65 743.611 1036.33 743.611 1034.97C744.508 1034.84 745.405 1034.72 746.33 1034.59C775.917 1029.7 797.416 1007.13 814.611 983.968C815.163 983.178 815.714 982.387 816.283 981.573C816.94 980.779 816.94 980.779 817.611 979.968Z" fill="#EDEDED" />
                            <path d="M1116.61 360.968C1117.77 364.444 1117.45 367.015 1116.8 370.593C1116.61 371.642 1116.42 372.691 1116.22 373.772C1115.38 378.176 1114.52 382.577 1113.61 386.968C1107.76 381.952 1104.27 375.695 1102.92 368.093C1103.61 364.968 1103.61 364.968 1106.17 362.53C1109.97 360.806 1112.49 360.638 1116.61 360.968Z" fill="#F2F2F2" />
                            <path d="M117.423 128.655C120.516 128.7 121.418 128.835 124.048 130.655C125.822 133.281 126.533 134.794 126.611 137.968C125.351 140.819 124.252 142.498 121.736 144.343C118.114 145.408 115.625 144.503 112.361 142.78C109.901 140.233 109.681 138.476 109.611 134.968C112.5 129.059 112.5 129.059 117.423 128.655Z" fill="#F7F7F7" />
                            <path d="M868.611 558.968C871.111 560.03 871.111 560.03 872.611 560.968C872.611 561.628 872.611 562.288 872.611 562.968C873.601 563.298 874.591 563.628 875.611 563.968C877.361 566.343 877.361 566.343 878.611 568.968C878.281 569.958 877.951 570.948 877.611 571.968C873.872 573.081 871.832 573.551 868.248 571.839C864.383 569.315 861.032 566.975 858.611 562.968C858.611 561.648 858.611 560.328 858.611 558.968C861.844 557.351 865.181 558.29 868.611 558.968Z" fill="#F6F6F6" />
                            <path d="M975.611 638.968C976.157 639.13 976.704 639.293 977.267 639.46C979.94 640.039 982.377 640.1 985.111 640.093C986.049 640.095 986.988 640.098 987.955 640.101C990.355 639.981 992.3 639.566 994.611 638.968C1001.01 638.419 1004.87 639.096 1010.61 641.968C1014.6 642.523 1018.59 642.779 1022.61 642.968C1022.61 643.298 1022.61 643.628 1022.61 643.968C1017.3 644.856 1012.21 645.101 1006.83 645.065C1006.02 645.064 1005.21 645.063 1004.37 645.061C1001.81 645.056 999.241 645.043 996.673 645.03C994.923 645.025 993.172 645.021 991.421 645.017C987.151 645.006 982.881 644.988 978.611 644.968C977.621 642.988 976.631 641.008 975.611 638.968Z" fill="#EEEEEE" />
                            <path d="M1087.61 566.968C1088.27 566.968 1088.93 566.968 1089.61 566.968C1092.76 576.992 1092.82 586.849 1088.83 596.644C1087.17 599.803 1085.38 601.737 1082.61 603.968C1083.94 591.579 1085.43 579.238 1087.61 566.968Z" fill="#E9E9E9" />
                            <path d="M228.611 1002.97C229.042 1012.46 226.757 1021.77 224.611 1030.97C222.301 1029.32 219.991 1027.67 217.611 1025.97C222.062 1002.97 222.062 1002.97 228.611 1002.97Z" fill="#F2F2F2" />
                            <path d="M1078.61 548.968C1081.83 550.346 1082.53 550.827 1084.36 554.03C1087.76 563.152 1084.63 572.831 1082.61 581.968C1079.77 579.122 1080.2 576.973 1079.98 572.991C1079.94 572.306 1079.89 571.621 1079.85 570.915C1079.72 568.724 1079.6 566.534 1079.49 564.343C1079.4 562.858 1079.31 561.374 1079.22 559.89C1079.01 556.25 1078.81 552.609 1078.61 548.968Z" fill="#E5E5E5" />
                            <path d="M453.611 470.968C454.423 473.155 454.423 473.155 454.611 475.968C452.423 478.843 452.423 478.843 449.611 480.968C445.781 481.095 441.807 477.873 438.611 475.968C438.611 475.308 438.611 474.648 438.611 473.968C443.975 471.286 447.621 470.653 453.611 470.968Z" fill="#F7F7F7" />
                            <path d="M336.611 445.968C341.925 446.483 345.517 448.329 349.986 451.03C350.627 451.407 351.267 451.784 351.927 452.173C353.493 453.096 355.053 454.031 356.611 454.968C356.611 455.958 356.611 456.948 356.611 457.968C352.144 457.328 348.367 455.638 344.361 453.655C343.724 453.359 343.087 453.064 342.431 452.759C337.827 450.491 337.827 450.491 336.689 447.737C336.663 447.153 336.637 446.569 336.611 445.968Z" fill="#EAEAEA" />
                            <path d="M758.611 984.968C763.597 985.506 767.129 987.085 771.486 989.53C772.638 990.171 773.791 990.812 774.978 991.472C776.281 992.212 776.281 992.212 777.611 992.968C777.611 994.288 777.611 995.608 777.611 996.968C773.804 995.49 770.105 993.858 766.423 992.093C765.378 991.6 764.332 991.108 763.255 990.601C760.514 988.908 759.664 987.953 758.611 984.968Z" fill="#E8E8E8" />
                            <path d="M840.611 915.968C842.491 921.608 839.787 927.631 837.611 932.968C835.429 935.658 833.543 937.051 830.611 938.968C830.611 935.759 831.18 934.403 832.544 931.554C832.946 930.711 833.348 929.868 833.761 928.999C834.186 928.122 834.611 927.246 835.048 926.343C835.469 925.458 835.89 924.574 836.324 923.663C839.461 917.118 839.461 917.118 840.611 915.968Z" fill="#DEDEDE" />
                            <path d="M755.611 994.968C756.598 995.534 757.586 996.1 758.603 996.683C759.897 997.424 761.192 998.164 762.486 998.905C763.137 999.278 763.788 999.652 764.458 1000.04C767.998 1002.07 767.998 1002.07 771.611 1003.97C771.281 1004.96 770.951 1005.95 770.611 1006.97C764.826 1005.45 759.335 1002.64 754.611 998.968C754.611 995.968 754.611 995.968 755.611 994.968Z" fill="#EBEBEB" />
                            <path d="M76.6108 174.968C77.6008 175.298 78.5908 175.628 79.6108 175.968C78.2962 180.569 76.5775 184.192 73.6108 187.968C72.6208 187.968 71.6308 187.968 70.6108 187.968C71.0286 182.258 73.1863 179.358 76.6108 174.968Z" fill="#FFCA36" />
                            <path d="M89.6108 152.968C90.6008 153.298 91.5908 153.628 92.6108 153.968C91.0444 158.275 88.9275 162.029 86.6108 165.968C85.6208 165.968 84.6308 165.968 83.6108 165.968C84.0941 160.813 86.7969 157.152 89.6108 152.968Z" fill="#FFCA36" />
                            <path d="M86.6108 172.968C91.3657 173.544 94.5813 175.518 98.6108 177.968C98.6108 178.958 98.6108 179.948 98.6108 180.968C92.901 180.55 90.0013 178.392 85.6108 174.968C85.9408 174.308 86.2708 173.648 86.6108 172.968Z" fill="#FFCA36" />
                            <path d="M64.6108 159.968C69.4567 160.408 73.0923 162.713 76.6108 165.968C76.6108 166.628 76.6108 167.288 76.6108 167.968C71.6392 167.494 68.5009 166.117 64.6108 162.968C64.6108 161.978 64.6108 160.988 64.6108 159.968Z" fill="#FFCA36" />
                        </svg>



                    </div>

                </div>
                <div className="another1">

                </div>

            </div >
        </ReactLenis >
    );
}