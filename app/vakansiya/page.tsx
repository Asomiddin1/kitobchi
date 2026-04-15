import React from 'react';
import Link from 'next/link';

// Haqiqiy ish o'rinlari ma'lumotlari (Kelajakda buni API dan olasiz)
const jobs = [
  {
    id: 1,
    title: "Frontend Dasturchi (React/Next.js)",
    department: "IT va Dasturlash",
    type: "To'liq stavka",
    location: "Toshkent / Masofaviy",
    experience: "Middle / Senior",
    isHot: true,
  },
  {
    id: 2,
    title: "SMM Mutaxassisi",
    department: "Marketing",
    type: "To'liq stavka",
    location: "Toshkent, Ofis",
    experience: "Junior / Middle",
    isHot: false,
  },
  {
    id: 3,
    title: "Kontent Menejer (Kitoblar bo'yicha)",
    department: "Kontent va Tahririyat",
    type: "Moslashuvchan",
    location: "Masofaviy",
    experience: "Tajriba talab etilmaydi",
    isHot: false,
  },
  {
    id: 4,
    title: "Call-markaz operatori",
    department: "Mijozlarni qo'llab-quvvatlash",
    type: "Smenali",
    location: "Toshkent, Ofis",
    experience: "Junior",
    isHot: false,
  }
];

// Kompaniya afzalliklari
const perks = [
  {
    title: "Zamonaviy Ofis",
    description: "Toshkent markazida barcha qulayliklarga ega, shinam va kreativ ofis.",
    icon: "🏢"
  },
  {
    title: "Cheksiz Kitoblar",
    description: "Xodimlarimiz uchun platformamizdagi barcha kitoblarni o'qish bepul.",
    icon: "📚"
  },
  {
    title: "Karyera O'sishi",
    description: "Malaka oshirish kurslari va kuchli mutaxassislardan mentorlik.",
    icon: "🚀"
  },
  {
    title: "Ahil Jamoa",
    description: "O'z ishining ustalari va kitobsevarlardan iborat ajoyib jamoa.",
    icon: "🤝"
  }
];

export default function VakansiyaPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] pt-24 pb-20 selection:bg-black selection:text-white">
      
      {/* 1. Hero (Bosh qism) */}
      <section className="max-w-4xl mx-auto px-6 text-center mb-24">
        <h1 className="text-4xl md:text-6xl font-black text-[#111] tracking-tight mb-6">
          Kitoblar dunyosini <br className="hidden md:block"/> biz bilan birga quring
        </h1>
        <p className="text-lg text-[#666] leading-relaxed max-w-2xl mx-auto">
          Kitobchi — shunchaki do'kon emas, bu madaniyat. Biz odamlarga bilim ulashishni yaxshi ko'radigan, o'z ustida ishlashdan to'xtamaydigan iste'dodlarni qidiryapmiz.
        </p>
      </section>

      {/* 2. Nega biz? (Afzalliklar) */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="text-2xl font-bold text-[#111] mb-10 text-center">Nega aynan "Kitobchi"?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-4xl mb-4">{perk.icon}</div>
              <h3 className="text-lg font-bold text-[#111] mb-2">{perk.title}</h3>
              <p className="text-sm text-[#666] leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Ochiq Vakansiyalar ro'yxati */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-black text-[#111] mb-2">Ochiq vakansiyalar</h2>
            <p className="text-[#666]">Hozirda {jobs.length} ta bo'sh ish o'rni mavjud</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="group bg-white border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-black transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
            >
              {/* Vakansiya ma'lumotlari */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#666]">
                    {job.department}
                  </span>
                  {job.isHot && (
                    <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Shoshilinch
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-[#111] mb-3 group-hover:text-[#8f7cff] transition-colors">
                  {job.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#666]">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    {job.type}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4H9z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path></svg>
                    {job.experience}
                  </div>
                </div>
              </div>

              {/* Apply (Topshirish) tugmasi */}
              <div>
                <button className="w-full md:w-auto px-6 py-3 bg-[#111] text-white text-sm font-semibold rounded-xl hover:bg-[#8f7cff] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  Topshirish
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Hech narsa topolmaganlar uchun */}
        <div className="mt-12 bg-white border border-gray-200 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-[#111] mb-3">O'zingizga mos vakansiya topmadingizmi?</h3>
          <p className="text-[#666] mb-6 max-w-lg mx-auto text-sm">
            Biz doim iqtidorli kadrlarni qidiramiz. Rezyumengizni bizga yuboring, yangi bo'sh ish o'rinlari ochilishi bilan siz bilan bog'lanamiz.
          </p>
          <a href="mailto:hr@kitobchi.uz" className="inline-flex font-bold text-[#111] border-b-2 border-[#111] hover:text-[#8f7cff] hover:border-[#8f7cff] transition-colors pb-1">
            hr@kitobchi.uz ga rezyume yuborish
          </a>
        </div>
      </section>

    </main>
  );
}