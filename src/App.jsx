import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventsSection from "./components/Events/EventsSection";
import EventDetailsPanel from "./components/Events/EventDetailsPanel";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
        <Navbar />
        <Hero />
        <EventsSection onSelectEvent={setSelectedEvent} />

        {selectedEvent && (
          <EventDetailsPanel
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}

        <Services />
        <About />
        <Contact />
        <Footer />
        <ScrollToTop />
    </>
  );
}
