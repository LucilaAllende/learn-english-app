export interface AnalysisData {
  verb?: string | null
  verb_auxiliary?: string | null
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
