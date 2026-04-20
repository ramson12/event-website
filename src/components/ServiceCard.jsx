import { motion } from "framer-motion";
import {
  CalendarCheck,
  GlassWater,
  PartyPopper,
  Mic2
} from "lucide-react";

const icons = {
  "Event Planning": CalendarCheck,
  "Bar Services": GlassWater,
  "Birthdays": PartyPopper,
  "Artist Management": Mic2
};

export default function ServiceCard({ service }) {
  const Icon = icons[service.title];

  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="
        group relative
        bg-zinc-900/80 backdrop-blur-xl
        rounded-2xl p-8 text-white
        border border-white/5
        shadow-lg
        overflow-hidden
        transition-all duration-300
        hover:shadow-[0_0_35px_rgba(255,120,0,0.25)]
      "
    >
      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff9a44]/10 to-[#ff6a00]/10 blur-xl" />
      </div>

      {/* ICON */}
      <div className="relative mb-6">
        <div
          className="
          w-12 h-12 rounded-xl
          bg-zinc-800
          flex items-center justify-center
          text-[#ff9a44]
          transition-all duration-300

          group-hover:bg-gradient-to-br 
          group-hover:from-[#ff9a44] 
          group-hover:to-[#ff6a00]

          group-hover:text-black
          group-hover:scale-110
        "
        >
          {Icon && <Icon size={22} />}
        </div>
      </div>

      {/* TITLE */}
      <h3 className="relative text-lg font-semibold mb-3 tracking-wide">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="relative text-sm text-gray-400 leading-relaxed">
        {service.description}
      </p>

      {/* BOTTOM LINE ACCENT */}
      <div className="
        absolute bottom-0 left-0 w-0 h-[2px]
        bg-gradient-to-r from-[#ff9a44] to-[#ff6a00]
        group-hover:w-full transition-all duration-500
      " />
    </motion.div>
  );
}