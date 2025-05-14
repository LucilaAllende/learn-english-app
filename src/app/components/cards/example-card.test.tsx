import React from 'react';
import { render, screen } from '@testing-library/react';
import { ExampleCard } from './example-card';

describe('ExampleCard', () => {
  const props = {
    title: 'Título de Ejemplo',
    examples: ['Ejemplo 1', 'Ejemplo 2', 'Ejemplo 3'],
    color: 'blue',
  };

  it('should render the title with the correct color', () => {
    render(<ExampleCard {...props} />);
    const titleElement = screen.getByRole('heading', { name: 'Título de Ejemplo', level: 3 });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle({ color: 'blue' });
  });

  it('should render the list of examples correctly', () => {
    render(<ExampleCard {...props} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(props.examples.length);
    props.examples.forEach((example) => {
      expect(screen.getByText(example)).toBeInTheDocument();
    });
  });

  it('should apply the base style classes', () => {
    render(<ExampleCard {...props} />);
    const cardElement = screen.getByText('Título de Ejemplo').closest('div')!;
    expect(cardElement).toHaveClass('p-3');
    expect(cardElement).toHaveClass('rounded-lg');
    expect(cardElement).toHaveClass('border');
    expect(cardElement).toHaveClass('border-gray-200');
  });

  it('should render a diferent title and diferent examples', () => {
    const newProps = {
      title: 'Otro Título',
      examples: ['Uno', 'Dos'],
      color: 'green',
    };
    render(<ExampleCard {...newProps} />);
    expect(screen.getByRole('heading', { name: 'Otro Título', level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Otro Título', level: 3 })).toHaveStyle({ color: 'green' });
    const newListItems = screen.getAllByRole('listitem');
    expect(newListItems).toHaveLength(newProps.examples.length);
    newProps.examples.forEach((example) => {
      expect(screen.getByText(example)).toBeInTheDocument();
    });
  });

  it('should render an empty list if there are no examples', () => {
    render(<ExampleCard {...props} examples={[]} />);
    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(list.childNodes).toHaveLength(0);
  });
});