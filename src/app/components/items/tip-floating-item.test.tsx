import React from "react"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { TipsFloating } from "./tip-floating-item"

describe("TipsFloating component", () => {
  it("should renders nothing if tips is undefined", () => {
    const { container } = render(<TipsFloating tips={undefined as any} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("should renders nothing if tips is an empty array", () => {
    const { container } = render(<TipsFloating tips={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it("should renders one element per tip", () => {
    const tips = [
      { text: "Tip A" },
      { text: "Tip B", image: "img.png" },
      { text: "Tip C" },
    ]
    render(<TipsFloating tips={tips} />)

    tips.forEach(tip => {
      expect(screen.getByText(tip.text)).toBeInTheDocument()
    })
  })

  it("should apply correct position classes in order", () => {
    const tips = Array.from({ length: 6 }, (_, i) => ({ text: `Tip ${i + 1}` }))
    render(<TipsFloating tips={tips} />)
    const wrapperDivs = Array.from(document.querySelectorAll("div.absolute")).filter(div =>
      [
        "top-4 right-4",
        "top-1/3 right-4",
        "bottom-1/4 right-4",
        "top-4 left-4",
        "top-1/3 left-4",
        "bottom-1/4 left-4",
      ].some(pos => div.className.includes(pos))
    )

    const expectedPositions = [
      "top-4 right-4",
      "top-1/3 right-4",
      "bottom-1/4 right-4",
      "top-4 left-4",
      "top-1/3 left-4",
      "bottom-1/4 left-4",
    ]

    expect(wrapperDivs.length).toBe(tips.length)

    wrapperDivs.forEach((wrapper, index) => {
      expect(wrapper).toHaveClass("absolute")
      expectedPositions[index].split(" ").forEach(cls => {
        expect(wrapper).toHaveClass(cls)
      })
    })
  })

  it("should renders tip text visibly", () => {
    const tips = [
      { text: "Visible Tip 1" },
      { text: "Visible Tip 2" },
    ]
    render(<TipsFloating tips={tips} />)

    tips.forEach(tip => {
      const el = screen.getByText(tip.text)
      expect(el).toBeVisible()
    })
  })

  it("should pass a random rotation between -8 and 7", () => {
    const tips = [{ text: "Rotation Test" }]
    render(<TipsFloating tips={tips} />)

    const el = screen.getByText("Rotation Test")
    const rotationStyle = el.getAttribute("style")

    if (rotationStyle) {
      const match = rotationStyle.match(/rotate\(([-\d.]+)deg\)/)
      if (match) {
        const value = parseFloat(match[1])
        expect(value).toBeGreaterThanOrEqual(-8)
        expect(value).toBeLessThanOrEqual(7)
      }
    }
  })
})
