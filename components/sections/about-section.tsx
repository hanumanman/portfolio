"use client"

import { AnimatedSection } from "@/components/shared/animated-section"
import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-xl shadow-blue-500/10">
              <CardContent className="p-8">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I'm a passionate Full-Stack Developer with a background in Control Engineering and
                  Automation. Currently working at Sotatek since 2021, I specialize in building
                  modern web applications using React, Next.js, and TypeScript.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Hobbies</h3>
                    <ul className="space-y-2 text-slate-300">
                      <li>🎵 Music & Movies</li>
                      <li>💻 Learning new technologies with side projects</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-blue-400">Approach</h3>
                    <p className="text-slate-300">
                      I follow secure coding practices and work collaboratively in Agile
                      environments with international clients to deliver high-quality solutions.
                    </p>
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
