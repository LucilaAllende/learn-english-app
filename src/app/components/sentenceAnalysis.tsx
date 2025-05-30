interface AnalysisData {
  verb?: string | null
  auxiliary?: string | null
  verb_tense?: string | null
  subject?: string | null
  predicate?: string | null
  pronouns?: string[]
  nouns?: string[]
  adjectives?: string[]
  adverbs?: string[]
  prepositions?: string[]
  conjunctions?: string[]
  negation?: string | null
  direct_object?: string | null
  indirect_object?: string | null
  verbo?: string | null
  verbo_auxiliar?: string | null
  tiempo_verbal?: string | null
  sujeto?: string | null
  predicado?: string | null
  pronombres?: string[]
  sustantivos?: string[]
  adjetivos?: string[]
  adverbios?: string[]
  preposiciones?: string[]
  conjunciones?: string[]
  negacion?: string | null
  objeto_directo?: string | null
  objeto_indirecto?: string | null
}

interface SentenceData {
  id: string
  text: string
  spanish: string
  alternative: {
    english: string
    spanish: string
  }
  analysis: {
    english: AnalysisData
    spanish: AnalysisData
  }
}

interface SentenceAnalysisProps {
  sentence: SentenceData
}

export function SentenceAnalysis({ sentence }: SentenceAnalysisProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md border-2 border-[#e0e0e0] mb-6">
      {/* Oraciones principales */}
      <div className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#f0f9f8] p-4 rounded-lg border-l-4 border-[#2a9d8f]">
            <h3 className="font-subtitle text-[#2a9d8f] mb-2">English</h3>
            <p className="font-text text-lg text-gray-800">{sentence.text}</p>
          </div>
          <div className="bg-[#fff8e6] p-4 rounded-lg border-l-4 border-[#e9c46a]">
            <h3 className="font-subtitle text-[#e9c46a] mb-2">Español</h3>
            <p className="font-text text-lg text-gray-800">{sentence.spanish}</p>
          </div>
        </div>
      </div>

      {/* Alternativas */}
      <div className="mb-6">
        <h4 className="font-subtitle text-[#264653] mb-3">Alternativas</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="font-text text-gray-700">{sentence.alternative.english}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <p className="font-text text-gray-700">{sentence.alternative.spanish}</p>
          </div>
        </div>
      </div>

      {/* Análisis sintáctico */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Análisis en inglés */}
        <div className="bg-[#f8f9fa] p-4 rounded-lg">
          <h4 className="font-subtitle text-[#2a9d8f] mb-4 text-lg">Análisis en Inglés</h4>
          <DetailAnalysis analysis={sentence.analysis.english} idioma="english" />
        </div>

        {/* Análisis en español */}
        <div className="bg-[#f8f9fa] p-4 rounded-lg">
          <h4 className="font-subtitle text-[#e9c46a] mb-4 text-lg">Análisis en Español</h4>
          <DetailAnalysis analysis={sentence.analysis.spanish} idioma="spanish" />
        </div>
      </div>
    </div>
  )
}

function DetailAnalysis({ analysis, idioma }: { analysis: AnalysisData; idioma: "english" | "spanish" }) {
  const isEnglish = idioma === "english"

  return (
    <div className="space-y-3">
      {/* Estructura básica */}
      <div className="space-y-2">
        <AnalysisItem
          label={isEnglish ? "Subject" : "Sujeto"}
          value={isEnglish ? analysis.subject : analysis.sujeto}
          color="text-blue-600"
        />
        <AnalysisItem
          label={isEnglish ? "Predicate" : "Predicado"}
          value={isEnglish ? analysis.predicate : analysis.predicado}
          color="text-green-600"
        />
        <AnalysisItem
          label={isEnglish ? "Main Verb" : "Verbo Principal"}
          value={isEnglish ? analysis.verb : analysis.verbo}
          color="text-purple-600"
        />
        {(analysis.auxiliary || analysis.verbo_auxiliar) && (
          <AnalysisItem
            label={isEnglish ? "Auxiliary Verb" : "Verbo Auxiliar"}
            value={isEnglish ? analysis.auxiliary : analysis.verbo_auxiliar}
            color="text-purple-400"
          />
        )}
        <AnalysisItem
          label={isEnglish ? "Verb Tense" : "Tiempo Verbal"}
          value={isEnglish ? analysis.verb_tense : analysis.tiempo_verbal}
          color="text-indigo-600"
        />
      </div>

      {/* Complementos */}
      {(analysis.direct_object || analysis.objeto_directo) && (
        <AnalysisItem
          label={isEnglish ? "Direct Object" : "Objeto Directo"}
          value={isEnglish ? analysis.direct_object : analysis.objeto_directo}
          color="text-orange-600"
        />
      )}
      {(analysis.indirect_object || analysis.objeto_indirecto) && (
        <AnalysisItem
          label={isEnglish ? "Indirect Object" : "Objeto Indirecto"}
          value={isEnglish ? analysis.indirect_object : analysis.objeto_indirecto}
          color="text-orange-400"
        />
      )}

      {/* Elementos gramaticales */}
      <GrammaticalElements
        title={isEnglish ? "Pronouns" : "Pronombres"}
        items={isEnglish ? analysis.pronouns : analysis.pronombres}
        color="bg-blue-100 text-blue-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Nouns" : "Sustantivos"}
        items={isEnglish ? analysis.nouns : analysis.sustantivos}
        color="bg-green-100 text-green-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Adjectives" : "Adjetivos"}
        items={isEnglish ? analysis.adjectives : analysis.adjetivos}
        color="bg-yellow-100 text-yellow-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Adverbs" : "Adverbios"}
        items={isEnglish ? analysis.adverbs : analysis.adverbios}
        color="bg-pink-100 text-pink-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Prepositions" : "Preposiciones"}
        items={isEnglish ? analysis.prepositions : analysis.preposiciones}
        color="bg-purple-100 text-purple-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Conjunctions" : "Conjunciones"}
        items={isEnglish ? analysis.conjunctions : analysis.conjunciones}
        color="bg-indigo-100 text-indigo-800"
      />

      {/* Negación */}
      {(analysis.negation || analysis.negacion) && (
        <AnalysisItem
          label={isEnglish ? "Negation" : "Negación"}
          value={isEnglish ? analysis.negation : analysis.negacion}
          color="text-red-600"
        />
      )}
    </div>
  )
}

function AnalysisItem({ label, value, color }: { label: string; value: string | null; color: string }) {
  if (!value) return null

  return (
    <div className="flex items-start">
      <span className="font-subtitle text-gray-600 w-32 flex-shrink-0">{label}:</span>
      <span className={`font-text ${color} font-medium`}>{value}</span>
    </div>
  )
}

function GrammaticalElements({ title, items, color }: { title: string; items?: string[]; color: string }) {
  if (!items || items.length === 0) return null

  return (
    <div className="flex items-start">
      <span className="font-subtitle text-gray-600 w-32 flex-shrink-0">{title}:</span>
      <div className="flex flex-wrap gap-1">
        {items.map((item, index) => (
          <span key={index} className={`px-2 py-1 rounded text-xs font-example ${color}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
