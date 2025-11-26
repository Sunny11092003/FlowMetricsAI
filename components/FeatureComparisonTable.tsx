"use client";

import { motion } from "framer-motion";

type PlanName = "Starter" | "Growth" | "Enterprise";

const features: {
  name: string;
  plans: Record<PlanName, string>;
}[] = [
  {
    name: "Seats",
    plans: { Starter: "5", Growth: "20", Enterprise: "Unlimited" },
  },
  {
    name: "Integrations",
    plans: { Starter: "2", Growth: "5", Enterprise: "Unlimited" },
  },
  {
    name: "Predictive Features",
    plans: { Starter: "Basic", Growth: "Advanced", Enterprise: "All Features" },
  },
  {
    name: "Support",
    plans: { Starter: "Email", Growth: "Priority Email", Enterprise: "24/7 Dedicated" },
  },
];

export default function FeatureComparisonClean() {
  const planNames: PlanName[] = ["Starter", "Growth", "Enterprise"];

  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Compare Features Across Plans
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Feature Names */}
          <div className="hidden md:flex flex-col space-y-6">
            {features.map((feature) => (
              <div key={feature.name} className="text-gray-500 font-medium py-3">
                {feature.name}
              </div>
            ))}
          </div>

          {/* Plan Cards */}
          {planNames.map((plan, planIndex) => (
            <motion.div
              key={plan}
              className="bg-gray-50 rounded-2xl p-6 flex flex-col space-y-6 text-center hover:shadow-xl transition-transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: planIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-gray-900">{plan}</h3>
              <div className="flex flex-col space-y-4 mt-4">
                {features.map((feature) => (
                  <div key={feature.name} className="text-gray-700 font-medium">
                    {feature.plans[plan]}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
