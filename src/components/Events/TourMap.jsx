import { motion } from "framer-motion";

export default function TourMap() {

  const cities = [
    { name: "London", x: 300, y: 420 },
    { name: "Manchester", x: 260, y: 200 },
    { name: "Leicester", x: 310, y: 300 },
    { name: "Swindon", x: 250, y: 380 },
  ];

  return (
    <section className="bg-zinc-950 py-24 text-center">

      <h2 className="text-3xl font-bold mb-16">
        FusionFest UK Tour Route
      </h2>

      <div className="max-w-4xl mx-auto">

        <svg viewBox="0 0 600 500" className="w-full">

          {/* ROUTE LINE */}
          <motion.path
            d="M300 420 L310 300 L260 200 L250 380"
            stroke="#ec4899"
            strokeWidth="3"
            fill="transparent"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2 }}
          />

          {/* CITY DOTS */}
          {cities.map((city, i) => (

            <motion.g
              key={city.name}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: i * 0.3 }}
            >

              <circle
                cx={city.x}
                cy={city.y}
                r="8"
                fill="#ec4899"
              />

              <text
                x={city.x}
                y={city.y - 15}
                textAnchor="middle"
                fill="white"
                fontSize="14"
              >
                {city.name}
              </text>

            </motion.g>

          ))}

        </svg>

      </div>

    </section>
  );
}