"use client"

import { AnimatedSection } from "@/components/shared/animated-section"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      {/* Section background overlay */}
      <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm" />
      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-xl shadow-orange-500/10">
              <CardContent className="p-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  Specialize in React, Next.js, and TypeScript. Deliver modern web applications with
                  a focus on scalable solutions and clean code architecture with beautiful UI.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-orange-400">Hobbies</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>🎵 Music & Movies</li>
                      <li>💻 Learning about new technologies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
