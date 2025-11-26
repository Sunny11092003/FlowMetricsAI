// src/components/PricingCTA.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingCTA() {
  return (
    <section className="bg-teal-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Get Started?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Choose the option that fits your business needs and start optimizing revenue today.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/signup">
            <motion.button
              className="px-6 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Trial
            </motion.button>
          </Link>

          <Link href="/book-demo">
            <motion.button
              className="px-6 py-3 border border-teal-600 text-teal-600 rounded-lg font-semibold hover:bg-teal-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Demo
            </motion.button>
          </Link>

          <Link href="/contact-sales">
            <motion.button
              className="px-6 py-3 border border-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Sales
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
