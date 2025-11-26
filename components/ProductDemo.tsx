"use client";

import { motion } from "framer-motion";

export default function ProductDemo() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          See FlowMetrics AI in Action
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-lg sm:text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Watch our quick demo to see how FlowMetrics AI helps your revenue team reduce churn, 
          uncover expansion opportunities, and make data-driven decisions efficiently.
        </motion.p>

        {/* Video */}
        <motion.div
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <iframe
            className="w-full h-64 sm:h-96"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="FlowMetrics AI Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
