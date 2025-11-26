export default function CompetitiveComparison() {
  const data = [
    { feature: "Predictive Analytics", ours: "Yes", competitor: "Limited" },
    { feature: "Real-time Dashboards", ours: "Yes", competitor: "No" },
    { feature: "AI Insights", ours: "Advanced", competitor: "Basic" },
    { feature: "Pricing", ours: "Flexible", competitor: "Expensive" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8">Competitive Comparison</h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-4 text-left">Feature</th>
                <th className="p-4 text-left">FlowMetrics AI</th>
                <th className="p-4 text-left">Competitor</th>
              </tr>
            </thead>

            <tbody>
              {data.map((row) => (
                <tr key={row.feature} className="border-b">
                  <td className="p-4">{row.feature}</td>
                  <td className="p-4 font-semibold">{row.ours}</td>
                  <td className="p-4 text-gray-700">{row.competitor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
