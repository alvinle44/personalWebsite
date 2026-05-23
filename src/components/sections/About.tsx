"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-28 bg-[#fffbfb]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-red-500 font-medium text-sm flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-red-400 inline-block" />
            a little about me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            the person behind the code.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Main bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-4 text-gray-800 leading-relaxed"
          >
            <p>
              I started out studying Biology at UC Irvine before eventually switching into computer
              science. Over time I found myself enjoying building and working with data much
              more, which led me to pursue my M.S. in Computer Science at Georgia Tech with a focus
              on machine learning.
            </p>
            <p>
              Personally, I&apos;m a big Warriors fan, spend way too much time
              following basketball, and enjoy playing billiards. I also started cutting hair during
              COVID and still do it because I genuinely the art behind it. Most of the time I&apos;m either
              working out, building side projects, playing baskebtall, or learning something new that caught my
              interest.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { label: "based in", value: "San Jose, CA" },
              { label: "studying at", value: "Georgia Tech" },
              { label: "undergrad", value: "UC Irvine" },
              { label: "specialization", value: "Machine Learning" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="text-xs text-gray-700 uppercase tracking-wide">{label}</span>
                <span className="text-sm font-semibold text-gray-700">{value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
