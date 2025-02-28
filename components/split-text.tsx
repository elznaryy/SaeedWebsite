"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SplitTextProps {
  children: string
  className?: string
  type?: "words" | "chars"
  animation?: "fade" | "slide" | "scale"
}

export function SplitText({ children, className, type = "chars", animation = "fade" }: SplitTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    observer.observe(textRef.current)

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current)
      }
    }
  }, [])

  const getAnimationClass = () => {
    switch (animation) {
      case "fade":
        return "opacity-0 animate-fade-in"
      case "slide":
        return "translate-y-10 animate-slide-up"
      case "scale":
        return "scale-0 animate-scale-in"
      default:
        return "opacity-0 animate-fade-in"
    }
  }

  const renderContent = () => {
    if (type === "words") {
      return children.split(" ").map((word, i) => (
        <span key={i} className="inline-block mr-[0.25em]">
          <span className={`inline-block ${getAnimationClass()}`} style={{ animationDelay: `${i * 0.1}s` }}>
            {word}
          </span>
        </span>
      ))
    } else {
      return children.split("").map((char, i) => (
        <span key={i} className="char inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))
    }
  }

  return (
    <div ref={textRef} className={cn("split-text-animation", className)}>
      {renderContent()}
    </div>
  )
}

