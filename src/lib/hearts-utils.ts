// Utilidad para extraer corazones individuales del SVG
export interface HeartData {
  id: string
  path: string
  transform?: string
  fill?: string
}

// Datos de los corazones extraídos del SVG original
export const heartsData: HeartData[] = [
  {
    id: "heart-1",
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "#ff6b6b",
  },
  {
    id: "heart-2",
    path: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3z",
    fill: "#ff8e8e",
  },
  {
    id: "heart-3",
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "#ffb3b3",
    transform: "scale(0.8)",
  },
  {
    id: "heart-4",
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "#ffc0c0",
    transform: "scale(1.2)",
  },
  {
    id: "heart-5",
    path: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
    fill: "#ff9999",
  },
]

// Función para obtener un corazón aleatorio
export function getRandomHeart(): HeartData {
  const randomIndex = Math.floor(Math.random() * heartsData.length)
  return heartsData[randomIndex]
}

// Función para obtener múltiples corazones aleatorios
export function getRandomHearts(count: number): HeartData[] {
  const hearts: HeartData[] = []
  for (let i = 0; i < count; i++) {
    hearts.push(getRandomHeart())
  }
  return hearts
}

// Función para obtener un corazón específico por ID
export function getHeartById(id: string): HeartData | undefined {
  return heartsData.find((heart) => heart.id === id)
}
