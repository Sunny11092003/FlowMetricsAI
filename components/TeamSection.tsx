"use client";

import { motion } from "framer-motion";

const team = [
  { name: "Alex Rivera", role: "Founder & CEO" },
  { name: "Sarah Mitchell", role: "Head of Product" },
  { name: "Daniel Lee", role: "Lead ML Engineer" },
  { name: "Priya Sharma", role: "Customer Success Lead" },
];

export default function TeamSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet the Team
        </motion.h2>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="rounded-3xl border border-gray-200 bg-white/50 backdrop-blur-md p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="h-24 w-24 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-3xl font-bold shadow-md mb-6">
                {member.name.charAt(0)}
              </div>

              <h3 className="font-semibold text-2xl text-gray-900 text-center">
                {member.name}
              </h3>

              <p className="text-gray-600 text-center mt-1 text-sm">
                {member.role}
              </p>

              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

              <p className="text-gray-500 text-xs text-center mt-4 italic">
                “Driving the future of revenue intelligence.”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
