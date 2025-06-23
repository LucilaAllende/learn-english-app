// tests/PronounsPage.test.tsx
import { render, screen, within } from "@testing-library/react"
import PronounsPage from "./page"

describe("PronounsPage", () => {
  it("renders all expected content for personal pronouns", () => {
    render(<PronounsPage />)

    // Main heading
    expect(screen.getByRole("heading", { level: 1, name: /pronombres personales/i })).toBeInTheDocument()

    // Description
    expect(
      screen.getByText(/Los pronombres personales reemplazan a los sustantivos y se refieren a personas o cosas/i, { exact: false })
    ).toBeInTheDocument()

    // Types
    expect(screen.getByRole("heading", { level: 2, name: /tipos/i })).toBeInTheDocument()
    expect(screen.getByText("Sujeto")).toBeInTheDocument()
    expect(screen.getByText("Objeto")).toBeInTheDocument()

    expect(screen.getByText("Se utilizan como sujeto de la oración")).toBeInTheDocument()
    expect(screen.getByText("Se utilizan como objeto directo o indirecto")).toBeInTheDocument()

    // Type examples (use getAllByText to avoid errors with duplicates)
    const examples = ["I", "You", "He", "She", "It", "We", "They", "Me", "Him", "Her", "Us", "Them"]
    examples.forEach(example => {
      expect(screen.getAllByText(example).length).toBeGreaterThan(0)
    })

    // Usage examples
    const usageSection = screen.getByRole("heading", { level: 2, name: /ejemplos de uso/i }).closest("section")
    expect(usageSection).toBeInTheDocument()

    expect(within(usageSection!).getByText(/I es el sujeto de la oración/i)).toBeInTheDocument()
    expect(within(usageSection!).getByText(/Me es el objeto indirecto/i)).toBeInTheDocument()
    expect(within(usageSection!).getByText(/Her es el objeto directo/i)).toBeInTheDocument()
    
    expect(within(usageSection!).getByText((content, element) => {
      return element?.textContent === "I am a student. (Sujeto)"
    })).toBeInTheDocument()

    // Notes
    expect(screen.getByRole("heading", { level: 2, name: /nota importante/i })).toBeInTheDocument()
    expect(
      screen.getByText(/cambian según su función en la oración/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/se usa para objetos, animales o conceptos abstractos/i)
    ).toBeInTheDocument()

    // Back link
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })
})
