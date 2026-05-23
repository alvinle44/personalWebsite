"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-28 bg-[#fffbfb]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-red-500 font-medium text-sm flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-red-400 inline-block" />
            what i work with
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">skills.</h2>
        </motion.div>

        <div className="space-y-8">
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + gi * 0.08 }}
              className="flex flex-col sm:flex-row sm:items-start gap-4"
            >
              <span className="w-32 flex-shrink-0 text-sm text-gray-600 pt-1">
                {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.25, delay: 0.15 + gi * 0.06 + si * 0.02 }}
                    className="text-sm bg-white border border-gray-100 hover:border-red-200 hover:bg-red-50 hover:text-red-600 text-gray-700 px-3 py-1 rounded-full transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* NVIDIA certs — same style as skill rows */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-start gap-4 mt-2"
        >
          <span className="w-32 flex-shrink-0 text-sm text-gray-600 pt-1">
            Certifications
          </span>
          <div className="flex flex-wrap gap-2">
            {["NVIDIA DLI — Deep Learning", "Diffusion Models", "Anomaly Detection", "RAG Agents with LLMs", "Agentic AI", "Rapid LLM Development"].map((cert) => (
              <span
                key={cert}
                className="text-sm bg-white border border-gray-100 hover:border-red-200 hover:bg-red-50 hover:text-red-600 text-gray-700 px-3 py-1 rounded-full transition-colors cursor-default"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
