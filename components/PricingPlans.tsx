"use client";

import { motion } from "framer-motion";

const plans = [
  { name: "Starter", price: "$15K", features: ["Churn Prediction", "2 Integrations"] },
  { name: "Growth", price: "$35K", features: ["All Starter Features", "5 Integrations", "Revenue Dashboard"] },
  { name: "Enterprise", price: "$75K", features: ["All Growth Features", "Unlimited Seats", "Premium Support"] },
];

export default function PricingPlans() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Pricing Plans
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-gray-900 font-bold text-2xl mb-4">{plan.name}</h3>
              <p className="text-gray-900 text-3xl font-extrabold mb-6">{plan.price}</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <button className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-500 transition">
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
