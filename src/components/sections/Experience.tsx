"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-28 bg-[#fef9f9]">
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
            where i&apos;ve been
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">experience.</h2>
        </motion.div>

        <div className="max-w-2xl space-y-3">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group bg-white border border-gray-100 hover:border-red-100 rounded-2xl p-5 transition-all duration-200 hover:shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.type === "education" ? "bg-red-300" : "bg-red-500"}`} />
                    <h3 className="font-semibold text-gray-700 text-sm">{item.role}</h3>
                  </div>
                  <p className="text-red-500 text-sm ml-4">{item.company}</p>
                </div>
                <span className="text-xs text-gray-600 whitespace-nowrap bg-gray-50 px-2.5 py-1 rounded-full flex-shrink-0">
                  {item.period}
                </span>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed ml-4 mb-3">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 ml-4">
                {item.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs text-gray-600 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
