import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 pt-20 pb-8 px-6 md:px-16 border-t border-white/20 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brend va Ta'rif */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-3xl font-black text-[#2d2d2d] tracking-tighter mb-4 cursor-default">
              Kitobchi<span className="text-[#8f7cff]"></span>
            </div>
            <p className="text-[#4a4a4a] text-sm leading-relaxed font-medium max-w-xs">
              O'zbekistondagi eng zamonaviy kitob platformasi. O'qishni biz bilan haqiqiy san'at darajasiga olib chiqing.
            </p>
          </div>
    
          {/* 2. Tezkor havolalar */}
          <div>
            <h4 className="text-[#2d2d2d] font-black mb-6 uppercase tracking-widest text-xs">Menyular</h4>
            <ul className="space-y-4 text-[#4a4a4a] text-sm font-semibold">
              <li><a href="#" className="hover:text-[#8f7cff] transition-colors duration-300">Asosiy ekran</a></li>
              <li><a href="#" className="hover:text-[#8f7cff] transition-colors duration-300">Barcha do'konlar</a></li>
              <li><a href="#" className="hover:text-[#8f7cff] transition-colors duration-300">Maxsus sovg'alar</a></li>
              <li><a href="#" className="hover:text-[#8f7cff] transition-colors duration-300">Mobil ilova</a></li>
            </ul>
          </div>

          {/* 3. Huquqiy ma'lumotlar */}
          <div>
            <h4 className="text-[#2d2d2d] font-black mb-6 uppercase tracking-widest text-xs">Huquqiy</h4>
            <ul className="space-y-4 text-[#4a4a4a] text-sm font-semibold">
              <li><a href="#" className="hover:text-[#8f7cff] transition-colors duration-300">Foydalanish shartlari</a></li>
              <li><a href="#" className="hover:text-[#8f7cff] transition-colors duration-300">Maxfiylik siyosati</a></li>
              <li><a href="#" className="hover:text-[#8f7cff] transition-colors duration-300">Ommaviy oferta</a></li>
              <li><a href="#" className="hover:text-[#8f7cff] transition-colors duration-300">Savol va Javoblar</a></li>
            </ul>
          </div>

          {/* 4. Ijtimoiy tarmoqlar va Ikonkalar */}
          <div>
            <h4 className="text-[#2d2d2d] font-black mb-6 uppercase tracking-widest text-xs">Bizga qo'shiling</h4>
            <div className="flex gap-4">
              
              {/* Telegram (O'zgartirildi) */}
              <a 
                href="https://t.me/toordalievni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/30 border border-white/40 flex items-center justify-center text-[#2d2d2d] hover:bg-[#8f7cff] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2l-2 20-7-4-4 4v-5l11-9-13 11-5-2z"></path></svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/kitobchi_market/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/30 border border-white/40 flex items-center justify-center text-[#2d2d2d] hover:bg-[#8f7cff] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              
              {/* Facebook */}
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/30 border border-white/40 flex items-center justify-center text-[#2d2d2d] hover:bg-[#8f7cff] hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

        </div>

        {/* Eng pastki qism (Copyright) */}
        <div className="pt-8 border-t border-white/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7a7a7a] text-[11px] font-black tracking-[0.2em] uppercase">
            © 2026 KITOBCHI • Barcha huquqlar himoyalangan.
          </p>
          <div className="text-[#7a7a7a] text-[11px] font-black tracking-[0.2em] uppercase">
            Made with ❤️ in Uzbekistan
          </div>
        </div>
      </div>
    </footer>
  );
}