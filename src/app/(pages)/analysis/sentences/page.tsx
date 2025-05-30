import { SentenceAnalysis } from "@/app/components/sentenceAnalysis"
import { HeartsDecoration } from "@/app/components/decoration/hearts-decoration"
import analysisData from "@/data/sentenceAnalysis.json"

export default function SentenceAnalysisPage() {
  const sentences = analysisData.sentences

  return (
    <div className="min-h-screen bg-[#f8f5f2] relative overflow-hidden">
      {/* Decoraciones de corazones */}
      <HeartsDecoration position="top-right" size="medium" opacity={0.3} />
      <HeartsDecoration position="bottom-left" size="small" opacity={0.2} />

      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-title text-[#2a9d8f] text-center tracking-wide mb-4">
              Análisis de Oraciones
            </h1>
            <div className="w-32 h-1 bg-[#e76f51] mx-auto rounded-full mb-4"></div>
            <p className="font-text text-lg text-gray-700 text-center max-w-3xl mx-auto">
              Explora el análisis sintáctico de oraciones comunes en inglés y español. Aprende a identificar sujetos,
              predicados, verbos, complementos y elementos gramaticales.
            </p>
          </header>

          <main>
            {sentences.map((sentence) => (
              <SentenceAnalysis key={sentence.id} sentence={sentence} />
            ))}
          </main>
        </div>
      </div>
    </div>
  )
}
