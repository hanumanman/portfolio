"use client"

import { personalInfo } from "@/lib/data/portfolio-data"

export function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 text-center">
        <p className="text-slate-400">
          © 2024 {personalInfo.name}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
