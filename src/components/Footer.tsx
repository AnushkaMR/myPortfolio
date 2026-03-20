"use client";

import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import { default as NextLink } from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Footer Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/5 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="flex flex-col items-center md:items-start">
            <NextLink
              href="#home"
              className="text-3xl font-bold font-outfit text-white tracking-wide mb-4"
            >
              <span className="text-blue-500">&lt;</span>
              Anushka Madawa
              <span className="text-blue-500">/&gt;</span>
            </NextLink>
            <p className="text-slate-400 text-sm max-w-sm text-center md:text-left">
              Building dynamic, highly functional, and visually stunning digital
              experiences. Let&apos;s create something extraordinary together.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all shadow-lg"
            >
              <FaGithub className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all shadow-lg"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all shadow-lg"
            >
              <FaInstagram className="text-xl" />
            </motion.a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {currentYear} Anushka Madawa. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-2">
            Crafted with <FaHeart className="text-red-500" /> & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
