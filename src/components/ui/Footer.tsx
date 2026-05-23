"use client";

import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-red-50 py-8 bg-[#fffbfb]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-sm text-gray-600">
            <span className="text-gray-700 font-medium">alvin le</span>
        </span>

        <div className="flex items-center gap-4">
          {[
            { icon: GithubIcon, href: "https://github.com/alvinle44", label: "GitHub" },
            { icon: LinkedinIcon, href: "https://linkedin.com/in/alvinl00", label: "LinkedIn" },
            { icon: Mail, href: "mailto:alvinle44@gmail.com", label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-red-500 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

        <p className="text-xs text-gray-300">Next.js · Tailwind · Framer Motion</p>
      </div>
    </footer>
  );
}
