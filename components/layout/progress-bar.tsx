"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-primary z-50"
      style={{ scaleX }}
    />
  )
}
