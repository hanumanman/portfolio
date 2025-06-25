"use client"

import { AnimatedSection } from "@/components/shared/animated-section"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function EducationSection() {
  return (
    <section id="education" className="py-20 relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
            Education & Certificates
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-colors shadow-xl shadow-orange-500/10 h-full flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="text-orange-400">
                    Hanoi University of Science and Technology
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Degree of Engineer in Control Engineering and Automation
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-colors shadow-xl shadow-amber-500/10 h-full flex flex-col">
                <CardHeader className="flex-1">
                  <CardTitle className="text-amber-400">British Council Vietnam</CardTitle>
                  <CardDescription className="text-slate-400">
                    7.5 in Academic IELTS Test
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
