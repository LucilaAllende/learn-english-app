import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ConjugationItem } from './conjugation-item'

describe('ConjugationItem Component', () => {
  const verb = 'hablar'
  const conjugations = [
    { person: 'yo', conjugation: 'hablo' },
    { person: 'tú', conjugation: 'hablas' },
    { person: 'él/ella', conjugation: 'habla' },
  ]

  it('should render the verb correctly', () => {
    render(<ConjugationItem verb={verb} conjugations={conjugations} />)
    const verbElement = screen.getByText(verb)
    expect(verbElement).toBeInTheDocument()
  })

  it('should render all conjugation persons and conjugations', () => {
    render(<ConjugationItem verb={verb} conjugations={conjugations} />)
    conjugations.forEach(({ person, conjugation }) => {
      expect(screen.getByText(person)).toBeInTheDocument()
      expect(screen.getByText(conjugation)).toBeInTheDocument()
    })
  })

  it('should render conjugation items with correct structure and classes', () => {
    render(<ConjugationItem verb={verb} conjugations={conjugations} />)
    const personElements = screen.getAllByText((content, element) => {
      if (!element) return false;
      const hasFontSubtitleClass = element?.classList.contains('font-subtitle');
      const isPerson = conjugations.some(c => c.person === content);
      return hasFontSubtitleClass && isPerson;
    });
    expect(personElements.length).toBe(conjugations.length);
  });
})

