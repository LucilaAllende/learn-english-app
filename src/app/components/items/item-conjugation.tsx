interface ConjugationProps {
  verb: string
  conjugations: {
    person: string
    conjugation: string
  }[]
}

export function ConjugationItem({ verb, conjugations }: ConjugationProps) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-subtitle text-[#264653] mb-4 font-semibold">{verb}</h4>
      <div className="space-y-2">
        {conjugations.map((conj, index) => (
          <div key={index} className="flex items-center gap-3">
            <span className="font-subtitle w-20 text-[#2a9d8f] font-medium">{conj.person}</span>
            <span className="font-text text-gray-700">{conj.conjugation}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
