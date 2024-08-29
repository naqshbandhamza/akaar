"use client"
import Image from "next/image";
import Head from 'next/head';
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

export default function Home() {


  return (
    <>
      {/* AKAAR CREATIVE AGENCY */}
      {/* AKAAR VIDEOGRAPHY & PHOTOGRAPHY */}
      {/* AKAAR  WEDDINGS*/}
      {/* AKAAR  CONTACT*/}
      <ReactLenis root options={{
        lerp: 0.1,
        duration: 1.5,
        // smoothTouch: true
      }}>
        <div>
          <p>hello</p>
        </div>
      </ReactLenis >
    </>
  );
}
