import Link from "next/link"
import { ChevronRight } from "lucide-react"
import {IndividualHeart } from "@/app/components/decoration/individual-heart"

interface VerbTenseCardProps {
  title: string
  description: string
  color: string
  href: string
}

export function VerbTenseCard({ title, description, color, href }: VerbTenseCardProps) {
  // Probabilidad de mostrar un corazón (30%)
  const showHeart = Math.random() > 0.7

  return (
    <Link
      href={href}
      className="block p-4 border-2 border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 group relative overflow-hidden"
    >
      {/* Corazón individual decorativo */}
      {showHeart && (
        <IndividualHeart
          position="bottom-right"
          size="small"
          opacity={0.15}
          className="transform translate-x-2 translate-y-2"
        />
      )}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-title mb-2" style={{ color }}>
            {title}
          </h3>
          <p className="font-text text-gray-600">{description}</p>
        </div>
        <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" />
      </div>
    </Link>
  )
}
