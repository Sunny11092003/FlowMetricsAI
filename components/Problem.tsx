"use client";

import { motion } from "framer-motion";
import { FaExclamationTriangle, FaChartLine, FaUsers, FaPuzzlePiece } from "react-icons/fa";

export default function ProblemSection() {
  const problems = [
    { icon: FaUsers, text: "Manual customer health tracking" },
    { icon: FaExclamationTriangle, text: "Reactive churn management" },
    { icon: FaPuzzlePiece, text: "No data science resources" },
    { icon: FaChartLine, text: "Disconnected CRM, support, and usage data" },
  ];

  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Common Challenges for Mid-Market B2B Teams
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Many companies struggle to predict churn and spot growth opportunities due to disconnected systems and limited analytics resources.
        </motion.p>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.text}
                className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="text-teal-600 mb-4 text-4xl">
                  <Icon />
                </div>
                <p className="text-gray-800 font-semibold text-lg">{problem.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
