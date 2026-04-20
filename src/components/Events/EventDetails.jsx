import { motion } from "framer-motion";
import FestivalLineupSlider from "./FestivalLineupSlider";
import { useEffect } from "react";

export default function EventDetails() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="bg-black text-white relative overflow-hidden">

      {/* CLEAN GLOW BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] 
        bg-gradient-to-b from-[#ff9a44]/20 via-[#ff6a00]/10 to-transparent blur-[180px]" />
      </div>

      {/* HERO */}
      <section className="relative h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden">

        {/* BACKGROUND */}
        <img
          src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

        {/* CONTENT (FIXED - RUNS ONCE) */}
        <motion.div
          className="relative z-10 max-w-5xl px-6"
          initial="hidden"
          animate="visible"   // ✅ runs once, not on scroll
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >

          {/* TITLE */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold tracking-wide leading-tight"
          >
            <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
              FUSIONFEST 2026
            </span>{" "}
            <span className="text-white/80">— UK TOUR</span>
          </motion.h1>

          {/* LOCATIONS */}
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-400 text-sm tracking-widest uppercase"
          >
            North London | Manchester | Leicester | Swindon | West London
          </motion.p>

          {/* DATES (WITH LINES ✔) */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12, delayChildren: 0.3 }
              }
            }}
            className="flex justify-center items-center gap-10 mt-10 text-sm flex-wrap"
          >

            {[
              { city: "North London", date: "12 Jul 2026" },
              { city: "Leicester", date: "01 Aug 2026" },
              { city: "Swindon", date: "24 Jul 2026" },
              { city: "Manchester", date: "18 Jul 2026" },
              { city: "West London", date: "02 Aug 2026" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-10">

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <p className="text-gray-500 uppercase text-xs tracking-wider">
                    {item.city}
                  </p>
                  <p className="text-white font-semibold drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]">
                    {item.date}
                  </p>
                </motion.div>

                {i !== 4 && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scaleY: 0 },
                      visible: { opacity: 1, scaleY: 1 }
                    }}
                    className="h-10 w-px bg-gradient-to-b from-white/20 to-transparent origin-top"
                  />
                )}

              </div>
            ))}

          </motion.div>

          {/* TAGLINE */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 0.6 }}
            className="mt-10 text-gray-200 text-lg tracking-wide drop-shadow-[0_0_8px_rgba(255,120,0,0.2)]"
          >
            Bringing Communities Together Through Music, Food & Culture
          </motion.p>

        </motion.div>
      </section>

      {/* ABOUT (FIXED: runs once) */}
      <section className="py-24 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}   // ✅ FIX
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">
            About <span className="text-[#ff9a44]">FusionFest</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            FusionFest is a multi-city UK music festival celebrating Indian and global sounds.
          </p>

          <p className="mt-6 text-gray-300">
            Across London, Manchester, Leicester and Swindon — we unite communities through music.
          </p>
        </motion.div>
      </section>

      {/* LINEUP */}
      <FestivalLineupSlider />

      {/* STATEMENT */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Festival <span className="text-[#ff9a44]">Statement</span>
          </h2>

          <p className="text-gray-300 leading-relaxed">
            A multicultural, high-energy festival experience across the UK.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">
          Join the{" "}
          <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
            FusionFest
          </span>{" "}
          Movement
        </h2>

        <button className="
          mt-8 px-8 py-3 rounded-full
          bg-gradient-to-r from-[#ff9a44] to-[#ff6a00]
          shadow-lg shadow-orange-500/30
          hover:scale-105 hover:shadow-orange-500/50
          transition-all duration-300
        ">
          Become a Sponsor
        </button>
      </section>

    </section>
  );
}