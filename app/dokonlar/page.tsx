"use client";

import React from 'react';
import { motion } from 'framer-motion';

const stores = [
  {
    id: 1,
    name: "Markaziy Kitob Olami",
    address: "Toshkent, Amir Temur ko'chasi, 12-uy",
    workTime: "09:00 - 21:00",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=1200",
    tags: ["Katta tanlov", "Coffee Shop", "WiFi"]
  },
  {
    id: 2,
    name: "Chilonzor Filiali",
    address: "Qatortol ko'chasi, 25-uy",
    workTime: "10:00 - 22:00",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=1200",
    tags: ["Bolalar bo'limi", "O'quv zali"]
  },
  {
    id: 3,
    name: "Yunusobod Branch",
    address: "Mega Planet yaqinida",
    workTime: "09:00 - 20:00",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=1200",
    tags: ["Eski kitoblar", "Tinch hudud"]
  }
];

export default function DokonlarPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-neutral-900 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative h-[40vh] flex flex-col items-center justify-center pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[12vw] font-black uppercase leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-800 to-neutral-400"
        >
          DO'KONLAR
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-sm md:text-lg font-bold tracking-[0.3em] uppercase text-neutral-500 mt-2"
        >
          Sizga eng yaqin manzillar
        </motion.p>
      </section>

      {/* 2. Grid - 2 qator (2 ustun) ko'rinishi */}
      <section className="max-w-[1400px] mx-auto px-6 pb-40">
        {/* grid-cols-1 (mobil) va md:grid-cols-2 (kompyuter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              // Balandlikni 500px ga mosladik, responsive qilish uchun
              className="group relative w-full h-[500px] md:h-[550px] rounded-[40px] overflow-hidden shadow-2xl bg-white border border-black/5"
            >
              {/* Background Image */}
              <motion.div 
                className="absolute inset-0 z-0"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <img 
                  src={store.image} 
                  alt={store.name} 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Glassmorphism Content Box */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-6 md:p-8 rounded-[30px] bg-white/80 backdrop-blur-xl border border-white flex flex-col justify-between shadow-lg">
                
                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {store.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600 text-[9px] font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-neutral-900 mb-1">
                    {store.name}
                  </h2>
                  <p className="text-sm md:text-base text-neutral-600 font-medium line-clamp-1">
                    {store.address}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Ish vaqti</p>
                    <p className="text-lg font-black text-neutral-900">{store.workTime}</p>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#000", color: "#fff" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-neutral-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest transition-colors shadow-md"
                  >
                    Xaritada
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}