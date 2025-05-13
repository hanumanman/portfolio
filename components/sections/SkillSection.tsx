import {
  Code,
  Server,
  Database,
  Dock,
  GitBranch,
  Globe,
  Layout,
  Smartphone,
  Terminal,
} from "lucide-react";
import { ScrollReveal } from "../scroll-reveal";
import { SkillCard } from "../skill-bar";

export const SkillSection = () => {
  return (
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
              <SkillCard name="C/C++" icon={<Terminal className="h-5 w-5" />} />
              <SkillCard name="Lua" icon={<Code className="h-5 w-5" />} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Frameworks & Tools
              </h3>
              <SkillCard name="React" icon={<Code className="h-5 w-5" />} />
              <SkillCard name="Next.js" icon={<Globe className="h-5 w-5" />} />
              <SkillCard
                name="React Native"
                icon={<Smartphone className="h-5 w-5" />}
              />
              <SkillCard name="Svelte" icon={<Code className="h-5 w-5" />} />
              <SkillCard name="SvelteKit" icon={<Code className="h-5 w-5" />} />
              <SkillCard name="Node.js" icon={<Server className="h-5 w-5" />} />
              <SkillCard name="Git" icon={<GitBranch className="h-5 w-5" />} />
              <SkillCard name="Docker" icon={<Dock className="h-5 w-5" />} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
