import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { ItemUses } from "./item-uses"

describe("ItemUses component", () => {
  it("should renders the title with correct text and style", () => {
    render(<ItemUses title="Expresar rutina" example="I wake up at 7am." />)
    const titleElement = screen.getByText(/• Expresar rutina/i)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement).toHaveClass("font-subtitle font-semibold text-[#264653]")
  })

  it("should renders the example in quotes with correct style", () => {
    render(<ItemUses title="Expresar acciones" example="He plays football." />)
    const exampleElement = screen.getByText(/“He plays football.”/)
    expect(exampleElement).toBeInTheDocument()
    expect(exampleElement).toHaveClass("font-example text-gray-600 italic pl-4")
  })

  it("should renders both title and example properly", () => {
    render(<ItemUses title="Describir hábitos" example="She drinks tea every morning." />)
    expect(screen.getByText(/• Describir hábitos/)).toBeInTheDocument()
    expect(screen.getByText(/“She drinks tea every morning.”/)).toBeInTheDocument()
  })
})
