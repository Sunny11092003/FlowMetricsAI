"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ROICalculator() {
  // State variables
  const [companySize, setCompanySize] = useState<number>(100);
  const [acv, setAcv] = useState<number>(1000);
  const [churnRate, setChurnRate] = useState<number>(10);
  const [roi, setRoi] = useState<number>(0);

  // Function to calculate ROI
  const calculateROI = () => {
    const improvementFactor = 0.3; // Assume FlowMetrics reduces churn by 30%
    const saved = companySize * acv * (churnRate / 100) * improvementFactor;
    setRoi(saved);
  };

  // Input change handler with proper typing
  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<number>>) => 
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setter(Number(e.target.value));
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          ROI Calculator
        </motion.h2>

        <motion.p
          className="text-gray-700 text-lg mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Estimate how much revenue FlowMetrics can save for your company by reducing churn.
        </motion.p>

        {/* Input Fields */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Company Size</label>
            <input
              type="number"
              min={1}
              value={companySize}
              onChange={handleInputChange(setCompanySize)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">ACV ($)</label>
            <input
              type="number"
              min={0}
              value={acv}
              onChange={handleInputChange(setAcv)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Current Churn (%)</label>
            <input
              type="number"
              min={0}
              max={100}
              value={churnRate}
              onChange={handleInputChange(setChurnRate)}
              className="w-full p-3 rounded-lg border border-gray-300"
            />
          </div>
        </motion.div>

        {/* Calculate Button */}
        <motion.button
          onClick={calculateROI}
          className="bg-teal-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-teal-500 transition-colors mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Calculate ROI
        </motion.button>

        {/* Result */}
        <motion.div
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Estimated Revenue Saved: <span className="text-teal-600">${roi.toLocaleString()}</span>
        </motion.div>
      </div>
    </section>
  );
}
