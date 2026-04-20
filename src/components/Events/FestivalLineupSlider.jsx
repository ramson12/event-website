import { useState, useEffect } from "react";
import artists from "../../data/artists";
import { motion, AnimatePresence } from "framer-motion";
import AccordionItem from "./AccordionItem";

export default function FestivalLineupSlider() {

  const [index, setIndex] = useState(0);
  const [openSection, setOpenSection] = useState("bio");

  const artist = artists[index];

  const next = () => setIndex((index + 1) % artists.length);
  const prev = () => setIndex((index - 1 + artists.length) % artists.length);

  useEffect(() => {
    setOpenSection("bio");
  }, [index]);

  return (
    <section className="py-24 px-4 md:px-0">

      {/* TITLE */}
      <h2 className="text-center text-3xl font-bold mb-16">
        Festival{" "}
        <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
          Lineup
        </span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">

        {/* LEFT (IMAGE) */}
        <div className="w-full md:w-[600px]">

          <AnimatePresence mode="wait">
            <motion.img
              key={artist.image}
              src={artist.image}
              alt={artist.name}
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.45 }}
              className="
                w-full h-[320px] md:h-[450px]
                object-cover rounded-xl
                border border-white/5
                shadow-lg
              "
            />
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="flex items-center justify-center gap-6 mt-6">

            {/* LEFT */}
            <button
              onClick={prev}
              className="
                w-10 h-10 rounded-full
                border border-[#ff9a44]/40
                flex items-center justify-center

                hover:bg-gradient-to-r hover:from-[#ff9a44] hover:to-[#ff6a00]
                hover:text-black
                transition-all duration-300
              "
            >
              ‹
            </button>

            {/* PROGRESS BAR */}
            <div className="w-40 h-[3px] bg-zinc-700 relative rounded-full overflow-hidden">

              <div
                className="
                  absolute h-full
                  bg-gradient-to-r from-[#ff9a44] to-[#ff6a00]
                  transition-all duration-500
                "
                style={{
                  width: `${((index + 1) / artists.length) * 100}%`
                }}
              />

            </div>

            {/* RIGHT */}
            <button
              onClick={next}
              className="
                w-10 h-10 rounded-full
                border border-[#ff9a44]/40
                flex items-center justify-center

                hover:bg-gradient-to-r hover:from-[#ff9a44] hover:to-[#ff6a00]
                hover:text-black
                transition-all duration-300
              "
            >
              ›
            </button>

          </div>

        </div>

        {/* RIGHT (DETAILS) */}
        <AnimatePresence mode="wait">

          <motion.div
            key={artist.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >

            {/* ARTIST NAME */}
            <h3 className="text-xl font-semibold mb-4">
              {artist.name}
            </h3>

            {/* META */}
            <p className="text-gray-400 text-sm">Genre: {artist.genre}</p>
            <p className="text-gray-400 text-sm">Origin: {artist.origin}</p>

            <p className="text-gray-400 text-sm">
              Instagram:{" "}
              <a
                href={`https://instagram.com/${artist.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff9a44] hover:underline"
              >
                @{artist.instagram}
              </a>
            </p>

            <p className="text-gray-400 text-sm">
              YouTube:{" "}
              <a
                href={`https://youtube.com/@${artist.youtube}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ff6a00] hover:underline"
              >
                {artist.youtube ? `@${artist.youtube}` : ""}
              </a>
            </p>

            <p className="text-gray-400 text-sm mb-6">
              Lead Singer: {artist.leadSinger}
            </p>

            {/* ACCORDION */}
            <div className="space-y-6 w-full max-w-lg">

              <AccordionItem
                title="Bio & Contributions"
                isOpen={openSection === "bio"}
                onClick={() => setOpenSection("bio")}
              >
                <p className="whitespace-pre-line">
                  {artist.bio}
                </p>
              </AccordionItem>

              <AccordionItem
                title="Key Achievements & Awards"
                isOpen={openSection === "awards"}
                onClick={() => setOpenSection("awards")}
              >
                <p className="whitespace-pre-line">
                  {artist.awards}
                </p>
              </AccordionItem>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}