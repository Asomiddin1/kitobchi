"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Komponentlarni import qilish (yo'llarni o'zingizning loyiha tuzilmangizga moslang)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scene from "./components/Scene";
import Hero from "./components/sections/Hero";
import Stores from "./components/sections/Stores";
import Gift from "./components/sections/Gift";
import CTA from "./components/sections/CTA";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function KitobchiApp() {
  useEffect(() => {
    // Smooth scroll (Lenis)
    const initLenis = async () => {
      const Lenis = (await import("lenis")).default;
      const lenis = new Lenis();
      function raf(time: any) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };
    initLenis();

    // Matn reveal animatsiyasi
    gsap.utils.toArray(".reveal-item").forEach((el: any) => {
      gsap.fromTo(el, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div
      id="main-wrapper"
      className="text-[#4a4a4a] selection:bg-[#bfa2ff] selection:text-white"
      style={{ background: "linear-gradient(135deg, #cfd9ff 0%, #d9c2f0 50%, #eac7d4 100%)" }}
    >
      <Scene />
      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Stores />
        <Gift />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}