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
      transition={{ delay, duration: 0.3 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Badge
        variant="secondary"
        className="cursor-pointer bg-slate-800/50 text-slate-300 hover:bg-gradient-primary hover:text-white transition-all duration-300 px-4 py-2 text-sm border border-orange-500/20 backdrop-blur-sm hover:scale-110"
      >
        {skill}
      </Badge>
    </motion.div>
  )
}
