"use client"

import Image from "next/image"
import Link from "next/link"
import LogoWhite from '../images/logo-white.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#111] text-white overflow-hidden flex flex-col border-t border-[#333]">
      <div className="pt-10 px-6 flex flex-col">
        <div className="max-w-[1200px] w-full mx-auto flex justify-between flex-wrap gap-10 relative z-10">
          
          {/* Logotip va matn */}
          <div className="flex flex-col">
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
            <ul className="flex flex-col gap-[10px]">
              <li>
                <a href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Telegram</a>
              </li>
              <li>
                <a href="https://www.instagram.com/kitobchi_market/" target="_blank" rel="noopener noreferrer" className="text-[#aaa] transition-colors duration-200 hover:text-white">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Facebook</a>
              </li>
            </ul>
          </div>
          
          {/* Ma'lumotlar */}
          <div>
            <h4 className="text-white mb-[15px] font-bold">Ma'lumotlar</h4>
            <ul className="flex flex-col gap-[10px]">
              <li>
                <Link href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Maxfiylik siyosati</Link>
              </li>
              <li>
                <Link href="#" className="text-[#aaa] transition-colors duration-200 hover:text-white">Foydalanish shartlari</Link>
              </li>
              <li>
                <Link href="/vakansiya" className="text-[#aaa] transition-colors duration-200 hover:text-white">Vakansiya</Link>
              </li>
              <li className="text-[#aaa]">
                Aloqa: +998 90 123 45 67
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright qismi */}
        <div className="text-center text-[#666] mt-[60px] text-[0.9rem] relative z-10">
          © {currentYear} Kitobchi. Barcha huquqlar himoyalangan.
        </div>

        {/* KATTA FON MATNI */}
        <div className="w-full flex justify-center mb-[-60px] pointer-events-none select-none px-[4%]">
          <h1 className="text-[24vw] font-extrabold text-white leading-[0.75] m-0 tracking-[-0.04em] whitespace-nowrap translate-y-[12%] opacity-100">
            Kitobchi
          </h1>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer