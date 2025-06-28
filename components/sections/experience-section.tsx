"use client"

import { AnimatedSection } from "@/components/shared/animated-section"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/lib/data/portfolio-data"
import { motion } from "framer-motion"
import { Calendar, MapPin, Users } from "lucide-react"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-8 text-gradient">
            Work Experience
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Here are some notable projects I've worked on. These represent a
            selection of my work - I've contributed to many more projects across
            various domains and technologies.
          </p>
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-xl shadow-orange-500/10">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-400">
                  Sotatek
                </CardTitle>
                <CardDescription className="text-slate-400 flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  2021 - 2025
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-colors shadow-xl shadow-orange-500/5">
                  <CardHeader>
                    <CardTitle className="text-xl text-orange-400">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-400">
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {project.client}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          Team size: {project.teamSize}
                        </span>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3 text-slate-200">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {project.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-slate-300 flex items-start gap-2"
                        >
                          <span className="text-orange-400 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
