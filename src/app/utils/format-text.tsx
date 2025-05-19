interface FormatTextProps {
  text: string
}

export function FormatText({ text }: FormatTextProps) {
  if (!text) return null

  const parts = text.split(/(\*\*.*?\*\*)/g)

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          const boldText = part.slice(2, -2)
          return <strong key={index}>{boldText}</strong>
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}
