"use client"

import { useEffect } from "react"

export function useSmoothScroll() {
  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const id = target.getAttribute("href")?.slice(1)
      if (id) {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: "smooth" })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach(link => link.addEventListener("click", handleSmoothScroll))

    return () => {
      links.forEach(link => link.removeEventListener("click", handleSmoothScroll))
    }
  }, [])
}
