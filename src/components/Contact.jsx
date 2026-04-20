import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-28 px-4 overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px]" />
      </div>

      <div className="relative max-w-6xl mx-auto text-white">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact{" "}
            <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            Let’s start planning something unforgettable together.
          </p>
        </motion.div>

        {/* CONTACT CARDS */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
            className="
              group p-8 rounded-2xl
              bg-zinc-900/70 backdrop-blur-xl
              border border-white/5
              text-center
              hover:shadow-[0_0_30px_rgba(255,120,0,0.25)]
              transition-all duration-300
            "
          >
            <div className="
              mx-auto mb-4 w-14 h-14 rounded-xl
              flex items-center justify-center
              bg-zinc-800 text-[#ff9a44]
              group-hover:bg-gradient-to-br 
              group-hover:from-[#ff9a44] 
              group-hover:to-[#ff6a00]
              group-hover:text-black
              transition-all duration-300
            ">
              <Phone size={26} />
            </div>

            <p className="text-xs tracking-widest text-gray-400 mb-2">
              PHONE
            </p>

            <a
              href="tel:+447886384599"
              className="text-lg font-semibold hover:text-[#ff9a44] transition"
            >
              +44 7886 384599
            </a>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="
              group p-8 rounded-2xl
              bg-zinc-900/70 backdrop-blur-xl
              border border-white/5
              text-center
              hover:shadow-[0_0_30px_rgba(255,120,0,0.25)]
              transition-all duration-300
            "
          >
            <div className="
              mx-auto mb-4 w-14 h-14 rounded-xl
              flex items-center justify-center
              bg-zinc-800 text-[#ff9a44]
              group-hover:bg-gradient-to-br 
              group-hover:from-[#ff9a44] 
              group-hover:to-[#ff6a00]
              group-hover:text-black
              transition-all duration-300
            ">
              <Mail size={26} />
            </div>

            <p className="text-xs tracking-widest text-gray-400 mb-2">
              EMAIL
            </p>

            <a
              href="mailto:Dreamteamevents@protonmail.com"
              className="text-lg font-semibold hover:text-[#ff9a44] transition"
            >
              Dreamteamevents@protonmail.com
            </a>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
            className="
              group p-8 rounded-2xl
              bg-zinc-900/70 backdrop-blur-xl
              border border-white/5
              text-center
              hover:shadow-[0_0_30px_rgba(255,120,0,0.25)]
              transition-all duration-300
            "
          >
            <div className="
              mx-auto mb-4 w-14 h-14 rounded-xl
              flex items-center justify-center
              bg-zinc-800 text-[#ff9a44]
              group-hover:bg-gradient-to-br 
              group-hover:from-[#ff9a44] 
              group-hover:to-[#ff6a00]
              group-hover:text-black
              transition-all duration-300
            ">
              <MapPin size={26} />
            </div>

            <p className="text-xs tracking-widest text-gray-400 mb-2">
              ADDRESS
            </p>

            <p className="text-sm leading-relaxed text-gray-300">
              30 Horsham Road, <br />
              Feltham, United Kingdom TW14 8LW
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}