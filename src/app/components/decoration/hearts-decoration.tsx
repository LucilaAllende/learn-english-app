"use client"

import { useState, useEffect } from "react"

type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "random"
type SizeType = "small" | "medium" | "large"

interface HeartsDecorationProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "random"
  size?: "small" | "medium" | "large"
  opacity?: number
  className?: string
}

export function HeartsDecoration({
  position = "random",
  size = "medium",
  opacity = 0.6,
  className = "",
}: HeartsDecorationProps) {
  const [positionClass, setPositionClass] = useState("")

  useEffect(() => {
    // Determinar la posición
    if (position === "random") {
      const positions = ["top-left", "top-right", "bottom-left", "bottom-right"]
      const randomPosition = positions[Math.floor(Math.random() * positions.length)]
      setPositionClass(getPositionClass(randomPosition as any))
    } else {
      setPositionClass(getPositionClass(position))
    }
  }, [position])

  // Determinar el tamaño
  const sizeClass = getSizeClass(size)

  // Función para obtener la clase de posición
  function getPositionClass(pos: "top-left" | "top-right" | "bottom-left" | "bottom-right") {
    switch (pos) {
      case "top-left":
        return "top-0 left-0"
      case "top-right":
        return "top-0 right-0"
      case "bottom-left":
        return "bottom-0 left-0"
      case "bottom-right":
        return "bottom-0 right-0"
      default:
        return "top-0 right-0"
    }
  }

  // Función para obtener la clase de tamaño
  function getSizeClass(sz: "small" | "medium" | "large") {
    switch (sz) {
      case "small":
        return "w-24 h-24"
      case "medium":
        return "w-40 h-40"
      case "large":
        return "w-64 h-64"
      default:
        return "w-40 h-40"
    }
  }

  return (
    <div className={`absolute pointer-events-none ${positionClass} ${sizeClass} ${className}`} style={{ opacity }}>
      <Image src="images/hearts.svg" alt="Decoración de corazones" fill className="object-contain" />
    </div>
  )
}