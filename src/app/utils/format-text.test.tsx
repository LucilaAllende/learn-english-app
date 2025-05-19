import { render, screen } from '@testing-library/react'
import { FormatText } from './format-text'

describe('FormatText', () => {
  it('should render plain text without bold', () => {
    render(<FormatText text="Texto sin negrita" />)
    expect(screen.getByText('Texto sin negrita')).toBeInTheDocument()
  })

  it('should render text with one word in bold', () => {
    const { container } = render(<FormatText text="Esto es **importante** para todos" />)
    expect(container).toHaveTextContent('Esto es importante para todos')
    expect(container.querySelector('strong')).toHaveTextContent('importante')
  })

  it('should render some parts in bold', () => {
    render(<FormatText text="**Uno**, **dos**, **tres**" />)
    expect(screen.getByText('Uno').tagName).toBe('STRONG')
    expect(screen.getByText('dos').tagName).toBe('STRONG')
    expect(screen.getByText('tres').tagName).toBe('STRONG')
  })

  it('should return null if the text is empty', () => {
    const { container } = render(<FormatText text="" />)
    expect(container.firstChild).toBeNull()
  })

  it('should render correctly if text starts or ends with bold', () => {
    const { container: con1 } = render(<FormatText text="**Hola** mundo" />)
    expect(con1).toHaveTextContent('Hola mundo')
    expect(con1.querySelector('strong')).toHaveTextContent('Hola')

    const { container: con2 } = render(<FormatText text="Saludos **amigos**" />)
    expect(con2).toHaveTextContent('Saludos amigos')
    expect(con2.querySelector('strong')).toHaveTextContent('amigos')
  })

  it('should handle text without bold markers', () => {
    render(<FormatText text="Texto completamente normal." />)
    expect(screen.getByText('Texto completamente normal.')).toBeInTheDocument()
  })

  it('should ignore incomplete markers', () => {
    render(<FormatText text="Esto es *incorrecto**" />)
    expect(screen.getByText('Esto es *incorrecto**')).toBeInTheDocument()
  })
})
