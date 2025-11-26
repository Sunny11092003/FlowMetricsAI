"use client";

import { motion } from "framer-motion";
import { FaUsers, FaDollarSign, FaRocket } from "react-icons/fa";

export default function SocialProofSectionAlt() {
  const stats = [
    { icon: FaUsers, label: "Companies in Beta", value: 23 },
    { icon: FaDollarSign, label: "Pre-Seed Funding", value: 750000, isCurrency: true },
    { icon: FaRocket, label: "Early Revenue Saved", value: 1200000, isCurrency: true },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted by Early Adopters
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FlowMetrics AI is already helping early adopters reduce churn and identify expansion opportunities.
        </motion.p>

        {/* Stats with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-teal-600 text-5xl mb-4">
                  <Icon />
                </div>
                <div className="text-4xl font-bold text-teal-700 mb-2">
                  {stat.isCurrency
                    ? `$${(stat.value / 1000).toLocaleString()}K`
                    : stat.value}
                </div>
                <div className="text-gray-700">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
