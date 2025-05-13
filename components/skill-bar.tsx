"use client";

import type React from "react";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  name: string;
  // level: "Beginner" | "Intermediate" | "Advanced" | "Expert"
  icon?: React.ReactNode;
}

const levelColors = {
  Beginner: "bg-slate-700",
  Intermediate: "bg-slate-600",
  Advanced: "bg-slate-500",
  Expert: "bg-slate-400",
};

export function SkillCard({ name, icon }: SkillCardProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setVisible(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref}>
      <Card
        className={`overflow-hidden transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <CardContent className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {icon && <div className="text-slate-400">{icon}</div>}
            <span className="font-medium text-slate-200">{name}</span>
          </div>
          {/* <Badge className={`${levelColors[level]} text-white border-none`}>
            {level}
          </Badge> */}
        </CardContent>
      </Card>
    </div>
  );
}
