// "use client";

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useGLTF, Environment, ContactShadows, Html, useProgress, useAnimations, Stars, Sparkles } from '@react-three/drei';
// import { useEffect, useRef, Suspense, useState, use } from 'react'; 
// import * as THREE from 'three';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import Lenis from 'lenis';

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger, useGSAP);
// }

// function CanvasLoader() {
//   const { progress } = useProgress();
//   const [displayProgress, setDisplayProgress] = useState(0);
//   useEffect(() => { setDisplayProgress(Math.round(progress)); }, [progress]);
//   return (
//     <Html center zIndexRange={[100, 0]}>
//       <div className="text-white text-2xl font-black bg-white/5 backdrop-blur-md p-6 rounded-full border border-white/10 min-w-[80px] text-center">{displayProgress}%</div>
//     </Html>
//   );
// }

// function BookModel() {
//   const bookRef = useRef<any>(null);
//   const { scene, animations } = useGLTF('/models/book.glb');
//   const { actions } = useAnimations(animations, bookRef);
//   const mouse = useRef({ x: 0, y: 0 });

//   // Responsiv sozlamalar
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useFrame((state) => {
//     if (!bookRef.current) return;
//     const t = state.clock.getElapsedTime();
//     bookRef.current.rotation.x = THREE.MathUtils.lerp(bookRef.current.rotation.x, mouse.current.y * 0.05, 0.1);
//     bookRef.current.position.y += Math.sin(t) * 0.002;
//   });

//   useGSAP(() => {
//     if (!bookRef.current) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.current.x = (e.clientX / window.innerWidth) - 0.5;
//       mouse.current.y = (e.clientY / window.innerHeight) - 0.5;
//     };
//     window.addEventListener('mousemove', handleMouseMove);

//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".scroll-wrapper",
//         start: "top top",
//         end: "bottom bottom",
//         scrub: 1.2, 
//       }
//     });

//     const FIXED_Z = 5;
//     const FIXED_Y = -0.5;
//     // Telefonda kitobni o'ngga/chapga surmaymiz (x: 0), kompyuterda SIDE_X: 1.5
//     const SIDE_X = isMobile ? 0 : 1.5; 

//     tl
//       .to(bookRef.current.position, { x: SIDE_X, y: FIXED_Y, z: FIXED_Z, duration: 2 })
//       .to(bookRef.current.rotation, { y: Math.PI / 2, duration: 2 }, "<")

//       .to(bookRef.current.position, { x: -SIDE_X, y: FIXED_Y, z: FIXED_Z, duration: 2 })
//       .to(bookRef.current.rotation, { y: Math.PI, duration: 2 }, "<")

//       .to(bookRef.current.position, { x: 0, y: FIXED_Y, z: FIXED_Z, duration: 2 })
//       .to(bookRef.current.rotation, { y: (Math.PI * 3) / 2, duration: 2 }, "<")

//       .to(bookRef.current.position, { x: 0, y: isMobile ? 1.5 : 0.5, z: 2, duration: 2 })
//       .to(bookRef.current.rotation, { y: Math.PI * 2, duration: 2 }, "<");

//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, [isMobile]); // isMobile o'zgarganda animatsiyani qayta sozlaymiz

//   return (
//     <primitive 
//       object={scene} 
//       ref={bookRef} 
//       scale={isMobile ? [8, 8, 8] : [14, 14, 14]} // Telefonda kitob kichrayadi
//       position={[isMobile ? 0 : -1.5, -0.5, 5]} 
//       rotation={[0, 0, 0]} 
//     />
//   );
// }

// export default function Home(props: { params?: Promise<any>; searchParams?: Promise<any> }) {
//   const _params = props.params ? use(props.params) : null;

//   useEffect(() => {
//     const lenis = new Lenis();
//     function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
//     requestAnimationFrame(raf);
//     lenis.on('scroll', ScrollTrigger.update);
//     return () => lenis.destroy();
//   }, []);

//   return (
//     <div className="scroll-wrapper relative bg-[#bebdf98e] text-white overflow-x-hidden selection:bg-yellow-500 font-sans">
//       <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
//         <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
//           <Stars radius={100} depth={50} count={1200} factor={4} saturation={0} fade speed={1} />
//           {/* <Sparkles count={40} scale={10} size={2} color="#ffd700" /> */}
//           <ambientLight intensity={1.5} />
//           <pointLight position={[10, 10, 10]} intensity={2} />
//           <Suspense fallback={<CanvasLoader />}>
//             <BookModel />
//           </Suspense>
//           <Suspense fallback={null}><Environment preset="city" /></Suspense>
//           <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={20} blur={2.5} />
//         </Canvas>
//       </div>

//       {/* Kontent qismi ham responsiv qilindi: md:px-24 (PC), px-6 (Mobil) */}
//       <section className="h-screen flex items-center justify-center md:justify-end px-6 md:px-24 relative z-10 text-center md:text-right">
//         <div className="fade-in">
//           <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter uppercase leading-tight">Kitobchi</h1>
//           <p className="text-lg md:text-2xl text-yellow-500 font-bold tracking-widest md:tracking-[0.5em] mt-4 uppercase">Do'konlar Tarmog'i</p>
//         </div>
//       </section>

//       <section className="h-screen flex items-center justify-center md:justify-start px-6 md:px-24 relative z-10">
//         <div className="fade-in max-w-xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Markaziy Filial</h2>
//           <p className="text-base md:text-lg text-gray-300">Eng sara adabiyotlar to'plami bizning shinam do'konimizda.</p>
//         </div>
//       </section>

//       <section className="h-screen flex items-center justify-center md:justify-end px-6 md:px-24 relative z-10">
//         <div className="fade-in max-w-xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl text-center md:text-right">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">Bolalar Olami</h2>
//           <p className="text-base md:text-lg">Kichik kitobxonlar uchun eng qiziqarli kitoblar dunyosi.</p>
//         </div>
//       </section>

//       <section className="h-screen flex items-center justify-center md:justify-start px-6 md:px-24 relative z-10">
//         <div className="fade-in max-w-xl p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/5 backdrop-blur-3xl border border-white/10 shadow-2xl text-center md:text-left">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">O'quv Qurollari</h2>
//           <p className="text-base md:text-lg bg-white-300">Sifatli kanselyariya va o'quv jihozlari barcha uchun.</p>
//         </div>
//       </section>

//       <section className="h-screen flex flex-col items-center justify-center px-6 relative z-10">
//         <div className="fade-in text-center bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl w-full max-w-4xl">
//           <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter text-white">Biz bilan bog'laning</h2>
//           <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
//             <span className="w-full md:w-auto px-10 py-5 bg-yellow-500 text-black rounded-full font-bold text-lg md:text-xl shadow-lg">📞 +998 71 200 00 00</span>
//             <a href="https://www.instagram.com/kitobchi_market" target="_blank" className="w-full md:w-auto px-10 py-5 bg-white text-black rounded-full font-bold text-lg md:text-xl hover:bg-gray-100 transition-all">Instagram</a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }