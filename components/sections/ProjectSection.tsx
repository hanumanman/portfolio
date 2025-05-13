import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "../project-card";
import { ScrollReveal } from "../scroll-reveal";

export const ProjectSection = () => {
  return (
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
  );
};
