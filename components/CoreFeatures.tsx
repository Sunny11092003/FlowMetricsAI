"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaChartLine, FaHeartbeat, FaDollarSign, FaBell } from "react-icons/fa";

export default function CoreFeaturesAlt() {
  const features = [
    {
      icon: FaHeartbeat,
      title: "Customer Health Scoring",
      description:
        "Instantly see which customers are thriving or at risk, enabling proactive engagement.",
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
    {
      icon: FaBell,
      title: "Alerts & Notifications",
      description:
        "Receive instant alerts for at-risk accounts or high-value opportunities.",
    },
  ];

  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Core Features
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Powerful tools designed for revenue teams to predict, monitor, and act efficiently.
        </motion.p>

        <div className="space-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={feature.title}
                className={`flex flex-col md:flex-row items-center md:justify-between ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
                  <div className="text-teal-600 text-6xl">
                    <Icon />
                  </div>
                </div>
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-gray-900 font-bold text-2xl mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-lg">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
