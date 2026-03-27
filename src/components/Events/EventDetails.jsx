import { motion } from "framer-motion";
import TourTimeline from "./TourTimeline";
import StageSchedule from "./StageSchedule";
import TourMap from "./TourMap";
import FestivalLineup from "./FestivalLineup";
import artists from "../../data/artists";
import ArtistSpotlight from "./ArtistSpotlight";
import FestivalLineupSlider from "./FestivalLineupSlider";
import { useEffect } from "react";



export default function EventDetails() {
  const logos = [
    "https://cdn.simpleicons.org/spotify/white",
    "https://cdn.simpleicons.org/amazon/white",
    "https://cdn.simpleicons.org/ibm/white",
    "https://cdn.simpleicons.org/microsoft/white",
    "https://cdn.simpleicons.org/netflix/white",
  ];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const cities = ["London", "Manchester", "Leicester", "Swindon"];

  return (
    <section className="bg-black text-white relative overflow-hidden">

      {/* FESTIVAL LIGHT ANIMATION */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-pink-500/20 blur-[160px] top-[-100px] left-[-200px] animate-pulse"/>
        <div className="absolute w-[600px] h-[600px] bg-purple-500/20 blur-[160px] bottom-[-200px] right-[-200px] animate-pulse"/>
      </div>

      {/* HERO */}
      <section className="relative h-[100vh] flex flex-col justify-center items-center text-center overflow-hidden">

  {/* BACKGROUND */}
  <img
    src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* OVERLAYS */}
  <div className="absolute inset-0 bg-black/70" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />

  {/* HERO CONTENT */}
  <div className="relative z-10 max-w-5xl px-6">

    <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
      FUSIONFEST 2006 — UK TOUR
    </h1>

    <p className="mt-4 text-gray-300 text-sm tracking-widest uppercase">
      North London | Manchester | Leicester | Swindon | West London
    </p>

    {/* TOUR DATES */}
    <div className="flex justify-center items-center gap-10 mt-10 text-sm text-gray-300 flex-wrap">

  <div>
    <p className="text-gray-400 uppercase text-xs">North London</p>
    <p className="text-lg font-semibold text-white">12 Jul 2026</p>
  </div>

  <div className="h-10 w-px bg-white/30" />

  <div>
    <p className="text-gray-400 uppercase text-xs">Manchester</p>
    <p className="text-lg font-semibold text-white">18 Jul 2026</p>
  </div>

  <div className="h-10 w-px bg-white/30" />

  <div>
    <p className="text-gray-400 uppercase text-xs">Swindon</p>
    <p className="text-lg font-semibold text-white">24 Jul 2026</p>
  </div>

  <div className="h-10 w-px bg-white/30" />

  <div>
    <p className="text-gray-400 uppercase text-xs">Leicester</p>
    <p className="text-lg font-semibold text-white">01 Aug 2026</p>
  </div>

  <div className="h-10 w-px bg-white/30" />

  <div>
    <p className="text-gray-400 uppercase text-xs">West London</p>
    <p className="text-lg font-semibold text-white">02 Aug 2026</p>
  </div>

</div>

    <p className="mt-10 text-pink-400 text-lg tracking-wide">
      WHERE CULTURES, BEATS & COMMUNITIES UNITE
    </p>

  </div>

</section>

      {/* ABOUT */}
      <section className="py-24 px-6 text-center">

        <motion.div
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.6}}
          className="max-w-4xl mx-auto"
        >

          <h2 className="text-3xl font-bold mb-8">
            About FusionFest
          </h2>

          <p className="text-gray-300 leading-relaxed">
            FusionFest 2006 is a multi-city UK music festival celebrating the fusion
            of Indian and global sounds. Designed as a cultural and contemporary
            music experience, FusionFest brings together Bollywood influences,
            Konkani rhythms, hip-hop, electronic music, DJs and indie artists
            on one powerful platform.
          </p>

          <p className="mt-6 text-gray-300">
            Spanning London, Manchester, Leicester and Swindon,
            FusionFest connects diverse communities through music,
            live performance and nightlife culture.
          </p>

        </motion.div>

      </section>


      {/* TOUR CITIES 
      <TourTimeline />
*/}

      {/* LINEUP */}
      <FestivalLineupSlider />


      {/*<StageSchedule />*/}

      {/* SPONSORSHIP */}
      <section className="bg-black py-20 overflow-hidden">

      <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
        Our Partners
      </h2>


      {/* CENTER FEATURED LOGOS */}
      <div className="flex justify-center items-center gap-20 flex-wrap mb-12">

        {[
          "https://cdn.simpleicons.org/google/white",
          "https://cdn.simpleicons.org/nike/white",
          "https://cdn.simpleicons.org/adidas/white",
        ].map((logo) => (
          <div key={logo} className="group relative">

            <div className="absolute inset-0 bg-white/10 blur-xl opacity-0 group-hover:opacity-100 transition duration-500 rounded-full" />

            <img
              src={logo}
              className="relative h-16 md:h-20 object-contain 
              opacity-90 
              group-hover:opacity-100 
              group-hover:scale-110 
              transition duration-500"
            />
          </div>
        ))}

      </div>


      </section>
      {/* FESTIVAL STATEMENT */}
      <section className="py-24 px-6 text-center">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-8">
            Festival Statement
          </h2>

          <p className="text-gray-300 leading-relaxed">
            FusionFest 2006 brings together the best of Indian and UK music
            talent creating a multicultural, high-energy festival experience
            engaging diverse audiences across London, Manchester, Leicester
            and Swindon.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="py-24 text-center">

        <h2 className="text-4xl font-bold">
          Join the FusionFest Movement
        </h2>

        <button className="mt-8 px-8 py-3 bg-pink-500 rounded-full hover:bg-pink-600 transition">
          Become a Sponsor
        </button>

      </section>

    </section>
  );
}