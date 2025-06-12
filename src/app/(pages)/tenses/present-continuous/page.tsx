import Link from "next/link"
import { useMemo } from "react"
import { ArrowLeft } from "lucide-react"

import { ItemUses } from "@/app/components/items/uses-item"
import { ExampleCard } from "@/app/components/cards/example-card"
import { ItemStructure } from "@/app/components/items/structure-item"
import { TipsFloating } from "@/app/components/items/tip-floating-item"
import { ConjugationItem } from "@/app/components/items/conjugation-item"
import { HeartsDecoration } from "@/app/components/decoration/hearts-decoration"
import { FormatText } from "@/app/utils/format-text"
import { getVerbTenses, VerbConjugation } from "@/lib/data"

export default function PresentContinuousPage() {
  const verbTenses = getVerbTenses()
  const tense = useMemo(() => verbTenses.find((t) => t.id === "present-continuous"), [])
  
  if (!tense) return <p>No se encontró el tiempo verbal.</p>
  
  return (
    <div className="min-h-screen bg-[#f8f5f2] p-4 md:p-8">
      {tense.tips && tense.tips.length > 0 && <TipsFloating tips={tense.tips} />}
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#2a9d8f] hover:underline mb-6 font-notes">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al índice
        </Link>

        <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#e0e0e0]">
          <h1 className="text-4xl font-handwriting text-[#e9c46a] mb-2 relative">
            Presente Continuo
            <div className="absolute bottom-0 left-0 w-full h-3 bg-[#e9c46a] opacity-20 -z-10"></div>
          </h1>

          <div className="mt-8 space-y-8">
            {(tense.categoryDescription || tense.detailedDescription) && (
              <section>
                <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Contexto y Definición
                </h2>

                {tense.categoryDescription && (
                  <div className="bg-[#e8f4f8] p-4 rounded-lg border-l-4 border-[#2a9d8f] mb-4">
                    <h3 className="font-subtitle text-[#2a9d8f] mb-2 text-lg">Categoría</h3>
                    <p className="font-text text-gray-700">{tense.categoryDescription}</p>
                  </div>
                )}

                {tense.detailedDescription && (
                  <div className="bg-[#fff8e6] p-4 rounded-lg border-l-4 border-[#e9c46a] mb-4">
                    <h3 className="font-subtitle text-[#e9c46a] mb-2 text-lg">Definición Específica</h3>
                    <p className="font-text text-gray-700">{tense.detailedDescription}</p>
                  </div>
                )}
              </section>
            )}            
            {tense.structure && (
              <section>
                <h2 className="text-2xl font-handwriting text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Estructura
                </h2>

                <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200 font-notes">
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
                <h2 className="text-2xl font-handwriting text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Usos
                </h2>

                <div className="space-y-3 font-notes">
                  {tense.uses.map((use) => (
                    <ItemUses key={use.title} title={use.title} example={use.example} />
                  ))}
                </div>
              </section>
            )}

            {tense.timeExpressions && tense.timeExpressions?.length > 0 && (
              <section>
                <h2 className="text-2xl font-handwriting text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Expresiones de tiempo
                </h2>

                <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200 font-notes">
                  <ul className="list-disc pl-5 space-y-1">
                    {tense.timeExpressions.map((expr, idx) => (
                      <li key={idx}>{expr}</li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {tense.spanishConjunction && tense.spanishConjunction.length > 0 && (
              <section className="relative">
                <HeartsDecoration position="bottom-right" size="small" opacity={0.15} />

                <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Conjugaciones en Español
                </h2>

                <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tense.spanishConjunction.map((conjugation: VerbConjugation, index: number) => (
                      <ConjugationItem
                        key={index}
                        verb={conjugation.verb}
                        conjugations={conjugation.conjugations}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {tense.englishConjugation && tense.englishConjugation.length > 0 && (
              <section className="relative">
                <HeartsDecoration position="bottom-right" size="small" opacity={0.15} />

                <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Conjugaciones en Ingles
                </h2>

                <div className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tense.englishConjugation.map((conjugation: VerbConjugation, index: number) => (
                      <ConjugationItem
                        key={index}
                        verb={conjugation.verb}
                        conjugations={conjugation.conjugations}
                      />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {tense.notes && tense.notes?.length > 0 && (
              <section>
                <h2 className="text-2xl font-handwriting text-[#264653] mb-4 flex items-center">
                  <span className="text-[#e76f51] mr-2">→</span>
                  Nota importante
                </h2>
              <div className="bg-[#fff8e6] p-4 rounded-lg border border-[#e9c46a] font-notes">
                {tense.notes.map((note, index) => {
                  if (note.type === "paragraph") {
                    return (
                      <p key={index} className="flex items-start">
                        <span className="text-[#e76f51] mr-2 text-xl">✎</span>
                        <FormatText text={note.text || ''} />
                      </p>
                    );
                  }

                  if (note.type === "list") {
                    return (
                      <ul key={index} className="list-disc pl-8 mt-2">
                        {note.items && note.items.map((item: string, idx: number) => (
                          <li key={idx}>
                            <FormatText text={item} />
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  return null;
                })}
              </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
