"use client"

import { useState, useEffect } from "react"

type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "random"
type SizeType = "small" | "medium" | "large"

interface HeartsDecorationProps {
  position?: PositionType
  size?: SizeType
  opacity?: number
  className?: string
  heartIndex?: number
}

export function HeartsDecoration({
  position = "random",
  size = "medium",
  opacity = 0.6,
  className = "",
  heartIndex,
}: HeartsDecorationProps) {
  const [positionClass, setPositionClass] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(1)

  useEffect(() => {
    // Determinar la posición
    if (position === "random") {
      const positions = ["top-left", "top-right", "bottom-left", "bottom-right"]
      const randomPosition = positions[Math.floor(Math.random() * positions.length)]
      setPositionClass(getPositionClass(randomPosition as PositionType))
    } else {
      setPositionClass(getPositionClass(position))
    }

    // Seleccionar corazón específico o aleatorio (del 1 al 18)
    if (heartIndex !== undefined) {
      setSelectedIndex(heartIndex)
    } else {
      setSelectedIndex(Math.floor(Math.random() * 18) + 1) // 1 a 18
    }
  }, [position, heartIndex])

  function getPositionClass(pos: PositionType) {
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

  function getSizeClass(sz: SizeType) {
    switch (sz) {
      case "small":
        return "w-8 h-8"
      case "medium":
        return "w-16 h-16"
      case "large":
        return "w-24 h-24"
      default:
        return "w-16 h-16"
    }
  }

  return (
    <div className={`absolute pointer-events-none ${positionClass} ${sizeClass} ${className}`} style={{ opacity }}>
      <Image src="images/hearts.svg" alt="Decoración de corazones" fill className="object-contain" />
    </div>
  )
}