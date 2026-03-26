import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-28 px-4">
      <div className="max-w-6xl mx-auto text-white">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Contact Us
          </h2>
          <p className="mt-4 text-gray-400">
            Let’s start planning something unforgettable together.
          </p>
        </motion.div>

        {/* CONTACT INFO STRIP */}
        <div className="grid gap-16 md:grid-cols-3 text-center">

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="space-y-4"
          >
            <div className="flex justify-center text-pink-500">
              <Phone size={26} />
            </div>

            <p className="text-xs tracking-widest text-gray-400">
              PHONE
            </p>

            <a
              href="tel:+15551234567"
              className="text-lg font-semibold hover:text-pink-400 transition"
            >
              +44 7886 384599
            </a>
          </motion.div>

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex justify-center text-pink-500">
              <Mail size={26} />
            </div>

            <p className="text-xs tracking-widest text-gray-400">
              EMAIL
            </p>

            <a
              href="mailto:Dreamteamevents@protonmail.com"
              className="text-lg font-semibold hover:text-pink-400 transition"
            >
              Dreamteamevents@protonmail.com
            </a>
          </motion.div>

          {/* ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="space-y-4"
          >
            <div className="flex justify-center text-pink-500">
              <MapPin size={26} />
            </div>

            <p className="text-xs tracking-widest text-gray-400">
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
