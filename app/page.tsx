"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  Github,
  MapPin,
  Calendar,
  Users,
  Code,
  Database,
  Globe,
  Wrench,
  Monitor,
} from "lucide-react"

const skills = {
  programming: ["JavaScript", "TypeScript", "HTML/CSS", "C", "C++", "SQL", "Lua"],
  frameworks: ["React", "NextJS", "Svelte", "Node", "Hono", "Express", "NestJS", "Elysia"],
  database: ["SQL", "SQLite", "PostgreSQL"],
  tools: ["Git", "Docker", "Confluence", "Jira", "Figma"],
  system: ["Linux", "Windows"],
  methodology: ["Agile"],
}

const projects = [
  {
    title: "AI Chatbot",
    client: "Singapore-based fashion brand",
    teamSize: 11,
    responsibilities: [
      "Setting up codebase and architecture",
      "Built responsive, accessible UIs adaptable across devices",
      "Integrate database connections",
      "Maintained code quality through unit testing",
    ],
  },
  {
    title: "International Hotel Platform",
    client: "Hongkong-based software company",
    teamSize: 20,
    responsibilities: [
      "Develop a travel platform affiliated with hotels around the world",
      "Built front-end interfaces and connected them with backend APIs collaboratively",
    ],
  },
  {
    title: "Admin Portal User and Client Management",
    client: "Korean financial firm",
    teamSize: 20,
    responsibilities: [
      "Translated Figma designs into functional UI components",
      "Handled API integration in coordination with backend teams",
    ],
  },
  {
    title: "US Commercial Site",
    client: "US financial firm",
    teamSize: 10,
    responsibilities: [
      "Maintained and improved the firm's main financial services website",
      "Migrated the tech stack from Vite + React to Next.js for better performance and scalability",
    ],
  },
]

function AnimatedSection({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ParallaxBackground() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])

  return (
    <>
      {/* Main background */}
      <motion.div
        style={{ y: y1 }}
        className="fixed inset-0 -z-30 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
      />

      {/* Floating shapes layer 1 */}
      <motion.div style={{ y: y2 }} className="fixed inset-0 -z-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-sky-500/10 rounded-full blur-xl" />
      </motion.div>

      {/* Floating shapes layer 2 */}
      <motion.div style={{ y: y3 }} className="fixed inset-0 -z-10">
        <div className="absolute top-60 right-10 w-24 h-24 bg-blue-400/20 rounded-full blur-lg" />
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-cyan-400/15 rounded-full blur-lg" />
        <div className="absolute top-1/3 left-20 w-28 h-28 bg-sky-400/20 rounded-full blur-lg" />
      </motion.div>

      {/* Pattern overlay */}
      <div
        className="fixed inset-0 -z-5 opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2360A5FA' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />
    </>
  )
}

function SkillBadge({ skill, delay }: { skill: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.1, y: -5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Badge
        variant="secondary"
        className="bg-slate-800/50 text-slate-300 hover:bg-blue-600/80 hover:text-white transition-all duration-300 px-4 py-2 text-sm border border-blue-500/20 backdrop-blur-sm"
      >
        {skill}
      </Badge>
    </motion.div>
  )
}

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => link.addEventListener("click", handleSmoothScroll))

    return () => {
      links.forEach(link => link.removeEventListener("click", handleSmoothScroll))
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <ParallaxBackground />

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 z-50"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
            >
              Nguyễn Huy Hoàng
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Education", "Experience", "Contact"].map(item => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ scale: 1.1 }}
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent"
              style={{
                backgroundSize: "200% 200%",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Nguyễn Huy Hoàng
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 mb-8"
            >
              Full-Stack Developer & Control Engineering Graduate
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>+84-814-462-181</span>
                </div>
                <div className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  <span>hanumanman</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
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
                    I'm a passionate Full-Stack Developer with a background in Control Engineering
                    and Automation. Currently working at Sotatek since 2021, I specialize in
                    building modern web applications using React, Next.js, and TypeScript.
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

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="max-w-6xl mx-auto">
              {Object.entries(skills).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-6">
                    {category === "programming" && <Code className="h-6 w-6 text-blue-400" />}
                    {category === "frameworks" && <Globe className="h-6 w-6 text-cyan-400" />}
                    {category === "database" && <Database className="h-6 w-6 text-sky-400" />}
                    {category === "tools" && <Wrench className="h-6 w-6 text-blue-400" />}
                    {category === "system" && <Monitor className="h-6 w-6 text-cyan-400" />}
                    {category === "methodology" && <Users className="h-6 w-6 text-sky-400" />}
                    <h3 className="text-2xl font-semibold capitalize text-slate-200">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, skillIndex) => (
                      <SkillBadge
                        key={skill}
                        skill={skill}
                        delay={categoryIndex * 0.1 + skillIndex * 0.05}
                      />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Education & Certificates
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-colors shadow-xl shadow-blue-500/10">
                  <CardHeader>
                    <CardTitle className="text-blue-400">
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
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-colors shadow-xl shadow-cyan-500/10">
                  <CardHeader>
                    <CardTitle className="text-cyan-400">British Council Vietnam</CardTitle>
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

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Work Experience
            </h2>
            <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
              Here are some notable projects I've worked on at Sotatek. These represent a selection
              of my work - I've contributed to many more projects across various domains and
              technologies.
            </p>
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm shadow-xl shadow-blue-500/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-400">Sotatek</CardTitle>
                  <CardDescription className="text-slate-400 flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    2021 - Present
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
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/50 transition-colors shadow-xl shadow-blue-500/5">
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-400">{project.title}</CardTitle>
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
                      <h4 className="font-semibold mb-3 text-slate-200">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {project.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-slate-300 flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-lg text-slate-300 mb-8">
                I'm always interested in new opportunities and exciting projects. Feel free to reach
                out if you'd like to work together!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.a
                  href="mailto:hoang20161678@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  hoang20161678@gmail.com
                </motion.a>
                <motion.a
                  href="tel:+84814462181"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  +84-814-462-181
                </motion.a>
                <motion.a
                  href="https://github.com/hanumanman"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  hanumanman
                </motion.a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Nguyễn Huy Hoàng. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
