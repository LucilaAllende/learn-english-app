export function AnalysisItem({
  label,
  value,
  color
}: {
  label: string
  value: string | null | undefined
  color: string
}) {
  if (!value) return null

  return (
    <div className="flex items-start">
      <span className="font-subtitle text-gray-600 w-32 flex-shrink-0">{label}:</span>
      <span className={`font-text ${color} font-medium`}>{value}</span>
    </div>
  )
}
