import Link from "next/link"
import { useMemo } from "react"
import { ArrowLeft } from "lucide-react"

import { ItemUses } from "@/app/components/items/item-uses"
import { ExampleCard } from "@/app/components/cards/example-card"
import { ItemStructure } from "@/app/components/items/item-structure"
import { TipsFloating } from "@/app/components/items/item-tip-floating"
import { ConjugationItem } from "@/app/components/items/item-conjugation"
import { HeartsDecoration } from "@/app/components/decoration/hearts-decoration"
import { FormatText } from "@/app/utils/format-text"
import { getVerbTenses, VerbConjugation } from "@/lib/data"

export default function PastSimplePage() {
  const verbTenses = getVerbTenses()
  const tense = useMemo(() => verbTenses.find((t) => t.id === "past-continuous"), [])

  if (!tense) return <p>No se encontró el tiempo verbal.</p>

  return (
    <div className="min-h-screen bg-[#f8f5f2] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#2a9d8f] hover:underline mb-6 font-text">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al índice
        </Link>

        <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#e0e0e0]">
          <h1 className="text-4xl font-title text-[#2a9d8f] mb-2 relative">
            {tense.name}
            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#2a9d8f] opacity-20 -z-10"></div>
          </h1>

          <div className="mt-8 space-y-8">
            {tense.structure && (
              <section>
                <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Estructura
                </h2>

                <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200 font-text">
                  {tense.structure.affirmative && (
                    <ItemStructure type="affirmative">
                      <FormatText text={tense.structure.affirmative} />
                    </ItemStructure>
                  )}
                  {tense.structure.negative && (
                    <ItemStructure type="negative">
                      <FormatText text={tense.structure.negative} />
                    </ItemStructure>
                  )}
                  {tense.structure.interrogative && (
                    <ItemStructure type="interrogative">
                      <FormatText text={tense.structure.interrogative} />
                    </ItemStructure>
                  )}
                </div>

                {tense.examples && tense.examples?.length > 0 && (
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {tense.examples.map((ex) => (
                      <ExampleCard
                        key={ex.title}
                        title={ex.title}
                        examples={ex.examples}
                        color={ex.color}
                      />
                    ))}
                  </div>
                )}
              </section>
            )}
            {tense.uses && tense.uses?.length > 0 && (
              <section>
                <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Usos
                </h2>

                <div className="space-y-3 font-text">
                  {tense.uses.map((use) => (
                    <ItemUses key={use.title} title={use.title} example={use.example} />
                  ))}
                </div>
              </section>
            )}

            {tense.timeExpressions && tense.timeExpressions?.length > 0 && (
              <section>
                <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Expresiones de tiempo
                </h2>

                <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200 font-table">
                  <ul className="list-disc pl-5 space-y-1">
                    {tense.timeExpressions.map((expr, idx) => (
                      <li key={idx}>{expr}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {tense.notes && tense.notes?.length > 0 && (
              <section>
                <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Nota importante
                </h2>

                <div className="bg-[#fff8e6] p-4 rounded-lg border border-[#e9c46a] font-note">
                  <p className="flex items-start">
                    <span className="text-[#e76f51] mr-2 text-xl">✎</span>
                    <FormatText text={tense.notes[0].text || ''} />
                  </p>
                </div>

                {tense.notes[1] && (
                  <div className="mt-4 p-3 border-l-4 border-[#2a9d8f] bg-[#f0f9f8]">
                    <p className="font-label text-lg text-[#264653]">
                      {tense.notes[1].text}
                    </p>
                  </div>
                )}
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
