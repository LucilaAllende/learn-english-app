interface ItemUsesProps {
  title: string
  example: string
}

export function ItemUses({ title, example }: ItemUsesProps) {
  return (
    <div className="flex flex-col">
      <p className="font-subtitle font-semibold text-[#264653]">• {title}</p>
      <p className="font-example text-gray-600 italic pl-4">&ldquo;{example}&rdquo;</p>
    </div>
  )
}