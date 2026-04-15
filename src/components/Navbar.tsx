"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PlayStoreButton from "./PlayStoreButton";
import AppStoreButton from "./AppStoreBtn";

const menuItems = [
  { name: "Asosiy", path: "/" },
  { name: "Do'konlar", path: "/dokonlar" },
  { name: "Sovg'alar", path: "/#sovg'alar" },
  { name: "Aloqa", path: "/aloqa" },
];

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
        <Link
          href="/"
          className="text-3xl font-black text-[#2d2d2d] tracking-tighter hover:scale-105 transition-transform duration-300"
        >
          Kitobchi<span className="text-[#8f7cff]"></span>
        </Link>

        {/* 2. MARKAZIY LINKLAR (Qaytarildi) */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-extrabold tracking-[0.15em] text-[black] uppercase">
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
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

          <div className="relative w-full max-w-[500px] bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-modal-up">
            <div className="h-2 w-full bg-gradient-to-r from-[#8f7cff] to-[#bfa2ff]" />
             <div className="p-10">
              <h1 className="text-center font-extrabold text-2xl">Kitobchi App</h1>
              <div className="flex items-center w-full gap-4 my-4">
                 <AppStoreButton />
                 <PlayStoreButton />
              </div>
             </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes modalUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.92);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-modal-up {
          animation: modalUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </>
  );
}
