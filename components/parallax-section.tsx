"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  bgImage?: string
  speed?: number
  direction?: "up" | "down"
}

export function ParallaxSection({ children, className, bgImage, speed = 0.5, direction = "up" }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const percentageScrolled = (windowHeight - top) / (windowHeight + height)

      // Calculate parallax offset
      const parallaxOffset = direction === "up" ? percentageScrolled * speed * 100 : -percentageScrolled * speed * 100

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, direction])

  return (
    <div ref={sectionRef} className={cn("parallax relative overflow-hidden", className)}>
      {bgImage && (
        <div
          className="parallax-bg absolute inset-0 w-full h-[120%] bg-cover bg-center -z-10"
          style={{
            backgroundImage: `url(${bgImage})`,
            transform: `translateY(${offset}px)`,
          }}
        />
      )}
      {children}
    </div>
  )
}

