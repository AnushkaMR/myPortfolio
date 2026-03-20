"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
  {
    title: "Goodway Website",
    description:
      "A modern static website built using Next.js and Tailwind CSS. The site features a clean UI, responsive design, and optimized performance to deliver a smooth user experience across all devices.",
    tech: ["Next.js", "Tailwind CSS"],
    imgUrl: "/project1.jpg",
    demoUrl: "https://www.goodway.in/",
    githubUrl: "https://github.com/AnushkaMR/goodway_amr.git",
  },
  {
    title: "Healthcare Management System",
    description:
      "A healthcare management system featuring appointment scheduling, patient management, and dedicated admin and doctor dashboards for efficient hospital operations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Express.js"],
    imgUrl: "/project2.png",
    demoUrl: "#",
    githubUrl:
      "https://github.com/cepdnaclk/e22-co2060-SmartCare-Healthcare-Management-System.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold font-outfit mb-6">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg">
            A selection of my recent work showcasing my skills in building
            robust, scalable web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="w-full h-56 bg-slate-800 relative overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
                <div className="w-full h-full bg-slate-700 group-hover:scale-110 transition-transform duration-700 ease-in-out flex items-center justify-center">
                  <Image
                    src={project.imgUrl}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>

                {/* Hover Overlay isolated within the image container */}
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center gap-4 backdrop-blur-md">
                  <a
                    href={project.demoUrl}
                    className="flex items-center justify-center gap-2 w-40 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-medium transition-colors shadow-lg shadow-blue-500/30 transform translate-y-4 group-hover:translate-y-0 duration-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 w-40 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium transition-colors shadow-lg transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 relative z-30 flex flex-col grow">
                <h3 className="text-2xl font-bold font-outfit text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-6 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/10 text-blue-300 border border-blue-500/20 rounded-full text-xs font-medium tracking-wide"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
