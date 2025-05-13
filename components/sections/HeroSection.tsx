import { Github, Mail, MoveDown, MoveRight, Phone } from "lucide-react";
import { HeroParticles } from "../hero-particles";
import { Button } from "../ui/button";
import Link from "next/link";

export const HeroSection = () => {
  return (
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
          <Button variant="ghost" size="lg" className="rounded-full text-white">
            <MoveDown className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
