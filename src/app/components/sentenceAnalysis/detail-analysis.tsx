import { AnalysisItem } from "./analysis-item"
import { GrammaticalElements } from "./grammatical-elements"
import { AnalysisData } from "./type"

export function DetailAnalysis({
  analysis,
  idioma
}: {
  analysis: AnalysisData
  idioma: "english" | "spanish"
}) {
  const isEnglish = idioma === "english"

  return (
    <div className="space-y-3">
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
