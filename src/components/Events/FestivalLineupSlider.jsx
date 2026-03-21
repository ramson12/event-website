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

  
  // Reset accordion when artist changes
  useEffect(() => {
    setOpenSection("bio");
  }, [index]);

  return (
    <section className="py-20 px-4 md:px-0">

      {/* TITLE */}
      <h2 className="text-center text-3xl font-bold mb-16">
        Festival Lineup
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-20 items-start">

        {/* LEFT SIDE (ARTIST IMAGE) */}
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
              className="w-full h-[320px] md:h-[450px] object-cover bg-black rounded-xl"
            />
          </AnimatePresence>

          {/* NAVIGATION */}
          <div className="flex items-center justify-center gap-6 mt-6">

            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-pink-500 flex items-center justify-center hover:bg-pink-500 transition"
            >
              ‹
            </button>

            {/* PROGRESS BAR */}
            <div className="w-40 h-[3px] bg-zinc-700 relative">

              <div
                className="absolute h-full bg-pink-500 transition-all duration-500"
                style={{
                  width: `${((index + 1) / artists.length) * 100}%`
                }}
              />

            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-pink-500 flex items-center justify-center hover:bg-pink-500 transition"
            >
              ›
            </button>

          </div>

        </div>


        {/* RIGHT SIDE (ARTIST DETAILS) */}
        <AnimatePresence mode="wait">

          <motion.div
            key={artist.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >

            {/* ARTIST INFO */}
            <h3 className="text-xl font-semibold mb-4">
              {artist.name}
            </h3>

            <p className="text-gray-400 text-sm">Genre: {artist.genre}</p>
            <p className="text-gray-400 text-sm">Origin: {artist.origin}</p>
            <p className="text-gray-400 text-sm">
              Instagram:{" "}
              <a
                href={`https://instagram.com/${artist.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400"
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
                className="text-red-400"
              >
                @{artist.youtube}
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
                <p className="whitespace-pre-line" >
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

{/*
              <AccordionItem
                title="Cultural Impact"
                isOpen={openSection === "impact"}
                onClick={() => setOpenSection("impact")}
              >
                <p className="whitespace-pre-line">
                  {artist.impact}
                </p>
              </AccordionItem>
              */}

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  );
}