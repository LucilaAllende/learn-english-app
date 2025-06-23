
import { getPronouns } from "@/lib/data"
import { HeartsDecoration } from "@/app/components/decoration/hearts-decoration"
import { FormatText } from "@/app/utils/format-text"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PronounsPage() {
  const pronouns = getPronouns()

  return (
    <div className="min-h-screen bg-[#f8f5f2] p-4 md:p-8 relative overflow-hidden">
      <HeartsDecoration position="top-right" size="medium" opacity={0.3} />
      <HeartsDecoration position="bottom-left" size="small" opacity={0.2} />

      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-[#2a9d8f] hover:underline mb-6 font-text">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al índice
        </Link>

        {pronouns.map((pronoun, idx) => (
          <div key={idx} className="bg-white rounded-lg p-6 shadow-md border-2 border-[#e0e0e0] mb-10">
            <h1 className="text-4xl font-title text-[#2a9d8f] mb-2 relative">
              {pronoun.name}
              <div className="absolute bottom-0 left-0 w-full h-3 bg-[#2a9d8f] opacity-20 -z-10"></div>
            </h1>

            <div className="mt-8 space-y-8">
              <p className="font-text text-gray-700">{pronoun.description}</p>

              {/* Tipos de pronombres */}
              {pronoun.types && pronoun.types?.length > 0 && (
                <section className="relative">
                  <HeartsDecoration position="top-right" size="small" opacity={0.15} className="-translate-y-1/2" />
                  <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                    <span className="text-[#e76f51] mr-2">→</span>
                    Tipos
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {pronoun.types.map((type, index) => (
                      <div key={index} className="bg-[#f8f9fa] p-4 rounded-lg border border-gray-200">
                        <h3 className="text-lg font-subtitle mb-2 text-[#2a9d8f]">{type.name}</h3>
                        <p className="font-text mb-2">{type.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {type.examples.map((example, i) => (
                            <span key={i} className="bg-gray-100 px-2 py-1 rounded text-sm font-example">
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Ejemplos de uso */}
              {pronoun.usageExamples && pronoun.usageExamples?.length > 0 && (
                <section>
                  <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                    <span className="text-[#e76f51] mr-2">→</span>
                    Ejemplos de uso
                  </h2>
                  <div className="space-y-3 font-text">
                    {pronoun.usageExamples.map((example, index) => (
                      <div key={index} className="flex flex-col">
                        <p className="font-subtitle font-semibold text-[#264653]">
                          <FormatText text={example.example} />
                        </p>
                        <p className="font-example text-gray-600 italic pl-4">{example.explanation}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Notas */}
              {pronoun.notes && pronoun.notes?.length > 0 && (
                <section className="relative">
                  <HeartsDecoration position="bottom-right" size="small" opacity={0.15} />
                  <h2 className="text-2xl font-subtitle text-[#264653] mb-4 flex items-center">
                    <span className="text-[#e76f51] mr-2">→</span>
                    Nota importante
                  </h2>
                  {pronoun.notes.map((note, index) => (
                    <div key={index} className="bg-[#fff8e6] p-4 rounded-lg border border-[#e9c46a] font-note mb-4">
                      <p className="flex items-start">
                        <span className="text-[#e76f51] mr-2 text-xl">✎</span>
                        <FormatText text={note.text ?? ''} />
                      </p>
                    </div>
                  ))}
                </section>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
