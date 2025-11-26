export default function GuidesSection() {
  const guides = [
    { title: "AI-Powered Analytics Guide", description: "Learn how modern teams use predictive analytics for scale." },
    { title: "2025 BI Strategy Playbook", description: "Actionable enterprise frameworks and best practices." },
    { title: "Data Integration Handbook", description: "A complete guide to streamlining data pipelines." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Guides & Whitepapers</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {guides.map((g) => (
            <div key={g.title} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{g.title}</h3>
              <p className="text-gray-600 mt-2">{g.description}</p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">Download</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
