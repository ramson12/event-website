import { useState } from "react";
import artists from "../../data/artists";
import ArtistPanel from "./ArtistPanel";

export default function FestivalLineup() {

  const [selectedArtist, setSelectedArtist] = useState(null);

  return (
    <section className="py-28 px-6 bg-black text-white">

      <h2 className="text-3xl font-bold text-center mb-20">
        Festival Lineup
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

  {artists.map((artist) => (

    <div
      key={artist.name}
      className="
        group relative
        rounded-2xl
        overflow-hidden
        bg-zinc-900
        hover:-translate-y-2
        transition
        duration-300
        hover:shadow-[0_0_50px_rgba(236,72,153,0.35)]
      "
    >

      {/* IMAGE */}
      <div className="relative h-[240px] overflow-hidden">

        <img
          src={artist.image}
          className="
            w-full h-full object-cover
            transition duration-500
            group-hover:scale-110
          "
        />

        {/* GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"/>

      </div>


      {/* CONTENT */}
      <div className="p-6">

        <h3 className="text-xl font-semibold">
          {artist.name}
        </h3>

        <p className="text-sm text-gray-400">
          {artist.genre}
        </p>

        <p className="text-sm text-gray-400">
          {artist.origin}
        </p>

        <p className="text-pink-400 text-sm">
          @{artist.instagram}
        </p>

        <button
          onClick={() => setSelectedArtist(artist)}
          className="
            mt-5 text-pink-400
            text-sm font-semibold
            hover:text-pink-300
          "
        >
          MORE INFO →
        </button>

      </div>

    </div>

  ))}

</div>

      {/* PANEL */}
      <ArtistPanel
        artist={selectedArtist}
        onClose={() => setSelectedArtist(null)}
      />

    </section>
  );
}