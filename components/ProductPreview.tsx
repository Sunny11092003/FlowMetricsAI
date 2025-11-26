"use client";

import { motion } from "framer-motion";
import { FaHeartbeat, FaChartLine, FaBullseye, FaDollarSign } from "react-icons/fa";

export default function ProductPreviewSectionAlt() {
  const features = [
    {
      icon: FaHeartbeat,
      title: "Customer Health Scoring",
      description:
        "Instantly see which customers are thriving or at risk, so you can act proactively.",
    },
    {
      icon: FaChartLine,
      title: "Churn Prediction",
      description:
        "AI-driven forecasts help your team reduce churn before it impacts revenue.",
    },
    {
      icon: FaBullseye,
      title: "Expansion Insights",
      description:
        "Identify upsell and cross-sell opportunities within your existing customer base.",
    },
    {
      icon: FaDollarSign,
      title: "Revenue Dashboard",
      description:
        "Centralized view of key metrics, KPIs, and financial impact at a glance.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6">
            Core Features of FlowMetrics AI
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Everything your revenue team needs in one platform—predict, monitor, and act without a data science team.
          </p>
        </motion.div>

        {/* Right Side Animated Feature List */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 text-teal-600 text-3xl">
                  <Icon />
                </div>
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-1">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
