"use client"

import { AnimatedSection } from "@/components/shared/animated-section"
import { personalInfo } from "@/lib/data/portfolio-data"
import { motion } from "framer-motion"
import { Github, Mail, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-slate-300 mb-8">
              I'm always interested in new opportunities and exciting projects.
              Feel free to reach out if you'd like to work together!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
              >
                <Mail className="h-5 w-5" />
                {personalInfo.email}
              </motion.a>
              <motion.a
                href={`tel:${personalInfo.phone}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <Phone className="h-5 w-5" />
                {personalInfo.phone}
              </motion.a>
              <motion.a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors"
              >
                <Github className="h-5 w-5" />
                {personalInfo.github}
              </motion.a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
