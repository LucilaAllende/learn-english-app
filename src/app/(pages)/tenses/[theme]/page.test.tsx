import { render, screen, within } from "@testing-library/react"
import VerbTensePage from "./page"

describe("PresentSimplePage", () => {
  it("should renders the main heading", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    expect(screen.getByRole("heading", { name: /presente simple/i })).toBeInTheDocument()
    expect(screen.getByText("Presente Simple")).toBeInTheDocument()
  })
  
  it("should renders the back link", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should render tips if available", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    expect(screen.getByText(/El verbo en infinitivo que usamos en estas reglas es la forma base del verbo/i)).toBeInTheDocument();
  });

  it("should renders the 'Estructura' section", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const structureSection = heading.closest("section") ?? heading.parentElement
    expect(structureSection).toBeInTheDocument()
    const scoped = within(structureSection!)

    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should renders example cards", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    const examples = screen.getAllByRole("heading", { level: 3 })
    expect(examples.length).toBeGreaterThan(0)
  })

  it("should render the 'Usos' section if available", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    const heading = screen.getByRole("heading", { name: /usos/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/Hábitos/i)).toBeInTheDocument();
  })

  it("should renders the 'Expresiones de tiempo' section", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    expect(screen.getByRole("heading", { name: /expresiones de tiempo/i })).toBeInTheDocument()
    expect(screen.getAllByRole("list")).toHaveLength(4)
  })

  it("should render the 'Conjugaciones en Español' section if available", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/comprar/i)).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should renders the 'Nota importante' section with both notes", () => {
    render(<VerbTensePage params={{ theme: "present-simple" }}/>)
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
    render(<VerbTensePage params={{ theme: "future-simple" }} />)
    expect(screen.getByRole("heading", { level: 1, name: /futuro simple/i })).toBeInTheDocument()
    expect(screen.getByText("Futuro Simple")).toBeInTheDocument()
  })

  it("should render the back link", () => {
    render(<VerbTensePage params={{ theme: "future-simple" }} />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should render the 'Estructura' section", () => {
    render(<VerbTensePage params={{ theme: "future-simple" }} />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should render the example cards", () => {
    render(<VerbTensePage params={{ theme: "future-simple" }} />)
    expect(screen.getByRole("heading", { level: 3, name: /afirmativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /negativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /interrogativo/i })).toBeInTheDocument()

    expect(screen.getByText("I will work")).toBeInTheDocument()
    expect(screen.getByText("I won't work")).toBeInTheDocument()
    expect(screen.getByText("Will I work?")).toBeInTheDocument()
  })

  it("should render the 'Usos' section", () => {
    render(<VerbTensePage params={{ theme: "future-simple" }} />)
    const heading = screen.getByRole("heading", { name: /usos/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/predicciones sobre el futuro/i)).toBeInTheDocument()
    expect(scoped.getByText(/decisiones espontáneas/i)).toBeInTheDocument()
    expect(scoped.getByText(/promesas y ofrecimientos/i)).toBeInTheDocument()
  })

  it("should render the 'Expresiones de tiempo' section", () => {
    render(<VerbTensePage params={{ theme: "future-simple" }} />)
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
    render(<VerbTensePage params={{ theme: "future-simple" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText("comprar (to buy)")).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<VerbTensePage params={{ theme: "future-simple" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should does not render the 'Nota importante' section", () => {
    render(<VerbTensePage params={{ theme: "future-simple" }} />)
    expect(screen.queryByRole("heading", { name: /nota importante/i })).not.toBeInTheDocument()
  })
})

describe("PastContinuousPage", () => {
  it("should renders the main heading", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />)
    expect(screen.getByRole("heading", { level: 1, name: /pasado continuo/i })).toBeInTheDocument()
    expect(screen.getByText("Pasado Continuo")).toBeInTheDocument()
  })

  it("should renders the back link", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should renders the 'Estructura' section", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()

    expect(scoped.getByText("was/were")).toBeInTheDocument()
    expect(scoped.getByText("(wasn't/weren't) +")).toBeInTheDocument()
  })

  it("should renders the example cards", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />)
    expect(screen.getByRole("heading", { level: 3, name: /afirmativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /negativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /interrogativo/i })).toBeInTheDocument()
  })

  it("should renders the 'Usos' section", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />)
    const heading = screen.getByRole("heading", { name: /usos/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/acciones en progreso/i)).toBeInTheDocument()
    expect(scoped.getByText(/acciones simultáneas/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrupción de una acción/i)).toBeInTheDocument()
  })

  it("should renders the 'Expresiones de tiempo' section", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />)
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

  it("should render the 'Conjugaciones en Español' section if available", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/comprar/i)).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should does not render the 'Nota importante' section", () => {
    render(<VerbTensePage params={{ theme: "past-continuous" }} />)
    expect(screen.queryByRole("heading", { name: /nota importante/i })).not.toBeInTheDocument()
  })
})

