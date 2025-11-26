"use client";

import { motion } from "framer-motion";
import { FaSearch, FaLightbulb, FaChartLine } from "react-icons/fa";

export default function HowItWorksCards() {
  const steps = [
    {
      icon: <FaSearch />,
      title: "Import Your Data",
      description:
        "Connect CRM, billing, and product analytics in minutes.",
    },
    {
      icon: <FaLightbulb />,
      title: "AI Learns Your Accounts",
      description:
        "Our model analyzes behavior signals to flag risk & upsell potential.",
    },
    {
      icon: <FaChartLine />,
      title: "Take Action",
      description:
        "Get prioritized recommendations and track impact instantly.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="p-10 rounded-2xl bg-gray-50 border border-gray-200 hover:bg-gray-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <div className="text-teal-600 text-4xl mb-6 flex justify-center">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                {step.title}
              </h3>

              <p className="text-gray-700 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
