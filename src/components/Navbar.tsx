"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { name: "Asosiy", path: "/" },
  { name: "Do'konlar", path: "/dokonlar" },
  { name: "Sovg'alar", path: "/#sovg'alar" },
  { name: "Aloqa", path: "/aloqa" }
];

const LINKS = {
  android: "https://play.google.com/store/apps/details?id=com.kitobchi.kitobchi",
  ios: "https://play.google.com/store/apps/details?id=com.kitobchi.kitobchi"
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-[60] flex justify-between items-center px-6 md:px-16 transition-all duration-500 ${
          isScrolled
            ? "py-4 backdrop-blur-xl bg-white/70 border-b border-black/5 shadow-sm"
            : "py-8 bg-transparent"
        }`}
      >
        {/* 1. LOGO */}
        <Link href="/" className="text-3xl font-black text-[#2d2d2d] tracking-tighter hover:scale-105 transition-transform duration-300">
          Kitobchi<span className="text-[#8f7cff]"></span>
        </Link>

        {/* 2. MARKAZIY LINKLAR (Qaytarildi) */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-extrabold tracking-[0.15em] text-[#4a4a4a] uppercase">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative group hover:text-[#8f7cff] transition-colors duration-300"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#8f7cff] group-hover:w-full transition-all duration-300 ease-out"></span>
            </Link>
          ))}
        </div>

        {/* 3. DOWNLOAD TUGMASI */}
        <button 
          onClick={() => setShowModal(true)}
          className="relative flex items-center gap-2 overflow-hidden group bg-[#2d2d2d] text-white px-7 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_10px_30px_rgba(143,124,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
        >
          <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#8f7cff] to-[#bfa2ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
          <span className="relative z-10 flex items-center gap-2">
            Download
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </span>
        </button>
      </nav>

      {/* PREMIUM MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setShowModal(false)}
          />
          
          <div className="relative w-full max-w-[400px] bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-modal-up">
            <div className="h-2 w-full bg-gradient-to-r from-[#8f7cff] to-[#bfa2ff]" />
            
            <div className="p-10">
              <div className="text-center mb-10">
                <h3 className="text-3xl font-black text-[#2d2d2d] tracking-tight mb-2">
                  Kitobchi <span className="text-[#8f7cff]">App</span>
                </h3>
                <p className="text-gray-400 text-sm font-medium italic">Mobil ilovani yuklab oling</p>
              </div>

              <div className="flex flex-col gap-4">
                {/* App Store */}
                <a 
                  href={LINKS.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#F2F2F7] hover:bg-[#E5E5EA] text-black p-5 rounded-2xl transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl"></span>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold opacity-40 leading-none">Download on</span>
                      <span className="text-xl font-bold leading-tight">App Store</span>
                    </div>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">→</span>
                </a>

                {/* Google Play */}
                <a 
                  href={LINKS.android}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-[#2d2d2d] hover:bg-black text-white p-5 rounded-2xl transition-all duration-300 group hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.18.18-.288.43-.288.694 0 .304.135.581.353.77l.004.003.012.01c.175.14.4.226.643.226.311 0 .59-.138.783-.357l.001-.001 10.954-10.954 4.381 2.531c.42.242.853.364 1.284.364.6 0 1.18-.236 1.62-.7.43-.45.65-1.01.65-1.58V10.21c0-.57-.22-1.13-.65-1.58-.44-.464-1.02-.7-1.62-.7-.431 0-.864.122-1.284.364l-4.381 2.531L5.733.511C5.54.292 5.261.154 4.95.154c-.244 0-.469.086-.643.226l-.012.01-.004.003c-.218.192-.353.469-.353.773 0 .264.108.514.288.694z"/></svg>
                    <div className="flex flex-col ml-1">
                      <span className="text-[10px] uppercase font-bold opacity-40 leading-none">Get it on</span>
                      <span className="text-xl font-bold leading-tight text-white">Google Play</span>
                    </div>
                  </div>
                  <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">→</span>
                </a>
              </div>

              <button 
                onClick={() => setShowModal(false)}
                className="mt-10 w-full text-center text-[10px] font-black uppercase tracking-[4px] text-gray-300 hover:text-[#8f7cff] transition-all cursor-pointer"
              >
                [ Yopish ]
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes modalUp {
          from { opacity: 0; transform: translateY(40px) scale(0.92); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-modal-up {
          animation: modalUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}