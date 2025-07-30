<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 px-4">
  {events.map((event, idx) => (
    <div key={idx} className="bg-white rounded-2xl shadow hover:shadow-2xl p-6 transition-transform hover:scale-105">
      <h3 className="font-bold text-xl mb-2">{event.title}</h3>
      <p className="text-gray-600">{event.description}</p>
      <button className="mt-4 text-indigo-600 font-semibold">Read More →</button>
    </div>
  ))}
</div>
