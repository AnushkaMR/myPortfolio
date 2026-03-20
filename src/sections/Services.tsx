"use client";

import { motion } from "framer-motion";
import { FaCode, FaPaintBrush, FaPenNib, FaLaptopCode } from "react-icons/fa";

const services = [
  {
    title: "Website Development",
    description:
      "Building responsive, robust, and scalable websites utilizing the modern web stack tailored to your needs.",
    icon: <FaCode />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive user interfaces and seamless experiences that prioritize user engagement.",
    icon: <FaPaintBrush />,
  },
  {
    title: "Logo Design",
    description:
      "Crafting memorable, timeless logos that establish a strong brand identity from the ground up.",
    icon: <FaPenNib />,
  },
  {
    title: "Frontend Development",
    description:
      "Translating beautifully designed UI into flawless interactive frontend code with React and Next.js.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Wix Website Design",
    description:
      "Professional Wix website design focused on creating modern, responsive, and user-friendly websites. I build visually appealing layouts with optimized structure to help businesses establish a strong online presence.",
    icon: <FaPaintBrush />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-slate-900/50"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-outfit mb-6">
            Services <span className="text-blue-500">I Offer</span>
          </h2>
          <p className="text-slate-400 text-lg">
            I provide complete end-to-line digital solutions to help you
            establish a powerful online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-3xl shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border border-white/10 relative group bg-white/5 backdrop-blur-md hover:-translate-y-1 cursor-pointer"
            >
              {/* Hover Glow Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>

              <div className="w-14 h-14 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center text-2xl text-slate-300 mb-5 group-hover:scale-110 group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all duration-500 z-10 relative shadow-inner">
                {service.icon}
              </div>

              <h3 className="text-lg font-semibold text-slate-200 mb-3 relative z-10 group-hover:text-white transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed relative z-10 group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
