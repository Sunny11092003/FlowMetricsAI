"use client";

import { motion } from "framer-motion";
import { FaChartLine, FaBullseye, FaRobot } from "react-icons/fa";

export default function ProductOverview() {
  const benefits = [
    {
      title: "Predict Churn",
      description: "AI-driven forecasts to reduce customer churn proactively.",
      icon: FaChartLine,
      color: "text-teal-500",
    },
    {
      title: "Identify Expansion Opportunities",
      description: "Find upsell and cross-sell opportunities automatically.",
      icon: FaBullseye,
      color: "text-purple-500",
    },
    {
      title: "No Data Science Required",
      description: "Designed for revenue teams without analytics expertise.",
      icon: FaRobot,
      color: "text-yellow-500",
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 py-28 overflow-hidden">
      {/* Decorative SVG */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-teal-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          FlowMetrics AI: Predictive Analytics for Revenue Teams
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FlowMetrics AI helps mid-market B2B SaaS companies reduce churn, uncover expansion opportunities, 
          and make data-driven decisions — without needing a dedicated data science team.
        </motion.p>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl shadow-xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className={`text-5xl mb-4 ${item.color}`}>
                  <Icon />
                </div>
                <h3 className="text-gray-900 font-bold text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
