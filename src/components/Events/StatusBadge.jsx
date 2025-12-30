export default function StatusBadge({ status }) {
    if (status === "soldout") {
      return (
        <span className="bg-red-600 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
          Sold Out
        </span>
      );
    }
  
    if (status === "few") {
      return (
        <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs uppercase tracking-wide">
          Few Seats
        </span>
      );
    }
  
    return null;
  }
  