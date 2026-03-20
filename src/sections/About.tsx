"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const stats = [
  { label: "Projects Completed", value: 9, suffix: "+" },
  { label: "Years Experience", value: 7, suffix: "+" },
  { label: "Happy Clients", value: 95, suffix: "%" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000; // ms
          const increment = value / (duration / 16); // 60fps

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 },
    );

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span
      ref={nodeRef}
      className="text-4xl md:text-5xl font-bold font-outfit text-white"
    >
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-outfit mb-6">
            About <span className="text-blue-500">Me</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I am a passionate Web Developer and UI Designer with a keen eye for
            detail. I specialize in creating modern, responsive, and
            high-performance web applications that deliver both functionality
            and beautiful user experiences. By combining strong technical skills
            with a creative design approach, I focus on building digital
            products that are visually engaging and easy to use. I also work as
            a freelancer on Fiverr, where I have successfully completed projects
            for clients worldwide and earned a 5-star rated account. My
            experience working with international clients has strengthened my
            ability to understand requirements, deliver high-quality solutions,
            and maintain excellent communication throughout every project. I am
            always excited to learn new technologies, improve my skills, and
            create innovative web experiences that make an impact.
          </p>
        </motion.div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="glass p-8 rounded-2xl border border-white/5 text-center shadow-2xl relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="text-slate-400 font-medium mt-4">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
