"use client";

import { motion } from "framer-motion";
import { FaSalesforce, FaHubspot, FaInbox, FaProjectDiagram } from "react-icons/fa";

export default function IntegrationsSectionAlt() {
  const integrations = [
    {
      icon: FaSalesforce,
      title: "Salesforce",
      description: "Sync your CRM data seamlessly and get actionable insights instantly.",
    },
    {
      icon: FaHubspot,
      title: "HubSpot",
      description: "Connect HubSpot to predict churn and discover expansion opportunities.",
    },
    {
      icon: FaInbox,
      title: "Intercom",
      description: "Bring support conversations into FlowMetrics for a full view of customer health.",
    },
    {
      icon: FaProjectDiagram,
      title: "Segment",
      description: "Combine multiple product data sources for comprehensive analytics.",
    },
  ];

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Integrations That Keep Your Data Connected
        </motion.h2>

        <div className="flex flex-col gap-12">
          {integrations.map((integration, index) => {
            const Icon = integration.icon;
            return (
              <motion.div
                key={integration.title}
                className="flex items-start gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Icon Circle */}
                <div className="flex-shrink-0">
                  <div className="bg-teal-600 text-white rounded-full w-14 h-14 flex items-center justify-center text-2xl">
                    <Icon />
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{integration.title}</h3>
                  <p className="text-gray-700">{integration.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
