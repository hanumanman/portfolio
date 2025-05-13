"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          placeholder="Your Name"
          required
          className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
        />
      </div>

      <div>
        <Input
          type="email"
          placeholder="Your Email"
          required
          className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
        />
      </div>

      <div>
        <Input
          placeholder="Subject"
          required
          className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
        />
      </div>

      <div>
        <Textarea
          placeholder="Your Message"
          required
          rows={5}
          className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500 resize-none"
        />
      </div>

      <Button
        type="submit"
        className="w-full text-slate-300 bg-slate-800 hover:bg-slate-700"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
