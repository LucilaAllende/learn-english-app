export function GrammaticalElements({
  title,
  items,
  color
}: {
  title: string
  items?: string[]
  color: string
}) {
  if (!items || items.length === 0) return null

  return (
    <div className="flex items-start">
      <span className="font-subtitle text-gray-600 w-32 flex-shrink-0">{title}:</span>
      <div className="flex flex-wrap gap-1">
        {items.map((item, index) => (
          <span key={index} className={`px-2 py-1 rounded text-xs font-example ${color}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
