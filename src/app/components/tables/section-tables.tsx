import TablaConjugacion from "./conjugation-table"

interface ConjugationTableData {
  id: string
  title: string
  subtitle?: string
  description?: string
  columns: string[]
  rows: {
    subject: string
    conjugation: string
    example: string
  }[]
}

interface SectionTablesProps {
  tables: ConjugationTableData[]
}

export default function SectionTables({ tables }: SectionTablesProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h2 className="text-2xl font-title text-white mb-6">Tablas de Conjugación</h2>

      <div className="space-y-8">
        {tables.map((table) => (
          <TablaConjugacion
            key={table.id}
            title={table.title}
            subtitle={table.subtitle}
            description={table.description}
            columns={table.columns}
            rows={table.rows}
          />
        ))}
      </div>
    </div>
  )
}