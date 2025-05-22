import { render, screen, within } from "@testing-library/react"
import PastContinuousPage from "./page"

describe("PastContinuousPage", () => {
  it("should renders the main heading", () => {
    render(<PastContinuousPage />)
    expect(screen.getByRole("heading", { level: 1, name: /pasado continuo/i })).toBeInTheDocument()
    expect(screen.getByText("Pasado Continuo")).toBeInTheDocument()
  })

  it("should renders the back link", () => {
    render(<PastContinuousPage />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should renders the 'Estructura' section", () => {
    render(<PastContinuousPage />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()

    expect(scoped.getByText("was/were")).toBeInTheDocument()
    expect(scoped.getByText("wasn't/weren't")).toBeInTheDocument()
  })

  it("should renders the example cards", () => {
    render(<PastContinuousPage />)
    expect(screen.getByRole("heading", { level: 3, name: /afirmativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /negativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /interrogativo/i })).toBeInTheDocument()
  })

  it("should renders the 'Usos' section", () => {
    render(<PastContinuousPage />)
    const heading = screen.getByRole("heading", { name: /usos/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/acciones en progreso/i)).toBeInTheDocument()
    expect(scoped.getByText(/acciones simultáneas/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrupción de una acción/i)).toBeInTheDocument()
  })

  it("should renders the 'Expresiones de tiempo' section", () => {
    render(<PastContinuousPage />)
    const heading = screen.getByRole("heading", { name: /expresiones de tiempo/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const list = within(section!).getByRole("list")
    const items = within(list).getAllByRole("listitem")
    expect(items).toHaveLength(5)
    expect(items.map((li) => li.textContent)).toEqual(
      expect.arrayContaining(["While", "When", "As", "At that moment", "Yesterday at 6 PM"])
    )
  })

  it("should does not render the 'Nota importante' section", () => {
    render(<PastContinuousPage />)
    expect(screen.queryByRole("heading", { name: /nota importante/i })).not.toBeInTheDocument()
  })
})
