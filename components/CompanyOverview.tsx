"use client";

import { motion } from "framer-motion";

export default function CompanyOverview() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Accent Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="h-1 w-20 bg-teal-600 mb-6"></div>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Who We Are
          </h2>

          <p className="text-lg text-gray-600 mt-6 max-w-xl">
            FlowMetrics AI helps businesses understand the full story of their
            revenue performance. Using predictive analytics and machine
            learning, our platform equips teams to anticipate churn, identify
            expansion opportunities, and make data-driven decisions with
            confidence.
          </p>
        </motion.div>

        {/* Right Info Block */}
        <motion.div
          className="bg-white shadow-xl rounded-2xl p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Our Journey
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Founded in 2024, we set out to build an intelligence platform that
            doesn’t require a data science background—just the desire to
            understand your customers better.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex gap-3">
              <span className="text-teal-600 text-xl">•</span>
              Built for revenue and CS teams to make smarter, faster decisions.
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 text-xl">•</span>
              Designed to surface insights before problems happen.
            </li>
            <li className="flex gap-3">
              <span className="text-teal-600 text-xl">•</span>
              Powered by machine learning, yet simple to use.
            </li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
