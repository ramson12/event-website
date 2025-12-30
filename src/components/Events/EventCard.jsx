import { motion } from "framer-motion";
import StatusBadge from "./StatusBadge";

export default function EventCard({ event, onSelect }) {
  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString("default", { month: "short" });

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onClick={() => onSelect(event)}
      className="
        group relative
        h-[300px]
        max-w-[280px] w-full
        mx-auto
        rounded-xl overflow-hidden
        cursor-pointer
        bg-zinc-900
        transition-all
        
        transition-all duration-300

        hover:border-transparent
        hover:ring-0
        hover:shadow-[0_0_28px_rgba(236,72,153,0.35)]
      "
    >
      {/* IMAGE */}
      <img
        src={event.image}
        alt={event.title}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-105
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

      {/* DATE BADGE */}
      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur px-2.5 py-1.5 rounded-md text-center">
        <p className="text-white text-sm font-bold leading-none">{day}</p>
        <p className="text-[10px] text-gray-300 uppercase">{month}</p>
      </div>

      {/* STATUS BADGE */}
      <div className="absolute top-3 right-3">
        <StatusBadge status={event.status} />
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 w-full p-4 text-white">
        <p className="text-xs text-pink-400">
          {event.category}
        </p>

        <h3 className="text-lg font-semibold leading-snug mt-1 line-clamp-2">
          {event.title}
        </h3>

        <p className="mt-1 text-xs text-gray-300">
          {event.location} • {event.time}
        </p>

        <button
          className={`mt-3 text-sm font-medium transition
            ${
              event.status === "soldout"
                ? "text-gray-400 cursor-not-allowed"
                : "text-pink-400 hover:text-pink-300"
            }
          `}
          disabled={event.status === "soldout"}
        >
          {event.status === "soldout"
            ? "Sold Out"
            : "View Details →"}
        </button>
      </div>

      {/* SOFT INNER RING (DEPTH) */}
      <div
        className="
          pointer-events-none
          absolute inset-0 rounded-xl
          ring-1 ring-white/10
          group-hover:ring-pink-500/40
          transition
        "
      />
    </motion.div>
  );
}
