import { render, screen, within } from "@testing-library/react"
import PresentContinuousPage from "./page"

describe("PresentContinuousPage", () => {
  it("should render the main heading", () => {
    render(<PresentContinuousPage />)
    expect(screen.getByRole("heading", { name: /presente continuo/i })).toBeInTheDocument()
    expect(screen.getByText("Presente Continuo")).toBeInTheDocument()
  })

  it("should render the back link", () => {
    render(<PresentContinuousPage />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should render the 'Estructura' section", () => {
    render(<PresentContinuousPage />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const structureSection = heading.closest("section") ?? heading.parentElement
    expect(structureSection).toBeInTheDocument()
    const scoped = within(structureSection!)

    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should render example cards", () => {
    render(<PresentContinuousPage />)
    const examples = screen.getAllByRole("heading", { level: 3 })
    expect(examples.length).toBeGreaterThan(0)
  })

  it("should render the 'Expresiones de tiempo' section", () => {
    render(<PresentContinuousPage />)
    expect(screen.getByRole("heading", { name: /expresiones de tiempo/i })).toBeInTheDocument()
    expect(screen.getAllByRole("list")).toHaveLength(5)
  })

  it("should render the 'Conjugaciones en Español' section if available", () => {
    render(<PresentContinuousPage />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/comprar/i)).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<PresentContinuousPage />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should render the 'Nota importante' section", () => {
    render(<PresentContinuousPage />)
    expect(screen.getByRole("heading", { name: /nota importante/i })).toBeInTheDocument()
    expect(screen.getByText(/verbos de estado/i)).toBeInTheDocument()
  })
})
