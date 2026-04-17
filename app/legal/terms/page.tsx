

import Link from "next/link";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] text-[#2d2d2d] py-20 px-6 md:px-16 lg:px-32 xl:px-48 font-sans ">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 mt-20">
        
        {/* Sarlavha qismi */}
        <div className="mb-12 border-b border-gray-100 pb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Foydalanish Shartlari
          </h1>
          <p className="text-gray-500 mb-2">
            Kitobchi mobil ilovasi va platformasidan foydalanish qoidalari
          </p>
          <div className="inline-flex items-center gap-2 text-sm font-medium text-[#8f7cff] bg-[#8f7cff]/10 px-4 py-2 rounded-full">
            <span>Oxirgi yangilanish: 17.04.2026</span>
          </div>
          <p className="text-sm text-gray-400 mt-4 font-semibold uppercase tracking-widest">
            Ommaviy Oferta "Kitobchi" MChJ
          </p>
        </div>

        {/* Kontent qismi */}
        <div className="space-y-10 text-[15px] leading-relaxed text-gray-600">
          
          {/* 1-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">1.</span> Umumiy qoidalar
            </h2>
            <div className="space-y-3 pl-6">
              <p><strong>1.1.</strong> Ushbu Foydalanish shartlari (keyingi o'rinlarda — «Shartnoma» yoki «Oferta») <strong>"Kitobchi" MChJ</strong> (STIR: [sizning STIR raqamingiz]) (keyingi o'rinlarda — «Platforma Egasi», «Kompaniya», «biz») tomonidan jismoniy va yuridik shaxslarga (keyingi o'rinlarda — «Foydalanuvchi», «siz») o'z xizmatlarini ko'rsatish bo'yicha shartnoma tuzish taklifidir.</p>
              <p><strong>1.2.</strong> Ushbu Oferta O'zbekiston Respublikasi Fuqarolik kodeksining 366-moddasiga muvofiq ommaviy oferta hisoblanadi va cheklanmagan shaxslar doirasiga moljallangan.</p>
              <p><strong>1.3.</strong> Ushbu Oferta quyidagi platformalarga taalluqlidir:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-500">
                <li>Veb-sayt: <Link href="https://www.kitobchi.uz" className="text-[#8f7cff] hover:underline">www.kitobchi.uz</Link></li>
                <li>Mobil ilova: "Kitobchi" (iOS va Android)</li>
                <li>Boshqa platformalar: Kompaniya tomonidan taqdim etiladigan barcha raqamli xizmatlar</li>
              </ul>
              <p className="pt-2"><strong>1.4.</strong> Ofertaning aksepti (qabul qilish):</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-500">
                <li>Platformada ro'yxatdan o'tish;</li>
                <li>Platformadan foydalanishni boshlash;</li>
                <li>Har qanday xarid yoki obuna rasmiylashtirish;</li>
                <li>"Roziman" tugmasini bosish orqali amalga oshiriladi.</li>
              </ul>
            </div>
            
            {/* Muhim eslatma blok */}
            <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="font-bold text-red-700 mb-1">Muhim!</p>
              <p className="text-red-600 text-sm">Agar siz ushbu Foydalanish shartlariga rozi bo'lmasangiz, Platformadan foydalanmang. Platformadan foydalanishni davom ettirish ushbu Shartlarning barcha qoidalariga to'liq rozilik bildirish hisoblanadi.</p>
            </div>
          </section>

          {/* 2-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">2.</span> Atamalar va ta'riflar
            </h2>
            <div className="space-y-3 pl-6">
              <p><strong>2.1. Platforma Egasi</strong> — "Kitobchi" MChJ, O'zbekiston Respublikasi qonunchiligiga muvofiq ro'yxatdan o'tgan yuridik shaxs, Platformaning egasi va operatori.</p>
              <p><strong>2.2. Platforma</strong> — "Kitobchi" interaktiv onlayn platforma bo'lib, kitoblar, kanselyariya mahsulotlarini sotib olish, premium xizmatlardan foydalanish va boshqa raqamli xizmatlarni olish imkonini beradi.</p>
              <p><strong>2.3. Foydalanuvchi</strong> — Platformadan foydalanadigan, ro'yxatdan o'tgan yoki o'tmagan har qanday jismoniy yoki yuridik shaxs.</p>
              <p><strong>2.4. Kontent</strong> — Platformada mavjud bo'lgan barcha ma'lumotlar, matnlar, rasmlar, videolar, ovoz yozuvlari, dasturiy kod va boshqa materiallar.</p>
              <p><strong>2.5. Obuna</strong> — Foydalanuvchiga ma'lum muddat davomida Platformaning premium funktsiyalaridan foydalanish huquqini beruvchi pullik xizmat.</p>
              <p><strong>2.6. Akkaunt</strong> — Foydalanuvchining shaxsiy kabineti bo'lib, ro'yxatdan o'tish orqali yaratiladi va login hamda parol bilan himoyalangan.</p>
            </div>
          </section>

          {/* 3-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">3.</span> Shartnomaning predmeti
            </h2>
            <div className="space-y-3 pl-6">
              <p><strong>3.1.</strong> Ushbu Shartnoma bo'yicha Platforma Egasi Foydalanuvchiga quyidagi asosiy xizmatlarni ko'rsatadi:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-500">
                <li>Kitoblar va kanselyariya mahsulotlarini ko'rish va xarid qilish;</li>
                <li>Premium obuna xizmatlaridan foydalanish;</li>
                <li>Bolalar uchun ta'limiy kontent (reels, chat-bot);</li>
                <li>Keshbek dasturida ishtirok etish;</li>
                <li>Shaxsiy kabinetni boshqarish va buyurtmalar tarixini ko'rish;</li>
                <li>Maxsus aksiyalar va chegirmalarda ishtirok etish;</li>
                <li>Qo'llab-quvvatlash xizmatlaridan foydalanish.</li>
              </ul>
              <p><strong>3.2.</strong> Platformada taqdim etiladigan ba'zi xizmatlar bepul, ba'zilari esa pullik asosda ko'rsatiladi. Har bir xizmatning narxi Platformada alohida ko'rsatilgan.</p>
              <p><strong>3.3.</strong> Platforma Egasi xizmatlar ro'yxatini, narxlarni va funktsiyalarni bir tomonlama tartibda o'zgartirish huquqiga ega, bunda Foydalanuvchilar oldindan xabardor qilinadi.</p>
            </div>
          </section>

          {/* 4-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">4.</span> Ro'yxatdan o'tish va akkaunt
            </h2>
            <div className="space-y-4 pl-6">
              <div>
                <p className="font-semibold text-gray-800 mb-2">4.1. Ro'yxatdan o'tish tartibi:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  <li>Telefon raqami yoki email manzilini taqdim etish;</li>
                  <li>Tasdiqlash kodini kiritish;</li>
                  <li>Shaxsiy ma'lumotlarni to'ldirish (F.I.Sh., tug'ilgan sana);</li>
                  <li>Parol o'rnatish;</li>
                  <li>Foydalanish shartlari va Maxfiylik siyosatiga rozilik berish.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">4.2. Akkaunt talablari va xavfsizligi:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  <li>Har bir Foydalanuvchi faqat BITTA akkaunt yaratishi mumkin;</li>
                  <li>Login va parolni uchinchi shaxslarga berish taqiqlanadi;</li>
                  <li>Parol murakkab bo'lishi kerak (kamida 8 belgi, harflar va raqamlar);</li>
                  <li>Akkauntda shubhali faoliyat aniqlanganda darhol parolni o'zgartirish kerak;</li>
                  <li>Akkaunt faqat shaxsiy foydalanish uchun mo'ljallangan.</li>
                </ul>
              </div>
              <p><strong>4.3.</strong> Foydalanuvchi o'z akkauntida sodir bo'ladigan barcha harakatlar uchun to'liq javobgardir.</p>
              <p><strong>4.4.</strong> Akkauntni o'chirish Ilova sozlamalarida "Akkauntni o'chirish" bo'limida amalga oshiriladi. O'chirilgan akkaunt 30 kun ichida qayta tiklanishi mumkin, keyin esa butunlay o'chiriladi.</p>
            </div>
          </section>

          {/* 5-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">5.</span> Foydalanuvchining huquq va majburiyatlari
            </h2>
            <div className="space-y-4 pl-6">
              <div>
                <p className="font-semibold text-gray-800 mb-2">5.1. Foydalanuvchining huquqlari:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  <li>Platformadan to'liq va to'sqinliksiz foydalanish;</li>
                  <li>Xizmatlar sifati haqida shikoyat qilish;</li>
                  <li>Shaxsiy ma'lumotlarini ko'rish, tuzatish va o'chirish;</li>
                  <li>Obunani istalgan vaqtda bekor qilish;</li>
                  <li>Qo'llab-quvvatlash xizmatidan yordam olish;</li>
                  <li>Aksiyalar va chegirmalarda ishtirok etish;</li>
                  <li>Maxfiylik va ma'lumotlar himoyasi kafolatini olish.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">5.2. Foydalanuvchi majburiyatlari:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  <li><strong>Haqiqiy ma'lumotlar berish:</strong> Ro'yxatdan o'tishda to'g'ri ma'lumotlar taqdim etish;</li>
                  <li><strong>Qonunlarga rioya qilish:</strong> Platformadan faqat qonuniy maqsadlarda foydalanish;</li>
                  <li><strong>Intellektual mulk:</strong> Mualliflik huquqlarini buzmaslik;</li>
                  <li><strong>Xavfsizlik:</strong> Login va parolni himoya qilish;</li>
                  <li><strong>To'lovlar:</strong> Xizmatlar uchun o'z vaqtida to'lash;</li>
                  <li><strong>Taqiqlangan harakatlar:</strong> Spam, viruslar va boshqa noqonuniy faoliyat bilan shug'ullanmaslik.</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl mt-2 border border-gray-200">
                <p className="font-bold text-gray-800 mb-2">5.3. Qat'iyan taqiqlanadi:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                  <li>Boshqa foydalanuvchilarning akkauntidan ruxsatsiz foydalanish;</li>
                  <li>Zararli dasturlar, viruslar yoki malware tarqatish;</li>
                  <li>Platformaning ishlashiga xalaqit beruvchi harakatlar qilish;</li>
                  <li>Yolg'on ma'lumotlar bilan soxta akkauntlar yaratish;</li>
                  <li>Kontent va mahsulotlarni noqonuniy tarqatish;</li>
                  <li>To'lov tizimini aldash urinishlari;</li>
                  <li>Platformani qayta ishlab chiqarish yoki kopyalash.</li>
                </ul>
              </div>
              <p><strong>5.4.</strong> Yuqoridagi qoidalarni buzgan taqdirda, Platforma Egasi Foydalanuvchi akkauntini ogohlantirishsiz bloklash huquqiga ega.</p>
            </div>
          </section>

          {/* 6-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">6.</span> Platforma Egasining huquq va majburiyatlari
            </h2>
            <div className="space-y-4 pl-6">
              <div>
                <p className="font-semibold text-gray-800 mb-2">6.1. Platforma Egasining huquqlari:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  <li>Platformani istalgan vaqtda yangilash, o'zgartirish yoki yaxshilash;</li>
                  <li>Xizmatlar ro'yxati va narxlarni bir tomonlama o'zgartirish (xabardor qilgan holda);</li>
                  <li>Qoidabuzar foydalanuvchilarni ogohlantirish yoki bloklash;</li>
                  <li>Kontentni moderatsiya qilish va nomaqbul materiallarni o'chirish;</li>
                  <li>Texnik ishlar olib borishda xizmatlarni to'xtatib turish;</li>
                  <li>Shubhali tranzaksiyalarni tekshirish va to'xtatib turish.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-800 mb-2">6.2. Platforma Egasining majburiyatlari:</p>
                <ul className="list-disc pl-5 space-y-1 text-gray-500">
                  <li>Platformaning barqaror va uzluksiz ishlashini ta'minlash;</li>
                  <li>Foydalanuvchi ma'lumotlarini himoya qilish va maxfiyligini saqlash;</li>
                  <li>Murojaatlarga 24-48 soat ichida javob berish;</li>
                  <li>To'lovlarni xavfsiz qayta ishlash;</li>
                  <li>Sifatli xizmat, mahsulot va texnik yordam taqdim etish;</li>
                  <li>Muhim o'zgarishlar haqida xabardor qilish.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 7-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">7.</span> Kontentdan foydalanish qoidalari
            </h2>
            <div className="space-y-3 pl-6">
              <p><strong>7.1.</strong> Platformadagi barcha kontent (matnlar, rasmlar, videolar, audio, dizayn, dasturiy kod) Platforma Egasi yoki huquq egalari tomonidan himoyalangan intellektual mulk hisoblanadi.</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-500">
                <li>Kontent faqat shaxsiy, tijorat bo'lmagan maqsadlarda foydalanish uchun beriladi;</li>
                <li>Kontentni ko'chirish, qayta nashr etish, sotish yoki tarqatish <strong>TAQIQLANADI</strong>;</li>
                <li>Kontentni o'zgartirish, tarjima qilish ruxsat etilmaydi;</li>
                <li>Materiallarni boshqa veb-sayt yoki ilovalarda joylashtirish mumkin emas;</li>
                <li>Mualliflik huquqini buzish qonuniy javobgarlikka olib keladi.</li>
              </ul>
              <p><strong>7.2.</strong> Foydalanuvchi tomonidan yuklangan kontent (sharhlar) Foydalanuvchiga tegishli bo'lib, u bu kontentni joylashtirish uchun barcha huquqlarga ega ekanligini kafolatlaydi.</p>
              <p><strong>7.3.</strong> Foydalanuvchi o'z kontentini joylashtirish orqali Platforma Egasiga ushbu kontentdan platformada foydalanish uchun cheklanmagan litsenziya beradi.</p>
            </div>
          </section>

          {/* 8-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">8.</span> To'lov tartibi
            </h2>
            <div className="space-y-3 pl-6">
              <p><strong>8.1.</strong> Platformadagi ba'zi xizmatlar va mahsulotlar pullik. Narxlar O'zbekiston Respublikasining milliy valyutasida (so'mda) ko'rsatiladi.</p>
              <p><strong>8.2.</strong> To'lovlar quyidagi usullar orqali amalga oshiriladi:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-500">
                <li>Bank kartalari orqali (Humo, Uzcard, Visa, MasterCard);</li>
                <li>Payme to'lov tizimi orqali;</li>
                <li>Boshqa davlat tomonidan ruxsat etilgan to'lov tizimlari.</li>
              </ul>
              <p><strong>8.3.</strong> Barcha to'lovlar xavfsiz PCI DSS standartlariga muvofiq qayta ishlanadi.</p>
              <p><strong>8.4.</strong> Premium obuna uchun avtomatik to'lov shartlari alohida Premium Obuna Ofertasida belgilangan.</p>
            </div>
          </section>

          {/* 9-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">9.</span> Qaytarish siyosati
            </h2>
            <div className="space-y-3 pl-6">
              <p><strong>9.1.</strong> Raqamli xizmatlar va elektron mahsulotlar uchun qaytarish siyosati Premium Obuna Ofertasida bayon etilgan.</p>
              <p><strong>9.2.</strong> Jismoniy mahsulotlar (kitoblar, kanselyariya) uchun:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-500">
                <li>Mahsulot yetkazib berilganidan keyin 14 kun ichida qaytarish mumkin;</li>
                <li>Mahsulot asl holatida va qadoqda bo'lishi kerak;</li>
                <li>Chek yoki to'lov tasdiqnomasi bo'lishi shart;</li>
                <li>Yetkazib berish xarajatlari Foydalanuvchi tomonidan qoplanadi.</li>
              </ul>
              <p><strong>9.3.</strong> Qaytarish uchun <a href="mailto:support@kitobchi.uz" className="text-[#8f7cff] hover:underline">support@kitobchi.uz</a> manziliga murojaat qiling.</p>
            </div>
          </section>

          {/* 10-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">10.</span> Javobgarlikni cheklash
            </h2>
            <div className="space-y-3 pl-6">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mb-4">
                <p className="font-bold text-yellow-800 mb-1">Muhim ogohlantirish:</p>
                <p className="text-yellow-700 text-sm">Platformadagi xizmatlar "qanday bo'lsa, shunday" tamoyili asosida taqdim etiladi. Biz maksimal sifat va xavfsizlikni ta'minlashga intilamiz, lekin texnik nosozliklar yoki nazoratimizdan tashqarida bo'lgan holatlar uchun javobgar emasmiz.</p>
              </div>
              <p><strong>10.1.</strong> Platforma Egasi quyidagilar uchun javobgar emas:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2 text-gray-500">
                <li>Internet aloqasining yo'qligi yoki sifatsizligi;</li>
                <li>Foydalanuvchi qurilmasining texnik muammolari;</li>
                <li>Uchinchi tomon xizmatlari tomonidan kelib chiqqan muammolar;</li>
                <li>Akkaunt ma'lumotlarini boshqalarga berish oqibatidagi zararlar;</li>
                <li>Fors-major holatlari (tabiiy ofatlar, qonunchilik o'zgarishlari).</li>
              </ul>
              <p><strong>10.2.</strong> Platforma Egasining maksimal javobgarligi Foydalanuvchi oxirgi 3 oy ichida to'lagan summa bilan cheklangan.</p>
            </div>
          </section>

          {/* 11-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">11.</span> Nizolarni hal qilish
            </h2>
            <div className="space-y-3 pl-6">
              <p><strong>11.1.</strong> Ushbu Shartnomadan kelib chiqadigan barcha nizolar Tomonlar o'rtasida muzokaralar yo'li bilan hal qilinadi.</p>
              <p><strong>11.2.</strong> Pretenziya tartibida hal qilish majburiy hisoblanadi. Pretenziya yozma shaklda <a href="mailto:support@kitobchi.uz" className="text-[#8f7cff] hover:underline">support@kitobchi.uz</a> manziliga yuboriladi va 10 ish kuni ichida ko'rib chiqiladi.</p>
              <p><strong>11.3.</strong> Kelishmovchilikni muzokaralar yo'li bilan hal qilib bo'lmagan taqdirda, nizo O'zbekiston Respublikasi qonunchiligiga muvofiq sudga topshiriladi.</p>
            </div>
          </section>

          {/* 12-bo'lim */}
          <section>
            <h2 className="text-xl font-bold text-[#2d2d2d] mb-4 flex items-center gap-2">
              <span className="text-[#8f7cff]">12.</span> Yakuniy qoidalar
            </h2>
            <div className="space-y-3 pl-6">
              <p><strong>12.1.</strong> Ushbu Shartnoma noma'lum muddatga tuziladi va Tomonlardan biri uni bekor qilguncha amal qiladi.</p>
              <p><strong>12.2.</strong> Platforma Egasi Shartnoma shartlarini bir tomonlama o'zgartirish huquqiga ega. O'zgarishlar Platformada e'lon qilingan va Foydalanuvchilarga bildirishnoma yuborilganidan keyin 7 kun o'tgach kuchga kiradi.</p>
            </div>
          </section>

        </div>
        
        {/* Footer qismi */}
        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} "Kitobchi" MChJ. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;