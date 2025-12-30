export default function NoEvents({ message }) {
    return (
      <div className="text-center py-20 text-gray-400">
        <p className="text-xl mb-4">🎉</p>
        <p className="text-lg">{message}</p>
        <p className="mt-2 text-sm">
          Follow us or contact us to stay updated.
        </p>
      </div>
    );
  }
  