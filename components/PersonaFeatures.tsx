"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function PersonaFeatures() {
  const personas = [
    {
      name: "CRO",
      benefits: [
        "Track overall revenue health in real-time",
        "Identify high-risk accounts quickly",
        "Prioritize high-value expansion opportunities",
      ],
    },
    {
      name: "VP Sales",
      benefits: [
        "Monitor team performance with actionable insights",
        "Forecast churn and expansion accurately",
        "Optimize pipeline for revenue growth",
      ],
    },
    {
      name: "RevOps Manager",
      benefits: [
        "Integrate data from multiple tools effortlessly",
        "Automate alerts for at-risk accounts",
        "Enable revenue team alignment with dashboards",
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tailored for Every Persona
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FlowMetrics AI is designed to meet the unique needs of each revenue team role.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {personas.map((persona, idx) => (
            <button
              key={persona.name}
              onClick={() => setActiveIndex(idx)}
              className={`px-4 py-2 font-medium rounded-lg transition ${
                idx === activeIndex
                  ? "bg-teal-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {persona.name}
            </button>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          key={personas[activeIndex].name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {personas[activeIndex].benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
            >
              <div className="text-teal-600 text-xl mt-1">✔️</div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
