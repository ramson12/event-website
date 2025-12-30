import { useState } from "react";
import events from "../../data/events";
import EventCard from "./EventCard";
import { motion } from "framer-motion";

export default function EventsSection({ onSelectEvent }) {
  const [showAll] = useState(false);
  const visibleEvents = showAll ? events : events.slice(0, 4);

  return (
    <section id="events" className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto text-white">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Events
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Where moments turn into memories.
          </p>
        </motion.div>

        {/* EVENTS GRID */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {visibleEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={onSelectEvent}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
