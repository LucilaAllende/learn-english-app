interface FormatTextProps {
  text: string;
  addMargin?: boolean
};

export function FormatText({ text, addMargin = false }: FormatTextProps) {
  if (!text) return null;

  const parts = text.split(/(\*\*.*?\*\*)/g);

  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldContent = part.slice(2, -2);
          if (!boldContent.trim()) return null;
          return (
            <strong key={index} className={addMargin ? 'mx-1' : ''}>
              {boldContent}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}