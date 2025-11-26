// src/components/ComingSoonIntegrations.tsx
"use client";

import { motion } from "framer-motion";

const comingSoon = [
  "Zendesk",
  "Marketo",
  "Freshdesk",
  "Microsoft Dynamics",
];

export default function ComingSoonIntegrations() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Coming Soon
        </motion.h2>

        <motion.div
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {comingSoon.map((name) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center text-gray-700 font-medium hover:scale-105 transition-transform cursor-not-allowed"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
