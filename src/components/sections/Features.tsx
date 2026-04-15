"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const featuresData = [
  {
    id: 1,
    title: "Qulay narxlar",
    desc: "Istalgan kitobni yoki kanselyariya maxsulotlarini topib qulay narxlarda sotib oling.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Audio kitoblar",
    desc: "Hozirda jamoamiz audio kitoblar tayyorlashni boshlagan tez orada uni sizga taqdim etamiz.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Kitobxonlar klubi",
    desc: "Ilovada kitobxonlar klubini tashkil qildik, uyerda istagancha bilim ulashishingiz yoki boshqalardan bilim olish imkoniyatiga egasiz.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Bilim sinovi",
    desc: "Kitobni o'qidingizmi yoki yo'qmi, test sinovlari orqali tekshirib boramiz.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Kitoblar reytingi",
    desc: "Siz ishlagan testlar orqali do'konlardagi kitoblarni baholaymiz va boshqalarga ham tafsiya qilamiz.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Sovg'a sertifikati",
    desc: "Istalgan qiymatdagi sertifikatni sotib olib do'stingizga sovg'a qilishingiz mumkin.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    )
  }
]

const Features = () => {
  const featuresSectionRef = useRef<HTMLDivElement>(null)
  const featuresHeadlineRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sarlavha animatsiyasi
      gsap.from(featuresHeadlineRef.current, {
        scrollTrigger: {
          trigger: featuresSectionRef.current,
          start: "top 75%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })

      // Kartochkalar animatsiyasi (ketma-ket)
      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: featuresSectionRef.current,
          start: "top 65%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      })
    }, featuresSectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <style>{`
        .features-section { padding: 120px 24px; background: #fff; position: relative; z-index: 20; }
        .features-container { max-width: 1200px; margin: 0 auto; }
        .features-headline { text-align: center; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 800; color: #111; margin-bottom: 60px; letter-spacing: -0.02em; }
        .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .feature-card { background: #fafafa; border: 1px solid #f0f0f0; border-radius: 24px; padding: 40px 30px; transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.06); background: #fff; border-color: #eaeaea; }
        .icon-wrapper { width: 64px; height: 64px; border-radius: 18px; background: #111; color: #fff; display: flex; align-items: center; justify-content: center; margin-bottom: 24px; }
        .icon-wrapper svg { width: 32px; height: 32px; }
        .feature-title { font-size: 1.3rem; font-weight: 700; color: #111; margin-bottom: 14px; line-height: 1.3; }
        .feature-desc { font-size: 0.95rem; color: #666; line-height: 1.6; }
        @media (max-width: 640px) {
          .features-section { padding: 80px 24px; }
          .feature-card { padding: 30px 24px; }
        }
      `}</style>

      <section className="features-section" ref={featuresSectionRef}>
        <div className="features-container">
          <h2 className="features-headline" ref={featuresHeadlineRef}>
            Nega aynan Kitobchi?
          </h2>
          
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div 
                key={feature.id} 
                className="feature-card"
                ref={(el) => { cardsRef.current[index] = el }}
              >
                <div className="icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features