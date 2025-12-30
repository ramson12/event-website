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
    
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="
        group
        bg-zinc-900
        rounded-xl
        p-8
        text-white
        shadow-lg
        transition

        transition-all
        
        transition-all duration-300

        hover:border-transparent
        hover:ring-0
        hover:shadow-[0_0_28px_rgba(236,72,153,0.35)]
      "
    >
      {/* ICON */}
      <div className="mb-6">
        <div className="
          w-12 h-12
          rounded-lg
          bg-zinc-800
          flex items-center justify-center
          text-pink-500
          group-hover:bg-pink-500
          group-hover:text-black
          transition
        ">
          {Icon && <Icon size={22} />}
        </div>
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-3">
        {service.title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-sm text-gray-400 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
