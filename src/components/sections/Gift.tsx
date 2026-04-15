

export default function Gift() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20">
      <div className="reveal-item max-w-xl z-10">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase mb-8 drop-shadow-xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8f7cff] via-[#735cc9] to-[#a67486]">
            Sovg'asi
          </span> <br /> 
          <span className="text-[#2d2d2d]">bilan.</span>
        </h2>

        <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-xl hover:bg-white/20 transition-all duration-300">
          <p className="text-xl text-[#4a4a4a] font-semibold">
            Har bir buyurtma maxsus sovg'a kabi tayyorlanadi. Kitobxonlikni oddiy jarayondan haqiqiy zavqqa aylantiring.
          </p>
        </div>
      </div>
    </section>
  );
}