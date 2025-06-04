"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Container } from "../../components/ui/container"

interface TechItem {
  name: string
  icon?: React.ReactNode
}

interface TechCategory {
  name: string
  items: TechItem[]
}

interface TechStackSectionProps {
  title?: string
  categories: TechCategory[]
  initialCategory?: string
  className?: string
}

export function TechStackSection({
  title = "Tech Stack",
  categories,
  initialCategory,
  className = "",
}: TechStackSectionProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || categories[0]?.name || "")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const categoriesRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Create a continuous list by duplicating categories
  const displayCategories = [...categories.map((cat) => cat.name), ...categories.map((cat) => cat.name)]

  // Get active category items
  const activeItems = categories.find((cat) => cat.name === activeCategory)?.items || []

  // Continuous horizontal scroll effect
  useEffect(() => {
    const scrollContainer = categoriesRef.current
    if (!scrollContainer) return

    const totalWidth = scrollContainer.scrollWidth / 2 // Half because we duplicated the list
    const scrollSpeed = 0.2 // pixels per frame
    let animationFrameId: number

    const scroll = () => {
      if (!scrollContainer) return

      // Update scroll position
      setScrollPosition((prev) => {
        const newPosition = prev + scrollSpeed

        // Reset position when we've scrolled through the first set of categories
        if (newPosition >= totalWidth) {
          return 0
        }

        return newPosition
      })

      // Apply scroll position
      scrollContainer.scrollTo({
        left: scrollPosition,
        behavior: "auto",
      })

      // Find which category is centered and make it active
      const centerPosition = scrollPosition + scrollContainer.clientWidth / 2
      const categoryWidth = totalWidth / categories.length
      const activeCategoryIndex = Math.floor((centerPosition % totalWidth) / categoryWidth)

      if (activeCategoryIndex >= 0 && activeCategoryIndex < categories.length) {
        const newActiveCategory = categories[activeCategoryIndex].name

        // Only trigger transition if category actually changes
        if (newActiveCategory !== activeCategory) {
          setIsTransitioning(true)

          // Small delay to allow fade out
          setTimeout(() => {
            setActiveCategory(newActiveCategory)

            // Reset transition state after content changes
            setTimeout(() => {
              setIsTransitioning(false)
            }, 50)
          }, 150)
        }
      }

      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [categories, scrollPosition, activeCategory])

  // Handle manual category selection
  const handleCategoryClick = (category: string) => {
    if (category !== activeCategory) {
      setIsTransitioning(true)

      setTimeout(() => {
        setActiveCategory(category)

        if (categoriesRef.current) {
          const scrollContainer = categoriesRef.current
          const categoryIndex = categories.findIndex((cat) => cat.name === category)

          if (categoryIndex !== -1) {
            const categoryWidth = scrollContainer.scrollWidth / (categories.length * 2)
            setScrollPosition(categoryIndex * categoryWidth)
          }
        }

        setTimeout(() => {
          setIsTransitioning(false)
        }, 50)
      }, 150)
    }
  }

  return (
    <section className={`bg-gray-50 py-16 ${className}`}>
      <Container>
        <h2 className="mb-12 text-3xl font-bold text-center">{title}</h2>
        <div className="mb-8 relative">
          <div
            ref={categoriesRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide py-2 px-4 mx-auto max-w-4xl"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {displayCategories.map((category, index) => (
              <div
                key={index}
                className={`cursor-pointer whitespace-nowrap rounded-full px-6 py-2 transition-all duration-700 ease-out ${
                  category === activeCategory
                    ? "bg-primary text-black font-medium scale-110 shadow-lg"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </div>
            ))}
          </div>
          {/* Gradient overlays for scroll indication */}
          <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>

        {/* Display items in grid with smooth fade transition */}
        <div
          className={`grid grid-cols-2 gap-4 md:grid-cols-5 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {activeItems.slice(0, 5).map((item, index) => (
            <div
              key={`${activeCategory}-${index}`}
              className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center"
            >
              {item.icon ? (
                <div className="mb-2 h-16 w-16 flex items-center justify-center">{item.icon}</div>
              ) : (
                <div className="mb-2 h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center">
                  <span className="text-sm font-medium">{item.name.substring(0, 2)}</span>
                </div>
              )}
              <h3 className="text-sm font-medium">{item.name}</h3>
            </div>
          ))}
        </div>

        {/* Additional items if more than 5 */}
        {activeItems.length > 5 && (
          <div
            className={`mt-8 grid grid-cols-2 gap-4 md:grid-cols-5 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            {activeItems.slice(5, 10).map((item, index) => (
              <div
                key={`${activeCategory}-additional-${index}`}
                className="flex flex-col items-center justify-center rounded-lg bg-white p-6 text-center"
              >
                {item.icon ? (
                  <div className="mb-2 h-16 w-16 flex items-center justify-center">{item.icon}</div>
                ) : (
                  <div className="mb-2 h-16 w-16 bg-gray-200 rounded-md flex items-center justify-center">
                    <span className="text-sm font-medium">{item.name.substring(0, 2)}</span>
                  </div>
                )}
                <h3 className="text-sm font-medium">{item.name}</h3>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
