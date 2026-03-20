"use client";

import { motion, Variants } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import Image from "next/image";
export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6 z-10"
        >
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium tracking-wide">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl lg:text-5xl font-bold font-outfit tracking-tight leading-tight text-slate-300"
          >
            Hi, I&apos;m <span className="text-white">Anushka Madawa</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 text-6xl lg:text-8xl mt-4 block font-extrabold pb-4">
              Web Developer and Designer
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-400 text-lg sm:text-xl max-w-xl leading-relaxed"
          >
            I craft responsive, high-performance websites and dynamic user
            interfaces bringing creative ideas to life with modern web
            technologies.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 mt-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-transparent border border-slate-600 hover:border-slate-400 text-slate-200 font-semibold transition-all hover:bg-slate-800"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end z-10"
        >
          {/* Glowing Accents */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/30 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-[200px] h-[200px] bg-violet-500/30 rounded-full blur-[80px] -z-10"></div>

          {/* Profile Image Container */}
          <div className="relative w-[320px] h-[400px] lg:w-[400px] lg:h-[500px] rounded-[40px] border border-white/10 glass-dark overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
            <Image
              src="/avatar.png"
              alt="John Doe"
              fill
              className="object-cover"
              priority
            />

            {/* Overlay effect */}
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/0 transition-all duration-500 z-20"></div>
          </div>

          {/* Floating Icons */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 lg:-right-10 bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/5"
          >
            <FaReact className="text-4xl text-blue-400 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-20 left-0 lg:-left-10 bg-slate-800 p-4 rounded-2xl shadow-xl border border-white/5"
          >
            <FaJs className="text-4xl text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute top-1/2 -right-5 lg:-right-16 bg-slate-800 p-3 rounded-2xl shadow-xl border border-white/5"
          >
            <FaHtml5 className="text-3xl text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute -bottom-5 right-10 lg:right-5 bg-slate-800 p-3 rounded-2xl shadow-xl border border-white/5"
          >
            <FaCss3Alt className="text-3xl text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
