"use client"

import { navigationItems, personalInfo } from "@/lib/data/portfolio-data"
import { motion } from "framer-motion"

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.h1>
          <div className="hidden md:flex space-x-6">
            {navigationItems.map(item => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.1 }}
                className="text-slate-300 hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
