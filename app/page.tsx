import {
  MoveRight,
  Mail,
  Phone,
  Github,
  Code,
  Server,
  Database,
  Layout,
  Globe,
  Terminal,
  GitBranch,
  Smartphone,
  MoveDown,
  Dock,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedCounter } from "@/components/animated-counter";
import { SkillCard } from "@/components/skill-bar";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { HeroParticles } from "@/components/hero-particles";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 text-white">
        <HeroParticles />
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Nguyễn Huy Hoàng
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-400 mb-8 animate-slide-up">
              Frontend Developer
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-delay">
              <Link href="#contact">
                <Button className="group text-white bg-slate-800 hover:bg-slate-700">
                  Contact Me
                  <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="#projects">
                <Button
                  variant="outline"
                  className="text-white border-slate-700 hover:bg-slate-800"
                >
                  View Projects
                </Button>
              </Link>
            </div>
            <div className="flex justify-center gap-4 animate-fade-in-delay-2">
              <Link
                href="mailto:hoang20161678@gmail.com"
                className="hover:scale-125 transition-transform"
              >
                <Mail className="h-6 w-6" />
              </Link>
              <Link
                href="tel:+84814462181"
                className="hover:scale-125 transition-transform"
              >
                <Phone className="h-6 w-6" />
              </Link>
              <Link
                href="https://github.com/hanumanman"
                className="hover:scale-125 transition-transform"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <Link href="#about">
            <Button
              variant="ghost"
              size="lg"
              className="rounded-full text-white"
            >
              <MoveDown className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
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
                  I'm a passionate Frontend Developer with experience in
                  building responsive, user-friendly web applications. Currently
                  working at Sotatek since 2021, I specialize in React, Next.js,
                  and modern frontend technologies.
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

      {/* Experience Counter Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <ScrollReveal>
              <div className="text-center">
                <AnimatedCounter value={4} duration={2000} />
                <p className="text-slate-400">Years Experience</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-center">
                <AnimatedCounter value={20} suffix="+" duration={2000} />
                <p className="text-slate-400">Major Projects</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="text-center">
                <AnimatedCounter value={10} suffix="+" duration={2000} />
                <p className="text-slate-400">Technologies</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="text-center">
                <AnimatedCounter value={100} suffix="%" duration={2000} />
                <p className="text-slate-400">Client Satisfaction</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Skills & Expertise
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Programming Languages
                </h3>
                <SkillCard
                  name="JavaScript"
                  icon={<Code className="h-5 w-5" />}
                />
                <SkillCard
                  name="TypeScript"
                  icon={<Code className="h-5 w-5" />}
                />
                <SkillCard
                  name="HTML/CSS"
                  icon={<Layout className="h-5 w-5" />}
                />
                <SkillCard name="SQL" icon={<Database className="h-5 w-5" />} />
                <SkillCard
                  name="C/C++"
                  icon={<Terminal className="h-5 w-5" />}
                />
                <SkillCard name="Lua" icon={<Code className="h-5 w-5" />} />
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Frameworks & Tools
                </h3>
                <SkillCard name="React" icon={<Code className="h-5 w-5" />} />
                <SkillCard
                  name="Next.js"
                  icon={<Globe className="h-5 w-5" />}
                />
                <SkillCard
                  name="React Native"
                  icon={<Smartphone className="h-5 w-5" />}
                />
                <SkillCard name="Svelte" icon={<Code className="h-5 w-5" />} />
                <SkillCard
                  name="SvelteKit"
                  icon={<Code className="h-5 w-5" />}
                />
                <SkillCard
                  name="Node.js"
                  icon={<Server className="h-5 w-5" />}
                />
                <SkillCard
                  name="Git"
                  icon={<GitBranch className="h-5 w-5" />}
                />
                <SkillCard name="Docker" icon={<Dock className="h-5 w-5" />} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                        Researched and adopted new technologies to enhance
                        project development and efficiency
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
              Notable Projects
            </h2>
          </ScrollReveal>

          <Tabs defaultValue="all" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-slate-800">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-slate-700"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="web"
                className="data-[state=active]:bg-slate-700"
              >
                Web Apps
              </TabsTrigger>
              <TabsTrigger
                value="mobile"
                className="data-[state=active]:bg-slate-700"
              >
                Mobile Apps
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-8">
              <ScrollReveal>
                <ProjectCard
                  title="AI Chatbot"
                  client="Singapore-based fashion brand"
                  teamSize={10}
                  role="Frontend Developer"
                  description="Developed an interactive, responsive UI for various screen sizes using React (NextJS + Tailwind). Implemented localization using i18n for multi-language support. Integrated authentication systems using NextAuth and AzureAD."
                  technologies={[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "NextAuth",
                    "Prisma",
                    "MySQL",
                    "Jest",
                  ]}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <ProjectCard
                  title="PingPong Platform Mobile App"
                  client="Hongkong-based software company"
                  teamSize={10}
                  role="Frontend Developer"
                  description="Maintained a mobile application to connect pingpong coaches, players and venue, using React Native."
                  technologies={["React Native", "Mobile Development"]}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <ProjectCard
                  title="Admin Portal for User and Client Management"
                  client="Korean financial firm"
                  teamSize={20}
                  role="Frontend Developer"
                  description="Developed UI using React (NextJS + Shadcn + Tailwind). Integrated API with other backend developers using React Query + Axios. Crafted dynamic forms with custom validations using React Hook Form."
                  technologies={[
                    "React",
                    "Next.js",
                    "Shadcn UI",
                    "Tailwind CSS",
                    "React Query",
                    "Axios",
                    "React Hook Form",
                  ]}
                />
              </ScrollReveal>
            </TabsContent>

            <TabsContent value="web" className="space-y-8">
              <ScrollReveal>
                <ProjectCard
                  title="AI Chatbot"
                  client="Singapore-based fashion brand"
                  teamSize={10}
                  role="Frontend Developer"
                  description="Developed an interactive, responsive UI for various screen sizes using React (NextJS + Tailwind). Implemented localization using i18n for multi-language support. Integrated authentication systems using NextAuth and AzureAD."
                  technologies={[
                    "React",
                    "Next.js",
                    "Tailwind CSS",
                    "NextAuth",
                    "Prisma",
                    "MySQL",
                    "Jest",
                  ]}
                />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <ProjectCard
                  title="Admin Portal for User and Client Management"
                  client="Korean financial firm"
                  teamSize={20}
                  role="Frontend Developer"
                  description="Developed UI using React (NextJS + Shadcn + Tailwind). Integrated API with other backend developers using React Query + Axios. Crafted dynamic forms with custom validations using React Hook Form."
                  technologies={[
                    "React",
                    "Next.js",
                    "Shadcn UI",
                    "Tailwind CSS",
                    "React Query",
                    "Axios",
                    "React Hook Form",
                  ]}
                />
              </ScrollReveal>
            </TabsContent>

            <TabsContent value="mobile" className="space-y-8">
              <ScrollReveal>
                <ProjectCard
                  title="PingPong Platform Mobile App"
                  client="Hongkong-based software company"
                  teamSize={10}
                  role="Frontend Developer"
                  description="Maintained a mobile application to connect pingpong coaches, players and venue, using React Native."
                  technologies={["React Native", "Mobile Development"]}
                />
              </ScrollReveal>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Get In Touch
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <a
                      href="mailto:hoang20161678@gmail.com"
                      className="hover:underline"
                    >
                      hoang20161678@gmail.com
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <a href="tel:+84814462181" className="hover:underline">
                      +84-814-462-181
                    </a>
                  </div>

                  <div className="flex items-center">
                    <Github className="h-5 w-5 mr-3" />
                    <a
                      href="https://github.com/hanumanman"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      hanumanman
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <p>
            © {new Date().getFullYear()} Nguyễn Huy Hoàng. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
