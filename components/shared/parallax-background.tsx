"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export function ParallaxBackground() {
  const { scrollYProgress } = useScroll()

  // Transform scroll progress to control the overlay opacity
  // At the top (0% scroll), overlay is mostly transparent
  // As user scrolls down, overlay becomes more opaque
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.1, 0.4, 0.7, 0.9])

  return (
    <>
      {/* Fixed background image - mobile-friendly approach */}
      <div
        className="fixed inset-0 -z-30 w-full"
        style={{
          backgroundImage: "url('/background.jpg')",
          // Remove backgroundAttachment: "fixed" as it causes issues on mobile
          // Use transform and will-change for better mobile compatibility
          transform: "translate3d(0, 0, 0)", // Force hardware acceleration
          willChange: "transform", // Optimize for transforms
          backgroundSize: "cover", // Ensure consistent sizing
          backgroundPosition: "center center", // Lock position
          backfaceVisibility: "hidden", // Prevent flickering
          // Use viewport units that account for mobile browser UI changes
          height: "100dvh", // Dynamic viewport height - accounts for mobile browser UI
          minHeight: "100vh", // Fallback for browsers that don't support dvh
          width: "100vw",
          top: 0,
          left: 0,
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
