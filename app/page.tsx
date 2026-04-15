"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Space_Grotesk } from "next/font/google"; // 1. Shriftni import qilish

// Komponentlarni import qilish (yo'llarni o'zingizning loyiha tuzilmangizga moslang)
import Navbar from "../src/components/Navbar";
import Scene from "../src/components/Scene";
import Hero from "../src/components/sections/Hero";
import Stores from "../src/components/sections/Stores";
import Gift from "../src/components/sections/Gift";
// import CTA from "../src/components/sections/CTA";
import FooterCTA from "@/src/components/sections/FooterCta";
import Features from "@/src/components/sections/Features";
import CTA from "@/src/components/sections/CTA";

// 2. Shriftni sozlash
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

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
      // 3. Shriftni asosiy wrapperga qo'shish
      className={`text-[#4a4a4a] selection:bg-[#bfa2ff] selection:text-white ${spaceGrotesk.className}`}
      // 4. Grid qatorlarini va gradient fonni birlashtirish
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
          linear-gradient(135deg, #cfd9ff 0%, #d9c2f0 50%, #eac7d4 100%)
        `,
        backgroundSize: "40px 40px, 40px 40px, 100% 100%",
      }}
    >
      <Scene />

      <div className="relative z-10">
        <Hero />
        <Stores />
        <Gift />
        {/* <CTA /> */}
        <Features />
      </div>
    </div>
  );
}