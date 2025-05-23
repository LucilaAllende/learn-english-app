import { FormatText } from "@/app/utils/format-text"
import { cn } from "@/lib/utils"

interface TipItemProps {
  text: string
  image?: string
  className?: string
  rotation?: number
}

export function TipItem({ text, image, className, rotation }: TipItemProps) {
  const rotationFinal = rotation ?? Math.floor(Math.random() * 10) - 5

  const colors = [
    "bg-yellow-100 border-yellow-300",
    "bg-blue-50 border-blue-200",
    "bg-pink-50 border-pink-200",
    "bg-green-50 border-green-200",
    "bg-purple-50 border-purple-200",
  ]

  const colorRandom = colors[Math.floor(Math.random() * colors.length)]

  return (
    <div
      className={cn(`${colorRandom} p-4 rounded-lg shadow-md border-2 mb-3 transform relative z-10`, className)}
      style={{
        transform: `rotate(${rotationFinal}deg)`,
        maxWidth: "300px",
      }}
    >
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-gray-300 rounded-full opacity-70"></div>
      <div className="flex items-start">
        <span className="text-[#2a9d8f] mr-2 text-xl">💡</span>
        <div>
          <p className="font-note text-gray-700 text-lg">
            <FormatText text={text} />
          </p>
          {image && image !== "url/image" && (
            <img src={image || "/placeholder.svg"} alt="Tip visual" className="mt-2 rounded-md max-w-full h-auto" />
          )}
        </div>
      </div>
    </div>
  )
}