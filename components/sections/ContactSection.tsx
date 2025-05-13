import { Mail, Phone, Github } from "lucide-react";
import { ContactForm } from "../contact-form";
import { ScrollReveal } from "../scroll-reveal";

export const ContactSection = () => {
  return (
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
  );
};
