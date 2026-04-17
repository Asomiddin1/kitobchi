"use client";

import React, { useEffect, useRef, Suspense } from "react"; 
import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows, PerspectiveCamera, useGLTF, Html, useProgress } from "@react-three/drei"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function IPhoneGLB() {
  const modelRef = useRef<THREE.Group>(null);
  
  const { scene } = useGLTF("/phone-done3.glb");

  useEffect(() => {
    if (!modelRef.current) return;
    const model = modelRef.current;

    model.rotation.set(0, 5.1, 0);

    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 768px)",
      isMobile: "(max-width: 767px)"
    }, (context) => {
      let { isDesktop } = context.conditions as { isDesktop: boolean };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#main-wrapper",
          start: "top top",
          end: "+=2000", 
          scrub: 1.2,
        },
      });

      if (isDesktop) {
        model.position.set(2.5, 0, 0);
        model.scale.set(30, 30, 30);

        tl.to(model.rotation, { y: Math.PI * 1.5, x: 0.1 }, 0.1)
          .to(model.position, { x: -2.5, y: -0.5, z: 0 }, 0.1)
          .to(model.rotation, { y: Math.PI * 2.5, x: -0.2 }, 0.4)
          .to(model.position, { x: 2.5, y: 0.5, z: 0 }, 0.4)
          // O'ZGARTIRILDI: x va z nolga tenglashtirildi (tekis turishi uchun), y esa aylanishni tugatish uchun o'zgartirildi
          .to(model.rotation, { y: Math.PI * 4, x: 0, z: 0 }, 0.7) 
          .to(model.position, { x: 0, y: 0, z: 1.5 }, 0.7);
      } else {
        model.position.set(0, -1.5, 0);
        model.scale.set(20, 20, 20);

        tl.to(model.rotation, { y: Math.PI * 1.5, x: 0.05 }, 0.1)
          .to(model.position, { x: 0, y: -0.5, z: -0.5 }, 0.1)
          .to(model.rotation, { y: Math.PI * 2.5, x: -0.1 }, 0.4)
          .to(model.position, { x: 0, y: 0.5, z: 0 }, 0.4)
          // O'ZGARTIRILDI: x va z nolga tenglashtirildi
          .to(model.rotation, { y: Math.PI * 4, x: 0, z: 0 }, 0.7)
          .to(model.position, { x: 0, y: 0, z: 1 }, 0.7);
      }
    });

    return () => mm.revert();
  }, [scene]); 

  return (
    <group ref={modelRef}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.15}>
        <primitive object={scene} />
      </Float>
    </group>
  );
}

useGLTF.preload("/phone-done3.glb");

function CanvasLoader() {
  const { progress } = useProgress(); 
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.1)] border border-white/50 w-[200px]">
        <div className="w-12 h-12 border-4 border-[#eac7d4] border-t-[#8f7cff] rounded-full animate-spin mb-4"></div>
        <p className="text-[#4a4a4a] font-bold text-lg whitespace-nowrap">
          {Math.round(progress)}% yuklandi
        </p>
      </div>
    </Html>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={30} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 20, 10]} intensity={1.5} />
        
        <Environment preset="city" /> 

        <Suspense fallback={<CanvasLoader />}>
          <IPhoneGLB />
        </Suspense>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} />
      </Canvas>
    </div>
  );
}