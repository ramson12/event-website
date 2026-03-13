import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function TourTimeline() {

  const tour = [
    {
      city: "London",
      date: "8 Aug 2026",
      description: "Opening night of FusionFest UK Tour"
    },
    {
      city: "Manchester",
      date: "26 Aug 2026",
      description: "Youth-driven nightlife & music culture"
    },
    {
      city: "Leicester",
      date: "1 Sep 2026",
      description: "One of the UK’s largest South Asian communities"
    },
    {
      city: "Swindon",
      date: "15 Sep 2026",
      description: "Emerging cultural hub"
    }
  ];

  return (
    <section className="bg-black py-28 px-6 text-white">

      <h2 className="text-center text-3xl font-bold mb-20">
        UK Tour Timeline
      </h2>

      <div className="relative max-w-5xl mx-auto">

        {/* GLOWING LINE */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 opacity-40"/>

        {tour.map((item, i) => (

          <motion.div
            key={item.city}
            initial={{ opacity:0, y:40 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ delay: i * 0.15 }}
            className={`mb-20 flex ${
              i % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              className="w-[45%] bg-zinc-900 p-6 rounded-xl shadow-lg border border-white/10 hover:border-pink-500/40 hover:shadow-[0_0_25px_rgba(236,72,153,0.35)] transition"
            >

              <div className="flex items-center gap-3 mb-2">

                <MapPin size={18} className="text-pink-400"/>

                <h3 className="text-lg font-semibold">
                  {item.city}
                </h3>

              </div>

              <p className="text-pink-400 text-sm">
                {item.date}
              </p>

              <p className="text-gray-400 text-sm mt-2">
                {item.description}
              </p>

            </motion.div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}