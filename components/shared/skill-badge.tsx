"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SkillBadgeProps {
  skill: string
  delay: number
}

export function SkillBadge({ skill, delay }: SkillBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.1, y: -5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Badge
        variant="secondary"
        className="bg-slate-800/50 text-slate-300 hover:bg-blue-600/80 hover:text-white transition-all duration-300 px-4 py-2 text-sm border border-blue-500/20 backdrop-blur-sm"
      >
        {skill}
      </Badge>
    </motion.div>
  )
}
