interface ExampleCardProps {
  title: string
  examples: string[]
  color: string
}

export function ExampleCard({ title, examples, color }: ExampleCardProps) {
  return (
    <div className="p-3 rounded-lg border border-gray-200">
      <h3 className="text-lg font-subtitle mb-2 text-center" style={{ color }}>
        {title}
      </h3>
      <ul className="space-y-1 font-example text-sm">
        {examples.map((example, index) => (
          <li key={index} className="text-gray-700">
            {example}
          </li>
        ))}
      </ul>
    </div>
  )
}
