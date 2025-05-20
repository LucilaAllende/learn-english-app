import { render, screen, within } from "@testing-library/react"
import PresentContinuousPage from "./page"

describe("PresentContinuousPage", () => {
  it("renders the main heading", () => {
    render(<PresentContinuousPage />)
    expect(screen.getByRole("heading", { name: /presente continuo/i })).toBeInTheDocument()
    expect(screen.getByText("Presente Continuo")).toBeInTheDocument()
  })

  it("renders the back link", () => {
    render(<PresentContinuousPage />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("renders the 'Estructura' section", () => {
    render(<PresentContinuousPage />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const structureSection = heading.closest("section") ?? heading.parentElement
    expect(structureSection).toBeInTheDocument()
    const scoped = within(structureSection!)

    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("renders example cards", () => {
    render(<PresentContinuousPage />)
    const examples = screen.getAllByRole("heading", { level: 3 })
    expect(examples.length).toBeGreaterThan(0)
  })

  it("renders the 'Expresiones de tiempo' section", () => {
    render(<PresentContinuousPage />)
    expect(screen.getByRole("heading", { name: /expresiones de tiempo/i })).toBeInTheDocument()
    expect(screen.getAllByRole("list")).toHaveLength(5)
  })

  it("renders the 'Nota importante' section", () => {
    render(<PresentContinuousPage />)
    expect(screen.getByRole("heading", { name: /nota importante/i })).toBeInTheDocument()
    expect(screen.getByText(/verbos de estado/i)).toBeInTheDocument()
  })
})
