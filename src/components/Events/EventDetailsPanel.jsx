import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Calendar,
  Clock,
  MapPin,
  Tag,
  Mic
} from "lucide-react";
import ArtistCard from "./ArtistCard";

export default function EventDetailsPanel({ event, onClose }) {
  if (!event) return null;

  const eventDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  // Sort headliners first
  const artists = [...(event.artists || [])].sort(
    (a, b) => (b.headliner === true) - (a.headliner === true)
  );

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* PANEL */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="
            fixed bottom-0 left-0 right-0
            md:static md:mx-auto md:my-16
            bg-zinc-900
            rounded-t-2xl md:rounded-2xl
            max-h-[95vh] md:max-h-none
            md:max-w-3xl
            w-full
            overflow-hidden
            border border-white/10
            text-white
          "
        >
          {/* HEADER (STICKY ON MOBILE) */}
          <div className="sticky top-0 z-10 bg-zinc-900/95 backdrop-blur border-b border-white/10 p-4 flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-pink-400">
              {event.category}
            </p>

            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold">
                {event.title}
              </h2>

              {event.status === "soldout" && (
                <span className="
                  text-xs font-semibold
                  px-2 py-1
                  rounded-full
                  bg-red-500/15
                  text-red-400
                  border border-red-500/30
                ">
                  SOLD OUT
                </span>
              )}
            </div>
          </div>


            <button
              onClick={onClose}
              className="
                w-9 h-9
                flex items-center justify-center
                rounded-full
                bg-zinc-800
                hover:bg-zinc-700
                transition
              "
            >
              <X size={18} />
            </button>
          </div>

          {/* SCROLLABLE CONTENT */}
          <div className="overflow-y-auto max-h-[calc(95vh-64px)]">

            {/* IMAGE */}
            <div className="h-56 w-full">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6 space-y-6">

              {/* META */}
              <div className="grid gap-4 sm:grid-cols-2 text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-pink-500" />
                  <span>{eventDate}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Clock size={16} className="text-pink-500" />
                  <span>{event.time}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-pink-500" />
                  <span>{event.location}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Tag size={16} className="text-pink-500" />
                  <span>{event.category}</span>
                </div>
              </div>

              {/* ARTISTS */}
              {artists.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Mic size={16} className="text-pink-500" />
                    <h3 className="font-semibold">
                      Performing Artists
                    </h3>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {artists.map((artist, index) => (
                      <ArtistCard key={index} artist={artist} />
                    ))}
                  </div>
                </div>
              )}

              {/* DESCRIPTION */}
              <div>
                <h3 className="font-semibold mb-2">
                  About the Event
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {event.description}
                </p>
              </div>

              {/* CTA */}
              <div className="pt-4 space-y-2">
                <button
                  disabled={event.status === "soldout"}
                  className={`
                    w-full py-3 rounded-xl font-semibold transition
                    ${
                      event.status === "soldout"
                        ? "bg-zinc-700 text-gray-400 cursor-not-allowed"
                        : "bg-pink-500 hover:bg-pink-600 text-black"
                    }
                  `}
                >
                  {event.status === "soldout"
                    ? "Tickets Unavailable"
                    : "Book Tickets"}
                </button>

                {event.status === "soldout" && (
                  <p className="text-xs text-gray-400 text-center">
                    This event is fully booked.
                  </p>
                )}
              </div>


            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
