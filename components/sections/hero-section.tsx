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
          transition={{ duration: 0.5 }}
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
            transition={{ delay: 0.2, duration: 0.5 }}
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
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:brightness-110 transition-all duration-200 shadow-lg shadow-orange-500/25 px-4 gap-2"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Mail className="size-5" />
              <span>Get In Touch</span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
