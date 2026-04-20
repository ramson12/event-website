import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24 px-4 overflow-hidden">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[700px]" />
      </div>

      <div className="relative max-w-5xl mx-auto text-white">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
              Us
            </span>
          </h2>

          <p className="mt-4 text-gray-400">
            The Story of DreamTeam11
          </p>
        </motion.div>

        {/* STORY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
        >
          <p>
            DreamTeam11 Ltd Established in 2025. The company started the way the best stories do — with a tight-knit
            group of friends and family.
          </p>

          <p>
            Today, DreamTeam11 is a vibrant community-driven events brand bringing people together through energy,
            culture, and unforgettable experiences.
          </p>

          <p>
            From cultural festivals to musical nights. <br />
            From weddings to intimate celebrations. <br />
            From family fun days to private parties.
          </p>

          <p>
            We turn ordinary days into extraordinary memories.
          </p>

          <p className="text-white font-medium text-lg">
            Because every event is more than just an occasion — <br />
            it’s a feeling, a moment, a story.
          </p>
        </motion.div>

        {/* DIVIDER */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* MISSION & VISION */}
        <div className="grid gap-10 md:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-zinc-900/60 backdrop-blur border border-white/5"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Our{" "}
              <span className="text-[#ff9a44]">Mission</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To bring people together through unforgettable experiences and create moments that strengthen community bonds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-xl bg-zinc-900/60 backdrop-blur border border-white/5"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Our{" "}
              <span className="text-[#ff9a44]">Vision</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To become a leading events brand known for creativity, connection, and unforgettable experiences.
            </p>
          </motion.div>

        </div>

        {/* DIVIDER */}
        <div className="my-20 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* VALUES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-center mb-16">
            Our{" "}
            <span className="bg-gradient-to-r from-[#ff9a44] to-[#ff6a00] bg-clip-text text-transparent">
              Values
            </span>
          </h3>

          <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">

            {[
              {
                title: "Community First",
                text: "We create spaces where people connect, celebrate, and belong."
              },
              {
                title: "Creativity & Innovation",
                text: "Every event is unique, exciting, and full of memorable moments."
              },
              {
                title: "Family Spirit",
                text: "Built on friendship and warmth, we bring care into every event."
              },
              {
                title: "Joy & Celebration",
                text: "We infuse energy, fun, and positivity into every gathering."
              },
              {
                title: "Integrity & Trust",
                text: "We deliver what we promise with professionalism and dedication."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="
                  p-6 rounded-xl
                  bg-zinc-900/60 backdrop-blur
                  border border-white/5
                  hover:shadow-[0_0_25px_rgba(255,120,0,0.2)]
                  transition-all duration-300
                "
              >
                <h4 className="text-lg font-semibold mb-2">
                  {value.title}
                </h4>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {value.text}
                </p>

                {/* ACCENT LINE */}
                <div className="mt-4 h-[2px] w-10 bg-gradient-to-r from-[#ff9a44] to-[#ff6a00]" />
              </motion.div>
            ))}

          </div>
        </motion.div>

      </div>
    </section>
  );
}