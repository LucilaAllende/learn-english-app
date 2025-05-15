interface TableRow {
  subject: string
  conjugation: string
  example: string
}

export interface ConjugationTableProps {
  title: string;
  subtitle?: string;
  description?: string;
  columns: string[];
  rows: TableRow[];
}

export default function ConjugationTable({ title, subtitle, description, columns, rows }: ConjugationTableProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-subtitle text-white mb-2">
        {title} {subtitle && <span className="text-gray-300">{subtitle}</span>}
      </h3>

      {description && <p className="text-gray-300 mb-4 font-text">{description}</p>}

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {columns.map((column, index) => (
                <th key={index} className="border border-gray-600 bg-gray-800 text-left p-3 text-white font-subtitle">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-table">
            {rows.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}>
                <td className="border border-gray-600 p-3 text-white">{row.subject}</td>
                <td className="border border-gray-600 p-3 text-white">{row.conjugation}</td>
                <td className="border border-gray-600 p-3 text-white">{row.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
