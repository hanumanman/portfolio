import { ScrollReveal } from "../scroll-reveal";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Education & Certification
              </h3>
              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white">
                    Hanoi University of Science and Technology
                  </h4>
                  <p className="text-slate-400 mb-4">
                    Degree of Engineer in Control Engineering and Automation
                  </p>
                  <div className="flex gap-2 items-center">
                    <Badge className="bg-slate-700 text-slate-400 hover:bg-slate-600">
                      Engineering
                    </Badge>
                    <Badge className="bg-slate-700 text-slate-400 hover:bg-slate-600">
                      Programming
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium mb-2 text-white">
                    British Council Vietnam
                  </h4>
                  <p className="text-slate-400 mb-4">
                    7.5 in Academic IELTS Test
                  </p>
                  <div className="flex items-center">
                    <Badge className="bg-slate-700 text-slate-400 hover:bg-slate-600">
                      Language Proficiency
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">
                Professional Summary
              </h3>
              <p className="text-slate-400">
                I'm a passionate Frontend Developer with experience in building
                responsive, user-friendly web applications. Currently working at
                Sotatek since 2021, I specialize in React, Next.js, and modern
                frontend technologies.
              </p>

              <h3 className="text-2xl font-semibold text-white">
                Hobbies & Interests
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-4">
                      <span className="text-2xl">🎵</span>
                    </div>
                    <h4 className="font-medium text-white">Music & Movies</h4>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center mb-4">
                      <span className="text-2xl">💻</span>
                    </div>
                    <h4 className="font-medium text-white">
                      Learning New Technologies
                    </h4>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
