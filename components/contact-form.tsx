"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { LoaderCircle } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        e.currentTarget.reset();
      } else {
        const errorData = await response.json();
        toast({
          title: "Error sending message",
          description:
            errorData.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          name="name"
          placeholder="Your Name"
          required
          className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
        />
      </div>

      <div>
        <Input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
        />
      </div>

      <div>
        <Input
          name="subject"
          placeholder="Subject"
          required
          className="bg-slate-900 border-slate-800 text-white placeholder:text-slate-500"
        />
      </div>

      <div>
        <Textarea
          name="message"
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
        {isSubmitting ? (
          <LoaderCircle size={24} className="animate-spin" />
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
