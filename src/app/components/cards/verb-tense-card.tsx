import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface VerbTenseCardProps {
  title: string
  description: string
  color: string
  href: string
}

export function VerbTenseCard({ title, description, color, href }: VerbTenseCardProps) {
  return (
    <Link
      href={href}
      className="block p-4 border-2 border-gray-200 rounded-lg hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-title mb-2" style={{ color }}>
            {title}
          </h3>
          <p className="font-text text-gray-600">{description}</p>
        </div>
        <ChevronRight 
          data-testid="chevron-icon"
          className="h-5 w-5 text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all" 
        />
      </div>
    </Link>
  )
}