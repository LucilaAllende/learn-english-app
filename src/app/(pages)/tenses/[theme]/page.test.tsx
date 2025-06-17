import { render, screen, within } from "@testing-library/react"
import PresentSimplePage from "./page"

describe("PresentSimplePage", () => {
  it("should renders the main heading", () => {
    render(<PresentSimplePage />)
    expect(screen.getByRole("heading", { name: /presente simple/i })).toBeInTheDocument()
    expect(screen.getByText("Presente Simple")).toBeInTheDocument()
  })
  
  it("should renders the back link", () => {
    render(<PresentSimplePage />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should render tips if available", () => {
    render(<PresentSimplePage />);
    expect(screen.getByText(/El verbo en infinitivo que usamos en estas reglas es la forma base del verbo/i)).toBeInTheDocument();
  });

  it("should renders the 'Estructura' section", () => {
    render(<PresentSimplePage />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const structureSection = heading.closest("section") ?? heading.parentElement
    expect(structureSection).toBeInTheDocument()
    const scoped = within(structureSection!)

    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should renders example cards", () => {
    render(<PresentSimplePage />)
    const examples = screen.getAllByRole("heading", { level: 3 })
    expect(examples.length).toBeGreaterThan(0)
  })

  it("should render the 'Usos' section if available", () => {
    render(<PresentSimplePage />);
    const heading = screen.getByRole("heading", { name: /usos/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/Hábitos/i)).toBeInTheDocument();
  })

  it("should renders the 'Expresiones de tiempo' section", () => {
    render(<PresentSimplePage />)
    expect(screen.getByRole("heading", { name: /expresiones de tiempo/i })).toBeInTheDocument()
    expect(screen.getAllByRole("list")).toHaveLength(4)
  })

  it("should render the 'Conjugaciones en Español' section if available", () => {
    render(<PresentSimplePage />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/comprar/i)).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<PresentSimplePage />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should renders the 'Nota importante' section with both notes", () => {
    render(<PresentSimplePage />)
    const heading = screen.getByRole("heading", { name: /nota importante/i })
    const section = heading.closest("section") ?? heading.parentElement
    const scoped = within(section!)

    const span1 = scoped.getByText("al final del verbo en tercera persona singular (he, she, it).", {
      exact: false,
      selector: "span",
    })
    expect(span1).toBeInTheDocument()
    const span2 = scoped.getByText("No olvides las excepciones con verbos que terminan en -o, -ch, -sh, -ss, -x", {
      exact: false,
      selector: "p",
    })
    expect(span2).toBeInTheDocument()
  })
})

describe("FutureSimplePage", () => {
  it("should render the main heading", () => {
    render(<FutureSimplePage />)
    expect(screen.getByRole("heading", { level: 1, name: /futuro simple/i })).toBeInTheDocument()
    expect(screen.getByText("Futuro Simple")).toBeInTheDocument()
  })

  it("should render the back link", () => {
    render(<FutureSimplePage />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should render the 'Estructura' section", () => {
    render(<FutureSimplePage />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should render the example cards", () => {
    render(<FutureSimplePage />)
    expect(screen.getByRole("heading", { level: 3, name: /afirmativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /negativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /interrogativo/i })).toBeInTheDocument()

    expect(screen.getByText("I will work")).toBeInTheDocument()
    expect(screen.getByText("I won't work")).toBeInTheDocument()
    expect(screen.getByText("Will I work?")).toBeInTheDocument()
  })

  it("should render the 'Usos' section", () => {
    render(<FutureSimplePage />)
    const heading = screen.getByRole("heading", { name: /usos/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/predicciones sobre el futuro/i)).toBeInTheDocument()
    expect(scoped.getByText(/decisiones espontáneas/i)).toBeInTheDocument()
    expect(scoped.getByText(/promesas y ofrecimientos/i)).toBeInTheDocument()
  })

  it("should render the 'Expresiones de tiempo' section", () => {
    render(<FutureSimplePage />)
    const heading = screen.getByRole("heading", { name: /expresiones de tiempo/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const list = within(section!).getByRole("list")
    const items = within(list).getAllByRole("listitem")
    expect(items).toHaveLength(5)
    expect(items.map((li) => li.textContent)).toEqual(
      expect.arrayContaining([
        "Tomorrow",
        "Next week/month/year",
        "Soon",
        "In the future",
        "Later"
      ])
    )
  })

  it("should render the 'Conjugaciones en Español' section if available", () => {
    render(<FutureSimplePage />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText("comprar (to buy)")).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<FutureSimplePage />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should does not render the 'Nota importante' section", () => {
    render(<FutureSimplePage />)
    expect(screen.queryByRole("heading", { name: /nota importante/i })).not.toBeInTheDocument()
  })
})