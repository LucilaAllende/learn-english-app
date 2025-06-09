import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { TipItem } from "@/app/components/items/tip-item"

describe("TipItem component", () => {
  it("should render the provided text", () => {
    render(<TipItem text="Useful tip content!" />)
    expect(screen.getByText("Useful tip content!")).toBeInTheDocument()
  })

  it("should apply a rotation style within default range if not provided", () => {
    render(<TipItem text="Rotated tip" />)
    const textEl = screen.getByText("Rotated tip")
    let container: HTMLElement | null = textEl
    while (container && (!container.style || !container.style.transform)) {
      container = container.parentElement
    }
    const transformStyle = container?.style?.transform
    const rotationMatch = transformStyle?.match(/rotate\((-?\d+)deg\)/)
    expect(rotationMatch).not.toBeNull()
    const angle = rotationMatch ? parseInt(rotationMatch[1], 10) : null
    if (angle !== null) {
      expect(angle).toBeGreaterThanOrEqual(-5)
      expect(angle).toBeLessThanOrEqual(4)
    }
  })


  it("should apply the custom rotation if provided", () => {
    render(<TipItem text="Custom rotated tip" rotation={12} />)
    const textEl = screen.getByText("Custom rotated tip")
    let container: HTMLElement | null = textEl
    while (container && (!container.style || !container.style.transform)) {
      container = container.parentElement
    }
    const transformStyle = container?.style?.transform
    expect(transformStyle).toBe("rotate(12deg)")
  })


  it("should apply random color classes", () => {
    render(<TipItem text="Colorful tip" />)
    const textEl = screen.getByText("Colorful tip")
    let container: HTMLElement | null = textEl
    while (container && !container.className.match(/bg-|border-/)) {
      container = container.parentElement
    }
    expect(container?.className).toMatch(/bg-(yellow|blue|pink|green|purple)-/)
    expect(container?.className).toMatch(/border-(yellow|blue|pink|green|purple)-/)
  })


  it("should include the 💡 emoji icon", () => {
    render(<TipItem text="Check the light!" />)
    expect(screen.getByText("💡")).toBeInTheDocument()
  })

  it("should render image when image prop is valid", () => {
    render(<TipItem text="Tip with image" image="/img/tip.png" />)
    const img = screen.getByRole("img", { name: "Tip visual" })
    expect(img).toHaveAttribute("src", "/img/tip.png")
  })

  it("should not render image if image is 'url/image'", () => {
    render(<TipItem text="Ignored image" image="url/image" />)
    const images = screen.queryAllByRole("img")
    expect(images).toHaveLength(0)
  })

  it("should apply custom className if provided", () => {
    render(<TipItem text="Styled tip" className="custom-class" />)
    const textEl = screen.getByText("Styled tip")
    let container: HTMLElement | null = textEl
    while (container && !container.classList.contains("custom-class")) {
      container = container.parentElement
    }
    expect(container).toHaveClass("custom-class")
  })
})