describe("PastSimplePage", () => {
  it("should render the main heading", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />)
    expect(screen.getByRole("heading", { level: 1, name: /pasado simple/i })).toBeInTheDocument()
    expect(screen.getByText("Pasado Simple")).toBeInTheDocument()
  })

  it("should render the back link", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should render the 'Estructura' section", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const structureSection = heading.closest("section") ?? heading.parentElement
    expect(structureSection).toBeInTheDocument()
    const scoped = within(structureSection!)


    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should render the example cards", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />)
    expect(screen.getByRole("heading", { level: 3, name: /afirmativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /negativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /interrogativo/i })).toBeInTheDocument()
  })

  it("should render the 'Usos' section", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />)
    const heading = screen.getByRole("heading", { name: /usos/i })
    const usesSection = heading.closest("section") ?? heading.parentElement
    expect(usesSection).toBeInTheDocument()
    const scoped = within(usesSection!)

    expect(scoped.getByText(/acciones completadas en el pasado/i)).toBeInTheDocument()
    expect(scoped.getByText(/serie de acciones completadas/i)).toBeInTheDocument()
    expect(scoped.getByText(/hábitos en el pasado/i)).toBeInTheDocument()
  })

  it("should render the 'Expresiones de tiempo' section", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />)
    const heading = screen.getByRole("heading", { name: /expresiones de tiempo/i })
    const timeSection = heading.closest("section") ?? heading.parentElement
    expect(timeSection).toBeInTheDocument()
    const list = within(timeSection!).getByRole("list")
    const items = within(list).getAllByRole("listitem")
    expect(items).toHaveLength(4)
    expect(items[0]).toHaveTextContent(/yesterday/i)
  })

  it("should render the 'Conjugaciones en Español' section if available", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText("comprar (to buy)")).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should renders the 'Nota importante' section with both notes", () => {
    render(<VerbTensePage params={{ theme: "past-simple" }} />)
    const heading = screen.getByRole("heading", { name: /nota importante/i })
    const notesSection = heading.closest("section") ?? heading.parentElement
    expect(notesSection).toBeInTheDocument()
    const scoped = within(notesSection!)

    expect(scoped.getByText(/verbos regulares/i)).toBeInTheDocument()
    expect(scoped.getByText(/verbos irregulares/i)).toBeInTheDocument()
  })
})

