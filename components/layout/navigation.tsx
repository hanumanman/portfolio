"use client"

import { navigationItems } from "@/lib/data/portfolio-data"
import { useActiveSection } from "@/lib/hooks/use-active-section"

export function Navigation() {
  const activeSection = useActiveSection()

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: string
  ) => {
    e.preventDefault()
    const targetId = item.toLowerCase()
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="hidden md:block container mx-auto px-6 py-4">
        <div className="flex justify-center items-center">
          <div className="flex space-x-6">
            {navigationItems.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={e => handleNavClick(e, item)}
                className={`
                  text-slate-300 hover:text-white hover:text-gradient cursor-pointer
                  ${activeSection === item.toLowerCase() && "text-gradient"}
                `}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
