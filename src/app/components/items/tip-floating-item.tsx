import { TipItem } from "@/app/components/items/tip-item"

interface Tip {
  text: string
  image?: string
}

interface TipsFloatingProps {
  tips: Tip[]
}

export function TipsFloating({ tips }: TipsFloatingProps) {
  if (!tips || tips.length === 0) return null

  const positions = [
    "top-4 right-4", // Derecha arriba
    "top-1/3 right-4", // Derecha medio
    "bottom-1/4 right-4", // Derecha abajo
    "top-4 left-4", // Izquierda arriba
    "top-1/3 left-4", // Izquierda medio
    "bottom-1/4 left-4", // Izquierda abajo
  ]

  return (
    <>
      {tips.map((tip, index) => {
        const position = positions[index % positions.length]
        const rotation = Math.floor(Math.random() * 16) - 8

        return (
          <div key={index} className={`absolute ${position} z-10`}>
            <TipItem text={tip.text} image={tip.image} rotation={rotation} className="w-64 md:w-72" />
          </div>
        )
      })}
    </>
  )
}
