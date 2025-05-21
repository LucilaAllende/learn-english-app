import { render, screen, within } from "@testing-library/react"
import PastSimplePage from "./page"

describe("PastSimplePage", () => {
  it("should renders the main heading", () => {
    render(<PastSimplePage />)
    expect(screen.getByRole("heading", { level: 1, name: /pasado simple/i })).toBeInTheDocument()
    expect(screen.getByText("Pasado Simple")).toBeInTheDocument()
  })

  it("should renders the back link", () => {
    render(<PastSimplePage />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should renders the 'Estructura' section", () => {
    render(<PastSimplePage />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const structureSection = heading.closest("section") ?? heading.parentElement
    expect(structureSection).toBeInTheDocument()
    const scoped = within(structureSection!)


    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should renders the example cards", () => {
    render(<PastSimplePage />)
    expect(screen.getByRole("heading", { level: 3, name: /afirmativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /negativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /interrogativo/i })).toBeInTheDocument()
  })

  it("should renders the 'Usos' section", () => {
    render(<PastSimplePage />)
    const heading = screen.getByRole("heading", { name: /usos/i })
    const usesSection = heading.closest("section") ?? heading.parentElement
    expect(usesSection).toBeInTheDocument()
    const scoped = within(usesSection!)

    expect(scoped.getByText(/acciones completadas en el pasado/i)).toBeInTheDocument()
    expect(scoped.getByText(/serie de acciones completadas/i)).toBeInTheDocument()
    expect(scoped.getByText(/hábitos en el pasado/i)).toBeInTheDocument()
  })

  it("should renders the 'Expresiones de tiempo' section", () => {
    render(<PastSimplePage />)
    const heading = screen.getByRole("heading", { name: /expresiones de tiempo/i })
    const timeSection = heading.closest("section") ?? heading.parentElement
    expect(timeSection).toBeInTheDocument()
    const list = within(timeSection!).getByRole("list")
    const items = within(list).getAllByRole("listitem")
    expect(items).toHaveLength(4)
    expect(items[0]).toHaveTextContent(/yesterday/i)
  })

  it("should renders the 'Nota importante' section with both notes", () => {
    render(<PastSimplePage />)
    const heading = screen.getByRole("heading", { name: /nota importante/i })
    const notesSection = heading.closest("section") ?? heading.parentElement
    expect(notesSection).toBeInTheDocument()
    const scoped = within(notesSection!)

    expect(scoped.getByText(/verbos regulares/i)).toBeInTheDocument()
    expect(scoped.getByText(/verbos irregulares/i)).toBeInTheDocument()
  })
})