"use client";

import React from "react";
export default function AloqaPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#f9f9fb] font-sans text-[#2d2d2d] overflow-hidden selection:bg-[#8f7cff] selection:text-white">

      {/* 1. PREMIUM BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#8f7cff]/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#bfa2ff]/10 blur-[120px] rounded-full"></div>
      </div>

      {/* pt-40 - Navbar sarlavhani yopib qo'ymasligi uchun tepadan joy tashlandi */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">
        
        {/* 2. HEADER SECTION */}
        <div className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-[#2d2d2d] to-[#7a7a7a]">
            BOG'LANISH<span className="text-[#8f7cff]">.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium max-w-2xl mx-auto tracking-tight">
            Savollaringiz bormi? Biz doimo yordamga tayyormiz. Quyidagi forma orqali yozing yoki to'g'ridan-to'g'ri bog'laning.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* 3. CONTACT FORM (LEFT SIDE) */}
          <div className="bg-white/40 backdrop-blur-2xl border border-white p-8 md:p-12 rounded-[48px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)]">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[2px] ml-4 opacity-50">Ismingiz</label>
                  <input 
                    type="text" 
                    placeholder="Ali Valiyev"
                    className="w-full bg-white/50 border border-black/5 px-6 py-4 rounded-2xl outline-none focus:border-[#8f7cff] focus:ring-4 focus:ring-[#8f7cff]/5 transition-all font-medium text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[2px] ml-4 opacity-50">Telefon</label>
                  <input 
                    type="tel" 
                    placeholder="+998 90 123 45 67"
                    className="w-full bg-white/50 border border-black/5 px-6 py-4 rounded-2xl outline-none focus:border-[#8f7cff] focus:ring-4 focus:ring-[#8f7cff]/5 transition-all font-medium text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-[2px] ml-4 opacity-50">Sizning xabaringiz</label>
                <textarea 
                  rows={5}
                  placeholder="Qanday yordam bera olamiz?"
                  className="w-full bg-white/50 border border-black/5 px-6 py-4 rounded-2xl outline-none focus:border-[#8f7cff] focus:ring-4 focus:ring-[#8f7cff]/5 transition-all font-medium text-sm resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#2d2d2d] hover:bg-black text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[3px] transition-all transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] active:scale-95">
                Xabarni yuborish
              </button>
            </form>
          </div>

          {/* 4. CONTACT INFO (RIGHT SIDE) */}
          <div className="space-y-10 lg:pl-10">
            
            {/* Social Links */}
            <div>
              <h3 className="text-xs font-black uppercase tracking-[4px] text-gray-400 mb-6">Ijtimoiy tarmoqlar</h3>
              <div className="flex flex-wrap gap-4">
                {['Telegram', 'Instagram', 'Facebook', 'LinkedIn'].map((social) => (
                  <button key={social} className="px-8 py-4 bg-white border border-black/5 rounded-2xl text-sm font-black hover:bg-[#8f7cff] hover:text-white hover:border-[#8f7cff] transition-all duration-300">
                    {social}
                  </button>
                ))}
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="group bg-gradient-to-br from-[#8f7cff] to-[#bfa2ff] p-10 rounded-[48px] text-white shadow-[0_30px_60px_-15px_rgba(143,124,255,0.4)] overflow-hidden relative">
              <div className="absolute top-[-20%] right-[-10%] w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="relative z-10">
                <h4 className="text-3xl font-black tracking-tight mb-2">Markaziy ofis</h4>
                <p className="text-white/80 font-medium mb-8 leading-relaxed">
                  Toshkent shahri, Yunusobod tumani,<br />
                  Amir Temur ko'chasi, 108-uy.
                </p>
                
                <div className="space-y-4">
                  <a href="tel:+998712000000" className="flex items-center gap-4 text-xl font-black hover:translate-x-2 transition-transform">
                    <span>+998 71 200 00 00</span>
                  </a>
                  <a href="mailto:info@kitobchi.uz" className="flex items-center gap-4 text-xl font-black hover:translate-x-2 transition-transform">
                    <span>info@kitobchi.uz</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Support Info */}
            <div className="flex items-center gap-6 p-6 bg-black/5 rounded-[32px] border border-black/5">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">⚡️</div>
              <div>
                <p className="text-sm font-black uppercase tracking-wider leading-none mb-1">Tezkor Yordam</p>
                <p className="text-xs font-medium text-gray-500 italic">O'rtacha javob berish vaqti: 15 daqiqa</p>
              </div>
            </div>

          </div>
        </div>

        {/* 5. FOOTER */}
        <div className="mt-32 text-center">
          <p className="text-[10px] font-black uppercase tracking-[5px] text-gray-300">
            Kitobchi Olam &bull; Har bir sahifada hikoya bor
          </p>
        </div>
      </div>
    </div>
  );
}