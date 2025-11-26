"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/footer";

export default function RequestDemoPage() {
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
    console.log("Demo Request Submitted:", form);
    alert("Your demo request has been submitted!");
  };

  return (
    <>
      <Header />
      <section className="min-h-screen bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Request a Personalized Demo
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how FlowMetrics AI can transform your revenue operations with
              predictive analytics and intelligent insights.
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={form.company}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  What would you like to explore?
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-black focus:outline-none"
                  placeholder="Tell us what you're looking for…"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold hover:bg-gray-900 transition"
              >
                Request Demo
              </button>
            </form>
          </div>

          {/* Free Trial */}
          <div className="text-center mt-12">
            <p className="text-gray-700 mb-4">Want to try it instantly?</p>
            <a
              href="/signup"
              className="inline-block bg-white border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 font-medium"
            >
              Start Free Trial →
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
