import { motion, AnimatePresence } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import events from "../../data/events";
import { useEffect, useState } from "react";

export default function PastEventDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const event = events.find(e => e.id === Number(id));

  const [lightboxIndex, setLightboxIndex] = useState(null);

  const gallery = event?.gallery || Array(8).fill(event?.image);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);

  const nextImage = () =>
    setLightboxIndex((prev) => (prev + 1) % gallery.length);

  const prevImage = () =>
    setLightboxIndex((prev) =>
      (prev - 1 + gallery.length) % gallery.length
    );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* KEYBOARD NAV */
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  if (!event) {
    return <div className="text-white text-center py-20">Event not found</div>;
  }

  /* ANIMATED STAT */
  const Stat = ({ value, label }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = parseInt(value);
      const duration = 1500;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, [value]);

    return (
      <div className="text-center">
        <p className="text-2xl md:text-3xl font-bold">
          {count.toLocaleString()}+
        </p>
        <p className="text-xs text-gray-400 uppercase mt-1">
          {label}
        </p>
      </div>
    );
  };

  return (
    <section className="bg-black text-white">

      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden">

        <img
          src={event.image}
          className="absolute inset-0 w-full h-full object-cover scale-110"
        />

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black" />

        <div className="relative z-10 px-6 max-w-5xl">

          <h1 className="text-4xl md:text-6xl font-bold">
            {event.title}
          </h1>

          <p className="mt-4 text-gray-300">
            {event.location} • {event.date}
          </p>

          {event.status === "soldout" && (
            <div className="mt-6 inline-block px-6 py-2 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-400 text-sm tracking-wide uppercase">
                🎟️ Sold Out
            </div>
            )}

          <p className="mt-6 text-pink-400 text-lg">
            A Night To Remember ✨
          </p>

          {/* STATS */}
          <div className="flex justify-center gap-10 mt-10 flex-wrap">

            <Stat value={event.attendenceCount || "4500"} label="People Attended" />
            <Stat value={event.artistCount || "15"} label="Artists" />

          </div>

        </div>

      </section>


      {/* RECAP */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6"
        >
          Event Recap
        </motion.h2>

        <p className="text-gray-400 leading-relaxed">
          {event.eventAbout}
        </p>

      </section>


      {/* GALLERY */}
      <section className="py-20 px-6">

        <h2 className="text-center text-3xl font-bold mb-12">
          Moments From The Night
        </h2>

        <div className="columns-2 md:columns-4 gap-4 max-w-6xl mx-auto space-y-4">

          {gallery.map((img, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(i)}
              className="relative overflow-hidden rounded-xl group cursor-pointer"
            >

              <img
                src={img}
                className="w-full object-cover group-hover:scale-110 transition"
                style={{
                  height:
                    i % 3 === 0 ? "260px" :
                    i % 2 === 0 ? "200px" : "300px"
                }}
              />

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <p className="text-sm text-white">
                  FusionFest Moments
                </p>
              </div>

            </motion.div>

          ))}

        </div>

      </section>


      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          >

            <button onClick={closeLightbox} className="absolute top-6 right-6 text-3xl">✕</button>
            <button onClick={prevImage} className="absolute left-6 text-4xl">‹</button>

            <motion.img
              key={lightboxIndex}
              src={gallery[lightboxIndex]}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-h-[85vh] max-w-[90vw] rounded-xl"
            />

            <button onClick={nextImage} className="absolute right-6 text-4xl">›</button>

            <div className="absolute bottom-6 text-sm text-gray-300">
              {lightboxIndex + 1} / {gallery.length}
            </div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold">
          Don’t Miss The Next Experience
        </h2>

        <p className="text-gray-400 mt-4">
          The journey continues — be part of the next unforgettable night.
        </p>

        <button
          onClick={() => navigate("/#events")}
          className="mt-8 px-10 py-3 bg-pink-500 rounded-full hover:bg-pink-600 transition shadow-[0_0_20px_rgba(236,72,153,0.4)]"
        >
          View Upcoming Events
        </button>

      </section>

    </section>
  );
}