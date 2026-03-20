"use client";

import { useState, useEffect } from "react";
import { default as NextLink } from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/80 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <NextLink href="#home" className="text-2xl font-bold font-outfit text-white tracking-wide">
          Portfolio<span className="text-blue-500">.</span>
        </NextLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NextLink
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors hover:text-blue-400"
            >
              {link.name}
            </NextLink>
          ))}
          <NextLink
            href="#contact"
            className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Hire Me
          </NextLink>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-2xl text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-slate-900 shadow-xl border-b border-white/10 flex flex-col items-center py-6 gap-6 md:hidden"
          >
            {links.map((link) => (
              <NextLink
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
              >
                {link.name}
              </NextLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
