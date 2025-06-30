"use client"

import { useEffect, useState } from "react"

const NAVIGATION_OFFSET = 100
const BOTTOM_THRESHOLD = 200
const SCROLL_OPTIONS = { passive: true } as const

interface ScrollPosition {
  scrollY: number
  windowHeight: number
  documentHeight: number
}

interface SectionBounds {
  top: number
  bottom: number
  element: HTMLElement
  id: string
  isLast: boolean
}

/**
 * Custom hook to track the currently active section based on scroll position.
 * Handles special case for the last section when near page bottom
 */
export function useActiveSection(): string {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const getSections = (): NodeListOf<Element> => {
      return document.querySelectorAll("section[id]")
    }

    const getScrollPosition = (): ScrollPosition => ({
      scrollY: window.scrollY,
      windowHeight: window.innerHeight,
      documentHeight: document.documentElement.scrollHeight,
    })

    const isNearPageBottom = (position: ScrollPosition): boolean => {
      return (
        position.scrollY + position.windowHeight >=
        position.documentHeight - BOTTOM_THRESHOLD
      )
    }

    const createSectionBounds = (
      sections: NodeListOf<Element>
    ): SectionBounds[] => {
      return Array.from(sections).map((section, index) => {
        const element = section as HTMLElement
        const top = element.offsetTop - NAVIGATION_OFFSET

        return {
          top,
          bottom: top + element.offsetHeight,
          element,
          id: section.id,
          isLast: index === sections.length - 1,
        }
      })
    }

    const isSectionVisibleInViewport = (
      element: HTMLElement,
      windowHeight: number
    ): boolean => {
      const rect = element.getBoundingClientRect()
      return rect.top <= windowHeight && rect.bottom >= 0
    }

    const isScrollInSectionRange = (
      scrollY: number,
      bounds: SectionBounds
    ): boolean => {
      return scrollY >= bounds.top && scrollY < bounds.bottom
    }

    const determineActiveSection = (
      sectionBounds: SectionBounds[],
      position: ScrollPosition,
      nearBottom: boolean
    ): string => {
      let activeId = ""

      for (const bounds of sectionBounds) {
        if (bounds.isLast && nearBottom) {
          // Special handling for last section when near page bottom
          if (
            isSectionVisibleInViewport(bounds.element, position.windowHeight)
          ) {
            activeId = bounds.id
          }
        } else {
          // Standard scroll-based detection
          if (isScrollInSectionRange(position.scrollY, bounds)) {
            activeId = bounds.id
          }
        }
      }

      return activeId
    }

    const updateActiveSection = (): void => {
      const sections = getSections()
      if (sections.length === 0) return

      const scrollPosition = getScrollPosition()
      const nearBottom = isNearPageBottom(scrollPosition)
      const sectionBounds = createSectionBounds(sections)

      const currentSection = determineActiveSection(
        sectionBounds,
        scrollPosition,
        nearBottom
      )
      setActiveSection(currentSection)
    }

    // Initialize and set up event listener
    updateActiveSection()
    window.addEventListener("scroll", updateActiveSection, SCROLL_OPTIONS)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
    }
  }, [])

  return activeSection
}
