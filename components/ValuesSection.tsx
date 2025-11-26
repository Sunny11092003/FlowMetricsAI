"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Integrity",
    desc: "We believe trust is the foundation of every customer relationship.",
  },
  {
    title: "Innovation",
    desc: "We push boundaries in AI to help revenue teams stay ahead.",
  },
  {
    title: "Customer-Centricity",
    desc: "Everything we build solves real-world revenue challenges.",
  },
  {
    title: "Transparency",
    desc: "Clear models, clear data, clear decisions — always.",
  },
];

export default function ValuesSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Values
        </motion.h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
