"use client"

import { useEffect } from "react"

export function Analytics() {
  useEffect(() => {
    // Track page scroll progress
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      const scrollProgress = document.querySelector(".scroll-progress") as HTMLElement

      if (scrollProgress) {
        scrollProgress.style.width = `${scrollPercent * 100}%`
      }
    }

    // Create scroll progress indicator
    const scrollProgress = document.createElement("div")
    scrollProgress.classList.add("scroll-progress")
    document.body.appendChild(scrollProgress)

    // Add noise texture overlay
    const noiseOverlay = document.createElement("div")
    noiseOverlay.classList.add("noise-overlay")
    document.body.appendChild(noiseOverlay)

    window.addEventListener("scroll", updateScrollProgress)

    // Initialize scroll animations
    const initScrollAnimations = () => {
      const animatedElements = document.querySelectorAll(".reveal-on-scroll")

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate")
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1 },
      )

      animatedElements.forEach((el) => observer.observe(el))
    }

    // Initialize after a short delay to ensure all elements are loaded
    setTimeout(initScrollAnimations, 500)

    return () => {
      window.removeEventListener("scroll", updateScrollProgress)
      if (scrollProgress.parentNode) {
        scrollProgress.parentNode.removeChild(scrollProgress)
      }
      if (noiseOverlay.parentNode) {
        noiseOverlay.parentNode.removeChild(noiseOverlay)
      }
    }
  }, [])

  return null
}

