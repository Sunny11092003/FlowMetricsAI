export default function CaseStudiesSection() {
  const cases = [
    { company: "Acme Corp", result: "63% faster reporting cycles" },
    { company: "Nova Retail", result: "32% reduction in data overhead" },
    { company: "FinTrust Bank", result: "Automated compliance insights" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Case Studies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((c) => (
            <div key={c.company} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold">{c.company}</h3>
              <p className="text-gray-600 mt-2">{c.result}</p>
              <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg">Read Full Story</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
