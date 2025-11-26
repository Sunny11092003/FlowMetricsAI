"use client";

import { motion } from "framer-motion";
import { FaSalesforce, FaHubspot, FaTicketAlt, FaChartLine } from "react-icons/fa";

export default function SolutionSectionUnique() {
  const solutions = [
    {
      icon: FaSalesforce,
      title: "CRM Integration",
      description: "Connect Salesforce, HubSpot, or your existing CRM to centralize customer data.",
      color: "bg-teal-400",
    },
    {
      icon: FaTicketAlt,
      title: "Support Ticket Insights",
      description: "Analyze support tickets automatically to detect churn signals and customer sentiment.",
      color: "bg-purple-400",
    },
    {
      icon: FaChartLine,
      title: "Product Usage Analysis",
      description: "Track user engagement and adoption trends to uncover expansion opportunities.",
      color: "bg-pink-400",
    },
    {
      icon: FaHubspot,
      title: "AI-Driven Insights",
      description: "Get actionable recommendations for churn prevention and revenue growth without a data science team.",
      color: "bg-yellow-400",
    },
  ];

  return (
    <section className="relative bg-gray-900 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-white mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          FlowMetrics Solutions in Action
        </motion.h2>

        {/* Floating Cards */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={solution.title}
                className={`relative p-10 rounded-3xl text-white cursor-pointer transform hover:scale-105 transition-transform shadow-2xl`}
                style={{ backgroundColor: solution.color, clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <div className="text-5xl mb-6">
                  <Icon />
                </div>
                <h3 className="text-xl font-bold mb-2">{solution.title}</h3>
                <p className="text-white/90">{solution.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 opacity-20 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl animate-blob animation-delay-2000"></div>
    </section>
  );
}
