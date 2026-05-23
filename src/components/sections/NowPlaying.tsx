"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { currentSong } from "@/lib/data";

export default function NowPlaying() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-10 bg-[#fffbfb]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-5"
        >
          <span className="w-6 h-px bg-red-400 inline-block" />
          <p className="text-red-500 font-medium text-sm">currently playing</p>
        </motion.div>

        <motion.a
          href={currentSong.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="group inline-flex items-center gap-4 bg-white border border-gray-100 hover:border-red-100 rounded-2xl p-4 transition-all hover:shadow-md hover:shadow-red-50 max-w-sm"
        >
          {/* Album art */}
          <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-red-50">
            <Image
              src={currentSong.coverUrl}
              alt={`${currentSong.title} cover`}
              fill
              className="object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            {/* Animated bars overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl flex items-center justify-center">
              <div className="hidden group-hover:flex items-end gap-0.5 h-5">
                {[1, 2, 3].map((i) => (
                  <motion.span
                    key={i}
                    className="w-1 bg-white rounded-full"
                    animate={{ height: ["40%", "100%", "60%", "80%", "40%"] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Song info */}
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-600 mb-0.5">on repeat</p>
            <p className="font-semibold text-gray-900 truncate group-hover:text-red-600 transition-colors">
              {currentSong.title}
            </p>
            <p className="text-sm text-gray-600 truncate">{currentSong.artist}</p>
            <p className="text-xs text-gray-400 truncate mt-0.5">{currentSong.album}</p>
          </div>

          {/* Spotify logo */}
          <div className="flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#1DB954">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
