// Utilidad para extraer corazones individuales del SVG original
export interface HeartData {
  id: string
  path: string
  transform?: string
  fill?: string
  viewBox?: string
}

// Corazones extraídos del SVG original
export const heartsFromOriginalSVG: HeartData[] = [
  {
    id: "heart-original-1",
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "#ff69b4",
    viewBox: "0 0 24 24",
  },
  {
    id: "heart-original-2",
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "#ff1493",
    viewBox: "0 0 24 24",
    transform: "scale(0.8)",
  },
  {
    id: "heart-original-3",
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "#ff6b9d",
    viewBox: "0 0 24 24",
    transform: "scale(1.2)",
  },
]

// Función para obtener un corazón aleatorio del SVG original
export function getRandomHeartFromOriginal(): HeartData {
  const randomIndex = Math.floor(Math.random() * heartsFromOriginalSVG.length)
  return heartsFromOriginalSVG[randomIndex]
}

// Función para obtener múltiples corazones aleatorios
export function getRandomHeartsFromOriginal(count: number): HeartData[] {
  const hearts: HeartData[] = []
  for (let i = 0; i < count; i++) {
    hearts.push(getRandomHeartFromOriginal())
  }
  return hearts
}

// Función para obtener un corazón específico por ID
export function getHeartFromOriginalById(id: string): HeartData | undefined {
  return heartsFromOriginalSVG.find((heart) => heart.id === id)
}
