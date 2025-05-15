import { render, screen } from '@testing-library/react';
import SectionTables from './section-tables';
import '@testing-library/jest-dom';

jest.mock('./conjugation-table', () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => <div data-testid="tabla-mock">{title}</div>,
}));

describe('SectionTables', () => {
  const mockTables = [
    {
      id: '1',
      title: 'Simple Present',
      subtitle: '(Affirmative)',
      description: 'Use of the simple present.',
      columns: ['Subject', 'Verb', 'Example'],
      rows: [
        { subject: 'I', conjugation: 'work', example: 'I work.' },
        { subject: 'He', conjugation: 'works', example: 'He works.' },
      ],
    },
    {
      id: '2',
      title: 'Simple Past',
      columns: ['Subject', 'Verb', 'Example'],
      rows: [
        { subject: 'I', conjugation: 'worked', example: 'I worked.' },
        { subject: 'She', conjugation: 'worked', example: 'She worked.' },
      ],
    },
  ];

  it('should render the section title', () => {
    render(<SectionTables tables={mockTables} />);
    expect(screen.getByText('Tablas de Conjugación')).toBeInTheDocument();
  });

  it('should render one TablaConjugacion per item in tablas', () => {
    render(<SectionTables tables={mockTables} />);
    const tablaElements = screen.getAllByTestId('tabla-mock');
    expect(tablaElements).toHaveLength(mockTables.length);
  });

  it('should render each table title inside TablaConjugacion', () => {
    render(<SectionTables tables={mockTables} />);
    mockTables.forEach((tabla) => {
      expect(screen.getByText(tabla.title)).toBeInTheDocument();
    });
  });

  it('should render nothing if no tables are provided', () => {
    render(<SectionTables tables={[]} />);
    expect(screen.queryByTestId('tabla-mock')).not.toBeInTheDocument();
  });
});