"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" className="py-28 bg-[#fffbfb]">
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
            {"don't be a stranger"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{"contact me!"}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="space-y-3 max-w-sm"
        >
          {[
            { icon: GithubIcon, label: "GitHub", handle: "@alvinle44", href: "https://github.com/alvinle44" },
            { icon: LinkedinIcon, label: "LinkedIn", handle: "alvinl00", href: "https://linkedin.com/in/alvinl00" },
            { icon: Mail, label: "Email", handle: "alvinle44@gmail.com", href: "mailto:alvinle44@gmail.com" },
          ].map(({ icon: Icon, label, handle, href }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-white border border-gray-100 hover:border-red-100 rounded-xl transition-all group"
            >
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-400 group-hover:bg-red-100 transition-colors flex-shrink-0">
                <Icon size={16} />
              </div>
              <div>
                <p className="text-xs text-gray-600">{label}</p>
                <p className="text-sm font-medium text-gray-700">{handle}</p>
              </div>
            </a>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium mt-2 px-1"
          >
            <Download size={14} />
            download resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
