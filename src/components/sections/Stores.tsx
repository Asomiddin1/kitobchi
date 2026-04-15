import React from "react";

export default function Stores() {
  return (
    <section className="min-h-screen flex items-center justify-end px-6 md:px-20">
      <div className="reveal-item max-w-xl text-right z-10">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 text-[#2d2d2d] drop-shadow-xl">
          Barcha <br /> 
          <span className="text-white drop-shadow-md">do'konlar.</span>
        </h2>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-xl ml-auto hover:bg-white/20 transition-all duration-300">
          <p className="text-xl text-[#4a4a4a] font-semibold">
            Hamma kitob do'konlari bir joyda jamlangan yagona marketplace. Sevimli asarlaringizni qidirish endi juda oson.
          </p>
        </div>
      </div>
    </section>
  );
}