import { useState } from "react";
import events from "../../data/events";
import EventCard from "./EventCard";
import { motion } from "framer-motion";

export default function EventsSection({ onSelectEvent }) {

  const [filter, setFilter] = useState("upcoming");

  const today = new Date();

  /* FILTER LOGIC */
  const filteredEvents = events
    .filter((event) => {
      const eventDate = new Date(event.date);

      if (filter === "upcoming") return eventDate >= today;
      if (filter === "past") return eventDate < today;

      return true;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  /* COUNTS */
  const counts = {
    upcoming: events.filter(e => new Date(e.date) >= today).length,
    past: events.filter(e => new Date(e.date) < today).length
  };

  return (
    <section id="events" className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto text-white">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Events & Festivals
          </h2>

          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Where moments turn into memories.
          </p>
        </motion.div>

        {/* PREMIUM FILTER BUTTONS */}
        <div className="flex justify-center mb-14">

          <div className="relative flex bg-zinc-900 rounded-full p-1 border-zinc-700 w-[260px]">

            {/* SLIDING INDICATOR */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className={`
              absolute top-1 bottom-1
              w-[calc(50%-4px)]
              rounded-full bg-pink-500
              shadow-[0_0_12px_rgba(236,72,153,0.6)]
              `}
              style={{
                left: filter === "upcoming" ? "4px" : "calc(50% + 2px)"
              }}
            />

            {/* BUTTONS */}
            {["upcoming", "past"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`
                  relative z-10 w-1/2 py-2 text-sm uppercase tracking-wide transition
                  ${filter === type ? "text-white" : "text-gray-400"}
                `}
              >
                {type}
              </button>
            ))}

          </div>

        </div>

        {/* EVENTS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >

          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onSelect={onSelectEvent}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">
              No events found.
            </p>
          )}

        </motion.div>

      </div>
    </section>
  );
}