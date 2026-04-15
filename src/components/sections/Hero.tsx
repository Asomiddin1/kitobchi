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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f7cff] via-[#a890fe] to-[#eac7d4]">
            Bir ilovada.
          </span>
        </h1>

        {/* Glassmorphism Card va yangi matn */}
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 p-6 rounded-3xl shadow-[0_8px_32px_rgba(31,38,135,0.1)] max-w-lg transform hover:-translate-y-2 transition-transform duration-500 cursor-default">
          <p className="text-lg md:text-xl text-[black] font-medium leading-relaxed">
            Do'konlar assortimentini online ko'rib chiqing, arzon sotib oling, kitoblar bo'yicha bilim sinovlaridan o'ting, keshbeklar oling va boshqa kitobxonlar bilan fikr almashing!
          </p>
          <div className="flex gap-4 pt-3 mt-2">
            <AppStoreButton dark />
            <PlayStoreButton dark />
          </div>
        </div>
        
      </div>
    </section>
  );
}