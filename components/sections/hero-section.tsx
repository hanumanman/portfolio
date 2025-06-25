"use client"

import { Button } from "@/components/ui/button"
import { personalInfo } from "@/lib/data/portfolio-data"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"

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
            className="text-5xl md:text-7xl font-bold mb-8 text-slate-100 drop-shadow-xl leading-tight"
            style={{
              textShadow: "0 3px 6px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.6)",
              filter: "drop-shadow(0 0 8px rgba(0, 0, 0, 0.4))",
              paddingBottom: "0.125rem",
            }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-slate-200 mb-8 drop-shadow-xl font-medium"
            style={{
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8)",
              filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
            }}
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
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