describe("PresentContinuousPage", () => {
  it("should render the main heading", () => {
    render(<VerbTensePage params={{ theme: "present-continuous" }} />)
    expect(screen.getByRole("heading", { name: /presente continuo/i })).toBeInTheDocument()
    expect(screen.getByText("Presente Continuo")).toBeInTheDocument()
  })

  it("should render the back link", () => {
    render(<VerbTensePage params={{ theme: "present-continuous" }} />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should render the 'Estructura' section", () => {
    render(<VerbTensePage params={{ theme: "present-continuous" }} />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const structureSection = heading.closest("section") ?? heading.parentElement
    expect(structureSection).toBeInTheDocument()
    const scoped = within(structureSection!)

    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should render example cards", () => {
    render(<VerbTensePage params={{ theme: "present-continuous" }} />)
    const examples = screen.getAllByRole("heading", { level: 3 })
    expect(examples.length).toBeGreaterThan(0)
  })

  it("should render the 'Expresiones de tiempo' section", () => {
    render(<VerbTensePage params={{ theme: "present-continuous" }} />)
    expect(screen.getByRole("heading", { name: /expresiones de tiempo/i })).toBeInTheDocument()
    const timeExpressionItems = screen.getAllByText(/Now, right now, at the moment|Today, this week\/month|Currently, presently|These days, nowadays|Still, at present/i);
    expect(timeExpressionItems).toHaveLength(5);
  })

  it("should render the 'Conjugaciones en Español' section if available", () => {
    render(<VerbTensePage params={{ theme: "present-continuous" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/comprar/i)).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<VerbTensePage params={{ theme: "present-continuous" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should render the 'Nota importante' section", () => {
    render(<VerbTensePage params={{ theme: "present-continuous" }} />)
    expect(screen.getByRole("heading", { name: /nota importante/i })).toBeInTheDocument()
    expect(screen.getByText(/verbos de estado/i)).toBeInTheDocument()
  })
})

describe("PresentPerfectPage", () => {
  it("should render the main heading", () => {
    render(<VerbTensePage params={{ theme: "present-perfect" }} />)
    expect(screen.getByRole("heading", { level: 1, name: /presente perfecto/i })).toBeInTheDocument()
    expect(screen.getByText("Presente Perfecto")).toBeInTheDocument()
  })

  it("should render the back link", () => {
    render(<VerbTensePage params={{ theme: "present-perfect" }} />)
    expect(screen.getByRole("link", { name: /volver al índice/i })).toBeInTheDocument()
  })

  it("should render the 'Estructura' section", () => {
    render(<VerbTensePage params={{ theme: "present-perfect" }} />)
    const heading = screen.getByRole("heading", { name: /estructura/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/afirmativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/negativo:/i)).toBeInTheDocument()
    expect(scoped.getByText(/interrogativo:/i)).toBeInTheDocument()
  })

  it("should render the example cards", () => {
    render(<VerbTensePage params={{ theme: "present-perfect" }} />)
    expect(screen.getByRole("heading", { level: 3, name: /afirmativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /negativo/i })).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 3, name: /interrogativo/i })).toBeInTheDocument()

    expect(screen.getByText("I have worked")).toBeInTheDocument()
    expect(screen.getByText("I haven't worked")).toBeInTheDocument()
    expect(screen.getByText("Have I worked?")).toBeInTheDocument()
  })

  it("should render the 'Usos' section", () => {
    render(<VerbTensePage params={{ theme: "present-perfect" }} />)
    const heading = screen.getByRole("heading", { name: /usos/i })
    const section = heading.closest("section") ?? heading.parentElement
    expect(section).toBeInTheDocument()

    const scoped = within(section!)
    expect(scoped.getByText(/acciones que comenzaron en el pasado/i)).toBeInTheDocument()
    expect(scoped.getByText(/experiencias de vida/i)).toBeInTheDocument()
    expect(scoped.getByText(/resultados recientes/i)).toBeInTheDocument()
  })

  it("should render the 'Expresiones de tiempo' section", () => {
    render(<VerbTensePage params={{ theme: "present-perfect" }} />)
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
    render(<VerbTensePage params={{ theme: "present-perfect" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en español/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/comprar/i)).toBeInTheDocument();
  });

  it("should render the 'Conjugaciones en Inglés' section if available", () => {
    render(<VerbTensePage params={{ theme: "present-perfect" }} />);
    const heading = screen.getByRole("heading", { name: /conjugaciones en ingles/i });
    const section = heading.closest("section") ?? heading.parentElement;
    expect(section).toBeInTheDocument();
    const scoped = within(section!);
    expect(scoped.getByText(/to buy/i)).toBeInTheDocument();
  });

  it("should render the 'Nota importante' section", () => {
    render(<VerbTensePage params={{ theme: "present-perfect" }} />)
    expect(screen.queryByRole("heading", { name: /nota importante/i })).toBeInTheDocument()
  })
})