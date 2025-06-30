"use client"

import { navigationItems } from "@/lib/data/portfolio-data"
import { useActiveSection } from "@/lib/hooks/use-active-section"

export function Navigation() {
  const activeSection = useActiveSection()

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="hidden md:block container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-6">
            {navigationItems.map(item => {
              const itemId = item.toLowerCase()
              return (
                <a
                  key={item}
                  href={`#${itemId}`}
                  className={`
                  text-slate-300 hover:text-white hover:text-gradient cursor-pointer
                  ${activeSection === itemId && "text-gradient"}
                `}
                >
                  {item}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </nav>
  )
}
