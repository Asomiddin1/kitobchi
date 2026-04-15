"use client";

// 1. React'dan Suspense'ni import qilamiz
import React, { useEffect, useRef, Suspense } from "react"; 
import { Canvas } from "@react-three/fiber";
// 2. drei'dan Html va useProgress'ni import qilamiz
import { Environment, Float, ContactShadows, PerspectiveCamera, useGLTF, useTexture, Html, useProgress } from "@react-three/drei"; 
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function IPhoneGLB() {
  // ... Sizdagi mavjud IPhoneGLB kodi o'zgarishsiz qoladi
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/iphone.glb");
  const screenTexture = useTexture("/kitobchi.jpg");

  useEffect(() => {
    if (!modelRef.current) return;
    const model = modelRef.current;

    model.rotation.set(0, Math.PI, 0);
    model.position.set(2.5, 0, 0); // O'ng tarafga surilgan holat

    screenTexture.flipY = false;
    screenTexture.anisotropy = 16;
    screenTexture.minFilter = THREE.LinearMipmapLinearFilter;
    screenTexture.colorSpace = THREE.SRGBColorSpace;

    model.traverse((child: any) => {
      if (child.isMesh && child.material) {
        const name = child.name.toLowerCase();
        if (name.includes("screen") || name.includes("display") || name.includes("glass") || name.includes("front") || name.includes("iphone_screen") || name.includes("body_screen")) {
          const newMaterial = child.material.clone();
          newMaterial.map = screenTexture;
          newMaterial.needsUpdate = true;
          child.material = newMaterial;
        }
      }
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#main-wrapper",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    tl.to(model.rotation, { y: Math.PI * 1.5, x: 0.1 }, 0.1)
      .to(model.position, { x: -2.5, y: -0.5, z: 0 }, 0.1)
      .to(model.rotation, { y: Math.PI * 2.5, x: -0.2 }, 0.4)
      .to(model.position, { x: 2.5, y: 0.5, z: 0 }, 0.4)
      .to(model.rotation, { y: Math.PI * 3, x: 0, z: 0.5 }, 0.7)
      .to(model.position, { x: 0, y: 0, z: 1.5 }, 0.7);

    ScrollTrigger.matchMedia({
      "(max-width: 768px)": function () {
        gsap.set(model.position, { x: 0, y: -1.5, z: 0 });
        tl.to(model.position, { x: 0, y: -1.2, z: -0.5 }, 0);
      },
    });
  }, [screenTexture]);

  return (
    <group ref={modelRef} scale={30}>
      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.15}>
        <primitive object={scene} />
      </Float>
    </group>
  );
}

useGLTF.preload("/iphone.glb");

// 3. Yangi qism: Yuklanish animatsiyasi (Loader) komponenti
function CanvasLoader() {
  const { progress } = useProgress(); // 3D modelning yuklanish foizini oladi
  
  return (
    <Html center>
      {/* Tailwind yordamida chiroyli oynacha yasadik */}
      <div className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-xl px-8 py-6 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.1)] border border-white/50 w-[200px]">
        <div className="w-12 h-12 border-4 border-[#eac7d4] border-t-[#8f7cff] rounded-full animate-spin mb-4"></div>
        <p className="text-[#4a4a4a] font-bold text-lg whitespace-nowrap">
          {progress.toFixed(0)}% yuklandi
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
        
        {/* 4. Suspense yordamida og'ir modellarni o'rab qo'yamiz */}
        <Suspense fallback={<CanvasLoader />}>
          <IPhoneGLB />
          {/* Environment ham internetdan yuklanadi, shuning uchun u ham Suspense ichida turgani yaxshi */}
          <Environment preset="city" /> 
        </Suspense>

        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} />
      </Canvas>
    </div>
  );
}