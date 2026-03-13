import { motion } from "framer-motion";

export default function StageSchedule() {

  const lineup = [
    { time: "7:00 PM", artist: "DJ Skeletron" },
    { time: "8:00 PM", artist: "DJ Dona" },
    { time: "9:00 PM", artist: "Tsumyoki" },
    { time: "10:00 PM", artist: "DJ Curly M" },
    { time: "10:30 PM", artist: "Mark Revlon Band" },
    { time: "11:30 PM", artist: "DJ N2NE" }
  ];

  return (
    <section className="bg-black py-24 px-6">

      <h2 className="text-center text-3xl font-bold mb-16">
        Stage Lineup
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        {lineup.map((item,i)=>(
          
          <motion.div
            key={item.artist}
            initial={{ opacity:0, x:-30 }}
            whileInView={{ opacity:1, x:0 }}
            transition={{ delay:i * 0.08 }}
            className="flex items-center justify-between bg-zinc-900 p-6 rounded-xl"
          >

            <p className="text-pink-400 font-semibold">
              {item.time}
            </p>

            <p className="text-lg font-medium">
              {item.artist}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}