import { motion } from "framer-motion";
import services from "../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="bg-black py-20 px-4">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Our Services
        </h2>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          From concept to execution, we deliver seamless experiences
          tailored to your celebration.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
      >
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            service={service}
          />
        ))}
      </motion.div>

    </section>
  );
}
