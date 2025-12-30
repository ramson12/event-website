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
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          We Create <span className="text-pink-500">Unforgettable</span> Events
        </h1>

        <p className="mt-6 text-gray-300 text-lg">
          Music Concerts · EDM Festivals · Weddings · Private Parties
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#events"
            className="px-8 py-3 bg-pink-600 rounded-full hover:bg-pink-700 transition"
          >
            Upcoming Events
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/40 rounded-full hover:bg-white hover:text-black transition"
          >
            Book Your Event
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
