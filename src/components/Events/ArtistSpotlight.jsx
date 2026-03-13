import { useState } from "react";
import artists from "../../data/artists";

export default function ArtistSpotlight() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 px-6 bg-black text-white">

      <h2 className="text-3xl font-bold text-center mb-20">
        Artist Spotlight
      </h2>

      <div className="max-w-6xl mx-auto space-y-24">

        {artists.map((artist, index) => {

          const isLeft = index % 2 === 0;

          return (
            <div
              key={artist.name}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                !isLeft ? "md:flex-row-reverse" : ""
              }`}
            >

              {/* IMAGE */}
              <div className="flex justify-center">

                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-[280px] h-[360px] object-cover rounded-xl"
                />

              </div>


              {/* CONTENT */}
              <div>

                <h3 className="text-2xl font-bold mb-2">
                  {artist.name}
                </h3>

                <p className="text-pink-400 text-sm">
                  Genre: {artist.genre}
                </p>

                <p className="text-gray-400 text-sm">
                  Origin: {artist.origin}
                </p>

                <p className="text-gray-400 text-sm mb-6">
                  Instagram: @{artist.instagram}
                </p>


                {/* BIO */}
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between w-full border-b border-gray-700 py-3"
                >
                  <span>Bio</span>
                  <span>{openIndex === index ? "-" : "+"}</span>
                </button>

                {openIndex === index && (
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {artist.bio}
                  </p>
                )}

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}