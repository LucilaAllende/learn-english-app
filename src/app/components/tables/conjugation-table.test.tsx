import { render, screen } from '@testing-library/react';
import ConjugationTable from './conjugation-table';
import '@testing-library/jest-dom';

describe('ConjugationTable', () => {
  const baseProps = {
    title: 'Presente Simple',
    subtitle: '(Affirmative)',
    description: 'Uso del presente simple en afirmaciones.',
    columns: ['Sujeto', 'Conjugación', 'Ejemplo'],
    rows: [
      { subject: 'I', conjugation: 'work', example: 'I work every day.' },
      { subject: 'He', conjugation: 'works', example: 'He works on weekends.' },
    ],
  };

  it('should render the title and subtitle', () => {
    render(<ConjugationTable {...baseProps} />);
    expect(screen.getByText('Presente Simple')).toBeInTheDocument();
    expect(screen.getByText('(Affirmative)')).toBeInTheDocument();
  });

  it('should render the description if provided', () => {
    render(<ConjugationTable {...baseProps} />);
    expect(screen.getByText(baseProps.description)).toBeInTheDocument();
  });

  it('should not render the description if not provided', () => {
    const propsWithoutDescription = { ...baseProps, description: undefined };
    render(<ConjugationTable {...propsWithoutDescription} />);
    expect(screen.queryByText('Uso del presente simple en afirmaciones.')).not.toBeInTheDocument();
  });

  it('should render the correct column headers', () => {
    render(<ConjugationTable {...baseProps} />);
    baseProps.columns.forEach((col) => {
      expect(screen.getByRole('columnheader', { name: col })).toBeInTheDocument();
    });
  });

  it('should render all table rows with correct data', () => {
    render(<ConjugationTable {...baseProps} />);
    baseProps.rows.forEach((row) => {
      expect(screen.getByText(row.subject)).toBeInTheDocument();
      expect(screen.getByText(row.conjugation)).toBeInTheDocument();
      expect(screen.getByText(row.example)).toBeInTheDocument();
    });
  });

  it('should render an empty table body if there are no rows', () => {
    render(<ConjugationTable {...baseProps} rows={[]} />);
    const rows = screen.queryAllByRole('row');
    // 1 header row + 0 body rows
    expect(rows.length).toBe(1);
  });
});
