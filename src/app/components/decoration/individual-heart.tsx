"use client"

import { useState, useEffect } from "react"
import { getRandomHeart, type HeartData } from "@/lib/hearts-utils"

interface IndividualHeartProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "random"
  size?: "small" | "medium" | "large"
  opacity?: number
  className?: string
  heartId?: string // Para usar un corazón específico
  rotation?: number
}

export function IndividualHeart({
  position = "random",
  size = "medium",
  opacity = 0.6,
  className = "",
  heartId,
  rotation,
}: IndividualHeartProps) {
  const [heartData, setHeartData] = useState<HeartData | null>(null)
  const [positionClass, setPositionClass] = useState("")
  const [rotationAngle, setRotationAngle] = useState(0)

  useEffect(() => {
    // Seleccionar corazón (específico o aleatorio)
    if (heartId) {
      const specificHeart = getRandomHeart() // Aquí podrías usar getHeartById si tienes IDs específicos
      setHeartData(specificHeart)
    } else {
      setHeartData(getRandomHeart())
    }

    // Determinar la posición
    if (position === "random") {
      const positions = ["top-left", "top-right", "bottom-left", "bottom-right"]
      const randomPosition = positions[Math.floor(Math.random() * positions.length)]
      setPositionClass(getPositionClass(randomPosition as any))
    } else {
      setPositionClass(getPositionClass(position))
    }

    // Determinar rotación
    if (rotation !== undefined) {
      setRotationAngle(rotation)
    } else {
      setRotationAngle(Math.floor(Math.random() * 360))
    }
  }, [position, heartId, rotation])

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
        return "w-6 h-6"
      case "medium":
        return "w-12 h-12"
      case "large":
        return "w-24 h-24"
      default:
        return "w-12 h-12"
    }
  }

  if (!heartData) return null

  const sizeClass = getSizeClass(size)

  return (
    <div
      className={`absolute pointer-events-none ${positionClass} ${sizeClass} ${className}`}
      style={{
        opacity,
        transform: `rotate(${rotationAngle}deg)`,
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d={heartData.path} fill={heartData.fill} transform={heartData.transform} />
      </svg>
    </div>
  )
}
