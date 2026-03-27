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
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      onClick={handleClick}
      className="
      group relative
      h-[360px]
      rounded-2xl
      overflow-hidden
      cursor-pointer
      bg-zinc-900
      border border-zinc-800
      hover:border-pink-500/40
      hover:shadow-[0_0_35px_rgba(236,72,153,0.25)]
      transition-all
      "
    >
      {/* IMAGE */}
      <img
        src={event.image}
        alt={event.title}
        className="
        absolute inset-0
        w-full h-full
        object-cover
        transition-transform duration-700
        group-hover:scale-110
        "
      />

      {/* DARK GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* DATE BADGE */}
      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur px-3 py-1 rounded-md text-center">
        <p className="text-white text-sm font-bold">{day}</p>
        <p className="text-xs text-gray-400 uppercase">{month}</p>
      </div>

      {/* CATEGORY
      <div className="absolute top-4 right-4 text-xs bg-pink-500/80 px-3 py-1 rounded-full">
        {event.category}
      </div>
       */}

      {/* CONTENT */}
      <div className="absolute bottom-0 p-5 text-white">

        <h3 className="text-lg font-semibold">
          {event.title}
        </h3>

        <p className="text-sm text-gray-300 mt-1">
          {event.location} • {event.time}
        </p>

        <p className="text-xs text-gray-400 mt-2 line-clamp-1">
          🎵 {event.artists?.join(" • ")}
        </p>

        <p className="mt-3 text-sm text-pink-400 font-medium">
          View Event →
        </p>

      </div>

      {/* PROGRESS LINE */}
      <div className="
      absolute bottom-0 left-0 h-[2px] w-0
      bg-pink-500
      group-hover:w-full
      transition-all duration-500
      "/>
    </motion.div>
  );
}