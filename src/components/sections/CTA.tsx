import React from "react";

export default function CTA() {
  const playStoreUrl = "https://play.google.com/store/apps/details?id=com.kitobchi.kitobchi";

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative z-10">
      <div className="reveal-item w-full max-w-5xl">
        <h2 className="text-6xl md:text-[140px] text-transparent bg-clip-text bg-gradient-to-b from-[#2d2d2d] to-[#7a7a7a] font-black tracking-tighter leading-none mb-16 drop-shadow-2xl">
          TAYYORMISIZ?
        </h2>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          {/* App Store tugmasi */}
          <a 
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-gradient-to-r from-[#8f7cff] to-[#bfa2ff] text-center text-white px-14 py-6 rounded-full font-black text-xl hover:scale-110 hover:shadow-[0_20px_40px_rgba(143,124,255,0.4)] transition-all duration-300 transform"
          >
            APP STORE
          </a>

          {/* Play Market tugmasi */}
          <a 
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-[#2d2d2d] text-center text-white px-14 py-6 rounded-full font-black text-xl hover:scale-110 hover:bg-black hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300 transform border border-transparent hover:border-white/20"
          >
            PLAY MARKET
          </a>
        </div>
      </div>
    </section>
  );
}