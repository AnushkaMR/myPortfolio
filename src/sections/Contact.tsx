"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
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
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Have a project in mind or just want to say hi? Feel free to reach
            out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-6 glass p-6 rounded-2xl shadow-lg border border-white/5">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  Email Me
                </h4>
                <a
                  href="mailto:[EMAIL_ADDRESS]"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  anushkarasingolla@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 glass p-6 rounded-2xl shadow-lg border border-white/5">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  Call Me
                </h4>
                <a
                  href="tel:+94729133102"
                  className="text-slate-400 hover:text-blue-400 transition-colors"
                >
                  +94 72 913 3102
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 glass p-6 rounded-2xl shadow-lg border border-white/5">
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-white mb-1">
                  Location
                </h4>
                <p className="text-slate-400">Bandarawela, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-dark p-8 md:p-10 rounded-3xl shadow-2xl border border-white/5 relative bg-slate-800/50"
          >
            {/* Glow Overlay */}
            <div className="absolute inset-0 bg-blue-500/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"></div>

            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Anushka Madawa"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="[EMAIL_ADDRESS]"
                    required
                    className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full px-5 py-4 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-sans resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] focus:outline-none"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
