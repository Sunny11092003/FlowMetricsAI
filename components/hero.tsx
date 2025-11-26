"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSectionAlt() {
  return (
    <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-8 w-full">
        
        {/* Text Content */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            AI-Driven Churn Prediction & Expansion Insights
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            FlowMetrics AI integrates your CRM, support tickets, and product usage data — giving mid-market B2B teams actionable insights without a data science department.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link href="#request-demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-500 transition"
              >
                Request Demo
              </motion.button>
            </Link>
            <Link href="#free-trial">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
              >
                Join Free Trial
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Illustration / Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="FlowMetrics AI Illustration"
            className="w-full max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
}
