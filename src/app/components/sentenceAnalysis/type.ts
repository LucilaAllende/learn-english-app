export interface AnalysisData {
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

export interface SentenceData {
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

export interface SentenceAnalysisProps {
  sentence: SentenceData
}
