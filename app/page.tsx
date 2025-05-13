import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExpSection } from "@/components/sections/ExpSection";
import { FlexSection } from "@/components/sections/FlexSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { SkillSection } from "@/components/sections/SkillSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FlexSection />
      <SkillSection />
      <ExpSection />
      <ProjectSection />
      <ContactSection />

      <footer className="py-8 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <div className="space-y-4"></div>
          <p className="text-sm text-slate-500">
            Designed & Built with Next.js and Tailwind CSS @{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </main>
  );
}
