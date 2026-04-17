

export default function Bussines() {
  return (
    <section className="min-h-screen flex items-center justify-end px-6 md:px-20 relative overflow-hidden mb-10">
      {/* Orqa fon bezaklari (orqa fon bo'sh qolmasligi uchun biroz gradient saqlab qolindi) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#8f7cff]/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#eac7d4]/20 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

      <div className="reveal-item max-w-2xl text-right z-10 w-full">
        {/* Sarlavha xuddi Stores'dagi kabi katta va uppercase qilingan */}
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-8 text-[#2d2d2d] drop-shadow-xl">
          Biz bilan <br /> 
          <span className="text-white drop-shadow-md">yuksaltiring.</span>
        </h2>

        {/* Qadamlar glassmorphism uslubida kaskad (zinapoya) shaklida o'ng tomonga terib chiqildi */}
        <div className="flex flex-col gap-5 ml-auto">
          
          {/* 1-Qadam */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 md:p-8 rounded-3xl shadow-xl ml-auto hover:bg-white/20 transition-all duration-300 w-full md:w-[75%]">
            <h3 className="text-2xl font-black text-[#2d2d2d] mb-2">1. Ilovani yuklang</h3>
            <p className="text-lg text-[black] font-semibold">
              Play Market yoki App Store'da mavjud. Ilovani o'rnating va platformamizga qo'shilish uchun ilk qadamni tashlang.
            </p>
          </div>

          {/* 2-Qadam */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-6 md:p-8 rounded-3xl shadow-xl ml-auto hover:bg-white/20 transition-all duration-300 w-full md:w-[85%]">
            <h3 className="text-2xl font-black text-[#2d2d2d] mb-2">2. Ariza yuboring</h3>
            <p className="text-lg text-[black] font-semibold">
              Biz arizangizni onlayn va tez ko'rib chiqamiz hamda shartnoma imzolashga tayyorlanamiz.
            </p>
          </div>

          {/* 3-Qadam (Klimaks - Ajralib turishi uchun dark tema saqlab qolindi, lekin formati Stores'niki kabi) */}
          <div className="backdrop-blur-lg bg-[#2d2d2d]/90 border border-[#3d3d3d] p-6 md:p-8 rounded-3xl shadow-xl ml-auto hover:bg-[#2d2d2d] transition-all duration-300 w-full md:w-[95%] group">
            <h3 className="text-2xl font-black text-white mb-2 group-hover:text-[#8f7cff] transition-colors">3. O'sishni kuzating</h3>
            <p className="text-lg text-gray-200 font-semibold">
              Marketpleysdagi do'koningizni endi osongina telefoningizda boshqaring. Savdolarni kuzatish endi sizning qo'lingizda.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}