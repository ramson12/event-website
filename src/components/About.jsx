import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-24 px-4"
    >
      <div className="max-w-5xl mx-auto text-white">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            About Us
          </h2>
          <p className="mt-4 text-gray-400">
            The Story of DreamTeam11
          </p>
        </motion.div>

        {/* STORY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0  }}
          viewport={{ once: true }}
          className="space-y-6 text-gray-300 leading-relaxed text-center"
        >
          <p>
            DreamTeam11 started the way the best stories do — with a tight-knit
            group of friends and family battling it out in fantasy football
            leagues. What began as weekend fun soon shaped a brotherhood, a
            bond, and a spark.
          </p>

          <p>
            Today, DreamTeam11 is a vibrant community-driven events brand.
            We bring families, friends, cultures, and communities together by
            creating experiences that feel alive — full of energy, excitement,
            and connection.
          </p>

          <p>
            From cultural festivals to musical nights.
            <br />
            From weddings to intimate celebrations.
            <br />
            From family fun days to private parties.
          </p>

          <p>
            DreamTeam11 specialises in turning ordinary days into
            extraordinary memories.
          </p>

          <p className="text-white font-medium">
            Because here, every event is more than just an occasion —
            <br />
            it’s a feeling, a moment, a story you’ll want to relive.
          </p>
        </motion.div>

        {/* DIVIDER */}
        <div className="my-20 h-px bg-white/5" />

        {/* MISSION & VISION */}
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To bring people together through unforgettable experiences.
              We aim to create events that spark joy, strengthen community
              bonds, and make every guest feel like they’re part of the
              DreamTeam11 family.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To become a leading cultural and community events brand known
              for creativity, connection, and exceptional experiences —
              inspiring people across the world to celebrate life together.
            </p>
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="my-20 h-px bg-white/5" />

        {/* VALUES */}
        {/* VALUES */}
{/* VALUES */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
>
  <h3 className="text-2xl md:text-3xl font-semibold text-center mb-16">
    Our Values
  </h3>

  <div className="max-w-6xl mx-auto grid gap-y-14 gap-x-20 md:grid-cols-2">

    {[
      {
        title: "Community First",
        text:
          "We believe in creating spaces where people come together, laugh, celebrate, and feel like they belong."
      },
      {
        title: "Creativity & Innovation",
        text:
          "Every event should be original, memorable, and filled with exciting moments. We love thinking outside the box."
      },
      {
        title: "Family Spirit",
        text:
          "DreamTeam11 was built on friendship and family — and we bring that same warmth and care into everything we do."
      },
      {
        title: "Joy & Celebration",
        text:
          "Life is meant to be enjoyed. We infuse energy, fun, and positivity into every gathering."
      },
      {
        title: "Integrity & Trust",
        text:
          "We deliver what we promise and treat every event with respect, dedication, and professionalism."
      }
    ].map((value, index) => (
      <motion.div
        key={value.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="relative pl-6"
      >
        {/* ACCENT LINE */}
        <span className="absolute left-0 top-1 w-[2px] h-6 bg-pink-500" />

        {/* TITLE */}
        <h4 className="text-lg font-semibold mb-2">
          {value.title}
        </h4>

        {/* TEXT */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {value.text}
        </p>
      </motion.div>
    ))}

  </div>
</motion.div>


      </div>
    </section>
  );
}
