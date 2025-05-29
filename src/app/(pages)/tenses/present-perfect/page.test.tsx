import { render, screen, within } from "@testing-library/react"
import PresentPerfectPage from "./page"

describe("PresentPerfectPage", () => {
  it("renders the main heading", () => {
    render(<PresentPerfectPage />)
    expect(screen.getByRole("heading", { level: 1, name: /presente perfecto/i })).toBeInTheDocument()
    expect(screen.getByText("Presente Perfecto")).toBeInTheDocument()
  })

  it("renders the back link", () => {
    render(<PresentPerfectPage />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("renders the 'Estructura' section", () => {
    render(<PresentPerfectPage />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("renders the example cards", () => {
    render(<PresentPerfectPage />)
    expect(screen.getByRole("heading", { level: 3, name: /afirmativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /negativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /interrogativo/i })).toBeInTheDocument()

    expect(screen.getByText("I have worked")).toBeInTheDocument()
    expect(screen.getByText("I haven't worked")).toBeInTheDocument()
    expect(screen.getByText("Have I worked?")).toBeInTheDocument()
  })

  it("renders the 'Usos' section", () => {
    render(<PresentPerfectPage />)
    const heading = screen.getByRole("heading", { name: /usos/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/acciones que comenzaron en el pasado/i)).toBeInTheDocument()
    expect(scoped.getByText(/experiencias de vida/i)).toBeInTheDocument()
    expect(scoped.getByText(/resultados recientes/i)).toBeInTheDocument()
  })

  it("renders the 'Expresiones de tiempo' section", () => {
    render(<PresentPerfectPage />)
    const heading = screen.getByRole("heading", { name: /expresiones de tiempo/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const list = within(section!).getByRole("list")
    const items = within(list).getAllByRole("listitem")
    expect(items).toHaveLength(9)
    expect(items.map((li) => li.textContent)).toEqual(
      expect.arrayContaining([
        "For", "Since", "Just", "Already", "Yet",
        "Ever", "Never", "So far", "Up to now"
      ])
    )
  })

  it("should render the 'Conjugaciones en Español' section if available", () => {
    render(<PresentPerfectPage />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/comprar/i)).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<PresentPerfectPage />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should render the 'Nota importante' section", () => {
    render(<PresentPerfectPage />)
    expect(screen.queryByRole("heading", { name: /nota importante/i })).toBeInTheDocument()
  })
})
