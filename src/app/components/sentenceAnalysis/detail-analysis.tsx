import { AnalysisItem } from "./analysis-item"
import { GrammaticalElements } from "./grammatical-elements"
import { AnalysisData } from "./type"

export function DetailAnalysis({
  analysis,
  language
}: {
  analysis: AnalysisData
  language: "english" | "spanish"
}) {
  const isEnglish = language === "english"

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <AnalysisItem
          label={isEnglish ? "Subject" : "Sujeto"}
          value={analysis.subject}
          color="text-blue-600"
        />
        <AnalysisItem
          label={isEnglish ? "Predicate" : "Predicado"}
          value={analysis.predicate}
          color="text-green-600"
        />
        <AnalysisItem
          label={isEnglish ? "Main Verb" : "Verbo Principal"}
          value={analysis.verb}
          color="text-purple-600"
        />
        {(analysis.verb_auxiliary) && (
          <AnalysisItem
            label={isEnglish ? "Auxiliary Verb" : "Verbo Auxiliar"}
            value={analysis.verb_auxiliary}
            color="text-purple-400"
          />
        )}
        <AnalysisItem
          label={isEnglish ? "Verb Tense" : "Tiempo Verbal"}
          value={analysis.verb_tense}
          color="text-indigo-600"
        />
        <AnalysisItem
          label={isEnglish ? "Mood" : "Modo"}
          value={analysis.mood}
          color="text-indigo-400"
        />
      </div>

      {(analysis.direct_object) && (
        <AnalysisItem
          label={isEnglish ? "Direct Object" : "Objeto Directo"}
          value={analysis.direct_object}
          color="text-orange-600"
        />
      )}
      {(analysis.indirect_object) && (
        <AnalysisItem
          label={isEnglish ? "Indirect Object" : "Objeto Indirecto"}
          value={analysis.indirect_object}
          color="text-orange-400"
        />
      )}

      <GrammaticalElements
        title={isEnglish ? "Pronouns" : "Pronombres"}
        items={analysis.pronouns}
        color="bg-blue-100 text-blue-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Nouns" : "Sustantivos"}
        items={analysis.nouns}
        color="bg-green-100 text-green-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Adjectives" : "Adjetivos"}
        items={analysis.adjectives}
        color="bg-yellow-100 text-yellow-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Adverbs" : "Adverbios"}
        items={analysis.adverbs}
        color="bg-pink-100 text-pink-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Prepositions" : "Preposiciones"}
        items={analysis.prepositions}
        color="bg-purple-100 text-purple-800"
      />
      <GrammaticalElements
        title={isEnglish ? "Conjunctions" : "Conjunciones"}
        items={analysis.conjunctions}
        color="bg-indigo-100 text-indigo-800"
      />

      {(analysis.negation) && (
        <AnalysisItem
          label={isEnglish ? "Negation" : "Negación"}
          value={analysis.negation}
          color="text-red-600"
        />
      )}
    </div>
  )
}
