import { render, screen } from "@testing-library/react"
import SentenceAnalysisPage from "./page"
import analysisData from "@/data/sentenceAnalysis.json"

describe("SentenceAnalysisPage component", () => {
  it("displays the main title", () => {
    render(<SentenceAnalysisPage />)
    const title = screen.getByRole("heading", { name: /Análisis de Oraciones/i })
    expect(title).toBeInTheDocument()
  })

  it("renders the introduction paragraph", () => {
    render(<SentenceAnalysisPage />)
    expect(
      screen.getByText(/Explora el análisis sintáctico de oraciones comunes en inglés y español/i)
    ).toBeInTheDocument()
  })

  it("renders all sentences from the JSON file", () => {
    render(<SentenceAnalysisPage />)
    const sentences = analysisData.sentences

    sentences.forEach((sentence) => {
      expect(screen.getByText(sentence.text)).toBeInTheDocument()
    })
  })
})