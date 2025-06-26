"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll()

  // Transform scroll progress to control the overlay opacity
  // At the top (0% scroll), overlay is mostly transparent
  // As user scrolls down, overlay becomes more opaque
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.1, 0.4, 0.7, 0.9]
  )

  return (
    <>
      <div
        className="fixed inset-0 -z-30 w-screen h-dvh min-h-screen bg-center bg-cover transform-gpu"
        style={{
          backgroundImage: "url('/background.jpg')",
        }}
      />

      {/* Animated overlay that gradually covers the background */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-950/90 via-slate-900/85 to-slate-800/90"
      />
    </>
  )
}
