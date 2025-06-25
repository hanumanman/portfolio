"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackgroundMinimal() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <>
      {/* Simple moving gradient */}
      <motion.div
        style={{ y: y1 }}
        className="fixed inset-0 -z-30 bg-gradient-to-br from-slate-950 to-slate-900"
      />
    </>
  )
}
