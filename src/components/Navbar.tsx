"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import PlayStoreButton from "./PlayStoreButton";
import AppStoreButton from "./AppStoreBtn";
import Image from "next/image";
import LogoBlack from '../images/logo-black.png';

const menuItems = [
  { name: "Asosiy", path: "/" },
  { name: "Do'konlar", path: "/dokonlar" },
  { name: "Sovg'alar", path: "/#sovg'alar" },
  { name: "Aloqa", path: "/aloqa" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* O'ZGARISH: z-[60] o'rniga z-[70] qilindi, menyu ochilganda ham tepada turishi uchun */}
      <nav
        className={`fixed top-0 w-full z-[70] flex justify-between items-center px-4 md:px-16 transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "py-4 backdrop-blur-xl bg-white/70 border-b border-black/5 shadow-sm"
            : "py-6 md:py-8 bg-transparent"
        }`}
      >
        {/* LOGO */}
        <Link
          href="/"
          className="text-3xl font-black text-[#2d2d2d] tracking-tighter hover:scale-105 transition-transform duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image src={LogoBlack} alt="Kitobchi Logo" width={120} height={120} className="md:w-[150px]" />
        </Link>

        {/* MARKAZIY LINKLAR (Desktop) */}
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

        {/* O'NG TOMON */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="relative flex items-center gap-2 overflow-hidden group bg-[#2d2d2d] text-white px-5 py-2.5 md:px-7 md:py-3 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:shadow-[0_10px_30px_rgba(143,124,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-[#8f7cff] to-[#bfa2ff] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out z-0"></div>
            <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
              Download
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                className="md:w-[14px] md:h-[14px]"
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

          {/* BURGER -> X TUGMASI */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-[#2d2d2d] transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBIL MENYU */}
      {/* O'ZGARISH: z-[65] o'rniga z-[60] qilindi, Navbar ustida emas, uning ostidan ochilishi uchun */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-md z-[60] md:hidden transition-transform duration-500 ease-in-out flex flex-col justify-center items-center ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8 text-xl font-extrabold tracking-[0.15em] text-[#2d2d2d] uppercase">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="hover:text-[#8f7cff] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      {/* PREMIUM MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setShowModal(false)}
          />

          <div className="relative w-full max-w-[500px] bg-white rounded-[40px] shadow-[0_40px_80px_-15px_rgba(0,0,0,0.5)] overflow-hidden animate-modal-up">
            <div className="h-2 w-full bg-gradient-to-r from-[#8f7cff] to-[#bfa2ff]" />
            <div className="p-8 md:p-10">
              <h1 className="text-center font-extrabold text-2xl">Kitobchi App</h1>
              <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mt-6">
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