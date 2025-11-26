// src/components/SupportedIntegrationsText.tsx
"use client";

import { motion } from "framer-motion";

const integrations = [
  {
    name: "Salesforce",
    description: "Sync your customer data and account info directly from Salesforce.",
  },
  {
    name: "HubSpot",
    description: "Automatically pull marketing and sales data into FlowMetrics AI.",
  },
  {
    name: "Slack",
    description: "Receive real-time notifications for churn risks or expansion opportunities.",
  },
  {
    name: "Segment",
    description: "Aggregate user events and behavioral data for predictive insights.",
  },
  {
    name: "Zendesk",
    description: "Track support tickets and customer satisfaction trends seamlessly.",
  },
  {
    name: "Marketo",
    description: "Integrate marketing automation data to analyze campaign impact.",
  },
];

export default function SupportedIntegrationsText() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Supported Integrations
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-12 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          FlowMetrics AI seamlessly connects with your favorite platforms to give you a unified view of your data and actionable insights.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((int, index) => (
            <motion.div
              key={int.name}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <h3 className="text-teal-600 font-bold text-xl mb-2">{int.name}</h3>
              <p className="text-gray-700">{int.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
