"use client"

import { useState, useEffect } from "react"

interface HeartsFromSVGProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "random"
  size?: "small" | "medium" | "large"
  opacity?: number
  className?: string
  heartIndex?: number // Índice del corazón específico a mostrar
}

export function HeartsFromSVG({
  position = "random",
  size = "medium",
  opacity = 0.6,
  className = "",
  heartIndex,
}: HeartsFromSVGProps) {
  const [positionClass, setPositionClass] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    // Determinar la posición
    if (position === "random") {
      const positions = ["top-left", "top-right", "bottom-left", "bottom-right"]
      const randomPosition = positions[Math.floor(Math.random() * positions.length)]
      setPositionClass(getPositionClass(randomPosition as any))
    } else {
      setPositionClass(getPositionClass(position))
    }

    // Seleccionar corazón específico o aleatorio
    if (heartIndex !== undefined) {
      setSelectedIndex(heartIndex)
    } else {
      setSelectedIndex(Math.floor(Math.random() * 5)) // Ajustar según tu SVG
    }

    // Rotación aleatoria
    setRotation(Math.floor(Math.random() * 360))
  }, [position, heartIndex])

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

  function getSizeClass(sz: "small" | "medium" | "large") {
    switch (sz) {
      case "small":
        return "w-8 h-8"
      case "medium":
        return "w-16 h-16"
      case "large":
        return "w-32 h-32"
      default:
        return "w-16 h-16"
    }
  }

  const sizeClass = getSizeClass(size)

  return (
    <div
      className={`absolute pointer-events-none ${positionClass} ${sizeClass} ${className} overflow-hidden`}
      style={{
        opacity,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Mostrar el SVG completo pero recortado para mostrar solo un corazón */}
      <img
        src="/images/hearts.svg"
        alt="Heart decoration"
        className="w-full h-full object-cover"
        style={{
          objectPosition: `${selectedIndex * 20}% 50%`, // Ajustar según la disposición
          filter: `hue-rotate(${Math.random() * 60}deg)`, // Variación de color
        }}
      />
    </div>
  )
}
