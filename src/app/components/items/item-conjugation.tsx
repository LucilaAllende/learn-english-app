interface ConjugationProps {
  verb: string
  conjugations: {
    person: string
    conjugation: string
  }[]
}

export function ConjugationItem({ verb, conjugations }: ConjugationProps) {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-subtitle text-[#264653] mb-2">{verb}</h4>
      <div className="grid grid-cols-2 gap-2">
        {conjugations.map((conj, index) => (
          <div key={index} className="flex">
            <span className="font-subtitle w-24 text-[#2a9d8f]">{conj.person}</span>
            <span className="font-text">{conj.conjugation}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
