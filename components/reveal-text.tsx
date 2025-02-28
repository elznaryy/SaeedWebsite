"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  duration?: number
  once?: boolean
  as?: React.ElementType
}

export function RevealText({
  text,
  className,
  delay = 0,
  duration = 0.5,
  once = true,
  as: Component = "div",
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const spans = containerRef.current?.querySelectorAll("span")

            if (spans) {
              spans.forEach((span, i) => {
                span.style.transitionDelay = `${delay + i * 0.05}s`
                span.style.transitionDuration = `${duration}s`
                span.style.transform = "translateY(0)"
                span.style.opacity = "1"
              })
            }

            if (once) {
              observer.disconnect()
            }
          } else if (!once) {
            const spans = containerRef.current?.querySelectorAll("span")

            if (spans) {
              spans.forEach((span) => {
                span.style.transform = "translateY(100%)"
                span.style.opacity = "0"
              })
            }
          }
        })
      },
      { threshold: 0.1 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [delay, duration, once])

  return (
    <Component ref={containerRef} className={cn("reveal-text", className)}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            transitionProperty: "transform, opacity",
            transitionTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </Component>
  )
}

