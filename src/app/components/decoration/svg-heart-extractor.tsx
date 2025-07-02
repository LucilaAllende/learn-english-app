"use client"

import { useState, useEffect } from "react"

interface SVGHeartExtractorProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "random"
  size?: "small" | "medium" | "large"
  opacity?: number
  className?: string
}

export function SVGHeartExtractor({
  position = "random",
  size = "medium",
  opacity = 0.6,
  className = "",
}: SVGHeartExtractorProps) {
  const [positionClass, setPositionClass] = useState("")
  const [selectedHeartIndex, setSelectedHeartIndex] = useState(0)

  useEffect(() => {
    // Determinar la posición
    if (position === "random") {
      const positions = ["top-left", "top-right", "bottom-left", "bottom-right"]
      const randomPosition = positions[Math.floor(Math.random() * positions.length)]
      setPositionClass(getPositionClass(randomPosition as any))
    } else {
      setPositionClass(getPositionClass(position))
    }

    // Seleccionar un corazón aleatorio del SVG (asumiendo que hay múltiples)
    setSelectedHeartIndex(Math.floor(Math.random() * 3)) // Ajusta según cuántos corazones hay en tu SVG
  }, [position])

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
        return "w-12 h-12"
      case "medium":
        return "w-24 h-24"
      case "large":
        return "w-48 h-48"
      default:
        return "w-24 h-24"
    }
  }

  const sizeClass = getSizeClass(size)

  return (
    <div className={`absolute pointer-events-none ${positionClass} ${sizeClass} ${className}`} style={{ opacity }}>
      {/* Usar el SVG original pero con clip-path para mostrar solo un corazón */}
      <div
        className="w-full h-full"
        style={{
          backgroundImage: "url('/images/hearts.svg')",
          backgroundSize: "cover",
          backgroundPosition: `${selectedHeartIndex * -100}% 0`, // Ajustar según la disposición de corazones
          backgroundRepeat: "no-repeat",
        }}
      />
    </div>
  )
}
