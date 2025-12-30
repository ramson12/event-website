export default function ArtistCard({ artist }) {
    return (
      <div
        className={`
          relative
          flex items-center gap-4
          rounded-lg p-3
          border
          transition
          ${
            artist.headliner
              ? "bg-pink-500/10 border-pink-500/40"
              : "bg-zinc-800 border-white/10"
          }
        `}
      >
        {/* IMAGE */}
        <div
          className={`
            relative
            w-12 h-12
            rounded-full
            flex items-center justify-center
            ${
              artist.headliner ? "animate-headlinerGlow" : ""
            }
          `}
          style={
            artist.headliner
              ? { animation: "headlinerGlow 2.5s ease-in-out infinite" }
              : {}
          }
        >
          <img
            src={artist.image}
            alt={artist.name}
            className={`
              w-12 h-12 rounded-full object-cover
              ${
                artist.headliner
                  ? "ring-2 ring-pink-500"
                  : ""
              }
            `}
          />
        </div>
  
        {/* INFO */}
        <div className="flex-1">
          <p className="text-sm font-semibold text-white flex items-center gap-2">
            {artist.name}
            {artist.headliner && (
              <span className="text-xs text-pink-400 font-medium">
                ⭐ Headliner
              </span>
            )}
          </p>
  
          {artist.role && (
            <p className="text-xs text-gray-400">
              {artist.role}
            </p>
          )}
        </div>
      </div>
    );
  }
  