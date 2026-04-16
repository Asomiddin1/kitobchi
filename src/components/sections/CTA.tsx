"use client"

import AppStoreButton from "../AppStoreBtn"
import PlayStoreButton from "../PlayStoreButton"

const CTA = () => {
  return (
    <section className="bg-[#111] text-white pt-[100px] pb-[80px] text-center relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6">
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
    </section>
  )
}

export default CTA