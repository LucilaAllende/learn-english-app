import { VerbTenseCard } from "./components/cards/verb-tense-card"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8f5f2] p-4 md:p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl md:text-5xl font-title text-[#2a9d8f] text-center tracking-wide">
          Mis Apuntes de Tiempos Verbales
        </h1>
        <div className="w-32 h-1 bg-[#e76f51] mx-auto mt-2 rounded-full"></div>
      </header>

      <main className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-md border-2 border-[#e0e0e0]">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-subtitle text-[#264653] mb-4 flex items-center">
            <span className="text-[#2a9d8f] mr-2">✏️</span>
            Índice de Tiempos Verbales
          </h2>
          <p className="font-text text-lg text-gray-700 mb-6">
            Haz clic en cualquier tiempo verbal para ver su estructura, usos y ejemplos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VerbTenseCard
            title="Presente Simple"
            description="Acciones habituales y verdades generales"
            color="#2a9d8f"
            href="/tiempos/presente-simple"
          />

          <VerbTenseCard
            title="Presente Continuo"
            description="Acciones que ocurren en este momento"
            color="#e9c46a"
            href="/tiempos/presente-continuo"
          />

          <VerbTenseCard
            title="Pasado Simple"
            description="Acciones completadas en el pasado"
            color="#f4a261"
            href="/tiempos/pasado-simple"
          />

          <VerbTenseCard
            title="Pasado Continuo"
            description="Acciones en progreso en el pasado"
            color="#e76f51"
            href="/tiempos/pasado-continuo"
          />

          <VerbTenseCard
            title="Futuro Simple"
            description="Acciones que ocurrirán en el futuro"
            color="#264653"
            href="/tiempos/futuro-simple"
          />

          <VerbTenseCard
            title="Presente Perfecto"
            description="Conexión entre pasado y presente"
            color="#2a9d8f"
            href="/tiempos/presente-perfecto"
          />
        </div>
      </main>
    </div>
  )
}
