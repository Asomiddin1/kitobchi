"use client";

import React, { useState } from "react";
import Footer from "../../src/components/Footer";

const mockStores = [
  { id: 1, name: "Asaxiy Books", books: "12,000+", type: "Marketplace" },
  { id: 2, name: "Hilol Nashr", books: "5,400+", type: "Nashriyot" },
  { id: 3, name: "Azon Kitoblari", books: "8,100+", type: "Do'kon" },
  { id: 4, name: "Yangi Asr Avlodi", books: "3,200+", type: "Nashriyot" },
  { id: 5, name: "Sharq Nashriyoti", books: "6,500+", type: "Nashriyot" },
  { id: 6, name: "Akademnashr", books: "2,800+", type: "Nashriyot" },
];

export default function DokonlarPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = mockStores.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cfd9ff] via-[#d9c2f0] to-[#eac7d4] flex flex-col">
      <main className="flex-grow pt-32 pb-20 px-6 md:px-16 max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <h1 className="text-6xl font-black uppercase text-[#2d2d2d]">
            Kitob <span className="text-[#8f7cff]">Do'konlar.</span>
          </h1>
          <input 
            type="text" 
            placeholder="Qidiruv..." 
            className="w-full md:w-80 bg-white/40 backdrop-blur-md border border-white/60 rounded-full py-4 px-6 focus:outline-none focus:ring-2 focus:ring-[#8f7cff]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <div key={s.id} className="bg-white/20 backdrop-blur-xl border border-white/40 p-8 rounded-[2rem] hover:bg-white/30 transition-all">
              <div className="text-xs font-black text-[#8f7cff] mb-2">{s.type}</div>
              <h3 className="text-2xl font-black text-[#2d2d2d] mb-6">{s.name}</h3>
              <p className="text-xl font-extrabold text-[#4a4a4a]">{s.books} kitob</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}