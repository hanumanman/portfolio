import { ScrollReveal } from "../scroll-reveal";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

export const ExpSection = () => {
  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            Work Experience
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Card className="mb-8 overflow-hidden border-none shadow-lg bg-slate-700">
              <div className="h-2 bg-slate-600"></div>
              <CardContent className="p-8">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Sotatek</h3>
                    <p className="text-slate-300">Frontend Developer</p>
                  </div>
                  <Badge className="bg-slate-600 text-slate-300">
                    2021 - Present
                  </Badge>
                </div>

                <div className="space-y-4 mt-6">
                  <h4 className="font-semibold text-lg text-white">
                    Responsibilities:
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-300">
                    <li>
                      Collaborated with frontend developers to implement
                      pixel-perfect UIs based on Figma designs
                    </li>
                    <li>
                      Optimized website performance through comprehensive
                      frontend metrics monitoring and analysis
                    </li>
                    <li>
                      Worked closely with backend developers to integrate
                      RESTful APIs seamlessly
                    </li>
                    <li>
                      Participated in daily Agile Scrum meetings with
                      international clients
                    </li>
                    <li>
                      Researched and adopted new technologies to enhance project
                      development and efficiency
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
