import { VerbTenseCard } from "@/app/components/cards/verb-tense-card"
import { getVerbTenses } from "@/lib/data"
import { IndividualHeart } from "@/app/components/decoration/individual-heart"

export default function HomePage() {
  const verbTenses = getVerbTenses()
  return (
    <div className="min-h-screen bg-[#f8f5f2] p-4 md:p-8 relative overflow-hidden">
      <IndividualHeart position="top-right" size="medium" opacity={0.4} />
      <IndividualHeart position="bottom-left" size="small" opacity={0.3} />
      <IndividualHeart position="top-left" size="large" opacity={0.2} />
      <header className="max-w-4xl mx-auto mb-8 relative">
        <h1 className="text-4xl md:text-5xl font-title text-[#2a9d8f] text-center tracking-wide">
          Mis Apuntes de Tiempos Verbales
        </h1>
        <div className="w-32 h-1 bg-[#e76f51] mx-auto mt-2 rounded-full"></div>
      </header>

      <main className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-md border-2 border-[#e0e0e0]">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-subtitle text-[#264653] mb-4 flex items-center">
            <span className="text-[#2a9d8f] mr-2">✏️</span>
            Tiempos Verbales
          </h2>
          <p className="font-text text-lg text-gray-700 mb-6">
            Haz clic en cualquier tiempo verbal para ver su estructura, usos y ejemplos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {verbTenses.map((tense) => (
              <VerbTenseCard
                key={tense.id}
                title={tense.name}
                description={tense.description}
                color={tense.textColor}
                href={`/${tense.category}/${tense.id}`}
              />
            ))}
        </div>
      </main>
    </div>
  )
}
