type ItemStructureType = "affirmative" | "negative" | "interrogative"

interface ItemStructureProps {
  type: ItemStructureType
  children: React.ReactNode
}

export function ItemStructure({ type, children }: ItemStructureProps) {
  const colorMap = {
    affirmative: "text-[#2a9d8f]",
    negative: "text-[#e76f51]",
    interrogative: "text-[#e9c46a]",
  }

  const labelMap = {
    affirmative: "Afirmativo:",
    negative: "Negativo:",
    interrogative: "Interrogativo:",
  }

  return (
    <p className="mb-2">
      <span className={`font-bold ${colorMap[type]}`}>{labelMap[type]}</span> {children}
    </p>
  )
}