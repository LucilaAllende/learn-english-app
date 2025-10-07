import contentJson from "@/data/content.json";
import verbsTensesJson from "@/data/verbsTenses.json"

export interface Category {
  id: string;
  title: string;
  description: string;
}

export interface Example {
  title: string;
  examples: string[];
  color: string;
}

export interface Use {
  title: string;
  example: string;
}

export interface Structure {
  affirmative: string;
  negative: string;
  interrogative: string;
}

export interface Conjugation {
  person: string
  conjugation: string
}

export interface VerbConjugation {
  verb: string
  conjugations: Conjugation[]
}

export interface Tip {
  text: string
  image?: string
}

export interface VerbTense {
  id: string;
  name: string;
  category: string;
  description: string;
  categoryDescription?: string
  detailedDescription?: string
  textColor: string;
  structure?: Structure;
  examples?: Example[];
  uses?: Use[];
  timeExpressions?: string[];
  notes?: Note[];
  tips?: Tip[]
  spanishConjunction?: VerbConjugation[]
  englishConjugation?: VerbConjugation[]
}

export interface Type {
  name: string;
  examples: string[];
  description: string;
}

export interface UsageExample {
  example: string;
  explanation: string;
}

export interface Note {
  type: string;
  text?: string;
  items?: string[];
}

export interface Pronoun {
  id: string;
  name: string;
  category: string;
  description: string;
  types?: Type[];
  usageExamples?: UsageExample[];
  notes?: Note[];
}

// Functions to access the data
export function getCategories(): Category[] {
  return contentJson.categories;
}

export function getVerbTenses(): VerbTense[] {
  return verbsTensesJson.verbTenses;
}

export function getPronouns(): Pronoun[] {
  return contentJson.pronouns;
}

export function getVerbTenseById(id: string): VerbTense | undefined {
  return getVerbTenses().find((tense) => tense.id === id);
}

export function getPronounById(id: string): Pronoun | undefined {
  return getPronouns().find((pronoun) => pronoun.id === id);
}

export function getContentByCategory(category: string): (VerbTense | Pronoun)[] {
  if (category === "tenses") {
    return getVerbTenses();
  } else if (category === "pronouns") {
    return getPronouns();
  }
  return [];
}

export function getContentByCategoryAndId(
  category: string,
  id: string
): VerbTense | Pronoun | undefined {
  if (category === "tenses") {
    return getVerbTenseById(id);
  } else if (category === "pronouns") {
    return getPronounById(id);
  }
  return undefined;
}