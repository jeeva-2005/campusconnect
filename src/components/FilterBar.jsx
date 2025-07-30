const categories = ["All", "Events", "Clubs", "Internships", "Workshops"];

export default function FilterBar({ selected, setSelected }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center py-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelected(cat)}
          className={`px-4 py-2 rounded-full border ${
            selected === cat
              ? "bg-indigo-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
