import { render, screen } from "@testing-library/react"
import { HeartsDecoration } from "./hearts-decoration"

describe("HeartsDecoration", () => {
  it("renders without crashing", () => {
    render(<HeartsDecoration />)
    const containers = screen.getAllByRole("generic")
    expect(containers.length).toBe(3)
  })

  it("applies default props correctly", () => {
    render(<HeartsDecoration />)
    const containers = screen.getAllByRole("generic")
    expect(containers[1]).toHaveClass("absolute", "pointer-events-none", "w-16", "h-16")
    expect(containers[1]).toHaveStyle({ opacity: "0.6" })
  })

  it("applies custom className", () => {
    render(<HeartsDecoration className="clase-prueba"/>)
    const containers = screen.getAllByRole('generic');
    expect(containers[1]).toHaveClass("absolute", "pointer-events-none", "w-16", "h-16", "clase-prueba")
  })

  it("applies custom opacity", () => {
    render(<HeartsDecoration opacity={0.8} />)
    const containers = screen.getAllByRole('generic');
    expect(containers[1]).toHaveStyle({ opacity: "0.8" })
  })

  it("renders the correct size class", () => {
    render(<HeartsDecoration size="small" />)
    const containers = screen.getAllByRole('generic');
    expect(containers[1]).toHaveClass("w-8", "h-8")
  })

  it("applies known positions", () => {
    render(<HeartsDecoration position="bottom-right" />)
    const containers = screen.getAllByRole('generic');
    expect(containers[1]).toHaveClass("bottom-0", "right-0")
  })

  it("renders specific heart when heartIndex is provided", () => {
    render(<HeartsDecoration heartIndex={5} />)
    const containers = screen.getAllByRole('generic');
    const heartDiv = containers[1].querySelector("div")
    expect(heartDiv).toHaveStyle({
      backgroundImage: `url('/images/heart_5.svg')`,
    })
  })

  it("renders some heart image when heartIndex is not provided", () => {
    render(<HeartsDecoration />)
    const containers = screen.getAllByRole('generic');
    const heartDiv = containers[1].querySelector("div")
    const bgImage = heartDiv?.style.backgroundImage ?? ""
    expect(bgImage).toMatch(/heart_\d+\.svg/)
  })

  it("applies correct background styles", () => {
    render(<HeartsDecoration heartIndex={2} />)
    const heartDiv = screen.getByRole("generic").querySelector("div")
    expect(heartDiv).toHaveClass("w-full", "h-full")
    expect(heartDiv).toHaveStyle({
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    })
  })
})
