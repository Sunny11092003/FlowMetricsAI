export default function TemplatesSection() {
  const templates = [
    { title: "KPI Dashboard Template", type: "Excel" },
    { title: "Weekly Reporting Template", type: "Google Sheets" },
    { title: "OKR Alignment Template", type: "Notion" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Templates</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((t) => (
            <div key={t.title} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{t.title}</h3>
              <p className="text-gray-600 mt-2">Format: {t.type}</p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">Download</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
