import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 relative">
      <div className="reveal-item max-w-4xl pt-20 z-10">
        <h1 className="text-7xl md:text-[140px] font-black leading-[0.85] tracking-tighter uppercase mb-8 drop-shadow-2xl">
          <span className="text-[#2d2d2d]">Kitobchi</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f7cff] via-[#a890fe] to-[#eac7d4]">
            Online.
          </span>
        </h1>

        {/* Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 p-6 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.1)] max-w-lg transform hover:-translate-y-2 transition-transform duration-500 cursor-default">
          <p className="text-xl md:text-2xl text-[black] font-medium leading-relaxed">
            Kitob savdosi platformalari orasida yangicha qarash. O'qishni san'at darajasiga olib chiqamiz.
          </p>
        </div>
      </div>
    </section>
  );
}