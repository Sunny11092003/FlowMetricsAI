// src/components/IntegrationHowItWorks.tsx
"use client";

import { motion } from "framer-motion";

export default function IntegrationHowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          How Integrations Work
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg sm:text-xl mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Connect FlowMetrics AI to your favorite tools and unify your data seamlessly. 
          Automate workflows, track revenue signals, and act on insights without leaving your platform.
        </motion.p>

        {/* Example Diagram Placeholder */}
        <motion.div
          className="bg-gray-100 rounded-xl p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img src="https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Integration Diagram" className="mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
