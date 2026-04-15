"use client";

import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows, PerspectiveCamera, useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function IPhoneGLB() {
  const modelRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/iphone.glb");
  const screenTexture = useTexture("/kitobchi.jpg");

  useEffect(() => {
    if (!modelRef.current) return;
    const model = modelRef.current;

    model.rotation.set(0, Math.PI, 0);
    model.position.set(0, 0, 0);

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

export default function Scene() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={30} />
        <ambientLight intensity={1} />
        <spotLight position={[10, 20, 10]} intensity={1.5} />
        <IPhoneGLB />
        <Environment preset="city" />
        <ContactShadows position={[0, -2.5, 0]} opacity={0.4} />
      </Canvas>
    </div>
  );
}