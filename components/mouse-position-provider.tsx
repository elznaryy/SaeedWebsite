"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type MousePosition = {
  x: number
  y: number
}

const MousePositionContext = createContext<MousePosition>({ x: 0, y: 0 })

export const useMousePosition = () => useContext(MousePositionContext)

export function MousePositionProvider({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return <MousePositionContext.Provider value={mousePosition}>{children}</MousePositionContext.Provider>
}

