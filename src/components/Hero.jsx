import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black text-white"
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30')"
        }}
      />

      {/* DARK OVERLAYS */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/70 to-black" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase leading-tight">
          We Create{" "}
          <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
            Unforgettable
          </span>{" "}
          Moments
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Music Concerts · Cultural Events · Weddings · Private Parties
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* PRIMARY BUTTON */}
          <a
            href="#events"
            className="px-8 py-3 rounded-full 
            bg-gradient-to-r from-[#ff9a44] to-[#ff6a00]
            hover:scale-105 hover:shadow-orange-500/50
            transition-all duration-300 "
          >
            Upcoming Events
          </a>

          {/* SECONDARY BUTTON */}
          <a
            href="#contact"
            className="px-8 py-3 border border-white/30 rounded-full 
            backdrop-blur-md
            hover:bg-white hover:text-black 
            transition-all duration-300"
          >
            Book Your Event
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}