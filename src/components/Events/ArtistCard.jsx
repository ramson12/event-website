import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

export default function ArtistCard({ artist }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="
        group relative
        rounded-xl overflow-hidden
        cursor-pointer
        bg-zinc-900
        aspect-square
      "
    >

      {/* IMAGE */}
      <img
        src={artist.image}
        alt={artist.name}
        className="
          absolute inset-0 w-full h-full object-cover
          transition-transform duration-500
          group-hover:scale-110
        "
      />

      {/* OVERLAY */}
      <div className="
        absolute inset-0
        bg-gradient-to-t from-black via-black/60 to-transparent
        opacity-80
      "/>

      {/* CONTENT */}
      <div className="
        absolute bottom-0 p-4 w-full
        translate-y-6 group-hover:translate-y-0
        transition-all duration-300
      ">

        <h3 className="text-white font-semibold text-lg">
          {artist.name}
        </h3>

        <p className="text-pink-400 text-sm">
          {artist.genre}
        </p>

        <p className="text-gray-400 text-xs">
          {artist.origin}
        </p>

        {/* INSTAGRAM */}
        <a
          href={`https://instagram.com/${artist.instagram}`}
          target="_blank"
          className="
            inline-flex items-center gap-2
            mt-3 text-xs text-pink-400
            opacity-0 group-hover:opacity-100
            transition
          "
        >
          <Instagram size={14}/>
          @{artist.instagram}
        </a>

      </div>

    </motion.div>
  );
}