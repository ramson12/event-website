import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EventCard({ event }) {
  const navigate = useNavigate();

  const eventDate = new Date(event.date);
  const day = eventDate.getDate();
  const month = eventDate.toLocaleString("default", { month: "short" });
  const today = new Date();
  const isPast = eventDate < today;

  const handleClick = () => {
    if (isPast) {
      navigate(`/past-events/${event.id}`);
    } else {
      navigate(`/events/${event.id}`);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onClick={handleClick}
      className="
        group relative
        h-[360px]
        rounded-2xl overflow-hidden
        cursor-pointer
        bg-zinc-900/80 backdrop-blur-xl
        border border-white/5
        hover:shadow-[0_0_40px_rgba(255,120,0,0.25)]
        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <img
        src={event.image}
        alt={event.title}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-700
          group-hover:scale-110
        "
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* HOVER GLOW */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff9a44]/10 to-[#ff6a00]/10" />
      </div>

      {/* DATE BADGE */}
      <div className="
        absolute top-4 left-4 
        bg-black/70 backdrop-blur 
        px-3 py-1 rounded-md text-center
        border border-white/10
      ">
        <p className="text-white text-sm font-bold">{day}</p>
        <p className="text-xs text-gray-400 uppercase">{month}</p>
      </div>

      {/* CONTENT */}
      <div className="absolute bottom-0 p-5 text-white w-full">

        <h3 className="text-lg font-semibold">
          {event.title}
        </h3>

        <p className="text-sm text-gray-300 mt-1">
          {event.location} • {event.time}
        </p>

        <p className="text-xs text-gray-400 mt-2 line-clamp-1">
          🎵 {event.artists?.join(" • ")}
        </p>

        {/* CTA */}
        <p className="
          mt-4 text-sm font-medium
          bg-gradient-to-r from-[#ff9a44] to-[#ff6a00]
          bg-clip-text text-transparent
        ">
          View Event →
        </p>
      </div>

      {/* BOTTOM ACCENT LINE */}
      <div className="
        absolute bottom-0 left-0 h-[2px] w-0
        bg-gradient-to-r from-[#ff9a44] to-[#ff6a00]
        group-hover:w-full
        transition-all duration-500
      " />
    </motion.div>
  );
}