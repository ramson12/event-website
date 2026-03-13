import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventsSection from "./components/Events/EventsSection";
import EventDetails from "./components/Events/EventDetails";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToHash from "./components/ScrollToHash";
export default function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
            <ScrollToHash />

              <Hero />
              <EventsSection />
              <Services />
              <About />
              <Contact />
            </>
          }
        />

        {/* EVENT DETAILS PAGE */}
        <Route
          path="/events/:id"
          element={<EventDetails />}
        />

      </Routes>

      <Footer />
      <ScrollToTop />
    </>
  );
}