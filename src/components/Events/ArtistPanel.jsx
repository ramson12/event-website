import { motion } from "framer-motion";

export default function ArtistPanel({ artist, onClose }) {
  if (!artist) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="
          relative
          w-[380px]
          bg-zinc-900
          rounded-2xl
          p-6
          shadow-2xl
          text-white
        "
      >

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        {/* IMAGE */}
        <img
          src={artist.image}
          className="rounded-xl mb-4 h-[180px] w-full object-cover"
        />

        {/* NAME */}
        <h2 className="text-xl font-semibold">
          {artist.name}
        </h2>

        <p className="text-pink-400 text-sm">
          {artist.genre}
        </p>

        <p className="text-gray-400 text-sm">
          {artist.origin}
        </p>

        <a
          href={`https://instagram.com/${artist.instagram}`}
          target="_blank"
          className="text-pink-400 text-sm hover:text-pink-300"
        >
          @{artist.instagram}
        </a>

        {/* BIO */}
        <div className="mt-4 text-sm text-gray-300">
          <h4 className="font-semibold mb-1">Bio</h4>
          {artist.bio}
        </div>

        {/* IMPACT */}
        {artist.impact && (
          <div className="mt-4 text-sm text-gray-300">
            <h4 className="font-semibold mb-1">Cultural Impact</h4>
            {artist.impact}
          </div>
        )}

      </motion.div>

    </div>
  );
}