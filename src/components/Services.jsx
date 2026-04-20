import { motion } from "framer-motion";
import services from "../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section id="services" className="relative bg-black py-24 px-4 overflow-hidden">

      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] " />
      </div>

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative text-center max-w-2xl mx-auto mb-16"
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Our{" "}
          <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed">
          From concept to execution, we deliver seamless experiences
          tailored to your celebration.
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ staggerChildren: 0.1 }}
        viewport={{ once: true }}
        className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto"
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