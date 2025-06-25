"use client"

import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data/portfolio-data"
import { motion } from "framer-motion"
import { Github, Mail, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      {/* Subtle overlay for text readability while keeping background visible */}
      <div className="absolute inset-0 bg-slate-950/40" />
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent drop-shadow-lg"
            style={{
              backgroundSize: "200% 200%",
              textShadow: "0 0 40px rgba(56, 189, 248, 0.3)",
            }}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-300 mb-8 drop-shadow-lg"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.8)" }}
          >
            {personalInfo.title}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <div className="flex items-center gap-4 text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                <span>{personalInfo.github}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
