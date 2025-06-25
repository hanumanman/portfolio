"use client"

import { navigationItems } from "@/lib/data/portfolio-data"
import { motion } from "framer-motion"

export function Navigation() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="hidden md:block container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-6">
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
