import { useRef, useState, useEffect } from "react";
import events from "../../data/events";
import EventCard from "./EventCard";

export default function EventsSection() {
  const [filter, setFilter] = useState("upcoming");

  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const today = new Date();

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return filter === "upcoming"
      ? eventDate >= today
      : eventDate < today;
  });

  const updateScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 5
    );
  };

  useEffect(() => {
    setTimeout(updateScroll, 100);
  }, [filteredEvents]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;

    const amount = 320;

    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth"
    });

    setTimeout(updateScroll, 300);
  };

  return (
    <section id="events" className="bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto text-white">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            Events &{" "}
            <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
              Festivals
            </span>
          </h2>
          <p className="mt-3 text-gray-400">
            Where moments turn into memories.
          </p>
        </div>

        {/* TOGGLE */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-zinc-900 rounded-full p-1 flex w-[260px] shadow-inner">

            {/* SLIDER */}
            <div
              className={`absolute top-1 bottom-1 w-1/2 rounded-full 
              bg-gradient-to-r from-[#ff9a44] to-[#ff6a00]
              shadow-md transition-all duration-300 ${
                filter === "upcoming" ? "left-1" : "left-1/2"
              }`}
            />

            <button
              onClick={() => setFilter("upcoming")}
              className={`flex-1 py-2 text-sm z-10 transition ${
                filter === "upcoming" ? "text-white" : "text-gray-400"
              }`}
            >
              Upcoming
            </button>

            <button
              onClick={() => setFilter("past")}
              className={`flex-1 py-2 text-sm z-10 transition ${
                filter === "past" ? "text-white" : "text-gray-400"
              }`}
            >
              Past
            </button>

          </div>
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT ARROW */}
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="
                absolute left-0 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 rounded-full
                bg-black/70 backdrop-blur
                flex items-center justify-center
                hover:bg-gradient-to-r hover:from-[#ff9a44] hover:to-[#ff6a00]
                hover:scale-110 active:scale-95 transition-all duration-300
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          )}

          {/* RIGHT ARROW */}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="
                absolute right-0 top-1/2 -translate-y-1/2 z-10
                w-10 h-10 rounded-full
                bg-black/70 backdrop-blur
                flex items-center justify-center
                hover:bg-gradient-to-r hover:from-[#ff9a44] hover:to-[#ff6a00]
                hover:scale-110 active:scale-95 transition-all duration-300
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          )}

          {/* SCROLL CONTAINER */}
          <div
            ref={scrollRef}
            onScroll={updateScroll}
            className="
              flex gap-6 overflow-x-auto pb-4 pt-4
              scroll-smooth scrollbar-hide
              snap-x snap-mandatory
            "
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="min-w-[280px] max-w-[280px] snap-start"
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>

        </div>

        {/* EMPTY STATE */}
        {filteredEvents.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No events found.
          </p>
        )}

      </div>
    </section>
  );
}