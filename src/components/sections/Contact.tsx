"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, Download, CheckCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{"let's talk."}</h2>
          <p className="mt-3 text-gray-700 max-w-md">
            {"Whether it's a job, a project, or just saying hi — my inbox is always open."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 space-y-3"
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

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-white border border-gray-100 rounded-2xl">
                <CheckCircle size={40} className="text-green-400 mb-3" />
                <h3 className="font-semibold text-gray-700 text-lg mb-1">sent!</h3>
                <p className="text-gray-600 text-sm">{"I'll get back to you soon."}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5">name</label>
                    <input type="text" required value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      placeholder="your name"
                      className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-200 focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5">email</label>
                    <input type="email" required value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-200 focus:bg-white transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5">message</label>
                  <textarea required rows={5} value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="what's up?"
                    className="w-full px-3 py-2.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-red-200 focus:bg-white transition-all resize-none"
                  />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white text-sm font-medium transition-colors"
                >
                  {loading
                    ? <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    : <><Send size={14} /> send it</>
                  }
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
