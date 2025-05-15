import { render, screen } from '@testing-library/react';
import { VerbTenseCard } from './verb-tense-card';
import '@testing-library/jest-dom';

describe('VerbTenseCard', () => {
  const props = {
    title: 'Present Simple',
    description: 'Used for habitual actions and general truths.',
    color: 'teal',
    href: '/tenses/present-simple',
  };

  it('should render the title with the correct color', () => {
    render(<VerbTenseCard {...props} />);
    const titleElement = screen.getByRole('heading', { name: props.title });
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveStyle({ color: props.color });
  });

  it('should render the description text', () => {
    render(<VerbTenseCard {...props} />);
    const descriptionElement = screen.getByText(props.description);
    expect(descriptionElement).toBeInTheDocument();
  });

  it('should render a link with the correct href', () => {
    render(<VerbTenseCard {...props} />);
    const link = screen.getByRole('link', { name: /present simple/i });
    expect(link).toHaveAttribute('href', props.href);
  });

  it('should render the ChevronRight icon', () => {
    render(<VerbTenseCard {...props} />);
    const icon = screen.getByTestId('chevron-icon');
    expect(icon).toBeInTheDocument();
  });

  it('should apply base style classes to the link', () => {
    render(<VerbTenseCard {...props} />);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('block', 'p-4', 'border-2', 'border-gray-200', 'rounded-lg');
  });
});