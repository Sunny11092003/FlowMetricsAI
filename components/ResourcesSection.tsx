"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type TabType = "Guides" | "Templates" | "Webinars" | "Case Studies";

export default function ResourcesSection() {
  const [activeTab, setActiveTab] = useState<TabType>("Guides");

  const tabs: TabType[] = ["Guides", "Templates", "Webinars", "Case Studies"];

  const resources: Record<TabType, { title: string; link: string }[]> = {
    Guides: [
      { title: "Predict Churn Without a Data Science Team", link: "#" },
      { title: "Revenue Intelligence for Mid-Market Teams", link: "#" },
    ],
    Templates: [
      { title: "Customer Health Score Template", link: "#" },
      { title: "Churn Forecasting Spreadsheet", link: "#" },
    ],
    Webinars: [
      { title: "Revenue Intelligence in Action", link: "#" },
      { title: "AI-Powered Churn Prediction", link: "#" },
    ],
    "Case Studies": [
      { title: "How 23 Companies Reduced Churn Early", link: "#" },
      { title: "Scaling Expansion Insights Without Data Scientists", link: "#" },
    ],
  };

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
          Explore Our Resources
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Guides, templates, webinars, and case studies to help your revenue team succeed.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold transition ${
                activeTab === tab
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources[activeTab].map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-teal-600 font-medium">Read More →</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
