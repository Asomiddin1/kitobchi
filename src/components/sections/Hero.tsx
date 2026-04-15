import AppStoreButton from "../AppStoreBtn";
import PlayStoreButton from "../PlayStoreButton";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20 relative">
      <div className="reveal-item max-w-4xl pt-20 z-10">
        
        {/* Yangilangan Sarlavha */}
        <h1 className="text-6xl md:text-[100px] font-black leading-[0.9] tracking-tighter uppercase mb-8 drop-shadow-2xl">
          <span className="text-[#2d2d2d] text-3xl md:text-5xl block mb-2 tracking-normal capitalize">
            O'zbekistondagi
          </span>
          <span className="text-[#2d2d2d]">Kitob do'konlari</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f7cff] via-[#735cc9] to-[#a67486]">
            Bir ilovada.
          </span>
        </h1>

         <div className="flex gap-4 pt-3 mt-2">
            <AppStoreButton dark />
            <PlayStoreButton dark />
          </div>

        
      </div>
    </section>
  );
}