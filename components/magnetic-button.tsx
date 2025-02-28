"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useMousePosition } from "./mouse-position-provider"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  strength?: number
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

export function MagneticButton({
  children,
  className,
  strength = 30,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const mousePosition = useMousePosition()
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!buttonRef.current) return

    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()
    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = mousePosition.x - centerX
    const distanceY = mousePosition.y - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)
    const radius = Math.max(width, height) * 1.5

    if (distance < radius) {
      const x = (distanceX / radius) * strength
      const y = (distanceY / radius) * strength
      setPosition({ x, y })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }, [mousePosition, strength])

  return (
    <Button
      ref={buttonRef}
      className={cn("transition-transform duration-100", className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      variant={variant}
      size={size}
      asChild={asChild}
      {...props}
    >
      {children}
    </Button>
  )
}

