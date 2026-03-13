import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function FeaturedEventCard({ event }) {

  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={() => navigate(`/events/${event.id}`)}
      className="
      relative
      rounded-2xl
      overflow-hidden
      h-[420px]
      cursor-pointer
      group
      "
    >

      <img
        src={event.image}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

      <div className="relative z-10 p-12 max-w-xl">

        <p className="text-pink-500 uppercase tracking-widest text-sm">
          ★ Featured Event
        </p>

        <h2 className="text-5xl font-bold mt-3">
          {event.title}
        </h2>

        <p className="mt-4 text-gray-300">
          📅 {event.date}
        </p>

        <p className="text-gray-300">
          📍 {event.location}
        </p>

        <p className="mt-4 text-gray-400">
          🎵 {event.artists.join(" • ")}
        </p>

        <button className="
          mt-6
          px-6
          py-3
          bg-pink-500
          rounded-full
          hover:bg-pink-600
          transition
        ">
          View Event →
        </button>

      </div>

    </motion.div>
  );
}