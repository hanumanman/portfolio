"use client"

import { AnimatedSection } from "@/components/shared/animated-section"
import { SkillBadge } from "@/components/shared/skill-badge"
import { skills } from "@/lib/data/portfolio-data"
import { motion } from "framer-motion"
import { Code, Database, Globe, Monitor, Users, Wrench } from "lucide-react"

const categoryIcons = {
  programming: Code,
  frameworks: Globe,
  database: Database,
  tools: Wrench,
  system: Monitor,
  methodology: Users,
}

const categoryColors = {
  programming: "text-orange-400",
  frameworks: "text-amber-400",
  database: "text-yellow-400",
  tools: "text-orange-400",
  system: "text-amber-400",
  methodology: "text-yellow-400",
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Skills & Technologies
          </h2>
          <div className="max-w-6xl mx-auto">
            {Object.entries(skills).map(([category, items], categoryIndex) => {
              const IconComponent =
                categoryIcons[category as keyof typeof categoryIcons]
              const colorClass =
                categoryColors[category as keyof typeof categoryColors]

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <IconComponent className={`h-6 w-6 ${colorClass}`} />
                    <h3 className="text-2xl font-semibold capitalize text-slate-200">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        delay={categoryIndex * 0.05 + skillIndex * 0.03}
                      />
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
