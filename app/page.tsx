"use client"

// Layout Components
import { Footer, Navigation, ProgressBar } from "@/components/layout"

// Section Components
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  SkillsSection,
} from "@/components/sections"

// Shared Components

// Hooks
import { useSmoothScroll } from "@/lib/hooks/use-smooth-scroll"

import { ParallaxBackground } from "@/components/shared"

export default function Portfolio() {
  // Initialize smooth scrolling behavior
  useSmoothScroll()

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <ParallaxBackground />
      <ProgressBar />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <EducationSection />
      <ExperienceSection />
      <ContactSection />

      <Footer />
    </div>
  )
}
