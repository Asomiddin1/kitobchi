"use client"

import Image from "next/image"
import AppStoreButton from "../AppStoreBtn"
import PlayStoreButton from "../PlayStoreButton"
import LogoWhite from './logo-white.png'

const FooterCTA = () => {
  return (
    <footer className="bg-[#111] text-white pt-[100px] text-center relative overflow-hidden flex flex-col">
      
      {/* Yuqori CTA qismi */}
      <div className="max-w-[800px] mx-auto px-6 pb-[80px]">
        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-black leading-[1.1] mb-6">
          O'z kutubxonangizni<br />hoziroq yarating!
        </h2>
        <p className="text-[#aaa] text-[1.1rem] mb-10">
          Kitobchi ilovasini bepul yuklab oling va kitoblar olamiga sho'ng'ing!
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <AppStoreButton />
          <PlayStoreButton />
        </div>
      </div>

      {/* Asosiy Footer qismi */}
      <div className="border-t border-[#333] pt-10 px-6 text-left flex flex-col">
        <div className="max-w-[1200px] w-full mx-auto flex justify-between flex-wrap gap-10 relative z-10">
          
          {/* Logotip va matn */}
          <div>
            <div className="mb-[15px] flex items-center">
              <Image src={LogoWhite} alt="Kitobchi Logo" width={45} height={45} />
            </div>
            <p className="text-[#aaa] max-w-[300px]">
              O'zbekistondagi barcha kitob do'konlari bitta ilovada.
            </p>
          </div>
          
          {/* Ijtimoiy tarmoqlar */}
          <div>
            <h4 className="text-white mb-[15px] font-bold">Ijtimoiy tarmoqlar</h4>
            <ul>
              <li className="mb-[10px]">
                <a href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Telegram</a>
              </li>
              <li className="mb-[10px]">
                <a href="https://www.instagram.com/kitobchi_market/" target="_blank" rel="noopener noreferrer" className="text-[#aaa] transition-colors duration-200 hover:text-white">Instagram</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Facebook</a>
              </li>
            </ul>
          </div>
          
          {/* Ma'lumotlar */}
          <div>
            <h4 className="text-white mb-[15px] font-bold">Ma'lumotlar</h4>
            <ul>
              <li className="mb-[10px]">
                <a href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Maxfiylik siyosati</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Foydalanish shartlari</a>
              </li>
              <li className="mb-[10px]">
                <a href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Aloqa: +998 90 123 45 67</a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright qismi */}
        <div className="text-center text-[#666] mt-[60px] text-[0.9rem] relative z-10">
          © {new Date().getFullYear()} Kitobchi. Barcha huquqlar himoyalangan.
        </div>

        {/* --- KATTA MATN (Tailwind formatida) --- */}
        <div className="w-full flex justify-center mb-[-60px] pointer-events-none">
          <h1 className="text-[24vw] font-extrabold text-white leading-[0.75] m-0 tracking-[-0.04em] whitespace-nowrap translate-y-[12%]">
            Kitobchi
          </h1>
        </div>
        
      </div>
    </footer>
  )
}

export default FooterCTA