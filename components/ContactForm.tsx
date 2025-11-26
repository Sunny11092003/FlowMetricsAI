"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Request submitted!");
  };

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20">
        {/* Left Side: Request Demo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Book a Demo
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            See how FlowMetrics AI predicts churn, uncovers expansion 
            opportunities, and delivers real-time revenue intelligence.
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 rounded-2xl shadow-xl space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Work Email"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
            <textarea
              name="message"
              placeholder="Tell us what you're looking for..."
              rows={4}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            ></textarea>

            <button
              type="submit"
              className="w-full py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 transition"
            >
              Request Demo
            </button>
          </form>
        </motion.div>

        {/* Right Side: Free Trial & Chat */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white shadow-xl rounded-2xl p-10 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Start Free Trial
            </h3>
            <p className="text-gray-600 mb-6">
              Try FlowMetrics AI free for 14 days. No credit card needed.
            </p>
            <button className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
              Start Free Trial
            </button>
          </div>

          <div className="bg-gray-100 border rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Need Quick Help?
            </h3>
            <p className="text-gray-600 mb-6">
              Chat with our support team for questions on pricing, integrations, or setup.
            </p>
            <button className="w-full py-3 border border-gray-800 text-gray-900 rounded-lg font-semibold hover:bg-gray-200 transition">
              Open Chat
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
