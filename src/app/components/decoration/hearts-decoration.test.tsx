import { render, screen } from "@testing-library/react"
import { HeartsDecoration } from "./hearts-decoration"
import jest from "jest-mock" // Import jest to fix undeclared variable error

// Mock Math.random para hacer los tests predecibles
const mockMath = Object.create(global.Math)
mockMath.random = jest.fn()
global.Math = mockMath

// Mock Math.floor para mantener consistencia
const originalMathFloor = Math.floor
Math.floor = jest.fn().mockImplementation(originalMathFloor)

describe("HeartsDecoration", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    // Reset Math.random to return 0.5 by default
    ;(Math.random as jest.Mock).mockReturnValue(0.5)
    ;(Math.floor as jest.Mock).mockImplementation(originalMathFloor)
  })

  afterAll(() => {
    // Restore original Math
    global.Math = originalMathFloor.constructor()
  })

  describe("Rendering", () => {
    it("renders without crashing", () => {
      render(<HeartsDecoration />)
      const container = screen.getByRole("generic")
      expect(container).toBeInTheDocument()
    })

    it("applies default props correctly", () => {
      render(<HeartsDecoration />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("absolute", "pointer-events-none", "w-16", "h-16")
      expect(container).toHaveStyle({ opacity: "0.6" })
    })

    it("applies custom className", () => {
      const customClass = "custom-heart-class"
      render(<HeartsDecoration className={customClass} />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass(customClass)
    })

    it("applies custom opacity", () => {
      const customOpacity = 0.8
      render(<HeartsDecoration opacity={customOpacity} />)
      const container = screen.getByRole("generic")

      expect(container).toHaveStyle({ opacity: "0.8" })
    })
  })

  describe("Position handling", () => {
    it("applies top-left position correctly", () => {
      render(<HeartsDecoration position="top-left" />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("top-0", "left-0")
    })

    it("applies top-right position correctly", () => {
      render(<HeartsDecoration position="top-right" />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("top-0", "right-0")
    })

    it("applies bottom-left position correctly", () => {
      render(<HeartsDecoration position="bottom-left" />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("bottom-0", "left-0")
    })

    it("applies bottom-right position correctly", () => {
      render(<HeartsDecoration position="bottom-right" />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("bottom-0", "right-0")
    })

    it("handles random position selection", () => {
      // Mock Math.random to return 0.25 (should select index 1 -> "top-right")
      ;(Math.random as jest.Mock).mockReturnValue(0.25)

      render(<HeartsDecoration position="random" />)
      const container = screen.getByRole("generic")

      // Should have one of the position classes
      const hasPositionClass = container.classList.contains("top-0") || container.classList.contains("bottom-0")
      expect(hasPositionClass).toBe(true)
    })

    it("defaults to top-right for invalid position", () => {
      // This tests the default case in getPositionClass
      render(<HeartsDecoration position={"invalid" as any} />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("top-0", "right-0")
    })
  })

  describe("Size handling", () => {
    it("applies small size correctly", () => {
      render(<HeartsDecoration size="small" />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("w-8", "h-8")
    })

    it("applies medium size correctly (default)", () => {
      render(<HeartsDecoration size="medium" />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("w-16", "h-16")
    })

    it("applies large size correctly", () => {
      render(<HeartsDecoration size="large" />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("w-24", "h-24")
    })

    it("defaults to medium size for invalid size", () => {
      render(<HeartsDecoration size={"invalid" as any} />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("w-16", "h-16")
    })
  })

  describe("Heart index handling", () => {
    it("uses specific heartIndex when provided", () => {
      const heartIndex = 5
      render(<HeartsDecoration heartIndex={heartIndex} />)

      const heartDiv = screen.getByRole("generic").querySelector("div")
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_${heartIndex}.svg')`,
      })
    })

    it("uses heartIndex 0 when provided", () => {
      render(<HeartsDecoration heartIndex={0} />)

      const heartDiv = screen.getByRole("generic").querySelector("div")
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_0.svg')`,
      })
    })

    it("generates random heartIndex when not provided", () => {
      // Mock Math.random to return 0.5, which should give us index 10 (0.5 * 18 + 1 = 10)
      ;(Math.random as jest.Mock).mockReturnValue(0.5)

      render(<HeartsDecoration />)

      const heartDiv = screen.getByRole("generic").querySelector("div")
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_10.svg')`,
      })
    })

    it("generates heartIndex in range 1-18", () => {
      // Test minimum (Math.random returns 0)
      ;(Math.random as jest.Mock).mockReturnValue(0)
      render(<HeartsDecoration />)

      let heartDiv = screen.getByRole("generic").querySelector("div")
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_1.svg')`,
      })

      // Test maximum (Math.random returns 0.999...)
      ;(Math.random as jest.Mock).mockReturnValue(0.999)
      render(<HeartsDecoration />)

      heartDiv = screen.getAllByRole("generic")[1].querySelector("div")
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_18.svg')`,
      })
    })
  })

  describe("Background styling", () => {
    it("applies correct background styles", () => {
      render(<HeartsDecoration heartIndex={3} />)

      const heartDiv = screen.getByRole("generic").querySelector("div")
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_3.svg')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      })
    })

    it("has full width and height classes on inner div", () => {
      render(<HeartsDecoration />)

      const heartDiv = screen.getByRole("generic").querySelector("div")
      expect(heartDiv).toHaveClass("w-full", "h-full")
    })
  })

  describe("useEffect behavior", () => {
    it("updates when position prop changes", () => {
      const { rerender } = render(<HeartsDecoration position="top-left" />)
      let container = screen.getByRole("generic")
      expect(container).toHaveClass("top-0", "left-0")

      rerender(<HeartsDecoration position="bottom-right" />)
      container = screen.getByRole("generic")
      expect(container).toHaveClass("bottom-0", "right-0")
    })

    it("updates when heartIndex prop changes", () => {
      const { rerender } = render(<HeartsDecoration heartIndex={1} />)
      let heartDiv = screen.getByRole("generic").querySelector("div")
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_1.svg')`,
      })

      rerender(<HeartsDecoration heartIndex={5} />)
      heartDiv = screen.getByRole("generic").querySelector("div")
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_5.svg')`,
      })
    })
  })

  describe("Edge cases", () => {
    it("handles undefined heartIndex correctly", () => {
      render(<HeartsDecoration heartIndex={undefined} />)

      const heartDiv = screen.getByRole("generic").querySelector("div")
      // Should use random selection, we mocked Math.random to 0.5
      expect(heartDiv).toHaveStyle({
        backgroundImage: `url('/images/heart_10.svg')`,
      })
    })

    it("handles empty className", () => {
      render(<HeartsDecoration className="" />)
      const container = screen.getByRole("generic")

      expect(container).toHaveClass("absolute", "pointer-events-none")
    })

    it("handles zero opacity", () => {
      render(<HeartsDecoration opacity={0} />)
      const container = screen.getByRole("generic")

      expect(container).toHaveStyle({ opacity: "0" })
    })

    it("handles opacity greater than 1", () => {
      render(<HeartsDecoration opacity={1.5} />)
      const container = screen.getByRole("generic")

      expect(container).toHaveStyle({ opacity: "1.5" })
    })
  })
})
