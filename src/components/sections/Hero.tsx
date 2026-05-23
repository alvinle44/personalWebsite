"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#fffbfb]">
      {/* Dot pattern — top right corner only */}
      <div className="absolute top-0 right-0 w-72 h-72 dot-bg opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 dot-bg opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-red-500 font-medium mb-4 flex items-center gap-2"
            >
              <span className="w-6 h-px bg-red-400 inline-block" />
              hi!
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-5"
            >
              I&apos;m{" "}
              <span className="relative inline-block">
                Alvin
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  height="6"
                >
                  <path
                    d="M0,5 Q25,0 50,5 Q75,10 100,5"
                    stroke="#dc2626"
                    strokeWidth="2.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-700 text-lg leading-relaxed mb-8 max-w-md"
            >
              I&apos;m a CS grad student at Georgia Tech studying machine learning. I like building
              projects around data, AI, and sports analytics — usually things that start as random
              ideas and somehow turn into full applications. Lately I&apos;ve been working on AI
              tools, prediction models, and full-stack apps while learning way too many new
              technologies along the way.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-2.5 rounded-full bg-red-600 hover:bg-red-700 text-white text-sm font-medium transition-colors"
              >
                see my work
              </button>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full border border-gray-200 hover:border-red-200 hover:bg-red-50 text-gray-700 hover:text-red-600 text-sm font-medium transition-colors"
              >
                resume
              </a>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-2.5 rounded-full border border-gray-200 hover:border-red-200 hover:bg-red-50 text-gray-700 hover:text-red-600 text-sm font-medium transition-colors"
              >
                say hi
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="flex items-center gap-4"
            >
              {[
                { icon: GithubIcon, href: "https://github.com/alvinle44", label: "GitHub" },
                { icon: LinkedinIcon, href: "https://linkedin.com/in/alvinl00", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-gray-600 hover:text-red-600 transition-colors"
                >
                  <Icon size={19} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Red circle behind photo */}
              <div className="absolute -inset-3 rounded-full bg-red-100 blur-2xl opacity-60" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl ring-1 ring-red-100">
                <Image
                  src="/alvin.png"
                  alt="Alvin Le"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-300 hover:text-red-400 transition-colors flex flex-col items-center gap-1"
        >
          <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
