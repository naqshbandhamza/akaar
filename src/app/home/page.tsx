"use client"
import Image from "next/image";
import "./styles.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/all";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function LandingPage() {
    const lenis: any = useLenis(({ scroll }) => {
    })
    const [pageloaded, setPageLoaded] = useState(false);
    const [screenWidth, setScreenWidth] = useState(0);
    const ctxRef: any = useRef(null);

    // useEffect for page preloader
    useEffect(() => {
        setScreenWidth(window.innerWidth);

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

            preloader.style.display = 'none';
            content.style = "display: block;"
            gsap.fromTo(".slider-container", { opacity: 0 }, { opacity: 1 })

            ctxRef.current = gsap.context(() => {
                gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

                if (screenWidth > 1000 || true) {

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
                                snapTo: 1 / (sections.length - 1)
                            },
                            start: "top top",
                            end: () => screenWidth * 4 + 100
                        }
                    });

                    //section 1
                    let tl = gsap.timeline({})
                    tl.fromTo("#main-heading", {
                        yPercent: 100, opacity: 1,
                    }, { yPercent: 0, opacity: 1, duration: 2.2, delay: 1, ease: "expo.out" })
                    tl.to(["#ca"], { opacity: 1, duration: 1.2, ease: "expo.in" }, "-=1.5")
                    tl.to(
                        "#sub-script", { opacity: 1, duration: 1.2, ease: "expo.in" }, "-=1"
                    );

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
                    scrollassist0.to(
                        ["#lang-btn", "#e-btn"],
                        { backgroundColor: "#FFFFFF", color: "#2E4BF5", duration: 0.25 }
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
                        ["#lang-btn", "#e-btn"],
                        { backgroundColor: "#FFFFFF", color: "#FFC325", duration: 0.25 }
                    );

                    lamps(scrolltween, "#section-2 #cealling-lamp", ["#section-2 #cealling-lamp #Group_2", "#section-2 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-3 #cealling-lamp", ["#section-3 #cealling-lamp #Group_2", "#section-3 #cealling-lamp #Group_12"])
                    lamps(scrolltween, "#section-4 #cealling-lamp", ["#section-4 #cealling-lamp #Group_2", "#section-4 #cealling-lamp #Group_12"])

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
                        );

                    gsap.timeline({
                        scrollTrigger: {
                            trigger: "#section-1",
                            containerAnimation: scrolltween,
                            start: "top+=10 top",
                            end: `left+=${screenWidth * 3} left`,
                            scrub: true,
                            // markers: true, // For debugging
                            onUpdate: (self) => {
                                myanim.progress(self.progress);
                            },
                        }
                    });

                    const mytween1 = gsap.to("#akaar-presents", { opacity: 1, duration: 0.5, paused: true, })

                    gsap.to(["#studio-1", "#studio-2"], {
                        x: "-5vw",
                        scrollTrigger: {
                            // markers: true,
                            trigger: "#section-1",
                            containerAnimation: scrolltween,
                            start: "right right",
                            end: "left -=1000",
                            scrub: 1,
                            // id: "1",
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
                            // id: "1",
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
                            // id: "1",
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
                        ["#lang-btn", "#e-btn"],
                        { backgroundColor: "#FFFFFF", color: "#FF2424", duration: 0.25 }
                    );

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
                        ["#lang-btn", "#e-btn"],
                        { backgroundColor: "#FFFFFF", color: "#7800B0", duration: 0.25 }
                    );

                }
                // else {

                //     //section 1
                //     const scrollassist0 = gsap.timeline({
                //         scrollTrigger: {
                //             trigger: "#section-1",
                //             // markers: true,
                //             start: "top top",
                //             end: "+=10 top",
                //             scrub: 1,
                //         }
                //     }
                //     )


                //     scrollassist0.to(
                //         "#scroll-assist, #lang-btn,#e-btn",
                //         { backgroundColor: "#FFFFFF", color: "#2E4BF5" }
                //     ).to("#scroll-assist :nth-child(1)", {
                //         backgroundColor: "#2E4BF5"
                //     }, "<");

                //     const mytimeline3 = gsap.timeline({ paused: true })
                //     mytimeline3.fromTo("#headings",
                //         {
                //             x: 40, opacity: 0,
                //         },
                //         {
                //             x: 0, opacity: 1,
                //             duration: 2,
                //         });
                //     mytimeline3.fromTo("#my-vectors img",
                //         {
                //             x: -50, opacity: 0,
                //         },
                //         {
                //             x: 0, opacity: 1,
                //             duration: 2,

                //         }, "<");

                //     ScrollTrigger.create({
                //         trigger: "#headings",
                //         scrub: 1,
                //         // markers: true,
                //         start: "top top",
                //         end: "500 top",
                //         onEnter: () => { mytimeline3.reverse() },
                //         onLeaveBack: () => { mytimeline3.play() },
                //         once: false,
                //     });



                //     //section 2
                //     const scrollassist1 = gsap.timeline({
                //         scrollTrigger: {
                //             trigger: "#section-2",
                //             // markers: true,
                //             start: () => `-=20 top`,
                //             end: () => `+=10 top`,
                //             scrub: 1,
                //         }
                //     }
                //     )
                //     scrollassist1.to(
                //         "#scroll-assist, #lang-btn,#e-btn",
                //         { backgroundColor: "#FFFFFF", color: "#FFC325" }
                //     ).to("#scroll-assist :nth-child(1)", {
                //         backgroundColor: "#FFC325"
                //     }, "<");

                //     const mytween1 = gsap.to("#akaar-presents", { opacity: 1, duration: 0.5, paused: true, })

                //     ScrollTrigger.create({
                //         trigger: "#section-2",
                //         scrub: 1,
                //         // markers: true,
                //         start: () => `top top`,
                //         end: () => `+=500 top`,
                //         onEnter: () => {
                //             mytween1.play();
                //         },
                //         onLeaveBack: () => {
                //             mytween1.reverse();
                //         },
                //     })

                //     const tl2 = gsap.timeline({
                //         paused: true
                //     });

                //     tl2.to("#akaar-wed-shadow",
                //         {
                //             y: "+=10", duration: 0.5, ease: "power1.easeInOut"
                //         }).to("#akaar-wed-shadow-1", {
                //             y: "+=25", duration: 0.5, ease: "power1.easeInOut"
                //         }).fromTo("#now-booking-wed",
                //             {
                //                 x: 200,
                //                 scale: 0
                //             },
                //             {
                //                 x: 0,
                //                 scale: 1,
                //                 duration: 1.5,
                //                 ease: "elastic.out"
                //             }, "<").fromTo("#sub-tag-wed",
                //                 {
                //                     y: -10,
                //                     opacity: 0
                //                 },
                //                 {
                //                     y: 0,
                //                     opacity: 1,
                //                     duration: 0.25,
                //                 }, "-=0.5");

                //     ScrollTrigger.create({
                //         trigger: "#section-2",
                //         scrub: 1,
                //         // markers: true,
                //         start: () => `-=30 top`,
                //         end: () => `+=500 top`,
                //         onEnter: () => tl2.play(),
                //         onLeaveBack: () => tl2.reverse(),
                //     })

                //     //section 3
                //     const scrollassist2 = gsap.timeline({
                //         scrollTrigger: {
                //             trigger: "#section-3",
                //             // markers: true,
                //             start: () => `-=20 top`,
                //             end: () => `+=10 top`,
                //             scrub: 1,
                //         }
                //     }
                //     )
                //     scrollassist2.to(
                //         "#scroll-assist, #lang-btn,#e-btn",
                //         { backgroundColor: "#FFFFFF", color: "#FF2424" }
                //     ).to("#scroll-assist :nth-child(1)", {
                //         backgroundColor: "#FF2424"
                //     }, "<");

                //     const tl3 = gsap.timeline({
                //         paused: true
                //     });

                //     tl3.to("#akaar-fashion-shadow",
                //         {
                //             y: "+=10", duration: 0.5, ease: "power1.easeInOut"
                //         }).to("#akaar-fashion-shadow-1", {
                //             y: "+=25", duration: 0.5, ease: "power1.easeInOut"
                //         }).fromTo("#now-booking-fashion",
                //             {
                //                 x: 200,
                //                 scale: 0
                //             },
                //             {
                //                 x: 0,
                //                 scale: 1,
                //                 duration: 1.5,
                //                 ease: "elastic.out"
                //             }, "<").fromTo("#sub-tag-fashion",
                //                 {
                //                     y: -10,
                //                     opacity: 0
                //                 },
                //                 {
                //                     y: 0,
                //                     opacity: 1,
                //                     duration: 0.25,
                //                 }, "-=0.5");

                //     ScrollTrigger.create({
                //         trigger: "#section-3",
                //         scrub: 1,
                //         // markers: true,
                //         start: () => `-=30 top`,
                //         end: () => `+=500 top`,
                //         onEnter: () => tl3.play(),
                //         onLeaveBack: () => tl3.reverse(),
                //     })

                //     //section 4
                //     const scrollassist3 = gsap.timeline({
                //         scrollTrigger: {
                //             trigger: "#section-4",
                //             // markers: true,
                //             start: () => `-=20 top`,
                //             end: () => `+=10 top`,
                //             scrub: 1,
                //         }
                //     }
                //     )
                //     scrollassist3.to(
                //         "#scroll-assist, #lang-btn, #e-btn",
                //         { backgroundColor: "#FFFFFF", color: "#7800B0" }
                //     ).to("#scroll-assist :nth-child(1)", {
                //         backgroundColor: "#7800B0"
                //     }, "<");

                //     const tl445 = gsap.timeline({
                //         paused: true
                //     });

                //     tl445.to("#akaar-commercials-shadow",
                //         {
                //             y: "+=10", duration: 0.5, ease: "power1.easeInOut"
                //         }).to("#akaar-commercials-shadow-1", {
                //             y: "+=25", duration: 0.5, ease: "power1.easeInOut"
                //         }).fromTo("#now-booking-commercials",
                //             {
                //                 x: 200,
                //                 scale: 0
                //             },
                //             {
                //                 x: 0,
                //                 scale: 1,
                //                 duration: 1.5,
                //                 ease: "elastic.out"
                //             }, "<").fromTo("#sub-tag-commercials",
                //                 {
                //                     y: -10,
                //                     opacity: 0
                //                 },
                //                 {
                //                     y: 0,
                //                     opacity: 1,
                //                     duration: 0.25,
                //                 }, "-=0.5");

                //     ScrollTrigger.create({
                //         trigger: "#section-4",
                //         scrub: 1,
                //         // markers: true,
                //         start: () => `top top`,
                //         end: () => `+=300 top`,
                //         onEnterBack: () => { mytween1.play(); },
                //         onLeave: () => { mytween1.reverse(); },
                //         once: false,
                //     });

                //     ScrollTrigger.create({
                //         trigger: "#section-4",
                //         scrub: 1,
                //         // markers: true,
                //         start: () => `-=20 top`,
                //         end: () => `+=500 top`,
                //         onEnter: () => { tl445.play(); },
                //         onLeaveBack: () => { tl445.reverse() },
                //         once: false,
                //     });

                //     //section 1
                //     let tl = gsap.timeline({})
                //     tl.fromTo(
                //         document.querySelectorAll(".ofx"),
                //         { opacity: 0 },
                //         {
                //             opacity: 1, duration: 2, ease: "expo.inOut"
                //         }
                //     );
                //     tl.to("#main-heading", {
                //         opacity: 1, duration: 3, ease: "expo.inOut",
                //     }, "<")
                //     tl.fromTo("#sub-script", { y: "0px" }, {
                //         opacity: 1, duration: 1.5, y: "0px", ease: "power3.out"
                //     }, "-=1.5")
                //     tl.fromTo("#my-bulb-svg", {
                //         left: "-350px", opacity: 0,
                //     }, { left: "-150px", opacity: 1, duration: 2, ease: "expo.out", }, "-=1.5")
                //     tl.fromTo("#my-globe-svg", {
                //         right: "-250px", opacity: 0,
                //     }, { right: "0px", opacity: 1, duration: 2, ease: "expo.out", }, "<")
                //     tl.fromTo("#hills", {
                //         right: "-250px", opacity: 0,
                //     }, { right: "-100px", opacity: 1, duration: 2, ease: "expo.out", }, "<")
                //     tl.fromTo("#scroll-assist", {
                //         y: 100, opacity: 0, scale: 1.2
                //     }, { y: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out" })
                // }

            });

            return () => {
                ctxRef.current && ctxRef.current.revert(); // This kills the context
            };
        }
    }, [pageloaded, screenWidth]);

    const goToPortfolio = (id) => {
        lenis.scrollTo("#" + id, {
            duration: 4,
            easing: (t) => t
        })
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

    return (
        <ReactLenis root options={{
            lerp: 0.05,
            // smoothTouch: true
        }}>
            <div id="loading">
                <div className="text-container" id="loading-image">
                    <Image src={"/static/infinity.gif"} height={60} width={80} alt="infinity" />
                </div>
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
                            {/* <svg id="studio-2" viewBox="0 0 128 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g >
                                    <g id="Group">
                                        <g id="Group_2">
                                            <g id="Group_3">
                                                <g id="Axo_Extrusion_00000101100877482284544040000016603898985761676702_">
                                                    <path id="Axo_panel_00000071553340188230531100000006848414540550834836_" d="M58.6031 47.9406C58.6261 47.9276 58.6621 47.9486 58.6851 47.9876C58.7081 48.0266 58.7081 48.0686 58.6851 48.0826L58.8481 47.9886C58.8711 47.9756 58.8711 47.9336 58.8481 47.8936C58.8251 47.8546 58.7891 47.8336 58.7661 47.8466L58.6031 47.9406Z" fill="#542628" />
                                                    <path id="Axo_base_00000170961293010820922390000013502836963101786764_" d="M58.6031 47.9406C58.5801 47.9536 58.5801 47.9956 58.6031 48.0356C58.6261 48.0746 58.6621 48.0956 58.6851 48.0826C58.7081 48.0696 58.7081 48.0276 58.6851 47.9876C58.6621 47.9486 58.6251 47.9276 58.6031 47.9406Z" fill="#542628" />
                                                </g>
                                                <g id="Axo_Extrusion_00000145780988082681578310000002910665427849204877_">
                                                    <path id="Axo_panel_00000100342584554743792530000005496422628937802127_" d="M58.7321 0.711599C58.7321 0.733599 58.7181 0.754599 58.6891 0.771599C58.6321 0.804599 58.5381 0.804599 58.4811 0.771599C58.4521 0.754599 58.4381 0.733599 58.4381 0.711599V58.4246C58.4381 58.4466 58.4521 58.4686 58.4811 58.4846C58.5381 58.5176 58.6321 58.5176 58.6891 58.4846C58.7181 58.4676 58.7321 58.4466 58.7321 58.4246V0.711599Z" fill="#372122" />
                                                    <path id="Axo_base_00000158733915265143017950000009599838311822130623_" d="M58.7321 0.7116C58.7321 0.6896 58.7181 0.667598 58.6891 0.651598C58.6321 0.618598 58.5381 0.618598 58.4811 0.651598C58.4521 0.668598 58.4381 0.6896 58.4381 0.7116C58.4381 0.7336 58.4521 0.754599 58.4811 0.771599C58.5381 0.804599 58.6321 0.804599 58.6891 0.771599C58.7181 0.755599 58.7321 0.7336 58.7321 0.7116Z" fill="#372122" />
                                                </g>
                                                <path id="Vector" d="M58.7181 53.9316C58.7181 53.9656 58.7721 54.0606 58.8821 54.0776L59.8491 54.3716C61.4841 54.8686 62.6521 56.3106 62.8001 58.0126L62.8331 58.3896C62.8431 58.4016 62.8591 58.4156 62.8771 58.4266C62.9671 58.4776 63.1111 58.4776 63.2001 58.4266C63.2451 58.4006 63.2661 58.3666 63.2661 58.3326L63.2121 57.7856C63.0411 56.0796 62.2511 55.0006 60.3531 54.1686C59.8211 53.9356 58.8241 53.6946 58.8141 53.6886C58.7261 53.6376 58.7181 53.8976 58.7181 53.9316Z" fill="#372122" />
                                                <g id="Axo_Extrusion_00000149375215509465987490000016976121059827596425_">
                                                    <path id="Axo_panel_00000011742053159531748820000010416261512117770673_" d="M58.3011 50.7496C58.3241 50.7366 58.3601 50.7576 58.3831 50.7966C58.4061 50.8356 58.4061 50.8776 58.3831 50.8916L58.5461 50.7976C58.5691 50.7846 58.5691 50.7426 58.5461 50.7026C58.5231 50.6636 58.4871 50.6426 58.4641 50.6556L58.3011 50.7496Z" fill="#542628" />
                                                    <path id="Axo_base_00000146460705212842892850000011961280991028938406_" d="M58.3011 50.7496C58.2781 50.7626 58.2781 50.8046 58.3011 50.8446C58.3241 50.8836 58.3601 50.9046 58.3831 50.8916C58.4061 50.8786 58.4061 50.8366 58.3831 50.7966C58.3601 50.7576 58.3231 50.7366 58.3011 50.7496Z" fill="#542628" />
                                                </g>
                                            </g>
                                            <g id="Axo_Extrusion_00000057847727999127104070000016144930126253269416_">
                                                <g id="Axo_Surface_x2A__00000132089792538588964550000001572054859672109722_">
                                                    <path id="Axo_panel_00000107585869201557042450000013996590412384561077_" d="M58.5781 44.5496V43.8856L58.2911 43.7196V44.3836L58.5781 44.5496Z" fill="#2F1819" />
                                                    <path id="Axo_panel_00000143583477630455648920000002596540412867926186_" d="M58.5781 43.8856L58.8791 43.7106L58.5931 43.5456L58.2911 43.7196L58.5781 43.8856Z" fill="#2F1819" />
                                                </g>
                                                <path id="Axo_base_00000155136486908640808900000012899255906350501808_" d="M58.5781 44.5496L58.8791 44.3756V43.7106L58.5781 43.8856V44.5496Z" fill="#2F1819" />
                                            </g>
                                            <path id="Vector_2" d="M58.4381 43.4466V43.7106C58.4381 43.7326 58.4521 43.7546 58.4811 43.7706C58.5381 43.8036 58.6321 43.8036 58.6891 43.7706C58.7181 43.7536 58.7321 43.7326 58.7321 43.7106L58.7281 43.4466H58.4381Z" fill="#372122" />
                                        </g>
                                        <g id="Axo_Extrusion_00000145038686002881750520000016422203239609140641_">
                                            <path id="Axo_panel_00000044870830195170476760000017017723522342624664_" d="M53.9711 51.9086C53.7051 52.0626 53.5401 52.3916 53.5401 52.8596V54.8916L53.7681 54.7596V52.7286C53.7681 52.2606 53.9331 51.9316 54.1991 51.7776L53.9711 51.9086Z" fill="#372122" />
                                            <g id="Axo_Surface_x2A__00000118398654651853754400000004230417723985335186_">
                                                <path id="Axo_panel_00000049217780173918004890000014910132721768217247_" d="M53.8261 51.6576C54.1291 51.4826 54.5491 51.5076 55.0111 51.7736L58.5451 53.9316L58.7731 53.7996L55.2391 51.6416C54.7771 51.3746 54.3581 51.3496 54.0541 51.5256L53.8261 51.6576Z" fill="#372122" />
                                                <path id="Axo_panel_00000170996617514772386780000009644640507349305278_" d="M58.5451 53.9316V54.1696L58.7731 54.0376V53.8006L58.5451 53.9316Z" fill="#372122" />
                                            </g>
                                            <path id="Axo_base_00000080205445149427973810000014550438908393013941_" d="M53.8261 51.6576C53.5231 51.8326 53.3351 52.2086 53.3351 52.7416V54.7736L53.5401 54.8926V52.8606C53.5401 52.3926 53.7051 52.0626 53.9711 51.9096C54.2371 51.7556 54.6051 51.7776 55.0101 52.0116L58.5441 54.1696V53.9326L55.0101 51.7746C54.5481 51.5076 54.1291 51.4826 53.8261 51.6576Z" fill="#372122" />
                                        </g>
                                        <path id="Vector_3" d="M57.0431 61.6636C57.0431 61.6976 57.0651 61.7306 57.1101 61.7566C57.1991 61.8076 57.3441 61.8076 57.4331 61.7566C57.4781 61.7306 57.5001 61.6976 57.5001 61.6626V58.8766C57.5001 57.8676 57.6971 56.8686 58.0791 55.9346L58.8111 54.1456C58.8171 54.0846 58.7951 54.0496 58.7501 54.0246C58.6611 53.9726 58.5161 53.9726 58.4271 54.0246C58.3821 54.0506 58.3601 54.0836 58.3601 54.1176L57.6281 55.9086C57.2461 56.8426 57.0501 57.8416 57.0501 58.8506V61.6336L57.0431 61.6636Z" fill="#542628" />
                                        <g id="Axo_Extrusion_00000077307204186413169600000015112284312695563426_">
                                            <g id="Axo_Surface_x2A__00000178886621135996381590000003337738180583471780_">
                                                <path id="Axo_base_00000111911548438611131030000003916122720922755736_" d="M10.2841 86.1806L72.9991 122.39L122.279 93.9376L59.5641 57.7286L10.2841 86.1806Z" fill="#E7EDF7" />
                                                <path id="Axo_panel_00000004503910149075482190000016885684510322679227_" d="M122.279 93.9136V37.0106L59.5641 0.801598V57.7056L122.279 93.9136Z" fill="#E7EDF7" />
                                                <path id="Axo_panel_00000075844294849048417180000009644267599039050392_" d="M122.279 37.0106L122.399 36.9406L59.6841 0.732599L59.5641 0.801598L122.279 37.0106Z" fill="#B3C5E3" />
                                            </g>
                                            <path id="Axo_base_00000093153875602403457380000006927651328458045601_" d="M122.279 93.9136L122.399 93.8446V36.9406L122.279 37.0106V93.9136Z" fill="#F0B09B" />
                                        </g>
                                        <g id="Axo_Extrusion_00000175305159050361137710000012379888618559922102_">
                                            <path id="Axo_panel_00000172407643950938380740000002400579197911178128_" d="M122.185 90.5266L125.719 92.4496C126.181 92.7166 126.6 93.1756 126.904 93.7016C127.207 94.2276 127.395 94.8196 127.395 95.3526V97.3846L127.584 97.2756V95.2436C127.584 94.7106 127.396 94.1176 127.093 93.5926C126.79 93.0666 126.371 92.6076 125.908 92.3406L122.374 90.4176L122.185 90.5266Z" fill="#372122" />
                                            <path id="Axo_base_00000022522311446789821760000017495304555881656993_" d="M122.185 90.5266V90.7636L125.719 92.6866C126.124 92.9206 126.492 93.3226 126.758 93.7846C127.024 94.2456 127.189 94.7656 127.189 95.2336V97.2656L127.394 97.3846V95.3526C127.394 94.8196 127.206 94.2266 126.903 93.7016C126.6 93.1756 126.181 92.7166 125.718 92.4496L122.185 90.5266Z" fill="#372122" />
                                        </g>
                                        <path id="Vector_4" d="M117.919 96.3466C117.919 96.3806 117.941 96.4136 117.986 96.4396C118.075 96.4906 118.22 96.4906 118.309 96.4396C118.354 96.4136 118.376 96.3796 118.376 96.3456V94.1946C118.436 92.9276 120.868 91.4226 122.232 90.7616C122.238 90.7006 122.215 90.6656 122.171 90.6406C122.082 90.5886 121.937 90.5886 121.848 90.6406C121.803 90.6666 121.665 90.7086 121.453 90.8046C121.453 90.8046 117.922 92.1716 117.922 94.2896V96.3176L117.919 96.3466Z" fill="#542628" />
                                        <g id="Axo_Extrusion_00000071543436448805719670000011129971941394865084_">
                                            <path id="Axo_panel_00000160870324951915528430000001158163553742636474_" d="M121.331 38.1326C121.086 37.9916 121.086 37.5326 121.331 37.1086C121.576 36.6846 121.973 36.4546 122.218 36.5966L58.9041 0.0416001C58.6591 -0.0993999 58.2621 0.129599 58.0171 0.553599C57.7721 0.977599 57.7721 1.4366 58.0171 1.5776L121.331 38.1326Z" fill="white" />
                                            <path id="Axo_base_00000089556632600808550570000008180272474789253510_" d="M121.331 38.1326C121.576 38.2746 121.973 38.0446 122.218 37.6206C122.463 37.1966 122.463 36.7376 122.218 36.5966C121.973 36.4546 121.576 36.6846 121.331 37.1086C121.086 37.5326 121.086 37.9916 121.331 38.1326Z" fill="#F0B09B" />
                                            <path id="Axo_base_00000090978956498567804970000002814464033463759292_" d="M121.5 37.8396C121.652 37.9276 121.897 37.7856 122.049 37.5226C122.201 37.2596 122.201 36.9766 122.049 36.8886C121.897 36.8006 121.652 36.9426 121.5 37.2056C121.349 37.4686 121.349 37.7526 121.5 37.8396Z" fill="#402B2C" />
                                        </g>
                                        <g id="Group_4">
                                            <g id="Group_5">
                                                <g id="Axo_Extrusion_00000059281259046519950600000016329570383258441107_">
                                                    <path id="Axo_panel_00000128479916445077384170000017384066813658562485_" d="M122.025 84.5576C122.048 84.5446 122.084 84.5656 122.107 84.6046C122.13 84.6436 122.13 84.6866 122.107 84.6996L122.27 84.6056C122.293 84.5926 122.293 84.5496 122.27 84.5106C122.247 84.4716 122.211 84.4506 122.188 84.4636L122.025 84.5576Z" fill="#542628" />
                                                    <path id="Axo_base_00000029751869903053538200000005309899287767714471_" d="M122.025 84.5576C122.002 84.5706 122.002 84.6126 122.025 84.6526C122.048 84.6916 122.084 84.7126 122.107 84.6996C122.13 84.6866 122.13 84.6446 122.107 84.6046C122.084 84.5656 122.048 84.5446 122.025 84.5576Z" fill="#542628" />
                                                </g>
                                                <g id="Axo_Extrusion_00000035532510363162934710000002841233612131216020_">
                                                    <path id="Axo_panel_00000027568324798041202620000015627639619360173495_" d="M122.155 37.3286C122.155 37.3506 122.141 37.3716 122.112 37.3886C122.055 37.4216 121.961 37.4216 121.904 37.3886C121.875 37.3726 121.861 37.3506 121.861 37.3286V95.0426C121.861 95.0646 121.875 95.0856 121.904 95.1026C121.961 95.1356 122.055 95.1356 122.112 95.1026C122.141 95.0856 122.155 95.0646 122.155 95.0426V37.3286Z" fill="#372122" />
                                                    <path id="Axo_base_00000085241382332479879910000016284075173348770214_" d="M122.155 37.3286C122.155 37.3066 122.141 37.2846 122.112 37.2686C122.055 37.2356 121.961 37.2356 121.904 37.2686C121.875 37.2856 121.861 37.3066 121.861 37.3286C121.861 37.3506 121.875 37.3716 121.904 37.3886C121.961 37.4216 122.055 37.4216 122.112 37.3886C122.14 37.3726 122.155 37.3506 122.155 37.3286Z" fill="#372122" />
                                                </g>
                                                <path id="Vector_5" d="M122.12 90.4826C122.12 90.5166 121.964 90.7346 122.305 90.6946C122.862 90.5466 123.408 90.9686 123.404 91.5456C123.397 92.5416 123.331 93.8046 123.331 93.8046C123.341 93.8166 123.357 93.8306 123.375 93.8406C123.464 93.8916 123.609 93.8916 123.698 93.8406C123.743 93.8146 123.765 93.7806 123.765 93.7466C123.765 93.7466 124.032 90.9356 123.532 90.5256C123.003 90.0926 122.12 90.4486 122.12 90.4826Z" fill="#372122" />
                                                <g id="Axo_Extrusion_00000061464887562676074010000009999699722068313772_">
                                                    <path id="Axo_panel_00000078008880633257142810000008131051974086289826_" d="M121.723 87.3666C121.746 87.3536 121.782 87.3746 121.805 87.4136C121.828 87.4526 121.828 87.4956 121.805 87.5086L121.968 87.4146C121.991 87.4016 121.991 87.3596 121.968 87.3196C121.945 87.2806 121.909 87.2596 121.886 87.2726L121.723 87.3666Z" fill="#542628" />
                                                    <path id="Axo_base_00000166658606026290227350000002460482206412770219_" d="M121.723 87.3666C121.7 87.3796 121.7 87.4216 121.723 87.4616C121.746 87.5006 121.782 87.5216 121.805 87.5086C121.828 87.4956 121.828 87.4536 121.805 87.4136C121.782 87.3746 121.746 87.3536 121.723 87.3666Z" fill="#542628" />
                                                </g>
                                            </g>
                                            <g id="Axo_Extrusion_00000090258149494503289030000003763325688118234263_">
                                                <g id="Axo_Surface_x2A__00000005966009764216786940000014975201385394910612_">
                                                    <path id="Axo_panel_00000092453406231843927380000008844222938657356186_" d="M122 81.1666V80.5026L121.713 80.3366V81.0006L122 81.1666Z" fill="#2F1819" />
                                                    <path id="Axo_panel_00000031202261320638044810000008416766824594764446_" d="M122 80.5026L122.302 80.3276L122.015 80.1626L121.713 80.3366L122 80.5026Z" fill="#2F1819" />
                                                </g>
                                                <path id="Axo_base_00000150075000571534014990000003317190278763568056_" d="M122 81.1666L122.302 80.9916V80.3276L122 80.5026V81.1666Z" fill="#2F1819" />
                                            </g>
                                            <path id="Vector_6" d="M121.86 80.0636V80.3276C121.86 80.3496 121.874 80.3716 121.903 80.3876C121.96 80.4206 122.054 80.4206 122.111 80.3876C122.14 80.3716 122.154 80.3496 122.154 80.3276L122.15 80.0636H121.86Z" fill="#372122" />
                                        </g>
                                    </g>
                                    <g id="Group_6">
                                        <g id="Group_7">
                                            <g id="Group_8">
                                                <g id="Axo_Extrusion_00000147914357639810199150000016426269935158152619_">
                                                    <path id="Axo_panel_00000170260498954333546960000001062664289504619699_" d="M18.1151 55.0916C18.1151 55.1396 18.1471 55.1886 18.2111 55.2256C18.3391 55.2996 18.5461 55.2996 18.6741 55.2256C18.7381 55.1886 18.7701 55.1406 18.7701 55.0916V68.0586C18.7701 68.1066 18.7381 68.1556 18.6741 68.1916C18.5461 68.2656 18.3391 68.2656 18.2111 68.1916C18.1471 68.1546 18.1151 68.1066 18.1151 68.0586V55.0916Z" fill="#BCC0CC" />
                                                    <path id="Axo_base_00000160175650993097178230000007537883291390742158_" d="M18.1151 55.0916C18.1151 55.0436 18.1471 54.9946 18.2111 54.9576C18.3391 54.8836 18.5461 54.8836 18.6741 54.9576C18.7381 54.9946 18.7701 55.0426 18.7701 55.0916C18.7701 55.1396 18.7381 55.1886 18.6741 55.2256C18.5461 55.2996 18.3391 55.2996 18.2111 55.2256C18.1471 55.1886 18.1151 55.1396 18.1151 55.0916Z" fill="#372122" />
                                                </g>
                                                <g id="Group_9">
                                                    <path id="Vector_7" d="M28.5571 65.1466C28.5571 65.2376 28.4961 65.3286 28.3751 65.3966C28.1341 65.5366 27.7431 65.5366 27.5011 65.3966L27.4311 65.3486C27.4211 65.3406 18.9501 56.7806 18.9501 56.7806C18.8291 56.7106 18.7701 56.6176 18.7701 56.5266C18.7701 56.4356 18.8311 56.3446 18.9501 56.2746C19.1921 56.1356 19.5831 56.1356 19.8261 56.2746L19.8961 56.3226C19.9061 56.3306 28.3751 64.8916 28.3751 64.8916C28.4971 64.9636 28.5571 65.0546 28.5571 65.1466Z" fill="#BCC0CC" />
                                                    <path id="Vector_8" d="M22.9181 77.4226L22.9021 77.3426C22.9131 77.3706 22.9181 77.3956 22.9181 77.4226Z" fill="#372122" />
                                                    <path id="Vector_9" d="M18.1311 57.0546C18.1201 57.0306 18.1151 57.0056 18.1151 56.9796L18.1311 57.0546Z" fill="#372122" />
                                                    <path id="Vector_10" d="M18.1151 56.6226C18.1151 56.7136 18.0541 56.8046 17.9351 56.8726L7.22809 68.5576C7.20109 68.5916 7.16109 68.6246 7.11209 68.6536C6.87009 68.7926 6.47909 68.7926 6.23709 68.6536C6.11609 68.5836 6.05707 68.4906 6.05707 68.3996C6.05707 68.3326 6.09107 68.2646 6.15707 68.2056L16.9011 56.5286C16.9281 56.4696 16.9811 56.4136 17.0601 56.3696C17.3021 56.2296 17.6931 56.2296 17.9361 56.3696C18.0561 56.4386 18.1151 56.5296 18.1151 56.6226Z" fill="#BCC0CC" />
                                                    <path id="Vector_11" d="M22.9181 77.4226C22.9181 77.5136 22.8571 77.6046 22.7381 77.6746C22.4961 77.8136 22.1051 77.8136 21.8631 77.6746C21.7421 77.6046 21.6831 77.5136 21.6831 77.4206L18.1161 56.9786C18.1161 56.8876 18.1771 56.7936 18.2981 56.7256C18.5391 56.5856 18.9311 56.5856 19.1721 56.7256C19.2931 56.7956 19.3541 56.8866 19.3541 56.9786L22.9181 77.4226Z" fill="#BCC0CC" />
                                                </g>
                                                <path id="Vector_12" d="M11.6431 63.5876L18.2111 68.1926L18.4421 68.0666L11.6431 63.3506V63.5876Z" fill="#BCC0CC" />
                                                <path id="Vector_13" d="M24.3601 62.0416L18.6631 68.1136L18.4421 68.0666L24.3601 61.8046V62.0416Z" fill="#BCC0CC" />
                                                <path id="Vector_14" d="M18.6741 68.1926H20.7751L20.7541 68.0346H18.6531L18.6741 68.1926Z" fill="#BCC0CC" />
                                            </g>
                                            <g id="Group_10">
                                                <path id="Axo_base_00000065782675103992581440000003802404718696061090_" d="M11.1261 58.5646C9.87207 57.8406 9.09607 56.2876 9.09607 54.0776V31.7616C9.09607 27.3406 12.2001 21.9656 16.0281 19.7546L25.0041 14.5726C26.9191 13.4676 28.6521 13.3626 29.9061 14.0876C31.1601 14.8116 31.9361 16.3646 31.9361 18.5746V40.8896C31.9361 45.3106 28.8331 50.6856 25.0041 52.8966L16.0281 58.0796C14.1141 59.1846 12.3811 59.2886 11.1261 58.5646Z" fill="white" />
                                                <g id="Axo_Compound_Extrusion_00000152245933041275848770000018380992716146021523_">
                                                    <g id="Axo_Extrusion_00000082335113018994817710000015505809941836785582_">
                                                        <path id="Axo_panel_00000067235547106308250220000009539681735111039671_" d="M11.3281 58.2156C12.5321 58.9106 14.1951 58.8116 16.0281 57.7536L25.0041 52.5706C28.6711 50.4536 31.6541 45.2866 31.6541 41.0526V18.7376C31.6541 16.6206 30.9081 15.1316 29.7041 14.4356L29.2771 14.1886C30.4811 14.8836 31.2271 16.3726 31.2271 18.4906V40.8056C31.2271 45.0396 28.2441 50.2066 24.5771 52.3236L15.6011 57.5056C13.7681 58.5646 12.1051 58.6626 10.9011 57.9676L11.3281 58.2156Z" fill="#E7EDF7" />
                                                        <path id="Axo_panel_00000111165908108734024320000006235133047828729501_" d="M30.1031 13.7456C28.7971 12.9916 26.9931 13.0986 25.0051 14.2466L16.0291 19.4286C12.0511 21.7256 8.81509 27.3306 8.81509 31.9236V54.2386C8.81509 56.5356 9.62409 58.1506 10.9311 58.9046L10.5041 58.6576C9.19809 57.9036 8.38809 56.2886 8.38809 53.9916V31.6776C8.38809 27.0846 11.6241 21.4796 15.6021 19.1826L24.5781 13.9996C26.5671 12.8516 28.3701 12.7446 29.6761 13.4986L30.1031 13.7456Z" fill="#E7EDF7" />
                                                    </g>
                                                    <path id="Axo_Compound_00000035488775917494320420000013620077071428559270_" d="M25.0051 53.2226L16.0291 58.4056C12.0511 60.7026 8.81509 58.8336 8.81509 54.2406V31.9246C8.81509 27.3316 12.0511 21.7266 16.0291 19.4296L25.0051 14.2476C28.9831 11.9506 32.2191 13.8196 32.2191 18.4126V40.7276C32.2191 45.3206 28.9821 50.9256 25.0051 53.2226ZM16.0281 20.0806C12.3611 22.1976 9.37808 27.3646 9.37808 31.5986V53.9136C9.37808 58.1476 12.3611 59.8696 16.0281 57.7526L25.0041 52.5696C28.6711 50.4526 31.6541 45.2856 31.6541 41.0516V18.7376C31.6541 14.5036 28.6711 12.7806 25.0041 14.8986L16.0281 20.0806Z" fill="#BCC0CC" />
                                                </g>
                                            </g>
                                        </g>
                                        <g id="Group_11">
                                            <g id="Group_12">
                                                <g id="Group_13">
                                                    <g id="Group_14">
                                                        <g id="Axo_Extrusion_00000075123222248563015120000011968756453867007360_">
                                                            <path id="Axo_panel_00000000928151482464151760000001669082020675573663_" d="M36.0681 86.5886C37.1281 86.8316 37.1281 89.1706 36.1011 90.2746C35.7781 90.6216 35.4301 90.7516 35.1281 90.6826L36.0541 90.8896C37.1121 91.1326 38.1351 89.0316 37.6921 87.5876C37.5531 87.1346 37.2961 86.8656 36.9941 86.7956L36.0681 86.5886Z" fill="#876669" />
                                                            <g id="Axo_Extrusion_00000016057340298347343280000005020258637514864016_">
                                                                <path id="Axo_panel_00000079449327988246206920000007118980930070827421_" d="M35.8141 86.5306C36.8741 86.7736 36.8741 89.1126 35.8471 90.2166C35.5251 90.5626 35.1761 90.6936 34.8741 90.6246L35.1281 90.6826C36.1861 90.9256 37.2091 88.8246 36.7661 87.3806C36.6271 86.9276 36.3701 86.6586 36.0681 86.5896L35.8141 86.5306Z" fill="#F1F3F6" />
                                                                <g id="Axo_Extrusion_00000007394500040501588580000003954336343159209629_">
                                                                    <path id="Axo_panel_00000041278067077836858340000012894967924011507372_" d="M34.4831 86.2246C35.5431 86.4676 35.5431 88.8066 34.5161 89.9106C34.1941 90.2566 33.8451 90.3876 33.5431 90.3186L34.8741 90.6246C35.9321 90.8676 36.9551 88.7666 36.5121 87.3226C36.3731 86.8696 36.1161 86.6006 35.8141 86.5306L34.4831 86.2246Z" fill="#876669" />
                                                                    <path id="Axo_base_00000013170568243393126200000009514517712849875380_" d="M34.4831 86.2246C33.4251 85.9816 32.4021 88.0826 32.8451 89.5266C33.1231 90.4316 33.8711 90.6036 34.5161 89.9106C35.5291 88.8226 35.5511 86.4696 34.4831 86.2246Z" fill="#582A2C" />
                                                                    <path id="Axo_panel_00000022552403646189159880000006302057515836645529_" d="M28.1081 85.1256C28.3591 85.1836 28.5721 85.4066 28.6881 85.7826C29.0511 86.9646 28.2131 88.7276 27.3281 88.5246L33.5141 89.9456C33.7651 90.0036 34.0541 89.8946 34.3221 89.6076C35.1631 88.7046 35.1811 86.7506 34.2951 86.5476L28.1081 85.1256Z" fill="#754F53" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="Group_15">
                                                            <g id="Axo_Projection_00000111182096743826651090000005125316499620690097_">
                                                                <g id="Axo_Extrusion_00000104678162864237069440000003510879489119931303_">
                                                                    <g id="Axo_Surface_x2A__00000063609268237724062500000008584610720145857961_">
                                                                        <path id="Axo_panel_00000093891698523442614960000001986995247551268786_" d="M29.3511 87.4876L26.6091 90.1776L27.7051 90.5376C28.1101 90.6306 28.5331 90.5006 28.8161 90.1966L31.2011 87.6336L29.3511 87.4876Z" fill="#582A2C" />
                                                                        <path id="Axo_panel_00000007400028252739653820000014016588954553481645_" d="M30.8341 85.8936L27.9921 88.9476L29.3581 89.2616C29.7931 89.3616 30.2491 89.2216 30.5531 88.8946L32.9031 86.3686L30.8341 85.8936Z" fill="#582A2C" />
                                                                        <path id="Axo_panel_00000174600224691695367520000013665640098691671699_" d="M27.8461 82.5836L29.1511 86.8376C29.2751 87.2396 29.6031 87.5456 30.0131 87.6396L30.7691 87.8136C31.0581 87.8796 31.3111 87.6086 31.2241 87.3246L29.9251 83.0906C29.8061 82.7036 29.4911 82.4126 29.0971 82.3216L28.2671 82.1306C27.9991 82.0696 27.7651 82.3206 27.8461 82.5836Z" fill="#603537" />
                                                                    </g>
                                                                    <path id="Axo_base_00000062907821986256484750000009451260742655576500_" d="M27.4861 82.4436L25.7061 84.3566C25.2221 84.9136 24.9531 85.4686 25.1551 86.1296L26.3171 89.9166C26.4021 90.1936 26.7551 90.2746 26.9531 90.0626L28.9641 87.9016C29.2051 87.6426 29.2961 87.2786 29.2051 86.9376C29.2051 86.9376 28.2121 83.5906 27.8691 82.5386C27.7811 82.2706 28.0611 82.1436 28.0611 82.1436C28.0611 82.1436 27.7641 82.0886 27.4861 82.4436Z" fill="#754F53" />
                                                                </g>
                                                                <g id="Axo_Extrusion_00000122690078984808618620000016106359195330437266_">
                                                                    <path id="Axo_panel_00000111173192542561362590000006009813956969889434_" d="M29.0251 83.5256C29.1741 83.5596 29.3001 83.6916 29.3681 83.9136L29.4981 84.3376C29.6341 84.7796 29.4871 85.4186 29.1721 85.7576L28.9091 86.0406L30.9781 86.5156L32.5851 86.6246C32.9761 86.6516 33.3341 86.3946 33.4271 86.0146C33.4921 85.7496 33.4971 85.4696 33.4261 85.2396L33.2961 84.8156C33.2281 84.5936 33.1021 84.4616 32.9531 84.4276L29.0251 83.5256Z" fill="#754F53" />
                                                                    <path id="Axo_base_00000169519802484943182130000005377212862214637475_" d="M28.5481 83.7256L28.0781 84.2306L28.7021 86.2636L29.1721 85.7586C29.4881 85.4186 29.6351 84.7826 29.4981 84.3386L29.3681 83.9146C29.2321 83.4696 28.8651 83.3846 28.5481 83.7256Z" fill="#754F53" />
                                                                </g>
                                                            </g>
                                                            <g id="Axo_base_00000005255075558811565760000002960893829546927790_">
                                                                <path id="Vector_15" d="M28.9711 87.6796L27.6791 83.4686L25.5321 85.7766L26.8241 89.9866L28.9711 87.6796Z" fill="white" />
                                                                <path id="Vector_16" d="M28.8321 87.6476L26.8791 89.7466L25.6701 85.8086L27.6231 83.7096L28.8321 87.6476ZM25.3931 85.7446L26.7691 90.2276L29.1101 87.7116L27.7341 83.2296L25.3931 85.7446Z" fill="#876669" />
                                                            </g>
                                                            <g id="Axo_base_00000085210956472292277740000017582516015888162234_">
                                                                <path id="Vector_17" d="M28.7741 85.4746L29.2791 84.9316L28.9641 83.9056L28.4591 84.4486L28.7741 85.4746Z" fill="#876669" />
                                                                <path id="Vector_18" d="M28.1821 84.3846L29.0741 83.4256L29.5561 84.9956L28.6641 85.9546L28.1821 84.3846ZM28.8531 84.3866L28.7361 84.5126L28.8841 84.9946L29.0011 84.8686L28.8531 84.3866Z" fill="#603537" />
                                                            </g>
                                                        </g>
                                                        <g id="Axo_Extrusion_00000101812468790202552240000014564713551666163641_">
                                                            <path id="Axo_panel_00000098943801697055052880000001796825500410054320_" d="M26.3591 83.5256C26.6851 83.6006 26.6581 84.2966 26.3691 84.6066C26.2741 84.7086 26.1721 84.7466 26.0841 84.7266L26.2651 84.7686C26.5891 84.8436 26.8691 84.2056 26.7451 83.7996C26.6741 83.5676 26.5541 83.5706 26.3591 83.5256Z" fill="#876669" />
                                                            <path id="Axo_base_00000044864562888445968010000006066716619135272367_" d="M26.3591 83.5256C26.0351 83.4506 25.7551 84.0886 25.8791 84.4946C25.9601 84.7576 26.1781 84.8116 26.3691 84.6076C26.6651 84.2886 26.6751 83.5986 26.3591 83.5256Z" fill="#582A2C" />
                                                        </g>
                                                        <path id="Axo_base_00000034789400837680301800000002888757653164991144_" d="M27.1501 83.7676C27.2781 83.7966 27.3921 83.5436 27.3421 83.3796C27.3101 83.2756 27.2231 83.2516 27.1461 83.3346C27.0291 83.4606 27.0221 83.7386 27.1501 83.7676Z" fill="#754F53" />
                                                        <path id="Axo_base_00000067221455476282661220000014681478881634778043_" d="M25.7241 85.3006C25.8521 85.3296 25.9661 85.0766 25.9161 84.9126C25.8841 84.8086 25.7971 84.7846 25.7201 84.8676C25.6021 84.9936 25.5951 85.2716 25.7241 85.3006Z" fill="#754F53" />
                                                        <path id="Axo_base_00000090280309742375887280000004462346166922577302_" d="M25.2821 85.7756C25.4101 85.8046 25.5241 85.5516 25.4731 85.3876C25.4411 85.2836 25.3541 85.2596 25.2771 85.3426C25.1601 85.4686 25.1541 85.7456 25.2821 85.7756Z" fill="#754F53" />
                                                        <g id="Group_16">
                                                            <path id="Vector_19" d="M33.4261 85.7796L32.4471 86.0826L29.6201 85.4676C29.6201 85.4676 29.8721 84.9796 29.7961 84.5906C29.7191 84.2016 29.4951 83.7186 29.4951 83.7186L33.4261 85.7796Z" fill="#754F53" />
                                                            <path id="Vector_20" d="M33.4261 85.7796C33.0781 85.8106 32.7381 85.8666 32.4011 85.9346L32.4801 85.9316C31.5281 85.6226 30.4771 85.3836 29.6661 85.2546L29.8131 85.5676C29.9431 85.2796 30.0311 84.8626 29.9341 84.5546C29.8361 84.2416 29.6781 83.9716 29.4941 83.7186C29.7061 84.7486 29.7621 84.7436 29.2991 85.6046C30.2731 85.8756 31.2381 86.0996 32.4701 86.2406C32.8011 86.0996 33.1111 85.9566 33.4261 85.7796Z" fill="#876669" />
                                                        </g>
                                                        <g id="Axo_Extrusion_00000074409776356778055290000006338605485693329322_">
                                                            <g id="Axo_Surface_x2A__00000129200684461847691450000006312224737603968674_">
                                                                <path id="Axo_panel_00000099659209343496248930000001485460648761702296_" d="M32.0171 84.8806C31.9671 84.9346 31.8811 84.9556 31.7711 84.9306L29.9431 84.5106L29.8821 84.5766L31.7101 84.9966C31.8201 85.0216 31.9051 85.0006 31.9561 84.9466L32.0171 84.8806Z" fill="#603537" />
                                                                <path id="Axo_panel_00000091695366780972268820000017569432604821935034_" d="M29.9431 84.5096L29.7051 83.7326L29.6431 83.7986L29.8821 84.5756L29.9431 84.5096Z" fill="#603537" />
                                                            </g>
                                                            <path id="Axo_base_00000047768396691471395150000014102782037265755058_" d="M32.0171 84.8806C32.2001 84.6846 31.8681 84.2296 31.5331 84.1526L29.7051 83.7326L29.9441 84.5106L31.7721 84.9306C31.8811 84.9556 31.9671 84.9346 32.0171 84.8806Z" fill="#876669" />
                                                        </g>
                                                    </g>
                                                    <path id="Vector_21" d="M0.684071 130.004C1.16407 130.998 1.42108 130.518 3.29708 131.255C4.28708 131.642 4.78608 131.758 5.15108 131.705C5.47908 131.66 5.69407 131.482 6.05907 131.255C6.83307 130.779 7.34708 128.824 6.64708 128.53C5.95108 128.236 5.47106 128.53 5.47106 128.53L5.72808 126.137L6.64708 124.223L3.29808 123.487C3.29808 123.487 2.78007 124.026 2.19207 124.789C1.93507 125.12 1.66707 125.493 1.42107 125.88C0.609071 127.168 0.207071 129.01 0.684071 130.004Z" fill="#582A2C" />
                                                    <path id="Vector_22" d="M10.8681 127.206L10.0721 126.138C10.0721 126.138 7.41607 126.075 6.97807 126.138C4.66007 126.469 6.79407 128.531 6.97807 130.187C7.16207 131.844 9.87508 135.767 11.3841 135.915C12.8931 136.062 13.6431 134.936 13.7531 134.126C13.8641 133.316 11.6551 132.285 11.6551 132.285L10.8681 127.206Z" fill="#582A2C" />
                                                    <path id="Vector_23" d="M6.68509 126.703C6.68509 126.703 8.69809 128.274 8.77109 130.532C8.84509 132.79 9.14909 133.772 9.83109 134.483C10.5131 135.194 12.4121 135.8 12.3471 135.82C12.2811 135.84 11.8631 135.929 11.1911 135.929C9.59407 135.927 7.22209 134.262 6.97809 133.011C6.73409 131.759 5.51908 127.891 5.55008 127.404C5.58108 126.917 6.10809 126.155 6.68509 126.703Z" fill="#603537" />
                                                    <path id="Vector_24" d="M6.31509 126.986C6.31509 126.986 8.32809 128.557 8.40109 130.815C8.47509 133.073 8.77908 134.055 9.46108 134.766C10.1431 135.478 11.3561 135.908 11.2901 135.928C11.2241 135.948 9.81709 135.861 8.27609 135.445C6.73509 135.029 6.85209 134.545 6.60809 133.293C6.36409 132.041 5.50507 128.036 5.53607 127.55C5.56607 127.064 5.73809 126.438 6.31509 126.986Z" fill="#876669" />
                                                    <path id="Vector_25" d="M0.684075 130.004C1.16407 130.998 2.02606 130.98 3.90206 131.717C4.89206 132.104 4.78609 131.757 5.15109 131.705C5.03909 131.608 4.92806 131.5 4.84606 131.381C4.42906 130.782 3.83709 127.268 3.72909 126.11C3.62109 124.952 2.78408 124.789 2.78408 124.789C2.57908 124.715 2.12007 124.625 1.71307 124.985C1.45607 125.316 1.66808 125.492 1.42208 125.879C0.609081 127.168 0.207075 129.01 0.684075 130.004Z" fill="#603537" />
                                                    <path id="Vector_26" d="M0.204078 130.2C0.684078 131.194 0.941085 130.714 2.81708 131.451C3.80708 131.838 4.30609 131.953 4.67109 131.901C4.55909 131.804 4.4481 131.696 4.3661 131.577C3.9491 130.978 3.35709 127.464 3.24909 126.306C3.14109 125.148 2.30408 124.985 2.30408 124.985C2.09908 124.911 1.9021 124.914 1.7121 124.985C1.4551 125.316 1.18708 125.689 0.941078 126.076C0.130078 127.364 -0.271922 129.206 0.204078 130.2Z" fill="#876669" />
                                                    <path id="Vector_27" d="M12.5021 112.74C12.5021 112.74 19.4231 116.947 18.3181 119.849C17.2131 122.751 5.72809 126.137 5.72809 126.137C5.72809 126.137 4.7711 124.45 4.0351 123.968L3.2981 123.486C3.2981 123.486 6.83307 119.74 8.74707 118.558C10.6611 117.376 5.21308 116.143 9.11508 113.446C13.0171 110.75 12.5021 112.74 12.5021 112.74Z" fill="#4360A3" />
                                                    <path id="Vector_28" d="M6.61108 108.502C6.61108 108.502 2.12006 112.74 5.35906 118.525C7.03106 121.512 22.6611 125.255 22.6611 125.255C22.6611 125.255 16.9011 124.372 13.4861 125.255L10.0711 126.138C10.0711 126.138 9.60109 129.083 10.8671 129.819C12.1331 130.555 12.6481 130.555 12.6481 130.555C12.6481 130.555 29.2881 131.88 30.8341 127.757C32.3801 123.634 30.9081 121.584 28.9201 119.848C26.9321 118.112 15.2251 112.032 15.2251 112.032L6.61108 108.502Z" fill="#4965A5" />
                                                    <path id="Vector_29" d="M31.4421 91.8136C31.1721 91.6416 30.8041 91.5926 30.8041 91.5926C30.8041 91.5926 29.7981 90.1446 29.7491 89.2366C29.7001 88.3286 29.6751 87.9116 29.7491 87.5926C29.8231 87.2736 29.2141 86.2916 29.7031 86.3896C30.1911 86.4876 30.5421 87.4696 30.4771 87.5926C30.4121 87.7156 30.7311 88.2786 30.7311 88.3036C30.7311 88.3286 31.8601 86.5476 31.8351 86.3826C31.8101 86.2176 31.7861 85.6536 32.0071 85.3586C32.2281 85.0636 32.3751 85.2116 32.4731 85.6776C32.5711 86.1436 32.6451 86.5606 32.8411 86.7576C33.0371 86.9536 33.1421 87.3896 33.1171 87.6776C33.0921 87.9656 33.3751 88.0336 33.3991 88.2236C33.4241 88.4136 33.3991 88.7516 33.3991 88.7516C33.3991 88.7516 33.6021 88.8866 33.6261 89.0896C33.6511 89.2916 33.6011 89.3776 33.5831 89.3906C33.5651 89.4036 33.8421 89.9856 33.6331 90.2006C33.4241 90.4156 32.0681 91.9986 31.9021 91.9986C31.7361 91.9976 31.4421 91.8136 31.4421 91.8136Z" fill="#F0B09B" />
                                                    <path id="Vector_30" d="M17.8321 90.0606C17.8321 90.0606 15.3731 88.8086 12.7961 91.0176C10.2191 93.2266 5.8121 108.569 5.1501 110.371C4.4881 112.173 5.29409 115.143 6.97709 115.978C19.1281 122.005 20.4521 116.741 20.8211 115.978C21.1901 115.215 24.4291 105.329 25.0181 102.996C25.6071 100.664 25.9021 96.4406 25.6071 95.1656C25.3131 93.8896 17.8321 90.0606 17.8321 90.0606Z" fill="#4C8D9E" />
                                                    <path id="Vector_31" d="M32.6261 91.3126L32.8471 92.2456C32.8471 92.2456 33.7061 93.6936 33.8291 94.8966C33.9521 96.0986 34.3941 102.579 33.8291 103.511C33.2651 104.444 34.0501 105.032 29.7061 104.272C25.3621 103.511 23.1291 104.051 22.6131 100.026C22.0981 96.0006 22.6131 93.9886 24.1351 94.3566C25.6571 94.7246 26.4911 95.7306 27.3251 96.6146C28.1591 97.4986 30.1231 98.7746 30.1231 98.7746C30.1231 98.7746 28.9701 94.7256 29.8291 93.6456L30.6881 92.5656L30.5651 91.3136C30.5651 91.3136 30.3441 90.1836 32.6261 91.3126Z" fill="#4C8D9E" />
                                                    <path id="Vector_32" d="M28.0731 87.7966C28.0731 87.7966 28.7541 84.8886 28.5701 84.1886C28.3861 83.4896 28.2641 82.1826 28.2641 82.1826C28.2641 82.1826 28.8961 81.6486 28.2641 81.1516C27.6321 80.6546 24.8521 78.7036 21.9441 80.1946C19.0361 81.6856 19.9431 85.6426 20.3181 86.6556C20.6921 87.6676 20.9131 88.4226 20.9131 88.4226C20.9131 88.4226 19.9371 89.3356 21.0601 89.7076C22.1831 90.0796 28.0731 87.7966 28.0731 87.7966Z" fill="#603537" />
                                                    <path id="Vector_33" d="M28.7181 83.3796C28.7181 83.3796 28.9761 84.5206 28.7181 84.9806C28.4601 85.4406 28.6811 86.2326 28.7181 86.8396C28.7551 87.4466 28.0741 89.9136 27.4851 90.3916C26.8961 90.8706 26.3441 90.3916 26.0491 90.6866C25.7541 90.9806 24.3371 93.8796 24.3151 93.8636C24.2931 93.8476 21.9621 92.2876 20.4711 91.8276C18.9801 91.3676 18.9371 90.6426 18.9371 90.6426C18.9371 90.6426 20.0591 90.3556 20.3171 89.7486C20.5751 89.1416 20.9121 88.4226 20.9121 88.4226C20.9121 88.4226 21.3071 89.2196 22.8531 89.1826C24.3991 89.1456 25.7211 88.6216 25.7211 88.6216C25.7211 88.6216 25.2111 88.2016 25.7211 87.4286C26.2311 86.6556 26.7651 86.5816 27.1881 86.8026C27.6111 87.0236 27.6301 87.3736 27.6301 87.4286C27.6301 87.4836 28.6561 85.5516 28.2621 84.7966C27.8691 84.0416 28.2621 82.1826 28.2621 82.1826C28.2621 82.1826 28.6631 83.0836 28.7181 83.3796Z" fill="#F0B09B" />
                                                    <path id="Vector_34" d="M25.1981 94.5896C25.1981 94.5896 24.5021 92.4906 23.2141 91.8646C21.9261 91.2386 19.8841 90.0236 19.8841 90.0236C19.8841 90.0236 16.7321 88.1586 14.5611 89.9746C12.3901 91.7906 12.2061 97.1176 14.9301 96.8596C17.6541 96.6016 20.8141 95.0666 22.4191 94.9566C24.0241 94.8466 25.1981 94.5896 25.1981 94.5896Z" fill="#619AAF" />
                                                    <path id="Vector_35" d="M23.4471 91.9976C23.4471 91.9976 18.5141 91.6066 17.5321 91.8036C16.5501 91.9996 16.2161 89.7656 16.8691 89.4966C17.5231 89.2276 17.8671 88.9456 19.3281 89.7486C20.7901 90.5516 23.4471 91.9976 23.4471 91.9976Z" fill="#4C8D9E" />
                                                </g>
                                                <g id="Group_17">
                                                    <path id="Vector_36" d="M18.3181 119.849C19.9311 120.9 21.5521 121.94 23.1941 122.946C24.0151 123.449 24.8491 123.931 25.6711 124.434C26.4931 124.937 27.4551 125.236 28.2091 125.764L28.1831 125.69C28.0911 125.898 27.8141 126.1 27.5721 126.245C27.3181 126.398 27.0441 126.522 26.7691 126.64C26.2171 126.877 25.6381 127.052 25.0571 127.213C23.8921 127.535 22.7041 127.763 21.5011 127.894C20.2991 128.024 19.0881 128.076 17.8781 128.074C16.6681 128.072 15.4551 128.038 14.2481 127.927C16.6561 128.202 19.0961 128.256 21.5141 128.019C22.7231 127.9 23.9241 127.68 25.0981 127.367C25.6851 127.21 26.2701 127.036 26.8361 126.802C27.1191 126.685 27.4011 126.561 27.6611 126.393C27.9221 126.224 28.1941 126.074 28.3451 125.717C28.3631 125.673 28.3191 125.643 28.3191 125.643C27.4831 125.07 26.5551 124.836 25.7391 124.315C24.9021 123.842 24.0761 123.348 23.2521 122.852L18.3181 119.849Z" fill="#5A82C0" />
                                                </g>
                                            </g>
                                            <g id="Group_18">
                                                <g id="Group_19">
                                                    <g id="Group_20">
                                                        <g id="Axo_Extrusion_00000176745725350844214530000004948028243891048845_">
                                                            <path id="Axo_panel_00000130606065000115187020000012436646325229820851_" d="M106.971 92.6226C107.028 92.5896 107.119 92.6426 107.176 92.7406C107.232 92.8386 107.232 92.9446 107.176 92.9766L107.584 92.7416C107.641 92.7086 107.641 92.6026 107.584 92.5056C107.527 92.4076 107.436 92.3546 107.379 92.3876L106.971 92.6226Z" fill="#542628" />
                                                            <path id="Axo_base_00000070798596563685569440000016610742361055962007_" d="M106.971 92.6226C106.914 92.6556 106.914 92.7606 106.971 92.8586C107.028 92.9566 107.119 93.0096 107.176 92.9766C107.232 92.9436 107.232 92.8386 107.176 92.7406C107.119 92.6426 107.027 92.5896 106.971 92.6226Z" fill="#542628" />
                                                        </g>
                                                        <g id="Axo_Extrusion_00000060728331117145879530000016211225892028780478_">
                                                            <path id="Axo_panel_00000177455896835245422030000017737704464721416857_" d="M107.294 67.3146C107.294 67.3686 107.258 67.4236 107.186 67.4646C107.042 67.5476 106.81 67.5476 106.666 67.4646C106.594 67.4236 106.558 67.3686 106.558 67.3146V118.825C106.558 118.879 106.594 118.934 106.666 118.975C106.81 119.058 107.042 119.058 107.186 118.975C107.258 118.933 107.294 118.879 107.294 118.825V67.3146Z" fill="#372122" />
                                                            <path id="Axo_base_00000028297295275896882220000013469376500696493994_" d="M107.294 67.3146C107.294 67.2606 107.258 67.2056 107.186 67.1646C107.042 67.0816 106.81 67.0816 106.666 67.1646C106.594 67.2056 106.558 67.2606 106.558 67.3146C106.558 67.3686 106.594 67.4236 106.666 67.4646C106.81 67.5476 107.042 67.5476 107.186 67.4646C107.258 67.4236 107.294 67.3686 107.294 67.3146Z" fill="#372122" />
                                                        </g>
                                                        <g id="Group_21">
                                                            <path id="Vector_37" d="M95.5581 115.551C95.5581 115.653 95.6261 115.755 95.7621 115.832C96.0331 115.99 96.4721 115.99 96.7441 115.832L96.8231 115.778C96.8341 115.769 106.355 106.148 106.355 106.148C106.491 106.069 106.558 105.965 106.558 105.863C106.558 105.761 106.49 105.659 106.355 105.58C106.083 105.424 105.643 105.424 105.371 105.58L105.292 105.634C105.281 105.643 95.7621 115.265 95.7621 115.265C95.6261 115.345 95.5581 115.447 95.5581 115.551Z" fill="#372122" />
                                                            <path id="Vector_38" d="M101.896 129.349L101.914 129.259C101.901 129.29 101.896 129.319 101.896 129.349Z" fill="#372122" />
                                                            <path id="Vector_39" d="M107.277 106.456C107.29 106.429 107.295 106.4 107.295 106.372L107.277 106.456Z" fill="#372122" />
                                                            <path id="Vector_40" d="M107.295 105.97C107.295 106.072 107.363 106.174 107.497 106.251L119.531 119.385C119.561 119.423 119.606 119.46 119.662 119.493C119.935 119.649 120.374 119.649 120.646 119.493C120.782 119.414 120.849 119.31 120.849 119.208C120.849 119.133 120.811 119.056 120.736 118.989L108.661 105.864C108.631 105.798 108.571 105.735 108.482 105.685C108.21 105.527 107.77 105.527 107.498 105.685C107.361 105.764 107.295 105.866 107.295 105.97Z" fill="#372122" />
                                                            <path id="Vector_41" d="M101.896 129.349C101.896 129.451 101.964 129.553 102.098 129.632C102.37 129.788 102.81 129.788 103.082 129.632C103.218 129.553 103.285 129.451 103.285 129.347L107.295 106.371C107.295 106.269 107.227 106.163 107.091 106.086C106.82 105.928 106.379 105.928 106.109 106.086C105.973 106.165 105.905 106.267 105.905 106.371L101.896 129.349Z" fill="#542628" />
                                                        </g>
                                                        <path id="Vector_42" d="M114.569 113.798L107.187 118.975L106.926 118.833L114.569 113.533V113.798Z" fill="#372122" />
                                                        <path id="Vector_43" d="M100.275 112.061L106.678 118.886L106.926 118.833L100.275 111.795V112.061Z" fill="#372122" />
                                                        <path id="Vector_44" d="M106.666 118.975H104.305L104.329 118.797H106.69L106.666 118.975Z" fill="#372122" />
                                                        <g id="Axo_Extrusion_00000133499661796960799140000002560929181538545833_">
                                                            <path id="Axo_panel_00000003805213424303015350000017571073847233119379_" d="M106.215 99.6426C106.272 99.6096 106.363 99.6626 106.42 99.7606C106.476 99.8586 106.476 99.9646 106.42 99.9966L106.828 99.7616C106.885 99.7286 106.885 99.6226 106.828 99.5256C106.772 99.4276 106.68 99.3746 106.623 99.4076L106.215 99.6426Z" fill="#542628" />
                                                            <path id="Axo_base_00000132791554099407841960000017837784723757881987_" d="M106.215 99.6426C106.159 99.6756 106.159 99.7806 106.215 99.8786C106.272 99.9766 106.363 100.03 106.42 99.9966C106.476 99.9636 106.476 99.8586 106.42 99.7606C106.364 99.6626 106.272 99.6096 106.215 99.6426Z" fill="#542628" />
                                                        </g>
                                                    </g>
                                                    <g id="Axo_Extrusion_00000170970690527004878050000011911951893959365044_">
                                                        <g id="Axo_Surface_x2A__00000128453062162847834890000007887687899390834601_">
                                                            <path id="Axo_panel_00000137810877566999423750000009261268681564047505_" d="M106.908 84.1466V82.4866L106.191 82.0726V83.7326L106.908 84.1466Z" fill="#2F1819" />
                                                            <path id="Axo_panel_00000063621468347160523800000006816530096557120660_" d="M106.908 82.4866L107.662 82.0516L106.945 81.6376L106.191 82.0726L106.908 82.4866Z" fill="#2F1819" />
                                                        </g>
                                                        <path id="Axo_base_00000085220271306161925920000016251275947172999599_" d="M106.908 84.1466L107.662 83.7106V82.0516L106.908 82.4866V84.1466Z" fill="#2F1819" />
                                                    </g>
                                                    <path id="Vector_45" d="M106.559 81.3916V82.0516C106.559 82.1076 106.595 82.1606 106.667 82.2026C106.81 82.2846 107.043 82.2846 107.187 82.2026C107.259 82.1616 107.295 82.1076 107.295 82.0516L107.286 81.3916H106.559Z" fill="#372122" />
                                                </g>
                                                <g id="Group_22">
                                                    <path id="Vector_46" d="M80.7711 29.4056C81.8571 30.0156 82.2701 32.4496 82.2931 32.5806C83.9661 33.5196 84.9431 34.7176 85.2191 35.9616C84.8851 34.4586 84.1591 32.6576 83.0591 31.3136C82.2941 30.3786 81.5991 29.9056 80.7711 29.4056Z" fill="#402B2C" />
                                                    <path id="Vector_47" d="M82.2921 32.5806C78.3611 30.3746 72.0751 30.4376 68.2541 32.7226C64.4321 35.0076 64.5221 38.6476 68.4531 40.8536C72.3841 43.0596 78.6701 42.9966 82.4911 40.7116C86.3131 38.4266 86.2241 34.7866 82.2921 32.5806Z" fill="#402B2C" />
                                                    <path id="Vector_48" d="M65.5231 36.0166C65.7821 34.8186 66.6911 33.6576 68.2541 32.7226C72.0751 30.4386 78.3611 30.3746 82.2921 32.5806C82.2701 32.4496 81.8571 30.0146 80.7701 29.4056C79.4391 28.6696 77.9881 28.2666 76.4481 28.1336C75.6311 28.0636 75.1041 28.0816 74.3851 28.1286C73.2631 28.2016 71.8561 28.5486 71.0371 28.9036C70.1701 29.2796 69.7201 29.5206 69.0141 30.0416C67.1591 31.4136 66.0151 33.7896 65.5231 36.0166Z" fill="#402B2C" />
                                                    <path id="Vector_49" d="M85.2191 35.9616C84.9661 34.8326 84.5441 33.7006 83.9351 32.5986C83.2051 31.2796 82.1481 30.1806 80.7711 29.4056C79.8891 28.9106 78.0711 29.3986 77.1331 29.7576C78.1441 30.3246 78.1691 31.2606 77.1861 31.8476C76.2041 32.4346 74.5881 32.4516 73.5771 31.8836C72.5661 31.3166 72.5431 30.3806 73.5261 29.7936C74.5081 29.2066 76.1221 29.1906 77.1331 29.7576C78.0711 29.3986 79.8891 28.9106 80.7711 29.4056C80.4661 29.2466 80.3111 29.1446 79.6631 28.8776C78.4861 28.3926 76.9731 28.1306 75.8981 28.0986C75.1731 28.0766 74.7691 28.0826 73.8351 28.1846C73.4891 28.2226 72.9021 28.3336 72.7291 28.3776C71.5251 28.6786 71.2651 28.8046 70.5911 29.0976C70.1871 29.2726 69.4101 29.7136 68.8831 30.1446C68.4901 30.4656 67.9941 30.8816 67.3781 31.7216C66.4941 32.9286 65.8331 34.5886 65.5241 36.0166C65.1501 37.7456 66.1321 39.5496 68.4551 40.8536C72.3861 43.0596 78.6721 42.9966 82.4931 40.7116C84.6871 39.3996 85.5951 37.6386 85.2191 35.9616Z" fill="#402B2C" />
                                                    <path id="Vector_50" d="M72.8021 30.8276C72.7981 29.5106 75.5351 28.8606 77.1331 29.7576V28.1676C75.5381 27.2726 72.7981 27.9236 72.8021 29.2376C72.8031 29.7146 72.8011 30.3506 72.8021 30.8276Z" fill="#402B2C" />
                                                    <path id="Vector_51" d="M77.9061 29.2236C77.9051 28.8396 77.6461 28.4556 77.1331 28.1676V29.7576C77.6471 30.0456 77.9051 30.4296 77.9061 30.8136C77.9051 30.3366 77.9071 29.7006 77.9061 29.2236Z" fill="#402B2C" />
                                                    <path id="Vector_52" d="M72.1301 29.3076C72.0841 28.8056 72.3861 28.2936 73.0381 27.9036C74.2801 27.1616 76.3231 27.1406 77.6001 27.8576L77.6471 27.0286C76.3411 26.2956 74.2541 26.3166 72.9841 27.0756C72.3171 27.4746 72.0091 27.9976 72.0561 28.5106L72.1301 29.3076Z" fill="#402B2C" />
                                                    <path id="Vector_53" d="M78.6431 28.4916C78.6891 27.9626 78.3561 27.4256 77.6481 27.0276L77.6011 27.8566C78.2931 28.2456 78.6191 28.7706 78.5751 29.2886L78.6431 28.4916Z" fill="#402B2C" />
                                                    <path id="Vector_54" d="M77.9061 30.8136V29.2236C77.9071 29.5956 77.6651 29.9686 77.1821 30.2576C75.6031 31.2016 72.8061 30.5646 72.8021 29.2376V30.8276C72.8031 31.2126 73.0641 31.5956 73.5781 31.8836C75.1721 32.7786 77.9101 32.1276 77.9061 30.8136Z" fill="#2F1819" />
                                                    <path id="Vector_55" d="M77.1331 28.1676C78.1441 28.7346 78.1641 29.6706 77.1821 30.2576C76.2001 30.8446 74.5841 30.8616 73.5731 30.2936C72.5621 29.7266 72.5391 28.7906 73.5221 28.2036C74.5041 27.6166 76.1221 27.6006 77.1331 28.1676L77.6011 27.8576C76.3231 27.1406 74.2811 27.1616 73.0391 27.9036C71.7971 28.6456 71.8261 29.8286 73.1041 30.5466C74.3821 31.2636 76.4241 31.2426 77.6661 30.5006C78.9081 29.7586 78.8791 28.5756 77.6011 27.8576L77.1331 28.1676Z" fill="#402B2C" />
                                                    <path id="Vector_56" d="M77.7141 29.7286C76.4451 30.4876 74.3571 30.5086 73.0511 29.7756C71.7451 29.0426 71.7161 27.8336 72.9851 27.0746C74.2541 26.3156 76.3421 26.2946 77.6481 27.0276C78.9531 27.7616 78.9831 28.9706 77.7141 29.7286ZM73.5451 27.3896C72.5761 27.9686 72.5991 28.8916 73.5961 29.4506C74.5931 30.0096 76.1861 29.9936 77.1551 29.4146C78.1241 28.8356 78.1001 27.9126 77.1031 27.3536C76.1061 26.7946 74.5141 26.8106 73.5451 27.3896Z" fill="#402B2C" />
                                                    <path id="Vector_57" d="M72.8321 28.4096C72.8281 27.1106 75.5271 26.4696 77.1021 27.3536V26.5076C75.5301 25.6256 72.8281 26.2676 72.8321 27.5636C72.8321 27.8176 72.8311 28.1556 72.8321 28.4096Z" fill="#402B2C" />
                                                    <path id="Vector_58" d="M77.8651 27.5496C77.8641 27.1706 77.6091 26.7926 77.1021 26.5076V27.3536C77.6091 27.6376 77.8641 28.0156 77.8651 28.3956C77.8641 28.1416 77.8651 27.8036 77.8651 27.5496Z" fill="#402B2C" />
                                                    <path id="Vector_59" d="M77.8651 28.3956V27.5496C77.8661 27.9166 77.6281 28.2846 77.1521 28.5696C75.5951 29.5006 72.8361 28.8716 72.8321 27.5646V28.4096C72.8331 28.7886 73.0891 29.1666 73.5961 29.4516C75.1681 30.3326 77.8681 29.6916 77.8651 28.3956Z" fill="#2F1819" />
                                                    <path id="Vector_60" d="M77.1021 26.5076C76.1051 25.9486 74.5111 25.9646 73.5421 26.5436C72.5731 27.1226 72.5961 28.0456 73.5931 28.6046C74.5901 29.1636 76.1831 29.1476 77.1521 28.5686C78.1201 27.9906 78.0991 27.0676 77.1021 26.5076Z" fill="#402B2C" />
                                                    <path id="Vector_61" d="M78.5741 29.2896L78.6431 28.4916C78.6051 28.9386 78.2961 29.3816 77.7141 29.7286C75.7361 30.9106 72.2101 30.1766 72.0571 28.5096L72.1301 29.3066C72.2791 30.9276 75.7121 31.6666 77.6651 30.4996C78.2341 30.1596 78.5361 29.7276 78.5741 29.2896Z" fill="#372122" />
                                                </g>
                                                <path id="Axo_base_00000096767602030179083010000006545703008097422218_" d="M118.752 82.0406C118.777 82.0256 118.8 82.0046 118.819 81.9776C118.938 81.8076 118.867 81.4626 118.661 81.2056L77.9831 30.2046C77.8091 29.9886 77.5951 29.9056 77.4601 29.9836C77.4351 29.9986 77.4121 30.0196 77.3931 30.0466C77.2741 30.2166 77.3451 30.5616 77.5511 30.8186L118.229 81.8196C118.403 82.0356 118.616 82.1186 118.752 82.0406Z" fill="#2F1819" />
                                                <path id="Vector_62" d="M77.6651 30.4996L79.7491 28.0866C79.7491 28.0866 84.1891 29.7646 83.8361 30.3116C83.4831 30.8586 83.3571 31.4046 82.7581 30.9656C82.1591 30.5276 79.9671 29.2006 79.9671 29.2006L77.9051 30.8126L77.6651 30.4996Z" fill="#2F1819" />
                                            </g>
                                        </g>
                                        <g id="Group_23">
                                            <g id="Group_24">
                                                <path id="Vector_63" d="M88.5601 90.6756C88.5601 90.6756 88.9311 91.5326 89.1031 91.6466C89.2741 91.7606 92.3021 93.8456 92.8731 94.9596C93.4441 96.0736 93.3871 97.7586 92.5591 97.8436C91.7311 97.9296 89.0751 97.2156 88.3041 95.9306C87.5331 94.6456 86.8761 93.5026 86.1051 93.0746C85.3341 92.6466 85.1051 91.6466 85.2481 91.3326C85.3911 91.0186 85.5911 90.2566 85.5911 90.2566L88.5601 90.6756Z" fill="#B3C5E3" />
                                                <path id="Vector_64" d="M73.0811 87.2196L73.6241 85.5346C73.6241 85.5346 72.1391 83.8206 71.1961 84.0496C70.2531 84.2786 69.5111 85.4776 69.5111 86.2206C69.5111 86.9636 70.4821 89.4196 70.4251 90.2186C70.3681 91.0186 70.8071 92.3536 71.1101 93.1036C71.5961 94.3036 73.8861 94.8226 74.8231 94.4456C76.8791 93.6176 73.9951 91.5326 73.9951 91.5326L73.0811 87.2196Z" fill="#B3C5E3" />
                                                <path id="Vector_65" d="M73.7661 87.3336L74.3091 85.6486C74.3091 85.6486 72.8241 83.9346 71.8811 84.1636C70.9391 84.3926 70.1961 85.5916 70.1961 86.3346C70.1961 87.0776 71.1671 89.5336 71.1101 90.3326C71.0531 91.1326 71.3671 92.5316 71.7951 93.2176C72.2231 93.9026 73.8571 94.5086 74.7941 94.1316C76.8501 93.3036 74.6801 91.6466 74.6801 91.6466L73.7661 87.3336Z" fill="#5881BF" />
                                                <path id="Vector_66" d="M88.5601 90.2186C88.5601 90.2186 88.9311 91.0756 89.1031 91.1896C89.2741 91.3036 92.3021 93.3886 92.8731 94.5026C93.4441 95.6166 93.3871 97.3016 92.5591 97.3876C91.7311 97.4736 89.0751 96.7596 88.3041 95.4736C87.5331 94.1886 86.8761 93.0456 86.1051 92.6176C85.3341 92.1896 85.1051 91.1896 85.2481 90.8756C85.3911 90.5616 85.5911 89.7996 85.5911 89.7996L88.5601 90.2186Z" fill="#5881BF" />
                                                <path id="Vector_67" d="M86.0471 96.3496L88.0271 98.5586C88.0271 98.5586 87.9511 100.996 86.3511 101.605C84.7521 102.214 83.6091 101.986 81.8581 100.463C80.1061 98.9396 74.0141 89.8766 74.0141 89.8766L72.7951 89.1146C72.7951 89.1146 71.5001 87.7436 72.3381 86.8296C73.1761 85.9156 73.4041 85.7636 73.4041 85.7636L74.3081 85.6496L77.8971 88.6576L86.0471 96.3496Z" fill="#4360A3" />
                                                <path id="Vector_68" d="M81.8581 78.9846C81.8581 78.9846 86.6561 92.8456 87.3421 95.3586C88.0271 97.8716 88.6651 100.348 87.2181 101.185C85.7711 102.023 83.2481 102.889 81.5061 97.3856C80.6631 94.7226 79.0401 94.2156 77.8221 92.2356C76.6031 90.2556 76.2231 86.4476 74.6991 85.1526C73.1761 83.8576 71.8811 83.3246 73.1001 79.3646L74.3191 75.4046L81.8581 78.9846Z" fill="#4965A5" />
                                                <path id="Vector_69" d="M86.0471 74.9486C86.0471 74.9486 95.7191 74.2636 98.3851 75.7106C101.051 77.1576 100.822 78.7566 99.6801 80.3566C98.5381 81.9556 90.1601 88.5816 89.7791 88.9626C89.3981 89.3436 88.5601 90.6386 88.5601 90.6386C88.5601 90.6386 86.9611 91.7806 86.1231 90.7146C85.4691 89.8826 85.5901 89.8006 85.5901 89.8006C85.5901 89.8006 88.6361 82.6416 89.2461 82.1086C89.8551 81.5756 92.2161 80.5856 92.2161 80.5856C92.2161 80.5856 87.6461 81.5756 84.6761 81.0426C81.7061 80.5096 80.9441 79.0626 80.5631 78.4536C80.1821 77.8446 79.8011 75.3306 79.9541 74.8736C80.1061 74.4156 86.0471 74.9486 86.0471 74.9486Z" fill="#3D4F87" />
                                                <path id="Vector_70" d="M88.1601 69.0556C88.1601 69.0556 88.6171 66.8566 89.4171 66.7136C90.2171 66.5706 91.5591 68.3986 91.4731 69.9696C91.3871 71.5406 89.3881 75.3106 89.5311 77.5096C89.6741 79.7086 88.9031 80.8506 88.9031 80.8506C88.9031 80.8506 87.8751 79.3936 86.9901 79.2796C86.1051 79.1656 86.1901 79.3366 86.1901 79.3366C86.1901 79.3366 86.5041 74.5096 86.6761 73.5676C86.8471 72.6256 88.1601 69.0556 88.1601 69.0556Z" fill="#4360A3" />
                                                <g id="Group_25">
                                                    <path id="Vector_71" d="M80.5921 64.6286C80.5921 64.6286 80.4781 63.6576 78.5641 63.4286C76.6501 63.1996 75.2231 63.7426 73.1381 63.2576C71.0531 62.7716 66.5121 63.2486 65.9411 63.5626C65.3701 63.8766 63.6561 65.5996 64.4561 66.9426C65.2561 68.2846 69.2831 67.3996 69.2831 67.4856C69.2831 67.5716 75.7381 67.5996 76.0231 68.4276C76.3091 69.2556 74.7951 73.4546 74.2811 74.5106C73.7671 75.5676 73.8531 76.8236 73.8531 76.8236C73.8531 76.8236 77.9091 79.4516 80.0511 79.9656C82.1931 80.4796 84.0781 78.6236 84.5631 77.6526C85.0491 76.6816 87.2481 75.8246 87.6191 75.0256C87.9901 74.2256 87.7901 72.5126 87.9051 71.9406C88.0191 71.3696 89.2761 68.3706 88.6481 67.0856C88.0201 65.8006 85.3921 65.5146 84.9641 65.4576C84.5331 65.3996 80.5921 64.6286 80.5921 64.6286Z" fill="#4965A5" />
                                                    <path id="Vector_72" d="M86.8181 65.7706C86.8181 65.7706 84.1331 66.4566 82.9051 64.2286C81.6771 62.0006 81.9051 59.8586 81.9051 59.8586C81.9051 59.8586 81.4481 58.9446 81.9051 58.5736C82.3621 58.2026 83.9041 56.5746 86.5891 57.4886C89.2741 58.4026 89.6741 61.3726 89.5591 62.2586C89.4451 63.1436 88.3881 64.4866 88.3881 64.4866C88.3881 64.4866 89.9301 65.4576 89.5591 66.8856C89.1881 68.3136 89.0161 67.9136 87.7311 68.6276C86.4461 69.3416 86.0741 70.4556 86.0741 70.4556C86.0741 70.4556 85.1031 69.4556 85.4741 67.0856C85.8471 64.7146 86.8181 65.7706 86.8181 65.7706Z" fill="#582A2C" />
                                                    <path id="Vector_73" d="M85.4181 67.0276C85.4181 67.0276 85.6751 68.6836 84.8471 69.3126C84.0191 69.9406 81.5911 69.6556 81.1341 67.6276C80.6771 65.5996 83.0761 65.6566 83.0761 65.6566L85.4181 67.0276Z" fill="#DB886F" />
                                                    <path id="Vector_74" d="M81.9061 59.8586C81.9061 59.8586 80.7351 62.3436 80.5071 62.6576C80.2781 62.9716 80.0791 64.1996 80.2211 65.2846C80.3641 66.3696 80.4211 67.3126 80.3921 67.5976C80.3631 67.8836 80.8771 68.3116 81.2771 68.4546C81.6771 68.5976 84.7041 67.9686 85.0181 67.7976C85.3321 67.6266 86.4751 66.3406 86.4751 66.3406C86.4751 66.3406 87.1031 66.7116 87.4751 66.2836C87.8461 65.8556 89.1601 64.4846 88.5031 63.9986C87.8461 63.5126 87.0461 64.4556 87.0461 64.4556C87.0461 64.4556 86.1041 64.2556 86.6181 62.5996C87.1321 60.9426 85.9331 60.6576 85.1621 60.6006C84.3901 60.5446 82.4481 60.6586 81.9061 59.8586Z" fill="#F0B09B" />
                                                </g>
                                            </g>
                                            <g id="Group_26">
                                                <path id="Vector_75" d="M68.3741 74.5146C68.3741 74.5146 69.0581 78.7926 68.2031 80.1616C67.3471 81.5306 66.7061 81.1026 66.8341 82.5146C66.9621 83.9266 67.2191 89.1876 67.3051 89.7866C67.3911 90.3856 68.0751 90.8566 68.0751 91.0276C68.0751 91.1986 67.4331 93.3806 68.1611 93.9366C68.8881 94.4926 69.7861 95.3486 70.6851 95.3056C71.5831 95.2626 72.2251 95.3916 72.3531 95.2196C72.4811 95.0486 72.7381 94.3646 72.5671 93.8076C72.3961 93.2516 70.5561 92.2246 70.5561 92.2246C70.5561 92.2246 69.9141 91.1556 69.8291 90.2996C69.7431 89.4436 69.8721 84.7816 70.5561 83.8396C71.2411 82.8986 72.6091 81.7866 72.6091 81.7866C72.6091 81.7866 72.9511 82.6426 72.9511 82.0856V79.9896C72.9511 79.9896 73.5071 79.9896 73.5071 79.7326C73.5071 79.4756 73.4641 77.7216 73.2081 77.0806C72.9511 76.4386 70.7701 73.3156 70.7701 73.3156L70.9411 75.1976L69.6151 73.2726L69.8721 75.7106L68.3741 74.5146Z" fill="#372122" />
                                                <path id="Vector_76" d="M51.3071 70.3696C51.3071 70.3696 53.2641 74.1876 52.2051 75.8236C51.1461 77.4596 50.4401 78.9036 50.7611 79.4486C51.0821 79.9936 53.0711 83.2026 53.2641 83.5556C53.4571 83.9086 53.9061 84.2616 54.4831 84.4216C55.0611 84.5816 56.4081 84.6786 56.4721 84.2936C56.5361 83.9086 56.7291 83.3636 56.4401 83.0106C56.1511 82.6576 54.8361 82.1446 54.8361 82.1446C54.8361 82.1446 53.1681 79.8986 53.1681 79.0326C53.1681 78.1666 55.4141 78.1346 57.3071 76.1456C59.2001 74.1566 59.2321 71.2366 58.0451 69.4726C56.8581 67.7076 54.1951 65.8476 52.4621 66.4566C50.7301 67.0656 51.2111 69.1186 51.3071 70.3696Z" fill="#372122" />
                                                <path id="Vector_77" d="M75.4451 74.4546C75.4451 74.4546 74.4181 75.2676 74.4181 76.8076C74.4181 78.3476 74.8891 78.3046 74.4181 79.5026C73.9471 80.7006 70.0121 84.2506 68.9421 84.5926C67.8731 84.9346 62.1401 83.9506 61.7981 83.6086C61.4561 83.2666 53.2001 77.9196 51.2321 76.2936C49.2641 74.6676 43.1901 70.7756 43.9601 68.6796C44.7301 66.5836 45.7141 65.5136 46.1421 65.6426C46.5701 65.7706 53.0291 67.4396 53.0291 67.4396C53.0291 67.4396 68.7281 73.5136 70.6961 72.6586C72.6641 71.8026 75.4451 74.4546 75.4451 74.4546Z" fill="#CEA7AC" />
                                                <path id="Vector_78" d="M69.1991 67.7386C69.1991 67.7386 67.1891 68.2946 66.3331 67.9096C65.4781 67.5246 63.1511 64.1396 60.1301 64.0166C55.3821 63.8246 47.6391 62.4336 45.8851 63.6746C44.1311 64.9156 44.9441 66.4976 43.9171 67.6106C42.8901 68.7226 41.8211 70.2196 41.8211 70.2196H47.3391C47.3391 70.2196 47.7241 71.4606 47.7671 71.6746C47.8101 71.8886 48.7511 71.5036 48.9221 71.5036C49.0931 71.5036 50.9331 75.1826 50.9331 75.1826L51.1901 74.5406L55.8101 78.9466C55.8101 78.9466 56.1091 77.6206 56.2811 77.7056C56.4521 77.7916 59.3181 81.4696 59.3181 81.4696C59.3181 81.4696 60.8151 81.6406 60.7301 81.3416C60.6441 81.0426 62.1421 79.5876 62.1841 79.1176C62.2271 78.6466 65.1781 80.2726 65.0501 79.9736C64.9221 79.6746 65.9481 79.3316 66.7181 80.1446C67.4881 80.9576 67.4881 78.5616 68.2151 79.6736C68.9421 80.7856 69.7121 81.1706 69.6271 80.8716C69.5411 80.5726 69.7131 78.4336 69.7131 78.4336C69.7131 78.4336 70.9111 78.6906 70.8251 78.5616C70.7391 78.4336 71.1671 76.2086 71.8941 75.0536C72.6211 73.8986 71.9371 73.8556 71.9371 73.8556L69.1991 67.7386Z" fill="#402B2C" />
                                                <path id="Vector_79" d="M48.9011 63.0546C48.9011 63.0546 45.6291 61.4506 43.8321 62.6696C42.0351 63.8886 39.0841 66.9046 37.9291 67.7386C36.7741 68.5726 34.0151 68.7656 33.0521 68.1236C32.0901 67.4816 31.8971 67.0966 31.8971 67.0966C31.8971 67.0966 31.8971 68.1876 32.1541 68.8286C32.4111 69.4706 32.7961 70.0476 32.7961 70.0476L32.0261 70.5606C32.0261 70.5606 33.4381 71.9086 34.7211 71.5876L36.0041 71.2666L35.5551 72.2296C35.5551 72.2296 36.0681 72.4866 37.0311 72.1656C37.9941 71.8446 38.6351 71.7166 38.6351 71.7166C38.6351 71.7166 38.9561 72.4226 38.7631 72.5506C38.5701 72.6786 38.8911 73.1926 40.3671 72.1656C41.8431 71.1386 43.1261 66.7756 43.5111 66.1986C43.8961 65.6216 49.3501 63.3116 48.9011 63.0546Z" fill="#402B2C" />
                                                <path id="Vector_80" d="M50.5051 70.0486C50.5051 70.0486 49.8631 74.7966 48.1951 75.6956C46.5271 76.5946 43.6071 76.0806 43.6071 76.0806L43.9281 75.7916L42.3881 75.9526C42.3881 75.9526 40.5271 75.3106 40.9441 75.3426C41.3611 75.3746 41.9061 75.2466 41.9061 75.2466C41.9061 75.2466 39.4681 74.4766 39.0191 74.6366C38.5701 74.7966 36.9661 77.0426 37.4151 77.3956C37.8641 77.7486 38.4101 77.2356 38.7301 77.8766C39.0511 78.5186 39.4041 78.7106 38.4411 79.1276C37.4791 79.5446 37.0931 79.9296 36.0991 79.4166C35.1041 78.9036 35.1691 78.5826 34.7191 78.3256C34.3561 78.1176 35.2971 76.9456 35.3611 76.7536C35.4251 76.5616 36.5801 74.3156 36.7731 73.2566C36.9661 72.1976 36.0031 70.8186 38.0561 71.0746C40.1091 71.3316 38.7941 72.2936 40.1091 71.3316C41.4241 70.3696 42.7721 65.5886 43.9911 64.8186C45.2101 64.0486 48.9641 65.9736 49.5731 66.4546C50.1841 66.9366 50.5051 70.0486 50.5051 70.0486Z" fill="#372122" />
                                                <path id="Vector_81" d="M62.2121 78.0726C62.2121 78.0726 62.8961 82.3506 62.0411 83.7196C61.1851 85.0886 60.5441 84.6606 60.6721 86.0726C60.8001 87.4846 61.0571 92.7456 61.1421 93.3446C61.2281 93.9436 61.9121 94.4136 61.9121 94.5856C61.9121 94.7576 61.2701 96.9386 61.9981 97.4946C62.7261 98.0506 63.6231 98.9066 64.5221 98.8636C65.4201 98.8206 66.0621 98.9486 66.1901 98.7776C66.3181 98.6066 66.5751 97.9226 66.4041 97.3656C66.2331 96.8086 64.3931 95.7826 64.3931 95.7826C64.3931 95.7826 63.7511 94.7136 63.6661 93.8576C63.5801 93.0016 63.7091 88.3396 64.3931 87.3986C65.0781 86.4576 66.4461 85.3456 66.4461 85.3456C66.4461 85.3456 66.7881 86.2016 66.7881 85.6446V83.5486C66.7881 83.5486 67.3441 83.5486 67.3441 83.2916C67.3441 83.0346 67.3011 81.2806 67.0451 80.6396C66.7881 79.9976 64.6071 76.8756 64.6071 76.8756L64.7781 78.7576L63.4521 76.8326L63.7091 79.2706L62.2121 78.0726Z" fill="#372122" />
                                                <g id="Group_27">
                                                    <path id="Vector_82" d="M77.1361 72.5106C77.1361 72.5106 76.0101 73.8986 76.3361 73.7676C76.6631 73.6356 80.3791 72.6496 80.7441 72.4166C81.1091 72.1836 81.4591 71.5876 81.4131 71.1546C81.3671 70.7216 80.4071 70.6046 80.2681 70.6676C80.1291 70.7306 77.7481 71.4436 77.7481 71.4436L77.1361 72.5106Z" fill="#F0B09B" />
                                                    <path id="Vector_83" d="M76.7171 72.1306C76.7171 72.1306 75.5911 73.5186 75.9171 73.3876C76.2441 73.2556 79.9601 72.2696 80.3251 72.0366C80.6901 71.8036 81.0401 71.2076 80.9941 70.7746C80.9481 70.3416 79.9881 70.2246 79.8491 70.2876C79.7101 70.3506 77.3291 71.0636 77.3291 71.0636L76.7171 72.1306Z" fill="#402B2C" />
                                                    <path id="Vector_84" d="M81.6421 69.5456C81.6421 69.5456 81.2151 71.3776 80.5741 71.4086C79.9331 71.4386 78.2651 72.6856 78.0461 72.7926C77.8271 72.9006 76.3031 73.9756 75.9561 74.3776C75.6911 74.6856 75.4641 75.1686 75.4641 75.1686L74.5091 76.5486L75.3091 73.9206L70.9271 75.9366C70.9271 75.9366 70.2011 73.6556 69.8531 73.1336C69.5061 72.6096 69.5311 70.6506 69.8101 69.6006C70.0881 68.5506 69.8501 66.6416 70.6511 66.2786C71.4521 65.9156 73.5921 65.9086 74.3641 65.9846C75.0141 66.0496 76.6711 66.8946 77.1761 67.5516C77.2731 67.6776 77.3441 67.7826 77.3811 67.8546C77.6111 68.3046 77.8831 68.7016 77.8831 68.7016C77.8831 68.7016 80.2751 68.6816 80.3351 68.4436C80.3951 68.2056 81.6421 69.5456 81.6421 69.5456Z" fill="#CEA7AC" />
                                                    <path id="Vector_85" d="M74.9941 71.2686C74.9941 71.2686 74.8951 70.6656 75.1251 70.3816C75.2531 70.2226 76.0801 70.2546 76.0801 70.2546C76.0801 70.2546 75.9081 71.0006 75.8481 71.0836C75.6081 71.4116 74.9941 71.2686 74.9941 71.2686Z" fill="#0D1017" />
                                                    <path id="Vector_86" d="M76.7501 68.3266C76.7501 68.3266 75.8651 67.7176 76.0941 67.4336C76.3231 67.1496 76.8781 67.3416 76.9351 67.8986C76.9611 68.1406 76.7501 68.3266 76.7501 68.3266Z" fill="#0D1017" />
                                                    <path id="Vector_87" d="M77.1751 67.5516C77.1751 67.5516 75.7011 66.2856 75.5651 66.6566C75.0371 68.0986 71.4041 67.8126 71.0531 68.6276C71.0531 68.6276 74.3661 67.7706 74.8941 68.6566C75.4381 69.5686 73.2791 71.4396 73.6231 72.3556C73.7521 72.6976 74.8261 72.6956 75.0621 72.6216C75.2971 72.5486 76.1621 72.6756 76.2341 73.1306C76.2861 73.4596 74.4711 76.5866 74.4711 76.5866L74.8901 74.9876L72.6811 77.9576L72.8291 76.5756L70.9271 75.9366C70.9271 75.9366 69.6561 75.5236 69.3091 75.0016C68.9621 74.4776 67.0641 70.7646 68.7081 68.1366C69.2841 67.2156 69.8511 66.6426 70.6521 66.2786C71.4531 65.9156 73.5941 65.8916 74.3651 65.9846C76.3791 66.2276 77.1751 67.5516 77.1751 67.5516Z" fill="#402B2C" />
                                                    <path id="Vector_88" d="M77.5021 68.0846C77.5021 68.0846 80.0871 68.2416 80.2291 68.3566C80.3711 68.4716 80.3571 69.6476 79.9421 70.0156C79.5271 70.3836 77.9731 72.2486 77.0421 72.0226C76.1111 71.7966 76.9591 69.6856 76.4901 69.5406C76.0211 69.3956 73.9771 67.3706 76.7191 68.3226C77.1511 68.4726 77.5021 68.0846 77.5021 68.0846Z" fill="#E5C7CD" />
                                                    <path id="Vector_89" d="M69.0361 69.7666L67.4241 67.7366C67.4241 67.7366 67.6141 68.9686 67.8181 69.7496C68.0221 70.5306 68.4211 71.2056 68.3171 71.2526C68.2131 71.2996 68.0991 71.4946 68.0991 71.4946L68.5831 71.8206C68.5831 71.8206 68.3431 72.1986 68.3831 72.2306C68.4231 72.2626 69.5301 72.3896 70.0901 72.5126C70.6501 72.6356 72.0831 72.2786 72.0831 72.2786C72.0831 72.2786 69.4021 70.2386 69.0361 69.7666Z" fill="#2F1819" />
                                                    <path id="Vector_90" d="M72.1801 72.2676C72.1801 72.2676 69.5071 71.8196 69.0531 70.9676C68.5991 70.1156 67.1011 67.7816 67.4241 67.7356C67.7471 67.6896 69.3921 68.9996 69.9871 69.2166C70.5811 69.4336 70.3961 69.5256 70.6961 70.4056C70.9951 71.2856 72.1801 72.2676 72.1801 72.2676Z" fill="#CEA7AC" />
                                                    <path id="Vector_91" d="M70.0581 64.3466L68.1431 63.9406C68.1431 63.9406 67.8441 63.9846 68.5181 64.7276C69.1921 65.4706 69.2791 66.1786 69.2701 66.3256C69.2611 66.4726 69.3271 66.9876 69.5591 67.1096C69.7911 67.2306 70.2381 66.9776 70.5041 67.1926C70.7701 67.4076 71.0151 66.9686 71.0151 66.9686C71.0151 66.9686 70.5991 65.5536 70.4471 65.3876C70.2961 65.2216 70.0581 64.3466 70.0581 64.3466Z" fill="#2F1819" />
                                                    <path id="Vector_92" d="M72.8441 66.1766C72.8441 66.1766 70.9301 63.8576 70.3401 63.8636C69.7501 63.8696 67.9381 63.5246 68.1751 64.0246C68.4121 64.5246 70.0511 65.8726 70.5711 66.5576C71.0911 67.2426 70.8361 67.2856 71.3141 67.0346C71.7921 66.7836 72.1681 66.3996 72.3711 66.3866C72.5731 66.3756 72.8441 66.1766 72.8441 66.1766Z" fill="#CEA7AC" />
                                                    <path id="Vector_93" d="M80.4631 69.3166L79.9361 69.9676C79.9361 69.9676 80.2761 70.1996 80.6351 70.1376C80.9931 70.0756 81.3631 69.7816 81.3631 69.7816C81.3631 69.7816 81.6631 69.6286 81.6221 69.3536C81.5811 69.0786 81.1471 68.3096 80.9591 68.4876C80.7711 68.6646 80.4631 69.3166 80.4631 69.3166Z" fill="#2F1819" />
                                                    <path id="Vector_94" d="M80.8851 69.3936L79.9361 69.9676L80.2131 68.3226L80.9591 68.4866L81.1901 68.8266L80.8851 69.3936Z" fill="#2F1819" />
                                                </g>
                                            </g>
                                            <g id="Group_28">
                                                <path id="Vector_95" d="M79.0211 78.5946L78.0501 77.9666C78.0501 77.9666 77.1931 76.7666 76.6791 76.6246C76.1651 76.4816 75.6221 76.6246 75.2801 76.3676C74.9371 76.1106 74.5371 75.8816 74.5091 75.9676C74.4801 76.0536 74.3661 76.2246 74.6801 76.6816C74.9941 77.1386 75.7941 77.7956 75.7941 77.7956C75.7941 77.7956 74.1091 77.5096 73.9951 77.5096C73.8811 77.5096 71.5671 77.3096 71.1681 77.3956C70.7681 77.4816 70.8251 77.9666 71.8821 77.9956C72.9391 78.0246 74.0241 78.4526 74.0241 78.4526C74.0241 78.4526 72.4251 78.5096 71.9681 78.5666C71.5111 78.6236 70.8831 78.3956 70.7111 78.5666C70.5401 78.7376 70.6821 78.8236 70.8821 78.9376C71.0821 79.0516 73.7661 79.4516 73.7661 79.4516C73.7661 79.4516 71.3671 79.9656 71.1381 79.9656C70.9091 79.9656 70.9291 80.5466 71.5761 80.4516C71.9721 80.3936 73.9941 80.2516 73.9941 80.2516C73.9941 80.2516 72.5661 80.9656 72.2521 81.1366C71.9381 81.3076 72.1091 81.7076 72.3381 81.6216C72.5671 81.5356 73.7091 81.0216 74.5091 81.0216C75.3091 81.0216 76.8221 80.7926 77.4791 80.6786C78.1361 80.5646 78.8791 80.9066 78.8791 80.9066L79.0211 78.5946Z" fill="#F0B09B" />
                                                <path id="Vector_96" d="M88.1321 79.2796C88.1321 79.2796 89.0461 80.4216 88.9321 81.2506C88.8181 82.0786 88.3041 82.9066 87.2761 82.9066C86.2481 82.9066 77.6931 81.0416 77.8801 80.7646C78.8801 79.2796 78.0511 77.9656 78.0511 77.9656C78.0511 77.9656 78.9081 77.8796 80.1641 78.3366C81.4201 78.7946 86.9321 77.9946 88.1321 79.2796Z" fill="#3D4F87" />
                                            </g>
                                            <g id="Group_29">
                                                <path id="Vector_97" d="M60.4951 74.3766C60.4951 74.3766 60.9521 75.2146 61.0281 75.6336C61.1041 76.0526 60.8761 77.1186 60.8761 77.1186L60.4951 78.4896C60.4951 78.4896 60.0381 78.8706 60.0381 79.0226C60.0381 79.1746 60.0761 79.8986 59.8101 79.6696C59.5431 79.4406 59.4671 78.8316 59.4671 78.5276C59.4671 78.2226 59.7721 77.8046 59.7721 77.8046L59.8481 76.7766L58.8961 77.7666L58.5531 78.8326C58.5531 78.8326 59.0861 79.9746 58.9341 80.1656C58.7821 80.3556 58.9721 80.5086 58.7821 80.3556C58.5921 80.2036 57.7541 78.9086 57.7541 78.9086C57.7541 78.9086 57.4111 78.5276 57.2211 78.2996C57.0311 78.0716 56.9931 77.8426 56.9931 77.8426C56.9931 77.8426 56.6881 77.6906 56.6121 77.5376L56.5361 77.3856C56.5361 77.3856 56.3461 77.1566 56.2691 77.0426C56.1931 76.9286 56.3451 76.5476 56.3451 76.5476C56.3451 76.5476 56.3071 76.1666 56.5741 75.7856C56.8401 75.4046 59.2401 72.9676 59.2401 72.9676L60.4951 74.3766Z" fill="#F0B09B" />
                                                <path id="Vector_98" d="M65.9981 63.4476C65.4271 63.6376 63.2941 66.5706 63.2181 66.8366C63.1421 67.1036 58.8011 73.4246 58.8011 73.4246C58.8011 73.4246 59.9051 73.6536 60.0581 73.9196C60.2101 74.1866 60.7241 74.7956 60.7241 74.7956C60.7241 74.7956 64.8371 70.3406 65.8271 69.5026C66.8171 68.6646 67.6361 66.2656 67.6361 65.8846C67.6351 65.5046 66.5691 63.2576 65.9981 63.4476Z" fill="#3D4F87" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <svg id="studio-1" viewBox="0 0 196 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g >
                                    <g id="Group">
                                        <g id="Group_2">
                                            <g id="Group_3">
                                                <g id="Group_4">
                                                    <path id="Vector" d="M76.9263 64.669V66.389L123.752 93.601V91.882L76.9263 64.669Z" fill="#E7EDF7" />
                                                    <path id="Vector_2" d="M123.752 91.882V93.601L140.377 84.003V82.284L123.752 91.882Z" fill="#E7EDF7" />
                                                    <path id="Vector_3" d="M76.9263 64.669L123.752 91.882L140.377 82.284L93.5483 55.071L76.9263 64.669Z" fill="#E7EDF7" />
                                                </g>
                                                <g id="Group_5">
                                                    <g id="Group_6">
                                                        <path id="Vector_4" d="M92.1963 3.22C92.4503 3.074 92.4503 2.599 92.1963 2.16C91.9423 1.721 91.5313 1.484 91.2783 1.63L79.0933 8.633L80.0113 10.223L92.1963 3.22Z" fill="#BCC0CC" />
                                                        <path id="Vector_5" d="M79.0933 9.69301C79.3473 10.132 79.7583 10.369 80.0113 10.223C80.2653 10.077 80.2653 9.60201 80.0113 9.16301C79.7583 8.72401 79.3473 8.48701 79.0933 8.63301C78.8403 8.78001 78.8403 9.25401 79.0933 9.69301Z" fill="#E1E5EF" />
                                                    </g>
                                                    <g id="Group_7">
                                                        <path id="Vector_6" d="M91.4062 56.789C91.4062 57.082 91.8172 57.319 92.3242 57.319C92.8312 57.319 93.2422 57.082 93.2422 56.789V0.529999H91.4062V56.789Z" fill="#BCC0CC" />
                                                        <path id="Vector_7" d="M92.3242 1.06C92.8312 1.06 93.2422 0.822711 93.2422 0.53C93.2422 0.237289 92.8312 0 92.3242 0C91.8173 0 91.4062 0.237289 91.4062 0.53C91.4062 0.822711 91.8173 1.06 92.3242 1.06Z" fill="#E7EDF7" />
                                                    </g>
                                                    <g id="Group_8">
                                                        <path id="Vector_8" d="M78.3412 64.331C78.3412 64.624 78.7522 64.861 79.2592 64.861C79.7662 64.861 80.1773 64.624 80.1773 64.331V8.073H78.3412V64.331Z" fill="#BCC0CC" />
                                                        <path id="Vector_9" d="M79.2592 8.603C79.7662 8.603 80.1773 8.36571 80.1773 8.073C80.1773 7.78029 79.7662 7.543 79.2592 7.543C78.7522 7.543 78.3412 7.78029 78.3412 8.073C78.3412 8.36571 78.7522 8.603 79.2592 8.603Z" fill="#E7EDF7" />
                                                    </g>
                                                </g>
                                                <g id="Group_9">
                                                    <path id="Vector_10" d="M101.857 45.038C101.857 45.038 101.365 34.813 100.363 32.614C99.3593 30.412 98.5943 26.39 99.4973 24.246C100.4 22.105 99.9523 19.504 99.9523 19.504L99.8823 14.531L96.9483 14.339C96.9483 14.339 98.3913 15.157 95.2373 17.709C93.8243 18.853 93.8973 19.142 92.4293 19.331C89.7343 19.677 90.3113 18.186 90.3113 18.186L87.7143 20.894C87.7143 20.894 87.0743 22.829 87.0893 23.62C87.1093 24.669 87.6773 27.282 88.5803 28.381C89.4833 29.483 89.1203 31.316 89.1203 31.316L89.0193 33.111L101.857 45.038Z" fill="#ADC0E1" />
                                                    <g id="Group_10">
                                                        <g id="Group_11">
                                                            <path id="Vector_11" d="M87.0313 23.379L87.3933 23.6L100.467 15.927C100.467 15.927 100.825 14.896 99.8573 14.716C99.4493 14.64 95.2693 14.496 95.0413 14.131C94.8133 13.765 95.0723 13.517 94.1793 13.37C93.9433 13.331 93.6473 13.531 93.6473 13.531C93.6473 13.531 93.3433 13.794 93.1153 13.985C92.8873 14.175 92.4813 15.112 92.2533 15.741C92.0253 16.37 87.8433 21.331 87.4373 21.887C87.0313 22.442 87.0313 23.379 87.0313 23.379ZM87.5633 22.691L93.6463 15.345L99.7293 15.667L87.5633 22.691Z" fill="#ADC0E1" />
                                                            <path id="Vector_12" d="M87.4053 23.595L100.636 15.956C100.636 15.956 100.636 15.019 100.23 14.932C99.8243 14.844 95.6423 14.713 95.4143 14.347C95.1863 13.981 94.7803 13.513 94.5523 13.586C94.3243 13.659 94.0203 13.747 94.0203 13.747C94.0203 13.747 93.7163 14.01 93.4883 14.201C93.2603 14.391 92.8543 15.328 92.6263 15.957C92.3983 16.586 88.2153 21.547 87.8103 22.103C87.4053 22.658 87.4053 23.595 87.4053 23.595ZM87.9373 22.907L94.0203 15.561L100.103 15.883L87.9373 22.907Z" fill="#ADC0E1" />
                                                        </g>
                                                        <path id="Vector_13" d="M93.9043 13.765C93.9633 13.765 94.0123 13.717 94.0123 13.658V12.68C94.0123 12.546 93.9593 12.439 93.8673 12.386L93.5873 12.224C93.4843 12.165 93.4263 12.026 93.4263 11.842C93.4263 11.362 93.7643 10.776 94.1803 10.536C94.4813 10.362 94.7063 10.38 94.8223 10.56C94.8543 10.61 94.9213 10.624 94.9713 10.592C95.0213 10.56 95.0353 10.493 95.0033 10.443C94.8233 10.164 94.4743 10.118 94.1133 10.326C93.5903 10.628 93.2113 11.284 93.2113 11.842C93.2113 12.105 93.3093 12.312 93.4803 12.411L93.7603 12.573C93.7833 12.586 93.7973 12.628 93.7973 12.681V13.659C93.7963 13.717 93.8453 13.765 93.9043 13.765Z" fill="#E7EDF7" />
                                                    </g>
                                                    <path id="Vector_14" d="M85.8113 67.598C86.7323 68.524 89.8563 68.357 91.0343 67.79C92.0953 67.28 94.7373 65.097 94.7373 65.097C94.7373 65.097 99.3703 62.989 100.652 61.731C101.295 61.1 101.857 58.333 101.857 58.333C101.857 58.333 101.365 34.813 100.363 32.614C99.3593 30.412 98.5943 26.39 99.4973 24.246C100.4 22.105 99.9523 19.504 99.9523 19.504L99.8823 14.531L96.9483 14.339C96.9483 14.339 98.3913 15.157 95.2373 17.709C93.8243 18.853 93.8973 19.142 92.4293 19.331C89.7343 19.677 90.3113 18.186 90.3113 18.186L87.7143 20.894C87.7143 20.894 88.7573 22.925 88.7723 23.716C88.7923 24.765 88.5803 28.381 88.5803 28.381L89.0613 31.266L88.3403 33.719C88.3403 33.719 87.4153 34.963 86.4143 38.322C85.4103 41.679 82.9913 64.764 85.8113 67.598Z" fill="#8597FE" />
                                                </g>
                                                <g id="Group_12">
                                                    <g id="Group_13">
                                                        <path id="Vector_15" d="M102.803 25.298C105.176 34.596 105.603 24.462 105.797 21.538C105.922 19.651 104.402 18.609 104.402 18.609L104.083 18.589C104.083 18.589 101.453 19.531 100.576 20.739C99.6993 21.947 99.3613 23.389 99.3613 23.389C99.3613 23.389 100.306 26.662 102.803 25.298Z" fill="#C1D0E9" />
                                                        <g id="Group_14">
                                                            <g id="Group_15">
                                                                <path id="Vector_16" d="M94.9163 29.574L95.3183 29.819L109.851 21.289C109.851 21.289 110.249 20.143 109.173 19.943C108.72 19.859 104.073 19.699 103.819 19.292C103.565 18.885 103.853 18.609 102.861 18.446C102.598 18.403 102.269 18.625 102.269 18.625C102.269 18.625 101.931 18.918 101.677 19.129C101.423 19.341 100.973 20.382 100.719 21.081C100.465 21.78 95.8163 27.295 95.3653 27.914C94.9163 28.533 94.9163 29.574 94.9163 29.574ZM95.5083 28.809L102.27 20.642L109.033 21.001L95.5083 28.809Z" fill="#ADC0E1" />
                                                                <path id="Vector_17" d="M95.3323 29.814L110.04 21.322C110.04 21.322 110.04 20.281 109.589 20.183C109.138 20.085 104.489 19.939 104.235 19.532C103.981 19.125 103.531 18.605 103.277 18.686C103.023 18.767 102.685 18.865 102.685 18.865C102.685 18.865 102.347 19.158 102.093 19.369C101.839 19.581 101.389 20.622 101.135 21.321C100.881 22.02 96.2323 27.535 95.7813 28.154C95.3323 28.773 95.3323 29.814 95.3323 29.814ZM95.9243 29.049L102.686 20.882L109.448 21.24L95.9243 29.049Z" fill="#ADC0E1" />
                                                            </g>
                                                            <path id="Vector_18" d="M102.557 18.964C102.665 18.964 102.753 18.876 102.753 18.768V17.681C102.753 17.505 102.681 17.362 102.554 17.288L102.242 17.108C102.153 17.057 102.102 16.926 102.102 16.75C102.102 16.25 102.468 15.615 102.902 15.365L102.946 15.34C103.066 15.27 103.363 15.134 103.512 15.366C103.572 15.457 103.693 15.484 103.784 15.424C103.875 15.365 103.902 15.244 103.842 15.152C103.619 14.806 103.189 14.745 102.75 14.998L102.706 15.022C102.147 15.346 101.709 16.103 101.709 16.749C101.709 17.07 101.832 17.324 102.046 17.448L102.355 17.626C102.355 17.626 102.36 17.643 102.36 17.681V18.768C102.36 18.875 102.449 18.964 102.557 18.964Z" fill="#E7EDF7" />
                                                        </g>
                                                        <g id="Group_16">
                                                            <path id="Vector_19" d="M98.0793 36.911C98.0793 39.093 95.3383 44.596 96.9993 46.263C98.3063 47.575 101.362 46.962 104.031 45.288C104.11 45.238 104.188 45.188 104.267 45.137C106.316 43.792 108.094 41.826 108.608 39.639C108.638 39.514 108.574 38.807 108.438 37.862C108.784 38.829 109.234 39.567 109.823 39.873C110.616 40.285 112.877 38.558 112.658 37.691C111.476 33.016 110.266 23.612 110.121 20.424C110.041 18.671 105.499 19.627 105.499 19.627L103.965 26.6C103.348 26.726 100.811 21.342 99.7813 22.217C97.3183 24.309 95.2183 27.676 95.2183 27.676C95.2183 27.676 98.0793 34.729 98.0793 36.911ZM107.326 27.909C107.326 27.909 107.266 30.854 107.61 33.84C107.562 33.675 107.512 33.516 107.461 33.364C106.718 31.144 107.326 27.909 107.326 27.909Z" fill="#4965A5" />
                                                            <path id="Vector_20" d="M98.8213 29.936C98.6193 30.053 95.2173 27.655 95.2173 27.655C95.2173 27.655 95.1503 26.541 94.3403 32.775C93.5303 39.01 90.3783 47.338 94.0213 49.272C94.7393 49.653 96.6513 47.671 96.6513 47.359L98.8213 29.936Z" fill="#C1D0E9" />
                                                        </g>
                                                        <path id="Vector_21" d="M100.856 20.482C100.856 20.482 100.537 21.04 100.896 21.598C101.255 22.156 103.825 25.005 103.964 25.503C104.103 26.001 104.143 26.692 104.143 26.692C104.143 26.692 102.629 25.643 101.912 25.643C101.195 25.643 101.812 24.946 101.812 24.946L100.796 25.225C100.796 25.225 99.1023 23.83 99.4413 22.754C99.7803 21.678 100.856 20.482 100.856 20.482Z" fill="#8597FE" />
                                                        <path id="Vector_22" d="M104.103 18.61C104.103 18.61 104.541 18.391 104.721 19.646C104.9 20.901 103.843 26.413 103.665 27.25C103.399 28.499 101.965 31.713 101.965 31.713L106.056 24.547L105.478 24.288C105.478 24.288 106.574 23.232 106.574 23.033C106.574 22.834 106.733 20.821 105.916 19.586C105.1 18.35 104.103 18.61 104.103 18.61Z" fill="#8597FE" />
                                                    </g>
                                                    <path id="Vector_23" d="M101.832 40.054C102.33 43.318 102.676 45.035 102.915 45.899C102.994 45.849 103.072 45.799 103.151 45.748C103.134 45.713 102.31 41.835 101.991 40.241C101.672 38.647 101.938 31.661 101.938 31.661C101.938 31.661 101.354 36.92 101.832 40.054Z" fill="#8597FE" />
                                                    <path id="Vector_24" d="M105.086 31.009C104.947 31.251 104.947 31.511 105.086 31.592C105.225 31.672 105.451 31.542 105.591 31.301C105.73 31.059 105.73 30.799 105.591 30.718C105.452 30.638 105.226 30.768 105.086 31.009Z" fill="#8597FE" />
                                                    <path id="Vector_25" d="M103.342 32.016C103.203 32.257 103.203 32.518 103.342 32.599C103.481 32.679 103.707 32.549 103.847 32.308C103.986 32.067 103.986 31.806 103.847 31.725C103.707 31.645 103.481 31.775 103.342 32.016Z" fill="#8597FE" />
                                                    <path id="Vector_26" d="M105.086 34.277C104.947 34.518 104.947 34.779 105.086 34.86C105.225 34.941 105.451 34.81 105.591 34.569C105.73 34.328 105.73 34.067 105.591 33.986C105.452 33.905 105.226 34.036 105.086 34.277Z" fill="#8597FE" />
                                                    <path id="Vector_27" d="M103.342 35.284C103.203 35.525 103.203 35.786 103.342 35.867C103.481 35.948 103.707 35.817 103.847 35.576C103.986 35.335 103.986 35.074 103.847 34.993C103.707 34.912 103.481 35.043 103.342 35.284Z" fill="#8597FE" />
                                                    <path id="Vector_28" d="M105.086 37.544C104.947 37.785 104.947 38.046 105.086 38.127C105.225 38.207 105.451 38.077 105.591 37.835C105.73 37.594 105.73 37.333 105.591 37.252C105.452 37.173 105.226 37.303 105.086 37.544Z" fill="#8597FE" />
                                                    <path id="Vector_29" d="M103.342 38.552C103.203 38.793 103.203 39.054 103.342 39.135C103.481 39.216 103.707 39.085 103.847 38.844C103.986 38.603 103.986 38.342 103.847 38.261C103.707 38.18 103.481 38.31 103.342 38.552Z" fill="#8597FE" />
                                                    <path id="Vector_30" d="M105.086 40.812C104.947 41.053 104.947 41.314 105.086 41.395C105.225 41.476 105.451 41.345 105.591 41.104C105.73 40.863 105.73 40.602 105.591 40.521C105.452 40.44 105.226 40.571 105.086 40.812Z" fill="#8597FE" />
                                                    <path id="Vector_31" d="M103.342 41.819C103.203 42.06 103.203 42.321 103.342 42.402C103.481 42.482 103.707 42.352 103.847 42.111C103.986 41.87 103.986 41.609 103.847 41.528C103.707 41.447 103.481 41.578 103.342 41.819Z" fill="#8597FE" />
                                                </g>
                                                <g id="Group_17">
                                                    <path id="Vector_32" d="M110.988 29.816C113.361 39.114 113.788 28.98 113.982 26.056C114.107 24.169 112.587 23.127 112.587 23.127L112.268 23.107C112.268 23.107 109.638 24.049 108.76 25.257C107.883 26.465 107.545 27.907 107.545 27.907C107.545 27.907 108.491 31.18 110.988 29.816Z" fill="#8597FE" />
                                                    <g id="Group_18">
                                                        <g id="Group_19">
                                                            <path id="Vector_33" d="M103.101 34.092L103.503 34.337L118.036 25.807C118.036 25.807 118.434 24.661 117.358 24.461C116.905 24.377 112.258 24.217 112.004 23.81C111.75 23.403 112.038 23.127 111.046 22.964C110.783 22.921 110.454 23.143 110.454 23.143C110.454 23.143 110.116 23.436 109.862 23.647C109.608 23.858 109.158 24.9 108.904 25.599C108.651 26.299 104.001 31.813 103.55 32.432C103.101 33.051 103.101 34.092 103.101 34.092ZM103.693 33.327L110.456 25.16L117.218 25.518L103.693 33.327Z" fill="#ADC0E1" />
                                                            <path id="Vector_34" d="M103.517 34.332L118.225 25.84C118.225 25.84 118.225 24.799 117.774 24.701C117.323 24.603 112.674 24.457 112.42 24.05C112.167 23.643 111.716 23.123 111.462 23.204C111.208 23.285 110.87 23.383 110.87 23.383C110.87 23.383 110.532 23.676 110.278 23.887C110.024 24.099 109.574 25.14 109.32 25.839C109.066 26.538 104.417 32.053 103.966 32.671C103.517 33.291 103.517 34.332 103.517 34.332ZM104.108 33.567L110.87 25.4L117.632 25.758L104.108 33.567Z" fill="#ADC0E1" />
                                                        </g>
                                                        <path id="Vector_35" d="M110.742 23.481C110.85 23.481 110.939 23.393 110.939 23.285V22.198C110.939 22.022 110.867 21.879 110.74 21.805L110.428 21.625C110.339 21.574 110.288 21.443 110.288 21.267C110.288 20.767 110.654 20.133 111.088 19.882L111.132 19.857C111.252 19.786 111.548 19.651 111.698 19.883C111.757 19.975 111.879 20.001 111.97 19.941C112.061 19.882 112.087 19.761 112.028 19.669C111.805 19.323 111.375 19.262 110.936 19.515L110.892 19.54C110.333 19.865 109.895 20.622 109.895 21.267C109.895 21.588 110.018 21.842 110.232 21.966L110.541 22.144C110.541 22.144 110.546 22.161 110.546 22.199V23.286C110.545 23.393 110.633 23.481 110.742 23.481Z" fill="#E7EDF7" />
                                                    </g>
                                                    <path id="Vector_36" d="M115.671 24.303C115.671 24.303 117.066 22.948 118.467 24.488C119.406 25.519 118.228 33.335 118.108 34.531C117.988 35.727 118.586 45.052 118.586 45.052L116.195 45.53L115.671 24.303Z" fill="#8597FE" />
                                                    <path id="Vector_37" d="M113.436 23.912C113.436 23.912 116.073 23.875 116.783 24.33C117.595 24.85 117.859 26.063 117.859 28.036C117.859 30.009 117.56 32.519 117.202 33.953C116.843 35.388 118.032 43.233 116.664 46.206C115.64 48.43 111.703 51.466 108.655 51.824C105.607 52.183 103.634 49.254 103.634 49.254C103.634 49.254 104.112 31.861 104.59 30.785C104.948 29.979 108.236 26.84 108.236 26.84L111.822 27.916L113.436 23.912Z" fill="#8597FE" />
                                                    <path id="Vector_38" d="M112.024 23.208C112.024 23.208 112.462 22.969 112.901 23.945C113.339 24.921 111.706 27.89 111.706 27.89C111.706 27.89 113.32 29.105 113.38 29.066C113.44 29.026 114.894 26.097 114.735 24.962C114.576 23.826 112.683 23.109 112.404 23.029C112.125 22.949 112.024 23.208 112.024 23.208Z" fill="#8597FE" />
                                                    <path id="Vector_39" d="M110.909 30.36L111.706 27.889C111.706 27.889 109.156 27.451 108.777 26.773C108.399 26.096 108.657 25.378 108.657 25.378C108.657 25.378 107.88 26.633 107.76 26.972C107.64 27.311 107.521 27.53 107.521 27.53C107.521 27.53 107.999 28.865 108.776 29.363C109.554 29.862 110.909 30.36 110.909 30.36Z" fill="#8597FE" />
                                                    <path id="Vector_40" d="M105.196 30.585C105.196 30.585 104 28.792 103.163 31.781C102.326 34.77 102.924 49.117 102.924 49.117C102.924 49.117 102.446 50.073 103.761 50.432C105.076 50.791 105.674 50.432 105.674 50.432C105.674 50.432 106.511 33.814 106.272 33.096C106.033 32.379 105.196 30.585 105.196 30.585Z" fill="#8597FE" />
                                                    <g id="Group_20">
                                                        <path id="Vector_41" d="M114.804 33.934L115.903 33.886L117.129 32.592V29.42L114.804 30.762V33.934Z" fill="#E7EDF7" />
                                                        <path id="Vector_42" d="M107.831 37.961L108.929 37.912L110.155 36.619V33.446L107.831 34.789V37.961Z" fill="#E7EDF7" />
                                                    </g>
                                                </g>
                                                <g id="Group_21">
                                                    <path id="Vector_43" d="M128.618 61.941C128.618 61.941 128.018 50.797 126.798 48.401C125.575 46.001 124.643 41.618 125.743 39.281C126.843 36.948 126.297 34.113 126.297 34.113L126.212 28.693L122.638 28.483C122.638 28.483 124.396 29.374 120.553 32.156C118.831 33.403 118.921 33.718 117.133 33.923C113.85 34.3 114.553 32.675 114.553 32.675L111.389 35.627C111.389 35.627 110.609 37.736 110.627 38.598C110.651 39.741 111.343 42.589 112.443 43.787C113.543 44.988 113.1 46.986 113.1 46.986L112.977 48.942L128.618 61.941Z" fill="#ADC0E1" />
                                                    <g id="Group_22">
                                                        <g id="Group_23">
                                                            <path id="Vector_44" d="M110.555 38.335L110.995 38.575L126.923 30.212C126.923 30.212 127.36 29.089 126.18 28.892C125.683 28.809 120.591 28.653 120.313 28.254C120.035 27.855 120.351 27.584 119.263 27.425C118.975 27.383 118.615 27.6 118.615 27.6C118.615 27.6 118.244 27.887 117.967 28.094C117.689 28.301 117.195 29.322 116.917 30.008C116.639 30.694 111.544 36.101 111.05 36.707C110.555 37.315 110.555 38.335 110.555 38.335ZM111.204 37.586L118.615 29.579L126.026 29.93L111.204 37.586Z" fill="#ADC0E1" />
                                                            <path id="Vector_45" d="M111.01 38.571L127.13 30.245C127.13 30.245 127.13 29.224 126.636 29.128C126.142 29.032 121.046 28.889 120.769 28.49C120.491 28.091 119.997 27.581 119.719 27.661C119.441 27.741 119.071 27.836 119.071 27.836C119.071 27.836 118.7 28.123 118.423 28.33C118.145 28.537 117.651 29.558 117.373 30.244C117.095 30.93 112 36.337 111.506 36.943C111.01 37.55 111.01 38.571 111.01 38.571ZM111.659 37.821L119.07 29.814L126.481 30.165L111.659 37.821Z" fill="#ADC0E1" />
                                                        </g>
                                                        <path id="Vector_46" d="M118.929 27.858C119.001 27.858 119.06 27.805 119.06 27.741V26.675C119.06 26.529 118.996 26.412 118.884 26.354L118.543 26.178C118.418 26.113 118.346 25.962 118.346 25.761C118.346 25.238 118.758 24.599 119.265 24.337L119.314 24.312C119.631 24.148 119.905 24.167 120.047 24.363C120.086 24.417 120.167 24.433 120.228 24.398C120.289 24.363 120.306 24.29 120.267 24.236C120.048 23.932 119.622 23.882 119.183 24.109L119.134 24.134C118.545 24.438 118.084 25.153 118.084 25.761C118.084 26.047 118.203 26.273 118.412 26.381L118.753 26.557C118.781 26.571 118.798 26.617 118.798 26.675V27.741C118.798 27.805 118.856 27.858 118.929 27.858Z" fill="#E7EDF7" />
                                                    </g>
                                                    <path id="Vector_47" d="M109.069 72.039C110.192 73.048 113.997 72.866 115.432 72.249C116.724 71.693 119.943 69.314 119.943 69.314C119.943 69.314 125.588 67.017 127.149 65.645C127.933 64.957 128.617 61.941 128.617 61.941C128.617 61.941 128.017 50.797 126.797 48.401C125.574 46.001 124.642 41.618 125.742 39.281C126.842 36.948 126.296 34.113 126.296 34.113L126.211 28.693L122.637 28.483C122.637 28.483 124.395 29.374 120.552 32.156C118.83 33.403 118.92 33.718 117.132 33.923C113.849 34.3 114.552 32.675 114.552 32.675L111.388 35.627C111.388 35.627 112.659 37.841 112.677 38.703C112.702 39.846 112.443 43.787 112.443 43.787L113.029 46.932L112.15 49.605C112.15 49.605 111.023 50.961 109.803 54.622C108.58 58.281 105.634 68.951 109.069 72.039Z" fill="#4360A3" />
                                                </g>
                                                <path id="Vector_48" d="M128.113 31.174L128.776 30.791L85.4092 5.69701L84.7473 6.08001L128.113 31.174Z" fill="#E7EDF7" />
                                                <g id="Group_24">
                                                    <g id="Group_25">
                                                        <path id="Vector_49" d="M136.255 28.062C136.508 27.916 136.508 27.441 136.255 27.002C136.002 26.563 135.59 26.326 135.337 26.472L123.152 33.475L124.07 35.065L136.255 28.062Z" fill="#BCC0CC" />
                                                        <path id="Vector_50" d="M123.152 34.535C123.405 34.974 123.816 35.211 124.07 35.065C124.323 34.919 124.323 34.444 124.07 34.005C123.816 33.566 123.405 33.329 123.152 33.475C122.899 33.621 122.899 34.096 123.152 34.535Z" fill="#E1E5EF" />
                                                    </g>
                                                    <g id="Group_26">
                                                        <path id="Vector_51" d="M135.465 81.631C135.465 81.924 135.876 82.161 136.383 82.161C136.89 82.161 137.301 81.924 137.301 81.631V25.372H135.465V81.631Z" fill="#BCC0CC" />
                                                        <path id="Vector_52" d="M135.465 25.372C135.465 25.665 135.876 25.902 136.383 25.902C136.89 25.902 137.301 25.665 137.301 25.372C137.301 25.079 136.89 24.842 136.383 24.842C135.876 24.842 135.465 25.079 135.465 25.372Z" fill="#E7EDF7" />
                                                    </g>
                                                    <g id="Group_27">
                                                        <path id="Vector_53" d="M122.4 89.173C122.4 89.466 122.811 89.703 123.318 89.703C123.825 89.703 124.236 89.466 124.236 89.173V32.914H122.4V89.173Z" fill="#BCC0CC" />
                                                        <path id="Vector_54" d="M123.318 33.444C123.825 33.444 124.236 33.2067 124.236 32.914C124.236 32.6213 123.825 32.384 123.318 32.384C122.811 32.384 122.4 32.6213 122.4 32.914C122.4 33.2067 122.811 33.444 123.318 33.444Z" fill="#E7EDF7" />
                                                    </g>
                                                </g>
                                            </g>
                                            <g id="Group_28">
                                                <g id="Group_29">
                                                    <path id="Vector_55" d="M47.5193 101.197V99.466C47.5193 99.466 46.4623 100.142 46.2073 100.625C45.8153 101.365 46.0143 102.713 45.8153 103.261C45.1833 105.004 44.6653 108.895 46.5093 110.418C48.8203 112.325 48.9493 111.509 49.4703 110.889C49.9913 110.269 47.6083 105.849 47.6983 105.004C47.7883 104.159 47.5193 101.197 47.5193 101.197Z" fill="#CED6E1" />
                                                    <path id="Vector_56" d="M50.0323 99.021C50.0323 99.021 47.6993 98.819 47.3173 99.739C46.9363 100.659 47.0933 101.893 47.1603 102.723C47.2273 103.553 45.4553 106.918 45.8813 108.332C46.3073 109.746 48.3713 111.473 49.4713 110.89C50.5703 110.307 49.9203 108.332 50.0323 107.525C50.1443 106.717 51.9393 102.253 52.0293 102.141C52.1183 102.027 50.0323 99.021 50.0323 99.021Z" fill="#619AAF" />
                                                    <path id="Vector_57" d="M65.8262 100.794C65.8262 100.794 63.3562 104.14 64.4802 105.427C65.9612 107.121 68.0472 106.728 68.4732 107.311C68.8992 107.894 71.1593 109.005 73.2463 109.005C75.3323 109.005 76.1932 107.178 73.1962 105.775C71.9232 105.179 69.1913 101.748 69.1913 101.748L65.8262 100.794Z" fill="#CED6E1" />
                                                    <path id="Vector_58" d="M64.9843 99.296C64.9843 99.296 62.8883 103.784 64.4793 104.405C68.1553 105.841 67.5843 105.433 68.4723 106.289C68.9923 106.79 72.4683 108.834 74.4073 108.063C76.1893 107.354 73.8113 106.169 73.0263 105.003C72.2413 103.836 69.1903 100.725 69.1903 100.725L64.9843 99.296Z" fill="#619AAF" />
                                                    <path id="Vector_59" d="M60.8452 63.552C60.8452 63.552 58.7812 65.478 58.6912 71.784C58.6012 78.09 59.4992 84.546 58.6912 85.94C57.8832 87.333 54.2042 88.337 52.8582 90.976C51.5122 93.615 49.0892 98.371 48.7302 100.166C48.3712 101.961 50.2362 103.98 52.0312 104.159C53.8262 104.338 63.4772 94.825 64.8542 90.16C66.2312 85.495 68.3082 71.784 68.3082 71.784C68.3082 71.784 68.7422 81.153 67.1272 85.185C65.5122 89.217 64.1492 93.887 64.1662 97.338C64.1722 98.55 64.2562 101.556 65.8122 101.959C67.8472 102.487 68.2942 102.856 69.1912 101.959C70.0882 101.062 72.9602 91.668 74.5752 84.161C76.1902 76.653 77.1772 70.641 75.9212 66.693C74.6652 62.745 73.3192 60.681 73.3192 60.681H63.3582C63.3582 60.681 61.2942 60.86 60.8452 63.552Z" fill="#E7EDF7" />
                                                    <path id="Vector_60" d="M63.1783 44.797C63.1783 44.797 60.3063 44.079 59.7683 44.797C59.2303 45.515 55.9093 49.374 55.6403 49.643C55.3713 49.912 56.1793 52.694 57.7043 52.515C59.2293 52.335 61.4733 49.823 61.4733 49.823C61.4733 49.823 63.0883 55.566 63.1783 57.63C63.2103 58.374 61.4713 61.057 60.3963 63.284C59.6793 64.77 59.4803 66.189 59.4803 66.189C59.4803 66.189 60.5983 68.466 65.3543 68.825C70.1103 69.184 75.8313 66.223 75.8313 66.223C75.8313 66.223 73.5883 61.13 74.1263 58.977C74.6643 56.824 74.8963 55.334 74.8963 55.334C74.8963 55.334 76.4593 53.233 75.9203 50.721C75.3823 48.208 75.4713 46.493 73.8563 44.479C72.2413 42.465 68.1753 41.657 65.8103 42.465C63.4483 43.272 63.1783 44.797 63.1783 44.797Z" fill="#619AAF" />
                                                    <path id="Vector_61" d="M71.4072 39.093C71.4072 39.093 71.1742 42.472 72.7402 42.468C74.3062 42.464 74.5982 40.849 74.2162 39.727C73.8352 38.605 74.5622 38.605 74.3662 36.99C74.1712 35.375 73.1492 34.533 72.8972 34.214C72.6452 33.894 73.5932 33.176 72.1992 32.189C70.8052 31.202 69.5042 31.471 69.5042 31.471C69.5042 31.471 67.4402 30.349 66.3632 31.022L65.2862 31.695C65.2862 31.695 61.8312 32.458 61.9212 34.611C62.0112 36.765 62.9532 36.451 62.2352 37.169C61.5172 37.887 60.7542 37.875 61.0242 39.092C61.2932 40.309 61.5172 40.05 61.6972 40.471C61.8772 40.893 60.9582 40.648 60.9692 42.027C60.9792 43.405 62.0992 43.313 62.2362 43.971C62.3732 44.629 61.6132 46.456 63.8762 46.725C66.1392 46.995 67.7042 46.501 67.6852 45.693C67.6652 44.885 67.2962 42.176 67.2962 42.176C67.2962 42.176 68.8322 42.219 69.5942 42.027C70.3572 41.836 71.4072 39.093 71.4072 39.093Z" fill="#582A2C" />
                                                    <path id="Vector_62" d="M71.9753 35.392C72.2023 35.745 72.7973 37.877 72.7353 38.359C72.6733 38.841 72.4383 38.993 72.5223 39.851C72.6063 40.709 72.3583 41.465 72.2003 42.028C72.0413 42.591 72.4383 43.788 71.2943 43.923C70.1503 44.058 69.1913 43.923 68.1483 43.469C67.1053 43.015 65.8123 40.878 65.8123 40.878C65.8123 40.878 65.6583 41.82 64.7833 40.912C63.9083 40.003 63.7063 37.951 64.0093 37.816C64.3123 37.681 65.7083 39.179 66.0793 39.145C66.4493 39.111 67.1223 39.212 67.5263 38.909C67.9303 38.606 67.9993 38.253 68.3093 38.27C68.6193 38.287 69.5793 37.765 69.7473 37.361C69.9153 36.957 69.7973 36.671 70.3363 36.234C70.8743 35.796 70.0843 34.215 70.0843 34.215C70.0843 34.215 70.7913 35.208 71.1613 35.241C71.5303 35.274 71.9753 35.392 71.9753 35.392Z" fill="#F1C9BC" />
                                                    <path id="Vector_63" d="M75.4163 41.567C75.4163 41.567 74.9113 44.36 74.9783 44.697C75.0453 45.034 79.0833 47.154 80.2953 47.591C81.5073 48.029 83.8623 49.038 84.1313 49.475C84.4003 49.912 84.9393 51.124 84.6363 51.595C84.3333 52.066 83.3573 52.638 82.2133 52.638C81.0693 52.638 76.2233 49.063 75.1803 47.889C74.1373 46.715 73.2283 45.773 72.8923 45.134C72.5563 44.495 71.9373 42.131 71.8913 42.155C71.8453 42.179 72.3823 40.288 72.2003 40.019C72.0183 39.75 71.3453 39.167 71.4123 38.651C71.4793 38.135 71.9053 38.651 71.9053 38.651C71.9053 38.651 71.8883 37.911 72.2003 38.068C72.5113 38.225 72.7353 38.36 72.7353 38.36C72.7353 38.36 72.5783 38.025 72.9823 38.046C73.3863 38.068 73.8353 38.606 73.8353 38.606C73.8353 38.606 74.2613 38.382 74.5983 38.584C74.9353 38.786 75.4163 41.567 75.4163 41.567Z" fill="#F4D0C6" />
                                                    <g id="Group_30">
                                                        <g id="Axo_Extrusion_00000015313373626690627500000008621582412160818343_">
                                                            <path id="Axo_panel_00000151535185517353388740000015818267275469438889_" d="M70.7792 42.078L74.8252 39.742V43.069L70.7792 45.405V42.078Z" fill="#754F53" />
                                                            <path id="Axo_panel_00000105396707625074796410000010487089849501278132_" d="M67.5273 41.382L70.0082 42.815C70.2232 42.939 70.5723 42.939 70.7873 42.815L71.0312 42.674C71.1383 42.612 71.1923 42.531 71.1923 42.45V45.777C71.1923 45.858 71.1383 45.939 71.0312 46.001L70.7873 46.142C70.5723 46.266 70.2232 46.266 70.0082 46.142L67.5273 44.71V41.382Z" fill="#E7EDF7" />
                                                            <path id="Axo_panel_00000164492747575581465300000011458389737562058660_" d="M67.5273 42.01L70.0082 43.442C70.2232 43.566 70.5723 43.566 70.7873 43.442L71.0312 43.301C71.1383 43.239 71.1923 43.158 71.1923 43.077C71.1923 43.541 71.2413 43.475 70.7873 43.737C70.5723 43.861 70.2232 43.861 70.0082 43.737L67.5273 42.305V42.01Z" fill="#ECEFF3" />
                                                            <path id="Axo_panel_00000029735664955804179700000008453747980581525633_" d="M67.5273 42.287L70.0082 43.719C70.2232 43.843 70.5723 43.843 70.7873 43.719L71.0312 43.578C71.1383 43.516 71.1923 43.435 71.1923 43.354V44.629C71.1923 44.71 71.1383 44.791 71.0312 44.853L70.7873 44.994C70.5723 45.118 70.2232 45.118 70.0082 44.994L67.5273 43.562V42.287Z" fill="#E7EDF7" />
                                                            <path id="Axo_panel_00000089572759514882519410000004734395804814529674_" d="M67.5273 43.526L70.0082 44.958C70.2232 45.082 70.5723 45.082 70.7873 44.958L71.0312 44.817C71.1383 44.755 71.1923 44.674 71.1923 44.593C71.1923 45.057 71.2413 44.991 70.7873 45.253C70.5723 45.377 70.2232 45.377 70.0082 45.253L67.5273 43.821V43.526Z" fill="#ECEFF3" />
                                                            <path id="Axo_base_00000140005244429499830490000008927480096684726146_" d="M67.5273 41.382L72.5963 38.455L74.8252 39.742L70.7793 42.078L71.0312 42.223C71.2442 42.346 71.2482 42.548 71.0312 42.673L70.7873 42.814C70.5723 42.938 70.2232 42.938 70.0082 42.814L67.5273 41.382Z" fill="#7B565A" />
                                                        </g>
                                                        <path id="Axo_base_00000048486481516239055590000011547586205418947971_" d="M73.1932 40.467L71.7902 41.277L69.7142 40.078L71.1172 39.268L73.1932 40.467Z" fill="#0D1017" />
                                                        <g id="Axo_Extrusion_00000175305729008372469390000003096019180258170001_">
                                                            <path id="Axo_panel_00000111149418226812028570000011236389788264160901_" d="M74.0453 41.758C73.6413 41.525 72.9873 41.903 72.5833 42.602C72.1793 43.301 72.1793 44.057 72.5833 44.29L72.1753 44.054C71.7713 43.821 71.7713 43.065 72.1753 42.366C72.5793 41.667 73.2333 41.289 73.6373 41.522L74.0453 41.758Z" fill="#7B565A" />
                                                            <g id="Axo_Extrusion_00000010271306315909044650000012519254006126427013_">
                                                                <path id="Axo_panel_00000182488269852888424570000003320209425490659510_" d="M78.5373 44.351C78.1333 44.118 77.3403 44.236 76.9363 44.935C76.5323 45.634 76.5323 46.39 76.9363 46.623L72.5833 44.289C72.1793 44.056 72.1793 43.3 72.5833 42.601C72.9873 41.902 73.6413 41.524 74.0453 41.757L78.5373 44.351Z" fill="#E7EDF7" />
                                                                <g id="Axo_Extrusion_00000011734142733434016430000001806308508712082836_">
                                                                    <path id="Axo_panel_00000036951255037805297170000008537687902561858465_" d="M81.5563 45.606C81.0353 45.306 80.1923 45.793 79.6713 46.694C79.1513 47.596 79.1513 48.57 79.6713 48.87L74.7363 46.021C74.2153 45.72 74.2153 44.746 74.7363 43.844C75.2573 42.942 76.1003 42.455 76.6213 42.756L81.5563 45.606Z" fill="#ECEFF3" />
                                                                    <path id="Axo_panel_00000142858284142038729650000013996873598996000958_" d="M81.6753 45.674C81.1543 45.373 80.3103 45.861 79.7903 46.762C79.2693 47.664 79.2693 48.638 79.7903 48.939L74.8553 46.09C74.3343 45.79 74.3343 44.815 74.8553 43.913C75.3763 43.011 76.2193 42.524 76.7403 42.825L81.6753 45.674Z" fill="#7B565A" />
                                                                    <path id="Axo_base_00000102532354785985720600000004715855797198507185_" d="M81.6753 45.674C82.1963 45.975 82.1963 46.949 81.6753 47.851C81.1543 48.753 80.3103 49.24 79.7903 48.939C79.2703 48.638 79.2693 47.664 79.7903 46.762C80.3103 45.861 81.1543 45.373 81.6753 45.674Z" fill="#582A2C" />
                                                                    <path id="Axo_base_00000057848330683268353790000002761881485402570395_" d="M81.6753 45.674C82.1963 45.975 82.1963 46.949 81.6753 47.851C81.1543 48.753 80.3103 49.24 79.7903 48.939C79.2703 48.638 79.2693 47.664 79.7903 46.762C80.3103 45.861 81.1543 45.373 81.6753 45.674Z" fill="#754F53" />
                                                                    <path id="Vector_64" d="M81.4633 47.728C80.8333 48.817 79.7373 48.973 79.7003 47.953C79.6743 47.273 80.1683 46.412 80.7763 46.089C81.6953 45.605 82.0823 46.655 81.4633 47.728Z" fill="#ECEFF3" />
                                                                    <g id="Axo_cap_00000064313801467366370290000007213484473567877553_">
                                                                        <path id="Vector_65" d="M80.8763 47.39C80.5753 47.912 80.0863 48.194 79.7853 48.02C79.7543 48.002 79.7263 47.98 79.7013 47.953C79.6753 47.273 80.1693 46.412 80.7773 46.089C81.2423 46.212 81.1453 46.924 80.8763 47.39Z" fill="#EEF1F4" />
                                                                        <path id="Vector_66" d="M80.0173 47.638C79.9313 47.237 80.2693 46.648 80.6623 46.521C80.3243 46.802 80.0993 47.157 80.0173 47.638Z" fill="#EFF2F5" />
                                                                        <path id="Axo_base_00000085949863874843609460000004399287187425192331_" d="M80.3883 47.401C80.2333 47.311 80.4683 46.904 80.6233 46.994C80.7793 47.083 80.5443 47.49 80.3883 47.401Z" fill="white" />
                                                                    </g>
                                                                </g>
                                                                <g id="Axo_Extrusion_00000150086408571450162640000003471930222577499531_">
                                                                    <path id="Axo_panel_00000050632588431624055230000006371169368096008579_" d="M83.4173 45.924C82.7393 45.532 81.6393 46.167 80.9613 47.342C80.2833 48.517 80.2833 49.787 80.9613 50.178L77.4403 48.145C76.7623 47.753 76.7623 46.484 77.4403 45.309C78.1183 44.134 79.2183 43.499 79.8963 43.891L83.4173 45.924Z" fill="#ECEFF3" />
                                                                    <path id="Axo_panel_00000173136665299408058700000002464595031514202791_" d="M83.5713 46.013C82.8933 45.621 81.7933 46.256 81.1153 47.431C80.4373 48.606 80.4373 49.876 81.1153 50.267L77.5943 48.234C76.9163 47.842 76.9163 46.572 77.5943 45.398C78.2723 44.223 79.3722 43.588 80.0502 43.98L83.5713 46.013Z" fill="#7B565A" />
                                                                    <path id="Axo_base_00000032607538698647914870000009057184140597358233_" d="M83.5713 46.013C84.2493 46.404 84.2493 47.674 83.5713 48.849C82.8933 50.024 81.7933 50.659 81.1153 50.267C80.4373 49.875 80.4373 48.606 81.1153 47.431C81.7933 46.257 82.8933 45.622 83.5713 46.013Z" fill="#582A2C" />
                                                                    <path id="Axo_base_00000127036580634515469130000010451550803759768196_" d="M83.5713 46.013C84.2493 46.404 84.2493 47.674 83.5713 48.849C82.8933 50.024 81.7933 50.659 81.1153 50.267C80.4373 49.875 80.4373 48.606 81.1153 47.431C81.7933 46.257 82.8933 45.622 83.5713 46.013Z" fill="#754F53" />
                                                                    <path id="Vector_67" d="M83.2963 48.69C82.4753 50.109 81.0473 50.313 80.9993 48.983C80.9653 48.096 81.6093 46.974 82.4013 46.554C83.5973 45.924 84.1033 47.292 83.2963 48.69Z" fill="#ECEFF3" />
                                                                    <g id="Axo_cap_00000059277558167172747240000007516530937167978682_">
                                                                        <path id="Vector_68" d="M82.5303 48.249C82.1373 48.929 81.5003 49.297 81.1083 49.07C81.0673 49.046 81.0313 49.018 80.9993 48.983C80.9653 48.096 81.6093 46.974 82.4013 46.554C83.0083 46.714 82.8813 47.642 82.5303 48.249Z" fill="#EEF1F4" />
                                                                        <path id="Vector_69" d="M81.4123 48.573C81.2993 48.051 81.7403 47.283 82.2523 47.117C81.8113 47.484 81.5183 47.946 81.4123 48.573Z" fill="#EFF2F5" />
                                                                        <path id="Axo_base_00000143619267711988218930000007547104637513982886_" d="M81.8953 48.263C81.6933 48.146 81.9993 47.616 82.2013 47.733C82.4043 47.85 82.0983 48.38 81.8953 48.263Z" fill="white" />
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                        <g id="Axo_Extrusion_00000039840540730969906480000005317909229880087721_">
                                                            <path id="Axo_panel_00000034090132242931445380000000658362617932290701_" d="M69.9692 42.187C69.9692 42.3 70.1282 42.392 70.3242 42.392C70.5202 42.392 70.6792 42.3 70.6792 42.187V42.424C70.6792 42.537 70.5202 42.629 70.3242 42.629C70.1282 42.629 69.9692 42.537 69.9692 42.424V42.187Z" fill="white" />
                                                            <path id="Axo_base_00000116225111124224524780000006875350413434764710_" d="M69.9692 42.187C69.9692 42.074 70.1282 41.982 70.3242 41.982C70.5202 41.982 70.6792 42.074 70.6792 42.187C70.6792 42.3 70.5202 42.392 70.3242 42.392C70.1282 42.392 69.9692 42.3 69.9692 42.187Z" fill="white" />
                                                        </g>
                                                        <g id="Axo_Extrusion_00000041290592735962617020000016338281003365938823_">
                                                            <path id="Axo_panel_00000072994739339425985530000013280789233630960315_" d="M72.3093 39.211C72.3093 39.451 72.6463 39.646 73.0623 39.646C73.4783 39.646 73.8153 39.452 73.8153 39.211V39.462C73.8153 39.702 73.4783 39.897 73.0623 39.897C72.6463 39.897 72.3093 39.702 72.3093 39.462V39.211Z" fill="#EEF1F4" />
                                                            <path id="Axo_base_00000164504244988854567630000012771196539450289310_" d="M72.3093 39.211C72.3093 38.971 72.6463 38.776 73.0623 38.776C73.4783 38.776 73.8153 38.971 73.8153 39.211C73.8153 39.451 73.4783 39.646 73.0623 39.646C72.6463 39.646 72.3093 39.452 72.3093 39.211Z" fill="white" />
                                                        </g>
                                                        <g id="Axo_Projection_00000026131355073931951160000017144551317752051641_">
                                                            <path id="Axo_base_00000158007581206439966020000014952775947845807806_" d="M70.8783 40.991L69.5543 41.756L68.5513 41.176L69.8753 40.412L70.8783 40.991Z" fill="#EEF1F4" />
                                                            <path id="Vector_70" d="M68.7523 41.176L69.8753 40.528L70.6773 40.991L69.5543 41.639L68.7523 41.176Z" fill="white" />
                                                        </g>
                                                        <path id="Axo_base_00000072966481270204388000000016114571730669780404_" d="M72.4843 39.383L71.6533 39.863L70.4243 39.153L71.2553 38.674L72.4843 39.383Z" fill="#7B565A" />
                                                        <path id="Vector_71" d="M69.7142 40.078L70.4242 39.153L71.6532 39.863L71.7902 41.277L69.7142 40.078Z" fill="#E7EDF7" />
                                                        <path id="Vector_72" d="M73.1803 40.459L72.4633 39.364L71.6243 39.848L71.7633 41.277L73.1803 40.459Z" fill="#E7EDF7" />
                                                    </g>
                                                    <path id="Vector_73" d="M56.6722 49.408C56.6722 49.408 57.8502 47.995 59.0612 47.826C60.2722 47.658 66.8012 46.009 67.0032 45.908C67.2052 45.807 67.2222 42.182 67.2962 42.178C67.3702 42.174 68.5852 40.928 68.5852 40.928C68.5852 40.928 70.2002 40.367 70.3352 40.49C70.4702 40.613 71.3002 40.804 71.4342 40.759C71.5692 40.714 71.4562 41.006 71.3332 41.095L71.2102 41.185C71.2102 41.185 71.8272 41.185 71.8722 41.275C71.9172 41.365 71.5802 41.645 71.5132 41.656L71.4462 41.667C71.4462 41.667 72.0972 41.588 72.0522 41.656C72.0072 41.723 72.2542 42.172 71.5592 42.25C70.8642 42.329 70.7292 42.261 70.7292 42.261L69.2262 44.011C69.2262 44.011 70.4712 42.8 70.9202 42.867C71.3692 42.934 71.7182 43.088 71.9472 43.045C72.1762 43.002 72.3262 43.159 72.0602 43.361C71.7952 43.563 71.3682 43.597 71.2562 43.597C71.1442 43.597 70.6623 43.877 70.6623 43.877L69.6192 44.939C69.6192 44.939 69.5072 46.143 69.1812 46.782C68.8562 47.421 67.4092 47.792 67.4092 47.792C67.4092 47.792 59.9382 52.133 58.3902 51.864C56.8412 51.595 56.5502 50.486 56.6722 49.408Z" fill="#F4D0C6" />
                                                </g>
                                                <path id="Vector_74" d="M62.4863 59.376C62.4863 59.376 61.7873 60.15 62.1243 60.778C62.4613 61.406 63.0213 62.909 66.8583 63.156C70.6943 63.403 74.1163 62.045 74.2893 61.266C74.4633 60.487 73.9973 59.141 73.9973 59.141C73.9973 59.141 72.2423 61.227 69.1913 61.586C66.1403 61.944 62.1763 60.62 62.4863 59.376Z" fill="#AFC0DA" />
                                            </g>
                                            <g id="Group_31">
                                                <g id="Axo_Compound_Extrusion_4_">
                                                    <g id="Axo_Extrusion_73_">
                                                        <path id="Axo_panel_138_" d="M139.174 109.668C141.705 108.206 144.127 109.986 145.455 110.753C146.671 111.455 146.367 111.381 146.367 119.272C146.367 118.269 145.11 117.803 143.575 116.917C141.044 115.455 138.622 117.235 137.294 118.002C136.686 118.353 136.382 118.813 136.382 119.273C136.382 110.141 135.659 111.697 139.174 109.668Z" fill="#6C3B3A" />
                                                        <path id="Axo_panel_137_" d="M147.728 112.221C147.728 113.195 146.819 113.491 143.561 115.372C140.905 116.905 138.55 115.02 135.904 113.493C135.296 113.142 134.992 112.683 134.992 112.223C136.562 122.363 135.54 120.521 139.159 122.621C141.652 124.068 144.051 122.359 145.44 121.57C146.508 120.963 146.174 121.348 147.728 112.221Z" fill="#6C3B3A" />
                                                    </g>
                                                    <path id="Axo_Compound_8_" d="M135.905 113.492C141.294 116.603 140.826 116.951 146.817 113.492C148.033 112.79 148.033 111.653 146.817 110.951C141.428 107.84 141.896 107.492 135.905 110.951C134.689 111.653 134.689 112.79 135.905 113.492ZM137.28 113.492C136.064 112.79 136.064 111.653 137.28 110.951C141.685 108.408 142.197 109.078 145.441 110.951C146.657 111.653 146.657 112.79 145.441 113.492C141.036 116.036 140.524 115.365 137.28 113.492Z" fill="#BA536E" />
                                                </g>
                                                <g id="Group_32">
                                                    <path id="Vector_75" d="M143.025 110.822C143.025 110.822 144.864 107.145 147.12 109.318C149.376 111.491 146.619 114.499 144.864 113.58C143.109 112.661 141.688 110.989 141.688 110.989C141.688 110.989 144.947 108.482 145.198 107.061C145.449 105.64 143.861 106.476 143.192 104.637C141.089 98.855 146.577 100.26 146.869 106.977L148.123 105.138C148.123 97.071 150.63 97.699 150.714 99.706C150.885 103.822 147.724 106.396 152.72 100.96C152.72 100.96 152.302 98.62 153.221 97.45C156.055 93.844 155.362 99.634 154.976 100.793C154.976 100.793 156.48 93.689 159.155 96.447C161.829 99.205 155.561 101.879 155.561 101.879C159.552 102.877 157.714 106.594 153.388 103.634L150.63 105.556C150.63 105.556 153.471 105.472 154.224 107.311C154.976 109.15 151.382 110.069 150.547 109.484C149.711 108.899 148.207 107.729 148.207 107.729L143.025 110.822Z" fill="#4C8D9E" />
                                                    <path id="Vector_76" d="M140.518 111.741C131.664 116.168 131.293 107.483 138.178 110.237C138.178 110.237 137.259 107.897 135.42 107.396C132.877 106.702 134.802 100.275 138.345 108.148C131.53 97.358 139.039 99.222 138.679 103.719C138.512 105.808 138.846 105.808 138.846 105.808C139.855 99.756 142.442 105.272 140.768 106.56L139.682 107.396C142.995 103.847 141.688 110.572 140.518 111.741Z" fill="#4C8D9E" />
                                                    <path id="Vector_77" d="M141.605 111.323C144.905 103.446 143.021 95.506 141.521 82.156C142.42 100.919 143.132 101.701 140.184 111.072C140.184 111.072 140.1 112.828 141.605 111.323Z" fill="#619AAF" />
                                                    <path id="Vector_78" d="M142.858 100.71C135.445 101.384 136.196 98.319 140.852 99.206C140.852 99.206 139.431 97.785 138.846 97.535C138.261 97.284 135.837 99.541 134.333 98.287C132.923 97.112 133.547 95.446 137.843 96.699L135.252 94.443C135.252 94.443 133.079 97.201 129.653 95.279C125.2 92.781 127.102 89.701 134.249 93.524C126.546 88.925 130.463 85.157 135.336 92.688C135.336 92.688 133.581 88.677 135.754 88.76C137.927 88.844 136.339 93.942 136.339 93.942L138.261 95.363C138.261 95.363 137.425 91.686 138.846 91.352C141.234 90.79 140.103 95.841 139.515 96.283C142.224 99.29 141.49 98.29 142.858 100.71Z" fill="#619AAF" />
                                                    <path id="Vector_79" d="M142.942 97.45C146.942 94.14 143.865 96.262 147.622 95.361C153.132 94.038 148.315 91.075 145.951 93.439C145.951 93.439 150.297 90.765 149.545 89.845C148.793 88.926 146.871 86.001 145.951 88.257C145.032 90.514 145.199 92.519 145.199 92.519C144.946 87.718 142.296 91.309 143.611 93.94C143.945 94.609 142.274 96.865 142.274 96.865L142.942 97.45Z" fill="#619AAF" />
                                                    <path id="Vector_80" d="M142.44 90.932C142.44 90.932 137.091 89.595 137.509 88.091C138.558 84.318 140.292 87.112 142.44 90.932Z" fill="#619AAF" />
                                                    <path id="Vector_81" d="M142.273 88.174C142.273 88.174 144.947 83.661 143.861 82.324C142.775 80.987 141.187 80.736 140.602 81.572C140.017 82.408 142.273 88.174 142.273 88.174Z" fill="#619AAF" />
                                                </g>
                                            </g>
                                            <g id="Group_33">
                                                <path id="Vector_82" d="M130.278 71.267C129.649 73.661 130.141 77.742 128.659 80.006C127.167 82.285 127.66 92.056 124.584 95.635C123.91 96.419 122.998 95.311 122.507 93.967C122.016 92.623 121.732 93.877 121.864 92.058C121.996 90.239 125.91 77.924 125.91 77.924L128.603 69.488C128.603 69.488 130.685 67.281 131.226 67.114C131.767 66.947 134.682 65.49 134.89 65.532C135.098 65.574 134.973 66.073 134.307 66.365C133.641 66.657 133.099 66.948 133.099 66.948L134.182 67.947C134.182 67.947 136.555 67.364 136.805 67.406C137.055 67.448 137.396 67.841 136.261 68.008C135.828 68.072 132.93 69.392 132.93 69.392C132.93 69.392 133.877 69.84 134.585 69.673C135.293 69.506 136.097 69.404 136.097 69.654C136.097 69.904 134.48 70.457 134.179 70.641C132.482 71.682 130.434 70.673 130.278 71.267Z" fill="#F0B09B" />
                                                <g id="Group_34">
                                                    <path id="Vector_83" d="M124.755 94.518C124.473 95.998 121.529 103.04 121.508 103.406C121.487 103.777 123.164 106.108 123.139 106.177C123.117 106.239 122.093 108.028 118.303 109.748C114.512 111.468 109.854 110.14 109.843 108.854C109.838 107.568 111.291 104.87 111.161 104.039C111.03 103.213 110.005 101.885 109.854 99.856C109.697 97.833 111.966 94.366 112.662 93.864C113.31 93.394 115.101 92.612 115.454 91.992C115.799 91.38 115.757 88.965 115.757 88.965L120.504 88.876C120.504 88.876 120.703 89.812 120.896 90.23C121.092 90.646 121.956 90.073 122.663 90.12C123.359 90.163 125.21 92.124 124.755 94.518Z" fill="#F0B09B" />
                                                    <path id="Vector_84" d="M120.483 145.914C120.467 146.317 120.617 146.869 120.771 147.422C121.065 148.484 118.523 150.269 118.172 149.704C117.827 149.134 116.441 148.768 115.338 148.648C114.24 148.522 113.205 146.902 113.597 146.687C113.989 146.467 115.559 146.201 116.211 146.258C116.711 146.302 117.787 146.046 118.261 145.913C118.261 145.913 118.13 130.097 117.336 128.612C116.541 127.132 116.212 115.41 116.212 115.41C116.212 115.41 116.521 109.444 116.348 107.834C116.175 106.229 122.094 105.46 122.094 105.46C122.094 105.46 124.274 108.048 124.828 110.793C125.377 113.538 122.705 124.126 121.832 126.74C120.964 129.354 121.79 130.703 122.747 134.018C123.709 137.329 120.525 144.738 120.483 145.914Z" fill="#EAA896" />
                                                    <path id="Vector_85" d="M120.593 150.312C119.982 150.641 119.207 151.033 118.172 150.228C117.646 149.819 116.532 149.148 115.429 149.028C114.331 148.903 113.12 146.992 113.513 146.778C113.905 146.558 115.1 146.704 115.157 146.704C115.084 146.746 114.863 147.677 116.128 147.917C117.388 148.158 119.396 148.937 120.091 148.743C120.755 148.56 120.771 147.995 120.771 147.948C121.069 149.004 121.304 149.928 120.593 150.312Z" fill="#E7EDF7" />
                                                    <path id="Vector_86" d="M120.593 149.789C119.982 150.27 118.685 150.128 118.172 149.705C117.623 149.253 116.441 148.769 115.338 148.649C114.24 148.523 113.205 146.903 113.597 146.688C113.989 146.468 115.559 146.202 116.211 146.259C116.258 146.263 116.305 146.264 116.363 146.264C116.29 146.306 114.862 147.153 116.128 147.393C117.388 147.634 119.396 148.413 120.091 148.219C120.755 148.036 120.771 147.469 120.771 147.422C121.069 148.479 121.228 149.289 120.593 149.789Z" fill="#619AAF" />
                                                    <path id="Vector_87" d="M121.832 146.521C121.832 147.091 121.225 147.959 120.091 148.089C118.956 148.22 117.477 150.008 116.865 150.573C116.258 151.143 116.3 150.62 115.255 150.228C114.209 149.836 114.643 148.921 114.905 148.79C115.166 148.659 116.259 148.612 116.259 148.612C116.259 148.612 117.566 146.129 117.78 144.952C118 143.776 114.69 140.638 112.708 137.067C110.721 133.496 108.154 128.398 107.846 127.786C107.543 127.174 107.02 126.829 107.02 125.606C107.02 124.388 109.843 108.854 109.843 108.854L112.708 107.787C112.708 107.787 119.395 107.829 119.437 108.007C119.479 108.18 121.617 110.966 119.871 115.458C118.13 119.944 112.86 127.959 112.86 127.959L116.081 132.45C118.172 135.367 120.044 144.13 120.525 144.737C121.021 145.365 121.832 145.961 121.832 146.521Z" fill="#F0B09B" />
                                                    <path id="Vector_88" d="M110.982 107.135L109.844 108.855C109.844 108.855 107.108 117.853 106.585 119.857C106.062 121.861 104.929 125.783 104.842 126.044C104.755 126.305 104.907 127.841 106.672 128.397C108.437 128.953 108.3 131.026 110.982 130.053C113.664 129.08 113.817 130.566 115.386 130.309C116.955 130.053 117.133 127.985 117.133 127.985C117.133 127.985 120.091 129.229 120.963 127.985C121.834 126.741 122.619 126.044 123.229 125.869C123.839 125.694 124.856 125.433 124.827 124.126C124.798 122.819 127.063 122.906 127.848 121.25C128.632 119.594 125.311 109.928 124.827 109.573C124.343 109.218 122.931 105.824 122.931 105.824L110.982 107.135Z" fill="#E7EDF7" />
                                                    <path id="Vector_89" d="M124.755 94.518C124.473 95.998 121.529 103.04 121.508 103.406C121.487 103.777 123.164 106.108 123.139 106.177C123.117 106.239 122.093 108.028 118.303 109.748C114.512 111.468 109.854 110.14 109.843 108.854C109.838 107.568 111.291 104.87 111.161 104.039C111.03 103.213 110.005 101.885 109.854 99.856C109.697 97.833 111.966 94.366 112.662 93.864C112.929 93.671 113.352 93.44 113.791 93.2C113.791 93.2 114.732 93.017 115.407 94.105C116.081 95.198 117.023 99.443 118.806 99.443C120.594 99.443 122.816 98.157 123.271 95.804C123.731 93.451 123.25 91.036 122.816 90.685C122.581 90.492 122.22 90.33 121.938 90.22C122.178 90.157 122.429 90.105 122.665 90.121C123.359 90.163 125.21 92.124 124.755 94.518Z" fill="#E7EDF7" />
                                                    <path id="Vector_90" d="M121.832 147.044C121.832 147.614 122.221 148.822 121.087 148.953C119.952 149.084 117.947 150.26 117.335 150.825C116.729 151.395 116.3 151.143 115.255 150.751C114.209 150.359 114.536 149.148 114.797 149.017C115.059 148.886 116.258 149.135 116.258 149.135C116.258 149.135 116.038 150.008 117.084 149.161C118.13 148.309 120.394 146.641 120.55 146.055C120.676 145.574 120.576 145.344 120.54 145.281C121.027 145.883 121.832 146.484 121.832 147.044Z" fill="#E7EDF7" />
                                                    <path id="Vector_91" d="M121.832 146.521C121.832 147.091 121.225 147.959 120.091 148.089C118.956 148.22 117.941 149.656 117.33 150.22C116.724 150.79 116.301 150.619 115.255 150.227C114.209 149.835 114.643 148.92 114.905 148.789C115.166 148.658 116.259 148.611 116.259 148.611C116.259 148.611 116.039 149.484 117.085 148.637C118.131 147.785 120.395 146.117 120.551 145.531C120.677 145.05 120.577 144.82 120.541 144.757C121.027 145.36 121.832 145.961 121.832 146.521Z" fill="#619AAF" />
                                                    <path id="Vector_92" d="M118.359 79.554C118.266 79.598 116.725 78.149 114.176 79.554C111.627 80.959 112.444 83.116 111.889 83.867C111.333 84.619 110.99 84.186 110.99 84.186C110.99 84.186 110.851 85.199 111.693 85.15C112.535 85.101 112.763 84.717 112.763 84.717C112.763 84.717 112.011 85.428 111.905 86.171C111.799 86.914 112.918 88.279 112.918 88.279C112.918 88.279 112.91 87.74 113.122 87.626C113.334 87.512 114.037 87.536 114.078 87.512C114.119 87.488 113.384 88.353 114.176 89.089C114.968 89.824 118.893 91.711 120.505 90.535C122.117 89.359 123.816 87.115 124.012 86.526C124.208 85.938 124.099 86.047 123.555 85.219C123.01 84.391 123.394 83.556 123.394 83.142C123.394 82.728 121.638 78.008 118.359 79.554Z" fill="#582A2C" />
                                                </g>
                                                <path id="Vector_93" d="M134.139 68.238L134.183 67.948C134.183 67.948 135.763 67.405 136.065 67.155C136.367 66.905 136.862 66.406 137.057 66.26C137.252 66.114 136.773 66 136.575 66.135L136.377 66.27C136.377 66.27 136.762 65.554 136.637 65.532C136.512 65.51 136.283 65.323 135.919 65.635C135.555 65.947 135.055 66.572 135.055 66.572L133.101 66.948L134.014 68.32L134.139 68.238Z" fill="#F4D0C6" />
                                                <path id="Vector_94" d="M113.386 97.181C113.386 97.181 113.053 95.099 112.366 94.537C111.679 93.975 107.807 91.908 106.37 90.912C104.934 89.916 101.311 83.982 101.311 83.982C101.311 83.982 99.7083 82.296 98.9383 82.4C98.1683 82.504 95.6283 82.712 95.6283 82.712C95.6283 82.712 94.6703 82.39 94.1913 82.395C93.7123 82.4 93.2753 82.629 93.4423 82.774C93.6093 82.92 94.2123 82.795 94.6083 83.003C95.0043 83.211 95.5873 83.44 95.5873 83.44C95.5873 83.44 94.4003 83.669 93.9633 83.544C93.5263 83.419 92.8183 83.669 93.1303 83.856C93.4423 84.043 94.9413 84.356 94.9413 84.356C94.9413 84.356 94.1083 84.252 93.7333 84.356C93.3583 84.46 93.3373 84.606 93.5873 84.71C93.8373 84.814 94.4413 84.925 94.4413 84.925C94.4413 84.925 93.7753 84.939 93.8173 85.188C93.8593 85.438 95.5663 85.604 95.5663 85.604C95.5663 85.604 95.1083 85.833 95.0873 85.916C95.0663 85.999 95.3163 86.27 95.5243 86.249C95.7323 86.228 97.0853 85.937 97.0853 85.937C97.0853 85.937 98.5423 85.895 98.7513 85.812C98.9593 85.729 99.7503 84.924 99.7503 84.924C99.7503 84.924 100.645 86.978 101.103 88.519C101.561 90.06 102.748 91.996 104.101 93.391C105.454 94.786 109.823 98.783 109.844 98.97C109.865 99.157 110.857 100.717 111.815 100.342C112.772 99.968 113.386 97.181 113.386 97.181Z" fill="#F0B09B" />
                                            </g>
                                        </g>
                                        <g id="Group_35">
                                            <path id="Vector_95" d="M17.2172 48.494C17.2172 48.494 17.0382 46.207 16.9482 43.875C16.9092 42.866 16.8962 41.958 16.9142 41.206C16.9392 40.218 17.0192 39.497 17.1722 39.167C17.4412 38.584 18.0692 37.777 18.1142 37.418C18.1592 37.059 17.9802 37.059 18.5622 36.342C19.1452 35.625 19.4142 35.625 19.2802 36.387C19.1452 37.149 18.8322 37.687 18.7422 38.181C18.6522 38.674 18.5622 39.033 18.5622 39.033L19.4142 37.374C19.4142 37.374 20.9392 35.939 20.9392 35.715C20.9392 35.491 21.2532 36.029 20.9842 36.522C20.7152 37.015 19.9522 38.137 19.8632 38.316C19.7732 38.495 19.5942 39.123 19.5942 39.123C19.5942 39.123 20.4012 37.912 20.8052 37.643C21.2092 37.374 21.3882 36.881 21.3882 36.881C21.3882 36.881 21.6122 37.15 21.5672 37.419C21.5222 37.687 21.3882 38.001 21.3882 38.001C21.3882 38.001 21.8362 37.911 21.6572 38.225C21.4782 38.539 21.3882 38.808 21.3882 38.808C21.3882 38.808 21.6122 38.584 21.4782 38.987C21.3442 39.391 21.4782 39.211 21.0302 39.749C20.5822 40.287 20.3132 40.646 20.3132 40.646C20.3132 40.646 20.2232 42.709 19.8202 43.157C19.4162 43.606 19.2822 43.606 19.2822 43.606C19.2822 43.606 20.1342 48.718 19.5962 50.064C19.0562 51.409 17.2172 48.494 17.2172 48.494Z" fill="#F1C9BC" />
                                            <g id="Group_36">
                                                <path id="Vector_96" d="M18.4082 39.149C18.4082 39.149 18.9462 42.985 19.7642 44.622C20.5822 46.259 21.0502 46.61 21.0502 46.61V48.013C21.0502 48.013 21.6352 48.715 22.9212 48.247C24.2072 47.779 23.8562 46.844 23.8562 46.844L23.7392 45.09C23.7392 45.09 24.5582 40.881 24.5582 38.308C24.5582 35.736 22.7262 32.929 21.5962 33.397C20.4652 33.865 18.7582 36.694 18.4082 39.149Z" fill="#E7EDF7" />
                                                <path id="Vector_97" d="M31.2112 70.133C31.2112 70.133 28.1732 73.634 23.7302 73.4C20.0122 73.205 16.4582 70.062 15.3962 69.04C15.7442 66.603 19.2862 52.353 19.2862 52.353C19.2862 52.353 18.3892 46.311 18.0002 44.051C17.6112 41.791 20.3552 35.898 20.7772 35.252C22.0252 33.342 23.7882 34.463 23.7882 34.463C23.7882 34.463 28.3292 36.84 30.1222 38.322C31.9152 39.804 30.5902 44.558 30.5902 44.558C30.5902 44.558 30.6472 45.592 29.4212 47.364C28.0182 49.392 27.5502 53.367 27.5502 53.367C27.5502 53.367 29.5602 57.665 30.9802 68.49C31.0552 69.057 31.1322 69.604 31.2112 70.133Z" fill="#8597FE" />
                                                <path id="Vector_98" d="M32.3832 51.768C32.3832 51.768 32.7342 52.704 31.4482 53.171C30.1622 53.639 29.5772 52.937 29.5772 52.937V51.534C29.5772 51.534 29.1092 51.183 28.2912 49.546C27.4722 47.909 27.7062 44.518 27.7062 44.518C28.0572 42.062 28.9922 38.788 30.1232 38.321C31.2532 37.853 33.0852 40.66 33.0852 43.232C33.0852 45.805 32.2662 50.014 32.2662 50.014L32.3832 51.768Z" fill="#8597FE" />
                                                <path id="Vector_99" d="M20.9352 44.649C20.8952 44.558 19.9492 42.387 20.3732 39.48C20.7502 36.896 22.3052 35.091 24.1542 35.091C24.6732 35.091 25.1952 35.233 25.7082 35.512C26.9122 36.169 27.4982 36.816 27.5532 37.549C27.6402 38.724 26.2722 39.554 25.3362 40.295C23.7642 41.539 21.5672 44.876 21.5482 44.908L23.2632 49.507L20.9352 44.649Z" fill="#E7EDF7" />
                                                <path id="Vector_100" d="M25.4842 35.923C23.2332 34.695 21.2452 36.742 20.8362 39.548C20.4272 42.354 21.3622 44.459 21.3622 44.459C21.3622 44.459 23.3932 41.236 25.0452 39.928C26.4492 38.817 28.6102 37.628 25.4842 35.923Z" fill="#E7EDF7" />
                                                <path id="Vector_101" d="M35.7352 89.381C34.6432 89.926 34.1752 89.615 33.6302 92.265C33.0842 94.916 29.5762 92.499 29.3422 93.902C29.1082 95.305 28.4072 95.696 26.6142 94.604C24.8202 93.513 24.4312 95.228 23.6512 95.54C22.8722 95.852 19.2862 96.008 18.8182 94.527C18.3502 93.046 17.4152 92.89 16.0902 93.124C14.7642 93.358 14.1312 93.221 13.8192 91.584C13.5072 89.947 11.3162 90.932 11.4512 90.269C12.2402 86.41 14.3452 78.254 14.4032 75.945C14.4352 74.713 14.8412 72.778 14.8412 71.141C14.8412 69.504 15.3942 69.041 15.3942 69.041C15.3942 69.041 15.5822 68.262 16.0862 68.828C16.1352 68.883 16.1882 68.952 16.2442 69.036C16.8672 69.972 16.4782 69.972 17.1802 70.127C17.8822 70.282 17.8822 70.516 18.1942 70.984C18.5052 71.452 19.1292 71.374 19.9082 71.608C20.6882 71.842 20.5422 72.465 21.0682 72.553C21.5942 72.641 22.1202 72.29 22.6172 72.787C23.1142 73.284 23.7282 72.933 24.1662 72.787C24.6042 72.641 24.4292 73.313 24.9552 72.904C25.4812 72.495 25.7152 72.495 26.4462 72.524C27.1772 72.553 27.0012 71.881 27.3232 71.881C27.6452 71.881 27.6742 72.846 28.3462 71.969C29.0182 71.092 28.3172 70.975 29.0482 71.004C29.7792 71.033 29.9542 71.062 30.0712 70.653C30.1882 70.244 30.6852 69.951 30.9192 70.068C31.0252 70.121 31.0842 70.024 31.1152 69.901C31.2102 69.92 31.2882 69.961 31.2992 70.039C32.0792 75.73 33.7552 82.044 34.2222 84.305C34.6922 86.564 36.8262 88.835 35.7352 89.381Z" fill="#E7EDF7" />
                                                <path id="Vector_102" d="M19.1312 51.534C19.1312 51.534 18.8582 52.82 18.8972 53.093C18.9362 53.366 21.7812 56.523 25.3282 55.782C27.4282 55.344 28.0172 54.379 27.9782 53.794C27.9392 53.209 28.0562 52.235 27.7052 52.664C27.3542 53.093 27.9582 53.926 26.1462 54.418C22.5612 55.392 19.6762 52.82 19.1312 51.534Z" fill="#E7EDF7" />
                                                <path id="Vector_103" d="M16.4412 70.555C16.4412 70.555 14.0832 89.03 13.8492 89.186C13.6152 89.342 14.2002 89.693 14.4342 89.654C14.6682 89.615 16.4412 70.555 16.4412 70.555Z" fill="#5A6999" />
                                                <path id="Vector_104" d="M18.4292 72.192C18.4292 72.192 17.7082 91.369 17.4742 91.525C17.2402 91.681 17.8252 92.032 18.0592 91.993C18.2932 91.953 18.4292 72.192 18.4292 72.192Z" fill="#8597FE" />
                                                <path id="Vector_105" d="M31.4472 53.171C30.1612 53.639 29.5762 52.937 29.5762 52.937V51.534C29.5762 51.534 29.6152 52.314 30.7842 51.885C31.9532 51.456 32.2662 50.248 32.2662 50.248C32.2822 50.255 32.3832 51.768 32.3832 51.768C32.3832 51.768 32.7342 52.703 31.4472 53.171Z" fill="#E7EDF7" />
                                            </g>
                                            <g id="Group_37">
                                                <g id="Group_38">
                                                    <path id="Vector_106" d="M22.4652 84.235C22.1962 86.657 18.0252 91.501 14.9292 94.19C12.6482 96.176 11.2432 100.5 10.6622 102.637C10.4572 103.397 10.3542 103.878 10.3542 103.878C10.3542 103.878 10.5852 104.443 10.8862 105.116C11.3542 106.155 11.7302 108.571 11.9742 108.491C12.3752 108.356 13.4502 108.988 13.4502 108.988C13.4502 108.988 13.3152 109.796 11.4322 110.335C9.54924 110.874 8.74024 109.796 8.33624 108.317C7.93524 106.838 6.72223 106.434 6.31823 105.625C5.91723 104.817 7.80024 103.742 7.80024 103.742L8.27824 101.4C8.74324 99.158 9.45224 95.84 9.95324 93.922C10.7582 90.826 16.6772 83.964 16.6772 83.964C16.6772 83.964 9.54923 74.414 7.66523 70.378C5.78223 66.342 9.41423 61.498 9.41423 61.498C9.41423 61.498 13.9892 61.633 15.1982 62.977C16.4122 64.326 22.7352 81.813 22.4652 84.235Z" fill="#4965A5" />
                                                    <path id="Vector_107" d="M13.4512 108.988C13.4512 108.988 13.3162 109.796 11.4332 110.335C9.55024 110.874 8.74124 109.796 8.33724 108.317C7.93624 106.838 6.72324 106.434 6.31924 105.625C5.91824 104.817 7.80124 103.742 7.80124 103.742L8.27924 101.4C8.98424 101.094 9.46624 101.194 9.77624 101.345C10.5232 101.706 10.6082 102.338 10.6622 102.635C10.4572 103.395 10.3542 103.876 10.3542 103.876C10.3542 103.876 10.5852 104.441 10.8862 105.114C11.3542 106.153 11.7302 108.569 11.9742 108.489C12.3762 108.356 13.4512 108.988 13.4512 108.988Z" fill="#F1C9BC" />
                                                    <g id="Group_39">
                                                        <path id="Vector_108" d="M13.4513 108.988C13.4513 108.988 13.3162 109.796 11.4332 110.335C9.55025 110.874 8.74125 109.796 8.33725 108.317C7.93625 106.838 6.72325 106.434 6.31925 105.625C5.91825 104.817 7.73825 103.664 7.73825 103.664C7.73825 103.664 8.80225 103.565 9.52925 103.945C9.92725 104.153 10.8662 105.101 10.8872 105.116C11.8252 105.764 11.9922 107.311 12.2412 107.374C14.5292 107.956 13.4513 108.988 13.4513 108.988Z" fill="#E7EDF7" />
                                                        <path id="Vector_109" d="M6.54824 106.312C6.46824 106.232 5.85324 105.269 6.17424 105.029C6.49524 104.788 7.36423 104.508 8.37923 105.323C9.39523 106.138 10.3752 108.383 10.8432 109.212C11.3112 110.041 14.2072 106.593 13.7392 109.025C13.6372 109.553 12.1752 110.495 11.7872 110.589C11.3992 110.682 8.92724 110.255 8.84624 110.175C8.76524 110.095 7.87024 108.05 7.54924 107.461C7.23024 106.873 6.54824 106.312 6.54824 106.312Z" fill="#BCC0CC" />
                                                        <path id="Vector_110" d="M5.94725 105.577C5.94725 105.577 5.88025 104.909 6.72225 105.069C7.56425 105.229 8.40625 105.858 8.76725 106.326C9.12825 106.794 10.4512 109.775 10.7592 110.095C11.0672 110.415 11.6812 110.643 11.6812 110.643C11.6812 110.643 9.81025 110.483 9.28825 110.389C8.76725 110.295 8.39225 110.041 8.29925 109.721C8.20625 109.4 7.04325 107.101 6.64225 106.553C6.24125 106.004 5.98725 105.911 5.94725 105.577Z" fill="#8CA2C2" />
                                                    </g>
                                                    <path id="Vector_111" d="M14.4713 105.129C13.9263 107.073 13.7823 108.957 13.7823 108.957C13.7823 108.957 14.7953 108.856 15.3343 108.856C15.8733 108.856 18.9553 108.738 18.9553 108.738C18.9553 108.738 19.3873 109.226 19.2533 110.303C19.1183 111.378 17.2183 112.622 15.2003 112.622C13.1823 112.622 12.3743 113.966 10.8953 113.427C9.41625 112.891 10.2213 111.409 11.0303 108.586C11.3443 107.489 11.4153 106.388 11.3643 105.259C11.2903 103.482 10.9243 101.627 10.7613 99.571C10.4923 96.209 12.7793 90.691 12.7793 90.691L12.1093 74.817C12.1093 74.817 9.82225 74.278 9.28325 71.048C8.74425 67.821 10.6273 64.459 10.6273 64.459C11.8403 60.019 20.0463 62.977 20.5853 64.995C21.1213 67.013 20.4503 68.36 20.7203 74.818C20.9863 81.276 17.7593 87.734 17.6243 88.674C17.4893 89.617 17.9453 96.004 15.5743 101.686C15.2573 102.441 14.8463 103.791 14.4713 105.129Z" fill="#F1C9BC" />
                                                    <path id="Vector_112" d="M20.7172 74.819C20.9832 81.277 17.7562 87.735 17.6212 88.675C17.4862 89.618 17.9422 96.005 15.5712 101.687C15.2572 102.441 14.8462 103.791 14.4712 105.129C12.9252 105.857 12.2352 105.536 11.6422 105.376C11.5592 105.354 11.4662 105.315 11.3632 105.26C11.2892 103.483 10.9232 101.628 10.7602 99.572C10.4912 96.21 12.7782 90.692 12.7782 90.692L12.1082 74.818C12.1082 74.818 9.82124 74.279 9.28224 71.049C8.74324 67.822 10.6262 64.46 10.6262 64.46C11.8392 60.02 20.0452 62.978 20.5842 64.996C21.1182 67.014 20.4472 68.362 20.7172 74.819Z" fill="#4360A3" />
                                                    <path id="Vector_113" d="M5.78226 46.028C5.68826 47 4.57126 47.508 5.64826 49.929C6.72426 52.351 10.0883 56.656 9.68426 57.732C9.28026 58.808 8.07026 63.651 8.07026 63.651C8.07026 63.651 12.5103 67.822 17.0843 67.552C21.6583 67.283 21.1203 66.61 21.1203 66.61C21.1203 66.61 20.5823 58.807 20.1783 58.269C19.7743 57.731 19.2363 56.386 19.2363 56.386C19.2363 56.386 19.3713 52.619 18.5633 51.005C17.7563 49.391 14.2583 44.951 13.3163 44.682C12.3743 44.413 6.05126 43.248 5.78226 46.028Z" fill="#619AAF" />
                                                    <g id="Group_40">
                                                        <path id="Vector_114" d="M6.32423 38.932C6.32423 38.932 7.40023 40.233 6.99723 41.488C6.59323 42.744 5.92123 45.524 5.92123 45.524C5.92123 45.524 8.35424 45.653 9.69024 44.69C10.5822 44.048 12.1902 44.476 12.1902 44.476C12.1902 44.476 10.4512 43.281 10.8092 42.16C11.1672 41.039 11.0782 39.738 11.0782 39.738L7.22124 37.944L6.32423 38.932Z" fill="#F1C9BC" />
                                                        <path id="Vector_115" d="M12.2882 32.878L11.0322 31.263C11.0322 31.263 8.79024 29.918 6.23424 30.411C3.67824 30.904 2.42224 34.537 2.60224 35.613L2.78125 36.689C2.78125 36.689 0.853245 36.599 0.135245 38.842C-0.581755 41.084 1.79424 42.25 1.61524 43.282C1.43624 44.313 0.225246 44.224 0.225246 44.224C0.225246 44.224 1.83925 44.852 2.64725 44.314C3.45425 43.776 4.44125 42.7 3.99225 41.668C3.54425 40.637 3.18525 38.26 3.45425 38.125L3.72325 37.99C3.72325 37.99 4.48525 38.842 5.11325 39.201C5.74125 39.56 6.54825 40.008 6.54825 40.008C6.54825 40.008 7.04125 40.725 9.23925 38.932C11.4362 37.138 11.7052 35.21 11.7502 34.851C11.7952 34.493 12.2882 32.878 12.2882 32.878Z" fill="#582A2C" />
                                                        <path id="Vector_116" d="M11.0332 31.264C11.0332 31.264 12.8272 32.475 13.0062 33.506C13.1852 34.537 13.0962 35.883 13.0962 35.883C13.0962 35.883 13.4322 36.385 13.8002 36.667C14.1202 36.913 14.7792 37.276 14.6052 37.542C14.3232 37.975 13.8912 37.975 13.8912 37.975C13.8912 37.975 14.3342 38.923 14.1502 39.478C13.8362 40.428 14.1722 41.443 13.6342 41.533C13.0962 41.623 12.1992 41.712 11.7512 41.623C11.3032 41.533 10.7652 41.488 9.73324 40.592C9.38824 40.292 8.34024 39.585 8.34024 39.585C8.34024 39.585 8.88824 39.09 9.16924 38.489C9.56424 37.643 9.15024 36.646 9.15024 36.646C9.15024 36.646 8.61224 36.646 8.34324 35.57C8.07424 34.494 8.52224 34.225 8.74724 34.225C8.97124 34.225 9.59924 34.539 9.59924 34.539C9.59924 34.539 10.4962 35.615 10.4962 35.032C10.4962 34.449 11.2582 34.18 11.4382 33.193C11.6162 32.205 11.0332 31.264 11.0332 31.264Z" fill="#F1C9BC" />
                                                    </g>
                                                </g>
                                                <path id="Vector_117" d="M19.9243 109.16C19.7453 108.79 19.1973 108.586 18.9543 108.739C18.8643 108.796 18.5553 108.854 18.2013 108.907C18.1833 109.136 18.1583 109.349 18.1533 109.381C18.1123 109.626 18.0563 109.884 17.9723 110.119C17.9493 110.182 17.8933 110.382 17.7983 110.407C17.5733 110.465 17.3543 110.454 17.1373 110.423C16.1413 110.981 13.3973 110.718 12.8173 110.946C12.1023 111.227 11.4143 111.201 10.9033 110.921C10.6203 110.765 10.6993 110.449 10.6993 110.449C10.6993 110.449 9.78025 111.699 10.0743 112.809C10.3673 113.919 11.3373 113.97 12.2693 113.804C13.2003 113.638 13.9793 113.026 14.6173 112.975C15.2553 112.924 18.5473 112.35 19.0963 111.865C19.6443 111.38 20.1033 109.53 19.9243 109.16Z" fill="#97B2DA" />
                                                <path id="Vector_118" d="M10.6092 109.973C10.6092 109.973 10.6202 110.459 10.9042 110.615C11.4142 110.896 12.1032 110.921 12.8182 110.64C13.5332 110.359 17.5292 110.823 17.5012 109.581C17.4882 109.02 16.9142 108.828 16.8892 108.79C16.8632 108.752 18.7142 108.586 18.9562 108.433C19.1992 108.28 19.7472 108.484 19.9262 108.854C20.1052 109.224 19.6452 111.074 19.0972 111.559C18.5482 112.044 15.2572 112.618 14.6182 112.669C13.9802 112.72 13.2022 113.332 12.2702 113.498C11.3392 113.664 10.3692 113.613 10.0752 112.503C9.78123 111.393 10.6092 109.973 10.6092 109.973Z" fill="#E7EDF7" />
                                                <path id="Vector_119" d="M17.5672 39.472C17.6872 39.207 18.9393 38.642 19.0833 38.425C19.2283 38.208 19.8542 37.834 19.7462 38.556C19.6382 39.278 18.6873 39.905 18.6873 39.905C18.6873 39.905 18.5422 40.483 18.4332 40.952C18.3252 41.421 18.0362 42.324 17.7472 42.757C17.4582 43.19 17.1692 42.865 17.1692 42.865C17.1692 42.865 16.7362 41.314 17.5672 39.472Z" fill="#F1C9BC" />
                                                <g id="Group_41">
                                                    <path id="Vector_120" d="M12.1052 50.333C12.1052 50.333 21.1192 55.445 23.8092 54.1C26.5002 52.755 26.6012 43.677 26.6012 43.677L24.9082 42.3C24.9082 42.3 24.7172 43.598 23.9102 46.019C23.1032 48.441 21.9252 50.199 21.9252 50.199C21.9252 50.199 12.9112 43.741 11.9692 45.087C11.0292 46.432 9.68324 48.719 12.1052 50.333Z" fill="#F1C9BC" />
                                                    <path id="Vector_121" d="M24.9742 42.938C24.9742 42.938 24.7502 40.785 24.7502 40.472C24.7502 40.158 25.1852 39.541 25.2302 39.272C25.2752 39.003 25.3782 38.453 25.9162 38.095C26.4542 37.736 26.6722 37.241 26.8512 37.375C27.0302 37.51 26.8532 38.056 26.6742 38.369C26.4942 38.683 26.1852 39.664 26.1852 39.664C26.1852 39.664 26.6782 39.26 26.9032 39.081C27.1272 38.901 27.3512 38.184 27.5762 37.691C27.8002 37.198 28.0242 36.839 28.3382 36.346C28.6522 35.853 28.6072 36.301 28.4732 36.884C28.3382 37.467 28.6072 39.799 28.6072 39.799C28.6072 39.799 29.3252 39.082 29.4142 38.813C29.5042 38.544 30.1322 38.006 30.3112 37.961C30.4902 37.916 30.5802 38.096 30.2212 38.589C29.8622 39.082 29.1452 40.473 29.1452 40.473C29.1452 40.473 30.1322 39.711 30.4902 39.711C30.8492 39.711 30.2662 40.294 29.6832 40.787C29.1002 41.28 27.4312 43.083 27.2522 43.173C27.0732 43.263 26.6022 43.678 26.6022 43.678L24.9742 42.938Z" fill="#F1C9BC" />
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Group_42">
                                        <g id="Group_43">
                                            <path id="Vector_122" d="M193.199 73.414C193.199 73.414 191.328 74.015 190.753 74.326C189.862 74.805 187.493 76.176 187.493 76.176C187.493 76.176 183.37 72.64 181.779 71.735C180.317 70.902 175.764 69.607 175.764 69.607C175.764 69.607 171.737 63.645 170.168 61.868C168.842 60.364 164.108 56.618 164.108 56.618C164.108 56.618 162.953 51.447 162.534 50.177C161.982 48.495 160.006 45.072 160.006 45.072L164.424 42.52C164.424 42.52 169.518 44.113 171.047 44.997C172.272 45.706 175.041 48.178 176.075 49.113C176.325 49.34 176.475 49.478 176.475 49.478C176.475 49.478 181.061 52.607 182.427 53.849C183.206 54.558 184.085 55.516 184.943 56.522C187.085 59.043 189.096 61.868 189.096 61.868L192.648 66.924L193.199 73.414Z" fill="#E1E5EF" />
                                            <path id="Vector_123" d="M193.199 73.414L192.649 66.924L189.097 61.868C189.097 61.868 187.086 59.043 184.944 56.522L187.881 49.478C187.921 49.522 187.96 49.567 188 49.614C188.014 49.63 188.117 49.75 188.159 49.799C189.45 51.291 194.787 57.694 195.194 61.869C195.657 66.618 193.199 73.414 193.199 73.414Z" fill="#372122" />
                                            <path id="Vector_124" d="M162.165 78.008C162.261 78.008 162.357 77.969 162.426 77.891L185.278 52.448C185.407 52.304 185.396 52.082 185.251 51.953C185.107 51.823 184.885 51.835 184.755 51.98L161.903 77.423C161.774 77.567 161.785 77.789 161.93 77.918C161.998 77.978 162.082 78.008 162.165 78.008Z" fill="#372122" />
                                            <path id="Vector_125" d="M189.097 61.868C189.097 61.868 187.086 59.043 184.944 56.522C184.086 55.516 183.206 54.557 182.428 53.849C181.062 52.607 176.476 49.478 176.476 49.478C176.476 49.478 176.326 49.34 176.076 49.113L180.084 44.087L187.114 48.65C187.114 48.65 187.427 48.963 187.881 49.478C187.921 49.522 187.96 49.567 188 49.614C188.014 49.63 188.119 49.754 188.159 49.799C189.139 50.954 190.521 52.811 190.982 54.535C191.721 57.31 189.097 61.868 189.097 61.868Z" fill="#473233" />
                                            <path id="Vector_126" d="M187.104 48.643C187.076 48.627 186.997 48.575 186.877 48.496C186.851 48.48 186.823 48.463 186.795 48.445C185.818 47.837 182.847 46.078 181.468 46.385C179.803 46.757 176.475 49.479 176.475 49.479C176.475 49.479 176.325 49.341 176.075 49.114C175.041 48.179 172.272 45.707 171.047 44.998C169.517 44.114 164.424 42.521 164.424 42.521C164.424 42.521 167.841 41.144 172.836 41.389C174.852 41.489 177.563 42.689 180.084 44.088C183.699 46.091 186.92 48.503 187.104 48.643Z" fill="#542628" />
                                        </g>
                                        <g id="Group_44">
                                            <g id="Axo_Extrusion_00000175305102983277310920000013130417153038799762_">
                                                <path id="Axo_panel_00000000214115251381071950000004233177909031201439_" d="M165.782 81.871C165.822 81.848 165.888 81.886 165.928 81.956C165.968 82.026 165.968 82.102 165.928 82.125L166.219 81.957C166.259 81.934 166.259 81.858 166.219 81.788C166.179 81.718 166.113 81.68 166.073 81.704L165.782 81.871Z" fill="#542628" />
                                                <path id="Axo_base_00000078024487020576646770000015502477046616903341_" d="M165.782 81.871C165.742 81.894 165.742 81.97 165.782 82.04C165.822 82.11 165.888 82.148 165.928 82.124C165.968 82.101 165.968 82.025 165.928 81.955C165.888 81.885 165.822 81.847 165.782 81.871Z" fill="#542628" />
                                            </g>
                                            <g id="Axo_Extrusion_00000182503920956869492120000003789690600674645394_">
                                                <path id="Axo_panel_00000020361142971936598440000015693419431193092743_" d="M166.013 75.815C166.013 75.854 165.987 75.893 165.936 75.922C165.833 75.981 165.667 75.981 165.565 75.922C165.514 75.892 165.488 75.854 165.488 75.815V127.292C165.488 127.331 165.514 127.37 165.565 127.399C165.668 127.458 165.834 127.458 165.936 127.399C165.987 127.369 166.013 127.331 166.013 127.292V75.815Z" fill="#372122" />
                                                <path id="Axo_base_00000005236011787577517160000002295122223504667054_" d="M166.013 75.815C166.013 75.776 165.987 75.737 165.936 75.708C165.833 75.649 165.667 75.649 165.565 75.708C165.514 75.738 165.488 75.776 165.488 75.815C165.488 75.854 165.514 75.893 165.565 75.922C165.668 75.981 165.834 75.981 165.936 75.922C165.987 75.893 166.013 75.854 166.013 75.815Z" fill="#372122" />
                                            </g>
                                            <g id="Axo_Extrusion_00000165931822505542382200000013608974712499613628_">
                                                <path id="Axo_panel_00000031890050252422935650000000307811334961846400_" d="M166.92 76.793C166.761 76.701 166.662 76.505 166.662 76.225C166.662 75.665 167.055 74.985 167.539 74.705C167.781 74.565 168 74.552 168.158 74.643L164.627 72.604C164.468 72.513 164.249 72.526 164.007 72.666C163.523 72.946 163.13 73.626 163.13 74.185C163.13 74.465 163.229 74.662 163.388 74.753L166.92 76.793Z" fill="#542628" />
                                                <g id="Axo_cap_00000167373081642569890260000009949373469016998551_">
                                                    <path id="Axo_base_00000088106434598437176690000007495282211926868873_" d="M166.92 76.793C167.078 76.885 167.298 76.871 167.54 76.731C168.024 76.451 168.417 75.771 168.417 75.212C168.417 74.932 168.318 74.735 168.159 74.644C168.001 74.553 167.781 74.566 167.54 74.706C167.055 74.986 166.663 75.666 166.663 76.226C166.663 76.505 166.761 76.702 166.92 76.793Z" fill="#372122" />
                                                    <path id="Axo_base_00000183241883590230318900000009983119960002851255_" d="M165.903 76.189C165.744 76.097 165.645 75.901 165.645 75.621C165.645 75.062 166.038 74.381 166.522 74.102C166.764 73.962 166.983 73.949 167.142 74.04C167.142 74.04 166.145 72.798 165.142 74.358C164.267 75.718 165.903 76.189 165.903 76.189Z" fill="#372122" />
                                                </g>
                                            </g>
                                            <g id="Group_45">
                                                <path id="Vector_127" d="M157.632 124.954C157.632 125.027 157.681 125.1 157.778 125.155C157.971 125.268 158.285 125.268 158.479 125.155L158.535 125.117L165.342 118.24C165.439 118.184 165.487 118.109 165.487 118.037C165.487 117.964 165.438 117.891 165.342 117.835C165.148 117.724 164.834 117.724 164.639 117.835L164.583 117.873L157.777 124.751C157.681 124.807 157.632 124.88 157.632 124.954Z" fill="#372122" />
                                                <path id="Vector_128" d="M162.158 134.808L162.171 134.744C162.162 134.765 162.158 134.786 162.158 134.808Z" fill="#372122" />
                                                <path id="Vector_129" d="M166.001 118.459C166.01 118.44 166.014 118.419 166.014 118.399L166.001 118.459Z" fill="#372122" />
                                                <path id="Vector_130" d="M166.014 118.112C166.014 118.185 166.063 118.258 166.159 118.313L174.753 127.692C174.775 127.719 174.807 127.746 174.847 127.769C175.042 127.88 175.355 127.88 175.55 127.769C175.647 127.713 175.695 127.638 175.695 127.566C175.695 127.512 175.668 127.457 175.614 127.41L166.991 118.037C166.969 117.99 166.927 117.945 166.863 117.909C166.668 117.796 166.355 117.796 166.16 117.909C166.061 117.965 166.014 118.038 166.014 118.112Z" fill="#372122" />
                                                <path id="Vector_131" d="M162.158 134.808C162.158 134.881 162.207 134.954 162.303 135.01C162.498 135.121 162.811 135.121 163.006 135.01C163.103 134.954 163.151 134.881 163.151 134.806L166.014 118.398C166.014 118.325 165.965 118.25 165.868 118.194C165.675 118.081 165.36 118.081 165.167 118.194C165.07 118.25 165.021 118.323 165.021 118.398L162.158 134.808Z" fill="#542628" />
                                            </g>
                                            <path id="Vector_132" d="M171.209 123.702L165.936 127.399L165.75 127.298L171.209 123.512V123.702Z" fill="#372122" />
                                            <path id="Vector_133" d="M161.001 122.462L165.573 127.336L165.75 127.298L161.001 122.272V122.462Z" fill="#372122" />
                                            <path id="Vector_134" d="M165.565 127.399H163.879L163.895 127.272H165.582L165.565 127.399Z" fill="#372122" />
                                            <g id="Axo_Extrusion_00000067207406141334005130000000038512339464118708_">
                                                <path id="Axo_panel_00000060741648396806813970000009939894382650260866_" d="M165.243 113.593C165.283 113.57 165.349 113.607 165.389 113.677C165.429 113.747 165.429 113.822 165.389 113.846L165.68 113.678C165.72 113.655 165.72 113.579 165.68 113.509C165.64 113.439 165.574 113.401 165.534 113.425L165.243 113.593Z" fill="#542628" />
                                                <path id="Axo_base_00000103975597112551047620000003412546428755594646_" d="M165.243 113.593C165.203 113.616 165.203 113.692 165.243 113.762C165.283 113.832 165.349 113.87 165.389 113.846C165.429 113.822 165.429 113.747 165.389 113.677C165.349 113.607 165.283 113.57 165.243 113.593Z" fill="#542628" />
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg> */}

                            {/* <button style={{ position: "absolute", top: "26px", right: "190px" }} className="get-intouch">GET IN TOUCH <svg style={{ display: "inline" }} width="15" height="15" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M58.688 320H-1.15032e-05V298.667C-0.322962 268.755 7.59879 239.332 22.8962 213.625C38.1937 187.919 60.2757 166.922 86.72 152.939C112.771 140.094 140.984 132.209 169.92 129.685C157.276 145.33 144.597 161.956 131.883 179.563C103.245 224.041 78.7444 271.05 58.688 320ZM332.437 380.011C287.963 408.685 240.954 433.222 192 453.312V512H213.333C243.245 512.323 272.668 504.401 298.375 489.104C324.081 473.806 345.078 451.724 359.061 425.28C371.906 399.229 379.791 371.016 382.315 342.08C366.741 354.667 350.116 367.31 332.437 380.011ZM512 63.808C509.163 156.672 442.304 248.768 307.584 345.408C270.923 369.174 232.247 389.676 192 406.677V394.667C191.905 374.893 184.007 355.957 170.025 341.975C156.043 327.993 137.107 320.095 117.333 320H105.323C122.345 279.754 142.875 241.084 166.677 204.437C263.083 69.9307 355.029 3.072 447.744 0C493.952 0 512 18.88 512 63.808ZM384 181.333C384 167.188 378.381 153.623 368.379 143.621C358.377 133.619 344.812 128 330.667 128C316.522 128 302.956 133.619 292.954 143.621C282.952 153.623 277.333 167.188 277.333 181.333C277.333 195.478 282.952 209.044 292.954 219.046C302.956 229.048 316.522 234.667 330.667 234.667C344.812 234.667 358.377 229.048 368.379 219.046C378.381 209.044 384 195.478 384 181.333ZM29.312 507.413C53.3333 503.147 111.253 491.243 130.603 471.915C136.546 465.971 141.261 458.915 144.477 451.15C147.694 443.384 149.349 435.061 149.349 426.656C149.349 418.251 147.694 409.928 144.477 402.162C141.261 394.397 136.546 387.341 130.603 381.397C124.659 375.454 117.603 370.739 109.838 367.523C102.072 364.306 93.7493 362.651 85.344 362.651C68.3687 362.651 52.0887 369.394 40.0853 381.397C20.7573 400.747 8.83199 458.667 4.58666 482.688L-0.682678 512.683L29.312 507.413Z" fill="white" />
                            </svg>
                            </button> */}

                            <div className="cnt-for-h">
                                <div id="headings">
                                    <h1 id="main-heading">AKAAR</h1>
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
                            <svg id="studio-1" viewBox="0 0 506 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="plights">
                                    <path id="Vector" d="M445.841 498.375H449.532V157.826L445.841 157.347V498.375Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_2" d="M445.65 414.108L433.443 420.82H464.735L451.456 414.108H445.65Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_3" d="M438.859 420.82C438.016 420.82 392.237 498.375 392.237 498.375H397.012L444.327 420.82H438.859Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_4" d="M458.703 420.82C459.546 420.82 505.325 498.375 505.325 498.375H500.55L453.235 420.82H458.703Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <g id="Group">
                                        <path id="Vector_5" d="M474.676 450.254C474.664 450.241 474.468 450.392 474.106 450.692C473.709 451.03 473.188 451.472 472.54 452.023C471.15 453.235 469.216 454.923 466.845 456.992C462.031 461.26 455.454 467.091 448.187 473.532C448.065 473.641 447.942 473.75 447.83 473.851L448.168 473.844C440.722 467.774 434.002 462.295 429.087 458.289C426.669 456.349 424.697 454.768 423.281 453.632C422.621 453.117 422.092 452.704 421.687 452.387C421.319 452.107 421.121 451.967 421.109 451.98C421.098 451.994 421.274 452.161 421.621 452.467C422.01 452.802 422.519 453.241 423.153 453.787C424.544 454.954 426.48 456.579 428.855 458.572C433.744 462.609 440.431 468.131 447.838 474.247L448.01 474.389L448.177 474.24C448.29 474.139 448.412 474.03 448.534 473.921C455.761 467.435 462.302 461.564 467.09 457.267C469.415 455.147 471.312 453.417 472.675 452.174C473.296 451.593 473.795 451.126 474.176 450.77C474.515 450.445 474.688 450.267 474.676 450.254Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <g id="Group_2">
                                        <path id="Vector_6" d="M431.713 434.786C431.713 434.93 439.204 435.046 448.443 435.046C457.685 435.046 465.174 434.929 465.174 434.786C465.174 434.643 457.684 434.526 448.443 434.526C439.204 434.526 431.713 434.642 431.713 434.786Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <path id="Vector_7" opacity="0.1" d="M342.949 94.7468L22.9999 273C35.9999 319 86 367 120 381L355.5 108L342.949 94.7468Z" fill="#C3CCFE" fill-opacity="0.7" />
                                    <path id="Vector_8" d="M381.666 94.7076L472.454 227.959C473.094 228.898 474.374 229.141 475.313 228.501C476.252 227.861 476.495 226.581 475.855 225.642L385.067 92.3906C384.427 91.4516 383.147 91.2086 382.208 91.8486C381.269 92.4886 381.027 93.7686 381.666 94.7076Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_9" d="M391.612 87.3536C383.198 94.4056 372.677 103.135 372.677 103.135L355.777 82.8216L374.209 66.9066C379.857 62.0296 388.399 62.6946 393.223 68.3876C398.038 74.0656 397.316 82.5716 391.612 87.3536Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_10" d="M373.81 102.031C374.199 103.215 384.102 126.243 384.102 126.243L383.361 175.166L377.898 180.235L276.543 69.4816L282.006 64.4126L331.229 69.7836L356.911 81.7176L373.81 102.031Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_11" d="M457.534 195.888C457.048 196.511 445.128 206.482 438.099 195.391C431.07 184.299 445.862 177.911 445.862 177.911L457.534 195.888Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <g id="Group_3">
                                        <path id="Vector_12" d="M442.619 189.068C442.661 189.088 442.793 188.802 443.149 188.389C443.499 187.984 444.132 187.453 445.07 187.253C445.984 187.04 447.222 187.254 448.111 188.134C449.006 188.977 449.415 190.51 448.819 191.82C448.247 193.141 446.835 193.866 445.609 193.767C444.36 193.697 443.372 192.922 442.916 192.101C442.436 191.272 442.405 190.446 442.471 189.915C442.539 189.376 442.663 189.086 442.619 189.068C442.598 189.056 442.407 189.319 442.271 189.881C442.139 190.432 442.105 191.333 442.593 192.279C443.054 193.213 444.143 194.137 445.575 194.246C446.978 194.39 448.631 193.566 449.295 192.031C449.988 190.51 449.491 188.732 448.443 187.787C447.402 186.798 445.986 186.609 444.984 186.893C443.955 187.165 443.309 187.795 442.989 188.262C442.664 188.743 442.596 189.06 442.619 189.068Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <g id="Group_4">
                                        <path id="Vector_13" d="M281.704 64.6926C281.599 64.7906 304.387 89.5196 332.597 119.921C360.817 150.332 383.771 174.897 383.876 174.799C383.981 174.701 361.198 149.977 332.978 119.566C304.769 89.1656 281.81 64.5946 281.704 64.6926Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <g id="Group_5">
                                        <path id="Vector_14" d="M356.642 82.0716C356.616 82.0956 356.835 82.3866 357.254 82.8906C357.756 83.4776 358.357 84.1806 359.059 85.0006C360.685 86.8686 362.767 89.2606 365.068 91.9056C367.361 94.5596 369.435 96.9586 371.054 98.8326C371.766 99.6426 372.377 100.338 372.887 100.918C373.327 101.404 373.584 101.663 373.611 101.64C373.639 101.617 373.435 101.316 373.043 100.789C372.651 100.262 372.068 99.5126 371.336 98.5966C369.872 96.7636 367.805 94.2686 365.46 91.5636C363.115 88.8606 360.937 86.4606 359.33 84.7526C358.527 83.8986 357.868 83.2156 357.402 82.7526C356.938 82.2916 356.668 82.0466 356.642 82.0716Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <g id="Group_6">
                                        <path id="Vector_15" d="M333.656 72.0756C333.643 72.0886 333.809 72.2786 334.135 72.6306C334.501 73.0156 334.981 73.5196 335.579 74.1496C336.883 75.5016 338.701 77.3866 340.93 79.6976C345.445 84.3846 351.64 90.8986 358.356 98.2106C365.071 105.528 371.034 112.258 375.318 117.156C377.43 119.574 379.153 121.546 380.389 122.96C380.966 123.61 381.428 124.132 381.78 124.528C382.102 124.883 382.278 125.064 382.292 125.052C382.306 125.04 382.157 124.837 381.86 124.46C381.527 124.047 381.09 123.505 380.544 122.828C379.394 121.416 377.705 119.395 375.597 116.914C371.382 111.952 365.459 105.18 358.739 97.8576C352.019 90.5406 345.777 84.0626 341.193 79.4396C338.901 77.1276 337.031 75.2716 335.722 74.0066C335.094 73.4046 334.591 72.9226 334.208 72.5556C333.859 72.2286 333.669 72.0626 333.656 72.0756Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                </g>
                            </svg>

                            <svg id="studio-2" viewBox="0 0 506 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="plights">
                                    <path id="Vector" d="M445.841 498.375H449.532V157.826L445.841 157.347V498.375Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_2" d="M445.65 414.108L433.443 420.82H464.735L451.456 414.108H445.65Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_3" d="M438.859 420.82C438.016 420.82 392.237 498.375 392.237 498.375H397.012L444.327 420.82H438.859Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_4" d="M458.703 420.82C459.546 420.82 505.325 498.375 505.325 498.375H500.55L453.235 420.82H458.703Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <g id="Group">
                                        <path id="Vector_5" d="M474.676 450.254C474.664 450.241 474.468 450.392 474.106 450.692C473.709 451.03 473.188 451.472 472.54 452.023C471.15 453.235 469.216 454.923 466.845 456.992C462.031 461.26 455.454 467.091 448.187 473.532C448.065 473.641 447.942 473.75 447.83 473.851L448.168 473.844C440.722 467.774 434.002 462.295 429.087 458.289C426.669 456.349 424.697 454.768 423.281 453.632C422.621 453.117 422.092 452.704 421.687 452.387C421.319 452.107 421.121 451.967 421.109 451.98C421.098 451.994 421.274 452.161 421.621 452.467C422.01 452.802 422.519 453.241 423.153 453.787C424.544 454.954 426.48 456.579 428.855 458.572C433.744 462.609 440.431 468.131 447.838 474.247L448.01 474.389L448.177 474.24C448.29 474.139 448.412 474.03 448.534 473.921C455.761 467.435 462.302 461.564 467.09 457.267C469.415 455.147 471.312 453.417 472.675 452.174C473.296 451.593 473.795 451.126 474.176 450.77C474.515 450.445 474.688 450.267 474.676 450.254Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <g id="Group_2">
                                        <path id="Vector_6" d="M431.713 434.786C431.713 434.93 439.204 435.046 448.443 435.046C457.685 435.046 465.174 434.929 465.174 434.786C465.174 434.643 457.684 434.526 448.443 434.526C439.204 434.526 431.713 434.642 431.713 434.786Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <path id="Vector_7" opacity="0.1" d="M342.949 94.7468L22.9999 273C35.9999 319 86 367 120 381L355.5 108L342.949 94.7468Z" fill="#C3CCFE" fill-opacity="0.7" />
                                    <path id="Vector_8" d="M381.666 94.7076L472.454 227.959C473.094 228.898 474.374 229.141 475.313 228.501C476.252 227.861 476.495 226.581 475.855 225.642L385.067 92.3906C384.427 91.4516 383.147 91.2086 382.208 91.8486C381.269 92.4886 381.027 93.7686 381.666 94.7076Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_9" d="M391.612 87.3536C383.198 94.4056 372.677 103.135 372.677 103.135L355.777 82.8216L374.209 66.9066C379.857 62.0296 388.399 62.6946 393.223 68.3876C398.038 74.0656 397.316 82.5716 391.612 87.3536Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_10" d="M373.81 102.031C374.199 103.215 384.102 126.243 384.102 126.243L383.361 175.166L377.898 180.235L276.543 69.4816L282.006 64.4126L331.229 69.7836L356.911 81.7176L373.81 102.031Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <path id="Vector_11" d="M457.534 195.888C457.048 196.511 445.128 206.482 438.099 195.391C431.07 184.299 445.862 177.911 445.862 177.911L457.534 195.888Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    <g id="Group_3">
                                        <path id="Vector_12" d="M442.619 189.068C442.661 189.088 442.793 188.802 443.149 188.389C443.499 187.984 444.132 187.453 445.07 187.253C445.984 187.04 447.222 187.254 448.111 188.134C449.006 188.977 449.415 190.51 448.819 191.82C448.247 193.141 446.835 193.866 445.609 193.767C444.36 193.697 443.372 192.922 442.916 192.101C442.436 191.272 442.405 190.446 442.471 189.915C442.539 189.376 442.663 189.086 442.619 189.068C442.598 189.056 442.407 189.319 442.271 189.881C442.139 190.432 442.105 191.333 442.593 192.279C443.054 193.213 444.143 194.137 445.575 194.246C446.978 194.39 448.631 193.566 449.295 192.031C449.988 190.51 449.491 188.732 448.443 187.787C447.402 186.798 445.986 186.609 444.984 186.893C443.955 187.165 443.309 187.795 442.989 188.262C442.664 188.743 442.596 189.06 442.619 189.068Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <g id="Group_4">
                                        <path id="Vector_13" d="M281.704 64.6926C281.599 64.7906 304.387 89.5196 332.597 119.921C360.817 150.332 383.771 174.897 383.876 174.799C383.981 174.701 361.198 149.977 332.978 119.566C304.769 89.1656 281.81 64.5946 281.704 64.6926Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <g id="Group_5">
                                        <path id="Vector_14" d="M356.642 82.0716C356.616 82.0956 356.835 82.3866 357.254 82.8906C357.756 83.4776 358.357 84.1806 359.059 85.0006C360.685 86.8686 362.767 89.2606 365.068 91.9056C367.361 94.5596 369.435 96.9586 371.054 98.8326C371.766 99.6426 372.377 100.338 372.887 100.918C373.327 101.404 373.584 101.663 373.611 101.64C373.639 101.617 373.435 101.316 373.043 100.789C372.651 100.262 372.068 99.5126 371.336 98.5966C369.872 96.7636 367.805 94.2686 365.46 91.5636C363.115 88.8606 360.937 86.4606 359.33 84.7526C358.527 83.8986 357.868 83.2156 357.402 82.7526C356.938 82.2916 356.668 82.0466 356.642 82.0716Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                    <g id="Group_6">
                                        <path id="Vector_15" d="M333.656 72.0756C333.643 72.0886 333.809 72.2786 334.135 72.6306C334.501 73.0156 334.981 73.5196 335.579 74.1496C336.883 75.5016 338.701 77.3866 340.93 79.6976C345.445 84.3846 351.64 90.8986 358.356 98.2106C365.071 105.528 371.034 112.258 375.318 117.156C377.43 119.574 379.153 121.546 380.389 122.96C380.966 123.61 381.428 124.132 381.78 124.528C382.102 124.883 382.278 125.064 382.292 125.052C382.306 125.04 382.157 124.837 381.86 124.46C381.527 124.047 381.09 123.505 380.544 122.828C379.394 121.416 377.705 119.395 375.597 116.914C371.382 111.952 365.459 105.18 358.739 97.8576C352.019 90.5406 345.777 84.0626 341.193 79.4396C338.901 77.1276 337.031 75.2716 335.722 74.0066C335.094 73.4046 334.591 72.9226 334.208 72.5556C333.859 72.2286 333.669 72.0626 333.656 72.0756Z" fill="#0B2EF7" fill-opacity="0.89" />
                                    </g>
                                </g>
                            </svg>


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

                            <div id="sub-tag-wed">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Your Story Told Like None Other</p>
                            </div>

                            <button id="now-booking-wed"
                                onClick={() => {
                                    goToPortfolio("v-id")
                                }}
                            >
                                PORTFOLIO
                            </button>
                            <div className="custom-shape-divider-bottom-1726444224">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
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
                            <div id="sub-tag-fashion">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Taking your fashion to the next level</p>
                            </div>
                            <button id="now-booking-fashion" onClick={() => {
                                goToPortfolio("section-6")
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

                            <div id="sub-tag-commercials">
                                {/* <p>Be careful, violence tends to escalate</p> */}
                                <p>Building commercials that communicate</p>
                            </div>

                            <button id="now-booking-commercials" onClick={() => {
                                goToPortfolio("section-5")
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
                </div>
                <div className="vertical-section sec-top1" id="v-id">
                    <div className="panel  ">

                    </div>
                </div>
            </div >
        </ReactLenis >
    );
}