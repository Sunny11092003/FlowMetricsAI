export default function WebinarsSection() {
  const webinars = [
    { title: "Future of Predictive Analytics", date: "Oct 2025" },
    { title: "Building Data-Driven Teams", date: "Aug 2025" },
    { title: "Migrating From Legacy BI Tools", date: "May 2025" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Webinars</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {webinars.map((w) => (
            <div key={w.title} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{w.title}</h3>
              <p className="text-gray-600 mt-2">{w.date}</p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">Watch Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
