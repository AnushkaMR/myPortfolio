"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "dionnejdmt",
    role: "Shop Owner, United Kingdom",
    content:
      "Anushka was very patient and listened to everything I needed for the website and made all the changes. Very professional and I would work with them again.",
    initials: "DJ",
  },
  {
    name: "p_vogelfrei",
    role: "Resaller, Germany",
    content: "good work, I will come back",
    initials: "PV",
  },
  {
    name: "moseschol",
    role: "Shop Owner, United States",
    content: "Great work. The site looks great!",
    initials: "MC",
  },
  {
    name: "sureshway",
    role: "CEO, India",
    content: "Very Good Service..!",
    initials: "SW",
  },
  {
    name: "hiphoptimes",
    role: "Music Editor, United States",
    content: "He’s very great at what he does. I’m so happy with my website.",
    initials: "HT",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-24 relative overflow-hidden bg-slate-900 border-t border-white/5">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-outfit mb-6">
            Client <span className="text-blue-500">Testimonials</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See what others have to say about my work.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative flex items-center justify-center">
          {/* Controls - Left */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 lg:-left-12 z-20 w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all shadow-lg hidden md:flex"
          >
            <FaChevronLeft />
          </button>

          <div className="w-full relative min-h-[300px] flex justify-center items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass-dark p-10 md:p-14 rounded-3xl w-full max-w-3xl mx-auto border border-white/10 relative shadow-2xl"
              >
                <FaQuoteLeft className="text-4xl md:text-6xl text-blue-500/20 absolute top-8 left-8" />

                <p className="text-lg md:text-xl text-slate-300 italic mb-8 relative z-10 leading-relaxed text-center">
                  &quot;{testimonials[current].content}&quot;
                </p>

                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-slate-900">
                    {testimonials[current].initials}
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-white font-outfit text-lg">
                      {testimonials[current].name}
                    </h4>
                    <p className="text-blue-400 text-sm">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls - Right */}
          <button
            onClick={nextTestimonial}
            className="absolute right-0 lg:-right-12 z-20 w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all shadow-lg hidden md:flex"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-slate-800 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
