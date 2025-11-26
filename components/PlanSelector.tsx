"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function PlanSelector() {
  const [revenue, setRevenue] = useState<number>(100000); // annual revenue
  const [employees, setEmployees] = useState<number>(50); // number of employees
  const [plan, setPlan] = useState<string>("Starter");

  // Function to determine the plan based on revenue and employee count
  const determinePlan = () => {
    if (revenue > 500000 || employees > 200) {
      return "Enterprise";
    } else if (revenue > 200000 || employees > 50) {
      return "Pro";
    } else {
      return "Starter";
    }
  };

  // Update plan whenever revenue or employees change
  useEffect(() => {
    setPlan(determinePlan());
  }, [revenue, employees]);

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Which Plan is Right for You?
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Enter your company’s revenue and employee count to find the most suitable FlowMetrics plan.
        </motion.p>

        {/* Input Fields */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Annual Revenue ($)</label>
            <input
              type="number"
              min={0}
              value={revenue}
              onChange={(e) => setRevenue(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Number of Employees</label>
            <input
              type="number"
              min={1}
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
        </motion.div>

        {/* Recommended Plan */}
        <motion.div
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Recommended Plan: <span className="text-teal-600">{plan}</span>
        </motion.div>
      </div>
    </section>
  );
}
