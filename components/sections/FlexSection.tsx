import { AnimatedCounter } from "../animated-counter";
import { ScrollReveal } from "../scroll-reveal";

export const FlexSection = () => {
  return (
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
  );
};
