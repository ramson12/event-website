import { useState } from "react";
import events from "../../data/events";
import EventCard from "./EventCard";

export default function EventsSection({ onSelectEvent }) {
  const [showAll, setShowAll] = useState(false);

  const visibleEvents = showAll ? events : events.slice(0, 4);

  return (
    <section
      id="events"
      className="bg-black py-24 px-4"
    >

      
      <div className="max-w-7xl mx-auto text-white">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold">
            Events
          </h2>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Where moments turn into memories.
          </p>
        </div>

        {/* EVENTS GRID */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {visibleEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={onSelectEvent}
            />
          ))}
        </div>

        {/* VIEW ALL / SHOW LESS */}
        {/*{events.length > 4 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 border border-white/20 rounded-full text-sm hover:bg-white hover:text-black transition"
            >
              {showAll ? "Show Less" : "View All Events"}
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
}
