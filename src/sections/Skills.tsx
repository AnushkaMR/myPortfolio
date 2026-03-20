"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "HTML", level: 45 },
  { name: "CSS", level: 45 },
  { name: "JavaScript", level: 30 },
  { name: "React", level: 40 },
  { name: "Node.js", level: 20 },
  { name: "UI/UX Design", level: 60 },
  { name: "JAVA", level: 30 },
  { name: "Python", level: 40 },
  { name: "Ruby", level: 5 },
  { name: "Wix", level: 80 },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            A comprehensive overview of my technical expertise and creative
            abilities.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300 group flex flex-col items-center justify-center gap-4 cursor-pointer relative overflow-hidden shadow-lg hover:shadow-blue-500/20"
            >
              {/* Inner Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="text-4xl text-slate-300 group-hover:text-blue-400 transition-colors drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.6)] group-hover:scale-110 duration-300">
                {/* Simulated icon since we don't have dynamic imports setup for array here easily inline. We could just render name instead or a generic icon, but let's use text layout for extreme modern minimalism */}
                <div className="w-16 h-16 rounded-full bg-slate-800/80 border border-white/10 flex items-center justify-center font-bold text-xl group-hover:border-blue-500/50">
                  {skill.level}%
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-white relative z-10">
                {skill.name}
              </h3>

              {/* Progress bar line */}
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden relative z-10 opacity-50 group-hover:opacity-100 transition-opacity">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
