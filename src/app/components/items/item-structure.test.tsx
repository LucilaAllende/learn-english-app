import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ItemStructure } from "./item-structure"

describe("ItemStructure component", () => {
  it("renders affirmative type with correct label and color", () => {
    render(<ItemStructure type="affirmative">Hello</ItemStructure>)
    const label = screen.getByText("Afirmativo:")
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass("font-bold text-[#2a9d8f]")
    expect(screen.getByText("Hello")).toBeInTheDocument()
  })

  it("renders negative type with correct label and color", () => {
    render(<ItemStructure type="negative">Goodbye</ItemStructure>)
    const label = screen.getByText("Negativo:")
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass("font-bold text-[#e76f51]")
    expect(screen.getByText("Goodbye")).toBeInTheDocument()
  })

  it("renders interrogative type with correct label and color", () => {
    render(<ItemStructure type="interrogative">What?</ItemStructure>)
    const label = screen.getByText("Interrogativo:")
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass("font-bold text-[#e9c46a]")
    expect(screen.getByText("What?")).toBeInTheDocument()
  })
})
