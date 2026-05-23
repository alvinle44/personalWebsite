"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";
import { projects } from "@/lib/data";

const FILTERS = ["all", "AI/ML", "Systems"];

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-white border border-gray-100 hover:border-red-100 rounded-2xl p-6 transition-all duration-200 hover:shadow-md hover:shadow-red-50 w-full sm:w-72"
    >
      {/* Category dot */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-full">
          {project.category}
        </span>
        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-red-500 transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon size={16} />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>

      <h3 className="font-semibold text-gray-700 text-base group-hover:text-red-600 transition-colors">
        {project.title}
      </h3>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-28 bg-[#fef9f9]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-red-500 font-medium text-sm flex items-center gap-2 mb-3">
            <span className="w-6 h-px bg-red-400 inline-block" />
            things i&apos;ve built
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">projects.</h2>
            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`text-sm px-4 py-1.5 rounded-full transition-colors ${
                    filter === f
                      ? "bg-red-600 text-white"
                      : "border border-gray-200 text-gray-700 hover:border-red-200 hover:text-red-500"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-sm text-gray-600"
        >
          more on{" "}
          <a
            href="https://github.com/alvinle44"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline underline-offset-2"
          >
            github ↗
          </a>
        </motion.p>
      </div>
    </section>
  );
}
