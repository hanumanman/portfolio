"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackgroundParticles() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <>
      {/* Dark gradient background */}
      <motion.div
        style={{ y: y1 }}
        className="fixed inset-0 -z-30 bg-gradient-to-b from-slate-950 via-slate-900 to-black"
      />

      {/* Floating particles */}
      <motion.div style={{ y: y2 }} className="fixed inset-0 -z-20">
        {/* Small particles */}
        <div className="absolute top-1/4 left-1/5 w-0.5 h-0.5 bg-blue-400/30 rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-cyan-400/25 rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-0.5 h-0.5 bg-blue-300/20 rounded-full" />
        <div className="absolute bottom-1/4 right-1/3 w-0.5 h-0.5 bg-slate-400/15 rounded-full" />
        <div className="absolute top-2/3 left-2/3 w-0.5 h-0.5 bg-cyan-300/25 rounded-full" />
        <div className="absolute top-1/2 right-1/5 w-0.5 h-0.5 bg-blue-400/20 rounded-full" />
      </motion.div>
    </>
  )
}
